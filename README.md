# Zakary Miles — Portfolio

A simple, responsive portfolio for work experience, software and hardware
projects, background, resume, and contact information. It uses plain HTML, CSS,
and JavaScript, so there is nothing to install or build.

## Update the content

Most updates happen in `portfolio-data.js`:

- `profile` controls the name, introduction, about text, and contact links.
- `work` contains experience entries.
- `projects.software` and `projects.hardware` populate the project tabs.
- `skills` controls the About section’s skill groups.

Each project can link to a GitHub repository, live demo, or future case-study
page. Replace `#` and the placeholder link label when a project page is ready.

The public resume lives at `assets/Zakary-Miles-Resume.pdf`. Replace that file
with a newer PDF using the same filename to update both resume links.

## Preview locally

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a new empty repository on GitHub.
2. Push this folder to the repository’s `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.

Future pushes to `main` will update the portfolio automatically.
