# Step 3a Reader Report — Batch 17

Run: `statistical-models-experiments-62`  
Role: reader  
Batch: `17`

## Run state and opened inventory

The on-disk autopilot status reported this run as `running`, at `3a-read`, with no worker active and no result artifact yet for batch 17. The assigned manifest lists one A page, one B page, eleven A-page items, and three B-page items.

Assigned pages opened:

- `library/statistical-models-and-experiments/power-and-sample-size-planning.md`
- `library/statistical-models-and-experiments/power-and-sample-size-planning-examples.md`

Assigned items opened in dependency order:

- `lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power`
- `lem-iid-normal-sample-mean-law`
- `lem-least-feasible-sample-size-exists`
- `lem-ceiling-and-least-positive-integer-threshold`
- `def-power-and-sample-size-planning-specification`
- `prop-known-variance-normal-two-sided-z-test-power`
- `alg-finite-candidate-power-sample-size-search`
- `thm-known-variance-normal-z-test-power-and-minimum-sample-size`
- `thm-finite-candidate-power-sample-size-search-correctness`
- `alg-positive-integer-power-sample-size-search`
- `thm-positive-integer-power-sample-size-search-correctness`
- `cex-no-finite-query-universal-sample-size-infeasibility-detector`
- `ex-two-sided-normal-z-power-includes-both-tails`
- `ex-known-variance-normal-z-sample-size-and-sensitivity`

