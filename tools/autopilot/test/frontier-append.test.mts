import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, existsSync, rmSync, cpSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { appendFrontier, appendStages, checkAppendReview, applyAppendReview, recoverAppendItemOrder, sealAppendReviewRefresh } from '../src/frontier-append.mts';
import { unsatisfiableEdges } from '../src/frontier.mts';
import { writeManifests } from '../../plan-manifests.mjs';
import { Executor } from '../src/executor.mts';
import { MAX_RUN_PAIRS } from '../src/capacity.mjs';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';

const AT = '2026-10-09T00:00:00.000Z';
function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'native-frontier-append-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const research = join(repo, 'research'), stateDir = join(repo, '.autopilot', 'demo');
  mkdirSync(research); mkdirSync(stateDir, { recursive: true }); mkdirSync(join(repo, 'library'));
  const pages: any[] = [], ledgerPages: any[] = [];
  const pair = (id: string, order: number, deps: string[] = []) => [
    { id, kind: 'A', category: 'math', title: id, order, companion: `${id}-examples`, requires: deps, items: [] },
    { id: `${id}-examples`, kind: 'B', category: 'math', title: `${id} examples`, order: order + 0.1, companion: id, requires: [id], items: [] },
  ];
  for (let n = 1; n <= 28; n++) {
    const pp = pair(`old-${n}`, 100 + n);
    pages.push(...pp);
    const populated = pp.map((p, i) => ({ ...p, items: [{ id: `def-original-${n}-${i}`, kind: 'definition', statement: `Reviewed statement ${n}/${i}`, deps: [] }] }));
    writeFileSync(join(research, `demo-batch-${n}.pages.json`), JSON.stringify(populated, null, 3) + '\n');
    ledgerPages.push(...pp.map(p => ({ id: p.id, kind: p.kind, batch: String(n) })));
    writeFileSync(join(research, `demo-beta-${n}.task.md`), `original beta task ${n}\n`);
  }
  pages.push(...pair('new-a', 10), ...pair('new-b', 20, ['new-a']), ...pair('new-c', 30));
  writeFileSync(join(research, 'plan-spec.json'), JSON.stringify({ pages }));
  writeFileSync(join(research, 'demo-scope-ledger.json'), JSON.stringify({ run: 'demo', baseline_commit: 'old-commit', pages: ledgerPages, allow_in_run_dependencies: true }));
  writeFileSync(join(research, 'demo-covers.json'), JSON.stringify({ 'beta-batch-1': ['1'], 'legacy-reader': ['28'] }));
  writeFileSync(join(research, 'demo-alpha-step1-drift.md'), pages.filter(p => p.kind === 'A' && p.id.startsWith('old-')).map(p => `### ${p.id}\nVERDICT: no-drift\n`).join('\n'));
  writeFileSync(join(research, 'demo-alpha-step1-drift.task.md'), 'Original scope, old 28 pairs.\n');
  writeFileSync(join(research, 'demo-drift-evidence.json'), JSON.stringify({ old: true }));
  const stamp = { enteredAt: AT, gatesPassedAt: AT, doneAt: AT, fixRounds: 0 };
  const state = { version: 1, run: 'demo', startedAt: AT, finishedAt: null, stage: '1-scaffold', paused: true,
    dispatches: {}, blockers: [{ stage: '1-scaffold', message: 'old readiness hold', at: AT }], stages: { '1-drift': stamp, '1-drift-apply': stamp, '1-scaffold': { enteredAt: AT, gatesPassedAt: null, doneAt: null, fixRounds: 0 } } };
  writeFileSync(statePath(stateDir), JSON.stringify(state));
  const invoke = (args: string[]) => {
    if (args[0] === 'tools/manifest-integrity.mjs') {
      const owed = readdirSync(research).filter(n => /^demo-batch-\d+\.pages\.json$/.test(n)).flatMap(n => {
        const batch = /^demo-batch-(\d+)/.exec(n)![1]; return JSON.parse(readFileSync(join(research, n), 'utf8')).map((p: any) => ({ id: p.id, kind: p.kind, batch }));
      });
      writeFileSync(join(research, 'demo-scope-ledger.json'), JSON.stringify({ run: 'demo', baseline_commit: 'old-commit', allow_in_run_dependencies: true, pages: owed }));
    } else if (args[0] === 'tools/run-tasks.mjs') {
      for (const n of readdirSync(research).filter(n => /^demo-batch-\d+\.pages\.json$/.test(n))) {
        const batch = /^demo-batch-(\d+)/.exec(n)![1]; writeFileSync(join(research, `demo-beta-${batch}.task.md`), `normal regenerated task ${batch}`);
      }
      writeFileSync(join(research, 'demo-alpha-step1-drift.task.md'), 'This attempted regeneration must not retarget old drift.');
    } else throw new Error('unexpected normal tool');
  };
  const options: any = { repo, run: 'demo', stateDir, pairs: ['new-a', 'new-b'], allowInRunDependencies: true,
    evidence: (_r: string, ids: string[]) => ids.map(id => ({ id, assignedDesign: true })), buildability: unsatisfiableEdges,
    scan: () => ({ controller: [], preflight: [], writer: [] }), invoke, now: () => new Date(AT) };
  const bytes = (p: string) => readFileSync(join(research, p));
  return { repo, research, stateDir, state, options, bytes, invoke };
}

