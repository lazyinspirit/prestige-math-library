import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { authorizeOwnerGate, gateReviewSnapshot } from '../src/owner-gate-recertification.mjs';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';
const sha = (text: string) => createHash('sha256').update(text).digest('hex');
function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'owner-gate-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['items', 'research', '.physics-autopilot', 'library/test']) mkdirSync(join(repo, dir), { recursive: true });
  const config: any = { repo, run: 'demo', stateDir: join(repo, '.physics-autopilot'),
    dispatchDir: join(repo, 'research/demo-dispatch'), argv: ['true'], adoptCommand: false, ownerGateRecertification: true };
  const ctx: any = { repo, run: 'demo', config };
  const manifests = [{ id: 'test-page', category: 'test', requires: [], items: [
    { id: 'def-consumer', deps: ['def-supplier'] }, { id: 'def-supplier', deps: [] }] }];
  writeFileSync(join(repo, 'research/demo-batch-1.pages.json'), JSON.stringify(manifests));
  for (const [id, deps] of [['def-supplier', '[]'], ['def-consumer', '[def-supplier]']])
    writeFileSync(join(repo, `items/${id}.md`), `---\nid: ${id}\nkind: definition\ndeps: ${deps}\n---\n## Definition\nA precise claim.\n`);
  const gates: any[] = [{ id: 'first', argv: ['node', '-e', 'process.exit(0)'] }];
  const stages = ['3b-author'];
  const args: any = { ctx, gates, stages };
  function receipt(edit: (receipt: any) => void = () => {}) {
    const request = JSON.parse(readFileSync(join(config.stateDir, 'owner-gate-request.json'), 'utf8'));
    const receipt: any = { version: 2, recertificationScope: 'formatting-metadata-only', attempt: request.attempt, snapshotSha256: request.snapshot.sha256,
      reviewer: 'owner', writersDrained: true, writerScopes: [], reviewStartedAt: request.createdAt,
      reviewedAt: new Date().toISOString(), items: request.snapshot.items.map((item: any) => ({ ...item,
        verdict: 'format-metadata-pass',
        formatting: { verdict: 'pass', evidence: `Checked ${item.id}: structural headings and Markdown formatting.` },
        metadata: { verdict: 'pass', evidence: `Checked ${item.id}: current ID, kind, provenance and dependency metadata.` } })) };
    edit(receipt);
    writeFileSync(join(config.stateDir, 'owner-gate-receipt.json'), JSON.stringify(receipt));
  }
  return { repo, config, ctx, gates, stages, args, receipt };
}
test('missing receipt holds; ordered complete current owner receipt authorizes once', t => {
  const f = fixture(t);
  assert.equal(authorizeOwnerGate(f.args).ok, false);
  assert.deepEqual(gateReviewSnapshot(f.ctx, f.gates, f.stages).items.map((row: any) => row.id), ['def-supplier', 'def-consumer']);
  f.receipt();
  assert.equal(authorizeOwnerGate(f.args).ok, true);
  assert.match(authorizeOwnerGate(f.args).why!, /Stale/);
});
test('rejects empty, omitted, unordered, invalid format/metadata and writer-scoped receipts', t => {
  const f = fixture(t);
  assert.equal(authorizeOwnerGate(f.args).ok, false);
  for (const edit of [
    (r: any) => r.items = [], (r: any) => r.items.pop(), (r: any) => r.items.reverse(),
    (r: any) => r.items[0].verdict = 'sound',
    (r: any) => r.items[0].formatting.verdict = 'fail',
    (r: any) => r.items[0].metadata.verdict = 'fail',
    (r: any) => r.items[0].formatting.evidence = '',
    (r: any) => r.items[0].metadata.evidence = '   ',
    (r: any) => r.items[0].metadata = null,
    (r: any) => r.version = 1,
    (r: any) => r.recertificationScope = 'mathematical-soundness',
    (r: any) => r.writerScopes = ['items/def-supplier.md'],
    (r: any) => r.reviewStartedAt = '2000-01-01T00:00:00Z',
  ]) { f.receipt(edit); assert.equal(authorizeOwnerGate(f.args).ok, false); }
  f.receipt();
  assert.match(authorizeOwnerGate({ ...f.args, writers: ['native-worker'] }).why!, /Live writers/);
  assert.equal(authorizeOwnerGate(f.args).ok, true);
});
test('mutated frontier, prerequisites or exact battery invalidate authorization', t => {
  const f = fixture(t);
  for (const file of ['items/def-supplier.md', 'research/demo-batch-1.pages.json']) {
    authorizeOwnerGate(f.args); f.receipt();
    writeFileSync(join(f.repo, file), `${readFileSync(join(f.repo, file), 'utf8')}\n`);
    assert.equal(authorizeOwnerGate(f.args).ok, false);
  }
  f.receipt(); f.gates[0].argv = ['node', '-e', 'process.exit(1)'];
  assert.equal(authorizeOwnerGate(f.args).ok, false);
});
test('native join holds before tools, consumes stable receipt, preserves all failure diagnostics, and requires fresh retry review', async t => {
  const f = fixture(t);
  const marker = join(f.repo, 'gate-ran');
  const gates: any[] = [{ id: 'fail', argv: ['node', '-e', `require('fs').appendFileSync(${JSON.stringify(marker)},${JSON.stringify('first\n')});process.exit(1)`] },
    { id: 'also-fail', argv: ['node', '-e', `require('fs').appendFileSync(${JSON.stringify(marker)},${JSON.stringify('second\n')});process.exit(1)`] }];
  f.args.gates = gates;
  const stage: any = { id: '3b-author', pattern: /^never$/, units: () => ['all'], plan: () => [], gates: () => gates };
  const state = new State(statePath(f.config.stateDir)).init('demo');
  const ex: any = new Executor({ config: f.config, stages: [stage], state,
    adapter: makeExecAdapter({ argv: ['true'], cwd: f.repo }), reporter: new Reporter({ dir: f.config.stateDir }) });
  const statuses = [{ s: stage, st: { why: 'complete' } }];
  assert.equal(await ex.runGroupGates(statuses, f.ctx, [stage]), 'blocked');
  assert.throws(() => readFileSync(marker));
  f.receipt();
  assert.equal(await ex.runGroupGates(statuses, f.ctx, [stage]), 'blocked');
  assert.equal(readFileSync(marker, 'utf8'), 'first\nsecond\n');
  assert.equal(state.stage(stage.id).gatesPassedAt, null);
  ex.lastBattery.clear(); // An ordinary retry rearms the native battery cache.
  assert.equal(await ex.runGroupGates(statuses, f.ctx, [stage]), 'blocked');
  assert.equal(readFileSync(marker, 'utf8'), 'first\nsecond\n');
  f.receipt();
  assert.equal(await ex.runGroupGates(statuses, f.ctx, [stage]), 'blocked');
  assert.equal(readFileSync(marker, 'utf8'), 'first\nsecond\nfirst\nsecond\n');
});
test('explicit native frozen selector reviews only its nonempty subjects; prerequisites remain context', t => {
  const f = fixture(t);
  f.gates[0].ownerReviewItems = ['def-consumer'];
  const snapshot = gateReviewSnapshot(f.ctx, f.gates, f.stages);
  assert.deepEqual(snapshot.items.map((row: any) => row.id), ['def-consumer']);
  assert.ok(snapshot.inputs.some((row: any) => row.path === join(f.repo, 'items/def-supplier.md')));
  f.gates[0].ownerReviewItems = [];
  assert.throws(() => gateReviewSnapshot(f.ctx, f.gates, f.stages), /Empty/);
});
test('valid definition discharge cycles bind complete evidence but only deps determine order', t => {
  const f = fixture(t);
  writeFileSync(join(f.repo, 'items/def-supplier.md'), '---\nid: def-supplier\ndeps: []\njustified_by: [lem-discharge]\n---\n## Definition\nCurrent definition.');
  writeFileSync(join(f.repo, 'items/lem-discharge.md'), '---\nid: lem-discharge\ndeps: [def-supplier]\n---\n## Proof\nCurrent discharge.');
  const snapshot = gateReviewSnapshot(f.ctx, f.gates, f.stages);
  assert.deepEqual(snapshot.items.map((row: any) => row.id), ['def-supplier', 'def-consumer']);
  assert.ok(snapshot.inputs.some((row: any) => row.path.endsWith('/items/lem-discharge.md')));
  const before = snapshot.sha256;
  writeFileSync(join(f.repo, 'items/lem-discharge.md'), `${readFileSync(join(f.repo, 'items/lem-discharge.md'), 'utf8')}\nChanged proof.`);
  assert.notEqual(gateReviewSnapshot(f.ctx, f.gates, f.stages).sha256, before);
  writeFileSync(join(f.repo, 'items/def-supplier.md'), '---\nid: def-supplier\ndeps: [def-consumer]\n---\nCurrent definition.');
  assert.throws(() => gateReviewSnapshot(f.ctx, f.gates, f.stages), /Dependency cycle/);
});
test('pre-author local prerequisite pages bind their actual manifest and absent carrier; missing external pages fail', t => {
  const f = fixture(t);
  const path = join(f.repo, 'research/demo-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(path, 'utf8'));
  pages[0].requires = ['supplier-page'];
  pages.push({ id: 'supplier-page', category: 'test', kind: 'A', items: [{ id: 'def-local-page-supplier', deps: [] }] });
  writeFileSync(path, JSON.stringify(pages));
  const snapshot = gateReviewSnapshot(f.ctx, f.gates, ['1-scaffold']);
  assert.ok(snapshot.inputs.some((row: any) => row.path.endsWith('/library/test/supplier-page.md') && row.sha256 === null));
  assert.ok(snapshot.items.some((row: any) => row.id === 'def-local-page-supplier' && row.carrierSha256 === null));
  pages[0].requires = ['missing-published-page']; writeFileSync(path, JSON.stringify(pages));
  assert.throws(() => gateReviewSnapshot(f.ctx, f.gates, ['1-scaffold']), /Missing prerequisite page/);
});
test('only used identities or aliases can hold the review; ambiguous used suppliers fail', t => {
  const f = fixture(t);
  for (const name of ['one', 'two']) writeFileSync(join(f.repo, `items/${name}.md`), `---\nid: def-unrelated\naliases: [def-unrelated-alias]\ndeps: []\n---\nContext.`);
  writeFileSync(join(f.repo, 'items/bad-unrelated.md'), '---\nid: [bad\n---\nMalformed unrelated context.');
  assert.equal(gateReviewSnapshot(f.ctx, f.gates, f.stages).items.length, 2);
  writeFileSync(join(f.repo, 'items/def-consumer.md'), '---\nid: def-consumer\ndeps: [def-unrelated-alias]\n---\nCurrent claim.');
  assert.throws(() => gateReviewSnapshot(f.ctx, f.gates, f.stages), /Ambiguous used/);
});
test('explicit frozen subjects absent from manifests union with actual current-manifest wrapper selection', t => {
  const f = fixture(t);
  const path = join(f.repo, 'research/demo-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(path, 'utf8'));
  pages[0].items = pages[0].items.filter((item: any) => item.id === 'def-supplier');
  writeFileSync(path, JSON.stringify(pages));
  f.gates[0].ownerReviewItems = ['def-consumer'];
  f.gates.push({ id: 'manifest-native', argv: ['node', '-e', 'process.exit(0)'] });
  assert.deepEqual(gateReviewSnapshot(f.ctx, f.gates, f.stages).items.map((row: any) => row.id), ['def-supplier', 'def-consumer']);
});
test('comma paths, glob matches and implicit readiness are bound; observer reports are excluded', t => {
  const f = fixture(t);
  for (const name of ['demo-coverage-1.json', 'demo-coverage-2.json', 'demo-contract-1.json', 'demo-step1-def-supplier.json'])
    writeFileSync(join(f.repo, 'research', name), '{}');
  f.gates[0].argv = ['node', 'tools/physics-support/step1-decisions.mjs', 'check', '--run', 'demo',
    '--coverage', 'research/demo-coverage-1.json,research/demo-coverage-2.json', '--contracts', 'research/demo-contract-*.json'];
  let snapshot = gateReviewSnapshot(f.ctx, f.gates, f.stages);
  for (const name of ['demo-coverage-1.json', 'demo-coverage-2.json', 'demo-contract-1.json', 'demo-step1-def-supplier.json']) {
    writeFileSync(join(f.repo, 'research', name), '{"changed":true}');
    const next = gateReviewSnapshot(f.ctx, f.gates, f.stages);
    assert.notEqual(next.sha256, snapshot.sha256); snapshot = next;
  }
  writeFileSync(join(f.repo, 'research/demo-owner-observer.json'), '{"updated":true}');
  assert.equal(gateReviewSnapshot(f.ctx, f.gates, f.stages).sha256, snapshot.sha256);
});
test('current Step 7 native certification inputs invalidate stale receipts without a detailed review', t => {
  const f = fixture(t), dir = join(f.repo, 'research/demo-step7-v2');
  mkdirSync(dir);
  const evidence = join(dir, 'current-native-input.json');
  writeFileSync(evidence, '{"nativeInput":"current"}');
  writeFileSync(join(dir, 'certification.json'), JSON.stringify({ evidence: { [evidence]: sha(readFileSync(evidence, 'utf8')) } }));
  f.gates[0].argv = ['node', 'tools/physics-support/step7-workflow.mjs', 'verify-wave', '--run', 'demo'];
  authorizeOwnerGate(f.args); f.receipt();
  writeFileSync(evidence, '{"nativeInput":"changed"}');
  assert.equal(authorizeOwnerGate(f.args).ok, false);
});
test('consumed durable history prevents replay after a crash before request replacement', t => {
  const f = fixture(t);
  authorizeOwnerGate(f.args); f.receipt();
  const requestPath = join(f.config.stateDir, 'owner-gate-request.json');
  const preConsume = readFileSync(requestPath, 'utf8');
  assert.equal(authorizeOwnerGate(f.args).ok, true);
  writeFileSync(requestPath, preConsume);
  assert.equal(authorizeOwnerGate(f.args).ok, false);
  assert.notEqual(JSON.parse(readFileSync(requestPath, 'utf8')).attempt, JSON.parse(preConsume).attempt);
});
test('native execution uses the exact authorized resolved descriptors and stamps a successful complete battery', async t => {
  const f = fixture(t), marker = join(f.repo, 'gate-ran');
  let calls = 0;
  const good = ['node', '-e', `require('fs').writeFileSync(${JSON.stringify(marker)},'authorized')`];
  const gate: any = { id: 'exact', argv: () => ++calls <= 2 ? good : ['node', '-e', 'process.exit(1)'] };
  const stage: any = { id: '3b-author', pattern: /^never$/, units: () => ['all'], plan: () => [], gates: () => [gate] };
  const state = new State(statePath(f.config.stateDir)).init('demo');
  const ex: any = new Executor({ config: f.config, stages: [stage], state,
    adapter: makeExecAdapter({ argv: ['true'], cwd: f.repo }), reporter: new Reporter({ dir: f.config.stateDir }) });
  calls = 0; // Spec validation resolves descriptors before execution begins.
  const statuses = [{ s: stage, st: { why: 'complete' } }];
  assert.equal(await ex.runGroupGates(statuses, f.ctx, [stage]), 'blocked');
  f.receipt();
  assert.equal(await ex.runGroupGates(statuses, f.ctx, [stage]), 'ok');
  assert.equal(calls, 2);
  assert.equal(readFileSync(marker, 'utf8'), 'authorized');
  assert.ok(state.stage(stage.id).gatesPassedAt);
});
test('formatting and metadata passes authorize without proof-review evidence or soundness attestation', t => {
  const f = fixture(t);
  authorizeOwnerGate(f.args); f.receipt();
  const receipt = JSON.parse(readFileSync(join(f.config.stateDir, 'owner-gate-receipt.json'), 'utf8'));
  assert.equal(receipt.recertificationScope, 'formatting-metadata-only');
  assert.ok(receipt.items.every((item: any) => item.review === undefined && item.evidence === undefined && item.verdict !== 'sound'));
  assert.equal(authorizeOwnerGate(f.args).ok, true);
});
test('plan-only gates require separate format and metadata passes without a mathematics review', t => {
  const f = fixture(t);
  const path = join(f.repo, 'research/demo-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(path, 'utf8'));
  pages[0].items = []; writeFileSync(path, JSON.stringify(pages));
  f.args.stages = ['1-drift'];
  authorizeOwnerGate(f.args);
  for (const checks of [undefined, { formatting: { verdict: 'pass', evidence: 'Checked page structure.' } },
    { formatting: { verdict: 'fail', evidence: 'Malformed page structure.' }, metadata: { verdict: 'pass', evidence: 'Checked plan metadata.' } }]) {
    f.receipt(r => r.planChecks = checks);
    assert.equal(authorizeOwnerGate(f.args).ok, false);
  }
  f.receipt(r => r.planChecks = {
    formatting: { verdict: 'pass', evidence: 'Checked current manifest structure and page headings.' },
    metadata: { verdict: 'pass', evidence: 'Checked current page identities, kinds, classification and prerequisites.' } });
  assert.equal(authorizeOwnerGate(f.args).ok, true);
});
