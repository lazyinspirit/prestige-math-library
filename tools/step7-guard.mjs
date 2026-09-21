#!/usr/bin/env node
// step7-guard.mjs — R1: step 7 is FATAL-ONLY (owner, 2026-08-03).
//
// node tools/step7-guard.mjs \
//   --touches      research/level<n>-touches.json \
//   --baseline     "pre-step7" \
//   --adjudications research/level<n>-judge-adjudications.jsonl \
//   [--against "<later snapshot label>"] [--json]
//
// WHY THIS EXISTS. At step 7 Alpha adjudicates each configured-judge rejection as
// `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. A Step-6 reader
// warning can likewise be confirmed fatal on an exact pre-edit hash. Only those
// fatal decisions license a content edit. The other outcomes close where they stand:
// tools/level-coverage.mjs already lets them clear closure as warnings, so no
// gate ever demanded the edit.
//
// The replacement round protocol uses centralized certification of the complete
// repaired state, with published downstream repairs included. When its frozen
// frontier exists, exact certification and baseline coverage are mandatory;
// legacy adjudication/terminal licences cannot substitute for missing evidence.
// Runs without that frontier retain the historical fatal-edit licence checks.
//
// HOW IT DECIDES, from disk rather than from an agent's account of its own edit.
// A dedicated baseline snapshot is taken immediately before step-7 adjudication
// begins — the same pattern tools/impact-audit.mjs uses. Every item whose
// normalized content changed since that baseline must be licensed by a
// `confirmed_fatal` adjudication recorded against the pre-edit text state. An
// item Alpha only ever adjudicated nonfatal has no such row, so the polish is a
// hard error.
//
// Scoping it to an explicit baseline is what keeps it exact: a legitimate later
// stage (a step-8 scope-denial repair, an owner-directed change) is simply not
// in this window, so it can never be mistaken for a nonfatal polish.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { itemHashGuard, itemHashJudge, shortHash } from './item-hash.mjs';
import { parseTerminalResolutions } from './step7-terminal-resolution.mjs';
import { loadStep7JudgeEvidence, rejectionKey, isFrozenStep5CrossRepair } from './step7-evidence.mjs';
import { permittedNewLemmas } from './step7-new-lemmas.mjs';
import { loadAuditorCreatedCertifications } from './auditor-created-items.mjs';
import { frontmatterList } from './frontmatter-list.mjs';
import { checkWorkflow, workflowDir } from './step7-workflow.mjs';
import { validateFrontier } from './step7-rounds.mjs';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const option = (name) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : null;
};
const ITEMS = option('--items-dir') ? resolve(option('--items-dir')) : join(REPO, 'items');
const workflowRoot = option('--workflow-root') ? resolve(option('--workflow-root')) : REPO;

const touchesPath = option('--touches');
const baselineLabel = option('--baseline');
const adjudicationsPath = option('--adjudications');
const judgeLedgerPath = option('--judge-ledger');
const scopePath = option('--scope');
const againstLabel = option('--against');
// THE SECOND LICENCE SOURCE (owner, 2026-08-25). A step-7 Alpha that finds a
// falsehood in a PUBLISHED item must repair it, and that edit is real work with
// no judge verdict behind it — published content was never in this run's frozen
// pair context, so no adjudication row can exist for it. Before this flag the
// only way to license such an edit was to write a `confirmed_fatal` row naming a
// model that never judged the item, which is a fabricated verdict in an
// append-only ledger step 9 reports from.
//
// A separate file with its own required shape keeps the two apart: an
// adjudication answers a judge, a published repair answers the library. Omitting
// the flag leaves the guard exactly as strict as it was.
const publishedRepairsPath = option('--published-repairs');
const terminalResolutionsPath = option('--terminal-resolutions');
const auditorCertificationsPath = option('--auditor-certifications');
// A fatal repair can expose a defect in one of its own run-local prerequisites,
// or force a downstream consumer to stop naming the retracted interface. Those
// items have no judge rejection of their own, so the ordinary fatal licence
// cannot name them. After automatic repair exhaustion the owner may authorize
// an exact downstream impact repair; prerequisites may also be authorized by
// the independent final adjudicator reviewing the exposing item. Both receipt
// forms are deliberately exact: same group, baseline and repaired hashes, the
// authoritative sources used for the correction, and either one direct
// prerequisite edge or an ordered consumer path rooted at a real fatal. Every
// intermediate consumer in an impact path must already have its own licence,
// so one fatal cannot silently bless arbitrary edits throughout its dependency
// cone. An FA prerequisite licence additionally has to match the exposing
// item's terminal receipt; prose claiming that an FA was involved is not
// authority.
const ownerPrerequisiteRepairsPath = option('--owner-prerequisite-repairs');
const defectLedgerPath = option('--defect-ledger') ?? join(REPO, 'research', 'defect-ledger.jsonl');