test('append preserves all 28 populated manifests, state and original review attribution', t => {
  const f = fixture(t), before = Array.from({ length: 28 }, (_, n) => f.bytes(`demo-batch-${n + 1}.pages.json`));
  const state = readFileSync(statePath(f.stateDir)), report = f.bytes('demo-alpha-step1-drift.md'), task = f.bytes('demo-alpha-step1-drift.task.md');
  const e = appendFrontier(f.options);
  assert.deepEqual(e.batches, ['29', '30']);
  for (let n = 0; n < 28; n++) assert.deepEqual(f.bytes(`demo-batch-${n + 1}.pages.json`), before[n]);
  assert.deepEqual(readFileSync(statePath(f.stateDir)), state);
  assert.deepEqual(f.bytes('demo-alpha-step1-drift.md'), report); assert.deepEqual(f.bytes('demo-alpha-step1-drift.task.md'), task);
  const ledger = JSON.parse(f.bytes('demo-scope-ledger.json').toString()); assert.equal(ledger.pages.length, 60); assert.equal(ledger.baseline_commit, 'old-commit');
  const covers = JSON.parse(f.bytes('demo-covers.json').toString()); assert.deepEqual(covers['legacy-reader'], ['28']); assert.deepEqual(covers['beta-batch-30'], ['30']);
  assert.ok(readFileSync(join(f.repo, e.task), 'utf8').includes('Review ONLY'));
  assert.ok(readFileSync(join(f.repo, e.task), 'utf8').includes('--run demo'));
  assert.ok(existsSync(join(f.repo, e.archive, 'preimages', 'demo-batch-28.pages.json')));
});

test('duplicate/unsafe IDs, late/unpaused state and active writers fail before mutation', t => {
  for (const change of [
    { pairs: ['old-1'] }, { pairs: ['new-a', 'new-a'] }, { pairs: ['../new-a'] }, { pairs: ['new-a-examples'] },
    { scan: () => ({ controller: [], preflight: [], writer: [123] }) },
  ]) {
    const f = fixture(t), before = f.bytes('demo-batch-1.pages.json');
    assert.throws(() => appendFrontier({ ...f.options, ...change })); assert.deepEqual(f.bytes('demo-batch-1.pages.json'), before); assert.equal(existsSync(join(f.research, 'demo-batch-29.pages.json')), false);
  }
  for (const stateChange of [{ paused: false }, { stage: '2-assign' }, { dispatches: { pending: { startedAt: AT, endedAt: null } } }]) {
    const f = fixture(t); writeFileSync(statePath(f.stateDir), JSON.stringify({ ...f.state, ...stateChange }));
    assert.throws(() => appendFrontier(f.options)); assert.equal(existsSync(join(f.research, 'demo-batch-29.pages.json')), false);
  }
});

