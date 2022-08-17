---
title: "Mobile Application Design Best Practices: Keegan Jones and Tim Van Damme"
layout: post
date: 2011-01-10T09:00:54+00:00
author: Mario Vellandi
description:
  - Great presentation on mobile application design, graphical user interfaces, platforms, web versus native apps, focus and context, usability, and testing
categories:
  - design
tags:
  - development
  - interaction
  - interface
  - mobile application
  - platform
  - software
---
[Video Link for Email/Other Subscribers &#8211; 35.5min](http://www.vimeo.com/17077298)

Great presentation on mobile application design from Keegan Jones of Gowalla, and interface designer Tim Van Damme.

__Presentation Notes__

  * In 3-5 years, mobile net usage will surpass that of desktop.
  * Mobile devices are with us everywhere and are multi-sensory: seeing (camera, screen), tactile (direct object manipulation with touchscreens, buttons), vocal (microphone, speaker). Additionally, location awareness (GPS) and passive communication (NFC) allow additional interaction and use affordances that a laptop cannot.
  * 1 million touch phones sold per day
  * **Mindset #1**: Microtasking

    IxD tip: Figure out what the primary action is and optimize for that.
  * **Mindset #2**: Locality

    IxD options: Use the GPS capability to inform people of the environment around them, connect them to other people, and let them interact within a single or multi-player &#8220;game&#8221; (metaphors: scavenger hunts, marathons).
  * **Mindset #3**: Entertainment (media content, games)
  * Commonality among apps: Meant to be used within a short amount of time, not for extended periods. If people&#8217;s behavior is such that they&#8217;ll open and close an app on a whim to do other digital (check email), vocal (answer phone), or physical (exit train) tasks, then app developers should focus on what they can do best, and design around that.
  * Provide extra and advanced interaction options through secondary menus/screens which can be tapped open & closed. Analogous to &#8220;advanced search&#8221; on Google homepage, or changing character weapons, magic, or health in video games by pausing and going to the options screen(s).
  * **Tap targets**

    Important to think about
      * Size matters (our fingers sometimes touch the wrong button).
      * Recommended button minimum size is 44 pixels (high or wide).
      * Like in HTML, the clickable area of a button can be larger than the perceived affordance area (what we believe is clickable).
  * If converting a website to a mobile application, a few preliminary design approaches include:
      * Creating a list of all the destinations and/or features, then eliminate most of them to leave only the most commonly used/visited.
      * Sketching! 🙂
  * Pixel density is a real issue, since newer phones have higher resolutions. Therefore, it&#8217;s recommended to design for the highest resolution available first (like the iPhone 4), then resize the graphics/icons down as necessary. Use vector graphics and shapes (groups) for easy scaling.
  * Create a scratch file that houses all your assets used in the application.
  * Save button graphic filesizes by compressing the visual width, leaving a single pixel line in the center, then stretching the asset in display runtime to the desired size.
  * Constantly ask users for feedback since they see things you can&#8217;t, because of the curse of knowledge.
  * How do you choose between designing a web app versus a native app?
      * __Native__: There&#8217;s a lot of platforms you may want to support. Application speed is faster, and users can traverse faster too.

        Unique abilities include charging for download through stores, using the GPS, file system, offline access, built-in marketing<br />
      * **Web:** Nice thing is that no updates are necessary.
  * The current concept of an app is native, in that you don&#8217;t go to a website then create a bookmark. Rather, you go to the app store or directory.
  * The best user experience with apps will be tailored to the specific platform on which it&#8217;s used. Porting an app from one platform to another can cause confusion if common GUI elements are in conflict. Example: the GUI differences between Mac and PC.
  * Therefore, it&#8217;s a good idea to pick a single platform to focus your primary development efforts and learning curve, then develop similar or leaner applications for other mobile platforms.
  * **Takeaways:

**  
      * Keep it simple
      * Think about context
      * Use finger-friendly design
      * Test in real-life conditions
      * Pick a flagship platform
