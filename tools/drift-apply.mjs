#!/usr/bin/env node
// drift-apply — materialise what the step-0 drift review DECIDED.
//
//   node tools/drift-apply.mjs --run <run>
//
// The drift Alpha may now mint a missing prerequisite page, reorder to close a
// forward edge, and — when more than three pages need minting — rescope the run
// onto those prerequisites (owner, 2026-08-24). Each of those is a JUDGMENT and
// stays the Alpha's. Turning the decision into batch manifests, a scope ledger
// and task files is a function of files on disk, so it is this tool's.
//
// WHY THE SPLIT IS HERE AND NOT IN THE ALPHA. An Alpha that writes manifests is
// an Alpha driving a stage transition, which the owner's 2026-08-16 rule
// forbids. The Alpha edits `research/plan-spec.json` and writes its report; the
// report's VERDICT lines are the interface; this tool reads them and does the
// bookkeeping. If the report says nothing to apply, this exits 0 having done
// nothing, so it is safe as an unconditional repair step.
//
// WHAT IT REFUSES. It will not touch a run whose manifests already carry a
// Beta's items: rescoping a scaffolded run destroys authored work, and the
// scope ledger regenerated afterwards would CONFIRM the loss. Stage `1-drift`
// exists so that this always runs before any Beta starts; the guard is for the
// case where the stage order is changed and this assumption quietly stops
// holding.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { packBatches, writeManifests, scaffoldedManifests, loadPlan } from './plan-manifests.mjs';

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : null; };
const has = (n) => argv.includes(`--${n}`);
const run = opt('run');
if (!run) { console.error('usage: node tools/drift-apply.mjs --run <run> [--cap N] [--max-pairs N] [--dry-run]'); process.exit(2); }

const repo = process.cwd();
const cap = Number(opt('cap') ?? 2);
// The owner's cap on a rescoped run (2026-08-24). A rescope replaces the run's
// pair set wholesale, and without a ceiling a densely-blocked track could
// expand it without bound.
const maxPairs = Number(opt('max-pairs') ?? 14);
// More than this many mintings means the run is aimed above its own
// foundations, and the owner's ruling is to build the foundations instead.
const MINT_RESCOPE_THRESHOLD = 3;
const dryRun = has('dry-run');

const reportPath = `research/${run}-alpha-step0-drift.md`;
if (!existsSync(reportPath)) {
  console.error(`ERROR drift-apply-no-report: ${reportPath} — nothing to apply`);
  process.exit(1);
}
const text = readFileSync(reportPath, 'utf8');
const spec = loadPlan(repo);
const byId = new Map((spec.pages ?? []).map((p) => [p.id, p]));

// ---- read the decisions -------------------------------------------------
// One VERDICT line per `### <a-page-id>` section; the two kinds this tool acts
// on name their pages the same way the applied/blocked kinds already do.
const idsIn = (detail) => [...detail.matchAll(/`?([a-z0-9][a-z0-9-]*)`?\s*\(order\s*[0-9.]+\)/g)].map((m) => m[1]);

