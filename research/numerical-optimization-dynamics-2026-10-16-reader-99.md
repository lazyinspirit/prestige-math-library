# Step 3a reader report — batch 99

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `99`

## Opened inventory

### Assigned pages

- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (A)
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq-examples` (B)

### Assigned items

All 30 items listed in `research/numerical-optimization-dynamics-2026-10-16-batch-99.pages.json` were opened and reviewed:

- Definitions, remark, and procedure: `def-finite-product-chaos-input`, `rem-chaos-completeness-and-spectral-rate-caveats`, `def-chaos-total-degree-and-hyperbolic-cross-index-sets`, `def-finite-input-bochner-l2-space`, `def-chaos-orthonormal-tensor-basis`, `def-uniformly-elliptic-affine-random-diffusion`, `alg-christoffel-weighted-least-squares-collocation`, `def-finite-chaos-orthogonal-projection`, `def-chaos-quadrature-coefficient-estimator`.
- Lemmas: `lem-positive-moment-gram-produces-univariate-chaos-polynomials`, `lem-chaos-index-sets-are-finite`, `lem-affine-form-integrable-on-bochner-l2`, `lem-christoffel-sampling-law-and-gram-mean`.
- Theorems and corollaries: `thm-finite-input-bochner-l2-is-hilbert`, `thm-independent-polynomial-chaos-tensors-are-orthonormal`, `thm-affine-random-diffusion-solution-is-bochner`, `thm-finite-chaos-projection-parseval-and-moments`, `thm-product-chaos-and-spatial-density-in-bochner-l2`, `thm-chaos-quadrature-coefficient-error-split`, `thm-christoffel-gram-concentration-bound`, `thm-stochastic-galerkin-coercivity-and-cea`, `cor-smolyak-chaos-coefficient-error-bound`, `cor-stochastic-galerkin-fe-interpolation-rate`, `thm-weighted-least-squares-stability-and-error`, `cor-tensor-gauss-exact-chaos-coefficients`.
- Examples and counterexamples: `cex-cauchy-input-has-no-degree-one-chaos`, `cex-finite-support-makes-high-degree-moment-gram-singular`, `ex-affine-random-diffusion-uniform-coercivity`, `ex-two-state-reaction-rate-chaos`, `ex-total-degree-versus-tensor-product-work`.

### Required page dependencies

Opened the eight A-page prerequisite pages: `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `gaussian-quadrature`, `spectral-collocation-and-galerkin-methods`, `sparse-grid-cubature-and-mixed-regularity`, `robust-covariance-and-high-dimensional-stability`, `gaussian-process-support-and-concentration`, and `parabolic-finite-element-methods`.

### In-run item suppliers and affected consumer check

Opened the relevant supplier items in dependency order across the current run:

- Batch 4 polynomial and interpolation suppliers: `lem-finite-coefficient-vector-has-polynomial-representative`, `lem-product-of-linear-factors-is-monic-polynomial`, `def-cardinal-polynomial-interpolation`, `lem-cardinal-basis-degree-and-values`, `thm-cardinal-polynomial-interpolant-exists-uniquely`.
- Batch 20 Simpson suppliers: `alg-composite-simpson-rule`, `lem-simpson-panel-peano-kernel`, `thm-composite-simpson-error-bound`.
- Batch 24 finite-element suppliers: `def-matching-affine-simplicial-meshes`, `def-reference-finite-element-and-unisolvent-dofs`, `lem-affine-pullback-weak-derivatives-and-scaling`, `lem-unisolvent-dofs-define-reference-interpolant`, `lem-reference-polynomial-norm-equivalence`, `lem-affine-simplex-gauss-green-formula`, `lem-shape-regular-affine-simplex-scaling`, `lem-smooth-density-on-reference-simplex`, `thm-reference-simplex-poincare-wirtinger`, `thm-reference-simplex-sobolev-extension`, `thm-bramble-hilbert-on-reference-simplex`, `thm-lagrange-point-evaluation-threshold-on-reference-simplex`, `thm-local-finite-element-interpolation-estimates`.
- Batch 38 Galerkin suppliers: `lem-galerkin-orthogonality-for-conforming-galerkin-approximations`, `thm-cea-quasi-optimality-for-conforming-galerkin-approximations`.
- Batch 56 suppliers: `def-parabolic-evolution-triple-and-energy-space`, `lem-parabolic-zero-boundary-sobolev-space-is-separable`.
- Batch 82 Gaussian suppliers: `def-gauss-moment-data`, `def-coordinatewise-product-moment-functional`, `def-gauss-polynomial-moment-inner-product`, `thm-gauss-polynomial-moment-pairing-is-an-inner-product`, `thm-monic-gauss-orthogonal-polynomials-exist-uniquely`, `thm-gauss-orthogonal-polynomial-has-simple-interior-zeros`, `def-gauss-quadrature-rule`, `lem-gauss-quadrature-rule-data-well-defined`, `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`, `def-tensor-product-gauss-rule`, `lem-tensor-product-moment-functional-equals-product-measure-integral`, `thm-tensor-product-gauss-exactness-and-exponential-node-count`.
- Batch 93 Smolyak suppliers: `def-smolyak-univariate-level-hierarchy`, `def-smolyak-cubature`, `alg-smolyak-node-deduplication`, `lem-smolyak-mixed-simpson-detail-decay`, `lem-smolyak-dyadic-tensor-simpson-convergence`, `def-smolyak-absolute-detail-summability`, `lem-smolyak-rectangular-telescope`, `thm-smolyak-absolute-detail-reconstruction-and-tail-error`, `thm-smolyak-isotropic-mixed-smoothness-work-error-rate`.
- The changed input definition also has one current-run consumer outside batch 99, `ex-polynomial-chaos-coefficients-and-sobol-indices` in batch 107. It was opened and checked; its exact finite-support calculation remains valid under the explicit support-restriction convention.

### Other opened item dependencies

Opened the direct probability, measure, Hilbert/Bochner, quadrature, matrix-concentration, and finite-element interfaces used in those proofs, including `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `thm-gram-schmidt-orthonormalisation`, `def-linear-independence`, `def-inner-product-norm`, `def-orthogonal-vectors-sets-and-orthonormal-bases`, `def-real-polynomial-degree-leading-coefficient-and-monic`, `def-strongly-measurable-banach-valued-function`, `def-hilbert-space`, `def-countable-choice`, `def-separable-space`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-minkowski-inequality-for-integrals`, `thm-monotone-convergence-for-the-integral`, `thm-dominated-convergence`, `lem-borel-map-into-separable-banach-is-strongly-measurable`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `thm-poincare-inequality-for-w-one-p-zero`, `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-integral-triangle-inequality`, `thm-lax-milgram`, `cor-finite-dimensional-subspaces-are-closed`, `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `lem-bounded-independent-matrix-bernstein-via-trace-exponential`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-algebra-of-continuous-functions`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `def-nonnegative-lebesgue-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `def-integral-of-a-nonnegative-simple-function`, `def-measure-space`, `def-measure`, `def-finite-sigma-finite-and-semifinite-measures`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-multidimensional-darboux-integral`, `def-integer-power`, `def-borel-sigma-algebra`, `def-finite-sum`, `def-monoid-finite-product`, `def-polynomial-ring-over-a-commutative-ring`, `thm-reals-field`, `thm-rank-nullity`, `lem-standard-basis-of-f-n`, `prop-standard-coordinate-inner-products`, `def-higher-derivatives-and-smoothness`, `thm-integration-by-parts`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-ftc-second-part`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-additivity-over-subintervals`, `lem-triangle-inequality-finite`, `lem-finite-sum-laws`, `thm-geometric-series`, `lem-power-laws`, `def-support-of-a-borel-measure`, and `thm-higher-order-sobolev-embedding`.

## Repairs

