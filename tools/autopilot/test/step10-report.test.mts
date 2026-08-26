import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { stages } from '../stages/mathlib.mts';

const REPO = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'step10-report.mjs');
const READY = join(REPO, 'tools', 'publication-ready.mjs');
const runTool = (root: string, command: string) => spawnSync(process.execPath,
  [TOOL, command, '--run', 'demo', '--root', root], { encoding: 'utf8' });
const runReadiness = (root: string, mode: '--write' | '--verify', ...extra: string[]) => spawnSync(process.execPath,
  [READY, '--run', 'demo', mode, '--root', root, ...extra], { encoding: 'utf8' });

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'step10-evidence-'));
  mkdirSync(join(root, 'research'));
  mkdirSync(join(root, 'items'));
  mkdirSync(join(root, 'tools'));
  mkdirSync(join(root, 'library', 'analysis'), { recursive: true });
  writeFileSync(join(root, 'tools', 'pathway-closure.mjs'), 'console.log("fixture pathway closed");\n');
  writeFileSync(join(root, 'research', 'demo-scope-ledger.json'), JSON.stringify({ pages: [{ id: 'page-a', kind: 'A', batch: '1' }] }));
  writeFileSync(join(root, 'library', 'analysis', 'page-a.md'), '---\npage: page-a\nstatus: draft\nitems: [thm-a]\n---\nPage\n');
  writeFileSync(join(root, 'items', 'thm-a.md'), '---\nid: thm-a\nkind: theorem\nstatus: draft\n---\nTheorem\n');
  writeFileSync(join(root, 'research', 'demo-publication-readiness.json'), JSON.stringify({ run: 'demo',
    verdict: 'publishable-pending-owner-approval', workflow_owned_blockers: [], content_sha256: 'content',
    owner_actions_remaining: ['personal mathematical audit', 'deliberate status:published changes', 'push/deployment'] }));
  writeFileSync(join(root, 'research', 'demo-judge-closure.json'), JSON.stringify({ judge_lineup: 'terra', closed: true,
    scope: 1, verdicts_complete: 1, needs_rejudge: [], unadjudicated: [], open_fatal: [] }));
  writeFileSync(join(root, 'research', 'demo-pathway-closure.json'), JSON.stringify({ briefs: [
    { category: 'analysis', status: 'closed', disposition: 'rewritten' },
  ] }));
  writeFileSync(join(root, 'research', 'demo-touches.json'), JSON.stringify({ snapshots: [
    { label: 'a', hashes: { 'thm-a': 'a' } }, { label: 'b', hashes: { 'thm-a': 'b' } }, { label: 'c', hashes: { 'thm-a': 'c' } },
  ] }));
  writeFileSync(join(root, 'research', 'demo-judge.jsonl'),
    `${JSON.stringify({ id: 'thm-a', model: 'gpt-5.6-terra', context_sha256: 'ctx', item_sha256: 'item', keep: true })}\n`);
  writeFileSync(join(root, 'research', 'demo-judge-adjudications.jsonl'), '');
  writeFileSync(join(root, 'research', 'demo-judge-context-hashes.json'), JSON.stringify({ cached: 'before' }));
  writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), [
    JSON.stringify({ defect_id: 'demo-D001', run: 'demo', severity: 'fatal', subject: 'thm-a', class: 'accuracy',
      subclass: 'invalid-inference', location: 'proof-step', disposition: 'fixed', caught_at_stage: '8-adjudicate', caught_by_role: 'judge-deepseek', repair_cost: 'repair+rejudge' }),
    JSON.stringify({ defect_id: 'demo-D002', run: 'demo', severity: 'fatal', subject: 'thm-a', class: 'accuracy',
      subclass: 'missing-hypothesis', location: 'statement', disposition: 'fixed', caught_at_stage: '8-adjudicate', caught_by_role: 'judge-terra', repair_cost: 'repair+rejudge' }),
  ].join('\n') + '\n');
  return root;
}

