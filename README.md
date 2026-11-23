# Zakary Miles — Portfolio

A simple, responsive portfolio for work experience, software and hardware
projects, background, resume, and contact information. It uses plain HTML, CSS,
and JavaScript, so there is nothing to install or build.

## Update the content

Most updates happen in `portfolio-data.js`:

- `profile` controls the name, introduction, about text, and contact links.
- `work` contains experience entries.
- `projects.software` and `projects.hardware` populate the project tabs and resume. Each project's `details` array supplies its two bullets.
- `skills` supplies the Software and Mechanical / Hardware lists in Resume and About.

Each project can link to a GitHub repository, live demo, or future case-study
page. Replace `#` and the placeholder link label when a project page is ready.

For each finished report, add a concise entry under `#reports` in `index.html`
and a sibling `article.report-view` containing the full HTML manuscript.
The project card and its Reports listing entry both link directly to the full
report (for example, `#report-dum-e`). Both “Back to reports” links point to
its listing entry (`#reports/dum-e`). Give each report section a unique ID and reference it
from the report’s contents menu. These fragment URLs work on GitHub Pages
without a server-side router.

Use original project figures, include supported dates and status, and distinguish
calculations and digital verification from physical measurements. Keep working
source documents and manufacturing records with the project. Edit the HTML to
update the published report.

The Resume tab opens at `#resume`. Education is in `index.html`, and experience,
projects, and skills come from `portfolio-data.js`. The
“Open resume (PDF)” link points to `assets/Zakary-Miles-Resume.pdf`.

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
