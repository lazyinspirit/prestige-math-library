import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { repairedDraftContextAlertRoute, REPAIRED_DRAFT_RUN as run, REPAIRED_DRAFT_IDS as ids, REPAIRED_DRAFT_ALERT_KIND as kind } from './step4-repaired-draft-context-alerts.mjs';
const repo = process.cwd();
const base = `research/${run}-supervision-20261020/step4-supervision/batch96-sutured-choice`;
const sha = text => createHash('sha256').update(text).digest('hex');
function fixture(t) {
  const root = fs.mkdtempSync(join(tmpdir(), 'draft96-route-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const put = (path, value) => { fs.mkdirSync(dirname(join(root, path)), { recursive: true }); fs.writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value, null, 2) + '\n'); };
  const copy = path => { put(path, fs.readFileSync(join(repo, path), 'utf8')); };
  const ref = path => ({ path, sha256: sha(fs.readFileSync(join(root, path))) });
  const read = path => JSON.parse(fs.readFileSync(join(root, path), 'utf8'));
  const copyRefs = value => { if (!value || typeof value !== 'object') return; if (typeof value.path === 'string' && value.path.startsWith('research/') && typeof value.sha256 === 'string') copy(value.path); for (const v of Object.values(value)) copyRefs(v); };
  const appPath = `${base}/root-application.json`, bindingsPath = `${base}/root-current-consumer-bindings.json`;
  copy(appPath); copy(bindingsPath);
  const app = read(appPath), bindings = read(bindingsPath);
  copyRefs(app);
  for (const change of app.changes) { copy(change.before_file); copy(change.proposed_file); copy(change.path); }
  for (const row of [...bindings.rows, ...bindings.definition_discharges]) copy(row.path);
  // Exact real manifests define membership. Other item bodies are not audited.
  for (const name of fs.readdirSync(join(repo, 'research')).filter(n => n.startsWith(`${run}-batch-`) && /^[1-9]\d*\.pages\.json$/.test(n.slice(`${run}-batch-`.length)))) copy(`research/${name}`);
  const closurePath = `research/${run}-step3-closure.json`; copy(closurePath);
  const nativePath = `research/${run}-dispatch/alpha-batch-read-96.attempt-1.result.json`;
  const outputPath = nativePath.replace(/\.result\.json$/, '.last-message.json');
  const digestPath = `research/${run}-batch-96-step5-context.json`;
  for (const path of [nativePath, outputPath, digestPath]) copy(path);
  const digest = read(digestPath), at = '2026-10-22T00:00:00.000Z';
  const acceptancePath = `${base}/test-root-acceptance.json`;
  const acceptance = { version: 1, kind: 'root-accepted-step4-outside-draft-repair', run, owner_identity: '/root', accepted: true, at,
    scope: 'exact-seven-choice-premise-repairs', application: ref(appPath), consumer_bindings: ref(bindingsPath), step3_closure: ref(closurePath),
    primary_review: app.primary_review, independent_review: app.independent_review, native_coverage_adopted: false, whole_item_audit_claimed: false,
    original_native_digests_edited: false, original_step3_closure_edited: false };
  put(acceptancePath, acceptance);
  const route = { source_batch: '96', source_group: 'af', alert_index: 0, digest_path: digestPath, digest_sha256: ref(digestPath).sha256,
    alert: digest.alerts[0], native_result: ref(nativePath), native_output: ref(outputPath), disposition: 'owner-repaired-outside-draft-supplier',
    reason: 'Explicit root disposition of the genuine original missing-Choice premise alert after the exact independently reviewed seven outside-context repairs; no native history, audit or coverage is replaced.',
    application: ref(appPath), consumer_inventory: ref(bindingsPath), root_acceptance: ref(acceptancePath), step3_closure: ref(closurePath) };
  const receiptPath = `research/${run}-step4-repaired-draft-context-alert-routes.json`;
  const receipt = { version: 1, kind, run, authorized_by: 'owner', owner_identity: '/root', recorded_at: at, routes: [route] };
  put(receiptPath, receipt);
  const flush = () => { put(appPath, app); put(bindingsPath, bindings); acceptance.application = ref(appPath); acceptance.consumer_bindings = ref(bindingsPath); put(acceptancePath, acceptance); route.application = ref(appPath); route.consumer_inventory = ref(bindingsPath); route.root_acceptance = ref(acceptancePath); put(receiptPath, receipt); };
  const args = { root, run, batch: '96', group: 'af', digestPath, digest, alertIndex: 0 };
  return { root, put, read, ref, copy, app, appPath, bindings, bindingsPath, acceptance, acceptancePath, route, receipt, receiptPath, digest, digestPath, nativePath, outputPath, closurePath, args, flush, check: () => repairedDraftContextAlertRoute(args) };
}
test('actual seven-repair provenance accepts, original native digest and closed-v3 bytes remain unchanged', t => {
  const f = fixture(t), before = fs.readFileSync(join(f.root, f.digestPath)), closed = fs.readFileSync(join(f.root, f.closurePath));
  const result = f.check(); assert.equal(result.ok, true, result.reason);
  assert.equal(result.route.native_coverage_adopted, false); assert.equal(result.route.whole_item_audit_claimed, false);
  assert.deepEqual(fs.readFileSync(join(f.root, f.digestPath)), before); assert.deepEqual(fs.readFileSync(join(f.root, f.closurePath)), closed);
  assert.equal(f.app.legacy_precheck_observations.every(x => x.exit_code === 1), true);
});
for (const [name, mutate] of Object.entries({
  'absent opt-in': f => { f.afterFlush = () => fs.unlinkSync(join(f.root, f.receiptPath)); },
  'duplicate route': f => f.receipt.routes.push(structuredClone(f.route)),
  'nonowner authority': f => { f.receipt.owner_identity = '/root/not-owner'; },
  'new run cannot inherit route': f => { f.args.run = 'another-run'; },
  'other batch cannot inherit route': f => { f.args.batch = '95'; },
  'other alert index': f => { f.args.alertIndex = 1; },
  'forged native digest': f => { f.digest.alerts[0].finding += ' invented'; f.put(f.digestPath, f.digest); f.route.digest_sha256 = f.ref(f.digestPath).sha256; },
  'failed native result with consistently repinned ref': f => { const n = f.read(f.nativePath); n.ok = false; f.put(f.nativePath, n); f.route.native_result = f.ref(f.nativePath); },
  'current helper falsely enters actual frontier': f => { f.put(`research/${run}-batch-110.pages.json`, [{ id: 'outside-page', items: [ids[0]] }]); },
  'published changed source': f => { const p = f.app.changes[0].path; f.put(p, fs.readFileSync(join(f.root, p), 'utf8').replace('status: draft', 'status: published')); },
  'seven changed carriers cannot be narrowed': f => { f.app.changes.pop(); },
  'missing after archive': f => { fs.unlinkSync(join(f.root, f.app.changes[0].proposed_file)); },
  'current after source drift': f => { fs.appendFileSync(join(f.root, f.app.changes[0].path), '\nUnlogged successor\n'); },
  'declared raw hash drift': f => { f.app.changes[0].after_raw_sha256 = 'a'.repeat(64); },
  'guard drift': f => { f.app.changes[0].after_guard = 'a'.repeat(64); },
  'literal change not reviewed in proposal': f => { f.app.changes[0].operations[0].after += ' invented'; },
  'retained proof hash drift': f => { f.app.changes[0].proof_body_excluding_given_sha256 = 'a'.repeat(64); },
  'missing actual proof-layout check': f => { f.app.checks = f.app.checks.filter(x => !x.command.includes('tools/proof-layout.mjs')); },
  'failed actual render check': f => { f.app.checks.find(x => x.command.includes('tools/rendercheck.mjs')).exit_code = 1; },
  'fake precheck pass': f => { f.app.legacy_precheck_observations[0].exit_code = 0; },
  'omitted before precheck capture': f => { f.app.legacy_precheck_observations.shift(); },
  'changed precheck capture with consistent new binding': f => { const o = f.app.legacy_precheck_observations[1], j = f.read(o.output.path); j.results[0].status = 'pass'; f.put(o.output.path, j); o.output = f.ref(o.output.path); },
  'application claims native coverage': f => { f.app.native_coverage_adopted = true; },
  'acceptance missing independent authority': f => { f.acceptance.accepted = false; },
  'missing primary review': f => { fs.unlinkSync(join(f.root, f.app.primary_review.path)); },
  'independent report retains blocker after repinning': f => { const p = f.app.independent_review.path, j = f.read(p); j.blocking_findings = ['unresolved']; f.put(p, j); f.app.independent_review = f.ref(p); f.acceptance.independent_review = f.ref(p); },
  'consumer missing from reviewed closure': f => { f.bindings.rows.pop(); },
  'new actual direct consumer omitted from inventory': f => { f.put('items/lem-extra-actual-consumer.md', `---\nid: lem-extra-actual-consumer\nkind: lemma\nstatus: draft\ndeps:\n  - ${ids[0]}\n---\n## Statement\nActual fixture.\n`); },
  'consumer actual graph edge drift': f => { const row = f.bindings.rows.find(x => x.id !== ids[0]); row.deps = []; },
  'definition discharge omitted': f => { f.bindings.definition_discharges = []; },
  'definition discharge cannot become analytic premise': f => { f.bindings.definition_discharges[0].disposition = 'unchanged-full-ac'; },
  'full-Choice consumer cannot be relabeled weaker conditional': f => { f.bindings.rows.find(x => x.disposition === 'unchanged-full-ac').disposition = 'unchanged-conditional'; },
  'conditional branch cannot be erased': f => { f.bindings.rows.find(x => x.disposition === 'unchanged-conditional').disposition = 'unchanged-full-ac'; },
  'frontier sealed hash drift': f => { f.bindings.rows.find(x => x.frontier_sealed_guard).frontier_sealed_guard = 'a'.repeat(64); },
  'nonliteral actual consumer premise': f => { f.bindings.rows[0].premise_quotes = ['This purported premise is absent from the actual current source carrier.']; },
  'closure cannot be repinned after editing': f => { const j = f.read(f.closurePath); j.closed_at = '2026-10-21T00:00:00Z'; f.put(f.closurePath, j); f.route.step3_closure = f.ref(f.closurePath); f.acceptance.step3_closure = f.ref(f.closurePath); },
  'path alias is not a new archive identity': f => { f.app.source_proposal.path = f.app.source_proposal.path.replace('/guarded-source', '/./guarded-source'); },
  'symlink archive': f => { const p = f.app.changes[0].before_file, a = join(f.root, p); fs.renameSync(a, a + '.real'); fs.symlinkSync(a + '.real', a); },
})) test(`reject ${name}`, t => { const f = fixture(t); mutate(f); f.flush(); f.afterFlush?.(); assert.equal(f.check().ok, false, name); });

test('unrelated malformed metadata does not expand this context validation scope', t => {
  const f = fixture(t);
  f.put('items/ex-foreign-unrelated.md', '---\nid: ex-foreign-unrelated\ndeps: []\njustified_by: []\nproof_strategy: directverification: {}\n---\nForeign current work.\n');
  const result = f.check(); assert.equal(result.ok, true, result.reason);
});
for (const declaration of [`deps: [${ids[0]}]`, `deps:\n- ${ids[0]}`, `deps:\n  - ${ids[0]}`]) test(`relevant consumer cannot hide behind unrelated malformed field: ${declaration}`, t => {
  const f = fixture(t);
  f.put('items/lem-new-foreign-consumer.md', `---\nid: lem-new-foreign-consumer\n${declaration}\nproof_strategy: directverification: {}\n---\nNew real fixture edge.\n`);
  assert.equal(f.check().ok, false);
});
test('a possible reached malformed dependency list never silently becomes empty', t => {
  const f = fixture(t); f.put('items/ex-foreign-invalid-edges.md', `---\nid: ex-foreign-invalid-edges\ndeps: [${ids[0]}\nproof_strategy: direct\n---\nForeign.\n`); assert.equal(f.check().ok, false);
});
test('an ambiguous malformed declared dependency fails closed rather than silently dropping unknown edges', t => {
  const f = fixture(t); f.put('items/ex-foreign-invalid-unrelated-edges.md', '---\nid: ex-foreign-invalid-unrelated-edges\ndeps: [unterminated\nproof_strategy: direct\n---\nForeign.\n'); assert.equal(f.check().ok, false);
});
for (const key of ['deps', 'justified_by']) for (const target of [ids[0], ids[1]]) test(`YAML-escaped ${key} reference cannot hide direct/indirect/discharge consumer ${target}`, t => {
  const f = fixture(t), encoded = target.slice(0, -1) + `\\u${target.charCodeAt(target.length - 1).toString(16).padStart(4, '0')}`;
  f.put('items/lem-escaped-actual-consumer.md', `---\nid: lem-escaped-actual-consumer\nkind: lemma\nstatus: draft\n${key}: ["${encoded}"]\n---\nEscaped fixture.\n`);
  assert.equal(f.check().ok, false);
});
test('valid YAML alias dependency cannot hide a reached consumer', t => {
  const f = fixture(t); f.put('items/lem-alias-actual-consumer.md', `---\nid: lem-alias-actual-consumer\nkind: lemma\nstatus: draft\nedge: &edge "${ids[0]}"\ndeps: [*edge]\n---\nAlias fixture.\n`); assert.equal(f.check().ok, false);
});
test('escaped dependency key with valid header cannot hide a reached consumer', t => {
  const f = fixture(t); f.put('items/lem-escaped-key-consumer.md', `---\nid: lem-escaped-key-consumer\n"de\\u0070s": [${ids[0]}]\n---\nFixture.\n`); assert.equal(f.check().ok, false);
});
test('isolated escaped dependency field still reveals reached edge despite unrelated malformed metadata', t => {
  const f = fixture(t), encoded = ids[0].slice(0, -1) + '\\u0073';
  f.put('items/lem-escaped-foreign-consumer.md', `---\nid: lem-escaped-foreign-consumer\n"de\\u0070s": ["${encoded}"]\nproof_strategy: directverification: {}\n---\nFixture.\n`); assert.equal(f.check().ok, false);
});
test('unrelated valid duplicate edges do not create a formatting campaign', t => {
  const f = fixture(t); f.put('items/ex-foreign-duplicate-edges.md', '---\nid: ex-foreign-duplicate-edges\ndeps: [def-unrelated, def-unrelated]\nproof_strategy: directverification: {}\n---\nForeign.\n'); const r = f.check(); assert.equal(r.ok, true, r.reason);
});
