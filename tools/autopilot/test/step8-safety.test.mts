// Regression coverage for Step 8's bounded paid loop and evidence boundary.
// These are deliberately small, local tests: no judge API is called.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  STEP8_MAX_REJUDGE_CYCLES,
  cycleCounts,
  exhaustedItems,
  fundedPreflightIsFresh,
  seedInitialFatalContexts,
} from '../../step8-rejudge-cycle.mjs';
import { readJsonlStrict, rejectionKey, step8AlertId } from '../../step8-evidence.mjs';
import { terminalEvidence } from '../../step8-terminal-resolution.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('the Step-8 paid budget counts frozen contexts per item and stops at two', () => {
  const receipt = {
    cycles: [
      { cycle_id: 'c1', items: ['thm-demo-one', 'thm-demo-one', 'thm-demo-two'] },
      { cycle_id: 'c2', items: ['thm-demo-one'] },
    ],
  };
  assert.equal(STEP8_MAX_REJUDGE_CYCLES, 2);
  assert.equal(cycleCounts(receipt).get('thm-demo-one'), 2,
    'a duplicated id inside one fan-out is still one frozen context');
  assert.equal(cycleCounts(receipt).get('thm-demo-two'), 1);
  assert.deepEqual(exhaustedItems(['thm-demo-two', 'thm-demo-one'], receipt), ['thm-demo-one']);
});

test('the fatal context that licensed the first repair counts as cycle one', () => {
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
  assert.equal(cycleCounts(receipt).get(row.id), 1);
  assert.equal(seedInitialFatalContexts(receipt, evidence, [row.id], 'demo'), false,
    'a later invocation cannot count the same original context twice');
  receipt.cycles.push({ cycle_id: 'repair-1', kind: 'repair', items: [row.id] });
  assert.deepEqual(exhaustedItems([row.id], receipt), [row.id],
    'only one post-repair judge context remains after the original fatal');
});

