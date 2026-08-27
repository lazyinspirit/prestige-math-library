import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { itemHashGuard, shortHash } from '../../item-hash.mjs';
import { stages } from '../stages/mathlib.mts';

const REPO = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'step9-changes.mjs');

function hookFixture() {
  const root = mkdtempSync(join(tmpdir(), 'step9-hook-'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research'));
  symlinkSync(join(REPO, 'tools'), join(root, 'tools'));
  symlinkSync(join(REPO, 'briefs'), join(root, 'briefs'));
  writeFileSync(join(root, 'items', 'modified.md'), 'repaired theorem\n');
  writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify({ snapshots: [{
    label: 'post-step8', hashes: { modified: shortHash(itemHashGuard('original theorem\n')) },
  }] }));
  writeFileSync(join(root, 'research', 'demo-batch-1.pages.json'), JSON.stringify([
    { id: 'page', items: [{ id: 'modified' }] },
  ]));
  writeFileSync(join(root, 'research', 'demo-step9-changes.json'), JSON.stringify({ items: [] }));
  writeFileSync(join(root, 'research', 'demo-step9-changes.pages.json'), '[]\n');
  return root;
}

test('the Step 9 receipt includes created and modified mathematics and refuses deletions', () => {
  const root = mkdtempSync(join(tmpdir(), 'step9-changes-'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research'));
  const original = 'original theorem\n';
  writeFileSync(join(root, 'items', 'modified.md'), 'repaired theorem\n');
  writeFileSync(join(root, 'items', 'created.md'), 'new theorem\n');
  writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify({ snapshots: [{ label: 'post-step8', hashes: {
    modified: shortHash(itemHashGuard(original)), deleted: 'a'.repeat(16),
  } }] }));
  writeFileSync(join(root, 'research', 'demo-batch-1.pages.json'), JSON.stringify([{ id: 'page', items: [{ id: 'modified' }, { id: 'created' }] }]));
  const args = ['--touches', 'research/demo-touches.json', '--baseline', 'post-step8',
    '--manifests', 'research/demo-batch-1.pages.json', '--out', 'research/demo-step9-changes.json',
    '--scope-out', 'research/demo-step9-changes.pages.json', '--root', root];
  try {
    let result = spawnSync(process.execPath, [TOOL, ...args], { encoding: 'utf8' });
    assert.equal(result.status, 1, 'a Step 8 item deletion is a hard stop');
    assert.match(result.stderr, /deleted: item present at post-step8 was deleted/);

    const touches = JSON.parse(readFileSync(join(root, 'research', 'demo-touches.json'), 'utf8'));
    delete touches.snapshots[0].hashes.deleted;
    writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify(touches));
    result = spawnSync(process.execPath, [TOOL, ...args], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const receipt = JSON.parse(readFileSync(join(root, 'research', 'demo-step9-changes.json'), 'utf8'));
    assert.deepEqual(receipt.created, ['created']);
    assert.deepEqual(receipt.modified, ['modified']);
    assert.deepEqual(receipt.items, ['created', 'modified']);
    assert.deepEqual(receipt.published_modified, []);
    assert.deepEqual(JSON.parse(readFileSync(join(root, 'research', 'demo-step9-changes.pages.json'), 'utf8'))[0].items,
      [{ id: 'created' }, { id: 'modified' }]);
    result = spawnSync(process.execPath, [TOOL, ...args, '--check'], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('a modified published item is retained in the targeted judge scope', () => {
  const root = mkdtempSync(join(tmpdir(), 'step9-published-change-'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research'));
  writeFileSync(join(root, 'items', 'published.md'), 'repaired published theorem\n');
  writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify({ snapshots: [{ label: 'post-step8', hashes: {
    published: shortHash(itemHashGuard('old published theorem\n')),
  } }] }));
  writeFileSync(join(root, 'research', 'demo-batch-1.pages.json'), JSON.stringify([{ id: 'current-page', items: [] }]));
  const args = ['--touches', 'research/demo-touches.json', '--baseline', 'post-step8',
    '--manifests', 'research/demo-batch-1.pages.json', '--out', 'research/demo-step9-changes.json',
    '--scope-out', 'research/demo-step9-changes.pages.json', '--root', root];
  try {
    const result = spawnSync(process.execPath, [TOOL, ...args], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const receipt = JSON.parse(readFileSync(join(root, 'research', 'demo-step9-changes.json'), 'utf8'));
    assert.deepEqual(receipt.published_modified, ['published']);
    assert.deepEqual(JSON.parse(readFileSync(join(root, 'research', 'demo-step9-changes.pages.json'), 'utf8'))[0].items, [{ id: 'published' }]);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('Step 9 closes impact work before stamping and receipts', () => {
  const ids = stages.map((stage: any) => stage.id);
  for (const id of ['9-scope', '9-scope-render', '9-scope-freeze', '9-changes-judge', '9-close', '9-changes-stamp', '9-receipt']) assert.ok(ids.includes(id));
  assert.ok(ids.indexOf('9-scope') < ids.indexOf('9-changes-judge'));
  assert.ok(ids.indexOf('9-scope') < ids.indexOf('9-scope-render'));
  assert.ok(ids.indexOf('9-scope-render') < ids.indexOf('9-scope-freeze'));
  assert.ok(ids.indexOf('9-scope-freeze') < ids.indexOf('9-changes-judge'));
  assert.ok(ids.indexOf('9-changes-judge') < ids.indexOf('9-close'));
  assert.ok(ids.indexOf('9-close') < ids.indexOf('9-changes-stamp'));
  assert.ok(ids.indexOf('9-changes-stamp') < ids.indexOf('9-receipt'));
  const ctx = { run: 'frontier-18', repo: REPO };
  const scope: any = stages.find((stage: any) => stage.id === '9-scope');
  const judge: any = stages.find((stage: any) => stage.id === '9-changes-judge');
  const close: any = stages.find((stage: any) => stage.id === '9-close');
  assert.ok(scope.gates(ctx).some((gate: any) => gate.id === 'scope-decisions'));
  assert.ok(judge.gates(ctx).some((gate: any) => gate.id === 'step9-changes'));
  assert.ok(judge.gates(ctx).some((gate: any) => gate.id === 'step9-judge-closure'));
  assert.ok(close.gates(ctx).some((gate: any) => gate.id === 'step9-changes'), 'impact repairs must refresh the certification delta');
});

test('Step 9 prepares, reviews, renders, and freezes in strict sequence', () => {
  const root = mkdtempSync(join(tmpdir(), 'step9-sequence-'));
  mkdirSync(join(root, 'research'));
  writeFileSync(join(root, 'research', 'demo-batch-1.pages.json'), '[]\n');
  const ctx = { run: 'demo', repo: root };
  const scope: any = stages.find((stage: any) => stage.id === '9-scope');
  try {
    let plan = scope.plan(ctx, ['all']);
    assert.deepEqual(plan.map((entry: any) => entry.label), ['step9-scope-prepare']);
    assert.deepEqual(plan[0].covers, [], 'preparation cannot claim the Alpha review');

    writeFileSync(join(root, 'research', 'demo-step9-scope-delta.json'), '{}\n');
    writeFileSync(join(root, 'research', 'demo-alpha-a-scope-decisions.json'), '{}\n');
    plan = scope.plan(ctx, ['all']);
    assert.deepEqual(plan.map((entry: any) => entry.label), ['step9-lead']);
    assert.deepEqual(plan[0].covers, ['all']);

    const render: any = stages.find((stage: any) => stage.id === '9-scope-render');
    const freeze: any = stages.find((stage: any) => stage.id === '9-scope-freeze');
    assert.deepEqual(render.plan(ctx).map((entry: any) => entry.label), ['step9-scope-render']);
    assert.ok(freeze.plan(ctx)[0].argv.includes('post-step9-scope'));
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('a closure retry judges only ids that are actually stale', async () => {
  const root = mkdtempSync(join(tmpdir(), 'step9-route-'));
  mkdirSync(join(root, 'research'));
  writeFileSync(join(root, 'research', 'demo-step9-changes.json'), JSON.stringify({ items: ['created', 'modified'] }));
  writeFileSync(join(root, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: ['modified'], unadjudicated: [], open_fatal: [], closed: false,
  }));
  const started: any[] = [];
  const stage: any = stages.find((candidate: any) => candidate.id === '9-changes-judge');
  try {
    await stage.onGateFailure({ ctx: { run: 'demo', repo: root }, executor: { start: (_stage: any, plan: any) => started.push(plan) },
      stage, round: 1, failure: { id: 'judge-closure' } });
    assert.equal(started.length, 1);
    assert.deepEqual(started[0].argv.slice(-2), ['--items', 'modified']);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('9-changes-judge refreshes a stale Step-9 delta after an in-stage repair', async () => {
  const root = hookFixture();
  const started: any[] = [];
  const stage: any = stages.find((candidate: any) => candidate.id === '9-changes-judge');
  try {
    await stage.onGateFailure({
      ctx: { run: 'demo', repo: root }, executor: { start: (_stage: any, plan: any) => started.push(plan) },
      stage, round: 1, failure: { id: 'step9-changes', output: 'receipt disagrees with current post-step8 delta' },
    });
    assert.equal(started.length, 0, 'the exact refresh is synchronous; the next battery owns rejudge routing');
    assert.deepEqual(JSON.parse(readFileSync(join(root, 'research', 'demo-step9-changes.json'), 'utf8')).items, ['modified']);
    assert.deepEqual(JSON.parse(readFileSync(join(root, 'research', 'demo-step9-changes.pages.json'), 'utf8'))[0].items,
      [{ id: 'modified' }]);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('a clean mechanical advisory cannot suppress unhandled Step-9 gate failures', async () => {
  const root = hookFixture();
  const started: any[] = [];
  const stage: any = stages.find((candidate: any) => candidate.id === '9-changes-judge');
  try {
    await stage.onGateFailure({
      ctx: { run: 'demo', repo: root }, executor: { start: (_stage: any, plan: any) => started.push(plan) },
      stage, round: 2,
      failure: {
        id: 'precheck', output: 'PRIMARY precheck output [modified]', why: 'precheck failed',
        advisory: [{ id: 'step9-changes', output: 'ADVISORY stale delta output', why: 'receipt stale' }],
      },
    });
    assert.equal(started.length, 1);
    assert.equal(started[0].label, 'step9-gate-adjudication-2');
    const task = readFileSync(join(root, started[0].task[0]), 'utf8');
    assert.match(task, /"id": "precheck"/);
    assert.match(task, /PRIMARY precheck output/);
    assert.doesNotMatch(task, /"id": "step9-changes"/, 'the successfully refreshed advisory is no longer cognitive residue');

    started.length = 0;
    await stage.onGateFailure({
      ctx: { run: 'demo', repo: root }, executor: { start: (_stage: any, plan: any) => started.push(plan) },
      stage, round: 3,
      failure: {
        id: 'proof-contract', output: 'proof contract full output', why: 'proof contract failed',
        advisory: [
          { id: 'finite-smoke', output: 'finite full output', why: 'finite failed' },
          { id: 'defect-ledger', output: 'ledger full output', why: 'ledger failed' },
        ],
      },
    });
    assert.equal(started.length, 1, 'one lead Alpha receives the complete nonmechanical battery residue');
    const all = readFileSync(join(root, started[0].task[0]), 'utf8');
    for (const id of ['proof-contract', 'finite-smoke', 'defect-ledger']) assert.match(all, new RegExp(`"id": "${id}"`));
    for (const output of ['proof contract full output', 'finite full output', 'ledger full output']) assert.match(all, new RegExp(output));

    started.length = 0;
    await stage.onGateFailure({
      ctx: { run: 'demo', repo: root }, executor: { start: (_stage: any, plan: any) => started.push(plan) },
      stage, round: 4,
      failure: { id: 'step9-judge-closure', output: 'closure receipt malformed', why: 'unreadable closure' },
    });
    assert.equal(started.length, 1, 'a closure failure with no narrow tuple work still reaches general adjudication');
    assert.match(readFileSync(join(root, started[0].task[0]), 'utf8'), /"id": "step9-judge-closure"/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
