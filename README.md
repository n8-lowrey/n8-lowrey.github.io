# Nathan Lowrey — Engineering Portfolio

A seven-page static website for GitHub Pages. Obsidian Minimal theme, no animations or external dependencies.

## Publish
Upload all seven HTML files plus `style.css` and `script.js` to the root of the `n8-lowrey.github.io` repository. Commit changes. GitHub Pages should publish automatically.

## Pages
Home, About, Projects, Research, Leadership, Honors, Resume.

## Updating
Edit the text in the corresponding HTML file. The navigation is repeated in each HTML file; if you rename a page, update its links in all seven files. When ready to replace Honors with Volunteering, create `volunteering.html`, update navigation, and preserve `honors.html` for academic records.

## Before sharing widely
Review all text for accuracy, add actual project photos and documentation, and upload an approved resume PDF if desired. No stock photos or placeholder download links are included.

## About portrait update
The original full-resolution `portrait.png` is preserved without any retouching or color changes. The About page displays it in a 4:5 frame using CSS `object-fit: cover`, with the crop positioned toward the upper body. To adjust the crop, edit `.portrait-frame img` in `style.css`.
