import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { observedCurrentHistory, recoverLoggedSource } from './step3-observed-current-history.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const repo = resolve(import.meta.dirname, '../..');
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-observed-history-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['research/r-archive', 'research/r-dispatch', 'items', 'library/test', 'tools']) mkdirSync(join(root, dir), { recursive: true });
  symlinkSync(join(repo, 'tools/physics-support'), join(root, 'tools/physics-support'), 'dir');
  const put = (path, value) => writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value));
  const ref = (path, value) => { put(path, value); return { path, sha256: sha(readFileSync(join(root, path))) }; };
  const source = (id, deps = []) => `---\nid: ${id}\nstatus: draft\npipeline_run: r\ndeps: ${JSON.stringify(deps)}\n---\n## Statement\nSource for ${id}.\n`;
  const old = source('lem-supplier') + 'Actual observed proof before concurrent repair.\n';
  const current = source('lem-supplier') + 'Corrected proof after concurrent repair.\n';
  put('items/lem-consumer.md', source('lem-consumer', ['lem-supplier'])); put('items/lem-supplier.md', current);
  for (const [batch, id] of [['1', 'lem-consumer'], ['2', 'lem-supplier']]) {
    put(`research/r-batch-${batch}.pages.json`, [{ id: `page-${batch}`, category: 'test', items: [id] }]);
    put(`research/r-batch-${batch}.proof-contracts.json`, { version: 1, scope: [id], contracts: { [id]: {} } });
    put(`library/test/page-${batch}.md`, `---\npage: page-${batch}\n---\n`);
  }
  put('research/r-alpha-groups.json', [{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }]);
  const original = { id: 'lem-supplier', subject_type: 'in-run-dependency', consumer_id: 'lem-consumer',
    observed_source: { snapshot: 'current', item_sha256: sha(old) }, location: 'Proof', defect: 'ill-formed',
    evidence: 'Actual native reader observation of supplier proof.', severity: 'nonfatal' };
  const report = { batch: '1', findings: [original], coverage_note: 'All assigned subjects opened.' };
  put('research/r-reader-findings-1.json', report);
  const stem = 'research/r-dispatch/reader-reader-1.attempt-1';
  const receipt = { run: 'r', role: 'reader', label: 'reader-1', covers: ['1'], attempt: 1, evidence_tag: '.attempt-1',
    ok: true, exit_code: 0, process_exit_code: 0, timed_out: false, ended_at: '2026-10-23T00:00:00Z', tail: JSON.stringify(report) };
  const auth = { version: 1, run: 'r', batch: '1', kind: 'observed-current-history', authorized_by: '/root',
    mathematical_acceptance: false, edit_permission: false, original_obligation_owed: true,
    reason: 'Root preserves this exact completed native observation after a concurrently repaired supplier, without accepting the current proof.',
    original_report: ref('research/r-archive/report.json', report), native_receipt: ref('research/r-dispatch/reader-reader-1.result.json', receipt),
    native_receipt_archive: ref('research/r-archive/receipt.json', receipt), original_last_message: ref(stem + '.last-message.json', report),
    native_log: ref(stem + '.log', `${sha(old)}  items/lem-supplier.md\n${old}`), findings: [] };
  const entry = { finding_index: 1, producer_batch: '2', original_finding: structuredClone(original),
    observed_source: ref('research/r-archive/observed.md', old), current_source_at_split: ref('research/r-archive/split-current.md', current),
    logged_excerpts: ['Actual observed proof before concurrent repair.'] };
  auth.findings.push(entry);
  auth.inputs = Object.fromEntries([auth.original_report, auth.native_receipt, auth.native_receipt_archive,
    auth.original_last_message, auth.native_log, entry.observed_source, entry.current_source_at_split].map(ref => [ref.path, ref.sha256]));
  const save = () => put('research/r-step3-observed-current-history-1.json', auth); save();
  const finding = () => ({ obligation: 'reader:1:1', ...structuredClone(original) });
  const dependencies = new Map([['lem-supplier', { producer_batch: '2', consumers: new Map([['lem-consumer', ['lem-consumer', 'lem-supplier']]]) }]]);
  const attempt = (...args) => spawnSync(process.execPath, [join(repo, 'tools/physics-support/step3-scope.mjs'), ...args, '--root', root, '--run', 'r'],
    { cwd: root, env: { ...process.env, PHYSICS_REPO: root }, encoding: 'utf8' });
  const ok = (...args) => { const result = attempt(...args); assert.equal(result.status, 0, result.stderr + result.stdout); return result; };
  return { root, put, ref, old, current, report, original, auth, entry, save, finding, dependencies, attempt, ok };
}

