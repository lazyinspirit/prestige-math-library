#!/usr/bin/env node
// Evidence-bound Step-9 reporting.
//
// Expensive mathematical gates produce structured receipts before this tool
// runs.  `evidence` reconciles those receipts and the append-only ledgers once;
// the read-only Alpha interprets that compact packet, while `render` supplies
// every exhaustive count and fatal-defect row mechanically.  The reporter can
// therefore be concise without gaining the power to omit or invent a defect.

import { existsSync, readdirSync, readFileSync, writeFileSync, lstatSync, mkdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { protectedEntryHash, runScope, sha256, splitFrontmatter } from './step9-lib.mjs';
import { resolveLineup } from './models.mjs';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { TERMINAL_REJUDGE_ROUNDS } from './step7-terminal-resolution.mjs';
import { verifyProofLayout, proofLayoutPath } from './proof-layout-receipt.mjs';
import { activeOwnershipRows } from './defect-ownership.mjs';

const args = process.argv.slice(2);
const command = args[0];
const value = (flag) => { const i = args.indexOf(flag); return i < 0 ? '' : args[i + 1] ?? ''; };
const run = value('--run');
const root = resolve(value('--root') || join(dirname(fileURLToPath(import.meta.url)), '..'));
const die = (message) => { console.error(`ERROR ${message}`); process.exit(1); };
const commands = ['evidence', 'check-evidence', 'snapshot', 'check', 'check-response', 'render'];
if (!run || !commands.includes(command)) die(`usage: node tools/step9-report.mjs <${commands.join('|')}> --run <run> [--root <repo>] [--in <response.json>] [--out <path>]`);

const research = join(root, 'research');
const responsePath = join(research, `${run}-step9-report.response.json`);
const reportPath = join(research, `${run}-step9-report.md`);
const evidencePath = join(research, `${run}-step9-evidence.json`);
const integrityPath = join(research, `${run}-step9-report-integrity.json`);
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
    repeated_repairs: repairCounts(touches),
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
  console.log(`step9-evidence: ${evidence.build.pages} pages, ${evidence.build.items} items, ${evidence.defects.fatal_count} fatal defect row(s), closed`);
  process.exit(0);
}

if (command === 'check-evidence') {
  const expected = buildEvidence();
  const recorded = readJson(value('--in') || evidencePath);
  if (canonical(recorded) !== canonical(expected)) die('step9-evidence-stale: evidence does not match current receipts and ledgers');
  console.log(`step9-evidence: ${recorded.defects.fatal_count} fatal defect row(s), exact and current`);
  process.exit(0);
}

const ignored = new Set(['.git', 'node_modules']);
const allowed = new Set([relative(root, responsePath), relative(root, reportPath), relative(root, integrityPath)]);
const dispatchPrefix = `research/${run}-dispatch/`;
function files(dir = root, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const rel = relative(root, full).replaceAll('\\', '/');
    const topLevel = rel.split('/')[0];
    if (!rel || ignored.has(topLevel)
      || topLevel === '.autopilot' || topLevel.startsWith('.autopilot-')) continue;
    if (allowed.has(rel) || rel.startsWith(dispatchPrefix)) continue;
    const stat = lstatSync(full);
    if (stat.isDirectory()) files(full, out);
    else if (stat.isFile() || stat.isSymbolicLink()) out.push(rel);
  }
  return out;
}
const tree = () => Object.fromEntries(files().sort().map((rel) => [rel,
  protectedEntryHash(join(root, rel))]));

// Ownership comes from an unchanged ledger already sealed by this report,
// never from a newly invented filename prefix or mutable runtime state.
function scopedChanges(receipt, now, changed) {
  const namespaces = [];
  const selectedContent = new Set();
  const slug = value => typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
  const unchangedFile = path => Object.hasOwn(receipt.protected_tree, path)
    && now[path] === receipt.protected_tree[path] && lstatSync(join(root, path)).isFile();
  for (const [path, hash] of Object.entries(receipt.protected_tree)) {
    const owner = /^research\/([a-z0-9]+(?:-[a-z0-9]+)*)-scope-ledger\.json$/.exec(path)?.[1];
    if (!owner || owner === run || now[path] !== hash) continue;
    if (!lstatSync(join(root, path)).isFile()) continue;
    let ledger;
    try { ledger = JSON.parse(readFileSync(join(root, path), 'utf8')); } catch { continue; }
    if (ledger.run !== owner || !Array.isArray(ledger.pages) || !ledger.pages.length) continue;
    namespaces.push(`research/${owner}-`);
    const owedPages = ledger.pages.filter(row => slug(row?.id));
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
    die('step9-report-foreign-scope: missing scoped readiness or exact reporter input bindings');
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
      die('step9-report-projection-shape: invalid version-3 reporter input projection');
    if (canonical(binding) !== canonical(defectProjection(jsonLines(join(root, path)))))
      die('step9-report-projection-stale: owning-run defect history changed');
  }
  const outside = candidates.filter(path => !physicalInputs.has(path) && !reporterInputs.has(path));
  if (!outside.length) return new Set();
  // Reuse the native closure selection and projection logic. In particular,
  // a foreign-prefixed source actually consumed by this run is still sealed.
  const verification = spawnSync(process.execPath, [join(dirname(fileURLToPath(import.meta.url)), 'publication-ready.mjs'),
    '--run', run, '--root', root, '--verify'], { cwd: root, encoding: 'utf8' });
  if (verification.error || verification.status !== 0)
    die(`step9-report-foreign-scope: native readiness verification failed: ${verification.error?.message
      ?? (verification.stderr || verification.stdout).trim()}`);
  return new Set(outside);
}

