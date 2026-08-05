#!/usr/bin/env node
// audit-batch-split.mjs — apply a declared batch split to generated audit manifests.
//
//   node tools/audit-batch-split.mjs --run wave5 [--dir research/audit] [--json]
//
// WHY THIS EXISTS. `rounds.mjs --audit-batches` emits one manifest per category
// per wave. That is raw SCOPE, not a work assignment: the two-A/B-pair capacity
// rule binds the Audit-Beta assigned to a batch, so a generated manifest wider
// than two pairs is not yet a work assignment (AUDIT-WORKFLOW.md §4). It is not
// an illegal manifest, and nothing mechanical rejects it: `content-policy.mjs`
// skips `batch-a-pair-cap` under `--audit` by deliberate design, because the cap
// is a property of the assignment rather than of the manifest text. So an
// over-cap manifest reaches A2 looking fine and hands one Beta five pairs.
//
// Splitting used to be a manual A0 step, which meant the driver's own A0
// regenerated straight over it: wave 5's topology manifest is five pairs, and a
// hand split applied before launch would have been erased by the first action of
// the run that consumed it. The split is therefore declared as DATA, applied
// after generation, every time A0 runs.
//
// The declaration is `<dir>/<run>-batch-split.json`:
//
//   { "wave5-topology": {
//       "wave5-topology-countability": ["countability-axioms-and-cardinal-functions",
//                                       "the-topology-of-euclidean-space"],
//       "wave5-topology-separation":   ["separation-axioms", "nets-and-filters"],
//       "wave5-topology-function-spaces": ["function-space-topologies"] } }
//
// Keys name A pages only; each B companion rides with its A page, because the
// A/B pair is the judge's context unit and splitting one across batches would
// give two Betas half a pair each. No declaration means no split, which is the
// correct behaviour for every wave whose categories already fit.
//
// It is idempotent: applying a split whose source manifest is already gone is a
// no-op, so A0 may re-run freely.
//
// TOTALITY IS CHECKED, NOT ASSUMED. Every page of the source manifest must land
// in exactly one target, or this exits nonzero without writing. A split that
// drops a pair would silently shrink audit scope, and a wave that audits less
// than it claims is the one failure this file must never produce.

import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const option = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };

const run = option('--run');
const dir = option('--dir') ?? 'research/audit';
if (!run) {
  console.error('usage: node tools/audit-batch-split.mjs --run wave<k> [--dir research/audit] [--json]');
  process.exit(2);
}

const root = dir.startsWith('/') ? dir : join(REPO, dir);
const declaration = join(root, `${run}-batch-split.json`);
const EX = '-examples';

if (!existsSync(declaration)) {
  const message = `audit-batch-split: no ${run}-batch-split.json — nothing declared, manifests left as generated`;
  console.log(asJson ? JSON.stringify({ run, applied: false, reason: 'no declaration' }) : message);
  process.exit(0);
}

const split = JSON.parse(readFileSync(declaration, 'utf8'));
const applied = [];
const errors = [];

for (const [source, targets] of Object.entries(split)) {
  const sourcePath = join(root, `${source}.pages.json`);
  if (!existsSync(sourcePath)) {
    // Already applied on an earlier A0, or the wave regenerated without it.
    applied.push({ source, status: 'absent (already split)' });
    continue;
  }
  const pages = JSON.parse(readFileSync(sourcePath, 'utf8'));
  const byId = new Map(pages.map((p) => [p.id, p]));
  const claimed = new Set();
  const writes = [];

  for (const [target, aPages] of Object.entries(targets)) {
    const out = [];
    for (const a of aPages) {
      if (a.endsWith(EX)) { errors.push(`${target}: "${a}" is a B page; declare the A page and its companion rides along`); continue; }
      for (const id of [a, `${a}${EX}`]) {
        const page = byId.get(id);
        // A pair with no published/in-scope companion is normal: not every A
        // page has one, and an all-tagged companion drops out at generation.
        if (!page) { if (!id.endsWith(EX)) errors.push(`${target}: ${source} has no page "${id}"`); continue; }
        if (claimed.has(id)) { errors.push(`${target}: page "${id}" claimed by two targets`); continue; }
        claimed.add(id);
        out.push(page);
      }
    }
    if (!out.length) { errors.push(`${target}: resolved to no pages`); continue; }
    const aCount = out.filter((p) => p.kind === 'A').length;
    if (aCount > 2) errors.push(`${target}: ${aCount} A/B pairs — still over the two-pair Beta capacity`);
    writes.push([join(root, `${target}.pages.json`), out, aCount]);
  }

  const unplaced = pages.filter((p) => !claimed.has(p.id)).map((p) => p.id);
  if (unplaced.length) errors.push(`${source}: ${unplaced.length} page(s) placed in no target — ${unplaced.join(', ')}`);
  if (errors.length) break;

  for (const [path, out, aCount] of writes) {
    writeFileSync(path, `${JSON.stringify(out, null, 2)}\n`);
    applied.push({ target: path.replace(`${REPO}/`, ''), pages: out.length, pairs: aCount,
      items: out.reduce((sum, p) => sum + p.items.length, 0) });
  }
  // Only now: the source is redundant, and leaving it would double every id.
  unlinkSync(sourcePath);
  applied.push({ source, status: 'split and removed' });
}

if (errors.length) {
  for (const e of errors) console.error(`audit-batch-split: ${e}`);
  console.error('audit-batch-split: NOTHING WRITTEN for the failing source — fix the declaration and re-run');
  process.exit(1);
}

if (asJson) {
  console.log(JSON.stringify({ run, applied: true, results: applied }, null, 2));
} else {
  for (const row of applied) {
    console.log(row.status ? `  ${row.source}: ${row.status}`
      : `  ${row.target}  ${row.pages} pages, ${row.pairs} pair(s), ${row.items} items`);
  }
  console.log(`audit-batch-split: ${run} split applied`);
}