test('recovery returns only an exact logged raw preimage, never a best-effort reconstruction', () => {
  const old = 'header\noriginal proof\n\n', current = 'header\ncorrected proof\n\n';
  const log = `     2\toriginal proof\n     3\t\n${sha(old)}  items/lem-supplier.md\n`;
  assert.equal(recoverLoggedSource(log, current, 'lem-supplier', 2, 3, sha(old)), old);
  assert.throws(() => recoverLoggedSource(log, 'changed header\n', 'lem-supplier', 2, 3, sha(old)), /preimage/);
  assert.throws(() => recoverLoggedSource(log.replace('original proof', 'invented proof'), current, 'lem-supplier', 2, 3, sha(old)), /preimage/);
  assert.throws(() => recoverLoggedSource(log.replace(sha(old), 'f'.repeat(64)), current, 'lem-supplier', 2, 3, sha(old)), /logged source digest/);
});

test('exact historical-current observation remains separate from live split bytes', t => {
  const f = fixture(t), finding = f.finding();
  const binding = observedCurrentHistory(f.root, 'r', '1', finding, f.dependencies, { atSplit: true });
  assert.equal(binding.observed_carrier.item_sha256, sha(f.old));
  assert.equal(binding.current_source_at_split.sha256, sha(f.current));
  assert.deepEqual(finding.observed_source, f.original.observed_source);
  f.put('items/lem-supplier.md', f.current + 'Later ordinary adjudication repair.\n');
  assert.deepEqual(observedCurrentHistory(f.root, 'r', '1', finding, f.dependencies), binding);
  assert.throws(() => observedCurrentHistory(f.root, 'r', '1', finding, f.dependencies, { atSplit: true }), /split source changed/);
});

for (const [label, mutate] of Object.entries({
  'non-owner authority': f => { f.auth.authorized_by = 'helper'; },
  'mathematical acceptance': f => { f.auth.mathematical_acceptance = true; },
  'edit permission': f => { f.auth.edit_permission = true; },
  'waived obligation': f => { f.auth.original_obligation_owed = false; },
  'duplicate finding': f => { f.auth.findings.push(f.entry); },
  'finding rewritten': f => { f.entry.original_finding.evidence = 'Changed'; },
  'canonical report rewritten': f => { f.put('research/r-reader-findings-1.json', {}); },
  'receipt rewritten': f => { f.put(f.auth.native_receipt.path, {}); },
  'receipt archive rewritten': f => { f.put(f.auth.native_receipt_archive.path, {}); },
  'raw archive rewritten': f => { f.put(f.entry.observed_source.path, 'invented'); },
  'native log rewritten': f => { f.put(f.auth.native_log.path, 'invented'); },
  'last message rewritten': f => { f.put(f.auth.original_last_message.path, {}); },
  'source excerpts invented': f => { f.entry.logged_excerpts = ['This exact claim never appeared in the native source output.']; },
  'current route absent': f => { f.dependencies.clear(); },
  'wrong producer': f => { f.entry.producer_batch = '3'; },
  'current source rebound': f => { f.entry.current_source_at_split = f.entry.observed_source; },
  'unbound outside path': f => { f.entry.observed_source = { path: '../outside', sha256: sha(f.old) }; },
  'evidence omitted from gate inputs': f => { delete f.auth.inputs[f.auth.native_log.path]; },
})) test(`history rejects ${label}`, t => {
  const f = fixture(t); mutate(f); f.save();
  assert.throws(() => observedCurrentHistory(f.root, 'r', '1', f.finding(), f.dependencies, { atSplit: true }));
});

