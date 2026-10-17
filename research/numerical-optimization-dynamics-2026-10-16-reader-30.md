# Step 3a reader report — batch 30

Run: `numerical-optimization-dynamics-2026-10-16`  
Reader: `reader-30`  
Review date: 2026-10-17

## Opened inventory

Read `research/numerical-optimization-dynamics-2026-10-16-batch-30.pages.json`
and `briefs/reader.md`. The active autopilot status
reported the run as running at Step 3a read, with no worker currently in flight.

Opened both assigned pages:

- A page: `adaptive-stochastic-paths-and-brownian-bridge-coupling`.
- B page: `adaptive-stochastic-paths-and-brownian-bridge-coupling-examples`.

Opened all assigned items, in supplier/dependency order:

- Level 0: `alg-dyadic-brownian-bridge-increment-tree`,
  `def-predictable-stopping-time-grid`,
  `lem-continuous-adapted-process-at-bounded-stopping-time`,
  `def-scalar-brownian-bridge-from-x-to-y`.
- Level 1: `thm-dyadic-brownian-bridge-tree-increment-laws`,
  `lem-stopping-time-ito-step-interval-sum`,
  `lem-scalar-brownian-bridge-restriction-density`.
- Level 2: `alg-adaptive-euler-maruyama-on-predictable-grid`,
  `thm-scalar-brownian-bridge-barrier-crossing-probability`,
  `ex-redrawing-rejected-increment-biases-path`,
  `ex-coarse-fine-em-bridge-coupling`.
- Level 3: `lem-finite-budget-adaptive-em-status`,
  `lem-adaptive-em-predictable-grid-second-moment`,
  `ex-brownian-bridge-barrier-missed-by-endpoints`.
- Level 4: `thm-adaptive-em-predictable-grid-strong-error`.

Opened the relevant external supplier statements and proofs, including:
`def-d-dimensional-brownian-motion`, `def-multivariate-normal-law`,
`def-axiom-of-choice`, `def-brownian-motion`,
`def-continuous-time-stopping-time`,
`def-natural-and-usual-augmented-brownian-filtrations`,
`def-continuous-time-filtration-and-all-pairs-martingale`,
`lem-characteristic-function-of-a-multivariate-normal-law`,
`lem-characteristic-functions-under-affine-maps-and-independent-sums`,
`lem-characteristic-function-of-a-normal-law`,
`thm-uniqueness-of-a-law-from-its-characteristic-function`,
`thm-cramer-wold-device`,
`def-progressively-measurable-and-predictable-process`,
`def-ito-integral-for-square-integrable-predictable-processes`,
`thm-ito-isometry-and-linearity-in-predictable-l2`,
`thm-ito-integral-process-has-a-continuous-martingale-version`,
`lem-square-integrable-predictable-step-ito-integral-is-finite-sum`,
`lem-rat-embeds-dense`, `alg-euler-maruyama`,
`thm-stopping-an-ito-integral`,
`thm-doob-maximal-bound-for-the-ito-integral`,
`thm-gronwall-integral-inequality`, `thm-fatou-lemma`,
`thm-dominated-convergence`, `thm-monotone-convergence-for-the-integral`,
`def-ito-sde-and-strong-solution`,
`thm-global-strong-well-posedness-for-lipschitz-ito-sdes`,
`lem-lipschitz-sde-map-is-well-defined`,
`lem-lipschitz-sde-local-solution-has-finite-path-moment`,
`lem-brownian-transition-semigroup-property`,
`lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates`,
`thm-dynkin-pi-lambda`, `thm-brownian-reflection-principle`, and
`def-standard-normal-and-normal-laws`.

## Edits and evidence

- `alg-dyadic-brownian-bridge-increment-tree`: removed the unconditional child
  independence assertion, which did not specify a Brownian-distributed parent
  or account for a data-dependent leaf selection. Kept the path-consistency
  rule and the valid conditional covariance caveat; the fixed-depth theorem
  supplies the unconditional Gaussian laws. Replaced the inaccurate Algorithm
  8.23 citation with the midpoint-refinement source below.
- `def-predictable-stopping-time-grid`: made the random-index condition precise
  by requiring every fixed-index extended step length (including the zero
  extension after termination) to be measurable at its stopped sigma-algebra.
  This is the condition used by the adaptive update and its moment/error
  proofs.
