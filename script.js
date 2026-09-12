(() => {
  const data = window.SITE_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const externalAttrs = (url) => {
    try {
      const parsed = new URL(url, window.location.href);
      return parsed.origin !== window.location.origin ? { target: "_blank", rel: "noopener noreferrer" } : {};
    } catch {
      return {};
    }
  };

  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => {
      if (value === null || value === undefined || value === false) return;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key === "html") node.innerHTML = value;
      else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), value);
      else node.setAttribute(key, value === true ? "" : value);
    });
    children.flat().forEach((child) => {
      if (child === null || child === undefined) return;
      if (typeof child === "string" || typeof child === "number") node.appendChild(document.createTextNode(child));
      else node.appendChild(child);
    });
    return node;
  };

  const link = (label, url, className = "text-link") => el("a", { href: url, class: className, ...externalAttrs(url) }, `${label} ↗`);

  const researchFigures = {
    omics: `
      <svg viewBox="0 0 240 112" aria-hidden="true" focusable="false">
        <g stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 60C12 36 29 18 53 17c25-1 43 16 45 39 2 25-15 41-42 41-27 0-44-13-44-37Z"
            fill="var(--accent)" fill-opacity=".09" stroke="var(--accent)" stroke-width="1.5"/>
          <path d="M22 70c13-14 24-9 34-20 10-11 20-12 33-4"
            fill="none" stroke="var(--accent-2)" stroke-opacity=".5" stroke-width="1.4"/>
          <circle cx="29" cy="43" r="3.5" fill="var(--accent-3)"/>
          <circle cx="45" cy="31" r="3" fill="var(--accent-2)"/>
          <circle cx="59" cy="55" r="4" fill="var(--accent-2)" fill-opacity=".75"/>
          <circle cx="75" cy="36" r="3" fill="var(--accent-3)" fill-opacity=".75"/>
          <circle cx="36" cy="76" r="3" fill="var(--accent-2)"/>
          <circle cx="72" cy="76" r="4" fill="var(--accent-3)" fill-opacity=".8"/>
          <path d="M105 56h24m-7-7 7 7-7 7" fill="none" stroke="var(--accent-3)" stroke-width="1.6"/>
          <rect x="140" y="17" width="88" height="78" rx="10"
            fill="var(--surface-muted)" fill-opacity=".45" stroke="var(--border)"/>
          <g>
            <rect x="148" y="25" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".18"/>
            <rect x="167" y="25" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".48"/>
            <rect x="186" y="25" width="15" height="14" rx="3" fill="var(--accent-3)" fill-opacity=".34"/>
            <rect x="205" y="25" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".72"/>
            <rect x="148" y="46" width="15" height="14" rx="3" fill="var(--accent-3)" fill-opacity=".7"/>
            <rect x="167" y="46" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".26"/>
            <rect x="186" y="46" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".88"/>
            <rect x="205" y="46" width="15" height="14" rx="3" fill="var(--accent-3)" fill-opacity=".24"/>
            <rect x="148" y="67" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".42"/>
            <rect x="167" y="67" width="15" height="14" rx="3" fill="var(--accent-3)" fill-opacity=".84"/>
            <rect x="186" y="67" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".2"/>
            <rect x="205" y="67" width="15" height="14" rx="3" fill="var(--accent-2)" fill-opacity=".58"/>
          </g>
          <path d="M148 88c18-20 34-11 47-27 8-10 18-10 25-3"
            fill="none" stroke="var(--accent-3)" stroke-opacity=".72" stroke-width="1.4"/>
        </g>
      </svg>`,
    unified: `
      <svg viewBox="0 0 240 112" aria-hidden="true" focusable="false">
        <g stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="17" width="73" height="78" rx="10"
            fill="var(--surface-muted)" fill-opacity=".45" stroke="var(--border)"/>
          <path d="M17 66c-4-17 7-34 25-38 19-4 34 7 34 24 0 19-14 33-34 34-13 0-22-7-25-20Z"
            fill="var(--accent)" fill-opacity=".08" stroke="var(--accent)" stroke-opacity=".45"/>
          <circle cx="29" cy="47" r="4" fill="var(--muted)" fill-opacity=".55"/>
          <circle cx="48" cy="37" r="3.5" fill="var(--muted)" fill-opacity=".42"/>
          <circle cx="61" cy="54" r="4.5" fill="var(--muted)" fill-opacity=".55"/>
          <circle cx="37" cy="69" r="3.5" fill="var(--muted)" fill-opacity=".48"/>
          <circle cx="59" cy="76" r="3" fill="var(--muted)" fill-opacity=".42"/>
          <path d="M86 56h12m-4-4 4 4-4 4" fill="none" stroke="var(--accent-3)" stroke-width="1.5"/>
          <rect x="98" y="41" width="25" height="30" rx="5" fill="var(--surface)" stroke="var(--accent)" stroke-opacity=".55"/>
          <rect x="104" y="37" width="25" height="38" rx="5" fill="var(--surface)" stroke="var(--accent-2)"/>
          <rect x="110" y="33" width="25" height="46" rx="5" fill="var(--surface)" fill-opacity=".75" stroke="var(--figure-accent)"/>
          <path d="M116 45h13m-13 10h13m-13 10h9" fill="none" stroke="var(--figure-accent)" stroke-width="1.4"/>
          <path d="M137 56h11m-4-4 4 4-4 4" fill="none" stroke="var(--accent-3)" stroke-width="1.5"/>
          <rect x="151" y="17" width="80" height="78" rx="10"
            fill="var(--surface-muted)" fill-opacity=".45" stroke="var(--border)"/>
          <path d="M159 67c-4-17 7-34 26-38 20-4 37 7 37 25 0 19-15 32-35 33-15 0-25-7-28-20Z"
            fill="var(--accent)" fill-opacity=".07" stroke="var(--accent)" stroke-width="1.4"/>
          <ellipse cx="174" cy="46" rx="7" ry="6" fill="var(--accent-2)" fill-opacity=".28" stroke="var(--accent-2)" stroke-width="1.4"/>
          <circle cx="198" cy="37" r="6" fill="var(--accent-3)" fill-opacity=".28" stroke="var(--accent-3)" stroke-width="1.4"/>
          <path d="M207 54c7-4 13 1 12 8-1 7-9 11-15 6-5-5-3-11 3-14Z"
            fill="var(--accent-2)" fill-opacity=".23" stroke="var(--accent-2)" stroke-width="1.4"/>
          <ellipse cx="180" cy="72" rx="8" ry="6" fill="var(--accent-3)" fill-opacity=".22" stroke="var(--accent-3)" stroke-width="1.4"/>
          <path d="M163 80c11-11 22-5 31-14 7-7 15-8 24-3"
            fill="none" stroke="var(--accent-3)" stroke-opacity=".7" stroke-width="1.4"/>
        </g>
      </svg>`,
    ecosystem: `
      <svg viewBox="0 0 240 112" aria-hidden="true" focusable="false">
        <g stroke-linecap="round" stroke-linejoin="round">
          <circle cx="72" cy="56" r="41" fill="var(--accent)" fill-opacity=".05"
            stroke="var(--accent)" stroke-opacity=".65" stroke-width="1.4" stroke-dasharray="4 5"/>
          <circle cx="168" cy="56" r="41" fill="var(--accent-3)" fill-opacity=".06"
            stroke="var(--accent-3)" stroke-opacity=".7" stroke-width="1.4" stroke-dasharray="4 5"/>
          <g fill="none" stroke="var(--border-strong)" stroke-width="1.2">
            <path d="M43 46 69 31 91 61 61 80 43 46Z"/><path d="M69 31 120 56 91 61"/>
            <path d="M61 80 120 56"/><path d="M120 56 147 33 177 40 200 65 168 79 120 56Z"/>
            <path d="M147 33 168 79"/><path d="M177 40 168 79"/>
          </g>
          <circle cx="43" cy="46" r="6" fill="var(--accent)" fill-opacity=".24" stroke="var(--accent)" stroke-width="1.4"/>
          <circle cx="69" cy="31" r="5" fill="var(--accent-2)" fill-opacity=".3" stroke="var(--accent-2)" stroke-width="1.4"/>
          <path d="M91 53l7 4v8l-7 4-7-4v-8Z" fill="var(--accent-3)" fill-opacity=".25" stroke="var(--accent-3)" stroke-width="1.4"/>
          <circle cx="61" cy="80" r="7" fill="var(--accent-2)" fill-opacity=".2" stroke="var(--accent-2)" stroke-width="1.4"/>
          <circle cx="120" cy="56" r="9" fill="var(--surface)" stroke="var(--accent-3)" stroke-width="1.6"/>
          <circle cx="120" cy="56" r="4" fill="var(--accent-2)"/>
          <path d="M147 26l7 4v8l-7 4-7-4v-8Z" fill="var(--accent-2)" fill-opacity=".24" stroke="var(--accent-2)" stroke-width="1.4"/>
          <circle cx="177" cy="40" r="6" fill="var(--accent-3)" fill-opacity=".27" stroke="var(--accent-3)" stroke-width="1.4"/>
          <circle cx="200" cy="65" r="7" fill="var(--accent-2)" fill-opacity=".22" stroke="var(--accent-2)" stroke-width="1.4"/>
          <path d="M168 71l7 4v8l-7 4-7-4v-8Z" fill="var(--accent-3)" fill-opacity=".3" stroke="var(--accent-3)" stroke-width="1.4"/>
        </g>
      </svg>`
  };

  const setText = (selector, text) => {
    const node = $(selector);
    if (node) node.textContent = text || "";
  };
  const renderLinks = (links) => el("div", { class: "link-row" }, (links || []).map((item) => link(item.label, item.url)));
  const profiles = [
    { label: "Google Scholar", url: data.contact.scholar, description: "Publications & citations" },
    { label: "GitHub", url: data.contact.github, description: "Code & research software" },
    { label: "ORCID", url: data.contact.orcid, description: "Researcher profile" }
  ];

  const renderProfile = () => {
    setText("#profile-name", data.name);
    setText("#profile-affiliation", data.affiliation);
    setText("#profile-location", data.location);
    const photo = $("#profile-image");
    photo.addEventListener("error", () => {
      photo.src = "assets/profile-placeholder.svg";
      photo.alt = `${data.name} initials`;
    }, { once: true });
    photo.src = data.profileImage;
    photo.alt = `${data.name} portrait`;
    $("#profile-cv").href = data.cvPath;
    $(".header-cv").href = data.cvPath;
    $("#profile-email").href = `mailto:${data.contact.email}`;
    $("#profile-email").replaceChildren(document.createTextNode(data.contact.email), el("span", { "aria-hidden": "true", text: "↗" }));
    $("#profile-facts").replaceChildren(...data.profileFacts.filter((fact) => fact.label !== "Affiliation").map((fact) =>
      el("div", {}, el("dt", { text: fact.label }), el("dd", {}, fact.url ? el("a", { href: fact.url, ...externalAttrs(fact.url), text: fact.value }) : fact.value))
    ));
    $("#profile-links").replaceChildren(...profiles.map((profile) => link(profile.label, profile.url, "profile-link")));
    setText("#overview-tagline", data.tagline);
    setText("#overview-introduction", data.introduction);
    $("#interest-strip").replaceChildren(...data.interests.map((interest) => el("span", { text: interest })));
    $("#selected-work").replaceChildren(...data.featuredWork.slice(0, 2).map((work) => {
      const [name, ...description] = work.title.split(":");
      return el("article", { class: "selected-card" },
        el("span", { class: "work-meta", text: work.meta }),
        el("h4", { text: name }),
        el("p", { text: description.join(":").trim() || work.text }),
        link(work.links[0].label === "Preprint" ? "Read preprint" : "Read paper", work.links[0].url)
      );
    }));
  };

  const renderResearch = () => {
    setText("#research-statement", data.researchStatement);
    $("#research-pathway").replaceChildren(...data.researchPathway.map((step, index) =>
      el("li", {}, el("span", { class: "step-number", text: String(index + 1).padStart(2, "0"), "aria-hidden": "true" }), step)
    ));
    $("#research-cards").replaceChildren(...data.researchThemes.map((theme) =>
      el("article", { class: "research-card" },
        el("div", { class: "research-card__figure", html: researchFigures[theme.figure] || "", "aria-hidden": "true" }),
        el("h3", { text: theme.title }), el("p", { text: theme.text })
      )
    ));
    $("#featured-list").replaceChildren(...data.featuredWork.map((work, index) =>
      el("details", { class: "feature-details" },
        el("summary", {},
          el("span", { class: "feature-number", text: String(index + 1).padStart(2, "0"), "aria-hidden": "true" }),
          el("span", {}, el("span", { class: "feature-summary-title", text: work.title }), el("span", { class: "feature-summary-meta", text: `${work.meta} · ${work.label}` }))
        ),
        el("div", { class: "feature-body" },
          el("p", { text: work.text }),
          el("ul", { class: "feature-highlights" }, (work.highlights || []).map((highlight) => el("li", { text: highlight }))),
          renderLinks(work.links)
        )
      )
    ));
  };

  const categoryLabels = { journal: "Journal", preprint: "Preprint", conference: "Conference" };
  const papers = data.publications.slice().sort((a, b) => String(b.date || b.year).localeCompare(String(a.date || a.year)));
  const publicationState = { filter: "all", query: "", page: 1 };
  const pageSize = 3;
  const matchingPapers = () => {
    const terms = publicationState.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return papers.filter((paper) => {
      const searchable = [paper.title, paper.venue, paper.year, paper.status, paper.role, categoryLabels[paper.category], ...paper.authors, ...(paper.links || []).map((item) => item.url)].join(" ").toLowerCase();
      return (publicationState.filter === "all" || paper.category === publicationState.filter) && terms.every((term) => searchable.includes(term));
    });
  };
  const renderPublication = (paper) => {
    const authors = el("p", { class: "publication-authors" });
    paper.authors.forEach((author, index) => {
      if (index) authors.append(document.createTextNode(", "));
      authors.append(el(author === "Pang M" ? "strong" : "span", { class: author === "Pang M" ? "me" : "", text: author }));
    });
    const title = paper.links?.length ? el("a", { class: "publication-title", href: paper.links[0].url, ...externalAttrs(paper.links[0].url), text: paper.title }) : paper.title;
    return el("article", { class: "publication-item" },
      el("div", { class: "publication-year", text: paper.year }),
      el("div", {},
        el("h3", {}, title), authors,
        el("div", { class: "publication-meta" },
          el("span", { class: "publication-venue", text: paper.venue }),
          paper.status ? el("span", { text: paper.status }) : null,
          paper.role ? el("span", { class: "publication-role", text: paper.role }) : null,
          renderLinks(paper.links)
        )
      )
    );
  };
  const renderPublications = (printAll = false) => {
    const filtered = printAll ? papers : matchingPapers();
    const pageCount = Math.ceil(filtered.length / pageSize);
    publicationState.page = Math.max(1, Math.min(publicationState.page, pageCount || 1));
    const start = (publicationState.page - 1) * pageSize;
    const visible = printAll ? filtered : filtered.slice(start, start + pageSize);
    $("#publication-list").replaceChildren(...visible.map(renderPublication));
    $("#publication-empty").hidden = filtered.length !== 0;
    setText("#publication-status", filtered.length ? `${start + 1}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length} ${filtered.length === 1 ? "publication" : "publications"}` : "0 publications");
    $("#publication-pagination").replaceChildren(...(pageCount > 1 ? Array.from({ length: pageCount }, (_, index) =>
      el("button", {
        type: "button", text: index + 1, "data-page": index + 1,
        "aria-label": `Page ${index + 1}`, "aria-current": index + 1 === publicationState.page ? "page" : null
      })
    ) : []));
  };
  const initPublications = () => {
    setText("#publication-total", papers.length);
    $("#all-scholar").href = data.contact.scholar;
    $$("[data-filter]").forEach((button) => button.addEventListener("click", () => {
      publicationState.filter = button.dataset.filter;
      publicationState.page = 1;
      $$("[data-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      renderPublications();
    }));
    $("#publication-search").addEventListener("input", (event) => {
      publicationState.query = event.target.value;
      publicationState.page = 1;
      renderPublications();
    });
    $("#publication-pagination").addEventListener("click", (event) => {
      const button = event.target.closest("[data-page]");
      if (!button) return;
      publicationState.page = Number(button.dataset.page);
      renderPublications();
      $("#publications h2").focus({ preventScroll: true });
      scrollToContent();
    });
    renderPublications();
  };

  const renderTalks = () => {
    $("#talks-list").replaceChildren(...data.talks.slice().sort((a, b) => (b.sortDate || b.date).localeCompare(a.sortDate || a.date)).map((talk) =>
      el("article", { class: "timeline-item" }, el("div", { class: "timeline-date", text: talk.date }),
        el("div", {}, el("h3", { text: talk.title }), el("p", { text: [talk.venue, talk.location].filter(Boolean).join(", ") }), talk.note ? el("span", { class: "timeline-badge", text: talk.note }) : null)
      )
    ));
  };
  const renderEducation = () => {
    $("#education-list").replaceChildren(...data.education.map((edu) =>
      el("article", { class: "timeline-item" }, el("div", { class: "timeline-date", text: edu.date }),
        el("div", {}, el("h3", { text: edu.institution }), el("p", { class: "education-degree", text: edu.degree }), el("p", { text: edu.location }),
          edu.advisor ? el("p", {}, "Advisor: ", edu.advisorUrl ? el("a", { href: edu.advisorUrl, ...externalAttrs(edu.advisorUrl), text: edu.advisor }) : edu.advisor) : null,
          edu.thesis ? el("p", { text: `Thesis: ${edu.thesis}` }) : null
        )
      )
    ));
    setText("#award-count", data.awards.length);
    $("#awards-list").replaceChildren(...data.awards.map((award) => el("li", {}, el("span", { class: "award-date", text: award.date }), el("span", { text: [award.title, award.note].filter(Boolean).join(" · ") }))));
    $("#mentoring-list").replaceChildren(...data.mentoring.map((item) => el("article", { class: "mentoring-item" }, el("h3", { text: item.title }), el("p", { text: `${item.institution} · ${item.date}` }), el("p", { text: item.text }))));
    $("#skills-list").replaceChildren(...data.skills.map((skill) => el("p", {}, el("strong", { text: `${skill.level}:` }), skill.items.join(" · "))));
  };
  const renderContact = () => {
    $("#contact-email").href = `mailto:${data.contact.email}`;
    $(".contact-email-address").replaceChildren(document.createTextNode(data.contact.email), el("span", { "aria-hidden": "true", text: "↗" }));
    $("#contact-profiles").replaceChildren(...profiles.map((profile) => el("div", { class: "contact-profile" },
      el("a", { href: profile.url, ...externalAttrs(profile.url) }, profile.label, el("span", { "aria-hidden": "true", text: "↗" })), el("p", { text: profile.description })
    )));
    setText("#contact-affiliation", data.affiliation);
    setText("#contact-location", data.location);
    setText("#footer-name", `© ${new Date().getFullYear()} ${data.name}`);
    setText("#footer-updated", `Updated ${data.lastUpdated}`);
  };

  const scrollToContent = () => {
    const top = window.matchMedia("(max-width: 760px)").matches ? $("#main").getBoundingClientRect().top + window.scrollY : 0;
    window.scrollTo({ top, behavior: "instant" });
  };
  const initNavigation = () => {
    const tabs = $$("[role='tab']");
    const panels = $$("[role='tabpanel']");
    const aliases = new Map([["top", "overview"], ["featured", "research"]]);
    const resolveTab = (hash) => {
      const id = hash.replace(/^#/, "");
      return panels.some((panel) => panel.id === id) ? id : aliases.get(id) || "overview";
    };
    let activeId;
    panels.forEach((panel) => $("h2", panel).setAttribute("tabindex", "-1"));
    const activate = (id, { push = false, focusPanel = false, scroll = false } = {}) => {
      const changed = activeId !== id;
      activeId = id;
      panels.forEach((panel) => { panel.hidden = panel.id !== id; });
      tabs.forEach((tab) => {
        const selected = tab.getAttribute("aria-controls") === id;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      if (push && (changed || !window.location.hash)) history.pushState(null, "", `#${id}`);
      document.title = id === "overview" ? `${data.name} | Computational Pathology & Spatial Biology` : `${$("#tab-" + id).textContent} | ${data.name}`;
      if (focusPanel) $("h2", $("#" + id)).focus({ preventScroll: true });
      if (scroll) scrollToContent();
    };
    document.addEventListener("click", (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const hash = anchor.getAttribute("href");
      if (hash === "#main") {
        event.preventDefault();
        $("h2", $("#" + activeId)).focus({ preventScroll: true });
        scrollToContent();
        return;
      }
      if (!panels.some((panel) => `#${panel.id}` === hash) && !aliases.has(hash.slice(1))) return;
      event.preventDefault();
      activate(resolveTab(hash), { push: true, focusPanel: anchor.getAttribute("role") !== "tab", scroll: true });
      if (anchor.classList.contains("brand")) window.scrollTo({ top: 0, behavior: "instant" });
    });
    tabs.forEach((tab, index) => tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (event.key === " ") next = index;
      if (next === undefined) return;
      event.preventDefault();
      tabs[next].focus({ preventScroll: true });
      activate(tabs[next].getAttribute("aria-controls"), { push: true, scroll: true });
    }));
    const restore = () => activate(resolveTab(window.location.hash), { scroll: true });
    window.addEventListener("popstate", restore);
    window.addEventListener("hashchange", restore);
    activate(resolveTab(window.location.hash));
    // Native fragment scrolling must not hide the tab bar on a direct section link.
    if (window.location.hash) requestAnimationFrame(scrollToContent);
  };

  const initTheme = () => {
    const toggle = $(".theme-toggle");
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    let saved;
    try { saved = localStorage.getItem("preferred-theme"); } catch (_) {}
    const apply = (theme) => {
      const dark = theme === "dark";
      document.documentElement.dataset.theme = theme;
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
      toggle.title = toggle.getAttribute("aria-label");
      $("meta[name='theme-color']").content = dark ? "#121a24" : "#f8f9fb";
    };
    apply(saved === "dark" || saved === "light" ? saved : media.matches ? "dark" : "light");
    toggle.addEventListener("click", () => {
      saved = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      apply(saved);
      try { localStorage.setItem("preferred-theme", saved); } catch (_) {}
    });
    media.addEventListener("change", () => { if (!saved) apply(media.matches ? "dark" : "light"); });
  };
  const initPrint = () => {
    let closedDetails = [];
    window.addEventListener("beforeprint", () => {
      closedDetails = $$("details:not([open])");
      closedDetails.forEach((detail) => { detail.open = true; });
      renderPublications(true);
    });
    window.addEventListener("afterprint", () => {
      closedDetails.forEach((detail) => { detail.open = false; });
      renderPublications();
    });
  };
  const injectStructuredData = () => {
    const siteUrl = $("link[rel='canonical']").href;
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify({
      "@context": "https://schema.org", "@type": "Person", name: data.name, jobTitle: data.title,
      description: data.introduction, affiliation: { "@type": "CollegeOrUniversity", name: data.affiliation },
      email: `mailto:${data.contact.email}`, image: new URL(data.profileImage, siteUrl).href,
      url: siteUrl, sameAs: profiles.map((profile) => profile.url)
    }) }));
  };
  const init = () => {
    renderProfile();
    renderResearch();
    renderTalks();
    renderEducation();
    renderContact();
    initPublications();
    initNavigation();
    initTheme();
    initPrint();
    injectStructuredData();
  };
  document.addEventListener("DOMContentLoaded", init);
})();
