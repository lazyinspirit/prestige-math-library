#!/usr/bin/env node
// step6-scope.mjs — WHO OWES WHAT AT STEP 6, computed from disk, per batch.
//
// The owner's step-6 routing (2026-08-25) sends each item down exactly one of
// three paths:
//
//   reader changed it           -> group Alpha adjudicates -> gates
//   untouched, refuter flagged  -> group Alpha adjudicates -> gates
//   untouched, not flagged      -> straight to gates
//
// Every input to that decision is a function of files on disk, so by the roles
// rule (CLAUDE.md: "if the answer is a function of files on disk, it is code")
// none of it may be a dispatch. WHICH ITEMS THE READER CHANGED is a hash diff;
// WHICH ITEMS A REFUTER FLAGGED is read from the refuters' own structured
// reports. Neither is a self-report and neither is transcribed, which is where
// eleven step-3 findings were lost once.
//
// EVERYTHING HERE IS PER BATCH, AND THAT IS THE POINT (owner, 2026-08-25:
// "make sure every batch can proceed up to 6b after finishing step 5 without
// waiting for other batches"). A whole-level split would be a barrier — every
// reader finishing before any adjudicator could start — and authors run to six
// hours against readers' four, so serialising them is precisely the cost the
// `read` pipeline group exists to avoid. Hence the per-batch hash files below
// rather than labels in the shared touch ledger: a batch takes its own `pre`
// hash the moment its authoring is done, its own `post` hash the moment its
// reader is done, and neither waits on a sibling.
//
// WHY NOT THE TOUCH LEDGER. `touchlog snap` writes a whole-corpus hash map
// under a label, and a label is a key that `impact-audit` and `step8-guard`
// both resolve. Twenty extra per-batch labels would bloat that ledger with
// ~9 MB of hashes and put step-6 bookkeeping inside the artifact two other
// gates depend on. These files are small, batch-scoped, and touch nothing.
//
// Subcommands
//   hash    --run R --batch N --label pre|post   hash this batch's items now
//   split   --run R --batch N                    diff pre against post
//   collect --run R [--batch N]                  fold refuter flags into the split
//   check   --run R [--batch N] [--phase split|adjudicate]
//
// Artifacts
//   research/<run>-step6-hash-<batch>-<label>.json   per-batch item hashes
//   research/<run>-step6-scope.json                  the routing of record

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const R = (...p) => join(REPO, ...p);

const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (name, dflt = null) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 || i === argv.length - 1 ? dflt : argv[i + 1];
};
const die = (msg, code = 2) => { console.error(msg); process.exit(code); };

const run = opt('run');
if (!run) die('usage: step6-scope.mjs hash|split|collect|check --run <run> [--batch N] [--label pre|post]');

const scopePath = R('research', `${run}-step6-scope.json`);
const hashPath = (batch, label) => R('research', `${run}-step6-hash-${batch}-${label}.json`);

/** Batch manifests, as { batch -> [item ids] }.
 *
 *  The manifests are the run's scope of record — `content-policy` and
 *  `level-coverage` both take manifests, so reading them here keeps this
 *  agreeing with the gates rather than with a second idea of scope. */
function manifestItems() {
  const out = {};
  for (const f of readdirSync(R('research'))) {
    const m = f.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));
    if (!m) continue;
    const pages = JSON.parse(readFileSync(R('research', f), 'utf8'));
    out[m[1]] = pages.flatMap((p) => (p.items ?? []).map((it) => (typeof it === 'string' ? it : it.id)));
  }
  return out;
}

/** Group label per batch, from the validated 2-assign partition. */
function groupOf() {
  const p = R('research', `${run}-alpha-groups.json`);
  if (!existsSync(p)) return {};
  const raw = JSON.parse(readFileSync(p, 'utf8'));
  const rows = Array.isArray(raw) ? raw : raw?.groups ?? [];
  const out = {};
  for (const g of rows) for (const b of g.covers ?? []) out[String(b)] = String(g.label);
  return out;
}

