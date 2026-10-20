#!/usr/bin/env node
// apply-risk-reviews.mjs — write Alpha risk_review dispositions into the owning batch contracts.
//
//   node tools/apply-risk-reviews.mjs --run frontier-15 --file /tmp/reviews.json
//
// The input is {reviewer, refuter?, reviews: {id: notes}}.  Each id is routed to
// whichever batch contract already holds its entry, so a review can never land in
// the merged file alone — the gates re-merge from the batch files and a
// merged-only edit comes back stale on the next merge.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const option = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : undefined; };
const run = option('--run');
const file = option('--file');
if (!run || !file) { console.error('usage: --run <name> --file <reviews.json>'); process.exit(2); }

const input = JSON.parse(readFileSync(file, 'utf8'));
const { reviewer, refuter, reviews } = input;
if (!reviewer || !reviews) { console.error('input needs reviewer and reviews'); process.exit(2); }

const researchDir = join(REPO, 'research');
const batches = readdirSync(researchDir)
  .filter((name) => name.startsWith(`${run}-batch-`) && name.endsWith('.proof-contracts.json'))
  .map((name) => {
    const match = name.match(/-batch-(\d+)\.proof-contracts\.json$/);
    return match ? { name, index: Number(match[1]) } : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.index - b.index)
  .map(({ name, index }) => {
    const path = join(researchDir, name);
    return { path, index, document: JSON.parse(readFileSync(path, 'utf8')), dirty: false };
  });

const applied = [];
const orphans = [];
for (const [id, notes] of Object.entries(reviews)) {
  const owner = batches.find((batch) => batch.document.contracts?.[id]);
  if (!owner) { orphans.push(id); continue; }
  if (typeof notes !== 'string' || notes.trim().length < 120) { orphans.push(`${id} (notes too thin to be a real disposition)`); continue; }
  owner.document.contracts[id].risk_review = { status: 'complete', reviewer, ...(refuter ? { refuter } : {}), notes };
  owner.dirty = true;
  applied.push([id, owner.index]);
}

for (const batch of batches) if (batch.dirty) writeFileSync(batch.path, `${JSON.stringify(batch.document, null, 1)}\n`);
console.log(JSON.stringify({ applied: applied.length, batches: [...new Set(applied.map(([, i]) => i))].sort(), orphans }, null, 1));
