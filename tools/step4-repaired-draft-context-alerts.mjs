// Finite owner-applied repair of the genuine outside-draft Step-4 batch96 alert.
// Historical native alerts and the closed Step-3 record remain immutable.
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as eq } from 'node:util';
import { split, yaml } from './pathway-lib.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { authenticateNativeAlertEvidence } from './step4-outside-context-alerts.mjs';

export const REPAIRED_DRAFT_ALERT_KIND = 'owner-routed-step4-repaired-draft-context-alerts';
export const REPAIRED_DRAFT_RUN = 'inverse-problems-knot-theory-all-109-2026-10-19';
export const REPAIRED_DRAFT_IDS = Object.freeze([
  'lem-integral-sutured-floer-compactness-and-orientations',
  'lem-integral-sutured-auxiliary-triangle-and-move-maps',
  'lem-relative-sutured-diagrams-have-signed-move-equivalences',
  'lem-signed-outer-summand-cut-comparison-with-zero-periodic-cut',
  'lem-signed-relative-surface-cut-and-horizontal-decomposition',
  'lem-signed-essential-product-annulus-decomposition',
  'lem-integral-sutured-floer-taut-hierarchy-nonvanishing',
]);
const SUBJECT = REPAIRED_DRAFT_IDS[0];
// Root-supplied original closed-v3 bytes, before the Step-4 repair.
const ORIGINAL_CLOSURE_SHA256 = 'd1d3cde2043541bef373ae4623ddb772507698cc6dcb26cd414596af64f1ca77';
const BASE = `research/${REPAIRED_DRAFT_RUN}-supervision-20261020/step4-supervision/batch96-sutured-choice`;
const CONDITIONAL = new Set(['lem-fiber-outer-grading-and-integral-cut-euler-matrix',
  'lem-based-multipointed-link-diagrams-admit-finite-relative-move-words',
  'lem-chosen-ribbon-tree-words-reduce-to-the-short-root-unit']);
const sha = text => createHash('sha256').update(text).digest('hex');
const need = (value, message) => { if (!value) throw Error(message); };
const date = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
const exactSet = (left, right) => Array.isArray(left) && left.length === new Set(left).size
  && left.length === right.length && right.every(id => left.includes(id));
