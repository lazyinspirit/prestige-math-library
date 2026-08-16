// plan-spec.json and the batch manifests must agree before anything expands
// pages into items.
//
// WHY. judge-sweep expands `--pages` via plan-spec.json, spliced once at step
// 4; level-coverage computes closure from the batch manifests. briefs/alpha.md
// licenses 6b/6c Alphas to add or delete in-flight items. An item added to a
// manifest after step 4 therefore either escapes the sweep entirely or
// hard-stops closure at a stage with no repair hook — silently divergent
// scopes, caught only after the sweep has spent. splice-plan --verify makes
// the divergence a failing gate; --update is the licensed remedy.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'splice-plan.mjs');

const fixture = (manifestItems: string[], planItems: string[]): string => {
  const dir = mkdtempSync(join(tmpdir(), 'splice-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'plan-spec.json'), JSON.stringify({
    pages: [{ id: 'demo-page', kind: 'A', order: 1, items: planItems }],
  }));
  writeFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), JSON.stringify([
    { id: 'demo-page', kind: 'A', order: 1, items: manifestItems.map((id) => ({ id })) },
  ]));
  return dir;
};

const run = (cwd: string, args: string[]) => spawnSync(process.execPath, [TOOL, ...args],
  { cwd, encoding: 'utf8', timeout: 60_000 });

test('--verify passes when the plan and the manifests agree', () => {
  const dir = fixture(['lem-a', 'thm-b'], ['lem-a', 'thm-b']);
  const r = run(dir, ['--run', 'r9', '--verify']);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /plan and manifests agree/);
});

test('--verify fails naming the page and the divergent ids', () => {
  const dir = fixture(['lem-a', 'thm-b', 'lem-added-at-6b'], ['lem-a', 'thm-b']);
  const r = run(dir, ['--run', 'r9', '--verify']);
  assert.equal(r.status, 1, 'divergent scopes must fail, not pass');
  assert.match(r.stderr, /demo-page/);
  assert.match(r.stderr, /lem-added-at-6b/);
});

test('--update applies a licensed manifest change to the plan, loudly', () => {
  const dir = fixture(['lem-a', 'thm-b', 'lem-added-at-6b'], ['lem-a', 'thm-b']);
  const r = run(dir, ['--run', 'r9', '--batch', '1', '--update']);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /\+ lem-added-at-6b/);
  const spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  assert.equal(spec.pages[0].items.length, 3);
  const again = run(dir, ['--run', 'r9', '--verify']);
  assert.equal(again.status, 0, 'after --update the scopes must agree');
});

test('a changed manifest without --update stays a hard error', () => {
  const dir = fixture(['lem-a', 'thm-b', 'lem-added-at-6b'], ['lem-a', 'thm-b']);
  const r = run(dir, ['--run', 'r9', '--batch', '1']);
  assert.equal(r.status, 1, 'the step-4 anti-drift guard must survive the new flags');
});

test('every repo-wide gate point verifies the two scopes agree', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['5-author', '6c-cross', '9-scope', '10-report']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const hit = st.gates(ctx).some((g: any) => {
      const argv = typeof g.argv === 'function' ? g.argv() : g.argv;
      return argv.includes('tools/splice-plan.mjs') && argv.includes('--verify');
    });
    assert.ok(hit, `${id} never verifies plan-spec against the manifests`);
  }
});

test('4-splice is one dispatch covering every batch (P4)', async () => {
  const mod = await import('../stages/mathlib.mts');
  const st = mod.stages.find((s: any) => s.id === '4-splice');
  const plans = st.plan({ run: 'frontier-14', repo: REPO }, ['1', '2', '3']);
  assert.equal(plans.length, 1, 'a per-batch dispatch costs a poll tick per batch for seconds of work');
  assert.ok(plans[0].argv.includes('--all'));
  assert.equal(plans[0].covers.length, 7, 'the one dispatch must cover every batch the run owes');
});
