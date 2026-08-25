// A stage whose product is a report must require the report.
//
// WHY. 6a-read and 9-receipt demanded their artifacts; 6b/6c/9-scope/10-owner-report
// did not — so the step-10 owner report, the step-9 richness sweep and both
// adjudication reports could be absent with the stage green, as long as the
// agent exited 0 and the ledger gates passed. reader-7-over-reader-1 taught
// the artifact rule; it was applied unevenly.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('every report-bearing stage names its deliverable', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  const expect: Record<string, string | string[]> = {
    '6c-cross': ['research/frontier-14-alpha-6c.md', 'research/frontier-14-6c-verdicts.jsonl'],
    '6d-close': 'research/frontier-14-step6-closure.json',
    '9-scope': 'research/frontier-14-alpha-step9.md',
    '10-evidence-v2': 'research/frontier-14-step10-evidence.json',
    '10-owner-report-v2': 'research/frontier-14-step10-report.response.json',
    '10-owner-report-render-v2': 'research/frontier-14-step10-report.md',
  };
  for (const [id, path] of Object.entries(expect)) {
    const st = mod.stages.find((s: any) => s.id === id);
    assert.ok(st.artifacts, `${id} requires no artifact — its deliverable can be absent with the stage green`);
    assert.deepEqual(st.artifacts(ctx, 'all'), path);
  }
});

test('6b maps each batch to its owning group report', async () => {
  const mod = await import('../stages/mathlib.mts');
  const repo = mkdtempSync(join(tmpdir(), 'groups-'));
  mkdirSync(join(repo, 'research'));
  writeFileSync(join(repo, 'research', 'r9-alpha-groups.json'), JSON.stringify([
    { label: 'a', covers: ['2', '3', '7'] }, { label: 'b', covers: ['1', '4'] },
  ]));
  const ctx = { run: 'r9', repo };
  const st: any = mod.stages.find((s: any) => s.id === '6b-adjudicate');
  assert.ok(st.artifacts, '6b-adjudicate requires no artifact');
  assert.deepEqual(st.artifacts(ctx, '7'),
    ['research/r9-alpha-a-6b.md', 'research/r9-alpha-a-6b-decisions.json']);
  assert.deepEqual(st.artifacts(ctx, '4'),
    ['research/r9-alpha-b-6b.md', 'research/r9-alpha-b-6b-decisions.json']);
  assert.equal(st.artifacts({ run: 'r9', repo: mkdtempSync(join(tmpdir(), 'empty-')) }, '4'), null,
    'before 2-assign there is no group and no artifact demand');
});

test('9-receipt can regenerate a lapsed spine receipt', async () => {
  const mod = await import('../stages/mathlib.mts');
  const st: any = mod.stages.find((s: any) => s.id === '9-receipt');
  assert.ok(st.onGateFailure && st.maxFixRounds,
    'a lapsed spine receipt permanently blocked 9-receipt with no repair path');
});