if (command === 'snapshot') {
  writeFileSync(integrityPath, `${JSON.stringify({ version: 1, run, protected_tree: tree() }, null, 2)}\n`);
  console.log(`step9-report-integrity: snapshotted ${Object.keys(readJson(integrityPath).protected_tree).length} protected file(s)`);
  process.exit(0);
}

if (command === 'check') {
  const receipt = readJson(integrityPath);
  if (receipt?.version !== 1 || receipt.run !== run || !receipt.protected_tree || typeof receipt.protected_tree !== 'object') die('step9-report-integrity-shape');
  const now = tree();
  const paths = new Set([...Object.keys(receipt.protected_tree), ...Object.keys(now)]);
  const changed = [...paths].filter((path) => receipt.protected_tree[path] !== now[path]).sort();
  const scoped = scopedChanges(receipt, now, changed);
  const unexpected = changed.filter(path => !scoped.has(path));
  if (unexpected.length) die(`step9-report-tree-changed: ${unexpected.join(', ')}`);
  console.log(`step9-report-integrity: ${Object.keys(now).filter(path => !scoped.has(path)).length} protected file(s) unchanged; ${scoped.size} unrelated scoped change(s)`);
  process.exit(0);
}

function parseResponse(path) {
  const response = readJson(path, relative(root, path));
  const nonempty = (text) => typeof text === 'string' && text.trim().length >= 20;
  if (response?.version !== 2 || !nonempty(response.executive_summary)) die('step9-report-response-shape: version 2 and a substantive executive_summary are required');
  const evidence = readJson(evidencePath);
  if (response.readiness_verdict !== evidence.readiness.verdict) die('step9-report-response-readiness: verdict disagrees with mechanical evidence');
  if (!Array.isArray(response.caveats) || response.caveats.some((row) => !nonempty(row))) die('step9-report-response-caveats');
  if (!Array.isArray(response.owner_reading_priorities) || response.owner_reading_priorities.some((row) => !nonempty(row?.subject) || !nonempty(row?.reason))) die('step9-report-response-owner-priorities');
  if (!Array.isArray(response.recommendations)) die('step9-report-response-recommendations');
  const ranks = response.recommendations.map((row) => row?.rank);
  if (response.recommendations.some((row) => !Number.isInteger(row?.rank) || !nonempty(row?.recommendation) || !nonempty(row?.impact)
    || !['low', 'medium', 'high'].includes(row?.risk) || !nonempty(row?.evidence))
    || ranks.some((rank, index) => rank !== index + 1)) die('step9-report-response-recommendations: ranks must be contiguous and fields substantive');
  return { response, evidence };
}

if (command === 'check-response') {
  parseResponse(value('--in') || responsePath);
  console.log('step9-report-response: structured interpretation matches evidence');
  process.exit(0);
}

