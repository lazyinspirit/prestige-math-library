# Einstein–Maxwell Models — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/extended-frameworks-2026-10-03/einstein-maxwell-models/inventory-and-pathway.md` (SHA-256 b58690cfbff976d69b8c54e99f19443ba5afa2d30c6c3828da6cac05812932f9).
- `research/extended-frameworks-2026-10-03/einstein-maxwell-models/prose-scaffold.md` (SHA-256 ca4b23860bc165c9182738efe457b3a2029df70eca55e9cdf400757a21a85184).
- `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json` (SHA-256 28a0b9872506a17415df4fbf177f146560c3a14bb98f886f3d32b0f6e0fe3352).
- `research/extended-frameworks-2026-10-03/einstein-maxwell-models/supplier-map.json` (SHA-256 8d04d3aaf865bef3933c27fb4891187ea092afc10ce62826e220db2c2106d0a7).
- `research/extended-frameworks-2026-10-03/einstein-maxwell-models/closure-ledger.json` (SHA-256 b2d1ba47e8a45d9500e8c2abac26e3755e263a8f8010823d9569d29f39ce9bf5).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Oriented Lorentzian fields, observers and coordinate conventions

A page `emg-mg01`; B companion `emg-mg01-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 433. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `gr-connections-and-free-fall`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MG01",
  "library": "mathematics",
  "A": [
    "def-emg-lorentzian-forms",
    "lem-emg-lorentz-hodge-calculus",
    "lem-emg-conformal-hodge-multiplier",
    "lem-emg-observer-field-decomposition"
  ],
  "B": [
    "ex-emgmath-lorentz-star"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## SI and geometrized Einstein–Maxwell parameters

A page `emg-c01`; B companion `emg-c01-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 435. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mg01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-C01",
  "library": "mathematics",
  "A": [
    "def-emg-geometric-scaling",
    "thm-emg-field-normalization-equivalence",
    "thm-emg-conformal-maxwell",
    "thm-emg-conformal-einstein-transformation",
    "prop-emg-constant-electrovac-rescaling",
    "prop-emg-test-field-residual-order"
  ],
  "B": [
    "cex-emg-conformal-maxwell-not-einstein",
    "ex-emg-coulomb-charge-normalization"
  ],
  "requires": [
    "EMG-MG01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Einstein–Maxwell primitive quantities and SI conventions

A page `emg-g01`; B companion `emg-g01-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 437. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mg01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-G01",
  "library": "physics",
  "A": [
    "def-emg-geometry-units",
    "post-emg-covariant-maxwell"
  ],
  "B": [
    "ex-emg-observer-static-field"
  ],
  "requires": [
    "EMG-MG01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Local potentials and smooth circle-bundle connection data

A page `emg-mg02`; B companion `emg-mg02-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 439. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mg01`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `the-de-rham-theorem-and-degree`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MG02",
  "library": "mathematics",
  "A": [
    "def-emg-local-potentials-and-circle-data",
    "lem-emg-circle-connection-gluing",
    "lem-emg-local-potential-construction",
    "lem-emg-sphere-flux-holonomy"
  ],
  "B": [
    "ex-emgmath-monopole-patch-flux"
  ],
  "requires": [
    "EMG-MG01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Sourced Maxwell sign and current conservation

A page `emg-mg03`; B companion `emg-mg03-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 441. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mg02`, `gr-einstein-and-matter`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MG03",
  "library": "mathematics",
  "A": [
    "lem-emg-maxwell-current-forms",
    "lem-emg-maxwell-action-variation",
    "lem-emg-gauss-finite-chain",
    "lem-emg-maxwell-observer-stress"
  ],
  "B": [
    "ex-emgmath-compact-neutrality"
  ],
  "requires": [
    "EMG-MG01",
    "EMG-MG02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Gauge/diffeomorphism matter identity and field exchange

A page `emg-mg04`; B companion `emg-mg04-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 443. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mg03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MG04",
  "library": "mathematics",
  "A": [
    "lem-emg-matter-noether-exchange",
    "lem-emg-einstein-action-variation",
    "def-emg-charged-scalar-functional",
    "lem-emg-charged-scalar-variation",
    "lem-emg-maxwell-stress-divergence"
  ],
  "B": [
    "ex-emgmath-scalar-plane-wave",
    "ex-emgmath-eh-boundary-derivative"
  ],
  "requires": [
    "EMG-MG03",
    "EMG-MG02",
    "EMG-MG01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Independent equation-based Einstein–Maxwell coupling

A page `emg-g04`; B companion `emg-g04-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 445. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-g01`, `emg-mg04`, `rpm-external-charge`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-G04",
  "library": "physics",
  "A": [
    "post-emg-einstein-maxwell-equations",
    "post-emg-selected-matter-action",
    "post-emg-einstein-maxwell-action",
    "pthm-emg-action-field-equations",
    "pthm-emg-total-matter-field-exchange",
    "def-emg-charged-dust-model",
    "pthm-emg-charged-dust-balance",
    "def-emg-classical-charged-scalar-model",
    "pthm-emg-charged-scalar-coupling"
  ],
  "B": [
    "ex-emg-classical-scalar-background-limits",
    "cex-emg-flat-nonzero-field-coupling"
  ],
  "requires": [
    "EMG-G01",
    "EMG-MG04",
    "EMG-MG03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Electrovacuum tensor Cauchy system

A page `emg-cp01`; B companion `emg-cp01-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 447. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-CP01",
  "library": "mathematics",
  "A": [
    "def-emg-electrovacuum-cauchy-system",
    "def-emg-periodic-high-sobolev-state",
    "thm-emg-symmetric-hyperbolic-research-supplier",
    "lem-emg-maxwell-stress-conservation",
    "prop-emg-potential-ricci-wave-identity",
    "lem-emg-local-potential-gauge",
    "def-emg-constrained-electrovacuum-data",
    "thm-emg-gauss-codazzi-maxwell-constraints",
    "lem-emg-fixed-smooth-background-harmonic-data"
  ],
  "B": [
    "ex-emg-flat-zero-field-data",
    "cex-emg-test-field-not-coupled-flat-solution",
    "ex-emg-nontrivial-magnetic-period"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Positive symmetric Maxwell field-strength reduction

A page `emg-cp02`; B companion `emg-cp02-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 449. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-cp01`, `inverse-and-implicit-function-theorems`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-CP02",
  "library": "mathematics",
  "A": [
    "lem-emg-fieldstrength-positive-symmetric-reduction",
    "thm-emg-maxwell-gauss-propagation",
    "lem-emg-coupled-reduced-einstein-evolution",
    "thm-emg-einstein-gauge-propagation",
    "thm-emg-local-high-sobolev-electrovacuum",
    "prop-emg-local-sobolev-stability-continuation",
    "thm-emg-smooth-local-geometric-uniqueness",
    "lem-emg-smooth-geometric-causal-research-suppliers",
    "thm-emg-sourcefree-smooth-maximal-development"
  ],
  "B": [
    "ex-emg-nonzero-parallel-field-data",
    "rem-emg-maximal-is-not-complete"
  ],
  "requires": [
    "EMG-CP01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Strict charged barotropic tensor system

A page `emg-cp03`; B companion `emg-cp03-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 451. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-cp02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-CP03",
  "library": "mathematics",
  "A": [
    "def-emg-strict-charged-barotropic-system",
    "lem-emg-charged-fluid-current-conservation",
    "lem-emg-charged-fluid-positive-symmetric-reduction",
    "thm-emg-local-charged-barotropic-development",
    "prop-emg-compact-charge-compatibility"
  ],
  "B": [
    "ex-emg-linear-eos-variables",
    "cex-emg-uniform-one-sign-torus-charge"
  ],
  "requires": [
    "EMG-CP01",
    "EMG-CP02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Adopted strict charged barotropic fluid model

A page `emg-pcp02`; B companion `emg-pcp02-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 453. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-cp03`, `emg-g04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-PCP02",
  "library": "physics",
  "A": [
    "post-emg-strict-charged-fluid-model",
    "pthm-emg-local-charged-fluid-model"
  ],
  "B": [
    "ex-emg-adopted-linear-eos-model"
  ],
  "requires": [
    "EMG-CP03",
    "EMG-G01",
    "EMG-G04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Local evolution of the adopted electrovacuum model

A page `emg-pcp01`; B companion `emg-pcp01-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 455. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-cp02`, `emg-g04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-PCP01",
  "library": "physics",
  "A": [
    "pthm-emg-local-electrovacuum-model",
    "pthm-emg-on-shell-electromagnetic-conservation",
    "pthm-emg-smooth-electrovacuum-maximal-model"
  ],
  "B": [
    "ex-emg-adopted-parallel-field-model"
  ],
  "requires": [
    "EMG-G04",
    "EMG-G01",
    "EMG-CP02",
    "EMG-CP01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Trivial-potential classical charged scalar system

A page `emg-cp04`; B companion `emg-cp04-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 457. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-cp02`, `emg-mg04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-CP04",
  "library": "mathematics",
  "A": [
    "def-emg-trivial-potential-charged-scalar-system",
    "lem-emg-temporal-scalar-positive-symmetric-reduction",
    "lem-emg-charged-scalar-subsidiary-chain",
    "thm-emg-local-classical-charged-scalar-development"
  ],
  "B": [
    "ex-emg-zero-scalar-controlled-reduction",
    "rem-emg-classical-scalar-bundle-limit"
  ],
  "requires": [
    "EMG-CP01",
    "EMG-MG04",
    "EMG-CP02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Adopted trivial-potential classical charged scalar model

A page `emg-pcp03`; B companion `emg-pcp03-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 459. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-cp04`, `emg-g04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-PCP03",
  "library": "physics",
  "A": [
    "post-emg-trivial-classical-charged-scalar-model",
    "pthm-emg-classical-charged-scalar-model-evolution"
  ],
  "B": [
    "ex-emg-adopted-zero-classical-scalar"
  ],
  "requires": [
    "EMG-CP04",
    "EMG-MG04",
    "EMG-G01",
    "EMG-G04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Selected classical field topology and optional circle normalization

A page `emg-g02`; B companion `emg-g02-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 461. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-g01`, `emg-mg02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-G02",
  "library": "physics",
  "A": [
    "def-emg-topological-sector",
    "pthm-emg-potentials-and-topological-limits"
  ],
  "B": [
    "ex-emg-classical-flux-versus-normalization"
  ],
  "requires": [
    "EMG-G01",
    "EMG-MG02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Observer Maxwell equations and conserved source charge

A page `emg-g03`; B companion `emg-g03-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 463. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-g02`, `emg-mg03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-G03",
  "library": "physics",
  "A": [
    "pthm-emg-observer-maxwell-current",
    "pthm-emg-gauss-global-constraints"
  ],
  "B": [
    "ex-emg-electric-stress"
  ],
  "requires": [
    "EMG-G01",
    "EMG-MG03",
    "EMG-G02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Smooth formal matter, EM tensors and observer quantities

A page `emg-mm01`; B companion `emg-mm01-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 465. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `emg-mg04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MM01",
  "library": "mathematics",
  "A": [
    "def-emg-matter-formal-systems",
    "thm-emg-charged-dust-projection",
    "thm-emg-charged-fluid-projections",
    "thm-emg-selected-matter-energy-conditions",
    "thm-emg-charged-symmetry-current"
  ],
  "B": [
    "ex-emgmath-ml-b01",
    "ex-emgmath-ml-b02",
    "ex-emgmath-ml-b03",
    "ex-emgmath-ml-b04"
  ],
  "requires": [
    "EMG-MG04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite WKB Maxwell residual, null rays and polarization quotient

A page `emg-mm03`; B companion `emg-mm03-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 467. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-c01`, `emg-mm01`, `rpm-external-charge`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MM03",
  "library": "mathematics",
  "A": [
    "lem-emg-controlled-maxwell-wkb",
    "lem-emg-source-and-test-scaling",
    "thm-emg-weak-slow-test-lorentz-limit"
  ],
  "B": [
    "ex-emgmath-ml-b07",
    "ex-emgmath-ml-b08"
  ],
  "requires": [
    "EMG-MM01",
    "EMG-C01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Arbitrary-positive-H conformastatic Ricci and Einstein components

A page `emg-mm02`; B companion `emg-mm02-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 469. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mm01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MM02",
  "library": "mathematics",
  "A": [
    "lem-emg-conformastatic-curvature",
    "thm-emg-smooth-counterpoised-dust",
    "cor-emg-regular-counterpoised-sphere"
  ],
  "B": [
    "ex-emgmath-ml-b05",
    "ex-emgmath-ml-b06"
  ],
  "requires": [
    "EMG-MM01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Smooth matter quantities, current and observer observables

A page `emg-mp01`; B companion `emg-mp01-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 471. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-g04`, `emg-mm01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MP01",
  "library": "physics",
  "A": [
    "def-emg-matter-observables",
    "post-emg-transported-charged-dust",
    "post-emg-charged-fluid-balance",
    "pthm-emg-dust-mass-force-reduction",
    "pthm-emg-fluid-work-heating",
    "pthm-emg-matter-symmetry-charges",
    "pthm-emg-matter-energy-conditions"
  ],
  "B": [
    "ex-emg-ml-b03"
  ],
  "requires": [
    "EMG-G01",
    "EMG-MM01",
    "EMG-G04",
    "EMG-MG04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Separately adopted fixed-background Maxwell and charged probes

A page `emg-mp03`; B companion `emg-mp03-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 473. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mm03`, `emg-mp01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MP03",
  "library": "physics",
  "A": [
    "post-emg-background-maxwell-test",
    "pthm-emg-controlled-test-geometric-optics",
    "pthm-emg-source-test-backreaction-scope",
    "pthm-emg-weak-slow-test-motion"
  ],
  "B": [
    "ex-emg-ml-b04",
    "ex-emg-ml-b07",
    "ex-emg-ml-b08"
  ],
  "requires": [
    "EMG-MP01",
    "EMG-MM03",
    "EMG-MM01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Exact smooth coupled counterpoised dust and observables

A page `emg-mp02`; B companion `emg-mp02-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 475. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mm02`, `emg-mp01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MP02",
  "library": "physics",
  "A": [
    "pthm-emg-counterpoised-smooth-sphere"
  ],
  "B": [
    "ex-emg-ml-b05",
    "ex-emg-ml-b06"
  ],
  "requires": [
    "EMG-MP01",
    "EMG-MM02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Geometric electrovac equations and flux normalization

A page `emg-ms01`; B companion `emg-ms01-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 477. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mg03`, `gr-spherical-vacuum-model`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MS01",
  "library": "mathematics",
  "A": [
    "def-emg-xs-geometric-electrovac",
    "def-emg-xs-rn-data",
    "thm-emg-xs-rn-verification",
    "prop-emg-xs-rn-curvature",
    "def-emg-xs-kn-data",
    "lem-emg-xs-kn-rational-calculus",
    "thm-emg-xs-kn-verification",
    "prop-emg-xs-kn-invariants",
    "lem-emg-xs-duality",
    "prop-emg-xs-kn-dyonic-flux"
  ],
  "B": [
    "ex-emg-xs-zero-rotation",
    "ex-emg-xs-rn-charge-sign",
    "cex-emg-xs-scalar-trace"
  ],
  "requires": [
    "EMG-MG01",
    "EMG-MG03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Selected ingoing RN extension and time orientation

A page `emg-ms02`; B companion `emg-ms02-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 479. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-ms01`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MS02",
  "library": "mathematics",
  "A": [
    "def-emg-xs-ingoing-rn",
    "thm-emg-xs-rn-crossing",
    "prop-emg-xs-rn-horizon-data",
    "thm-emg-xs-kn-extension",
    "lem-emg-xs-null-barrier",
    "thm-emg-xs-rn-escape",
    "prop-emg-xs-kn-horizon-data",
    "thm-emg-xs-kn-escape",
    "prop-emg-xs-kn-ergoregion",
    "prop-emg-xs-charged-ring-obstruction",
    "prop-emg-xs-rn-local-gauges"
  ],
  "B": [
    "ex-emg-xs-extremal-horizon",
    "cex-emg-xs-ergo-is-not-horizon",
    "ex-emg-xs-superextremal-rn",
    "ex-emg-xs-topological-charge"
  ],
  "requires": [
    "EMG-MS01",
    "EMG-MG02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Positive harmonic conformastatic electrovac data

A page `emg-ms03`; B companion `emg-ms03-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.
Order 481. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-mm02`, `emg-ms01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-MS03",
  "library": "mathematics",
  "A": [
    "def-emg-xs-harmonic-mp",
    "thm-emg-xs-mp-verification",
    "prop-emg-xs-mp-multicenter",
    "prop-emg-xs-mp-extremal-rn",
    "def-emg-xs-br-products",
    "thm-emg-xs-br-verification",
    "thm-emg-xs-rn-near-horizon",
    "def-emg-xs-null-wave",
    "thm-emg-xs-null-wave-verification",
    "prop-emg-xs-null-invariants"
  ],
  "B": [
    "ex-emg-xs-two-center",
    "cex-emg-xs-nonharmonic-vacuum",
    "cex-emg-xs-constant-radius",
    "cex-emg-xs-vanishing-scalars"
  ],
  "requires": [
    "EMG-MS01",
    "EMG-MM02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## SI and geometric solution parameter identifications

A page `emg-s01`; B companion `emg-s01-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 483. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-g04`, `emg-ms02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-S01",
  "library": "physics",
  "A": [
    "def-emg-xs-si-parameters",
    "pthm-emg-xs-rn-model",
    "pthm-emg-xs-rn-horizons",
    "pthm-emg-xs-kn-model",
    "pthm-emg-xs-kn-horizons",
    "pthm-emg-xs-dyonic-model",
    "pthm-emg-xs-static-redshift"
  ],
  "B": [
    "texp-emg-xs-photon-radius",
    "texp-emg-xs-rotating-ergoregion"
  ],
  "requires": [
    "EMG-G01",
    "EMG-MS01",
    "EMG-G04",
    "EMG-MS02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Harmonic static multicenter electrovac model

A page `emg-s02`; B companion `emg-s02-examples`. Category `einstein-maxwell-models`; library `physics`.
Order 485. Exact source inventory: `research/extended-frameworks-2026-10-03/einstein-maxwell-models/proposed-inventory.json`.
Declared earlier prerequisites: `emg-ms03`, `emg-s01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "EMG-S02",
  "library": "physics",
  "A": [
    "pthm-emg-xs-mp-model",
    "pthm-emg-xs-mp-extremal",
    "pthm-emg-xs-br-model",
    "pthm-emg-xs-br-limit",
    "pthm-emg-xs-null-wave-model"
  ],
  "B": [
    "texp-emg-xs-null-curvature",
    "texp-emg-xs-two-center-model"
  ],
  "requires": [
    "EMG-G01",
    "EMG-G04",
    "EMG-MS03",
    "EMG-S01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```
