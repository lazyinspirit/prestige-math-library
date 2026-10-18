# Step 3a reader report — batch 42

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Review date: 2026-10-18

## Scope and opened inventory

The assigned manifest lists two pages and 24 items. I opened both assigned pages and all 24 assigned items.

Assigned pages:

- `yee-fdtd-and-transient-maxwell-discretization` (A)
- `yee-fdtd-and-transient-maxwell-discretization-examples` (B)

The A page requires these prerequisite pages, which I also opened:

- `hyperbolic-finite-difference-methods`
- `parabolic-finite-element-methods`
- `discrete-de-rham-complexes-and-edge-elements`

Assigned A items, reviewed in the manifest's dependency-level order:

- `lem-maxwell-rectangular-stokes-identity`
- `def-transient-maxwell-system-with-material-interfaces`
- `def-maxwell-discrete-cochain-and-yee-grid`
- `lem-maxwell-discrete-incidence-identities`
- `lem-maxwell-yee-step-matrix-is-positive-definite`
- `def-maxwell-edge-fem-semidiscretization`
- `alg-maxwell-yee-leapfrog-update`
- `lem-maxwell-finite-dimensional-ode-existence-uniqueness`
- `def-maxwell-edge-ritz-projection`
- `lem-maxwell-nedelec-smooth-interpolation-estimate`
- `thm-maxwell-yee-gauss-constraints-propagate`
- `thm-maxwell-yee-strict-cfl-modified-energy`
- `lem-maxwell-periodic-yee-consistency`
- `thm-maxwell-edge-fem-energy-conservation`
- `lem-maxwell-edge-ritz-projection-well-defined`
- `thm-maxwell-yee-cartesian-dispersion-and-cfl`
- `thm-maxwell-periodic-yee-smooth-solution-error`
- `thm-maxwell-yee-midpoint-conductivity-energy-balance`
- `lem-maxwell-magnetic-compatible-initial-projection`
- `thm-maxwell-edge-fem-smooth-solution-error`

Assigned B items:

- `ex-maxwell-pec-rectangular-cavity-mode`
- `ex-maxwell-dielectric-jump-reflection`
- `ex-maxwell-incompatible-current-gauss-drift`
- `ex-maxwell-yee-periodic-plane-wave-dispersion`

To check the assigned arguments, I opened the directly used finite element suppliers and local analytic inputs, including `def-na-hcurl-space`, `def-na-hdiv-space`, `def-na-lowest-order-whitney-de-rham-spaces`, `def-na-zero-tangential-hcurl`, `def-matching-affine-simplicial-meshes`, `def-covariant-contravariant-piola-maps-and-hdiv-hcurl`, `thm-affine-piola-differential-and-trace-moment-identities`, `lem-na-nedelec-edge-unisolvence`, `lem-na-whitney-moments-commute-with-grad-curl-div`, `lem-na-graded-whitney-mesh-size-and-boundary-shifts`, `lem-na-whitney-averaged-pullback-moment-bounds`, `lem-na-whitney-cochain-correction-and-strong-convergence`, and `thm-na-uniformly-bounded-commuting-cochain-projection`. I also opened the linear matrix ODE supplier, the simplex Stokes input, the smooth interpolation and convolution inputs, and the measure and density results used by the averaged projection construction.

For source checking, I read the relevant passages in the batch's local source cache: Schneider, Chapter 2 §§2.7–2.14, Chapter 3 §§3.2–3.3 and 3.12, Chapter 5 §5.8, Chapter 7 §7.4, Chapter 8 §8.8, and Chapter 9 §§9.3 and 9.7; Chen, §§1.1–1.3 and §2; and Arnold–Falk–Winther, §§5.2 and 5.4–5.5. The AFW projection discussion is an outline; I checked the repository's current local projection construction rather than treating the outline as its proof.

## Review results

No confirmed mathematical defect was found in the assigned statements, definitions, algorithms, witnesses, computations, or page summaries. In particular, the current Maxwell edge error proof supplies the closure and time regularity steps it needs, and its magnetic initialization relies on the current local averaged projection and correction arguments. The older readiness records described in source evidence were not used as a mathematical verdict.

