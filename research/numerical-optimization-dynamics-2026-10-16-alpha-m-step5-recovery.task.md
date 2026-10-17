# Step 5 adjudication — group **m**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 1, 2, 106: 3 A/B pair(s), 6 page(s), 54 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/numerical-optimization-dynamics-2026-10-16-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/numerical-optimization-dynamics-2026-10-16-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **106**: `research/numerical-optimization-dynamics-2026-10-16-batch-106-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 1 | `finite-precision-direct-factorizations` | A | numerical-linear-algebra-and-approximation | 2286 | `direct-matrix-factorisations-lu-cholesky-and-qr`, `matrix-norms-condition-numbers-and-numerical-stability`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `the-spectral-theorem-and-singular-value-decomposition`, `hilbert-space-geometry-and-riesz-representation` |
| 1 | `finite-precision-direct-factorizations-examples` | B | numerical-linear-algebra-and-approximation | 2287 | `finite-precision-direct-factorizations` |
| 2 | `sparse-matrix-models-and-kernel-costs` | A | numerical-linear-algebra-and-approximation | 2288 | `direct-matrix-factorisations-lu-cholesky-and-qr`, `matrix-norms-condition-numbers-and-numerical-stability`, `krylov-subspaces-arnoldi-and-gmres` |
| 2 | `sparse-matrix-models-and-kernel-costs-examples` | B | numerical-linear-algebra-and-approximation | 2289 | `sparse-matrix-models-and-kernel-costs` |
| 106 | `langevin-splittings-and-invariant-measure-error` | A | numerical-differential-equations-and-stochastic-dynamics | 2496 | `langevin-monte-carlo-mala-and-ula`, `milstein-stochastic-taylor-and-iterated-integrals`, `imex-and-operator-splitting-methods`, `laplace-approximation-and-marginal-integration` |
| 106 | `langevin-splittings-and-invariant-measure-error-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2497 | `langevin-splittings-and-invariant-measure-error` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-precision-direct-factorizations` — Finite-precision direct factorizations and least squares (22 item(s))

- `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` · definition — Operationwise real and complex floating point arithmetic with rounded square roots and fused multiply-add
- `alg-balanced-pairwise-summation` · algorithm — Balanced pairwise summation with range-failure status
- `alg-two-sum-error-free-transform` · algorithm — TwoSum error-free transformation
- `alg-two-product-fma-error-free-transform` · algorithm — TwoProduct product and residual computation using fused multiply-add
- `alg-kahan-compensated-summation` · algorithm — Kahan compensated summation with range-failure status
- `alg-neumaier-compensated-summation` · algorithm — Neumaier compensated summation with range-failure status
- `alg-rounded-cholesky-with-failure-status` · algorithm — Failure-aware rounded Cholesky factorization
- `alg-scaled-householder-reflector-formation-and-application` · algorithm — Scaled Householder reflector formation and application
- `lem-scaled-real-householder-step-termination-and-status` · lemma — The scaled real-column Householder procedure terminates with defined statuses
- `alg-bounded-mixed-precision-iterative-refinement` · algorithm — Bounded mixed-precision iterative refinement
- `thm-balanced-pairwise-summation-error-bound` · theorem — Balanced pairwise summation has a depth-dependent error bound
- `lem-binary-rounding-grid-and-ordered-two-sum` · lemma — Binary rounding grids, exact subtraction, and ordered TwoSum
- `thm-two-sum-error-free-transform` · theorem — TwoSum returns the exact rounding error of a floating point sum
- `thm-two-product-fma-error-free-transform` · theorem — TwoProduct with fused multiply-add returns the exact product residual
- `thm-kahan-and-neumaier-finite-error-identities` · theorem — Kahan and Neumaier summation satisfy explicit finite data-dependent error bounds
- `thm-rounded-cholesky-componentwise-and-normwise-backward-error` · theorem — A successful rounded Cholesky factorization has componentwise and normwise backward error bounds
- `lem-scaled-householder-step-meets-local-backward-error-premise` · lemma — The scaled computed Householder step satisfies the local backward error premise
- `thm-mixed-precision-refinement-error-recurrence-and-floor` · theorem — Mixed-precision refinement has an error recurrence and a finite precision floor
- `thm-scaled-householder-qr-backward-stability` · theorem — The scaled Householder QR implementation is backward stable
- `thm-computed-full-rank-least-squares-backward-stability` · theorem — Computed reduced QR least squares is backward stable for full column rank
- `lem-rounded-triangular-substitution-componentwise-backward-error` · lemma — Rounded triangular substitution has a componentwise matrix backward error
- `lem-rounded-linear-and-normal-residual-certificates` · lemma — Rounded matrix products give certified linear and normal-equation residual allowances

