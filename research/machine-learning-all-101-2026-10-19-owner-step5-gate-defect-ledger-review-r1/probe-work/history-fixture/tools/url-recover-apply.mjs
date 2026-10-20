#!/usr/bin/env node
// url-recover-apply — the mechanical half of RECOVER BEFORE REPLACE.
//
//   node tools/url-recover-apply.mjs --liveness <sweep-artifact> --coverage <a,b,...>
//
// url-sweep.mjs --recover locates an archived snapshot for a dead citation and
// records it in its artifact; §3.11c says "the fix is a URL swap". This is the
// swap. It exists because the swap had no owner: the sweep printed it, the
// gate failed the stage, and the only agents licensed to edit a scaffold
// (the step-3 Alphas) sit BEHIND the barrier the failing gate holds shut —
// on frontier-15 stage 1 deadlocked exactly there, re-running the full gate
// battery back-to-back while blocked. The swap is a pure function of two
// files on disk, and the engine's rule assigns that to code, not to anyone.
//
// STRICT ON PURPOSE:
//   - a dead row WITHOUT a snapshot is not swallowed — exit 1 names it, and
//     the stage blocker survives, because re-sourcing an unrecoverable
//     citation is a judgment (a person or an Alpha), never a default;
//   - a dead row whose URL appears in NO coverage file is artifact/coverage
//     drift — exit 1, never "nothing to do";
//   - the original URL is preserved on the source as `original_url`, so the
//     attribution survives and a later un-archiving is a one-line revert;
//   - idempotent: a source already carrying the snapshot counts as applied,
//     so the repair round can re-run without stacking edits.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : null; };
const livenessPath = opt('liveness');
const coverageArg = opt('coverage');
if (!livenessPath || !coverageArg) {
  console.error('usage: node tools/url-recover-apply.mjs --liveness <artifact> --coverage <a,b,...>');
  process.exit(2);
}
const coveragePaths = coverageArg.split(',').map((s) => s.trim()).filter(Boolean);

if (!existsSync(livenessPath)) { console.error(`ERROR recover-apply-no-artifact: ${livenessPath}`); process.exit(1); }
const artifact = JSON.parse(readFileSync(livenessPath, 'utf8'));
const dead = (artifact.rows ?? []).filter((r) => !r.ok);

const unrecoverable = dead.filter((r) => !r.recovered?.snapshot);
const swappable = dead.filter((r) => r.recovered?.snapshot);

// url -> snapshot, for both directions of the idempotency check
const bySource = new Map(swappable.map((r) => [r.url, r.recovered.snapshot]));
const snapshots = new Set(swappable.map((r) => r.recovered.snapshot));

let applied = 0;
let alreadyApplied = 0;
const found = new Set();
for (const path of coveragePaths) {
  if (!existsSync(path)) { console.error(`ERROR recover-apply-no-coverage: ${path}`); process.exit(1); }
  const cov = JSON.parse(readFileSync(path, 'utf8'));
  let changed = false;
  for (const page of cov.pages ?? []) {
    for (const source of page.sources ?? []) {
      if (bySource.has(source.url)) {
        const snapshot = bySource.get(source.url);
        source.original_url = source.url;
        source.url = snapshot;
        source.archived = { swapped_by: 'url-recover-apply', swapped_at: new Date().toISOString() };
        found.add(source.original_url);
        applied += 1;
        changed = true;
      } else if (snapshots.has(source.url)) {
        // a previous round already swapped this source
        found.add(source.original_url ?? source.url);
        alreadyApplied += 1;
      }
    }
  }
  if (changed) writeFileSync(path, JSON.stringify(cov, null, 2) + '\n');
}

const errors = [];
for (const r of unrecoverable) {
  errors.push(`recover-apply-unrecoverable: ${r.url} is dead (${r.error ?? `status ${r.status}`}) and the archive has no `
    + 'snapshot under any host variant. Re-sourcing is a judgment, not a default — this stays a blocker.');
}
for (const r of swappable) {
  if (!found.has(r.url)) {
    errors.push(`recover-apply-missing: ${r.url} appears in no coverage source — the sweep artifact and the coverage `
      + 'files disagree about what is cited; re-run the sweep before applying.');
  }
}

if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  process.exit(1);
}
console.log(`url-recover-apply: ${applied} swap(s) applied, ${alreadyApplied} already applied, `
  + `${dead.length} dead row(s) accounted for`);
