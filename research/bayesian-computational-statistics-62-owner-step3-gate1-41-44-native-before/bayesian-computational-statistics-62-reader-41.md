# Step 3a reader report — batch 41

Run: `bayesian-computational-statistics-62`  
Role: reader  
Date: 2026-10-15

## Opened inventory

- Dispatch inputs: `research/bayesian-computational-statistics-62-batch-41.pages.json`, `briefs/reader.md`, `research/bayesian-computational-statistics-62-batch-41.proof-contracts.json`, and `research/bayesian-computational-statistics-62-batch-41.cross-batch-dependencies.json`. I also recomputed the run status from `.autopilot/bayesian-computational-statistics-62`.
- Assigned pages: `library/bayesian-computational-statistics/state-space-filtering-and-predictive-laws.md` and `library/bayesian-computational-statistics/state-space-filtering-and-predictive-laws-examples.md`.
- Assigned items, read in dependency order: `def-state-space-filtering-laws`, `thm-state-space-filtering-and-smoothing-laws-exist`, `alg-recursive-bayesian-filter`, `thm-dominated-state-space-filtering-recursion`, `ex-finite-hidden-markov-filtering-and-smoothing`, `ex-scalar-gaussian-state-space-filter`, and `ex-impossible-observation-zero-evidence-fiber`.
- State-space and conditional-law suppliers opened: `def-axiom-of-choice`, `def-parametric-statistical-model`, `def-standard-borel-space`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-measure-kernel-and-probability-kernel`, `def-regular-conditional-distribution`, `def-conditional-law-given-a-random-element`, `def-general-state-space-model-by-kernels`, `thm-finite-horizon-state-space-kernel-law-exists-uniquely`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, and `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`.
- Filtering and integration suppliers opened: `thm-measurability-of-integration-against-a-kernel`, `thm-bayes-formula-for-dominated-kernels`, `thm-conditional-integration-through-a-regular-conditional-law`, `thm-monotone-convergence-for-the-integral`, `thm-dynkin-pi-lambda`, `def-law-or-distribution-of-a-random-element`, and `thm-change-of-variables-for-expectation`.
- Gaussian and Lebesgue suppliers opened: `def-standard-normal-and-normal-laws`, `thm-gaussian-integral`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-borel-sets-are-lebesgue-measurable`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-lebesgue-measure-is-a-complete-measure`, `prop-measure-monotonicity`, `cor-integral-over-a-null-set-vanishes`, `def-countable-choice`, `lem-ac-supplies-sequential-choices-for-probability-constructions`, `def-translation-of-a-set-in-rn`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-lebesgue-measure-under-dilations-and-reflections`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, and `cor-continuous-functions-are-borel-measurable`.
- Page-level prerequisites opened: `library/bayesian-computational-statistics/posterior-propriety-and-dominated-bayes-formula.md`, with `def-posterior-evidence-normalizer-and-fiberwise-update` and `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`; and `library/statistical-models-and-experiments/state-space-models-as-probability-laws.md`, with its relevant general state-space definition and finite-horizon law theorem listed above.

## Edits and evidence

1. In `items/thm-dominated-state-space-filtering-recursion.md`, I made the joint observation law explicit before using change of variables. The path-law factorization and the predictive identity give the triple-event formula; the fixed-history dominated Bayes identity gives its density form. Taking the state event to be the whole state space identifies the actual law of `(Y_{1:t-1},Y_t)` as `P_{Y_{1:t-1}}(dh) z_t(h,y) nu_t(dy)`. This supplies the measure needed for the subsequent expectation identity and Dynkin extension. The proof contract for steps 4.1 and 5.1 was updated. The item had no `verification.judge` record to remove.

2. In `items/alg-recursive-bayesian-filter.md`, I made the output clause include the initialized `pi_0 = mu_0`, so the return is specified when `T=0` as well as for `1 <= t <= T`. The algorithm boundary entry in its proof contract now records this explicit output. Its direct consumers—the recursion theorem and all three assigned examples—were reviewed; the clarification leaves their claims unchanged. This item had no `verification.judge` record.

## Page and item verdicts

- `state-space-filtering-and-predictive-laws` (A): the definitions preserve the finite-horizon model, conditioning variables, and version conventions. The existence theorem correctly applies standard-Borel RCD existence and factors through the observation histories. The dominated recursion statement is sound under its stated joint-density and sigma-finiteness hypotheses after the proof repair above. The A-page overview accurately describes these results and makes no unsupported density or stability claim.
- `state-space-filtering-and-predictive-laws-examples` (B): the page overview matches the examples. The hidden Markov filter and smoother normalize to `(9/14,5/14)` and `(5/14,9/14)` respectively; the Gaussian convolution, evidence, and selected posterior are correct; and the impossible-observation example correctly distinguishes the supplied filler from a quotient posterior. No B-page prose was edited.
- No remaining defect was found in the assigned items or in the opened page-prerequisite interfaces. No uneditable defect or withdrawal proposal remains.

## Validation and limits

- `thm-dominated-state-space-filtering-recursion`: reflow completed; precheck passes (`1 checked, 0 failing`). An initial precheck requested canonical step spacing and numbering; I applied it and reran the checks.
- `alg-recursive-bayesian-filter`: reflow completed; precheck reported `0 checked, 0 failing` because the definition has no proof-bearing phase body.
- Final formatting command: `node tools/proof-layout.mjs items/alg-recursive-bayesian-filter.md items/thm-dominated-state-space-filtering-recursion.md` — `2 items, 6 steps, 0 defects`.
- The run status was `running` at `3a-read`; it listed unrelated collection/split blockers for batches 23 and 25 and no task-local blocker for batch 41. I did not attempt a gate or change run state.
- The review checked the assigned bodies, their direct mathematical suppliers, and the relevant page-prerequisite interfaces. It did not re-audit every transitive proof dependency behind unrelated published foundational results. No unresolved mathematical uncertainty affected the batch verdicts.
