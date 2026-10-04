# Fluid Dynamics — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/extended-frameworks-2026-10-03/fluid-dynamics/inventory-and-pathway.md` (SHA-256 e2c18bed34b999c9f7123e8551314d452a78c5dd0da8fa2ca7cca465910b9102).
- `research/extended-frameworks-2026-10-03/fluid-dynamics/prose-scaffold.md` (SHA-256 931684d953239d93bd019b8fd0ac432c70a787f345cd3d61f7f4c9cc40f91b20).
- `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json` (SHA-256 d98ab6849f2979b54d0c6fc4260231f49a3c16587197fa3f0a21056ed9e28c76).
- `research/extended-frameworks-2026-10-03/fluid-dynamics/supplier-map.json` (SHA-256 a121c7fdcf31b19984a26370b55f6f4ede09dfc6fb76a71fafb37c5b960afe95).
- `research/extended-frameworks-2026-10-03/fluid-dynamics/closure-ledger.json` (SHA-256 d582b409bd3db1a4e2efcf20d9ffc455dc5e8aad716b5786ab8ec4bbea43bb9b).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Finite weighted ensemble and covariance

A page `fd-c01`; B companion `fd-c01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 361. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-mf01`; B companion `fd-mf01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 363. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-f01`; B companion `fd-f01-examples`. Category `fluid-dynamics`; library `physics`.
Order 365. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-c02`; B companion `fd-c02-examples`. Category `fluid-dynamics`; library `physics`.
Order 367. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-x01`; B companion `fd-x01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 369. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-x02`; B companion `fd-x02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 371. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-x03`; B companion `fd-x03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 373. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-mf02`; B companion `fd-mf02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 375. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-f02`; B companion `fd-f02-examples`. Category `fluid-dynamics`; library `physics`.
Order 377. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-mf03`; B companion `fd-mf03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 379. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-f03`; B companion `fd-f03-examples`. Category `fluid-dynamics`; library `physics`.
Order 381. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-px01`; B companion `fd-px01-examples`. Category `fluid-dynamics`; library `physics`.
Order 383. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-px02`; B companion `fd-px02-examples`. Category `fluid-dynamics`; library `physics`.
Order 385. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-px03`; B companion `fd-px03-examples`. Category `fluid-dynamics`; library `physics`.
Order 387. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-mf04`; B companion `fd-mf04-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 389. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-f04`; B companion `fd-f04-examples`. Category `fluid-dynamics`; library `physics`.
Order 391. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-s01`; B companion `fd-s01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 393. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `hilbert-space-geometry-and-riesz-representation`, `relations-functions-and-quotients`, `weak-derivatives-and-sobolev-spaces`.

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

A page `fd-s02`; B companion `fd-s02-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 395. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-s03`; B companion `fd-s03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 397. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-ps01`; B companion `fd-ps01-examples`. Category `fluid-dynamics`; library `physics`.
Order 399. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-ps02`; B companion `fd-ps02-examples`. Category `fluid-dynamics`; library `physics`.
Order 401. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-w01`; B companion `fd-w01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 403. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-w03`; B companion `fd-w03-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 405. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-w02`; B companion `fd-w02-examples`. Category `fluid-dynamics`; library `physics`.
Order 407. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-k01`; B companion `fd-k01-examples`. Category `fluid-dynamics-mathematics`; library `mathematics`.
Order 409. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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

A page `fd-k02`; B companion `fd-k02-examples`. Category `fluid-dynamics`; library `physics`.
Order 411. Exact source inventory: `research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json`.
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