- `def-scalar-brownian-bridge-from-x-to-y`: added the path-space coordinate and
  pi-lambda dependencies used for the assertion that the law is independent
  of the chosen Brownian motion, and stated the short finite-dimensional-law
  justification. Replaced the unrelated Algorithm 8.23 reference with
  Gasbarra, Sottinen, and Valkeila, *Gaussian Bridges*, §1, equation (1.3).
- Corrected the Brownian-bridge midpoint citation in
  `thm-dyadic-brownian-bridge-tree-increment-laws`,
  `alg-adaptive-euler-maruyama-on-predictable-grid`,
  `ex-redrawing-rejected-increment-biases-path`, and
  `ex-coarse-fine-em-bridge-coupling`. Kept Särkkä and Solin Algorithm 8.1
  where it supports the Euler–Maruyama recursion.
- Replaced the unrelated reference in
  `lem-scalar-brownian-bridge-restriction-density` with *Gaussian Bridges*,
  §1, equation (1.3), and §2.3, equation (2.6). Replaced the unrelated bridge
  reference in `thm-scalar-brownian-bridge-barrier-crossing-probability` with
  Mike Giles's barrier-crossing section while retaining Lawler's reflection
  principle reference.

Source checks:

- The cited Särkkä and Solin PDF is
  <https://users.aalto.fi/~asolin/sde-book/sde-book.pdf>. Its Algorithm 8.23
  at PDF lines 10618–10628 is titled “Exact algorithm” and concerns exact
  diffusion simulation, not Brownian-bridge midpoint refinement. Its
  Algorithm 8.1 at lines 8486–8492 is the Euler–Maruyama method.
- Mike Giles, *Monte Carlo Methods*, Module 4:
  <https://people.maths.ox.ac.uk/~gilesm/mc/module_4/module_4_1.pdf>. PDF
  pages 27–30 (lines 581–773) derive the conditional midpoint mean and
  variance $b^2h/4$ and recursively bisect intervals. Pages 31–32 (lines
  775–865) give the Brownian-bridge barrier-hit formula used by the barrier
  items.
- Dario Gasbarra, Tommi Sottinen, and Esko Valkeila, *Gaussian Bridges*:
  <https://math.aalto.fi/reports/a481.pdf>. Section 1, equation (1.3),
  pp. 2–3, gives the anticipative bridge representation and its conditional
  covariance; §2.3, equation (2.6), gives the bridge-measure density relative
  to Brownian motion.
- Gregory F. Lawler, *Stochastic Calculus: An Introduction with Applications*:
  <https://www.math.uchicago.edu/~lawler/finbook.pdf>. Proposition 2.7.2,
  PDF page 65 (printed pp. 60–61), states the reflection principle used in
  the bridge-crossing derivation.

The mathematical review found the fixed-depth Gaussian induction, stopped
Itô identity, finite-budget status logic, localized moment estimate, and
predictable-grid one-time $L^2$ error argument sound under their stated
hypotheses. The error theorem does not give a path-supremum error estimate or
a step-count/cost bound. The three B-page examples' calculations and the two
page summaries are consistent with their items; neither page makes an
unsupported convergence claim.

Updated the six batch-30 proof-contract citation excerpts that quote the
revised dyadic-tree algorithm, predictable-grid definition, or scalar-bridge
definition. No phase-proof text was changed, and none of the changed items had
a `verification.judge` record to remove.

## Defects not edited

None found.

## Page verdicts

- `adaptive-stochastic-paths-and-brownian-bridge-coupling`: sound after the
  listed item repairs. Its summary correctly restricts the error certificate
  to the predictable-grid branch and separates path-preserving rejection
  refinement from predictable adaptation.
- `adaptive-stochastic-paths-and-brownian-bridge-coupling-examples`: sound.
  The redrawing, coarse/fine coupling, and missed-barrier examples support the
  summary; no convergence theorem is claimed.

## Validation and blocker

For each of the nine changed items, reflow reported unchanged and precheck
reported no failures (proof-bearing items passed; definition/algorithm items
had zero checked proofs). The required batched command reported
`proof-layout: 9 items, 20 steps, 0 defects`.

No blocker. Coverage limitation: I reviewed the assigned items and the
relevant direct supplier statements/proofs, but did not independently audit
every transitive dependency below all published suppliers.
