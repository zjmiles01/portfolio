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

function textElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function renderProfile() {
  const { profile } = data;
  document.title = `${profile.name} — Portfolio`;
  setText("[data-site-name]", profile.name);
  setText("[data-role]", profile.role);
  setText("[data-intro]", profile.intro);
  setText("[data-about]", profile.about);
  setLinks("[data-email-link]", `mailto:${profile.email}`);
  setLinks("[data-linkedin-link]", profile.linkedin);
  setLinks("[data-github-link]", profile.github);
}

function renderWork() {
  const list = document.querySelector("#work-list");

  data.work.forEach((job) => {
    const item = document.createElement("article");
    item.className = "work-item";

    const meta = document.createElement("div");
    meta.className = "work-meta";
    meta.append(
      textElement("p", "work-period", job.period),
      textElement("p", "work-location", job.location),
    );

    const body = document.createElement("div");
    body.className = "work-body";
    body.append(
      textElement("p", "work-company", job.company),
      textElement("h3", "", job.role),
      textElement("p", "work-summary", job.summary),
    );

    const details = document.createElement("ul");
    job.details.forEach((detail) => {
      details.append(textElement("li", "", detail));
    });
    body.append(details);
    item.append(meta, body);
    list.append(item);
  });
}

function renderProjects(category) {
  const grid = document.querySelector(`#${category}-projects`);

  data.projects[category].forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const heading = document.createElement("div");
    heading.append(
      textElement("p", "project-subtitle", project.subtitle),
      textElement("h3", "", project.title),
    );

    const stack = document.createElement("ul");
    stack.className = "project-stack";
    stack.setAttribute("aria-label", "Technologies");
    project.stack.forEach((technology) => {
      stack.append(textElement("li", "", technology));
    });

    const details = document.createElement("ul");
    details.className = "project-details";
    project.details.forEach((detail) => {
      details.append(textElement("li", "", detail));
    });

    const link = textElement("a", "project-link", project.linkLabel);
    link.href = project.link;
    if (/^https?:\/\//.test(project.link)) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    card.append(
      heading,
      stack,
      textElement("p", "project-description", project.description),
      details,
      link,
    );
    grid.append(card);
  });
}

function setupProjectTabs() {
  const tabs = [...document.querySelectorAll("[data-project-tab]")];
  const panels = [...document.querySelectorAll("[data-project-panel]")];

  function activateTab(category) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.projectTab === category;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.projectPanel !== category;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.projectTab));
    tab.addEventListener("keydown", (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const offset = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + offset + tabs.length) % tabs.length;
      activateTab(tabs[nextIndex].dataset.projectTab);
      tabs[nextIndex].focus();
    });
  });
}

function renderSkills() {
  const container = document.querySelector("#skill-groups");

  data.skills.forEach((skill) => {
    const group = document.createElement("div");
    group.className = "skill-group";
    group.append(
      textElement("h3", "", skill.label),
      textElement("p", "", skill.items),
    );
    container.append(group);
  });
}

renderProfile();
renderWork();
renderProjects("software");
renderProjects("hardware");
renderSkills();
setupProjectTabs();
setText("#current-year", new Date().getFullYear());
