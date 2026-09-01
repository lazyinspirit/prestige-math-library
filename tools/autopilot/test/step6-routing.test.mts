// Active Step 6: pipeline overlap, exact refuter coverage, routed decisions,
// ledger ownership, and legacy-run cutover safety.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

import { step6Stages, hasLegacyStep6Cutover } from '../stages/mathlib.step6.mts';
import { Executor } from '../src/executor.mts';
import { itemHashGuard } from '../../item-hash.mjs';

const REPO = join(import.meta.dirname, '..', '..', '..');
const gate = (id: string, argv: any, extra: any = {}) => ({ id, argv, ...extra });
const deps = {
  gate,
  repoWide: () => [gate('precheck', ['node', 'x']), gate('splice-verify', ['node', 'y'])],
  contractGates: (_ctx: any, options: any) => [gate('risk-report', ['node', 'r', ...(options?.reviewed ? ['--require-reviewed'] : [])])],
  coverageGates: () => [gate('coverage', ['node', 'c'])],
  policyItemGate: () => gate('content-policy', ['node', 'p']),
  urlGate: () => gate('url-liveness', ['node', 'u']),
  impactGate: () => gate('impact-audit', ['node', 'i']),
  batches: () => ['1', '2', '3'],
  alphaGroups: () => [{ label: 'a', covers: ['1', '2'] }, { label: 'b', covers: ['3'] }],
  alphaCohort: (_ctx: any, unit: string) => ['1', '2'].includes(String(unit)) ? ['1', '2'] : ['3'],
  resultPattern: (role: string, label: string) => new RegExp(`^${role}-(?:${role}-)?(?:${label})\\.result\\.json$`),
  touchesPath: (ctx: any) => `research/${ctx.run}-touches.json`,
  MECHANICAL_REPAIRS: { 'splice-verify': true },
  mechanicalRepair: async () => ({ outcome: 'clean' }),
  isEdgeDecision: async () => false,
  dispatchEdgeAdjudication: () => {},
};
const stages = step6Stages(deps) as any[];
const byId = (id: string) => stages.find((stage) => stage.id === id);
const ordinaryCtx = { run: 'future-run', repo: mkdtempSync(join(tmpdir(), 'step6-ctx-')), dispatchDir: '/tmp/none' };

test('the active stage table contains the rebuilt Step 6 in order', async () => {
  const active = await import('../stages/mathlib.mts');
  const ids = active.stages.map((stage: any) => stage.id);
  const expected = ['6a-baseline', '6a-read', '6a-split', '6a-refute', '6a-collect',
    '6b-adjudicate', '6b-baseline', '6c-edges', '6c-cross', '6d-close'];
  assert.deepEqual(ids.slice(ids.indexOf('6a-baseline'), ids.indexOf('6d-close') + 1), expected);
});

test('every per-batch stage overlaps and waits only for its own batch', () => {
  for (const id of ['6a-baseline', '6a-read', '6a-split', '6a-refute', '6a-collect', '6b-adjudicate']) {
    assert.equal(byId(id).pipeline, 'read', `${id} must stay in the read pipeline`);
  }
  for (const id of ['6a-baseline', '6a-split', '6a-refute', '6a-collect']) {
    assert.deepEqual(byId(id).cohort({}, '2'), ['2'], `${id} must not wait on sibling batches`);
  }
  assert.deepEqual(byId('6b-adjudicate').cohort({}, '1'), ['1', '2']);
});

