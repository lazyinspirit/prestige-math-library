import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { stages } from '../stages/mathlib.mts';

const REPO = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const ctx: any = { run: 'frontier-16', repo: REPO,
  dispatchDir: join(REPO, 'research', 'frontier-16-dispatch') };

test('Step 10 orders pathway, initial Sigma, Tau, rejudge, final Sigma, readiness, report, close', () => {
  const ids = stages.map((s: any) => s.id);
  const ordered = ['10-contract-close', '10-pathway-author-v2', '10-render-initial-v2',
    '10-sigma-initial-v2', '10-tau-baseline-v2', '10-tau-repair-v2',
    '10-tau-guard-v2', '10-tau-rejudge-v2', '10-stamps-v2',
    '10-render-final-v2', '10-sigma-final-v2', '10-readiness-v2',
    '10-owner-report-v2', '10-close-v2'];
  assert.deepEqual([...ordered].sort((a, b) => ids.indexOf(a) - ids.indexOf(b)), ordered);
});

test('Sigma is read-only visual adjudication and final rejection has no repair loop', () => {
  for (const phase of ['initial', 'final']) {
    const stage: any = stages.find((s: any) => s.id === `10-sigma-${phase}-v2`);
    const plan = stage.plan(ctx, ['all'])[0];
    assert.equal(plan.role, 'sigma');
    assert.equal(plan.outputSchema, 'briefs/schemas/sigma.json');
    assert.equal(plan.resultArtifact, `research/frontier-16-sigma-${phase}.json`);
    // Images resolve from the phase manifest at dispatch time. A planned run
    // has no final captures yet; a completed end-to-end fixture does. In either
    // state final Sigma may use only the final capture set, never initial bytes.
    if (phase === 'initial') assert.ok(plan.images.length > 0, 'initial Sigma receives no images');
    else for (const image of plan.images) {
      assert.match(image, /\/final\//);
      assert.doesNotMatch(image, /\/initial\//, 'final Sigma borrowed stale initial images');
    }
  }
  const final: any = stages.find((s: any) => s.id === '10-sigma-final-v2');
  assert.equal(final.maxFixRounds, undefined, 'final Sigma reject must block, not enter a polish loop');
  assert.equal(final.onGateFailure, undefined);
});

test('Tau is one exact-finding repair pass followed by a content-loss guard and paired rejudge', () => {
  const tau: any = stages.find((s: any) => s.id === '10-tau-repair-v2');
  assert.equal(tau.plan(ctx, ['all'])[0].role, 'tau');
  assert.equal(tau.maxFixRounds, undefined);
  const guard: any = stages.find((s: any) => s.id === '10-tau-guard-v2');
  assert.ok(guard.plan(ctx, ['all'])[0].argv.includes('tools/visual-repair.mjs'));
  const rejudge: any = stages.find((s: any) => s.id === '10-tau-rejudge-v2');
  assert.ok(rejudge.plan(ctx, ['all'])[0].argv.includes('tools/tau-rejudge.mjs'));
  const prompt = readFileSync(join(REPO, 'briefs', 'tau.md'), 'utf8');
  assert.match(prompt, /Never delete or\s+weaken a claim, result, proof step, dependency, item, page entry/);
});

test('terminal close requires structured publication readiness', () => {
  const last: any = stages.at(-1);
  assert.equal(last.id, '10-close-v2');
  const tools = last.gates(ctx).map((g: any) => g.argv);
  assert.ok(tools.some((argv: string[]) => argv.includes('tools/publication-ready.mjs') && argv.includes('--require-report')));
  const readiness = readFileSync(join(REPO, 'tools', 'publication-ready.mjs'), 'utf8');
  assert.match(readiness, /visual-repair\.mjs', 'verify'/,
    'readiness must verify the durable Tau boundary receipt, not reattribute later Step 10 artifacts to Tau');
});
