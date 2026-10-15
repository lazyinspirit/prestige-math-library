# Step 3a reader report — batch 26

Run: `statistical-models-experiments-62`  
Batch: `26`  
Assigned page pair: `missing-data-weighting-and-sensitivity` and `missing-data-weighting-and-sensitivity-examples`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/missing-data-weighting-and-sensitivity.md` (A)
- `library/statistical-models-and-experiments/missing-data-weighting-and-sensitivity-examples.md` (B)

Page prerequisites opened for context:

- `library/statistical-models-and-experiments/missingness-mechanisms-and-identification.md`
- `library/mathematical-statistics/statistical-experiments-models-and-identifiability.md`
- `library/mathematical-statistics/estimators-and-randomized-procedures.md`
- `library/probability/conditional-expectation.md`
- `library/probability/markov-kernels-and-markov-chains.md`

All five items in the batch manifest were opened. The internal assigned-item order followed their manifest dependency levels: `lem-missing-at-random-integrable-factorization`, `alg-response-probability-weighting`, `thm-missing-at-random-weighting-identity`, `def-pattern-mixture-sensitivity-parameter`, then `ex-ipw-instability-and-mnar-sensitivity-curve`.

The 26 distinct declared item dependencies were opened at the definition or statement sections needed by the assigned claims:

- Current-run batch-25 draft suppliers: `def-full-observed-and-missing-data`, `def-mcar-mar-and-mnar`.
- Other dependencies: `def-axiom-of-choice`, `def-conditional-expectation-as-an-ae-class`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-independence-given-a-sigma-algebra`, `def-conditional-law-given-a-random-element`, `def-estimand-on-a-statistical-model`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-expectation-on-a-finite-probability-space`, `def-finite-probability-space-and-event`, `def-identifiability-of-an-estimand`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-measurable-function-between-measurable-spaces`, `def-measure-kernel-and-probability-kernel`, `def-moments-variance-and-covariance`, `def-observational-equivalence`, `def-parametric-statistical-model`, `def-probability-measure`, `def-random-element-and-real-random-variable`, `def-standard-borel-space`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`, `thm-measurability-of-integration-against-a-kernel`, `thm-monotone-convergence-for-the-integral`, and `thm-tower-property-of-conditional-expectation`.

Run evidence reviewed as context, not verdict: `research/statistical-models-experiments-62-batch-26.pages.json`, `research/statistical-models-experiments-62-batch-26.cross-batch-dependencies.json`, the assigned entries in `research/statistical-models-experiments-62-batch-26.proof-contracts.json`, `research/statistical-models-experiments-62-batch-26.notes.md`, and `research/statistical-models-experiments-62-author-check-26.json`. The run status was active at Step 3a-read, with no worker running.

Reading/context limitation: I opened the assigned item text before completing the source-item reads. The assigned items themselves were in dependency order, and I checked their declared source statements before reaching final conclusions. Strict supplier-first opening order across the external and batch-25 suppliers was therefore not achieved. The initial combined item read was output-truncated, so I fetched selected assigned-item sections again to complete the review; the one-read-per-file constraint was not met for those sections.

## Mathematical review

- `lem-missing-at-random-integrable-factorization`: The bounded conditional-independence identity is extended to integrable transforms by truncation. The tail estimate gives L1 convergence; conditional expectation's L1 contraction and the bounded factor E[R|G] in [0,1] give convergence of both sides. The hypotheses and AC use are stated. No defect found.
- `alg-response-probability-weighting`: Inputs, admissibility, masked zero placeholder, known positive response probabilities, branch by response mask, and returned n^-1 sum_i z_i/pi(x_i) are explicit. It does not claim fitted-weight inference or finite-sample stability. No defect found.
- `thm-missing-at-random-weighting-identity`: The statement defines the quotient to be zero where pi=0, a null set under its positivity premise. The proof establishes the weighted identity for nonnegative |Y|, Y+, and Y- using bounded simple approximations and monotone convergence, obtains absolute integrability from the |Y| case, and then subtracts the positive and negative parts. The conditional-independence lemma is used only on integrable transforms. No defect found.
- `def-pattern-mixture-sensitivity-parameter`: Both response groups have positive mass; the stated overlap is Q0 absolutely continuous with respect to Q1, so the respondent-kernel version is relevant under the nonrespondent covariate law. Translation gives probability measures, and the stated product measurability plus kernel-integration theorem gives measurable evaluations. The definition identifies a full-distribution modeling restriction, limits its domain, and separately requires integrability for a finite mean target. No defect found.
- `ex-ipw-instability-and-mnar-sensitivity-curve`: The finite atom weights sum to one. For epsilon in (0,1], V has mean 1/2 and variance 1/(2 epsilon)-1/4. At epsilon=0 the two laws have the same observed law and means 0 and 1/2. The sensitivity family keeps the observed law fixed and gives mean 0.4+0.5 Delta; the MNAR/MAR boundary classification follows from the constant-X response pattern. No mathematical defect found.

The source locators were checked against the cited text. Chewi's §9.2 Definition 9.1 (PDF pp. 35–36) gives conditional independence for bounded measurable test functions, exactly the premise extended by the local lemma. The current Hernán–Robins author PDF was downloaded and the cited Chapter 8 §8.5 (printed pp. 117–120) and Chapter 12 §12.6 (pp. 172–173) were inspected; they discuss inverse-probability weighting, positivity, and censoring/missing outcomes. The National Academies Chapter 4 source (especially pp. 56–58 and 70–75) covers univariate IPW, high-weight variance, positivity, and missing-data assumptions. Its Chapter 5 source (pp. 86–93) treats model-indexed pattern-mixture assumptions, including mean shifts; it does not establish the assigned stronger full-distribution translation, which the assigned definition correctly presents as its own modeling restriction. Mao §1.12, current HTML lines 304–353, gives the weighted estimating equation and its conditional-expectation identity. No assigned claim relies on these citations as a substitute for its local proof or definition.

## Page verdicts

- A page `missing-data-weighting-and-sensitivity`: **No confirmed defect.** The summary accurately distinguishes the population identity, the sensitivity model, and the caveats about estimated weights, integrability, and confidence intervals.
- B page `missing-data-weighting-and-sensitivity-examples`: **No confirmed defect.** The summary accurately describes the finite instability and identification witnesses and does not label the model-indexed sensitivity range a confidence interval.

The five prerequisite page summaries were read for context; they are not part of this batch's page verdicts.

## Edits and uneditable defect

No item or page prose was edited. There was no item path requiring reflow, precheck, or proof-layout after editing.

One proof-contract evidence defect remains outside the permitted edit scope. In `research/statistical-models-experiments-62-batch-26.proof-contracts.json`, the contract for `ex-ipw-instability-and-mnar-sensitivity-curve` has stale boundary evidence at lines 634, 639, and 649: its `zero` row cites nonexistent step 3.3 and attributes \(\varepsilon=0\) to step 1.2 (which instead treats \(\theta\in\{0,1\}\)); its `one` and `endpoints` rows cite nonexistent step 3.2. The current proof's only step under phase 3 is 3.1. The mathematical example is sound, but the contract evidence should be rebound to the current steps or updated. I did not edit the contract because the dispatch licenses repairs only in assigned in-flight items or assigned A-page prose. This nonfatal defect is returned in the findings object.

## Blocker

None. No confirmed mathematical defect remained in assigned item or page prose.
