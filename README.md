# MultLab — bilingual institutional website

Static, responsive website prepared for GitHub Pages.

## Languages

The site opens in **English** and includes an **EN / PT** language switcher in the navigation. The selected language is stored in `localStorage`.

## Structure

```text
multlab-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.png
│   └── logo-transparent.png
└── README.md
```

No Node, npm, framework or build step is required.

## GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

## Editing

- `index.html`: structure, links, publication list and static content.
- `css/style.css`: visual identity and responsive layout.
- `js/main.js`: menu, theme and EN/PT translations.
- `assets/`: logos and future team/project images.

The translation system is intentionally simple: English is the base content in `index.html`; Portuguese translations are kept together in the `translations.pt` object in `js/main.js`.

## Content note

The website distinguishes the laboratory's institutional status from the editorial synthesis of research areas. Before definitive institutional publication, the coordinators should review names, titles, emails, research descriptions, publications, addresses and links.
