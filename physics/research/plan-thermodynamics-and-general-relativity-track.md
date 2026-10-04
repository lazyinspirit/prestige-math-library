# Thermodynamics and General Relativity — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/inventory-and-pathway.md` (SHA-256 2394820daa26b7dcf771d5dc02c1d7b5583476151e94536ee7023631ffd037ea).
- `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/prose-scaffold.md` (SHA-256 ed3d44625f509a4fd21c43eb90e16038efd83e1a1c27475eb7d7b490b71e0270).
- `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json` (SHA-256 54cffe872643beaff8d9c80aa6733713537aee4f194061e2263bf2962b3e1a31).
- `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/supplier-map.json` (SHA-256 ad2f844abaf3e53682964169e0157b5b8330509e93ac9ee04393adc72d500d07).
- `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/closure-ledger.json` (SHA-256 d32f605b44f1ab357ee5a4f7ef0a8cc709fef82c0f349dc826428c6b218eaf77).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Finite spacelike slab and normal flux charge

A page `tgr-mi01`; B companion `tgr-mi01-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 597. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `gr-einstein-and-matter`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MI01",
  "library": "mathematics",
  "A": [
    "def-tgr-spacelike-current-slab",
    "thm-tgr-finite-current-production-balance"
  ],
  "B": [
    "cex-tgr-open-region-entropy-export"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Classical first-law product leaves entropy-temperature calibration free

A page `tgr-mi02`; B companion `tgr-mi02-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 599. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: none.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MI02",
  "library": "mathematics",
  "A": [
    "lem-tgr-first-law-calibration-freedom"
  ],
  "B": [
    "ex-tgr-two-first-law-calibrations",
    "cex-tgr-entropy-type-identification"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite Killing energy current and reference normalization

A page `tgr-mi03`; B companion `tgr-mi03-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 601. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-mi01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MI03",
  "library": "mathematics",
  "A": [
    "lem-tgr-killing-energy-normalization",
    "cor-tgr-killing-no-work-support"
  ],
  "B": [
    "ex-tgr-reference-wall-normalization"
  ],
  "requires": [
    "TGR-MI01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Rest fluid state,frame and geometric current definitions

A page `tgr-mc01`; B companion `tgr-mc01-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 603. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `gr-connections-and-free-fall`, `inverse-and-implicit-function-theorems`, `td-math-nonsmooth-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MC01",
  "library": "mathematics",
  "A": [
    "def-tgr-local-fluid-state",
    "lem-tgr-local-gibbs-euler",
    "lem-tgr-fluid-frame-projection"
  ],
  "B": [
    "ex-tgrmath-parcel-rest-shift"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Thermodynamics-GR fields, currents, reference normalization and units

A page `tgr-i01`; B companion `tgr-i01-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 605. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-mc01`, `tgr-mi03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-I01",
  "library": "physics",
  "A": [
    "def-tgr-framework-units",
    "post-tgr-local-material-thermodynamics",
    "post-tgr-local-entropy-admissibility",
    "pthm-tgr-finite-entropy-balance"
  ],
  "B": [
    "texp-tgr-insulated-entropy-region"
  ],
  "requires": [
    "TGR-MI03",
    "TGR-MC01",
    "TGR-MI01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Perfect stress and particle balances with entropy identity

A page `tgr-mc02`; B companion `tgr-mc02-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 607. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-mc01`, `the-heat-kernel-and-the-cauchy-problem`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MC02",
  "library": "mathematics",
  "A": [
    "lem-tgr-perfect-fluid-projection",
    "lem-tgr-carter-circulation",
    "lem-tgr-dissipative-entropy-identity",
    "lem-tgr-first-order-model-limits"
  ],
  "B": [
    "ex-tgrmath-null-landau-obstruction"
  ],
  "requires": [
    "TGR-MC01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Complete symmetrized constant-coefficient evolution

A page `tgr-mc03`; B companion `tgr-mc03-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 609. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform`, `tgr-mc02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MC03",
  "library": "mathematics",
  "A": [
    "lem-tgr-constant-linear-energy-causality",
    "lem-tgr-perfect-linear-causality",
    "lem-tgr-bulk-relaxation-entropy",
    "lem-tgr-bulk-linear-causality"
  ],
  "B": [
    "ex-tgrmath-bulk-speed-parameters"
  ],
  "requires": [
    "TGR-MC02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Separate entropy-only radiation state maps

A page `tgr-mc04`; B companion `tgr-mc04-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 611. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-mc03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MC04",
  "library": "mathematics",
  "A": [
    "def-tgr-entropy-only-radiation-state",
    "lem-tgr-radiation-state-balance",
    "lem-tgr-cattaneo-stability-causality"
  ],
  "B": [
    "ex-tgrmath-cattaneo-damped-mode"
  ],
  "requires": [
    "TGR-MC03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Smooth perfect local material balance model

A page `tgr-c01`; B companion `tgr-c01-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 613. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-i01`, `tgr-mc02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-C01",
  "library": "physics",
  "A": [
    "post-tgr-perfect-fluid-model",
    "pthm-tgr-local-first-law",
    "pthm-tgr-perfect-entropy-circulation"
  ],
  "B": [
    "ex-tgr-uniform-perfect-background"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MC01",
    "TGR-MC02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Restricted gradient constitutive dissipative model

A page `tgr-c02`; B companion `tgr-c02-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 615. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-i01`, `tgr-mc03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-C02",
  "library": "physics",
  "A": [
    "post-tgr-first-order-dissipation",
    "post-tgr-bulk-relaxation-model",
    "pthm-tgr-dissipative-local-admissibility",
    "pthm-tgr-bulk-extended-entropy"
  ],
  "B": [
    "ex-tgr-homogeneous-bulk-entropy"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MC01",
    "TGR-MC03",
    "TGR-MC02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Specified small-perturbation material dynamics

A page `tgr-c03`; B companion `tgr-c03-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 617. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-c01`, `tgr-c02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-C03",
  "library": "physics",
  "A": [
    "post-tgr-linearized-material-model",
    "pthm-tgr-perfect-causal-linear-response",
    "pthm-tgr-bulk-causal-linear-response"
  ],
  "B": [
    "ex-tgr-perfect-neutral-modes"
  ],
  "requires": [
    "TGR-C01",
    "TGR-C02",
    "TGR-I01",
    "TGR-MC03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Supported-rest effective Cattaneo thermal model

A page `tgr-c04`; B companion `tgr-c04-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 619. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-i01`, `tgr-mc04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-C04",
  "library": "physics",
  "A": [
    "post-tgr-cattaneo-thermal-model",
    "post-tgr-radiation-fluid-model",
    "pthm-tgr-cattaneo-thermal-properties",
    "pthm-tgr-radiation-local-properties"
  ],
  "B": [
    "ex-tgr-thermal-damped-model"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MC04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Stationary thermal geometric data

A page `tgr-et01`; B companion `tgr-et01-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 621. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `gr-connections-and-free-fall`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-ET01",
  "library": "mathematics",
  "A": [
    "def-tgr-stationary-thermal-carriers",
    "lem-tgr-killing-thermal-normalization",
    "lem-tgr-thermal-killing-kinematic-equivalence",
    "lem-tgr-isometry-natural-tensor-invariance",
    "lem-tgr-mass-shell-polynomial-rigidity",
    "thm-tgr-massive-juttner-stationarity"
  ],
  "B": [
    "ex-tgr-flrw-no-killing-equilibrium"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Gauge-compensated charged Killing energy

A page `tgr-et02`; B companion `tgr-et02-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 623. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-et01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-ET02",
  "library": "mathematics",
  "A": [
    "lem-tgr-gauge-killing-energy",
    "thm-tgr-electrochemical-stationarity",
    "thm-tgr-finite-entropy-exchange-equilibrium"
  ],
  "B": [
    "ex-tgr-electric-circulation-obstruction"
  ],
  "requires": [
    "TGR-ET01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Constructed independent cell Gibbs states

A page `tgr-et03`; B companion `tgr-et03-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 625. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `qsm-dt-response`, `qsm-kms-equilibrium`, `tgr-et02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-ET03",
  "library": "mathematics",
  "A": [
    "thm-tgr-finite-cell-gibbs-factorization",
    "thm-tgr-kms-orbit-time-rescaling",
    "thm-tgr-finite-response-redshift",
    "prop-tgr-rotating-mode-gibbs-obstruction"
  ],
  "B": [
    "ex-tgr-proper-clock-qubit-response"
  ],
  "requires": [
    "TGR-ET02",
    "TGR-ET01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Heat and viscous entropy specialization

A page `tgr-et04`; B companion `tgr-et04-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 627. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-et01`, `tgr-mc02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-ET04",
  "library": "mathematics",
  "A": [
    "lem-tgr-eckart-entropy-specialization",
    "thm-tgr-supported-static-heat-evolution"
  ],
  "B": [
    "ex-tgr-static-cosine-heat-relaxation"
  ],
  "requires": [
    "TGR-MC01",
    "TGR-MC02",
    "TGR-ET01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Selected stationary thermal equilibrium

A page `tgr-pet01`; B companion `tgr-pet01-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 629. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-et03`, `tgr-i01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-PET01",
  "library": "physics",
  "A": [
    "post-tgr-stationary-equilibrium",
    "pthm-tgr-tolman-ehrenfest",
    "post-tgr-equilibrium-particle-exchange",
    "pthm-tgr-tolman-klein"
  ],
  "B": [
    "ex-tgr-schwarzschild-static-bath",
    "ex-tgr-rindler-rotating-equilibrium-domains"
  ],
  "requires": [
    "TGR-I01",
    "TGR-ET01",
    "TGR-ET02",
    "TGR-ET03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Actually constructed Gibbs/KMS preparation

A page `tgr-pet02`; B companion `tgr-pet02-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 631. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-pet01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-PET02",
  "library": "physics",
  "A": [
    "post-tgr-selected-gibbs-kms-preparation",
    "pthm-tgr-local-kms-clock-temperature",
    "pthm-tgr-finite-stationary-response"
  ],
  "B": [
    "ex-tgr-independent-redshifted-cells"
  ],
  "requires": [
    "TGR-I01",
    "TGR-ET03",
    "TGR-PET01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Supported static heat model

A page `tgr-pet03`; B companion `tgr-pet03-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 633. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-c02`, `tgr-et04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-PET03",
  "library": "physics",
  "A": [
    "post-tgr-supported-static-heat-model",
    "pthm-tgr-supported-redshift-heat-relaxation"
  ],
  "B": [
    "ex-tgr-redshifted-cosine-medium"
  ],
  "requires": [
    "TGR-I01",
    "TGR-C02",
    "TGR-ET04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite gravitational phase and entropy reference

A page `tgr-mg01`; B companion `tgr-mg01-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 635. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `qsm-bose-fermi-gases`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MG01",
  "library": "mathematics",
  "A": [
    "def-tgr-gravitating-phase-reference",
    "def-tgr-softened-gravity-finite-phase",
    "lem-tgr-finite-gravitational-gibbs",
    "thm-tgr-gravitational-canonical-response",
    "thm-tgr-finite-gravitational-entropy-optimum",
    "thm-tgr-gravity-collapse-nonextensivity",
    "def-tgr-regulated-kepler-shell-law",
    "lem-tgr-relative-shell-canonical-response",
    "thm-tgr-regulated-kepler-negative-capacity",
    "lem-tgr-static-gas-finite-normalization",
    "lem-tgr-static-finite-fermi-occupations",
    "lem-tgr-finite-bath-exchange-stability"
  ],
  "B": [
    "ex-tgr-softened-box-normalization",
    "cex-tgr-point-box-collapse",
    "cex-tgr-softened-nonlinear-free-energy",
    "cex-tgr-hardcore-long-range-limit",
    "ex-tgr-regulated-negative-response",
    "cex-tgr-volume-surface-entropy-response",
    "ex-tgr-finite-bath-stabilization"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Smooth static spherical geometry and state domain

A page `tgr-mg02`; B companion `tgr-mg02-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 637. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `cm-math-dynamics`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `gr-curvature-and-tides`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MG02",
  "library": "mathematics",
  "A": [
    "def-tgr-spherical-static-state-domain",
    "lem-tgr-spherical-einstein-tov-reduction",
    "thm-tgr-tov-regular-center-local-existence",
    "thm-tgr-constant-density-star-verified",
    "def-tgr-spherical-entropy-constraint-functional",
    "thm-tgr-constrained-entropy-tov-criticality"
  ],
  "B": [
    "ex-tgr-regular-central-pressure-family",
    "ex-tgr-constant-density-positive-branch",
    "cex-tgr-constant-density-critical-center",
    "cex-tgr-incompressible-causal-transport"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite regulated Newtonian gravitational canonical preparation

A page `tgr-g01`; B companion `tgr-g01-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 639. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-i01`, `tgr-mg01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-G01",
  "library": "physics",
  "A": [
    "post-tgr-finite-newton-gravity-preparation",
    "pthm-tgr-regulated-gravity-canonical-equilibrium",
    "post-tgr-unregulated-point-attempt",
    "post-tgr-kepler-canonical-preparation",
    "post-tgr-kepler-microcanonical-volume-preparation",
    "pthm-tgr-regulated-ensemble-response-inequivalence",
    "post-tgr-fixed-static-gas-preparation",
    "pthm-tgr-static-gas-local-equilibrium"
  ],
  "B": [
    "ex-tgr-physical-finite-softened-box",
    "cex-tgr-physical-unregulated-collapse",
    "ex-tgr-physical-negative-kepler-capacity",
    "ex-tgr-physical-static-lapse-two"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MG01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Static isotropic Einstein-fluid and supplied EOS model

A page `tgr-g02`; B companion `tgr-g02-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 641. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-g01`, `tgr-mg02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-G02",
  "library": "physics",
  "A": [
    "post-tgr-static-spherical-fluid-preparation",
    "pthm-tgr-static-tov-local-branch",
    "post-tgr-incompressible-star-preparation",
    "post-tgr-gravitating-entropy-variational-preparation",
    "pthm-tgr-static-constant-density-star",
    "pthm-tgr-gravitating-entropy-criticality",
    "post-tgr-finite-bath-exchange-preparation",
    "pthm-tgr-negative-capacity-exchange-stability"
  ],
  "B": [
    "ex-tgr-physical-star-half-compactness",
    "cex-tgr-physical-critical-star-limit",
    "ex-tgr-physical-finite-bath-attraction"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MG02",
    "TGR-G01",
    "TGR-MG01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Smooth null screen and KN parameter family

A page `tgr-mhs01`; B companion `tgr-mhs01-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 643. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `emg-ms02`, `tgr-mi02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MHS01",
  "library": "mathematics",
  "A": [
    "def-tgr-horizon-screen-family",
    "thm-tgr-smooth-null-area",
    "prop-tgr-kn-first-law-smarr"
  ],
  "B": [
    "ex-tgr-schwarzschild-family-data",
    "cex-tgr-ingoing-null-cone-area"
  ],
  "requires": [
    "TGR-MI02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Positive chiral current and exponential test-coordinate model

A page `tgr-mhs02`; B companion `tgr-mhs02-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 645. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mf01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MHS02",
  "library": "mathematics",
  "A": [
    "lem-tgr-exponential-current",
    "lem-tgr-thermal-contour-spectrum"
  ],
  "B": [
    "ex-tgr-chiral-generator-rescaling"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Constructed timelike smear and massless accelerated spectrum

A page `tgr-mhs03`; B companion `tgr-mhs03-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 647. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mf02`, `tempered-distributions-and-the-fourier-transform`, `tgr-mhs02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MHS03",
  "library": "mathematics",
  "A": [
    "lem-tgr-timelike-scalar-acceleration",
    "lem-tgr-spectral-thermometer"
  ],
  "B": [
    "ex-tgr-finite-switch-inertial-rate"
  ],
  "requires": [
    "TGR-MHS02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Actual photon box trace and Planck energy/entropy flux

A page `tgr-mhs04`; B companion `tgr-mhs04-examples`. Category `thermodynamics-and-general-relativity-mathematics`; library `mathematics`.
Order 649. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `orthonormal-bases-parseval-and-fourier-series`, `qsm-bose-fermi-gases`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-MHS04",
  "library": "mathematics",
  "A": [
    "thm-tgr-photon-planck-flux",
    "prop-tgr-ideal-evaporation-accounting"
  ],
  "B": [
    "cex-tgr-photon-zero-mode-trace",
    "ex-tgr-ideal-cutoff-entropy"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Restricted smooth horizon Einstein/NEC adoption

A page `tgr-phs01`; B companion `tgr-phs01-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 651. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `emg-s01`, `tgr-i01`, `tgr-mhs01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-PHS01",
  "library": "physics",
  "A": [
    "post-tgr-smooth-horizon-energy-condition",
    "pthm-tgr-restricted-classical-area",
    "pthm-tgr-kn-family-mechanics"
  ],
  "B": [
    "texp-tgr-classical-schwarzschild-work"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MHS01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Reduced exponential current and defined spectral detector adoption

A page `tgr-phs02`; B companion `tgr-phs02-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 653. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `qft-f01`, `tgr-mhs03`, `tgr-pet01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-PHS02",
  "library": "physics",
  "A": [
    "post-tgr-exponential-current-and-spectral-thermometer",
    "pthm-tgr-reduced-horizon-temperature",
    "pthm-tgr-free-vacuum-acceleration-temperature"
  ],
  "B": [
    "texp-tgr-two-accelerations"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MHS02",
    "TGR-MHS03",
    "TGR-ET01",
    "TGR-PET01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Restricted reversible horizon entropy bridge

A page `tgr-phs03`; B companion `tgr-phs03-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 655. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-phs01`, `tgr-phs02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-PHS03",
  "library": "physics",
  "A": [
    "post-tgr-thermodynamic-horizon-identification",
    "pthm-tgr-area-entropy-calibration"
  ],
  "B": [
    "texp-tgr-horizon-entropy-difference"
  ],
  "requires": [
    "TGR-I01",
    "TGR-PHS01",
    "TGR-PHS02",
    "TGR-MHS01",
    "TGR-MI02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Ideal photon reservoir and active-area mass balance

A page `tgr-phs04`; B companion `tgr-phs04-examples`. Category `thermodynamics-and-general-relativity`; library `physics`.
Order 657. Exact source inventory: `research/extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json`.
Declared earlier prerequisites: `tgr-mhs04`, `tgr-phs03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TGR-PHS04",
  "library": "physics",
  "A": [
    "post-tgr-photon-emitter-and-quasistatic-balance",
    "pthm-tgr-ideal-photon-emission"
  ],
  "B": [
    "texp-tgr-half-mass-emitter"
  ],
  "requires": [
    "TGR-I01",
    "TGR-MHS04",
    "TGR-PHS03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```
