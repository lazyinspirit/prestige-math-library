import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import {
  finalAdjudicatorHistoricalPredecessorProblems,
  finalAdjudicatorPredecessorProblems,
  finalAdjudicatorQueueProblems,
  parseTerminalResolutions,
  TERMINAL_RESOLUTION_VERSION,
} from '../../step7-terminal-resolution.mjs';
import { MODELS } from '../../models.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const ITEM = 'ex-the-mobius-band-presented-by-two-regular-patches';

function run(args: string[]) {
  return spawnSync(process.execPath, args, { cwd: REPO, encoding: 'utf8' });
}

function currentHashes() {
  const result = run(['tools/tsx-run.mjs', 'tools/judge.mts', `items/${ITEM}.md`, '--context-hash']);
  assert.equal(result.status, 0, result.stderr);
  return JSON.parse(result.stdout);
}

function resolution(now: any) {
  return {
    version: 1,
    run: 'fixture',
    stage: '7-rejudge',
    id: ITEM,
    resolved_by: 'session',
    disposition: 'accepted-after-review',
    rejudge_rounds_exhausted: 3,
    exhausted_at: '2026-08-25T07:14:01.895Z',
    context_sha256: now.context_sha256,
    item_sha256: now.item_sha256,
    basis: 'A direct terminal review checked the stated domains, overlap equations, normal convention, and every cited fact after the three-round cap.',
    at: '2026-08-25T08:00:00.000Z',
  };
}

