// Every dispatched prompt must carry its own identity — run, role, label,
// covers — and an empty engine-supplied var must not erase a deliberately
// generic placeholder.
//
// WHY. briefs/alpha.md told each group Alpha "your dispatch names the batches
// you own" while nothing in the rendered prompt carried them: `--covers` went
// only to the result record, the group letter was never a substituted var, and
// the generic fallback task file pointed at its own appended section for the
// answer. Worse, the engine passes `--var i={unit}` with unit='' on every
// multi-batch dispatch, and dispatch.mjs replaced `<i>` with the empty string
// — turning "research/<run>-batch-<i>.pages.json ... for each of your
// batches" into a path that does not exist. dispatch.mjs's own comment says
// `<i>` is deliberately generic in that brief; an empty value must mean "not
// pinned", never "erase it".
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const dispatch = (args: string[]) => {
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'dispatch.mjs'), ...args, '--dry-run', '--json'],
    { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 0, r.stderr.slice(0, 500));
  return JSON.parse(r.stdout);
};

const brief = (text: string): string => {
  const p = join(mkdtempSync(join(tmpdir(), 'brief-')), 'brief.md');
  writeFileSync(p, text);
  return p;
};

test('the rendered prompt carries a This-dispatch identity block, task or no task', () => {
  const out = dispatch(['--role', 'reader', '--brief', brief('# B\nDo the work.\n'),
    '--label', 'probe-1', '--run', 'frontier-99', '--covers', '2,3,7']);
  assert.ok(typeof out.prompt === 'string', '--dry-run --json must expose the rendered prompt');
  assert.match(out.prompt, /# This dispatch/);
  assert.match(out.prompt, /run: frontier-99/);
  assert.match(out.prompt, /role: reader/);
  assert.match(out.prompt, /label: probe-1/);
  assert.match(out.prompt, /covers: 2, 3, 7/);
});

test('<covers> substitutes to the covered units', () => {
  const out = dispatch(['--role', 'reader', '--brief', brief('Own batches <covers> only.\n'),
    '--label', 'probe-2', '--run', 'frontier-99', '--covers', '1,4']);
  assert.match(out.prompt, /Own batches 1,4 only\./);
});

test('an empty --var value leaves the generic placeholder intact instead of erasing it', () => {
  const out = dispatch(['--role', 'reader',
    '--brief', brief('For each batch read research/<run>-batch-<i>.pages.json.\n'),
    '--label', 'probe-3', '--run', 'frontier-99', '--var', 'i=']);
  assert.match(out.prompt, /research\/frontier-99-batch-<i>\.pages\.json/,
    'i= (empty) erased <i> and produced research/frontier-99-batch-.pages.json');
});
