# Step 5 adjudication — group **t**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 68, 81, 82: 3 A/B pair(s), 6 page(s), 67 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **68**: `research/numerical-optimization-dynamics-2026-10-16-batch-68-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **81**: `research/numerical-optimization-dynamics-2026-10-16-batch-81-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **82**: `research/numerical-optimization-dynamics-2026-10-16-batch-82-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 68 | `matrix-functions-and-scaling-squaring` | A | numerical-linear-algebra-and-approximation | 2420 | `strongly-continuous-semigroups-and-hille-yosida`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations`, `computed-schur-decompositions-and-nonnormal-spectra`, `sylvester-and-lyapunov-matrix-equations`, `verified-linear-systems-and-spectral-enclosures`, `computed-singular-values-and-rank-revealing-factorizations`, `conformal-mapping-branches-and-the-schwarz-lemma` |
| 68 | `matrix-functions-and-scaling-squaring-examples` | B | numerical-linear-algebra-and-approximation | 2421 | `matrix-functions-and-scaling-squaring` |
| 81 | `matrix-exponential-and-phi-function-actions` | A | numerical-linear-algebra-and-approximation | 2446 | `krylov-subspaces-arnoldi-and-gmres`, `matrix-norms-condition-numbers-and-numerical-stability`, `strongly-continuous-semigroups-and-hille-yosida`, `krylov-methods-and-lanczos-convergence`, `matrix-functions-and-scaling-squaring` |
| 81 | `matrix-exponential-and-phi-function-actions-examples` | B | numerical-linear-algebra-and-approximation | 2447 | `matrix-exponential-and-phi-function-actions` |
| 82 | `gaussian-quadrature` | A | numerical-linear-algebra-and-approximation | 2448 | `inner-product-spaces-and-orthogonality`, `polynomial-interpolation-and-remainder`, `verified-linear-systems-and-spectral-enclosures`, `restarted-and-block-eigensolvers`, `the-lebesgue-integral-and-the-convergence-theorems` |
| 82 | `gaussian-quadrature-examples` | B | numerical-linear-algebra-and-approximation | 2449 | `gaussian-quadrature`, `the-lebesgue-and-riemann-integrals-compared` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `matrix-functions-and-scaling-squaring` — Matrix functions and scaling squaring (25 item(s))

- `def-diagonal-pade-approximant-for-exponential` · definition — Diagonal Padé approximant to the exponential
- `lem-finite-hermite-interpolation-for-jordan-data` · lemma — Finite Hermite data at distinct eigenvalues have a unique polynomial representative
- `lem-scaling-and-squaring-error-recurrence` · lemma — Error propagation through exact and perturbed squaring steps
- `def-analytic-primary-matrix-function` · definition — Analytic primary matrix functions by Jordan blocks
- `lem-diagonal-pade-remainder-bound` · lemma — A finite scalar remainder bound for the diagonal Padé exponential
- `def-matrix-sign-for-spectrum-off-imaginary-axis` · definition — Primary matrix sign for spectra off the imaginary axis
- `thm-analytic-primary-matrix-function-jordan-contour-agreement` · theorem — Jordan, contour, similarity, and normal-functional-calculus formulas agree
- `alg-exact-jordan-block-analytic-evaluation` · algorithm — Finite analytic evaluation from a supplied exact Jordan decomposition
- `thm-exact-jordan-block-analytic-evaluation-correct` · theorem — A verified Jordan evaluation returns the primary matrix function
- `thm-principal-matrix-logarithm-and-square-root-exist` · theorem — The principal matrix logarithm and square root exist off the closed negative-real axis
- `thm-frechet-exponential-integral-and-block-function-identity` · theorem — The exponential Fréchet derivative has an integral and block-matrix formula
- `thm-matrix-function-rational-contour-error-bound` · theorem — A resolvent contour bound transfers scalar rational error to matrices
- `alg-pade-denominator-solve-by-householder-qr` · algorithm — Finite Householder QR solve for a Padé denominator with explicit statuses
- `thm-pade-denominator-solve-verified-branch-correct` · theorem — An exact residual check certifies the Padé denominator solve
- `alg-pade-scaling-and-squaring-exponential` · algorithm — Finite-order Padé scaling-and-squaring exponential
- `rem-matrix-function-condition-estimates-are-not-certified-bounds` · remark — Condition estimates and certified matrix-function error bounds
- `alg-newton-polar-factor-iteration` · algorithm — Finite-budget Newton iteration for the nonsingular polar factor
- `alg-newton-matrix-sign-iteration` · algorithm — Finite-budget Newton iteration for the matrix sign
- `thm-pade-scaling-and-squaring-error-bound` · theorem — Padé error and squaring defects give a conditional exponential error bound
- `thm-newton-polar-factor-quadratic-convergence` · theorem — Newton polar iterates converge quadratically under an explicit norm condition
- `thm-newton-matrix-sign-convergence-and-quadratic-rate` · theorem — Newton sign iteration converges off the imaginary axis and is locally quadratic
- `alg-schur-parlett-matrix-function` · algorithm — Finite Schur–Parlett recurrence with block merging and inconclusive statuses
- `thm-schur-parlett-recurrence-correctness` · theorem — Separated Schur–Parlett blocks reconstruct the analytic matrix function
- `alg-principal-matrix-logarithm-and-square-root` · algorithm — Principal matrix logarithm and square root by branch-aware Schur–Parlett
- `thm-matrix-function-finite-algorithms-termination-and-budget-status` · theorem — Finite matrix-function algorithms preserve primitive budgets and terminate with explicit statuses

