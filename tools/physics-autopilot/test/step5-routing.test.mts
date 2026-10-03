import { spawnSync } from './fixture-process.mts';
import { copyFixtureFile } from './fixture-io.mts';
// The Step-5 reader pipeline, routed decisions, ledger ownership and
// legacy-run cutover safety.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

import { step5Stages } from '../stages/mathlib.step5.mts';
import { holdStep5 } from '../stages/step5-hold.mts';
import { Executor } from '../src/executor.mts';
import { itemHashGuard } from '../../physics-support/item-hash.mjs';

const REPO = join(import.meta.dirname, '..', '..', '..');
const gate = (id: string, argv: any, extra: any = {}) => ({ id, argv, ...extra });
const deps = {
  gate,
  repoWide: () => [gate('precheck', ['node', 'x']), gate('splice-verify', ['node', 'y'])],
  contractGates: (_ctx: any, options: any) => [gate('risk-report', ['node', 'r', ...(options?.reviewed ? ['--require-reviewed'] : [])])],
  coverageGates: () => [gate('coverage', ['node', 'c'])],
  policyItemGate: () => gate('content-policy', ['node', 'p']),
  urlGate: () => gate('url-liveness', ['node', 'u']),
  backingGate: () => gate('citation-backing', ['node', 'b']),
  impactGate: () => gate('impact-audit', ['node', 'i']),
  batches: () => ['1', '2', '3'],
  alphaGroups: () => [{ label: 'a', covers: ['1', '2'] }, { label: 'b', covers: ['3'] }],
  alphaCohort: (_ctx: any, unit: string) => ['1', '2'].includes(String(unit)) ? ['1', '2'] : ['3'],
  resultPattern: (role: string, label: string) => new RegExp(`^${role}-(?:${role}-)?(?:${label})\\.result\\.json$`),
  touchesPath: (ctx: any) => `research/${ctx.run}-touches.json`,
};
const stages = step5Stages(deps) as any[];
const byId = (id: string) => stages.find((stage) => stage.id === id);
const ordinaryCtx = { run: 'future-run', repo: mkdtempSync(join(tmpdir(), 'step5-ctx-')), dispatchDir: '/tmp/none' };

test('5a adjudication runs Sol high and the 5b lead Sol xhigh, with tool lanes model-free', async () => {
  const { MODEL_PROFILE_NAMES } = await import('../../physics-support/models.mjs');
  const stage = byId('5a-adjudicate');
  assert.equal(stage.modelProfile({ role: 'alpha', job: 'adjudication' }), MODEL_PROFILE_NAMES.solHigh);
  assert.equal(stage.modelProfile({ role: 'tool' }), undefined);
  assert.equal(byId('5b-cross').modelProfile({ role: 'alpha' }), MODEL_PROFILE_NAMES.solXHigh);
  assert.equal(byId('5b-cross').modelProfile({ role: 'tool' }), undefined);
});