test('cap and combined buildability are checked rather than bypassed', t => {
  const f = fixture(t);
  assert.throws(() => appendFrontier({ ...f.options, pairs: Array.from({ length: MAX_RUN_PAIRS - 28 + 1 }, (_, n) => `extra-${n}`) }), new RegExp(String(MAX_RUN_PAIRS)));
  assert.throws(() => appendFrontier({ ...f.options, buildability: () => [{ requires: 'missing' }] }), /unbuildable/);
});

test('normal tool failure rolls back only appended/generated metadata and retains evidence', t => {
  const f = fixture(t), manifest = f.bytes('demo-batch-1.pages.json'), ledger = f.bytes('demo-scope-ledger.json'), state = readFileSync(statePath(f.stateDir));
  assert.throws(() => appendFrontier({ ...f.options, invoke: () => { throw new Error('normal generator failed'); } }), /generator failed/);
  assert.deepEqual(f.bytes('demo-batch-1.pages.json'), manifest); assert.deepEqual(f.bytes('demo-scope-ledger.json'), ledger); assert.deepEqual(readFileSync(statePath(f.stateDir)), state);
  assert.equal(existsSync(join(f.research, 'demo-batch-29.pages.json')), false);
  assert.ok(existsSync(join(f.research, 'demo-frontier-append-1', 'failed.json')));
  assert.equal(existsSync(join(f.stateDir, 'frontier-append.lock')), false);
});

test('saved Step1 completion cannot cover fresh append drift or launch scaffold first', t => {
  const f = fixture(t); appendFrontier(f.options);
  const base: any[] = [
    { id: '1-drift', label: 'old drift', units: () => ['drift'], pattern: /^alpha-drift-review\.result\.json$/, gates: () => [{ id: 'old', argv: ['true'] }] },
    { id: '1-drift-apply', label: 'old apply', units: () => ['all'], pattern: /^tool-drift-apply\.result\.json$/, gates: () => [{ id: 'old', argv: ['true'] }] },
    { id: '1-scaffold', label: 'scaffold', units: () => ['1', '29'], pattern: /^beta-batch-\d+\.result\.json$/, gates: () => [{ id: 'scope', argv: ['true'] }] },
  ];
  const table = appendStages(base, { repo: f.repo, run: 'demo' });
  assert.deepEqual(table.map(s => s.id), ['1-drift', '1-drift-apply', '1-append-drift-1', '1-append-apply-1', '1-scaffold']);
  const baseline = { id: '1-baseline', label: 'immutable baseline', gatesWaived: 'Existing snapshot' };
  const withBaseline = appendStages([...base.slice(0, 2), baseline, base[2]], { repo: f.repo, run: 'demo' });
  assert.deepEqual(withBaseline.map(s => s.id), ['1-drift', '1-drift-apply', '1-baseline', '1-append-drift-1', '1-append-apply-1', '1-scaffold']);
  assert.equal(withBaseline[2], baseline);
  assert.equal(withBaseline[3].gates!({ repo: f.repo, run: 'demo' } as any).length, 5);
  assert.throws(() => appendStages([...base.slice(0, 2), { id: 'unrelated' }, base[2]], { repo: f.repo, run: 'demo' }), /unsupported/);
  const gates = table[2].gates!({ repo: f.repo, run: 'demo' } as any);
  assert.equal(gates.length, 5);
  assert.equal(gates[0].id, 'append-refresh-receipt');
  assert.equal(gates[1].id, 'append-frontier-metadata-recertify');
  assert.equal(table[3].gates!({ repo: f.repo, run: 'demo' } as any)[0].id, 'append-frontier-metadata-recertify');
  assert.ok(gates.some((g: any) => g.argv.includes('--pages-file') && g.argv.includes('tools/validate-plan.mjs')));
  assert.ok(gates.filter((g: any) => g.argv.includes('tools/validate-plan.mjs')).every((g: any) => g.argv.includes('--pages-file') && !g.argv.includes('--run')));
  assert.ok(!table[3].gates!({ repo: f.repo, run: 'demo' } as any).some((g: any) => g.argv.includes('--before-apply')));
  const planned = gates.find((g: any) => g.argv.includes('--pages-file'))!;
  const plannedArgv = typeof planned.argv === 'function' ? planned.argv() : planned.argv;
  assert.ok(!plannedArgv.includes('--run'));
  assert.deepEqual(JSON.parse(readFileSync(join(f.repo, plannedArgv.at(-1)!), 'utf8')), ['new-a', 'new-a-examples', 'new-b', 'new-b-examples']);
  const dispatchDir = join(f.research, 'demo-dispatch'); mkdirSync(dispatchDir);
  writeFileSync(join(dispatchDir, 'alpha-drift-review.result.json'), JSON.stringify({ ok: true, covers: ['drift'] }));
  const ex = new Executor({ config: { run: 'demo', repo: f.repo, stateDir: f.stateDir, dispatchDir, argv: ['true'], adoptCommand: false },
    stages: table, state: new State(statePath(f.stateDir)), reporter: new Reporter({ dir: f.stateDir, intervalMs: 1e9, sink: () => {} }),
    adapter: { name: 'unused', describe: () => '', invoke: async () => ({ ok: true, code: 0, error: null }) } });
  assert.equal(ex.currentStage().stage?.id, '1-append-drift-1');
  assert.deepEqual(ex.stageStatus(table[2]).missing, ['append-1']);
  assert.equal(ex.state.data.stages['1-drift'].doneAt, AT);
});

