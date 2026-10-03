// Independent source inventory, compared with the application's paragraph parser
// and actual ItemBody output. No content mutations or invented justifications.
export const LAYOUT_GATES = ['proof-step-separation', 'proof-blue-tags'];
const tail = /\s*(\[[^\[\]]+\])\s*(∎)?\s*$/;

// Preserve offsets/newlines while masking mathematics, code and HTML comments.
// A phase.step inside these spans is not an authored proof-step marker.
export function maskNonProse(text) {
  let out = '', i = 0;
  const blank = s => s.replace(/[^\r\n]/g, ' ');
  while (i < text.length) {
    const rest = text.slice(i);
    const fence = (i === 0 || text[i - 1] === '\n') && rest.match(/^ {0,3}(`{3,}|~{3,})[^\n]*\n/);
    if (fence) {
      const close = new RegExp('^ {0,3}' + fence[1][0] + '{' + fence[1].length + ',}[^\\n]*(?:\\n|$)', 'm');
      const end = close.exec(rest.slice(fence[0].length));
      const n = end ? fence[0].length + end.index + end[0].length : rest.length;
      out += blank(rest.slice(0, n)); i += n; continue;
    }
    if (rest.startsWith('<!--')) {
      const end = text.indexOf('-->', i + 4); const n = end < 0 ? text.length - i : end + 3 - i;
      out += blank(text.slice(i, i + n)); i += n; continue;
    }
    if ((text[i] === '$' || text[i] === '`') && (i === 0 || text[i - 1] !== '\\')) {
      const mark = text[i] === '$' ? (rest.startsWith('$$') ? '$$' : '$') : rest.match(/^`+/)[0];
      let end = text.indexOf(mark, i + mark.length);
      while (end >= 0 && text[end - 1] === '\\') end = text.indexOf(mark, end + mark.length);
      const n = end < 0 ? text.length - i : end + mark.length - i;
      out += blank(text.slice(i, i + n)); i += n; continue;
    }
    out += text[i++];
  }
  return out;
}

export function analyzeProof(body, { PROOFY, splitSections, paragraphs, validTag, render }) {
  const errors = [], rows = [];
  let searchFrom = 0;
  for (const section of splitSections(body)) {
    if (!section.heading || !PROOFY.has(section.heading)) continue;
    const start = body.indexOf(section.content, searchFrom);
    searchFrom = start + section.content.length;
    const lineAt = offset => body.slice(0, start + offset).split('\n').length;
    const add = (gate, code, step, offset, message) => errors.push({ gate, code, section: section.heading, step, line: lineAt(offset), message });
    const masked = maskNonProse(section.content);
    const source = [...masked.matchAll(/^\s*(?:\*\*)?(\d+\.\d+)(?:\*\*)?(?=\s)/gm)]
      .map(m => ({ label: m[1], offset: m.index + m[0].indexOf(m[1]) }));
    const paras = paragraphs(section.content);
    const parsed = paras.map(p => p.match(/^(\d+\.\d+)\s+([\s\S]*)$/)).filter(Boolean);
    const labels = source.map(s => s.label);
    if (!source.length) add('proof-step-separation', 'no-steps', null, 0, 'Proof-like section has no numbered steps.');
    if (new Set(labels).size !== labels.length) add('proof-step-separation', 'duplicate-step', null, 0, 'Step labels must be unique within the section.');
    if (JSON.stringify(labels) !== JSON.stringify(parsed.map(m => m[1]))) {
      add('proof-step-separation', 'merged-or-hidden-step', null, 0, `Source steps ${labels.join(', ')} differ from paragraph steps ${parsed.map(m => m[1]).join(', ')}; insert blank lines before numbered steps and use plain phase.step labels.`);
    }
    let cursor = 0, current = null, ended = false;
    const expectedTags = [];
    for (const p of paras) {
      const offset = section.content.indexOf(p, cursor); cursor = offset + p.length;
      const step = p.match(/^(\d+\.\d+)\s+([\s\S]*)$/);
      if (!step) {
        if (current && !ended) add('proof-step-separation', 'split-step', current, offset, 'Unnumbered continuation splits the argument from its numbered row; use single newlines inside a step.');
        continue; // introductions and notes after the final tagged QED are prose.
      }
      current = step[1];
      const ending = step[2].match(tail);
      // Legacy final steps sometimes put ∎ immediately before the trailing
      // tags. Their chips and closing notes render correctly; do not classify
      // those notes as a split argument. New prompts use canonical [tags] ∎.
      ended = !!ending?.[2] || !!(ending && /∎\s*$/.test(step[2].slice(0, ending.index)));
      if (ended && current !== labels.at(-1)) add('proof-step-separation', 'early-qed', current, offset, 'QED must close the final numbered step.');
      const tags = ending ? ending[1].slice(1, -1).split(',').map(t => t.trim()) : [];
      if (!tags.length || tags.some(t => !t || !validTag(t))) {
        add('proof-blue-tags', 'missing-or-invalid-tags', current, offset, 'End the complete step with valid [justifications], optionally followed by ∎; put punctuation before the tags.');
      }
      expectedTags.push(tags);
    }
    const rendered = render(`## ${section.heading}\n${section.content}`);
    if (JSON.stringify(labels) !== JSON.stringify(rendered.map(r => r.label))) {
      add('proof-step-separation', 'rendered-row-mismatch', null, 0, 'Rendered proof rows do not match the independent source step inventory.');
    }
    for (let i = 0; i < rendered.length; i++) {
      if (!rendered[i].tags.length || JSON.stringify(rendered[i].tags) !== JSON.stringify(expectedTags[i])) {
        add('proof-blue-tags', 'rendered-chip-mismatch', rendered[i].label, source[i]?.offset ?? 0, 'Rendered blue chips are missing or differ from the trailing source justifications.');
      }
    }
    rows.push({ section: section.heading, sourceSteps: source.length, renderedSteps: rendered.length });
  }
  return { rows, errors };
}
