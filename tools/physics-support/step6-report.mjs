#!/usr/bin/env node
import { existsSync as physicsExistsSync } from 'node:fs';
const physicsToolRoot = fileURLToPath(new URL('../../', import.meta.url));
// Evidence-bound Step-6 reporting.
//
// Expensive mathematical gates produce structured receipts before this tool
// runs.  `evidence` reconciles those receipts and the append-only ledgers once;
// `summary` produces its deterministic owner response and `render` presents
// essential closure facts. The complete packet retains every audit row.

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync, lstatSync, mkdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runScope, sha256, splitFrontmatter } from './step6-lib.mjs';
import { resolveLineup } from './models.mjs';
import { verifyProofLayout, proofLayoutPath } from './proof-layout-receipt.mjs';
import { activeOwnershipRows } from '../defect-ledger-ownership.mjs';
import { protectedEntryHashes } from './step6-report-tree.mjs';
import { scopedReportTree } from '../step6-report-scope.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { makeSummaryResponse, renderSummaryReport, step6Telemetry } from '../step6-summary.mjs';

const LEDGER_TOOL = fileURLToPath(new URL('./defect-ledger.mjs', import.meta.url));

const args = process.argv.slice(2);
const command = args[0];
const value = (flag) => { const i = args.indexOf(flag); return i < 0 ? '' : args[i + 1] ?? ''; };
const run = value('--run');
const root = resolve(value('--root') || (process.env.PHYSICS_REPO ?? (physicsExistsSync(join(physicsToolRoot, 'PHYSICS-CONTENT-MODEL.md')) ? join(physicsToolRoot, 'physics') : physicsToolRoot)));
const die = (message) => { console.error(`ERROR ${message}`); process.exit(1); };
const commands = ['evidence', 'check-evidence', 'snapshot', 'check', 'check-response', 'summary', 'render'];
if (!run || !commands.includes(command)) die(`usage: node tools/physics-support/step6-report.mjs <${commands.join('|')}> --run <run> [--root <repo>] [--in <response.json>] [--out <path>]`);

const research = join(root, 'research');
const responsePath = join(research, `${run}-step6-report.response.json`);
const reportPath = join(research, `${run}-step6-report.md`);
const evidencePath = join(research, `${run}-step6-evidence.json`);
const integrityPath = join(research, `${run}-step6-report-integrity.json`);
const readJson = (path, label = relative(root, path)) => {
  if (!existsSync(path)) die(`${label}: missing`);
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch (cause) { die(`${label}: invalid JSON (${cause.message})`); }
};
const jsonLines = (path, required = true) => {
  if (!existsSync(path)) {
    if (required) die(`${relative(root, path)}: missing`);
    return [];
  }
  return readFileSync(path, 'utf8').split('\n').filter((line) => line.trim()).map((line, index) => {
    try { return JSON.parse(line); }
    catch { die(`${relative(root, path)}:${index + 1}: invalid JSON`); }
  });
};
const canonical = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
};

const defectProjection = rows => ({ kind: 'run-defect-history-v1', run,
  sha256: sha256(canonical(rows.filter(row => row.run === run))) });