test('refuter collection precedes Alpha and all outputs are gated', () => {
  assert.ok(stages.indexOf(byId('6a-refute')) < stages.indexOf(byId('6a-collect')));
  assert.ok(stages.indexOf(byId('6a-collect')) < stages.indexOf(byId('6b-adjudicate')));
  const plan = byId('6a-refute').plan({ ...ordinaryCtx, run: 'r' }, ['2'])[0];
  assert.equal(plan.role, 'refuter');
  assert.equal(plan.outputSchema, 'briefs/schemas/refute-report.json');
  assert.equal(plan.resultArtifact, 'research/r-refute-2.json');
  assert.deepEqual(byId('6b-adjudicate').artifacts(ordinaryCtx, '1'),
    ['research/future-run-alpha-a-6b.md', 'research/future-run-alpha-a-6b-decisions.json']);
  const joinGates = byId('6b-adjudicate').gates({ run: 'r' }).map((item: any) => item.id);
  assert.ok(joinGates.includes('step6-routing-adjudicate'));
  const finalGates = byId('6c-cross').gates({ run: 'r' }).map((item: any) => item.id);
  assert.ok(finalGates.includes('step6-routing-final'));
  assert.ok(finalGates.includes('step6-ledger-valid'));
  assert.ok(finalGates.includes('validate-plan'));
  mkdirSync(join(ordinaryCtx.repo, 'research'), { recursive: true });
  writeFileSync(join(ordinaryCtx.repo, 'research', 'r-batch-2.proof-contracts.json'), '{}\n');
  writeFileSync(join(ordinaryCtx.repo, 'research', 'r-reader-findings-2.json'),
    JSON.stringify({ batch: '2', findings: [] }));
  const split = byId('6a-split').plan({ ...ordinaryCtx, run: 'r' }, ['2'])[0];
  assert.deepEqual(split.argv,
    ['node', 'tools/step6-scope.mjs', 'post-reader', '--run', 'r', '--batch', '2']);
  const reconcile = byId('6b-baseline').plan({ ...ordinaryCtx, run: 'r' }, ['all'])[0];
  assert.deepEqual(reconcile.argv,
    ['node', 'tools/step6-scope.mjs', 'post-6b', '--run', 'r']);
  assert.equal(byId('6d-close').artifacts({ ...ordinaryCtx, run: 'r' }, 'all'),
    'research/r-step6-closure.json');
});

test('Step 6 always dispatches canonical prompts, never stale run-specific tasks', () => {
  const reader = byId('6a-read').plan({ ...ordinaryCtx, run: 'r' }, ['2'])[0];
  const alpha6b = byId('6b-adjudicate').plan({ ...ordinaryCtx, run: 'r' }, ['1'])[0];
  const alpha6c = byId('6c-cross').plan({ ...ordinaryCtx, run: 'r' }, ['all'])[0];
  assert.equal(reader.task, 'briefs/tasks/reader.md');
  assert.equal(alpha6b.task, 'briefs/tasks/alpha-6b-routed.md');
  assert.equal(alpha6c.task, 'briefs/tasks/alpha-6c-edges.md');
});

