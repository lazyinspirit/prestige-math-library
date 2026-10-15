# Relativistic Particle Mechanics — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/pathway-and-inventory.md` (SHA-256 43dfc25152b8403e959c0a79f3e53b24700e2bdebd5801bb047492bb763b72f0).
- `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/prose-scaffold.md` (original splice hash superseded by the current audited hash recorded below).
- `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json` (SHA-256 720bf1d7d851a308eb1e7560f593742fe6de15ca399414244d23727edeb2f53e).
- `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/supplier-map.json` (SHA-256 00f6f24c9f3ee3da2e87b7dc2f956940107bf5ba5fc955005439ffbc4340d493).
- `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/closure-ledger.json` (SHA-256 0b47a2c127aa7f039b31aa646f6f5d6cb2d2680d4fe24ca2165f3239e1d54da7).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Particle spacetime, observers and worldlines

A page `rpm-geometry-actions`; B companion `rpm-geometry-actions-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 413. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `euclidean-ordinary-differential-equations-with-smooth-dependence`, `gr-causal-and-initial-value-boundaries`, `picard-lindelof-and-first-order-odes`, `sr-energy-momentum`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-geometry-actions",
  "side": "A",
  "library": "physics",
  "items": [
    "def-rpm-spacetime-observer-and-worldline",
    "lem-rpm-shell-tangent-force-ivp",
    "post-rpm-test-clock-and-background",
    "thm-rpm-proper-time-parametrization",
    "lem-rpm-length-action-first-variation",
    "post-rpm-massive-test-particle-action",
    "post-rpm-null-test-particle-action",
    "def-rpm-mechanical-momentum-and-observer-energy",
    "lem-rpm-einbein-variation-and-equivalence",
    "post-rpm-prescribed-force-law",
    "pthm-rpm-free-massive-and-null-geodesics",
    "pthm-rpm-killing-particle-charge",
    "pthm-rpm-mass-shell-and-force-work"
  ],
  "deps": [],
  "companion": "rpm-geometry-actions-examples"
}
```


## Mass shell inversion, observer work and variable mass

A page `rpm-momentum-collisions`; B companion `rpm-momentum-collisions-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 415. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `rpm-geometry-actions`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-momentum-collisions",
  "side": "A",
  "library": "physics",
  "items": [
    "pthm-rpm-inverse-momentum-and-work",
    "thm-rpm-finite-future-momentum-sum",
    "def-rpm-collision-objects",
    "post-rpm-isolated-collision-balance",
    "pthm-rpm-system-mass-threshold",
    "pthm-rpm-fixed-target-threshold",
    "pthm-rpm-two-body-com-kinematics",
    "pthm-rpm-two-null-invariant-energy",
    "pthm-rpm-kinematic-elastic-channel"
  ],
  "deps": [
    "rpm-geometry-actions"
  ],
  "companion": "rpm-momentum-collisions-examples"
}
```

## Fixed-endpoint curved charge variation

A page `rpm-external-charge`; B companion `rpm-external-charge-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 417. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `em-lorentz-covariant-formulation`, `rpm-geometry-actions`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-external-charge",
  "side": "A",
  "library": "physics",
  "items": [
    "lem-rpm-curved-charge-action-variation",
    "lem-rpm-external-charge-local-ivp",
    "def-rpm-charge-spin-model",
    "lem-rpm-charge-gauge-boundary",
    "post-rpm-bmt-dipole-model",
    "post-rpm-external-charge-action",
    "pthm-rpm-external-charge-action-equivalence",
    "pthm-rpm-charge-mass-shell"
  ],
  "deps": [
    "rpm-geometry-actions"
  ],
  "companion": "rpm-external-charge-examples"
}
```

## Cotangent phase data, observables and action dimensions

A page `rpm-hamiltonian-constraints`; B companion `rpm-hamiltonian-constraints-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 419. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `distributions-integral-manifolds-and-the-frobenius-theorem`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `hamiltonian-mechanics-and-completely-integrable-systems`, `rank-theorems-and-embedded-submanifolds`, `rpm-geometry-actions`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-hamiltonian-constraints",
  "side": "A",
  "library": "physics",
  "items": [
    "def-rpm-h-cotangent-phase-space",
    "def-rpm-h-temporal-chart-data",
    "def-rpm-h-almost-regular-legendre",
    "def-rpm-h-background-and-model-quantities",
    "def-rpm-h-regular-constraint-system",
    "thm-rpm-h-canonical-poisson-and-flow",
    "post-rpm-h-free-test-particle-action",
    "post-rpm-h-massless-shell-action",
    "thm-rpm-h-constraint-consistency",
    "thm-rpm-h-first-class-local-reduction",
    "thm-rpm-h-homogeneous-legendre-degeneracy",
    "thm-rpm-h-local-legendre-and-energy-descent",
    "thm-rpm-h-second-class-dirac-bracket",
    "thm-rpm-h-flat-shell-global-reduction",
    "thm-rpm-h-homogeneous-massive-shell",
    "thm-rpm-h-regular-local-gauge-slice",
    "thm-rpm-h-first-order-action-and-geodesics",
    "thm-rpm-h-inertial-time-reduced-hamiltonian",
    "pthm-rpm-h-action-mechanical-momentum",
    "pthm-rpm-h-massive-and-null-time-motion",
    "thm-rpm-h-temporal-shell-reduction",
    "pthm-rpm-h-coordinate-versus-observer-energy"
  ],
  "deps": [
    "rpm-geometry-actions"
  ],
  "companion": "rpm-hamiltonian-constraints-examples"
}
```