function countBy(rows, key) {
  const out = {};
  for (const row of rows) {
    const value = typeof key === 'function' ? key(row) : row?.[key];
    const label = String(value ?? 'unknown');
    out[label] = (out[label] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
}

function repairCounts(touches) {
  const counts = {};
  for (const seeded of touches?.seeded ?? []) counts[seeded.id] = (counts[seeded.id] ?? 0) + (seeded.count ?? 1);
  const snapshots = touches?.snapshots ?? [];
  for (let index = 1; index < snapshots.length; index++) {
    const before = snapshots[index - 1]?.hashes ?? {};
    const after = snapshots[index]?.hashes ?? {};
    for (const id of Object.keys(after)) if (id in before && before[id] !== after[id]) counts[id] = (counts[id] ?? 0) + 1;
  }
  return Object.entries(counts).filter(([, count]) => count > 1)
    .map(([id, count]) => ({ id, repairs: count })).sort((a, b) => b.repairs - a.repairs || a.id.localeCompare(b.id));
}

function buildEvidence() {
  const paths = {
    readiness: join(research, `${run}-publication-readiness.json`),
    closure: join(research, `${run}-judge-closure.json`),
    pathway: join(research, `${run}-pathway-closure.json`),
    judge: join(research, `${run}-judge.jsonl`),
    adjudications: join(research, `${run}-judge-adjudications.jsonl`),
    defects: join(research, 'defect-ledger.jsonl'),
    touches: join(research, `${run}-touches.json`),
  };
  const readiness = readJson(paths.readiness);
  const closure = readJson(paths.closure);
  const pathway = readJson(paths.pathway);
  const touches = readJson(paths.touches);
  if (readiness.run !== run) die('publication readiness names the wrong run');
  if (readiness.verdict !== 'publishable-pending-owner-approval' || (readiness.workflow_owned_blockers ?? []).length) die('publication readiness is not closed');
  if (closure.closed !== true || (closure.needs_rejudge ?? []).length || (closure.unadjudicated ?? []).length || (closure.open_fatal ?? []).length) die('judge closure is not closed');
  let configuredModels;
  try { configuredModels = [...resolveLineup(closure.judge_lineup).models]; }
  catch (cause) { die(`judge closure names an invalid lineup (${cause.message})`); }
  const scope = runScope(run, root);
  const layout = verifyProofLayout(run, root);
  paths.proof_layout = proofLayoutPath(run, root);
  const items = scope.items.map((item) => {
    const { frontmatter } = splitFrontmatter(readFileSync(join(root, item.file), 'utf8'));
    return { ...item, kind: frontmatter.match(/^kind:\s*(\S+)\s*$/m)?.[1] ?? 'unknown' };
  });
  const deferralPaths = {
    pairs: join(research, `${run}-deferred-pairs.json`),
    items: join(research, `${run}-deferred-items.json`),
  };
  const deferrals = { pairs: [], items: [] };
  for (const [kind, path] of Object.entries(deferralPaths)) {
    if (!existsSync(path)) continue;
    const record = readJson(path);
    if (record.run !== run || !Array.isArray(record.deferred)) die(`${relative(root, path)}: invalid deferral record`);
    deferrals[kind] = record.deferred;
  }
  const activePages = new Set(scope.pages.map((page) => page.id));
  const activeItems = new Set(items.map((item) => item.id));
  for (const row of deferrals.pairs) {
    if (!row.page || !row.companion || !row.reason || activePages.has(row.page) || activePages.has(row.companion))
      die('deferred pair missing a reason or still active in the run scope');
  }
  for (const row of deferrals.items) {
    if (!row.item || !row.reason || activeItems.has(row.item))
      die('deferred item missing a reason or still active in the run scope');
  }

  const defects = jsonLines(paths.defects).filter((row) => row.run === run);
  // Validate every owning-run history row before deriving present ownership.
  const validation = spawnSync(process.execPath, [LEDGER_TOOL, 'validate',
    '--run', run, '--ledger', paths.defects], { cwd: root, encoding: 'utf8' });
  if (validation.error || validation.status !== 0)
    die(`defect ledger validation failed: ${validation.error?.message ?? (validation.stderr || validation.stdout).trim()}`);
  const ownershipErrors = [];
  const active = new Set(activeOwnershipRows(defects, ownershipErrors));
  if (ownershipErrors.length) die(`defect ledger ownership invalid: ${ownershipErrors.join('; ')}`);
  const frontierPath = join(research, `${run}-step5-v2/frontier.json`);
  const outsideOpenFindings = [];
  if (existsSync(frontierPath)) {
    const frontier = validateFrontier(readJson(frontierPath));
    if (frontier.run !== run) die('wrong run frontier');
    paths.frontier = frontierPath;
    const owned = new Set([...frontier.ids, ...activeItems]);
    const known = new Set(readdirSync(join(root, 'items')).filter(name => name.endsWith('.md')).map(name => name.slice(0, -3)));
    for (const row of active) {
      // Only known outside item maintenance is context. Unknown/page/global
      // subjects and incomplete records must still block mechanical closeout.
      if (row.disposition === 'open' && known.has(row.subject) && !owned.has(row.subject)) {
        outsideOpenFindings.push({ ...row, scope_status: 'outside-owned-frontier', acceptance: 'excluded-not-passed' });
        paths[`outside_item:${row.subject}`] = join(root, 'items', `${row.subject}.md`);
      }
    }
  }
  const excludedOpenIds = new Set(outsideOpenFindings.map(row => row.defect_id));
  const blockers = [...active].filter(row => ['open', 'unknown'].includes(row.disposition) && !excludedOpenIds.has(row.defect_id));
  if (blockers.length) die(`defect ledger contains an incomplete or open active row: ${blockers
    .map(row => `${row.defect_id} (${row.subject}): ${row.disposition}`).join('; ')}`);
  const successors = new Map();
  for (const row of defects) for (const id of row.supersedes ?? []) {
    const next = successors.get(id) ?? [];
    next.push(row);
    successors.set(id, next);
  }
  const ownerCache = new Map();
  const currentOwners = row => {
    if (ownerCache.has(row.defect_id)) return ownerCache.get(row.defect_id);
    const owners = active.has(row) ? [row.defect_id]
      : [...new Set((successors.get(row.defect_id) ?? []).flatMap(currentOwners))].sort();
    ownerCache.set(row.defect_id, owners);
    return owners;
  };
  const fatal = defects.filter((row) => row.severity === 'fatal').map((row) => ({
    defect_id: String(row.defect_id ?? ''),
    subject: String(row.subject ?? ''),
    class: String(row.class ?? 'unknown'),
    subclass: String(row.subclass ?? 'unknown'),
    location: String(row.location ?? 'unknown'),
    disposition: String(row.disposition ?? 'unknown'),
    ownership_status: active.has(row) ? 'active' : 'superseded',
    current_owners: currentOwners(row),
    caught_at_stage: String(row.caught_at_stage ?? 'unknown'),
    caught_by_role: String(row.caught_by_role ?? 'unknown'),
    repair_cost: String(row.repair_cost ?? 'unknown'),
    recurrence_of: row.recurrence_of ? String(row.recurrence_of) : null,
    note: String(row.subclass_note ?? ''),
  })).sort((a, b) => a.defect_id.localeCompare(b.defect_id));

  const judgeRows = jsonLines(paths.judge);
  const latest = new Map();
  for (const row of judgeRows) {
    if (!row?.id || !row?.model || !row?.context_sha256) continue;
    latest.set(`${row.id}\0${row.model}\0${row.context_sha256}`, row);
  }
  const verdicts = [...latest.values()];
  const byModel = {};
  for (const row of verdicts) {
    const stats = byModel[row.model] ??= { verdicts: 0, kept: 0, rejected: 0, null: 0 };
    stats.verdicts++;
    if (row.keep === true) stats.kept++; else if (row.keep === false) stats.rejected++; else stats.null++;
  }
  const versions = new Map();
  for (const row of verdicts) {
    const key = `${row.id}\0${row.item_sha256 ?? row.context_sha256}`;
    const rows = versions.get(key) ?? [];
    rows.push(row);
    versions.set(key, rows);
  }
  const configuredSetStats = {
    versions_with_evidence: 0,
    complete_versions: 0,
    all_keep: 0,
    all_reject: 0,
    mixed: 0,
    contains_null: 0,
    incomplete: 0,
  };
  for (const rows of versions.values()) {
    const byConfiguredModel = new Map(rows
      .filter((row) => configuredModels.includes(row.model))
      .map((row) => [row.model, row]));
    if (!byConfiguredModel.size) continue;
    configuredSetStats.versions_with_evidence++;
    if (!configuredModels.every((model) => byConfiguredModel.has(model))) {
      configuredSetStats.incomplete++;
      continue;
    }
    configuredSetStats.complete_versions++;
    const keeps = configuredModels.map((model) => byConfiguredModel.get(model).keep);
    if (keeps.some((keep) => keep == null)) configuredSetStats.contains_null++;
    else if (keeps.every((keep) => keep === true)) configuredSetStats.all_keep++;
    else if (keeps.every((keep) => keep === false)) configuredSetStats.all_reject++;
    else configuredSetStats.mixed++;
  }
  const adjudications = jsonLines(paths.adjudications);
  const inputs = Object.fromEntries([...Object.values(paths).filter(path => path !== paths.defects), ...Object.values(deferralPaths).filter(existsSync)]
    .map((path) => [relative(root, path), sha256(readFileSync(path))]));
  const result = {
    version: 3,
    run,
    readiness: {
      verdict: readiness.verdict,
      workflow_owned_blockers: readiness.workflow_owned_blockers ?? [],
      owner_actions_remaining: readiness.owner_actions_remaining ?? [],
      content_sha256: readiness.content_sha256,
    },
    build: {
      pages: scope.pages.length,
      items: items.length,
      categories: scope.categories,
      pages_by_category: countBy(scope.pages, 'category'),
      items_by_kind: countBy(items, 'kind'),
    },
    deferrals,
    verification: {
      proof_layout: { items: layout.items.length, steps: layout.steps, gates: layout.gates, fingerprint: layout.fingerprint },
      judge_lineup: closure.judge_lineup ?? 'unknown',
      scope: closure.scope ?? items.length,
      verdicts_complete: closure.verdicts_complete ?? closure.pairs_complete ?? 0,
      terminal_resolutions: closure.terminal_resolved ?? [],
      closure_closed: closure.closed === true,
      workflow_owned_blockers: 0,
    },
    defects: {
      outsideOpenFindings,
      total_rows: defects.length,
      active_rows: active.size,
      historical_rows: defects.length - active.size,
      fatal_count: fatal.length,
      active_fatal_count: fatal.filter(row => row.ownership_status === 'active').length,
      historical_fatal_count: fatal.filter(row => row.ownership_status === 'superseded').length,
      by_class: countBy(fatal, 'class'),
      by_subclass: countBy(fatal, 'subclass'),
      by_location: countBy(fatal, 'location'),
      fatal,
    },
    judges: {
      ledger_rows: judgeRows.length,
      exact_verdicts: verdicts.length,
      by_model: Object.fromEntries(Object.entries(byModel).sort(([a], [b]) => a.localeCompare(b))),
      configured_set_stats: configuredSetStats,
      adjudications: { rows: adjudications.length, outcomes: countBy(adjudications, 'outcome') },
    },
    repeated_repairs: repairCounts(touches),
    pathway: {
      obligations: (pathway.briefs ?? []).length,
      closed: (pathway.briefs ?? []).filter((row) => row.status === 'closed').length,
      dispositions: countBy(pathway.briefs ?? [], 'disposition'),
      categories: [...new Set((pathway.briefs ?? []).map((row) => row.category).filter(Boolean))].sort(),
    },
    input_sha256: inputs,
    input_projections: { [relative(root, paths.defects)]: defectProjection(defects) },
  };
  return { ...result, evidence_sha256: sha256(canonical(result)) };
}

if (command === 'evidence') {
  const evidence = buildEvidence();
  writeFileSync(value('--out') || evidencePath, `${JSON.stringify(evidence, null, 2)}\n`);
  console.log(`step6-evidence: ${evidence.build.pages} pages, ${evidence.build.items} items, ${evidence.defects.fatal_count} fatal defect row(s), owned closure complete; ${evidence.defects.outsideOpenFindings.length} outside OPEN finding(s), excluded, not passed`);
  process.exit(0);
}

if (command === 'check-evidence') {
  const expected = buildEvidence();
  const recorded = readJson(value('--in') || evidencePath);
  if (canonical(recorded) !== canonical(expected)) die('step6-evidence-stale: evidence does not match current receipts and ledgers');
  console.log(`step6-evidence: ${recorded.defects.fatal_count} fatal defect row(s), exact and current`);
  process.exit(0);
}

// This command verifies the packet against current native evidence before
// interpreting it. Existing evidence, response and integrity gates remain
// separate engine requirements; no mathematical coverage is inferred here.
if (command === 'summary') {
  const evidence = readJson(evidencePath);
  if (canonical(evidence) !== canonical(buildEvidence())) die('step6-evidence-stale: evidence does not match current receipts and ledgers');
  const response = makeSummaryResponse(evidence, run, { physics: true });
  writeFileSync(value('--out') || responsePath, `${JSON.stringify(response, null, 2)}\n`);
  parseResponse(value('--out') || responsePath);
  console.log('step6-report-summary: deterministic evidence-bound owner response');
  process.exit(0);
}

// Version-1 receipts remain historical, explicitly selected verification only.
// Check their recorded entries; never discover or hash a fresh whole workspace.
const tree = receipt => {
  if (!args.includes('--legacy-v1')) die('step6-report-legacy: use --legacy-v1 for historical verification, or create a current version-2 snapshot');
  if (receipt?.version !== 1 || receipt.run !== run || !receipt.protected_tree)
    die('step6-report-integrity-shape');
  return Object.fromEntries(Object.keys(receipt.protected_tree).sort().map(path => [path,
    protectedEntryHashes([join(root, path)])[0]]));
};

if (command === 'snapshot') {
  const receipt = scopedReportTree(run, root, { physics: true });
  writeFileSync(integrityPath, `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(`step6-report-integrity: scoped snapshot of ${Object.keys(receipt.protected_tree).length} exact input(s)`);
  process.exit(0);
}

if (command === 'check') {
  const receipt = readJson(integrityPath);
  if (receipt?.version === 2) {
    const current = scopedReportTree(run, root, { physics: true });
    if (canonical(receipt) !== canonical(current)) die('step6-report-tree-changed: scoped selectors, prerequisite context or protected inputs changed');
    console.log(`step6-report-integrity: ${Object.keys(current.protected_tree).length} scoped input(s) unchanged`);
    process.exit(0);
  }
  if (receipt?.version !== 1 || receipt.run !== run || !receipt.protected_tree || typeof receipt.protected_tree !== 'object') die('step6-report-integrity-shape');
  const now = tree(receipt);
  const paths = new Set([...Object.keys(receipt.protected_tree), ...Object.keys(now)]);
  const changed = [...paths].filter((path) => receipt.protected_tree[path] !== now[path]).sort();
  if (changed.length) die(`step6-report-tree-changed: ${changed.join(', ')}`);
  console.log(`step6-report-integrity: ${Object.keys(now).length} protected file(s) unchanged`);
  process.exit(0);
}

function parseResponse(path, plannedResponse = null) {
  const response = plannedResponse ?? readJson(path, relative(root, path));
  const nonempty = (text) => typeof text === 'string' && text.trim().length >= 20;
  if (response?.version !== 2 || !nonempty(response.executive_summary)) die('step6-report-response-shape: version 2 and a substantive executive_summary are required');
  const evidence = readJson(evidencePath);
  if (response.readiness_verdict !== evidence.readiness.verdict) die('step6-report-response-readiness: verdict disagrees with mechanical evidence');
  if (!Array.isArray(response.caveats) || response.caveats.some((row) => !nonempty(row))) die('step6-report-response-caveats');
  if (!Array.isArray(response.owner_reading_priorities) || response.owner_reading_priorities.some((row) => !nonempty(row?.subject) || !nonempty(row?.reason))) die('step6-report-response-owner-priorities');
  if (!Array.isArray(response.recommendations)) die('step6-report-response-recommendations');
  const ranks = response.recommendations.map((row) => row?.rank);
  if (response.recommendations.some((row) => !Number.isInteger(row?.rank) || !nonempty(row?.recommendation) || !nonempty(row?.impact)
    || !['low', 'medium', 'high'].includes(row?.risk) || !nonempty(row?.evidence))
    || ranks.some((rank, index) => rank !== index + 1)) die('step6-report-response-recommendations: ranks must be contiguous and fields substantive');
  return { response, evidence };
}

if (command === 'check-response') {
  if (args.includes('--planned-summary')) {
    const evidence = readJson(evidencePath);
    parseResponse(null, makeSummaryResponse(evidence, run, { physics: true }));
  } else parseResponse(value('--in') || responsePath);
  console.log('step6-report-response: structured interpretation matches evidence');
  process.exit(0);
}

const { response, evidence } = parseResponse(value('--in') || responsePath);
const out = value('--out') || reportPath;
const telemetry = step6Telemetry(root, run, { stateDir: `.physics-autopilot/${run}` });
const rendered = renderSummaryReport({ run, evidence, response, telemetry });
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, rendered);
console.log(`step6-report-render: wrote ${out}; complete audit remains in ${relative(root, evidencePath)}`);