test('split routes invented carrier ids and wrong batch identity to reader recovery', async () => {
  const root = mkdtempSync(join(tmpdir(), 'step6-reader-carrier-'));
  try {
    mkdirSync(join(root, 'research'), { recursive: true });
    mkdirSync(join(root, 'items'), { recursive: true });
    writeFileSync(join(root, 'research', 'r-batch-1.proof-contracts.json'), '{}\n');
    writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
      { id: 'assigned-page', items: [{ id: 'assigned-item' }] },
    ]));
    writeFileSync(join(root, 'research', 'r-reader-findings-1.json'), JSON.stringify({
      batch: '1', coverage_note: 'One uneditable finding.',
      findings: [{ id: 'R1-U1', subject_type: 'page', consumer_id: null,
        location: 'assigned-page / assigned-item / deps', defect: 'ill-formed',
        evidence: 'The dependency list is incomplete.', severity: 'nonfatal' }],
    }));
    const active = await import('../stages/mathlib.mts');
    const splitStage: any = active.stages.find((stage: any) => stage.id === '6a-split');
    const plan = splitStage.plan({ run: 'r', repo: root, dispatchDir: join(root, 'dispatch') }, ['1'])[0];
    assert.equal(plan.role, 'reader');
    assert.equal(plan.label, 'reader-recover-1');
    assert.deepEqual(plan.covers, []);
    assert.equal(plan.resultArtifact, 'research/r-reader-findings-1.json');

    writeFileSync(join(root, 'research', 'r-reader-findings-1.json'), JSON.stringify({
      batch: '23', findings: [], coverage_note: 'No open findings.',
    }));
    const wrongBatch = splitStage.plan({ run: 'r', repo: root,
      dispatchDir: join(root, 'dispatch') }, ['1'])[0];
    assert.equal(wrongBatch.role, 'reader');
    assert.equal(wrongBatch.label, 'reader-recover-1');
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('gate repair dispatch embeds the canonical protocol in its generated task', async () => {
  for (const edge of [false, true]) {
    const root = mkdtempSync(join(tmpdir(), 'step6-gate-task-'));
    try {
      mkdirSync(join(root, 'research'), { recursive: true });
      mkdirSync(join(root, 'briefs', 'tasks'), { recursive: true });
      for (const name of ['alpha-step6-gate.md', 'alpha-step6-edge.md', 'alpha-6c-edges.md']) {
        execFileSync('cp', [join(REPO, 'briefs', 'tasks', name), join(root, 'briefs', 'tasks', name)]);
      }
      let dispatched: any;
      const edgeStages = step6Stages({ ...deps, isEdgeDecision: async () => edge }) as any[];
      const stage = edgeStages.find((entry) => entry.id === '6c-cross');
      await stage.onGateFailure({
        ctx: { run: 'r', repo: root }, stage, round: 1,
        failure: { id: 'proof-contract', why: 'broken proof', output: 'ERROR [thm-example]: gap', liveItems: ['thm-example'] },
        executor: { start(_stage: any, plan: any) { dispatched = plan; } },
      });
      assert.equal(typeof dispatched.task, 'string');
      const generated = readFileSync(join(root, dispatched.task), 'utf8');
      assert.match(generated, /## Canonical repair protocol/);
      assert.match(generated, /# Step 6 gate repair/);
      assert.match(generated, /# Step 6c — cross-batch audit and closure/);
      assert.equal(generated.includes('# Step 6 undeclared-prerequisite repair'), edge);
    } finally { rmSync(root, { recursive: true, force: true }); }
  }
});

test('adjudicating stages budget three tries per named item', () => {
  for (const id of ['6b-adjudicate', '6c-cross']) {
    assert.equal(byId(id).perItemFixBudget, 3);
    assert.equal(byId(id).maxFixRounds, undefined);
    assert.equal(typeof byId(id).onGateFailure, 'function');
  }
});

test('Frontier 18 receipt adopts completed legacy coverage without moving its current stage', async () => {
  const legacyStateDir = join(REPO, '.autopilot-frontier-18-complete-20260825');
  const ctx = { run: 'frontier-18', repo: REPO,
    dispatchDir: join(REPO, 'research/frontier-18-dispatch'), config: { stateDir: legacyStateDir } };
  assert.equal(hasLegacyStep6Cutover(ctx), true);
  for (const id of ['6a-baseline', '6a-split', '6a-refute', '6a-collect', '6c-edges', '6d-close']) {
    assert.deepEqual(byId(id).units(ctx), ['all'], `${id} must adopt completed legacy work`);
    assert.equal(byId(id).artifacts(ctx, 'all'), 'research/frontier-18-step6-cutover.json');
  }
  const active = await import('../stages/mathlib.mts');
  const { Executor } = await import('../src/executor.mts');
  const state = { data: JSON.parse(readFileSync(join(legacyStateDir, 'state.json'), 'utf8')), save() {} };
  const stageBeforeCutoverCheck = state.data.stage;
  const executor = new Executor({
    config: { run: 'frontier-18', repo: REPO, stateDir: legacyStateDir,
      dispatchDir: ctx.dispatchDir, argv: ['true'] } as any,
    stages: active.stages, state, adapter: {} as any,
    reporter: { notify() {}, event() {}, report() {} },
  });
  const after = executor.currentStage().stage?.id;
  const introduced = new Set(['6a-baseline', '6a-split', '6a-refute', '6a-collect', '6c-edges', '6d-close']);
  assert.equal(after === undefined || !introduced.has(after), true,
    `adopting legacy Step 6 evidence must not move the archived ${stageBeforeCutoverCheck} run backward to ${after}`);
});

test('ordinary introduced stages never count the current 6c Alpha result as their own', () => {
  const ctx = { ...ordinaryCtx, run: 'future-run' };
  for (const id of ['6a-baseline', '6a-split', '6a-refute', '6a-collect', '6c-edges', '6d-close']) {
    const pattern = byId(id).pattern(ctx);
    assert.ok(pattern instanceof RegExp);
    assert.equal(pattern.test('alpha-6c-lead.result.json'), false,
      `${id} must not be falsely covered by the current run's lead Alpha`);
  }
  assert.equal(byId('6d-close').pattern(ctx).test('tool-step6-close.result.json'), true);
});

test('item ids are extracted from gate output, not citation labels', () => {
  const named = Executor.itemsNamedBy({
    id: 'proof-contract', ok: false,
    output: 'ERROR [thm-monotone-lattice-paths-in-a-rectangle] step [F1] cites [L3]\n'
      + 'ERROR [lem-every-walk-in-a-simple-graph] step 2.1\nERROR [def-group] short valid id\n'
      + 'ERROR scope [page-not-an-item]: page subject has its own retry accounting\n'
      + 'ERROR citation-source-missing [thm-consumer-item]: F1 cites missing item lem-target-item',
  } as any);
  assert.deepEqual(named.sort(), ['def-group', 'lem-every-walk-in-a-simple-graph', 'page-not-an-item', 'thm-consumer-item',
    'thm-monotone-lattice-paths-in-a-rectangle']);
});

test('legacy validate-plan and impact diagnostics keep per-subject repair budgets', () => {
  const named = Executor.itemsNamedBy({
    id: 'validate-plan', ok: false,
    output: '  [dup-id] thm-compactness-bridge declared on both page-a and page-b\n'
      + '  [kind] page compactness-examples: kind must be "A", "B", "P" or "X"\n'
      + 'ERROR receipt-missing-impact: research/r-impact.json: no disposition for affected item lem-finite-cover-step\n'
      + '  compactness-main (r-batch-2.pages.json): manifest 4 vs plan 3 item(s)\n'
      + 'ERROR splice-refusal: batch 2 topology-bridge declares requires the plan does not — prior-page\n',
  } as any);
  assert.deepEqual(named.sort(), ['compactness-examples', 'compactness-main', 'lem-finite-cover-step',
    'thm-compactness-bridge', 'topology-bridge']);
});

test('Step 6b retry usage cannot consume Step 6c subject allowances', () => {
  const state: any = {
    data: { gateAttempts: {}, stages: {}, blockers: [] },
    save() {},
    addBlocker() { return true; },
  };
  const executor = new Executor({
    config: { run: 'r', repo: ordinaryCtx.repo, stateDir: '.autopilot', dispatchDir: '/tmp/none', argv: ['true'] } as any,
    stages: [], state, adapter: {} as any,
    reporter: { notify() {}, event() {}, report() {} },
  });
  const failure: any = { id: 'precheck', output: 'ERROR proof [thm-example-subject]: broken' };
  for (let i = 0; i < 3; i += 1) {
    assert.deepEqual((executor as any).chargeItems({ id: '6b-adjudicate' }, failure, 3).live,
      ['thm-example-subject']);
  }
  assert.deepEqual((executor as any).chargeItems({ id: '6b-adjudicate' }, failure, 3).spent,
    ['thm-example-subject']);
  assert.deepEqual((executor as any).chargeItems({ id: '6c-cross' }, failure, 3).live,
    ['thm-example-subject']);
});

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'step6-'));
  mkdirSync(join(root, 'research'), { recursive: true });
  mkdirSync(join(root, 'items'), { recursive: true });
  mkdirSync(join(root, 'tools'), { recursive: true });
  mkdirSync(join(root, 'library', 'test'), { recursive: true });
  for (const tool of ['risk-report.mjs']) {
    execFileSync('cp', [join(REPO, 'tools', tool), join(root, 'tools', tool)]);
  }
  const ids = ['lem-ordinary-item', 'thm-touched-high-risk', 'cex-flagged-item'];
  const item = (id: string, high = false) => `---\ntitle: ${id}\ndeps: [${high ? 'a,b,c,d,e,f,g' : ''}]\n---\n## Statement\n${high ? 'There exists a unique object.' : 'A statement.'}\n\n## Proof\n1.1 Done.\n`;
  for (const id of ids) writeFileSync(join(root, 'items', `${id}.md`), item(id, id === 'thm-touched-high-risk'));
  writeFileSync(join(root, 'library', 'test', 'p.md'), '---\npage: p\ntitle: P\n---\n\nFirst summary.\n\nSecond summary.\n');
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([{ id: 'p', category: 'test', items: ids }]));
  writeFileSync(join(root, 'research', 'r-alpha-groups.json'), JSON.stringify([{ label: 'a', covers: ['1'] }]));
  writeFileSync(join(root, 'research', 'r-reader-findings-1.json'), JSON.stringify({
    batch: '1', findings: [], coverage_note: 'No uneditable findings.',
  }));
  writeFileSync(join(root, 'research', 'r-batch-1.proof-contracts.json'), JSON.stringify({
    version: 1, scope: ids, contracts: Object.fromEntries(ids.map((id) => [id, {}])),
  }));
  const run = (...args: string[]) => execFileSync(process.execPath,
    [join(REPO, 'tools', 'step6-scope.mjs'), ...args, '--root', root], { cwd: root, encoding: 'utf8' });
  const attempt = (...args: string[]) => spawnSync(process.execPath,
    [join(REPO, 'tools', 'step6-scope.mjs'), ...args, '--root', root], { cwd: root, encoding: 'utf8' });
  return { root, ids, run, attempt };
}

