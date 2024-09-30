const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const postsDir = './_posts';
const categoryMap = new Map();

// Function to extract categories from frontmatter
function extractCategories(frontmatter) {
    const parsedFrontmatter = yaml.load(frontmatter);
    return parsedFrontmatter.categories || [];
}

// Read all files in the _posts directory
fs.readdir(postsDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file) === '.md' || path.extname(file) === '.markdown') {
            const filePath = path.join(postsDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Extract frontmatter
            const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
            if (frontmatterMatch) {
                const categories = extractCategories(frontmatterMatch[1]);
                categories.forEach(category => {
                    if (categoryMap.has(category)) {
                        categoryMap.set(category, categoryMap.get(category) + 1);
                    } else {
                        categoryMap.set(category, 1);
                    }
                });
            }
        }
    });

    // Print results
    console.log('Categories used across all posts:');
    for (const [category, count] of categoryMap.entries()) {
        console.log(`${category}: ${count}`);
    }
    console.log(`\nTotal number of unique categories: ${categoryMap.size}`);
});
