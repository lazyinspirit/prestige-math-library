# Step 5 adjudication — group **q**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 34, 43, 48: 3 A/B pair(s), 6 page(s), 54 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/numerical-optimization-dynamics-2026-10-16-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **43**: `research/numerical-optimization-dynamics-2026-10-16-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/numerical-optimization-dynamics-2026-10-16-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-optimization-dynamics-2026-10-16-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 34 | `krylov-methods-and-lanczos-convergence` | A | numerical-linear-algebra-and-approximation | 2352 | `conjugate-gradients-minres-and-preconditioning`, `eigenvalue-iterations-and-the-qr-algorithm`, `krylov-subspaces-arnoldi-and-gmres`, `matrix-norms-condition-numbers-and-numerical-stability`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations`, `sparse-matrix-models-and-kernel-costs`, `stationary-iterations-and-relaxation`, `fundamental-trigonometric-identities` |
| 34 | `krylov-methods-and-lanczos-convergence-examples` | B | numerical-linear-algebra-and-approximation | 2353 | `krylov-methods-and-lanczos-convergence` |
| 43 | `clenshaw-curtis-and-extrapolation-quadrature` | A | numerical-linear-algebra-and-approximation | 2370 | `polynomial-interpolation-and-remainder`, `computed-fast-transforms-and-convolution`, `polynomial-approximation-and-chebyshev-interpolation`, `composite-quadrature-rules` |
| 43 | `clenshaw-curtis-and-extrapolation-quadrature-examples` | B | numerical-linear-algebra-and-approximation | 2371 | `clenshaw-curtis-and-extrapolation-quadrature` |
| 48 | `generalized-eigenvalue-pencils-and-qz-methods` | A | numerical-linear-algebra-and-approximation | 2380 | `direct-matrix-factorisations-lu-cholesky-and-qr`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations`, `computed-schur-decompositions-and-nonnormal-spectra`, `computed-singular-values-and-rank-revealing-factorizations`, `the-complex-exponential-and-eulers-formula` |
| 48 | `generalized-eigenvalue-pencils-and-qz-methods-examples` | B | numerical-linear-algebra-and-approximation | 2381 | `generalized-eigenvalue-pencils-and-qz-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `krylov-methods-and-lanczos-convergence` — Krylov methods and Lanczos convergence (6 item(s))

- `lem-scaled-chebyshev-filter-bound-on-a-separated-interval` · lemma — A scaled Chebyshev polynomial suppresses a separated interval
- `thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound` · theorem — Two-pass MGS Arnoldi has an explicit local relation and an a posteriori orthogonality bound
- `thm-cg-recursive-residual-gap-and-attainable-accuracy` · theorem — Finite-precision CG has a recursive-residual gap and an attainable-accuracy bound
- `thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases` · theorem — Lanczos largest Ritz values obey a Chebyshev start-angle bound, including degenerate branches
- `thm-gmres-true-residual-gap-from-computed-arnoldi-relation` · theorem — A computed GMRES correction has an explicit finite-precision residual gap
- `prop-sparse-unrestarted-gmres-work-and-storage` · proposition — Unrestarted GMRES has a sparse matvec plus orthogonalization work bound

### `krylov-methods-and-lanczos-convergence-examples` — Krylov methods and Lanczos convergence — Examples (4 item(s))

- `ex-unrestarted-and-restarted-gmres-on-a-diagonal-system` · example — Unrestarted GMRES solves a two-dimensional diagonal system before GMRES(1) restarts
- `ex-cg-denominator-failure-and-minres-on-an-indefinite-system` · example — CG's positive-denominator hypothesis fails on an indefinite system while MINRES can start
- `ex-lanczos-poorly-aligned-start-vector-delays-the-largest-ritz-value` · example — A poorly aligned start delays the largest Ritz value and requires the start-angle factor
- `ex-lanczos-repeated-top-zero-component-and-invariant-breakdown` · example — Lanczos handles repeated top eigenvalues, absent top components, and exact breakdown

### `clenshaw-curtis-and-extrapolation-quadrature` — Clenshaw curtis and extrapolation quadrature (20 item(s))

