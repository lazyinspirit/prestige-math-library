#!/usr/bin/env node
// wave5-apply-verified-stamps.mjs — write the A6 `verification.verified` stamp
// on items whose repair an INDEPENDENT certifier certified.
//
// The stamp is the delegated publication gate `depcheck` recognises
// (CLAUDE.md: scope `published-audit`, `delegated_by: owner`). It is written
// only after a read-only `claude-sonnet-5` certifier read the item's FINAL
// text and returned CERTIFY — Alpha authored these repairs and may not certify
// its own, so the stamp records the certifier's model, not Alpha's.
//
// Never writes `verification.audited` (that is the owner's own read) and never
// writes `verification.judge` (the orchestrator runs the sweep).
//
//   node research/audit/wave5-apply-verified-stamps.mjs --items <ids.txt> [--date 2026-08-05] [--dry-run]

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const arg = (n, d) => { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; };
const itemsFile = arg('--items');
const date = arg('--date', '2026-08-05');
const model = arg('--model', 'claude-sonnet-5');
const dry = process.argv.includes('--dry-run');
if (!itemsFile) { console.error('usage: --items <ids.txt> [--date d] [--model m] [--dry-run]'); process.exit(2); }

const ids = readFileSync(itemsFile, 'utf8').trim().split('\n').map((s) => s.trim()).filter(Boolean);

const STAMP = [
  '  verified:',
  `    model: ${model}`,
  '    verdict: certify',
  `    date: ${date}`,
  '    scope: published-audit',
  '    delegated_by: owner',
].join('\n');

let changed = 0;
for (const id of ids) {
  const path = join(REPO, 'items', `${id}.md`);
  const src = readFileSync(path, 'utf8');

  // Operate on the frontmatter only, so a body line that happens to start with
  // "verification:" can never be mistaken for the block.
  const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!fm) { console.error(`SKIP ${id}: no frontmatter`); continue; }
  const head = fm[1];

  if (/^\s+verified:/m.test(head)) { console.log(`skip ${id}: already carries verification.verified`); continue; }
  if (/^\s+audited:/m.test(head)) { console.error(`SKIP ${id}: carries verification.audited (owner's own read) — not overwriting`); continue; }
  if (/^\s+judge:/m.test(head)) { console.error(`SKIP ${id}: still carries a verification.judge stamp — a repaired item should have had it deleted; refusing`); continue; }

  const block = head.match(/^verification:\n((?:[ \t]+.*\n?)*)/m);
  if (!block) { console.error(`SKIP ${id}: no verification block`); continue; }

  const existing = block[0].replace(/\n$/, '');
  const replaced = `${existing}\n${STAMP}`;
  const newHead = head.replace(existing, replaced);
  const out = src.replace(head, newHead);
  if (out === src) { console.error(`SKIP ${id}: substitution made no change`); continue; }

  if (!dry) writeFileSync(path, out);
  changed++;
  console.log(`${dry ? 'would stamp' : 'stamped'} ${id}`);
}
console.log(`\n${dry ? 'would change' : 'changed'} ${changed}/${ids.length}`);
