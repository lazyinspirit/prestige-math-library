// Regression coverage for Step 7's bounded paid loop and evidence boundary.
// These are deliberately small, local tests: no judge API is called.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  STEP7_MAX_REJUDGE_CYCLES,
  cycleCounts,
  exhaustedItems,
  fundedPreflightIsFresh,
  seedInitialFatalContexts,
} from '../../step7-rejudge-cycle.mjs';
import { readJsonlStrict, rejectionKey, step7AlertId, isFrozenStep5CrossRepair } from '../../step7-evidence.mjs';
import { terminalEvidence } from '../../step7-terminal-resolution.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('inherited Step-5 cross repairs require frozen claims and cannot license new edits', () => {
  const record = { kind: 'repaired', found_at_stage: '5b-cross', id: 'thm-published',
    group: 'a', pre_sha256: 'a'.repeat(64), post_sha256: 'b'.repeat(64) };
  const claimsText = JSON.stringify({ run: 'demo', id: record.id, group: 'a', pre_sha256: record.pre_sha256 }) + '\n';
  const context = { run: 'demo', baselineHash: 'b'.repeat(16), currentHash: 'b'.repeat(16), claimsText,
    closure: { version: 2, run: 'demo', status: 'closed', artifacts: {
      'research/demo-step5-published-claims.jsonl': createHash('sha256').update(claimsText).digest('hex'),
    } } };
  assert.equal(isFrozenStep5CrossRepair(record, context), true);
  const laterEdit = { ...context, currentHash: 'c'.repeat(16) };
  assert.equal(isFrozenStep5CrossRepair(record, laterEdit), true,
    'historical provenance survives a later edit; the guard must license that edit separately');
  assert.equal(isFrozenStep5CrossRepair(record, { ...context, baselineHash: 'c'.repeat(16) }), false);
  assert.equal(isFrozenStep5CrossRepair(record, { ...context, claimsText: claimsText + '\n' }), false);
  assert.equal(isFrozenStep5CrossRepair({ ...record, group: 'b' }, context), false);
  assert.equal(isFrozenStep5CrossRepair({ ...record, pre_sha256: 'c'.repeat(64) }, context), false);
  assert.equal(isFrozenStep5CrossRepair({ ...record, found_at_stage: '7-adjudicate' }, context), false);
  assert.equal(isFrozenStep5CrossRepair(record, { ...context, run: 'other' }), false);
});

test('the Step-7 paid budget permits exactly one Terra rejudge per repaired item', () => {
  const receipt = {
    cycles: [
      { cycle_id: 'seed', kind: 'initial-fatal', items: ['thm-demo-one'] },
      { cycle_id: 'c1', kind: 'repair', items: ['thm-demo-one', 'thm-demo-one'] },
    ],
  };
  assert.equal(STEP7_MAX_REJUDGE_CYCLES, 1);
  assert.equal(cycleCounts(receipt).get('thm-demo-one'), 1,
    'initial evidence is provenance and a duplicated fan-out id is still one paid rejudge');
  assert.deepEqual(exhaustedItems(['thm-demo-one'], receipt), ['thm-demo-one']);
});

test('the fatal context that licensed the first repair does not consume the paid rejudge', () => {
  const row = {
    id: 'thm-demo-one',
    model: 'gpt-5.6-terra',
    context_sha256: 'a'.repeat(64),
    outcome: 'confirmed_fatal',
    at: '2026-08-25T00:00:00Z',
  };
  const evidence = {
    answers: new Map([[rejectionKey(row), { row }]]),
    rejections: new Map([[rejectionKey(row), { row: { ...row, keep: false } }]]),
  };
  const receipt: any = { version: 1, run: 'demo', max_cycles_per_item: 2, cycles: [] };
  assert.equal(seedInitialFatalContexts(receipt, evidence, [row.id], 'demo'), true);
  assert.equal(cycleCounts(receipt).get(row.id), undefined);
  assert.equal(seedInitialFatalContexts(receipt, evidence, [row.id], 'demo'), false,
    'a later invocation cannot count the same original context twice');
  receipt.cycles.push({ cycle_id: 'repair-1', kind: 'repair', items: [row.id] });
  assert.deepEqual(exhaustedItems([row.id], receipt), [row.id],
    'the one post-repair Terra judgment exhausts the paid budget');
});

test('an exhausted item is refused before any funded-lane preflight', () => {
  const root = mkdtempSync(join(tmpdir(), 'step7-cycle-'));
  mkdirSync(join(root, 'research'));
  const receipt = join(root, 'research', 'demo-step7-rejudge-cycles.json');
  writeFileSync(receipt, JSON.stringify({
    version: 2,
    run: 'demo',
    max_cycles_per_item: 1,
    cycles: [
      { cycle_id: 'c1', kind: 'repair', items: ['thm-demo-one'] },
    ],
  }));
  const result = spawnSync(process.execPath, [
    join(REPO, 'tools/step7-rejudge-cycle.mjs'),
    '--root', root, '--run', 'demo', '--ledger', 'research/judge.jsonl',
    '--adjudications', 'research/adjudications.jsonl',
    '--cost', 'research/cost.jsonl', '--items', 'thm-demo-one',
  ], { encoding: 'utf8', timeout: 30_000 });
  assert.notEqual(result.status, 0);
  assert.match(`${result.stdout}${result.stderr}`, /intervention required/);
  assert.equal(readFileSync(receipt, 'utf8').includes('c3'), false);
});