### `finite-precision-direct-factorizations-examples` — Finite-precision direct factorizations and least squares — Examples (6 item(s))

- `ex-subnormal-and-overflow-range-failure` · example — Subnormal and overflow branches return range failure
- `ex-neumaier-recovers-low-order-term-after-cancellation` · example — Neumaier summation recovers a low order term after cancellation
- `ex-rounded-cholesky-two-by-two-residual` · example — A rounded two by two Cholesky factor and its residual
- `ex-two-sum-recovers-a-rounded-away-low-part` · example — TwoSum recovers a rounded away low part
- `ex-full-rank-least-squares-normal-equations-versus-qr` · example — A full rank least squares problem where rounded normal equations lose the pivot
- `ex-ill-conditioned-design-stability-versus-forward-error` · example — An ill conditioned design with large forward sensitivity

### `sparse-matrix-models-and-kernel-costs` — Sparse matrix models and kernel costs (7 item(s))

- `def-csr-matrix-with-stored-entry-semantics` · definition — Compressed sparse row matrices with stored-entry semantics
- `def-symmetric-structural-elimination-graph-and-ordering` · definition — Structural graphs and ordered symmetric elimination
- `alg-csr-matrix-vector-product-with-validation` · algorithm — Validated compressed sparse row matrix-vector product
- `thm-filled-graph-contains-schur-complement-support` · theorem — The filled graph contains every off-diagonal Schur-complement nonzero
- `thm-csr-matvec-algorithm-terminates-with-status` · theorem — Validated CSR matrix-vector multiplication terminates with a status
- `thm-csr-matvec-returns-the-represented-matrix-product` · theorem — CSR matrix-vector multiplication returns the represented product
- `thm-csr-storage-and-exact-matvec-cost` · theorem — CSR storage and exact matrix-vector operation counts

### `sparse-matrix-models-and-kernel-costs-examples` — Sparse matrix models and kernel costs — Examples (5 item(s))

- `ex-csr-tridiagonal-matrix` · example — A four-row tridiagonal matrix in CSR form
- `ex-ordered-elimination-creates-fill` · example — Eliminating the middle vertex creates structural fill
- `ex-numerical-cancellation-within-filled-graph` · example — Numerical cancellation can zero an entry while the filled graph retains its edge
- `ex-csr-matvec-operation-count` · example — An exact CSR product and its stored-entry count
- `ex-csr-duplicates-and-explicit-zero-entry-count` · example — Duplicate columns and explicit zeros count as stored entries

### `langevin-splittings-and-invariant-measure-error` — Langevin splittings and invariant measure error (10 item(s))

- `def-underdamped-langevin-equation-and-canonical-gibbs-density` · definition — Underdamped Langevin equation and canonical Gibbs density
- `alg-baoab-underdamped-langevin-splitting` · algorithm — BAOAB underdamped Langevin splitting
- `lem-exact-ornstein-uhlenbeck-momentum-substep` · lemma — Exact Ornstein–Uhlenbeck momentum transition and covariance
- `lem-stable-gaussian-autoregression-invariant-law` · lemma — Invariant Gaussian law and uniqueness for a stable autoregression
- `thm-underdamped-langevin-canonical-measure-is-stationary` · theorem — The canonical Gibbs measure is stationary for underdamped Langevin dynamics
- `thm-harmonic-baoab-invariant-law-and-stability-limit` · theorem — Exact invariant covariance and stability threshold for scalar harmonic BAOAB
- `lem-baoab-one-step-error-moment-bounds` · lemma — Moment-weighted local defect bounds for BAOAB
- `thm-baoab-finite-time-strong-order-one` · theorem — Finite-time strong order one of BAOAB
- `lem-baoab-one-step-weak-expansion` · lemma — Symmetric BAOAB one-step weak expansion
- `thm-baoab-finite-time-weak-order-two` · theorem — Finite-time weak order two of BAOAB