test('new review is scoped, blocked verdicts fail, and merge requires genuine new receipt', t => {
  const f = fixture(t), e = appendFrontier(f.options), original = f.bytes('demo-alpha-step1-drift.md').toString();
  writeFileSync(join(f.repo, e.report), '### new-a\nVERDICT: drift-blocked\n### new-b\nVERDICT: no-drift\n');
  assert.throws(() => checkAppendReview(f.repo, 'demo', 1), /blocked/);
  writeFileSync(join(f.repo, e.report), '### new-a\nVERDICT: no-drift\n### new-b\nVERDICT: no-drift\n');
  assert.equal(checkAppendReview(f.repo, 'demo', 1).pairs.length, 2);
  assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /fresh successful native/);
  const dir = join(f.research, 'demo-dispatch'); mkdirSync(dir);
  writeFileSync(join(dir, 'alpha-drift-review-append-1.result.json'), JSON.stringify({ run: 'demo', role: 'alpha', label: 'drift-review-append-1', covers: ['append-1'], ok: true, started_at: AT }));
  const planPath = join(f.research, 'plan-spec.json'), plan = JSON.parse(readFileSync(planPath, 'utf8'));
  const oldInventories = Array.from({ length: 28 }, (_, n) => JSON.parse(f.bytes(`demo-batch-${n + 1}.pages.json`).toString()).map((p: any) => ({ id: p.id, items: p.items })));
  for (const p of plan.pages.filter((p: any) => /^old-[1-4](?:-examples)?$/.test(p.id))) p.order += 100;
  writeFileSync(planPath, JSON.stringify(plan));
  applyAppendReview(f.repo, 'demo', 1);
  for (let n = 0; n < 28; n++) {
    const actual = JSON.parse(f.bytes(`demo-batch-${n + 1}.pages.json`).toString());
    assert.deepEqual(actual.map((p: any) => ({ id: p.id, items: p.items })), oldInventories[n]);
    for (const p of actual) assert.equal(p.order, plan.pages.find((q: any) => q.id === p.id).order);
  }
  applyAppendReview(f.repo, 'demo', 1); // native tool retries remain safe
  assert.ok(f.bytes('demo-alpha-step1-drift.md').toString().startsWith(original));
  assert.ok(f.bytes('demo-alpha-step1-drift.md').toString().includes('### new-b'));
});

