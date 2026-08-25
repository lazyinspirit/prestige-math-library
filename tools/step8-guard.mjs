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
// adjudication and converges on nothing. The automatic repair/rejudge loop is
// capped at two frozen-context cycles. After exhaustion, only an exact-hash owner/session
// terminal resolution may license the final intervention; it never fabricates
// another judge verdict.
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
import { itemHashGuard, itemHashJudge, shortHash } from './item-hash.mjs';
import { parseTerminalResolutions } from './step8-terminal-resolution.mjs';
import { loadStep8JudgeEvidence, rejectionKey } from './step8-evidence.mjs';

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
const judgeLedgerPath = option('--judge-ledger');
const scopePath = option('--scope');
const againstLabel = option('--against');
// THE SECOND LICENCE SOURCE (owner, 2026-08-25). A step-8 Alpha that finds a
// falsehood in a PUBLISHED item must repair it, and that edit is real work with
// no judge verdict behind it — published content was never in this run's frozen
// pair context, so no adjudication row can exist for it. Before this flag the
// only way to license such an edit was to write a `confirmed_fatal` row naming a
// model that never judged the item, which is a fabricated verdict in an
// append-only ledger step 10 reports from.
//
// A separate file with its own required shape keeps the two apart: an
// adjudication answers a judge, a published repair answers the library. Omitting
// the flag leaves the guard exactly as strict as it was.
const publishedRepairsPath = option('--published-repairs');
const terminalResolutionsPath = option('--terminal-resolutions');

const usage = () => {
  console.error('usage: node tools/step8-guard.mjs --touches <ledger.json> --baseline "<label>" --judge-ledger <file.jsonl> --adjudications <file.jsonl> --scope <step8-scope.json> [--published-repairs <file.jsonl>] [--terminal-resolutions <file.jsonl>] [--against "<label>"] [--json]');
  process.exit(2);
};
if (!touchesPath || !baselineLabel || !judgeLedgerPath || !adjudicationsPath || !scopePath) usage();

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });

const resolvePath = (p) => (p.startsWith('/') ? p : join(REPO, p));
const terminalParsed = parseTerminalResolutions(
  terminalResolutionsPath ? resolvePath(terminalResolutionsPath) : '',
  { allowMissing: true },
);
for (const message of terminalParsed.errors) error('terminal-resolution-shape', message);

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
    out[f.slice(0, -3)] = shortHash(itemHashGuard(readFileSync(join(ITEMS, f), 'utf8')));
  return out;
};
const now = currentHashes();

// ---- adjudications ---------------------------------------------------------

/** id -> Set of pre-edit text states a confirmed_fatal row licenses editing. */
const fatalLicences = new Map();
/** id -> [{model, outcome}] for the report, so a violation names what Alpha said. */
const seenOutcomes = new Map();

const evidence = loadStep8JudgeEvidence(resolvePath(judgeLedgerPath), resolvePath(adjudicationsPath),
  { allowMissingAdjudications: false });
for (const message of evidence.errors) error('step8-evidence-shape', message);
for (const entry of evidence.surplusAnswers) {
  error('judge-adjudication-no-rejection',
    `${entry.path}:${entry.line}: adjudication does not exact-match a real keep:false judge row`, entry.row?.id ?? null);
}
for (const entry of evidence.answers.values()) {
  const record = entry.row;
  if (!seenOutcomes.has(record.id)) seenOutcomes.set(record.id, []);
  seenOutcomes.get(record.id).push({ model: record.model ?? '?', outcome: record.outcome });

  // Without the text state an adjudication was made against, a confirmed_fatal
  // row cannot license any specific edit — it would license every edit forever.
  if (typeof record.item_sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(record.item_sha256)) {
    error('judge-adjudication-unhashed',
      `${entry.path}:${entry.line}: ${record.id} (${record.outcome}) has no valid item_sha256; ` +
      'record the GUARD form — the full sha256 of the item text with the whole `verification:` block ' +
      'excluded (tools/item-hash.mjs `itemHashGuard`), which is what a touchlog baseline holds. ' +
      'This is NOT the judge-ledger form: a verdict row\'s item_sha256 excludes only the `judge:` ' +
      'sub-block, and a row carrying that form can never match a baseline here', record.id);
    continue;
  }
  if (record.outcome === 'confirmed_fatal') {
    if (!evidence.rejections.has(rejectionKey(record))) {
      error('fatal-licence-no-rejection',
        `${entry.path}:${entry.line}: ${record.id} cannot license an edit because its exact judge rejection does not exist`,
        record.id);
      continue;
    }
    if (!fatalLicences.has(record.id)) fatalLicences.set(record.id, new Set());
    fatalLicences.get(record.id).add(shortHash(record.item_sha256));
  }
}