function safe(root, path, research = false) {
  need(typeof path === 'string' && !path.includes('\\') && !path.split('/').some(x => !x || x === '.' || x === '..')
    && (!research || path.startsWith('research/')), 'invalid evidence path');
  const absolute = resolve(root, path), rel = relative(resolve(root), absolute);
  need(rel && !rel.startsWith('..') && !isAbsolute(rel), 'path escapes repository');
  let part = resolve(root);
  for (const name of rel.split('/')) { part = resolve(part, name); need(!lstatSync(part).isSymbolicLink(), 'symlink evidence'); }
  need(lstatSync(absolute).isFile(), 'not a regular file');
  return readFileSync(absolute, 'utf8');
}
function bound(root, ref) {
  const text = safe(root, ref?.path, true);
  need(/^[a-f0-9]{64}$/.test(ref?.sha256 ?? '') && sha(text) === ref.sha256, 'stale bound evidence');
  return text;
}
function metadata(text) { return yaml().parse(split(text).fm); }
function edgeList(meta, key) {
  const xs = meta[key] ?? [];
  need(Array.isArray(xs) && xs.every(x => typeof x === 'string') && new Set(xs).size === xs.length, `invalid ${key}`);
  return xs;
}
function discoveryEdges(text, key) {
  // Parse only the complete top-level dependency declaration. Other owners'
  // unrelated metadata is not this finite context route's validation scope.
  let full;
  try { full = metadata(text); } catch { /* Try isolated dependency fields below. */ }
  if (full && typeof full === 'object' && !Array.isArray(full)) {
    if (!Object.hasOwn(full, key)) return [];
    need(Array.isArray(full[key]) && full[key].every(x => typeof x === 'string'), `invalid declared ${key}`);
    return [...new Set(full[key])];
  }
  const fm = split(text).fm, lines = fm.split('\n');
  const header = /^("(?:[^"\\]|\\.)*"|'(?:[^']|'')*'|[A-Za-z_][A-Za-z0-9_-]*)[ \t]*:/;
  const declaredKey = line => { const m = header.exec(line); return m ? Object.keys(yaml().parse(`${m[1]}: []`))[0] : null; };
  const starts = lines.flatMap((line, i) => declaredKey(line) === key ? [i] : []);
  need(starts.length <= 1, `duplicate declared ${key}`);
  if (!starts.length) return [];
  const start = starts[0]; let end = start + 1;
  while (end < lines.length && !header.test(lines[end])) end++;
  const parsed = yaml().parse(lines.slice(start, end).join('\n'));
  // A declared null/malformed field must never silently become an empty set.
  need(parsed && Array.isArray(parsed[key]), `invalid declared ${key}`);
  need(parsed[key].every(x => typeof x === 'string'), `invalid declared ${key}`);
  return [...new Set(parsed[key])];
}
function frontier(root, run) {
  const names = readdirSync(resolve(root, 'research')).filter(n => n.startsWith(`${run}-batch-`)
    && /^[1-9]\d*\.pages\.json$/.test(n.slice(`${run}-batch-`.length)));
  need(names.length > 0, 'no current manifests');
  const ids = new Set();
  for (const n of names) {
    const pages = JSON.parse(safe(root, `research/${n}`, true));
    need(Array.isArray(pages) && pages.length > 0, 'invalid manifest');
    for (const p of pages) {
      need(Array.isArray(p.items) && p.items.length > 0, 'empty page inventory');
      for (const row of p.items) { const id = typeof row === 'string' ? row : row?.id;
        need(typeof id === 'string' && /^[a-z]+-[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(id) && !ids.has(id), 'invalid/duplicate frontier ID'); ids.add(id); }
    }
  }
  return ids;
}
function graph(root) {
  const items = new Map();
  // Decode every complete dependency field before selecting candidates: raw
  // token searches cannot see YAML-escaped IDs. Other metadata is not parsed
  // until a carrier actually enters the finite required closure.
  for (const name of readdirSync(resolve(root, 'items')).filter(x => x.endsWith('.md'))) {
    const path = `items/${name}`, text = safe(root, path), id = name.slice(0, -3);
    try { items.set(id, { path, text, deps: discoveryEdges(text, 'deps'), justified_by: discoveryEdges(text, 'justified_by') }); }
    catch (error) { throw Error(`${path}: dependency discovery: ${error.message}`); }
  }
  const reached = new Set([SUBJECT]);
  let changed = true;
  while (changed) { changed = false; for (const [id, row] of items) {
    if (!reached.has(id) && row.deps.some(dep => reached.has(dep))) { reached.add(id); changed = true; }
  } }
  const definitions = [...items].filter(([id, row]) => !reached.has(id)
    && row.justified_by.some(dep => reached.has(dep))).map(([id]) => id);
  for (const id of [...reached, ...definitions]) {
    const row = items.get(id); need(row, 'missing required context carrier');
    const meta = metadata(row.text);
    need(meta && meta.id === id, `${row.path}: required context metadata mismatch`);
    row.meta = meta; row.deps = edgeList(meta, 'deps'); row.justified_by = edgeList(meta, 'justified_by');
  }
  // A definition's formal discharge is not a new analytic premise/backedge.
  return { items, reached, definitions };
}
function validateCheck(check, tool, paths, nativeEnd, appliedAt) {
  need(check && check.exit_code === 0 && date(check.at) && Date.parse(check.at) >= Date.parse(nativeEnd)
    && Date.parse(check.at) <= Date.parse(appliedAt) && Array.isArray(check.command)
    && check.command.some(arg => typeof arg === 'string' && (arg === `tools/${tool}` || arg.endsWith(`/tools/${tool}`)))
    && paths.every(path => check.command.includes(path)) && typeof check.output === 'string' && check.output.trim(), `missing actual ${tool} check`);
  if (tool === 'proof-layout.mjs') need(check.output.includes('7 items, 301 steps, 0 defects'), 'proof layout not successful for finite seven carriers');
  if (tool === 'rendercheck.mjs') need(check.output.includes('OK — 7 file(s)'), 'rendercheck not successful for seven carriers');
}
function proofWithoutGiven(text) {
  const body = /^## Proof\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m.exec(text)?.[1];
  need(typeof body === 'string' && (body.match(/^\*\*Given:\*\*[^\n]*(?:\r?\n|$)/gm) ?? []).length === 1, 'missing/ambiguous Given paragraph');
  return body.replace(/^\*\*Given:\*\*[^\n]*(?:\r?\n|$)/m, '');
}
function inheritedPrechecks(root, app, nativeEnd) {
  need(Array.isArray(app.legacy_precheck_observations) && app.legacy_precheck_observations.length === 2
    && typeof app.legacy_precheck_disposition === 'string' && app.legacy_precheck_disposition.length >= 80, 'missing honest inherited precheck disposition');
  for (const phase of ['before', 'after']) {
    const rows = app.legacy_precheck_observations.filter(x => x.phase === phase);
    need(rows.length === 1, 'duplicate/missing inherited precheck phase');
    const check = rows[0], paths = app.changes.map(x => phase === 'before' ? x.before_file : x.path);
    need(check.exit_code === 1 && check.classification === 'inherited-phase-format-repair-not-adopted-outside-frontier'
      && date(check.at) && Date.parse(check.at) >= Date.parse(nativeEnd) && Date.parse(check.at) <= Date.parse(app.at)
      && Array.isArray(check.command) && check.command.includes('tools/precheck.mts') && check.command.includes('--json')
      && paths.every(path => check.command.includes(path)), 'invalid actual inherited precheck observation');
    const result = JSON.parse(bound(root, check.output));
    need(eq(result.summary, { files: 7, checked: 7, failed: 7 })
      && exactSet(result.results?.map(x => x.item_id), REPAIRED_DRAFT_IDS)
      && result.results.every(x => x.status === 'repair' && x.strategy === 'direct'
        && x.file === paths[app.changes.findIndex(c => c.id === x.item_id)])
      && eq(check.actual_result_statuses, result.results.map(x => ({ id: x.item_id, status: x.status }))), 'precheck results are not the exact seven inherited repairs');
  }
}

/** Absent/no-match opt-in is unavailable; an exact matched invalid route fails closed. */
export function repairedDraftContextAlertRoute(args) {
  const { root, run, batch, group, digestPath, digest, alertIndex } = args;
  try {
    if (run !== REPAIRED_DRAFT_RUN || String(batch) !== '96' || String(group) !== 'af' || alertIndex !== 0)
      return { ok: false, unavailable: true, reason: 'not the finite outside-draft repair case' };
    const receiptPath = `research/${run}-step4-repaired-draft-context-alert-routes.json`;
    if (!existsSync(resolve(root, receiptPath))) return { ok: false, unavailable: true, reason: 'no repaired-draft opt-in' };
    const receipt = JSON.parse(safe(root, receiptPath, true));
    need(receipt.version === 1 && receipt.kind === REPAIRED_DRAFT_ALERT_KIND && receipt.run === run
      && receipt.authorized_by === 'owner' && receipt.owner_identity === '/root' && date(receipt.recorded_at)
      && Array.isArray(receipt.routes), 'invalid root receipt');
    const matches = receipt.routes.filter(r => r.source_batch === '96' && r.source_group === 'af' && r.alert_index === 0);
    need(matches.length === 1, 'missing/duplicate exact repaired-draft route');
    const route = matches[0];
    need(route.disposition === 'owner-repaired-outside-draft-supplier' && typeof route.reason === 'string'
      && route.reason.trim().length >= 80, 'invalid repaired-draft disposition');
    const { alert, native } = authenticateNativeAlertEvidence({ ...args, route });
    need(alert.item === SUBJECT && alert.severity === 'would-be-fatal', 'wrong original draft hypothesis alert');
    const authored = frontier(root, run);
    need(REPAIRED_DRAFT_IDS.every(id => !authored.has(id)), 'changed supplier/consumer is an authored frontier item');
    const acceptance = JSON.parse(bound(root, route.root_acceptance));
    need(acceptance.version === 1 && acceptance.kind === 'root-accepted-step4-outside-draft-repair'
      && acceptance.run === run && acceptance.owner_identity === '/root' && acceptance.accepted === true
      && acceptance.scope === 'exact-seven-choice-premise-repairs' && date(acceptance.at)
      && acceptance.native_coverage_adopted === false && acceptance.whole_item_audit_claimed === false
      && acceptance.original_native_digests_edited === false && acceptance.original_step3_closure_edited === false,
    'missing explicit bounded root acceptance');
    for (const key of ['application', 'step3_closure']) need(eq(acceptance[key], route[key]), `acceptance ${key} mismatch`);
    need(eq(acceptance.consumer_bindings, route.consumer_inventory), 'acceptance current consumer bindings mismatch');
    const app = JSON.parse(bound(root, route.application));
    need(route.application.path === `${BASE}/root-application.json` && app.version === 1
      && app.kind === 'root-applied-outside-draft-supplier-and-consumer-scope-repair' && app.run === run
      && app.owner_identity === '/root' && date(app.at) && app.original_native_digests_edited === false
      && app.original_step3_closure_edited === false && app.native_coverage_adopted === false
      && app.whole_item_audit_claimed === false, 'invalid actual root application');
    for (const key of ['primary_review', 'independent_review']) need(eq(app[key], acceptance[key]), `root acceptance ${key} mismatch`);
    need(app.primary_review?.path === `${BASE}/recommendation.md`
      && app.independent_review?.path === `${BASE}/independent-final-review.json`
      && app.consumer_inventory?.path === `${BASE}/consumer-inventory.json`
      && app.definition_discharge_inventory?.path === `${BASE}/definition-discharge-inventory.json`, 'wrong finite reviewed evidence packet');
    need(bound(root, app.primary_review).trim().length >= 80, 'missing primary review');
    const independent = JSON.parse(bound(root, app.independent_review));
    need(independent.version === 1 && independent.run === run && independent.reviewer !== '/root'
      && typeof independent.reviewer === 'string' && independent.verdict === 'accept exact seven proposed foundation-scope corrections'
      && Array.isArray(independent.blocking_findings) && independent.blocking_findings.length === 0
      && exactSet(independent.changed_consumers?.map(x => x.id), REPAIRED_DRAFT_IDS.slice(1)), 'missing exact accepted independent repair review');
    need(app.source_proposal?.path === `${BASE}/guarded-source-proposal.json`, 'wrong reviewed source proposal');
    const proposal = JSON.parse(bound(root, app.source_proposal));
    need(proposal.run === run && exactSet(proposal.changes?.map(x => x.id), REPAIRED_DRAFT_IDS)
      && exactSet(app.changes?.map(x => x.id), REPAIRED_DRAFT_IDS), 'changed-carrier set is not exact seven');
    const changedPaths = [];
    for (const change of app.changes) {
      const proposed = proposal.changes.find(x => x.id === change.id);
      need(change.path === `items/${change.id}.md` && eq(change.operations, proposed.operations)
        && change.before_file === proposed.before_file && change.proposed_file === proposed.proposed_file, 'application diverges from reviewed literal proposal');
      const before = safe(root, change.before_file, true), after = safe(root, change.proposed_file, true);
      need(sha(before) === change.before_raw_sha256 && sha(after) === change.after_raw_sha256
        && itemHashGuard(before) === change.before_guard && itemHashGuard(after) === change.after_guard
        && before !== after, 'stale before/after raw or guard');
      for (const text of [before, after]) { const m = metadata(text); need(m?.id === change.id && m.status === 'draft'
        && m.pipeline_run === run, 'not an exact current-run draft carrier'); }
      need(Array.isArray(change.operations) && change.operations.length > 0, 'missing literal repair');
      let replay = before;
      for (const op of change.operations) {
        need(typeof op.before === 'string' && op.before.length > 0 && typeof op.after === 'string'
          && op.before !== op.after && replay.split(op.before).length === 2, 'nonunique/no-op literal repair');
        replay = replay.replace(op.before, () => op.after);
      }
      need(replay === after && safe(root, change.path) === after, 'literal replay/current carrier mismatch');
      need(proofWithoutGiven(before) === proofWithoutGiven(after)
        && sha(proofWithoutGiven(after)) === change.proof_body_excluding_given_sha256, 'proof body changed beyond Given or stale proof binding');
      changedPaths.push(change.path);
    }
    need(Array.isArray(app.checks), 'missing actual application checks');
    for (const tool of ['proof-layout.mjs', 'rendercheck.mjs']) {
      const checks = app.checks.filter(c => c.command?.some(x => typeof x === 'string' && (x === `tools/${tool}` || x.endsWith(`/tools/${tool}`))));
      need(checks.length === 1, `missing/duplicate actual ${tool} check`);
      validateCheck(checks[0], tool, changedPaths, native.ended_at, app.at);
    }
    inheritedPrechecks(root, app, native.ended_at);
    need(route.step3_closure?.path === `research/${run}-step3-closure.json`, 'wrong original closure path');
    need(route.step3_closure.sha256 === ORIGINAL_CLOSURE_SHA256, 'original Step3 closure cannot be repinned');
    const closure = JSON.parse(bound(root, route.step3_closure));
    need(closure.version === 3 && closure.run === run && closure.status === 'closed'
      && closure.basis === 'dependency-ordered-step3a' && date(closure.closed_at)
      && Date.parse(closure.closed_at) <= Date.parse(native.started_at), 'not the original closed v3 Step3 context');
    const inventory = JSON.parse(bound(root, route.consumer_inventory));
    need(inventory.version === 1 && inventory.run === run && inventory.subject === SUBJECT
      && inventory.method === 'deps-fixed-point;justified_by-discharge-only', 'invalid current consumer inventory');
    const originalInventory = JSON.parse(bound(root, app.consumer_inventory));
    const originalDefinitions = JSON.parse(bound(root, app.definition_discharge_inventory));
    const { items, reached, definitions } = graph(root);
    need(reached.size === 18 && originalInventory.total_descendants === 17 && originalInventory.direct_count === 7
      && exactSet(originalInventory.consumers?.map(x => x.id), [...reached].filter(id => id !== SUBJECT))
      && exactSet(inventory.rows?.map(x => x.id), [...reached])
      && exactSet(definitions, ['def-sutured-floer-chain-complex'])
      && exactSet(originalDefinitions.map(x => x.id), definitions)
      && exactSet(inventory.definition_discharges?.map(x => x.id), definitions), 'actual consumer/discharge closure differs from reviewed finite inventory');
    for (const row of [...inventory.rows, ...inventory.definition_discharges]) {
      const actual = items.get(row.id);
      need(actual && row.path === actual.path && row.raw_sha256 === sha(actual.text) && row.guard === itemHashGuard(actual.text)
        && eq(row.deps, actual.deps) && eq(row.justified_by, actual.justified_by), 'stale current consumer carrier/edges');
      need(typeof row.reason === 'string' && row.reason.trim().length >= 40 && Array.isArray(row.premise_quotes)
        && row.premise_quotes.length > 0 && row.premise_quotes.every(q => typeof q === 'string' && q.length >= 20 && actual.text.includes(q)), 'missing actual consumer premise disposition');
      if (definitions.includes(row.id)) need(row.disposition === 'unchanged-definition-discharge', 'definition discharge cannot acquire unconditional analytic premise');
      else if (REPAIRED_DRAFT_IDS.includes(row.id)) need(row.disposition === 'changed', 'changed consumer omitted');
      else need(row.disposition === (CONDITIONAL.has(row.id) ? 'unchanged-conditional' : 'unchanged-full-ac'), 'unsupported unchanged consumer disposition');
      if (row.id !== SUBJECT && !definitions.includes(row.id)) {
        const old = originalInventory.consumers.find(x => x.id === row.id);
        const actualEdges = actual.deps.filter(id => reached.has(id));
        need(eq(old.direct, actual.deps.includes(SUBJECT)) && exactSet(old.actual_supplier_edges, actualEdges), 'reviewed consumer edge set differs');
      }
      if (authored.has(row.id)) need(row.frontier_sealed_guard === row.guard && closure.final_item_hashes?.[row.id] === row.guard, 'authored consumer changed from original Step3 seal');
    }
    need(date(acceptance.at) && Date.parse(native.ended_at) <= Date.parse(app.at)
      && Date.parse(app.at) <= Date.parse(acceptance.at) && Date.parse(acceptance.at) <= Date.parse(receipt.recorded_at), 'invalid native/application/acceptance chronology');
    return { ok: true, route: { source_batch: '96', source_group: 'af', digest_path: digestPath,
      digest_sha256: route.digest_sha256, alert_index: 0, alert, disposition: route.disposition,
      scope: 'owner-repaired-outside-draft-context-only', receipt: receiptPath,
      application: route.application, consumer_inventory: route.consumer_inventory,
      root_acceptance: route.root_acceptance, step3_closure: route.step3_closure, reason: route.reason,
      native_coverage_adopted: false, whole_item_audit_claimed: false } };
  } catch (error) { return { ok: false, reason: error.message }; }
}