1. `items/def-finite-product-chaos-input.md`: made the support and measure domain explicit. The item now defines the real support, records why each marginal support has full measure using the countable rational-interval basis, and states that on $\Gamma$ the product law means the restriction of the ambient product measure. The product rectangle formula then gives $\rho(\Gamma)=1$. This closes the domain gap used by Bochner spaces and integrals over $\Gamma`.

2. `items/def-chaos-orthonormal-tensor-basis.md` and `items/thm-independent-polynomial-chaos-tensors-are-orthonormal.md`: stated the restricted-measure convention at the basis definition and used it in the tensor-product factorization. The proof now applies Tonelli/Fubini to the product of the restricted marginal laws and identifies the ambient joint law before restricting to $\Gamma$.

3. `items/thm-weighted-least-squares-stability-and-error.md`: added the unique-minimizer assertion for the algorithm's weighted empirical objective and proved it from the normal equations. For any coefficient displacement $d$, the objective excess is $d^TGd$, strictly positive for $d\ne0$ on the accepted Gram event.

Updated the batch 99 proof-contract entries for these four changed items. The pre-reader author-review hashes remain historical; no new author or judge stamp was added. Reflow/precheck results: the three support-related items were unchanged by reflow; the two proof-bearing items passed precheck, and the definitions had zero proof rows to check. The strict proof-contract check passed for all four changed items with 0 errors and 0 warnings. The required final proof-layout command checked all four paths: 4 items, 7 steps, 0 defects.

## Defects not edited

None confirmed. The out-of-batch batch 107 example consumer was reviewed and remains valid. No published or other in-run dependency defect requiring routing was found.

## Page verdicts

- A page `polynomial-chaos-stochastic-collocation-and-galerkin-uq`: **pass after the support-measure clarification**. Its summaries retain the finite-moment, law-specific completeness, Christoffel event, mixed-regularity, coercivity, and finite-element caveats proved by the listed items.
- B page `polynomial-chaos-stochastic-collocation-and-galerkin-uq-examples`: **pass**. The Cauchy and finite-support counterexamples, two-state expansion, affine diffusion calculation, and 10-versus-27 count are correct and match the item claims.

## Sources checked

- T. Gerstner and M. Griebel, *Sparse Grids*, §“Numerical integration,” printed pp. 4–5: the Smolyak detail formula is a finite sum of tensor products of one-dimensional differences; the authors state bounded mixed derivatives as the smoothness condition for the classical sparse-grid rate. https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf
- J. A. Gubner, *Gaussian Quadrature and the Eigenvalue Problem*, §§2–4: §2 defines cardinal interpolation; §3, Lemma 2 gives interpolatory exactness and Lemma 5/Theorem 6 gives Gaussian exactness through degree $2m-1$ and positive weights; §4, Theorem 7 gives distinct real roots of the orthogonal polynomial. https://gubner.ece.wisc.edu/gaussquad.pdf
- J. Kinnunen, *Sobolev Spaces* (2026), §3.5, printed pp. 83–84: higher-order Sobolev embeddings are obtained by iterating first-order Sobolev inequalities and then applying Morrey embedding. https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
- C. Clason, *Introduction to Finite Element Methods*, §5.2, Theorem 5.4 and interpolation Theorem 5.5, PDF pp. 43–44; shape-regular global interpolation discussion, PDF p. 46. https://arxiv.org/pdf/1709.08618v2.pdf

## Blocker and coverage note

No blocker affects batch 99. The current autopilot status remains `running` and reports an unrelated `3a-collect` blocker for batch 83 (`collect-83` failed three times); batch 99 is still awaiting its reader result in the 3a-read stage.

All assigned items and pages, the listed required pages, the relevant current-run item suppliers, and the direct published interfaces used by the arguments were opened. I did not recursively re-prove every low-level prerequisite beneath all published foundational interfaces; I checked those interfaces and opened deeper targets where a local inference or claim depended on them. No unresolved mathematical uncertainty remains in the assigned claims.
