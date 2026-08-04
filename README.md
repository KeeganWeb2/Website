# A Question For You

A small one-page site: a personal note sealed like a letter, a big "Yes"
button, and a "No" button that won't be caught. Plain HTML/CSS/JS — no
build step, no dependencies — so it deploys straight to GitHub Pages
for free.

## Files

- `index.html` — page structure and your text
- `style.css` — all styling
- `script.js` — the "No" button dodge + the "Yes" screen transition

## 1. Add your own words

Open `index.html` and look for the blocks marked:

```html
<!-- ✏️ EDIT ME -->
...
<!-- END EDIT ME -->
```

There are two:
- **Screen 1** — replace `[Name]` and the three paragraphs with your
  own note. The line right above the buttons ("So, will you?") can be
  changed too — it works for almost any yes/no question as-is.
- **Screen 2** — replace the paragraph shown after "Yes" is clicked.

## 2. Preview it

Just double-click `index.html` to open it in your browser — no server
required.

## 3. Deploy for free on GitHub Pages

1. Create a new **public** GitHub repository (e.g. `will-you`).
2. Add `index.html`, `style.css`, and `script.js` to the root of that
   repository — drag-and-drop them on GitHub's "Add file → Upload
   files" page, or `git push` them.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to **Deploy from a
   branch**, branch **main**, folder **/ (root)**, then **Save**.
5. Wait a minute or two, then your site is live at:
   `https://<your-username>.github.io/<repo-name>/`

## Notes

- Fonts (Fraunces + Lora) load from Google Fonts via a link in
  `index.html` — nothing else to install.
- "Yes" cross-fades into the second screen in place, rather than
  loading a new HTML file, so there's only one page to worry about
  hosting correctly.
- The "No" button escapes on hover, tap, and keyboard focus, and does
  nothing even in the rare case it gets clicked.
