// The drift guard for tools/models.mjs.
//
// THE FAILURE THIS PREVENTS IS ON THE RECORD, IN THE CODE IT GUARDS.
// tools/judge-compare.mjs carries this comment: "The frontier-15 step-10 report
// was computed BY HAND because this table missed the 2026-08-17 lane switch that
// judge.mts, judge-sweep.mjs, level-coverage.mjs and run-wave.mjs all carried —
// the reporting tool was the one tool that could not read the run it reports
// on." One copy of a six-copy table fell a lane behind and nothing caught it.
//
// A tool that IMPORTS the registry cannot drift. A tool that keeps its own
// literal — tools/preflight.mjs does, deliberately, because it must not import a
// tool it is checking is runnable — can, so this test reads it from source and
// compares. Textual on purpose: importing preflight.mjs would RUN it.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { MODELS, LANES, JUDGE_LINEUPS, DEFAULT_LINEUP, KNOWN_MODEL_IDS, lane, laneFamily, resolveLineup } from '../../models.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

/** Pull every `'<lineup>': ['<id>', '<id>']` literal out of a source file. */
function literalLineups(source: string): Map<string, string[]> {
  const found = new Map<string, string[]>();
  const row = /['"]([a-z0-9]+\+[a-z0-9]+)['"]\s*:\s*\[\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\]/g;
  for (const m of source.matchAll(row)) found.set(m[1], [m[2], m[3]]);
  return found;
}

test('every lineup names models the registry knows', () => {
  for (const [name, pair] of Object.entries(JUDGE_LINEUPS)) {
    assert.equal(pair.length, 2, `${name} must name exactly two lanes`);
    for (const id of pair) {
      assert.ok(KNOWN_MODEL_IDS.includes(id), `${name} names ${id}, which is not in MODELS`);
    }
    assert.notEqual(pair[0], pair[1], `${name} pairs a model with itself, which is not a paired judge`);
  }
});

test('the default lineup exists and is resolvable', () => {
  assert.ok(JUDGE_LINEUPS[DEFAULT_LINEUP], `DEFAULT_LINEUP ${DEFAULT_LINEUP} is not a lineup`);
  assert.deepEqual(resolveLineup(DEFAULT_LINEUP).models, JUDGE_LINEUPS[DEFAULT_LINEUP]);
  assert.throws(() => resolveLineup('deepseek+nonesuch'), /must be one of/);
});

test('all three lineup keys survive a lane change', () => {
  // A table carrying only today's answer is the defect, not the fix: rows from
  // an unselected lane stay readable evidence, and coverage is per configured
  // lane, so the retired keys must remain resolvable.
  for (const key of ['deepseek+opus', 'deepseek+terra', 'deepseek+sonnet']) {
    assert.ok(JUDGE_LINEUPS[key], `${key} was dropped; retired lanes must stay resolvable`);
  }
});

test('the cross-family lane really is a different family from the agentic lane', () => {
  // The one guarantee a lane swap can silently delete rather than rename.
  assert.notEqual(
    laneFamily('crossFamily'),
    laneFamily('agentic'),
    'crossFamily and agentic resolve to the same family — there is no cross-family reader left',
  );
});

test('a lane resolves to the runner that can actually spawn it', () => {
  assert.deepEqual(lane('agentic'), { runner: MODELS.opus.runner, model: MODELS.opus.id });
  assert.deepEqual(lane('crossFamily'), { runner: MODELS.deepseek.runner, model: MODELS.deepseek.id });
  assert.throws(() => lane('nonesuch' as any), /unknown lane/);
});

test('the 1M context binding is on the Opus id and has not been tidied away', () => {
  // There is no `model_context_window` knob on the claude CLI. The suffix IS
  // the setting; a bare `claude-opus-5` silently runs the standard window.
  assert.ok(MODELS.opus.id.includes('[1m]'), 'the Opus id lost its [1m] context suffix');
});

test('every hand-kept lineup table still agrees with the registry', () => {
  // Files that import the registry contribute nothing here and cannot drift.
  // Files that keep a literal are compared row by row.
  const candidates = [
    'tools/preflight.mjs',
    'tools/level-coverage.mjs',
    'tools/apply-judge-stamps.mjs',
    'tools/judge-compare.mjs',
    'tools/judge-sweep.mjs',
    'tools/judge.mts',
  ];
  let compared = 0;
  for (const rel of candidates) {
    const abs = join(REPO, rel);
    if (!existsSync(abs)) continue;
    for (const [name, pair] of literalLineups(readFileSync(abs, 'utf8'))) {
      const expected = JUDGE_LINEUPS[name];
      assert.ok(expected, `${rel} defines lineup ${name}, which the registry does not`);
      assert.deepEqual(pair, [...expected], `${rel} lineup ${name} has drifted from tools/models.mjs`);
      compared += 1;
    }
  }
  assert.ok(compared > 0, 'no hand-kept lineup rows were found — the parser or the guard is broken');
});

test('preflight keeps its own copy on purpose, and still has one', () => {
  // Its comment: "preflight must not import a tool it is checking is runnable."
  // That makes it the one file the guard above exists for; if someone converts
  // it to an import the guard silently stops guarding anything.
  const source = readFileSync(join(REPO, 'tools/preflight.mjs'), 'utf8');
  assert.ok(
    literalLineups(source).size > 0,
    'tools/preflight.mjs no longer carries a literal lineup table; it must not import one',
  );
});

test('LANES names only models the registry defines', () => {
  for (const [laneName, key] of Object.entries(LANES)) {
    assert.ok(MODELS[key as keyof typeof MODELS], `lane ${laneName} names unknown model ${key}`);
  }
});
