import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { checkAppendReview } from '../src/frontier-append.mts';
import { loadAppendDriftOwnerResolutions, loadAppliedAppendDriftOwnerResolutions, appendDriftOwnerScopeHash, appendManifestPageHash } from '../../append-drift-owner-resolutions.mjs';
const sha = (x: any) => createHash('sha256').update(x).digest('hex');
function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'append-owner-resolution-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (path: string, value: any) => {
    const full = join(root, path); mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, typeof value === 'string' ? value : JSON.stringify(value));
    return { path, sha256: sha(readFileSync(full)) };
  };
  const run = 'demo', archive = 'research/demo-frontier-append-1';
  const original = put(`${archive}/preimages/demo-alpha-step1-drift.md`, '### old\nVERDICT: no-drift\n');
  const entry: any = { number: 1, run, at: '2026-10-27T00:00:00Z', pairs: ['new'], newPages: ['new', 'new-examples'],
    batches: ['2'], archive, originalReport: original.path, report: 'research/demo-alpha-step1-append-1-drift.md',
    task: 'research/demo-alpha-step1-append-1-drift.task.md', evidence: 'research/demo-append-1-drift-evidence.json',
    preimages: [{ path: 'research/demo-alpha-step1-drift.md', sha256: original.sha256, archive: original.path }] };
  put('research/demo-frontier-appends.json', { version: 1, run, appends: [entry] });
  put(`${archive}/new-pages.json`, entry.newPages);
  const text = '### new\nVERDICT: drift-blocked — missing local proof\n';
  const report = put(entry.report, text);
  const plan = put('research/plan-spec.json', { pages: [
    { id: 'new', kind: 'A', companion: 'new-examples', requires: [] },
    { id: 'new-examples', kind: 'B', companion: 'new', requires: ['new'] },
    { id: 'downstream', kind: 'A', requires: ['new-examples'] },
  ] });
  const ledger = put('research/demo-scope-ledger.json', { run, pages: [{ id: 'new', kind: 'A' }, { id: 'new-examples', kind: 'B' }] });
  const manifestPages = [{ id: 'new', kind: 'A', items: [{ id: 'lem-new', statement: 'Original' }] }, { id: 'new-examples', kind: 'B', items: [] }];
  put('research/demo-batch-2.pages.json', manifestPages);
  const manifests = [{ path: 'research/demo-batch-2.pages.json', pages_sha256: appendManifestPageHash(manifestPages) }];
  const append_evidence = put(entry.evidence, [{ page: 'new' }]);
  const input = put('items/lem-input.md', 'Complete input statement\n');
  const label = 'drift-review-append-1-refresh-fresh';
  const task = put(`${archive}/refresh-fresh.task.md`, 'Exact assigned task\n');
  const request: any = { run, stage: '1-append-drift-1', unit: 'append-1', id: 'fresh', label,
    requestedAt: '2026-10-27T00:01:00Z', task: task.path, taskSha256: task.sha256,
    stateFile: join(root, '.autopilot/demo/state.json'), dispatchDir: join(root, 'research/demo-dispatch') };
  const native_refresh = put(`${archive}/current-review-refresh.json`, request);
  const native_prompt = put(`research/demo-dispatch/alpha-${label}.attempt-1.prompt.md`, `run: demo\noutput: ${entry.report}\n`);
  const result = { run, role: 'alpha', label, attempt: 1, runner: 'codex', ok: true, exit_code: 0, process_exit_code: 0,
    timed_out: false, covers: ['append-1'], terminal_summary: { task_completed: true, task_aborted: false },
    started_at: '2026-10-27T00:01:01Z', ended_at: '2026-10-27T00:02:00Z', prompt: join(root, native_prompt.path) };
  const native_result = put(`research/demo-dispatch/alpha-${label}.result.json`, result);
  const native_seal = put(`${archive}/refresh-fresh.seal.json`, { run, number: 1, id: 'fresh', label,
    requestSha256: native_refresh.sha256, resultSha256: native_result.sha256, reportSha256: report.sha256, taskSha256: task.sha256 });
  put('.autopilot/demo/state.json', { run, nativeRefreshes: [{ id: 'fresh', run, stage: request.stage,
    unit: request.unit, requestedAt: request.requestedAt, plan: { role: 'alpha', label } }],
    dispatches: { [`${request.stage}:${label}`]: { role: 'alpha', covers: ['append-1'] } } });
  const before = put('research/before.md', 'new: missing complete proof\n');
  const after = put('research/repair.md', 'new: complete focused construction\n');
  const sources = [{ path: after.path, original: before, current_sha256: after.sha256 }];
  const consumers = [{ page: 'new-examples', disposition: 'checked-unaffected', reason: 'Statement unchanged' },
    { page: 'downstream', disposition: 'checked-unaffected', reason: 'Statement unchanged' }];
  const proof = put('research/full-proof.md', 'The actual focused local proof, not a native verdict.\n');
  const repair_evidence = put('research/delegated-report.md', 'Actual delegated construction and remaining holds\n');
  const verdict = 'VERDICT: drift-blocked — missing local proof';
  const acceptance: any = { run, number: 1, page: 'new', owner: true, decision: 'resolved', verdict,
    reason: 'Accepted exact planning repair, not whole-page readiness', sources, consumers, proof_evidence: [proof], repair_evidence };
  const evidence = put('research/owner-acceptance.json', acceptance);
  const row: any = { page: 'new', verdict, reason: 'Actual planning repair', sources, consumers, proof_evidence: [proof], evidence };
  const doc: any = { version: 1, policy: 'owner-resolved-native-append-drift-blockers', run, number: 1,
    authorized_by: 'owner', owner_identity: '/root', authorized_at: '2026-10-27T00:03:00Z', reason: 'Exact repaired blocker',
    entry_sha256: sha(JSON.stringify(entry)), report, plan, ledger, manifests, append_evidence, inputs: [input],
    native_refresh, native_seal, native_result, native_prompt, native_task: task, resolutions: [row] };
  doc.scope_sha256 = appendDriftOwnerScopeHash(entry, doc.resolutions, JSON.parse(readFileSync(join(root, ledger.path), 'utf8')), JSON.parse(readFileSync(join(root, plan.path), 'utf8')));
  const save = () => put(`${archive}/owner-drift-resolutions.json`, doc);
  save();
  return { root, put, entry, text, doc, row, acceptance, save, archive };
}