test('Step 10 mechanically reconciles and renders every fatal row', () => {
  const root = fixture();
  try {
    let result = runTool(root, 'evidence');
    assert.equal(result.status, 0, result.stderr);
    const evidence = JSON.parse(readFileSync(join(root, 'research', 'demo-step10-evidence.json'), 'utf8'));
    assert.equal(evidence.defects.fatal_count, 2);
    assert.equal(evidence.judges.configured_set_stats.complete_versions, 1);
    assert.equal(evidence.judges.configured_set_stats.all_keep, 1);
    assert.deepEqual(evidence.repeated_repairs, [{ id: 'thm-a', repairs: 2 }]);
    result = runTool(root, 'check-evidence');
    assert.equal(result.status, 0, result.stderr);

    writeFileSync(join(root, 'research', 'demo-step10-report.response.json'), JSON.stringify({
      version: 2,
      readiness_verdict: 'publishable-pending-owner-approval',
      executive_summary: 'The build is mathematically closed and ready for the owner’s final audit.',
      caveats: ['The same theorem required two repairs, so it deserves the owner’s first close reading.'],
      owner_reading_priorities: [{ subject: 'The repaired theorem thm-a', reason: 'It accounts for both fatal rows and two repair transitions.' }],
      recommendations: [],
    }));
    result = runTool(root, 'snapshot');
    assert.equal(result.status, 0, result.stderr);
    result = runTool(root, 'check-response');
    assert.equal(result.status, 0, result.stderr);
    result = runTool(root, 'render');
    assert.equal(result.status, 0, result.stderr);
    const report = readFileSync(join(root, 'research', 'demo-step10-report.md'), 'utf8');
    assert.equal((report.match(/demo-D001/g) ?? []).length, 1);
    assert.equal((report.match(/demo-D002/g) ?? []).length, 1);
    assert.match(report, /after the 2-cycle cap/,
      'the report must derive the executable Step-8 cap instead of retaining stale prose');
    assert.doesNotMatch(report, /three-round cap/);
    result = runTool(root, 'check');
    assert.equal(result.status, 0, result.stderr);

    writeFileSync(join(root, 'items', 'thm-a.md'), 'unexpected mathematical mutation\n');
    result = runTool(root, 'check');
    assert.equal(result.status, 1);
    assert.match(result.stderr, /step10-report-tree-changed.*items\/thm-a.md/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('Step 10 places evidence after final readiness and before the protected report', () => {
  const ids = stages.map((stage: any) => stage.id);
  for (const id of ['10-readiness-v2', '10-evidence-v2', '10-report-baseline-v2', '10-owner-report-v2', '10-owner-report-render-v2', '10-close-v2']) assert.ok(ids.includes(id));
  assert.ok(ids.indexOf('10-readiness-v2') < ids.indexOf('10-evidence-v2'));
  assert.ok(ids.indexOf('10-evidence-v2') < ids.indexOf('10-report-baseline-v2'));
  assert.ok(ids.indexOf('10-report-baseline-v2') < ids.indexOf('10-owner-report-v2'));
  const ctx = { run: 'demo', repo: REPO };
  const report: any = stages.find((stage: any) => stage.id === '10-owner-report-v2');
  assert.equal(report.plan(ctx)[0].role, 'alpha-report');
  assert.ok(report.gates(ctx).some((gate: any) => gate.id === 'step10-evidence'));
});

test('publication readiness seals protected inputs without rejecting expected report outputs', () => {
  const root = fixture();
  try {
    let result = runReadiness(root, '--write');
    assert.equal(result.status, 0, result.stderr);
    const receipt = JSON.parse(readFileSync(join(root, 'research', 'demo-publication-readiness.json'), 'utf8'));
    assert.equal(receipt.schema, 2);
    assert.ok(receipt.protected_tree_files > 0);
    assert.match(receipt.protected_tree_sha256, /^[a-f0-9]{64}$/);

    result = runReadiness(root, '--verify');
    assert.equal(result.status, 0, result.stderr);
    writeFileSync(join(root, 'research', 'demo-judge-context-hashes.json'), JSON.stringify({ cached: 'refreshed-by-closure-gate' }));
    result = runReadiness(root, '--verify');
    assert.equal(result.status, 0, result.stderr);
    writeFileSync(join(root, 'research', 'demo-step10-report.md'), 'Expected owner report output.\n');
    result = runReadiness(root, '--verify', '--require-report');
    assert.equal(result.status, 0, result.stderr);

    writeFileSync(join(root, 'SCHEMA.md'), 'unexpected protected change\n');
    result = runReadiness(root, '--verify', '--require-report');
    assert.equal(result.status, 1);
    assert.match(result.stderr, /protected_tree_(?:files|sha256) is stale/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
