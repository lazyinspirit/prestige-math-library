#!/usr/bin/env node
// Whitespace-tolerant exact find/replace for hard-wrapped markdown.
//   node scratchpad/wsreplace.mjs <file> <oldFile> <newFile> [--dry]
// The old text is matched with every run of whitespace treated as \s+, so a
// sentence that the file hard-wraps across lines still matches. Fails loudly on
// zero or multiple matches. The replacement is re-wrapped to 78 columns using
// the indentation of the matched text's first line.
import { readFileSync, writeFileSync } from 'node:fs';

const [file, oldFile, newFile] = process.argv.slice(2);
const dry = process.argv.includes('--dry');
const src = readFileSync(file, 'utf8');
const oldText = readFileSync(oldFile, 'utf8').trim();
const newText = readFileSync(newFile, 'utf8').trim();

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const re = new RegExp(oldText.split(/\s+/).map(esc).join('\\s+'), 'g');
const hits = [...src.matchAll(re)];
if (hits.length !== 1) { console.error(`${file}: ${hits.length} matches, expected exactly 1`); process.exit(1); }

const start = hits[0].index;
const lineStart = src.lastIndexOf('\n', start - 1) + 1;
const indent = (src.slice(lineStart, start).match(/^\s*/) ?? [''])[0];
const col = start - lineStart;

// re-wrap: first line continues at the matched column, later lines get `indent`
const words = newText.split(/\s+/);
let out = '', line = ' '.repeat(col);
let first = true;
for (const w of words) {
  const candidate = line.length === col && first ? line + w : line + ' ' + w;
  if (candidate.length > 78 && line.trim()) { out += (first ? line.slice(col) : line) + '\n'; line = indent + w; first = false; }
  else line = candidate;
}
out += first ? line.slice(col) : line;

const result = src.slice(0, start) + out + src.slice(start + hits[0][0].length);
if (dry) { console.log('--- would replace ---\n' + hits[0][0] + '\n--- with ---\n' + out); }
else { writeFileSync(file, result); console.log(`replaced 1 span in ${file} (${hits[0][0].length} -> ${out.length} chars)`); }
