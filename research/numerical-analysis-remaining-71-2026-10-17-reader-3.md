# Step 3a reader report — batch 3

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: `reader-3`  
Batch: `3`

## Opened inventory

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/spline-evaluation-and-interpolation-algorithms.md` (A page)
- `library/numerical-linear-algebra-and-approximation/spline-evaluation-and-interpolation-algorithms-examples.md` (B page)

All 18 assigned items were opened and reviewed:

- `alg-de-boor-coefficient-evaluation`
- `alg-single-new-b-spline-knot-insertion`
- `def-clamped-cubic-spline-interpolant`
- `lem-natural-cubic-spline-second-derivative-perturbation`
- `alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate`
- `lem-b-spline-basis-refinement-under-single-knot-insertion`
- `thm-de-boor-coefficient-evaluation-equivalence`
- `thm-de-boor-coefficient-evaluation-work`
- `thm-clamped-cubic-spline-interpolant-exists-uniquely`
- `thm-natural-cubic-spline-tridiagonal-residual-transfer`
- `thm-natural-tridiagonal-cholesky-solve-residual-certificate`
- `thm-de-boor-forward-error-under-operationwise-model`
- `thm-single-new-knot-insertion-preserves-b-spline-curve`
- `thm-clamped-cubic-spline-fourth-order-error`
- `thm-computed-natural-cubic-spline-forward-error-certificate`
- `ex-repeated-knot-de-boor-evaluation`
- `ex-natural-cubic-x-squared-endpoint-caveat`
- `ex-single-new-knot-insertion-preserves-linear-curve`

Opened dependency items used to verify the assigned claims:

- `def-b-spline-space-and-basis`, `thm-spline-polynomial-reproduction`
- `def-natural-cubic-spline`, `thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots`
- `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `def-standard-relative-floating-point-model-and-unit-roundoff`
- `alg-rounded-cholesky-with-failure-status`, `def-cholesky-factorisation-with-positive-diagonal`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`
- `lem-rounded-triangular-substitution-componentwise-backward-error`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `lem-product-of-one-plus-deltas-gives-theta-n`
- `lem-rounded-linear-and-normal-residual-certificates`, `thm-rounded-cholesky-componentwise-and-normwise-backward-error`, `lem-finite-arithmetic-schedule-termination-and-count`
- `def-frobenius-matrix-norm`, `def-inner-product-norm`, `prop-standard-coordinate-inner-products`
- `cor-taylor-remainder-bound`

I cross-checked the 14 populated entries in `research/numerical-analysis-remaining-71-2026-10-17-batch-3.proof-contracts.json` against the current item proofs. All 41 citation excerpts matched their current source sections, and all 48 derivation locators matched current proof steps. Four exact source quotations of the de Boor algorithm definition were refreshed after the procedure clarification below. The four definition/algorithm items without proof contracts have no proof derivations to cross-check.

## Source checks

- De Boor, *A Practical Guide to Splines*, Chapter X, printed pp. 124–126, formulas (24)–(29), derives the local coefficient reduction used by de Boor evaluation; Chapter XI, printed pp. 136–137, formulas (21)–(22), gives the single-knot coefficient blend and curve preservation. [Source PDF](https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf), extracted lines 5436–5515 and 5892–5912.
- Lyche, Manni, and Speleers, “B-Splines and Spline Approximation,” §1.1.1 and Theorem 11, gives the recursive basis convention and multiplicity-dependent smoothness used in the repeated-knot review. [Source PDF](https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf), PDF pp. 2 and 8–9, extracted lines 22–61 and 550–620.
- LeMesurier, “Piecewise Polynomial Approximating Functions and Spline Interpolation,” §3.4.2, gives the clamped second-derivative system, and §3.4.3, Theorem 3.5, states a stronger clamped interpolation bound with constant $5/384$. The assigned proof establishes its weaker $83/324$ constant directly. [Source](https://lemesurierb.people.charleston.edu/introduction-to-numerical-methods-and-analysis-python/docs/main/piecewise-polynomial-approximation-and-splines.html), lines 224–238.
- De Boor, Chapter IV, printed pp. 43–45, presents the natural tridiagonal system, strict diagonal dominance, endpoint-slope boundary choice, and zero endpoint-curvature natural condition. [Source PDF](https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf), extracted lines 2338–2388.

The de Boor PDF text extraction is noisy; the cited formulas and printed page locators were readable and were checked against the independent Lyche notes and the assigned direct derivations.

## Review verdicts

- **A page — `spline-evaluation-and-interpolation-algorithms`: pass, with the published dependency finding below.** Its summary accurately describes the exact and rounded de Boor procedures, knot insertion, natural-spline residual certificate, separate reconstruction evaluation error, and clamped fourth-order result. The local perturbation estimate uses $H^2/8$, the residual-transfer bound uses the correct $delta$, and the computed certificate includes the exact matrix and right-hand-side assembly discrepancies.
- **B page — `spline-evaluation-and-interpolation-algorithms-examples`: pass.** The repeated-knot example computes 5 with the stated active coefficients; the natural interpolant of $x^2$ has midpoint error $H^2/16$ on the first interval; and the degree-one knot insertion updates controls to $(0,1/2,1)$ while preserving $C(x)=x$.

The clamped system has the stated endpoint signs and is strictly row diagonally dominant, including the one-interval case. The clamped error proof's Taylor residual, curvature-error, and Hermite constants are consistent. The tridiagonal certificate proof establishes positivity of the assembled matrix from its rounded diagonal lower bound, matches the sparse factor and solve schedules to the dense suppliers, bounds the computed residual, and transfers it with the assembly errors. No other mathematical defect was confirmed in the assigned proofs, witnesses, computations, titles, or page prose.

## Repairs

1. **`alg-de-boor-coefficient-evaluation`** — clarified that floating-point knots, query, and active coefficients must be finite stored real inputs, specified the valid zero-based span range, and made the execution order explicit. The rounded numerator is computed first; if it is zero, the procedure copies the left coefficient and skips the denominator subtraction and remaining operations. Otherwise it computes the denominator, quotient, complement, two products, and sum in order. This removes ambiguity about which operation can trigger the first range failure and makes the procedure's input contract explicit. Since $t_U>t_L$, a zero numerator gives exact weight zero, so the copy is the exact blend value. The operationwise model excludes nonzero subnormal results on a successful call.

2. **`thm-de-boor-forward-error-under-operationwise-model`** — revised Fact [F2] to match the clarified branch. Its proof already treats the zero-numerator copy separately and applies the quotient and complement bounds only in the nonzero branch.

3. **`research/numerical-analysis-remaining-71-2026-10-17-batch-3.proof-contracts.json`** — updated the four consumer citation excerpts that quote the algorithm definition: `thm-de-boor-coefficient-evaluation-equivalence`, `thm-de-boor-coefficient-evaluation-work`, `thm-de-boor-forward-error-under-operationwise-model`, and `ex-repeated-knot-de-boor-evaluation`. The current definition quotes match the item text. Neither changed item had a `verification.judge` record to remove.

Validation after the final item edits:

- Reflow: both changed items reported `unchanged`.
- Precheck: `thm-de-boor-forward-error-under-operationwise-model` passed direct precheck; the algorithm precheck command reported `0 checked, 0 failing`, so no automated precheck coverage is claimed for that algorithm item.
- `node tools/proof-layout.mjs items/alg-de-boor-coefficient-evaluation.md items/thm-de-boor-forward-error-under-operationwise-model.md`: 2 items, 4 steps, 0 defects.

## Uneditable finding

- **Published dependency `def-b-spline-space-and-basis`:** line 10 sets `justified_by: [thm-spline-polynomial-reproduction]`, while line 9 of the target theorem lists `def-b-spline-space-and-basis` in its own `deps`. The theorem's proof takes the recursive definition as [F1] and proves its basis properties from it, so the `justified_by` edge creates a circular prerequisite closure rather than a prior well-definedness result. The assigned consumer `thm-de-boor-coefficient-evaluation-equivalence` depends on both items. The published edge needs correction outside this reader's edit authority; remove the circular justification edge or supply an earlier independent well-definedness result.

## Blockers and coverage note

No blocker remains for this batch. The run status was active at the `3a-read` stage with no worker currently running. The shared worktree already contained unrelated changes; they were left untouched. The first item-opening pass was not fully supplier-first for two lemmas: `lem-natural-cubic-spline-second-derivative-perturbation` was opened before its published natural-interpolant theorem, and `lem-b-spline-basis-refinement-under-single-knot-insertion` was opened before its published B-spline definition. I subsequently opened those suppliers and checked the already-read proofs against them without reopening the item files. This is a process limitation; I do not claim strict chronological supplier order. The algorithm precheck's zero checked count is the only automated-coverage limitation.
