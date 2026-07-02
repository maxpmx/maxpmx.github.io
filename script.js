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

  const highlightAuthor = (author) => {
    const span = el("span", { text: author });
    if (/^Pang M$/.test(author)) span.className = "me";
    return span;
  };

  const setText = (selector, text) => { const node = $(selector); if (node) node.textContent = text || ""; };

  const renderHero = () => {
    setText("#hero-kicker", `${data.title} · ${data.affiliation}`);
    setText("#hero-title", data.name);
    setText("#hero-subtitle", data.tagline);
    setText("#profile-focus", data.focus);
    $("#profile-image").src = data.profileImage;
    $("#profile-image").alt = `${data.name} profile image placeholder`;

    const actions = $("#hero-actions");
    actions.append(
      el("a", { href: `mailto:${data.contact.email}`, class: "button button--primary" }, "Email me"),
      el("a", { href: data.contact.scholar, class: "button", ...externalAttrs(data.contact.scholar) }, "Google Scholar"),
      el("a", { href: data.contact.github, class: "button", ...externalAttrs(data.contact.github) }, "GitHub"),
      el("a", { href: data.cvPath, class: "button" }, "Download CV")
    );

    const chips = $("#hero-chips");
    data.interests.forEach((interest) => chips.append(el("span", { class: "chip", text: interest })));

    const stats = $("#quick-stats");
    const published = data.publications.filter((p) => p.category === "journal").length;
    const preprints = data.publications.filter((p) => p.category === "preprint").length;
    const talks = data.talks.length;
    [
      ["Journal papers", published],
      ["Preprints", preprints],
      ["Talks", talks]
    ].forEach(([label, value]) => stats.append(el("div", {}, el("dt", { text: label }), el("dd", { text: value }))));
  };

  const renderResearch = () => {
    setText("#research-statement", data.researchStatement);
    const container = $("#research-cards");
    data.researchThemes.forEach((theme) => {
      container.append(el("article", { class: "research-card reveal" },
        el("div", { class: "research-card__icon", text: theme.icon, "aria-hidden": "true" }),
        el("h3", { text: theme.title }),
        el("p", { text: theme.text })
      ));
    });
  };

  const renderFeatured = () => {
    const container = $("#featured-grid");
    data.featuredWork.forEach((item) => {
      container.append(el("article", { class: "feature-card reveal" },
        el("p", { class: "feature-card__meta", text: item.meta }),
        el("h3", { text: item.title }),
        el("p", { text: item.text }),
        el("div", { class: "link-row" }, item.links.map((itemLink) => link(itemLink.label, itemLink.url)))
      ));
    });
  };

  const categoryLabels = {
    all: "All",
    journal: "Journal papers",
    conference: "Conference papers",
    preprint: "Preprints"
  };

  const renderPublicationItem = (paper) => {
    const authors = el("p", { class: "publication-item__authors" });
    paper.authors.forEach((author, idx) => {
      authors.append(highlightAuthor(author));
      if (idx < paper.authors.length - 1) authors.append(document.createTextNode(", "));
    });
    const venue = el("p", { class: "publication-item__venue" },
      el("strong", { text: paper.venue }),
      document.createTextNode(` · ${paper.year}`),
      paper.status ? document.createTextNode(` · ${paper.status}`) : ""
    );
    const badges = el("div", { class: "publication-badges" },
      el("span", { class: "badge", text: categoryLabels[paper.category] || paper.category }),
      ...(paper.status ? [el("span", { class: "badge", text: paper.status })] : [])
    );
    const links = paper.links?.length ? el("div", { class: "link-row" }, paper.links.map((paperLink) => link(paperLink.label, paperLink.url))) : null;
    return el("article", { class: "publication-item reveal", "data-category": paper.category },
      authors,
      el("h3", { text: paper.title }),
      venue,
      badges,
      links
    );
  };

  const renderPublications = () => {
    const toolbar = $("#publication-toolbar");
    const list = $("#publication-list");
    const categories = ["all", ...Array.from(new Set(data.publications.map((p) => p.category)))];

    const applyFilter = (category) => {
      $$(".filter-button", toolbar).forEach((button) => button.setAttribute("aria-pressed", button.dataset.category === category ? "true" : "false"));
      $$(".publication-item", list).forEach((item) => {
        const show = category === "all" || item.dataset.category === category;
        item.hidden = !show;
      });
    };

    categories.forEach((category) => {
      toolbar.append(el("button", {
        class: "filter-button",
        type: "button",
        "data-category": category,
        "aria-pressed": category === "all" ? "true" : "false",
        onclick: () => applyFilter(category)
      }, categoryLabels[category] || category));
    });

    data.publications
      .slice()
      .sort((a, b) => Number(b.year) - Number(a.year))
      .forEach((paper) => list.append(renderPublicationItem(paper)));
  };

  const renderTalks = () => {
    const container = $("#talks-list");
    data.talks.forEach((talk) => {
      container.append(el("article", { class: "timeline-item reveal" },
        el("div", { class: "timeline-item__date", text: talk.date }),
        el("div", {},
          el("h3", { text: talk.title }),
          el("p", { text: [talk.venue, talk.location].filter(Boolean).join(", ") }),
          talk.note ? el("p", { text: talk.note }) : null
        )
      ));
    });
  };

  const renderEducation = () => {
    const container = $("#education-list");
    data.education.forEach((edu) => {
      container.append(el("article", { class: "timeline-item reveal" },
        el("div", { class: "timeline-item__date", text: edu.date }),
        el("div", {},
          el("h3", { text: edu.institution }),
          el("p", { text: [edu.degree, edu.location].filter(Boolean).join(" · ") }),
          edu.advisor ? el("p", { text: `Advisor: ${edu.advisor}` }) : null,
          edu.thesis ? el("p", { text: `Thesis: ${edu.thesis}` }) : null
        )
      ));
    });
  };

  const renderProfileSections = () => {
    const mentoring = $("#mentoring-card");
    mentoring.append(el("h3", { text: "Mentoring" }));
    mentoring.append(el("ul", { class: "info-list" }, data.mentoring.map((item) => el("li", {},
      el("strong", { text: `${item.title} · ${item.date}` }),
      el("span", { text: item.institution }),
      el("span", { text: item.text })
    ))));

    const awards = $("#awards-card");
    awards.append(el("h3", { text: "Honors and awards" }));
    awards.append(el("ul", { class: "info-list" }, data.awards.map((award) => el("li", {},
      el("strong", { text: award.title }),
      el("span", { text: [award.date, award.note].filter(Boolean).join(" · ") })
    ))));

    const skills = $("#skills-card");
    skills.append(el("h3", { text: "Technical skills" }));
    data.skills.forEach((group) => {
      skills.append(el("div", { class: "skill-group" },
        el("strong", { text: group.level }),
        el("div", { class: "hero__chips" }, group.items.map((item) => el("span", { class: "chip", text: item })))
      ));
    });
  };

  const renderContact = () => {
    setText("#contact-text", `For collaboration, talks, or research conversations, contact ${data.shortName} by email or visit the profiles below.`);
    const container = $("#contact-links");
    container.append(
      el("a", { href: `mailto:${data.contact.email}`, class: "button button--primary" }, data.contact.email),
      el("a", { href: data.contact.github, class: "button", ...externalAttrs(data.contact.github) }, "GitHub"),
      el("a", { href: data.contact.scholar, class: "button", ...externalAttrs(data.contact.scholar) }, "Google Scholar")
    );
    setText("#footer-name", `© ${new Date().getFullYear()} ${data.name}`);
    setText("#footer-updated", `Last updated: ${data.lastUpdated}`);
  };

  const initNavigation = () => {
    const toggle = $(".mobile-nav-toggle");
    const nav = $("#site-nav");
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
    $$("#site-nav a").forEach((navLink) => navLink.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
    const header = $("[data-elevate]");
    const setElevated = () => header.classList.toggle("is-elevated", window.scrollY > 6);
    setElevated();
    window.addEventListener("scroll", setElevated, { passive: true });
  };

  const initTheme = () => {
    const saved = localStorage.getItem("preferred-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = saved || (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = current;
    $(".theme-toggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("preferred-theme", next);
    });
  };

  const initReveal = () => {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  };

  const injectStructuredData = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: data.name,
      jobTitle: data.title,
      affiliation: { "@type": "CollegeOrUniversity", name: data.affiliation },
      email: `mailto:${data.contact.email}`,
      url: window.location.href,
      sameAs: [data.contact.github, data.contact.scholar]
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(schema) }));
  };

  const init = () => {
    renderHero();
    renderResearch();
    renderFeatured();
    renderPublications();
    renderTalks();
    renderEducation();
    renderProfileSections();
    renderContact();
    initTheme();
    initNavigation();
    initReveal();
    injectStructuredData();
  };

  document.addEventListener("DOMContentLoaded", init);
})();
