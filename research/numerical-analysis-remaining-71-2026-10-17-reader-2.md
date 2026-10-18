# Step 3a reader report — batch 2

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Batch: `2`

## Verdict

I independently reviewed both assigned pages, all 20 assigned items, and the 57 unique direct dependency items referenced by those items. The in-run items were reviewed by dependency level, with their suppliers checked first. I found one remaining proof gap in a published supplier, recorded below. The assigned A-page and B-page prose accurately summarizes the current in-run content.

The dispatched batch manifest lists four A-page `requires` entries, while the current `research/plan-spec.json` row and the authored A-page list the same two: `finite-precision-direct-factorizations` and `polynomial-interpolation-and-remainder`. Those current plan/page entries fit the page's content; I did not change the page or the plan.

## Opened inventory

### Assigned pages

- `library/numerical-linear-algebra-and-approximation/radial-basis-and-kernel-interpolation.md`
- `library/numerical-linear-algebra-and-approximation/radial-basis-and-kernel-interpolation-examples.md`

### Assigned items reviewed by in-run dependency level

- Level 0: `def-rbf-kernels-sites-and-augmented-interpolation`.
- Level 1: `lem-rbf-augmented-system-is-invertible`, `def-normalized-matern-spectral-kernel`, `def-bessel-potential-space-and-restriction-quotient`, `lem-cone-sites-admit-stable-polynomial-norming-stencils`, `ex-duplicate-rbf-sites-singular-gram-matrix`.
- Level 2: `lem-matern-spectral-integral-and-normalization`, `alg-augmented-rbf-finite-difference-weights`.
- Level 3: `lem-matern-weighted-fourier-space-is-hilbert-and-injective`, `lem-separated-sites-matern-gram-bound`, `thm-rbf-fd-polynomial-reproduction-and-local-truncation`.
- Level 4: `lem-schwartz-dense-in-fourier-bessel-potential-space`, `lem-sobolev-zeros-bound-on-a-cone-domain`, `cor-matern-mesh-ratio-conditioning-bound`, `ex-small-fill-distance-can-have-poor-rbf-conditioning`.
- Level 5: `lem-matern-native-space-fourier-identity-and-positive-definiteness`.
- Level 6: `lem-restricted-matern-native-space-is-sobolev`.
- Level 7: `thm-native-interpolation-projection-and-power-function`.
- Level 8: `thm-matern-interpolation-fill-distance-error`.
- Level 9: `ex-smooth-scattered-surface-matern-rate`.

### Direct dependency items opened

I opened the 57 unique direct suppliers listed below. Their own recursive published dependency closures were not all audited.

- Linear algebra, calculus, and powers: `thm-rank-nullity`, `thm-reals-field`, `thm-reals-ordered-field`, `thm-root-bound-for-polynomials-over-a-domain`, `thm-real-power-continuity-and-derivatives`, `thm-real-power-laws`, `thm-derivative-of-exponential`, `thm-exponential-beats-every-polynomial`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `cor-mean-value-theorem`, `thm-of-archimedean`, `cor-cauchy-reals-lub-complete`.
- Measure and integration: `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-tonelli-and-fubini-for-completed-product-measures`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-dominated-convergence`, `thm-monotone-convergence-for-the-integral`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-integral-triangle-inequality`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-linear-change-of-variables-for-lebesgue-measure`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `thm-gaussian-integral`, `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`.
- Fourier and function-space conventions: `def-real-gamma-function-by-the-euler-integral`, `thm-real-gamma-euler-integral-convergence`, `def-real-power`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-complex-lp-and-euclidean-test-function-conventions`, `def-real-and-complex-inner-product-space`, `def-countable-choice`, `def-axiom-of-choice`, `def-schwartz-space-and-its-seminorms`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-is-entire-with-derivative-itself`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `cor-cauchy-schwarz-inequality-for-l-two`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `lem-orthogonal-projection-is-linear-self-adjoint-contractive`, `thm-cauchy-schwarz-in-an-inner-product-space`.
- Matrices and spectral bounds: `def-invertible-matrix-and-general-linear-group`, `def-induced-matrix-p-norm`, `def-condition-number-of-a-nonsingular-linear-system`, `cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `lem-symmetric-matrix-operator-norm-rayleigh`, `thm-p-series-real-exponents`.

