# Step 3a reader report — batch 45

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `45`

## Opened inventory

### Pages

- `smc-clts-error-and-degeneracy` — [library/bayesian-computational-statistics/smc-clts-error-and-degeneracy.md](../library/bayesian-computational-statistics/smc-clts-error-and-degeneracy.md)
- `smc-clts-error-and-degeneracy-examples` — [library/bayesian-computational-statistics/smc-clts-error-and-degeneracy-examples.md](../library/bayesian-computational-statistics/smc-clts-error-and-degeneracy-examples.md)

### Assigned items

All 21 assigned items were opened and reviewed: suppliers and low-level results first within batch 45, then their consumers.

**A page, `smc-clts-error-and-degeneracy`:**

- `def-dobrushin-coefficient-for-probability-kernels`
- `lem-dobrushin-contraction-from-density-ratios`
- `def-smc-clt-function-classes-and-variance-recursions`
- `lem-smc-backward-operator-oscillation-bound`
- `lem-smc-finite-horizon-empirical-law`
- `lem-smc-multinomial-variance-unrolls`
- `lem-smc-centered-filtering-feynman-kac-contraction`
- `lem-smc-multinomial-resampling-clt`
- `lem-smc-mutation-and-weighted-correction-clt`
- `lem-smc-residual-resampling-clt-away-from-integer-weights`
- `thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights`
- `thm-smc-multinomial-fixed-horizon-clt`
- `thm-smc-residual-fixed-horizon-clt-away-from-integer-weights`

**B page, `smc-clts-error-and-degeneracy-examples`:**

- `ex-smc-multinomial-ancestry-collapse`
- `cex-smc-clt-class-does-not-ensure-target-moment`
- `cex-smc-residual-clt-fails-at-integer-weight-boundary`
- `cex-smc-zero-residual-fraction-can-have-random-offspring`
- `ex-smc-dominant-weight-and-ess`
- `cex-smc-time-bound-fails-with-varying-proposals`
- `ex-smc-bounded-weights-with-mixing`
- `ex-smc-fixed-horizon-clt-does-not-give-time-uniform-accuracy`

### Dependencies opened

Current-run suppliers were opened before assessing their assigned consumers:

- Batch 44: `def-feynman-kac-path-targets-and-normalizers`, `thm-feynman-kac-path-radon-nikodym-weight`, `alg-sequential-importance-resampling`, `alg-multinomial-and-residual-offspring-resampling`, `thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts`, and `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels`.
- Batch 41: `def-state-space-filtering-laws`.
- Batch 31: `alg-self-normalized-importance-sampling` and `def-importance-weight-effective-sample-size`.

Other direct suppliers opened included `def-measure-kernel-and-probability-kernel`, `def-total-variation-distance-for-probability-laws`, `def-axiom-of-choice`, `def-standard-borel-space`, `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `thm-measurability-of-integration-against-a-kernel`, `thm-khinchin-weak-law-for-iid-integrable-variables`, `cor-chebyshev-inequality-for-random-variables`, `cor-markov-inequality-for-random-variables`, `thm-dominated-convergence`, `thm-monotone-convergence-for-the-integral`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `cor-layer-cake-formulas-for-random-variables`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-lindeberg-feller-central-limit-theorem-sufficiency`, `thm-lindeberg-levy-iid-central-limit-theorem`, `thm-slutsky-for-real-random-variables`, `thm-continuous-mapping-theorem`, and `thm-cramer-wold-device`.

## Review and repairs

The definitions, resampling procedures, finite-state computations, Dobrushin contraction, empirical-law limit, covariance unrolling, conditional CLTs, fixed-horizon theorems, and the filtered last-state contraction were checked against their stated domains and hypotheses. The two counterexamples for residual resampling correctly identify the positive-integer floor discontinuity and the zero limiting remainder case. The target-moment counterexample and the varying-proposal variance counterexample are also valid.

Three assigned proofs were repaired:

1. `lem-smc-finite-horizon-empirical-law`, Proof step 6.1: corrected the prose reference to the induction steps. Step 4.2 does not exist; the selected-law integrable-test conclusion is proved at step 5.1. The contract derivation for step 6.1 was updated.
2. `thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights`, Proof step 1.1: replaced the unsupported assertion that every forward image of a bounded test is bounded pointwise by the almost-everywhere weight bound. The proof now establishes membership of the centered backward images in `Psi` by induction from the bounded-image hypothesis and the proposal-a.e. weight bound. The contract derivation for step 1.1 was updated.
3. `lem-smc-mutation-and-weighted-correction-clt`, Proof steps 1.1–1.2: replaced the uncited `L^p`-triangle closure shortcut with the explicit power inequality and recursive class argument. The mutation argument now uses the empirical-law convergence of the integrable conditional `2+delta` moment to isolate the event where all sampled-parent conditional moments are finite; its complement has probability tending to zero. The contract derivations for steps 1.1 and 1.2 were updated.

None of the three edited items contained a `verification.judge` record to remove. Reflow reported all three items unchanged. Precheck passed for each item. The final proof-layout command checked the three changed items together: 16 numbered steps, 0 defects.

## Source checks

The primary CLT reference is [Chopin, “Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference”](https://arxiv.org/pdf/math/0508594). Section 2.3, Theorems 1–2 and equations (3)–(10) (PDF pp. 6–8, especially lines 345–474) state the source recursive variance and function-class formulation. Appendix A.1 (PDF pp. 15–19, lines 1022–1481) gives the conditional mutation, correction, multinomial-selection, and residual-selection induction. The local `Psi` conditions supply target second moments beyond the source `Phi` conditions; the assigned target-moment counterexample verifies why this strengthening is needed. The residual proof’s fractional-part limit also requires excluding positive-integer atoms, as shown by the assigned boundary counterexample.

Chopin §3.3, Theorem 5 (PDF p. 14, lines 961–974) states a time-uniform variance conclusion under true-transition and proposal row-ratio bounds plus bounded likelihood. Appendix A.4 (PDF pp. 22–25, lines 2098–2102) derives the weight bound `upsilon_k <= C^2 * fbar/f`. The assigned finite-state counterexample has both row-ratio constants equal to one and constant likelihood, while `upsilon_t(1)=1/(2 epsilon_t)` diverges. Thus those row-ratio assumptions alone do not control the actual incremental weights; the assigned theorem correctly includes explicit `g <= Dq` domination and an initial-weight bound in its filtering branch.

## Uneditable defect

The B-page Objective contains the run-together text “with exact variance1/4.” The exact variance `1/4` is verified in `ex-smc-bounded-weights-with-mixing`, but the missing separator is in B-page prose, which this assignment does not authorize me to edit. It is recorded as a nonfatal `ill-formed` page finding in the findings JSON.

No other confirmed defect in the assigned items, pages, or current-run suppliers remained after the repairs.

## Page verdicts

- `smc-clts-error-and-degeneracy` — mathematically sound after the three proof repairs; summary agrees with its items and states no uniform finite-particle accuracy claim.
- `smc-clts-error-and-degeneracy-examples` — examples and counterexamples are mathematically sound; the summary is accurate apart from the uneditable missing separator above.

## Blocker and coverage limit

No blocker. I opened all assigned items and their direct suppliers. I did not independently re-audit every transitive foundational dependency beneath the published measure-theory and probability-limit results. The empirical-law lemma was initially opened before several of its external WLLN and kernel suppliers; those suppliers were subsequently opened before completing its review and repair, so strict supplier-first opening order was not achieved for that one item.