### `langevin-splittings-and-invariant-measure-error-examples` — Langevin splittings and invariant measure error — Examples (4 item(s))

- `ex-harmonic-baoab-thermostat-covariance` · example — Harmonic BAOAB thermostat: exact position variance and kinetic bias
- `ex-unstable-baoab-step-has-no-invariant-law` · example — An unstable harmonic BAOAB step has no invariant probability
- `ex-constant-potential-has-no-canonical-gibbs-probability` · example — A constant potential has no canonical Gibbs probability on the line
- `ex-ula-and-baoab-have-distinct-harmonic-variance-bias` · example — Overdamped ULA and underdamped BAOAB have different harmonic variance errors

## Your seams

Your pages depend on another group's:

- `langevin-splittings-and-invariant-measure-error` requires `milstein-stochastic-taylor-and-iterated-integrals` (group a, batch 9)
- `langevin-splittings-and-invariant-measure-error` requires `imex-and-operator-splitting-methods` (group l, batch 98)

Another group's pages depend on yours:

- `finite-generator-master-equations-and-uniformization` (group f) requires your `sparse-matrix-models-and-kernel-costs`
- `certified-stationary-distribution-and-hitting-statistic-numerics` (group h) requires your `finite-precision-direct-factorizations`
- `certified-stationary-distribution-and-hitting-statistic-numerics` (group h) requires your `sparse-matrix-models-and-kernel-costs`
- `rosenbrock-and-linearly-implicit-methods` (group h) requires your `finite-precision-direct-factorizations`
- `positive-conservative-production-destruction-integrators` (group j) requires your `finite-precision-direct-factorizations`
- `outward-rounded-interval-and-ball-arithmetic` (group n) requires your `finite-precision-direct-factorizations`
- `computed-fast-transforms-and-convolution` (group n) requires your `finite-precision-direct-factorizations`
- `sparse-direct-elimination-and-ordering` (group o) requires your `finite-precision-direct-factorizations`
- `sparse-direct-elimination-and-ordering` (group o) requires your `sparse-matrix-models-and-kernel-costs`
- `computed-singular-values-and-rank-revealing-factorizations` (group o) requires your `finite-precision-direct-factorizations`
- `stationary-iterations-and-relaxation` (group o) requires your `sparse-matrix-models-and-kernel-costs`
- `computed-schur-decompositions-and-nonnormal-spectra` (group p) requires your `finite-precision-direct-factorizations`
- `krylov-methods-and-lanczos-convergence` (group q) requires your `finite-precision-direct-factorizations`
- `krylov-methods-and-lanczos-convergence` (group q) requires your `sparse-matrix-models-and-kernel-costs`
- `generalized-eigenvalue-pencils-and-qz-methods` (group q) requires your `finite-precision-direct-factorizations`
- `preconditioner-algorithms-and-residual-metrics` (group r) requires your `sparse-matrix-models-and-kernel-costs`
- `verified-linear-systems-and-spectral-enclosures` (group s) requires your `finite-precision-direct-factorizations`
- `matrix-functions-and-scaling-squaring` (group t) requires your `finite-precision-direct-factorizations`
- `automatic-differentiation-and-computational-graphs` (group v) requires your `finite-precision-direct-factorizations`
- `numerical-inverse-problems-and-regularization-error` (group w) requires your `finite-precision-direct-factorizations`
- `revised-simplex-linear-programming-and-certificates` (group w) requires your `finite-precision-direct-factorizations`
- `revised-simplex-linear-programming-and-certificates` (group w) requires your `sparse-matrix-models-and-kernel-costs`
- `barrier-and-primal-dual-interior-point-methods` (group y) requires your `finite-precision-direct-factorizations`
- `operator-splitting-admm-and-primal-dual-methods` (group z) requires your `sparse-matrix-models-and-kernel-costs`
- `bfgs-and-limited-memory-quasi-newton-methods` (group aa) requires your `finite-precision-direct-factorizations`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (group ab) requires your `finite-precision-direct-factorizations`
- `gauss-newton-and-levenberg-marquardt-methods` (group ab) requires your `finite-precision-direct-factorizations`
- `sqp-active-set-and-augmented-lagrangian-methods` (group ac) requires your `finite-precision-direct-factorizations`

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