| Assigned item | Review disposition |
| --- | --- |
| `lem-maxwell-rectangular-stokes-identity` | No mathematical defect found; proof-step spacing repaired. |
| `def-transient-maxwell-system-with-material-interfaces` | No confirmed defect found. |
| `def-maxwell-discrete-cochain-and-yee-grid` | No confirmed defect found. |
| `lem-maxwell-discrete-incidence-identities` | No mathematical defect found; proof-step spacing repaired. |
| `lem-maxwell-yee-step-matrix-is-positive-definite` | No confirmed defect found. |
| `def-maxwell-edge-fem-semidiscretization` | No confirmed defect found. |
| `alg-maxwell-yee-leapfrog-update` | Inputs, rows, ordering, and solvability dependency are specified; no defect found. |
| `lem-maxwell-finite-dimensional-ode-existence-uniqueness` | No confirmed defect found. |
| `def-maxwell-edge-ritz-projection` | No confirmed defect found. |
| `lem-maxwell-nedelec-smooth-interpolation-estimate` | No confirmed defect found. |
| `thm-maxwell-yee-gauss-constraints-propagate` | No confirmed defect found. |
| `thm-maxwell-yee-strict-cfl-modified-energy` | No mathematical defect found; proof-step spacing repaired. |
| `lem-maxwell-periodic-yee-consistency` | No confirmed defect found. |
| `thm-maxwell-edge-fem-energy-conservation` | No confirmed defect found. |
| `lem-maxwell-edge-ritz-projection-well-defined` | No mathematical defect found; proof-step spacing repaired. |
| `thm-maxwell-yee-cartesian-dispersion-and-cfl` | No confirmed defect found. |
| `thm-maxwell-periodic-yee-smooth-solution-error` | No confirmed defect found. |
| `thm-maxwell-yee-midpoint-conductivity-energy-balance` | No confirmed defect found. |
| `lem-maxwell-magnetic-compatible-initial-projection` | No confirmed defect found. |
| `thm-maxwell-edge-fem-smooth-solution-error` | No confirmed defect found. |
| `ex-maxwell-pec-rectangular-cavity-mode` | Boundary conditions and field equations check directly; no defect found. |
| `ex-maxwell-dielectric-jump-reflection` | Interface equations and amplitudes check directly; no defect found. |
| `ex-maxwell-incompatible-current-gauss-drift` | The displayed residual follows from the oriented edge incidence; no defect found. |
| `ex-maxwell-yee-periodic-plane-wave-dispersion` | Fourier values, polarizations, and cubic limit check; no defect found. |

### Page verdicts

- `yee-fdtd-and-transient-maxwell-discretization`: The summary matches the assigned Yee and edge finite element items, including the stated smoothness and boundary qualifications. No confirmed page defect found.
- `yee-fdtd-and-transient-maxwell-discretization-examples`: The summary matches the four assigned examples. No confirmed page defect found.

## Edits and validation

I added the required blank line between consecutive numbered proof steps in these four assigned A items, without changing proof content:

- `lem-maxwell-rectangular-stokes-identity`
- `lem-maxwell-discrete-incidence-identities`
- `lem-maxwell-edge-ritz-projection-well-defined`
- `thm-maxwell-yee-strict-cfl-modified-energy`

For each changed item, `tools/reflow.mts` reported `unchanged`, and `tools/precheck.mts` passed. The required final batched command, `node tools/proof-layout.mjs` on all four changed item paths, reported `4 items, 13 steps, 0 defects`. These were formatting-only edits: no statement, definition, dependency, or proof step changed, so no proof-contract content or judge record required an update.

## Uneditable defects and blockers

No confirmed defect requiring an uneditable finding remains. There is no batch-specific mathematical blocker.

The run status check on 2026-10-18 reported unrelated Step 3a blockers for collection batch 7 and split batch 11; neither concerns batch 42.

Coverage limitation: the proof-contract file was opened and its 24-item scope was confirmed, but its per-item contract clauses were not emitted for inspection. I compared the current item metadata and proof bodies, but do not claim a complete clause-by-clause contract audit. I also checked the direct mathematical supplier material needed for these claims, not every transitive foundational proof behind those suppliers.
