#!/usr/bin/env node
// Join display math that a repair hard-wrapped across source lines.
//
// rendercheck's rule: a `$$…$$` block must be one source line, because the
// renderer treats a hard line break inside it as a break in the display. Item
// repairs legitimately rewrap prose and can split a display block while doing
// so; this restores the house form (`$$…$$`, no padding) without touching any
// character of the mathematics.
//
//   node tools/fix-multiline-display.mjs items/<id>.md [more.md ...]
//
// Only spans that actually contain a newline are rewritten; single-line blocks
// are left byte-identical, so running this over a clean corpus is a no-op.

import { readFileSync, writeFileSync } from 'node:fs';

/** Join every multi-line `$$…$$` span to one line. Pure, for tests. */
export function fixMultilineDisplay(text) {
  let changed = false;
  const out = text.replace(/\$\$([\s\S]*?)\$\$/g, (whole, inner) => {
    if (!/\n/.test(inner)) return whole;
    changed = true;
    return `$$${inner.replace(/\s*\n\s*/g, ' ').replace(/[ \t]{2,}/g, ' ').trim()}$$`;
  });
  return { text: out, changed };
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const files = process.argv.slice(2);
  if (!files.length) {
    console.error('usage: node tools/fix-multiline-display.mjs items/<id>.md [more.md ...]');
    process.exit(2);
  }
  let fixed = 0;
  for (const file of files) {
    const before = readFileSync(file, 'utf8');
    const { text, changed } = fixMultilineDisplay(before);
    if (!changed) { console.log(`unchanged ${file}`); continue; }
    writeFileSync(file, text);
    fixed += 1;
    console.log(`joined ${file}`);
  }
  console.log(`fix-multiline-display: ${fixed} file(s) rewritten`);
}
