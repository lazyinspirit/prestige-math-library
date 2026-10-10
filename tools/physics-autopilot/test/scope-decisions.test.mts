import { spawnSync } from './fixture-process.mts';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

import { join } from 'node:path';
import { tmpdir } from 'node:os';

const REPO = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools/physics-support', 'scope-decisions.mjs');
const run = (root: string, args: string[]) => spawnSync(process.execPath, [TOOL, ...args, '--root', root], { encoding: 'utf8' });

test('Step 3 decisions remain pending until reviewed and invalidate on changed rows', () => {
  const root = mkdtempSync(join(tmpdir(), 'scope-decisions-'));
  const research = join(root, 'research');
  mkdirSync(research);
  writeFileSync(join(research, 'plan-spec.json'), JSON.stringify({ pages: [
    { id: 'base', order: 1, requires: [], items: [] },
    { id: 'page-a', order: 2, requires: ['base'], items: [] },
    { id: 'destination', order: 3, requires: ['page-a'], items: [] },
  ] }));
  writeFileSync(join(research, 'demo-alpha-groups.json'), JSON.stringify([{ label: 'a', covers: ['1'] }]));
  writeFileSync(join(research, 'demo-batch-1.coverage.json'), JSON.stringify({ pages: [{ page: 'page-a', canonical: [
    { name: 'A declined theorem', disposition: 'deferred', destination: 'destination', reason: 'Owned by the destination page.' },
  ], sources: [] }] }));
  try {
    let result = run(root, ['refresh', '--run', 'demo', '--all']);
    assert.equal(result.status, 0, result.stderr);

    const receiptPath = join(research, 'demo-alpha-a-scope-decisions.json');
    assert.ok(readFileSync(receiptPath, 'utf8'), 'refresh initializes group decisions without reviewing them');
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    receipt.decisions[0].decision = 'stands';
    receipt.decisions[0].evidence = 'The current plan places the theorem on destination after page-a.';
    writeFileSync(receiptPath, JSON.stringify(receipt, null, 2));
    result = run(root, ['check', '--run', 'demo']);
    assert.equal(result.status, 0, result.stderr);

    const coverage = JSON.parse(readFileSync(join(research, 'demo-batch-1.coverage.json'), 'utf8'));
    coverage.pages[0].canonical[0].reason = 'A materially changed justification that must be checked again.';
    writeFileSync(join(research, 'demo-batch-1.coverage.json'), JSON.stringify(coverage));
    result = run(root, ['check', '--run', 'demo']);
    assert.equal(result.status, 1, 'a changed decline cannot reuse the old decision');
    assert.match(result.stderr, /stale row or closure context/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('unassigned coverage batches receive fallback decisions in every default operation', () => {
  const root = mkdtempSync(join(tmpdir(), 'scope-decisions-fallback-'));
  const research = join(root, 'research');
  mkdirSync(research);
  writeFileSync(join(research, 'plan-spec.json'), JSON.stringify({ pages: [
    { id: 'assigned', order: 1, requires: [], items: [] },
    { id: 'unassigned', order: 2, requires: [], items: [] },
    { id: 'destination', order: 3, requires: ['assigned', 'unassigned'], items: [] },
  ] }));
  writeFileSync(join(research, 'demo-alpha-groups.json'), JSON.stringify([{ label: 'a', covers: ['1'] }]));
  for (const [batch, page] of [['1', 'assigned'], ['2', 'unassigned']]) {
    writeFileSync(join(research, `demo-batch-${batch}.coverage.json`), JSON.stringify({ pages: [{
      page, canonical: [{ name: `${page} theorem`, disposition: 'deferred',
        destination: 'destination', reason: 'The destination page owns this theorem.' }], sources: [],
    }] }));
  }
  try {
    let result = run(root, ['refresh', '--run', 'demo', '--all']);
    assert.equal(result.status, 0, result.stderr);
    const assignedPath = join(research, 'demo-alpha-a-scope-decisions.json');
    const fallbackPath = join(research, 'demo-alpha-all-scope-decisions.json');
    const assigned = JSON.parse(readFileSync(assignedPath, 'utf8'));
    const fallback = JSON.parse(readFileSync(fallbackPath, 'utf8'));
    assert.equal(assigned.decisions.length, 1);
    assert.equal(fallback.decisions.length, 1);
    assert.equal(fallback.decisions[0].group, 'all');

    assigned.decisions[0].decision = 'stands';
    assigned.decisions[0].evidence = 'The assigned decline is owned by destination.';
    writeFileSync(assignedPath, JSON.stringify(assigned, null, 2));
    result = run(root, ['check', '--run', 'demo', '--group', 'a']);
    assert.equal(result.status, 0, result.stderr);
    result = run(root, ['check', '--run', 'demo']);
    assert.notEqual(result.status, 0, 'default check must include the unassigned batch');
    assert.match(result.stdout, /2 current decline\(s\)/);

    fallback.decisions[0].decision = 'stands';
    fallback.decisions[0].evidence = 'The unassigned decline is owned by destination.';
    writeFileSync(fallbackPath, JSON.stringify(fallback, null, 2));
    result = run(root, ['refresh', '--run', 'demo', '--all']);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(JSON.parse(readFileSync(fallbackPath, 'utf8')).decisions[0].decision, 'stands');
    result = run(root, ['check', '--run', 'demo']);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /2 current decline\(s\), 0 error\(s\)/);

    result = run(root, ['check', '--run', 'demo']);
    assert.equal(result.status, 0, result.stderr);

  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('removed Step-6 scope preparation and render modes are unavailable', () => {
  for (const mode of ['prepare', 'delta', 'render']) {
    const result = run('/tmp', [mode, '--run', 'demo']);
    assert.equal(result.status, 2);
    assert.match(result.stderr, /<refresh\|check>/);
  }
});