// ---- published repairs ------------------------------------------------------

/** id -> Set of pre-edit text states a published-repair row licenses editing. */
const publishedLicences = new Map();
const publishedRows = [];
const scope = JSON.parse(readFileSync(resolvePath(scopePath), 'utf8'));
const runItems = new Set(Object.keys(scope.by_item ?? {}));
const groups = new Set((scope.groups ?? []).map((group) => String(group.label)));
const realRejectionsById = new Map();
for (const entry of evidence.rejections.values()) {
  const rows = realRejectionsById.get(entry.row.id) ?? [];
  rows.push(entry.row);
  realRejectionsById.set(entry.row.id, rows);
}
if (publishedRepairsPath && existsSync(resolvePath(publishedRepairsPath))) {
  for (const [index, line] of readFileSync(resolvePath(publishedRepairsPath), 'utf8').split(/\r?\n/).filter(Boolean).entries()) {
    let record;
    try { record = JSON.parse(line); } catch {
      error('published-repair-json', `${publishedRepairsPath}:${index + 1}: invalid JSON`);
      continue;
    }
    publishedRows.push(record);
    if (record.kind === 'escalated') continue;   // the published gate blocks unresolved escalation
    if (record.kind !== 'repaired' || typeof record.id !== 'string'
      || typeof record.defect !== 'string' || !record.defect.trim()
      || typeof record.correction_basis !== 'string' || !record.correction_basis.trim()
      || typeof record.found_via !== 'string' || !record.found_via.trim()) {
      error('published-repair-shape',
        `${publishedRepairsPath}:${index + 1}: a repair row requires ` +
        '{kind:"repaired", id, group, found_via, pre_sha256, defect, correction_basis}. ' +
        '`defect` says what was false, `correction_basis` says what makes the replacement right ' +
        '(the exact source-checked statement, or the elementary check), and `found_via` names the ' +
        'run item whose rejection exposed it. A repair to published content with none of those ' +
        'recorded is indistinguishable from an unlicensed edit.', record.id);
      continue;
    }
    if (runItems.has(record.id)) {
      error('published-repair-in-run',
        `${publishedRepairsPath}:${index + 1}: ${record.id} belongs to this run; use its exact judge rejection and ordinary fatal licence`,
        record.id);
      continue;
    }
    if (!groups.has(String(record.group))) {
      error('published-repair-group',
        `${publishedRepairsPath}:${index + 1}: group ${record.group} is not a group in ${scopePath}`, record.id);
      continue;
    }
    if (!runItems.has(record.found_via) || scope.by_item?.[record.found_via] !== String(record.group)) {
      error('published-repair-provenance',
        `${publishedRepairsPath}:${index + 1}: found_via must be a run item owned by group ${record.group}`, record.id);
      continue;
    }
    const fromStep6 = record.found_at_stage === '6a-read';
    if (fromStep6) {
      const decisionPath = resolvePath(`research/${scope.run}-alpha-${record.group}-6b-decisions.json`);
      let decision = null;
      try {
        const doc = JSON.parse(readFileSync(decisionPath, 'utf8'));
        decision = (doc.decisions ?? []).find((candidate) =>
          candidate.obligation === record.step6_obligation && candidate.id === record.id
          && candidate.route === 'reader'
          && ['confirmed_fatal', 'confirmed_nonfatal'].includes(candidate.verdict));
      } catch { /* exact diagnostic below */ }
      if (!decision || !/^reader:\d+:\d+$/.test(record.step6_obligation ?? '')
        || typeof record.step6_defect_class !== 'string' || !record.step6_defect_class
        || typeof record.post_sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(record.post_sha256)
        || shortHash(record.post_sha256) !== baseline.hashes?.[record.id]) {
        error('published-repair-step6-provenance',
          `${publishedRepairsPath}:${index + 1}: Step-6 repair must exact-match its reader decision and the pre-Step-8 baseline`, record.id);
        continue;
      }
    } else if (!(realRejectionsById.get(record.found_via) ?? []).length) {
      error('published-repair-no-exposing-rejection',
        `${publishedRepairsPath}:${index + 1}: found_via ${record.found_via} has no real keep:false judge verdict`, record.id);
      continue;
    }
    if (typeof record.pre_sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(record.pre_sha256)) {
      error('published-repair-unhashed',
        `${publishedRepairsPath}:${index + 1}: ${record.id} has no valid pre_sha256; record the GUARD ` +
        'form (tools/item-hash.mjs `itemHashGuard`, whole `verification:` block excluded). Without the ' +
        'text state the repair was made against, the row would license every future edit to this item.',
        record.id);
      continue;
    }
    if (!fromStep6) {
      if (!publishedLicences.has(record.id)) publishedLicences.set(record.id, new Set());
      publishedLicences.get(record.id).add(shortHash(record.pre_sha256));
    }
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
  // A published-page repair is licensed by its own row against the same
  // pre-edit state. It is not a weaker licence: the row must name the falsehood
  // and what makes the replacement right, and the repaired item is then routed
  // to BOTH judge lanes, which is a stronger certification than the single
  // reader the published-dependency-repair rule asks for at step 6.
  if (publishedLicences.get(id)?.has(baseline.hashes[id])) continue;
  // The two-cycle terminal route is deliberately post-edit and exact: it
  // licenses only the current item bytes named by the manual resolution. Judge
  // closure separately verifies the context hash before treating the blocker as
  // closed. A later edit makes this comparison fail immediately.
  const terminal = terminalParsed.latest.get(id);
  if (terminal) {
    const text = readFileSync(join(ITEMS, `${id}.md`), 'utf8');
    if (terminal.item_sha256 === itemHashJudge(text)) continue;
    error('terminal-resolution-stale', `${id}: terminal resolution does not match the current item text`, id);
    continue;
  }
  const said = (seenOutcomes.get(id) ?? []).map((o) => `${o.model}:${o.outcome}`).join(', ') || 'no adjudication at all';
  error('nonfatal-edit',
    `${id}: changed since "${baselineLabel}" (${baseline.hashes[id]} -> ${now[id]}) with no confirmed_fatal ` +
    `adjudication against that text state — Alpha recorded ${said}. Step 8 is fatal-only: revert the edit and ` +
    'close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. ' +
    'The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs ' +
    '`itemHashGuard`), and the row\'s item_sha256 must be in that same form — a judge-ledger hash, which ' +
    'excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.', id);
}

// Creation and deletion are Step-6 powers. A warning here silently granted a
// power Step 8 explicitly does not have, so both are hard failures.
for (const id of created) error('step8-creation', `${id}: created since "${baselineLabel}"; adding results is not licensed at Step 8`, id);
for (const id of deleted) error('step8-deletion', `${id}: removed since "${baselineLabel}"; deleting results is not licensed at Step 8`, id);

// ---- report -----------------------------------------------------------------

const summary = {
  baseline: baselineLabel,
  baseline_at: baseline.at ?? null,
  compared_against: againstLabel ?? 'working tree',
  items_at_baseline: Object.keys(baseline.hashes).length,
  changed: changed.length,
  licensed_by_fatal_or_terminal_resolution: changed.length - errors.filter((e) => e.code === 'nonfatal-edit').length,
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
  console.log(`  ${summary.licensed_by_fatal_or_terminal_resolution}/${changed.length} change(s) licensed by a confirmed_fatal adjudication or exact terminal resolution`);
  for (const w of warnings) console.log(`  WARN  ${w.code}: ${w.message}`);
  for (const e of errors) console.log(`  ERROR ${e.code}: ${e.message}`);
  console.log(errors.length ? `\nFAIL — ${errors.length} error(s)` : '\nOK — every step-8 edit is licensed by a confirmed fatal defect');
}
process.exit(errors.length ? 1 : 0);
