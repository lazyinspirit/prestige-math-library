# Step 3a reader report — batch 58

Run: `statistical-models-experiments-62`  
Role: reader  
Batch: `58`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/discrete-sequential-test-validity-and-ville.md` (A page)
- `library/statistical-models-and-experiments/discrete-sequential-test-validity-and-ville-examples.md` (B page)

The A page's prerequisite page summaries were opened as context:

- `library/mathematical-statistics/sequential-testing-and-anytime-valid-inference.md`
- `library/probability/discrete-time-martingales.md`
- `library/probability/stopping-times-and-optional-stopping.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`
- `library/probability/independence-borel-cantelli-and-zero-one-laws.md`

Assigned items, reviewed in supplier order:

- `items/lem-finite-horizon-test-supermartingale-crossing-bound.md`
- `items/thm-discrete-ville-inequality.md`
- `items/ex-independent-uniform-repeated-peeking-inflates-global-null-error.md`
- `items/cex-test-supermartingale-supremum-threshold-need-not-be-attained.md`

Direct dependencies opened for these items:

- `items/def-axiom-of-choice.md`
- `items/def-probability-measure.md`
- `items/def-filtration-and-filtered-probability-space.md`
- `items/def-discrete-stopping-time.md`
- `items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md`
- `items/def-conditional-expectation-given-a-sigma-algebra.md`
- `items/def-conditional-expectation-as-an-ae-class.md`
- `items/def-martingale-submartingale-and-supermartingale.md`
- `items/def-nonnegative-test-supermartingale.md`
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md`
- `items/cor-expectation-linearity-monotonicity-and-modulus-bound.md`
- `items/cor-expectation-of-an-indicator-is-probability.md`
- `items/lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time.md`
- `items/thm-optional-sampling-for-bounded-stopping-times.md`
- `items/thm-continuity-from-below-for-measures.md`
- `items/def-independent-random-elements.md`
- `items/thm-independent-random-elements-have-product-joint-law.md`

Additional prerequisite sources opened to check the cited arguments:

- `items/def-adapted-and-integrable-stochastic-process.md`
- `items/lem-equivalent-event-tests-for-a-discrete-stopping-time.md`
- `items/def-sigma-algebra-at-a-stopping-time.md`
- `items/def-stopped-random-variable-and-stopped-process.md`
- `items/lem-stopped-random-variable-is-measurable-at-the-stopping-time.md`
- `items/cor-nonnegative-predictable-transforms-preserve-submartingale-gains.md`
- `items/thm-taking-out-what-is-known.md`
- `items/thm-basic-algebra-and-order-properties-of-conditional-expectation.md`
- `items/def-random-element-and-real-random-variable.md`
- `items/def-sigma-algebra-generated-by-a-function.md`
- `items/def-independent-sigma-algebras-and-events.md`
- `items/def-law-or-distribution-of-a-random-element.md`
- `items/lem-law-of-a-random-element-is-a-probability-measure.md`
- `items/def-product-sigma-algebra-and-finite-product-sigma-algebras.md`
- `items/thm-rectangle-criterion-for-independent-random-elements.md`
- `items/def-measurable-rectangle.md`
- `items/thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique.md`
- `items/thm-measure-uniqueness-on-a-sigma-finite-pi-system.md`

Also opened `research/statistical-models-experiments-62-batch-58.pages.json`, the batch proof contracts, `briefs/reader.md`, the relevant item/page sections of `SCHEMA.md`, and the cited primary sources below. The contracts and prior author evidence were treated as navigation and comparison material, not as verdicts.

## Review and edit

The finite-horizon lemma correctly stops at the first crossing, applies bounded optional sampling at `0` and `tau_a ∧ N`, and uses nonnegativity on the no-crossing event. The Ville theorem correctly takes an increasing finite-horizon limit for first crossing and uses strictly lower thresholds to handle a supremum that may not be attained. The repeated-uniform example correctly computes the complement probability by the product joint law and verifies the first-rejection stopping-time events. The atomic counterexample correctly defines a probability law and filtration, verifies the conditional-mean martingale, and has supremum-event probability `1/4` but first-crossing probability `0` at `alpha = 1/2`.

One confirmed statement defect was repaired in the assigned counterexample. Its original `## Statement refuted` said that the equality is false for every process and every level, but its construction establishes only one witness to failure. I changed it to state the universal equality that the counterexample refutes, quantifying the null family, test supermartingale, null law, and `alpha`. The witness and proof remain unchanged. I updated the counterexample's endpoint and equivalence-case evidence in `research/statistical-models-experiments-62-batch-58.proof-contracts.json` to bind the corrected universal statement to step 5.1. The item had no `verification.judge` record to remove.

The source locators were checked against the cited texts:

- Howard, Ramdas, McAuliffe, and Sekhon, [*Time-uniform Chernoff bounds via nonnegative supermartingales*](https://arxiv.org/abs/1808.03204), §2.3, Lemma 1 (printed p. 14), and §6.1 (printed pp. 44–45). Lemma 1 gives the crossing probability bound for a nonnegative supermartingale; §6.1 proves it by first hitting, finite truncation, Markov's inequality, bounded optional stopping, and a finite-horizon limit.
- Wolpert, [*Introduction to Martingales* (Duke STA 205 notes)](https://www2.stat.duke.edu/courses/Fall10/sta205/lec/topics/mg.pdf), §1, and §5, Theorem 4 and proof (PDF pp. 11–12; summary p. 13). The cited maximal inequality is stated for martingales, as the item notes; the local supermartingale argument is supplied by the optional-sampling dependency.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/cex-test-supermartingale-supremum-threshold-need-not-be-attained.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-test-supermartingale-supremum-threshold-need-not-be-attained.md` — passed, 1 checked and 0 failing.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-58.proof-contracts.json --strict` — passed, 4/4 items checked, 0 errors and 0 warnings.
- `node tools/proof-layout.mjs items/cex-test-supermartingale-supremum-threshold-need-not-be-attained.md` — passed, 1 item, 5 steps, 0 defects.

No other confirmed defect was found in the reviewed assigned items, direct dependency claims used by their proofs, or page prose. There are no uneditable defects to route.

## Page verdicts

- **A — `discrete-sequential-test-validity-and-ville`: pass.** The summary accurately describes the finite and infinite bounds, the AC assumptions, law-by-law validity, arbitrary stopping-time threshold control, and the distinction between first crossing and a supremum event.
- **B — `discrete-sequential-test-validity-and-ville-examples`: pass.** The summary accurately states the repeated-testing calculation and the non-attainment counterexample without claiming the two events always coincide.

## Blocker and coverage limit

No batch-58 blocker remains. I reviewed the assigned arguments against the direct supplier statements and the prerequisite proofs material to the stopping-time, conditional-mean, and product-law steps. I did not independently re-audit the full transitive foundational closures of the published measure and integration suppliers; no unresolved finding depends on those unread proofs.
