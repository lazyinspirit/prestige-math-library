import renderMathInElement from '/universe/vendor/katex/contrib/auto-render.mjs';

/** Preserve plain text as text; render only explicitly delimited mathematical notation. */
export function renderTitle(element, title) {
  element.textContent = title;
  renderMathInElement(element, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    throwOnError: false,
    trust: false,
    strict: 'ignore',
  });
}
