# Step 3a reader report — batch 31

Run: `bayesian-computational-statistics-62`  
Role: reader  
Assigned batch: `31`

## Opened inventory

### Assigned pages

- `importance-sampling-and-weight-diagnostics` — `library/bayesian-computational-statistics/importance-sampling-and-weight-diagnostics.md`
- `importance-sampling-and-weight-diagnostics-examples` — `library/bayesian-computational-statistics/importance-sampling-and-weight-diagnostics-examples.md`

### Assigned items, read in dependency order

- Level 0: `alg-importance-sampling`; `alg-self-normalized-importance-sampling`.
- Level 1: `thm-ordinary-importance-sampling-is-unbiased`; `def-importance-weight-effective-sample-size`.
- Level 2: `thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment`; `thm-self-normalized-importance-sampling-is-consistent-under-finite-moments`; `ex-ordinary-and-self-normalized-importance-sampling-on-two-point-space`; `cex-importance-weight-ess-misses-target-region`.
- Level 3: `thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse`; `cex-ordinary-importance-sampling-infinite-variance-under-light-tailed-proposal`.

### Additional dependency pages

- `iid-monte-carlo-integration-and-error` — `library/bayesian-computational-statistics/iid-monte-carlo-integration-and-error.md` (draft prerequisite page).
- `delta-method-and-asymptotic-normality` — `library/mathematical-statistics/delta-method-and-asymptotic-normality.md` (published prerequisite page).

### Additional dependency items

The directly used measure, expectation, measurability, IID, moment, and choice suppliers opened were `thm-integration-against-a-density`, `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-change-of-variables-for-expectation`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-identically-distributed-and-iid-random-variables`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `def-moments-variance-and-covariance`, `def-standard-normal-and-normal-laws`, and `def-axiom-of-choice`.

Other direct suppliers opened were `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `lem-measurable-functions-preserve-independence`, `cor-integral-over-a-null-set-vanishes`, `thm-multivariate-iid-central-limit-theorem`, `thm-first-and-second-order-delta-method-for-random-vectors`, `thm-kolmogorov-iid-l1-strong-law`, `def-multivariate-normal-law`, `cor-holder-inequality-for-random-variables`, and `prop-order-and-scalar-rules-for-the-nonnegative-integral`.

The current batch-28 supplier items opened were `thm-iid-monte-carlo-mean-moments`, `thm-iid-monte-carlo-central-limit`, and `thm-iid-monte-carlo-mean-consistency`. To check the portions of those proofs used here, I also opened `def-iid-monte-carlo-estimators`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-variance-adds-for-pairwise-independent-random-variables`, `thm-continuous-mapping-theorem`, and `thm-lindeberg-levy-iid-central-limit-theorem`. The batch-28 page and three result items remain drafts; their current statements and the exact finite-moment/AC conditions used by batch 31 agree.

## Source passages checked

- Quan Zhou, *STAT 689 Unit 1*, §1.3, Theorems 1.2–1.3 and support remark, PDF pp. 3–4: [source PDF](https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf).
- Thomas B. Schön and Fredrik Lindsten, *Learning of Dynamical Systems: Particle Filters and Markov Chain Methods*, Chapter 4 §§4.3.1 and 4.3.3, including Theorem 1 and its variance calculation, printed pp. 49–51 and 55–56: [source PDF](https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf).
- *Monte Carlo Methods course notes*, Chapter 6 §6.2, equations 6.32–6.43, including the self-normalized estimator, plug-in variance, and ESS formula: [source PDF](https://archive.math.arizona.edu/tgk/mc/book_chap6.pdf).
- Louis Aslett, *Data Science and Statistical Modelling*, Chapter 5 §§5.3.1–5.3.3, Theorems 5.3–5.4 and the missed-region diagnostic caveat: [source notes](https://www.louisaslett.com/Courses/DSSM/notes/simulation.html).
- Tuan Anh Le, *Importance Sampling*, “Self-Normalized Importance Sampling,” “Consistency of the Estimator,” and “Asymptotic Variance”: [source note](https://www.tuananhle.co.uk/notes/is.html). The note's displayed first derivative for the ratio map has a first-coordinate typo; I checked the local derivative algebra directly and did not rely on that display. The stated asymptotic variance is consistent with the local proof and the Schön–Lindsten result.

The published delta-method page's first-order theorem was read in full. Its pointwise expansion applies to the ratio proof, which checks the Borel extension, uses the positive denominator limit (Z_p>0), and derives the first-order remainder directly.

## Review and edits

The ordinary importance-sampling definition specifies measurable inputs, a known positive finite normalizer, an IID proposal sample, and the support and integrability conditions. The unbiasedness proof derives integrability of each weighted value from target integrability and the support condition before applying the density change-of-measure identity. The finite-variance result proves the weighted second-moment formula, separates the choice-free variance conclusion from the AC-dependent CLT, and treats zero variance separately. These arguments preserve the hypotheses and conclusions of their suppliers.

The self-normalized consistency proof establishes target integrability on the proposal-zero set using the support condition, then applies the IID strong law to numerator and denominator. The ratio theorem's multivariate CLT, delta-method derivative, asymptotic variance, and plug-in standard-error limit are correct under the stated first- and second-moment assumptions. The finite two-point example gives ordinary mean (1/2) and one-draw self-normalized bias (-1/4). The light-tailed proposal counterexample has full support and target variance zero while its ordinary weighted value has infinite second moment; the sample average consequently has infinite centered second moment for every finite (n).

**Repair — `cex-importance-weight-ess-misses-target-region`.** Step 1.1 used IID proposal draws to assign probability ((99/100)^n), but the local setup did not explicitly connect its (X_i) to the algorithm's IID input. I made the sample law explicit, specified counting measure and the induced proposal law, and cited the algorithm fact in step 1.1. The witness now directly establishes a positive-probability event on which all weights are (100/99), ESS is (n), and the unvisited atom has target mass (1/2). I updated the batch-31 proof contract's F2 citation uses and step-1.1 derivation inputs/claim. The item had no `verification.judge` record to remove.

Validation after the repair: reflow reported the item unchanged; precheck passed (`1 checked, 0 failing`); the required final proof-layout run reported `1 items, 2 steps, 0 defects`.

## Uneditable finding

The proof contract for `thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse` lists `def-axiom-of-choice` at step 2.1. That step uses the consistency and strong-law suppliers plus measurable transforms and Hölder to prove the plug-in standard-error limit; it has no AC use. The item's statement says this limit holds without AC, and the proof separates that argument from the AC-dependent CLT. I left this standalone contract discrepancy unchanged; the repair authorization permitted contract changes to record the material item repair above. It is reported as a nonfatal contract false-claim finding.

## Page verdicts

- `importance-sampling-and-weight-diagnostics`: **Pass.** Its summary accurately states the normalizer, support, first-moment, second-moment, AC, and Monte Carlo standard-error conditions proved by its items.
- `importance-sampling-and-weight-diagnostics-examples`: **Pass after the ESS counterexample repair.** Its summary matches the two-point computation, infinite-variance witness, and positive-probability missed-target-region example.

## Blocker

The recomputed autopilot status at `2026-10-15T11:45:52.597Z` showed the run still in `3a-read`, with nothing in flight. It reported the unrelated run blocker `3a-collect — collect-23 failed 3x (covers 23)`. No batch-31 mathematical blocker remains.

## Coverage limitation

I reviewed every assigned page and item, all direct item suppliers used in their proofs, the required page summaries, the relevant current batch-28 theorem bodies, and the cited source sections listed above. I did not re-audit the entire transitive foundation closure of every published supplier.
