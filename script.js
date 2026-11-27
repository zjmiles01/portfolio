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

function bulletList(items, className) {
  const list = document.createElement("ul");
  list.className = className;
  for (const item of items) list.append(textElement("li", "", item));
  return list;
}

function renderProfile() {
  const { profile } = data;
  document.title = `${profile.name} — Portfolio`;
  setText("[data-site-name]", profile.name);
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
    );
    if (job.summary) body.append(textElement("p", "work-summary", job.summary));
    if (job.details.length) body.append(bulletList(job.details, "resume-bullets"));
    item.append(meta, body);
    list.append(item);
  });
}

function renderProjects(category) {
  const grid = document.querySelector(`#${category}-projects`);

  if (!data.projects[category].length) {
    grid.append(textElement("p", "projects-empty", "Project write-ups coming soon."));
    return;
  }

  data.projects[category].forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    if (project.image) {
      const drawing = document.createElement("img");
      drawing.className = "project-drawing";
      drawing.src = project.image;
      drawing.alt = project.imageAlt;
      drawing.loading = "lazy";
      card.append(drawing);
    }

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

    const hasDestination = project.link && project.link !== "#";
    const link = textElement(hasDestination ? "a" : "p", hasDestination ? "project-link" : "project-subtitle", project.linkLabel);
    if (hasDestination) link.href = project.link;
    if (hasDestination && /^https?:\/\//.test(project.link)) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    card.append(
      heading,
      stack,
      textElement("p", "project-description", project.description),
      bulletList(project.details, "project-details"),
      link,
    );
    grid.append(card);
  });
}

function renderResumeProjects() {
  const container = document.getElementById("resume-projects");
  for (const project of Object.values(data.projects).flat()) {
    const entry = document.createElement("article");
    const heading = textElement("h3", "", project.title);
    if (project.link && project.link !== "#") {
      const link = textElement("a", "", project.title);
      link.href = project.link;
      heading.replaceChildren(link);
    }
    entry.append(heading, bulletList(project.details, "resume-bullets"));
    container.append(entry);
  }
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

  function selectLinkedPanel() {
    const panel = panels.find((item) => "#" + item.id === location.hash);
    if (panel) activateTab(panel.dataset.projectPanel);
  }
  activateTab(tabs[0].dataset.projectTab);
  selectLinkedPanel();
  window.addEventListener("hashchange", selectLinkedPanel);

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
  for (const container of document.querySelectorAll("[data-skills]")) {
    for (const skill of data.skills) {
      const group = document.createElement("div");
      group.className = "skill-group";
      group.append(textElement("h3", "", skill.label), bulletList(skill.items, "resume-bullets"));
      container.append(group);
    }
  }
}

function setupReportRecords() {
  // Keep numerical comparisons in a table. For prose, pair each value
  // with its column heading so the row can be read vertically on a phone.
  const tables = document.querySelectorAll("#report-dum-e .manuscript table");
  for (const table of tables) {
    if (table.closest("#dum-e-loads, #dum-e-record")) continue;
    const headings = table.tHead.rows[0].cells;
    const records = document.createElement("dl");
    records.className = "report-records";
    for (const row of table.tBodies[0].rows) {
      const record = document.createElement("div");
      for (const [index, cell] of Array.from(row.cells).entries()) {
        const field = document.createElement(index === 0 ? "dt" : "dd");
        field.append(textElement("span", "record-label", headings[index].textContent));
        for (const node of cell.childNodes) field.append(node.cloneNode(true));
        record.append(field);
      }
      records.append(record);
    }
    const original = table.closest(".table-scroll") || table;
    original.classList.add("record-source");
    original.after(records);
  }
}

function setupRoutes() {
  const home = document.getElementById("projects");
  const views = document.querySelectorAll("main > [data-page]");
  const navigation = document.querySelectorAll(".site-header nav a");
  const desktop = window.matchMedia("(min-width: 861px)");

  function updateContentsMenus() {
    for (const menu of document.querySelectorAll(".contents-menu")) menu.open = desktop.matches;
  }

  function showRoute() {
    if (location.hash === "#work") history.replaceState(history.state, "", "#resume");
    const target = document.getElementById(location.hash.slice(1));
    const view = target?.closest("[data-page]") || home;
    for (const page of views) page.hidden = page !== view;
    for (const link of navigation) {
      if (link.hash === "#" + view.dataset.page) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
    const title = view.querySelector("h1");
    document.title = view === home ? data.profile.name + " — Portfolio" : title.textContent + " — " + data.profile.name;

    const menu = view.querySelector(".contents-menu");
    if (menu) {
      if (!desktop.matches) menu.open = false;
      for (const link of menu.querySelectorAll("a")) {
        if (link.hash === location.hash) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }

    // Reveal the view before moving focus or resolving a section fragment.
    if (target === view || target?.id === "top") {
      title.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (target && view.contains(target)) {
      target.querySelector("h2[tabindex], h1[tabindex]")?.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }

  updateContentsMenus();
  desktop.addEventListener("change", updateContentsMenus);
  window.addEventListener("hashchange", showRoute);
  showRoute();
}

renderProfile();
renderWork();
renderProjects("software");
renderProjects("hardware");
renderResumeProjects();
renderSkills();
setupProjectTabs();
setupReportRecords();
setupRoutes();
setText("#current-year", new Date().getFullYear());
