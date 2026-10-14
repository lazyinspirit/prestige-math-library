# Step 3a reader report — batch 3

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Batch: `3`

## Opened inventory

The live run status showed `3a-read` active with no result yet for batch 3. I read the batch manifest and its proof-contract file, then opened both assigned pages and all 11 assigned items.

**A page:** `losses-risk-and-decision-rules`

- Items: `lem-finite-dimensional-integral-jensen-for-convex-loss`, `lem-prior-and-model-kernel-define-joint-law`, `def-loss-function-and-risk`, `def-risk-domination-and-admissibility`, `def-bayes-and-minimax-risk`, `thm-randomization-does-not-improve-convex-action-loss`, `thm-bayes-rule-minimizes-prior-risk`.

**B page:** `losses-risk-and-decision-rules-examples`

- Items: `ex-squared-error-risk-for-bernoulli-observation`, `ex-zero-one-loss-randomization-minimax`, `ex-data-rule-dominates-constant-rule`, `cex-open-action-set-no-minimizer`.

I also opened the five pages listed as prerequisites in the manifest: `estimators-and-randomized-procedures`, `statistical-experiments-models-and-identifiability`, `probability-spaces-random-variables-and-expectation`, `conditional-expectation`, and `convex-and-semicontinuous-functions-on-rn`.

I read the direct dependency items resolved from the assigned item frontmatter, in dependency order, including the supplier proofs relevant to the claims: `cor-additivity-of-the-nonnegative-lebesgue-integral`, `cor-expectation-agrees-with-the-finite-weighted-sum`, `cor-integral-over-a-null-set-vanishes`, `def-axiom-of-choice`, `def-bayes-and-minimax-risk`, `def-borel-sigma-algebra-on-the-extended-real-line`, `def-convex-and-strictly-convex-functionals-on-a-banach-space`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-convex-subset-of-euclidean-space`, `def-countable-choice`, `def-euclidean-inner-product`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-extended-reals`, `def-loss-function-and-risk`, `def-measurable-function-between-measurable-spaces`, `def-measurable-space`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-randomized-procedure-as-a-markov-kernel`, `def-regular-conditional-distribution`, `def-risk-domination-and-admissibility`, `def-standard-borel-space`, `def-statistic-and-estimator`, `def-statistical-experiment`, `def-subgradient-and-subdifferential`, `lem-convex-set-and-closure-have-same-interior-and-boundary`, `lem-extended-reals-complete`, `lem-finite-dimensional-integral-jensen-for-convex-loss`, `lem-prior-and-model-kernel-define-joint-law`, `lem-procedure-action-law-is-measurable`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-bayes-rule-minimizes-prior-risk`, `thm-convex-functions-have-subgradients-at-interior-points`, `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-measurability-of-integration-against-a-kernel`, `thm-monotone-convergence-for-the-integral`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-sections-of-product-measurable-functions-are-measurable`, `thm-strict-separation-of-a-point-from-a-closed-convex-set`, `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`. I additionally opened `def-measure-kernel-and-probability-kernel`, used by the procedure and conditional-distribution definitions.

## Review and verdicts

### `losses-risk-and-decision-rules` — pass

The definitions preserve the distinction between an experiment without parameter measurability and a parameter-measurable kernel model. The joint-law construction establishes the product law and its nonnegative integral identity. The Jensen lemma handles the infinite-integral case, places the barycenter in the relative interior of the support hull when needed, and applies the subgradient theorem only on a finite-valued convex restriction. Its supporting-hyperplane and relative-interior uses agree with the opened supplier proofs. The randomization theorem constructs a measurable barycenter rule on a measurable full-measure set for every parameter and compares nonnegative risks without an integrability assumption on the loss. The Bayes-rule theorem's lifted kernels, posterior disintegration, product Tonelli step, and final almost-everywhere comparison apply under its stated measurability and standard-Borel hypotheses, including when risks are infinite. The definitions of domination, Bayes risk, and minimax risk state their scopes and do not assert unattained minimizers exist.

### `losses-risk-and-decision-rules-examples` — pass

The Bernoulli risk and endpoint/maximum calculations are correct. The two-parameter zero-one example checks all randomized rules through their action probability and obtains minimax value `1/2`. The point-mass model gives the stated domination relation. The open-action counterexample has posterior risk `q(a)=a` on `(0,1)`, whose infimum is zero and is not attained. The page summary matches these items.

## Edits and remaining defects

- Edits: none. I found no confirmed defect requiring an in-scope repair.
- Defects left unedited: none found in the reviewed claims, proofs, witnesses, computations, citations, contracts, or page summaries.
- Blocker: none.
- Since no item was edited, I did not run reflow, precheck, or proof-layout.

## Coverage limitation

I reviewed the assigned items and their 45 direct dependency carriers, plus the additional kernel definition and the five prerequisite page summaries listed above. I did not independently audit every proof in the full transitive dependency graph. No finding is based on those unreviewed deeper proof bodies.
