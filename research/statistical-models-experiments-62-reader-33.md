# Step 3a reader report — batch 33

Run: `statistical-models-experiments-62`  
Role: independent reader (`reader-33`)  
Scope: batch `33`

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/logrank-and-weighted-logrank.md` (A)
- `library/statistical-models-and-experiments/logrank-and-weighted-logrank-examples.md` (B)

Assigned items, reviewed in supplier order:

- `def-logrank-risk-set-score-and-test`
- `lem-logrank-risk-set-empirical-fractions-converge`
- `thm-logrank-conditional-risk-set-moments`
- `lem-logrank-risk-fraction-converges`
- `cor-logrank-fisher-randomization-pvalue-valid`
- `lem-logrank-score-martingale-expansion`
- `lem-logrank-variance-estimator-consistency`
- `thm-weighted-logrank-terminal-normal-limit`
- `ex-logrank-crossing-hazards-zero-score`
- `ex-logrank-fisher-randomization-with-unequal-weights`

The eight A-page prerequisite pages were opened: `randomized-treatment-assignment-and-sharp-null-tests`, `event-time-censoring-and-truncation`, `counting-process-compensators-and-integrals`, `independent-subject-terminal-influence-limits`, `estimators-and-randomized-procedures`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `chaining-uniform-laws-and-empirical-process-limits`, and `finite-probability-spaces-and-random-variables`.

All 37 distinct direct item dependencies declared by the assigned items were opened: `def-statistic-and-estimator`, `def-uniform-finite-probability-space`, `def-finite-probability-space-and-event`, `def-identically-distributed-and-iid-random-variables`, `def-random-element-and-real-random-variable`, `def-empirical-process-and-rademacher-process`, `def-covering-packing-bracketing-number-and-metric-entropy`, `def-glivenko-cantelli-class`, `thm-gc-by-bracketing-entropy`, `thm-dominated-convergence`, `def-finite-real-random-variable-and-distribution`, `def-expectation-on-a-finite-probability-space`, `def-indicator-random-variable`, `def-variance-and-covariance`, `thm-linearity-of-expectation`, `lem-indicator-expectation-and-products`, `lem-variance-and-covariance-identities`, `def-finite-randomized-treatment-assignment-model`, `def-fisher-sharp-null-and-predeclared-test-orderings`, `def-p-value`, `thm-fisher-sharp-null-randomization-pvalues-are-valid`, `def-axiom-of-choice`, `def-counting-process-intensity-and-compensator-contract`, `def-l2-counting-process-integral`, `thm-compensated-counting-process-brackets`, `thm-l2-counting-process-integral-isometry`, `def-independent-families-of-event-classes`, `def-covariance-matrix-of-a-random-vector`, `def-op-and-little-op-stochastic-bounds`, `thm-vector-slutsky`, `thm-independent-groups-terminal-influence-limit`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-factorization-of-expectations-for-independent-variables`, `thm-variance-of-a-finite-sum`, `cor-markov-inequality-for-random-variables`, `def-standard-normal-and-normal-laws`, and `def-nelson-aalen-kaplan-meier-greenwood-estimators`.

Additional proof premises opened while checking cross-batch suppliers included `lem-finite-weighted-upper-tail-pvalues-and-randomized-ties`; the direct characteristic-function, multivariate-CLT, continuous-mapping, and Cramér–Wold premises used by `thm-independent-groups-terminal-influence-limit`; and the direct step-integral, bracket, stopping, and isometry premises used by the batch-30 counting-process results. The batch-33 cross-batch dependency file, coverage file, and notes were consulted as navigation/evidence only, not as verdicts.

## Mathematical review and page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `logrank-and-weighted-logrank` | Pass | Its summary accurately distinguishes the finite uniform-subset moments, IID risk-set limits, Fisher randomization validity, and the separate explicit counting-process contract. The normal result is terminal and finite-dimensional; no process CLT is asserted. |
| `logrank-and-weighted-logrank-examples` | Pass | Its summary matches both examples: cancellation of the observed score despite crossing survival curves, and an exact unequal-weight assignment enumeration with a superuniform p-value. |

