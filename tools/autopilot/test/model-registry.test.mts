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

import { MODELS, LANES, JUDGE_LINEUPS, DEFAULT_LINEUP, KNOWN_MODEL_IDS, KNOWN_JUDGES, lane, laneFamily, resolveLineup } from '../../models.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

/** Pull every literal `'<lineup>': ['<id>', ...]` row out of a source file. */
function literalLineups(source: string): Map<string, string[]> {
  const found = new Map<string, string[]>();
  const row = /^\s*['"]([a-z0-9]+(?:\+[a-z0-9]+)*)['"]\s*:\s*\[(.*)\],?\s*$/gm;
  for (const m of source.matchAll(row)) {
    const models = [...m[2].matchAll(/['"]([^'"]+)['"]/g)].map((entry) => entry[1]);
    if (models.length) found.set(m[1], models);
  }
  return found;
}

test('every lineup names models the registry knows', () => {
  for (const [name, models] of Object.entries(JUDGE_LINEUPS)) {
    assert.ok(models.length >= 1, `${name} must name at least one judge`);
    assert.equal(new Set(models).size, models.length, `${name} repeats a judge model`);
    for (const id of models) {
      assert.ok(KNOWN_MODEL_IDS.includes(id), `${name} names ${id}, which is not in MODELS`);
    }
  }
});

test('the default lineup exists and is resolvable', () => {
  assert.ok(JUDGE_LINEUPS[DEFAULT_LINEUP], `DEFAULT_LINEUP ${DEFAULT_LINEUP} is not a lineup`);
  assert.deepEqual(resolveLineup(DEFAULT_LINEUP).models, JUDGE_LINEUPS[DEFAULT_LINEUP]);
  assert.throws(() => resolveLineup('deepseek+nonesuch'), /must be one of/);
});

test('the owner-amended active judge is Terra alone at xhigh with a 1M window', () => {
  assert.equal(DEFAULT_LINEUP, 'terra');
  assert.deepEqual(JUDGE_LINEUPS[DEFAULT_LINEUP], [MODELS.terra.id]);
  assert.equal(MODELS.terra.id, 'gpt-5.6-terra');
  const judge = readFileSync(join(REPO, 'tools/judge.mts'), 'utf8');
  assert.match(judge, /model_reasoning_effort="xhigh"/);
  assert.match(judge, /model_context_window=1000000/);
});

test('the active singleton and retired paired lineup keys survive a lane change', () => {
  // A table carrying only today's answer is the defect, not the fix: rows from
  // an unselected lane stay readable evidence, and coverage is per configured
  // lane, so the retired keys must remain resolvable.
  for (const key of ['terra', 'deepseek+opus', 'deepseek+terra', 'deepseek+sonnet']) {
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
  // THE INVARIANT, NOT TODAY'S ASSIGNMENT. This used to pin `agentic` to Opus
  // and `crossFamily` to DeepSeek by name, which made it fail on 2026-08-24 for
  // the one reason it should never fail: the owner moved a lane, which is the
  // supported operation this whole registry exists to make cheap. A test that
  // has to be edited every time the thing it guards is used correctly is not
  // guarding anything — it is a second copy of the assignment.
  //
  // What must hold for EVERY lane, whatever it points at: it names a model the
  // registry defines, and it reports that model's own runner. A lane naming a
  // model whose runner cannot spawn it is the failure worth catching.
  for (const [laneName, key] of Object.entries(LANES)) {
    const model = (MODELS as Record<string, any>)[key];
    assert.ok(model, `lane ${laneName} names unknown model ${key}`);
    assert.deepEqual(lane(laneName as any), { runner: model.runner, model: model.id },
      `lane ${laneName} must resolve to ${key}'s own runner and id`);
    assert.ok(['claude', 'codex', 'deepseek'].includes(model.runner),
      `lane ${laneName} resolves to unknown runner ${model.runner}`);
  }
  assert.throws(() => lane('nonesuch' as any), /unknown lane/);
});

test('every agent lane can open a file; only crossFamily may be tool-less', () => {
  // Load-bearing, and learned the hard way on 2026-08-24. The refuter was
  // briefly routed to `crossFamily`, whose DeepSeek transport has no filesystem
  // at all — while `briefs/alpha.md` instructs refuters to OPEN THE CITED ITEM
  // before calling a dependency too weak. A refuter that cannot read its
  // dependencies reports on what it imagines them to say.
  //
  // `deepseek` is the tool-less transport. Any lane a dispatched agent uses to
  // READ the repo must therefore be a process runner.
  for (const laneName of ['agentic', 'secondary']) {
    assert.notEqual(lane(laneName as any).runner, 'deepseek',
      `lane ${laneName} is tool-less — roles on it cannot read the repo they audit`);
  }
});

test('the Alpha brief derives model identity instead of naming a stale lane', () => {
  const source = readFileSync(join(REPO, 'briefs/alpha.md'), 'utf8');
  assert.match(source, /tools\/models\.mjs/,
    'the Alpha brief must direct the agent to the canonical model registry');
  assert.doesNotMatch(source, /\*\*You are (?:Claude|GPT)/,
    'the Alpha brief hard-codes a model identity that can drift from the registry');
  assert.doesNotMatch(source, /paired (?:DeepSeek|Claude|GPT)/,
    'the Alpha brief hard-codes a judge lineup that can drift from the registry');
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

test('KNOWN_JUDGES covers every lineup, today\'s and every retired one', () => {
  for (const [name, pair] of Object.entries(JUDGE_LINEUPS)) {
    for (const model of pair) {
      assert.ok(
        KNOWN_JUDGES.includes(model),
        `lineup ${name} names ${model}, which KNOWN_JUDGES omits — a ledger could not represent its rows`,
      );
    }
  }
  assert.equal(new Set(KNOWN_JUDGES).size, KNOWN_JUDGES.length, 'KNOWN_JUDGES has duplicates');
});

test('a ledger SHAPE check never validates a judge model against the configured lineup', () => {
  // frontier-18 step 8. `level-coverage.mjs` asked `JUDGES.includes(record.model)`
  // — the CONFIGURED lineup — inside its adjudication SHAPE check, so the five
  // claude-sonnet-4-6 rows a group Alpha correctly adjudicated were rejected as
  // malformed. No Alpha could write them any other way, so all three repair
  // rounds burned and the stage stopped needing a person. Retired lanes' rows
  // are append-only evidence: shape must accept them, coverage must ignore them.
  const shapeCheckers = ['tools/level-coverage.mjs', 'tools/step8-guard.mjs'];
  for (const rel of shapeCheckers) {
    const source = readFileSync(join(REPO, rel), 'utf8');
    for (const line of source.split('\n')) {
      if (!line.includes('judge-adjudication-shape')) continue;
      assert.ok(
        !/\bJUDGES\.includes\(/.test(line),
        `${rel} validates adjudication shape against the configured lineup; use KNOWN_JUDGES`,
      );
    }
    // The condition sits above the error() call, so check the guard directly.
    assert.ok(
      !/\bJUDGES\.includes\(record\.model\)/.test(source) || /KNOWN_JUDGES\.includes\(record\.model\)/.test(source),
      `${rel} still tests record.model against the configured lineup in a shape check`,
    );
  }
});
