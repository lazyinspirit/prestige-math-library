# Step 3a reader report — batch 22

## Outcome

I reviewed all 15 items in the batch manifest and both listed pages. I repaired two definition-scope gaps in assigned draft items and clarified the assigned A-page summary. No uneditable mathematical defects or blockers remain.

## Opened inventory

### Listed pages

- `library/statistical-models-and-experiments/instrumental-variables-and-late.md` (assigned A page)
- `library/statistical-models-and-experiments/instrumental-variables-and-late-examples.md` (listed B page)

### Assigned items, read supplier-first

- `def-instrumental-variable-potential-outcomes`
- `def-principal-strata-and-late`
- `def-wald-ratio`
- `lem-iv-observed-contrasts-equal-potential-outcome-contrasts`
- `lem-binary-monotonicity-excludes-defiers`
- `lem-iv-first-stage-is-complier-proportion`
- `lem-iv-reduced-form-is-complier-effect`
- `thm-wald-identifies-a-homogeneous-effect`
- `thm-wald-identifies-the-complier-average-effect`
- `ex-weak-first-stage-wald-ratio-sensitivity`
- `ex-exclusion-violation-distorts-wald-ratio`
- `ex-defiers-break-the-late-ratio`
- `cex-valid-iv-does-not-identify-ate-without-further-restrictions`
- `ex-randomized-encouragement-late-calculation`
- `ex-heterogeneous-effects-late-differs-from-ate`

### Required page context opened

- `potential-outcomes-and-causal-identification` (draft; also inspected `def-potential-outcomes-and-consistency` and `def-causal-average-treatment-effects` as relevant context)
- `statistical-experiments-models-and-identifiability` (published)
- `probability-spaces-random-variables-and-expectation` (published)
- `conditional-expectation` (published)
- `independence-borel-cantelli-and-zero-one-laws` (published)

### Other dependency items consulted

- `def-random-element-and-real-random-variable`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-independent-random-elements`
- `def-independent-sigma-algebras-and-events`
- `lem-measurable-functions-preserve-independence`
- `thm-factorization-of-expectations-for-independent-variables`
- `thm-arithmetic-and-lattice-operations-preserve-measurability`
- `thm-linearity-of-the-lebesgue-integral-on-l-one`
- `def-parametric-statistical-model`
- `def-statistical-experiment`
- `def-observational-equivalence`
- `def-estimand-on-a-statistical-model`
- `def-identifiability-of-an-estimand`
- `thm-rectangle-criterion-for-independent-random-elements`
- `thm-composition-with-borel-functions-preserves-measurability`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `thm-independent-random-elements-have-product-joint-law`
- `thm-change-of-variables-for-expectation`
- `thm-monotone-convergence-for-the-integral`
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`
- `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`
- `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`

## Repairs and evidence

1. In `items/def-principal-strata-and-late.md`, I stated explicitly that ATE and LATE use the common potential outcomes defined under exclusion. The setup introduces `Y(a)` only under exclusion; the added sentence makes the domain of these estimands explicit. The batch proof contract now records that prerequisite, and all 12 contract quotations from the two changed definitions were refreshed.

2. In `items/def-wald-ratio.md`, I restricted the definition to setups with integrable observed outcome `Y`. The setup does not require consistency, and without consistency its integrable potential outcomes do not imply that the separately specified observed `Y` is integrable. The setup's event-conditioned mean is only defined for integrable variables, so the original unconditional formula could be undefined on an allowed setup. The batch proof contract now records this domain condition.

3. In the assigned A-page prose, I changed “relevance makes the observed ratio defined” to distinguish relevance (a nonzero denominator) from integrability of the observed outcome (finite conditional means). The example page summary remains accurate and was not edited.

The downstream batch-22 theorems and examples were checked against both clarified domains. Their hypotheses already supply exclusion where `Y(a)` is used and have integrable observed outcomes wherever the Wald ratio is evaluated. No stale `verification.judge` record was present on either changed item.

Validation for the two changed items:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-principal-strata-and-late.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-principal-strata-and-late.md` — 0 checked, 0 failing (definition-only item).
- `node tools/tsx-run.mjs tools/reflow.mts items/def-wald-ratio.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-wald-ratio.md` — 0 checked, 0 failing (definition-only item).
- `node tools/proof-layout.mjs items/def-principal-strata-and-late.md items/def-wald-ratio.md` — 2 items, 0 proof steps, 0 defects.

## Page verdicts

- `instrumental-variables-and-late`: sound after the summary clarification. Its contrast identities, monotonicity reduction, Wald/LATE identity, homogeneous-effect result, and identifiability conclusions follow from the stated hypotheses.
- `instrumental-variables-and-late-examples`: sound. The six examples' arithmetic and assumptions check; the final two-law witness gives identical observed laws and distinct ATEs.
- `potential-outcomes-and-causal-identification`: the opened summary and the two relevant definitions are consistent with the IV setup. The rest of that page's item proofs were not needed for the batch-22 claims.
- `statistical-experiments-models-and-identifiability`: the opened summary agrees with the inspected model, estimand, observational-equivalence, and identifiability definitions.
- `probability-spaces-random-variables-and-expectation`, `conditional-expectation`, and `independence-borel-cantelli-and-zero-one-laws`: the opened summaries are consistent with the directly used probability, event-mean, and independence definitions. These three pages received context checks, not full item-by-item audits.

## Unedited defects and blockers

- Unedited defects: none found.
- Blocker: none.

## Coverage note

All assigned items and both listed pages were opened. I also opened the directly used suppliers and the specific local results needed to check the independence, product-law, integration, and identifiability steps. A metadata walk through `deps` from the batch items reaches 379 item IDs; I did not independently audit every transitive ancestor in that measure-theory foundation. The dependency pages beyond the specifically consulted items received page-summary/context checks only.
