# Academic Homepage — Reference Style

A minimal, single-page academic homepage built with HTML, CSS, and vanilla JavaScript. The layout is inspired by the supplied reference: compact profile introduction, anchor navigation, featured research, experience, year-grouped publications, selected work, news, education, and academic service.

## Run locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Visit http://localhost:8000.

## Customize

1. Edit `index.html` to change your name, short introduction, institution, email, and social links.
2. Edit `assets/js/data.js` to update featured research, experience, publications, selected work, news, education, and service.
3. Add your portrait as `assets/images/profile.jpg`.
4. Add publication teasers to `assets/images/` and update the corresponding `image` paths in `data.js`.
5. Add PDFs to `assets/files/` and update resource links.

The example research details are placeholders. Replace them with verified titles, authors, venues, dates, and URLs before publishing.

## Deploy to GitHub Pages

1. Create a repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload the contents of this folder to the repository root.
3. Commit to the `main` branch.
4. Open **Settings → Pages**.
5. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
6. Visit `https://YOUR_GITHUB_USERNAME.github.io` after deployment finishes.

No Node.js, package installation, or build step is required.
