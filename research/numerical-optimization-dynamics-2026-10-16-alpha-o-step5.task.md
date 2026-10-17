# Step 5 adjudication — group **o**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 16, 17, 18: 3 A/B pair(s), 6 page(s), 54 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/numerical-optimization-dynamics-2026-10-16-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/numerical-optimization-dynamics-2026-10-16-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/numerical-optimization-dynamics-2026-10-16-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 16 | `sparse-direct-elimination-and-ordering` | A | numerical-linear-algebra-and-approximation | 2316 | `direct-matrix-factorisations-lu-cholesky-and-qr`, `finite-precision-direct-factorizations`, `sparse-matrix-models-and-kernel-costs` |
| 16 | `sparse-direct-elimination-and-ordering-examples` | B | numerical-linear-algebra-and-approximation | 2317 | `sparse-direct-elimination-and-ordering` |
| 17 | `computed-singular-values-and-rank-revealing-factorizations` | A | numerical-linear-algebra-and-approximation | 2318 | `direct-matrix-factorisations-lu-cholesky-and-qr`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations` |
| 17 | `computed-singular-values-and-rank-revealing-factorizations-examples` | B | numerical-linear-algebra-and-approximation | 2319 | `computed-singular-values-and-rank-revealing-factorizations` |
| 18 | `stationary-iterations-and-relaxation` | A | numerical-linear-algebra-and-approximation | 2320 | `conjugate-gradients-minres-and-preconditioning`, `krylov-subspaces-arnoldi-and-gmres`, `matrix-norms-condition-numbers-and-numerical-stability`, `sparse-matrix-models-and-kernel-costs` |
| 18 | `stationary-iterations-and-relaxation-examples` | B | numerical-linear-algebra-and-approximation | 2321 | `stationary-iterations-and-relaxation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sparse-direct-elimination-and-ordering` — Sparse direct elimination and ordering (18 item(s))

- `alg-threshold-partial-pivot-sparse-lu` · algorithm — Threshold partial-pivot sparse LU with explicit fill and failure statuses
- `def-hermitian-structural-graph-adapter` · definition — Undirected structural graph of a Hermitian matrix
- `alg-nested-dissection-ordering-on-regular-grids` · algorithm — Recursive coordinate-separator ordering for two- and three-dimensional grids
- `lem-filled-edge-path-characterisation` · lemma — Filled edges are witnessed by paths through earlier eliminated vertices
- `thm-threshold-sparse-lu-residual-with-growth` · theorem — Real threshold sparse LU has a backward residual bound with actual growth
- `def-elimination-tree-and-column-reach` · definition — Elimination-tree column patterns and reach
- `lem-nested-dissection-fronts-are-boundary-limited` · lemma — Nested-dissection grid fronts are bounded by a box separator and its exterior boundary
- `lem-hermitian-schur-support-is-contained-in-structural-fill` · lemma — Hermitian Schur-complement support stays inside the symmetric filled graph
- `alg-symmetric-indefinite-block-ldl-star` · algorithm — Sparse symmetric-indefinite block LDL* with threshold tests and failure status
- `lem-elimination-tree-reach-contains-each-filled-neighbor` · lemma — Every later filled neighbor lies on the elimination-tree parent path
- `alg-sparse-cholesky-with-invalid-pivot-status` · algorithm — Ordered sparse Cholesky with explicit pivot and range statuses
- `thm-block-ldl-star-residual-with-actual-growth` · theorem — Block LDL* residual errors propagate with actual block growth
- `thm-sparse-cholesky-structural-pattern-without-cancellation` · theorem — Ordered sparse Cholesky has the symbolic filled pattern when no cancellation occurs
- `alg-multifrontal-cholesky-and-sparse-triangular-solves` · algorithm — Scalar multifrontal Cholesky and solves on the elimination forest
- `thm-multifrontal-elimination-equivalence-and-sparse-costs` · theorem — Scalar multifrontal elimination is equivalent to sparse Cholesky with column-count costs
- `thm-nested-dissection-grid-work-and-storage-bounds` · theorem — Nested dissection gives the stated work and factor-storage bounds on regular grids
- `alg-certified-hermitian-one-and-two-by-two-ldl-kernel` · algorithm — Certified real-component Hermitian one-by-one and two-by-two LDL* kernels
- `lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual` · lemma — Hermitian block LDL* kernels have explicit roundoff and actual-factor residual bounds

### `sparse-direct-elimination-and-ordering-examples` — Sparse direct elimination and ordering — Examples (3 item(s))

- `ex-star-orderings-produce-different-sparse-fill` · example — A star graph has no fill in leaf-first order and a leaf clique in center-first order
- `ex-nonsingular-indefinite-requires-two-by-two-pivot` · example — A nonsingular indefinite matrix with no admissible one-by-one diagonal pivot
- `ex-two-dimensional-poisson-nested-dissection-cost` · example — The two-dimensional five-point Poisson matrix under nested dissection

### `computed-singular-values-and-rank-revealing-factorizations` — Computed singular values and rank revealing factorizations (18 item(s))

- `alg-householder-bidiagonalization` · algorithm — Householder bidiagonalization and its finite precision status
- `alg-strong-rank-revealing-qr-with-finite-swaps` · algorithm — Strong rank-revealing QR with finite swaps and explicit statuses
- `lem-singular-value-product-bound` · lemma — Singular values contract under left and right multiplication
- `lem-singular-values-lipschitz-in-spectral-norm` · lemma — Singular values are Lipschitz in the spectral norm
- `prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex` · proposition — Spectral numerical rank counts singular values above threshold over R or C
- `alg-implicit-shifted-bidiagonal-qr-with-deflation` · algorithm — Finite budget implicit shifted QR for bidiagonal singular values
- `lem-exact-householder-bidiagonal-reduction` · lemma — Exact unitary equivalence of Householder bidiagonalization
- `lem-strong-rrqr-column-swap-volume-ratio` · lemma — A strong RRQR column swap multiplies selected volume by its score
- `thm-bidiagonal-singular-values-relative-under-componentwise-perturbations` · theorem — Componentwise relative perturbations of bidiagonal matrices control every singular value relatively
- `thm-strong-rrqr-singular-value-comparisons` · theorem — Strong RRQR block singular values compare to the full matrix spectrum
- `alg-rank-thresholded-least-squares-by-svd` · algorithm — Rank-thresholded least squares by the singular value decomposition
- `lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence` · lemma — Bulge chase preserves bidiagonal singular values
- `thm-strong-rrqr-swap-rule-terminates` · theorem — The strong RRQR swap rule terminates after finitely many swaps
- `thm-bidiagonal-svd-backward-error-under-local-stability` · theorem — Local stable reflectors and rotations give an aggregate SVD backward error
- `thm-svd-thresholded-least-squares-minimum-norm-model` · theorem — The SVD threshold solver gives the unique minimum-norm fit to its truncated model
- `cor-computed-singular-values-absolute-error-from-backward-stability` · corollary — Computed singular-value error is bounded by backward perturbation plus readout error
- `alg-scaled-complex-householder-and-givens-updates` · algorithm — Scaled real and complex Householder and Givens update arithmetic
- `lem-scaled-complex-householder-and-givens-local-backward-error` · lemma — Scaled complex Householder and Givens steps have explicit local backward errors

### `computed-singular-values-and-rank-revealing-factorizations-examples` — Computed singular values and rank revealing factorizations — Examples (3 item(s))

- `ex-nearly-rank-deficient-design-matrix` · example — A nearly rank-deficient two-column design changes numerical rank with tolerance
- `cex-classical-column-pivoted-qr-is-not-strong-with-factor-one` · counterexample — Classical column-pivoted QR can fail the strong coefficient bound
- `ex-absolute-versus-relative-singular-value-error` · example — Absolute error can erase a tiny singular value while relative error preserves it

### `stationary-iterations-and-relaxation` — Stationary iterations and relaxation (9 item(s))

- `def-diagonal-lower-upper-splitting-convention` · definition — Diagonal, lower, and upper parts in the stationary-iteration convention
- `alg-richardson-stationary-iteration` · algorithm — Finite-budget Richardson stationary iteration
- `lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction` · lemma — An irreducible row-substochastic matrix with a strict row has a weighted contraction
- `alg-jacobi-stationary-iteration` · algorithm — Finite-budget Jacobi stationary iteration
- `alg-gauss-seidel-stationary-iteration` · algorithm — Finite-budget Gauss–Seidel stationary iteration
- `alg-sor-stationary-iteration` · algorithm — Finite-budget successive over-relaxation stationary iteration
- `thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence` · theorem — Strict row diagonal dominance guarantees Jacobi and Gauss–Seidel convergence
- `thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge` · theorem — Irreducibly weak row diagonal dominance with a strict row guarantees Jacobi and Gauss–Seidel convergence
- `thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two` · theorem — SOR converges exactly for positive-definite A and relaxation parameter in (0, 2)

### `stationary-iterations-and-relaxation-examples` — Stationary iterations and relaxation — Examples (3 item(s))

- `ex-stationary-splitting-with-an-initial-error-missing-an-unstable-eigenspace` · example — A stationary split converges from an error missing its unstable eigenspace
- `ex-jacobi-iteration-for-a-strictly-diagonally-dominant-matrix` · example — Jacobi iteration on a strictly row-diagonally-dominant system
- `ex-sor-iteration-for-a-positive-definite-matrix-with-omega-in-zero-two` · example — SOR on a positive-definite system with relaxation parameter in (0, 2)

## Your seams

Your pages depend on another group's:

- `sparse-direct-elimination-and-ordering` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `sparse-direct-elimination-and-ordering` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)
- `computed-singular-values-and-rank-revealing-factorizations` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `stationary-iterations-and-relaxation` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)

Another group's pages depend on yours:

- `linear-multistep-methods-and-dahlquist-equivalence` (group d) requires your `stationary-iterations-and-relaxation`
- `computed-schur-decompositions-and-nonnormal-spectra` (group p) requires your `computed-singular-values-and-rank-revealing-factorizations`
- `krylov-methods-and-lanczos-convergence` (group q) requires your `stationary-iterations-and-relaxation`
- `generalized-eigenvalue-pencils-and-qz-methods` (group q) requires your `computed-singular-values-and-rank-revealing-factorizations`
- `preconditioner-algorithms-and-residual-metrics` (group r) requires your `stationary-iterations-and-relaxation`
- `verified-linear-systems-and-spectral-enclosures` (group s) requires your `sparse-direct-elimination-and-ordering`
- `matrix-functions-and-scaling-squaring` (group t) requires your `computed-singular-values-and-rank-revealing-factorizations`
- `hyperbolic-finite-difference-methods` (group ah) requires your `stationary-iterations-and-relaxation`

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

# Step 5 batch adjudication, `numerical-optimization-dynamics-2026-10-16`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
