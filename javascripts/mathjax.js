// Ref: https://docs.mathjax.org/en/latest/options/index.html
// Ref: https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/#arithmatex
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
