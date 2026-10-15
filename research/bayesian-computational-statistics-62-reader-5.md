# Step 3a reader report — batch 5

Run: `bayesian-computational-statistics-62`  
Batch: `5`  
Role: independent reader  

## Opened inventory

Assigned pages opened:

- A page `posterior-propriety-and-dominated-bayes-formula`.
- B page `posterior-propriety-and-dominated-bayes-formula-examples`.

Required page context opened:

- `bayesian-models-priors-and-posterior-laws` (draft).
- `dominated-experiments-likelihood-and-sufficiency` (published).

All six assigned items were read in dependency order:

- `def-posterior-evidence-normalizer-and-fiberwise-update`.
- `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`.
- `ex-valid-finite-evidence-and-normalized-update`.
- `ex-prior-predictive-null-fiber`.
- `ex-flat-prior-normal-mean-proper-posterior`.
- `ex-improper-beta-zero-zero-endpoint-divergence`.

The current-run Bayesian-model supplier `def-bayesian-model-as-prior-and-sampling-kernel` and the page-summary target `def-bayesian-posterior-as-regular-conditional-law` were opened. The published supplier items opened for the assigned statements and proofs were `def-measurable-space`, `def-statistical-experiment`, `def-parametric-statistical-model`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-probability-measure`, `def-measure-kernel-and-probability-kernel`, `def-dominated-statistical-experiment`, `def-likelihood-density`, `def-measure`, `def-integral-over-a-measurable-set`, `def-finite-sigma-finite-and-semifinite-measures`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-bayes-formula-for-dominated-kernels`, `def-axiom-of-choice`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `cor-archimedean-reciprocal`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-measure-monotonicity`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-continuous-functions-are-borel-measurable`, `def-borel-sigma-algebra`, `thm-borel-sets-are-lebesgue-measurable`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `lem-normal-density-has-total-mass-one`, `def-standard-normal-and-normal-laws`, and `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`.

The batch-5 manifest and proof-contract file were reviewed as navigation and evidence, not as verdicts.

## Review and page verdicts

**A page — keep.** The summary correctly limits the fiberwise definition to a fixed measurable likelihood section, distinguishes improper-prior updates from prior-predictive probabilities, and states that a dominated prior-predictive formula needs a specified jointly measurable density. The opened dominated-experiment and likelihood-density definitions support its warning that pointwise density versions do not supply joint measurability. The references to the proper-model definition, posterior RCD definition, and published dominated-kernel theorem match their current statements. No page-prose edit was needed.

**B page — keep.** The summary matches the four examples: finite positive evidence, a zero-evidence null fiber with a filler version, the flat-prior normal-mean update, and the improper Beta endpoint divergences. It does not promote an improper-prior update to a prior-predictive or conditional-law claim. No B-page prose edit was made.

The definition and proposition are mathematically sound on their stated domains. The finite evidence and posterior mass calculations are correct. The normal example's completed-square identity, Gaussian normalizer, product construction, and stated normal law agree with the opened measure, product, Tonelli, and change-of-variables suppliers. For the Beta example, the endpoint lower bounds are positive and constant across disjoint intervals, so countable additivity forces infinite evidence at both endpoints.

## Repairs made

- In `ex-valid-finite-evidence-and-normalized-update`, the finite parameter and observation spaces now explicitly carry their full power-set sigma-algebras. The fixed-fiber definition is stated for a measurable parameter space; the added setup makes that interface explicit.
- In `ex-prior-predictive-null-fiber`, both finite spaces now explicitly carry their full power-set sigma-algebras, and the finite sampling-kernel density is written down and identified as jointly measurable. This supplies the hypotheses of `thm-bayes-formula-for-dominated-kernels` directly.
- In `ex-improper-beta-zero-zero-endpoint-divergence`, the proof now cites the reciprocal Archimedean result for the exhaustion by $E_k$, and the Borel definition plus Borel-to-Lebesgue theorem for measurability of continuous sections on $(0,1)$. It also cites the local result establishing Lebesgue measure as a sigma-finite measure before applying the indefinite-integral theorem to construct the prior. The new supplier IDs were added to the item and batch-5 manifest dependency arrays; the affected proof contract now records the supplier statements and revised step 1.1 derivation.
- None of the three changed items contained a `verification.judge` record to remove. No page prose was changed.

Citation review found no inaccurate source attribution. [Bayes Rules!, Chapter 2](https://www.bayesrulesbook.com/chapter-2.html), §§2.1.3–2.1.4 and 2.3.4–2.3.6, gives the finite normalizing-constant and prior-times-likelihood formulas used by the finite examples. [Bayesian Data Analysis, 3rd ed.](https://sites.stat.columbia.edu/gelman/book/BDA3.pdf), §§2.5 and 2.8, treats the known-variance normal mean and the diffuse-prior limit; the exact flat-prior normalizer and density are derived locally in the example. Section 2.8 also identifies the improper Beta(0,0) prior and warns that the posterior is improper for $y=0$ or $y=n$; the local proof supplies the endpoint divergence argument.

## Validation and remaining defects

For each changed item, `tools/reflow.mts` completed and `tools/precheck.mts` passed. The final batched `node tools/proof-layout.mjs` run covered the three changed item paths: 3 items, 7 steps, 0 defects. The current batch manifest dependency arrays match the six assigned item frontmatters.

No confirmed defect remained in the assigned pages, assigned items, or the opened supplier statements. No blocker was found.

## Coverage limitation

I checked the direct logical suppliers used by the assigned arguments and opened their relevant statements and proofs. I did not independently audit every proof in the much larger transitive set-theory and real-analysis supplier closure. No suspected defect in that unopened deeper closure is being reported as an observed finding.
