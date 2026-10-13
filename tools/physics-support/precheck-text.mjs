// The normative checker reads one line per step; Markdown reads one paragraph.
// Join only soft line breaks within numbered paragraphs. Keep paragraph/step
// boundaries and every mathematical token, citation and justification intact.
export function normalizeNumberedParagraphs(text) {
  return text.split(/(\r?\n[ \t]*\r?\n)/).map(block =>
    /^[ \t]*(?:\*\*)?\d+\.\d+\b/.test(block)
      ? block.replace(/\r?\n(?![ \t]*(?:\*\*)?\d+\.\d+\b)/g, ' ')
      : block
  ).join('');
}

/** Facts declarations plus proof steps, with existing legacy-body support. */
export function checkableText(md) {
  const fa = md.split(/\n## Facts & Assumptions\n/);
  if (fa.length >= 2) return normalizeNumberedParagraphs(fa[fa.length - 1].replace(/^## .*$/gm, '').trim());
  const body = md.split(/\n## (Proof|Refutation|Verification|Counterexample)\n/);
  if (body.length >= 3) return normalizeNumberedParagraphs(body[body.length - 1].trim());
  return null;
}
