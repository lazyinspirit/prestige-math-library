# Fluid dynamics — controlling owner refresh, 2026-10-18

This is the current discoverable top-level design for all47 fluid A/B pairs (272 reserved items), including all26 original pairs and21 additions. It carries the complete successor prose and reservations below. The owner-directed2026-10-18 refresh controls wherever the historical `research/plan-fluid-dynamics-track.md` also matches. Preserve every sound original claim and stable ID; the old top-level index and five predecessor design files remain historical evidence, not the controlling refresh. The former physics run is verified concluded in `../research/scaffold-refresh-2026-10-18/fluid-dynamics/foreign-run-status.json`; no foreign engine control or recertification is involved.

The complete nested version is `research/scaffold-refresh-2026-10-18/fluid-dynamics/plan-fluid-dynamics-track.md`. Its precise inventory, substantive new arguments, inherited modules, supplier interfaces and closure/source limitations remain required sources. This top-level file exists because the unchanged task generator discovers only `research/plan-*.md` headings/ID mentions; registry `scaffold` fields alone do not provide discovery. Each pair section below explicitly states this refresh's controlling precedence.

# Fluid dynamics — complete successor reservation, 2026-10-18

Unregistered versioned successor. Preserve sealed predecessor bytes. This file supersedes no live run input; root alone integrates at the end of all three scaffold efforts; the predecessor physics run is verified concluded. All original reservation blocks below remain, now linked to the coherent successor design. New proposed A/B orders659–700 are below and in root registration-proposal.json; rebase on integration if another plan changes.