test('exact owner planning resolution accepts only the blocked page without rewriting native evidence', t => {
  const f = fixture(t), before = readFileSync(join(f.root, f.entry.report));
  assert.deepEqual([...loadAppendDriftOwnerResolutions(f.root, 'demo', f.entry, f.text)], [['new', f.row.verdict]]);
  assert.equal(checkAppendReview(f.root, 'demo', 1).number, 1);
  assert.deepEqual(readFileSync(join(f.root, f.entry.report)), before);
});

test('missing receipt retains blocked behavior; ordinary no-drift needs no owner receipt or refresh', t => {
  const f = fixture(t); rmSync(join(f.root, f.archive, 'owner-drift-resolutions.json'));
  assert.throws(() => checkAppendReview(f.root, 'demo', 1), /blocked/);
  f.put(f.entry.report, '### new\nVERDICT: no-drift\n');
  rmSync(join(f.root, f.archive, 'current-review-refresh.json'));
  assert.equal(checkAppendReview(f.root, 'demo', 1).number, 1);
});

for (const [name, field] of [['report', 'report'], ['prerequisite', 'inputs'], ['proof', 'proof_evidence']] as const) {
  test(`stale ${name} bytes fail closed`, t => {
    const f = fixture(t);
    const link = field === 'inputs' || field === 'manifests' ? f.doc[field][0] : field === 'proof_evidence' ? f.row.proof_evidence[0] : f.doc[field];
    f.put(link.path, field === 'report' ? f.text + '\nChanged current bytes\n' : 'Changed current bytes\n');
    assert.throws(() => checkAppendReview(f.root, 'demo', 1), /stale evidence/);
  });
}

