// Direct Step 5 and historical reader/refuter evidence: decisions,
// ledger ownership, and legacy-run cutover safety.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

import { step5Stages } from '../stages/mathlib.step5.mts';
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
const stages = step5Stages(deps) as any[];
const byId = (id: string) => stages.find((stage) => stage.id === id);
const ordinaryCtx = { run: 'future-run', repo: mkdtempSync(join(tmpdir(), 'step5-ctx-')), dispatchDir: '/tmp/none' };

test('5a and 5b initial and repair Alpha dispatches use DeepSeek V4.1 Flash max', async () => {
  const { MODEL_PROFILE_NAMES } = await import('../../models.mjs');
  const stage = byId('5a-adjudicate');
  for (const label of ['5a-a', 'gate-batch-1-a']) {
    assert.equal(stage.modelProfile({ role: 'alpha', job: 'adjudication', label }), MODEL_PROFILE_NAMES.deepseekFlashMax);
  }
  assert.equal(stage.modelProfile({ role: 'tool' }), undefined);
  assert.equal(byId('5b-cross').modelProfile({ role: 'alpha' }), MODEL_PROFILE_NAMES.deepseekFlashMax);
  assert.equal(byId('5b-cross').modelProfile({ role: 'tool' }), undefined);
});

test('5a escalation or sub-100% repair confidence holds any failed gate without dispatch', async () => {
  const root = mkdtempSync(join(tmpdir(), 'step5-owner-'));
  try {
    mkdirSync(join(root, 'research'));
    const path = join(root, 'research', 'r-alpha-a-5a-decisions.json');
    for (const decision of [
      { verdict: 'escalated', evidence: 'Cannot justify the proposed repair' },
      { verdict: 'amended_repair', repair_confidence: 0.99, evidence: 'Uncertain hypothesis' },
    ]) {
      writeFileSync(path, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: [{ obligation: 'reader:1:x', id: 'x', ...decision }] }));
      const outcome = await byId('5a-adjudicate').onGateFailure({
        ctx: { repo: root, run: 'r' }, failure: { id: 'risk-report' },
        executor: { launch: () => assert.fail('owner hold must not dispatch') },
      });
      assert.match(outcome.owner.reason, /reader:1:x/);
      const result = spawnSync(process.execPath, [join(REPO, 'tools/step5-scope.mjs'), 'check-escalations', '--root', root, '--run', 'r'], { encoding: 'utf8' });
      assert.equal(result.status, 1);
      assert.match(result.stderr, /owner decision required/);
    }
    writeFileSync(path, JSON.stringify({ decisions: [{ verdict: 'amended_repair', repair_confidence: 1 }] }));
    const clean = spawnSync(process.execPath, [join(REPO, 'tools/step5-scope.mjs'), 'check-escalations', '--root', root, '--run', 'r'], { encoding: 'utf8' });
    assert.equal(clean.status, 0, clean.stderr);
    const gates = byId('5a-adjudicate').gates({ run: 'r' });
    assert.equal(gates[0].id, 'step5-owner-escalations');
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('Step 5 has only direct group review and unchanged closure stages', async () => {
  const active = await import('../stages/mathlib.mts');
  const ids = active.stages.map((stage: any) => stage.id);
  assert.deepEqual(ids.slice(ids.indexOf('5a-prepare'), ids.indexOf('5b-close') + 1),
    ['5a-prepare', '5a-adjudicate', '5a-baseline', '5b-edges', '5b-cross', '5b-close']);
  assert.equal(ids.some((id: string) => id.startsWith('review-')), false);
  assert.equal(active.stages.find((s: any) => s.id === '3b-author').pipeline, undefined);
  assert.equal(byId('5a-adjudicate').pipeline, undefined);
  assert.deepEqual(byId('5a-adjudicate').cohort({}, '1'), ['1', '2']);
  const ctx = { ...ordinaryCtx, run: 'r' };
  assert.equal(byId('5a-adjudicate').plan(ctx, ['1'])[0].task, 'briefs/tasks/alpha-5a-direct.md');
  assert.equal(byId('5b-cross').plan(ctx, ['all'])[0].task, 'briefs/tasks/alpha-5b-edges.md');
  assert.deepEqual(byId('5a-prepare').plan(ctx)[0].argv,
    ['node', 'tools/step5-prepare.mjs', '--run', 'r']);
  assert.ok(byId('5a-adjudicate').gates(ctx).some((g: any) => g.id === 'step5-auditor-created-certifications'));
  assert.ok(byId('5a-adjudicate').gates(ctx).some((g: any) => g.id === 'step5-routing-adjudicate'));
  assert.ok(byId('5b-cross').gates(ctx).some((g: any) => g.id === 'step5-routing-final'));
});

test('gate repair dispatch embeds the canonical protocol in its generated task', async () => {
  for (const edge of [false, true]) {
    const root = mkdtempSync(join(tmpdir(), 'step5-gate-task-'));
    try {
      mkdirSync(join(root, 'research'), { recursive: true });
      mkdirSync(join(root, 'briefs', 'tasks'), { recursive: true });
      for (const name of ['alpha-step5-gate.md', 'alpha-step5-edge.md', 'alpha-5b-edges.md']) {
        execFileSync('cp', [join(REPO, 'briefs', 'tasks', name), join(root, 'briefs', 'tasks', name)]);
      }
      let dispatched: any;
      const edgeStages = step5Stages({ ...deps, isEdgeDecision: async () => edge }) as any[];
      const stage = edgeStages.find((entry) => entry.id === '5b-cross');
      await stage.onGateFailure({
        ctx: { run: 'r', repo: root }, stage, round: 1,
        failure: { id: 'proof-contract', why: 'broken proof', output: 'ERROR [thm-example]: gap', liveItems: ['thm-example'] },
        executor: { start(_stage: any, plan: any) { dispatched = plan; } },
      });
      assert.equal(typeof dispatched.task, 'string');
      const generated = readFileSync(join(root, dispatched.task), 'utf8');
      assert.match(generated, /## Canonical repair protocol/);
      assert.match(generated, /# Step 5 gate repair/);
      assert.match(generated, /# Step 5b — cross-batch audit and closure/);
      assert.equal(generated.includes('# Step 5 undeclared-prerequisite repair'), edge);
    } finally { rmSync(root, { recursive: true, force: true }); }
  }
});

test('a Step 5 stalemate repair claims its artifact-incomplete units', async () => {
  const root = mkdtempSync(join(tmpdir(), 'step5-stalemate-'));
  try {
    mkdirSync(join(root, 'research'), { recursive: true });
    mkdirSync(join(root, 'briefs', 'tasks'), { recursive: true });
    writeFileSync(join(root, 'briefs', 'tasks', 'alpha-step5-gate.md'),
      readFileSync(join(REPO, 'briefs', 'tasks', 'alpha-step5-gate.md')));
    let dispatched: any;
    const stage = byId('5a-adjudicate');
    await stage.onGateFailure({
      ctx: { run: 'r', repo: root }, stage, round: 1,
      failure: {
        id: 'stage-stalemate',
        why: 'unit(s) 8, 9, 10 covered but artifact-incomplete and no longer running',
        units: ['8', '9', '10'],
      },
      executor: { start(_stage: any, plan: any) { dispatched = plan; } },
    });
    assert.deepEqual(dispatched.covers, ['8', '9', '10'],
      'the live repair must suppress duplicate stalemate retries for the same units');
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('adjudicating stages budget three tries per named item', () => {
  for (const id of ['5a-adjudicate', '5b-cross']) {
    assert.equal(byId(id).perItemFixBudget, 3);
    assert.equal(byId(id).maxFixRounds, undefined);
    assert.equal(typeof byId(id).onGateFailure, 'function');
  }
});


test('ordinary introduced stages never count the current 5b Alpha result as their own', () => {
  const ctx = { ...ordinaryCtx, run: 'future-run' };
  for (const id of ['5b-edges', '5b-close']) {
    const pattern = byId(id).pattern;
    assert.ok(pattern instanceof RegExp);
    assert.equal(pattern.test('alpha-5b-lead.result.json'), false,
      `${id} must not be falsely covered by the current run's lead Alpha`);
  }
  assert.equal(byId('5b-close').pattern.test('tool-step5-close.result.json'), true);
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

test('Step 5a retry usage cannot consume Step 5b subject allowances', () => {
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
    assert.deepEqual((executor as any).chargeItems({ id: '5a-adjudicate' }, failure, 3).live,
      ['thm-example-subject']);
  }
  assert.deepEqual((executor as any).chargeItems({ id: '5a-adjudicate' }, failure, 3).spent,
    ['thm-example-subject']);
  assert.deepEqual((executor as any).chargeItems({ id: '5b-cross' }, failure, 3).live,
    ['thm-example-subject']);
});

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'step5-'));
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
    [join(REPO, 'tools', 'step5-scope.mjs'), ...args, '--root', root], { cwd: root, encoding: 'utf8' });
  const attempt = (...args: string[]) => spawnSync(process.execPath,
    [join(REPO, 'tools', 'step5-scope.mjs'), ...args, '--root', root], { cwd: root, encoding: 'utf8' });
  return { root, ids, run, attempt };
}

function prepareSplit(fx: ReturnType<typeof fixture>) {
  fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
  writeFileSync(join(fx.root, 'items', 'thm-touched-high-risk.md'),
    readFileSync(join(fx.root, 'items', 'thm-touched-high-risk.md'), 'utf8') + '\nReader repair.\n');
  // Exercise the exact shell-free composite used by stage review-split. Its two
  // typed subcommands must retain the old hash-then-split, fail-fast order.
  fx.run('post-reader', '--run', 'r', '--batch', '1');
}

test('split isolates each batch and includes touched high-risk items in refuter scope', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
    assert.deepEqual(scope.touched, ['thm-touched-high-risk']);
    assert.ok(scope.high_risk.includes('thm-touched-high-risk'));
    assert.deepEqual(scope.refuter_scope.sort(), [...fx.ids, 'p'].sort());
    assert.equal(existsSync(join(fx.root, 'research', 'r-step5-scope.json')), false,
      'the pipeline must not use one shared read-modify-write file');
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('post-5a composite reconciles, hashes, and snapshots in typed fail-fast order', () => {
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
    fx.run('post-5a', '--run', 'r');
    assert.ok(existsSync(join(fx.root, 'research', 'r-step5-hash-1-post-5a.json')));
    assert.deepEqual(readFileSync(calls, 'utf8').trim().split('\n'), [
      'splice --run r --batch 1 --update --accept-requires',
      'touch snap research/r-touches.json post-5a --idempotent',
    ]);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('post-5a composite stops before hashing and snapshotting when reconciliation fails', () => {
  const fx = fixture();
  const touched = join(fx.root, 'research', 'touch-ran');
  try {
    writeFileSync(join(fx.root, 'tools', 'splice-plan.mjs'), 'process.exit(7);\n');
    writeFileSync(join(fx.root, 'tools', 'touchlog.mjs'), `
import { writeFileSync } from 'node:fs';
writeFileSync(${JSON.stringify(touched)}, 'unexpected');
`);
    const result = fx.attempt('post-5a', '--run', 'r');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /plan reconciliation failed with exit 7/);
    assert.equal(existsSync(join(fx.root, 'research', 'r-step5-hash-1-post-5a.json')), false);
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
    const scope = JSON.parse(readFileSync(join(contractFx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
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
    const scope = JSON.parse(readFileSync(join(manifestFx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
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
    const scope = JSON.parse(readFileSync(join(pageFx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
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
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
    assert.ok(scope.touched.includes(fx.ids[0]), 'item strategy/deps metadata must be adjudicated');
    assert.deepEqual(scope.pages_touched, ['p'], 'page order/requires metadata must be adjudicated');
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('claimed preliminary and 5b published repairs both survive final routing', () => {
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
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
    assert.equal(scope.reader_findings[0].obligation, 'reader:1:1');
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all opened',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-S6-a-reader-1-1', run: 'r', subject: published,
      caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-5a-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [{
        obligation: 'reader:1:1', id: published, route: 'reader', verdict: 'confirmed_fatal',
        defect_ids: ['r-S6-a-reader-1-1'], evidence: 'Published correction protocol closed the false Statement.',
      }],
    }));
    execFileSync(process.execPath, [join(REPO, 'tools', 'published-repairs.mjs'),
      'claim', '--run', 'r', '--id', published, '--group', 'a', '--root', fx.root],
    { cwd: fx.root, encoding: 'utf8' });
    const repairedText = readFileSync(join(fx.root, 'items', `${published}.md`), 'utf8')
      .replace('status: published', 'status: draft')
      + '\nCorrected published statement.\n';
    writeFileSync(join(fx.root, 'items', `${published}.md`), repairedText);
    const gatePublished = 'lem-published-gate-repair';
    const gatePreText = `---\nid: ${gatePublished}\nstatus: published\ndeps: []\n---\n## Statement\nStale impact wording.\n`;
    writeFileSync(join(fx.root, 'items', `${gatePublished}.md`), gatePreText);
    execFileSync(process.execPath, [join(REPO, 'tools', 'published-repairs.mjs'),
      'claim', '--run', 'r', '--id', gatePublished, '--group', 'a', '--root', fx.root],
    { cwd: fx.root, encoding: 'utf8' });
    const gateClaim = readFileSync(join(fx.root, 'research', 'r-step5-published-claims.jsonl'), 'utf8')
      .trim().split('\n').map((line) => JSON.parse(line)).find((row) => row.id === gatePublished);
    const gatePostText = gatePreText.replace('Stale impact wording.', 'Corrected impact wording.');
    writeFileSync(join(fx.root, 'items', `${gatePublished}.md`), gatePostText);
    const handoffs = [{
      kind: 'repaired', id: published, group: 'a', repair_owner_group: 'a', found_via: 'lem-ordinary-item',
      found_at_stage: '5a-adjudicate', step5_obligation: 'reader:1:1',
      step5_defect_class: 'false-claim', pre_sha256: scope.reader_findings[0].pre_sha256,
      post_sha256: itemHashGuard(repairedText), defect: 'The published Statement was false.',
      correction_basis: 'The empty case gives the exact corrected boundary.',
    }, {
      kind: 'repaired', id: gatePublished, group: 'a', repair_owner_group: 'a',
      found_via: 'impact-audit', found_at_stage: '5b-cross',
      pre_sha256: gateClaim.pre_sha256, post_sha256: itemHashGuard(gatePostText),
      defect: 'The published impact wording was stale.',
      correction_basis: 'The repaired supplier gives the exact corrected boundary.',
      repair_confidence: 1,
    }];
    writeFileSync(join(fx.root, 'research', 'r-step7-published-repairs.jsonl'),
      handoffs.map((row) => JSON.stringify(row)).join('\n') + '\n');
    writeFileSync(consumerPath, readFileSync(consumerPath, 'utf8')
      .replace(`deps: [${published}]`, 'deps: []'));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'final'), /0 error/);
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
      { defect_id: 'r-D1', run: 'r', subject: 'thm-touched-high-risk', caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-D2', run: 'r', subject: 'cex-flagged-item', caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-D3', run: 'r', subject: 'thm-touched-high-risk', caught_at_stage: '5a-adjudicate', severity: 'nonfatal', disposition: 'false-positive' },
    ];
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
    writeFileSync(join(fx.root, 'items', 'cex-flagged-item.md'),
      readFileSync(join(fx.root, 'items', 'cex-flagged-item.md'), 'utf8') + '\nFatal finding repaired.\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-5a-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [
        { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched', verdict: 'accepted_repair', defect_ids: ['r-D1'], evidence: 'repair checked' },
        { obligation: 'refuter:1:1', id: 'cex-flagged-item', route: 'flagged', verdict: 'confirmed_fatal', defect_ids: ['r-D2'], evidence: 'counterexample confirmed' },
        { obligation: 'refuter:1:2', id: 'thm-touched-high-risk', route: 'flagged', verdict: 'false_positive', defect_ids: ['r-D3'], evidence: 'dependency licenses step' },
      ],
    }));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /3 item\(s\) routed, 3 adjudication obligation\(s\), 0 error/);
    assert.match(fx.run('check', '--run', 'r', '--phase', 'final'), /0 error/);

    const decisionsPath = join(fx.root, 'research', 'r-alpha-a-5a-decisions.json');
    const decisions = JSON.parse(readFileSync(decisionsPath, 'utf8'));
    decisions.decisions.pop();
    writeFileSync(decisionsPath, JSON.stringify(decisions));
    const missing = fx.attempt('check', '--run', 'r', '--phase', 'adjudicate');
    assert.notEqual(missing.status, 0);
    assert.match(missing.stderr, /decision-missing|ledger-unowned/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('a gate repair of a reader-untouched item creates an independent pre-5a obligation', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    const frozen = readFileSync(join(fx.root, 'research', 'r-step5-hash-1-post.json'), 'utf8');
    const item = join(fx.root, 'items', 'lem-ordinary-item.md');
    writeFileSync(item, readFileSync(item, 'utf8') + '\nGate repair.\n');
    fx.run('pre-5a', '--run', 'r');
    assert.equal(readFileSync(join(fx.root, 'research', 'r-step5-hash-1-post.json'), 'utf8'), frozen);
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), '');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-5a-decisions.json'), JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: [] }));
    const result = fx.attempt('check', '--run', 'r', '--phase', 'adjudicate');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /post-reader:1:lem-ordinary-item/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('post-reader page order is bound by the stabilized decision hash', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    const manifestPath = join(fx.root, 'research', 'r-batch-1.pages.json');
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    manifest[0].items.reverse(); writeFileSync(manifestPath, JSON.stringify(manifest));
    fx.run('pre-5a', '--run', 'r');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), [
      {defect_id:'r-D1',run:'r',subject:'thm-touched-high-risk',caught_at_stage:'5a-adjudicate',severity:'nonfatal',disposition:'fixed'},
      {defect_id:'r-D2',run:'r',subject:'p',caught_at_stage:'5a-adjudicate',severity:'nonfatal',disposition:'fixed'},
    ].map((row) => JSON.stringify(row)).join('\n')+'\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-5a-decisions.json'), JSON.stringify({version:1,run:'r',group:'a',decisions:[
      {obligation:'touched:1:thm-touched-high-risk',id:'thm-touched-high-risk',route:'touched',verdict:'accepted_repair',defect_ids:['r-D1'],evidence:'checked'},
      {obligation:'post-reader:1:p',id:'p',route:'page',verdict:'accepted_repair',defect_ids:['r-D2'],evidence:'checked order'},
    ]}));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check','--run','r','--phase','adjudicate'), /0 error/);
    manifest[0].items.reverse(); writeFileSync(manifestPath, JSON.stringify(manifest));
    const result = fx.attempt('check','--run','r','--phase','adjudicate');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /decision-stale|decision-not-applied/);
  } finally { rmSync(fx.root,{recursive:true,force:true}); }
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
      caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-5a-decisions.json'), JSON.stringify({
      version: 1, run: 'r', group: 'a', decisions: [
        { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched',
          verdict: 'accepted_repair', defect_ids: ['r-D1'], evidence: 'repair checked' },
      ],
    }));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('sound audit enrichment needs no invented defect but retains hash and route checks', () => {
  const fx = fixture();
  try {
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), '');
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    const path = join(fx.root, 'research', 'r-alpha-a-5a-decisions.json');
    const doc = { version: 1, run: 'r', group: 'a', decisions: [
      { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched',
        verdict: 'reviewed_no_defect', change_kind: 'audit_enrichment', defect_ids: [], evidence: 'Full current carrier reviewed; sound audit annotation.' },
    ] };
    writeFileSync(path, JSON.stringify(doc));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-open', run: 'r', subject: 'thm-touched-high-risk',
      caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'open',
    }) + '\n');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /ledger-unowned/);
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), '');
    writeFileSync(join(fx.root, 'items', 'thm-touched-high-risk.md'), 'changed after review');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decision-stale/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('global contract-audit summary rows do not invent 5a ownership gaps', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), [
      { defect_id: 'r-D1', run: 'r', subject: 'thm-touched-high-risk',
        caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-contract-audit', run: 'r', subject: 'contract audit summary',
        caught_at_stage: '5a-adjudicate', severity: 'nonfatal', disposition: 'fixed' },
    ].map((row) => JSON.stringify(row)).join('\n') + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-5a-decisions.json'), JSON.stringify({
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
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: scope.refuter_scope, not_opened: [], flagged: [], coverage_note: 'all opened',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-S6-a-consumer-gap', run: 'r', subject: consumer,
      caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-alpha-a-5a-decisions.json'), JSON.stringify({
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
    const decisionsPath = join(f.root, 'research', 'r-alpha-a-5a-decisions.json');
    writeFileSync(decisionsPath, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: [
      { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk',
        route: 'touched', verdict: 'accepted_repair', defect_ids: ['r-D000'], evidence: 'checked' },
      { obligation: 'gate:r-D001', id: 'outside-group-item', route: 'gate',
        verdict: 'false_positive', defect_ids: ['r-D999'], evidence: 'test' },
    ] }));
    writeFileSync(join(f.root, 'research', 'defect-ledger.jsonl'), [
      { defect_id: 'r-D000', run: 'r', subject: 'thm-touched-high-risk',
        caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-D999', run: 'r', subject: 'outside-group-item',
        caught_at_stage: '5a-adjudicate', severity: 'nonfatal', disposition: 'false-positive' },
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

test('batch-local preparation leaves unrelated unfinished manifests untouched', () => {
  const fx = fixture();
  try {
    writeFileSync(join(fx.root, 'research', 'r-batch-2.pages.json'), JSON.stringify({ pages: [{
      id: 'unfinished', path: 'library/test/unfinished.md', items: [{ id: 'thm-unwritten', deps: [] }],
    }] }));
    fx.run('prepare-direct', '--run', 'r', '--batch', '1');
    assert.equal(existsSync(join(fx.root, 'research', 'r-step5-scope-1.json')), true);
    assert.equal(existsSync(join(fx.root, 'research', 'r-step5-scope-2.json')), false);
    assert.equal(existsSync(join(fx.root, 'research', 'r-step5-hash-2-pre-5a.json')), false);
    assert.match(fx.attempt('prepare-direct', '--run', 'r', '--batch', '999').stderr, /Unknown batch/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('direct review closes without reader/refuter artifacts and requires every decision', () => {
  const fx = fixture();
  try {
    rmSync(join(fx.root, 'research', 'r-reader-findings-1.json'));
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), '');
    fx.run('prepare-direct', '--run', 'r');
    const path = join(fx.root, 'research', 'r-alpha-a-5a-decisions.json');
    const decisions = [...fx.ids, 'p'].map((id) => ({
      obligation: `authored:1:${id}`, id, route: id === 'p' ? 'page' : 'item',
      verdict: 'accepted', evidence: 'Read the authored argument and checked each inference.', defect_ids: [],
    }));
    writeFileSync(path, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions }));
    fx.run('stamp', '--run', 'r');
    fx.run('check', '--run', 'r', '--phase', 'adjudicate');
    const before = readFileSync(join(fx.root, 'research', 'r-step5-hash-1-pre-5a.json'), 'utf8');
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'post-5a');
    fx.run('check', '--run', 'r', '--phase', 'final');
    fx.run('prepare-direct', '--run', 'r');
    assert.equal(readFileSync(join(fx.root, 'research', 'r-step5-hash-1-pre-5a.json'), 'utf8'), before);
    const doc = JSON.parse(readFileSync(path, 'utf8'));
    doc.decisions.pop();
    writeFileSync(path, JSON.stringify(doc));
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decision-missing/);
    doc.decisions = decisions.map((d) => ({ ...d, verdict: 'escalated', evidence: 'Substantial missing supplier cannot be authored locally.' }));
    writeFileSync(path, JSON.stringify(doc));
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /owner-escalation/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('direct review includes local lemmas and rejects stale or unaccounted repairs', () => {
  const fx = fixture();
  try {
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), '');
    fx.run('prepare-direct', '--run', 'r');
    const manifest = join(fx.root, 'research', 'r-batch-1.pages.json');
    const pages = JSON.parse(readFileSync(manifest, 'utf8'));
    pages[0].items.push('lem-local-supplier');
    writeFileSync(manifest, JSON.stringify(pages));
    writeFileSync(join(fx.root, 'items', 'lem-local-supplier.md'), 'A fully authored local lemma.');
    const path = join(fx.root, 'research', 'r-alpha-a-5a-decisions.json');
    const doc = { version: 1, run: 'r', group: 'a', decisions: [...fx.ids, 'p'].map((id) => ({
      obligation: `authored:1:${id}`, id, route: id === 'p' ? 'page' : 'item',
      verdict: 'accepted', evidence: 'Checked written proof.', defect_ids: [] as string[],
    })) };
    writeFileSync(path, JSON.stringify(doc));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /lem-local-supplier.*did not decide/);
    doc.decisions.push({ obligation: 'authored:1:lem-local-supplier', id: 'lem-local-supplier',
      route: 'item', verdict: 'accepted', evidence: 'Proved local supplier independently of its consumer.', defect_ids: [] });
    writeFileSync(path, JSON.stringify(doc));
    fx.run('stamp', '--run', 'r');
    fx.run('check', '--run', 'r', '--phase', 'adjudicate');
    writeFileSync(join(fx.root, 'items', 'lem-local-supplier.md'), 'Changed after review.');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decision-stale/);
    doc.decisions[0].verdict = 'repaired';
    writeFileSync(path, JSON.stringify(doc));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /repair-confidence|decision-ledger-refs/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('direct preparation refuses to overwrite historical Step 5 evidence', () => {
  const fx = fixture();
  try {
    prepareSplit(fx);
    const path = join(fx.root, 'research', 'r-step5-scope-1.json');
    const before = readFileSync(path, 'utf8');
    assert.match(fx.attempt('prepare-direct', '--run', 'r').stderr, /requires owner migration/);
    assert.equal(readFileSync(path, 'utf8'), before);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('5b content gates route exclusively foreign diagnostics to the actual author', async () => {
  const root = mkdtempSync(join(tmpdir(), 'step5-peer-author-'));
  try {
    mkdirSync(join(root, 'research'));
    writeFileSync(join(root, 'research/r-batch-1.pages.json'), JSON.stringify([
      { id: 'owned-page', items: [{ id: 'thm-owned' }] },
    ]));
    const stage = byId('5b-cross');
    for (const [id, output] of [
      ['precheck', 'REPAIR items/thm-foreign.md: canonical labels'],
      ['rendercheck', 'ERROR [thm-foreign]: malformed display'],
      ['depcheck', '1 WARNING(s):\n [orphan] items/thm-owned.md\n1 ERROR(s):\n [bad] items/thm-foreign.md'],
    ]) {
      const outcome = await stage.onGateFailure({ ctx: { repo: root, run: 'r' }, stage, round: 1,
        failure: { id, output, liveItems: ['*'] },
        executor: { start() { assert.fail('a 5b worker must not race the peer author'); } } });
      assert.match(outcome.owner.reason, /thm-foreign/);
      assert.doesNotMatch(outcome.owner.reason, /thm-owned/);
    }
  } finally { rmSync(root, { recursive: true, force: true }); }
});


test('precheck diagnostic headers own retry subjects without PASS rows or proof citations', () => {
  const output = 'PASS items/thm-owned.md (direct)\n'
    + 'REPAIR items/prop-foreign-labels.md: adopt canonical form\n'
    + '  | [F1] [[thm-owned]]\n  | 1.1 Use lem-unrelated-supplier. [F1]\n'
    + 'FAIL /tmp/repo/items/lem-foreign-gap.md: missing strategy\n'
    + 'REJECT items/thm-rejected.md: rejected\n';
  assert.deepEqual(Executor.itemsNamedBy({ id: 'precheck', output } as any),
    ['prop-foreign-labels', 'lem-foreign-gap', 'thm-rejected']);
  assert.deepEqual(Executor.itemsNamedBy({ id: 'other-gate', output } as any), []);
});