Other consulted instructions/evidence: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the batch-2 page manifest, the current batch-2 proof-contract clauses for the repaired items, and the current `plan-spec.json` row for the A-page. The batch author notes and coverage output were considered evidence only; their verdicts were not adopted.

## Edits and evidence

- `items/lem-rbf-augmented-system-is-invertible.md`: replaced the unsupported assertion that a square matrix has an inverse exactly when its map is bijective with explicit two-sided inverse constructions. Rank-nullity gives surjectivity; preimages of the coordinate basis give a right inverse, and injectivity then gives the left inverse. Updated the proof contract. No `verification.judge` record was present to remove.
- `items/alg-augmented-rbf-finite-difference-weights.md`: replaced the inaccurate “partial row pivoting” label with deterministic nonzero-pivot row selection and wrote the descending-substitution formula explicitly. Corrected the NeurIPS reference title and added the exact §2.2, equations (8)–(11) locator. Updated its affected proof-contract support excerpt. The source's equations (9)–(11) display the augmented local system and polynomial moment equations; the item states its own exact arithmetic procedure.
- `items/thm-rbf-fd-polynomial-reproduction-and-local-truncation.md`: required $r_Y>0$ for the optional rate using $r_Y^{-t}$, since the library's real-power definition leaves $0^0$ undefined. Corrected the same NeurIPS reference title/locator and updated its proof contract and the algorithm's support excerpt. No `verification.judge` record was present to remove.

Validation after these edits:

- Reflow ran on all three changed items and reported `unchanged` for each.
- Precheck passed for the invertibility lemma and RBF-FD theorem. The algorithm reported `0 checked, 0 failing` because it has no phase proof.
- The required final `proof-layout` command checked the three changed item paths: 3 items, 8 steps, 0 defects.

Source checks: Rasmussen and Williams, *Gaussian Processes for Machine Learning*, Chapter 4, equations (4.14)–(4.15), gives the normalized Matérn radial and spectral formulas; substituting $a=\sqrt{2\nu}/\ell$ matches the convention used here. The NeurIPS proceedings paper is titled *Accelerated Training of Physics-Informed Neural Networks (PINNs) using Meshless Discretizations*; §2.2 equations (8)–(11) contain the cited RBF-FD local-system development. The NWW paper's Theorem 1.1 and §3.1.1 were checked as context; the assigned scattered-zero and native-space claims are proved locally rather than imported from it. The cited Fasshauer Chapter 13 PDF timed out in the browser, so I did not use it as proof evidence.

## Uneditable finding

`thm-real-gamma-euler-integral-convergence`, Proof 1.2 (line 52): the final sentence says the lower comparison proves divergence for $s<0$, but the cited [F2] comparison theorem, `thm-comparison-test-for-improper-integrals`, states only that an upper bound by a convergent nonnegative integrand implies convergence. It does not state the lower-bound divergence direction used here. Close the gap by comparing truncated integrals directly: for $0<\varepsilon<1$, the target integral over $[\varepsilon,1]$ is at least $e^{-1}\int_\varepsilon^1dt/t$, which tends to infinity, or cite a theorem that supplies that divergence comparison. This is an external published supplier, so it remains for the owner.

## Page verdicts and blocker

- A page `radial-basis-and-kernel-interpolation`: no page-prose defect found. The summary's Matérn normalization, Fourier/native-space equivalence, cone-domain $h^\nu$ rate without a mesh-ratio assumption, separated-site $q^{2\nu}$ bound, and qualified RBF-FD claims match the local results.
- B page `radial-basis-and-kernel-interpolation-examples`: no page-prose defect found. Its three examples match their witnesses and theorems.
- No blocker prevented completing the assigned batch review. One uneditable published proof gap remains as recorded above. A limitation is that I reviewed every direct supplier referenced by the assigned items but did not audit every supplier in those published items' recursive dependency closures.