function prepareSplit(fx: ReturnType<typeof fixture>) {
  fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
  writeFileSync(join(fx.root, 'items', 'thm-touched-high-risk.md'),
    readFileSync(join(fx.root, 'items', 'thm-touched-high-risk.md'), 'utf8') + '\nReader repair.\n');
  // Exercise the exact shell-free composite used by stage 6a-split. Its two
  // typed subcommands must retain the old hash-then-split, fail-fast order.
  fx.run('post-reader', '--run', 'r', '--batch', '1');
}

test('split isolates each batch and includes touched high-risk items in refuter scope', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step6-scope-1.json'), 'utf8'));
    assert.deepEqual(scope.touched, ['thm-touched-high-risk']);
    assert.ok(scope.high_risk.includes('thm-touched-high-risk'));
    assert.deepEqual(scope.refuter_scope.sort(), [...fx.ids, 'p'].sort());
    assert.equal(existsSync(join(fx.root, 'research', 'r-step6-scope.json')), false,
      'the pipeline must not use one shared read-modify-write file');
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('post-6b composite reconciles, hashes, and snapshots in typed fail-fast order', () => {
  const fx = fixture();
  const calls = join(fx.root, 'research', 'composite-calls.log');
  try {
    writeFileSync(join(fx.root, 'tools', 'splice-plan.mjs'), `
import { appendFileSync } from 'node:fs';
appendFileSync(${JSON.stringify(calls)}, 'splice ' + process.argv.slice(2).join(' ') + '\\n');
`);
    writeFileSync(join(fx.root, 'tools', 'touchlog.mjs'), `
import { appendFileSync } from 'node:fs';
appendFileSync(${JSON.stringify(calls)}, 'touch ' + process.argv.slice(2).join(' ') + '\\n');
`);
    fx.run('post-6b', '--run', 'r');
    assert.ok(existsSync(join(fx.root, 'research', 'r-step6-hash-1-post-6b.json')));
    assert.deepEqual(readFileSync(calls, 'utf8').trim().split('\n'), [
      'splice --run r --batch 1 --update --accept-requires',
      'touch snap research/r-touches.json post-6b --idempotent',
    ]);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('post-6b composite stops before hashing and snapshotting when reconciliation fails', () => {
  const fx = fixture();
  const touched = join(fx.root, 'research', 'touch-ran');
  try {
    writeFileSync(join(fx.root, 'tools', 'splice-plan.mjs'), 'process.exit(7);\n');
    writeFileSync(join(fx.root, 'tools', 'touchlog.mjs'), `
import { writeFileSync } from 'node:fs';
writeFileSync(${JSON.stringify(touched)}, 'unexpected');
`);
    const result = fx.attempt('post-6b', '--run', 'r');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /plan reconciliation failed with exit 7/);
    assert.equal(existsSync(join(fx.root, 'research', 'r-step6-hash-1-post-6b.json')), false);
    assert.equal(existsSync(touched), false);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('split routes contract-only repairs, additions, and page edits to Alpha', () => {
  const contractFx = fixture();
  try {
    contractFx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    const contractPath = join(contractFx.root, 'research', 'r-batch-1.proof-contracts.json');
    const contract = JSON.parse(readFileSync(contractPath, 'utf8'));
    contract.contracts['lem-ordinary-item'] = { boundary_cases: [{ case: 'empty', status: 'checked' }] };
    writeFileSync(contractPath, JSON.stringify(contract));
    contractFx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    contractFx.run('split', '--run', 'r', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(contractFx.root, 'research', 'r-step6-scope-1.json'), 'utf8'));
    assert.ok(scope.touched.includes('lem-ordinary-item'));
  } finally { rmSync(contractFx.root, { recursive: true, force: true }); }

  const manifestFx = fixture();
  try {
    manifestFx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    writeFileSync(join(manifestFx.root, 'items', 'lem-added-item.md'),
      '---\ntitle: Added\ndeps: []\n---\n## Statement\nAdded.\n\n## Proof\n1.1 Done.\n');
    const contractPath = join(manifestFx.root, 'research', 'r-batch-1.proof-contracts.json');
    const contract = JSON.parse(readFileSync(contractPath, 'utf8'));
    contract.scope.push('lem-added-item');
    contract.contracts['lem-added-item'] = {};
    writeFileSync(contractPath, JSON.stringify(contract));
    writeFileSync(join(manifestFx.root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
      { id: 'p', category: 'test', items: [...manifestFx.ids, 'lem-added-item'] },
    ]));
    manifestFx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    manifestFx.run('split', '--run', 'r', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(manifestFx.root, 'research', 'r-step6-scope-1.json'), 'utf8'));
    assert.deepEqual(scope.added, ['lem-added-item']);
    assert.ok(scope.touched.includes('lem-added-item'));
  } finally { rmSync(manifestFx.root, { recursive: true, force: true }); }

  const pageFx = fixture();
  try {
    pageFx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    writeFileSync(join(pageFx.root, 'library', 'test', 'p.md'),
      '---\npage: p\ntitle: P\n---\n\nCorrected first summary.\n\nSecond summary.\n');
    pageFx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    pageFx.run('split', '--run', 'r', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(pageFx.root, 'research', 'r-step6-scope-1.json'), 'utf8'));
    assert.deepEqual(scope.pages_touched, ['p']);
  } finally { rmSync(pageFx.root, { recursive: true, force: true }); }
});

test('split routes semantic manifest edits even when item and page bytes do not change', () => {
  const fx = fixture();
  try {
    const manifestPath = join(fx.root, 'research', 'r-batch-1.pages.json');
    const before = [{ id: 'p', category: 'test', title: 'P', order: 10, requires: [],
      items: fx.ids.map((id) => ({ id, strategy: 'direct', deps: [] })) }];
    writeFileSync(manifestPath, JSON.stringify(before));
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    const after = structuredClone(before);
    after[0].order = 11;
    after[0].requires = ['prior-page'];
    after[0].items[0].strategy = 'induction';
    after[0].items[0].deps = ['lem-helper'];
    writeFileSync(manifestPath, JSON.stringify(after));
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    fx.run('split', '--run', 'r', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step6-scope-1.json'), 'utf8'));
    assert.ok(scope.touched.includes(fx.ids[0]), 'item strategy/deps metadata must be adjudicated');
    assert.deepEqual(scope.pages_touched, ['p'], 'page order/requires metadata must be adjudicated');
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('an uneditable published-dependency finding becomes an exact reader obligation', () => {
  const fx = fixture();
  try {
    const published = 'thm-published-dependency';
    writeFileSync(join(fx.root, 'items', `${published}.md`),
      `---\nid: ${published}\nstatus: published\ndeps: []\n---\n## Statement\nFalse statement.\n`);
    const consumerPath = join(fx.root, 'items', 'lem-ordinary-item.md');
    writeFileSync(consumerPath, readFileSync(consumerPath, 'utf8').replace('deps: []', `deps: [${published}]`));
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    writeFileSync(join(fx.root, 'research', 'r-reader-findings-1.json'), JSON.stringify({
      batch: '1', coverage_note: 'Published target opened.', findings: [{
        id: published, subject_type: 'published-dependency', consumer_id: 'lem-ordinary-item',
        location: 'Statement', defect: 'false-claim', evidence: 'Empty structure is a counterexample.', severity: 'fatal',
      }],
    }));
    fx.run('split', '--run', 'r', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step6-scope-1.json'), 'utf8'));
    assert.equal(scope.reader_findings[0].obligation, 'reader:1:1');
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all opened',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-S6-a-reader-1-1', run: 'r', subject: published,
      caught_at_stage: '6a-read', severity: 'fatal', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-6b-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [{
        obligation: 'reader:1:1', id: published, route: 'reader', verdict: 'confirmed_fatal',
        defect_ids: ['r-S6-a-reader-1-1'], evidence: 'Published correction protocol closed the false Statement.',
      }],
    }));
    execFileSync(process.execPath, [join(REPO, 'tools', 'published-repairs.mjs'),
      'claim', '--run', 'r', '--id', published, '--group', 'a', '--root', fx.root],
    { cwd: fx.root, encoding: 'utf8' });
    const repairedText = readFileSync(join(fx.root, 'items', `${published}.md`), 'utf8')
      + '\nCorrected published statement.\n';
    writeFileSync(join(fx.root, 'items', `${published}.md`), repairedText);
    writeFileSync(join(fx.root, 'research', 'r-step8-published-repairs.jsonl'), `${JSON.stringify({
      kind: 'repaired', id: published, group: 'a', repair_owner_group: 'a', found_via: 'lem-ordinary-item',
      found_at_stage: '6a-read', step6_obligation: 'reader:1:1',
      step6_defect_class: 'false-claim', pre_sha256: scope.reader_findings[0].pre_sha256,
      post_sha256: itemHashGuard(repairedText), defect: 'The published Statement was false.',
      correction_basis: 'The empty case gives the exact corrected boundary.',
    })}\n`);
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('reader findings reject arbitrary subjects outside the assigned dependency closure', () => {
  const fx = fixture();
  try {
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    writeFileSync(join(fx.root, 'research', 'r-reader-findings-1.json'), JSON.stringify({
      batch: '1', coverage_note: 'bad specimen', findings: [{
        id: 'thm-arbitrary-published', subject_type: 'published-dependency', consumer_id: 'lem-ordinary-item',
        location: 'Statement', defect: 'false-claim', evidence: 'none', severity: 'fatal',
      }],
    }));
    const result = fx.attempt('split', '--run', 'r', '--batch', '1');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /out-of-scope/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('collect rejects partial, duplicate, extra, and out-of-scope coverage', () => {
  const cases = [
    { opened: ['lem-ordinary-item'], not_opened: ['cex-flagged-item', 'thm-touched-high-risk', 'p'], flagged: [], error: /left 3 item/ },
    { opened: ['lem-ordinary-item', 'lem-ordinary-item', 'cex-flagged-item', 'thm-touched-high-risk', 'p'], not_opened: [], flagged: [], error: /duplicate/ },
    { opened: ['lem-ordinary-item', 'cex-flagged-item', 'thm-touched-high-risk', 'p', 'extra-id'], not_opened: [], flagged: [], error: /do not exactly partition/ },
    { opened: ['lem-ordinary-item', 'cex-flagged-item', 'thm-touched-high-risk', 'p'], not_opened: [], flagged: [{ id: 'extra-id' }], error: /out-of-scope/ },
  ];
  for (const specimen of cases) {
    const fx = fixture();
    try {
      prepareSplit(fx);
      writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({ batch: '1', coverage_note: 'test', ...specimen }));
      const result = fx.attempt('collect', '--run', 'r', '--batch', '1');
      assert.notEqual(result.status, 0);
      assert.match(`${result.stdout}${result.stderr}`, specimen.error);
    } finally { rmSync(fx.root, { recursive: true, force: true }); }
  }
});

test('exact refuter findings, Alpha decisions, and ledger rows close end to end', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], coverage_note: 'all read',
      flagged: [
        { id: 'cex-flagged-item', location: 'Statement', defect: 'false-claim', evidence: 'counterexample', severity: 'fatal' },
        { id: 'thm-touched-high-risk', location: 'Proof 1.1', defect: 'unlicensed-inference', evidence: 'licensed on disk', severity: 'nonfatal' },
      ],
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    const rows = [
      { defect_id: 'r-D1', run: 'r', subject: 'thm-touched-high-risk', caught_at_stage: '6a-read', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-D2', run: 'r', subject: 'cex-flagged-item', caught_at_stage: '6b-adjudicate', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-D3', run: 'r', subject: 'thm-touched-high-risk', caught_at_stage: '6b-adjudicate', severity: 'nonfatal', disposition: 'false-positive' },
    ];
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
    writeFileSync(join(fx.root, 'items', 'cex-flagged-item.md'),
      readFileSync(join(fx.root, 'items', 'cex-flagged-item.md'), 'utf8') + '\nFatal finding repaired.\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-6b-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [
        { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched', verdict: 'accepted_repair', defect_ids: ['r-D1'], evidence: 'repair checked' },
        { obligation: 'refuter:1:1', id: 'cex-flagged-item', route: 'flagged', verdict: 'confirmed_fatal', defect_ids: ['r-D2'], evidence: 'counterexample confirmed' },
        { obligation: 'refuter:1:2', id: 'thm-touched-high-risk', route: 'flagged', verdict: 'false_positive', defect_ids: ['r-D3'], evidence: 'dependency licenses step' },
      ],
    }));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /3 item\(s\) routed, 3 adjudication obligation\(s\), 0 error/);
    assert.match(fx.run('check', '--run', 'r', '--phase', 'final'), /0 error/);

    const decisionsPath = join(fx.root, 'research', 'r-alpha-a-6b-decisions.json');
    const decisions = JSON.parse(readFileSync(decisionsPath, 'utf8'));
    decisions.decisions.pop();
    writeFileSync(decisionsPath, JSON.stringify(decisions));
    const missing = fx.attempt('check', '--run', 'r', '--phase', 'adjudicate');
    assert.notEqual(missing.status, 0);
    assert.match(missing.stderr, /decision-missing|ledger-unowned/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('adjudicate accepts the same legacy reader batch label that split routed', () => {
  const fx = fixture();
  try {
    writeFileSync(join(fx.root, 'research', 'r-reader-findings-1.json'), JSON.stringify({
      batch: 'r-batch-1', findings: [], coverage_note: 'No uneditable findings.',
    }));
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-D1', run: 'r', subject: 'thm-touched-high-risk',
      caught_at_stage: '6a-read', severity: 'fatal', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-6b-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [
        { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched',
          verdict: 'accepted_repair', defect_ids: ['r-D1'], evidence: 'repair checked' },
      ],
    }));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('global contract-audit summary rows do not invent 6b ownership gaps', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), [
      { defect_id: 'r-D1', run: 'r', subject: 'thm-touched-high-risk',
        caught_at_stage: '6a-read', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-contract-audit', run: 'r', subject: 'contract audit summary',
        caught_at_stage: '6b-adjudicate', severity: 'nonfatal', disposition: 'fixed' },
    ].map((row) => JSON.stringify(row)).join('\n') + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-6b-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [
        { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched',
          verdict: 'accepted_repair', defect_ids: ['r-D1'], evidence: 'repair checked' },
      ],
    }));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('an added repair lemma shares its consumer defect without inventing a lemma defect', () => {
  const fx = fixture();
  try {
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    const consumer = 'lem-ordinary-item';
    const added = 'lem-added-repair';
    writeFileSync(join(fx.root, 'items', `${consumer}.md`),
      readFileSync(join(fx.root, 'items', `${consumer}.md`), 'utf8') + '\nUses the added repair lemma.\n');
    writeFileSync(join(fx.root, 'items', `${added}.md`),
      `---\nid: ${added}\ndeps: []\n---\n## Statement\nRepair lemma.\n\n## Proof\n1.1 Done.\n`);
    const manifestPath = join(fx.root, 'research', 'r-batch-1.pages.json');
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    manifest[0].items.push(added);
    writeFileSync(manifestPath, JSON.stringify(manifest));
    const contractPath = join(fx.root, 'research', 'r-batch-1.proof-contracts.json');
    const contract = JSON.parse(readFileSync(contractPath, 'utf8'));
    contract.scope.push(added);
    contract.contracts[added] = {};
    writeFileSync(contractPath, JSON.stringify(contract));
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    fx.run('split', '--run', 'r', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step6-scope-1.json'), 'utf8'));
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: scope.refuter_scope, not_opened: [], flagged: [], coverage_note: 'all opened',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-S6-a-consumer-gap', run: 'r', subject: consumer,
      caught_at_stage: '6a-read', severity: 'fatal', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-6b-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [
        { obligation: `touched:1:${consumer}`, id: consumer, route: 'touched', verdict: 'accepted_repair',
          defect_ids: ['r-S6-a-consumer-gap'], evidence: 'The missing inference is now factored through the lemma.' },
        { obligation: `touched:1:${added}`, id: added, route: 'touched', verdict: 'accepted_repair',
          defect_ids: ['r-S6-a-consumer-gap'], causal_subject: consumer,
          same_defect_as: `touched:1:${consumer}`, same_defect_evidence: 'This lemma closes the same consumer gap.',
          evidence: 'The new lemma is the repair carrier, not a defective subject.' },
      ],
    }));
    fx.run('stamp', '--run', 'r');
    const result = fx.attempt('check', '--run', 'r', '--phase', 'adjudicate');
    assert.equal(result.status, 0, result.stderr);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('supplemental gate decisions are exact and stay in their owning group', () => {
  const f = fixture();
  try {
    prepareSplit(f);
    writeFileSync(join(f.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...f.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all opened',
    }));
    f.run('collect', '--run', 'r', '--batch', '1');
    const decisionsPath = join(f.root, 'research', 'r-alpha-a-6b-decisions.json');
    writeFileSync(decisionsPath, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: [
      { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk',
        route: 'touched', verdict: 'accepted_repair', defect_ids: ['r-D000'], evidence: 'checked' },
      { obligation: 'gate:r-D001', id: 'outside-group-item', route: 'gate',
        verdict: 'false_positive', defect_ids: ['r-D999'], evidence: 'test' },
    ] }));
    writeFileSync(join(f.root, 'research', 'defect-ledger.jsonl'), [
      { defect_id: 'r-D000', run: 'r', subject: 'thm-touched-high-risk',
        caught_at_stage: '6a-read', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-D999', run: 'r', subject: 'outside-group-item',
        caught_at_stage: '6b-adjudicate', severity: 'nonfatal', disposition: 'false-positive' },
    ].map((row) => JSON.stringify(row)).join('\n') + '\n');
    const result = f.attempt('check', '--run', 'r', '--phase', 'final');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /outside group a/);
    assert.match(result.stderr, /must name its exact defect id/);
  } finally { rmSync(f.root, { recursive: true, force: true }); }
});

test('a missing pre-reader hash blocks split instead of guessing', () => {
  const fx = fixture();
  try {
    const result = fx.attempt('split', '--run', 'r', '--batch', '1');
    assert.notEqual(result.status, 0);
    assert.match(`${result.stdout}${result.stderr}`, /pre-reader hash.*missing/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});