## Poincare semidirect group, dual pairing and moment components

A page `rpm-symmetries-hamilton-jacobi`; B companion `rpm-symmetries-hamilton-jacobi-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 421. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `moment-maps-and-symplectic-reduction`, `rpm-hamiltonian-constraints`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-symmetries-hamilton-jacobi",
  "side": "A",
  "library": "physics",
  "items": [
    "def-rpm-h-poincare-charge-space",
    "thm-rpm-h-local-hamilton-jacobi",
    "thm-rpm-h-poincare-moment-map-and-algebra",
    "thm-rpm-h-positive-spin-orbit",
    "post-rpm-h-classical-spin-orbit-model",
    "thm-rpm-h-spinless-kks-identification",
    "pthm-rpm-h-classical-orbit-evolution",
    "thm-rpm-h-killing-shell-first-integral",
    "pthm-rpm-h-free-symmetry-conservation",
    "thm-rpm-h-complete-integral-coordinates",
    "pthm-rpm-h-hj-trajectories"
  ],
  "deps": [
    "rpm-hamiltonian-constraints"
  ],
  "companion": "rpm-symmetries-hamilton-jacobi-examples"
}
```

## BMT constraint and restricted-ansatz algebra

A page `rpm-spin-finite-size`; B companion `rpm-spin-finite-size-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 423. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `cm-math-dynamics`, `em-electrostatics-in-vacuum`, `gr-gr13-convex-normal-neighborhoods`, `rpm-external-charge`, `sr-accelerated-observers`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-spin-finite-size",
  "side": "A",
  "library": "physics",
  "items": [
    "lem-rpm-bmt-transport-algebra",
    "lem-rpm-body-spin-size-bound",
    "lem-rpm-charge-multipole-remainder",
    "lem-rpm-flat-centroid-shift",
    "lem-rpm-ssc-momentum-identity",
    "lem-rpm-td-local-closure",
    "def-rpm-body-moments",
    "post-rpm-mpd-truncation",
    "pthm-rpm-bmt-constraints",
    "pthm-rpm-spherical-charge-size-bound",
    "pthm-rpm-hidden-momentum",
    "pthm-rpm-rest-spin-and-size-bound",
    "pthm-rpm-td-invariants"
  ],
  "deps": [
    "rpm-external-charge"
  ],
  "companion": "rpm-spin-finite-size-examples"
}
```

## Right-wedge accelerated clocks and rays

A page `rpm-exact-flat-orbits`; B companion `rpm-exact-flat-orbits-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 425. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `cm-math-dynamics`, `rpm-external-charge`, `sr-accelerated-observers`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-exact-flat-orbits",
  "side": "A",
  "library": "physics",
  "items": [
    "pthm-rpm-rindler-clock-gradient",
    "pthm-rpm-constant-electric-orbit",
    "pthm-rpm-constant-magnetic-helix",
    "pthm-rpm-crossed-field-drift"
  ],
  "deps": [
    "rpm-external-charge"
  ],
  "companion": "rpm-exact-flat-orbits-examples"
}
```

## Circular timelike orbit and reduced radial stability

A page `rpm-curved-orbits-scattering`; B companion `rpm-curved-orbits-scattering-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 427. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `cm-math-central`, `cm-math-dynamics`, `gr-spherical-vacuum-model`, `rpm-external-charge`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-curved-orbits-scattering",
  "side": "A",
  "library": "physics",
  "items": [
    "pthm-rpm-schwarzschild-circular-stability",
    "pthm-rpm-schwarzschild-null-scattering",
    "pthm-rpm-static-clock-redshift",
    "pthm-rpm-relativistic-coulomb-scattering"
  ],
  "deps": [
    "rpm-external-charge"
  ],
  "companion": "rpm-curved-orbits-scattering-examples"
}
```

## Reduced-order LL local ODE and shell

