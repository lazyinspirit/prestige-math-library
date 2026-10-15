# Step 3a reader report — batch 6

Run: `statistical-models-experiments-62`  
Role: `reader-6`  
Coverage: batch `6`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/principal-components-and-eigenspace-stability.md` (`principal-components-and-eigenspace-stability`, A).
- `library/statistical-models-and-experiments/principal-components-and-eigenspace-stability-examples.md` (`principal-components-and-eigenspace-stability-examples`, B).

Assigned items opened:

- `items/lem-pca-sample-covariance-is-a-measurable-estimator.md`
- `items/def-covariance-and-correlation-principal-component-analysis.md`
- `items/thm-pca-leading-direction-maximizes-variance.md`
- `items/thm-repeated-leading-eigenvalue-identifies-subspace.md`
- `items/thm-sample-centered-covariance-root-n-frobenius.md`
- `items/thm-local-leading-eigenvector-stability-under-eigengap.md`
- `items/cor-pca-sample-leading-eigenspace-root-n-consistency.md`
- `items/cex-small-eigengap-allows-fixed-angle-rotation.md`
- `items/ex-covariance-and-correlation-pca-differ-after-rescaling.md`
- `items/ex-pca-tied-eigenvalues-and-sign-ambiguity.md`

Direct dependencies opened to verify the assigned arguments:

- `def-statistical-experiment`, `def-parametric-statistical-model`, `def-estimand-on-a-statistical-model`, `def-statistic-and-estimator`, and `def-scientific-statistical-model-contract`.
- `def-sample-covariance-and-operator-norm-loss`, `def-identically-distributed-and-iid-random-variables`, `def-covariance-matrix-of-a-random-vector`, and `lem-finite-second-moment-covariance-matrix-is-well-defined`.
- `lem-pca-sample-covariance-is-a-measurable-estimator`, `thm-continuous-preimages-of-borel-sets-are-borel`, and `def-moments-variance-and-covariance`.
- `lem-measurable-functions-preserve-independence`, `lem-variance-and-covariance-identities-for-random-variables`, `cor-covariance-vanishes-under-independence`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-markov-inequality-for-random-variables`, and `def-op-and-little-op-stochastic-bounds`.
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-courant-fischer-min-max-principle`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-in-an-inner-product-space`, and `thm-cauchy-schwarz-and-the-euclidean-norm`.

The two cited PCA lecture notes were opened at their relevant pages:

- [Learning signal representations, Lecture Notes 8](https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf), PDF pp. 8–12: pp. 8–9 describe centering and projection energy; pp. 11–12 state the covariance/variance interpretation and sample-centered empirical covariance with divisor `n`. The notes provide context only; the stronger local perturbation and root-n claims are proved in the assigned items.
- [Multivariate Analysis, Lecture 8: PCA](https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf), PDF pp. 2–4: pp. 2–3 describe covariance eigendirections and variance maximization; p. 4 gives the sample convention and notes that scaling can change PCA, with correlation-matrix PCA as a scale adjustment.

## Review and edits

No edits were made. No confirmed defect was found in an assigned item or assigned page prose, so there was no proof-contract change, judge-record removal, reflow, precheck, or proof-layout run.

The mathematical checks found:

- The sample-centered covariance measurability proof maps the polynomial coordinate functions continuously into the symmetric-matrix subspace and identifies its target with the covariance estimand. Its claims are limited to measurability and target type.
- The finite-fourth-moment covariance proof correctly bounds the oracle-centered entrywise second moments, uses fixed finite `p`, and controls the sample-mean outer-product correction as `o_P(n^{-1/2})`; the probability-space variation allowed by its `O_P` definition is respected.
- The local eigenvector result uses the two Courant–Fischer bounds to preserve a positive perturbed gap, then projects the perturbed eigen-equation onto the original leading vector's orthogonal complement. The resulting sign-free sine-angle estimate and eigenvalue bound match the stated hypotheses.
- The PCA variance theorem, repeated-eigenvalue statement, and root-n corollary preserve the required moment, gap, and simplicity conditions. The corollary's zero extension is used only off the high-probability event where the sample leading line is unique.
- The two-by-two small-gap counterexample has perturbation norm `δ/4` and constant line angle `arctan(√5−2)`. The four-point rescaling example gives covariance matrix `[[9,3],[3,4]]` and correlation matrix `[[1,1/2],[1/2,1]]` with distinct leading lines. The tie/sign example computes the eigenspaces of `I₂` and `diag(2,1)` correctly.
- Both page summaries agree with their assigned contents and retain the stated limits on inference and model adequacy.

## Uneditable defects

None identified. No finding remains for an in-run or published dependency.

## Page verdicts

- `principal-components-and-eigenspace-stability` (A): no confirmed defect found in the page summary or its assigned items.
- `principal-components-and-eigenspace-stability-examples` (B): no confirmed defect found in the page summary or its assigned examples.

## Blocker and coverage note

No blocker. Both assigned pages, all ten assigned items, their directly invoked proof dependencies, and the cited PCA source passages needed to check the stated conventions were reviewed. The first content pass opened assigned items before external suppliers; I then opened the direct dependencies and cross-checked the conclusions against them. I did not re-audit unrelated transitive foundations beneath the opened published suppliers; no assigned inference required adjudicating those deeper results independently.
