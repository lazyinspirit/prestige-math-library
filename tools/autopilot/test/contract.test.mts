// Contract tests: assert MY assumptions against the REAL dispatcher.
//
// THE ROOT CAUSE THESE ADDRESS. Twelve defects reached a live run, and nearly
// all of them share one origin: I wrote the control plane against a remembered
// interface instead of the actual one.
//
//   * The result filename is `<role>-<label>.result.json` — one line of
//     dispatch.mjs. Never read. So thirteen stage patterns were hand-written
//     against a mental model, and `/^alpha-step3-/` silently missed
//     `alpha-alpha-step3-a.result.json` when a caller's label already contained
//     the role.
//   * Four command-line flags were invented — `--run` on tools that take
//     `--touches`, `--ledger`, `--level`, and a positional.
//   * dispatch.mjs has supported `--dry-run` the whole time. The entire stage
//     table could have been exercised against the real thing, for free, before
//     a single agent ran.
//
// The end-to-end tests could not catch any of this, because the fake agent they
// run conforms to MY assumptions about what a dispatcher writes. A test that
// agrees with you by construction is not evidence.
//
// So these tests read the real dispatcher and the real tools. They are the ones
// that would have failed on day one.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO = process.env.AUTOPILOT_TEST_REPO ?? '/Users/ianx/Projects/prestige-math-library';
const has = existsSync(join(REPO, 'tools/dispatch.mjs'));

test('the dispatcher names results <role>-<label>.result.json', (t) => {
  if (!has) return t.skip('target repo not present');
  const src = readFileSync(join(REPO, 'tools/dispatch.mjs'), 'utf8');
  assert.match(src, /resultPath\s*=\s*join\(outDir,\s*`\$\{role\}-\$\{label\}\.result\.json`\)/,
    'the naming rule changed; every stage pattern in the table depends on it');
});

test('the dispatcher writes the fields coverage depends on', (t) => {
  if (!has) return t.skip('target repo not present');
  const src = readFileSync(join(REPO, 'tools/dispatch.mjs'), 'utf8');
  for (const field of ['role', 'label', 'run', 'covers', 'ok']) {
    assert.ok(new RegExp(`\\b${field}\\b`).test(src), `dispatch.mjs no longer records \`${field}\``);
  }
});

test('the dispatcher still supports --dry-run, which is how this table is testable', (t) => {
  if (!has) return t.skip('target repo not present');
  const src = readFileSync(join(REPO, 'tools/dispatch.mjs'), 'utf8');
  assert.match(src, /--dry-run/);
});

/**
 * THE INVARIANT THAT WOULD HAVE CAUGHT THE ANCHORED-PATTERN BUG.
 *
 * A stage must match the result files its own plan will produce. Hand-writing
 * a regex separately from the dispatch that produces the file is exactly where
 * the two drifted apart.
 */
test('every stage matches the results its own plan produces', async (t) => {
  if (!has) return t.skip('target repo not present');
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO, dispatchDir: join(REPO, 'research/frontier-14-dispatch') };
  const problems = [];
  for (const st of mod.stages) {
    let plans = [];
    try { plans = st.plan?.(ctx, ['1', '2', '3', '4', '5', '6', '7']) ?? []; } catch { continue; }
    for (const p of plans) {
      // A `covers: []` preparation dispatch claims no
      // coverage, so its result file matching nothing can stall nothing — the
      // invariant this test protects is that COVERING dispatches are visible
      // to their own stage's completion predicate.
      if (Array.isArray(p.covers) && p.covers.length === 0) continue;
      const resultName = `${p.role}-${p.label}.result.json`;
      if (!st.pattern.test(resultName)) {
        problems.push(`${st.id}: pattern ${st.pattern} does not match its own dispatch "${resultName}"`);
      }
      // And the doubled form a caller produces when its label repeats the role.
      const doubled = `${p.role}-${p.role}-${p.label}.result.json`;
      if (!st.pattern.test(doubled)) {
        problems.push(`${st.id}: pattern ${st.pattern} misses the role-prefixed form "${doubled}" — this is the alpha-alpha-step3-a case`);
      }
    }
  }
  assert.deepEqual(problems, [], problems.join('\n  '));
});

test('no stage pattern matches another stage\'s dispatches', async (t) => {
  if (!has) return t.skip('target repo not present');
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO, dispatchDir: join(REPO, 'research/frontier-14-dispatch') };
  const names = [];
  for (const st of mod.stages) {
    let plans = [];
    try { plans = st.plan?.(ctx, ['1', '2', '3']) ?? []; } catch { continue; }
    for (const p of plans) names.push({ stage: st.id, file: `${p.role}-${p.label}.result.json` });
  }
  const problems = [];
  for (const st of mod.stages) {
    for (const n of names) {
      if (n.stage !== st.id && st.pattern.test(n.file)) {
        problems.push(`${st.id} would count ${n.stage}'s "${n.file}" as its own`);
      }
    }
  }
  assert.deepEqual(problems, [], problems.join('\n  '));
});

test('a stage that runs a bare command produces a result the engine can read', async (t) => {
  if (!has) return t.skip('target repo not present');
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO, dispatchDir: join(REPO, 'research/frontier-14-dispatch') };
  for (const st of mod.stages) {
    let plans = [];
    try { plans = st.plan?.(ctx, ['1']) ?? []; } catch { continue; }
    for (const p of plans) {
      if (!p.argv) continue;
      // argv only. A command STRING has to be parsed, and every attempt to parse
      // one here produced a quoting defect — three in a row, including the test
      // written to prove the fix.
      assert.ok(Array.isArray(p.argv), `${st.id}/${p.label}: argv must be an array`);
      assert.ok(!p.argv.some((a) => /[>|;&]|^sh$/.test(String(a))),
        `${st.id}/${p.label}: argv contains a shell metacharacter or invokes sh — it should not need to`);
    }
  }
});

test('the adapter refuses a command string outright', async () => {
  const { makeExecAdapter, render } = await import('../src/adapters/exec.mts');
  // @ts-expect-error — passing a string is the thing under test: the adapter
  // must refuse it at runtime, because parsing one is what caused three quoting
  // defects in a row.
  assert.throws(() => makeExecAdapter({ argv: 'node tools/dispatch.mjs --role beta' }), /array/);
  // @ts-expect-error — same: a command string must be rejected, not parsed.
  assert.throws(() => render('node x --flag {v}', { v: 'y' }), /argv ARRAY/);
});

test('argv survives values that would break a shell', async () => {
  const { render } = await import('../src/adapters/exec.mts');
  const out = render(['node', 'x.mjs', '--task', '{task}', '--label', '{label}'],
    { task: "a file with spaces & a 'quote' and $VAR.md", label: 'l' });
  assert.deepEqual(out, ['node', 'x.mjs', '--task', "a file with spaces & a 'quote' and $VAR.md", '--label', 'l']);
});

test('an empty placeholder drops its flag, not just its value', async () => {
  const { render } = await import('../src/adapters/exec.mts');
  // `--task` with no argument would otherwise swallow `--label` as its value.
  const out = render(['node', 'x.mjs', '--task', '{task}', '--label', '{label}'], { task: '', label: 'l' });
  assert.deepEqual(out, ['node', 'x.mjs', '--label', 'l']);
});
