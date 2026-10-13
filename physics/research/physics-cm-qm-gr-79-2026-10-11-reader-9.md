# Reader report — batch 9

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `9`

## Opened inventory

Pages reviewed:

- `cm-math-rigid` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-rigid.md`
- `cm-math-rigid-examples` — `library/non-relativistic-classical-mechanics-mathematics/cm-math-rigid-examples.md`

All 19 assigned items were reviewed in dependency order:

- `lem-cm-matrix-curve-derivative-rules`
- `lem-cm-skew-matrix-cross-product-correspondence`
- `def-cm-mass-distribution-and-inertia-matrix`
- `lem-cm-mass-moments-are-finite`
- `def-cm-rigid-placement-and-body-angular-velocity`
- `lem-cm-inertia-matrix-properties`
- `thm-cm-rigid-kinetic-energy-and-angular-momentum`
- `cor-cm-principal-axes-of-the-inertia-matrix`
- `thm-cm-euler-equations-and-torque-free-invariants`
- `thm-cm-stability-of-extreme-principal-axes`
- `thm-cm-instability-of-the-intermediate-axis`
- `thm-cm-linearized-torque-free-euler-equations`
- `lem-cm-coordinate-rotation-matrices`
- `def-cm-euler-angle-parametrization-and-heavy-top-system`
- `thm-cm-heavy-top-reduction`
- `lem-cm-euler-angle-angular-velocity`
- `ex-cm-inertia-tensors-of-point-masses`
- `ex-cm-torque-free-spin-checks`
- `ex-cm-euler-angle-and-heavy-top-checks`

I also opened the direct and claim-relevant transitive mathematical suppliers needed to check the definitions and arguments. These included `def-vector-valued-derivative-and-integral`, `def-nonnegative-simple-measurable-function`, `def-metric-topology`, `lem-metrics-on-rn`, `thm-metric-open-set-algebra`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-matrix-multiplication-laws`, `cor-general-linear-group-is-a-group`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`, and `thm-real-normal-endomorphism-classification`. Cross-batch draft suppliers checked included batch 1's `def-cm-special-orthogonal-group` and `lem-cm-so3-is-a-matrix-group`, and batch 2's `def-cm-equilibrium-and-lyapunov-stability`, `cor-cm-finite-time-breakdown-requires-escape`, and `thm-cm-compact-continuation-for-locally-lipschitz-odes`, together with the mathematical prerequisites used in their relevant claims.

## Repairs made

- `cm-math-rigid`: added conventions defining the one-based physical axes and coordinates, their mapping to the root library's zero-based function indices and matrix entries, matrix trace notation, componentwise differentiability of vector curves, and the Euclidean Borel/topology facts used by the page's measure arguments.
- `def-cm-mass-distribution-and-inertia-matrix`: added its metric-space and open-set-algebra prerequisites for the Borel-measurability claim.
- `lem-cm-mass-moments-are-finite`: added the metric/Borel prerequisites and an explicit fact that closed Euclidean balls are closed and have Borel complements; the proof now cites this when applying the measure to the complement.
- `def-cm-rigid-placement-and-body-angular-velocity`: added the vector-curve derivative definition used in the angular-velocity definition.
- `thm-cm-euler-equations-and-torque-free-invariants`: added the derivative-algebra prerequisite and stated the finite sum/product and inverse-symmetry facts used in differentiating the energy and angular-momentum expressions.
- `thm-cm-stability-of-extreme-principal-axes`: added the Euclidean norm prerequisite, supplied the explicit local bound (2r/I_1), justified boundedness of the compact cylinders, and stated norm continuity for the closed-neighborhood argument.
- `thm-cm-instability-of-the-intermediate-axis`: added the Euclidean norm prerequisite, made the local Lipschitz bound explicit, and stated norm continuity for the invariant-sphere argument.
- `thm-cm-linearized-torque-free-euler-equations`: clarified that the statement concerns the formal diagonal Euler vector field for arbitrary positive distinct entries, and when it represents an actual rigid body; added the linear-map/invertibility and basis prerequisites, and supplied the diagonal inverse calculation.
- `ex-cm-inertia-tensors-of-point-masses`: restricted the integration fact to finite-valued nonnegative measurable functions, matching the simple-minorant argument, and added its simple-function prerequisite.
- `ex-cm-torque-free-spin-checks`: corrected the exact-data description to include the logarithmic escape-time expression (4\log 25).

Updated `research/physics-cm-qm-gr-79-2026-10-11-batch-9.proof-contracts.json` for the changed facts and derivations. No assigned item had a stale `verification.judge` record.

## Findings not edited

1. The B page `cm-math-rigid-examples`, lines 22–23, says every number in the examples is an exact rational or explicit square root. The assigned examples include π-based Euler-angle values and the exact escape time (4\log 25), so the summary claim is false. This is B-page prose and was left for owner disposition.
2. In batch 1's `def-cm-special-orthogonal-group`, Remarks, second bullet (line 42), the claimed preservation of the Euclidean inner product and norm invokes matrix product identities but omits `def-euclidean-inner-product` from the producer's `deps`. The assigned consumer `lem-cm-skew-matrix-cross-product-correspondence` reaches this supplier. This is a nonfatal dependency omission; the consumer's own dependency does not supply the missing prerequisite to the producer.
3. Earlier in this review, batch 2's `thm-cm-compact-continuation-for-locally-lipschitz-odes` was observed using integral norm/additivity results after noting continuity of the integrand without citing its newly added integrability fact [L8], in proof steps 2.1 and 5.1 (reused for clause 2 in 7.1). Its current bytes cite [L8] in steps 2.1 and 5.1. The assigned consumers reaching it are `thm-cm-stability-of-extreme-principal-axes` and `thm-cm-instability-of-the-intermediate-axis`.
4. Earlier in this review, batch 2's `cor-cm-finite-time-breakdown-requires-escape`, Fact [L1], was observed omitting the source statement's restriction (t\in(b-\delta,b)\cap[t_0,b)). Its current Fact [L1] includes that intersection. The same two assigned consumers reach this supplier.

For findings 3–4, the source bytes changed before this split. The historical claims are retained in the findings file, but I cannot bind those earlier bytes to the producer's immutable pre-reader snapshot; accordingly `observed_source` is `null`. The current corrected source bytes are not described as defective.

## Page verdicts and validation

- `cm-math-rigid`: pass after the convention clarifications above.
- `cm-math-rigid-examples`: nonfatal false summary claim retained for owner disposition.

Required checks on all nine changed items passed: reflow reported each item unchanged; precheck reported no failures (the two definitions correctly had zero proof steps to check); proof layout reported 9 items, 43 steps, 0 defects. Strict proof-contract validation reported 0 errors, 0 warnings, and 7/7 changed-item contracts checked. No blocker remains.

Coverage limitation: I reviewed assigned items and the direct/transitive supplier claims used to verify their arguments, not every unrelated claim in each supplier or the wider published library.