### `matrix-functions-and-scaling-squaring-examples` — Matrix functions and scaling squaring — Examples (3 item(s))

- `ex-spd-square-root-and-polar-factor` · example — A positive diagonal Gram matrix gives a nontrivial polar factor
- `ex-nonnormal-exponential-large-transient-norm` · example — A stable-spectrum nonnormal exponential has a large transient norm
- `ex-rotation-logarithm-branch-cut` · example — A half-turn lies on the principal logarithm branch cut

### `matrix-exponential-and-phi-function-actions` — Matrix exponential and phi function actions (12 item(s))

- `def-phi-functions-by-everywhere-convergent-series` · definition — The phi-function family by everywhere-convergent series
- `def-logarithmic-norm-for-complex-matrices` · definition — The Euclidean logarithmic norm of a complex matrix
- `def-certified-matvec-and-vector-arithmetic` · definition — Normwise certified matrix-vector and vector-step arithmetic
- `lem-matrix-action-defect-variation-of-constants` · lemma — Variation of constants for a finite-matrix action defect
- `lem-phi-series-converges-absolutely` · lemma — The scalar and matrix phi series converge absolutely
- `lem-logarithmic-norm-is-real-and-variational` · lemma — The Euclidean logarithmic norm is a real Rayleigh-quotient maximum
- `alg-scaled-taylor-exponential-action` · algorithm — Finite scaled Taylor action for the matrix exponential
- `thm-phi-recurrence-and-augmented-matrix-actions` · theorem — Phi recurrence and augmented-matrix action identities
- `lem-logarithmic-norm-bounds-the-matrix-exponential` · lemma — The logarithmic norm bounds forward and reverse matrix exponentials
- `thm-scaled-taylor-exponential-action-error-and-work` · theorem — Scaled Taylor action has a finite normwise truncation and roundoff certificate
- `alg-arnoldi-exponential-and-phi-actions` · algorithm — Arnoldi projection for exponential and phi-function actions
- `thm-arnoldi-exponential-action-error-bound` · theorem — Arnoldi action error is the semigroup-weighted residual integral

### `matrix-exponential-and-phi-function-actions-examples` — Matrix exponential and phi function actions — Examples (3 item(s))

- `ex-phi-one-at-zero-without-division` · example — The value phi_1(0) is obtained directly from its series
- `ex-stiff-diagonal-arnoldi-action` · example — A one-dimensional Arnoldi projection misses a slow mode of a stiff diagonal matrix
- `ex-nonnormal-transient-action-certificate` · example — A nonnormal action grows transiently while its Arnoldi residual certificate remains valid

### `gaussian-quadrature` — Gaussian quadrature (21 item(s))

