// A stage whose product is a report must require the report.
//
// WHY. 5a-adjudicate and 8-receipt demanded their artifacts; 5a/5b/8-scope/9-owner-report
// did not — so the step-9 owner report, the step-8 richness sweep and both
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
    '5b-cross': ['research/frontier-14-alpha-5b.md', 'research/frontier-14-5b-verdicts.jsonl'],
    '5b-close': 'research/frontier-14-step5-closure.json',
    '8-scope': 'research/frontier-14-alpha-step8-review.md',
    '8-scope-render': 'research/frontier-14-alpha-step8.md',
    '9-evidence-v2': 'research/frontier-14-step9-evidence.json',
    '9-owner-report-v2': 'research/frontier-14-step9-report.response.json',
    '9-owner-report-render-v2': 'research/frontier-14-step9-report.md',
  };
  for (const [id, path] of Object.entries(expect)) {
    const st = mod.stages.find((s: any) => s.id === id);
    assert.ok(st.artifacts, `${id} requires no artifact — its deliverable can be absent with the stage green`);
    assert.deepEqual(st.artifacts(ctx, 'all'), path);
  }
});

test('5a maps each batch to its owning group report', async () => {
  const mod = await import('../stages/mathlib.mts');
  const repo = mkdtempSync(join(tmpdir(), 'groups-'));
  mkdirSync(join(repo, 'research'));
  writeFileSync(join(repo, 'research', 'r9-alpha-groups.json'), JSON.stringify([
    { label: 'a', covers: ['2', '3', '7'] }, { label: 'b', covers: ['1', '4'] },
  ]));
  const ctx = { run: 'r9', repo };
  const st: any = mod.stages.find((s: any) => s.id === '5a-adjudicate');
  assert.ok(st.artifacts, '5a-adjudicate requires no artifact');
  assert.deepEqual(st.artifacts(ctx, '7'),
    ['research/r9-alpha-a-5a.md', 'research/r9-alpha-a-5a-decisions.json']);
  assert.deepEqual(st.artifacts(ctx, '4'),
    ['research/r9-alpha-b-5a.md', 'research/r9-alpha-b-5a-decisions.json']);
  assert.equal(st.artifacts({ run: 'r9', repo: mkdtempSync(join(tmpdir(), 'empty-')) }, '4'), null,
    'before 2-assign there is no group and no artifact demand');
});

test('8-receipt can regenerate a lapsed spine receipt', async () => {
  const mod = await import('../stages/mathlib.mts');
  const st: any = mod.stages.find((s: any) => s.id === '8-receipt');
  assert.ok(st.onGateFailure && st.maxFixRounds,
    'a lapsed spine receipt permanently blocked 8-receipt with no repair path');
});