- `alg-na-romberg-trapezoid-table` · algorithm — Finite Romberg table from nested composite trapezoid levels
- `def-na-bernoulli-polynomials` · definition — Bernoulli polynomials by a normalized coefficient recursion
- `def-na-clenshaw-curtis-dct-i` · definition — Type-I cosine transform for Chebyshev–Lobatto data
- `def-na-closed-newton-cotes-eight-panel-rule` · definition — Closed Newton–Cotes rule on eight equal panels
- `def-na-peano-kernel` · definition — Peano kernel of a finite quadrature functional
- `lem-na-chebyshev-degree-bound-from-recurrence` · lemma — The Chebyshev recurrence gives degree at most its index
- `lem-na-chebyshev-recurrence-angle-identity` · lemma — The Chebyshev recurrence agrees with cosine multiple angles
- `lem-na-bernoulli-polynomial-identities` · lemma — Derivative, endpoint, parity, and boundedness identities for Bernoulli polynomials
- `lem-na-chebyshev-integral-moments` · lemma — Exact integrals of Chebyshev polynomials
- `lem-na-clenshaw-curtis-dct-i-orthogonality` · lemma — Weighted cosine orthogonality on the Lobatto grid
- `thm-na-peano-kernel-remainder-and-bound` · theorem — Peano representation and L1 error bound
- `thm-na-euler-maclaurin-composite-trapezoid-remainder` · theorem — Finite Euler–Maclaurin formula for the composite trapezoid
- `cor-na-composite-trapezoid-even-power-expansion` · corollary — Even-power expansion of trapezoid levels with a uniform remainder
- `lem-na-closed-newton-cotes-eight-panel-weights-and-exactness` · lemma — Exact weights and degree-nine exactness of the eight-panel rule
- `thm-na-romberg-even-power-cancellation` · theorem — Romberg cancels a proved finite even-power expansion
- `cor-na-closed-newton-cotes-eight-panel-peano-bound` · corollary — Peano remainder bound for the eight-panel rule
- `thm-na-clenshaw-curtis-interpolation-coefficients` · theorem — DCT-I coefficients of the Chebyshev–Lobatto interpolant
- `def-na-clenshaw-curtis-quadrature` · definition — Clenshaw–Curtis quadrature with the midpoint zero-degree case
- `thm-na-clenshaw-curtis-exactness-and-near-best-error` · theorem — Polynomial exactness and best-approximation error for Clenshaw–Curtis
- `alg-na-computed-clenshaw-curtis-via-fast-dft` · algorithm — Computed Clenshaw–Curtis from an even-extension DFT

### `clenshaw-curtis-and-extrapolation-quadrature-examples` — Clenshaw curtis and extrapolation quadrature — Examples (3 item(s))

- `ex-na-square-root-endpoint-breaks-romberg-order` · example — The square-root endpoint does not have Romberg's even-power order
- `ex-na-eight-panel-newton-cotes-negative-weight-amplification` · example — Negative weights amplify sample perturbations in the nine-point Newton–Cotes rule
- `ex-na-clenshaw-curtis-integrates-quadratics` · example — Three-point Clenshaw–Curtis integration of a quadratic

### `generalized-eigenvalue-pencils-and-qz-methods` — Generalized eigenvalue pencils and QZ methods (18 item(s))

- `def-regular-generalized-eigenvalue-pencil` · definition — Regular matrix pencils and homogeneous generalized eigenvalues
- `lem-block-upper-triangular-pencil-determinant-factorizes` · lemma — The homogeneous determinant factors across a block upper triangular pencil
- `lem-zero-determinant-matrix-has-nonzero-kernel-vector` · lemma — A square matrix with zero determinant has a nonzero kernel vector
- `def-b-inner-product-and-dual-norm-for-definite-pencil` · definition — The B-inner product, B-norm, and dual residual norm
- `alg-generalized-hessenberg-triangular-reduction` · algorithm — Givens reduction of a matrix pair to Hessenberg-triangular form
- `def-generalized-schur-form` · definition — Complex and real generalized Schur forms
- `lem-projective-determinant-is-homogeneous-and-scale-invariant` · lemma — The homogeneous determinant is scale invariant on projective pairs
- `lem-regular-pencil-has-no-common-kernel-vector` · lemma — A regular pencil has no nonzero vector in both kernels
- `lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil` · lemma — Two-sided unitary errors in a matrix pencil accumulate as a backward perturbation pair
- `thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis` · theorem — A Hermitian-definite pencil has a real spectrum and a B-orthonormal eigenbasis
- `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence` · proposition — Givens reduction terminates with a unitary-equivalent Hessenberg-triangular pair
- `lem-regular-pencil-has-projective-eigenvalue` · lemma — Every regular complex pencil has a homogeneous eigenvalue pair
- `thm-b-metric-residual-encloses-definite-pencil-eigenvalue` · theorem — A B-dual residual bounds distance to the spectrum of a Hermitian-definite pencil
- `lem-qz-two-sided-local-computed-update-bound` · lemma — Common computed Givens actions certify both pencil matrices and factor residuals
- `alg-finite-budget-qz-iteration-with-deflation-and-residual` · algorithm — Finite-budget QZ iteration with homogeneous status and residual output
- `thm-generalized-schur-form-exists-for-regular-pencil` · theorem — Every regular real or complex pencil has a generalized Schur form
- `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence` · proposition — Every finite-budget QZ run returns a status and records unitary transforms and explicit deflations
- `thm-computed-qz-pair-has-certified-backward-error` · theorem — Certified QZ residuals give a backward error bound for both pencil matrices

