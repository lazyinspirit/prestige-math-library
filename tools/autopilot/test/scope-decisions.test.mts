import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const REPO = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'scope-decisions.mjs');
const run = (root: string, args: string[]) => spawnSync(process.execPath, [TOOL, ...args, '--root', root], { encoding: 'utf8' });

test('Step 3 decisions are exact and legacy Step 9 runs fall back to full review', () => {
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
    let result = run(root, ['prepare', '--run', 'demo']);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(JSON.parse(readFileSync(join(research, 'demo-step9-scope-delta.json'), 'utf8')).pending_count, 1,
      'a run without Step 3 receipts receives a full Step 9 review');

    const receiptPath = join(research, 'demo-alpha-a-scope-decisions.json');
    assert.ok(readFileSync(receiptPath, 'utf8'), 'prepare refreshes group receipts after writing the delta');
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    receipt.decisions[0].decision = 'stands';
    receipt.decisions[0].evidence = 'The current plan places the theorem on destination after page-a.';
    writeFileSync(receiptPath, JSON.stringify(receipt, null, 2));
    result = run(root, ['check', '--run', 'demo']);
    assert.equal(result.status, 0, result.stderr);

    result = run(root, ['delta', '--run', 'demo']);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(JSON.parse(readFileSync(join(research, 'demo-step9-scope-delta.json'), 'utf8')).pending_count, 0,
      'an exact unchanged Step 3 decision is not re-spent');

    const coverage = JSON.parse(readFileSync(join(research, 'demo-batch-1.coverage.json'), 'utf8'));
    coverage.pages[0].canonical[0].reason = 'A materially changed justification that must be checked again.';
    writeFileSync(join(research, 'demo-batch-1.coverage.json'), JSON.stringify(coverage));
    result = run(root, ['delta', '--run', 'demo']);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(JSON.parse(readFileSync(join(research, 'demo-step9-scope-delta.json'), 'utf8')).pending_count, 1,
      'a changed decline cannot reuse the old decision');
  } finally { rmSync(root, { recursive: true, force: true }); }
});
