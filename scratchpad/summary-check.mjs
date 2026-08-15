#!/usr/bin/env node
// Check a proposed A-page summary against the page-summary contract:
// exactly two nonempty prose paragraphs, each under 150 words.
//   node scratchpad/summary-check.mjs <file-with-summary>
import { readFileSync } from 'node:fs';
const text = readFileSync(process.argv[2], 'utf8');
const paras = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
console.log(`paragraphs: ${paras.length}`);
paras.forEach((p, i) => {
  const words = p.split(/\s+/).filter(Boolean).length;
  console.log(`  P${i + 1}: ${words} words ${words < 150 ? 'OK' : 'OVER 150'}`);
});
if (paras.length !== 2) console.log('FAIL: must be exactly two paragraphs');
