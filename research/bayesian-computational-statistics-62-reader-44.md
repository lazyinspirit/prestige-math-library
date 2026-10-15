# Step 3a reader report — batch 44

Run: `bayesian-computational-statistics-62`  
Assignment: reader-44, batch `44`  
Scope manifest: `research/bayesian-computational-statistics-62-batch-44.pages.json`

## Opened inventory

- Assigned pages: `feynman-kac-particle-filters`; `feynman-kac-particle-filters-examples`.
- Assigned items: `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels`; `alg-multinomial-and-residual-offspring-resampling`; `def-feynman-kac-path-targets-and-normalizers`; `thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts`; `lem-feynman-kac-path-measures-satisfy-forward-recursion`; `thm-feynman-kac-path-radon-nikodym-weight`; `alg-sequential-importance-resampling`; `thm-sequential-particle-estimator-is-unbiased`; `ex-multinomial-versus-residual-resampling`; `ex-bootstrap-and-informed-proposal-particle-filter`; `cex-particle-filter-proposal-misses-target-support`.
- Required cross-batch pages: `state-space-filtering-and-predictive-laws`; `importance-sampling-and-weight-diagnostics`.
- Required in-run supplier items: `def-state-space-filtering-laws` (batch 41); `alg-importance-sampling` and `thm-ordinary-importance-sampling-is-unbiased` (batch 31).
- Published supplier statements/definitions consulted: `def-axiom-of-choice`; `def-standard-borel-space`; `def-product-sigma-algebra-and-finite-product-sigma-algebras`; `def-measure-kernel-and-probability-kernel`; `thm-ionescu-tulcea-construction-of-a-markov-chain`; `thm-measurability-of-integration-against-a-kernel`; `thm-sections-of-product-measurable-functions-are-measurable`; `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`; `thm-integration-against-a-radon-nikodym-derivative`; `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`; `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`; `thm-composition-with-borel-functions-preserves-measurability`; `thm-arithmetic-and-lattice-operations-preserve-measurability`; `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`; `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`; `thm-monotone-convergence-for-the-integral`; `thm-integration-against-a-density`; `lem-finite-products-of-probability-kernels`; `thm-conditional-expectation-exists-by-radon-nikodym`; `thm-tower-property-of-conditional-expectation`; `def-conditional-expectation-as-an-ae-class`; `def-conditional-expectation-given-a-sigma-algebra`; `thm-change-of-variables-for-expectation`; `thm-linearity-of-the-lebesgue-integral-on-l-one`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`.
- Run artifacts reviewed as evidence, not verdicts: the batch-44 page manifest, current proof contracts, and `research/bayesian-computational-statistics-62-batch-44.cross-batch-dependencies.json`.

Items were read in dependency order. The kernel Radon–Nikodym construction and resampling procedure were checked before their consumers; the path recursion and path-density theorem were checked before the SIR algorithm and unbiasedness theorem; the examples were checked last.

## Repairs

1. `def-feynman-kac-path-targets-and-normalizers`, `## Remarks`: added dependencies and an explicit well-definedness note. Finite-product coordinate maps and composition/arithmetic measurability make the potential product measurable; `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` then establishes that the displayed set function is a measure, allowing infinite total mass.

2. `lem-feynman-kac-path-measures-satisfy-forward-recursion`, proof steps 1.1–2.1: made the last-coordinate integrand's measurability explicit, then applied `thm-integration-against-a-density` to convert integration against `gamma_{k-1}` into the ordered finite-prefix kernel integral. This supplies the missing change-of-density step for the recursion.

3. `alg-sequential-importance-resampling`, `## Definition`: specified the requested horizon, proposal probability and kernels, particle-count domain, scheme choice per transition, and the finite-valued derivative versions used by the instructions. The original definition text remains present; the added input convention makes its variables and admissibility range explicit.

4. `thm-sequential-particle-estimator-is-unbiased`, proof steps 1.2, 2.1, and 3.1: established that the finite resampling, proposal-product, and mixture laws are measurable probability kernels before invoking Ionescu–Tulcea; supplied the measurability needed to pass from a null proposal-path event to almost-everywhere transition avoidance; and wrote the normalizer/normalized-weight algebra that justifies the conditional expected-count calculation.

The batch-44 proof contract was regenerated for the changed proof-bearing items and its definition/algorithm boundary evidence was updated. No changed item had a stale `verification.judge` record. The assigned page prose was not edited.

## Consumer impact check

The clarified SIR inputs were checked against the direct downstream uses in the current run: batch 45 (`def-smc-clt-function-classes-and-variance-recursions`, `lem-smc-finite-horizon-empirical-law`, `lem-smc-mutation-and-weighted-correction-clt`); batch 46 (`alg-particle-backward-simulator`, `alg-rao-blackwellized-particle-filter`, `lem-bootstrap-particle-filter-weak-consistency`, `alg-fixed-lag-particle-smoother`); and batch 47 (`alg-pmmh`, `def-particle-gibbs-extended-target`, `alg-conditional-particle-gibbs`, `thm-particle-gibbs-selected-path-marginal`, `thm-particle-gibbs-conditional-sweep-is-gibbs`, `def-particle-gibbs-backward-simulation-extended-target`, `alg-particle-gibbs-backward-simulation`). Their relevant clauses use a finite requested horizon and compatible proposal kernels; no interface conflict was found. Strict proof-contract checks passed for the affected consumer selections: batch 45, 3/3; batch 46, 4/4; batch 47, 7/7.

## Page verdicts

- `feynman-kac-particle-filters`: **pass after repairs**. The target measure, forward recursion, path Radon–Nikodym weight, resampling counts, and SIR unbiasedness claims are supported under their stated finite-horizon and domination hypotheses. No accuracy, consistency, or uniform-in-time claim is made.
- `feynman-kac-particle-filters-examples`: **pass**. The offspring means and marginal variances are correct for the displayed five-coordinate vector; the finite-state bootstrap/informed proposal calculations and the missing-support counterexample are correct and remain appropriately scoped.

No uneditable mathematical defect was found in the assigned pages, items, or required dependency statements. No item or page needs withdrawal.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md`: unchanged for all four repaired items.
- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`: pass for both proof-bearing repaired items; definitions and algorithm correctly report zero proof sections to check.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-44.proof-contracts.json --strict`: 0 errors, 0 warnings, 11/11 items checked.
- Final `node tools/proof-layout.mjs` on all four repaired item paths: 4 items, 8 steps, 0 defects.

## Blockers and limits

The reader edits add published dependencies to three assigned carriers (`def-feynman-kac-path-targets-and-normalizers`, `lem-feynman-kac-path-measures-satisfy-forward-recursion`, and `thm-sequential-particle-estimator-is-unbiased`). The frozen batch-44 manifest was left unchanged because manifest editing is outside this reader's carrier scope; its dependency mirrors must be reconciled by the run owner before a strict manifest/scope gate.

At 2026-10-15 12:09:52 UTC, `autopilot status` reported the run **PAUSED**, no dispatch in flight, batch 44 not yet ingested, and the existing blockers `3a-collect` (collect-23 failed 3x, covers 23) and `3a-split` (split-25 failed 3x, covers 25). This reader did not change run state. The out-of-batch consumer check was limited to clauses that use the SIR interface; it was not a full mathematical audit of batches 45–47.
