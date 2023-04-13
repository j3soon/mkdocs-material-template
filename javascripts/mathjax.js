// Ref: https://docs.mathjax.org/en/latest/options/index.html
// Ref: https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/#arithmatex
// Ref: https://docs.mathjax.org/en/latest/input/tex/extensions.html
window.MathJax = {
  loader: {load: ['[tex]/color']},
  // TODO (Customize LaTeX Extension):
  // - Refer to the link below:
  //       https://docs.mathjax.org/en/latest/input/tex/extensions.html
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['color']}
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
