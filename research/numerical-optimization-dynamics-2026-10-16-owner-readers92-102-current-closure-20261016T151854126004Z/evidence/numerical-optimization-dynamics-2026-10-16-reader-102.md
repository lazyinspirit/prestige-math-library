# Step 3a reader report — batch 102

Run: numerical-optimization-dynamics-2026-10-16  
Role: reader  
Batch: 102

## Verdict

- **A page — Numerical identifiability and optimal experiment design:** The summary accurately distinguishes local from global identifiability, states the caveats for rank deficiency and the log-determinant bounds, and makes no convergence claim for the finite-budget procedure. No page-prose defect remains. The published singular-value approximation dependency has a proof-notation gap, recorded below against its assigned consumer.
- **B page — Numerical identifiability and optimal experiment design — Examples:** The summary matches the examples. The cubic, parallel-decay, local/global, scalar-ranking, and endpoint-design calculations check out. No page-prose defect remains.

## Opened inventory

### Assigned pages

- numerical-identifiability-and-optimal-experiment-design (A)
- numerical-identifiability-and-optimal-experiment-design-examples (B)

### Assigned items

Read in dependency order:

- def-nonlinear-experimental-design-and-local-identifiability
- lem-computed-sensitivity-singular-value-perturbation
- lem-logdet-information-perturbation-bound
- alg-finite-budget-multiplicative-d-optimal-design
- lem-information-matrix-perturbation-bound
- rem-gauss-newton-information-is-not-full-hessian
- thm-full-rank-sensitivity-implies-local-identifiability
- thm-local-information-positive-definite-iff-full-column-rank
- thm-local-parameter-perturbation-bound
- thm-multiplicative-design-update-well-defined-and-terminates
- thm-uniform-sensitivity-error-controls-design-gap
- thm-equivalence-violation-bounds-d-optimal-design-gap
- ex-cubic-observation-is-locally-identifiable-with-zero-jacobian
- ex-first-order-kinetic-rates-are-confounded-by-total-decay
- ex-local-identifiability-does-not-imply-global-identifiability
- ex-solver-tolerance-can-reverse-a-design-ranking
- ex-endpoint-sensors-give-a-d-optimal-linear-time-design

### Direct item dependencies opened

- def-approximate-linear-model-design-and-optimality-criteria
- def-c-one-map-and-local-inverse
- def-euclidean-inner-product
- def-jacobian-matrix-and-gradient
- def-matrix-product-and-identity-matrix
- def-inner-product-norm
- def-operator-norm-on-a-finite-dimensional-inner-product-space
- thm-eckart-young-best-rank-k-approximation
- cor-real-spectral-theorem-for-self-adjoint-endomorphisms
- def-trace-of-a-square-matrix
- thm-cauchy-schwarz-and-the-euclidean-norm
- thm-determinant-differential-and-jacobis-formula
- thm-determinant-multiplicative
- thm-determinant-of-a-triangular-matrix
- def-determinant-of-a-square-matrix
- thm-logarithm-derivative-and-integral
- thm-chain-rule-for-total-derivatives
- thm-trace-of-ab-equals-trace-of-ba
- cor-mean-value-theorem
- thm-d-optimality-equivalence-theorem
- def-induced-matrix-p-norm
- thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
- thm-operator-norm-is-the-largest-singular-value
- thm-singular-value-decomposition
- thm-nonlinear-least-squares-gradient-and-hessian (draft, current run, batch 84)
- def-row-space-column-space-nullspace-and-matrix-ranks
- lem-matrix-rank-detected-by-nonzero-minors
- thm-dimension-of-a-linear-subspace
- thm-euclidean-inverse-function-theorem
- thm-real-square-matrix-invertible-iff-determinant-nonzero
- thm-row-rank-equals-column-rank
- cor-vector-valued-ftc-and-lipschitz-bound
- def-lipschitz-holder-contraction
- thm-extreme-value-metric
- lem-log-determinant-concavity-on-positive-definite-matrices

### Required pages and review evidence opened

- response-surfaces-and-optimal-design
- inequality-kkt-duality-and-optimality-certificates
- proximal-gradient-and-accelerated-composite-optimization
- gauss-newton-and-levenberg-marquardt-methods
- discrete-continuous-and-pde-adjoint-sensitivities
- The batch-102 page manifest, proof contracts, and cross-batch dependency record.

## Repairs made

- In def-nonlinear-experimental-design-and-local-identifiability, made explicit that the finite stack is \(C^1\) and its derivative is the stacked sensitivity matrix. The finite number of component \(o(\|h\|_2)\) remainders still has a stacked \(o(\|h\|_2)\) remainder, and the derivative is continuous componentwise. This supplies the \(C^1\) premise used by the local inverse function theorem.
- In thm-full-rank-sensitivity-implies-local-identifiability, stated that the coordinate projection has itself as derivative, then showed the projected map is \(C^1\) before applying the inverse function theorem.
- In lem-logdet-information-perturbation-bound, made explicit that differentiability of determinant and logarithm gives continuity on the positive path, supplying the closed-interval hypothesis for the mean value theorem.
- In thm-local-information-positive-definite-iff-full-column-rank, corrected [F3]: the Euclidean-inner-product definition supplies \(\|z\|_2^2=z^Tz\); positivity of \(z^TW_xz\) comes from the positive-definiteness hypothesis already cited in [F1].
- In rem-gauss-newton-information-is-not-full-hessian, changed the title to “The Gauss–Newton information term omits residual curvature from the full Hessian.” The exact Hessian contains that additional term, while the two matrices agree at zero residual.

The corresponding batch-102 proof-contract derivations and citation evidence were updated. No changed item contained a verification.judge record.

## Validation

- Reflow: all five edited items reported unchanged.
- Precheck: all three proof-bearing items passed; the definition and remark reported zero proof sections to check and zero failures.
- Final proof-layout over all five changed items: 5 items, 9 numbered steps, 0 defects.

## Defects not edited

- **Published dependency thm-eckart-young-best-rank-k-approximation, Proof step 2.1; assigned consumer lem-computed-sensitivity-singular-value-perturbation.** This is an ill-formed but nonfatal notation gap. The theorem defines positive singular values \(s_1,\ldots,s_r\) and states only \(s_{k+1}=0\) when \(k\ge r\), but step 2.1 sums \(s_j^2|c_j|^2\) through \(j=k+1\) for every allowed \(k\). When \(k\ge r\), the intermediate \(s_j\) for \(r<j<k+1\) are undefined. The SVD formula gives \(Te_j=0\) for those indices; explicitly extend \(s_j=0\) for all \(j>r\), or split out the immediate \(k\ge r\) case.
- **Current-run draft dependency thm-nonlinear-least-squares-gradient-and-hessian, Proof steps 1.1–2.1; assigned consumer rem-gauss-newton-information-is-not-full-hessian.** This is an ill-formed but nonfatal formatting defect. The numbered steps are adjacent without the required blank line. The proof's mathematics is otherwise sound. This item is in batch 84 and was not edited. Its raw SHA-256 at handoff is 8d17b9c243b82d4b5c475dd8d5cd10b1d25b85f9bcb2aab87e164002dd83dff2.

## Blocker

No blocker specific to batch 102 or in the current run status; no worker is in flight.

## Coverage limitation

All assigned items, both assigned pages, their direct item dependencies, the five required page summaries, and the batch contracts were opened. I did not recursively audit every transitive supplier behind those direct dependencies or independently fetch the bibliography URLs; the local statements and derivations sufficed for this review.