test('native split preserves the original report and independently collects current refutation', t => {
  const f = fixture(t);
  for (const n of ['1', '2']) for (const label of ['pre', 'post']) f.ok('hash', '--batch', n, '--label', label);
  f.ok('split', '--batch', '1');
  const scope = JSON.parse(readFileSync(join(f.root, 'research/r-step3-scope-1.json')));
  const row = scope.reader_findings[0];
  assert.equal(row.observation_basis, 'historical-current');
  assert.equal(row.observed_source.item_sha256, sha(f.old));
  assert.equal(row.producer_carrier_at_split.item_sha256, sha(f.current));
  assert.equal(row.historical_current_observation.observed_carrier.item_sha256, sha(f.old));
  f.put('research/r-refute-1.json', { batch: '1', opened: scope.refuter_scope, not_opened: [],
    flagged: [{ id: 'lem-supplier', location: 'Current proof', defect: 'ill-formed', evidence: 'Independent current reread finds a remaining issue.', severity: 'nonfatal' }], coverage_note: 'Complete current reread.' });
  f.ok('collect', '--batch', '1');
  const collected = JSON.parse(readFileSync(join(f.root, 'research/r-step3-scope-1.json')));
  assert.equal(collected.refuter_findings[0].observation_basis, 'current');
  assert.equal(collected.refuter_findings[0].observed_source.item_sha256, sha(f.current));
  assert.deepEqual(JSON.parse(readFileSync(join(f.root, 'research/r-reader-findings-1.json'))), f.report);
  // Exercise ordinary frozen-scope verification without manufacturing a
  // completed adjudication: both original/current obligations stay pending.
  f.put('research/r-reader-findings-2.json', { batch: '2', findings: [], coverage_note: 'Supplier home read.' });
  f.ok('split', '--batch', '2');
  const second = JSON.parse(readFileSync(join(f.root, 'research/r-step3-scope-2.json')));
  f.put('research/r-refute-2.json', { batch: '2', opened: second.refuter_scope, not_opened: [], flagged: [], coverage_note: 'Supplier home reread.' });
  f.ok('collect', '--batch', '2');
  f.put('research/defect-ledger.jsonl', '');
  for (const group of ['a', 'b']) f.put(`research/r-alpha-${group}-3a-decisions.json`, { version: 1, run: 'r', group, decisions: [] });
  const check = f.attempt('check', '--phase', 'adjudicate');
  assert.notEqual(check.status, 0, 'history authentication must not discharge adjudication');
  assert.doesNotMatch(check.stderr, /reader-findings-invalid|immutable historical-current|conflates original observation/);
  collected.reader_findings[0].historical_current_observation.authority.sha256 = 'f'.repeat(64);
  f.put('research/r-step3-scope-1.json', collected);
  assert.match(f.attempt('check', '--phase', 'adjudicate').stderr, /immutable historical-current observation changed/);
});

test('ordinary split still rejects stale current observations without authority or current graph', t => {
  const f = fixture(t);
  for (const n of ['1', '2']) for (const label of ['pre', 'post']) f.ok('hash', '--batch', n, '--label', label);
  rmSync(join(f.root, 'research/r-step3-observed-current-history-1.json'));
  assert.match(f.attempt('split', '--batch', '1').stderr, /declared producer snapshot/);
  f.save(); f.put('items/lem-consumer.md', '---\nid: lem-consumer\nstatus: draft\ndeps: []\n---\n');
  assert.notEqual(f.attempt('split', '--batch', '1').status, 0);
});
