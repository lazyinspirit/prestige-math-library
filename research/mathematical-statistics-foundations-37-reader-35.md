# Step 3a Reader Report — Batch 35

Run: `mathematical-statistics-foundations-37`  
Batch: `35`  
Role: reader (`reader-35`)

## Opened inventory

Assigned pages:

- `library/mathematical-statistics/sequential-testing-and-anytime-valid-inference.md` (A page)
- `library/mathematical-statistics/sequential-testing-and-anytime-valid-inference-examples.md` (B page)

Assigned items, read in dependency order:

- `def-nonnegative-test-supermartingale`
- `def-confidence-sequence`
- `thm-villes-inequality`
- `thm-mixture-of-null-supermartingales`
- `def-anytime-valid-p-value-process`
- `thm-anytime-validity`
- `thm-confidence-sequence-by-test-inversion`
- `ex-likelihood-ratio-test-supermartingale`
- `cex-process-valid-under-one-null-but-not-composite-null`
- `ex-data-dependent-threshold-crossing`

Opened relevant item dependencies: `def-choice-function`, `def-axiom-of-choice`, `def-filtration-and-filtered-probability-space`, `def-adapted-and-integrable-stochastic-process`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-expectation-as-an-ae-class`, `def-martingale-submartingale-and-supermartingale`, `def-discrete-stopping-time`, `thm-optional-sampling-for-bounded-stopping-times`, `thm-continuity-from-below-for-measures`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-randomized-procedure-as-a-markov-kernel`, `lem-procedure-action-law-is-measurable`, `def-randomized-test`, `lem-measurable-rejection-function-defines-randomized-test`, `def-p-value`, `def-test-size-and-power`, and `thm-p-value-superuniformity`. For bounded optional sampling, I also read its directly used stopping-sigma-algebra, stopped-variable measurability, bounded martingale-transform, and nonnegative submartingale-transform suppliers.

Opened the five required-page summaries listed by the A-page manifest: `estimators-and-randomized-procedures`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `discrete-time-martingales`, `stopping-times-and-optional-stopping`, and `martingale-inequalities-and-convergence`.

Also inspected the batch manifest, coverage register, cross-batch dependency record, proof contracts, and batch notes. The current `thm-p-value-superuniformity` body includes the nonempty disjoint alternative condition for its level-test conclusion; the older note describing that condition as missing is stale for the current source.

## Review and verdicts

### A page: `sequential-testing-and-anytime-valid-inference`

**Verdict: sound.** The page objective matches its seven listed items. Ville's proof bounds actual threshold hits by bounded stopping and then takes the increasing-event limit; the separate lower-threshold argument correctly handles a supremum that is not attained. The mixture statement supplies product measurability, uses the positive part before integration, and modifies each infinite-integral set to obtain a common finite real-valued version. The p-value transform is defined on all real versions and its fixed-time, stopped-time, and endpoint claims follow from the crossing bound. The inversion proof establishes fixed-parameter membership measurability and simultaneous coverage without imposing joint measurability on the parameter index.

No defect found in the definitions, statements, facts, proofs, or page summary.

### B page: `sequential-testing-and-anytime-valid-inference-examples`

**Verdict: sound.** The finite likelihood-ratio example uses the correct prefix ratios and fair-coin conditional mean. In the two-look example only two heads reach level 2, with probability (1/4); the displayed stopping-time events are measurable at their stated times. The composite-null counterexample satisfies the supermartingale inequality under Bernoulli((1/4)) and violates it under Bernoulli((3/4)), as claimed. The page summary matches these examples.

No defect found in the examples or page summary.

## Edits and remaining defects

- Edits: none. No confirmed defect in an assigned carrier required repair. Accordingly, item reflow, precheck, and proof-layout were not run.
- Defects not editable: none found among the reviewed dependency statements and proofs.
- Blocker: none.

## Coverage limitation

I reviewed the assigned carriers, their relevant direct dependencies, the exact optional-sampling helper results used in the Ville argument, and the required-page summaries. I did not re-audit the entire transitive foundational library behind the imported measure-theory and conditional-expectation supplier theorems; their exact statements and the portions of their proofs used here were sufficient for this batch review.
