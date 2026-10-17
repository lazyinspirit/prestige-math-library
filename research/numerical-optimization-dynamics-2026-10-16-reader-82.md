# Step 3a reader report — batch 82

Run: `numerical-optimization-dynamics-2026-10-16`  
Scope: batch `82` only.

## Opened inventory

Pages reviewed:

- `library/numerical-linear-algebra-and-approximation/gaussian-quadrature.md` (A page)
- `library/numerical-linear-algebra-and-approximation/gaussian-quadrature-examples.md` (B page)

Assigned items reviewed in dependency order:

- `def-gauss-moment-data`
- `def-coordinatewise-product-moment-functional`
- `def-gauss-polynomial-moment-inner-product`
- `thm-gauss-polynomial-moment-pairing-is-an-inner-product`
- `lem-tensor-product-moment-functional-equals-product-measure-integral`
- `thm-monic-gauss-orthogonal-polynomials-exist-uniquely`
- `lem-gauss-monic-three-term-recurrence`
- `thm-gauss-orthogonal-polynomial-has-simple-interior-zeros`
- `thm-hermite-interpolant-double-node-remainder`
- `def-gauss-quadrature-rule`
- `thm-jacobi-matrix-spectrum-equals-gauss-nodes`
- `lem-gauss-quadrature-rule-data-well-defined`
- `thm-consecutive-gauss-orthogonal-polynomials-strictly-interlace`
- `def-tensor-product-gauss-rule`
- `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`
- `thm-gauss-hermite-mean-value-remainder`
- `thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared`
- `thm-tensor-product-gauss-exactness-and-exponential-node-count`
- `lem-gauss-weight-residual-gap-bound`
- `alg-golub-welsch-certified-node-and-weight-enclosures`
- `thm-golub-welsch-certified-enclosures-are-sound`
- `ex-two-node-gauss-weights-from-cardinal-squares`
- `ex-four-dimensional-gauss-product-has-sixteen-nodes`
- `ex-two-node-gauss-legendre-exact-through-degree-three`

I also opened the supplier statements used for the substantive proof steps: polynomial root counting, Gram–Schmidt, rank-nullity, real inner-product and spectral results, finite-sum and polynomial-degree rules, nonnegative-integral order and simple-integral facts, Hermite interpolation, monic division, higher-order Rolle, product measures, Tonelli, Fubini, Borel products and traces, and the interval/residual/eigenvalue certifiers. The Legendre example's countable-choice, Lebesgue-measure, box-measure, Riemann-integral and FTC suppliers were checked. The batch proof-contract derivations and citations were compared with the current item proofs.

For the Gaussian spectral and weight formulas, I checked Gubner, *Gaussian Quadrature and the Eigenvalue Problem*, Theorem 12 (PDF p. 5) and its proof (PDF pp. 6–7). The theorem states that the Gauss nodes are the eigenvalues of the symmetric tridiagonal Jacobi matrix and that weights equal total mass times the first eigenvector coordinate squared. The assigned items prove the broader positive-measure hypotheses locally; the source corroborates the stated relation. [Source](https://gubner.ece.wisc.edu/gaussquad.pdf).

## Review outcome

The moment-pairing, orthogonal-polynomial construction, recurrence, root-counting, exactness, Hermite remainder, tensor exactness, weight identity, residual-gap estimate, and two-node Legendre calculations were checked against their hypotheses and dependencies. I found no unsupported inference or incorrect mathematical conclusion in these assigned item statements and proofs.

### Page verdicts

- `gaussian-quadrature`: no page-prose defect found. The summary accurately distinguishes the order-2m−1 exactness data from the order-2m remainder data and correctly summarizes the zero, weight, tensor, and certification results. The assigned certification procedure has the uneditable dependency issue below.
- `gaussian-quadrature-examples`: pass. The summary matches the three examples, and the Legendre example explicitly carries the countable-choice assumption used by its measure and integration suppliers.

## Defects not edited

1. `alg-thick-and-implicitly-restarted-arnoldi-with-locking` is a draft supplier in current-run batch 67, outside this reader's edit scope. Its Definition step 1 processes eigenpairs of the projected matrix `H_d` and step 5 recomputes Ritz pairs, but it does not specify a projected eigensolver, its termination/output behavior, or a failure branch. The listed `def-ritz-values-and-ritz-vectors-from-arnoldi` defines Ritz pairs as eigenpairs; it does not compute them. The assigned `alg-golub-welsch-certified-node-and-weight-enclosures` invokes this procedure in step 4 to obtain the proposal pairs. The procedure needs a complete projected-eigensolver supplier or an explicit solver input contract. This is recorded as an `in-run-dependency` finding for the assigned algorithm consumer.

2. The batch proof contract for `def-gauss-moment-data`, `boundaries` case `endpoints`, says “Relative support includes a,b.” The current Definition only requires at least `m+1` distinct relative-support points and does not require either interval endpoint to belong to the support. For example, on `[0,1]`, Lebesgue measure restricted to `[1/4,3/4]` with `m=1` has at least two support points and neither `0` nor `1` is in its support. The item itself is sound; this contract annotation is outside the authorized edit scope and is recorded as a nonfatal false-claim finding.

## Edits and checks

No item or page prose was edited. Consequently no proof contract or judge record was changed, and no reflow, precheck, or proof-layout command was needed. The algorithm's finite-smoke fixture was not executed.

## Blocker

No batch-82 blocker prevented this review. The recomputed run status shows an unrelated existing `3a-split` blocker for batch 70 (`split-70 failed 3x`); it is outside this assignment.