test('only a successful, same-lineup, recent funded preflight is reusable', () => {
  const now = Date.parse('2026-08-25T10:00:00Z');
  const row = { version: 1, lineup: 'current:a+b', ok: true, at: '2026-08-25T09:59:00Z' };
  assert.equal(fundedPreflightIsFresh(row, 'current:a+b', now), true);
  assert.equal(fundedPreflightIsFresh({ ...row, ok: false }, 'current:a+b', now), false);
  assert.equal(fundedPreflightIsFresh(row, 'current:a+c', now), false);
  assert.equal(fundedPreflightIsFresh({ ...row, at: '2026-08-25T09:50:00Z' }, 'current:a+b', now), false);
});

test('cross-group alert identity includes the exact source rejection tuple', () => {
  const base = {
    source: 'step7-rejection',
    from_group: 'a',
    owning_group: 'b',
    item: 'thm-demo-target',
    finding: 'The imported bound is false in the endpoint case.',
    severity: 'fatal',
    source_rejection: {
      id: 'thm-demo-source',
      model: 'gpt-5.6-terra',
      context_sha256: 'a'.repeat(64),
    },
  };
  assert.equal(step7AlertId(base), step7AlertId({
    ...base,
    source_rejection: {
      context_sha256: 'a'.repeat(64),
      model: 'gpt-5.6-terra',
      id: 'thm-demo-source',
    },
  }), 'object key order cannot change identity');
  assert.notEqual(step7AlertId(base), step7AlertId({
    ...base,
    source_rejection: { ...base.source_rejection, context_sha256: 'b'.repeat(64) },
  }), 'a different frozen judge context is a different alert');
});

test('Step-7 ledgers report malformed JSONL with its exact line', () => {
  const root = mkdtempSync(join(tmpdir(), 'step7-jsonl-'));
  const path = join(root, 'ledger.jsonl');
  writeFileSync(path, '{"ok":true}\nnot-json\n');
  const parsed = readJsonlStrict(path, { allowMissing: false });
  assert.equal(parsed.rows.length, 1);
  assert.equal(parsed.errors.length, 1);
  assert.match(parsed.errors[0], /ledger\.jsonl:2: invalid JSON/);
});

test('the Step-7 guard rejects an adjudication that no judge rejection supports', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'step7-evidence-guard-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const decision = {
    id: 'thm-fixture', model: 'gpt-5.6-terra',
    context_sha256: 'a'.repeat(64), item_sha256: 'b'.repeat(64),
    outcome: 'confirmed_fatal',
  };
  const touches = join(root, 'touches.json');
  const judges = join(root, 'judge.jsonl');
  const adjudications = join(root, 'adjudications.jsonl');
  const scope = join(root, 'scope.json');
  writeFileSync(touches, JSON.stringify({ snapshots: [
    { label: 'pre-step7', hashes: { [decision.id]: 'b'.repeat(16) } },
    { label: 'post-step7', hashes: { [decision.id]: 'b'.repeat(16) } },
  ] }));
  writeFileSync(scope, JSON.stringify({ run: `guard-fixture-${process.pid}`,
    by_item: { [decision.id]: 'a' }, groups: [{ label: 'a' }] }));
  writeFileSync(judges, `${JSON.stringify({ ...decision, keep: false })}\n`);
  writeFileSync(adjudications, `${JSON.stringify(decision)}\n`);
  const check = () => spawnSync(process.execPath, [
    join(REPO, 'tools/step7-guard.mjs'), '--touches', touches,
    '--baseline', 'pre-step7', '--against', 'post-step7',
    '--judge-ledger', judges, '--adjudications', adjudications,
    '--scope', scope, '--json',
  ], { cwd: root, encoding: 'utf8', timeout: 30_000 });

  const valid = check();
  assert.equal(valid.status, 0, `${valid.stdout}${valid.stderr}`);
  assert.deepEqual(JSON.parse(valid.stdout).errors, []);

  const fabricated = { ...decision, id: 'thm-fabricated-never-judged' };
  writeFileSync(adjudications, `${JSON.stringify(decision)}\n${JSON.stringify(fabricated)}\n`);
  const invalid = check();
  assert.equal(invalid.status, 1, `${invalid.stdout}${invalid.stderr}`);
  assert.deepEqual(JSON.parse(invalid.stdout).errors.map(({ code, id }) => ({ code, id })),
    [{ code: 'judge-adjudication-no-rejection', id: fabricated.id }]);
});