test('an escalated or sub-100% Step 5a verdict fails its gate and the stage only holds', async () => {
  const root = mkdtempSync(join(tmpdir(), 'step5-owner-'));
  try {
    mkdirSync(join(root, 'research'), { recursive: true });
    const path = join(root, 'research', 'r-alpha-a-5a-decisions.json');
    for (const decision of [
      { verdict: 'escalated', evidence: 'Cannot justify the proposed repair' },
      { verdict: 'amended_repair', repair_confidence: 0.99, evidence: 'Uncertain hypothesis' },
    ]) {
      writeFileSync(path, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: [{ obligation: 'reader:1:x', id: 'x', ...decision }] }));
      const result = spawnSync(process.execPath, [join(REPO, 'tools/physics-support/step5-scope.mjs'), 'check-escalations', '--root', root, '--run', 'r'], { encoding: 'utf8' });
      assert.equal(result.status, 1);
      assert.match(result.stderr, /owner decision required/);
    }
    writeFileSync(path, JSON.stringify({ decisions: [{ verdict: 'amended_repair', repair_confidence: 1 }] }));
    const clean = spawnSync(process.execPath, [join(REPO, 'tools/physics-support/step5-scope.mjs'), 'check-escalations', '--root', root, '--run', 'r'], { encoding: 'utf8' });
    assert.equal(clean.status, 0, clean.stderr);
    const stage = byId('5a-adjudicate');
    const gates = stage.gates({ run: 'r' });
    assert.equal(gates[0].id, 'step5-owner-escalations');
    assert.equal(stage.onGateFailure, undefined, 'a failed Step-5 gate is owner-held, never repair-dispatched');
    assert.equal(stage.onHold, holdStep5);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('Step 5a is prepare, the reader pipeline and adjudication; 5b closure is unchanged', async () => {
  const active = await import('../stages/mathlib.mts');
  const ids = active.stages.map((stage: any) => stage.id).filter(id => id !== 'physics-content');
  assert.deepEqual(ids.slice(ids.indexOf('5a-prepare'), ids.indexOf('5b-close') + 1),
    ['5a-prepare', '5a-read', '5a-split', '5a-refute', '5a-collect', '5a-adjudicate',
      '5a-baseline', '5b-edges', '5b-cross', '5b-close']);
  assert.equal(ids.some((id: string) => id.startsWith('review-')), false);
  assert.equal(active.stages.find((s: any) => s.id === '3b-author').pipeline, undefined);
  assert.deepEqual(stages.filter((s: any) => s.pipeline).map((s: any) => [s.id, s.pipeline]),
    [['5a-read', 'read'], ['5a-split', 'read'], ['5a-refute', 'read'], ['5a-collect', 'read'], ['5a-adjudicate', 'read']]);
  for (const stage of stages.filter((s: any) => s.pipeline))
    assert.equal(typeof stage.role, 'string', `${stage.id} declares the lane it pipes to`);
  assert.equal(byId('5a-adjudicate').pipeline, 'read');
  assert.deepEqual(byId('5a-adjudicate').cohort({}, '1'), ['1']);
  const ctx = { ...ordinaryCtx, run: 'r', doctor: true };
  assert.equal(byId('5a-adjudicate').plan(ctx, ['1'])[0].task, 'briefs/tasks/alpha-5a-adjudicate.md');
  assert.equal(byId('5b-cross').plan(ctx, ['all'])[0].task, 'briefs/tasks/alpha-5b-edges.md');
  assert.deepEqual(byId('5a-prepare').plan(ctx)[0].argv,
    ['node', 'tools/physics-support/step5-prepare.mjs', '--run', 'r']);
  assert.deepEqual(byId('5a-prepare').artifacts(ctx),
    ['research/r-step5-hash-1-pre.json', 'research/r-step5-hash-2-pre.json', 'research/r-step5-hash-3-pre.json']);
  assert.ok(byId('5a-adjudicate').gates(ctx).some((g: any) => g.id === 'step5-auditor-created-certifications'));
  assert.ok(byId('5a-adjudicate').gates(ctx).some((g: any) => g.id === 'step5-routing-adjudicate'));
  assert.ok(byId('5b-cross').gates(ctx).some((g: any) => g.id === 'step5-routing-final'));
  assert.equal(byId('5a-adjudicate').onGateFailure, undefined);
  assert.equal(byId('5a-adjudicate').onHold, holdStep5);
});

test('no Step 5 stage carries a repair hook, budget or fingerprint', () => {
  for (const id of ['5a-prepare', '5a-read', '5a-split', '5a-refute', '5a-collect',
    '5a-adjudicate', '5a-baseline', '5b-edges', '5b-cross', '5b-close']) {
    assert.equal(byId(id).onGateFailure, undefined, `${id} must not launch a repair`);
    assert.equal(byId(id).maxFixRounds, undefined, `${id} must not bound repair rounds`);
    assert.equal(byId(id).perItemFixBudget, undefined, `${id} must not charge repair budgets`);
    assert.equal(byId(id).repairFingerprint, undefined, `${id} must not rearm on a fingerprint`);
  }
  assert.equal(byId('5a-adjudicate').onHold, holdStep5);
  assert.equal(byId('5b-cross').onHold, holdStep5);
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

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'step5-'));
  mkdirSync(join(root, 'research'), { recursive: true });
  mkdirSync(join(root, 'items'), { recursive: true });
  mkdirSync(join(root, 'tools'), { recursive: true }); mkdirSync(join(root, 'tools/physics-support'), { recursive: true });
  mkdirSync(join(root, 'library', 'test'), { recursive: true });
  for (const tool of ['risk-report.mjs', 'frontmatter-list.mjs']) {
    copyFixtureFile(join(REPO, 'tools/physics-support', tool), join(root, 'tools/physics-support', tool));
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
    [join(REPO, 'tools/physics-support', 'step5-scope.mjs'), ...args, '--root', root], { cwd: root, encoding: 'utf8' });
  const attempt = (...args: string[]) => spawnSync(process.execPath,
    [join(REPO, 'tools/physics-support', 'step5-scope.mjs'), ...args, '--root', root], { cwd: root, encoding: 'utf8' });
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

test('batch decisions stamp and close independently without accepting sibling obligations', () => {
  const fx = fixture();
  try {
    const research = join(fx.root, 'research');
    writeFileSync(join(research, 'r-alpha-groups.json'), JSON.stringify([{ label: 'a', covers: ['1', '2'] }]));
    writeFileSync(join(fx.root, 'items/lem-sibling.md'), '---\ndeps: []\n---\n## Statement\nA sibling.\n\n## Proof\n1.1 Done.\n');
    writeFileSync(join(research, 'r-batch-2.pages.json'), JSON.stringify([{ id: 'p2', category: 'test', items: ['lem-sibling'] }]));
    writeFileSync(join(fx.root, 'library/test/p2.md'), '---\npage: p2\n---\nSibling page.\n');
    writeFileSync(join(research, 'r-batch-2.proof-contracts.json'), JSON.stringify({ version: 1, scope: ['lem-sibling'], contracts: { 'lem-sibling': {} } }));
    writeFileSync(join(research, 'r-reader-findings-2.json'), JSON.stringify({ batch: '2', findings: [], coverage_note: 'read' }));
    for (const batch of ['1', '2']) {
      fx.run('hash', '--run', 'r', '--batch', batch, '--label', 'pre');
      fx.run('post-reader', '--run', 'r', '--batch', batch);
      writeFileSync(join(research, `r-refute-${batch}.json`), JSON.stringify({
        batch, opened: batch === '1' ? [...fx.ids, 'p'] : ['lem-sibling', 'p2'],
        not_opened: [], coverage_note: 'read', flagged: batch === '1' ? [{
          id: 'lem-ordinary-item', location: 'Statement', defect: 'false-claim', evidence: 'test finding', severity: 'nonfatal',
        }] : [],
      }));
      fx.run('collect', '--run', 'r', '--batch', batch);
    }
    writeFileSync(join(research, 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-batch1-false-positive', run: 'r', subject: 'lem-ordinary-item',
      caught_at_stage: '5a-adjudicate', severity: 'nonfatal', disposition: 'false-positive',
    }) + '\n');
    const decision = { obligation: 'refuter:1:1', id: 'lem-ordinary-item', route: 'flagged',
      verdict: 'false_positive', evidence: 'The current statement is sound.', defect_ids: ['r-batch1-false-positive'] };
    const first = { version: 1, run: 'r', group: 'batch-1', decisions: [decision] };
    const second = { version: 1, run: 'r', group: 'batch-2', decisions: [] as any[] };
    const firstPath = join(research, 'r-alpha-batch-1-5a-decisions.json');
    const secondPath = join(research, 'r-alpha-batch-2-5a-decisions.json');
    writeFileSync(firstPath, JSON.stringify(first));
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decisions-missing.*batch-2/);
    writeFileSync(secondPath, JSON.stringify(second));
    fx.run('stamp', '--run', 'r');
    assert.match(JSON.parse(readFileSync(firstPath, 'utf8')).decisions[0].subject_sha256, /^[a-f0-9]{64}$/);
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
    assert.match(fx.run('check', '--run', 'r', '--phase', 'final'), /0 error/);
    const firstBytes = readFileSync(firstPath, 'utf8');
    fx.run('stamp', '--run', 'r', '--group', 'batch-2');
    assert.equal(readFileSync(firstPath, 'utf8'), firstBytes, 'stamping a batch never rewrites its sibling');
    writeFileSync(secondPath, JSON.stringify({ ...second, decisions: [decision] }));
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decision-extra.*not owed to group batch-2/);
    writeFileSync(secondPath, JSON.stringify({ ...second, group: 'a' }));
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decisions-shape.*batch-2/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('5a-prepare freezes every batch pre-hash and the auditor baseline once', () => {
  const fx = fixture();
  try {
    // The author check is a dispatch-time tool; this test owns the prepare
    // contract, so a stub stands in for a passing check.
    writeFileSync(join(fx.root, 'tools/physics-support', 'tsx-run.mjs'), 'process.exit(0);\n');
    execFileSync(process.execPath,
      [join(REPO, 'tools/physics-support', 'step5-prepare.mjs'), '--run', 'r', '--root', fx.root],
      { cwd: fx.root, encoding: 'utf8' });
    const pre = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step5-hash-1-pre.json'), 'utf8'));
    assert.equal(pre.label, 'pre');
    assert.deepEqual([...pre.manifest].sort(), [...fx.ids].sort());
    assert.ok(existsSync(join(fx.root, 'research', 'r-step5-auditor-baseline.json')));
    assert.equal(existsSync(join(fx.root, 'research', 'r-step5-scope-1.json')), false,
      'prepare freezes the baseline; the read pipeline writes the routed scope');
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

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
    writeFileSync(join(fx.root, 'tools/physics-support', 'splice-plan.mjs'), `
import { appendFileSync } from 'node:fs';
appendFileSync(${JSON.stringify(calls)}, 'splice ' + process.argv.slice(2).join(' ') + '\\n');
`);
    writeFileSync(join(fx.root, 'tools/physics-support', 'touchlog.mjs'), `
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
    writeFileSync(join(fx.root, 'tools/physics-support', 'splice-plan.mjs'), 'process.exit(7);\n');
    writeFileSync(join(fx.root, 'tools/physics-support', 'touchlog.mjs'), `
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

test('published repairs need no Step 5 certification handoff to pass final routing', () => {
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
    execFileSync(process.execPath, [join(REPO, 'tools/physics-support', 'published-repairs.mjs'),
      'claim', '--run', 'r', '--id', published, '--group', 'a', '--root', fx.root],
    { cwd: fx.root, encoding: 'utf8' });
    const repairedText = readFileSync(join(fx.root, 'items', `${published}.md`), 'utf8')
      .replace('status: published', 'status: draft')
      + '\nCorrected published statement.\n';
    writeFileSync(join(fx.root, 'items', `${published}.md`), repairedText);
    const gatePublished = 'lem-published-gate-repair';
    const gatePreText = `---\nid: ${gatePublished}\nstatus: published\ndeps: []\n---\n## Statement\nStale impact wording.\n`;
    writeFileSync(join(fx.root, 'items', `${gatePublished}.md`), gatePreText);
    const gatePostText = gatePreText.replace('Stale impact wording.', 'Corrected impact wording.');
    writeFileSync(join(fx.root, 'items', `${gatePublished}.md`), gatePostText);
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

test('owner-resolved current review preserves unknown history and cannot close defects or stale content', () => {
  const fx = fixture();
  try {
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), '');
    prepareSplit(fx);
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: [...fx.ids, 'p'], not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    const path = join(fx.root, 'research', 'r-alpha-a-5a-decisions.json');
    const decision: any = {
      obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched',
      verdict: 'reviewed_no_defect', change_kind: 'current_content_review', historical_delta_unknown: true,
      defect_ids: [], evidence: 'Current proof and prerequisites reviewed; historical edit remains unclassified.',
    };
    const save = () => writeFileSync(path, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: [decision] }));
    save();
    fx.run('stamp', '--run', 'r');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decision-clean-change/);
    decision.owner_resolution = 'Owner authorized acceptance of the fully reviewed current proof; earlier bytes are unavailable.';
    save();
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
    decision.historical_delta_unknown = false;
    save();
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decision-clean-change/);
    decision.historical_delta_unknown = true;
    save();
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-open', run: 'r', subject: decision.id,
      caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'open',
    }) + '\n');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /ledger-unowned/);
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), '');
    writeFileSync(join(fx.root, 'items', `${decision.id}.md`), 'changed after review');
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