### `generalized-eigenvalue-pencils-and-qz-methods-examples` — Generalized eigenvalue pencils and QZ methods — Examples (3 item(s))

- `ex-singular-b-yields-an-infinite-generalized-eigenvalue` · example — A singular B can give a regular pencil with an infinite generalized eigenvalue
- `ex-regular-and-singular-pencil-determinant-witnesses` · example — A regular pencil and an identically singular determinant pencil
- `ex-mass-stiffness-pencil-has-two-b-orthogonal-modes` · example — A mass-stiffness pencil has real B-orthogonal modes and a residual enclosure

## Your seams

Your pages depend on another group's:

- `krylov-methods-and-lanczos-convergence` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `krylov-methods-and-lanczos-convergence` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)
- `krylov-methods-and-lanczos-convergence` requires `stationary-iterations-and-relaxation` (group o, batch 18)
- `clenshaw-curtis-and-extrapolation-quadrature` requires `polynomial-interpolation-and-remainder` (group n, batch 4)
- `clenshaw-curtis-and-extrapolation-quadrature` requires `computed-fast-transforms-and-convolution` (group n, batch 15)
- `clenshaw-curtis-and-extrapolation-quadrature` requires `polynomial-approximation-and-chebyshev-interpolation` (group p, batch 19)
- `clenshaw-curtis-and-extrapolation-quadrature` requires `composite-quadrature-rules` (group p, batch 20)
- `generalized-eigenvalue-pencils-and-qz-methods` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `generalized-eigenvalue-pencils-and-qz-methods` requires `computed-schur-decompositions-and-nonnormal-spectra` (group p, batch 33)
- `generalized-eigenvalue-pencils-and-qz-methods` requires `computed-singular-values-and-rank-revealing-factorizations` (group o, batch 17)

Another group's pages depend on yours:

- `certified-stationary-distribution-and-hitting-statistic-numerics` (group h) requires your `krylov-methods-and-lanczos-convergence`
- `preconditioner-algorithms-and-residual-metrics` (group r) requires your `krylov-methods-and-lanczos-convergence`
- `adaptive-quadrature-and-error-indicators` (group r) requires your `clenshaw-curtis-and-extrapolation-quadrature`
- `restarted-and-block-eigensolvers` (group s) requires your `krylov-methods-and-lanczos-convergence`
- `restarted-and-block-eigensolvers` (group s) requires your `generalized-eigenvalue-pencils-and-qz-methods`
- `matrix-exponential-and-phi-function-actions` (group t) requires your `krylov-methods-and-lanczos-convergence`
- `sparse-grid-cubature-and-mixed-regularity` (group u) requires your `clenshaw-curtis-and-extrapolation-quadrature`
- `nonconvex-line-search-and-inexact-newton-methods` (group y) requires your `krylov-methods-and-lanczos-convergence`
- `operator-splitting-admm-and-primal-dual-methods` (group z) requires your `krylov-methods-and-lanczos-convergence`
- `nonlinear-conjugate-gradient-methods` (group aa) requires your `krylov-methods-and-lanczos-convergence`
- `trust-region-and-cubic-regularization-methods` (group aa) requires your `krylov-methods-and-lanczos-convergence`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (group ab) requires your `krylov-methods-and-lanczos-convergence`
- `iterative-regularization-and-early-stopping` (group ac) requires your `krylov-methods-and-lanczos-convergence`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-optimization-dynamics-2026-10-16-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-optimization-dynamics-2026-10-16`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