The logrank definition fixes the pre-event risk convention `U_i >= t_j`, counts event-censor ties as events when `T_i <= C_i`, defines the zero-risk/zero-variance cases, and separates the conditional hypergeometric model from normal calibration and Fisher randomization. The conditional-moments proof derives the mean and variance by subset indicators and covariances; its sequential statement supplies the filtration, conditional uniform-subset law, predictable weights, and integrability needed for orthogonal martingale differences.

The empirical-process lemma verifies the threshold class's pointwise measurability, unit envelope, and finite L1 bracketing entropy. The pooled risk-fraction proof uses the positive lower bound on limiting risk before taking ratios. The Fisher corollary encodes each full record injectively as a real response and applies the proved weighted finite-tail result to the predeclared absolute score under the actual assignment law; its sharp-null scope is not extended to weak average-effect or equal-hazard nulls.

The score expansion proves the compensator cancellation and then controls the risk-fraction and weight replacements by the L2 isometry. The variance proof uses `d_j = 1` under its no-simultaneous-jump and continuous-failure assumptions, then separates the martingale and compensator terms. The terminal theorem constructs the influence as a measurable subject-record function, verifies centering and finite variance by the isometry and Tonelli, establishes the two-group-scaled expansion required by the independent-groups theorem, and handles zero limiting variance separately. The premises do not use independent censoring or a hazard display as a substitute for the explicitly stated martingale contract.

For the crossing-hazards example, integrating the hazards gives `S_1(t) = exp(-2t)`, `S_0(t) = exp(-t)` through `t = 1`, then `S_1(t) = exp(-(t+1))`, `S_0(t) = exp(-(2t-1))`; the survival curves cross at `t = 2`. The stipulated event/censor pattern has positive probability, and the two score contributions are `1/3` and `-1/3`, with variance contributions `2/9` each. The Kaplan–Meier calculations are `3/4` in group 1 after its event and `1/2` in group 0 after its event. For the unequal-weight example, the scores `2/3, 1/6, -5/6`, absolute scores, inclusive tails, and the stated p-value distribution agree with the assignment probabilities `1/2, 1/3, 1/6`.

Authoritative source sections were checked as context for the statements: Lu Tian, [*STAT331 Unit 6: Logrank Test*](https://web.stanford.edu/~lutian/coursepdf/unit6.pdf), PDF p. 3 for the conditional hypergeometric moments and pp. 7–8 for weighted scores; Lu Tian, [*STAT331 Unit 13: Large Sample Theory for 2-Sample Tests*](https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf), PDF pp. 1–6 for the right-censoring setup, risk sets, score representation, and stated asymptotic route; Kulich, [*Censored Data Analysis: Extended Course Notes*](https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf), §5.3 and §5.4 for risk-set moments, weighted-score representation, and asymptotic conditions; and Balakrishnan, [CMU 36-705 Lecture 28](https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf), §28.5, PDF pp. 4–6 for sharp-null imputability and Fisher randomization. The local proof and the finite weighted-tail supplier, rather than an equal-probability permutation shortcut, support the unequal assignment law.

## Edits, defects, and blockers

- Edits: none. No confirmed defect required repair in an assigned item or A-page prose. No item path was changed, so no reflow, precheck, or post-edit proof-layout run was applicable.
- Uneditable defects: none observed in the reviewed assigned subjects or supplier interfaces.
- Page verdicts: both pages pass, as recorded above.
- Blocker: none.

## Coverage limitation

The complete transitive dependency closure was not exhaustively opened or re-audited; current dependency metadata reports 1,717 items in the closure. This review opened every assigned page and item, every declared direct page/item prerequisite, and the additional direct premises needed to check the nontrivial cross-batch Fisher, counting-process, and independent-groups interfaces. No claim is made that every transitive published supplier proof was independently re-proved.