test('current final-adjudicator receipts require Astra medium after one Terra rejudge', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-terminal-v3-'));
  try {
    const path = join(dir, 'terminal.jsonl');
    const row: any = {
      version: TERMINAL_RESOLUTION_VERSION,
      run: 'fixture', stage: '7-rejudge', id: 'thm-demo',
      resolved_by: 'final-adjudicator', disposition: 'accepted-after-review',
      rejudge_rounds_exhausted: 1, exhausted_at: '2026-09-05T00:00:00.000Z',
      failure_evidence: {
        cycle_ids: ['terra-rejudge-1'],
        closure_path: 'research/fixture-closure.json', closure_sha256: 'a'.repeat(64),
        unresolved_as: 'unadjudicated',
      },
      context_sha256: 'b'.repeat(64), item_sha256: 'c'.repeat(64),
      basis: 'Astra independently adjudicated the Terra rejection against the current proof and its exact dependencies.',
      final_adjudicator: {
        group: 'a', model: MODELS.astra.id, effort: 'medium',
        queue_path: 'research/fixture-fa.json', queue_sha256: 'd'.repeat(64),
        queue_position: 1, queue_total: 1, dispatch_label: 'step7-fa-a-round-1',
        source_verification: 'familiar', authoritative_sources: [],
      },
      at: '2026-09-05T00:01:00.000Z',
    };
    writeFileSync(path, `${JSON.stringify(row)}\n`);
    assert.deepEqual(parseTerminalResolutions(path).errors, []);
    writeFileSync(path, `${JSON.stringify({
      ...row, final_adjudicator: { ...row.final_adjudicator, model: MODELS.sol.id, effort: 'xhigh' },
    })}\n`);
    assert.match(parseTerminalResolutions(path).errors.join('\n'), /gpt-6-astra\/medium/);
    const { final_adjudicator: _ignored, ...ownerRow } = row;
    writeFileSync(path, `${JSON.stringify({ ...ownerRow, resolved_by: 'owner' })}\n`);
    assert.match(parseTerminalResolutions(path).errors.join('\n'), /only by final-adjudicator/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('current terminal recording cannot bypass Astra with an owner or session resolution', () => {
  const result = run(['tools/step7-terminal-resolution.mjs', 'record',
    '--run', 'fixture', '--id', ITEM, '--resolved-by', 'session',
    '--disposition', 'accepted-after-review',
    '--basis', 'This deliberately long basis would otherwise satisfy the evidence-length check but may not bypass Astra.']);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /--resolved-by final-adjudicator/);
});

test('one current Terra verdict completes singleton judge coverage', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-terra-coverage-'));
  try {
    const manifest = join(dir, 'batch.pages.json');
    const ledger = join(dir, 'judge.jsonl');
    const closure = join(dir, 'closure.json');
    const now = currentHashes();
    writeFileSync(manifest, `${JSON.stringify([{ id: 'fixture-page', items: [{ id: ITEM, deps: [] }] }])}\n`);
    writeFileSync(ledger, `${JSON.stringify({
      id: ITEM,
      model: MODELS.terra.id,
      keep: true,
      context_sha256: now.context_sha256,
      item_sha256: now.item_sha256,
      at: '2026-08-26T00:00:00.000Z',
    })}\n`);
    const result = run(['tools/level-coverage.mjs', '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--out', closure, manifest]);
    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.equal(JSON.parse(readFileSync(ledger, 'utf8')).id, ITEM,
      'a noncanonical ledger filename must never be overwritten by the context cache');
    assert.match(result.stdout, /1\/1 current configured-judge verdict set/);
    assert.match(result.stdout, /1\/1 current pair/,
      'the live pre-singleton-lineup engine must still be able to parse its liveness counter');
    const parsed = JSON.parse(readFileSync(closure, 'utf8'));
    assert.equal(parsed.judge_lineup, 'terra');
    assert.equal(parsed.verdicts_complete, 1);
    assert.equal(parsed.closed, true);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('coverage rejects a cache/ledger collision before reading or writing evidence', () => {
  const result = run(['tools/level-coverage.mjs', '--judge-ledger', '/tmp/same-ledger.jsonl',
    '--context-hash-cache', '/tmp/same-ledger.jsonl']);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /cache must not overwrite the judge ledger/);
});

test('an exact terminal resolution closes missing judge coverage without fabricating a verdict or being poisoned by a published sibling', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-terminal-'));
  try {
    const manifest = join(dir, 'batch.pages.json');
    const ledger = join(dir, 'judge.jsonl');
    const receipt = join(dir, 'terminal.jsonl');
    const closure = join(dir, 'closure.json');
    const now = currentHashes();
    writeFileSync(manifest, `${JSON.stringify([{ id: 'fixture-page', items: [{ id: ITEM, deps: [] }] }])}\n`);
    writeFileSync(ledger, '');
    writeFileSync(receipt, [
      JSON.stringify(resolution(now)),
      JSON.stringify({ ...resolution(now), id: 'lem-cauchy-bounded' }),
    ].join('\n') + '\n');
    const result = run(['tools/level-coverage.mjs', '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--terminal-resolutions', receipt, '--out', closure, manifest]);
    assert.equal(result.status, 0, result.stderr || result.stdout);
    const parsed = JSON.parse(readFileSync(closure, 'utf8'));
    assert.equal(parsed.closed, true);
    assert.equal(parsed.verdicts_complete, 0, 'manual closure must not be reported as a judge verdict');
    assert.equal(parsed.pairs_complete, 0, 'the legacy compatibility count must agree');
    assert.equal(parsed.terminal_resolved.length, 1);
    assert.deepEqual(parsed.needs_rejudge, []);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('a terminal resolution becomes stale when either exact hash differs', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-terminal-stale-'));
  try {
    const manifest = join(dir, 'batch.pages.json');
    const ledger = join(dir, 'judge.jsonl');
    const receipt = join(dir, 'terminal.jsonl');
    const now = currentHashes();
    const row = resolution(now);
    row.item_sha256 = 'f'.repeat(64);
    writeFileSync(manifest, `${JSON.stringify([{ id: 'fixture-page', items: [{ id: ITEM, deps: [] }] }])}\n`);
    writeFileSync(ledger, '');
    writeFileSync(receipt, `${JSON.stringify(row)}\n`);
    const result = run(['tools/level-coverage.mjs', '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--terminal-resolutions', receipt, manifest]);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /terminal-resolution-stale/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('a fresh current judge pass supersedes a stale historical terminal resolution', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-terminal-superseded-'));
  try {
    const manifest = join(dir, 'batch.pages.json');
    const ledger = join(dir, 'judge.jsonl');
    const receipt = join(dir, 'terminal.jsonl');
    const closure = join(dir, 'closure.json');
    const now = currentHashes();
    const stale = { ...resolution(now), item_sha256: 'f'.repeat(64) };
    writeFileSync(manifest, `${JSON.stringify([{ id: 'fixture-page', items: [{ id: ITEM, deps: [] }] }])}\n`);
    writeFileSync(ledger, `${JSON.stringify({
      id: ITEM, model: MODELS.terra.id, keep: true,
      context_sha256: now.context_sha256, item_sha256: now.item_sha256,
      at: '2026-09-11T00:00:00.000Z',
    })}\n`);
    writeFileSync(receipt, `${JSON.stringify(stale)}\n`);

    const coverage = run(['tools/level-coverage.mjs', '--judge-only', '--verify-current-context',
      '--judge-ledger', ledger, '--terminal-resolutions', receipt, '--out', closure, manifest]);
    assert.equal(coverage.status, 0, coverage.stderr || coverage.stdout);
    const parsed = JSON.parse(readFileSync(closure, 'utf8'));
    assert.equal(parsed.closed, true);
    assert.equal(parsed.verdicts_complete, 1);
    assert.deepEqual(parsed.terminal_resolved, []);
    assert.deepEqual(parsed.terminal_superseded.map((row: any) => row.id), [ITEM]);

    const stamps = run(['tools/apply-judge-stamps.mjs', '--ledger', ledger, '--items', ITEM,
      '--terminal-resolutions', receipt]);
    assert.equal(stamps.status, 0, stamps.stderr || stamps.stdout);
    assert.match(stamps.stdout, /scope 1 \| stamped 1 \| skipped 0/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('stamp verification accepts terminal resolution but writes no pass stamp', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-terminal-stamp-'));
  try {
    const receipt = join(dir, 'terminal.jsonl');
    const ledger = join(dir, 'judge.jsonl');
    const now = currentHashes();
    writeFileSync(receipt, `${JSON.stringify(resolution(now))}\n`);
    writeFileSync(ledger, `${JSON.stringify({
      id: ITEM, model: MODELS.terra.id, keep: false,
      reason: 'Fixture rejection superseded by the exact terminal resolution.',
      context_sha256: now.context_sha256, item_sha256: now.item_sha256,
      at: '2026-09-05T00:00:00.000Z',
    })}\n`);
    const result = run(['tools/apply-judge-stamps.mjs',
      '--ledger', ledger, '--items', ITEM,
      '--terminal-resolutions', receipt, '--verify']);
    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(result.stdout, /1 terminal manual/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('the FA queue validator rejects duplicates, wrong ownership, and broken positions', () => {
  const queue: any = {
    version: 1, run: 'fixture', stage: '7-rejudge', group: 'a', dispatch_label: 'step7-fa-a-round-3',
    items: [
      { id: 'thm-one', owner: 'a', position: 1 },
      { id: 'thm-one', owner: 'b', position: 3 },
    ],
  };
  const errors = finalAdjudicatorQueueProblems(queue, { run: 'fixture', id: 'thm-one', group: 'a' });
  assert.ok(errors.some((error) => error.includes('appears more than once')));
  assert.ok(errors.some((error) => error.includes('must have position 2')));
  assert.ok(errors.some((error) => error.includes('is not owned by group a')));
});

test('the FA recorder structurally refuses item N until every predecessor is resolved in the same queue', () => {
  const queue = {
    version: 1, run: 'fixture', stage: '7-rejudge', group: 'a', dispatch_label: 'step7-fa-a-round-3',
    items: [
      { id: 'thm-one', owner: 'a', position: 1 },
      { id: 'thm-two', owner: 'a', position: 2 },
    ],
  };
  const queueHash = 'a'.repeat(64);
  assert.match(finalAdjudicatorPredecessorProblems(queue, 'thm-two', new Map(), queueHash)[0],
    /thm-one.*must be resolved before thm-two/);
  const latest = new Map([['thm-one', {
    resolved_by: 'final-adjudicator',
    final_adjudicator: { queue_sha256: queueHash, queue_position: 1 },
  }]]);
  assert.deepEqual(finalAdjudicatorPredecessorProblems(queue, 'thm-two', latest, queueHash), []);
});

test('resealing an earlier item does not erase a completed queue\'s historical order', () => {
  const queue = {
    items: [
      { id: 'thm-one', position: 1 },
      { id: 'thm-two', position: 2 },
    ],
  };
  const oldQueueHash = 'a'.repeat(64);
  const rows = [
    {
      id: 'thm-one', resolved_by: 'final-adjudicator', at: '2026-01-01T00:00:00.000Z',
      final_adjudicator: { queue_sha256: oldQueueHash, queue_position: 1 },
    },
    {
      id: 'thm-two', resolved_by: 'final-adjudicator', at: '2026-01-01T00:01:00.000Z',
      final_adjudicator: { queue_sha256: oldQueueHash, queue_position: 2 },
    },
    {
      id: 'thm-one', resolved_by: 'final-adjudicator', at: '2026-01-01T00:02:00.000Z',
      final_adjudicator: { queue_sha256: 'b'.repeat(64), queue_position: 1 },
    },
  ];
  assert.deepEqual(finalAdjudicatorHistoricalPredecessorProblems(
    queue, 'thm-two', rows, oldQueueHash, rows[1].at), []);
  assert.match(finalAdjudicatorHistoricalPredecessorProblems(
    queue, 'thm-two', rows.slice(1), oldQueueHash, rows[1].at)[0], /was not resolved before/);
});

test('the FA recorder CLI refuses an out-of-order item before touching repository mathematics', () => {
  const root = mkdtempSync(join(tmpdir(), 'step7-fa-cli-order-'));
  try {
    const research = join(root, 'research');
    const queuePath = join(research, 'fixture-step7-fa-a-round-3.json');
    mkdirSync(research);
    const queue = {
      version: 1, run: 'fixture', stage: '7-rejudge', group: 'a', round: 3,
      dispatch_label: 'step7-fa-a-round-3', state_dir: '.autopilot/fixture',
      items: [
        { id: 'thm-one', scope: 'run', owner: 'a', position: 1 },
        { id: 'thm-two', scope: 'run', owner: 'a', position: 2 },
      ],
    };
    writeFileSync(queuePath, `${JSON.stringify(queue, null, 2)}\n`);
    const result = run([join(REPO, 'tools/step7-terminal-resolution.mjs'), 'record',
      '--run', 'fixture', '--id', 'thm-two', '--resolved-by', 'final-adjudicator',
      '--group', 'a', '--queue', 'research/fixture-step7-fa-a-round-3.json',
      '--source-status', 'familiar', '--disposition', 'accepted-after-review',
      '--basis', 'This independent review checked every stated hypothesis and dependency against the adopted local conventions before accepting the repair.',
      '--root', root]);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /thm-one.*must be resolved before thm-two/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
