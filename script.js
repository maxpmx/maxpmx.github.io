document.documentElement.classList.add("js");

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

  const highlightAuthor = (author) => {
    const span = el("span", { text: author });
    if (/^Pang M$/.test(author)) span.className = "me";
    return span;
  };

  const setText = (selector, text) => {
    const node = $(selector);
    if (node) node.textContent = text || "";
  };

  const renderHero = () => {
    setText("#hero-kicker", `Ph.D. candidate · Applied Mathematics · Penn`);
    setText("#hero-title", data.name);
    setText("#hero-headline", data.tagline);
    setText("#hero-subtitle", data.introduction);
    setText("#profile-focus", data.focus);

    const profileImage = $("#profile-image");
    if (profileImage) {
      const fallback = "assets/profile-placeholder.svg";
      profileImage.src = data.profileImage || fallback;
      profileImage.alt = `${data.name} portrait`;
      profileImage.addEventListener("error", () => {
        if (!profileImage.src.endsWith(fallback)) {
          profileImage.src = fallback;
          profileImage.alt = `${data.name} initials`;
        }
      }, { once: true });
    }

    const facts = $("#profile-facts");
    facts.replaceChildren();
    data.profileFacts?.forEach((fact) => {
      const factValue = fact.url
        ? el("a", { href: fact.url, ...externalAttrs(fact.url) }, fact.value)
        : document.createTextNode(fact.value);
      facts.append(el("div", { class: "profile-card__fact" },
        el("dt", { text: fact.label }),
        el("dd", {}, factValue)
      ));
    });

    const actions = $("#hero-actions");
    actions.replaceChildren();
    actions.append(
      el("a", { href: "#publications", class: "button button--primary" }, "View publications"),
      el("a", { href: data.cvPath, class: "button" }, "CV"),
      el("a", { href: `mailto:${data.contact.email}`, class: "button" }, "Email")
    );

    const profileLinks = $("#hero-profile-links");
    profileLinks.replaceChildren();
    [
      { label: "Google Scholar", url: data.contact.scholar },
      { label: "GitHub", url: data.contact.github },
      { label: "ORCID", url: data.contact.orcid }
    ].forEach((item) => profileLinks.append(el("a", { href: item.url, ...externalAttrs(item.url) }, `${item.label} ↗`)));
  };

  const renderResearch = () => {
    setText("#research-statement", data.researchStatement);
    const pathway = $("#research-pathway");
    pathway.replaceChildren();
    data.researchPathway?.forEach((step, index) => {
      pathway.append(el("div", { class: "research-pathway__step" },
        el("span", { class: "research-pathway__number", text: String(index + 1).padStart(2, "0") }),
        el("span", { text: step })
      ));
    });

    const container = $("#research-cards");
    container.replaceChildren();
    data.researchThemes.forEach((theme) => {
      container.append(el("article", { class: "research-card reveal" },
        el("div", { class: "research-card__figure", html: researchFigures[theme.figure] || "", "aria-hidden": "true" }),
        el("h3", { text: theme.title }),
        el("p", { text: theme.text })
      ));
    });
  };

  const renderFeatured = () => {
    const container = $("#featured-grid");
    data.featuredWork.forEach((item, index) => {
      const highlights = item.highlights?.length
        ? el("ul", { class: "feature-card__highlights" }, item.highlights.map((highlight) => el("li", { text: highlight })))
        : null;

      container.append(el("article", { class: `feature-card reveal${index === 0 ? " feature-card--lead" : ""}` },
        el("div", { class: "feature-card__topline" },
          el("p", { class: "feature-card__label", text: item.label }),
          el("span", { class: "feature-card__number", text: String(index + 1).padStart(2, "0"), "aria-hidden": "true" })
        ),
        el("p", { class: "feature-card__meta", text: item.meta }),
        el("h3", { text: item.title }),
        el("p", { class: "feature-card__description", text: item.text }),
        highlights,
        el("div", { class: "link-row" }, item.links.map((itemLink) => link(itemLink.label, itemLink.url)))
      ));
    });
  };

  const categoryLabels = {
    all: "All",
    journal: "Journals",
    conference: "Conference",
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
      paper.role ? el("span", { class: "badge badge--role", text: paper.role }) : null,
      el("span", { class: "badge", text: categoryLabels[paper.category] || paper.category })
    );

    const links = paper.links?.length ? el("div", { class: "link-row" }, paper.links.map((paperLink) => link(paperLink.label, paperLink.url))) : null;

    return el("article", { class: "publication-item reveal", "data-category": paper.category },
      el("div", { class: "publication-item__year", text: paper.year }),
      el("div", { class: "publication-item__main" },
        el("h3", { text: paper.title }),
        authors,
        venue
      ),
      el("div", { class: "publication-item__aside" }, badges, links)
    );
  };

  const renderPublications = () => {
    const list = $("#publication-list");

    data.publications
      .slice()
      .sort((a, b) => (b.date || b.year).localeCompare(a.date || a.year))
      .forEach((paper) => list.append(renderPublicationItem(paper)));
  };

  const renderTalks = () => {
    const container = $("#talks-list");
    data.talks
      .slice()
      .sort((a, b) => (b.sortDate || b.date).localeCompare(a.sortDate || a.date))
      .forEach((talk) => {
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
          edu.advisor ? el("p", {},
            document.createTextNode("Advisor: "),
            edu.advisorUrl
              ? el("a", { href: edu.advisorUrl, ...externalAttrs(edu.advisorUrl) }, edu.advisor)
              : document.createTextNode(edu.advisor)
          ) : null,
          edu.thesis ? el("p", { text: `Thesis: ${edu.thesis}` }) : null
        )
      ));
    });
  };

  const renderContact = () => {
    setText("#contact-text", `For collaboration, talks, or research conversations, contact ${data.shortName} by email or visit the profiles below.`);
    const container = $("#contact-links");
    container.append(
      el("a", { href: `mailto:${data.contact.email}`, class: "button button--primary" }, data.contact.email),
      el("a", { href: data.contact.scholar, class: "button", ...externalAttrs(data.contact.scholar) }, "Scholar"),
      el("a", { href: data.contact.github, class: "button", ...externalAttrs(data.contact.github) }, "GitHub"),
      el("a", { href: data.contact.orcid, class: "button", ...externalAttrs(data.contact.orcid) }, "ORCID")
    );
    setText("#footer-name", `© ${new Date().getFullYear()} ${data.name}`);
    setText("#footer-updated", `Last updated: ${data.lastUpdated}`);
  };

  const initNavigation = () => {
    const toggle = $(".mobile-nav-toggle");
    const nav = $("#site-nav");
    const closeNav = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
    $$("#site-nav a").forEach((navLink) => navLink.addEventListener("click", closeNav));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (nav.classList.contains("is-open") && !nav.contains(event.target) && !toggle.contains(event.target)) closeNav();
    });
    const header = $("[data-elevate]");
    const setElevated = () => header.classList.toggle("is-elevated", window.scrollY > 6);
    setElevated();
    window.addEventListener("scroll", setElevated, { passive: true });
  };

  const initTheme = () => {
    const saved = localStorage.getItem("preferred-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = saved || (prefersDark ? "dark" : "light");
    const themeToggle = $(".theme-toggle");
    const applyTheme = (theme) => {
      document.documentElement.dataset.theme = theme;
      const isDark = theme === "dark";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
      themeToggle.title = `Switch to ${isDark ? "light" : "dark"} mode`;
    };
    applyTheme(current);
    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
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
      description: data.introduction,
      affiliation: { "@type": "CollegeOrUniversity", name: data.affiliation },
      email: `mailto:${data.contact.email}`,
      image: data.profileImage,
      url: window.location.href,
      sameAs: [data.contact.github, data.contact.scholar, data.contact.orcid]
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
    renderContact();
    initTheme();
    initNavigation();
    initReveal();
    injectStructuredData();
  };

  document.addEventListener("DOMContentLoaded", init);
})();
