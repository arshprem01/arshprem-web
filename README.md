# arshprem-web

A lightweight personal website / portfolio built with HTML, JavaScript, and CSS.

## Demo
Add your live demo URL here (e.g. https://arshprem01.github.io/arshprem-web).

## Project overview
This repo contains a static site (mostly HTML) with small JavaScript and CSS. It’s simple to host on GitHub Pages, Netlify, Vercel, or any static host.

## Features
- Static HTML pages
- Minimal JavaScript for interactivity
- Easy to customize and deploy
- Mobile-friendly (if responsive CSS is added)

## Quick start

Clone the repo:

```
git clone https://github.com/arshprem01/arshprem-web.git
cd arshprem-web
```

Open locally:

- Option A: Open index.html directly in your browser.
- Option B: Use a static server (recommended):

```
npx live-server
# or
npx http-server -c-1
# or (if you have Python)
python3 -m http.server 8000
```

## Example code snippets

Sample index.html (basic structure)

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>arshprem-web</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header>
    <h1>Welcome to my site</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="projects.html">Projects</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main id="main-content">
    <section>
      <h2>About me</h2>
      <p>Short intro about you.</p>
    </section>
  </main>

  <script src="js/main.js"></script>
</body>
</html>
```

Sample CSS (css/style.css)

```
:root{
  --bg: #fff;
  --text: #111;
  --accent: #0070f3;
}
*{box-sizing:border-box}
body{
  margin:0;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;
  background:var(--bg);
  color:var(--text);
  line-height:1.4;
}
header{
  padding:1rem;
  border-bottom:1px solid #eee;
}
nav a{
  margin-right:1rem;
  color:var(--accent);
  text-decoration:none;
}
```

Sample JS (js/main.js)

```
// Simple DOM ready and theme toggle example
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});
```

## Folder structure (suggested)

```
/
├─ index.html
├─ about.html
├─ projects.html
├─ contact.html
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
└─ assets/
   └─ images/
```

## Deployment

GitHub Pages (branch = main, folder = /):
1. Push code to main.
2. Settings → Pages → Choose branch `main` and root `/`.
3. Save; the site will publish at https://arshprem01.github.io/arshprem-web (or your username.github.io).

Deploy to Netlify or Vercel:
- Connect the repo and follow deploy instructions (auto build for static sites).

## Contributing
1. Fork the repo.
2. Create a branch: git checkout -b feature-name
3. Commit changes: git commit -m "Describe change"
4. Push and open a pull request.

## License
Add a license here (MIT recommended). Tell me which license you prefer and I can add a LICENSE file.

## Contact
- GitHub: https://github.com/arshprem01
- Email: (add your email)

---

If you want any changes (add license, demo URL, screenshots, or different wording), tell me and I can update the file.
