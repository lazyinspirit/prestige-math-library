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

test('--verify sees a deps-only change the id list cannot — and the splice REFRESHES it', () => {
  // frontier-15 finding 10: a deps/strategy-only edit to a manifest item read
  // "already correct" under the id-only comparison and never propagated;
  // step 4 mirrored two repaired objects into the plan by hand.
  const dir = fixture(['lem-a', 'thm-b'], ['lem-a', 'thm-b']);
  const manifest = JSON.parse(readFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), 'utf8'));
  manifest[0].items[1].deps = ['lem-a'];
  writeFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), JSON.stringify(manifest));
  const v = run(dir, ['--run', 'r9', '--verify']);
  assert.equal(v.status, 1, 'a changed item object is drift, not agreement');
  assert.match(v.stderr, /thm-b/);
  assert.match(v.stderr, /item object\(s\) changed/);
  const s = run(dir, ['--run', 'r9', '--batch', '1']);
  assert.equal(s.status, 0, s.stderr);
  assert.match(s.stdout, /REFRESHING demo-page/);
  const spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  assert.deepEqual(spec.pages[0].items[1].deps, ['lem-a'], 'the plan carries the repaired object');
  const v2 = run(dir, ['--run', 'r9', '--verify']);
  assert.equal(v2.status, 0, 'after the refresh the two agree');
});

test('--verify flags a dep on an UNBUILT page missing from requires, and only that kind', () => {
  const dir = fixture(['lem-a'], ['lem-a']);
  const spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  spec.pages.push({ id: 'future-page', kind: 'A', order: 9, items: ['thm-future'] });
  writeFileSync(join(dir, 'research', 'plan-spec.json'), JSON.stringify(spec));
  const manifest = JSON.parse(readFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), 'utf8'));
  manifest[0].items[0].deps = ['thm-future', 'thm-published'];
  writeFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), JSON.stringify(manifest));
  // thm-published lives on a page ON DISK: order licenses it, requires does not.
  mkdirSync(join(dir, 'library', 'algebra'), { recursive: true });
  writeFileSync(join(dir, 'library', 'algebra', 'published-page.md'),
    '---\npage: published-page\nitems: [thm-published]\n---\n');
  const v = run(dir, ['--run', 'r9', '--verify']);
  assert.equal(v.status, 1);
  assert.match(v.stderr, /thm-future.*UNBUILT page future-page/);
  assert.ok(!/thm-published/.test(v.stderr), 'a dep to an on-disk page is order-licensed, never flagged');
  // Declaring the unbuilt page in requires clears it.
  const m2 = JSON.parse(readFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), 'utf8'));
  m2[0].requires = ['future-page'];
  writeFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), JSON.stringify(m2));
  const v2 = run(dir, ['--run', 'r9', '--verify']);
  assert.ok(!/UNBUILT/.test(v2.stderr), 'a declared prerequisite is not drift');
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

test('Step 6 reconciliation copies an adjudicated manifest requires change exactly', () => {
  const dir = fixture(['lem-a'], ['lem-a']);
  const manifestPath = join(dir, 'research', 'r9-batch-1.pages.json');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  manifest[0].requires = ['prior-page'];
  writeFileSync(manifestPath, JSON.stringify(manifest));

  const refused = run(dir, ['--run', 'r9', '--batch', '1', '--update']);
  assert.equal(refused.status, 0);
  assert.match(refused.stdout, /WITHHELD/);
  let spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  assert.deepEqual(spec.pages[0].requires ?? [], [], 'ordinary update must not guess a requires decision');

  const reconciled = run(dir, ['--run', 'r9', '--batch', '1', '--update', '--accept-requires']);
  assert.equal(reconciled.status, 0, reconciled.stderr);
  assert.match(reconciled.stdout, /RECONCILING demo-page requires/);
  spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  assert.deepEqual(spec.pages[0].requires, ['prior-page']);
  assert.equal(run(dir, ['--run', 'r9', '--verify']).status, 0);

  manifest[0].requires = [];
  writeFileSync(manifestPath, JSON.stringify(manifest));
  assert.equal(run(dir, ['--run', 'r9', '--batch', '1', '--update', '--accept-requires']).status, 0);
  spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  assert.deepEqual(spec.pages[0].requires, [], 'Step 6 reconciliation also removes stale plan-only requires');
});

test('--update rejects a duplicate introduced by the projected manifest before writing', () => {
  const dir = mkdtempSync(join(tmpdir(), 'splice-projected-'));
  mkdirSync(join(dir, 'research'));
  const original = {
    pages: [
      { id: 'page-one', kind: 'A', order: 1, items: ['lem-a'] },
      { id: 'page-two', kind: 'A', order: 2, items: ['lem-b'] },
    ],
  };
  writeFileSync(join(dir, 'research', 'plan-spec.json'), JSON.stringify(original));
  writeFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), JSON.stringify([
    { id: 'page-one', kind: 'A', order: 1, items: [{ id: 'lem-a' }, { id: 'lem-b' }] },
  ]));
  const result = run(dir, ['--run', 'r9', '--batch', '1', '--update']);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /duplicate item id lem-b/);
  assert.deepEqual(JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8')), original,
    'the failed projected duplicate check must leave plan-spec untouched');
});

test('a changed manifest without --update stays a hard error', () => {
  const dir = fixture(['lem-a', 'thm-b', 'lem-added-at-6b'], ['lem-a', 'thm-b']);
  const r = run(dir, ['--run', 'r9', '--batch', '1']);
  assert.equal(r.status, 1, 'the step-4 anti-drift guard must survive the new flags');
});

test('every repo-wide gate point verifies the two scopes agree', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['5-author', '6c-cross', '9-scope', '10-readiness-v2']) {
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
