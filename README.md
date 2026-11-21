# Portfolio website

A simple, responsive portfolio designed for GitHub Pages. It uses plain HTML,
CSS, and JavaScript, so there is nothing to install or build.

## Personalize it

Open `portfolio-data.js` and update the `profile` section with your name, email,
GitHub profile, introduction, and about text.

To add a project, copy one object inside the `projects` list and edit its fields:

```js
{
  title: "Project name",
  category: "Web development",
  year: "2026",
  description: "What the project does and what you contributed.",
  link: "https://example.com",
  linkLabel: "View project",
},
```

To add a report, put the PDF inside the `reports` folder. Then copy one object in
the `reports` list and use a link such as `reports/my-report.pdf`.

## Preview locally

You can open `index.html` directly in a browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a new empty repository on GitHub.
2. In this folder, run the commands GitHub shows under **push an existing
   repository from the command line**.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then save.

GitHub will show the public site URL after the first deployment. Future pushes to
`main` will update the website automatically.