test('terminal intervention binds the exact unresolved item and completed Terra rejudge', () => {
  const root = mkdtempSync(join(tmpdir(), 'step7-terminal-'));
  mkdirSync(join(root, '.autopilot'));
  mkdirSync(join(root, 'research'));
  writeFileSync(join(root, '.autopilot', 'state.json'), JSON.stringify({ run: 'demo' }));
  const initialContext = 'a'.repeat(64);
  writeFileSync(join(root, 'research', 'demo-judge.jsonl'), `${JSON.stringify({
    id: 'thm-demo-target', model: 'gpt-5.6-terra',
    context_sha256: initialContext, keep: false,
  })}\n`);
  writeFileSync(join(root, 'research', 'demo-judge-adjudications.jsonl'), `${JSON.stringify({
    id: 'thm-demo-target', model: 'gpt-5.6-terra',
    context_sha256: initialContext, outcome: 'confirmed_fatal',
  })}\n`);
  writeFileSync(join(root, 'research', 'demo-step7-rejudge-cycles.json'), JSON.stringify({
    version: 2,
    run: 'demo',
    max_cycles_per_item: 1,
    cycles: [
      { cycle_id: 'c1', kind: 'initial-fatal', items: ['thm-demo-target'],
        context_sha256: initialContext, started_at: '2026-08-25T00:00:00Z', completed_at: '2026-08-25T00:10:00Z' },
      { cycle_id: 'c2', kind: 'repair', items: ['thm-demo-target'], started_at: '2026-08-25T01:00:00Z', completed_at: '2026-08-25T01:10:00Z', exit_code: 0 },
    ],
  }));
  writeFileSync(join(root, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [],
    unadjudicated: [],
    open_fatal: ['thm-demo-target'],
  }));
  const exact = terminalEvidence(root, 'demo', 'thm-demo-target');
  assert.deepEqual(exact.evidence.cycle_ids, ['c2']);
  assert.equal(exact.evidence.unresolved_as, 'open_fatal');
  assert.match(exact.evidence.closure_path,
    /^research\/demo-step7-terminal-evidence\/[a-f0-9]{64}\.json$/);
  const frozen = readFileSync(join(root, exact.evidence.closure_path), 'utf8');
  assert.equal(createHash('sha256').update(frozen).digest('hex'), exact.evidence.closure_sha256);
  writeFileSync(join(root, 'research', 'demo-judge-closure.json'), JSON.stringify({ closed: true }));
  assert.equal(readFileSync(join(root, exact.evidence.closure_path), 'utf8'), frozen,
    'later closure recomputation must not overwrite terminal failure evidence');
  assert.throws(() => terminalEvidence(root, 'demo', 'thm-arbitrary-other'),
    /final adjudication is not licensed|not named in the current unresolved/);
});

test('a frozen historical cutover is write-once and cannot bless later edits', () => {
  const root = mkdtempSync(join(tmpdir(), 'step7-cutover-'));
  mkdirSync(join(root, '.autopilot'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research', 'demo-dispatch'), { recursive: true });
  mkdirSync(join(root, 'tools'));
  writeFileSync(join(root, 'tools', 'step7-scope.mjs'), 'process.exit(0);\n');
  writeFileSync(join(root, 'items', 'thm-demo-one.md'), '---\nid: thm-demo-one\n---\n\n## Statement\n\nTrue.\n');
  writeFileSync(join(root, '.autopilot', 'state.json'), JSON.stringify({
    run: 'demo',
    stages: { '7-rejudge': { gatesPassedAt: '2026-08-25T00:00:00Z' } },
  }));
  writeFileSync(join(root, 'research', 'demo-dispatch', 'tool-rejudge.result.json'),
    JSON.stringify({ run: 'demo', ok: true }));
  const argv = [join(REPO, 'tools/step7-cutover.mjs'), 'prepare', '--root', root,
    '--run', 'demo', '--dispatch-dir', 'research/demo-dispatch'];
  const first = spawnSync(process.execPath, argv, { encoding: 'utf8' });
  assert.equal(first.status, 0, `${first.stdout}${first.stderr}`);
  const receiptPath = join(root, 'research', 'demo-step7-cutover.json');
  const frozen = readFileSync(receiptPath, 'utf8');
  writeFileSync(join(root, 'items', 'thm-demo-one.md'), '---\nid: thm-demo-one\n---\n\n## Statement\n\nFalse.\n');
  const second = spawnSync(process.execPath, argv, { encoding: 'utf8' });
  assert.notEqual(second.status, 0, 'prepare must validate the old receipt, not overwrite it');
  assert.match(`${second.stdout}${second.stderr}`, /changed after frozen Step-7 cutover/);
  assert.equal(readFileSync(receiptPath, 'utf8'), frozen, 'the evidence boundary remains immutable');
});
