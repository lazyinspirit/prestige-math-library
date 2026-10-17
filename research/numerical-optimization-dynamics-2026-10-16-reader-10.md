# Step 3a reader report — batch 10

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Date: 2026-10-17

## Opened inventory

Read the batch manifest `research/numerical-optimization-dynamics-2026-10-16-batch-10.pages.json`, the batch proof contracts, both assigned pages and all 16 assigned items. Items were reviewed in manifest dependency order, suppliers before consumers.

### Pages

- A page `stochastic-reaction-jump-simulation-and-coupling`: `library/numerical-differential-equations-and-stochastic-dynamics/stochastic-reaction-jump-simulation-and-coupling.md`.
- B page `stochastic-reaction-jump-simulation-and-coupling-examples`: `library/numerical-differential-equations-and-stochastic-dynamics/stochastic-reaction-jump-simulation-and-coupling-examples.md`.

### Assigned items

The A page lists:

- `def-reaction-network-propensity-system-and-generator`
- `lem-competing-exponential-race-for-reaction-channels`
- `alg-gillespie-direct-method-for-reaction-networks`
- `alg-next-reaction-random-time-change-method`
- `alg-dominating-thinning-for-time-varying-reaction-rates`
- `thm-countable-state-reaction-networks-lyapunov-nonexplosion`
- `thm-dominating-thinning-exactly-simulates-reaction-rates`
- `alg-minimum-intensity-coupling-for-reaction-networks`
- `thm-finite-state-gillespie-and-next-reaction-exactness`
- `thm-minimum-intensity-coupling-preserves-exact-marginals`
- `thm-reaction-counts-have-compensators-brackets-and-isometry`

The B page lists:

- `cex-quadratic-pure-birth-reaction-network-explodes`
- `cex-understated-thinning-envelope-is-invalid`
- `ex-zero-total-hazard-state-is-absorbing`
- `ex-finite-state-birth-death-reaction-simulation`
- `ex-two-chain-minimum-intensity-birth-death-coupling`

### Dependency sources consulted

The in-batch suppliers above were read before their consumers. I also opened the relevant statements/definitions for these external dependencies:

- Foundations, probability laws and measure: `def-axiom-of-choice`, `def-borel-sigma-algebra`, `def-countable`, `def-integers`, `def-natural-numbers`, `def-countable-choice`, `def-dependent-choice`, `def-independent-families-of-event-classes`, `def-independent-random-elements`, `def-independent-sigma-algebras-and-events`, `def-law-or-distribution-of-a-random-element`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-random-element-and-real-random-variable`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-exponential-and-weibull-survival-laws`, and `thm-countable-product-of-probability-spaces`.
- Point processes, integration and the explosion example: `def-poisson-and-cox-point-process`, `lem-homogeneous-poisson-ordered-event-time-density`, `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law`, `def-scalar-poisson-count-law`, `lem-poisson-count-law-normalization-and-moments`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-measure-with-density`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-ftc-second-part`, `def-real-exponential-function-and-e`, `thm-nonnegative-series-bounded-partial-sums`, and `thm-monotone-convergence-for-the-integral`.
- Counting-process and stochastic-integral interfaces: `def-continuous-time-adapted-process-and-martingale`, `def-continuous-time-filtration-and-all-pairs-martingale`, `def-counting-process-intensity-and-compensator-contract`, `def-progressively-measurable-and-predictable-process`, `lem-predictable-step-processes-dense-in-compensator-l2`, `thm-compensated-counting-process-brackets`, `thm-cross-brackets-vanish-under-no-simultaneous-jumps`, `thm-l2-counting-process-integral-isometry`, and `cor-cauchy-schwarz-for-random-variables`.

The batch proof contracts cover all 11 proof-bearing assigned items; I checked their derivation/fact mappings and boundary summaries. The contracts contained no finite-check rows. No stale `verification.judge` record was present on either repaired item.

## Repairs

### `thm-dominating-thinning-exactly-simulates-reaction-rates`

The theorem conditioned on `\mathcal F_t` without defining that filtration. Its proof also used the ordered candidate density on the full horizon to assert conditional independence and a translated density after a deterministic time. The cited `def-poisson-and-cox-point-process` defines independence of counts on disjoint Borel sets, while `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law` supplies the mixed-binomial identification. I defined `\mathcal F_t` as the history of candidate times and marks through `t`, made the independent-restriction argument explicit in step 1.1, and used it in steps 2.1 and 3.1. Step 4.1 now states that the accepted event update depends on the candidate time and mark and cites the initial candidate law for the finite-count estimate. The proof contract's F5 uses and derivation inputs were updated to match.

### `thm-reaction-counts-have-compensators-brackets-and-isometry`

Step 4.1 used `|\mathbb E[UV]|\le\|U\|_2\|V\|_2` but cited `cor-cauchy-schwarz-for-random-variables`, whose statement gives `\mathbb E|UV|\le\|U\|_2\|V\|_2`. I corrected F11 to state that absolute-product bound and added F12, citing `cor-expectation-linearity-monotonicity-and-modulus-bound` for expectation linearity and `|\mathbb E Z|\le\mathbb E|Z|`. The proof step now invokes both facts, and the item dependency, assigned batch-10 manifest dependency mirror, and contract were updated; its dependency level is unchanged because the new supplier is external to the in-run frontier.

### Validation

- `node tools/tsx-run.mjs tools/reflow.mts` on each repaired item: both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on each repaired item: both passed (`direct`).
- `node tools/proof-layout.mjs items/thm-dominating-thinning-exactly-simulates-reaction-rates.md items/thm-reaction-counts-have-compensators-brackets-and-isometry.md`: 2 items, 10 steps, 0 defects.

No page prose was changed.

## Defects not edited

None found in the assigned items, pages, or dependency statements consulted. No proposed withdrawal was identified. No published or other-batch dependency defect remains to route.

## Page verdicts

- `stochastic-reaction-jump-simulation-and-coupling` (A): pass after the two local proof repairs. Its summary matches the reaction laws, coupling and Lyapunov scope, and retains the physical-model caveat.
- `stochastic-reaction-jump-simulation-and-coupling-examples` (B): pass. The explosion witness, invalid-envelope comparison, absorbing-state calculation, finite birth-death calculation and coupling rates match their statements and suppliers.

## Blocker and coverage note

No blocker. No rendered evidence bundle was present under `.autopilot/numerical-optimization-dynamics-2026-10-16`; I reviewed the current source files and contracts directly. For external dependencies I checked the cited statement/definition sections needed for these arguments, rather than re-auditing every transitive dependency proof. No unresolved finding remains.
