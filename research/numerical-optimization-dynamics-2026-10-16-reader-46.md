# Step 3a reader report — batch 46

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `46`  
Reader: `reader-46`

## Verdicts

- **A page `nonsmooth-contact-time-stepping-and-projections`: pass.** Its summary matches the proved scope: compact convex projected dynamics, the stated choice assumptions, certified residual bounds, isolated transverse sphere events, and explicit exclusions. The scalar impact and event procedures now specify their root/provider behavior, including endpoint handling.
- **B page `nonsmooth-contact-time-stepping-and-projections-examples`: pass.** The two-point nearest-point witness, unequal-mass impulse calculation, scalar restitution endpoints, penalty recurrence, and projected trajectory calculation are correct. The projected trajectory example now supplies the projection-certificate provider required by its algorithm.
- No blocker remains. Five defects in published dependencies remain outside this reader's edit permission; they are listed below and in the findings JSON.

## Source check

Stewart's *Dynamics with Inequalities: Impacts and Hard Constraints*, §4.3, equations (4.21)–(4.22), printed pp. 122–123 ([PDF](https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Stewart%20D.E.%20Dynamics%20with%20inequalities.%20Impacts%20and%20hard%20constraints%20%28SIAM%2C%202011%29%28ISBN%201611970709%29%28O%29%28394s%29_MCde_.pdf)), writes the inclusion $0\in\dot x+N_K(x)+f(t,x)$ and projects $-f$ onto the tangent cone. This confirms the source's forcing sign is opposite to the local convention $f-\dot x\in N_C(x)$; the assigned existence and uniqueness proofs use the local convention consistently and establish their claims from the listed suppliers.

## Opened inventory

Assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/nonsmooth-contact-time-stepping-and-projections.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/nonsmooth-contact-time-stepping-and-projections-examples.md`

The A page's four required page summaries were also opened:

- `library/real-analysis/convex-and-semicontinuous-functions-on-rn.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/inequality-kkt-duality-and-optimality-certificates.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/proximal-gradient-and-accelerated-composite-optimization.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/event-location-and-hybrid-trajectory-error.md`

All 20 assigned items were opened and checked in ascending manifest dependency level.

- A items: `lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence`; `lem-projection-onto-closed-convex-set-is-nonexpansive`; `alg-one-dimensional-first-impact-with-restitution`; `thm-frictionless-sphere-binary-impact-impulse-laws`; `lem-projected-euler-projection-residual-certificate`; `thm-first-impact-step-complementarity-momentum-and-energy`; `lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds`; `alg-event-driven-frictionless-sphere-contact-with-certified-events`; `def-projected-contact-dynamics-and-euler-step`; `lem-naive-all-pairs-collision-search-has-quadratic-work`; `lem-normal-cone-maximal-monotone-and-projection-resolvent`; `alg-certified-projected-euler-method`; `lem-projected-contact-solutions-are-unique`; `thm-projected-euler-existence-uniqueness-and-convergence`; `thm-projected-euler-square-root-global-error`.
- B items: `cex-nonconvex-set-can-have-nonunique-nearest-points`; `ex-frictionless-sphere-binary-impact-calculation`; `ex-one-dimensional-impact-restitution-boundaries`; `ex-penalty-stiffness-requires-time-step-control`; `ex-projected-overdamped-particle-euler-trajectory`.

Supplier items opened for the cited interfaces included `thm-heine-borel-rn`, `thm-of-archimedean`, `thm-reals-cauchy-complete`, `thm-well-ordering-principle`, `thm-recursion`, `thm-induction-principle`, `def-metric-topology`, `def-metric-ball`, `def-metric-convergence`, `lem-integer-part`, `def-integer-power`, `lem-geometric-sequence-null`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-euclidean-inner-product`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `thm-n-cross-n-countable`, `thm-countable-union-of-null-is-null`, `lem-finite-sum-laws`, and `lem-of-triangle-inequality`.

Projection and convexity suppliers opened included `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `thm-metric-open-set-algebra`, `def-convex-subset-of-euclidean-space`, `def-kkt-residual-and-normal-cone`, `def-indicator-function-of-closed-convex-set`, `def-extended-real-epsilon-subdifferential`, `thm-proximal-operator-existence-resolvent-firm-nonexpansive`, and `lem-prox-indicator-is-euclidean-projection`.

Analysis and choice suppliers opened included `thm-chain-rule-for-total-derivatives`, `thm-algebra-of-derivatives`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-gronwall-integral-inequality`, `lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous`, `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, `thm-c1-lipschitz-ac-bv-hierarchy`, `thm-bv-functions-are-differentiable-almost-everywhere`, `def-locally-integrable-function-on-r-n`, `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`, `def-absolutely-continuous-function`, `def-derivative`, `def-measure-null-set-and-almost-everywhere`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-countable-choice`, and `def-dependent-choice`.

The penalty example's suppliers `lem-exponential-dominates-one-plus-x`, `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-exponential-is-strictly-increasing`, and `cor-exponential-reciprocal-and-positivity` were opened. Event-interface sources opened included `def-first-order-ode-initial-value-problem-and-solution`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-norm-inequality-for-the-vector-valued-integral`, `def-certified-hybrid-event-enclosure`, `lem-hybrid-guard-derivative-along-mode`, and `cor-mean-value-theorem`. Current-run supplier items outside batch 46 that were checked against the event algorithm were `def-hybrid-mode-guard-reset-system`, `lem-transverse-hybrid-event-time-error`, `lem-reset-error-after-a-mistimed-hybrid-event`, and `lem-ode-flow-lipschitz-on-a-tube`; the current source hashes for these were bound during review.