const { response, evidence } = parseResponse(value('--in') || responsePath);
const out = value('--out') || reportPath;
const cell = (text) => String(text ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const terminalByResolver = Object.entries(evidence.verification.terminal_resolutions.reduce((counts, row) => {
  const resolver = row.resolved_by || 'unspecified';
  counts[resolver] = (counts[resolver] ?? 0) + 1;
  return counts;
}, {})).sort(([left], [right]) => left.localeCompare(right))
  .map(([resolver, count]) => `${resolver}: ${count}`).join('; ');
const lines = [`# ${run} — Step 9 owner report`, '', response.executive_summary.trim(), '',
  '## What was built', '',
  `- ${evidence.build.pages} pages and ${evidence.build.items} items across ${evidence.build.categories.length} categories.`,
  `- Categories: ${evidence.build.categories.join(', ') || 'none'}.`,
  `- Item kinds: ${Object.entries(evidence.build.items_by_kind).map(([kind, count]) => `${kind} ${count}`).join('; ')}.`, '',
  '## Deferred from this run', ''];
if (!evidence.deferrals.pairs.length && !evidence.deferrals.items.length) lines.push('No documented deferrals.');
for (const row of evidence.deferrals.pairs) lines.push(`- A/B pair \`${row.page}\` / \`${row.companion}\`: ${row.reason}`);
for (const row of evidence.deferrals.items) lines.push(`- Item \`${row.item}\` on \`${row.page}\`: ${row.reason}`);
lines.push('',
  '## Verification closure', '',
  `- Judge lineup: ${evidence.verification.judge_lineup}.`,
  `- Proof layout: ${evidence.verification.proof_layout.items} items, ${evidence.verification.proof_layout.steps} steps; separation and blue tags both passed on current inputs.`,
  `- Current judge verdicts complete: ${evidence.verification.verdicts_complete}/${evidence.verification.scope}.`,
  `- Terminal resolutions after the ${TERMINAL_REJUDGE_ROUNDS}-rejudge cap: ${evidence.verification.terminal_resolutions.length}${evidence.verification.terminal_resolutions.length ? ` (${terminalByResolver}; items: ${evidence.verification.terminal_resolutions.map((row) => row.id).join(', ')})` : ''}.`,
  `- Judge closure: ${evidence.verification.closure_closed ? 'closed' : 'open'}; workflow-owned blockers: ${evidence.verification.workflow_owned_blockers}.`,
  `- Evidence fingerprint: \`${evidence.evidence_sha256}\`.`, '',
  '## Fatal mathematical defects — exhaustive ledger table', '',
  `The run recorded ${evidence.defects.fatal_count} fatal defect row(s). Every row is reproduced below from the defect ledger.`, '',
  '| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |',
  '|---|---|---|---|---|---|---|');
for (const row of evidence.defects.fatal) lines.push(`| ${cell(row.defect_id)} | ${cell(row.subject)} | ${cell(row.class)} | ${cell(row.subclass)} | ${cell(row.location)} | ${cell(row.disposition)} | ${cell(row.caught_at_stage)} |`);
if (!evidence.defects.fatal.length) lines.push('| — | — | — | — | — | none | — |');
lines.push('', `Grouped by class: ${Object.entries(evidence.defects.by_class).map(([name, count]) => `${name} ${count}`).join('; ') || 'none'}.`,
  `Grouped by location: ${Object.entries(evidence.defects.by_location).map(([name, count]) => `${name} ${count}`).join('; ') || 'none'}.`, '',
  '## Judge and adjudication record', '',
  '| Model | Exact verdicts | Kept | Rejected | Null |', '|---|---:|---:|---:|---:|');
for (const [model, stats] of Object.entries(evidence.judges.by_model)) lines.push(`| ${cell(model)} | ${stats.verdicts} | ${stats.kept} | ${stats.rejected} | ${stats.null} |`);
const sets = evidence.judges.configured_set_stats;
lines.push('', `Across ${sets.versions_with_evidence} text version(s) with configured-judge evidence: ${sets.complete_versions} complete model set(s), ${sets.all_keep} all keep, ${sets.all_reject} all reject, ${sets.mixed} mixed, ${sets.contains_null} containing a null response, and ${sets.incomplete} incomplete.`,
  `Adjudications: ${Object.entries(evidence.judges.adjudications.outcomes).map(([outcome, count]) => `${outcome} ${count}`).join('; ') || 'none'}.`, '',
  '## Repeated repairs and pathway closure', '');
if (evidence.repeated_repairs.length) {
  lines.push(`Items repaired more than once: ${evidence.repeated_repairs.map((row) => `${row.id} (${row.repairs})`).join('; ')}.`);
} else lines.push('No item was repaired more than once according to the touch ledger.');
lines.push(`Pathway obligations closed: ${evidence.pathway.closed}/${evidence.pathway.obligations}; categories: ${evidence.pathway.categories.join(', ') || 'none'}.`, '',
  '## Caveats', '');
if (response.caveats.length) for (const caveat of response.caveats) lines.push(`- ${caveat}`); else lines.push('- None identified beyond the owner actions below.');
lines.push('', '## Owner reading priorities', '');
if (response.owner_reading_priorities.length) for (const row of response.owner_reading_priorities) lines.push(`- ${row.subject}: ${row.reason}`); else lines.push('- No special priority beyond the complete fatal-defect table and personal mathematical audit.');
lines.push('', '## Workflow recommendations', '');
if (response.recommendations.length) for (const row of response.recommendations) lines.push(`${row.rank}. ${row.recommendation} (risk: ${row.risk}) — ${row.impact} Evidence: ${row.evidence}`); else lines.push('No evidence-supported workflow change is recommended.');
lines.push('', '## Publication readiness', '',
  `Verdict: **${response.readiness_verdict}**.`,
  `Remaining owner actions: ${evidence.readiness.owner_actions_remaining.join('; ') || 'none'}.`,
  'This report does not publish, change status fields, push, or deploy.', '');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, lines.join('\n'));
console.log(`step9-report-render: wrote ${out} with ${evidence.defects.fatal_count} mechanically complete fatal row(s)`);
