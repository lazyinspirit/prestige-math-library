# Step 3a reader report — batch 13

Run: `statistical-models-experiments-62`  
Role: reader  
Batch: `13`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/blocking-and-paired-designs.md`
- `library/statistical-models-and-experiments/blocking-and-paired-designs-examples.md`

Assigned A-page items, reviewed supplier-first:

1. `def-randomized-complete-block-design`
2. `lem-rcbd-nested-contrast-model-and-projection`
3. `def-randomized-latin-square-design`
4. `thm-paired-randomization-contrast-moments`
5. `lem-randomly-selected-unit-effect-moments`
6. `prop-rcbd-treatment-block-interaction-confounded-with-residual`
7. `thm-rcbd-treatment-contrast-f-law`

Assigned B-page items, after their A-page suppliers:

- `ex-missing-treatment-is-not-a-complete-block`
- `ex-latin-square-assignment-is-restricted`
- `ex-paired-randomization-contrast-with-heterogeneous-effects`
- `ex-rcbd-interaction-shares-the-residual-subspace`
- `cex-observed-paired-contrast-variance-is-not-effect-heterogeneity`

Opened dependency items needed for the arguments: `def-finite-randomized-treatment-assignment-model`, `def-finite-population-average-treatment-effect-and-weak-null`, `def-finite-probability-space-and-event`, `def-uniform-finite-probability-space`, `def-expectation-on-a-finite-probability-space`, `def-moments-variance-and-covariance`, `thm-covariance-bilinearity-and-symmetry`, `def-statistic-and-estimator`, `def-orthogonal-projection`, `thm-finite-dimensional-orthogonal-decomposition`, `thm-rank-nullity`, `thm-dimension-of-a-linear-subspace`, `cor-dimension-of-a-direct-sum`, `def-row-space-column-space-nullspace-and-matrix-ranks`, `thm-row-rank-equals-column-rank`, `def-axiom-of-choice`, `def-student-t-and-f-laws`, and `thm-gaussian-linear-model-qr-and-exact-t-f-pivots`. The Gaussian linear-model theorem and its full proof were read before the assigned RCBD F-law theorem.

The current batch manifest, proof contracts, batch notes and cross-batch dependency record were consulted as evidence. The live run status was recomputed from `.autopilot/statistical-models-experiments-62`; it reports Step 3a read active, no workers running.

## Edit and evidence

### `lem-randomly-selected-unit-effect-moments`

The statement and proof concluded that the latent effect of the selected treated unit is not a statistic, but the item did not depend on the library definition of a statistic. Its existing argument compares two schedules that give the same observed assignment and response data but different selected-unit effects; that establishes non-functionality, and the definition is the required link from non-functionality to “not a statistic.”

Added `def-statistic-and-estimator` to the item's dependencies and the batch-13 manifest entry. Added Fact F7 and cited it in step 1.1, and clarified that the relevant observed data include both assignment and responses. Updated the item proof contract with the exact F7 citation and the revised step-1.1 derivation. No `verification.judge` record was present, so there was no stale judge record to remove.

Evidence: `def-statistic-and-estimator`, Definition, states that a statistic is a measurable map from the experiment's data space. `def-finite-randomized-treatment-assignment-model`, Definition, identifies the data as assignment plus observed response vector and keeps unassigned potential responses latent. Under assignment `(1,0)`, varying `Y_1(0)` while fixing `Y_1(1)` and `Y_2(0)` leaves the observed data unchanged but changes `S`; therefore no statistic of those data can equal `S` throughout the model.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-randomly-selected-unit-effect-moments.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-randomly-selected-unit-effect-moments.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-randomly-selected-unit-effect-moments.md` — 1 item, 3 steps, 0 defects.

## Mathematical review and page verdicts

### `blocking-and-paired-designs` — pass after the edit

The RCBD definition gives the product-uniform assignment law on `(S_t)^b` and does not infer an outcome, additivity, Gaussian-error or no-interference model from randomization. The balanced projection lemma correctly gives dimensions `t+b−1` and `t+b−1−q`, the double-centered residual space of dimension `(t−1)(b−1)`, and the stated contrast-restriction sum-of-squares reduction. The Latin-square allocation set is finite and nonempty by its cyclic construction; its chosen uniform law is explicit, and its support is distinct from the RCBD product law for `t≥2`.

The paired theorem correctly derives the design mean and observed-contrast variance from its two assignments. The separate selected-effect lemma gives the latent quantity's distinct variance and now cites the statistic definition needed for its non-observability claim. The interaction proposition is an algebraic non-unique decomposition of the realized residual and does not claim universal stochastic nonidentifiability. The exact F-law theorem preserves the separate additive Gaussian model assumptions, AC, the null `Cτ=0`, and positive residual degrees of freedom; the local dimensions and RSS reduction match the nested Gaussian theorem.

Source review: Oehlert, *A First Course in Design and Analysis of Experiments*, Chapter 13 §13.2.2 (pp. 319–321; PDF text around lines 15086–15178), gives the standard additive RCB model and notes that with one observation per treatment/block cell an interaction model has zero pure-error degrees of freedom (lines 15168–15173). Chapter 13 §13.3 (pp. 324–326; lines 15347–15408) gives the row/column balance definition; §13.3.2 (p. 327; lines 15454–15475) discusses randomization constructions. The library's uniform law over all Latin squares is an explicitly chosen law; the item does not attribute that uniform distribution to Oehlert's construction. Holmes and Huber, *Modern Statistics for Modern Biology*, Chapter 13 §13.4.4 (lines 294–300), identifies paired experiments as a special case of blocking and discusses randomizing position. The paired moment formulas themselves are established by the local finite enumeration.

### `blocking-and-paired-designs-examples` — pass

The incomplete-block example compares the assignment image with the full treatment set. The Latin-square example checks both arrays and computes the RCBD point probability as `(3!)^{-3}=1/216`. The worked paired example has contrasts `4` and `2`, mean `3`, and variance `1`. The two-by-two residual array has zero row and column sums and exhibits two valid interaction/error decompositions. The counterexample's observed contrasts are `−9` and `10`, giving variance `90.25`; the selected-effect variance is `1/4`. The witnesses and arithmetic are correct.

The earlier batch notes described an unresolved plan conflict about the observed paired-contrast variance. The current SME-13 entry in `research/plan-statistical-models-experiments-track.md` §SME-13 (line 174) now states `(D_{j1}−D_{j2})^2/4` for the observed contrast and keeps `(δ_{j1}−δ_{j2})^2/4` for the latent selected-unit effect, matching the current items. No plan edit was made.

## Defects not edited

None found in the assigned pages or items. The one confirmed assigned-item defect is repaired above. No finding remains for routing.

## Blocker

None within batch 13. This report does not judge, stamp or self-certify any item or page.

## Coverage note

Both assigned pages and all 12 assigned items were opened, together with the direct mathematical dependencies used by their arguments. I did not audit the complete transitive dependency closure of those suppliers beyond the claims and interfaces needed here.
