# Step 3a reader report — batch 48

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `48`

## Opened inventory

Assigned pages:

- `library/machine-learning/minimum-norm-interpolation-and-double-descent.md`
- `library/machine-learning/minimum-norm-interpolation-and-double-descent-examples.md`

Assigned items, read in assigned dependency-level order:

- `def-ridgeless-minimum-norm-regression`
- `lem-iid-uniform-fill-distance-rate`
- `lem-ridgeless-risk-decomposition`
- `lem-dense-cube-polynomial-norming-and-reproduction`
- `lem-gaussian-rbf-power-function-fill-distance-bound`
- `thm-noiseless-rkhs-interpolation-fill-distance-bound`
- `lem-zero-signal-isotropic-risk-limit`
- `thm-isotropic-ridgeless-risk-across-interpolation-threshold`
- `lem-isotropic-minimum-norm-risk-components`
- `ex-double-descent-in-neural-and-tree-models`
- `ex-isotropic-risk-components-and-signal-to-noise-regimes`

Required dependency pages opened:

- `library/machine-learning/ml02-rkhs-svm.md`
- `library/machine-learning/sample-covariance-resolvent-limits.md`
- `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares.md`

Dependency items opened for the assigned proofs:

- RKHS: `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces`, `ex-gaussian-radial-kernel`, `thm-canonical-rkhs-construction-and-reproducing-property`, `lem-finite-dimensional-projection-in-a-real-inner-product-space`.
- Pseudoinverse and linear algebra: `def-moore-penrose-pseudoinverse`, `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`, `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, `thm-singular-value-decomposition`, `lem-moore-penrose-products-are-orthogonal-projectors`, `cor-rank-equals-number-of-nonzero-singular-values`.
- Sampling and measure: `def-countable-choice`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, `thm-lebesgue-measure-is-a-complete-measure`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `thm-finite-union-bound`, `def-identically-distributed-and-iid-random-variables`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`.
- Polynomial reproduction: `thm-heine-borel-rn`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-extreme-value-metric`, `thm-eulers-formula`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-sine-and-cosine-derivatives`.
- Risk and sample covariance: `cor-isotropic-minimum-norm-risk-closure-under-edge-gap`, `thm-directional-sample-covariance-resolvent-limit`, `thm-directional-sample-covariance-resolvent-limit-for-bounded-entries`, `lem-complex-sample-covariance-norm-bound-from-real-edge`, `lem-bounded-complex-resolvent-deterministic-equivalent`, `lem-bounded-complex-resolvent-quadratic-form-concentration`, `thm-general-population-sample-covariance-esd-limit-for-bounded-entries`, `lem-marchenko-pastur-formula-defines-a-finite-measure`, `lem-deformed-mp-fixed-point-solution-is-unique`, `thm-marchenko-pastur-law-for-sample-covariance`, `thm-smallest-positive-eigenvalue-sample-covariance-edge`, `thm-bai-yin-smallest-singular-value-limits`, `lem-sample-covariance-spectrum-confinement`, `lem-nonbacktracking-covariance-high-moment-bound`, `lem-fixed-degree-covariance-trace-and-edge-witnesses`, `lem-nested-iid-fourth-moment-truncation-and-diagonal-control`.
- Probability and convergence: `def-marchenko-pastur-measure`, `def-weak-convergence-of-borel-probability-measures`, `thm-dominated-convergence`.

Run-local evidence opened: `research/machine-learning-all-101-2026-10-19-batch-48.pages.json`, `...batch-48.dependency-inputs.json`, `...batch-48.proof-contracts.json`, `...batch-48.source-coverage.json`, and `...batch-48.source-resolution.json`. These were treated as evidence rather than verdicts.

## Mathematical review

- The ridgeless estimator definition is valid for arbitrary finite real design matrices, including rank-deficient designs. The published pseudoinverse result gives the stated minimum-norm least-squares characterization.
- The fill-distance lemma's cell probabilities, finite-union bound, cell diameter, and constant (C_d=2\sqrt d\,2^{1/d}) check out. The dense-cube lemma supplies a local proof of the required norming and simultaneous coefficient reproduction bounds; its finite convex-separation argument and derivative estimates support the stated exponential coefficient growth without a separation assumption.
- The Gaussian feature expansion reproduces the kernel, the weighted coefficients cancel the feature weights through degree (n), and the factorial tail with (n=\lfloor \kappa L/(2h)\rfloor) yields the stated (\exp(-c|\log h|/h)) bound. The noiseless interpolation theorem then follows from the RKHS projection inequality, the fill-distance event, and the measure-preserving rotation/translation to a product cube. I found no remaining gap in these assigned proofs. The earlier source-resolution note about an unavailable Madych–Nelson proof is not a live proof gap: the current assigned items establish the needed reproduction and power-function estimates locally.
- The exact finite-dimensional bias/noise decomposition is consistent with the SVD and pseudoinverse identities. The isotropic risk corollary uses the MP limits, positive-edge cutoffs, and directional spectral-measure limit with the stated normalizations. The zero-signal argument correctly extracts the signal-independent variance by combining risks at signal norms one and two; the component lemma subtracts the same variance limit from total risk.
- The derivative and endpoint claims in the signal-to-noise example follow from the displayed risk formulas. Figure-level quantities in the double-descent example match the cited empirical report and remain qualified as finite experiments.
- No TikZ, tikzcd, or other diagrams occur in the assigned scope.