The 39 direct supplier items named by the current batch manifest were opened at their relevant definition or statement sections: `cor-continuous-functions-are-borel-measurable`, `cor-integral-over-a-null-set-vanishes`, `def-axiom-of-choice`, `def-characteristic-function-of-a-real-random-variable`, `def-countable-choice`, `def-cumulative-distribution-function-of-a-random-variable`, `def-dirac-measure`, `def-independent-random-elements`, `def-measurable-function-between-measurable-spaces`, `def-natural-numbers`, `def-ordered-field`, `def-randomized-test`, `def-standard-normal-and-normal-laws`, `def-statistical-experiment`, `def-test-size-and-power`, `lem-axiom-of-choice-implies-countable-choice`, `lem-characteristic-function-of-a-normal-law`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `lem-integer-part`, `lem-measurable-rejection-function-defines-randomized-test`, `lem-nat-discrete`, `lem-nat-embeds-int`, `lem-normal-density-has-total-mass-one`, `lem-of-add-order`, `lem-probability-measure-basic-identities`, `prop-dirac-measure-is-a-probability-measure`, `thm-algebra-of-continuous-functions`, `thm-complex-exponential-addition-and-real-extension`, `thm-composition-of-continuous-functions`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `thm-derivative-of-exponential`, `thm-extreme-value-r`, `thm-int-ordered-ring`, `thm-intermediate-value`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-substitution-for-improper-integrals`, `thm-uniqueness-of-a-law-from-its-characteristic-function`, and `thm-well-ordering-principle`.

The seven page prerequisites in the A-page manifest were opened: `finite-populations-and-sampling-designs`, `randomized-treatment-assignment-and-sharp-null-tests`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `weak-convergence-tightness-and-representation`, `characteristic-functions-inversion-and-continuity`, `reeb-stability-and-global-foliation-constructions`, and `central-limit-theorems`.

## Review and repairs

### A page: `power-and-sample-size-planning` — pass after repair

At [line 22](../library/statistical-models-and-experiments/power-and-sample-size-planning.md), the summary described the ascending search's termination without stating its exact, per-size terminating evaluator premise, and did not distinguish that unbounded branch from the bounded and certified-infeasibility modes. I added the evaluator condition and identified the unbounded branch. The condition is explicit in [`alg-positive-integer-power-sample-size-search`](../items/alg-positive-integer-power-sample-size-search.md#definition) and its correctness theorem. The remaining summary accurately describes the full feasible-set rule, finite-list guarantee, and restrictions on `none`.

The normal-model, design-based-context, and weak-convergence qualifications match the opened page summaries and item statements. The finite-population and assignment pages describe design-based probability laws and do not claim Gaussian errors; the weak-convergence page is not used to replace the exact finite-sample normal calculation.

### B page: `power-and-sample-size-planning-examples` — pass

The two `ex-` items give the two-tail calculation and the known-variance sample-size/sensitivity calculations stated in the page summary. The separate oracle counterexample proves the finite-query obstruction, including for nondecreasing feasibility oracles, and its constructed statistical experiments realize the Boolean oracle values exactly. No B-page prose was edited.

### Item repair: `prop-known-variance-normal-two-sided-z-test-power` — pass after repair

At [lines 41–43](../items/prop-known-variance-normal-two-sided-z-test-power.md), the statement specified only a simple null although [`def-test-size-and-power`](../items/def-test-size-and-power.md#definition) requires a nonempty alternative disjoint from the null. It also called the value at every `delta in R` power at an alternative, although `delta = 0` is the null parameter. I stated the two-sided alternative, described the formula as the power function evaluated at any parameter, and distinguished the zero-shift null rejection probability from power at a nonnull alternative. I aligned Fact F6 and the proof's final description with that convention.

The affected contract is updated in [`statistical-models-experiments-62-batch-17.proof-contracts.json`](./statistical-models-experiments-62-batch-17.proof-contracts.json), boundary evidence for empty and zero/degenerate cases. The direct consumer `ex-two-sided-normal-z-power-includes-both-tails` uses `delta = sigma > 0`, so its alternative and conclusion remain valid under the repaired statement.

All other assigned definitions, proofs, constructions, algorithms, witnesses, computations, and examples were sound under their stated hypotheses. The finite-list search and all-size search theorems match their procedures' exact-evaluator and stopping-certificate conditions. No other assigned defect remains.

## Citation checks

- Gary W. Oehlert, *A First Course in Design and Analysis of Experiments*, Chapter 7, printed pp. 149–161: [PDF](https://users.stat.umn.edu/~gary/book/fcdae.pdf). The assigned references span §§7.1–7.7; the opened contents locates those sections on pp. 149–161. Section 7.1 (pp. 149–150) states the general sample-size and power-planning framework. The local proofs supply the exact normal-tail and least-integer arguments.
- NIST/SEMATECH, §7.2.2.2 (the item citation lists PDF pp. 2019–2021): [official section](https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm). The opened official section's known-standard-deviation subsection gives the usual one- and two-sided normal sample-size formulas and separately notes the unknown-standard-deviation t formulation. The local theorem handles the full stated quantile range, including a nonpositive quantile sum.
- Rick Durrett, *Probability: Theory and Examples*, 5th ed., §3.3, Example 3.3.5 (printed p. 127) and Corollary 3.3.13 (printed p. 130): [PDF](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf). The example gives the standard-normal characteristic function; Theorem 3.3.2 supplies the independent-sum product rule and the corollary gives the normal-sum law.
- Emily Riehl, *Category Theory in Context*, Example 4.1.7 (printed p. 134): [PDF](https://emilyriehl.github.io/files/context.pdf). It identifies ceiling and floor as the adjoints to the inclusion of ordered sets `Z -> R`, including the floor order equivalence used by the ceiling lemma.

## Validation and disposition

- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/prop-known-variance-normal-two-sided-z-test-power.md` — unchanged.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts items/prop-known-variance-normal-two-sided-z-test-power.md` — PASS, direct; 1 checked, 0 failing.
- Final proof layout: `node tools/proof-layout.mjs items/prop-known-variance-normal-two-sided-z-test-power.md` — 1 item, 3 steps, 0 defects.
- Uneditable defects remaining: none.
- Blocker: none.

## Coverage limitation

This review covers all assigned item bodies, both assigned pages, the direct supplier claim/definition interfaces used by the assigned arguments, the seven required page summaries, and the cited source locations above. It does not audit every transitive proof in the 1,223-item dependency closure or the individual items placed on those seven context pages.
