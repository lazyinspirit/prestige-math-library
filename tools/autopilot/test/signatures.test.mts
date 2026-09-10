// Guard against the defect that dominated the live takeover: a command-line
// flag written from memory rather than read from the tool.
//
// Six invocations were checked by hand on the first real run and FOUR were
// wrong — step7-guard, judge-sweep, merge-proof-contracts and touchlog all took
// a `--run` or flag form that does not exist. Each would have failed hours into
// an unattended build, in a stage nobody was watching.
//
// This does not prove a command is correct; it proves every flag it passes at
// least appears in the tool that receives it, which is exactly the class of
// error that occurred. It is skipped when the target repo is absent so the
// suite still runs anywhere.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

// In-tree: the repository is two levels up from this file. It was an absolute
// path when the engine lived in its own repo.
const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const flagsOf = (s: string): string[] => [...new Set<string>(s.match(/--[a-z-]+/g) ?? [])];

test('every gate and command in the stage table passes flags its tool defines', async (t) => {
  if (!existsSync(join(REPO, 'tools'))) return t.skip('target repo not present');
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  const problems = [];

  for (const st of mod.stages) {
    for (const g of (st.gates?.(ctx) ?? [])) {
      const argv: string[] = typeof g.argv === 'function' ? g.argv() : g.argv;
      const tool: string = String(argv[1]);
      if (!tool || !tool.startsWith('tools/')) continue;
      if (!existsSync(join(REPO, String(tool)))) { problems.push(`${st.id}/${g.id}: no such tool ${tool}`); continue; }
      const src = readFileSync(join(REPO, String(tool)), 'utf8');
      for (const f of flagsOf(argv.join(' '))) {
        if (!src.includes(f)) problems.push(`${st.id}/${g.id}: ${tool} has no ${f}`);
      }
    }
    for (const p of (st.plan?.(ctx, ['1', '2', '3', '4', '5', '6']) ?? [])) {
      // Plans carry `argv`, not `command`. This block still read `p.command`
      // after the argv conversion, so `if (!p.command) continue` skipped every
      // plan and the check had been silently doing nothing — a vacuous test, of
      // exactly the kind this suite exists to prevent. The type checker found
      // it; no test could have.
      if (!p.argv?.length) continue;
      const tool2 = p.argv.find((a: string) => a.startsWith('tools/'));
      if (!tool2) continue;
      if (!existsSync(join(REPO, tool2))) { problems.push(`${st.id}/${p.label}: no such tool ${tool2}`); continue; }
      const src = readFileSync(join(REPO, tool2), 'utf8');
      for (const f of flagsOf(p.argv.join(' '))) {
        if (!src.includes(f)) problems.push(`${st.id}/${p.label}: ${tool2} has no ${f}`);
      }
    }
  }
  assert.deepEqual(problems, [], `invented flags:\n  ${problems.join('\n  ')}`);
});


test('newly generated tasks cover every current stage, including the composed review module', t => {
  const run = `workflow-task-test-${process.pid}`;
  t.after(() => {
    for (const name of readdirSync(join(REPO, 'research')).filter(n => n.startsWith(run + '-')))
      rmSync(join(REPO, 'research', name), { force: true });
  });
  writeFileSync(join(REPO, 'research', `${run}-batch-1.pages.json`), JSON.stringify([
    { id: 'fixture-a', kind: 'A', companion: 'fixture-b', category: 'algebra', title: 'Fixture', order: 1, requires: [], items: [] },
    { id: 'fixture-b', kind: 'B', companion: 'fixture-a', category: 'algebra', title: 'Fixture examples', order: 2, requires: ['fixture-a'], items: [] },
  ]));
  for (const flags of [[], ['--check']]) {
    const result = spawnSync(process.execPath, [join(REPO, 'tools/run-tasks.mjs'), '--run', run, ...flags],
      { cwd: REPO, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stdout + result.stderr);
  }
  assert.ok(existsSync(join(REPO, 'research', `${run}-alpha-5a-direct.task.md`)));
  assert.ok(existsSync(join(REPO, 'research', `${run}-alpha-step7.task.md`)));
});

test('doctor catches an invented flag — actually planted, not merely absent', async (t) => {
  // The previous version of this test built a synthetic bad stage, never used
  // it, and asserted the LIVE table is clean — so it passed even with the flag
  // check deleted, which is the exact test shape this suite exists to prevent.
  if (!existsSync(join(REPO, 'tools'))) return t.skip('target repo not present');
  const { doctor } = await import('../src/doctor.mts');
  const url = 'data:text/javascript,' + encodeURIComponent(`
    export const stages = [{
      id: 'bad', label: 'bad', units: () => ['1'], pattern: /x/,
      gates: () => [{ id: 'g', argv: ['node', 'tools/depcheck.mjs', '--no-such-flag-anywhere'] }],
      plan: () => [],
    }];`);
  const res = await doctor({ repo: REPO, run: 'frontier-14', stagesPath: url, config: {} });
  assert.ok(res.problems.some((p: string) => /--no-such-flag-anywhere/.test(p)),
    `the planted flag was not caught; problems: ${res.problems.join('; ') || '(none)'}`);
});

test('doctor checks a shimmed command against its real target, not the shim', async (t) => {
  // ['node','tools/tsx-run.mjs','tools/precheck.mts','--json'] used to be
  // validated against the 35-line shim; and --fail used to pass by substring
  // on a tool defining only --fail-on-dead.
  if (!existsSync(join(REPO, 'tools'))) return t.skip('target repo not present');
  const { doctor } = await import('../src/doctor.mts');
  const url = 'data:text/javascript,' + encodeURIComponent(`
    export const stages = [{
      id: 'bad2', label: 'bad2', units: () => ['1'], pattern: /x/,
      gates: () => [{ id: 'g', argv: ['node', 'tools/url-sweep.mjs', '--fail'] }],
      plan: () => [],
    }];`);
  const res = await doctor({ repo: REPO, run: 'frontier-14', stagesPath: url, config: {} });
  assert.ok(res.problems.some((p: string) => /defines no --fail\b/.test(p)),
    `--fail passed by substring against --fail-on-dead; problems: ${res.problems.join('; ') || '(none)'}`);
});