Source checks:

- Hastie et al., [full preprint](https://www.stat.cmu.edu/~ryantibs/papers/ridgeless.pdf), Theorem 1 (printed p. 6), the overparameterized variance result and Theorem 2 (pp. 8–9), and the risk curve in Section 3.3. The assigned finite-fourth risk proof relies on the local sample-covariance supplier for the broader overparameterized bias claim.
- Belkin et al., [full paper](https://www.cs.columbia.edu/~djhsu/papers/biasvariance-arxiv.pdf), Appendix A Theorem 1 and proof sketch (printed pp. 13–14), and Figures 2, 4, and 5 (pp. 5, 7–8). The appendix supplies the noiseless Gaussian interpolation context; its sketch invokes Wendland, while the assigned local argument proves the needed power estimate itself.
- Rieger and Zwicknagl, [full paper PDF](https://webdoc.sub.gwdg.de/ebook/serien/e/MPI_Math_Nat/preprint2006_151.pdf), Theorems 4.5 and 6.1 (printed pp. 15 and 19); Rieger, [dissertation PDF](https://d-nb.info/994624026/34), Theorem 4.2.1 (printed p. 43) for local polynomial reproduction and Theorem 4.5.1 for the interpolation route. These are comparison sources; the assigned proofs do not take the uncited polynomial-reproduction step as a premise.

## Edits

None. No confirmed defect was found in an assigned item or assigned page. Since no item changed, I did not run item reflow, precheck, or proof-layout.

## Uneditable finding

`thm-directional-sample-covariance-resolvent-limit` is an in-run dependency reached by assigned consumer `lem-zero-signal-isotropic-risk-limit` through `cor-isotropic-minimum-norm-risk-closure-under-edge-gap`. In `Facts & Assumptions, [F2]`, it states that any centered complex iid finite-fourth-moment array has the bound \(\limsup \|X_n\|_{\mathrm{op}}/\sqrt{N_n}\le\sqrt2(1+\sqrt c)\), without a variance normalization. Its cited supplier, `lem-complex-sample-covariance-norm-bound-from-real-edge`, gives the variance-sensitive bound \((\sigma_R+\sigma_I)(1+\sqrt c)\), reducing to \(\sqrt2(1+\sqrt c)\) only when \(\mathbb E|\xi_{11}|^2=1\). The unqualified [F2] is false under rescaling; restate it with the variance factor. The direct supplier supplies the scaled estimates used in the proof, but the false supporting fact remains in the current item. Raw current source SHA-256: `66648222c924a314a643efe066a394a6eb84c9587bcb4f1390b3916a49f6f48e`.

## Page verdicts

- `minimum-norm-interpolation-and-double-descent`: pass. Draft A-page is frontmatter-only, retains the manifest inventory and requirements, and has `page_layout: compact-v1`.
- `minimum-norm-interpolation-and-double-descent-examples`: pass. Draft B-page is frontmatter-only, retains the manifest examples and A-page requirement, and has `page_layout: compact-v1`.
- `ml02-rkhs-svm`: dependency context only; draft page is frontmatter-only with compact layout and its supplier inventory matches the opened RKHS items.
- `sample-covariance-resolvent-limits`: dependency context only; draft page is frontmatter-only with compact layout and includes the reached risk/resolvent suppliers. The finding above is at the item level.
- `the-moore-penrose-pseudoinverse-and-regularised-least-squares`: published dependency context; its item inventory supports the pseudoinverse citations. Its legacy page body is outside the assigned A/B page scope.

## Blocker

No blocker for batch 48's assigned items or pages. The in-run dependency defect above is outside this reader's edit scope and is included in the findings JSON.

## Coverage note

All 11 assigned items and both assigned pages were read, and the direct proof dependencies listed above were checked. I did not recursively re-audit every dependency beneath every published foundational supplier. The dependency texts were opened after the assigned item bodies, so the session did not maintain a strictly supplier-first chronology throughout. No separate rendered evidence bundle appeared among the batch-48 artifacts; I used the current page/item contents, source-coverage and source-resolution records, proof contracts, and the cited source passages.
