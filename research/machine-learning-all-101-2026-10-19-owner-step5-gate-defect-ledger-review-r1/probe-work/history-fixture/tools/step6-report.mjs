#!/usr/bin/env node
// Evidence-bound Step-6 reporting.
//
// Expensive mathematical gates produce structured receipts before this tool
// runs.  `evidence` reconciles those receipts and the append-only ledgers once;
// `summary` and `render` emit a short deterministic report. Complete defects,
// judge history and current input bindings remain in the sealed JSON audit packet.

import { existsSync, readdirSync, readFileSync, writeFileSync, lstatSync, mkdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { protectedEntryHash, runScope, sha256, splitFrontmatter } from './step6-lib.mjs';
import { resolveLineup } from './models.mjs';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { makeSummaryResponse, renderSummaryReport, step6Telemetry } from './step6-summary.mjs';
import { verifyProofLayout, proofLayoutPath } from './proof-layout-receipt.mjs';
import { activeOwnershipRows } from './defect-ownership.mjs';
import { scopedReportTree } from './step6-report-scope.mjs';

const args = process.argv.slice(2);
const command = args[0];
const value = (flag) => { const i = args.indexOf(flag); return i < 0 ? '' : args[i + 1] ?? ''; };
const run = value('--run');
const root = resolve(value('--root') || join(dirname(fileURLToPath(import.meta.url)), '..'));
const die = (message) => { console.error(`ERROR ${message}`); process.exit(1); };
const commands = ['evidence', 'check-evidence', 'summary', 'snapshot', 'check', 'check-response', 'render', 'recovery-inventory'];
if (!run || !commands.includes(command)) die(`usage: node tools/step6-report.mjs <${commands.join('|')}> --run <run> [--root <repo>] [--in <response.json>] [--out <path>]`);

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
const defectProjection = (rows) => ({ kind: 'run-defect-history-v1', run,
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

function repairCounts(touches, activeItems) {
  const counts = {};
  for (const seeded of touches?.seeded ?? []) counts[seeded.id] = (counts[seeded.id] ?? 0) + (seeded.count ?? 1);
  const snapshots = touches?.snapshots ?? [];
  for (let index = 1; index < snapshots.length; index++) {
    const before = snapshots[index - 1]?.hashes ?? {};
    const after = snapshots[index]?.hashes ?? {};
    for (const id of Object.keys(after)) if (id in before && before[id] !== after[id]) counts[id] = (counts[id] ?? 0) + 1;
  }
  return Object.entries(counts).filter(([id, count]) => activeItems.has(id) && count > 1)
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
    let metadata;
    try { metadata = parseFrontmatter(frontmatter); }
    catch (cause) { die(`${item.file}: invalid frontmatter (${cause.message})`); }
    if (typeof metadata.kind !== 'string' || !metadata.kind.trim()) die(`${item.file}: kind must be a nonempty YAML string`);
    return { ...item, kind: metadata.kind };
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
  // Use the ledger's canonical history/taxonomy validator and ownership
  // semantics. A superseded open observation remains historical evidence;
  // only a valid current ownership row can establish a present fatal blocker.
  const validation = spawnSync(process.execPath, [join(root, 'tools/defect-ledger.mjs'), 'validate',
    '--run', run, '--ledger', paths.defects], { cwd: root, encoding: 'utf8' });
  if (validation.error || validation.status !== 0)
    die(`fatal defect ledger validation failed: ${validation.error?.message ?? (validation.stderr || validation.stdout).trim()}`);
  const ownershipErrors = [];
  const activeDefects = new Set(activeOwnershipRows(defects, ownershipErrors));
  if (ownershipErrors.length) die(`fatal defect ledger ownership invalid: ${ownershipErrors.join('; ')}`);
  const activeFatalBlockers = [...activeDefects].filter(row => row.severity === 'fatal'
    && (!row.defect_id || !row.subject || ['open', 'unknown'].includes(row.disposition)));
  if (activeFatalBlockers.length) die(`fatal defect ledger contains an incomplete or open active row: ${activeFatalBlockers
    .map(row => `${row.defect_id ?? '(missing id)'} (${row.subject ?? '(missing subject)'}): ${row.disposition ?? 'unknown'}`).join('; ')}`);
  const supersededBy = new Map(defects.flatMap(row => (row.supersedes ?? []).map(id => [id, row.defect_id])));
  const currentOwner = row => {
    let id = row.defect_id;
    while (supersededBy.has(id)) id = supersededBy.get(id);
    return id;
  };
  const fatal = defects.filter((row) => row.severity === 'fatal').map((row) => ({
    defect_id: String(row.defect_id ?? ''),
    subject: String(row.subject ?? ''),
    class: String(row.class ?? 'unknown'),
    subclass: String(row.subclass ?? 'unknown'),
    location: String(row.location ?? 'unknown'),
    disposition: activeDefects.has(row) ? String(row.disposition ?? 'unknown')
      : `${row.disposition ?? 'unknown'} (historical; superseded by ${currentOwner(row)})`,
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
      total_rows: defects.length,
      fatal_count: fatal.length,
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
    repeated_repairs: repairCounts(touches, activeItems),
    pathway: {
      obligations: (pathway.briefs ?? []).length,
      closed: (pathway.briefs ?? []).filter((row) => row.status === 'closed').length,
      dispositions: countBy(pathway.briefs ?? [], 'disposition'),
      categories: [...new Set((pathway.briefs ?? []).map((row) => row.category).filter(Boolean))].sort(),
    },
    input_sha256: inputs,
    // Keep the complete canonical owning-run history, including every field
    // and superseded observation, without binding other frontiers' appends.
    // Native readiness separately seals relevant outside-subject context.
    input_projections: { [relative(root, paths.defects)]: defectProjection(defects) },
  };
  return { ...result, evidence_sha256: sha256(canonical(result)) };
}

if (command === 'evidence') {
  const evidence = buildEvidence();
  writeFileSync(value('--out') || evidencePath, `${JSON.stringify(evidence, null, 2)}\n`);
  console.log(`step6-evidence: ${evidence.build.pages} pages, ${evidence.build.items} items, ${evidence.defects.fatal_count} fatal defect row(s), closed`);
  process.exit(0);
}

if (command === 'check-evidence') {
  const expected = buildEvidence();
  const recorded = readJson(value('--in') || evidencePath);
  if (canonical(recorded) !== canonical(expected)) die('step6-evidence-stale: evidence does not match current receipts and ledgers');
  console.log(`step6-evidence: ${recorded.defects.fatal_count} fatal defect row(s), exact and current`);
  process.exit(0);
}

// Version-1 receipts remain historical, explicitly selected verification only.
// Check their recorded entries; never discover or hash a fresh whole workspace.
const tree = receipt => {
  if (!args.includes('--legacy-v1')) die('step6-report-legacy: use --legacy-v1 for historical verification, or create a current version-2 snapshot');
  if (receipt?.version !== 1 || receipt.run !== run || !receipt.protected_tree)
    die('step6-report-integrity-shape');
  return Object.fromEntries(Object.keys(receipt.protected_tree).sort().map(path => [path,
    protectedEntryHash(join(root, path))]));
};

// Ownership comes from an unchanged ledger already sealed by this report,
// never from a newly invented filename prefix or mutable runtime state.
function scopedChanges(receipt, now, changed, verifyReadiness = true) {
  const namespaces = [];
  const selectedContent = new Set();
  const slug = value => typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
  const unchangedFile = path => Object.hasOwn(receipt.protected_tree, path)
    && now[path] === receipt.protected_tree[path] && lstatSync(join(root, path)).isFile();
  const physicalSelectedContent = path => {
    const parts = path.split('/');
    for (let index = 1; index <= parts.length; index++) {
      let stat;
      try { stat = lstatSync(join(root, ...parts.slice(0, index))); }
      catch (error) { if (error.code === 'ENOENT') return false; throw error; }
      if (stat.isSymbolicLink() || (index < parts.length ? !stat.isDirectory() : !stat.isFile())) return false;
    }
    return true;
  };
  // A page ID belongs to the sealed ledger independently of its mutable item
  // inventory. The frozen and current physical paths anchor its category; the
  // canonical plan and parsed source must agree on that exact page identity.
  const libraryPagePaths = entries => {
    const byId = new Map();
    for (const path of Object.keys(entries)) {
      const match = /^library\/([a-z0-9]+(?:-[a-z0-9]+)*)\/([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/.exec(path);
      if (!match) continue;
      const paths = byId.get(match[2]) ?? [];
      paths.push({ path, category: match[1] });
      byId.set(match[2], paths);
    }
    return byId;
  };
  const changedPaths = new Set(changed);
  const beforePages = libraryPagePaths(receipt.protected_tree);
  const currentPages = libraryPagePaths(now);
  let plannedPages = [];
  try {
    const plan = JSON.parse(readFileSync(join(research, 'plan-spec.json'), 'utf8'));
    if (Array.isArray(plan.pages)) plannedPages = plan.pages;
  } catch { /* No independent page exemption without a canonical identity. */ }
  for (const [path, hash] of Object.entries(receipt.protected_tree)) {
    const owner = /^research\/([a-z0-9]+(?:-[a-z0-9]+)*)-scope-ledger\.json$/.exec(path)?.[1];
    if (!owner || owner === run || now[path] !== hash) continue;
    if (!lstatSync(join(root, path)).isFile()) continue;
    let ledger;
    try { ledger = JSON.parse(readFileSync(join(root, path), 'utf8')); } catch { continue; }
    if (ledger.run !== owner || !Array.isArray(ledger.pages) || !ledger.pages.length) continue;
    namespaces.push(`research/${owner}-`);
    const owedPages = ledger.pages.filter(row => slug(row?.id));
    for (const owed of owedPages) {
      if (!['A', 'B'].includes(owed.kind) || ledger.pages.filter(row => row?.id === owed.id).length !== 1) continue;
      const before = beforePages.get(owed.id) ?? [];
      const current = currentPages.get(owed.id) ?? [];
      if (current.length !== 1 || !changedPaths.has(current[0].path)) continue;
      const planned = plannedPages.filter(page => page?.id === owed.id);
      if (before.length !== 1 || current.length !== 1 || planned.length !== 1
        || before[0].path !== current[0].path || planned[0].category !== before[0].category
        || planned[0].kind !== owed.kind || !physicalSelectedContent(current[0].path)) continue;
      let metadata;
      try { metadata = parseFrontmatter(splitFrontmatter(readFileSync(join(root, current[0].path), 'utf8')).frontmatter); }
      catch { continue; }
      if (metadata?.page !== owed.id) continue;
      selectedContent.add(current[0].path);
    }
    // A stable registered frontier, not mutable content or a filename guess,
    // establishes ownership of concurrent foreign mathematical authoring.
    for (const manifest of Object.keys(receipt.protected_tree)) {
      const batch = /^(\d+)\.pages\.json$/.exec(manifest.slice(`research/${owner}-batch-`.length))?.[1];
      if (!manifest.startsWith(`research/${owner}-batch-`)
        || !batch
        || !unchangedFile(manifest)) continue;
      let pages;
      try { pages = JSON.parse(readFileSync(join(root, manifest), 'utf8')); } catch { continue; }
      if (!Array.isArray(pages)) continue;
      for (const page of pages) {
        if (!slug(page?.id) || !owedPages.some(row => row.id === page.id
          && (row.batch == null || String(row.batch) === batch)) || !slug(page.category)
          || !Array.isArray(page.items)) continue;
        const ids = page.items.map(item => typeof item === 'string' ? item : item?.id);
        if (ids.some(id => typeof id !== 'string' || !/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))) continue;
        selectedContent.add(`library/${page.category}/${page.id}.md`);
        for (const id of ids) selectedContent.add(`items/${id}.md`);
      }
    }
  }
  // A changed foreign manifest cannot establish item ownership by itself.
  // Its exact per-item Step-1 identity and original native page assignment
  // must already have been sealed by this report. These are ownership facts,
  // never reused as current readiness, audit or execution coverage.
  for (const [ledgerPath, ledgerHash] of Object.entries(receipt.protected_tree)) {
    const owner = /^research\/([a-z0-9]+(?:-[a-z0-9]+)*)-scope-ledger\.json$/.exec(ledgerPath)?.[1];
    if (!owner || owner === run || now[ledgerPath] !== ledgerHash || !unchangedFile(ledgerPath)) continue;
    let ledger;
    try { ledger = JSON.parse(readFileSync(join(root, ledgerPath), 'utf8')); } catch { continue; }
    if (ledger.run !== owner || !Array.isArray(ledger.pages)) continue;
    for (const owed of ledger.pages) {
      if (!slug(owed?.id) || !['A', 'B'].includes(owed.kind)
        || !/^\d+$/.test(String(owed.batch)) || ledger.pages.filter(p => p?.id === owed.id).length !== 1) continue;
      const batch = String(owed.batch), before = beforePages.get(owed.id) ?? [], current = currentPages.get(owed.id) ?? [];
      const planned = plannedPages.filter(page => page?.id === owed.id);
      if (before.length !== 1 || current.length !== 1 || before[0].path !== current[0].path
        || planned.length !== 1 || planned[0].kind !== owed.kind || planned[0].category !== before[0].category
        || !physicalSelectedContent(current[0].path)) continue;
      const manifest = `research/${owner}-batch-${batch}.pages.json`;
      const resultPath = `research/${owner}-dispatch/beta-batch-${batch}.result.json`;
      if (!unchangedFile(resultPath) || !physicalSelectedContent(manifest)) continue;
      let pages, native;
      try { pages = JSON.parse(readFileSync(join(root, manifest), 'utf8')); native = JSON.parse(readFileSync(join(root, resultPath), 'utf8')); } catch { continue; }
      if (native.run !== owner || native.role !== 'beta' || native.label !== `batch-${batch}`
        || native.ok !== true || native.runner !== 'codex' || native.written_by === 'autopilot'
        || native.process_exit_code !== 0 || !Array.isArray(native.covers) || !native.covers.map(String).includes(batch)
        || !Number.isInteger(native.attempt) || native.attempt < 1 || !Array.isArray(pages)) continue;
      const promptPath = `research/${owner}-dispatch/beta-batch-${batch}.attempt-${native.attempt}.prompt.md`;
      if (!unchangedFile(promptPath)) continue;
      const prompt = readFileSync(join(root, promptPath), 'utf8');
      if (!prompt.includes(`run: ${owner}\nrole: beta\nlabel: batch-${batch}\ncovers: ${batch}\n`)
        || !prompt.includes('`' + owed.id + '`') || !prompt.includes('`' + before[0].category + '`')) continue;
      const selected = pages.filter(page => page?.id === owed.id);
      if (selected.length !== 1 || selected[0].category !== before[0].category || selected[0].kind !== owed.kind
        || !Array.isArray(selected[0].items)) continue;
      let pageMetadata;
      try { pageMetadata = parseFrontmatter(splitFrontmatter(readFileSync(join(root, current[0].path), 'utf8')).frontmatter); } catch { continue; }
      if (pageMetadata?.page !== owed.id) continue;
      for (const item of selected[0].items) {
        const id = item?.id;
        if (!/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id ?? '')
          || selected[0].items.filter(row => row?.id === id).length !== 1
          || pages.flatMap(page => Array.isArray(page?.items) ? page.items : []).filter(row => row?.id === id).length !== 1) continue;
        const path = `items/${id}.md`, decisionPath = `research/${owner}-step1-${id}.json`;
        if (!changedPaths.has(path) || !Object.hasOwn(receipt.protected_tree, path)
          || !unchangedFile(decisionPath) || !physicalSelectedContent(path)) continue;
        let decision, metadata;
        try { decision = JSON.parse(readFileSync(join(root, decisionPath), 'utf8'));
          metadata = parseFrontmatter(splitFrontmatter(readFileSync(join(root, path), 'utf8')).frontmatter); } catch { continue; }
        if (decision.version !== 1 || decision.run !== owner || decision.item !== id || decision.owner !== true
          || decision.decision !== 'ready' || metadata?.id !== id || metadata.origin !== 'pipeline'
          || metadata.pipeline_run !== owner || metadata.kind !== item.kind) continue;
        selectedContent.add(path);
      }
    }
  }
  const readiness = readJson(join(research, `${run}-publication-readiness.json`));
  // Derived index names are semantic receipts, never physical path ownership.
  const projections = new Set((Array.isArray(readiness.protected_tree_projections)
    ? readiness.protected_tree_projections : []).filter(path => typeof path === 'string' && !path.includes('#')));
  const candidates = changed.filter(path => projections.has(path)
    || (selectedContent.has(path) && physicalSelectedContent(path))
    || namespaces.some(prefix => path.startsWith(prefix)));
  if (!candidates.length) return new Set();

  const evidence = readJson(evidencePath);
  if (readiness.schema !== 2 || readiness.run !== run || readiness.protected_tree_scope !== 'frontier-prerequisite-context-v1'
    || !Array.isArray(readiness.protected_tree_paths) || !Array.isArray(readiness.protected_tree_projections)
    || ![2, 3].includes(evidence.version) || evidence.run !== run || !evidence.input_sha256
    || typeof evidence.input_sha256 !== 'object' || Array.isArray(evidence.input_sha256))
    die('step6-report-foreign-scope: missing scoped readiness or exact reporter input bindings');
  const physicalInputs = new Set(readiness.protected_tree_paths);
  const reporterInputs = new Set(Object.keys(evidence.input_sha256));
  if (evidence.version === 3) {
    const projected = evidence.input_projections;
    const path = 'research/defect-ledger.jsonl';
    const binding = projected?.[path];
    if (!projected || typeof projected !== 'object' || Array.isArray(projected)
      || Object.keys(projected).length !== 1 || !binding || typeof binding !== 'object'
      || Array.isArray(binding) || Object.keys(binding).sort().join(',') !== 'kind,run,sha256'
      || binding.kind !== 'run-defect-history-v1' || binding.run !== run
      || typeof binding.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(binding.sha256))
      die('step6-report-projection-shape: invalid version-3 reporter input projection');
    if (canonical(binding) !== canonical(defectProjection(jsonLines(join(root, path)))))
      die('step6-report-projection-stale: owning-run defect history changed');
  }
  const outside = candidates.filter(path => !physicalInputs.has(path) && !reporterInputs.has(path));
  if (!outside.length) return new Set();
  // Reuse the native closure selection and projection logic. In particular,
  // a foreign-prefixed source actually consumed by this run is still sealed.
  if (!verifyReadiness) return new Set(outside);
  const verification = spawnSync(process.execPath, [join(dirname(fileURLToPath(import.meta.url)), 'publication-ready.mjs'),
    '--run', run, '--root', root, '--verify'], { cwd: root, encoding: 'utf8' });
  if (verification.error || verification.status !== 0)
    die(`step6-report-foreign-scope: native readiness verification failed: ${verification.error?.message
      ?? (verification.stderr || verification.stdout).trim()}`);
  return new Set(outside);
}

// Diagnostic inventory for guarded native pre-report recovery. This grants no
// gate success: the recovery module independently reconstructs the original
// readiness digest before it may retire any derived receipt.
if (command === 'recovery-inventory') {
  const receipt = readJson(integrityPath);
  if (receipt?.version !== 1 || receipt.run !== run || !receipt.protected_tree) die('step6-report-integrity-shape');
  const now = tree(receipt);
  const paths = new Set([...Object.keys(receipt.protected_tree), ...Object.keys(now)]);
  const changed = [...paths].filter(path => receipt.protected_tree[path] !== now[path]).sort();
  // Piped stdout is asynchronous; finish the diagnostic before exiting.
  await new Promise((resolve, reject) => process.stdout.write(`${JSON.stringify({ now, changed, scoped: [...scopedChanges(receipt, now, changed, false)].sort() })}\n`,
    error => error ? reject(error) : resolve()));
  process.exit(0);
}

if (command === 'snapshot') {
  const receipt = scopedReportTree(run, root, { physics: false });
  writeFileSync(integrityPath, `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(`step6-report-integrity: scoped snapshot of ${Object.keys(receipt.protected_tree).length} exact input(s)`);
  process.exit(0);
}

if (command === 'check') {
  const receipt = readJson(integrityPath);
  if (receipt?.version === 2) {
    const current = scopedReportTree(run, root, { physics: false });
    if (canonical(receipt) !== canonical(current)) die('step6-report-tree-changed: scoped selectors, prerequisite context or protected inputs changed');
    console.log(`step6-report-integrity: ${Object.keys(current.protected_tree).length} scoped input(s) unchanged`);
    process.exit(0);
  }
  if (receipt?.version !== 1 || receipt.run !== run || !receipt.protected_tree || typeof receipt.protected_tree !== 'object') die('step6-report-integrity-shape');
  const now = tree(receipt);
  const paths = new Set([...Object.keys(receipt.protected_tree), ...Object.keys(now)]);
  const changed = [...paths].filter((path) => receipt.protected_tree[path] !== now[path]).sort();
  const scoped = scopedChanges(receipt, now, changed);
  const unexpected = changed.filter(path => !scoped.has(path));
  if (unexpected.length) die(`step6-report-tree-changed: ${unexpected.join(', ')}`);
  console.log(`step6-report-integrity: ${Object.keys(now).filter(path => !scoped.has(path)).length} protected file(s) unchanged; ${scoped.size} unrelated scoped change(s)`);
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

if (command === 'summary') {
  const evidence = readJson(evidencePath);
  if (canonical(evidence) !== canonical(buildEvidence())) die('step6-evidence-stale: summary requires current evidence');
  writeFileSync(responsePath, JSON.stringify(makeSummaryResponse(evidence, run), null, 2) + '\n');
  parseResponse(responsePath);
  console.log('step6-report-response: wrote deterministic evidence summary');
  process.exit(0);
}

if (command === 'check-response') {
  if (args.includes('--planned-summary')) {
    const evidence = readJson(evidencePath);
    parseResponse(null, makeSummaryResponse(evidence, run));
  } else parseResponse(value('--in') || responsePath);
  console.log('step6-report-response: structured interpretation matches evidence');
  process.exit(0);
}

const { response, evidence } = parseResponse(value('--in') || responsePath);
const out = value('--out') || reportPath;
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, renderSummaryReport({ run, evidence, response, telemetry: step6Telemetry(root, run) }));
console.log(`step6-report-render: wrote concise report ${out}; exhaustive evidence remains in JSON`);