for (const field of ['plan', 'ledger']) {
  test(`affected ${field} change fails the scoped binding`, t => {
    const f = fixture(t), path = f.doc[field].path;
    const value = JSON.parse(readFileSync(join(f.root, path), 'utf8'));
    value.pages[0].title = 'Changed actual interface'; f.put(path, value);
    assert.throws(() => checkAppendReview(f.root, 'demo', 1), /affected planning scope changed/);
  });
}
test('unrelated new pages and ordinary manifest authoring do not stale planning acceptance', t => {
  const f = fixture(t), path = f.doc.plan.path;
  const plan = JSON.parse(readFileSync(join(f.root, path), 'utf8'));
  plan.pages.push({ id: 'unrelated', kind: 'A', items: [{ id: 'new-unrelated-item' }] }); f.put(path, plan);
  const manifestPath = f.doc.manifests[0].path;
  const pages = JSON.parse(readFileSync(join(f.root, manifestPath), 'utf8'));
  pages[0].items.push({ id: 'native-authored-item', statement: 'Ordinary authored inventory' });
  pages[0].order = 200; f.put(manifestPath, pages);
  assert.equal(checkAppendReview(f.root, 'demo', 1).number, 1);
});
test('new actual consumer and changed appended page identity fail closed', t => {
  const f = fixture(t), path = f.doc.plan.path;
  const plan = JSON.parse(readFileSync(join(f.root, path), 'utf8'));
  plan.pages.push({ id: 'new-consumer', kind: 'A', requires: ['new'] }); f.put(path, plan);
  assert.throws(() => checkAppendReview(f.root, 'demo', 1), /affected planning scope changed/);
  plan.pages.pop(); f.put(path, plan);
  f.put(f.doc.manifests[0].path, [{ id: 'wrong-page', kind: 'A' }]);
  assert.throws(() => checkAppendReview(f.root, 'demo', 1), /appended page identities changed/);
});

for (const [name, mutate, error] of [
  ['wrong page', (f: any) => { f.row.page = 'old'; }, /wrong resolved scope page/],
  ['wrong verdict', (f: any) => { f.row.verdict += ' edited'; }, /wrong exact blocked verdict/],
  ['missing proof', (f: any) => { f.row.proof_evidence = []; }, /missing actual proof evidence/],
  ['missing consumer', (f: any) => { f.row.consumers.pop(); }, /incomplete actual consumer/],
  ['wrong entry', (f: any) => { f.doc.entry_sha256 = '0'.repeat(64); }, /registry entry changed/],
  ['fake native hash', (f: any) => { f.doc.native_result.sha256 = '0'.repeat(64); }, /stale evidence/],
  ['wrong native seal', (f: any) => { f.doc.native_seal = f.put(f.doc.native_seal.path, {}); }, /native refresh seal changed/],
] as const) {
  test(`${name} cannot satisfy append review`, t => {
    const f = fixture(t); mutate(f); f.save();
    assert.throws(() => checkAppendReview(f.root, 'demo', 1), error);
  });
}

test('missing engine-started refresh cannot be replaced by owner assertions', t => {
  const f = fixture(t); f.put('.autopilot/demo/state.json', { run: 'demo', nativeRefreshes: [], dispatches: {} });
  assert.throws(() => checkAppendReview(f.root, 'demo', 1), /missing engine-started refresh/);
});

test('symlink evidence fails even with matching bytes', t => {
  const f = fixture(t), path = f.row.proof_evidence[0].path;
  const raw = readFileSync(join(f.root, path)); rmSync(join(f.root, path));
  f.put('research/other.md', raw.toString()); symlinkSync(join(f.root, 'research/other.md'), join(f.root, path));
  assert.throws(() => checkAppendReview(f.root, 'demo', 1), /symlink evidence/);
});

