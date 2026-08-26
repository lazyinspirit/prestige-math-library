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
  // SONNET 5 -> SONNET 4.6 (owner, 2026-08-24). Verified to resolve against the
  // claude CLI before being wired, because a bad id is the failure mode this
  // registry exists to prevent and it does not always error — the `[1m]` lesson
  // on the Opus entry above is the same shape.
  //
  // ONE sonnet entry, deliberately. A second (`sonnet5` alongside `sonnet46`)
  // would make "the sonnet lane" ambiguous at every call site. Consequence to
  // know: the `deepseek+sonnet` judge lineup below now means DeepSeek + Sonnet
  // 4.6. That lineup is selectable and unselected, so nothing in flight moves.
  sonnet: Object.freeze({
    id: process.env.SONNET_MODEL ?? 'claude-sonnet-4-6',
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
  // Owner, 2026-08-24: the Codex weekly cap reset and every agent and judge
  // lane moves here from Opus 5 / Sonnet 4.6. Verified against the CLI before
  // wiring — `gpt-5.4` resolves to `gpt-5.4-2s-codex-1p-codexswic-ev3`.
  //
  // EFFORT IS NOT `max` ON THIS RUNNER. The owner's "gpt 5.4 max" is the top
  // tier, and codex rejects `max` outright: *"Unsupported value: 'max' ...
  // Supported values are: 'none', 'low', 'medium', 'high', and 'xhigh'."*
  // `max` is DeepSeek's spelling. The faithful translation is `xhigh`, which is
  // what every Opus lane already ran at, so no lane changes tier in this swap.
  gpt54: Object.freeze({
    id: process.env.GPT54_MODEL ?? 'gpt-5.4',
    runner: 'codex',
    family: 'openai',
  }),
  // Owner, 2026-08-24: routed to `2-assign` ONLY. That stage emits a partition
  // of batch numbers and nothing else — no mathematics passes through it — and
  // `tools/alpha-groups.mjs` checks nine properties of the answer (uncovered,
  // duplicate, duplicate-label, unknown-batch, oversize, too-many, shape,
  // rationale, category-split). A weaker answer there cannot be WRONG, only
  // worse: more dependency edges crossing a group boundary. Verified to resolve
  // against the CLI before wiring.
  luna: Object.freeze({
    id: process.env.LUNA_MODEL ?? 'gpt-5.6-luna',
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
  // Owner, 2026-08-23: every agent lane was Opus 5 (Codex weekly cap reached).
  // Owner, 2026-08-24: the cap reset and every agent lane returns to Codex, now
  // on gpt-5.4 at `xhigh`. Roles keep their own effort, sandbox and caps —
  // those live in dispatch.mjs precisely so a lane swap cannot move them.
  agentic: 'gpt54',
  // Owner, 2026-08-05: DeepSeek is the only cross-family reader in either
  // workflow. This is the lane whose independence is the point; moving it to
  // the same family as `agentic` does not rename a guarantee, it deletes one.
  crossFamily: 'deepseek',
  // A THIRD lane (owner, 2026-08-24), for roles the owner runs at a LOWER
  // EFFORT than `agentic` rather than on a different family: the step-6
  // proof-refuter today, and the late-stage audit and reporting roles (6c, step
  // 9, step 10) if that change lands. It moved Opus 5 -> Sonnet 4.6 -> gpt-5.4
  // in one day; what has stayed constant is the property that matters.
  //
  // THE INVARIANT: this lane must keep a real filesystem. Its defining role is
  // the proof-refuter, and `briefs/alpha.md` instructs refuters to OPEN THE
  // CITED ITEM before calling a dependency too weak. `claude` and `codex` both
  // satisfy that — codex runs as a sandboxed process, not a tool-less API lane.
  // `crossFamily` does NOT, which is why the refuter was never routed there: a
  // refuter that cannot read its dependencies reports on what it imagines them
  // to say, and that is worse than having no refuter.
  secondary: 'gpt54',
  // Owner, 2026-08-24. The `2-assign` partition lane, and the only lane whose
  // output is fully machine-checkable — which is the whole reason it may run a
  // model no other lane runs. Do not widen it to a role that writes
  // mathematics without evidence this model is adequate for that; none exists.
  partition: 'luna',
  // Owner, 2026-08-24: `8-adjudicate` ONLY, and the reason is MEASUREMENT, not
  // capability. Every past run's step-8 adjudications were made by gpt-5.6-sol,
  // and the fatal counts this run will be compared against are therefore Sol's
  // judgements. Moving the authors to gpt-5.4 while ALSO moving the adjudicator
  // would change two variables at once and make
  // `research/frontier-18-interventions.md` §"Deferred to step 10" unanswerable.
  // Holding the adjudicator fixed is what lets the comparison mean anything.
  adjudication: 'sol',
});

// ---------------------------------------------------------------------------
// JUDGE LINEUPS — the configured skeptical judge set.
//
// Retired paired keys stay so historical ledger rows remain interpretable. The
// active `terra` key is deliberately one model: owner, 2026-08-26, removed
// DeepSeek from Step 7 and made GPT-5.6 Terra the sole judge through close-out.
// Rows from an unselected lineup remain append-only evidence and never satisfy
// current coverage, which is per frozen context AND per configured model set.
// ---------------------------------------------------------------------------
export const JUDGE_LINEUPS = Object.freeze({
  terra: Object.freeze([MODELS.terra.id]),
  'deepseek+gpt54': Object.freeze([MODELS.deepseek.id, MODELS.gpt54.id]),
  'deepseek+opus': Object.freeze([MODELS.deepseek.id, MODELS.opus.id]),
  'deepseek+terra': Object.freeze([MODELS.deepseek.id, MODELS.terra.id]),
  'deepseek+sonnet': Object.freeze([MODELS.deepseek.id, MODELS.sonnet.id]),
});

/**
 * EVERY model this repo has ever judged with — the union over JUDGE_LINEUPS,
 * derived, never hand-kept.
 *
 * This is the answer to "is this a judge model at all", which is a DIFFERENT
 * question from "is this one of today's configured judges". Coverage asks the second and
 * must use `JUDGE_LINEUPS[lineupName]`; a SHAPE check asks the first, because a
 * retired lane's rows are append-only evidence the ledgers still have to be able
 * to represent.
 *
 * frontier-18 is why this exists. `level-coverage.mjs` validated an adjudication
 * row's `model` against the configured lineup, so when a group Alpha adjudicated
 * the five `claude-sonnet-4-6` rejections that `step8-scope` handed it, every one
 * came back as `judge-adjudication-shape` — a malformed row. Nothing an Alpha
 * could write would fix it, so all three repair rounds burned and step 8 stopped
 * dead on rows that were correct. Evidence must be writable even after its lane
 * is retired, or the retirement silently rewrites history.
 */
export const KNOWN_JUDGES = Object.freeze([...new Set(Object.values(JUDGE_LINEUPS).flat())]);

/** The build and audit default.
 *
 * Owner, 2026-08-26: remove DeepSeek from Step 7; GPT-5.6 Terra at `xhigh`
 * remains the sole judge model. This applies to initial coverage, Step-8
 * adjudication/rejudge closure, stamps, Step 9, and Step 10 evidence. Historical
 * DeepSeek rows remain append-only evidence but satisfy no current obligation.
 * Terra shares the OpenAI family with most work it screens and with the Sol
 * Step-8 adjudicator, so this configuration provides no cross-family judge
 * corroboration. The sweep now draws only on the Codex account; lower
 * JUDGE_CONCURRENCY_GPT_5_6_TERRA rather than re-spending null calls. */
export const DEFAULT_LINEUP = 'terra';

/**
 * Resolve `JUDGE_LINEUP` to its configured model ids.
 *
 * Every caller used to inline this three-line dance and one of them fell a lane
 * change behind. Callers that must fail hard pass their own `onError`; the
 * default throws, because silently judging with the wrong pair is worse than
 * stopping. A lineup may contain one or more models; callers must never assume
 * a pair.
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
