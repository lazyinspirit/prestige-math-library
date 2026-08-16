// A doctor check that says nothing is indistinguishable from one that passed.
//
// WHY. The dispatch-argv check read
//   if (tool && missing) problem; else if (tool) ok;
// so an absent `config.argv`, an argv that is not an array, an empty argv, and
// an argv naming no dispatcher script ALL fell through emitting neither an `ok`
// nor a `problem`. The check simply vanished from the report — and the setting
// it guards is the one that starts every agent: with no dispatch argv the
// engine cannot launch a single Beta, and the run finds out at the first
// dispatch instead of at preflight.
//
// (The flag-existence check above it was already fixed and is not touched here.)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { doctor } from '../src/doctor.mts';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..', '..');
const STAGES = join(HERE, '..', 'stages', 'mathlib.mts');

const GOOD_ARGV = ['node', 'tools/dispatch.mjs', '--role', '{role}'];

const run = (config: any) => doctor({ repo: REPO, run: 'frontier-14', stagesPath: STAGES, config });

/** Every line the check under test can emit mentions the dispatch argv. */
const argvLines = (r: any) =>
  [...r.problems, ...r.ok].filter((l: string) => /dispatch argv|dispatch\w* command/i.test(l));

test('a healthy dispatch argv produces an ok line and no problem', async () => {
  const r = await run({ argv: GOOD_ARGV });
  assert.ok(r.ok.some((l: string) => /dispatch argv resolves \(tools\/dispatch\.mjs\)/.test(l)),
    `expected an ok line, got ${JSON.stringify(argvLines(r))}`);
  assert.ok(!r.problems.some((l: string) => /dispatch argv/.test(l)));
});

test('an absent config.argv is a PROBLEM naming what is missing', async () => {
  const r = await run({});
  const p = r.problems.find((l: string) => /dispatch argv/.test(l));
  assert.ok(p, 'a missing dispatch argv emitted neither ok nor problem — the silent-skip defect');
  assert.match(p, /config\.argv is absent/);
  assert.match(p, /autopilot\.config\.json/, 'the problem must name where to set it');
  assert.ok(!r.ok.some((l: string) => /dispatch argv/.test(l)));
});

test('an empty config.argv is a problem, not a pass', async () => {
  const r = await run({ argv: [] });
  const p = r.problems.find((l: string) => /dispatch argv/.test(l));
  assert.ok(p, 'an empty argv emitted neither ok nor problem');
  assert.match(p, /empty array/);
});

test('a non-array config.argv is a problem naming the type it got', async () => {
  const r = await run({ argv: 'node tools/dispatch.mjs' });
  const p = r.problems.find((l: string) => /dispatch argv/.test(l));
  assert.ok(p, 'a string argv emitted neither ok nor problem');
  assert.match(p, /string, not an array/);
});

test('an argv naming no dispatcher script is a problem', async () => {
  const r = await run({ argv: ['echo', 'hello'] });
  const p = r.problems.find((l: string) => /dispatch argv/.test(l));
  assert.ok(p, 'an argv with no script emitted neither ok nor problem');
  assert.match(p, /names no dispatcher script/);
});

test('an argv naming a dispatcher that does not exist is a problem', async () => {
  const r = await run({ argv: ['node', 'tools/no-such-dispatcher.mjs'] });
  assert.ok(r.problems.some((l: string) => /tools\/no-such-dispatcher\.mjs, which does not exist/.test(l)));
});

test('the check is never silent: every config shape yields exactly one line', async () => {
  for (const config of [{}, { argv: [] }, { argv: 'x' }, { argv: ['echo'] },
    { argv: ['node', 'tools/no-such-dispatcher.mjs'] }, { argv: GOOD_ARGV }]) {
    const r = await run(config);
    assert.equal(argvLines(r).length, 1,
      `config ${JSON.stringify(config)} produced ${argvLines(r).length} dispatch-argv lines`);
  }
});