- `def-gauss-moment-data` · definition — Positive-measure Gaussian quadrature moment data
- `def-coordinatewise-product-moment-functional` · definition — Coordinatewise product-moment functional for tensor polynomials
- `def-gauss-polynomial-moment-inner-product` · definition — The polynomial moment pairing
- `thm-gauss-polynomial-moment-pairing-is-an-inner-product` · theorem — The polynomial moment pairing is a real inner product
- `thm-monic-gauss-orthogonal-polynomials-exist-uniquely` · theorem — Monic orthogonal polynomials exist uniquely through the quadrature order
- `lem-gauss-monic-three-term-recurrence` · lemma — Monic orthogonal polynomials satisfy a three-term recurrence
- `thm-gauss-orthogonal-polynomial-has-simple-interior-zeros` · theorem — The Gauss orthogonal polynomial has simple roots inside the interval
- `thm-hermite-interpolant-double-node-remainder` · theorem — Double-node Hermite interpolation has the stated pointwise remainder
- `def-gauss-quadrature-rule` · definition — The m-node Gaussian quadrature rule for a positive measure
- `thm-jacobi-matrix-spectrum-equals-gauss-nodes` · theorem — The Jacobi matrix spectrum is the set of Gauss nodes
- `lem-gauss-quadrature-rule-data-well-defined` · lemma — The Gaussian nodes, cardinal polynomials and weights are well-defined
- `def-tensor-product-gauss-rule` · definition — Tensor-product Gaussian quadrature
- `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights` · theorem — Gaussian quadrature is exact through degree 2m−1 and has positive weights
- `thm-gauss-hermite-mean-value-remainder` · theorem — Gaussian quadrature has the Hermite mean-value remainder
- `thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared` · theorem — Gaussian weights equal the total mass times a Jacobi eigenvector's first-coordinate square
- `thm-tensor-product-gauss-exactness-and-exponential-node-count` · theorem — Tensor-product Gaussian quadrature preserves coordinatewise exactness
- `lem-gauss-weight-residual-gap-bound` · lemma — A residual and spectral gap bound a Gaussian weight error
- `alg-golub-welsch-certified-node-and-weight-enclosures` · algorithm — Certified Gaussian nodes and weights by Golub–Welsch
- `thm-golub-welsch-certified-enclosures-are-sound` · theorem — Certified Golub–Welsch intervals contain the Gaussian nodes and weights
- `lem-tensor-product-moment-functional-equals-product-measure-integral` · lemma — Tensor product moments equal integration against the finite product measure
- `thm-consecutive-gauss-orthogonal-polynomials-strictly-interlace` · theorem — Consecutive Gaussian orthogonal polynomials and Jacobi truncations strictly interlace

### `gaussian-quadrature-examples` — Gaussian quadrature — Examples (3 item(s))

- `ex-two-node-gauss-weights-from-cardinal-squares` · example — Two Gaussian weights are the squared norms of the two cardinal polynomials
- `ex-four-dimensional-gauss-product-has-sixteen-nodes` · example — Four two-node Gaussian rules give a sixteen-node tensor rule
- `ex-two-node-gauss-legendre-exact-through-degree-three` · example — The two-node Gauss–Legendre rule is exact through degree three

## Your seams

Your pages depend on another group's:

- `matrix-functions-and-scaling-squaring` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `matrix-functions-and-scaling-squaring` requires `computed-schur-decompositions-and-nonnormal-spectra` (group p, batch 33)
- `matrix-functions-and-scaling-squaring` requires `sylvester-and-lyapunov-matrix-equations` (group r, batch 49)
- `matrix-functions-and-scaling-squaring` requires `verified-linear-systems-and-spectral-enclosures` (group s, batch 61)
- `matrix-functions-and-scaling-squaring` requires `computed-singular-values-and-rank-revealing-factorizations` (group o, batch 17)
- `matrix-exponential-and-phi-function-actions` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `gaussian-quadrature` requires `polynomial-interpolation-and-remainder` (group n, batch 4)
- `gaussian-quadrature` requires `verified-linear-systems-and-spectral-enclosures` (group s, batch 61)
- `gaussian-quadrature` requires `restarted-and-block-eigensolvers` (group s, batch 67)

Another group's pages depend on yours:

- `exponential-and-integrating-factor-integrators` (group k) requires your `matrix-exponential-and-phi-function-actions`
- `deferred-correction-and-collocation-iterations` (group k) requires your `gaussian-quadrature`
- `sparse-grid-cubature-and-mixed-regularity` (group u) requires your `gaussian-quadrature`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (group ae) requires your `gaussian-quadrature`
- `variational-crimes-and-strang-lemmas` (group aj) requires your `gaussian-quadrature`
- `spectral-collocation-and-galerkin-methods` (group aj) requires your `gaussian-quadrature`

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
