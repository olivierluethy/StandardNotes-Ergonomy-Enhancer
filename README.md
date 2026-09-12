<div align="center">
  <img src="icons/icon.png" alt="StandardNotes Ergonomy Enhancer logo" width="140" />
  <h1>StandardNotes Ergonomy Enhancer</h1>
  <p><b>A one-click sidebar toggle for a distraction-free StandardNotes.</b><br/>A lightweight browser extension that adds a modern hamburger button to hide or reveal the StandardNotes sidebar and reclaim screen space.</p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
    <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
    <img alt="Browser Extension" src="https://img.shields.io/badge/Browser-Extension-4285F4?logo=googlechrome&logoColor=white">
  </p>
</div>

---

This extension is designed to enhance the user experience of the [StandardNotes](https://app.standardnotes.com) web application by providing a clean, interactive button that allows users to toggle the visibility of the sidebar and adjust the page layout dynamically. The extension improves workflow efficiency by offering a quick way to hide or reveal the sidebar with a smooth user interface.

---

## Purpose & Motivation

The main motivation behind this extension is to improve the usability of StandardNotes by adding an intuitive and easily accessible toggle button to control the sidebar visibility. Many users prefer a clutter-free workspace, and the ability to hide or show the sidebar with a single click allows them to focus better on their notes. 

This extension enhances the app with a polished modern UI component (a hamburger-style button) that not only controls the sidebar but also includes interactive animations and tooltips, providing a smooth and engaging experience.

---

## Features

- **Sidebar Toggle**: Easily hide or show the sidebar (left panel) in StandardNotes with a single click.
- **Responsive Design**: The extension adjusts the page layout dynamically when toggling the sidebar, ensuring a smooth experience.
- **Interactive Button**: The toggle button includes hover effects and a tooltip for better interactivity.
- **Animated Tooltip**: A smooth, animated tooltip appears below the button on hover, guiding users about its functionality.
- **Modern UI**: The extension uses a clean, modern design that aligns with the overall aesthetics of StandardNotes.

---

## How It Works

### **Button Functionality**

The button created by this extension functions as a sidebar toggle:
1. **Initially**, the sidebar is visible, and the button shows the default "Close Sidenav" tooltip.
2. **When clicked**, the button will hide the sidebar (via `display: none`), remove certain classes from the app to adjust the layout, and set the height of the editor column to `100vh` for a full-screen experience.
3. **When clicked again**, the sidebar reappears, the app layout is restored to its previous state, and the editor column height is reset.

### **Button Styling & Animation**

- The button has a **hamburger-style menu** with three white bars arranged vertically.
- It changes color when hovered, with a smooth animation effect (`transform: translateY(-2px)`), giving it a "floating" effect when interacted with.
- The button has a **tooltip** that appears below it when the mouse hovers over it. The tooltip provides a description of the button's functionality (e.g., "Close Sidenav" or "Open Sidenav").

### **Hover Effects**

- **Hover**: The button changes color (from `#007bff` to `#0056b3`), and it subtly raises (via `transform: translateY(-2px)`), making it feel interactive.
- **Focus**: The button receives a box shadow effect, making it stand out when focused.
- **Tooltip Animation**: The tooltip fades in and out smoothly on hover, appearing directly below the button.

### **JavaScript Logic**

- The button is inserted into the page dynamically, ensuring it is always present and only created once, preventing multiple instances.
- The sidebar toggle functionality is controlled via a simple flag (`isToggled`) that tracks whether the sidebar is currently hidden or visible.
- **SetInterval** is used to check and create the button regularly if it doesn't exist, ensuring it's available even after page reloads or changes.

---

## Code Breakdown

### **HTML Structure**

The extension adds a **button element** to the `editor-title-bar` section of the StandardNotes app. The button consists of:
- Three `<span>` elements that represent the hamburger menu.
- A **tooltip** element that appears below the button when hovered.

### **CSS Styling (Inline)**

Inline styles are applied to the button and tooltip to ensure:
- **Button Styling**: The button is styled with a blue background (`#007bff`), white text, padding, rounded corners, and subtle hover effects.
- **Tooltip Styling**: The tooltip is positioned below the button and has a fade-in/fade-out animation when hovered. It's styled with a dark background (`#333`) and white text.

### **JavaScript Logic**

1. **Button Creation**: The button is created dynamically and inserted into the DOM if it doesn't already exist. The button includes a hover tooltip that appears when the user interacts with the button.
2. **Sidebar Toggling**: The `click` event listener toggles the visibility of the sidebar and adjusts the page layout. It checks the current state and changes the layout accordingly.
3. **Regular Check**: The `setInterval` function ensures the button is recreated if it's ever removed or missing, making it resilient to page updates.

---

## Usage

### 1. **How to Use the Extension**
- Simply install the JavaScript code provided in the script section of your browser's console or as part of a browser extension (like Tampermonkey).
- Upon page load, the button will appear in the `editor-title-bar` section.
- **Click the button** to toggle the sidebar visibility.
- Hover over the button to see the tooltip with additional information.

### 2. **How to Integrate This into a Custom Browser Extension**

If you're looking to turn this code into a full-fledged browser extension for Chrome or another Chromium-based browser:
1. Create a new folder for your extension.
2. Inside the folder, create the following files:
   - `manifest.json` (extension metadata)
   - `popup.html` (HTML structure)
   - `popup.js` (JavaScript code that includes the button toggle functionality)
3. Ensure the extension loads the StandardNotes URL (`app.standardnotes.com`).
4. Customize the styling or behavior as needed.

---

## Example of `manifest.json`

```json
{
  "manifest_version": 3,
  "name": "StandardNotes Sidebar Toggle",
  "version": "1.0",
  "permissions": ["activeTab"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://app.standardnotes.com/*"],
      "js": ["popup.js"]
    }
  ],
  "action": {
    "default_popup": "popup.html"
  }
}
````

---

## Why This Extension Was Created

The purpose of this extension is to improve the usability and navigation of StandardNotes by allowing users to easily toggle the visibility of the sidebar. It was created to streamline the workflow and provide a cleaner user interface. The extension provides a non-intrusive way of interacting with the app while ensuring a modern and professional design.

The sidebar toggle feature is particularly useful for users who need more screen real estate or prefer a distraction-free workspace while using StandardNotes.

---

## Conclusion

This extension enhances the usability of StandardNotes with a simple yet powerful sidebar toggle, modern UI interactions, and smooth animations. It provides a more enjoyable and efficient user experience for anyone who wants to hide or show the sidebar without cluttering the workspace.

Feel free to modify and extend the functionality to suit your specific needs!

---

## Acknowledgments

* [StandardNotes](https://standardnotes.com) for providing an excellent and secure note-taking platform.
* This extension is open-source and designed for personal use or contribution to others.

---

## License

Released under the [MIT License](LICENSE) © 2026 Olivier Lüthy. You're free to use, modify and distribute this
software, including commercially, as long as the copyright notice and license are included.

## Author

Built by **Olivier Lüthy** — [GitHub](https://github.com/olivierluethy).

This should serve as a comprehensive guide for both end users and developers who want to understand, use, or contribute to the extension.