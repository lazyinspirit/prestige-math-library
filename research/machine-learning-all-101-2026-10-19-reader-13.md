# Step 3a Reader Report — Batch 13

Run: `machine-learning-all-101-2026-10-19`  
Batch: `13`  
Role: `reader-13`

## Opened inventory

Read the batch 13 manifest, `briefs/reader.md`, the canonical repository instructions, and the live run status. The run was active and had no reader result recorded for batch 13.

Assigned pages opened:

- `library/machine-learning/ml02-linear-sparse-models.md`
- `library/machine-learning/ml02-linear-sparse-models-examples.md`

Assigned items reviewed in dependency order:

- Initial suppliers: `def-linear-regression-objectives`, `lem-gaussian-sample-covariance-operator-concentration`, `lem-chi-square-degree-ratio`, `lem-finite-gaussian-max-comparison`, `lem-standard-gaussian-maximum-expectation-lower-bound`, `cex-wainwright-conditional-covariance-eigenvalue-bound`.
- Their consumers: `fs-wainwright-lower-signed-support-threshold`, `thm-ols-and-ridge-solutions`, `lem-orthonormal-lasso-soft-thresholding`, `lem-lasso-active-set-stationarity`.
- Final consumers and examples: `fs-wainwright-signed-support-threshold-claim`, `ex-correlated-predictors-and-shrinkage`, `ex-orthonormal-lasso-soft-thresholding`, `ex-beta-min-below-lasso-threshold-loses-support`.

Direct external supplier interfaces consulted through the rendered evidence bundle, including the specific cited clauses used by these items:

`def-lasso-estimator`; `def-axiom-of-choice`; `def-multivariate-normal-law`; `def-standard-normal-and-normal-laws`; `cor-markov-inequality-for-random-variables`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`; `thm-dominated-convergence`; `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`; `thm-nondegenerate-multivariate-normal-law-has-density`; `thm-independent-random-elements-have-product-joint-law`; `thm-standard-gaussian-lipschitz-concentration`; `def-dependent-choice`; `def-countable-choice`; `thm-least-squares-solutions-and-normal-equation`; `def-tikhonov-regularised-least-squares`; `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`; `thm-singular-value-decomposition`.

## Review and evidence

No assigned item or page prose was edited. No defect remains to report, and no proposed withdrawal was removed. All statement/definition/example hyperlinks appear in the immediately following matching references section; the claims themselves are uninterrupted. No page body summaries are present. The only TikZ diagram, in `ex-correlated-predictors-and-shrinkage`, correctly depicts the stated first-quadrant portions of the OLS and Lasso sets and the ridge point; its text says the OLS line shown is only its first-quadrant portion.

The Gaussian covariance concentration and chi-square ratio proofs have the stated asymptotic hypotheses and their net, tail, and moment bounds close. The finite Gaussian maximum comparison has the correct interpolation derivative and increment-variance direction. The Lasso soft-thresholding, active stationarity, OLS/ridge, and example computations match their normalizations and domains.

The two Wainwright carriers are properly formulated as false-statement items and retain the claims they refute. The lower-threshold counterexample verifies the covariance bounds and gives an optimizer certificate with probability tending to one under parameters satisfying the stated failure condition. The upper-threshold counterexample meets the claimed upper hypotheses and shows, by the active-coordinate stationarity equation, that an active coefficient has the wrong sign with probability tending to one.

Primary-source checks:

- Wainwright, [2006 arXiv version](https://arxiv.org/pdf/math/0605740), §3.1, Theorem 1, PDF pp. 7–8: the lower and upper threshold conditions and their hypotheses match the claims reproduced in the batch. Appendix D.6, PDF pp. 24–25, lines around the block-inverse calculation identifies the lower-right block of `Σ⁻¹` with the Schur conditional covariance; the correct block-inverse identity gives the inverse of that Schur complement. The assigned counterexample and lower refutation do not rely on Wainwright’s proof as a supplier.
- Rigollet and Hütter, [High-Dimensional Statistics, arXiv:2310.19244v1](https://arxiv.org/pdf/2310.19244v1), §2.2, Proposition 2.1, and §§2.3–2.4, including Definition 2.12: the least-squares and Lasso normalization references are consistent. Theorem 1.14 in §1.4 gives upper maximal inequalities; the assigned lower expectation bound is proved directly in its own item, and the source note describes the notes as context.
- The Wainwright 2009 IEEE PDF at [§IV.A](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf) was opened as context for the revised threshold interface. Its PDF text layer did not render the relevant equation glyphs reliably, so I did not independently verify the exact `rho_ell` formula cited in the source note. No assigned proof relies on that formula.
- The cited official ESL download endpoint returned HTTP 403 through the browser. The official [book page](https://hastie.su.domains/ElemStatLearn/main.html) confirms the corrected 12th printing link, but I did not independently inspect the cited book pages in this review. The local regression proofs are derived directly, and no issue with the citation was confirmed.

No item repair was required. Therefore no proof contract changed, no `verification.judge` record was removed, and reflow, precheck, and proof-layout were not run.

## Page verdicts

- `ml02-linear-sparse-models`: pass. The YAML-only page has no body summary, preserves its draft status and `compact-v1` layout, and its item inventory matches the assigned A-page items and manifest.
- `ml02-linear-sparse-models-examples`: pass. The YAML-only page has no body summary, preserves its draft status and `compact-v1` layout, and its example inventory matches the assigned B-page items and manifest.

## Unedited defects and blocker

None identified. No blocker.

## Coverage limitation

All 14 assigned items, both assigned pages, and the direct supplier interfaces needed for the local arguments were reviewed. I checked supplier claim interfaces and cited clauses rather than re-auditing every proof in the published dependency closure. The exact Wainwright 2009 equation glyphs and ESL book pages noted above were not independently readable through the browser; those citations are contextual and do not close any step in the assigned proofs.
