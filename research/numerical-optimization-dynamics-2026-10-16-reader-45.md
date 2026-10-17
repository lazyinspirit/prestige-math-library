# Step 3a reader report — batch 45

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Verdict: no mathematical or authored-page defect found. No carrier was edited.

## Opened inventory

Assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/fractional-evolution-and-convolution-quadrature.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/fractional-evolution-and-convolution-quadrature-examples.md`

Required prerequisite pages:

- `library/numerical-linear-algebra-and-approximation/composite-quadrature-rules.md`
- `library/complex-analysis/conformal-mapping-branches-and-the-schwarz-lemma.md`

All 19 assigned items were opened and reviewed in supplier-before-consumer order (the manifest contains 16 A-page items and 3 B-page examples):

| Level | Items |
| --- | --- |
| 0 | `lem-fractional-integral-kernel-power-integral` |
| 1 | `def-caputo-derivative-and-fractional-integral` |
| 2 | `lem-continuous-fractional-integral-is-holder`; `lem-fractional-integral-semigroup`; `alg-uniform-and-graded-grid-l1`; `alg-backward-euler-convolution-quadrature` |
| 3 | `lem-backward-euler-cq-principal-branch-generating-function`; `lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions`; `lem-l1-positive-weights-and-discrete-comparison`; `lem-weakly-singular-fractional-gronwall`; `ex-l1-full-history-cost-and-truncation-bias` |
| 4 | `lem-backward-euler-cq-weights-and-partial-sums`; `thm-lipschitz-local-existence-for-caputo-volterra-equation`; `thm-l1-stability-and-smooth-data-error` |
| 5 | `lem-cq-quadratic-generating-coefficient-estimate`; `thm-backward-euler-cq-scalar-resolvent-stability`; `ex-caputo-startup-singularity-and-graded-grid` |
| 6 | `thm-backward-euler-cq-compatible-quadratic-first-order-error`; `ex-l1-and-cq-fractional-relaxation-first-step` |

The 60 distinct direct dependency targets listed below are all marked `published`. I checked the definition or statement clauses used by the assigned Facts and proofs. I also read the proof sections for the Beta–Gamma identity, Gamma functional equation, Gautschi inequality, improper substitution, Tonelli, the AC derivative and FTC results, the Riemann–Lebesgue bridge, and the one-variable Lebesgue change-of-variables result.

`def-real-beta-integral`, `thm-real-beta-gamma-identity`, `thm-real-gamma-functional-equation`, `def-real-gamma-function-by-the-euler-integral`, `thm-substitution-for-improper-integrals`, `def-absolutely-continuous-function`, `def-l-one-of-a-measure`, `def-indefinite-lebesgue-integral-on-a-compact-interval`, `def-countable-choice`, `thm-absolutely-continuous-functions-have-integrable-derivatives`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-real-power-continuity-and-derivatives`, `cor-mean-value-theorem`, `thm-geometric-series`, `thm-direct-comparison-test`, `def-complex-series-power-series-and-absolute-convergence`, `thm-termwise-differentiation-of-complex-power-series`, `def-real-power-series-and-radius-of-convergence`, `thm-termwise-differentiation-of-a-real-power-series`, `thm-real-power-laws`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `def-unit-disc-upper-half-plane-and-blaschke-factor`, `prop-star-shaped-plane-domains-are-homologically-simply-connected`, `def-complex-power-from-holomorphic-logarithm-branch`, `cor-principal-logarithm-is-holomorphic-on-the-slit-plane`, `thm-chain-rule-for-complex-derivatives`, `thm-algebra-of-complex-derivatives`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-principal-branch-power-agrees-with-positive-real-power`, `thm-identity-theorem-holomorphic-functions`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `thm-of-square-roots`, `thm-reals-ordered-field`, `def-dependent-choice`, `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, `thm-first-fundamental-theorem-of-calculus-for-l-one`, `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous`, `def-real-power`, `cor-exponential-reciprocal-and-positivity`, `lem-cauchy-reals-archimedean`, `cor-gautschi-inequality-for-the-real-gamma-function`, `lem-cauchy-product-of-real-power-series`, `cor-power-series-sums-are-smooth-with-coefficient-formula`, `def-banach-space`, `def-complete-metric-space`, `thm-c-k-complete-in-the-sup-metric`, `thm-heine-borel-r`, `def-metric-compactness`, `def-higher-derivatives-and-smoothness`, `thm-continuous-implies-integrable`, `thm-ftc-second-part`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `cor-boundedness-theorem-r`, `thm-ratio-test`, `def-finite-sum`, `lem-finite-sum-reindexing-and-fubini`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `cor-c-one-change-of-variables-for-l-one-functions`.

## Mathematical review

