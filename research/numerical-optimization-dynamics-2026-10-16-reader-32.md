# Step 3a reader report — Batch 32

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `32`  
Role: `reader-32`

## Opened inventory

### Assigned pages

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/spectral-regularization-and-parameter-choice.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/spectral-regularization-and-parameter-choice-examples.md`

### Assigned A-page items, read in dependency order

- `alg-discrete-l-curve-parameter-choice`
- `lem-compact-gram-operator-is-positive-and-has-kernel`
- `lem-compact-spectral-multiplier-is-well-defined`
- `lem-linear-smoother-gcv-expression`
- `lem-square-summable-sequences-form-a-hilbert-space`
- `alg-gcv-finite-grid-parameter-choice`
- `def-compact-spectral-filter-and-qualification`
- `thm-discrete-l-curve-grid-search-is-well-defined`
- `lem-tikhonov-bias-converges-for-minimum-norm-solution`
- `lem-tikhonov-data-residual-continuity-monotonicity-and-limits`
- `lem-tikhonov-source-condition-bias-bound`
- `thm-gcv-grid-search-returns-score-minimizer`
- `alg-morozov-discrepancy-bracketing-and-bisection`
- `thm-tikhonov-convergence-under-noise-parameter-coupling`
- `thm-tikhonov-source-condition-rate-and-qualification-saturation`
- `thm-morozov-discrepancy-choice-converges`
- `thm-tikhonov-forward-discretization-and-stopping-coupling`

### Assigned B-page examples, read-only

- `ex-gcv-under-smoothing-tie-on-one-observation`
- `ex-compact-diagonal-tikhonov-bias-noise-and-source-saturation`
- `ex-morozov-noise-level-underestimate-prevents-crossing`

### Supplier dependencies opened

Published definitions and results:

- `def-countable-choice`
- `def-inner-product-space`
- `def-real-and-complex-inner-product-space`
- `def-bounded-linear-operator`
- `def-hilbert-space`
- `def-operator-norm`
- `def-compact-linear-operator`
- `def-hilbert-space-adjoint`
- `def-self-adjoint-positive-unitary-and-normal-operator`
- `def-orthogonality-and-orthogonal-complement`
- `def-square-summable-family-on-an-arbitrary-index-set`
- `def-tikhonov-regularised-least-squares`
- `cor-inner-product-induces-a-norm`
- `cor-cauchy-reals-lub-complete`
- `thm-reals-cauchy-complete`
- `thm-intermediate-value`
- `lem-compositions-with-a-compact-operator-are-compact`
- `lem-finite-rank-operators-are-compact`
- `thm-norm-limit-of-compact-operators-is-compact`
- `thm-cauchy-schwarz-in-an-inner-product-space`
- `thm-hilbert-adjoint-properties`
- `thm-orthogonal-decomposition-by-a-closed-subspace`
- `thm-spectral-theorem-for-compact-self-adjoint-operators`
- `thm-singular-value-decomposition`
- `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`

Current-run draft suppliers from batch `25`:

- `lem-hilbert-tikhonov-normal-operator-invertible` — SHA-256 `dc83f7d500aa622b01b1243a58425de66f9001e73bf7881fb5ec6de376b22c51`
- `lem-hilbert-tikhonov-noise-amplification-bound` — SHA-256 `cc72e49921704728fbc4f3b737a05ba7369edd23751e743254bd13f64958746e`
- `thm-tikhonov-error-chain-with-discretization-and-residual` — SHA-256 `6e7ee3727f5de9c8f9133f44279b2404e70bf097d189f3dcd6c425b5a72e1a03`

The batch-25 statements and proofs supply the shifted-normal inverse, noise-amplification estimate, and exact error-chain interfaces used here. Their hypotheses match the assigned claims; no defect requiring escalation was found in those interfaces.

## Repairs and evidence

1. **`lem-compact-spectral-multiplier-is-well-defined`, Facts & Assumptions and proof steps 2.1 and 3.1.** The original convergence argument invoked small tails of a bounded nonnegative series without defining the sum convention or citing the tail property. Added `def-square-summable-family-on-an-arbitrary-index-set` and `cor-cauchy-reals-lub-complete` dependencies, stated those facts, and bounded the Cauchy tails using the finite-subset sum. The nonempty multiplier domain `{0} ∪ Σ` also gives a finite supremum for bounded `q`. Updated the item’s proof contract accordingly.

2. **`def-compact-spectral-filter-and-qualification`, Definition.** The original qualification formula used a supremum over `Σ`, which can be empty when `A=0`; the statement did not define that case. Recast the condition as a pointwise bound, now vacuous when `Σ` is empty. Also stated why `qν(t)=t^ν` is a bounded multiplier (`0<t≤||S||`) and why `gλ(S)` is the inverse multiplier of `S+λI`, supporting the two equal solution formulas. Added `def-operator-norm` as a dependency. Checked the assigned direct and indirect consumers, including the Morozov and convergence claims and all three examples; their hypotheses and conclusions remain valid.

3. **`thm-tikhonov-source-condition-rate-and-qualification-saturation`, proof step 1.2.** The original witness specified `A` and its truncations only by their action on basis vectors, then used them as bounded operators on all of `ℓ²`. Replaced this with coordinate definitions on every sequence, proved the norm bounds, finite rank, and exact truncation error, and retained the same compact injective witness. Updated the step derivation in the proof contract.

4. **`alg-morozov-discrepancy-bracketing-and-bisection`, Definition.** Removed the claim that a returned bracket contains the *first* exact crossing. This is a correctness property rather than a procedure instruction, and the separate `thm-morozov-discrepancy-choice-converges` proves the needed weaker interface: every returned bracket contains at least one exact root. The algorithm’s inputs, branches, loop budgets, and outputs are unchanged.

No `verification.judge` record was present on the two edited proof items, and none was added. Proof contracts were updated for both proof-item repairs; the definition and algorithm have no phase-proof contract.

## Uneditable defects

None found. The B-page examples and B-page prose were read but not edited, as required by the assignment scope.

## Page verdicts

- **`spectral-regularization-and-parameter-choice` (A page):** No remaining defect identified in the reviewed page summary or assigned items after the repairs above. Its caveats about the penalty parameter and the limits of finite-grid heuristics match the item statements.
- **`spectral-regularization-and-parameter-choice-examples` (B page):** No defect identified in the page summary or three examples. The scalar GCV tie, compact diagonal bias/noise calculation, saturation ratio, and Morozov endpoint failure agree with their stated computations.

## Validation

- `reflow` ran on all four changed items; it reformatted the multiplier lemma and source-rate theorem and left the algorithm and definition unchanged.
- `precheck` reported 1 proof checked and 0 failures for each edited theorem/lemma; the algorithm and definition had 0 proof sections to check and no failures.
- Final required command: `node tools/proof-layout.mjs items/alg-morozov-discrepancy-bracketing-and-bisection.md items/def-compact-spectral-filter-and-qualification.md items/lem-compact-spectral-multiplier-is-well-defined.md items/thm-tikhonov-source-condition-rate-and-qualification-saturation.md` — **4 items, 7 steps, 0 defects**.

## Blocker and coverage limits

There is no batch-32 blocker. The live `.autopilot` status still reports the run as running with nothing currently in flight; it reports a separate `3a-split` blocker because `split-6` failed three times (batch 6). The recent `git log` entries are unrelated quantum-computing closeouts.

I read every assigned page and item and the direct supplier statements/proofs needed to check their mathematical interfaces. I did not independently fetch the cited lecture-note PDFs or audit every transitive proof dependency of the already-published suppliers; those are outside this report’s verification claim.
