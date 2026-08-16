// Stage-spec validation — the checks that must happen before a run starts.
//
// WHY THIS FILE EXISTS. frontier-14 reached the end of step 10 with two
// confirmed-fatal defects unrepaired, sixteen judge rejections nobody had read,
// and the workflow's own receipt gate red. No gate failed, because the terminal
// stage declared `gates: () => []` and the engine reads an empty gate list as a
// gate list that passed:
//
//     const hasGates = Boolean(stage.gates) && (stage.gates(ctx) ?? []).length > 0;
//     const gatesPassed = !hasGates || Boolean(...gatesPassedAt);
//
// So the last stage of the pipeline could not fail. Not "did not" — could not.
// A model wrote a report saying the level was not publishable, the engine marked
// the run done, and both were correct about their own half.
//
// The lesson is not "remember to add gates to step 10". It is that a stage with
// no gate is a stage that cannot fail, and that should not be something a spec
// can say by accident. It now has to be said on purpose, with a reason, and the
// terminal stage may not say it at all.

import type { Stage, Ctx, Gate } from './types.mts';

export interface SpecProblem { stage: string; message: string; }

/**
 * Check a stage table before it is allowed to drive a run.
 *
 * Returns problems rather than throwing: a bad spec discovered by a live engine
 * should become a visible blocker, not a crash the watchdog restarts into a
 * loop. `bin/autopilot` calls this before starting and exits on any problem, so
 * in practice the engine never sees one.
 */
export function validateStages(stages: Stage[], ctx: Ctx): SpecProblem[] {
  const problems: SpecProblem[] = [];
  const P = (stage: string, message: string) => problems.push({ stage, message });

  if (!Array.isArray(stages) || !stages.length) {
    P('(spec)', 'the stage table is empty');
    return problems;
  }

  const seen = new Set<string>();
  for (const s of stages) {
    if (!s?.id) { P('(spec)', 'a stage has no id'); continue; }
    if (seen.has(s.id)) P(s.id, 'duplicate stage id — coverage and state are keyed by it');
    seen.add(s.id);
    if (!(s.pattern instanceof RegExp)) P(s.id, 'needs a `pattern` RegExp to recognise its result files');
    if (typeof s.units !== 'function') P(s.id, 'needs a `units(ctx)` function; a stage that owes nothing can never be incomplete');
    if (typeof s.plan !== 'function') P(s.id, 'needs a `plan(ctx, pending)` function');
  }

  // THE OVERLAP-GROUP RULE.
  //
  // A group is the maximal run of CONSECUTIVE stages sharing a `pipeline` name.
  // Reusing a name non-contiguously therefore does not make one group, it makes
  // two — silently, and with the stages in between still barriers. A table that
  // says something it does not mean is the defect class this file exists for, so
  // it is refused rather than interpreted.
  const seenPipeline = new Map<string, number[]>();
  stages.forEach((s, i) => {
    if (s?.pipeline) seenPipeline.set(s.pipeline, [...(seenPipeline.get(s.pipeline) ?? []), i]);
  });
  for (const [name, idx] of seenPipeline) {
    for (let k = 1; k < idx.length; k += 1) {
      if (idx[k] !== idx[k - 1] + 1) {
        P(stages[idx[k]].id, `pipeline "${name}" is not contiguous — ${stages[idx[k - 1]].id} and ${stages[idx[k]].id} `
          + 'carry it with another stage between them, which silently makes two groups rather than one. '
          + 'Rename one, or move the stages together.');
      }
    }
  }
  for (const s of stages) {
    if (!s?.pipeline) continue;
    // Inside a group two stages can be live at once, so `concurrency` alone no
    // longer bounds a lane: two Alpha stages at 3 each is 6 against a dispatcher
    // cap of 3. The role is what the group budget is computed from, and a stage
    // that does not name it silently opts out of that budget.
    if (typeof s.role !== 'string' || !s.role.trim()) {
      P(s.id, 'a pipelined stage must declare `role` — the dispatcher lane its plans use. Without it the '
        + 'group cannot bound that lane, and two overlapping stages will each fill it.');
    }
    if (s.cohort !== undefined && typeof s.cohort !== 'function') {
      P(s.id, '`cohort` must be a function (ctx, unit) => units that must advance together');
    }
  }

  // THE GATE RULE.
  for (const [i, s] of stages.entries()) {
    if (!s?.id) continue;
    const terminal = i === stages.length - 1;
    const waiver = (s as any).gatesWaived;

    if (waiver) {
      if (terminal) {
        P(s.id, 'the TERMINAL stage may not waive its gates. It is the last thing standing between a '
          + 'run and "done"; with no gate it reports success unconditionally. This is the frontier-14 defect verbatim.');
      }
      if (typeof waiver !== 'string' || waiver.trim().length < 20) {
        P(s.id, '`gatesWaived` must be a sentence saying WHY this stage needs no gate and what checks it instead. '
          + 'A bare `true` is how a missing gate looks like a deliberate one.');
      }
      if (typeof s.gates === 'function' && (s.gates(ctx) ?? []).length) {
        P(s.id, 'declares both `gatesWaived` and actual gates; drop the waiver');
      }
      continue;
    }

    if (typeof s.gates !== 'function') {
      P(s.id, 'has no `gates(ctx)`. Add gates, or declare `gatesWaived: "<why>"` — a stage with neither '
        + 'silently passes, which is indistinguishable from a stage that was checked.');
      continue;
    }
    let list: Gate[] = [];
    try { list = s.gates(ctx) ?? []; }
    catch (err: any) { P(s.id, `gates(ctx) threw — ${err?.message ?? err}`); continue; }
    if (!list.length) {
      P(s.id, 'declares `gates` but returns an empty list. An empty gate list is read as "gates passed"; '
        + 'if this stage genuinely has nothing to check, say so with `gatesWaived`.');
    }
    for (const g of list) {
      if (!g?.id) P(s.id, 'a gate has no id');
      const argv = typeof g?.argv === 'function' ? g.argv() : g?.argv;
      if (!Array.isArray(argv) || !argv.length) {
        P(s.id, `gate ${g?.id ?? '?'} needs an argv ARRAY. Command strings are parsed, and every attempt to parse one here produced a quoting defect.`);
      }
    }
  }

  return problems;
}

/** One-line summary for a CLI. */
export function formatProblems(problems: SpecProblem[]): string {
  return problems.map((p) => `  ${p.stage}: ${p.message}`).join('\n');
}
