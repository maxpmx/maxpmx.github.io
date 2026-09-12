# Minxing Pang — Academic Website

A compact, dependency-free academic website at https://maxpmx.github.io/.

## Layout

The profile and portrait sit beside six sections: Overview, Research, Publications,
Talks, Education, and Contact. Only the active tab is displayed. On phones, the
profile becomes a compact header and the tabs stay visible while reading.

- Each tab has a shareable URL, such as `/#research` or `/#publications`.
- Browser Back/Forward restores the selected tab. Older `/#top` and `/#featured`
  links continue to work.
- Arrow keys, Home, and End navigate tabs; Enter or Space activates them.
- Publications support keyword search, category filters, and three papers per page.
- Research details, awards, mentoring, and skills expand in place.
- Light/dark appearance follows the system until a preference is selected.
- Printing includes every section, all publications, and expanded details.

## Edit content

Most content lives in `site-data.js`, including the profile, research projects,
publications, presentations, education, awards, mentoring, and skills. Update the
`lastUpdated` field and the date in `sitemap.xml` when making content changes.

- `index.html`: page structure and static fallback profile.
- `styles.css`: responsive layout, typography, themes, and print styles.
- `script.js`: content rendering, accessible tabs, publication filters, and search.
- `research-figures.js`: shared SVG research schematics and compact project illustrations.
  Figure colors are defined by the `--fig-*` variables in `styles.css`.
- `assets/minxing-pang.png`: current portrait, supplied September 2026.
- `assets/cv.pdf`: public CV; its source is `assets/cv-public-source.tex`.

To replace the portrait, add the new image to `assets/` and update `profileImage`
in `site-data.js`, the image fallback in `index.html`, and its Open Graph image URL.
Keep the HTML fallback profile synchronized when updating personal details.

The public website and CV omit the phone number and reference email addresses.

## Preview and verify

No installation or build step is required:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Check the six tabs, direct links, Back/Forward,
keyboard navigation, publication search/filter/page combinations, expandable
sections, and both themes at desktop and mobile widths.

```bash
node --check script.js
node --check site-data.js
git diff --check
```

## Deploy

GitHub Pages serves the root of the `master` branch of `maxpmx/maxpmx.github.io`.
Pushing updates to `master` publishes the site. The existing
`.github/workflows/pages.yml` also deploys this static directory on pushes to
`master`. No Jekyll or package build is needed.

`netlify.toml` and `vercel.json` are optional configurations for other hosts;
they are not required for the current GitHub Pages deployment.
