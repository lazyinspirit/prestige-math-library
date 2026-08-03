#!/usr/bin/env node
// step8-guard.mjs — R1: step 8 is FATAL-ONLY (owner, 2026-08-03).
//
// node tools/step8-guard.mjs \
//   --touches      research/level<n>-touches.json \
//   --baseline     "pre-step8" \
//   --adjudications research/level<n>-judge-adjudications.jsonl \
//   [--against "<later snapshot label>"] [--json]
//
// WHY THIS EXISTS. At step 8 Alpha adjudicates each paired-judge rejection as
// `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. Only the first
// licenses a content edit. The other two close the rejection where they stand:
// tools/level-coverage.mjs already lets them clear closure as warnings, so no
// gate ever demanded the edit.
//
// The loop this prevents. Any edit to an item is a material rewrite under
// SCHEMA §3 — whose test is deliberately broad ("would the judge have seen
// something different", explicitly including Remark prose, because a `rem-` item
// IS its prose). So a cosmetic polish applied to a nonfatal finding voids
// `verification.judge`, forces a rejudge, and resamples a refuter that
// "tends to surface a different nitpick on each stochastic run of the same long
// proof" (WORKFLOW.md §5). Each turn of that loop costs two judge calls and an
// adjudication and converges on nothing. Fatal repairs are deliberately NOT
// capped: a proof that keeps yielding real fatal defects is either converging
// toward correctness or is actually false, and both must run to conclusion.
//
// HOW IT DECIDES, from disk rather than from an agent's account of its own edit.
// A dedicated baseline snapshot is taken immediately before step-8 adjudication
// begins — the same pattern tools/impact-audit.mjs uses. Every item whose
// normalized content changed since that baseline must be licensed by a
// `confirmed_fatal` adjudication recorded against the pre-edit text state. An
// item Alpha only ever adjudicated nonfatal has no such row, so the polish is a
// hard error.
//
// Scoping it to an explicit baseline is what keeps it exact: a legitimate later
// stage (a step-9 scope-denial repair, an owner-directed change) is simply not
// in this window, so it can never be mistaken for a nonfatal polish.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { itemContentHash, shortHash } from './item-hash.mjs';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const ITEMS = join(REPO, 'items');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const option = (name) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : null;
};

const touchesPath = option('--touches');
const baselineLabel = option('--baseline');
const adjudicationsPath = option('--adjudications');
const againstLabel = option('--against');

const usage = () => {
  console.error('usage: node tools/step8-guard.mjs --touches <ledger.json> --baseline "<label>" --adjudications <file.jsonl> [--against "<label>"] [--json]');
  process.exit(2);
};
if (!touchesPath || !baselineLabel || !adjudicationsPath) usage();

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });

const resolvePath = (p) => (p.startsWith('/') ? p : join(REPO, p));

// ---- the baseline, and the state to compare it against ---------------------

if (!existsSync(resolvePath(touchesPath))) {
  console.error(`step8-guard: touch ledger not found: ${touchesPath}`);
  process.exit(2);
}
const ledger = JSON.parse(readFileSync(resolvePath(touchesPath), 'utf8'));
const snapshots = ledger.snapshots ?? [];
// Last snapshot carrying the label: re-snapping the same stage is idempotent by
// design, so the most recent one is the operative baseline.
const baseline = [...snapshots].reverse().find((s) => s.label === baselineLabel);
if (!baseline) {
  console.error(`step8-guard: no snapshot labelled "${baselineLabel}" in ${touchesPath}` +
    (snapshots.length ? ` (have: ${snapshots.map((s) => JSON.stringify(s.label)).join(', ')})` : ' (ledger has no snapshots)'));
  process.exit(2);
}

/** Current normalized content hashes, or a named later snapshot's. The snapshot
 *  form lets a completed stage be re-checked after the fact from the ledger
 *  alone, without the working tree still being in that state. */
const currentHashes = () => {
  if (againstLabel) {
    const against = [...snapshots].reverse().find((s) => s.label === againstLabel);
    if (!against) {
      console.error(`step8-guard: no snapshot labelled "${againstLabel}" in ${touchesPath}`);
      process.exit(2);
    }
    return against.hashes;
  }
  const out = {};
  for (const f of readdirSync(ITEMS).filter((name) => name.endsWith('.md')).sort())
    out[f.slice(0, -3)] = shortHash(itemContentHash(readFileSync(join(ITEMS, f), 'utf8')));
  return out;
};
const now = currentHashes();

// ---- adjudications ---------------------------------------------------------

const OUTCOMES = ['confirmed_fatal', 'confirmed_nonfatal', 'false_positive'];
/** id -> Set of pre-edit text states a confirmed_fatal row licenses editing. */
const fatalLicences = new Map();
/** id -> [{model, outcome}] for the report, so a violation names what Alpha said. */
const seenOutcomes = new Map();

