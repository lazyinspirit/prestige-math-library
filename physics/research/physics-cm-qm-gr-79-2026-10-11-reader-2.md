# Reader report — physics-cm-qm-gr-79-2026-10-11, batch 2

Role: independent Step 3a reader. Scope: batch 2 only.

## Opened inventory

Pages opened:

- `cm-math-balances` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-balances.md` (draft A page).
- `cm-math-balances-examples` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-balances-examples.md` (draft B page).

All eleven assigned items were opened and reviewed:

- A page: `lem-cm-derivative-of-pairings-of-curves`; `thm-cm-center-of-mass-and-kinetic-splitting`; `thm-cm-momentum-and-angular-momentum-balance`; `thm-cm-work-energy-balance`; `thm-cm-variable-mass-momentum-balance`; `thm-cm-compact-continuation-for-locally-lipschitz-odes`; `cor-cm-finite-time-breakdown-requires-escape`; `lem-cm-piecewise-c1-jump-derivative`; `thm-cm-impulse-restitution-and-energy-loss`.
- B page: `ex-cm-balances-impulse-and-rocket-checks`; `ex-cm-balances-continuation-boundary-checks`.

Dependency statements and definitions needed for the arguments were checked in the following groups: Euclidean derivative and inner-product rules, cross-product and finite-sum identities; the variable-mass, center-of-mass, angular-momentum, work-energy, and impulse suppliers; ODE/IVP definitions, local Lipschitz continuity, Picard–Lindelöf, the Volterra formulation, integral estimates, completeness, compactness, and endpoint continuity; and distribution, test-function, Borel/Lebesgue, null-set, integration-by-parts, and Riemann–Lebesgue suppliers. Relevant exact targets include `def-first-order-ode-initial-value-problem-and-solution`, `def-locally-lipschitz-in-the-state-variable`, `thm-picard-lindelof-local-existence-and-uniqueness`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-continuous-implies-integrable`, `lem-test-function-cutoffs-and-euclidean-localization`, `prop-countable-subsets-of-rn-are-lebesgue-null`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-compact-subset-is-closed-and-bounded`, `thm-extreme-value-metric`, `thm-finitely-many-discontinuities-integrable`, and `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`.

The batch manifest, coverage record, cross-batch dependency record, and the assigned proof-contract file were consulted as navigation and evidence. They were not treated as verdicts.

## Repairs and evidence

- `lem-cm-piecewise-c1-jump-derivative`: completed the measurability and local-integrability argument. The proof now establishes Borel measurability on the two open half-intervals and at the distinguished point, bounds both functions on compact intervals using the one-sided limits and the extreme-value theorem, and uses the explicit compact-set measurability, singleton-nullity, and nonnegative-integral monotonicity suppliers. The half-interval integrations by parts now cite singleton nullity and equality of integrals for integrable functions equal almost everywhere. This closes the prior silent uses of point-nullity, measurability of compact sets, and integral monotonicity.
- `thm-cm-impulse-restitution-and-energy-loss`: defined each momentum map on all of (I) by fixing (p_i(t_*)=0), so the displayed Lebesgue pairings have an explicit domain and representative. The jump and restitution deductions are unchanged.
- `thm-cm-compact-continuation-for-locally-lipschitz-odes`: restricted endpoint-neighborhood quantifiers to the actual solution domain; established that the compact trapping set is nonempty before applying the extreme-value theorem; stated the continuous-to-integrable prerequisite before the vector integral estimate; and invoked the Picard–Lindelöf local-solution conclusion on a sufficiently small closed subinterval. The corresponding condition in `cor-cm-finite-time-breakdown-requires-escape` and its supplier fact now also name the solution domain explicitly. The corollary proof and the assigned continuation example were checked against that clarification.
- `ex-cm-balances-continuation-boundary-checks`: defined the state maps (G_\pm:\mathbb R\to\mathbb R) and full vector fields (F_\pm:\mathbb R\times\mathbb R\to\mathbb R), (F_\pm(t,z)=G_\pm(z)); verified continuity and the locally uniform state-Lipschitz estimate on compact interval cylinders using (G_\pm'(z)=\pm2z) and the mean-value inequality; and clarified that the compact-containment antecedent fails for the blow-up example. The trapping calculation now states explicitly that each finite restriction extends past its endpoint.

Updated `research/physics-cm-qm-gr-79-2026-10-11-batch-2.proof-contracts.json` for the affected items, including the added supplier citations and changed derivation records. None of the five edited items carried a `verification.judge` record, so there was no stale judge stamp to remove.

Validation after the final edits:

- Reflow: all five changed item files returned `unchanged`.
- Precheck: all five changed item files passed, with zero failing checks.
- Final proof-layout batch: `5 items, 25 steps, 0 defects`.

## Uneditable finding

`def-locally-lipschitz-in-the-state-variable` is a published dependency and was outside edit scope. Its Definition quantifies over a “compact time-state cylinder” without specifying the set form of a cylinder or the family being quantified over. Its cited dependencies define IVPs, Lipschitz maps, and Euclidean metrics, but do not define cylinders. The Picard–Lindelöf supplier later displays the particular form ([t_0-h,t_0+h]\times\overline B(x_0,r)), which supports the intended local use but does not define the full family in the published definition. The assigned consumer is `thm-cm-compact-continuation-for-locally-lipschitz-odes`. This is a nonfatal definition-precision issue; explicitly defining cylinders as compact time intervals times closed state balls would close it.

## Page verdicts

- `cm-math-balances`: the assigned mathematics and summary are coherent after the local repairs. One nonfatal published-definition clarification is routed above.
- `cm-math-balances-examples`: the finite collision arithmetic, rocket identities, and continuation examples are correctly derived under their stated mathematical assumptions; the page summary remains accurate. No empirical claim is made.

No workflow blocker remains. I checked the exact local supplier statements used by the assigned arguments, but did not independently re-audit every published supplier proof or re-fetch the textbooks cited in provenance. The assigned items are mathematical; no experimental or statistical claims occur in this batch.
