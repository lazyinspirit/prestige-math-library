import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import * as math from '../stages/mathlib.mts';

const root = fileURLToPath(new URL('../../..', import.meta.url));
const closeout = ['6-contract-close', '6-snapshot-v2', '6-pathway-sync-v2',
  '6-pathway-seed-v2', '6-pathway-author-v2', '6-stamps-v2', '6-readiness-v2',
  '6-evidence-v2', '6-report-baseline-v2', '6-owner-report-v2',
  '6-owner-report-render-v2', '6-close-v2'];
for (const [name, workflow, prefix] of [
  ['math', math, 'tools/'],
] as const) {
  const ctx: any = { run: 'demo', repo: root, doctor: true };
  const stage = (id: string): any => workflow.stages.find(s => s.id === id);
  test(`${name}: Step 5 freezes directly into six-step closeout`, () => {
    const ids = workflow.stages.map(s => s.id);
    assert.deepEqual(ids.slice(ids.indexOf('5-freeze') + 1), closeout);
    assert.equal(new Set(ids).size, ids.length);
    assert.ok(ids.every(id => /^[1-6](?:\.\d+)?[ab]?-/.test(id)));
    assert.match(workflow.workflowRevision, /six-step-v1-construction-scope$/);
    const freeze = stage('5-freeze').plan(ctx)[0];
    assert.equal(freeze.argv[1], `${prefix}touchlog.mjs`);
    assert.equal(freeze.argv.at(-1), 'post-step5');
    assert.deepEqual(stage('5-freeze').artifacts(ctx), ['research/demo-touches.json']);
  });
  test(`${name}: initial and retry batteries add one actual proof completeness gate`, () => {
    for (const id of ['5.8-gate', '5.10-gate']) {
      const gates = stage(id).gates(ctx), coverage = gates.filter(g => g.id === 'proof-contract-coverage');
      assert.equal(coverage.length, 1);
      assert.deepEqual(coverage[0].argv, ['node', `${prefix}proof-contract-coverage.mjs`,
        '--run', 'demo', '--contracts', 'research/demo-proof-contracts.json']);
      assert.ok(gates.findIndex(g => g.id === 'merge-contracts') < gates.indexOf(coverage[0]));
      assert.ok(gates.some(g => g.id === 'judge-closure'));
      assert.ok(gates.some(g => g.id === 'step5-round-certification'));
      assert.ok(gates.some(g => g.id === 'defect-ledger'));
    }
  });
  test(`${name}: mechanical closeout retains coverage and currency without audit attestations`, () => {
    const coverage = stage('6-readiness-v2').gates(ctx).find(g => g.id === 'level-coverage');
    assert.ok(coverage.argv.includes('--mechanical'));
    assert.ok(coverage.argv.includes('--contracts'));
    assert.ok(coverage.argv.includes('--verify-current-context'));
    assert.ok(!coverage.argv.includes('--audit-receipt') && !coverage.argv.includes('--spine-receipt'));
    assert.ok(!coverage.argv.some((v: string) => v.includes('step6-auditor')));
    const report = stage('6-owner-report-v2').plan(ctx)[0];
    assert.equal(report.task, 'research/demo-alpha-step6.task.md');
    assert.equal(report.resultArtifact, 'research/demo-step6-report.response.json');
    assert.equal(report.outputSchema, 'briefs/schemas/step6-report.json');
    assert.ok(existsSync(join(root, report.outputSchema)));
    const final = stage('6-close-v2').plan(ctx)[0];
    assert.equal(final.argv.at(-1), 'research/demo-dispatch/tool-close-step6-v2.result.json');
    assert.ok(stage('6-close-v2').gates(ctx).some(g => g.id === 'publication-readiness'));
  });
}
test('deleted review tools and recovery commands have no active entrypoints', () => {
  for (const engine of ['autopilot']) {
    assert.ok(!existsSync(join(root, 'tools', engine, 'src/step6-recovery.mts')));
    const cli = readFileSync(join(root, 'tools', engine, 'bin/autopilot.mts'), 'utf8');
    assert.doesNotMatch(cli, /case 'recover-step6'|import.*step6-recovery/);
  }
  for (const base of ['tools']) assert.ok(!existsSync(join(root, base, 'step6-changes.mjs')));
  for (const base of ['briefs']) {
    for (const obsolete of ['alpha-step6-adjudicate', 'alpha-step6-gate-adjudication', 'alpha-receipts', 'alpha-receipts-repair', 'alpha-impact-close'])
      assert.ok(!existsSync(join(root, base, 'tasks', `${obsolete}.md`)));
    assert.match(readFileSync(join(root, base, 'tasks/alpha-step6.md'), 'utf8'), /owner evidence interpretation/);
  }
});
