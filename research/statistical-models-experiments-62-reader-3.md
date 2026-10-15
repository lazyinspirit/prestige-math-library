# Step 3a reader report — batch 3

Run: `statistical-models-experiments-62`  
Role: reader  
Coverage: batch `3`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/exact-gaussian-linear-regression-inference.md` (A page)
- `library/statistical-models-and-experiments/exact-gaussian-linear-regression-inference-examples.md` (B page)

Assigned items, reviewed in their dependency order within the batch:

- `items/lem-full-column-rank-matrix-has-economy-qr.md`
- `items/thm-exact-gaussian-linear-regression-inference.md`
- `items/thm-gaussian-regression-confidence-and-prediction-intervals.md`
- `items/cex-rademacher-errors-do-not-give-exact-regression-t.md`
- `items/ex-gaussian-regression-mean-and-prediction-intervals.md`

The batch-2 A-page dependency and the current draft suppliers directly used by the exact-regression theorem were also opened:

- `library/statistical-models-and-experiments/fixed-design-linear-regression-and-estimability.md`
- `items/def-fixed-design-linear-regression-model.md`
- `items/def-least-squares-solution-set.md`
- `items/thm-least-squares-fitted-vector-and-solution-set.md`
- `items/thm-linear-estimability-iff-row-space.md`

Published dependency statements/proofs inspected for the claims in this batch:

- Linear algebra: `thm-finite-dimensional-orthogonal-decomposition`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-dimension-of-a-linear-subspace`, `cor-dimension-of-a-direct-sum`, `thm-row-rank-equals-column-rank`, `thm-qr-factorisation-over-r-or-c`, `def-orthogonal-projection`, `def-row-space-column-space-nullspace-and-matrix-ranks`, and `prop-pythagorean-parallelogram-and-polarisation-identities`.
- Probability and testing: `def-axiom-of-choice`, `def-countable-choice`, `def-countable-choice-principle-for-foliation-pair`, `lem-axiom-of-choice-implies-countable-choice`, `def-statistical-experiment`, `def-statistic-and-estimator`, `def-randomized-test`, `def-test-size-and-power`, `thm-grouping-independent-sigma-algebras`, `lem-measurable-functions-preserve-independence`, and `thm-independent-random-elements-have-product-joint-law`.
- Gaussian laws and pivots: `def-standard-normal-and-normal-laws`, `def-multivariate-normal-law`, `def-chi-square-law`, `def-student-t-and-f-laws`, `lem-positive-df-chi-square-has-density-and-regular-cdf`, `lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing`, `thm-orthogonal-transform-preserves-standard-normal-product-law`, and `cor-continuous-functions-are-borel-measurable`.
- Confidence procedures and supporting normalisation: `def-pivot`, `def-confidence-set-and-coverage`, `thm-pivot-inversion-exact-coverage`, `lem-normal-density-has-total-mass-one`, `thm-gaussian-integral`, `thm-substitution`, `thm-continuous-implies-integrable`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-monotone-convergence-for-the-integral`, and `prop-order-and-scalar-rules-for-the-nonnegative-integral`.

## Source review

I checked the source passages bearing on the authored claims:

- Panchenko, MIT 18.443, Section 15: PDF pp. 1–4 for the full-rank Gaussian model, MLE, QR coordinates and coefficient/residual laws; pp. 4–6 for contrast $t$ inference and subset/nested $F$ tests. [Source](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf)
- Panchenko, MIT 18.443, Lecture 4: PDF pp. 1–2 for affine multivariate-normal covariance and the normal-vector construction used by the Gaussian suppliers. [Source](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/da928274a46632ce0d35d2012a1c8e74_lecture4.pdf)
- Wickham, “Statistics: Lecture Three — Linear Models”: PDF pp. 3–7 for least-squares projection, estimability, normal-theory $t$ inference and nested $F$ inference. [Source](https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf)
- Stanford Stats 203, Lecture 4: lines 89–96 for mean-response intervals and lines 120–149 for prediction intervals and the additional future-error variance. [Source](https://web.stanford.edu/class/stats203/lectures/lecture4/)

The local proofs establish the arbitrary reduced-subspace $F$ result and the general-vector prediction result under the stated hypotheses; the source readings were used to verify the cited statistical formulas and conventions, not as substitutes for those proofs.

## Repairs and evidence

1. In `thm-exact-gaussian-linear-regression-inference`, specified $P_X=X(X^TX)^{-1}X^T$ as the ambient projection matrix, so $I_n-P_X$ in the residual definition is typed explicitly. In proof step 1.2, separated the orthogonal basis matrix $O$ from the subspace $W_U$; replaced ambiguous $P_U$ notation by $P_{W_U}$; derived the residual components directly from $y=r+a+b$; and used those components to establish the numerator and denominator chi-square laws. This closes the dimension and projection gaps while preserving the theorem's hypotheses and conclusions.
2. In the same theorem's step 3.1, justified Borel measurability of the partial $F$ statistic and both rejection events, and made explicit why a nonzero vector in $A$ lies outside $W_R$, proving the alternative is nonempty.
3. In `thm-gaussian-regression-confidence-and-prediction-intervals`, step 1.1 now constructs the full-parameter confidence set corresponding to the contrast interval, proves each membership section Borel, and transfers exact coverage from pivot inversion on the probability-one event $s>0$. This uses the confidence-set definition with a set-valued procedure whose range is in the model parameter space.
4. In the interval theorem's step 3.1, explicitly transferred independence from $\hat\beta$ to its affine transform $Z$, then from $(Z,G_*)$ to the displayed standardized normal variable, using the measurable-functions independence result.
5. Updated the two affected derivation records in `research/statistical-models-experiments-62-batch-3.proof-contracts.json`; synchronized its source quotations for the current batch-2 least-squares theorem statement and the revised exact-inference statement. Both edited items had no stale `verification.judge` record.

The batch-2 suppliers' stated hypotheses match their uses here. Their draft verification state remains outside this reader's certification authority; no supplier repair was needed.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-exact-gaussian-linear-regression-inference.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-exact-gaussian-linear-regression-inference.md` — pass.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-gaussian-regression-confidence-and-prediction-intervals.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-gaussian-regression-confidence-and-prediction-intervals.md` — pass.
- `node tools/proof-layout.mjs items/thm-exact-gaussian-linear-regression-inference.md items/thm-gaussian-regression-confidence-and-prediction-intervals.md` — 2 items, 9 steps, 0 defects.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-3.proof-contracts.json --strict --json` — 5 items checked, 0 errors and 0 warnings.

## Page verdicts

- `exact-gaussian-linear-regression-inference`: the A-page objective and scope match the item statements. The Gaussian finite-sample $t$, nested $F$, test-size, and interval claims are supported after the in-scope repairs; no unresolved page or item defect remains.
- `exact-gaussian-linear-regression-inference-examples`: the B-page summary is accurate. The four Rademacher outcomes all give pivot zero, while a $t_1$ law is continuous; the four-row design, OLS fit, residual sum of squares, variance estimates and interval-width comparison check arithmetically.

## Unedited defects and blockers

No confirmed unedited defect was found in an assigned page, assigned item or dependency needed for these claims. No reader blocker remains. The run was live at review start and the Step 3a reader stage was waiting for batch results.

Coverage limit: I opened the assigned carriers, their directly cited suppliers, the batch-2 direct draft suppliers, and selected transitive probability/normalisation dependencies needed to check those facts. I did not recursively audit every transitive proof in the published library.