const usage = () => {
  console.error('usage: node tools/step7-guard.mjs --touches <ledger.json> --baseline "<label>" --judge-ledger <file.jsonl> --adjudications <file.jsonl> --scope <step7-scope.json> [--workflow-root <repo>] [--auditor-certifications <file.json>] [--published-repairs <file.jsonl>] [--owner-prerequisite-repairs <file.jsonl>] [--terminal-resolutions <file.jsonl>] [--against "<label>"] [--json]');
  process.exit(2);
};
if (!touchesPath || !baselineLabel || !judgeLedgerPath || !adjudicationsPath || !scopePath) usage();

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });

const resolvePath = (p) => (p.startsWith('/') ? p : join(REPO, p));

// ---- the baseline, and the state to compare it against ---------------------

if (!existsSync(resolvePath(touchesPath))) {
  console.error(`step7-guard: touch ledger not found: ${touchesPath}`);
  process.exit(2);
}
const ledger = JSON.parse(readFileSync(resolvePath(touchesPath), 'utf8'));
const snapshots = ledger.snapshots ?? [];
// Last snapshot carrying the label: re-snapping the same stage is idempotent by
// design, so the most recent one is the operative baseline.
const baseline = [...snapshots].reverse().find((s) => s.label === baselineLabel);
if (!baseline) {
  console.error(`step7-guard: no snapshot labelled "${baselineLabel}" in ${touchesPath}` +
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
      console.error(`step7-guard: no snapshot labelled "${againstLabel}" in ${touchesPath}`);
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

// The replacement protocol certifies an entire drained repair wave, including
// published downstream items. Its exact baseline and evidence replace the old
// per-item terminal licences; it never needs a synthetic judge rejection.
const workflowScope = JSON.parse(readFileSync(resolvePath(scopePath), 'utf8'));
const workflowDirectory = workflowDir(workflowRoot, workflowScope.run);
if (existsSync(workflowDirectory)) {
  const changed = Object.keys(now).filter(id => baseline.hashes?.[id] && baseline.hashes[id] !== now[id]);
  const created = Object.keys(now).filter(id => !Object.hasOwn(baseline.hashes ?? {}, id));
  const deleted = Object.keys(baseline.hashes ?? {}).filter(id => !Object.hasOwn(now, id));
  let licensed = 0;
  try {
    const certificate = checkWorkflow(workflowRoot, workflowScope.run);
    if (!['impact-repeat', 'gate'].includes(certificate.phase)) throw Error('Step 7 requires a completed repeat-round certification');
    const frontier = validateFrontier(JSON.parse(readFileSync(join(workflowDirectory, 'frontier.json'), 'utf8')));
    if (frontier.run !== workflowScope.run
      || JSON.stringify([...frontier.ids].sort()) !== JSON.stringify(Object.keys(workflowScope.by_item ?? {}).sort()))
      throw Error('frozen original frontier does not match Step-7 scope');
    const original = JSON.parse(readFileSync(join(workflowDirectory, 'baseline.json'), 'utf8'));
    if (JSON.stringify(Object.keys(original).sort()) !== JSON.stringify(Object.keys(baseline.hashes ?? {}).sort())
      || Object.entries(original).some(([id, hash]) => !/^[a-f0-9]{64}$/.test(hash) || shortHash(hash) !== baseline.hashes[id]))
      throw Error('workflow baseline does not exactly match the original touchlog baseline');
    const certified = new Map(certificate.items.map(row => [row.id, row]));
    for (const id of changed) {
      if (shortHash(certified.get(id)?.guard_sha256 ?? '') !== now[id])
        error('step7-certification-unlicensed', `${id}: changed item lacks an exact current centralized certification`, id);
      else licensed++;
    }
    for (const id of created) error('step7-creation', `${id}: item creation is outside the frozen replacement protocol`, id);
    for (const id of deleted) error('step7-deletion', `${id}: deleting results is not licensed at Step 7`, id);
  } catch (cause) { error('step7-certification-invalid', cause.message); }
  const summary = { baseline: baselineLabel, baseline_at: baseline.at ?? null,
    compared_against: againstLabel ?? 'working tree', items_at_baseline: Object.keys(baseline.hashes ?? {}).length,
    changed: changed.length, licensed_by_centralized_certification: licensed,
    created: created.length, deleted: deleted.length, errors: errors.length, warnings: warnings.length };
  if (asJson) console.log(JSON.stringify({ summary, changed, created, deleted, errors, warnings }, null, 2));
  else {
    console.log(`step7-guard: baseline "${baselineLabel}" vs ${summary.compared_against}`);
    console.log(`  ${summary.items_at_baseline} item(s) at baseline; ${changed.length} changed, ${created.length} created, ${deleted.length} deleted`);
    console.log(`  ${licensed}/${changed.length} change(s) licensed by centralized Step-7 certification`);
    for (const entry of errors) console.log(`  ERROR ${entry.code}: ${entry.message}`);
    console.log(errors.length ? `FAIL — ${errors.length} error(s)` : 'OK — every Step-7 edit has exact centralized certification');
  }
  process.exit(errors.length ? 1 : 0);
}

// ---- adjudications ---------------------------------------------------------

const terminalParsed = parseTerminalResolutions(
  terminalResolutionsPath ? resolvePath(terminalResolutionsPath) : '',
  { allowMissing: true },
);
for (const message of terminalParsed.errors) error('terminal-resolution-shape', message);

/** id -> Set of pre-edit text states a confirmed_fatal row licenses editing. */
const fatalLicences = new Map();
/** id -> [{model, outcome}] for the report, so a violation names what Alpha said. */
const seenOutcomes = new Map();

const evidence = loadStep7JudgeEvidence(resolvePath(judgeLedgerPath), resolvePath(adjudicationsPath),
  { allowMissingAdjudications: false });
for (const message of evidence.errors) error('step7-evidence-shape', message);
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

// A rejection-blind Step-6 reader warning is independent mathematical evidence,
// not a fabricated judge verdict. The owning Sol adjudicator may confirm it
// fatal and repair the exact pre-edit bytes; the scope gate separately requires
// a disposition for every warning and validates the repaired post-state.
const readerFatalLicences = new Map();
const alertsPath = resolvePath(`research/${scope.run}-step7-alerts.json`);
const alertDecisionsPath = resolvePath(`research/${scope.run}-step7-alert-decisions.jsonl`);
if (existsSync(alertsPath) && existsSync(alertDecisionsPath)) {
  let alerts = [];
  try { alerts = JSON.parse(readFileSync(alertsPath, 'utf8'))?.alerts ?? []; }
  catch { error('reader-warning-alerts-json', `${alertsPath}: invalid JSON`); }
  const byAlert = new Map(alerts.map((alert) => [alert.alert_id, alert]));
  const latestDecisions = new Map();
  for (const [index, line] of readFileSync(alertDecisionsPath, 'utf8').split(/\r?\n/).entries()) {
    if (!line.trim()) continue;
    let record;
    try { record = JSON.parse(line); }
    catch { error('reader-warning-decision-json', `${alertDecisionsPath}:${index + 1}: invalid JSON`); continue; }
    if (typeof record?.alert_id === 'string') latestDecisions.set(record.alert_id, { record, index });
  }
  // The decisions ledger is append-only. Match step7-scope's disposition
  // semantics: a later row for the same stable alert id supersedes the earlier
  // decision while preserving it as history. Validating every historical fatal
  // row makes a corrected hash receipt impossible to record without deleting
  // evidence, which is the opposite of the ledger contract.
  for (const { record, index } of latestDecisions.values()) {
    if (record.outcome !== 'confirmed_fatal') continue;
    const alert = byAlert.get(record.alert_id);
    const where = `${alertDecisionsPath}:${index + 1}`;
    if (alert?.source !== 'step6-read' || alert.item !== record.item
      || alert.owning_group !== String(record.owning_group ?? '')
      || !/^[a-f0-9]{64}$/.test(String(record.item_sha256 ?? ''))
      || !/^[a-f0-9]{64}$/.test(String(record.post_sha256 ?? ''))
      || !['logic', 'dependency_citation', 'other'].includes(record.defect_type)) {
      error('reader-warning-fatal-licence-shape',
        `${where}: confirmed_fatal must exact-match a Step-6 reader warning with ownership, defect_type, and pre/post guard hashes`,
        record.item ?? null);
      continue;
    }
    const currentTerminal = terminalParsed.latest.get(record.item);
    const terminalSupersedesReaderPost = currentTerminal?.resolved_by === 'final-adjudicator'
      && existsSync(join(ITEMS, `${record.item}.md`))
      && currentTerminal.item_sha256 === itemHashJudge(
        readFileSync(join(ITEMS, `${record.item}.md`), 'utf8'));
    if (shortHash(record.item_sha256) !== baseline.hashes?.[record.item]
      || (shortHash(record.post_sha256) !== now?.[record.item] && !terminalSupersedesReaderPost)
      || record.item_sha256 === record.post_sha256) {
      error('reader-warning-fatal-licence-stale',
        `${where}: reader-warning repair hashes do not match the Step-7 baseline and current item`, record.item);
      continue;
    }
    if (!readerFatalLicences.has(record.item)) readerFatalLicences.set(record.item, new Set());
    readerFatalLicences.get(record.item).add(shortHash(record.item_sha256));
    if (!seenOutcomes.has(record.item)) seenOutcomes.set(record.item, []);
    seenOutcomes.get(record.item).push({ model: 'step6-reader', outcome: record.outcome });
  }
}
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
    if (record.found_at_stage === '5b-cross') {
      let inherited = false;
      try {
        inherited = isFrozenStep5CrossRepair(record, {
          run: scope.run,
          closure: JSON.parse(readFileSync(resolvePath(`research/${scope.run}-step5-closure.json`), 'utf8')),
          claimsText: readFileSync(resolvePath(`research/${scope.run}-step5-published-claims.jsonl`), 'utf8'),
          baselineHash: baseline.hashes?.[record.id],
        });
      } catch { /* Missing or malformed frozen evidence fails below. */ }
      if (!inherited) error('published-repair-step5-provenance',
        `${publishedRepairsPath}:${index + 1}: inherited cross-group repair must match frozen Step-5 claims and the pre-Step-7 baseline`, record.id);
      continue; // Historical evidence grants no licence for a later edit.
    }
    if (!runItems.has(record.found_via) || scope.by_item?.[record.found_via] !== String(record.group)) {
      error('published-repair-provenance',
        `${publishedRepairsPath}:${index + 1}: found_via must be a run item owned by group ${record.group}`, record.id);
      continue;
    }
    const fromStep5 = record.found_at_stage === '5a-adjudicate';
    if (fromStep5) {
      const decisionPath = resolvePath(`research/${scope.run}-alpha-${record.group}-5a-decisions.json`);
      let decision = null;
      try {
        const doc = JSON.parse(readFileSync(decisionPath, 'utf8'));
        decision = (doc.decisions ?? []).find((candidate) =>
          candidate.obligation === record.step5_obligation && candidate.id === record.id
          && candidate.route === 'reader'
          && ['confirmed_fatal', 'confirmed_nonfatal'].includes(candidate.verdict));
      } catch { /* exact diagnostic below */ }
      if (!decision || !/^reader:\d+:\d+$/.test(record.step5_obligation ?? '')
        || typeof record.step5_defect_class !== 'string' || !record.step5_defect_class
        || typeof record.post_sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(record.post_sha256)
        || shortHash(record.post_sha256) !== baseline.hashes?.[record.id]) {
        error('published-repair-step5-provenance',
          `${publishedRepairsPath}:${index + 1}: Step-5 repair must exact-match its reader decision and the pre-Step-7 baseline`, record.id);
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
    if (!fromStep5) {
      if (!publishedLicences.has(record.id)) publishedLicences.set(record.id, new Set());
      publishedLicences.get(record.id).add(shortHash(record.pre_sha256));
    }
  }
}

// ---- exact owner-authorized run-local prerequisite repairs -----------------

/** id -> Set of baseline states licensed by an exact owner run-local repair row. */
const ownerPrerequisiteLicences = new Map();
if (ownerPrerequisiteRepairsPath && existsSync(resolvePath(ownerPrerequisiteRepairsPath))) {
  for (const [index, line] of readFileSync(resolvePath(ownerPrerequisiteRepairsPath), 'utf8').split(/\r?\n/).filter(Boolean).entries()) {
    let record;
    try { record = JSON.parse(line); } catch {
      error('owner-prerequisite-repair-json', `${ownerPrerequisiteRepairsPath}:${index + 1}: invalid JSON`);
      continue;
    }
    const where = `${ownerPrerequisiteRepairsPath}:${index + 1}`;
    const authorizedByOwner = record?.authorized_by === 'owner';
    const authorizedByFa = record?.authorized_by === 'final-adjudicator';
    const prerequisiteRepair = record?.kind === 'owner-prerequisite-repair';
    const impactRepair = record?.kind === 'owner-impact-repair';
    // A defect found while SATISFYING the Step-7 preflight battery (a stale
    // contract quote whose re-read exposes a real defect in the item itself)
    // has no judge rejection to license it: the judge passed the item. The
    // owner authorises the repair explicitly, bound to the closed fatal
    // defect-ledger row the reviewing Alpha wrote for it.
    const preflightRepair = record?.kind === 'owner-preflight-repair';
    if (record?.version !== 1 || (!prerequisiteRepair && !impactRepair && !preflightRepair)
      || record?.run !== scope.run || (!authorizedByOwner && !authorizedByFa)
      || typeof record?.id !== 'string' || typeof record?.found_via !== 'string'
      || typeof record?.defect !== 'string' || record.defect.trim().length < 20
      || typeof record?.correction_basis !== 'string' || record.correction_basis.trim().length < 80
      || !Array.isArray(record?.source_urls) || record.source_urls.length < 2
      || record.source_urls.some((url) => typeof url !== 'string' || !/^https:\/\//.test(url))
      || typeof record?.at !== 'string' || !Number.isFinite(Date.parse(record.at))
      || !/^[a-f0-9]{64}$/.test(record?.pre_sha256 ?? '')
      || !/^[a-f0-9]{64}$/.test(record?.post_sha256 ?? '')) {
      error('owner-prerequisite-repair-shape',
        `${where}: requires a version-1 owner-prerequisite-repair or owner-impact-repair with run, id, found_via, `
        + 'authorized_by:"owner" or "final-adjudicator", exact pre/post hashes, at least two HTTPS source URLs, and concrete defect/correction evidence',
        record?.id ?? null);
      continue;
    }
    if (!runItems.has(record.id) || !runItems.has(record.found_via)) {
      error('owner-prerequisite-repair-scope', `${where}: id and found_via must both belong to this run`, record.id);
      continue;
    }
    const group = scope.by_item?.[record.id];
    if (group !== scope.by_item?.[record.found_via] || String(record.group) !== String(group)) {
      error('owner-prerequisite-repair-group', `${where}: prerequisite and exposing item must belong to the recorded group`, record.id);
      continue;
    }
    if (preflightRepair) {
      if (!authorizedByOwner) {
        error('owner-preflight-repair-authority', `${where}: a preflight repair requires authorized_by:"owner"`, record.id);
        continue;
      }
      if (record.id !== record.found_via) {
        error('owner-preflight-repair-site', `${where}: id and found_via must be the same item — the defect is in the repaired item itself`, record.id);
        continue;
      }
      const rows = readFileSync(defectLedgerPath, 'utf8')
        .split(/\r?\n/).filter(Boolean).map((line) => { try { return JSON.parse(line); } catch { return null; } })
        .filter(Boolean);
      const row = rows.find((entry) => entry.defect_id === record.defect_id);
      if (!row || row.subject !== record.id || row.severity !== 'fatal'
        || !['fixed', 'narrowed'].includes(row.disposition)) {
        error('owner-preflight-repair-defect',
          `${where}: defect_id must name a closed fatal defect-ledger row for ${record.id}`, record.id);
        continue;
      }
    } else if (prerequisiteRepair) {
      const exposingText = readFileSync(join(ITEMS, `${record.found_via}.md`), 'utf8');
      const deps = frontmatterList(exposingText, 'deps');
      if (!deps.includes(record.id)) {
        error('owner-prerequisite-repair-not-direct', `${where}: ${record.id} is not a direct dependency of ${record.found_via}`, record.id);
        continue;
      }
      if (!(fatalLicences.get(record.found_via)?.size)) {
        error('owner-prerequisite-repair-no-fatal', `${where}: found_via has no exact confirmed-fatal judge adjudication`, record.id);
        continue;
      }
    } else {
      if (!authorizedByOwner) {
        error('owner-impact-repair-authority', `${where}: downstream impact repairs require authorized_by:"owner"`, record.id);
        continue;
      }
      const path = record.dependency_path;
      if (!Array.isArray(path) || path.length < 2 || path[0] !== record.found_via
        || path.at(-1) !== record.id || new Set(path).size !== path.length
        || path.some((id) => typeof id !== 'string')) {
        error('owner-impact-repair-path', `${where}: dependency_path must be a unique ordered path from found_via to id`, record.id);
        continue;
      }
      if (path.some((id) => !runItems.has(id) || scope.by_item?.[id] !== group)) {
        error('owner-impact-repair-scope', `${where}: every dependency_path item must belong to group ${group}`, record.id);
        continue;
      }
      let brokenEdge = null;
      for (let i = 1; i < path.length; i += 1) {
        const consumerText = readFileSync(join(ITEMS, `${path[i]}.md`), 'utf8');
        if (!frontmatterList(consumerText, 'deps').includes(path[i - 1])) {
          brokenEdge = `${path[i - 1]} -> ${path[i]}`;
          break;
        }
      }
      if (brokenEdge) {
        error('owner-impact-repair-not-path', `${where}: ${brokenEdge} is not a declared supplier-to-consumer edge`, record.id);
        continue;
      }
      const rootLicensed = fatalLicences.get(path[0])?.has(baseline.hashes?.[path[0]])
        || readerFatalLicences.get(path[0])?.has(baseline.hashes?.[path[0]]);
      if (!rootLicensed) {
        error('owner-impact-repair-no-fatal', `${where}: dependency_path root has no exact fatal licence against the Step-7 baseline`, record.id);
        continue;
      }
      const unlicensedIntermediate = path.slice(1, -1).find((id) =>
        !(fatalLicences.get(id)?.has(baseline.hashes?.[id])
          || readerFatalLicences.get(id)?.has(baseline.hashes?.[id])
          || ownerPrerequisiteLicences.get(id)?.has(baseline.hashes?.[id])));
      if (unlicensedIntermediate) {
        error('owner-impact-repair-unlicensed-intermediate',
          `${where}: ${unlicensedIntermediate} must have its own earlier exact repair licence`, record.id);
        continue;
      }
    }
    if (prerequisiteRepair && authorizedByFa) {
      const terminal = terminalParsed.latest.get(record.found_via);
      const terminalSources = new Set(terminal?.final_adjudicator?.authoritative_sources ?? []);
      if (terminal?.resolved_by !== 'final-adjudicator' || terminal?.disposition !== 'repaired'
        || String(terminal?.final_adjudicator?.group) !== String(record.group)
        || record.source_urls.some((url) => !terminalSources.has(url))) {
        error('final-adjudicator-prerequisite-repair-provenance',
          `${where}: an FA prerequisite repair must match a repaired terminal resolution for found_via in the same group, and every source URL must occur in that FA receipt`, record.id);
        continue;
      }
      const exposingText = readFileSync(join(ITEMS, `${record.found_via}.md`), 'utf8');
      if (terminal.item_sha256 !== itemHashJudge(exposingText)) {
        error('final-adjudicator-prerequisite-repair-stale',
          `${where}: found_via terminal resolution does not match the current exposing item`, record.id);
        continue;
      }
    }
    if (shortHash(record.pre_sha256) !== baseline.hashes?.[record.id]
      || shortHash(record.post_sha256) !== now?.[record.id]
      || record.pre_sha256 === record.post_sha256) {
      error('owner-prerequisite-repair-stale', `${where}: exact pre/post hashes do not match the Step-7 baseline and current item`, record.id);
      continue;
    }
    if (!ownerPrerequisiteLicences.has(record.id)) ownerPrerequisiteLicences.set(record.id, new Set());
    ownerPrerequisiteLicences.get(record.id).add(shortHash(record.pre_sha256));
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
  if (readerFatalLicences.get(id)?.has(baseline.hashes[id])) continue;
  // A published-page repair is licensed by its own row against the same
  // pre-edit state. It is not a weaker licence: the row must name the falsehood
  // and what makes the replacement right, and the repaired item is then routed
  // back to the sole Terra judge, which is stronger certification than the single
  // reader the published-dependency-repair rule asks for at step 5.
  if (publishedLicences.get(id)?.has(baseline.hashes[id])) continue;
  if (ownerPrerequisiteLicences.get(id)?.has(baseline.hashes[id])) continue;
  // The post-rejudge terminal route is deliberately post-edit and exact: it
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
    `judge or Step-6 reader adjudication against that text state — Alpha recorded ${said}. Step 7 is fatal-only: revert the edit and ` +
    'close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. ' +
    'The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs ' +
    '`itemHashGuard`), and the row\'s item_sha256 must be in that same form — a judge-ledger hash, which ' +
    'excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.', id);
}

// Both initial and final adjudicators may author missing dependency lemmas
// for a licensed fatal repair, including a chain of supporting new lemmas.
// This does not authorize unrelated results or edits to existing dependencies.
const licensedConsumers = changed.filter((id) =>
  !errors.some((entry) => entry.id === id) && (
    fatalLicences.get(id)?.has(baseline.hashes[id])
    || readerFatalLicences.get(id)?.has(baseline.hashes[id])
    || publishedLicences.get(id)?.has(baseline.hashes[id])
    || ownerPrerequisiteLicences.get(id)?.has(baseline.hashes[id])
    || terminalParsed.latest.get(id)?.item_sha256 === itemHashJudge(readFileSync(join(ITEMS, `${id}.md`), 'utf8'))));
const newLemmas = permittedNewLemmas({ created, licensedConsumers,
  readItem: (id) => readFileSync(join(ITEMS, `${id}.md`), 'utf8') });
for (const id of created) if (!newLemmas.has(id)) error('step7-creation',
  `${id}: a new Step-7 item must be a dependency lemma used by a licensed fatal repair`, id);
if (auditorCertificationsPath) {
  let certified = [];
  try { certified = loadAuditorCreatedCertifications(resolvePath(auditorCertificationsPath),
    { root: REPO, run: scope.run, steps: [7] }); }
  catch (cause) { error('auditor-certification-shape', cause.message); }
  const current = new Map(certified.map(row => [row.id, row]));
  for (const id of created) {
    const row = current.get(id);
    if (!row) error('step7-creation-uncertified',
      `${id}: new Step-7 lemma lacks a current auditor/adjudicator-created certification`, id);
  }
}
for (const id of deleted) error('step7-deletion', `${id}: removed since "${baselineLabel}"; deleting results is not licensed at Step 7`, id);

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
  console.log(`step7-guard: baseline "${baselineLabel}"${baseline.at ? ` (${baseline.at})` : ''} vs ${summary.compared_against}`);
  console.log(`  ${summary.items_at_baseline} item(s) at baseline; ${changed.length} changed, ${created.length} created, ${deleted.length} deleted`);
  console.log(`  ${summary.licensed_by_fatal_or_terminal_resolution}/${changed.length} change(s) licensed by a confirmed_fatal judge/reader adjudication, exact owner run-local repair, or terminal resolution`);
  for (const w of warnings) console.log(`  WARN  ${w.code}: ${w.message}`);
  for (const e of errors) console.log(`  ERROR ${e.code}: ${e.message}`);
  console.log(errors.length ? `\nFAIL — ${errors.length} error(s)` : '\nOK — every step-7 edit is licensed by a confirmed fatal defect');
}
process.exit(errors.length ? 1 : 0);