test('shared manifest writer cannot overwrite an existing target through startAt', t => {
  const f = fixture(t), old = f.bytes('demo-batch-28.pages.json');
  assert.throws(() => writeManifests(f.repo, 'demo', [['new-a']], { startAt: 28 }), /existing manifest/);
  assert.deepEqual(f.bytes('demo-batch-28.pages.json'), old);
});

test('modified archived historical report is refused before merge or inventory/state mutation', t => {
  const f = fixture(t), e = appendFrontier(f.options);
  writeFileSync(join(f.repo, e.report), '### new-a\nVERDICT: no-drift\n### new-b\nVERDICT: no-drift\n');
  const dir = join(f.research, 'demo-dispatch'); mkdirSync(dir);
  writeFileSync(join(dir, 'alpha-drift-review-append-1.result.json'), JSON.stringify({ run: 'demo', role: 'alpha', label: 'drift-review-append-1', covers: ['append-1'], ok: true, started_at: AT }));
  const report = f.bytes('demo-alpha-step1-drift.md'), state = readFileSync(statePath(f.stateDir));
  const manifests = Array.from({ length: 30 }, (_, n) => f.bytes(`demo-batch-${n + 1}.pages.json`));
  writeFileSync(join(f.repo, e.originalReport), 'Altered historical review.\n');
  assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /archived original drift report differs/);
  assert.deepEqual(f.bytes('demo-alpha-step1-drift.md'), report);
  assert.deepEqual(readFileSync(statePath(f.stateDir)), state);
  for (let n = 0; n < 30; n++) assert.deepEqual(f.bytes(`demo-batch-${n + 1}.pages.json`), manifests[n]);
  assert.equal(existsSync(join(f.repo, e.archive, 'review-applied.json')), false);
});

test('guarded recovery permits only item-array order and preserves authentic preimages', t => {
  const f = fixture(t), path = join(f.research, 'demo-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(path, 'utf8'));
  pages[0].items.push({ ...pages[0].items[0], id: 'def-original-extra' });
  writeFileSync(path, JSON.stringify(pages));
  const e = appendFrontier(f.options), archived = readFileSync(join(f.repo, e.preimages.find((p: any) => p.path.endsWith('batch-1.pages.json')).archive));
  pages[0].items.reverse(); writeFileSync(path, JSON.stringify(pages, null, 2));
  writeFileSync(join(f.repo, e.report), '### new-a\nVERDICT: no-drift\n### new-b\nVERDICT: no-drift\n');
  const dir = join(f.research, 'demo-dispatch'); mkdirSync(dir);
  writeFileSync(join(dir, 'alpha-drift-review-append-1.result.json'), JSON.stringify({ run: 'demo', role: 'alpha', label: 'drift-review-append-1', covers: ['append-1'], ok: true, started_at: AT }));
  assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /prior manifest changed/);
  const receipt = recoverAppendItemOrder(f.repo, 'demo', 1, f.stateDir, f.options.scan);
  assert.equal(receipt.records.length, 1); assert.equal(receipt.mathematicalRepairOrCounterReset, false);
  assert.deepEqual(readFileSync(join(f.repo, e.preimages.find((p: any) => p.path.endsWith('batch-1.pages.json')).archive)), archived);
  const result = applyAppendReview(f.repo, 'demo', 1);
  assert.ok(result.itemOrderRecoverySha256);
  assert.deepEqual(JSON.parse(readFileSync(path, 'utf8'))[0].items, pages[0].items);
});

