# Step 5a reader report — batch 26

Run: frontier-36-complete  
Role: reader  
Verdict: six confirmed defects repaired in assigned in-flight items; no uneditable defect confirmed.

## Opened inventory

Read the batch manifest research/frontier-36-complete-batch-26.pages.json and the reader brief briefs/reader.md. Opened both assigned pages:

- library/complex-analysis/green-functions-harmonic-measure-and-conformal-invariance.md
- library/complex-analysis/green-functions-harmonic-measure-and-conformal-invariance-examples.md

Opened all 22 assigned item files:

- def-green-function-plane-domain
- lem-log-modulus-is-harmonic-off-its-centre
- thm-planar-green-kernel-conformal-covariance
- lem-analytic-exhaustion-of-plane-domains
- thm-green-function-exists-on-bounded-plane-domains
- lem-planar-barrier-controls-perron-solutions
- lem-analytic-boundary-green-corrector-is-smooth
- thm-green-function-uniqueness-symmetry-and-monotonicity
- thm-green-function-simply-connected-plane-domain
- def-harmonic-measure-plane-domain
- thm-harmonic-measure-is-well-defined
- thm-harmonic-measure-disc-poisson-density
- thm-harmonic-measure-conformal-invariance
- thm-harmonic-measure-maximum-principle-and-domain-comparison
- thm-green-function-harmonic-measure-representation
- ex-green-function-disc-with-nonzero-pole
- ex-harmonic-measure-of-a-disc-arc
- ex-upper-half-plane-harmonic-measure-density
- ex-interval-harmonic-measure-in-upper-half-plane
- ex-annulus-harmonic-measure-of-boundary-circles
- ex-slit-plane-green-function-from-square-root
- ex-punctured-disc-irregular-boundary-green-function

To verify the assigned claims, also opened these current library dependencies: thm-real-stone-weierstrass-for-compact-metric-spaces; def-barrier-and-regular-boundary-point; lem-local-subharmonic-peak-function-globalizes; def-perron-family-for-the-plane-dirichlet-problem; def-perron-envelope-for-the-plane-dirichlet-problem; lem-perron-family-is-nonempty-and-bounded; lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity; thm-perron-envelope-is-harmonic; def-lambda-system; def-pi-system; thm-dynkin-pi-lambda; def-plane-harmonic-function; thm-green-representation-formula; def-dirichlet-green-function-for-minus-laplacian; thm-green-function-symmetry; thm-weyl-lemma-for-the-laplacian; lem-positive-c-zero-functionals-have-finite-regular-representing-measures; thm-poisson-integral-solves-the-disc-dirichlet-problem.

## Repairs

All edits below are in assigned draft items. Their proof-contract derivations were updated in research/frontier-36-complete-batch-26.proof-contracts.json. No stale verification.judge record was present on the changed items.

1. items/lem-analytic-exhaustion-of-plane-domains.md — Step 1.4 previously described perturbing rational vertices without preserving arbitrary endpoints, so it did not establish paths to arbitrary points of A. It now fixes each endpoint, perturbs only intermediate vertices, and uses the positive minimum distance of the compact original path image from the closed complement to keep the perturbed segments in the domain. Step 3.1 previously treated rational-coefficient polynomials as a real algebra. It now applies real Stone–Weierstrass to real-coefficient polynomials, then approximates the finitely many coefficients by rationals; the two uniform errors are each less than 1/8. Step 7.2 now states the rational-endpoint condition used by its path construction.

2. items/lem-planar-barrier-controls-perron-solutions.md — Step 1.1 previously chose the barrier multiple to establish only the lower Perron comparison; Step 2.2 also required an upper comparison. The choice now bounds both deviations on the compact part of the boundary, with the empty-complement case handled separately. This supplies both inequalities used in the squeeze. The repair is consistent with Axler, Bourdon, and Ramey, Harmonic Function Theory, 2nd ed., Theorem 11.7, printed pp. 227–228: its barrier proof compares the Perron envelope from below and above using the barrier. Source: [Harmonic Function Theory](https://www.axler.net/HFT.pdf).

3. items/thm-harmonic-measure-maximum-principle-and-domain-comparison.md — Step 7.1 previously asserted closure under finite unions while proving closure under countable unions, making the measurability argument circular. It now proves the lambda-system properties by nested differences and increasing unions, uses the bounded increasing limit theorem for harmonic functions, and applies Dynkin’s pi-lambda theorem to the open sets. The item dependencies and proof contract now include the lambda-system, pi-system, pi-lambda, and harmonic-function definition statements used there.

4. items/ex-green-function-disc-with-nonzero-pole.md — Step 1.1 incorrectly called M(z)=(z-a)/(1-conjugate(a)z) an involution; that identity is false for general nonzero a and was removed. Step 2.2 now takes circles with |a|<r<1, so they avoid the pole, and proves the boundary limit by uniform convergence of 1-|M(z)| squared to zero. It no longer asserts radial monotonicity.

5. items/ex-punctured-disc-irregular-boundary-green-function.md — Step 1.1’s stated path t z did not reach the claimed point at radius 1/2 when |z|<1/2. It now uses explicit radial interpolation from radius |z| to 1/2, followed by a circular arc, staying in the punctured disc.

6. items/ex-slit-plane-green-function-from-square-root.md — Step 1.1 used the real part of w-beta to justify nonvanishing, which fails on a vertical line away from beta. It now uses the correct complex statement: w-beta is nonzero on H minus {beta}, even when its real part vanishes.

Required reflow and precheck were run for each changed item. Reflow reported unchanged and precheck passed for all six: lem-analytic-exhaustion-of-plane-domains; lem-planar-barrier-controls-perron-solutions; thm-harmonic-measure-maximum-principle-and-domain-comparison; ex-green-function-disc-with-nonzero-pole; ex-punctured-disc-irregular-boundary-green-function; ex-slit-plane-green-function-from-square-root.

## Page verdicts

- library/complex-analysis/green-functions-harmonic-measure-and-conformal-invariance.md — No confirmed defect in its title, prose, mathematical statements, or summary. No edit.
- library/complex-analysis/green-functions-harmonic-measure-and-conformal-invariance-examples.md — No confirmed defect in its title, examples, computations, prose, or summary. No edit.

## Uneditable defects and blocker

No confirmed uneditable defect remains, and there is no repair blocker. I did not edit either page, published content, or any item outside batch 26.

Coverage limitation: I opened every assigned item and page and the current local dependencies listed above, but did not complete full external-source retrieval for two cited documents: a Lyubich PDF response of 35,507,640 bytes was rejected as too large, and a Teschl archive URL request errored. I therefore do not claim independent review of those external texts. The barrier claim above was independently checked against Axler et al., Theorem 11.7, printed pp. 227–228.

