# frontier-13 — Alpha re-check brief (step 3 → 4 gate)

You are the same group Alpha that reviewed these batches at step 3. Your step-3
report stands; this pass asks one question only:

> **Did the repairs actually fix what you found, without breaking anything else?**

`LEVELS.md` makes this the gate before step 4 splices. After this pass the text
stops being cheap to change: a step-5 defect costs a rewrite, and a step-8 defect
is fatal-only.

## Hard rules

- **No permission prompts of ANY kind** (owner, 2026-07-30, broadened
  2026-08-11), from you or any subagent. No segment of an `&&` chain may prompt.
  If something truly cannot proceed without new authority, **record a blocker** —
  never a prompt.
- **You author nothing and edit no batch file, no `plan-spec.json` entry, and no
  published item.** Write only your own namespaced report,
  `research/frontier-13-alpha-<g>-recheck.md`.
- **Read from disk.** A Beta's summary of its own repair is not evidence. Every
  finding you confirm as fixed must be confirmed against the artifact.
- Your batches only. Do not open another group's.

## What to check, in priority order

1. **Each finding you raised: fixed, partially fixed, or not fixed.** Name it by
   the id you used in your step-3 report and state which. "Partially fixed" is a
   real and useful verdict — say exactly what remains.
2. **Did the repair introduce a new defect?** This is the one thing a Beta cannot
   check for itself. The orchestrator already caught one instance: batch 6's
   first repair correctly restated a corollary's hypothesis as "posets" and
   invoked antisymmetry in the proof, but left its dependency set pointing only at
   a **preorder** definition — the claim was fixed and the obligation was not. Look
   for exactly this shape: a changed Statement whose dependencies, proof contract
   input map, or coverage row did not move with it.
3. **New items** (batches 1, 2, 4 added some): each needs a dependency in closure
   or an earlier same-pair item, component provenance on both axes, a proof
   contract with populated citations, and a coverage row whose disposition changed
   to `included` naming it. An `ai-generated` statement may never be load-bearing.
4. **Ids versus content.** After a repair narrows an item, its id can be left
   describing the thing it no longer is. Ids are immutable once on `main`, so this
   is the last moment to catch that for free. Flag any id that overclaims relative
   to its title and strategy.
5. **Proof-contract citations.** Every batch reported 0 empty arrays after repair.
   Spot-check that the populated citations are real exact source clauses, not
   placeholders — a populated-but-hollow contract passes the same count check as a
   real one.
6. **Titles and Statements against proofs**, once more on any item the repair
   touched. This run has already produced four items whose title claimed more than
   the proof gave; it is the defect class that reaches step 7 intact, because the
   judges read Statements and cannot see a false title.

## Verdict

Give **`ready-for-splice`** or **`not-ready`** per pair, with reasons. `not-ready`
must name the exact remaining work. A `ready-for-splice` on a pair whose step-3
finding you did not re-check by name is not a verdict.

Close with anything the orchestrator should know that is outside your batches'
scope — cross-batch patterns, gate blind spots, or a risk the step-4 splice or
step-5 authoring should carry forward.
