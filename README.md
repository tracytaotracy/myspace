# Echelon Research

## Site structure

This is a dependency-free static site designed for publishing essays as individual
HTML pages:

```text
index.html                         Home page and featured essays
assets/css/styles.css              Shared site styles
assets/js/selection-demo.js        Interactive article demo behavior
categories/                        Category landing pages
essays/                             Publishable essay pages
```

To publish a new essay, copy an existing page in `essays/`, update its metadata
and content, then add a card linking to it from the relevant category page and
`index.html`. Keep shared presentation in `assets/css/styles.css` and interactive
behavior in `assets/js/` rather than embedding styles or scripts in articles.