# Fluid Dynamics — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/scaffold-refresh-2026-10-18/fluid-dynamics/inventory-and-pathway.md` (SHA-256 c32f7c8150af9998ee51fde2743e37fc93f6b7a292d69041dfcb03b5f73934b8).
- `research/scaffold-refresh-2026-10-18/fluid-dynamics/prose-scaffold.md` (SHA-256 b4ce2b1a11671e6ee5a46f4cca536542890ff958234bbbee7d08b835afc9710c).
- `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json` (SHA-256 62f371a98af07331b8b6b97e8a1849002f546a7cf150814cb3128b5713698200).
- `research/scaffold-refresh-2026-10-18/fluid-dynamics/supplier-map.json` (SHA-256 418ec4687fc95261b610aad6f531294e761a8287cdf21ce01ad52f780dd5a6c4).
- `research/scaffold-refresh-2026-10-18/fluid-dynamics/closure-ledger.json` (SHA-256 64c577f15368ee498f8bfed00eca7d495c43b9a1576394f793eb9d58ac2d3a63).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Finite weighted ensemble and covariance

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-c01`; B companion `fd-c01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 361. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: none.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-C01",
  "library": "mathematics",
  "A": [
    "def-fdmath-finite-ensemble-and-covariance",
    "thm-fdmath-finite-reynolds-identity",
    "thm-fdmath-mean-fluctuation-energy-transfer"
  ],
  "B": [
    "cex-fdmath-mean-does-not-determine-covariance"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Smooth material configurations and Eulerian fields

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-mf01`; B companion `fd-mf01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 363. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fubini-and-change-of-variables`, `inverse-and-implicit-function-theorems`, `the-total-derivative`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-MF01",
  "library": "mathematics",
  "A": [
    "def-fd-smooth-motion",
    "lem-fd-transport-and-density",
    "lem-fd-observer-calculus"
  ],
  "B": [
    "ex-fdmath-dilation-jacobian"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Classical frames, primitive quantities and SI units

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-f01`; B companion `fd-f01-examples`. Category `fluid-dynamics`; library `physics`.
Order 365. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-mf01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-F01",
  "library": "physics",
  "A": [
    "def-fd-quantity-and-frame-conventions",
    "post-fd-continuum-balances",
    "pthm-fd-smooth-material-kinematics"
  ],
  "B": [
    "ex-fd-material-dilation",
    "cex-fd-incompressibility-not-homogeneity",
    "cex-fd-unsteady-pathlines-streamlines",
    "cex-fd-spin-sensitive-stress"
  ],
  "requires": [
    "FD-MF01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Turbulent averaging and open closure questions

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-c02`; B companion `fd-c02-examples`. Category `fluid-dynamics`; library `physics`.
Order 367. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-c01`, `fd-f01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-C02",
  "library": "physics",
  "A": [
    "rem-fd-turbulence-and-closure-scope"
  ],
  "B": [
    "ex-fd-reynolds-stress-sign-and-units"
  ],
  "requires": [
    "FD-C01",
    "FD-F01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Formal parameterized fluid systems and observables

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-x01`; B companion `fd-x01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 369. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `the-divergence-theorem-and-classical-stokes`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-X01",
  "library": "mathematics",
  "A": [
    "def-fd-x00",
    "thm-fd-x01",
    "thm-fd-x02",
    "thm-fd-x03"
  ],
  "B": [
    "ex-fd-x02-application",
    "ex-fd-x03-application",
    "ex-fd-x01-formal-verification"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Plane and pipe Couette–Poiseuille verification

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-x02`; B companion `fd-x02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 371. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `euclidean-surface-measure-divergence-and-green-identities`, `fd-x01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-X02",
  "library": "mathematics",
  "A": [
    "thm-fd-x04",
    "thm-fd-x05",
    "thm-fd-x06",
    "thm-fd-x08",
    "thm-fd-x09",
    "thm-fd-x13"
  ],
  "B": [
    "ex-fd-x04-formal-verification",
    "ex-fd-x05-formal-verification",
    "ex-fd-x06-formal-verification",
    "ex-fd-x08-formal-verification",
    "ex-fd-x09-formal-verification",
    "ex-fd-x13-formal-verification"
  ],
  "requires": [
    "FD-X01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Bounded-domain Stokes residual estimate

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-x03`; B companion `fd-x03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 373. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `euclidean-surface-measure-divergence-and-green-identities`, `fd-x01`, `rn-as-a-normed-space`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-X03",
  "library": "mathematics",
  "A": [
    "thm-fd-x07",
    "thm-fd-x10",
    "thm-fd-x11"
  ],
  "B": [
    "ex-fd-x11-application",
    "ex-fd-x07-formal-verification",
    "ex-fd-x10-formal-verification"
  ],
  "requires": [
    "FD-X01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Locally integrable conservative weak and initial forms

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-mf02`; B companion `fd-mf02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 375. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `euclidean-surface-measure-divergence-and-green-identities`, `fd-mf01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-MF02",
  "library": "mathematics",
  "A": [
    "def-fd-conservative-weak-form",
    "lem-fd-cauchy-contact",
    "lem-fd-local-balance-equivalence",
    "lem-fd-weak-jump-consistency"
  ],
  "B": [
    "ex-fdmath-vacuum-momentum-degeneracy"
  ],
  "requires": [
    "FD-MF01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Specified wall, thermal, periodic and initial data

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-f02`; B companion `fd-f02-examples`. Category `fluid-dynamics`; library `physics`.
Order 377. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-f01`, `fd-mf02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-F02",
  "library": "physics",
  "A": [
    "post-fd-boundary-data",
    "pthm-fd-cauchy-momentum-angular",
    "pthm-fd-control-volume-balances",
    "pthm-fd-energy-decomposition",
    "post-fd-weak-balances",
    "pthm-fd-conservation-jump-laws"
  ],
  "B": [
    "ex-fd-conduction-energy-entropy",
    "cex-fd-vacuum-velocity-determination"
  ],
  "requires": [
    "FD-F01",
    "FD-MF02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Linear isotropic symmetric stress classification

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-mf03`; B companion `fd-mf03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 379. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-mf02`, `td-math-nonsmooth-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-MF03",
  "library": "mathematics",
  "A": [
    "lem-fd-isotropic-linear-classification",
    "def-fd-simple-fluid-state",
    "lem-fd-gibbs-entropy-residual",
    "lem-fd-response-acoustic-algebra",
    "lem-fd-newtonian-admissibility"
  ],
  "B": [
    "ex-fdmath-negative-bulk-residual"
  ],
  "requires": [
    "FD-MF02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Newtonian stress and Fourier conductive closure

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-f03`; B companion `fd-f03-examples`. Category `fluid-dynamics`; library `physics`.
Order 381. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-f01`, `fd-mf03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-F03",
  "library": "physics",
  "A": [
    "post-fd-newtonian-fourier",
    "def-fd-barotropic-euler-model",
    "def-fd-incompressible-newtonian-model",
    "post-fd-local-equilibrium",
    "pthm-fd-entropy-production",
    "pthm-fd-acoustic-linearization",
    "pthm-fd-perfect-gas-temperature",
    "pthm-fd-newtonian-kinetic-decay"
  ],
  "B": [
    "cex-fd-negative-bulk-viscosity",
    "cex-fd-negative-response-acoustics"
  ],
  "requires": [
    "FD-F01",
    "FD-MF03",
    "FD-MF02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Exact Reynolds and Mach nondimensionalization — conditional physical prediction

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-px01`; B companion `fd-px01-examples`. Category `fluid-dynamics`; library `physics`.
Order 383. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-f02`, `fd-f03`, `fd-x01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-PX01",
  "library": "physics",
  "A": [
    "pthm-fd-px01-prediction"
  ],
  "B": [
    "ex-fd-x01-application"
  ],
  "requires": [
    "FD-X01",
    "FD-F01",
    "FD-F02",
    "FD-F03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Plane and pipe Couette–Poiseuille verification — conditional physical prediction

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-px02`; B companion `fd-px02-examples`. Category `fluid-dynamics`; library `physics`.
Order 385. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-f02`, `fd-f03`, `fd-x02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-PX02",
  "library": "physics",
  "A": [
    "pthm-fd-px04-prediction",
    "def-fd-incompressible-euler-model",
    "pthm-fd-px05-prediction",
    "post-fd-creeping-force-balance",
    "def-fd-creeping-stokes-model",
    "pthm-fd-px06-prediction",
    "pthm-fd-px08-prediction",
    "pthm-fd-px09-prediction",
    "pthm-fd-px13-prediction"
  ],
  "B": [
    "ex-fd-x04-application",
    "ex-fd-x05-application",
    "ex-fd-x06-application",
    "ex-fd-x08-application",
    "ex-fd-x09-application",
    "ex-fd-x13-application"
  ],
  "requires": [
    "FD-X02",
    "FD-F01",
    "FD-F02",
    "FD-F03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Bounded-domain Stokes residual estimate — conditional physical prediction

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-px03`; B companion `fd-px03-examples`. Category `fluid-dynamics`; library `physics`.
Order 387. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-px02`, `fd-x03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-PX03",
  "library": "physics",
  "A": [
    "pthm-fd-px07-prediction",
    "pthm-fd-px10-prediction"
  ],
  "B": [
    "ex-fd-x07-application",
    "ex-fd-x10-application"
  ],
  "requires": [
    "FD-X03",
    "FD-F01",
    "FD-F02",
    "FD-F03",
    "FD-PX02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Generalized Newtonian, Bingham and conformation model equations

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-mf04`; B companion `fd-mf04-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 389. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `cm-math-dynamics`, `fd-mf01`, `td-math-nonsmooth-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-MF04",
  "library": "mathematics",
  "A": [
    "def-fd-nonnewtonian-laws",
    "lem-fd-generalized-newtonian-dissipation",
    "lem-fd-bingham-monotone-graph",
    "lem-fd-conformation-storage"
  ],
  "B": [
    "ex-fdmath-bingham-zero-rate-stress"
  ],
  "requires": [
    "FD-MF01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Restricted non-Newtonian constitutive examples

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-f04`; B companion `fd-f04-examples`. Category `fluid-dynamics`; library `physics`.
Order 391. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-f01`, `fd-mf04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-F04",
  "library": "physics",
  "A": [
    "def-fd-adopted-nonnewtonian-models",
    "pthm-fd-nonnewtonian-conditional-admissibility"
  ],
  "B": [
    "ex-fd-bingham-rest-stress"
  ],
  "requires": [
    "FD-F01",
    "FD-MF04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Periodic fluid Fourier Sobolev spaces

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-s01`; B companion `fd-s01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 393. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`, `weak-derivatives-and-sobolev-spaces`.


Owner prerequisite correction, 2026-10-23 (controlling over the inherited
inventory and unsupported tensorized-E24 premise): use the published
`thm-fourier-basis-and-parseval-on-the-n-torus` on
`orthonormal-bases-parseval-and-fourier-series`. Add that exact theorem to
`def-fd-periodic-fourier-sobolev-spaces.deps` with
`dependency_roles: mathematical-premise`, retaining `def-countable-choice`.
For dimension $d\in\{1,2,3\}$, change variables $x=2\pi y$ from the
normalized unit torus to the $2\pi$-periodic torus: normalized measure becomes
$(2\pi)^{-d}dx$ and the characters become $e^{ik\cdot x}$. The theorem gives
componentwise Parseval and coefficient synthesis; conjugate-symmetric
coefficients yield real representatives by uniqueness. Finite symmetric
cutoffs approximate the weighted coefficient completion. For nonnegative
Sobolev orders the weight is at least one, so this completion embeds in
$L^2$. This does not claim $L^2$ representatives for negative-order
completions. Preserve Countable Choice and all stronger independently required
assumptions in every consuming claim and contract. The remaining embedding,
product, commutator, projection and pressure estimates retain their existing
local proofs and hypotheses; this imported local supplier does not establish
those estimates by itself. The full focused review and all 26 reached A/B
page dispositions are in
`research/fluid-dynamics-all-47-2026-10-23-owner-fourier-resolution/review.json`.
No pair, item, statement or promised argument is removed.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-S01",
  "library": "mathematics",
  "A": [
    "def-fd-periodic-fourier-sobolev-spaces",
    "lem-fd-periodic-fourier-embedding-products",
    "lem-fd-periodic-tame-transport-commutator",
    "def-fd-periodic-leray-pressure-maps",
    "thm-fd-periodic-pressure-recovery",
    "def-fd-projected-no-slip-stokes-space",
    "lem-fd-zero-trace-directional-poincare",
    "thm-fd-projected-stationary-stokes",
    "lem-fd-given-smooth-solutions-difference-energy",
    "lem-fd-rectangular-test-divergence-inverse",
    "thm-fd-rectangular-no-slip-stokes-velocity-pressure"
  ],
  "B": [
    "ex-fd-single-mode-pressure",
    "rem-fd-stokes-pressure-prerequisite"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Local smooth periodic Euler and Navier–Stokes

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-s02`; B companion `fd-s02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 395. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-s01`, `picard-lindelof-and-first-order-odes`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-S02",
  "library": "mathematics",
  "A": [
    "thm-fd-smooth-periodic-incompressible-ivp",
    "def-fd-polytropic-symmetric-variables",
    "thm-fd-smooth-polytropic-euler-ivp",
    "def-fd-smooth-wall-exterior-solution-domains",
    "thm-fd-global-linear-acoustics",
    "thm-fd-compatible-wall-shear-heat"
  ],
  "B": [
    "ex-fd-compressible-viscous-shear",
    "ex-fd-periodic-poiseuille-body-force",
    "ex-fd-couette-vorticity",
    "rem-fd-general-viscous-wall-ivp-gaps"
  ],
  "requires": [
    "FD-S01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Periodic smooth incompressible energy identity

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-s03`; B companion `fd-s03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 397. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `euclidean-surface-measure-divergence-and-green-identities`, `fd-s02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-S03",
  "library": "mathematics",
  "A": [
    "thm-fd-periodic-smooth-incompressible-energy",
    "thm-fd-periodic-smooth-stability",
    "thm-fd-smooth-sobolev-continuation",
    "thm-fd-periodic-inviscid-limit",
    "thm-fd-smooth-vorticity-identities",
    "thm-fd-polytropic-energy",
    "thm-fd-smooth-wall-energy-uniqueness",
    "prop-fd-fluid-equation-scaling",
    "thm-fd-global-two-dimensional-periodic-navier-stokes"
  ],
  "B": [
    "ex-fd-acoustic-energy-mode",
    "rem-fd-global-regularity-open",
    "rem-fd-boundary-layer-low-mach-status"
  ],
  "requires": [
    "FD-S02",
    "FD-S01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Local periodic incompressible model evolution

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-ps01`; B companion `fd-ps01-examples`. Category `fluid-dynamics`; library `physics`.
Order 399. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-f03`, `fd-s03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-PS01",
  "library": "physics",
  "A": [
    "pthm-fd-local-periodic-incompressible-model-evolution",
    "pthm-fd-local-polytropic-model-evolution",
    "pthm-fd-two-dimensional-viscous-model-globality"
  ],
  "B": [
    "ex-fd-homogeneous-polytropic-model"
  ],
  "requires": [
    "FD-F01",
    "FD-F03",
    "FD-S02",
    "FD-S01",
    "FD-S03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Mechanical power balance under adopted wall laws

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-ps02`; B companion `fd-ps02-examples`. Category `fluid-dynamics`; library `physics`.
Order 401. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-f02`, `fd-f03`, `fd-s03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-PS02",
  "library": "physics",
  "A": [
    "pthm-fd-wall-mechanical-power-balance",
    "pthm-fd-linear-acoustic-model-prediction"
  ],
  "B": [
    "ex-fd-adopted-poiseuille-couette"
  ],
  "requires": [
    "FD-F01",
    "FD-F03",
    "FD-F02",
    "FD-S03",
    "FD-S02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Periodic solenoidal Fourier spaces

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-w01`; B companion `fd-w01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 403. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus`, `cm-math-dynamics`, `distributions-test-functions-and-differentiation`, `fd-s01`, `orthonormal-bases-parseval-and-fourier-series`, `product-measures-and-the-fubini-tonelli-theorems`, `smooth-approximation-and-sobolev-extension`, `the-maximal-function-and-lebesgue-differentiation`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-W01",
  "library": "mathematics",
  "A": [
    "def-fd-periodic-solenoidal-spaces",
    "def-fd-weak-time-continuity",
    "lem-fd-finite-mode-compactness",
    "lem-fd-negative-space-nonlinear-bound",
    "def-fd-periodic-leray-hopf",
    "thm-fd-periodic-global-weak-existence",
    "prop-fd-pressure-reconstruction",
    "thm-fd-weak-smooth-uniqueness",
    "def-fd-bounded-solenoidal-spaces",
    "lem-fd-bounded-compactness",
    "lem-fd-no-slip-lsix",
    "thm-fd-bounded-global-weak-existence",
    "prop-fd-bounded-evolving-pressure"
  ],
  "B": [
    "cex-fd-weak-products",
    "rem-fd-weak-regularity-status"
  ],
  "requires": [
    "FD-S01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Distributional systems and entropy flux pairs

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-w03`; B companion `fd-w03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 405. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `cm-math-continuum`, `distributions-test-functions-and-differentiation`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-W03",
  "library": "mathematics",
  "A": [
    "def-fd-conservation-system",
    "def-fd-piecewise-traces",
    "thm-fd-rankine-hugoniot",
    "prop-fd-entropy-jump",
    "def-fd-lax-pattern",
    "thm-fd-convex-scalar-riemann",
    "prop-fd-viscous-entropy-passage"
  ],
  "B": [
    "ex-fd-burgers-shock",
    "ex-fd-burgers-fan",
    "cex-fd-expansion-shock",
    "cex-fd-shock-point-values"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Periodic incompressible Newtonian idealization

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-w02`; B companion `fd-w02-examples`. Category `fluid-dynamics`; library `physics`.
Order 407. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `cm-math-fluid`, `fd-w01`, `td-continuum-heat-model`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-W02",
  "library": "physics",
  "A": [
    "post-fd-periodic-newtonian",
    "pthm-fd-periodic-weak-continuation",
    "pthm-fd-smooth-consistency",
    "post-fd-no-slip-newtonian",
    "pthm-fd-bounded-weak-continuation",
    "pthm-fd-rectangular-weak-pressure"
  ],
  "B": [
    "rem-fd-thermal-coupling"
  ],
  "requires": [
    "FD-W01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Nonnegative kinetic density and moment domain

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-k01`; B companion `fd-k01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 409. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `product-measures-and-the-fubini-tonelli-theorems`, `td-math-mixture-dynamics-and-shells`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-K01",
  "library": "mathematics",
  "A": [
    "def-fd-kinetic-density",
    "def-fd-elastic-collision-measure",
    "prop-fd-kinetic-moment-balances",
    "thm-fd-kinetic-h",
    "thm-fd-collision-maxwellian",
    "prop-fd-maxwellian-moments",
    "thm-fd-controlled-euler-passage",
    "def-fd-conserving-bgk",
    "thm-fd-homogeneous-bgk-limit",
    "prop-fd-bgk-entropy-rate"
  ],
  "B": [
    "cex-fd-collision-support",
    "ex-fd-bgk-initial-layer",
    "rem-fd-kinetic-limit-status"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Single-species elastic Boltzmann model

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-k02`; B companion `fd-k02-examples`. Category `fluid-dynamics`; library `physics`.
Order 411. Exact source inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `fd-k01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "FD-K02",
  "library": "physics",
  "A": [
    "post-fd-boltzmann-model",
    "def-fd-physical-kinetic-observables",
    "pthm-fd-boltzmann-entropy",
    "pthm-fd-ideal-gas-euler-interface",
    "post-fd-bgk-relaxation",
    "pthm-fd-bgk-equilibration"
  ],
  "B": [
    "texp-fd-bgk-preparation"
  ],
  "requires": [
    "FD-K01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Lipschitz Stokes pressure and bounded sensors

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-n01`; B companion `fd-n01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 659/660.

Declared earlier prerequisites: `mixed-finite-elements-and-stokes-stability`.

```json
{
  "pair": "FD-N01",
  "library": "mathematics",
  "A": [
    "def-fd-bounded-stokes-observation-interface",
    "thm-fd-stokes-load-observable-stability",
    "prop-fd-pressure-gauge-observables"
  ],
  "B": [
    "ex-fd-stokes-gradient-forcing-gauge"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Incompressible numerical observable and pressure errors

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-n02`; B companion `fd-n02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 661/662.

Declared earlier prerequisites: `energy-stable-incompressible-navier-stokes-discretization`.

```json
{
  "pair": "FD-N02",
  "library": "mathematics",
  "A": [
    "def-fd-mini-fluid-interface",
    "prop-fd-mini-observation-error",
    "prop-fd-mini-accumulated-pressure-observation",
    "rem-fd-mini-weak-velocity-scope"
  ],
  "B": [
    "ex-fd-mini-pressure-time-test"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Conditional continuum interpretation of mixed CFD

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-pn01`; B companion `fd-pn01-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 663/664.

Declared earlier prerequisites: `fd-f02`, `fd-f03`, `fd-n01`, `fd-n02`, `fd-px02`.

```json
{
  "pair": "FD-PN01",
  "library": "physics",
  "A": [
    "pthm-fd-creeping-lipschitz-pressure",
    "pthm-fd-no-slip-cfd-observations"
  ],
  "B": [
    "ex-fd-cfd-density-pressure-conversion"
  ],
  "requires": [
    "FD-F02",
    "FD-F03",
    "FD-N01",
    "FD-N02",
    "FD-PX02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Compressible numerical conservation and admissibility

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-n03`; B companion `fd-n03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 665/666.

Declared earlier prerequisites: `conservative-finite-volume-weak-limits`, `invariant-domain-and-entropy-stable-conservative-schemes`.

```json
{
  "pair": "FD-N03",
  "library": "mathematics",
  "A": [
    "def-fd-compressible-numerical-contract",
    "prop-fd-euler-llf-admissibility-interface",
    "prop-fd-shared-face-global-conservation",
    "rem-fd-compressible-stability-distinctions"
  ],
  "B": [
    "ex-fd-compressible-constant-state"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Physical interpretation of shock-capturing calculations

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-pn02`; B companion `fd-pn02-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 667/668.

Declared earlier prerequisites: `fd-f02`, `fd-f03`, `fd-n03`.

```json
{
  "pair": "FD-PN02",
  "library": "physics",
  "A": [
    "post-fd-ideal-gas-numerical-model",
    "pthm-fd-conditional-positive-euler-update"
  ],
  "B": [
    "ex-fd-positive-euler-uniform-gas"
  ],
  "requires": [
    "FD-F02",
    "FD-F03",
    "FD-N03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Random fields and dependent fluid statistics

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-st01`; B companion `fd-st01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 669/670.

Declared earlier prerequisites: `banach-valued-integration-and-the-radon-nikodym-property`, `mcmc-clt-and-monte-carlo-standard-error`, `product-measures-and-the-fubini-tonelli-theorems`.

```json
{
  "pair": "FD-ST01",
  "library": "mathematics",
  "A": [
    "def-fd-random-velocity-sensor-law",
    "thm-fd-expected-weak-reynolds",
    "prop-fd-sensor-long-run-clt"
  ],
  "B": [
    "ex-fd-ar1-long-run-variance"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Fluid observable uncertainty and numerical bias budgets

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-st02`; B companion `fd-st02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 671/672.

Declared earlier prerequisites: `fd-st01`, `global-sensitivity-anova-and-sobol-estimation`, `iid-monte-carlo-integration-and-error`.

```json
{
  "pair": "FD-ST02",
  "library": "mathematics",
  "A": [
    "def-fd-random-fluid-observable",
    "alg-fd-uq-observable-budget",
    "thm-fd-observable-sampling-bias-split",
    "rem-fd-fluid-sobol-interface"
  ],
  "B": [
    "ex-fd-all-zero-mc-sample"
  ],
  "requires": [
    "FD-ST01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Dependent profile resampling and observation inference

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-st03`; B companion `fd-st03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 673/674.

Declared earlier prerequisites: `block-bootstrap-for-dependent-data`, `hilbert-valued-clt-for-weakly-dependent-functional-time-series`.

```json
{
  "pair": "FD-ST03",
  "library": "mathematics",
  "A": [
    "def-fd-fluid-profile-bootstrap-interface",
    "prop-fd-profile-functional-bootstrap"
  ],
  "B": [
    "ex-fd-constant-profile-bootstrap"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Assimilation and finite inverse identifiability

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-da01`; B companion `fd-da01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 675/676.

Declared earlier prerequisites: `data-assimilation-variational-and-ensemble-methods`, `kalman-filtering`, `the-spectral-theorem-and-singular-value-decomposition`.

```json
{
  "pair": "FD-DA01",
  "library": "mathematics",
  "A": [
    "def-fd-fluid-coefficient-observation-model",
    "prop-fd-linear-fluid-filter-interface",
    "rem-fd-fluid-enkf-scope",
    "prop-fd-finite-observation-identifiability"
  ],
  "B": [
    "ex-fd-two-mode-one-sensor"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Measurement and assimilation model adoption

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-pda01`; B companion `fd-pda01-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 677/678.

Declared earlier prerequisites: `fd-da01`, `fd-f01`, `fd-st01`.

```json
{
  "pair": "FD-PDA01",
  "library": "physics",
  "A": [
    "post-fd-fluid-observation-and-noise",
    "pthm-fd-conditional-fluid-filter-law"
  ],
  "B": [
    "ex-fd-symbolic-single-sensor"
  ],
  "requires": [
    "FD-DA01",
    "FD-F01",
    "FD-ST01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Filtered stresses and energy transfer

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-les01`; B companion `fd-les01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 679/680.

Declared earlier prerequisites: `fd-s01`.

```json
{
  "pair": "FD-LES01",
  "library": "mathematics",
  "A": [
    "def-fd-positive-convolution-fluid-filter",
    "thm-fd-filtered-covariance-energy",
    "thm-fd-holder-energy-transfer-bound"
  ],
  "B": [
    "ex-fd-filtering-constant-field"
  ],
  "requires": [
    "FD-S01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Adopted turbulent closures and dissipativity

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-ples01`; B companion `fd-ples01-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 681/682.

Declared earlier prerequisites: `fd-f03`, `fd-les01`.

```json
{
  "pair": "FD-PLES01",
  "library": "physics",
  "A": [
    "post-fd-eddy-viscosity-closure",
    "pthm-fd-eddy-closure-resolved-dissipation"
  ],
  "B": [
    "ex-fd-eddy-shear-production"
  ],
  "requires": [
    "FD-F03",
    "FD-LES01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Rotating stratified and shallow-water mathematical models

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-g01`; B companion `fd-g01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 683/684.

Declared earlier prerequisites: `fd-x01`.

```json
{
  "pair": "FD-G01",
  "library": "mathematics",
  "A": [
    "def-fd-rotating-stratified-shallow-equations",
    "thm-fd-stratified-linear-energy",
    "thm-fd-shallow-water-smooth-energy"
  ],
  "B": [
    "ex-fd-geophysical-rest-state"
  ],
  "requires": [
    "FD-X01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Geophysical approximation assumptions

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-pg01`; B companion `fd-pg01-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 685/686.

Declared earlier prerequisites: `fd-f01`, `fd-g01`.

```json
{
  "pair": "FD-PG01",
  "library": "physics",
  "A": [
    "post-fd-geophysical-model-branches",
    "pthm-fd-geophysical-conditional-energy"
  ],
  "B": [
    "ex-fd-coriolis-no-work"
  ],
  "requires": [
    "FD-F01",
    "FD-G01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Diffuse-interface coupling and energy

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-mp01`; B companion `fd-mp01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 687/688.

Declared earlier prerequisites: `fd-x01`.

```json
{
  "pair": "FD-MP01",
  "library": "mathematics",
  "A": [
    "def-fd-diffuse-interface-equations",
    "thm-fd-diffuse-interface-energy"
  ],
  "B": [
    "ex-fd-phase-constant-equilibrium"
  ],
  "requires": [
    "FD-X01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Physical phase-field model adoption

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-pmp01`; B companion `fd-pmp01-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 689/690.

Declared earlier prerequisites: `fd-f01`, `fd-mp01`.

```json
{
  "pair": "FD-PMP01",
  "library": "physics",
  "A": [
    "post-fd-diffuse-interface-material-law",
    "pthm-fd-phase-field-conditional-energy"
  ],
  "B": [
    "ex-fd-phase-outside-unit-interval"
  ],
  "requires": [
    "FD-F01",
    "FD-MP01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Solenoidal reduced dynamics

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-rom01`; B companion `fd-rom01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 691/692.

Declared earlier prerequisites: `fd-s01`, `picard-lindelof-and-first-order-odes`.

```json
{
  "pair": "FD-ROM01",
  "library": "mathematics",
  "A": [
    "def-fd-solenoidal-reduced-ode",
    "thm-fd-reduced-ode-global-energy"
  ],
  "B": [
    "ex-fd-single-shear-reduced-model"
  ],
  "requires": [
    "FD-S01",
    "FD-S02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Residual and distribution-shift surrogate certificates

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-l01`; B companion `fd-l01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 693/694.

Declared earlier prerequisites: `fd-s01`, `fd-st02`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`.

```json
{
  "pair": "FD-L01",
  "library": "mathematics",
  "A": [
    "def-fd-solenoidal-surrogate-residual",
    "thm-fd-surrogate-residual-error",
    "prop-fd-surrogate-law-shift-observable"
  ],
  "B": [
    "ex-fd-unseen-input-shift"
  ],
  "requires": [
    "FD-S01",
    "FD-ST02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Research frontier status and calibrated model evidence

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-fr01`; B companion `fd-fr01-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 695/696.

Declared earlier prerequisites: .

```json
{
  "pair": "FD-FR01",
  "library": "physics",
  "A": [
    "rem-fd-frontier-status-separation",
    "rem-fd-learned-fluid-evidence-scope"
  ],
  "B": [
    "ex-fd-benchmark-space-time-dimension"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Wall-defect estimates and capillary-wave energy

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-bl01`; B companion `fd-bl01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`. Proposed orders 697/698.

Declared earlier prerequisites: `fd-l01`, `fd-x01`.

```json
{
  "pair": "FD-BL01",
  "library": "mathematics",
  "A": [
    "def-fd-wall-defect-capillary-models",
    "thm-fd-common-wall-residual-error",
    "thm-fd-capillary-gravity-dispersion-energy"
  ],
  "B": [
    "ex-fd-capillary-zero-tension-limit"
  ],
  "requires": [
    "FD-L01",
    "FD-X01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Wall and free-surface physical qualifications

Current controlling owner refresh:2026-10-18. This section supersedes conflicting historical fluid design text; retain the full linked successor inventory, arguments, assumptions and qualifications.

A page `fd-pbl01`; B companion `fd-pbl01-examples`. Category `fluid-dynamics`; library `physics`. Proposed orders 699/700.

Declared earlier prerequisites: `fd-bl01`, `fd-f02`.

```json
{
  "pair": "FD-PBL01",
  "library": "physics",
  "A": [
    "post-fd-capillary-linear-free-surface",
    "pthm-fd-capillary-wave-model-prediction"
  ],
  "B": [
    "ex-fd-capillary-restoring-sign"
  ],
  "requires": [
    "FD-BL01",
    "FD-F02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```
