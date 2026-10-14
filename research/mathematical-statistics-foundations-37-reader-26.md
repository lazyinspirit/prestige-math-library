# Step 3a reader report — batch 26

Run: `mathematical-statistics-foundations-37`  
Reader: `reader-26`

## Inventory opened

Assigned pages:

- A page: `nonparametric-regression-and-smoothing`
- B page: `nonparametric-regression-and-smoothing-examples`

Assigned items, read in dependency order:

- `def-regression-target-version`
- `lem-local-linear-normalized-moment-matrix-converges-in-probability`
- `def-nadaraya-watson-estimator`
- `def-pointwise-regression-risk`
- `def-local-polynomial-estimator`
- `thm-pointwise-risk-bias-variance-decomposition`
- `thm-nadaraya-watson-population-bias`
- `thm-local-linear-population-bias`
- `thm-local-linear-conditional-bias`
- `thm-kernel-regression-conditional-asymptotic-variance`
- `thm-nadaraya-watson-finite-sample-bias`
- `ex-local-linear-reproduces-affine-regression`
- `cex-local-linear-finite-sample-expectation-undefined`
- `cex-nadaraya-watson-design-gradient-and-boundary-bias`

Prerequisite pages opened: `nonparametric-density-estimation-and-kernels` and
`losses-risk-and-decision-rules`.

Dependency items opened to check the regression-version, probability,
integrability, statistic, risk, and kernel-integration claims:

`cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable`,
`def-axiom-of-choice`, `def-random-element-and-real-random-variable`,
`def-convergence-in-probability`, `def-identically-distributed-and-iid-random-variables`,
`def-measure-with-density`, `def-moments-variance-and-covariance`,
`def-statistic-and-estimator`, `def-loss-function-and-risk`, `def-choice-function`,
`def-probability-measure`, `def-measurable-function-between-measurable-spaces`,
`def-borel-sigma-algebra`,
`thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`,
`def-independent-random-elements`, `def-law-or-distribution-of-a-random-element`,
`def-convergence-in-measure`,
`def-expectation-of-a-nonnegative-or-integrable-random-variable`,
`def-statistical-experiment`, `def-estimand-on-a-statistical-model`,
`def-randomized-procedure-as-a-markov-kernel`,
`lem-procedure-action-law-is-measurable`, `def-measurable-space`,
`thm-disintegration-of-a-joint-law-on-standard-borel-spaces`,
`thm-conditional-integration-through-a-regular-conditional-law`, and
`thm-measurability-of-integration-against-a-kernel`.

## Edits and evidence

- `def-nadaraya-watson-estimator`, Definition: stated the sample Borel space,
  the Borel measurability of the piecewise formula, and the experiment and
  parameter-indexed regression estimand needed to call the statistic an
  estimator. This follows the exact statistic/estimator distinction in
  `def-statistic-and-estimator`.
- `def-local-polynomial-estimator`, Definition: likewise made the sample space
  and pointwise estimand explicit and justified measurability using the Borel
  matrix entries, the Borel nonsingular set, continuous inversion there, and
  the fixed fallback.
- `thm-nadaraya-watson-population-bias`, proof step 1.1: added the conditional
  law argument giving `∫|m|f ≤ E|Y|`, needed to make the rapid-tail numerator
  integrable. The cited conditional-integration corollary applies to `|y|`;
  the inequality is the triangle inequality for the selected conditional law.
- `thm-local-linear-population-bias`, proof step 1.1, and
  `thm-local-linear-conditional-bias`, proof step 2.1: added the same explicit
  bound where the rapid-tail estimates use `∫|m|f < ∞`.
- `thm-kernel-regression-conditional-asymptotic-variance`, proof steps 1.1 and
  4.1: recorded the conditional second-moment bounds
  `∫m²f ≤ E[Y²]` and `∫σ²f ≤ E[Y²]` from conditional integration and
  conditional Cauchy–Schwarz. Corrected step 3.1's scaled bad-design bound:
  the estimate is `n²h_n E[Y²] exp(-c n h_n)` after scaling the conditional
  variance by `nh_n`; the stated `nh_n³→∞` condition makes it vanish.
- `thm-nadaraya-watson-finite-sample-bias`, proof steps 1.1 and 3.1: stated the
  conditional-law `L²` bound on `m` and its `L¹` bound, used in the rapid-tail
  moment and bad-event estimates.

Added the conditional-integration corollary to the affected item dependency
lists and regenerated the batch proof-contract citations and derivations for
all affected theorem/example consumers. Updated the two estimator-definition
boundary contract entries. The seven changed items had no stale
`verification.judge` record to remove.

## Page verdicts

- `nonparametric-regression-and-smoothing` (A): sound after the focused
  repairs. The regression version is fixed before pointwise smoothness is
  imposed; the NW and local-linear expansions preserve the stated moment and
  localization alternatives; the conditional variance results are distinct
  from the explicitly qualified unconditional NW result. The page summary
  matches those claims.
- `nonparametric-regression-and-smoothing-examples` (B): sound. The affine
  reproduction calculation uses the chosen pointwise version and the
  nonsingular weighted normal equations. The near-collision witness gives
  both infinite positive and negative expectation parts. The NW interior and
  boundary calculations yield the stated `h²` design-gradient and first-order
  boundary biases. The B-page prose accurately summarizes the examples.

No uneditable defect was found. The `Statement refuted` sections of the two
counterexamples are intentionally false claims, and their witnesses refute
them as stated.

## Validation and blocker

- Reflow ran on each of the seven changed items; theorem items reflowed and
  both definitions were unchanged by reflow.
- `node proof-layout.mjs` ran once on all seven changed paths: 15 proof steps,
  0 defects.
- Precheck passed for all seven changed items: the five theorem items each
  reported 1 checked, 0 failing; the two definitions reported 0 checked,
  0 failing.
- No blocker remains.