test('post-apply merged report uses the same exact receipt and rejects changed native merge', t => {
  const f = fixture(t), original = readFileSync(join(f.root, f.entry.originalReport), 'utf8');
  const merged = original + `\n\n<!-- native append review 1; original preimage retained in ${f.archive} -->\n` + f.text;
  assert.equal(loadAppliedAppendDriftOwnerResolutions(f.root, 'demo', merged).size, 0);
  f.put(`${f.archive}/review-applied.json`, { run: 'demo', number: 1, inventoriesPreserved: true,
    reportSha256: sha(f.text), originalReportSha256: sha(original), mergedReportSha256: sha(merged),
    ownerResolutionSha256: sha(readFileSync(join(f.root, f.archive, 'owner-drift-resolutions.json'))) });
  assert.equal(loadAppliedAppendDriftOwnerResolutions(f.root, 'demo', merged).get('new'), f.row.verdict);
  assert.throws(() => loadAppliedAppendDriftOwnerResolutions(f.root, 'demo', merged.replace('missing local proof', 'rewritten verdict')), /merged native append report changed/);
});


test('actual merged drift gate honors an exact owner-resolved bare blocked line, without fabricating edge prose', t => {
  const f = fixture(t), bare = '### new\nVERDICT: drift-blocked\n';
  f.doc.report = f.put(f.entry.report, bare); f.row.verdict = 'VERDICT: drift-blocked';
  f.acceptance.verdict = f.row.verdict; f.row.evidence = f.put(f.row.evidence.path, f.acceptance);
  const seal = JSON.parse(readFileSync(join(f.root, f.doc.native_seal.path), 'utf8'));
  seal.reportSha256 = f.doc.report.sha256; f.doc.native_seal = f.put(f.doc.native_seal.path, seal);
  const plan = JSON.parse(readFileSync(join(f.root, f.doc.plan.path), 'utf8'));
  plan.pages.unshift({ id: 'old', kind: 'A', order: 0, category: 'math', requires: [] });
  for (const [index, page] of plan.pages.entries()) { page.order ??= index; page.category ??= 'math'; }
  f.put(f.doc.plan.path, plan);
  const ledger = { run: 'demo', allow_in_run_dependencies: true, pages: [{ id: 'old', kind: 'A' }, { id: 'new', kind: 'A' }, { id: 'new-examples', kind: 'B' }] };
  f.put(f.doc.ledger.path, ledger); f.doc.scope_sha256 = appendDriftOwnerScopeHash(f.entry, f.doc.resolutions, ledger, plan); f.save();
  const original = readFileSync(join(f.root, f.entry.originalReport), 'utf8');
  const merged = original + `\n\n<!-- native append review 1; original preimage retained in ${f.archive} -->\n` + bare;
  f.put('research/demo-alpha-step1-drift.md', merged);
  f.put(`${f.archive}/review-applied.json`, { run: 'demo', number: 1, inventoriesPreserved: true,
    originalReportSha256: sha(original), reportSha256: sha(bare), mergedReportSha256: sha(merged),
    ownerResolutionSha256: sha(readFileSync(join(f.root, f.archive, 'owner-drift-resolutions.json'))) });
  const tool = new URL('../../drift-review-check.mjs', import.meta.url).pathname;
  const check = () => spawnSync(process.execPath, [tool, '--run', 'demo'], { cwd: f.root, encoding: 'utf8' });
  const accepted = check(); assert.equal(accepted.status, 0, accepted.stderr);
  assert.match(accepted.stdout, /1 exact blocker\(s\) owner-resolved/);
  rmSync(join(f.root, f.archive, 'owner-drift-resolutions.json'));
  assert.equal(check().status, 1); assert.match(check().stderr, /drift-check-blocked/);
});