if (!existsSync(resolvePath(adjudicationsPath))) {
  console.error(`step8-guard: adjudications ledger not found: ${adjudicationsPath}`);
  process.exit(2);
}
for (const [index, line] of readFileSync(resolvePath(adjudicationsPath), 'utf8').split(/\r?\n/).filter(Boolean).entries()) {
  let record;
  try { record = JSON.parse(line); } catch {
    error('judge-adjudication-json', `${adjudicationsPath}:${index + 1}: invalid JSON`);
    continue;
  }
  if (typeof record.id !== 'string' || !OUTCOMES.includes(record.outcome)) {
    error('judge-adjudication-shape', `${adjudicationsPath}:${index + 1}: requires {id, model, context_sha256, outcome, item_sha256}`);
    continue;
  }
  if (!seenOutcomes.has(record.id)) seenOutcomes.set(record.id, []);
  seenOutcomes.get(record.id).push({ model: record.model ?? '?', outcome: record.outcome });

  // Without the text state an adjudication was made against, a confirmed_fatal
  // row cannot license any specific edit — it would license every edit forever.
  if (typeof record.item_sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(record.item_sha256)) {
    error('judge-adjudication-unhashed',
      `${adjudicationsPath}:${index + 1}: ${record.id} (${record.outcome}) has no valid item_sha256; ` +
      'record the full sha256 of the normalized item text at adjudication time', record.id);
    continue;
  }
  if (record.outcome === 'confirmed_fatal') {
    if (!fatalLicences.has(record.id)) fatalLicences.set(record.id, new Set());
    fatalLicences.get(record.id).add(shortHash(record.item_sha256));
  }
}

// ---- R1 ---------------------------------------------------------------------

const changed = [];
const created = [];
const deleted = [];
for (const [id, hash] of Object.entries(now)) {
  if (!(id in baseline.hashes)) { created.push(id); continue; }
  if (baseline.hashes[id] !== hash) changed.push(id);
}
for (const id of Object.keys(baseline.hashes)) if (!(id in now)) deleted.push(id);

for (const id of changed) {
  const licensed = fatalLicences.get(id)?.has(baseline.hashes[id]);
  if (licensed) continue;
  const said = (seenOutcomes.get(id) ?? []).map((o) => `${o.model}:${o.outcome}`).join(', ') || 'no adjudication at all';
  error('nonfatal-edit',
    `${id}: changed since "${baselineLabel}" (${baseline.hashes[id]} -> ${now[id]}) with no confirmed_fatal ` +
    `adjudication against that text state — Alpha recorded ${said}. Step 8 is fatal-only: revert the edit and ` +
    'close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair.', id);
}

// Creation and deletion are step-6 powers, not step-8 ones. Neither is R1's
// subject, so neither blocks here — but an unexplained one at step 8 is worth a
// human look, and silence would read as approval.
for (const id of created) warn('step8-creation', `${id}: created since "${baselineLabel}"; adding results is a step-6 power`, id);
for (const id of deleted) warn('step8-deletion', `${id}: removed since "${baselineLabel}"; deleting results is a step-6 power and never applies to published items`, id);

// ---- report -----------------------------------------------------------------

const summary = {
  baseline: baselineLabel,
  baseline_at: baseline.at ?? null,
  compared_against: againstLabel ?? 'working tree',
  items_at_baseline: Object.keys(baseline.hashes).length,
  changed: changed.length,
  licensed_by_confirmed_fatal: changed.length - errors.filter((e) => e.code === 'nonfatal-edit').length,
  created: created.length,
  deleted: deleted.length,
  errors: errors.length,
  warnings: warnings.length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, changed, created, deleted, errors, warnings }, null, 2));
} else {
  console.log(`step8-guard: baseline "${baselineLabel}"${baseline.at ? ` (${baseline.at})` : ''} vs ${summary.compared_against}`);
  console.log(`  ${summary.items_at_baseline} item(s) at baseline; ${changed.length} changed, ${created.length} created, ${deleted.length} deleted`);
  console.log(`  ${summary.licensed_by_confirmed_fatal}/${changed.length} change(s) licensed by a confirmed_fatal adjudication`);
  for (const w of warnings) console.log(`  WARN  ${w.code}: ${w.message}`);
  for (const e of errors) console.log(`  ERROR ${e.code}: ${e.message}`);
  console.log(errors.length ? `\nFAIL — ${errors.length} error(s)` : '\nOK — every step-8 edit is licensed by a confirmed fatal defect');
}
process.exit(errors.length ? 1 : 0);