test('order recovery rejects changed mathematics, page fields and tampered archived data', t => {
  const f = fixture(t), e = appendFrontier(f.options), path = join(f.research, 'demo-batch-1.pages.json');
  writeFileSync(join(f.repo, e.report), '### new-a\nVERDICT: no-drift\n### new-b\nVERDICT: no-drift\n');
  const original = readFileSync(path), pages = JSON.parse(original.toString());
  pages[0].items[0].statement = 'Different mathematics'; writeFileSync(path, JSON.stringify(pages));
  assert.throws(() => recoverAppendItemOrder(f.repo, 'demo', 1, f.stateDir, f.options.scan), /change item objects or page fields/);
  const reordered = JSON.parse(original.toString()); reordered[0].order += 1; writeFileSync(path, JSON.stringify(reordered));
  assert.throws(() => recoverAppendItemOrder(f.repo, 'demo', 1, f.stateDir, f.options.scan), /change item objects or page fields/);
  writeFileSync(path, original);
  const archived = e.preimages.find((p: any) => p.path.endsWith('batch-1.pages.json')).archive;
  writeFileSync(join(f.repo, archived), '[]');
  assert.throws(() => recoverAppendItemOrder(f.repo, 'demo', 1, f.stateDir, f.options.scan), /archived manifest differs/);
  assert.equal(existsSync(join(f.repo, e.archive, 'item-order-recovery.json')), false);
});