// PARSED PER SECTION, not by scanning the file for VERDICT lines. A minted page
// has to be attributed to the page that NEEDED it: over the pair cap the owner's
// rule is to drop that original and build the dependency in its place, and a
// flat scan cannot say which original to drop.
const minted = new Set();
const rescopeTo = new Set();
const mintedBy = new Map();   // minted page id -> the A page whose section asked for it
const headings = [...text.matchAll(/^###\s+`?([a-z0-9][a-z0-9-]*)`?\s*$/gm)];
for (const [i, h] of headings.entries()) {
  const body = text.slice(h.index + h[0].length, headings[i + 1]?.index ?? text.length);
  const v = /^VERDICT:\s*(drift-minted|drift-rescoped)\b[ —-]*(.*)$/m.exec(body);
  if (!v) continue;
  const [, kind, detail] = v;
  for (const id of idsIn(detail)) {
    if (kind === 'drift-rescoped') { rescopeTo.add(id); continue; }
    minted.add(id);
    if (!mintedBy.has(id)) mintedBy.set(id, h[1]);
  }
}

if (!minted.size && !rescopeTo.size) {
  console.log('drift-apply: no drift-minted or drift-rescoped verdict; nothing to materialise');
  process.exit(0);
}

// ---- validate against the spec the Alpha edited -------------------------
const errors = [];
const checkMintable = (id, kind) => {
  const p = byId.get(id);
  if (!p) { errors.push(`drift-apply-unminted: ${kind} names \`${id}\`, absent from research/plan-spec.json — the Alpha must add the page entry before this can build it`); return false; }
  if (p.kind !== 'A') { errors.push(`drift-apply-not-an-a-page: ${kind} names \`${id}\`, whose kind is ${p.kind}; name the A page, its companion follows`); return false; }
  const comp = p.companion ?? `${id}-examples`;
  if (!byId.has(comp)) { errors.push(`drift-apply-no-companion: \`${id}\` has no companion entry \`${comp}\` in the plan`); return false; }
  return true;
};
for (const id of minted) checkMintable(id, 'drift-minted');
for (const id of rescopeTo) checkMintable(id, 'drift-rescoped');

// The owner's threshold. Over it, minting alone is the wrong answer: the run is
// aimed above its own foundations and should build those instead.
if (!rescopeTo.size && minted.size > MINT_RESCOPE_THRESHOLD) {
  errors.push(`drift-apply-rescope-required: ${minted.size} page(s) need minting, over the threshold of ${MINT_RESCOPE_THRESHOLD} — `
    + 'the owner\'s ruling is to drop the original pairs and build their dependencies first. '
    + 'Record `VERDICT: drift-rescoped` naming the dependency pairs to build instead.');
}
if (rescopeTo.size > maxPairs) {
  errors.push(`drift-apply-over-cap: drift-rescoped names ${rescopeTo.size} pair(s), over the cap of ${maxPairs}`);
}
if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  process.exit(1);
}

const populated = scaffoldedManifests(repo, run);
if (populated.length) {
  console.error(`ERROR drift-apply-scaffolded: ${populated.length} manifest(s) already carry authored items `
    + `(${populated[0]}${populated.length > 1 ? ', …' : ''}). The drift decision must be applied before any Beta runs; `
    + 'stage `1-drift` exists to guarantee that ordering.');
  process.exit(1);
}

// ---- apply --------------------------------------------------------------
const existingBatches = () => {
  const out = [];
  for (let i = 1; ; i += 1) {
    if (!existsSync(join(repo, 'research', `${run}-batch-${i}.pages.json`))) break;
    out.push(i);
  }
  return out;
};

// The A pages the run currently owes, in manifest order.
const existingPairs = [];
for (const i of existingBatches()) {
  for (const p of JSON.parse(readFileSync(join(repo, 'research', `${run}-batch-${i}.pages.json`), 'utf8'))) {
    if (p.kind === 'A') existingPairs.push(p.id);
  }
}

let finalPairs;
let mode;
const dropped = [];
if (rescopeTo.size) {
  // RESCOPE. The pair set is replaced wholesale by the prerequisites.
  mode = 'rescope';
  finalPairs = [...rescopeTo];
} else {
  mode = 'mint';
  const newMints = [...minted].filter((id) => !existingPairs.includes(id));
  if (!newMints.length) {
    console.log(`drift-apply: ${minted.size} minted page(s) already carried by a manifest; nothing to add`);
    process.exit(0);
  }
  finalPairs = [...existingPairs, ...newMints];

  // THE PAIR CAP IS A SWAP, NOT A REFUSAL (owner, 2026-08-24). Minting is
  // addition, so a mint on a run already at the cap would push it over. The
  // owner's rule is to drop the ORIGINAL pair and build the dependency in its
  // place — a 1-for-1 exchange that holds the total exactly, and that leaves
  // the dropped pair buildable by a later run once its prerequisite exists.
  // Which original to drop is not a choice: it is the page whose own section
  // asked for the mint, which is why the report is parsed per section.
  for (const id of newMints) {
    if (finalPairs.length <= maxPairs) break;
    const citing = mintedBy.get(id);
    if (!citing || !finalPairs.includes(citing)) continue;
    finalPairs = finalPairs.filter((p) => p !== citing);
    dropped.push({ dropped: citing, for: id });
  }
  if (finalPairs.length > maxPairs) {
    console.error(`ERROR drift-apply-over-cap: ${finalPairs.length} pair(s) after minting, over the cap of ${maxPairs}, `
      + 'and dropping each minting\'s citing page did not bring it under. Record `VERDICT: drift-rescoped` '
      + 'naming the pairs to build instead.');
    process.exit(1);
  }
}

if (dryRun) {
  console.log(`drift-apply --dry-run: would ${mode} ${run} onto ${finalPairs.length} pair(s): ${finalPairs.join(', ')}`);
  for (const d of dropped) console.log(`  would drop ${d.dropped} — its prerequisite ${d.for} is built in its place`);
  process.exit(0);
}

for (const d of dropped) {
  console.log(`  dropped ${d.dropped} at the ${maxPairs}-pair cap; building its prerequisite ${d.for} instead`);
}

// Every manifest is rewritten from index 1: a mint that displaces an original
// repacks the batches, and batch numbers are not yet referenced by anything
// because `1-drift` runs before the first Beta dispatch. Manifests beyond the
// new count are emptied rather than left, because `batches()` reads the
// directory and a stale file is a phantom batch the engine would try to cover.
const groups = packBatches(repo, finalPairs, { cap });
for (const i of existingBatches()) {
  if (i > groups.length) writeFileSync(join(repo, 'research', `${run}-batch-${i}.pages.json`), '[]\n');
}
const written = writeManifests(repo, run, groups, { force: true, startAt: 1 });

for (const w of written) console.log(`  batch ${w.batch}: ${w.pages.join(', ')}`);

// ---- regenerate the derived artifacts -----------------------------------
// The ledger and the task files are DERIVED from the manifests. Regenerating
// them here rather than reimplementing them keeps one writer for each.
const step = (label, args) => {
  const r = spawnSync('node', args, { cwd: repo, encoding: 'utf8' });
  process.stdout.write((r.stdout ?? '').replace(/^/gm, '  '));
  process.stderr.write((r.stderr ?? '').replace(/^/gm, '  '));
  if (r.status !== 0) {
    console.error(`ERROR drift-apply-${label}-failed: exit ${r.status}`);
    process.exit(1);
  }
};
step('ledger', ['tools/manifest-integrity.mjs', '--run', run, '--write-ledger', '--force']);
step('tasks', ['tools/run-tasks.mjs', '--run', run, '--force']);

// covers.json maps a dispatch label to the units it covers; a new batch with no
// entry is a batch the engine can dispatch but never credit.
const covers = {};
for (const i of existingBatches()) {
  if (JSON.parse(readFileSync(join(repo, 'research', `${run}-batch-${i}.pages.json`), 'utf8')).length) {
    covers[`beta-batch-${i}`] = [String(i)];
  }
}
writeFileSync(join(repo, 'research', `${run}-covers.json`), JSON.stringify(covers, null, 2) + '\n');

console.log(`drift-apply: ${mode} applied — ${written.length} batch(es) written, ledger and task files regenerated`);
