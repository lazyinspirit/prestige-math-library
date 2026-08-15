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


---

# This dispatch

## Group A re-check — batches 1, 2, 5

You are the **lead Alpha**. After this pass you take step 4 (splice and
propagation), and later 6c and 8.

### Batch 1 — `symmetric-polynomials` 26 → 29 items
Repair claims: the missing resultant-definition coverage row added, Conrad's
harvest completed with 12 missing Example/Remark rows, three fully cited proof
contracts added, 73 contracts / 0 empty / 218 citations.
**Re-check F1.1 specifically.** You established from Milne p. 58 that the
resultant is $a^mb^n\prod(\alpha_i-\beta_j)$ and that Prop 4.35(a) and (c) are
proved with no determinant. Confirm the three new items are the ones that follow
from the *product* definition, that they do not smuggle in a Sylvester matrix,
and that the Sylvester decline itself still stands correctly (it does — order 82
determinants are genuinely unavailable at order 58).

### Batch 2 — `primitive-roots-…` 26 → 27 items
Repair claims: `thm-eulers-criterion-for-binomial-congruences` added "preserving
Hackman's primitive-root, coprimality, and positive-exponent hypotheses", §C.III
coverage extended across all headings, the Legendre specialisation deliberately
**not** imported, root lemma rebound to the published polynomial root bound via
the approved R2.1 edge, 66 contracts / 0 empty / 229 citations.
**Check the hypotheses actually survived into the Statement** — this is the run's
most common failure shape. Confirm §C.III's other headings all got dispositions,
not just the one that produced the theorem.

### Batch 5 — `tensor-products-of-modules`, F5.1
The one that matters. Repair claims the two out-of-closure dependencies were
replaced with free-$\mathbb Z$-module machinery and the additive-group
identification made explicit, both deferrals now name licensing pages, 41
contracts / 0 empty / 147 citations.
**Confirm the identification is stated, not assumed.** "A free $\mathbb Z$-module
on a set is a free abelian group on that set" is true and is exactly the kind of
step that gets waved through. The orchestrator has verified the *graph* is clean
(0 out-of-closure deps run-wide); what you are checking is whether the
*mathematics* of the substitution is written out.

### Also yours
Verify the two deferral licensing pages Beta named — `subobject-lattices-…`
(365.017) and `tor-flatness-and-global-dimension` (365.055) — exist in
`research/plan-spec.json` with those ids.
