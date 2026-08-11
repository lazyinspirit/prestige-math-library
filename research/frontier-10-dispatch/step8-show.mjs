#!/usr/bin/env node
// step8-show.mjs — Alpha's step-8 reading aid. Prints the live rejections for a
// page-unit (A page, its -examples companion, or a bare id prefix) with both
// lanes' verdict text, so the adjudication is done against what the judge
// actually said rather than a paraphrase of it.
//
//   node research/frontier-10-dispatch/step8-show.mjs <page-substring> [--lanes BOTH]
//   node research/frontier-10-dispatch/step8-show.mjs --id <item-id>
//   node research/frontier-10-dispatch/step8-show.mjs --hash <item-id>   # item_sha256 now

import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const TRIAGE = 'research/frontier-10-step8-triage.json';
const argv = process.argv.slice(2);
const rows = JSON.parse(readFileSync(TRIAGE, 'utf8'));

const stripVerification = (text) => {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!m) return text;
  const fm = m[1].replace(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/m, '');
  return fm + '\n---\n' + m[2];
};
const itemHash = (id) =>
  createHash('sha256').update(stripVerification(readFileSync(`items/${id}.md`, 'utf8'))).digest('hex');

if (argv[0] === '--hash') {
  for (const id of argv.slice(1)) console.log(`${itemHash(id)}  ${id}`);
  process.exit(0);
}

const laneFilter = argv.includes('--lanes') ? argv[argv.indexOf('--lanes') + 1] : null;
const byId = argv[0] === '--id';
const key = byId ? argv[1] : argv[0];

const selected = rows.filter((r) =>
  (byId ? r.id === key : r.page.includes(key)) && (!laneFilter || r.lanes === laneFilter));

for (const r of selected) {
  console.log(`\n${'='.repeat(78)}\n[${r.lanes}] ${r.id}   (${r.page})`);
  if (existsSync(`items/${r.id}.md`)) console.log(`item_sha256 ${itemHash(r.id)}`);
  if (r.ds) console.log(`\n  DEEPSEEK ctx=${r.ds_ctx}\n  ${r.ds.replace(/\n/g, '\n  ')}`);
  if (r.terra) console.log(`\n  TERRA    ctx=${r.terra_ctx}\n  ${r.terra.replace(/\n/g, '\n  ')}`);
}
console.log(`\n--- ${selected.length} rejection(s) ---`);