test('5a owes a decision for touched and page carriers and none for an untouched item', () => {
  // The adjudicator's obligations are exactly touched, page, reader and
  // flagged. An untouched, unflagged item proceeds to the gate, so inventing a
  // decision for it is an error rather than harmless extra evidence.
  const fx = fixture();
  try {
    fx.run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    writeFileSync(join(fx.root, 'items', 'thm-touched-high-risk.md'),
      readFileSync(join(fx.root, 'items', 'thm-touched-high-risk.md'), 'utf8') + '\nReader repair.\n');
    writeFileSync(join(fx.root, 'library', 'test', 'p.md'),
      '---\npage: p\ntitle: P\n---\n\nCorrected first summary.\n\nSecond summary.\n');
    fx.run('post-reader', '--run', 'r', '--batch', '1');
    const scope = JSON.parse(readFileSync(join(fx.root, 'research', 'r-step5-scope-1.json'), 'utf8'));
    assert.deepEqual(scope.touched, ['thm-touched-high-risk']);
    assert.deepEqual(scope.pages_touched, ['p']);
    assert.ok(!scope.touched.includes('lem-ordinary-item'), 'an untouched item owes nothing');
    writeFileSync(join(fx.root, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', opened: scope.refuter_scope, not_opened: [], flagged: [], coverage_note: 'all read',
    }));
    fx.run('collect', '--run', 'r', '--batch', '1');
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), [
      { defect_id: 'r-D1', run: 'r', subject: 'thm-touched-high-risk', caught_at_stage: '5a-adjudicate', severity: 'fatal', disposition: 'fixed' },
      { defect_id: 'r-D2', run: 'r', subject: 'p', caught_at_stage: '5a-adjudicate', severity: 'nonfatal', disposition: 'fixed' },
    ].map((row) => JSON.stringify(row)).join('\n') + '\n');
    const path = join(fx.root, 'research', 'r-alpha-a-5a-decisions.json');
    const owed = [
      { obligation: 'touched:1:thm-touched-high-risk', id: 'thm-touched-high-risk', route: 'touched',
        verdict: 'accepted_repair', defect_ids: ['r-D1'], evidence: 'The reader repair is exact on the current carrier.' },
      { obligation: 'page:1:p', id: 'p', route: 'page',
        verdict: 'accepted_repair', defect_ids: ['r-D2'], evidence: 'The corrected summary matches the authored items.' },
    ];
    writeFileSync(path, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: owed }));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.run('check', '--run', 'r', '--phase', 'adjudicate'), /0 error/);
    writeFileSync(path, JSON.stringify({ version: 1, run: 'r', group: 'a', decisions: [...owed, {
      obligation: 'touched:1:lem-ordinary-item', id: 'lem-ordinary-item', route: 'touched',
      verdict: 'accepted_repair', defect_ids: ['r-D1'], evidence: 'Not owed: untouched and unflagged.',
    }] }));
    fx.run('stamp', '--run', 'r');
    assert.match(fx.attempt('check', '--run', 'r', '--phase', 'adjudicate').stderr, /decision-extra/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('the reader pipeline stages declare their frozen prompts, schemas and artifacts', () => {
  const ctx = { ...ordinaryCtx, run: 'r' };
  const reader = byId('5a-read');
  const readerPlan = reader.plan(ctx, ['1'])[0];
  assert.equal(readerPlan.role, 'reader');
  assert.equal(readerPlan.brief, 'briefs/reader.md');
  assert.equal(readerPlan.task, 'briefs/tasks/alpha-5a-reader.md');
  assert.equal(readerPlan.outputSchema, 'briefs/schemas/reader-findings.json');
  assert.equal(readerPlan.resultArtifact, 'research/r-reader-findings-1.json');
  assert.equal(readerPlan.timeout, 14400);
  assert.equal(reader.labelFor('1'), 'reader-1');
  assert.ok(reader.pattern.test('reader-reader-1.result.json'), 'the dispatcher prefixes the role');
  assert.ok(!reader.pattern.test('reader-1.result.json'));
  assert.deepEqual(reader.artifacts(ctx, '1'),
    ['research/r-reader-1.md', 'research/r-reader-findings-1.json']);

  const refuter = byId('5a-refute');
  const refuterPlan = refuter.plan(ctx, ['1'])[0];
  assert.equal(refuterPlan.role, 'refuter');
  assert.equal(refuterPlan.brief, 'briefs/refuter.md');
  assert.equal(refuterPlan.task, 'briefs/tasks/alpha-5a-refuter.md');
  assert.equal(refuterPlan.outputSchema, 'briefs/schemas/refute-report.json');
  assert.equal(refuterPlan.resultArtifact, 'research/r-refute-1.json');
  assert.equal(refuterPlan.timeout, 10800);
  assert.equal(refuter.labelFor('1'), 'refute-1');
  assert.ok(refuter.pattern.test('refuter-refute-1.result.json'));
  assert.deepEqual(refuter.artifacts(ctx, '1'), 'research/r-refute-1.json');

  for (const [id, label, argv] of [
    ['5a-split', 'split-1', ['node', 'tools/physics-support/step5-scope.mjs', 'post-reader', '--run', 'r', '--batch', '1']],
    ['5a-collect', 'collect-1', ['node', 'tools/physics-support/step5-scope.mjs', 'collect', '--run', 'r', '--batch', '1']],
  ] as const) {
    const stage = byId(id);
    const plan = stage.plan(ctx, ['1'])[0];
    assert.equal(plan.role, 'tool');
    assert.equal(plan.label, label);
    assert.deepEqual(plan.argv, argv);
    assert.equal(plan.timeout, 600);
    assert.equal(stage.pipeline, 'read');
  }
});

test('5b content gates hold for the owner instead of racing a peer author', async () => {
  const root = mkdtempSync(join(tmpdir(), 'step5-peer-author-'));
  try {
    mkdirSync(join(root, 'research'), { recursive: true });
    const stage = byId('5b-cross');
    assert.equal(stage.onGateFailure, undefined,
      'a failing 5b gate is owner-held, never repair-dispatched');
    for (const [id, output] of [
      ['precheck', 'REPAIR items/thm-foreign.md: canonical labels'],
      ['rendercheck', 'ERROR [thm-foreign]: malformed display'],
      ['depcheck', '1 WARNING(s):\n [orphan] items/thm-owned.md\n1 ERROR(s):\n [bad] items/thm-foreign.md'],
    ]) {
      const outcome = await stage.onHold({ ctx: { repo: root, run: 'r' }, stage,
        failure: { id, output, liveItems: ['*'] } });
      assert.match(outcome.owner.reason, /r-step5-blockers\.json/);
    }
    const report = JSON.parse(readFileSync(join(root, 'research/r-step5-blockers.json'), 'utf8'));
    assert.match(report.failures.at(-1).output, /thm-foreign/,
      'the owner sees the foreign carrier in the held gate output');
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