test('an exhausted item is refused before any funded-lane preflight', () => {
  const root = mkdtempSync(join(tmpdir(), 'step8-cycle-'));
  mkdirSync(join(root, 'research'));
  const receipt = join(root, 'research', 'demo-step8-rejudge-cycles.json');
  writeFileSync(receipt, JSON.stringify({
    version: 1,
    run: 'demo',
    max_cycles_per_item: 2,
    cycles: [
      { cycle_id: 'c1', items: ['thm-demo-one'] },
      { cycle_id: 'c2', items: ['thm-demo-one'] },
    ],
  }));
  const result = spawnSync(process.execPath, [
    join(REPO, 'tools/step8-rejudge-cycle.mjs'),
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
    source: 'step8-rejection',
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
  assert.equal(step8AlertId(base), step8AlertId({
    ...base,
    source_rejection: {
      context_sha256: 'a'.repeat(64),
      model: 'gpt-5.6-terra',
      id: 'thm-demo-source',
    },
  }), 'object key order cannot change identity');
  assert.notEqual(step8AlertId(base), step8AlertId({
    ...base,
    source_rejection: { ...base.source_rejection, context_sha256: 'b'.repeat(64) },
  }), 'a different frozen judge context is a different alert');
});

test('Step-8 ledgers report malformed JSONL with its exact line', () => {
  const root = mkdtempSync(join(tmpdir(), 'step8-jsonl-'));
  const path = join(root, 'ledger.jsonl');
  writeFileSync(path, '{"ok":true}\nnot-json\n');
  const parsed = readJsonlStrict(path, { allowMissing: false });
  assert.equal(parsed.rows.length, 1);
  assert.equal(parsed.errors.length, 1);
  assert.match(parsed.errors[0], /ledger\.jsonl:2: invalid JSON/);
});

test('the Step-8 guard rejects an adjudication that no judge rejection supports',
  { skip: !existsLiveFrontierEvidence() }, () => {
    const run = `step8-fabricated-${process.pid}`;
    const adjudications = join(REPO, 'research', `${run}-adjudications.jsonl`);
    try {
      const live = readFileSync(join(REPO, 'research/frontier-18-judge-adjudications.jsonl'), 'utf8');
      const fabricated = {
        id: 'thm-fabricated-never-judged',
        model: 'gpt-5.6-terra',
        context_sha256: 'f'.repeat(64),
        item_sha256: 'e'.repeat(64),
        outcome: 'confirmed_fatal',
      };
      writeFileSync(adjudications, `${live.trimEnd()}\n${JSON.stringify(fabricated)}\n`);
      const result = spawnSync(process.execPath, [
        join(REPO, 'tools/step8-guard.mjs'),
        '--touches', 'research/frontier-18-touches.json',
        '--baseline', 'pre-step8',
        '--judge-ledger', 'research/frontier-18-judge.jsonl',
        '--adjudications', `research/${run}-adjudications.jsonl`,
        '--scope', 'research/frontier-18-step8-scope.json',
        '--published-repairs', 'research/frontier-18-step8-published-repairs.jsonl',
        '--terminal-resolutions', 'research/frontier-18-step8-terminal-resolutions.jsonl',
      ], { cwd: REPO, encoding: 'utf8', timeout: 120_000 });
      assert.notEqual(result.status, 0);
      assert.match(`${result.stdout}${result.stderr}`, /judge-adjudication-no-rejection/);
    } finally {
      rmSync(adjudications, { force: true });
    }
  });

test('terminal intervention binds the exact unresolved item and two cycle receipts', () => {
  const root = mkdtempSync(join(tmpdir(), 'step8-terminal-'));
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
  writeFileSync(join(root, 'research', 'demo-step8-rejudge-cycles.json'), JSON.stringify({
    version: 1,
    run: 'demo',
    max_cycles_per_item: 2,
    cycles: [
      { cycle_id: 'c1', kind: 'initial-fatal', items: ['thm-demo-target'],
        context_sha256: initialContext, started_at: '2026-08-25T00:00:00Z', completed_at: '2026-08-25T00:10:00Z' },
      { cycle_id: 'c2', items: ['thm-demo-target'], started_at: '2026-08-25T01:00:00Z', completed_at: '2026-08-25T01:10:00Z' },
    ],
  }));
  writeFileSync(join(root, 'research', 'demo-judge-closure.json'), JSON.stringify({
    needs_rejudge: [],
    unadjudicated: [],
    open_fatal: ['thm-demo-target'],
  }));
  const exact = terminalEvidence(root, 'demo', 'thm-demo-target');
  assert.deepEqual(exact.evidence.cycle_ids, ['c1', 'c2']);
  assert.equal(exact.evidence.unresolved_as, 'open_fatal');
  assert.match(exact.evidence.closure_path,
    /^research\/demo-step8-terminal-evidence\/[a-f0-9]{64}\.json$/);
  const frozen = readFileSync(join(root, exact.evidence.closure_path), 'utf8');
  assert.equal(createHash('sha256').update(frozen).digest('hex'), exact.evidence.closure_sha256);
  writeFileSync(join(root, 'research', 'demo-judge-closure.json'), JSON.stringify({ closed: true }));
  assert.equal(readFileSync(join(root, exact.evidence.closure_path), 'utf8'), frozen,
    'later closure recomputation must not overwrite terminal failure evidence');
  assert.throws(() => terminalEvidence(root, 'demo', 'thm-arbitrary-other'),
    /terminal intervention is not licensed|not named in the current unresolved/);
});

test('a frozen historical cutover is write-once and cannot bless later edits', () => {
  const root = mkdtempSync(join(tmpdir(), 'step8-cutover-'));
  mkdirSync(join(root, '.autopilot'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'research', 'demo-dispatch'), { recursive: true });
  mkdirSync(join(root, 'tools'));
  writeFileSync(join(root, 'tools', 'step8-scope.mjs'), 'process.exit(0);\n');
  writeFileSync(join(root, 'items', 'thm-demo-one.md'), '---\nid: thm-demo-one\n---\n\n## Statement\n\nTrue.\n');
  writeFileSync(join(root, '.autopilot', 'state.json'), JSON.stringify({
    run: 'demo',
    stages: { '8-rejudge': { gatesPassedAt: '2026-08-25T00:00:00Z' } },
  }));
  writeFileSync(join(root, 'research', 'demo-dispatch', 'tool-rejudge.result.json'),
    JSON.stringify({ run: 'demo', ok: true }));
  const argv = [join(REPO, 'tools/step8-cutover.mjs'), 'prepare', '--root', root,
    '--run', 'demo', '--dispatch-dir', 'research/demo-dispatch'];
  const first = spawnSync(process.execPath, argv, { encoding: 'utf8' });
  assert.equal(first.status, 0, `${first.stdout}${first.stderr}`);
  const receiptPath = join(root, 'research', 'demo-step8-cutover.json');
  const frozen = readFileSync(receiptPath, 'utf8');
  writeFileSync(join(root, 'items', 'thm-demo-one.md'), '---\nid: thm-demo-one\n---\n\n## Statement\n\nFalse.\n');
  const second = spawnSync(process.execPath, argv, { encoding: 'utf8' });
  assert.notEqual(second.status, 0, 'prepare must validate the old receipt, not overwrite it');
  assert.match(`${second.stdout}${second.stderr}`, /changed after frozen Step-8 cutover/);
  assert.equal(readFileSync(receiptPath, 'utf8'), frozen, 'the evidence boundary remains immutable');
});

function existsLiveFrontierEvidence(): boolean {
  return [
    'research/frontier-18-touches.json',
    'research/frontier-18-judge.jsonl',
    'research/frontier-18-judge-adjudications.jsonl',
    'research/frontier-18-step8-scope.json',
  ].every((path) => {
    try { readFileSync(join(REPO, path)); return true; } catch { return false; }
  });
}
