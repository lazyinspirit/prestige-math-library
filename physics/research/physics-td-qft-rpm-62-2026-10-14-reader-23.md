# Step 3a reader report — batch 23

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Date: 2026-10-15

## Inventory reviewed

Assigned pages:

- `rpm-momentum-collisions` (A page)
- `rpm-momentum-collisions-examples` (B page)

Assigned items, reviewed in prerequisite order:

- `pthm-rpm-inverse-momentum-and-work`
- `thm-rpm-finite-future-momentum-sum`
- `def-rpm-collision-objects`
- `post-rpm-isolated-collision-balance`
- `pthm-rpm-system-mass-threshold`
- `pthm-rpm-fixed-target-threshold`
- `pthm-rpm-two-body-com-kinematics`
- `pthm-rpm-two-null-invariant-energy`
- `pthm-rpm-kinematic-elastic-channel`
- `texp-rpm-ideal-fusion-mass`
- `texp-rpm-one-null-decay-recoil`

Page prerequisites opened: `rpm-geometry-actions` and `sr-causality-and-signals`.

Relevant supplier items opened: `post-sr-massive-particle-dynamics`, `def-sr-collision-datum-and-conservation`, `def-sr-total-four-momentum-and-invariant-mass`, `def-sr-observed-energy-momentum-and-kinetic-energy`, `def-sr-affine-minkowski-model`, `def-rpm-spacetime-observer-and-worldline`, `def-rpm-mechanical-momentum-and-observer-energy`, `def-inertial-frame-and-inertial-chart`, `def-spatial-euclidean-structure-of-an-inertial-frame`, `thm-sr-proper-time-and-observer-decomposition`, `def-gr-smooth-lorentzian-objects`, `def-gr-timelike-worldline-and-proper-time`, `def-gr-observer-and-rest-space`, `def-sr-chart-tetrad-and-congruence-distinction`, `post-rpm-massive-test-particle-action`, `post-rpm-null-test-particle-action`, `lem-gr-observer-projection-decomposition`, `def-sr-regular-causal-curve-and-worldline`, `def-sr-four-velocity-and-four-acceleration`, `def-sr-proper-time-derivative-and-four-force`, `def-sr-proper-time`, `lem-sr-proper-time-parametrization`, `def-sr-si-units-and-coordinate-conventions`, `def-sr-causal-reachability-in-affine-minkowski-space`, `lem-sr-future-causal-sums-and-inertial-coordinate-criterion`, `lem-sr-energy-momentum-observer-identities`, `lem-sr-center-of-momentum-frame`, `lem-future-oriented-inertial-frames-exist`, and `thm-cauchy-schwarz-finite`.

Run evidence inspected as context, not verdict: `physics-td-qft-rpm-62-2026-10-14-author-check-23.json`, the batch-23 `review-1.json`, `repair-1.json`, and owner acceptance under `research/physics-td-qft-rpm-62-2026-10-14-scope-review/batch-23/`, and the batch-23 proof-contract entries.

## Review and repair

The nine A-page items and two thought experiments have explicit model scope, units where used, and finite-dimensional deductions. The mathematical finite-sum result correctly separates the causal-cone argument from physical assumptions. The collision postulate is presented as an adopted assumption, while the threshold, two-body, null-momentum, and elastic-channel results are conditional deductions. The thought experiments describe hypothetical channels and do not claim observations or probabilities. The two-null proof uses the cone statement and its computed invariant; it no longer relies on the removed center-of-momentum assertion noted in earlier review evidence.

I repaired one missing-hypothesis defect in `pthm-rpm-fixed-target-threshold` (Statement and Proof steps 1.1–2.1). Before repair, the system threshold was applied without stating that the projectile and target were the complete incoming list, that the proposed final list was complete, or that the adopted isolated-balance postulate related their totals. The system-threshold supplier applies only to a complete mass-specified isolated datum satisfying that balance. The item now states those conditions, defines `Q = P1 + P2` as the common total, adds `def-rpm-collision-objects` and `post-rpm-isolated-collision-balance` as prerequisites with their proper dependency roles, and cites the conditions in its proof and contract. The numeric conclusion is unchanged.

Repository search found no item consumer of `pthm-rpm-fixed-target-threshold`; its only occurrence outside its carrier is its A-page placement. The page summary remains accurate. The changed item had no `verification.judge` record to remove. Reflow reported the item unchanged, and scoped precheck passed: `PASS items/pthm-rpm-fixed-target-threshold.md (direct)`. No page prose was edited.

## Page verdicts

- `rpm-momentum-collisions`: the item claims and page summary are sound after the fixed-target hypothesis repair. No unresolved content defect found.
- `rpm-momentum-collisions-examples`: both entries are complete conditional constructions; the page summary correctly says neither reports an event or asserts a channel occurs. No unresolved content defect found.

## Uneditable defects and blocker

No confirmed defect remains that I could not edit, and no defect was found in a supplier outside this batch that needs routing.

The required final proof-layout command was attempted once for the changed item but could not load the renderer. It failed with `ERR_MODULE_NOT_FOUND: Cannot find package '@/components'` imported from `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. This is an environment/tooling blocker; the item passed scoped precheck, but proof-layout validation is not confirmed.

## Coverage limits

I reviewed the assigned items, pages, proof contracts, and the relevant supplier statements and proofs listed above. I did not audit the complete transitive foundational proofs beneath the published Minkowski-space and real-analysis suppliers. No external source lookup was needed to check these explicit finite-dimensional and algebraic arguments; cited literature was not treated as proof of the authored claims.
