const data = window.PORTFOLIO;

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setLinks(selector, href) {
  document.querySelectorAll(selector).forEach((element) => {
    element.href = href;
  });
}

function makeTextElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function makeLink(item, className) {
  const link = makeTextElement("a", className, item.linkLabel || "View");
  link.href = item.link || "#";
  if (item.link && /^https?:\/\//.test(item.link)) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
}

function renderProfile() {
  const { profile } = data;
  document.title = `${profile.name} — Portfolio`;
  setText("[data-site-name]", profile.name);
  setText("[data-role]", profile.role);
  setText("[data-intro]", profile.intro);
  setText("[data-about]", profile.about);
  setLinks("[data-email-link]", `mailto:${profile.email}`);
  setLinks("[data-github-link]", profile.github);
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  const empty = document.querySelector("#projects-empty");
  const projects = data.projects || [];

  empty.hidden = projects.length > 0;

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const top = document.createElement("div");
    const meta = makeTextElement(
      "p",
      "project-meta",
      `${project.category} · ${project.year}`,
    );
    top.append(meta, makeTextElement("h3", "", project.title));
    top.append(makeTextElement("p", "", project.description));
    card.append(top, makeLink(project, "card-link"));
    grid.append(card);
  });
}

function renderReports() {
  const list = document.querySelector("#report-list");
  const empty = document.querySelector("#reports-empty");
  const reports = data.reports || [];

  empty.hidden = reports.length > 0;

  reports.forEach((report) => {
    const item = document.createElement("article");
    item.className = "report-item";

    const meta = makeTextElement(
      "p",
      "report-meta",
      `${report.type} · ${report.year}`,
    );
    const body = document.createElement("div");
    body.append(
      makeTextElement("h3", "", report.title),
      makeTextElement("p", "", report.description),
    );
    item.append(meta, body, makeLink(report, "report-link"));
    list.append(item);
  });
}

renderProfile();
renderProjects();
renderReports();
setText("#current-year", new Date().getFullYear());
