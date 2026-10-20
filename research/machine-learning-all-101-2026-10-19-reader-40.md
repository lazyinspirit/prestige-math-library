# Step 3a reader report — batch 40

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Scope: batch `40`

## Opened inventory

Pages:

- `library/machine-learning/stochastic-gradient-descent-for-learning.md` (A)
- `library/machine-learning/stochastic-gradient-descent-for-learning-examples.md` (B)

Assigned items, read in dependency order:

- `lem-sgd-trajectory-integrability`
- `lem-independent-finite-random-index-extension`
- `alg-stochastic-gradient-descent`
- `alg-minibatch-stochastic-gradient-descent`
- `thm-stochastic-direction-expected-average-stationarity`
- `thm-nonconvex-sgd-random-iterate-stationarity`
- `ex-constant-step-sgd-noise-floor`
- `ex-empirical-risk-sgd-oracle-is-unbiased`
- `ex-sgd-biased-direction-violates-alignment`

Direct item suppliers read in dependency order:

`def-axiom-of-choice`, `def-derivative`, `def-euclidean-inner-product`, `def-measure`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-induction-principle`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-conditional-expectation-as-an-ae-class`, `def-probability-measure`, `lem-geometric-sequence-null`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-monotone-convergence-for-the-integral`, `def-filtration-and-filtered-probability-space`, `def-random-element-and-real-random-variable`, `def-supervised-learning-problem`, `lem-l-smoothness-descent-inequality`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-tower-property-of-conditional-expectation`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-taking-out-what-is-known`, `def-adapted-and-integrable-stochastic-process`, `def-conditional-variance`, `def-population-and-empirical-risk`, `def-martingale-difference-sequence`, `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`, `def-stochastic-gradient-oracle-and-unconstrained-update`, `thm-stochastic-gradient-biased-noise-floor`, and `thm-stochastic-gradient-nonconvex-randomized-iterate-bound`.

For the `justified_by` support of `def-population-and-empirical-risk`, I also read `lem-population-and-empirical-risk-are-measurable` and its immediate suppliers `def-measurable-function-between-measurable-spaces`, `def-extended-real-valued-measurable-function`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, and `prop-closure-properties-of-measurable-functions-used-by-the-integral`.

I read `research/machine-learning-all-101-2026-10-19-batch-40.source-evidence.json` and `research/machine-learning-all-101-2026-10-19-batch-40.proof-contracts.json`. The source-evidence file lists source locators; it does not contain rendered item bodies. I reviewed the current item and page carriers directly. No TikZ or tikzcd diagrams occur in the assigned items or pages, and none is needed for these scalar/vector update and expectation arguments.

## Mathematical review

- `lem-sgd-trajectory-integrability`: the finite second-moment induction follows from the update and the quadratic growth consequences of an L-smooth gradient. The objective bound handles both signs and covers `L=0`.
- `lem-independent-finite-random-index-extension`: the finite-slice construction defines a probability measure, makes the selector independent of the lifted original events, and proves the expectation formula first for simple nonnegative variables, then by monotone convergence and positive/negative parts. The construction needs no choice axiom.
- `alg-stochastic-gradient-descent`: the definition specifies the initial measurable iterate, finite positive stepsizes, adapted oracle outputs, exact update loop and trajectory output. It makes no unsupported unbiasedness, variance or independence claim.
- `alg-minibatch-stochastic-gradient-descent`: the definition averages directions evaluated at the same iterate and applies the update; it does not infer unbiasedness or variance reduction from batch size alone.
- `thm-stochastic-direction-expected-average-stationarity`: the conditional second-moment bound, smoothness descent, alignment estimate and telescoping argument support both the constant-step bound and the diminishing-step weighted average. No convexity or minimum attainment is used.
- `thm-nonconvex-sgd-random-iterate-stationarity`: each weight `2γ_k−Lγ_k²` is positive on the stated interval. The descent sum yields the stated weighted law and bound; the constant-step branches, including zero-noise and zero-gap cases, check out.
- `ex-constant-step-sgd-noise-floor`: the mean and centered second-moment recurrences give the displayed formula. The limit is positive in the stated unbiased, positive-noise case; it can be zero when both bias and noise vanish. The title was narrowed accordingly.
- `ex-empirical-risk-sgd-oracle-is-unbiased`: finite counting gives mean `θ_t−ȳ` and variance `v_S/b`; the fixed empirical objective has gradient Lipschitz constant one and infimum `v_S/2`, yielding the displayed bound under the expected-average theorem.
- `ex-sgd-biased-direction-violates-alignment`: the deterministic recurrence gives `x_t≠0`, so the direction has strictly negative gradient alignment at every iterate, as claimed.

The empirical-risk and supervised-problem draft suppliers were checked as current dependencies, including the population-risk measurability justification. Their definitions and the cited hypotheses support the assigned uses.

## Edits and evidence

- In `items/lem-independent-finite-random-index-extension.md`, corrected the Ghadimi–Lan locator from “Theorem 1(a)” to “Theorem 2.1(a).” The cited paper labels the weighted randomized-iterate result Theorem 2.1(a), with its output weights in (2.3), bound in (2.4), and proof in (2.8)–(2.11), §2.1, PDF pp. 4–7: <https://arxiv.org/pdf/1309.5549>.
- In `items/thm-nonconvex-sgd-random-iterate-stationarity.md`, corrected the same theorem number and the associated reference to Corollary 2.2. The paper’s §2.1 statement and proof give the weighted output law and stationarity bound; Corollary 2.2 gives the stepsize comparison used by the reference: <https://arxiv.org/pdf/1309.5549>.
- In `items/ex-constant-step-sgd-noise-floor.md`, changed the title to “Constant-step SGD can have a nonzero noise floor,” matching the formula and its stated positive-noise qualification.
- In `items/ex-empirical-risk-sgd-oracle-is-unbiased.md`, made the deterministic initial parameter, constant stepsize, finite uniform sampling law, batch-index coordinates, filtration and update explicit. Named the population law `P_pop` separately from the training-sampling law `Q` and wrote expectations with respect to `Q`. This supplies the hypotheses used by the theorem application and removes ambiguity about the conditioning sigma-algebras.

The other checked source passages were Léon Bottou, Frank E. Curtis and Jorge Nocedal, *Optimization Methods for Large-Scale Machine Learning*, §4.1 Assumptions 4.1/4.3 and Lemmas 4.2/4.4, and §4.3 Theorems 4.8/4.10 with proofs (printed pp. 21–34; PDF pp. 22–33): <https://arxiv.org/pdf/1606.04838>. They support the smoothness descent and expected-average interfaces under their stated moment/alignment hypotheses. MIT 6.7220/15.084 Lecture 15, Theorem L15.1 and its finite-horizon descent/telescoping derivation (PDF pp. 3–4), provides a second source for the unbiased descent route: <https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf>.

No proof-step text or fact list changed. The existing step-level contracts therefore remained applicable; strict validation passed for the four edited proof-bearing items. None of those items had a `verification.judge` record to remove.

## Page verdicts

- `stochastic-gradient-descent-for-learning` (A): **pass**. Frontmatter only, `page_layout: compact-v1`, and its six-item inventory matches the manifest. No summary body is present.
- `stochastic-gradient-descent-for-learning-examples` (B): **pass**. Frontmatter only, `page_layout: compact-v1`, and its three-example inventory and requirement on the A page match the manifest. No summary body is present.

No page prose was edited.

## Validation

- `reflow.mts`: unchanged for all four edited items; rerun after the final empirical-example edit.
- `precheck.mts`: pass for all four edited items; rerun for the empirical example after its final edit.
- `proof-contract.mjs --strict`: `ok: true`, zero errors or warnings for the four edited proof-bearing items.
- Final `proof-layout.mjs` invocation on all four changed item paths: 4 items, 20 steps, 0 defects.

## Uneditable defects

None identified in the assigned items, pages, or the inspected supplier claims needed for these proofs.

## Blocker and coverage limit

The final live run status reported no active blocker.

I reviewed all assigned items and pages, the direct suppliers used by their claims, and the immediate well-definedness support for the population-risk definition. I did not independently audit every transitive prerequisite behind those suppliers. The cited current local statements and proofs were checked for the specific uses recorded above.
