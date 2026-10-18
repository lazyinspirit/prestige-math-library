# Step 3a reader report — batch 45

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `45`  
Role: reader

## Opened inventory

Assigned pages:

- `overlapping-schwarz-and-stable-subspace-decompositions`
- `overlapping-schwarz-and-stable-subspace-decompositions-examples`

All 14 assigned items were opened and reviewed:

- `lem-schwarz-p1-product-cutoff-interpolation-energy-estimate`
- `def-overlapping-schwarz-subspace-correction-data`
- `lem-schwarz-local-matrices-are-well-defined`
- `thm-two-level-p1-poisson-stable-decomposition`
- `lem-schwarz-local-corrections-are-energy-orthogonal-projections`
- `lem-schwarz-additive-inverse-is-local-energy-minimum`
- `thm-additive-schwarz-stable-decomposition-condition-number`
- `thm-multiplicative-schwarz-exact-sweep-contraction`
- `thm-two-level-p1-poisson-additive-and-multiplicative-bounds`
- `ex-schwarz-overlap-shrinking-decomposition-bound`
- `ex-one-level-overlapping-schwarz-condition-number-growth`
- `cex-schwarz-naive-coarse-space-misses-conductive-mode`
- `ex-schwarz-two-level-1d-poisson-coarse-plus-odd-corrections`
- `ex-schwarz-inexact-local-solves-spectral-equivalence-bound`

Direct item suppliers opened:

- `def-matching-affine-simplicial-meshes`
- `lem-shape-regular-affine-simplex-scaling`
- `thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field`
- `def-galerkin-coarse-grid-correction`
- `thm-galerkin-coarse-correction-is-energy-orthogonal-projector`
- `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix`
- `def-matrix-product-and-identity-matrix`
- `prop-transpose-laws`
- `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer`
- `lem-na-scott-zhang-boundary-preserving-p1-interpolant` (draft supplier in batch 31)
- `def-broken-and-conforming-polynomial-spaces`
- `thm-zero-boundary-piecewise-polynomials-in-w10p`
- `def-countable-choice`
- `thm-cauchy-schwarz-in-an-inner-product-space`

Deeper affine, Sobolev, and interpolation suppliers opened for the estimates that use them:

- `lem-affine-pullback-weak-derivatives-and-scaling`
- `lem-affine-simplex-gauss-green-formula`
- `def-wkp-zero-as-a-sobolev-closure`
- `def-sobolev-space-wkp-and-its-norm`
- `thm-reference-simplex-trace-and-gauss-green`
- `thm-reference-simplex-poincare-wirtinger`
- `thm-bramble-hilbert-on-reference-simplex`
- `def-field`, `lem-of-inverse-unique`, and `def-vector-space` (opened while resolving a dependency traversal cycle)

The two dependency pages in the batch manifest were opened:

- `multigrid-methods-and-complexity`
- `mixed-finite-elements-and-stokes-stability`

External source excerpts consulted included Xu, *Iterative Methods by Space Decomposition and Subspace Correction*, §§3.1–3.3 and 4.1–4.2; Bastian, *Lecture Notes on Parallel Solution of Large Sparse Linear Systems*, Chapter 4 §§4.2–4.3 and Chapter 5 §§5.3–5.4; and Scott–Zhang (1990), §§2–4. The exact Scott–Zhang support for an averaged nodal operator is Theorem 2.1 and Theorem 4.1/Corollary 4.1, printed pp. 485–491, in [*Finite Element Interpolation of Nonsmooth Functions Satisfying Boundary Conditions*](https://doi.org/10.1090/S0025-5718-1990-1011446-7).

## Review and repair

The A-page item `thm-two-level-p1-poisson-stable-decomposition` said the cell collections satisfy `$\mathcal T_H\subset\mathcal T_h$`. For `n\ge2`, the fine mesh subdivides the coarse simplices, so each fine simplex lies in a coarse simplex; the coarse cell collection is not a subset of the fine cell collection. I changed the statement to say that the fine mesh refines the coarse mesh. This matches proof step 1.1 and the nested finite-element spaces `$V_H\subset V_h$` stated later.

I updated step 1.1 in `research/numerical-analysis-remaining-71-2026-10-17-batch-45.proof-contracts.json` to record the same refinement direction. The item had no `verification.judge` record to remove. Reflow changed line wrapping in the facts section; it did not change those facts.

The direct consumers of the repaired theorem in the current item/page inventory are `ex-schwarz-overlap-shrinking-decomposition-bound`, `thm-two-level-p1-poisson-additive-and-multiplicative-bounds`, and the A-page summary. I checked each; their claims continue to follow from the fine-refines-coarse relation and require no repair.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-two-level-p1-poisson-stable-decomposition.md` — reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-two-level-p1-poisson-stable-decomposition.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-two-level-p1-poisson-stable-decomposition.md` — 1 item, 6 steps, 0 defects.

No page prose or other item was edited.

## Uneditable defect

The current-run batch 31 dependency `lem-na-scott-zhang-boundary-preserving-p1-interpolant` has inaccurate source locators in `sources.references[0]` and `sources.references[1]`. The [Guermond Chapter 49 PDF](https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf) is titled as a chapter on mixed-form well-posedness; it does not provide the listed Chapters 50 and 53–54. In the [Boffi–Brezzi–Fortin textbook](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf), Chapter 5 Theorem 5.2.2, pp. 276–277, is the basic mixed saddle-point error estimate, not a Scott–Zhang interpolation result; the listed Chapter 8 sections concern Stokes stable-element construction. A directly relevant source is Scott and Zhang (1990), §§2–4, which constructs an averaged nodal interpolation operator preserving homogeneous boundary conditions and proves stability and approximation estimates. The batch 31 item contains its own detailed proof, so this is a nonfatal citation defect; I did not edit that other-batch item.

The dependency bytes remained current at split, SHA-256 `b3b8bd018eb22f40c67971a6a081c82742b6d62f083be556b82d5a30d1150ca1`. The assigned consumer is `thm-two-level-p1-poisson-stable-decomposition`.

## Page verdicts

- `overlapping-schwarz-and-stable-subspace-decompositions` — pass after the item repair. Its summary accurately describes the exact/inexact algebraic theory, explicit overlap dependence, Countable Choice hypotheses, and coefficient-contrast caveat.
- `overlapping-schwarz-and-stable-subspace-decompositions-examples` — pass. The summary accurately distinguishes the one-sided shrinking-overlap estimate from actual condition-number divergence and matches the finite examples.

## Coverage note and blocker

All assigned pages and items, their direct item suppliers, the dependency pages, and the deeper suppliers used by the affine and Sobolev interpolation estimates listed above were reviewed. I did not re-audit the full transitive foundation graph below every published supplier; that graph extends well beyond the claims in this batch. I found no unresolved mathematical uncertainty in the assigned claims after the mesh-refinement repair. There is no batch-specific blocker.
