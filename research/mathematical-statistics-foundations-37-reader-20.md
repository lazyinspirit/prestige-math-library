# Step 3a reader report — batch 20

**Run:** `mathematical-statistics-foundations-37`  
**Assignment:** `reader-20`  
**Result:** Two nonfatal proof-step findings in published dependencies; no remaining defect in editable batch-20 carriers.

## Run and scope

The autopilot status command reported the run as `running`, with Step 3a read active and no worker currently in flight. The batch-20 manifest assigns the A page `m-and-z-estimation-and-uniform-laws`, the B page `m-and-z-estimation-and-uniform-laws-examples`, and eight draft items from this run. The B page prose was read-only. I read the current batch proof-contract file for all eight items and treated its recorded reviews as evidence, not as verdicts.

## Opened inventory

### Assigned items, read in dependency order

1. `def-m-estimator`
2. `def-z-estimator`
3. `thm-m-estimator-consistency`
4. `thm-z-estimator-consistency`
5. `ex-quadratic-criterion-sample-mean`
6. `ex-absolute-criterion-sample-median`
7. `ex-finite-class-m-estimator-consistency`
8. `cex-unseparated-m-estimator-is-inconsistent`

### Item dependencies opened

- `def-borel-sigma-algebra`
- `def-estimator-sequence-in-iid-experiments` (draft supplier in this run)
- `def-identically-distributed-and-iid-random-variables`
- `def-independent-random-elements`
- `def-law-or-distribution-of-a-random-element`
- `def-metric-space`
- `def-metric-ball`
- `def-probability-measure`
- `def-op-and-little-op-stochastic-bounds` (draft supplier in this run)
- `def-consistency-in-probability` (draft supplier in this run)
- `thm-all-norms-on-rn-are-equivalent`
- `lem-real-line-is-a-metric-space`
- `def-abs-value`
- `lem-of-abs-value`
- `def-glivenko-cantelli-class`
- `thm-gc-by-bracketing-entropy` (draft supplier in this run; opened to verify the A-page’s stated uniform-law route)

### Pages opened

Assigned pages:

- `m-and-z-estimation-and-uniform-laws` (A)
- `m-and-z-estimation-and-uniform-laws-examples` (B)

Required page context:

- `asymptotic-convergence-consistency-and-identification`
- `losses-risk-and-decision-rules`
- `chaining-uniform-laws-and-empirical-process-limits`

### Contract and source evidence

- Read `research/mathematical-statistics-foundations-37-batch-20.proof-contracts.json`, covering all eight assigned item IDs.
- Checked the cited Bartlett lecture PDF at the M/Z definitions, sample-mean and sample-median examples, and M/Z consistency theorem and proof: <https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf>, PDF pp. 2–10.
- Checked van der Vaart, *Semiparametric Statistics*, Lecture 5 §5.3: Theorem 5.8 and proof (PDF p. 54) and Theorem 5.10 and proof (PDF p. 56): <https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf>.
- Checked Chen, UW STAT 581, Chapter 3: M consistency lines 100–109, Z consistency lines 110–118, sample-median criterion lines 132–140, and nonlinear-regression least-squares example lines 142–150: <https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html>.

## Item review and edits

- **`def-m-estimator` — sound.** The definition specifies the sampling law, pointwise criterion integrability, measurable target-valued estimators, exact and finite measurable approximate gaps, and the required measurable finite evaluation for random candidates. It does not assert existence or population uniqueness.
- **`def-z-estimator` — sound.** The finite-dimensional residual, chosen norm, approximate-root condition, evaluation measurability, norm equivalence, and caution against inferring a score equation from a nonsmooth criterion are correctly distinguished. Its published norm-equivalence supplier has the nonfatal proof-step finding recorded below.
- **`thm-m-estimator-consistency` — sound.** The separation, measurable uniform error, and relative approximate-maximization hypotheses yield the stated bound; the empty-complement case, minimizing sign reversal, and global-gap specialization are handled.
- **`thm-z-estimator-consistency` — sound.** The proof reduces the error event to the sum of the uniform equation error and root residual, with the finite empty-set case and consistency definition handled.
- **`ex-quadratic-criterion-sample-mean` — sound; edited.** The empirical and population square-completion identities give unique maximizers under the stated moments, and the sample mean is measurable. I corrected the descriptive Chen locator: lines 142–150 concern nonlinear-regression least squares, not a sample-mean example. I also made explicit that for finite products of real Borel spaces the product Borel sigma-algebra is the Borel sigma-algebra of the product topology, using the countable rational-box basis. The proof-contract derivation remains applicable because the proof argument itself did not change.
- **`ex-absolute-criterion-sample-median` — sound; edited.** The odd/even order-statistic arguments establish the full minimizing sets, including ties, and the finite min/max construction gives a measurable midpoint selection. I made the same finite-product Borel equality explicit in its sample-space assumption.
- **`ex-finite-class-m-estimator-consistency` — sound; proof tightened.** The fourth-moment expansion and summable bound are correct. I supplied the one-line indicator proof of Markov’s inequality and replaced the implicit almost-sure-to-probability step with a direct consistency bound from step 1.2. The affected proof-contract derivations for steps 1.2 and 3.1 were updated.
- **`cex-unseparated-m-estimator-is-inconsistent` — sound.** The constant criterion makes every selector exact, while the deterministic alternating selector has error probabilities alternating between zero and one for the fixed target.

The three edited items have no `verification.judge` record to remove. Reflow reported all three unchanged. Precheck passed for each. The required single proof-layout command over all changed item paths reported `3 items, 10 steps, 0 defects`.

## Page verdicts

- **`m-and-z-estimation-and-uniform-laws` (A) — pass.** Its summary accurately separates M and Z definitions, preserves the uniform-convergence hypotheses, states the separation and measurability requirements, and gives a correct sufficient bracketing route to the uniform laws. Its finite-dimensional coordinate argument uses the triangle inequality and a finite union bound as stated.
- **`m-and-z-estimation-and-uniform-laws-examples` (B) — pass.** Its summary accurately describes the quadratic and absolute criteria, finite Bernoulli uniform law, and unseparated-maximizer counterexample.

The three required page summaries were opened for context; this report does not independently adjudicate their unrelated content or items.

## Uneditable findings

1. **`thm-all-norms-on-rn-are-equivalent`, proof step 1.1 — nonfatal unlicensed inference.** The step sets `r := |y-1| > 0` for `y != 1`. Its cited facts L6 and L9 give ball/topology conventions and inverse positivity/trichotomy, but do not establish positivity of the absolute value of a nonzero element. `lem-of-abs-value` supplies the fact in the dependency closure, but this step and the facts block do not cite it. Add that fact to the cited facts or derive the positivity from the absolute-value definition and ordered-field trichotomy. The assigned consumer is `def-z-estimator`.

2. **`lem-real-line-is-a-metric-space`, proof step 1.5 — nonfatal unlicensed inference.** Fact L1 gives the strict characterization `|u| < r iff -r < u < r`; step 1.5 uses the corresponding non-strict characterization for closed balls without deriving it or citing a result. Add the short order-case derivation of `|u| <= r iff -r <= u <= r`. The assigned consumer is `ex-quadratic-criterion-sample-mean`.

## Blocker and coverage note

No blocker. I reviewed all assigned items and pages, their direct item dependencies, the additional local facts needed for the two dependency findings, and the cited source passages listed above. I did not recursively re-audit every deeper proof in the foundational dependency graph or all unrelated claims on the required context pages.
