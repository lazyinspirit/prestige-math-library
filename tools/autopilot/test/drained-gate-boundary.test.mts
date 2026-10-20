import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { ownerSupervisedCompactStages } from '../stages/owner-supervised-compact.mts';
import { recertify } from '../../owner-gate-supervision.mjs';

function fixture(t: any, { owner = true, pipeline = false } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'ap-drained-gates-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const stateDir = join(repo, 'state'), dispatchDir = join(repo, 'dispatch');
  for (const dir of ['research', 'state', 'dispatch']) mkdirSync(join(repo, dir));
  const run = 'sample', pages: any[] = [{ id: 'a', kind: 'A', category: 'math', companion: 'b', items: [] }, { id: 'b', kind: 'B', category: 'math', companion: 'a', items: [] }];
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages }));
  writeFileSync(join(repo, 'research', 'sample-batch-1.pages.json'), JSON.stringify(pages));
  let progressed = 0, descriptors = 0, boundary = 0, sawInflight = false;
  const log = join(repo, 'fake-gates.log');
  const source: any = { id: '1-drift', label: 'drift', role: 'worker',
    units: () => ['one'], pattern: /^worker-one\.result\.json$/, plan: () => [],
    onProgress: ({ executor }: any) => { progressed++; sawInflight ||= executor.inflight.size > 0; },
    beforeGates: () => { boundary++; },
    gates: () => { descriptors++; return [{ id: 'fake-gate', argv: ['node', '-e',
      `require('node:fs').appendFileSync(${JSON.stringify(log)}, 'gate\\n');console.log('1 checked')`] }]; } };
  const sources = pipeline ? [{ ...source, pipeline: 'pair' }, { ...source, id: '1-drift-apply', pipeline: 'pair' }] : [source];
  const stages = owner ? ownerSupervisedCompactStages(sources) : sources;
  const state = new State(statePath(stateDir)).init(run);
  const config: any = { run, repo, stateDir, dispatchDir, argv: ['true'], coversMap: {}, adoptCommand: false, dispatchStaggerMs: 0 };
  const ex = new Executor({ config, stages, state, reporter: new Reporter({ dir: stateDir, intervalMs: 1e9, sink: () => {} }),
    adapter: { name: 'unused', describe: () => 'unused', invoke: async () => { throw Error('Unexpected dispatch'); } } });
  progressed = 0; descriptors = 0; boundary = 0;
  const cover = () => writeFileSync(join(dispatchDir, 'worker-one.result.json'), JSON.stringify({ ok: true, covers: ['one'] }));
  const read = (name: string) => JSON.parse(readFileSync(join(stateDir, name), 'utf8'));
  const pending = () => stages.map(s => ({ s, st: ex.stageStatus(s) }));
  return { ex, stages, sources, source, stateDir, cover, read, pending, log,
    counts: () => ({ progressed, descriptors, boundary, sawInflight }) };
}

for (const pipeline of [false, true]) test(`same-tick last worker drains after progress: owner hold precedes all descriptors (pipeline=${pipeline})`, async t => {
  const f = fixture(t, { pipeline });
  // Model the exact gap: both owner progress checks see a live final worker;
  // its receipt and process teardown arrive in the executor's sleep(0) turn.
  const oldPermit = { run: 'sample', group: 'already-consumed-step3', request_id: 'old', consumed_at: 'yesterday' };
  writeFileSync(join(f.stateDir, 'owner-gate-permission.json'), JSON.stringify(oldPermit));
  writeFileSync(join(f.stateDir, 'owner-gate-request.json'), JSON.stringify({ run: 'sample', id: 'old', group: oldPermit.group, stages: ['3-old'] }));
  f.ex.inflight.set('last', { meta: { stage: f.stages[0].id, label: 'one', role: 'worker', covers: ['one'] },
    startedAt: Date.now(), promise: new Promise(() => {}) });
  const original = f.stages[0].onProgress;
  f.stages[0].onProgress = async (args: any) => {
    await original(args);
    setTimeout(() => { f.cover(); f.ex.inflight.delete('last'); }, 0);
  };
  assert.equal(await f.ex.tick(), 'working');
  assert.equal(f.ex.state.paused, true);
  assert.equal(f.ex.inflight.size, 0);
  assert.deepEqual(f.counts(), { progressed: f.stages.length, descriptors: 0, boundary: 0, sawInflight: true });
  assert.equal(existsSync(f.log), false);
  const request = f.read('owner-gate-request.json');
  assert.equal(request.group, f.stages.map(s => s.id).join('+'));
  assert.deepEqual(f.read('owner-gate-permission.json'), oldPermit);
  for (const s of f.stages) assert.equal(f.ex.state.data.stages[s.id]?.gatesPassedAt ?? null, null);
  // Planning-only fixture grants a genuine exact-fingerprint permission.
  recertify({ ...f.ex.ctx(), stateDir: f.stateDir }, { resolveEscalations: true });
  f.ex.state.paused = false;
  assert.equal(await f.ex.tick(), 'working');
  assert.equal(await f.ex.tick(), 'done');
  assert.equal(f.counts().descriptors, f.stages.length);
  assert.equal(f.counts().boundary, f.stages.length);
  assert.ok(f.read('owner-gate-permission.json').consumed_at);
  assert.equal(f.read('owner-gate-request.json').id, request.id);
  assert.equal(readFileSync(f.log, 'utf8'), 'gate\n'); // identical pipeline descriptor deduplicated
  for (const s of f.stages) assert.ok(f.ex.state.data.stages[s.id].gatesPassedAt);
});

