# frontier-29 reader-6 report

Run: `frontier-29`  
Batch: `6`  
Role: independent Step-6 reader

## Scope opened

Control and batch artifacts opened:

- `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`
- `research/frontier-29-dispatch/reader-reader-6.prompt.md`
- `research/frontier-29-beta-6.task.md`
- `research/frontier-29-batch-6.pages.json`
- `research/frontier-29-batch-6.proof-contracts.json`
- `research/frontier-29-batch-6.notes.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`
- `library/probability/probability-spaces-random-variables-and-expectation-examples.md`

Assigned A-page items opened:

- `lem-probability-measure-basic-identities`
- `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`
- `rem-finite-probability-space-definition-agreement`
- `def-random-element-and-real-random-variable`
- `lem-finite-random-variables-are-measurable`
- `def-law-or-distribution-of-a-random-element`
- `lem-law-of-a-random-element-is-a-probability-measure`
- `lem-laws-commute-with-measurable-maps`
- `def-cumulative-distribution-function-of-a-random-variable`
- `thm-probability-law-and-distribution-function-correspondence`
- `def-atom-and-continuity-point-of-a-law`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `lem-expectation-is-independent-of-the-ae-representative`
- `thm-change-of-variables-for-expectation`
- `cor-expectation-agrees-with-the-finite-weighted-sum`
- `cor-expectation-of-an-indicator-is-probability`
- `cor-layer-cake-formulas-for-random-variables`
- `cor-expectation-linearity-monotonicity-and-modulus-bound`
- `def-moments-variance-and-covariance`
- `lem-variance-and-covariance-identities-for-random-variables`
- `thm-jensen-inequality-for-expectation`
- `cor-markov-inequality-for-random-variables`
- `cor-chebyshev-inequality-for-random-variables`
- `cor-holder-inequality-for-random-variables`
- `cor-cauchy-schwarz-for-random-variables`
- `cor-lyapunov-moment-inequality-on-a-probability-space`
- `cor-second-moment-positive-probability-bound`
- `rem-general-inequalities-restrict-to-the-published-finite-ones`
- `thm-normal-equations-for-best-affine-l2-prediction`
- `cor-best-affine-predictor-from-one-random-variable`

Assigned B-page items opened:

- `ex-countable-probability-space-with-geometric-weights`
- `ex-uniform-random-variable-on-zero-one`
- `ex-exponential-random-variable-from-its-tail`
- `ex-discrete-continuous-and-mixed-distribution-functions`
- `ex-expectation-under-a-measurable-transformation`
- `ex-jensen-for-logarithm-and-exponential`
- `ex-markov-and-chebyshev-sharpness`
- `cex-a-random-variable-need-not-have-a-finite-expectation`
- `cex-a-distribution-function-need-not-have-a-density`
- `cex-equality-almost-surely-is-not-pointwise-equality`
- `ex-bertrand-chord-paradox-is-a-model-specification-problem`

Published dependency items opened to verify the current claims:

- `def-probability-measure`
- `def-finite-probability-space-and-event`
- `def-finite-real-random-variable-and-distribution`
- `def-measurable-function-between-measurable-spaces`
- `def-borel-sigma-algebra`
- `def-atom-of-a-measure-on-r`
- `def-nonnegative-lebesgue-integral`
- `def-integrable-real-and-complex-functions-and-their-integrals`
- `def-positive-and-negative-parts-of-a-function`
- `def-expectation-on-a-finite-probability-space`
- `def-measure-null-set-and-almost-everywhere`
- `def-l-p-space-as-a-quotient-by-null-functions`
- `def-linear-combination-and-span`
- `def-integral-of-a-nonnegative-simple-function`
- `prop-measure-monotonicity`
- `prop-measure-of-a-set-difference`
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`
- `prop-the-nonnegative-integral-agrees-with-the-simple-integral`
- `prop-closure-properties-of-measurable-functions-used-by-the-integral`
- `lem-expectation-by-distribution`
- `lem-cauchy-schwarz-for-finite-random-variables`
- `lem-span-is-the-set-of-linear-combinations`
- `thm-finite-and-countable-subadditivity-of-measures`
- `thm-continuity-from-below-for-measures`
- `thm-continuity-from-above-for-measures`
- `thm-finite-inclusion-exclusion-for-measures`
- `thm-measures-on-finite-sigma-algebras-are-atomic`
- `thm-the-lebesgue-integral-respects-almost-everywhere-equality`
- `thm-layer-cake-formula-for-l-p-powers`
- `thm-linearity-of-the-lebesgue-integral-on-l-one`
- `thm-chebyshev-markov-inequality-for-the-integral`
- `thm-jensens-integral-inequality`
- `thm-holder-inequality-for-integrals`
- `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`
- `cor-cauchy-schwarz-inequality-for-l-two`
- `thm-composition-with-borel-functions-preserves-measurability`
- `thm-lebesgue-stieltjes-correspondence-with-distribution-functions`
- `thm-markov-inequality`
- `thm-chebyshev-inequality`
- `thm-finite-second-moment-lower-bound`
- `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`
- `thm-monotone-convergence-for-the-integral`
- `thm-orthogonal-projection-is-the-unique-nearest-point`
- `thm-finite-dimensional-orthogonal-decomposition`
- `def-orthogonal-projection`
- `thm-equality-case-in-holder-inequality`
- `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`

`AGENTS.md` required an independent check of live run state against disk. I ran
the status command from `tools/autopilot/` and confirmed that `.autopilot/`
currently tracks `frontier-23`, not `frontier-29`. I treated that as context
only; it did not block this historical batch read.

## Confirmed defects and edits

### Repaired in-scope item defect

1. `items/thm-normal-equations-for-best-affine-l2-prediction.md`
   - Confirmed defect on current bytes: the Statement asserted existence and
     uniqueness of the minimizing class in `W`, but the proof only derived
     coefficient conditions after already assuming a minimizer existed.
   - Repair made: added the finite-dimensional ambient span
     `V = span([X],[1],[Y_1],...,[Y_n])`, invoked the published orthogonal
     projection theorem to obtain the minimizing class, and then rethreaded the
     later steps so the intercept, normal equations, and singular-covariance
     uniqueness discussion hang from an actual existence argument.

2. `items/cor-best-affine-predictor-from-one-random-variable.md`
   - Confirmed downstream defect on current bytes: the zero-variance branch
     inferred `[Y-\mathbb E[Y]]=0` without a complete local argument.
   - Repair made: rewrote the branch to use the repaired parent theorem exactly
     as stated. When `Var(Y)=0`, every slope solves the one-variable normal
     equation, the `a_1 = 0` solution gives the constant predictor
     `\mathbb E[X]`, and the theorem's uniqueness-of-predictor-class clause
     forces every best affine predictor to agree with that constant almost
     surely.

3. `research/frontier-29-batch-6.proof-contracts.json`
   - Regenerated the two edited contract entries with
     `regen-contract-entries.mjs`.
   - Repaired the stale `zero`-boundary evidence for
     `cor-best-affine-predictor-from-one-random-variable` from `step 1.2` to
     `step 2.1` after the canonical precheck stratification.

No `verification.judge` record was present on the repaired in-flight items, so
there was no stale judge stamp to remove.

## Page verdicts

- `probability-spaces-random-variables-and-expectation`:
  sufficient after the two in-scope proof repairs above.
- `probability-spaces-random-variables-and-expectation-examples`:
  sufficient on current bytes; no B-page edit was needed.

## Remaining uneditable defects

None confirmed in the assigned pages, assigned items, or the published
dependency set opened for this read.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-normal-equations-for-best-affine-l2-prediction.md items/cor-best-affine-predictor-from-one-random-variable.md`
  - pass
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-normal-equations-for-best-affine-l2-prediction.md items/cor-best-affine-predictor-from-one-random-variable.md`
  - pass after adopting the canonical corollary stratification (`2.1`, `2.2`)
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-6.proof-contracts.json thm-normal-equations-for-best-affine-l2-prediction cor-best-affine-predictor-from-one-random-variable`
  - regenerated both entries
- `node tools/proof-contract.mjs research/frontier-29-batch-6.proof-contracts.json --strict --items thm-normal-equations-for-best-affine-l2-prediction,cor-best-affine-predictor-from-one-random-variable`
  - pass
- `node tools/citation-fidelity.mjs research/frontier-29-batch-6.proof-contracts.json --fail-on-missing-quote`
  - pass: no missing quotes, no widening candidates
- `node tools/content-policy.mjs research/frontier-29-batch-6.pages.json`
  - pass: `41 scoped item(s), 0 error(s), 0 warning(s)`
- `git diff --check -- items/thm-normal-equations-for-best-affine-l2-prediction.md items/cor-best-affine-predictor-from-one-random-variable.md research/frontier-29-batch-6.proof-contracts.json research/frontier-29-reader-6.md research/frontier-29-reader-findings-6.json`
  - pass

## Blockers

None.