The batch manifest, dependency-order task, authoring task, cross-batch dependency record, proof-contract file, and `briefs/reader.md` were consulted as supporting evidence, not as verdicts. The complete upstream proof closure of every published mathematical supplier was not re-audited; the invoked source statements and the local arguments needed for this batch were checked.

## Repairs made

- `items/alg-one-dimensional-first-impact-with-restitution.md`: replaced the unspecified root search with exact linear/quadratic candidate formulas, a finite candidate-count budget branch, incoming-root filtering, and endpoint/vertex checks for nonpenetration. Exact comparison failure returns `unresolved`; the existing output and scope remain first-impact only. Its direct consumers, `thm-first-impact-step-complementarity-momentum-and-energy` and `ex-one-dimensional-impact-restitution-boundaries`, were checked against the preserved output fields.
- `items/alg-certified-projected-euler-method.md`: made the finite-budget projection-certificate provider an explicit input with a response contract, exact certificate conclusion, call, failure branch, and completion branch. `thm-projected-euler-square-root-global-error` and `ex-projected-overdamped-particle-euler-trajectory` were checked against the preserved residual interface.
- `items/alg-event-driven-frictionless-sphere-contact-with-certified-events.md`: added an explicit endpoint policy and branch for an exact event at $T$, distinguished that from a root earlier than $T$ whose upper bracket endpoint is $T$, and specified the loop state, no-event completion, event-budget failure, reset update, and output statuses. The optional finite mode-graph description now has transitions from every mode label to every pair label. The pair-count consumer `lem-naive-all-pairs-collision-search-has-quadratic-work` still uses exactly one pair inspection per pair per smooth segment.
- `items/def-projected-contact-dynamics-and-euler-step.md`: specified coordinatewise absolute continuity and derivatives for vector curves and defined “almost every” relative to Lebesgue measure. Added the four direct definition dependencies. All seven current direct consumers were opened: the normal-cone lemma, certified Euler algorithm, uniqueness lemma, existence theorem, error theorem, penalty example, and projected-particle example.
- `items/thm-projected-euler-square-root-global-error.md`: renamed the error constant from $C$ to $K_{\mathrm{err}}$ throughout so it no longer shadows the constraint set $C$.
- `items/ex-projected-overdamped-particle-euler-trajectory.md`: specified the exact projection provider, zero tolerances, and one-check per-step budget; added the projection variational-inequality supplier and its fact in the calculation.

The affected proof-contract excerpts for edited definitions/statements and algorithm interfaces were refreshed in `research/numerical-optimization-dynamics-2026-10-16-batch-46.proof-contracts.json`. The projected-particle contract now records its added [F4] source and derivation input. None of the six edited items had a `verification.judge` record to remove.

## Validation

Reflow reported each changed item unchanged. Precheck reported zero proof rows for the four definition/algorithm items and passed the theorem and example (`1 checked, 0 failing` each). The final batched proof-layout command reported: `proof-layout: 6 items, 7 steps, 0 defects`.

## Uneditable findings

1. **Published dependency `thm-nearest-point-in-a-nonempty-closed-convex-set`, Proof 1.1 — nonfatal unlicensed inference.** The proof calls $K=C\cap\overline B(x,R)$ closed without deriving or citing that closed Euclidean balls are closed. Its listed facts provide Heine–Borel and the definitions of closedness but not this property. `thm-metric-open-set-algebra`, Statement claim 4 and Proof 1.4–2.2, supplies the missing fact; a reverse-triangle argument or an explicit dependency citation would close the step. The assigned consumer is `def-projected-contact-dynamics-and-euler-step`.
2. **Published dependency `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`, Proof 1.1 and 2.1 — nonfatal ill-formed formatting.** Tag groups occur inside sentences (`[L2, given, choose, construct]` within step 1.1 and `[L3, L4, step 1.1, algebra]` within step 2.1) instead of only at the ends of steps. The assigned consumer is `thm-projected-euler-existence-uniqueness-and-convergence`.
3. **Published dependency `thm-derivative-of-exponential`, Proof 1.1–3.1 — nonfatal ill-formed formatting.** Consecutive numbered steps are not separated by blank lines. The assigned consumer is `ex-penalty-stiffness-requires-time-step-control`.
4. **Published dependency `thm-exponential-is-strictly-increasing`, Proof 1.1–2.1 — nonfatal ill-formed formatting.** Consecutive numbered steps are not separated by a blank line. The assigned consumer is `ex-penalty-stiffness-requires-time-step-control`.
5. **Published dependency `cor-exponential-reciprocal-and-positivity`, Proof 1.1–3.1 — nonfatal ill-formed formatting.** Consecutive numbered steps are not separated by blank lines. The assigned consumer is `ex-penalty-stiffness-requires-time-step-control`.

These findings are also recorded in `research/numerical-optimization-dynamics-2026-10-16-reader-findings-46.json`. No page prose or out-of-scope item was edited.

## Blocker

Batch 46 has no mathematical blocker. The final native status recomputation reports an unrelated `3a-collect` blocker: `collect-20 failed 3x (covers 20)`, current at `2026-10-16T13:31:57.599Z`. It is outside this assignment and was not modified.
