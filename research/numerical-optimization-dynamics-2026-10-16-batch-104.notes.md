# Batch 104 — Multirate and partitioned time integration

Run `numerical-optimization-dynamics-2026-10-16` · role beta · assigned batch dependency level 8 · prerequisites batches 28 and 98.

## Controlling plan and conflicts

Read the repository instructions, schema, workflow, assignment, owner-authoring direction, complete T05 design and incorporated mathematical contract, `plan-spec.json`, and the dispatch dependency-order input before authoring. T05 and the plan spec agree on page IDs, order 2492/2493, category, companion placement, and page prerequisites. The full plan contract controls the method and proof route; the compact plan-spec entry introduces no conflicting requirement.

The plan asks for a fixed-time bound of order `C(H+h)`. The local theorem proves the stronger node bound `C_T H`, with `C_T` explicit in `K`, `M`, and `T`; because `h=H/m≤H`, this also implies the requested `C_T(H+h)` bound. The constant depends on the field Lipschitz constant through `L_T`; no stiffness-uniform claim is made. The method's one slow and `m` fast field evaluations are counts only, with no wall-clock speedup claim.

A bibliography check found a mismatch in the T05 prose citation “Sandu/Günther, SIAM J Numer Anal 53 (2015), multirate GARK framework”: the publisher record for [DOI 10.1137/130943224](https://epubs.siam.org/doi/abs/10.1137/130943224) identifies *A Generalized-Structure Approach to Additive Runge–Kutta Methods*. This batch imports no GARK tableau or order-condition claim from that citation. No plan/spec mathematical conflict was found.

The dispatch scheduling input is `e12d6fc991fbebf33f8271ceee8e4b6401e6c6666b3d63bb32ffa4ff4e0c3473`; the current shared dependency-level file records `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`. The current file still lists batch 104 at level 8 with prerequisite batches 28 and 98. The shared scheduling input was not edited.

## Inventory, placement, and levels

The assigned manifest and page carriers contain 8 A-page items and 3 B-page examples, below the 100-item page cap. The manifest is supplier-first at item level. Levels are computed over in-run item dependencies; published out-of-run dependencies do not raise a level.

| Level | Items |
|---:|---|
| 0 | `alg-frozen-slow-explicit-fast-euler`; `alg-synchronous-waveform-relaxation-finite-window` |
| 1 | `lem-frozen-slow-euler-variation-bounds`; `lem-frozen-slow-euler-one-step-stability`; `cor-cubic-defect-gives-second-order-for-symmetric-multirate-composition`; `thm-waveform-relaxation-contraction-and-error-bound` |
| 2 | `lem-frozen-slow-euler-local-defect-bound` |
| 3 | `thm-frozen-slow-euler-global-first-order-error` |
| 1 (B) | `ex-linear-electromechanical-multirate-block-cost`; `ex-coupled-fast-mode-destabilizes-frozen-slow-euler`; `ex-frozen-slow-interpolation-limits-order` |

The frozen-slow global theorem uses the local defect, the one-step stability estimate uniform in `m`, the block variation lemma, and the actual batch-28 finite recurrence lemma. It does not import batch 28's stronger global theorem. The generic conditional order-two corollary proves only that an independently verified cubic exact-start defect plus a `(1+LH)` stability bound imply order two; symmetry is not used to infer either bound.

The B page also includes a normalized linear electromechanical toy model with mechanical state `(q,v)` and electrical current `i`. Its quadratic energy derivative is computed exactly as `-(v-i)^2-7i^2`; its worked method step counts one two-component mechanical field call, four electrical calls, and one cacheable slow-state transfer at block start. It makes no physical calibration or wall-clock claim.

## Supplier verification and open interface

I read the current batch-28 `global-ode-and-density-error` page and the complete actual body and proof of `lem-discrete-one-step-error-recurrence-bound`. Its recurrence assumptions and separate `L>0`/`L=0` conclusions match both consumers. The current supplier readiness record is owner-authored; this batch records body-level verification only and claims no independent acceptance.

The batch-98 `imex-and-operator-splitting-methods` page and item bodies are absent; its current manifest inventory is empty. The batch-104 cross-batch ledger leaves that page edge open. Before applying the conditional corollary to T04, the actual T04 method must supply its exact-flow macro map and coupling interpolant, verified interpolant reversal symmetry and step inverse relation, and an independently proved uniform `CH^3` exact-start defect plus `(1+LH)` stability on one common set. No method-specific T04 order-two conclusion, supplier excerpt, or readiness is invented. The generic corollary and both assigned B examples are authored independently and remain usable without that application.

The local waveform theorem uses the choice-free closed-subspace direction and constructive Banach fixed-point theorem. The source fact for closedness is specifically claim 2; no countable-choice direction is used.

## Sources and dispositions

The source-coverage record harvests 24 named results/sections. Four full-text sources were read over the exact locators in the coverage file and passed `source-fetch-check --stamp`:

- Günther–Sandu, *Multirate Methods for Ordinary Differential Equations* (2025), complete 75-page report; §§2.1, 3 (including the complete Theorem 3.1 proof), and 4.1.1–4.1.2, printed pp. 2–16. This supplies multirate forward-Euler and interpolation context; its generic theorem assumptions are not substituted for the local proof.
- Günther, *Numerical Analysis and Simulation I — Ordinary Differential Equations* (2017/18), complete lecture notes; Chapter 4 §§4.2–4.3, printed pp. 74–82. The relevant Euler accuracy, stability, and multirate explicit-Euler sections were inspected.
- Embree, *Lecture Notes on Numerical Analysis* (2016), complete lecture notes; Lecture 34 §5.3, printed pp. 190–192. This is an independent one-step global-error treatment; the proof uses the batch-28 recurrence supplier and derives the method-specific recurrence locally.
- Lelarasmee, *The Waveform Relaxation Method for Time-Domain Analysis of Large Scale Integrated Circuits* (1982), complete Berkeley report; Chapter 5 §§5.1–5.3, PDF pp. 61–66. The report supplies the functional-space fixed-point context; its decomposed canonical iteration is not treated as the synchronous map proved here.

Gear–Wells (1984), the planned multirate LMM source, returned publisher access metadata/paywall and catalog or Google Books snippets only after the recorded initial retrieval plus five recoveries. It is documented as dropped with date-only attempt entries because exact timestamps were not exposed. No Gear–Wells multistep formula, tableau, or error controller is claimed. The local frozen-slow Euler algorithm, defect, stability, and global error proof supply complete arguments for the scoped results; the full-text multirate sources provide method context. The 2015 GARK bibliography mismatch is noted above and that reference is not used as a method-specific authority.

`source-fetch-check --stamp` verified 4/5 listed source records; the fifth is the validated Gear–Wells drop, not a fetch stamp. The coverage checklist records every harvested item/result disposition and no source drop waives mathematical coverage.

## Scoped checks and readiness

Final scoped check outputs:

- `proof-layout`: all 11 assigned items, 30 proof steps, 0 defects. `precheck`: 9 proof-bearing items checked, 0 failures. Definitions and algorithms are not applicable to the proof-phase checker.
- Strict proof contracts: 9/9 proof-bearing items, exact supplier excerpts for every linked fact, every numbered step mapped, boundary dispositions recorded, 0 errors or warnings.
- `content-policy`: 11 scoped items, 0 errors/warnings. `rendercheck`: 11 items plus both pages (13 files), pass. `manifest-deps`: 11 items, no missing arrays or errors.
- `coverage-checklist --require-destination`: 1 A page, 25 harvested results, 0 errors/warnings. `source-fetch-check`: 4 full-text URLs fetch-verified and 1 validated drop.
- Focused `depcheck` and `fwdcheck` pass for all 11 items and their prerequisite closures; focused `extcheck` and `citecheck` pass, with no unproved-dependency record or recognized citation warning.
- Scoped dependency-level recomputation gives no mismatch across the 11 assigned items. The required run-wide `item-dependency-levels.mjs check` also passes: 2,009 items across 214 pages, maximum level 16.
- The run-wide `batch-dependency-levels.mjs check` reports the shared scheduling artifact as stale. Dispatch input hash is `e12d6fc991fbebf33f8271ceee8e4b6401e6c6666b3d63bb32ffa4ff4e0c3473`; current shared file input hash is `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`. The current file still lists batch 104 at level 8 with prerequisites 28 and 98. The shared artifact was left unchanged for its owner.
- Step 1 records mark all 11 assigned items `ready` with `owner:false` and current dependency hashes. These are author-construction records, not proof acceptance or independent approval. The T04 page-level edge remains `open` and blocks only a method-specific T04 application, which is not asserted here.

The final read-only autopilot status reports this run active at `1-scaffold`, 98/107 covered, no work in flight, and the existing owner repair/recertification blocker. Batch 104 is still among the missing scaffold dispatches until the owner completes the normal artifact reconciliation. No autopilot state, shared plan, verdict, or gate was changed or run.
