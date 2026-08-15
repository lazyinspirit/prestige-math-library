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

## Group B re-check — batches 3, 7

Your step-3 pass produced the run's largest non-mathematical finding. This pass
is mostly about whether the source substitution was done honestly.

### Batch 3 — the dead-source re-harvest (your F3.1)

You found Kim's UCL notes return 404; the orchestrator confirmed independently
(PDF **and** directory, browser headers) and measured the exposure from the
coverage file: **47 of 114 rows (41%)**, with **15 items backed only by that
source**, including `thm-primary-decomposition-for-an-endomorphism`,
`lem-coprime-kernel-decomposition` and `thm-sylvesters-law-of-inertia`.

The instructed remedy was Treil Ch. 4 for page 88 and Axler LADR4e for page 94,
both verified live.

**What to check, and it is the whole job:**

1. **Is every re-anchored row real?** For each of the 47 rows, the new locator
   must point at material that genuinely covers that result in the replacement
   source. The dishonest repair here is easy and invisible to every gate: keep the
   row, swap the URL, and let the locator drift. **Open the replacement at the
   stated locators.** WebFetch cannot read PDFs — use a venv with `pypdf` for
   Axler; Treil Ch. 4 has an HTML edition.
2. **Where a Kim-backed result is genuinely absent from the replacement**, the row
   must say so rather than quietly persist. Check the 15 only-Kim-backed items
   first; they are where a silent drop would hide.
3. **Two independent treatments per pair** must now actually hold, with at least
   one carrying a harvestable table of contents.
4. F3.2 (multiplicity criterion, least squares), F3.3 (Conrad Cor 5.5 and any
   other heading skipped inside a declared range), F3.4 (D3.1's room actually
   used, and scalar-extension invariance *proved* rather than assumed), F3.5
   (28 empty contracts populated).

### Batch 7 — `linear-recurrences-…`

Re-check **F7.1** hardest: `cor-cayley-hamilton-recurrences-for-matrix-powers`
had to regain $A\in GL_d(K)$ (a nilpotent $A$ falsifies the unqualified title)
**and** resolve the field-only `thm-cayley-hamilton` against a commutative-ring
page. Confirm both, not just the first — a repair that adds the invertibility
hypothesis and leaves the ring/field mismatch is half done.

Then **F7.2** (reciprocity restated in $K(x)$ using the approved R7.1 edge to
`the-field-of-fractions-and-localisation`, not restated to dodge $K(x)$),
**F7.3** (Stanley Ex 4.7.5 and any other skipped heading in range), **F7.4**
(20 empty contracts populated), and that the Stanley eigenvalue decline row now
says accurately that the spectral theorem is order 94 — *below* 195 — and simply
outside this pair's declared closure.