test('normal CLI appends through actual ledger/task tools without replacing populated manifests', t => {
  const f = fixture(t), source = process.cwd();
  cpSync(join(source, 'tools'), join(f.repo, 'tools'), { recursive: true });
  cpSync(join(source, 'briefs'), join(f.repo, 'briefs'), { recursive: true });
  const before = Array.from({ length: 28 }, (_, n) => f.bytes(`demo-batch-${n + 1}.pages.json`));
  const result = spawnSync(process.execPath, ['tools/tsx-run.mjs', 'tools/autopilot/bin/autopilot.mts', 'plan', '--append', '--run', 'demo', '--state-dir', f.stateDir, '--pairs', 'new-a,new-b', '--allow-in-run-dependencies'], { cwd: f.repo, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr + result.stdout);
  for (let n = 0; n < 28; n++) assert.deepEqual(f.bytes(`demo-batch-${n + 1}.pages.json`), before[n]);
  assert.equal(JSON.parse(f.bytes('demo-scope-ledger.json').toString()).pages.length, 60);
  assert.ok(existsSync(join(f.research, 'demo-beta-30.task.md')));
});

test('primary recovery CLI does not mistake its own launcher for a target writer', t => {
  const f = fixture(t), source = process.cwd(), path = join(f.research, 'demo-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(path, 'utf8'));
  pages[0].items.push({ ...pages[0].items[0], id: 'def-original-extra' });
  writeFileSync(path, JSON.stringify(pages));
  const e = appendFrontier(f.options);
  pages[0].items.reverse(); writeFileSync(path, JSON.stringify(pages));
  writeFileSync(join(f.repo, e.report), '### new-a\nVERDICT: no-drift\n### new-b\nVERDICT: no-drift\n');
  cpSync(join(source, 'tools'), join(f.repo, 'tools'), { recursive: true });
  const result = spawnSync(process.execPath, ['tools/tsx-run.mjs', 'tools/autopilot/bin/autopilot.mts', 'recover-item-order', '--run', 'demo', '--generation', '1', '--state-dir', f.stateDir], { cwd: f.repo, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /APPEND_ORDER_RECOVERY 1 manifest/);
});


test('explicit append-review refresh masks historical success and binds fresh native review bytes', async t => {
  const f = fixture(t), entry = appendFrontier(f.options);
  mkdirSync(join(f.repo, 'briefs'));
  writeFileSync(join(f.repo, 'briefs/alpha-drift.md'), 'Native drift review.');
  const dispatchDir = join(f.research, 'demo-dispatch'); mkdirSync(dispatchDir);
  const oldPath = join(dispatchDir, 'alpha-drift-review-append-1.result.json');
  const old = JSON.stringify({ run: 'demo', role: 'alpha', label: 'drift-review-append-1',
    covers: ['append-1'], ok: true, started_at: AT });
  writeFileSync(oldPath, old);
  const base: any[] = [
    { id: '1-drift', label: 'drift', units: () => ['all'], pattern: /^old-drift-/, plan: () => [], gates: () => [{ id: 'old', argv: ['true'] }] },
    { id: '1-drift-apply', label: 'apply', units: () => ['all'], pattern: /^old-apply-/, plan: () => [], gates: () => [{ id: 'old', argv: ['true'] }] },
    { id: '1-scaffold', label: 'author', units: () => ['1'], pattern: /^beta-/, plan: () => [], gates: () => [{ id: 'author', argv: ['true'] }] },
  ];
  const stages = appendStages(base, { repo: f.repo, run: 'demo' });
  const stage = stages.find(s => s.id === '1-append-drift-1')!;
  const state = new State(statePath(f.stateDir)); state.stage(stage.id);
  const ex = new Executor({ config: { repo: f.repo, run: 'demo', stateDir: f.stateDir, dispatchDir,
    argv: ['true'], coversMap: {}, adoptCommand: false, dispatchStaggerMs: 0, maxAttempts: 2 } as any,
    stages, state, reporter: new Reporter({ dir: f.stateDir, intervalMs: 10 ** 9, sink: () => {} }),
    adapter: { name: 'pending', describe: () => 'pending', invoke: () => new Promise(() => {}) } });
  ex.requestNativeRefresh({ command: 'refresh', run: 'demo', stage: stage.id, unit: 'append-1',
    reason: 'Review corrected A3 scope only', requestId: 'new-review' });
  assert.equal(ex.stageCoverage(stage).has('append-1'), false);
  assert.equal(ex.stageStatus(stage).unitsDone, false);
  const request = ex.state.data.nativeRefreshes![0];
  assert.equal(request.plan.role, 'alpha'); assert.equal(request.plan.job, 'verification');
  assert.ok(String(request.plan.task).includes('refresh-new-review.task.md'));
  await ex.dispatchStage(stage, ex.ctx());
  assert.equal(ex.inflight.size, 1);
  writeFileSync(join(f.repo, entry.report), '### new-a\nVERDICT: no-drift\n### new-b\nVERDICT: no-drift\n');
  assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /must be sealed/,
    'historical success cannot apply the new mutable report');
  const freshPath = join(dispatchDir, `alpha-${request.plan.label}.result.json`);
  const fresh = { run: 'demo', role: 'alpha', label: request.plan.label, covers: ['append-1'], ok: true,
    started_at: new Date(Date.parse(request.requestedAt) + 1).toISOString(),
    ended_at: new Date(Date.parse(request.requestedAt) + 2).toISOString() };
  writeFileSync(freshPath, JSON.stringify({ ...fresh, started_at: AT }));
  assert.throws(() => sealAppendReviewRefresh(f.repo, 'demo', 1), /exact fresh/);
  writeFileSync(freshPath, JSON.stringify(fresh));
  const seal = sealAppendReviewRefresh(f.repo, 'demo', 1);
  assert.equal(seal.label, request.plan.label);
  assert.equal(ex.stageCoverage(stage).has('append-1'), true);
  assert.equal(readFileSync(oldPath, 'utf8'), old);
  const taskPath = join(f.repo, String(request.plan.task)), task = readFileSync(taskPath, 'utf8');
  writeFileSync(taskPath, task + '\nChanged task');
  assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /task changed/);
  writeFileSync(taskPath, task);
  writeFileSync(freshPath, JSON.stringify({ ...fresh, exit_code: 0 }));
  assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /sealed append refresh inputs changed/);
  writeFileSync(freshPath, JSON.stringify(fresh));
  const report = readFileSync(join(f.repo, entry.report), 'utf8');
  writeFileSync(join(f.repo, entry.report), report + '\nChanged review');
  assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /sealed append refresh inputs changed/);
  writeFileSync(join(f.repo, entry.report), report);
  const applied = applyAppendReview(f.repo, 'demo', 1);
  assert.equal(applied.refresh.reportSha256, seal.reportSha256);
  assert.equal(readFileSync(oldPath, 'utf8'), old);
});


