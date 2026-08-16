// What an LLM is allowed to be dispatched for.
//
// Owner rule, 2026-08-16: *"The ONLY jobs for LLMs are resource scouting,
// scaffolding, authoring, refuting/verification, adjudication, judgement,
// auditing, reporting, supervision, etc. Everything else needs to be
// mechanical."*
//
// The list below is that rule, enforced. Every dispatch declares a `job`, and
// the engine refuses to start one whose job is not cognitive. The point is not
// bureaucracy — it is that the failure mode here is quiet. Handing a model a
// mechanical task does not error; it produces a plausible answer, costs tokens,
// and is wrong at a rate nobody measures. A stage that asks a model to "decide
// whether step 3 is finished" or "work out which batches still need review"
// looks exactly like a stage that asks it to audit a proof, and only one of
// those is a good use of a model.
//
// The test is simple: **if the answer is a function of files on disk, it is
// mechanical.** Is this stage complete, which units are uncovered, did the
// gates pass, what is the next dispatch, has this lane failed twice — all
// decidable, all code. Is this proof correct, is this citation faithful, is
// this scaffold thin, is this blocker real — none decidable, all model.

/** Cognitive jobs. A dispatch must declare one of these. */
export const COGNITIVE_JOBS = new Set([
  'scouting',        // find and read sources; harvest a table of contents
  'scaffolding',     // decide what results a page should carry, and in what order
  'authoring',       // write the mathematics
  'refutation',      // attack a claim, adversarially, without authority to fix it
  'verification',    // check a claim against a source or a computation
  'adjudication',    // decide between a finding and a defence, with evidence
  'judgement',       // an independent pass/fail on frozen text
  'audit',           // read for defects across a body of work
  'reporting',       // turn ledgers into an account a person can act on
  'supervision',     // decide whether a blocker is real and whether to retry
]);

/** Jobs a model must never be dispatched for, with the reason and the
 *  mechanical thing that owns them instead. Named explicitly because each one
 *  was, at some point, given to a model on a real run. */
export const MECHANICAL_ONLY = new Map([
  ['transition', 'whether a stage is finished is a predicate over disk — the engine owns it'],
  ['dispatch-planning', 'which units are uncovered is a set difference — the engine owns it'],
  ['gate-running', 'a gate is a subprocess and an exit code — the engine owns it'],
  ['retry-decision', 'attempt counting is arithmetic — the engine owns it; whether a BLOCKER is real is supervision, which is cognitive'],
  ['bookkeeping', 'ledgers, coverage maps and receipts are writes, not judgments'],
  ['batching', 'packing pages by prerequisite affinity is deterministic — `autopilot plan` owns it'],
  ['status-reporting', 'rendering current state is a template — the reporter owns it; INTERPRETING a run is reporting, which is cognitive'],
]);

/** A dispatch may declare itself mechanical. It is then exempt from the
 *  cognitive-job rule — because it is not a model. The suffix is deliberate and
 *  ugly: writing `job: 'bookkeeping-mechanical'` is a claim the reviewer can
 *  see, where a missing `job` would just look like an oversight. */
export const MECHANICAL_SUFFIX = '-mechanical';

export function assertCognitive(job: string | undefined, { stage, label }: { stage?: string; label?: string } = {}): boolean {
  if (typeof job === 'string' && job.endsWith(MECHANICAL_SUFFIX)) return true;
  if (!job) {
    throw new Error(
      `dispatch ${stage ?? '?'}/${label ?? '?'} declares no \`job\`. Every dispatch must say which cognitive job it is for; ` +
      `known: ${[...COGNITIVE_JOBS].join(', ')}`);
  }
  if (MECHANICAL_ONLY.has(job)) {
    throw new Error(
      `dispatch ${stage ?? '?'}/${label ?? '?'} asks a model for \`${job}\`, which is mechanical: ${MECHANICAL_ONLY.get(job)}`);
  }
  if (!COGNITIVE_JOBS.has(job)) {
    throw new Error(
      `dispatch ${stage ?? '?'}/${label ?? '?'} declares unknown job \`${job}\`. ` +
      `If it is genuinely cognitive, add it to COGNITIVE_JOBS with a one-line rationale. ` +
      `If the answer is a function of files on disk, it is mechanical and belongs in the engine.`);
  }
  return true;
}
