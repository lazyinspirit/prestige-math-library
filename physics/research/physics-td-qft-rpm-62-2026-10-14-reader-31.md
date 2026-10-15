# Reader report — batch 31

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent Step 3a reader  
Scope: batch `31` only

## Opened inventory

Assigned pages reviewed:

- `rpm-controlled-limits` — `library/relativistic-particle-mechanics/rpm-controlled-limits.md` (A-page)
- `rpm-controlled-limits-examples` — `library/relativistic-particle-mechanics/rpm-controlled-limits-examples.md` (B-page)

All assigned items were reviewed in dependency order:

1. `lem-rpm-finite-time-ode-comparison`
2. `lem-rpm-low-speed-remainders`
3. `lem-rpm-low-speed-uniform-remainders`
4. `lem-rpm-shell-force-ivp`
5. `pthm-rpm-prescribed-em-nr-trajectory-limit`
6. `pthm-rpm-prescribed-force-local-motion`
7. `pthm-rpm-controlled-newtonian-reduction`
8. `ex-rpm-low-speed-energy-bound`

Relevant mathematical and physics suppliers opened included `lem-rpm-shell-tangent-force-ivp`, `pthm-rpm-inverse-momentum-and-work`, `pthm-rpm-free-massive-and-null-geodesics`, `thm-gr-weak-field-scaled-trajectory-limit`, `lem-gr-weak-field-admissibility-and-inverse-bounds`, `lem-gr-weak-field-christoffel-bounds`, and `lem-gr-weak-field-geodesic-acceleration`; the required RPM, SR, GR, and EM definitions and postulates cited by the assigned proofs; and the vector FTC, vector integral norm bound, componentwise continuity/integrability, Gronwall, real-power, chain-rule, and mean-value suppliers used in their arguments. The batch’s proof contracts and the cited supplier statements were checked against the current item text.

External sources checked for the claims under review included Gautam Iyer’s ODE notes (Theorem 1, Theorem 8, Lemma 9, Remark 10, Proposition 17); OpenStax *University Physics* Vol. 3 §§5.8–5.9 for low-speed energy and momentum; OpenStax Vol. 2 §16.1 for the Lorentz-force equation; Carroll, *Lecture Notes on General Relativity*, Ch. 4, for the weak-field/Newtonian limit; Tong, *General Relativity*, §5.1.2, for the stationary weak-field metric and Newtonian-potential correspondence; and the cited Tong/Taylor–Wheeler material for inverse momentum and work. These sources were used as stated in the items; none was treated as empirical evidence for a physical model.

## Repairs

- `lem-rpm-finite-time-ode-comparison`: made the state-Lipschitz hypothesis explicit as a quantified inequality holding for every time and every pair of states in the stated domain. This now supplies the uniform same-time estimate used by the comparison proof.
- `lem-rpm-shell-force-ivp`: specified fixed initial data for the maximal solution and explicitly defined the shell to contain future timelike unit states. Completed the compact continuation argument: a finite cover of the compact shell portion gives a common positive local existence interval; continuity of the vector field gives a bound on the compact tail; vector FTC and the norm-of-integral estimate give a Cauchy endpoint limit; local existence extends the solution through that endpoint; and the same uniform interval proves eventual exit from every compact set at a finite endpoint. The Iyer locator was narrowed to local existence and the maximal continuation alternative, while the finite-cover argument is proved in this item.
- `pthm-rpm-prescribed-em-nr-trajectory-limit`: defined the spatial projection and Euclidean norm convention, made the compact convex comparison set nonempty, stated `c > 0` with its quantifier, and wrote the uniform Lipschitz condition on the prescribed Newtonian vector field explicitly. Defined `v_c = dx_c/dt` and `gamma_c = (1 - |v_c|^2/c^2)^(-1/2)` in the stated worldline and remainder formulas so the later expressions have named meanings.
- `pthm-rpm-controlled-newtonian-reduction`: corrected the Tong §5.1.2 locator to identify only the stationary weak-field metric/Newtonian-potential correspondence supported there; the scaled geodesic estimate is attributed to the linked mathematical theorem.

The affected proof-contract entries were regenerated. The compact-continuation boundary notes were updated for the final proof-step numbering and the explicit `M = 0` case. No changed item contained a stale `verification.judge` record. Reflow and precheck passed on the four changed items.

## Uneditable finding

`thm-gr-weak-field-scaled-trajectory-limit` is a published mathematics dependency of assigned consumer `pthm-rpm-controlled-newtonian-reduction`, clause (b), Fact [L4], and proof step 1.2. In its Proof step 2.1, the derivation of the integral inequality for `D(S)` uses the vector fundamental theorem of calculus and the bound of a vector integral by the integral of its norm. Its declared prerequisites and Facts [L1]–[L4] do not state either result or derive that step. Fact [L2] gives a vector mean-value inequality with a uniform derivative bound; that alone does not establish the pointwise-integrand inequality required for the displayed Gronwall hypothesis. The gap can be closed locally by applying componentwise vector FTC to the two discrepancy curves and then the vector integral norm bound (or by supplying an equivalent proof). This is a nonfatal proof omission in a published dependency and could not be edited in this batch.

## Page verdicts

- `rpm-controlled-limits`: hold pending completion of the published proof step identified above. The page prose and assigned statements otherwise retain their conditional mathematical and physical scope.
- `rpm-controlled-limits-examples`: no page or assigned example defect found. The energy-bound example remains conditional on the reviewed draft supplier `pthm-rpm-inverse-momentum-and-work`.

## Validation and coverage

- Reflow and precheck: all four changed items passed.
- Strict proof-contract check: 0 errors across all four changed items. One nonblocking `shotgun-bracket` warning remains on `pthm-rpm-prescribed-em-nr-trajectory-limit` step 1.1 (five of ten declared facts cited there; two other steps cite none). Manual proof review found no additional inference defect from that warning.
- Final proof layout: `4 items, 18 steps, 0 defects`.
- The first proof-layout invocation could not resolve the application’s local TSX module and alias in this checkout. The final required batch invocation succeeded using the isolated temporary loader/application wrapper under `/private/tmp`; no application or supplier files were changed.
- No workflow blocker remains. Review was limited to batch 31 and the dependency closure needed to check its claims. The published dependency gap above remains for owner disposition.