test('exact owner authoring recovery retains new helpers and repaired old rows through native SYNC and retry', t => {
  const f = fixture(t), e = appendFrontier(f.options);
  const hash = (raw: any) => createHash('sha256').update(raw).digest('hex');
  const put = (path: string, value: any) => {
    const raw = typeof value === 'string' ? value : JSON.stringify(value);
    writeFileSync(join(f.repo, path), raw); return { path, sha256: hash(raw) };
  };
  mkdirSync(join(f.repo, 'items'));
  const path = 'research/demo-batch-1.pages.json';
  const original = e.preimages.find((row: any) => row.path === path);
  const originalBytes = readFileSync(join(f.repo, original.archive));
  const pages = JSON.parse(f.bytes('demo-batch-1.pages.json').toString());
  pages[0].items[0].statement = 'Actual authorized repaired statement';
  pages[0].items.push({ id: 'lem-actual-new-helper', kind: 'lemma', statement: 'New completed helper', deps: [] });
  const current = put(path, pages);
  const ids = [pages[0].items[0].id, 'lem-actual-new-helper'];
  const contract = put('research/demo-batch-1.proof-contracts.json', { scope: ids, contracts: Object.fromEntries(ids.map(id => [id, {}])) });
  const repair_evidence = put('research/delegated-authoring-repair.md', 'Actual authoring evidence; not a new native review.');
  const items = ids.map((id, index) => ({ page: pages[0].id, id, change: index ? 'added' : 'updated', reason: 'Authorized actual source repair',
    source: put(`items/${id}.md`, `---\nid: ${id}\n---\nCurrent carrier\n`), contract, repair_evidence }));
  const records = [{ path, original: { path: original.archive, sha256: original.sha256 }, current_sha256: current.sha256, items }];
  const evidence = put('research/owner-retain-authoring.json', { run: 'demo', number: 1, owner: true,
    decision: 'retain-authoring', reason: 'Retain genuine concurrent authoring without proof/review credit', records });
  const recovery = put(`${e.archive}/owner-manifest-authoring-recovery.json`, { version: 1, policy: 'owner-retained-append-manifest-authoring',
    run: 'demo', number: 1, authorized_by: 'owner', owner_identity: '/root', authorized_at: AT, reason: 'Actual authorized changes',
    entry_sha256: hash(JSON.stringify(e)), records, evidence });
  put(e.report, '### new-a\nVERDICT: no-drift\n### new-b\nVERDICT: no-drift\n');
  mkdirSync(join(f.research, 'demo-dispatch'));
  put('research/demo-dispatch/alpha-drift-review-append-1.result.json', { run: 'demo', role: 'alpha', label: 'drift-review-append-1',
    covers: ['append-1'], ok: true, started_at: AT });
  const receipt = applyAppendReview(f.repo, 'demo', 1);
  assert.equal(receipt.ownerManifestRecoverySha256, recovery.sha256);
  assert.deepEqual(JSON.parse(f.bytes('demo-batch-1.pages.json').toString()).map((p: any) => p.items), pages.map((p: any) => p.items));
  assert.deepEqual(readFileSync(join(f.repo, original.archive)), originalBytes);
  assert.equal(applyAppendReview(f.repo, 'demo', 1).ownerManifestRecoverySha256, recovery.sha256);
});
