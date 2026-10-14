# Step 3a reader report — batch 4

Run: `mathematical-statistics-foundations-37`  
Batch: `4`  
Run status checked from `.autopilot/mathematical-statistics-foundations-37`: active at `3a-read`.

## Opened inventory

Assigned pages:

- `dominated-experiments-likelihood-and-sufficiency` — [library/mathematical-statistics/dominated-experiments-likelihood-and-sufficiency.md](../library/mathematical-statistics/dominated-experiments-likelihood-and-sufficiency.md)
- `dominated-experiments-likelihood-and-sufficiency-examples` — [library/mathematical-statistics/dominated-experiments-likelihood-and-sufficiency-examples.md](../library/mathematical-statistics/dominated-experiments-likelihood-and-sufficiency-examples.md)

Assigned items were read in dependency order:

1. `lem-positive-lebesgue-components-of-a-positive-measure`
2. `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`
3. `def-dominated-statistical-experiment`; `def-likelihood-ratio-as-rn-derivative`
4. `def-likelihood-density`; `thm-likelihood-ratio-change-of-measure`
5. `thm-equivalent-dominators-give-equivalent-likelihood-ratios`; `cex-singular-pair-has-no-full-likelihood-ratio`; `ex-bernoulli-likelihood-ratio-and-change-of-measure`

Also opened the in-run batch-1 supplier `def-statistical-experiment` and its page `statistical-experiments-models-and-identifiability`, plus the required pages `the-radon-nikodym-theorem-and-lebesgue-decomposition` and `measurable-functions-and-simple-approximation`.

Direct published item suppliers opened for this batch: `cor-integral-over-a-null-set-vanishes`; `def-absolutely-continuous-with-respect-to-a-positive-measure`; `def-axiom-of-choice`; `def-counting-measure`; `def-extended-real-valued-measurable-function`; `def-finite-sigma-finite-and-semifinite-measures`; `def-integrable-real-and-complex-functions-and-their-integrals`; `def-measurable-space`; `def-measure`; `def-measure-with-density`; `def-mutually-singular-measures`; `def-positive-and-negative-parts-of-a-function`; `def-probability-measure`; `def-radon-nikodym-derivative`; `def-sigma-algebra`; `def-total-variation-of-a-signed-or-complex-measure`; `prop-closure-properties-of-measurable-functions-used-by-the-integral`; `prop-counting-measure-is-a-measure`; `prop-order-and-scalar-rules-for-the-nonnegative-integral`; `thm-chain-rule-for-radon-nikodym-derivatives`; `thm-integration-against-a-density`; `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`; `thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures`; `thm-linearity-of-the-lebesgue-integral-on-l-one`; and `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`. I also checked `def-signed-measure` to verify the positive-measure instances used by the signed-measure suppliers.

Read the batch-4 pages manifest, proof-contract file, authoring notes, cross-batch dependency input, and source-coverage record. These were treated as review evidence, not as judgments.

## Review and edit

The definitions preserve the sample space, parameter quantifiers, sigma-finite domination, almost-everywhere status of density classes, and the absence of parameter measurability. The general change-of-measure theorem correctly requires absolute continuity; the equivalent-dominator theorem gives pairwise almost-everywhere conclusions and does not assert a uniform exceptional set for uncountable parameter sets. The singular-pair counterexample has a valid finite witness. The local positive-component and nonnegative-density arguments follow from the stated decomposition and Radon–Nikodym hypotheses.

Repaired `ex-bernoulli-likelihood-ratio-and-change-of-measure`, Proof 1.2, [items/ex-bernoulli-likelihood-ratio-and-change-of-measure.md](../items/ex-bernoulli-likelihood-ratio-and-change-of-measure.md): the old sentence identified the quotient of point masses with the Radon–Nikodym derivative without verifying the defining integral identity, and cited the likelihood-density definition for the point-mass density calculation. The revised step checks both facts directly on every subset of the two-point space: the displayed masses integrate to each `P_i`, and the quotient integrates against `P_0` to `P_1`. Synchronized the `step-1-2` derivation in [research/mathematical-statistics-foundations-37-batch-4.proof-contracts.json](mathematical-statistics-foundations-37-batch-4.proof-contracts.json). No `verification.judge` record was present to remove.

## Page verdicts

- `dominated-experiments-likelihood-and-sufficiency`: pass. Its summary accurately distinguishes domination, selected density versions, likelihoods, singular components, change of measure, and pairwise almost-everywhere equivalence under a change of dominator.
- `dominated-experiments-likelihood-and-sufficiency-examples`: pass. Its summary accurately describes the finite Bernoulli calculation and the disjoint point-mass obstruction to a full density.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-bernoulli-likelihood-ratio-and-change-of-measure.md` — reflowed after the initial repair; final pass reported unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-bernoulli-likelihood-ratio-and-change-of-measure.md` — pass; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-bernoulli-likelihood-ratio-and-change-of-measure.md` — 1 item, 3 steps, 0 defects.

## Uneditable findings and blockers

None. No assigned-page defect or defect in a direct dependency was left unresolved. No blocker.

## Coverage note

All assigned items and pages, the in-run supplier used by this batch, the three required prerequisite pages, and the direct item dependencies needed for the reviewed claims were opened. The transitive dependency proofs beneath established published measure-theory suppliers were not re-audited wholesale.