A page `rpm-radiation-models`; B companion `rpm-radiation-models-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 429. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `rpm-external-charge`, `rpm-spin-finite-size`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-radiation-models",
  "side": "A",
  "library": "physics",
  "items": [
    "lem-rpm-ll-reduced-ode",
    "lem-rpm-reduction-residual",
    "post-rpm-lad-effective-equation",
    "rem-rpm-self-force-status"
  ],
  "deps": [
    "rpm-external-charge",
    "rpm-spin-finite-size"
  ],
  "companion": "rpm-radiation-models-examples"
}
```

## Finite-time comparison of bounded vector fields

A page `rpm-controlled-limits`; B companion `rpm-controlled-limits-examples`. Category `relativistic-particle-mechanics`; library `physics`.
Order 431. Exact source inventory: `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `em-lorentz-covariant-formulation`, `gr-flat-and-newtonian-bridges`, `rpm-momentum-collisions`, `rpm-geometry-actions`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "rpm-controlled-limits",
  "side": "A",
  "library": "physics",
  "items": [
    "lem-rpm-finite-time-ode-comparison",
    "lem-rpm-low-speed-remainders",
    "lem-rpm-low-speed-uniform-remainders",
    "lem-rpm-shell-force-ivp",
    "pthm-rpm-prescribed-em-nr-trajectory-limit",
    "pthm-rpm-prescribed-force-local-motion",
    "pthm-rpm-controlled-newtonian-reduction"
  ],
  "deps": [
    "rpm-geometry-actions"
  ],
  "companion": "rpm-controlled-limits-examples"
}
```

## 2026-10-12 audit binding and current hashes

The audited prose and exact supplier disposition are recorded in
[`report.md`](scaffold-audit-2026-10-12/relativistic-particle-mechanics/report.md),
[`source-reading.json`](scaffold-audit-2026-10-12/relativistic-particle-mechanics/source-reading.json),
[`supplier-map.json`](scaffold-audit-2026-10-12/relativistic-particle-mechanics/supplier-map.json),
[`integration-changes.json`](scaffold-audit-2026-10-12/relativistic-particle-mechanics/integration-changes.json),
[`definition-coverage.json`](scaffold-audit-2026-10-12/relativistic-particle-mechanics/definition-coverage.json),
and [`exclusions.json`](scaffold-audit-2026-10-12/relativistic-particle-mechanics/exclusions.json).
The actual physics draft clauses remain draft suppliers; local RPP developments
remain research arguments and do not constitute production acceptance.

Current audited carrier hashes (SHA-256, relative to `physics/`):

- `research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/prose-scaffold.md`: `79d4c7b832ad3481b960d47ae0b49a10c88ff23ba4f63144d169539114c21af2`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/framework-contracts.md`: `fbaa58e215375633832db70f11c0b2f88ac03367fd14722dd4bc7a3256fd05bf`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/lorentz-foundations.md`: `22a5330574b544b0e4dfb74e0550bf74acbb8533a0e084f2d27cc20fd796a01a`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/source-reading.json`: `a512ab5cb770990139ccf8c6f1b823c6ae2b15cef695527799b978e26a993123`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/supplier-map.json`: `8f758bd71bccf19a50d60f0247e54893cb238f57284f0e5be6de5c28f3506f58`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/integration-changes.json`: `555acc0043aa9b10443611c200d10c01d4f3583a336f4e5b429661c198fd8877`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/definition-coverage.json`: `6f07013dd932380b19c8b12960f3f1509a8ced88522a7b34272d8231ef2bc6ee`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/exclusions.json`: `2b998b9d88a988fe4d868481247f5476b2f6730e4a858a0c75083e3ecbb536ad`
- `research/scaffold-audit-2026-10-12/relativistic-particle-mechanics/report.md`: `52d7be2bd7feb99318d629dd5234ff9fcb46c21375d86c14a25b80dd82e4669d`

The weak-field trajectory theorem is the current draft item
`items/thm-gr-weak-field-scaled-trajectory-limit.md`, on A-home
`gr-flat-and-newtonian-bridges` (order 245). The RPP page
`rpm-controlled-limits` (order 431) keeps that exact necessary page edge. A
forward GR14 prerequisite was observed during the audit and then removed by
the GR owner from the canonical plan-spec and library page. The current library
page no longer declares that edge; root reports the selected-plan validator
passes. The former reading-order hold is resolved externally. This audit did
not edit GR metadata.

The audit excludes statistics, statistical models, Bayesian inference,
computational statistics, numerical analysis, numerical methods, P-NUM and
solver/convergence artifacts from every direct, indirect and prospective
supplier path. Exact ODE/analysis and the actual GR weak-field draft remain in
scope under their recorded hypotheses.