const load = () => (existsSync(scopePath) ? JSON.parse(readFileSync(scopePath, 'utf8')) : null);
const save = (d) => writeFileSync(scopePath, JSON.stringify(d, null, 1) + '\n');
const sha = (s) => createHash('sha256').update(s).digest('hex');

const needBatch = () => {
  const b = opt('batch');
  if (!b) die('step6-scope: --batch is required — step 6 routes one batch at a time so no batch waits on a sibling');
  return b;
};

// ---------------------------------------------------------------------------
if (cmd === 'hash') {
  const batch = needBatch();
  const label = opt('label');
  if (!['pre', 'post'].includes(label)) die('step6-scope: --label must be pre or post');
  const items = manifestItems()[batch];
  if (!items) die(`step6-scope: no manifest for batch ${batch}`);
  const hashes = {};
  for (const id of items) {
    const f = R('items', `${id}.md`);
    // A MANIFEST ITEM WITH NO FILE IS NOT AN ERROR HERE. At `pre` time the
    // authoring lane may legitimately still be finishing, and at `post` time
    // the reader is licensed to DELETE a result. Both show up as a hash
    // difference, which routes the item to the adjudicator — which is right.
    hashes[id] = existsSync(f) ? sha(readFileSync(f, 'utf8')) : null;
  }
  writeFileSync(hashPath(batch, label),
    JSON.stringify({ run, batch, label, at: new Date().toISOString(), hashes }, null, 1) + '\n');
  console.log(`step6-scope: hashed ${items.length} item(s) of batch ${batch} as "${label}"`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
if (cmd === 'split') {
  const batch = needBatch();
  const read = (label) => {
    const p = hashPath(batch, label);
    if (!existsSync(p)) {
      die(`step6-scope: batch ${batch} has no "${label}" hash file. `
        + `The ${label === 'pre' ? '6a-baseline' : '6a-split'} lane writes it; without it every item `
        + `would read as ${label === 'pre' ? 'touched' : 'untouched'} and the routing would be a guess.`);
    }
    return JSON.parse(readFileSync(p, 'utf8')).hashes ?? {};
  };
  const pre = read('pre'), post = read('post');
  const ids = manifestItems()[batch];
  if (!ids) die(`step6-scope: no manifest for batch ${batch}`);

  const touched = [], untouched = [];
  for (const id of ids) {
    // AN ITEM ABSENT FROM `pre` IS TOUCHED. The reader may ADD results
    // (LEVELS 6a duty 5), and a reader-authored lemma is exactly the thing an
    // adjudicator must see. `undefined !== <hash>` gets that right, and saying
    // so here is cheaper than rediscovering it.
    (pre[id] !== post[id] ? touched : untouched).push(id);
  }
  touched.sort(); untouched.sort();

  // MERGE, NEVER REWRITE. Each batch owns one row and must not blank a
  // sibling's — batches reach this stage at different times by design.
  const scope = load() ?? { run, at: null, batches: {} };
  scope.batches[batch] = {
    group: groupOf()[batch] ?? null,
    split_at: new Date().toISOString(),
    touched,
    untouched,
    flagged: [],
    refuted_at: null,
  };
  scope.at = new Date().toISOString();
  save(scope);
  console.log(`step6-scope: batch ${batch} — ${ids.length} item(s), ${touched.length} touched by the reader, `
    + `${untouched.length} untouched`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
if (cmd === 'collect') {
  const scope = load();
  if (!scope) die(`step6-scope: no split at ${scopePath} — run \`split\` first`);
  const only = opt('batch');
  let total = 0;
  const missing = [];
  for (const [batch, row] of Object.entries(scope.batches)) {
    if (only && batch !== only) continue;
    const p = R('research', `${run}-refute-${batch}.json`);
    if (!existsSync(p)) { missing.push(batch); continue; }
    let rep;
    try { rep = JSON.parse(readFileSync(p, 'utf8')); }
    catch (e) { die(`step6-scope: ${p} is not JSON — ${e.message}`); }
    // ONLY IDS THE REFUTER WAS GIVEN ARE ADMISSIBLE. A refuter reporting on an
    // item the reader already repaired is reporting on text somebody else
    // owns, and the adjudicator would meet the same item down two paths.
    const untouched = new Set(row.untouched);
    const raw = (rep.flagged ?? []).map((f) => (typeof f === 'string' ? f : f?.id)).filter(Boolean);
    const outOfScope = raw.filter((id) => !untouched.has(id));
    if (outOfScope.length) {
      console.error(`WARN refute-flag-out-of-scope: batch ${batch} flagged ${outOfScope.length} item(s) `
        + `outside its untouched set (${outOfScope.slice(0, 3).join(', ')}${outOfScope.length > 3 ? ', …' : ''}) — ignored`);
    }
    row.flagged = [...new Set(raw.filter((id) => untouched.has(id)))].sort();
    row.refuted_at = rep.at ?? new Date().toISOString();
    total += row.flagged.length;
  }
  save(scope);
  if (missing.length) {
    console.error(`ERROR refute-report-missing: batch(es) ${missing.join(', ')} have no research/${run}-refute-<b>.json`);
    process.exit(1);
  }
  console.log(`step6-scope: collected ${total} flagged item(s)`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
if (cmd === 'check') {
  const phase = opt('phase', 'split');
  const only = opt('batch');
  const scope = load();
  if (!scope) die(`step6-scope: no scope file at ${scopePath}`, 1);
  const all = manifestItems();
  const items = only ? { [only]: all[only] ?? [] } : all;
  let errors = 0;
  const err = (code, msg) => { console.error(`ERROR ${code}: ${msg}`); errors += 1; };

  for (const [batch, ids] of Object.entries(items)) {
    const row = scope.batches?.[batch];
    // A BATCH THAT HAS NOT SPLIT YET IS NOT AN ERROR when the gate is scoped
    // to one batch — that is the pipeline working. It IS an error for a
    // whole-level check, which only runs once every batch has passed through.
    if (!row) {
      if (!only) err('scope-batch-missing', `batch ${batch} has a manifest but no scope row`);
      continue;
    }
    // TRUE OF DISK, not merely present. A 6a reader may add an item, and both
    // `content-policy` and `level-coverage` will see it — so a split computed
    // before that addition is stale, and routing from it would send a new,
    // unreviewed item straight to the gates.
    const routed = new Set([...row.touched, ...row.untouched]);
    for (const id of ids) if (!routed.has(id)) err('scope-item-unrouted', `${id} (batch ${batch}) is in the manifest but in neither the touched nor the untouched set`);
    for (const id of routed) if (!ids.includes(id)) err('scope-item-stale', `${id} (batch ${batch}) is routed but no longer in the manifest`);
    if (phase === 'adjudicate') {
      if (!row.refuted_at) err('refute-missing', `batch ${batch} has no refuter report collected`);
      for (const id of row.flagged) if (!row.untouched.includes(id)) err('flag-out-of-scope', `${id} is flagged but was not in batch ${batch}'s untouched set`);
    }
  }

  const rows = Object.entries(scope.batches ?? {}).filter(([b]) => !only || b === only).map(([, r]) => r);
  const n = rows.reduce((a, r) => a + r.touched.length + r.untouched.length, 0);
  const adj = rows.reduce((a, r) => a + r.touched.length + r.flagged.length, 0);
  console.log(`step6-scope: ${n} item(s) routed, ${adj} owed to an adjudicator, ${errors} error(s)`);
  process.exit(errors ? 1 : 0);
}

die(`step6-scope: unknown command ${JSON.stringify(cmd)} — expected hash, split, collect or check`);