test('stages without the optional hook retain their default gate behavior', async t => {
  const f = fixture(t, { owner: false });
  delete f.stages[0].beforeGates; f.cover();
  assert.equal(await f.ex.tick(), 'working');
  assert.equal(await f.ex.tick(), 'done');
  assert.equal(f.counts().progressed, 1); assert.equal(f.counts().descriptors, 1);
  assert.equal(existsSync(join(f.stateDir, 'owner-gate-request.json')), false);
});

test('inflight, adopted, refresh and paused barriers prevent boundary hooks and descriptors', async t => {
  for (const barrier of ['inflight', 'adopted', 'refresh', 'paused']) {
    const f = fixture(t, { owner: false }); f.cover();
    if (barrier === 'inflight') f.ex.inflight.set('live', { meta: { stage: f.stages[0].id, covers: ['one'] } } as any);
    if (barrier === 'adopted') f.ex.liveDispatchLabels = () => [{ label: 'external', covers: ['one'] }];
    if (barrier === 'refresh') f.ex.pendingRefreshes = () => [{ id: 'pending' }] as any;
    if (barrier === 'paused') f.ex.state.paused = true;
    assert.equal(await f.ex.runGroupGates(f.pending(), f.ex.ctx(), f.stages), 'working', barrier);
    assert.equal(f.counts().boundary, 0, barrier); assert.equal(f.counts().descriptors, 0, barrier);
  }
});

test('boundary pause or failure in later pipeline member prevents every descriptor', async t => {
  for (const failure of [false, true]) {
    const f = fixture(t, { owner: false, pipeline: true }); f.cover();
    f.stages[1].beforeGates = ({ executor }: any) => { if (failure) throw Error('boundary defect'); executor.state.paused = true; };
    assert.equal(await f.ex.tick(), failure ? 'blocked' : 'working');
    assert.equal(f.counts().descriptors, 0); assert.equal(f.counts().progressed, 2);
    if (failure) assert.match(f.ex.state.data.blockers[0].message, /pre-gate handoff failed: boundary defect/);
  }
});

test('async boundary cannot admit newly active work or invalidated unit coverage', async t => {
  for (const change of ['work', 'coverage']) {
    const f = fixture(t, { owner: false }); f.cover();
    f.stages[0].beforeGates = async () => {
      await Promise.resolve();
      if (change === 'work') f.ex.inflight.set('new', { meta: { stage: f.stages[0].id, covers: ['one'] } } as any);
      else rmSync(join(f.ex.config.dispatchDir, 'worker-one.result.json'));
    };
    assert.equal(await f.ex.runGroupGates(f.pending(), f.ex.ctx(), f.stages), 'working');
    assert.equal(f.counts().descriptors, 0);
  }
});

test('completed and waived members do not repeat boundary hooks', async t => {
  for (const waived of [false, true]) {
    const f = fixture(t, { owner: false }); f.cover();
    if (waived) f.stages[0].gatesWaived = 'Fixture coverage';
    else f.ex.state.stage(f.stages[0].id).gatesPassedAt = new Date().toISOString();
    assert.equal(await f.ex.runGroupGates(f.pending(), f.ex.ctx(), f.stages), 'ok');
    assert.equal(f.counts().boundary, 0); assert.equal(f.counts().descriptors, 0);
  }
});

test('owner boundary rechecks inherited source hook input changes before permission consumption', async t => {
  const f = fixture(t); f.cover();
  assert.equal(await f.ex.tick(), 'working');
  recertify({ ...f.ex.ctx(), stateDir: f.stateDir }, { resolveEscalations: true });
  const plan = join(f.ex.config.repo, 'research', 'plan-spec.json');
  f.source.beforeGates = async () => { writeFileSync(plan, readFileSync(plan, 'utf8') + '\n'); };
  f.ex.state.paused = false;
  assert.equal(await f.ex.tick(), 'working');
  assert.equal(f.ex.state.paused, true);
  assert.equal(f.counts().descriptors, 0);
  assert.equal(f.read('owner-gate-permission.json').consumed_at, null);
});

test('an opted-in boundary requires current complete units before calling its hook', async t => {
  const f = fixture(t, { owner: false });
  assert.equal(await f.ex.runGroupGates(f.pending(), f.ex.ctx(), f.stages), 'working');
  assert.equal(f.counts().boundary, 0); assert.equal(f.counts().descriptors, 0);
});
