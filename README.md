# Minxing Pang - Academic Website

A modern, dependency-free academic personal website generated from the CV. It is designed to be easy to update: most content lives in `site-data.js`, while visual styling lives in `styles.css`.

## What is included

- `index.html` - the main page structure.
- `site-data.js` - your editable profile, publications, talks, education, awards, mentoring, and skills.
- `styles.css` - visual design, responsive layout, light/dark theme, and cards.
- `script.js` - renders the editable data into the page.
- `assets/cv.pdf` - public-facing CV linked from the website.
- `assets/cv-public-source.tex` - LaTeX source for the public-facing CV.
- `.github/workflows/pages.yml` - optional GitHub Pages deployment workflow.
- `netlify.toml` and `vercel.json` - optional deployment config for Netlify/Vercel.

## How to update the site

1. Open `site-data.js`.
2. Edit text inside the quoted strings or add new objects to arrays such as `publications`, `talks`, or `awards`.
3. Save, commit, and push. No build step is needed.

Examples:

```js
publications: [
  {
    category: "journal",
    year: "2026",
    title: "New paper title",
    authors: ["Pang M", "Collaborator A", "Collaborator B"],
    venue: "Journal Name",
    status: "Published",
    links: [
      { label: "Paper", url: "https://example.com" },
      { label: "Code", url: "https://github.com/example/repo" }
    ]
  }
]
```

To change the visual style, edit the CSS variables at the top of `styles.css`, especially `--accent`, `--accent-2`, `--accent-3`, and `--bg`.

## Local preview

Because the site has no build step, you can open `index.html` directly in a browser. For the most realistic preview, run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Recommended hosting

### Option A: GitHub Pages - recommended

Best for an academic personal site that you want to update through GitHub commits.

1. Create a repository named `maxpmx.github.io` or `minxing-pang.github.io`.
2. Upload all files in this folder to the repository root.
3. In repository settings, enable Pages. You can use the included workflow by selecting GitHub Actions as the source.
4. Push edits to `main`; the site redeploys automatically.
5. Add a custom domain later by configuring a `CNAME` file and DNS records.

### Option B: Netlify

Best if you want the easiest manual deployment. Drag the folder into Netlify Drop for a quick launch, or connect the GitHub repository for automatic deployments.

### Option C: Cloudflare Pages

Best if you already use Cloudflare for DNS or want strong custom-domain integration and fast global static hosting. Import the GitHub repository and set the build command to blank with publish directory `.`.

### Option D: Vercel

Best if you later move to Next.js/React. For this static version, Vercel can deploy the files as-is, but it is more platform than you need right now.

## Notes before publishing

- The phone number from the CV is intentionally not included in the website data or public-facing CV PDF to reduce scraping.
- Reference emails are intentionally omitted from the public site and public-facing CV PDF; add them only if you want those emails public.
- Replace `assets/profile-placeholder.svg` with a headshot named `profile.jpg` or `profile.png`, then update `profileImage` in `site-data.js`.
- After deployment, update `robots.txt` with your final sitemap URL if you create one.
