# Step 3a reader report — batch 20

Run: numerical-analysis-remaining-71-2026-10-17  
Role: reader  
Batch: 20

## Opened inventory

Assigned pages:

- library/numerical-linear-algebra-and-approximation/multigrid-methods-and-complexity.md (A).
- library/numerical-linear-algebra-and-approximation/multigrid-methods-and-complexity-examples.md (B).

The A-page interface pages were also opened: preconditioner-algorithms-and-residual-metrics and lax-milgram-and-weak-elliptic-solutions. For the claims used by this batch, I read the weak Dirichlet and uniformly elliptic form definitions listed below.

Assigned items, reviewed in dependency order:

1. def-galerkin-coarse-grid-correction
2. lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero
3. thm-galerkin-coarse-correction-is-energy-orthogonal-projector
4. def-symmetric-two-grid-error-operator
5. alg-aggregation-based-algebraic-multigrid-hierarchy
6. lem-one-dimensional-poisson-smoothing-and-approximation
7. alg-finite-galerkin-v-cycle
8. thm-two-grid-energy-contraction-under-joint-estimate
9. thm-aggregation-amg-hierarchy-preserves-spd-and-terminates
10. thm-galerkin-v-cycle-work-recurrence-master-regimes
11. thm-one-dimensional-poisson-two-grid-energy-contraction
12. ex-one-dimensional-poisson-coarse-correction-removes-linear-error
13. ex-v-and-w-cycle-costs-in-two-dimensions
14. ex-one-dimensional-poisson-two-grid-uniform-contraction

Dependency items opened for the arguments:

- Matrix, adjoint, and energy facts: def-cholesky-factorisation-with-positive-diagonal, def-matrix-product-and-identity-matrix, prop-standard-coordinate-inner-products, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix, prop-transpose-laws, def-transpose-of-a-matrix, and thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer.
- Sobolev and mollification facts: def-countable-choice, def-weak-derivative-of-a-locally-integrable-function, def-sobolev-space-wkp-and-its-norm, lem-sobolev-norm-is-well-defined-and-definite, def-wkp-zero-as-a-sobolev-closure, lem-compact-support-zero-extension-in-wkp, lem-smooth-bump-between-concentric-euclidean-balls, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, thm-l-one-approximate-identities-converge-in-l-p, and thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign.
- Spectral and norm facts: cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-operator-norm-on-a-finite-dimensional-inner-product-space, and thm-operator-norm-is-the-largest-singular-value.
- Weak-form interfaces: def-uniformly-elliptic-divergence-form-operator and def-weak-dirichlet-solution-for-a-divergence-form-operator.

The batch proof contracts, notes, source-evidence record, assigned manifest, and empty cross-batch-dependency record were opened as evidence and checked against the current item bodies.

## Repairs and evidence

- items/alg-finite-galerkin-v-cycle.md, Definition: changed the output description from “approximate solution” to the vector specified by the procedure, and removed the termination assertion from the procedure definition. The procedure allows arbitrary pre- and post-correction matrices, so it gives no accuracy or convergence guarantee. Termination is now a separately proved result.
- items/thm-galerkin-v-cycle-work-recurrence-master-regimes.md, Statement and Proof: made the termination result cover every admissible finite hierarchy, which is the full domain of the algorithm. The proof uses induction on the level, with the SPD base solve supplied by thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer. The work estimate separately states its fixed-coarsening assumptions: fixed integer d, integer L, sizes N_j=q^j, q=2^d, fixed positive per-level constant c, positive bounded base cost, and fixed positive integer call count gamma. As L grows with d, c, and gamma fixed, the displayed recurrence is expanded and all three regimes are proved. This makes the algorithm’s existing justified_by result establish termination on its full admissible domain.
- items/ex-v-and-w-cycle-costs-in-two-dimensions.md, Example and Given: added N_j=4^j for 0≤j≤L, so the assumed hierarchy explicitly has four-to-one coarsening and matches the recurrence used in both cycle calculations. The finite geometric sums then give Theta(N) for gamma=1 and gamma=2, each below q=4.
- research/numerical-analysis-remaining-71-2026-10-17-batch-20.proof-contracts.json: refreshed the cycle-definition and work-theorem excerpts, added the base-solve supplier excerpt, updated the work-theorem derivation and boundary evidence, and refreshed the V/W example’s theorem excerpt. The author self-check records were retained. The three edited items had no verification.judge records.

The local proofs agree with the checked source conventions. Brenner–Scott, Chapter 6, §§6.3–6.7 (printed pp. 159–172; source extract PDF pp. 171–184), gives nested finite-element spaces, recursive cycle procedures, two-grid analysis, and level-work estimates. Heidelberg, Chapter 10, Example 10.4 and §§10.3–10.4 (PDF pp. 182–193), gives the 1D Poisson matrix/eigenvectors, variational coarse correction, recursive multigrid procedure, smoothing estimate, and conditional convergence/work analysis. Zhang, Chapter 6, §§6.4–6.5 (printed pp. 126–135; source extract PDF pp. 128–137), gives strength-of-connection conventions and aggregation with indicator prolongation, while treating AMG construction as heuristic rather than a convergence guarantee. The batch’s stronger or differently parameterized claims are proved locally under their stated finite-dimensional hypotheses.

## Validation

- Reflow: run on all three edited items; the theorem and V/W example were reflowed. Reflow was rerun after the final theorem edit.
- Precheck: alg-finite-galerkin-v-cycle — 0 checked, 0 failing; thm-galerkin-v-cycle-work-recurrence-master-regimes — pass; ex-v-and-w-cycle-costs-in-two-dimensions — pass.
- Final batched proof layout: node tools/proof-layout.mjs items/alg-finite-galerkin-v-cycle.md items/thm-galerkin-v-cycle-work-recurrence-master-regimes.md items/ex-v-and-w-cycle-costs-in-two-dimensions.md — 3 items, 8 steps, 0 defects.

## Page verdicts

- multigrid-methods-and-complexity (A): supported. Its summary accurately describes the Galerkin projector, joint contraction condition, proved 1D estimate, finite AMG setup statuses, and conditional cycle work. No A-page prose edit was needed.
- multigrid-methods-and-complexity-examples (B): supported. Its summary matches the three example items; the four-to-one assumption in the V/W example is now explicit in that item.

## Unrepaired findings and blocker

No confirmed defects remain unedited in the assigned pages, items, or dependencies reviewed. No blocker.

## Coverage note

All assigned pages and items and the dependencies needed for their claims were opened. The required interface pages were read for context; unrelated items on those pages were not re-audited. The source review used the repository’s complete relevant chapter extracts rather than independently fetching the full PDFs. No unresolved mathematical uncertainty remains for the claims in this batch.
