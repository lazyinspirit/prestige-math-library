// models.mjs — THE ONE PLACE A MODEL ID OR A LANE ASSIGNMENT CHANGES.
//
// WHY THIS FILE EXISTS. On 2026-08-23 the owner moved every GPT lane to Opus 5
// because the Codex subscription hit its weekly cap. That swap — which changed
// no logic at all, only which model answers — touched twelve role entries in
// tools/dispatch.mjs and six independent copies of one three-key lineup table.
// The cost of that duplication is not hypothetical and is recorded in the code
// it duplicates: judge-compare.mjs carries a comment saying the frontier-15
// step-10 report "was computed BY HAND because this table missed the 2026-08-17
// lane switch that judge.mts, judge-sweep.mjs, level-coverage.mjs and
// run-wave.mjs all carried — the reporting tool was the one tool that could not
// read the run it reports on."
//
// So: one registry, imported. A model swap becomes an edit to LANES (which
// family answers) or to MODELS (which id that family means), and nothing else.
//
// WHAT THIS FILE DELIBERATELY DOES NOT DO. It does not decide caps, sandboxes,
// effort, web access or working directories. Those are properties of the ROLE,
// not of the model, and they must not silently follow a lane swap — the owner's
// 2026-08-23 instruction was "Just replace LLMs as instructed without changing
// anything else", and a registry that carried caps would have violated it by
// construction. tools/dispatch.mjs keeps every one of them.

// ---------------------------------------------------------------------------
// MODELS — the id, and the runner that can spawn it.
//
// THE `[1m]` SUFFIX IS LOAD-BEARING AND IS NOT A LABEL. On the claude CLI there
// is no `model_context_window` knob: the 1,000,000-token window IS the `[1m]`
// suffix on the model id and nothing else. A bare `claude-opus-5` silently runs
// the standard window and produces no other symptom. Do not "tidy" it away.
// ---------------------------------------------------------------------------
export const MODELS = Object.freeze({
  opus: Object.freeze({
    id: process.env.OPUS_MODEL ?? 'claude-opus-5[1m]',
    runner: 'claude',
    family: 'anthropic',
  }),
  sonnet: Object.freeze({
    id: process.env.SONNET_MODEL ?? 'claude-sonnet-5',
    runner: 'claude',
    family: 'anthropic',
  }),
  deepseek: Object.freeze({
    id: process.env.DEEPSEEK_MODEL ?? 'deepseek-v4-pro',
    runner: 'deepseek',
    family: 'deepseek',
  }),
  // Retained, unrouted. The Codex runner still knows how to spawn these and
  // they are the return path when that subscription resets; its `--sandbox
  // read-only` is a kernel guarantee the claude runner can only approximate.
  sol: Object.freeze({
    id: process.env.SOL_MODEL ?? 'gpt-5.6-sol',
    runner: 'codex',
    family: 'openai',
  }),
  terra: Object.freeze({
    id: process.env.TERRA_MODEL ?? 'gpt-5.6-terra',
    runner: 'codex',
    family: 'openai',
  }),
});

// ---------------------------------------------------------------------------
// LANES — the semantic assignment. THIS is what a model swap edits.
//
// A lane is a JOB, not a model: `agentic` is every dispatched agent role,
// `crossFamily` is the tool-less adversarial reader that must not share a
// family with the work it screens. Changing `agentic: 'opus'` to
// `agentic: 'sol'` moves every agent role to that model in one edit, and
// dispatch.mjs picks up the matching runner automatically.
// ---------------------------------------------------------------------------
export const LANES = Object.freeze({
  // Owner, 2026-08-23: every agent lane is Opus 5 (Codex weekly cap reached).
  agentic: 'opus',
  // Owner, 2026-08-05: DeepSeek is the only cross-family reader in either
  // workflow. This is the lane whose independence is the point; moving it to
  // the same family as `agentic` does not rename a guarantee, it deletes one.
  crossFamily: 'deepseek',
});

// ---------------------------------------------------------------------------
// JUDGE LINEUPS — the paired skeptical judges.
//
// ALL THREE KEYS STAY, always. A table carrying only today's answer is this
// repo's oldest defect class; deepseek+opus (2026-08-23) is the fourth lane
// change in five weeks. Rows from an unselected lane remain append-only
// evidence and never satisfy current coverage, which is per frozen context AND
// per configured lane — so a level judged under deepseek+terra is not judged
// now, and this map is what says so.
// ---------------------------------------------------------------------------
export const JUDGE_LINEUPS = Object.freeze({
  'deepseek+opus': Object.freeze([MODELS.deepseek.id, MODELS.opus.id]),
  'deepseek+terra': Object.freeze([MODELS.deepseek.id, MODELS.terra.id]),
  'deepseek+sonnet': Object.freeze([MODELS.deepseek.id, MODELS.sonnet.id]),
});

/** The build and audit default (owner, 2026-08-23). */
export const DEFAULT_LINEUP = 'deepseek+opus';

/**
 * Resolve `JUDGE_LINEUP` to its two model ids.
 *
 * Every caller used to inline this three-line dance and one of them fell a lane
 * change behind. Callers that must fail hard pass their own `onError`; the
 * default throws, because silently judging with the wrong pair is worse than
 * stopping.
 *
 * @param {string} [name] lineup key; defaults to $JUDGE_LINEUP then DEFAULT_LINEUP
 * @returns {{name: string, models: readonly string[]}}
 */
export function resolveLineup(name = process.env.JUDGE_LINEUP ?? DEFAULT_LINEUP) {
  const models = JUDGE_LINEUPS[name];
  if (!models) {
    throw new Error(`JUDGE_LINEUP must be one of ${Object.keys(JUDGE_LINEUPS).join(', ')}; got ${name}`);
  }
  return { name, models };
}

/**
 * Resolve a lane to the `{ runner, model }` pair dispatch.mjs needs.
 *
 * @param {keyof typeof LANES} laneName
 * @returns {{runner: string, model: string}}
 */
export function lane(laneName) {
  const key = LANES[laneName];
  if (!key) throw new Error(`unknown lane ${laneName}; known: ${Object.keys(LANES).join(', ')}`);
  const model = MODELS[key];
  if (!model) throw new Error(`lane ${laneName} names unknown model ${key}`);
  return { runner: model.runner, model: model.id };
}

/** The family behind a lane, for the cross-family honesty checks. */
export function laneFamily(laneName) {
  const key = LANES[laneName];
  if (!key) throw new Error(`unknown lane ${laneName}`);
  return MODELS[key].family;
}

/** Every model id the registry knows, for validation. */
export const KNOWN_MODEL_IDS = Object.freeze(Object.values(MODELS).map((m) => m.id));