The kernel integral and fractional-integral definition preserve the positive-order domains and handle the singular endpoint through the Beta integral and improper substitution. The semigroup proof supplies its integrability conditions before changing integration order; the continuous-input statement upgrades the result to every time. The Caputo–Volterra equivalence retains its AC solution class and the stated choice assumptions.

The L1 algorithms specify admissible grids and the scalar recurrence. The positive-weight lemma proves monotonicity, comparison, residual stability, and recurrence well-definedness on every strictly increasing grid. The smooth-data theorem's panel residual bound has the stated constant and applies only under its (C^2) hypothesis. The startup example verifies the square-root datum and its first-step calculations without claiming an optimal graded-mesh rate.

The CQ generating-function proof stays on the principal branch and applies the identity theorem only after proving holomorphy on the unit disc. The partial-sum/Gamma-ratio estimates, scalar resolvent bound, quadratic coefficient estimate, and resulting (O(h)) theorem are consistent with their hypotheses; no operator-valued or contour estimate is asserted. The two first-step/history examples match their stated scope.

One compressed inference in `lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions`, proof step 2.1, upgrades equality of indefinite integrals obtained almost everywhere to equality everywhere. Both primitives are continuous, so this is an immediate consequence of equality almost everywhere and continuity before applying the L1 FTC; it does not leave a substantive gap.

## Source and citation review

- Trench, *Introduction to Real Analysis*, Theorem 3.4.13, is the monotone change-of-variable theorem for improper integrals used in the kernel proof. The cited `math.sc.edu` PDF timed out when fetched directly; the theorem text was checked in a searchable copy of the same edition. The Toronto MAT237 note, §2.2(b), presents the Beta–Gamma identity as an exercise; the assigned proof relies on the library's proved `thm-real-beta-gamma-identity` for that step.
- Lin and Xu (2007), §3, gives the integrated L1 panel weights and (O(\tau^{2-\alpha})) local truncation estimate. Jin, Lazarov, and Zhou (2016), §1, equation (1.3), gives the uniform-grid L1 formula and its (C^2) caveat. The assigned scalar stability/error arguments are proved locally.
- Webb (2019), Lemma 3.4 and the Caputo/Volterra sections, is relevant to the fractional integral framework. Webb's Theorem 8.2 is a distinct inequality with an additional singular factor; the assigned Grönwall lemma proves its own continuous one-kernel statement and does not claim Webb's theorem.
- Lubich (1988), §1.1, describes CQ weights as coefficients of the differentiation-symbol composition. Hiptmair (2023), Lemma 3.3.2.24 and Example 3.3.2.27, gives the implicit-Euler CQ generating function and fractional-power coefficient formula. These locators match the CQ context; the assigned scalar claims are proved locally.
- The Stynes–O'Riordan–Gracia reference in the startup example has the correct title and publication metadata. Its ResearchGate URL returned 403 and the Zaragoza repository PDF timed out during this review; its full theorem text was not independently rechecked. No graded-mesh rate from that source is used by the example.

## Contract, edits, and unresolved defects

No item or page prose was edited, so there is no item diff, contract update, judge-record removal, reflow, precheck, or proof-layout run.

I found one uneditable contract-mapping discrepancy: `research/numerical-optimization-dynamics-2026-10-16-batch-45.proof-contracts.json`, under `contracts.lem-cq-quadratic-generating-coefficient-estimate.citations` for `F12`, records `uses: ["1.1", "2.1"]`. The current item proof cites F12 in step 2.1 only; step 1.1 cites F3, F4, F6, F7, F8, and F9. The carrier proof does not depend on F12 in step 1.1. I did not edit the contract because the assignment permits carrier repairs only in assigned item or A-page prose; the mismatch is reported in the findings JSON as nonfatal.

No other mathematical, claim, title, definition, witness, computation, page-summary, or source-locator defect was found in the assigned carriers. The A-page summary accurately limits the CQ results to the scalar setting and disclaims a graded-mesh rate. The B-page objectives accurately describe the three examples and their limitations.

There is no batch-45 blocker. The live autopilot status was `running`; its reported `3a-split` blocker is `split-6 failed 3x (covers 6)`, outside this assignment.

## Verdicts

- `fractional-evolution-and-convolution-quadrature` (A): **pass**, summary matches the proved local results and states the important smoothness, scalar-scope, and graded-mesh caveats.
- `fractional-evolution-and-convolution-quadrature-examples` (B): **pass**, summary matches all three computations and makes no optimal graded-mesh or accelerated-convolution claim.

## Coverage note

All assigned items/pages, the two required prerequisite pages, and the 60 direct published dependency targets were opened. Relevant primary source passages were checked as listed above. The Stynes full text and the original Trench URL could not be fetched during this review; the Trench theorem was checked against a searchable copy, and no unresolved mathematical uncertainty remains in the assigned proofs. I did not audit the full transitive proof history of every published dependency.
