# Classical Electromagnetism — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/prose-scaffold.md` (SHA-256 4a57115b9dc63e7de472e054cc74cbcd7ae74ff5d78f4d3b7cb483cedf350ac9).
- `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json` (SHA-256 b548a8b1bc72c4b32c5dfbe9ddb9df36a9be1fb56caccca5e5dd4c99bc9af58b).
- `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/completed-expansion-arguments.md` (SHA-256 6386d301188be4b4aa5e0add93f93e785292ec90bd4f2ebbe220f2386cb4f98d).
- `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/definition-contracts.md` (SHA-256 023905482e66e4d3790614394cf5445c344e515e757f86d2428d3966f542c76c).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Em Elementary Mathematical Prerequisites

A page `em-elementary-mathematical-prerequisites`; B companion `em-elementary-mathematical-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 305. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `compactness-in-metric-spaces`, `complex-differentiability-and-cauchy-riemann`, `distributions-test-functions-and-differentiation`, `euclidean-surface-measure-divergence-and-green-identities`, `fundamental-solutions-newtonian-potentials-and-green-functions`, `line-integrals-and-the-gradient-theorem`, `regular-surfaces-and-surface-integrals`, `rn-as-a-normed-space`, `the-derivative-and-mean-value-theorems`, `the-divergence-theorem-and-classical-stokes`, `the-fundamental-theorems-of-calculus`, `the-inverse-function-theorem-completed`, `the-maximal-function-and-lebesgue-differentiation`, `the-total-derivative`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-elementary-mathematical-prerequisites",
  "B": "em-elementary-mathematical-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "def-em-complex-plane-wave",
      "kind": "definition",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M07",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "thm-complex-exponential-is-entire-with-derivative-itself"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "thm-complex-exponential-is-entire-with-derivative-itself": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "def-em-moving-patch",
      "kind": "definition",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M02",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-oriented-unit-normal-and-flux-of-a-surface-patch"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-oriented-unit-normal-and-flux-of-a-surface-patch": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "def-em-surface-distribution",
      "kind": "definition",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M03",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-distribution",
        "def-test-function-space-d-of-an-open-set",
        "def-oriented-unit-normal-and-flux-of-a-surface-patch"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-distribution": "mathematical-premise",
        "def-test-function-space-d-of-an-open-set": "mathematical-premise",
        "def-oriented-unit-normal-and-flux-of-a-surface-patch": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-continuous-localization",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M01",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-euclidean-balls-have-positive-finite-lebesgue-measure"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-euclidean-balls-have-positive-finite-lebesgue-measure": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-coulomb-dipole-remainder",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M06",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "thm-decay-of-the-newtonian-potential-of-compactly-supported-data"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "thm-decay-of-the-newtonian-potential-of-compactly-supported-data": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-parameter-integrals",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M01",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "thm-differentiation-under-the-integral-sign-on-a-compact-rectangle",
        "thm-heine-cantor-metric",
        "thm-heine-borel-rn"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "thm-differentiation-under-the-integral-sign-on-a-compact-rectangle": "mathematical-premise",
        "thm-heine-cantor-metric": "mathematical-premise",
        "thm-heine-borel-rn": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-point-current-continuity",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M03",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-dirac-delta-and-its-derivatives",
        "def-distributional-derivative"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-dirac-delta-and-its-derivatives": "mathematical-premise",
        "def-distributional-derivative": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-quadratic-stress-identity",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M04",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-divergence-and-curl-of-a-c1-vector-field",
        "def-cross-product-in-r3"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise",
        "def-cross-product-in-r3": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-interface-derivatives",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M03",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-em-surface-distribution",
        "def-distributional-derivative",
        "thm-divergence-theorem-for-bounded-piecewise-c-one-domains"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-em-surface-distribution": "mathematical-premise",
        "def-distributional-derivative": "mathematical-premise",
        "thm-divergence-theorem-for-bounded-piecewise-c-one-domains": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-joint-smooth-potentials",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M05",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-em-parameter-integrals",
        "thm-poincare-lemma-for-star-shaped-domains",
        "thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-em-parameter-integrals": "mathematical-premise",
        "thm-poincare-lemma-for-star-shaped-domains": "mathematical-premise",
        "thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-moving-flux",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M02",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-em-moving-patch",
        "lem-em-parameter-integrals",
        "lem-the-divergence-and-curl-of-a-cross-product",
        "thm-the-classical-stokes-theorem-for-a-c2-surface-patch"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-em-moving-patch": "mathematical-premise",
        "lem-em-parameter-integrals": "mathematical-premise",
        "lem-the-divergence-and-curl-of-a-cross-product": "mathematical-premise",
        "thm-the-classical-stokes-theorem-for-a-c2-surface-patch": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-period-average",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M07",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-em-complex-plane-wave"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-em-complex-plane-wave": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-interface-wave-linear-system",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M07",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 2,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-em-period-average"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-em-period-average": "mathematical-premise"
      },
      "inventory_expansion_required": false
    }
  ],
  "A_item_count": 13,
  "B_inventory": [
    {
      "id": "ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries",
      "domain": "mathematics",
      "kind": "example",
      "title": "Explicit mathematical hypothesis/convention examples",
      "deps": [
        "lem-em-parameter-integrals",
        "lem-em-continuous-localization",
        "def-em-moving-patch",
        "lem-em-moving-flux",
        "def-em-surface-distribution",
        "lem-em-interface-derivatives",
        "lem-em-point-current-continuity",
        "lem-em-quadratic-stress-identity",
        "lem-em-joint-smooth-potentials",
        "lem-em-coulomb-dipole-remainder",
        "def-em-complex-plane-wave",
        "lem-em-period-average",
        "lem-em-interface-wave-linear-system"
      ],
      "dependency_level": 3,
      "dependency_roles": {
        "lem-em-parameter-integrals": "mathematical-premise",
        "lem-em-continuous-localization": "mathematical-premise",
        "def-em-moving-patch": "mathematical-premise",
        "lem-em-moving-flux": "mathematical-premise",
        "def-em-surface-distribution": "mathematical-premise",
        "lem-em-interface-derivatives": "mathematical-premise",
        "lem-em-point-current-continuity": "mathematical-premise",
        "lem-em-quadratic-stress-identity": "mathematical-premise",
        "lem-em-joint-smooth-potentials": "mathematical-premise",
        "lem-em-coulomb-dipole-remainder": "mathematical-premise",
        "def-em-complex-plane-wave": "mathematical-premise",
        "lem-em-period-average": "mathematical-premise",
        "lem-em-interface-wave-linear-system": "mathematical-premise"
      },
      "reference": "mathematical-example-verifications.md#ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries",
      "design_state": "complete-explicit-mathematical-example"
    }
  ],
  "B_item_count": 1,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Em Minkowski Mathematical Prerequisites

A page `em-minkowski-mathematical-prerequisites`; B companion `em-minkowski-mathematical-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 307. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `dual-spaces-bilinear-forms-and-inertia`, `linear-algebra-methods-in-combinatorics`, `rn-as-a-normed-space`, `the-derivative-and-mean-value-theorems`, `the-inverse-function-theorem-completed`, `the-total-derivative`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-minkowski-mathematical-prerequisites",
  "B": "em-minkowski-mathematical-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "def-em-minkowski-affine-space",
      "kind": "definition",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M08",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 0,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-standard-bilinear-form-on-a-coordinate-space",
        "thm-change-of-basis-for-a-bilinear-form-is-congruence"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-standard-bilinear-form-on-a-coordinate-space": "mathematical-premise",
        "thm-change-of-basis-for-a-bilinear-form-is-congruence": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-antisymmetric-tensor-contraction",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M08",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-em-minkowski-affine-space"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-em-minkowski-affine-space": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-boost-preserves-metric",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M08",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-em-minkowski-affine-space"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-em-minkowski-affine-space": "mathematical-premise"
      },
      "inventory_expansion_required": false
    }
  ],
  "A_item_count": 3,
  "B_inventory": [
    {
      "id": "ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries",
      "domain": "mathematics",
      "kind": "example",
      "title": "Explicit mathematical hypothesis/convention examples",
      "deps": [
        "def-em-minkowski-affine-space",
        "lem-em-boost-preserves-metric",
        "lem-em-antisymmetric-tensor-contraction"
      ],
      "dependency_level": 2,
      "dependency_roles": {
        "def-em-minkowski-affine-space": "mathematical-premise",
        "lem-em-boost-preserves-metric": "mathematical-premise",
        "lem-em-antisymmetric-tensor-contraction": "mathematical-premise"
      },
      "reference": "mathematical-example-verifications.md#ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries",
      "design_state": "complete-explicit-mathematical-example"
    }
  ],
  "B_item_count": 1,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Em Wave Equation Prerequisites

A page `em-wave-equation-prerequisites`; B companion `em-wave-equation-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 311. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-expanded-analysis-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-wave-equation-prerequisites",
  "B": "em-wave-equation-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "thm-em-wave-cauchy-kirchhoff",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#W1-W3",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 2,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-em-parameter-integrals",
        "thm-distributional-differentiation-is-continuous-and-commutes",
        "lem-em-spherical-mean-wave-identity"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-em-parameter-integrals": "mathematical-premise",
        "thm-distributional-differentiation-is-continuous-and-commutes": "mathematical-premise",
        "lem-em-spherical-mean-wave-identity": "mathematical-premise"
      },
      "inventory_expansion_required": false
    }
  ],
  "A_item_count": 1,
  "B_inventory": [],
  "B_item_count": 0,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Em Boundary And Spectral Prerequisites

A page `em-boundary-and-spectral-prerequisites`; B companion `em-boundary-and-spectral-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 313. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-expanded-analysis-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-boundary-and-spectral-prerequisites",
  "B": "em-boundary-and-spectral-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "thm-em-spherical-multipole-basis",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#H1-H3",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 3,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-em-coulomb-dipole-remainder",
        "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis",
        "lem-em-spherical-harmonic-basis-and-addition",
        "lem-em-ball-poisson-series-boundary-convergence"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-em-coulomb-dipole-remainder": "mathematical-premise",
        "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis": "mathematical-premise",
        "lem-em-spherical-harmonic-basis-and-addition": "mathematical-premise",
        "lem-em-ball-poisson-series-boundary-convergence": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "completed_subbranches": "completed-expansion-arguments.md#H1"
    },
    {
      "id": "thm-em-elliptic-boundary-existence",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#B1-B7",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 5,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "cor-first-green-identity-on-a-bounded-c-one-domain",
        "lem-em-prescribed-fractional-dirichlet-existence",
        "lem-em-weak-neumann-and-transmission-existence",
        "lem-em-smooth-domain-elliptic-regularity"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "cor-first-green-identity-on-a-bounded-c-one-domain": "mathematical-premise",
        "lem-em-prescribed-fractional-dirichlet-existence": "mathematical-premise",
        "lem-em-weak-neumann-and-transmission-existence": "mathematical-premise",
        "lem-em-smooth-domain-elliptic-regularity": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "completed_subbranches": "completed-expansion-arguments.md#B1-B6; actual authorized draft trace suppliers read"
    },
    {
      "id": "thm-em-waveguide-spectral-completeness",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#G1-G3; core-conditional-proofs.md#K10; exterior-scattering-arguments.md#F1-F5",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 6,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "thm-em-elliptic-boundary-existence",
        "lem-em-smooth-pec-cavity-spectral-closure"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "thm-em-elliptic-boundary-existence": "mathematical-premise",
        "lem-em-smooth-pec-cavity-spectral-closure": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "completed_subbranches": "completed-expansion-arguments.md#G1-G2"
    }
  ],
  "A_item_count": 3,
  "B_inventory": [
    {
      "id": "ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries",
      "domain": "mathematics",
      "kind": "example",
      "title": "Explicit mathematical hypothesis/convention examples",
      "deps": [
        "thm-em-spherical-multipole-basis",
        "thm-em-elliptic-boundary-existence",
        "thm-em-waveguide-spectral-completeness"
      ],
      "dependency_level": 7,
      "dependency_roles": {
        "thm-em-spherical-multipole-basis": "mathematical-premise",
        "thm-em-elliptic-boundary-existence": "mathematical-premise",
        "thm-em-waveguide-spectral-completeness": "mathematical-premise"
      },
      "reference": "mathematical-example-verifications.md#ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries",
      "design_state": "complete-explicit-mathematical-example"
    }
  ],
  "B_item_count": 1,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Em Causal Response And Radiation Prerequisites

A page `em-causal-response-and-radiation-prerequisites`; B companion `em-causal-response-and-radiation-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 315. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-wave-equation-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-causal-response-and-radiation-prerequisites",
  "B": "em-causal-response-and-radiation-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "thm-em-causal-dispersive-response",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#D1-D2",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "def-schwartz-space-and-its-seminorms",
        "cor-cauchy-theorem-for-null-homotopic-loops",
        "lem-em-integrable-causal-dispersion"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "def-schwartz-space-and-its-seminorms": "mathematical-premise",
        "cor-cauchy-theorem-for-null-homotopic-loops": "mathematical-premise",
        "lem-em-integrable-causal-dispersion": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "completed_subbranches": "completed-expansion-arguments.md#D1-D2; compact and W1,1 integrable causal branches"
    },
    {
      "id": "thm-em-radiation-asymptotic-flux",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#A1-A2",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 3,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "thm-em-wave-cauchy-kirchhoff",
        "lem-em-coulomb-dipole-remainder",
        "lem-em-period-average"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "thm-em-wave-cauchy-kirchhoff": "mathematical-premise",
        "lem-em-coulomb-dipole-remainder": "mathematical-premise",
        "lem-em-period-average": "mathematical-premise"
      },
      "inventory_expansion_required": false
    }
  ],
  "A_item_count": 2,
  "B_inventory": [
    {
      "id": "ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries",
      "domain": "mathematics",
      "kind": "example",
      "title": "Explicit mathematical hypothesis/convention examples",
      "deps": [
        "thm-em-causal-dispersive-response",
        "thm-em-radiation-asymptotic-flux"
      ],
      "dependency_level": 4,
      "dependency_roles": {
        "thm-em-causal-dispersive-response": "mathematical-premise",
        "thm-em-radiation-asymptotic-flux": "mathematical-premise"
      },
      "reference": "mathematical-example-verifications.md#ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries",
      "design_state": "complete-explicit-mathematical-example"
    }
  ],
  "B_item_count": 1,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Em Experiment Analysis Prerequisites

A page `em-experiment-analysis-prerequisites`; B companion `em-experiment-analysis-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 317. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-expanded-analysis-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-experiment-analysis-prerequisites",
  "B": "em-experiment-analysis-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "thm-em-uncertainty-analysis",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#U1; primary accounts E1-E3 impose no unstated sampling law",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-em-bounded-error-model-comparison"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-em-bounded-error-model-comparison": "mathematical-premise"
      },
      "inventory_expansion_required": false
    }
  ],
  "A_item_count": 1,
  "B_inventory": [
    {
      "id": "ex-em-experiment-analysis-prerequisites-hypothesis-boundaries",
      "domain": "mathematics",
      "kind": "example",
      "title": "Explicit mathematical hypothesis/convention examples",
      "deps": [
        "thm-em-uncertainty-analysis"
      ],
      "dependency_level": 2,
      "dependency_roles": {
        "thm-em-uncertainty-analysis": "mathematical-premise"
      },
      "reference": "mathematical-example-verifications.md#ex-em-experiment-analysis-prerequisites-hypothesis-boundaries",
      "design_state": "complete-explicit-mathematical-example"
    }
  ],
  "B_item_count": 1,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Em Variational Mathematical Prerequisites

A page `em-variational-mathematical-prerequisites`; B companion `em-variational-mathematical-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 309. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-elementary-mathematical-prerequisites`, `em-minkowski-mathematical-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-variational-mathematical-prerequisites",
  "B": "em-variational-mathematical-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "lem-em-fundamental-variation-lemma",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M17",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 1,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-em-continuous-localization",
        "lem-test-function-cutoffs-and-euclidean-localization"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-em-continuous-localization": "mathematical-premise",
        "lem-test-function-cutoffs-and-euclidean-localization": "mathematical-premise"
      },
      "inventory_expansion_required": false
    },
    {
      "id": "lem-em-compact-field-variation",
      "kind": "lemma",
      "domain": "mathematics",
      "reference": "mathematical-prerequisites.md#M17",
      "design_state": "complete-existing-local-argument; exact-hypotheses-retained",
      "dependency_level": 2,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "lem-em-fundamental-variation-lemma",
        "def-em-minkowski-affine-space",
        "def-distributional-derivative"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "lem-em-fundamental-variation-lemma": "mathematical-premise",
        "def-em-minkowski-affine-space": "mathematical-premise",
        "def-distributional-derivative": "mathematical-premise"
      },
      "inventory_expansion_required": false
    }
  ],
  "A_item_count": 2,
  "B_inventory": [
    {
      "id": "ex-em-variational-mathematical-prerequisites-hypothesis-boundaries",
      "domain": "mathematics",
      "kind": "example",
      "title": "Explicit mathematical hypothesis/convention examples",
      "deps": [
        "lem-em-compact-field-variation",
        "lem-em-fundamental-variation-lemma"
      ],
      "dependency_level": 3,
      "dependency_roles": {
        "lem-em-compact-field-variation": "mathematical-premise",
        "lem-em-fundamental-variation-lemma": "mathematical-premise"
      },
      "reference": "mathematical-example-verifications.md#ex-em-variational-mathematical-prerequisites-hypothesis-boundaries",
      "design_state": "complete-explicit-mathematical-example"
    }
  ],
  "B_item_count": 1,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Em Expanded Analysis Prerequisites

A page `em-expanded-analysis-prerequisites`; B companion `em-expanded-analysis-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 310. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `compact-operators-and-riesz-schauder-theory`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `complex-lp-spaces-and-test-function-conventions`, `em-variational-mathematical-prerequisites`, `fourier-multipliers-and-sobolev-characterisations`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `poisson-problems-and-interior-harmonic-estimates`, `relations-functions-and-quotients`, `schwartz-space-and-the-plancherel-theorem`, `simply-connected-plane-domains`, `smooth-approximation-and-sobolev-extension`, `sobolev-traces-and-zero-boundary-values`, `sr-worldlines-and-clocks`, `stone-weierstrass-general`, `the-identity-theorem-and-the-open-mapping-theorem`, `the-lebesgue-integral-and-the-convergence-theorems`, `weak-derivatives-and-sobolev-spaces`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-expanded-analysis-prerequisites",
  "B": "em-expanded-analysis-prerequisites-examples",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "lem-em-bounded-error-model-comparison",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-bounded-error-model-comparison",
      "reference": "completed-expansion-arguments.md#U1",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "cor-mean-value-theorem"
      ],
      "dependency_roles": {
        "cor-mean-value-theorem": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-convergent-legendre-kernel",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-convergent-legendre-kernel",
      "reference": "completed-expansion-arguments.md#H1",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "thm-identity-theorem-holomorphic-functions",
        "thm-differentiation-under-the-integral-sign"
      ],
      "dependency_roles": {
        "thm-identity-theorem-holomorphic-functions": "mathematical-premise",
        "thm-differentiation-under-the-integral-sign": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-global-retarded-root",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-global-retarded-root",
      "reference": "completed-expansion-arguments.md#R1",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "thm-parametrized-implicit-function-theorem-with-higher-regularity"
      ],
      "dependency_roles": {
        "thm-parametrized-implicit-function-theorem-with-higher-regularity": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-integrable-causal-dispersion",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-integrable-causal-dispersion",
      "reference": "completed-expansion-arguments.md#D2",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "cor-cauchy-theorem-for-null-homotopic-loops",
        "thm-differentiation-under-the-integral-sign"
      ],
      "dependency_roles": {
        "cor-cauchy-theorem-for-null-homotopic-loops": "mathematical-premise",
        "thm-differentiation-under-the-integral-sign": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-mean-zero-coercivity-on-a-c-one-domain",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-mean-zero-coercivity-on-a-c-one-domain",
      "reference": "completed-expansion-arguments.md#B5",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "thm-smooth-up-to-the-boundary-density-on-smooth-domains",
        "lem-c-k-boundary-flattening-preserves-wkp-locally"
      ],
      "dependency_roles": {
        "thm-smooth-up-to-the-boundary-density-on-smooth-domains": "mathematical-premise",
        "lem-c-k-boundary-flattening-preserves-wkp-locally": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-outgoing-spherical-hankel-dtn-bounds",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-outgoing-spherical-hankel-dtn-bounds",
      "reference": "exterior-scattering-arguments.md#F1",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "thm-algebra-of-derivatives",
        "thm-complex-exponential-is-entire-with-derivative-itself"
      ],
      "dependency_roles": {
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-complex-exponential-is-entire-with-derivative-itself": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-rectangular-pec-energy-completeness",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-rectangular-pec-energy-completeness",
      "reference": "completed-expansion-arguments.md#G2",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "thm-trigonometric-system-is-complete-in-l-two-of-the-torus",
        "thm-l-two-fourier-series-converges-in-mean-square"
      ],
      "dependency_roles": {
        "thm-trigonometric-system-is-complete-in-l-two-of-the-torus": "mathematical-premise",
        "thm-l-two-fourier-series-converges-in-mean-square": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-smooth-newtonian-upgrade",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-smooth-newtonian-upgrade",
      "reference": "completed-expansion-arguments.md#S1",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "thm-newtonian-potential-solves-poisson-distributionally",
        "thm-differentiation-under-the-integral-sign"
      ],
      "dependency_roles": {
        "thm-newtonian-potential-solves-poisson-distributionally": "mathematical-premise",
        "thm-differentiation-under-the-integral-sign": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-symmetric-coercive-variational-solver",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-symmetric-coercive-variational-solver",
      "reference": "completed-expansion-arguments.md#B2",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "def-axiom-of-choice"
      ],
      "dependency_roles": {
        "def-axiom-of-choice": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-thin-current-limit",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-thin-current-limit",
      "reference": "completed-expansion-arguments.md#S2",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "def-distributional-derivative",
        "thm-differentiation-under-the-integral-sign"
      ],
      "dependency_roles": {
        "def-distributional-derivative": "mathematical-premise",
        "thm-differentiation-under-the-integral-sign": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-zero-boundary-coercivity",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-zero-boundary-coercivity",
      "reference": "completed-expansion-arguments.md#B1",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "def-sobolev-space-wkp-and-its-norm",
        "def-wkp-zero-as-a-sobolev-closure",
        "thm-sobolev-spaces-are-banach-spaces",
        "def-axiom-of-choice"
      ],
      "dependency_roles": {
        "def-sobolev-space-wkp-and-its-norm": "mathematical-premise",
        "def-wkp-zero-as-a-sobolev-closure": "mathematical-premise",
        "thm-sobolev-spaces-are-banach-spaces": "mathematical-premise",
        "def-axiom-of-choice": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 0
    },
    {
      "id": "lem-em-finitely-subtracted-analytic-dispersion",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-finitely-subtracted-analytic-dispersion",
      "reference": "completed-expansion-arguments.md#D3",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "cor-cauchy-theorem-for-null-homotopic-loops",
        "thm-identity-theorem-holomorphic-functions",
        "lem-em-integrable-causal-dispersion"
      ],
      "dependency_roles": {
        "cor-cauchy-theorem-for-null-homotopic-loops": "mathematical-premise",
        "thm-identity-theorem-holomorphic-functions": "mathematical-premise",
        "lem-em-integrable-causal-dispersion": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 1
    },
    {
      "id": "lem-em-lift-specified-dirichlet-existence",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-lift-specified-dirichlet-existence",
      "reference": "completed-expansion-arguments.md#B3",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-zero-boundary-coercivity",
        "lem-em-symmetric-coercive-variational-solver"
      ],
      "dependency_roles": {
        "lem-em-zero-boundary-coercivity": "mathematical-premise",
        "lem-em-symmetric-coercive-variational-solver": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 1
    },
    {
      "id": "lem-em-magnetic-dipole-remainder",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-magnetic-dipole-remainder",
      "reference": "completed-expansion-arguments.md#S3",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-coulomb-dipole-remainder"
      ],
      "dependency_roles": {
        "lem-em-coulomb-dipole-remainder": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 1
    },
    {
      "id": "lem-em-outgoing-source-helmholtz-and-diffraction",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-outgoing-source-helmholtz-and-diffraction",
      "reference": "completed-expansion-arguments.md#P3",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "cor-second-green-identity-on-a-bounded-c-one-domain",
        "lem-em-coulomb-dipole-remainder"
      ],
      "dependency_roles": {
        "cor-second-green-identity-on-a-bounded-c-one-domain": "mathematical-premise",
        "lem-em-coulomb-dipole-remainder": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 1
    },
    {
      "id": "lem-em-spherical-harmonic-basis-and-addition",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-spherical-harmonic-basis-and-addition",
      "reference": "completed-expansion-arguments.md#H2",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-convergent-legendre-kernel",
        "thm-real-stone-weierstrass-general",
        "lem-complex-translation-and-approximate-identity-interfaces",
        "cor-second-green-identity-on-a-bounded-c-one-domain"
      ],
      "dependency_roles": {
        "lem-em-convergent-legendre-kernel": "mathematical-premise",
        "thm-real-stone-weierstrass-general": "mathematical-premise",
        "lem-complex-translation-and-approximate-identity-interfaces": "mathematical-premise",
        "cor-second-green-identity-on-a-bounded-c-one-domain": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 1
    },
    {
      "id": "lem-em-spherical-mean-wave-identity",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-spherical-mean-wave-identity",
      "reference": "completed-expansion-arguments.md#W1",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-parameter-integrals",
        "thm-divergence-theorem-for-bounded-piecewise-c-one-domains"
      ],
      "dependency_roles": {
        "lem-em-parameter-integrals": "mathematical-premise",
        "thm-divergence-theorem-for-bounded-piecewise-c-one-domains": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 1
    },
    {
      "id": "lem-em-ball-poisson-series-boundary-convergence",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-ball-poisson-series-boundary-convergence",
      "reference": "completed-expansion-arguments.md#H3",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-spherical-harmonic-basis-and-addition",
        "thm-interior-derivative-estimates-for-harmonic-functions"
      ],
      "dependency_roles": {
        "lem-em-spherical-harmonic-basis-and-addition": "mathematical-premise",
        "thm-interior-derivative-estimates-for-harmonic-functions": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 2
    },
    {
      "id": "lem-em-helmholtz-boundary-representation",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-helmholtz-boundary-representation",
      "reference": "exterior-scattering-arguments.md#F6",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "lem-em-outgoing-source-helmholtz-and-diffraction",
        "cor-second-green-identity-on-a-bounded-c-one-domain",
        "lem-em-outgoing-spherical-hankel-dtn-bounds"
      ],
      "dependency_roles": {
        "lem-em-outgoing-source-helmholtz-and-diffraction": "mathematical-premise",
        "cor-second-green-identity-on-a-bounded-c-one-domain": "mathematical-premise",
        "lem-em-outgoing-spherical-hankel-dtn-bounds": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 2
    },
    {
      "id": "lem-em-particle-curve-variation",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-particle-curve-variation",
      "reference": "completed-expansion-arguments.md#V1",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "def-sr-affine-minkowski-model",
        "thm-sr-proper-time-and-observer-decomposition",
        "lem-em-fundamental-variation-lemma"
      ],
      "dependency_roles": {
        "def-sr-affine-minkowski-model": "mathematical-premise",
        "thm-sr-proper-time-and-observer-decomposition": "mathematical-premise",
        "lem-em-fundamental-variation-lemma": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 2
    },
    {
      "id": "lem-em-prescribed-fractional-dirichlet-existence",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-prescribed-fractional-dirichlet-existence",
      "reference": "completed-expansion-arguments.md#B4",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-lift-specified-dirichlet-existence",
        "thm-bounded-right-inverse-for-the-sobolev-trace",
        "thm-kernel-of-the-trace-is-w-one-p-zero",
        "thm-sharp-trace-theorem-for-w-one-p"
      ],
      "dependency_roles": {
        "lem-em-lift-specified-dirichlet-existence": "mathematical-premise",
        "thm-bounded-right-inverse-for-the-sobolev-trace": "mathematical-premise",
        "thm-kernel-of-the-trace-is-w-one-p-zero": "mathematical-premise",
        "thm-sharp-trace-theorem-for-w-one-p": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 2
    },
    {
      "id": "lem-em-sphere-outgoing-dirichlet-to-neumann-map",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-sphere-outgoing-dirichlet-to-neumann-map",
      "reference": "exterior-scattering-arguments.md#F2",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "lem-em-outgoing-spherical-hankel-dtn-bounds",
        "lem-em-spherical-harmonic-basis-and-addition",
        "lem-em-prescribed-fractional-dirichlet-existence",
        "lem-em-ball-poisson-series-boundary-convergence"
      ],
      "dependency_roles": {
        "lem-em-outgoing-spherical-hankel-dtn-bounds": "mathematical-premise",
        "lem-em-spherical-harmonic-basis-and-addition": "mathematical-premise",
        "lem-em-prescribed-fractional-dirichlet-existence": "mathematical-premise",
        "lem-em-ball-poisson-series-boundary-convergence": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 3
    },
    {
      "id": "lem-em-weak-neumann-and-transmission-existence",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-weak-neumann-and-transmission-existence",
      "reference": "completed-expansion-arguments.md#B6",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-prescribed-fractional-dirichlet-existence",
        "lem-em-mean-zero-coercivity-on-a-c-one-domain",
        "lem-em-symmetric-coercive-variational-solver"
      ],
      "dependency_roles": {
        "lem-em-prescribed-fractional-dirichlet-existence": "mathematical-premise",
        "lem-em-mean-zero-coercivity-on-a-c-one-domain": "mathematical-premise",
        "lem-em-symmetric-coercive-variational-solver": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 3
    },
    {
      "id": "lem-em-exterior-outgoing-scalar-uniqueness",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-exterior-outgoing-scalar-uniqueness",
      "reference": "exterior-scattering-arguments.md#F3",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "lem-em-sphere-outgoing-dirichlet-to-neumann-map",
        "thm-bounded-potential-weak-unique-continuation-in-three-dimensions",
        "cor-first-green-identity-on-a-bounded-c-one-domain"
      ],
      "dependency_roles": {
        "lem-em-sphere-outgoing-dirichlet-to-neumann-map": "mathematical-premise",
        "thm-bounded-potential-weak-unique-continuation-in-three-dimensions": "mathematical-premise",
        "cor-first-green-identity-on-a-bounded-c-one-domain": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 4
    },
    {
      "id": "lem-em-smooth-domain-elliptic-regularity",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-smooth-domain-elliptic-regularity",
      "reference": "completed-expansion-arguments.md#B7",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "lem-em-prescribed-fractional-dirichlet-existence",
        "lem-em-weak-neumann-and-transmission-existence",
        "thm-riesz-representation-for-hilbert-space",
        "thm-extension-theorem-for-bounded-smooth-domains",
        "thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces",
        "thm-l-two-fourier-inversion"
      ],
      "dependency_roles": {
        "lem-em-prescribed-fractional-dirichlet-existence": "mathematical-premise",
        "lem-em-weak-neumann-and-transmission-existence": "mathematical-premise",
        "thm-riesz-representation-for-hilbert-space": "mathematical-premise",
        "thm-extension-theorem-for-bounded-smooth-domains": "mathematical-premise",
        "thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces": "mathematical-premise",
        "thm-l-two-fourier-inversion": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 4
    },
    {
      "id": "lem-em-exterior-vector-helmholtz-mixed-boundary-existence",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-exterior-vector-helmholtz-mixed-boundary-existence",
      "reference": "exterior-scattering-arguments.md#F4",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "lem-em-sphere-outgoing-dirichlet-to-neumann-map",
        "lem-em-exterior-outgoing-scalar-uniqueness",
        "lem-em-smooth-domain-elliptic-regularity",
        "thm-riesz-representation-for-hilbert-space",
        "thm-fredholm-alternative-for-identity-minus-compact",
        "def-axiom-of-choice"
      ],
      "dependency_roles": {
        "lem-em-sphere-outgoing-dirichlet-to-neumann-map": "mathematical-premise",
        "lem-em-exterior-outgoing-scalar-uniqueness": "mathematical-premise",
        "lem-em-smooth-domain-elliptic-regularity": "mathematical-premise",
        "thm-riesz-representation-for-hilbert-space": "mathematical-premise",
        "thm-fredholm-alternative-for-identity-minus-compact": "mathematical-premise",
        "def-axiom-of-choice": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 5
    },
    {
      "id": "lem-em-smooth-pec-cavity-spectral-closure",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-smooth-pec-cavity-spectral-closure",
      "reference": "completed-expansion-arguments.md#G3",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "lem-em-smooth-domain-elliptic-regularity",
        "lem-em-symmetric-coercive-variational-solver",
        "thm-spectral-theorem-for-compact-self-adjoint-operators"
      ],
      "dependency_roles": {
        "lem-em-smooth-domain-elliptic-regularity": "mathematical-premise",
        "lem-em-symmetric-coercive-variational-solver": "mathematical-premise",
        "thm-spectral-theorem-for-compact-self-adjoint-operators": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 5
    }
  ],
  "B_inventory": [
    {
      "id": "ex-em-outgoing-dtn-and-pec-zero-mode-boundaries",
      "kind": "example",
      "domain": "mathematics",
      "title": "Outgoing DtN and explicit PEC topology zero mode",
      "reference": "mathematical-example-verifications.md#outgoing-dtn",
      "design_state": "complete-explicit-mathematical-example",
      "deps": [
        "lem-em-outgoing-spherical-hankel-dtn-bounds",
        "lem-em-smooth-pec-cavity-spectral-closure"
      ],
      "dependency_roles": {
        "lem-em-outgoing-spherical-hankel-dtn-bounds": "mathematical-premise",
        "lem-em-smooth-pec-cavity-spectral-closure": "mathematical-premise"
      },
      "dependency_level": 6
    }
  ],
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification",
  "A_item_count": 27,
  "B_item_count": 1
}
```

## Causal kernels, gauge and point fields after wave existence

A page `em-causal-wave-kernel-prerequisites`; B companion `em-causal-wave-kernel-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 321. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-wave-equation-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-causal-wave-kernel-prerequisites",
  "B": "em-causal-wave-kernel-prerequisites-examples",
  "title": "Causal kernels, gauge and point fields after wave existence",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "lem-em-gauge-wave-reachability",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-gauge-wave-reachability",
      "reference": "completed-expansion-arguments.md#W6",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "thm-em-wave-cauchy-kirchhoff"
      ],
      "dependency_roles": {
        "thm-em-wave-cauchy-kirchhoff": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 3
    },
    {
      "id": "lem-em-retarded-wave-kernel",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-retarded-wave-kernel",
      "reference": "completed-expansion-arguments.md#W3",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "thm-em-wave-cauchy-kirchhoff",
        "def-distributional-derivative"
      ],
      "dependency_roles": {
        "thm-em-wave-cauchy-kirchhoff": "mathematical-premise",
        "def-distributional-derivative": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 3
    },
    {
      "id": "lem-em-smooth-forced-maxwell-cauchy-system",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-smooth-forced-maxwell-cauchy-system",
      "reference": "completed-expansion-arguments.md#W7",
      "design_state": "complete-exact-conditional-research-argument",
      "deps": [
        "thm-em-wave-cauchy-kirchhoff"
      ],
      "dependency_roles": {
        "thm-em-wave-cauchy-kirchhoff": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 3
    },
    {
      "id": "lem-em-point-retarded-potential-and-fields",
      "kind": "lemma",
      "domain": "mathematics",
      "title": "lem-em-point-retarded-potential-and-fields",
      "reference": "completed-expansion-arguments.md#R2",
      "design_state": "complete-local-branch-argument",
      "deps": [
        "lem-em-global-retarded-root",
        "lem-em-retarded-wave-kernel",
        "lem-em-point-current-continuity"
      ],
      "dependency_roles": {
        "lem-em-global-retarded-root": "mathematical-premise",
        "lem-em-retarded-wave-kernel": "mathematical-premise",
        "lem-em-point-current-continuity": "mathematical-premise"
      },
      "inventory_expansion_required": false,
      "dependency_level": 4
    }
  ],
  "B_inventory": [],
  "A_item_count": 4,
  "B_item_count": 0,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Complete retarded point fields

A page `em-retarded-point-prerequisites`; B companion `em-retarded-point-prerequisites-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.
Order 323. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-causal-wave-kernel-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-retarded-point-prerequisites",
  "B": "em-retarded-point-prerequisites-examples",
  "title": "Complete retarded point fields",
  "library": "mathematics",
  "A_inventory": [
    {
      "id": "thm-em-retarded-root-and-fields",
      "kind": "theorem",
      "domain": "mathematics",
      "reference": "completed-expansion-arguments.md#R1-R2",
      "design_state": "complete-exact-declared-branch-conditional-research-argument",
      "dependency_level": 5,
      "deps": [
        "def-ck-euclidean-maps-and-diffeomorphisms",
        "def-euclidean-inner-product",
        "thm-algebra-of-derivatives",
        "thm-chain-rule-for-total-derivatives",
        "thm-em-wave-cauchy-kirchhoff",
        "thm-parametrized-implicit-function-theorem-with-higher-regularity",
        "lem-em-point-current-continuity",
        "lem-em-point-retarded-potential-and-fields"
      ],
      "dependency_roles": {
        "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise",
        "def-euclidean-inner-product": "mathematical-premise",
        "thm-algebra-of-derivatives": "mathematical-premise",
        "thm-chain-rule-for-total-derivatives": "mathematical-premise",
        "thm-em-wave-cauchy-kirchhoff": "mathematical-premise",
        "thm-parametrized-implicit-function-theorem-with-higher-regularity": "mathematical-premise",
        "lem-em-point-current-continuity": "mathematical-premise",
        "lem-em-point-retarded-potential-and-fields": "mathematical-premise"
      },
      "inventory_expansion_required": false
    }
  ],
  "B_inventory": [
    {
      "id": "ex-em-wave-equation-prerequisites-hypothesis-boundaries",
      "domain": "mathematics",
      "kind": "example",
      "title": "Explicit mathematical hypothesis/convention examples",
      "deps": [
        "thm-em-wave-cauchy-kirchhoff",
        "thm-em-retarded-root-and-fields"
      ],
      "dependency_level": 6,
      "dependency_roles": {
        "thm-em-wave-cauchy-kirchhoff": "mathematical-premise",
        "thm-em-retarded-root-and-fields": "mathematical-premise"
      },
      "reference": "mathematical-example-verifications.md#ex-em-wave-equation-prerequisites-hypothesis-boundaries",
      "design_state": "complete-explicit-mathematical-example"
    }
  ],
  "A_item_count": 1,
  "B_item_count": 1,
  "hard_cap": 100,
  "closure": "Complete exact declared conditional research arguments; no independent/engine certification"
}
```

## Primitives and postulates

A page `em-primitives-and-postulates`; B companion `em-primitives-and-postulates-examples`. Category `classical-electromagnetism`; library `physics`.
Order 325. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-minkowski-mathematical-prerequisites`, `linear-independence-bases-and-dimension`, `sr-forces-and-continuum`, `vector-spaces-and-subspaces`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-primitives-and-postulates",
  "B": "em-primitives-and-postulates-examples",
  "title": "Primitives and postulates",
  "library": "physics",
  "A_items": [
    "def-em-lab-geometry",
    "def-em-si-conventions",
    "def-em-sources",
    "def-em-fields",
    "post-em-minkowski-physical-model",
    "def-em-relativistic-worldlines-frames",
    "post-em-vacuum-maxwell",
    "def-em-electromagnetic-tensor",
    "pthm-em-linear-superposition",
    "post-em-lorentz-coupling"
  ],
  "B_items": [
    "ex-em-smooth-and-point-source-types",
    "ex-em-unit-dimensional-checks"
  ],
  "A_item_count": 10,
  "B_item_count": 2,
  "hard_cap": 100
}
```

## Integral Maxwell and constraints

A page `em-maxwell-integral-and-constraints`; B companion `em-maxwell-integral-and-constraints-examples`. Category `classical-electromagnetism`; library `physics`.
Order 327. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-elementary-mathematical-prerequisites`, `em-primitives-and-postulates`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-maxwell-integral-and-constraints",
  "B": "em-maxwell-integral-and-constraints-examples",
  "title": "Integral Maxwell and constraints",
  "library": "physics",
  "A_items": [
    "def-em-fixed-test-geometry",
    "def-em-weak-sources",
    "pthm-em-charge-continuity",
    "pthm-em-integral-maxwell",
    "pthm-em-fixed-vacuum-jumps",
    "pthm-em-gauss-constraint-propagation"
  ],
  "B_items": [
    "ex-em-nonconserved-switched-charge",
    "texp-em-displacement-current-surface-choice"
  ],
  "A_item_count": 6,
  "B_item_count": 2,
  "hard_cap": 100
}
```

## Electrostatics in vacuum

A page `em-electrostatics-in-vacuum`; B companion `em-electrostatics-in-vacuum-examples`. Category `classical-electromagnetism`; library `physics`.
Order 329. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-maxwell-integral-and-constraints`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lebesgue-integral-and-the-convergence-theorems`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-electrostatics-in-vacuum",
  "B": "em-electrostatics-in-vacuum-examples",
  "title": "Electrostatics in vacuum",
  "library": "physics",
  "A_items": [
    "def-em-electrostatic-regime",
    "pthm-em-electrostatic-potential",
    "pthm-em-coulomb-solution",
    "pthm-em-electrostatic-work",
    "pthm-em-electrostatic-field-energy",
    "pthm-em-point-self-energy-divergence"
  ],
  "B_items": [
    "ex-em-infinite-line-normalization",
    "ex-em-uniform-ball-coulomb"
  ],
  "A_item_count": 6,
  "B_item_count": 2,
  "hard_cap": 100
}
```

## Electrostatic boundaries and conductors

A page `em-electrostatic-boundaries-and-conductors`; B companion `em-electrostatic-boundaries-and-conductors-examples`. Category `classical-electromagnetism`; library `physics`.
Order 331. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-boundary-and-spectral-prerequisites`, `em-electrostatics-in-vacuum`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-electrostatic-boundaries-and-conductors",
  "B": "em-electrostatic-boundaries-and-conductors-examples",
  "title": "Electrostatic boundaries and conductors",
  "library": "physics",
  "A_items": [
    "post-em-electrostatic-conductor-model",
    "pthm-em-conductor-surface-charge",
    "pthm-em-electrostatic-bvp-uniqueness",
    "pthm-em-electrostatic-bvp-existence",
    "pthm-em-image-method-certificate",
    "pthm-em-capacitance-energy"
  ],
  "B_items": [
    "ex-em-neumann-data-failure",
    "ex-em-grounded-plane-image-force",
    "ex-em-parallel-plate-capacitor"
  ],
  "A_item_count": 6,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Electrostatic multipoles

A page `em-electrostatic-multipoles`; B companion `em-electrostatic-multipoles-examples`. Category `classical-electromagnetism`; library `physics`.
Order 333. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-boundary-and-spectral-prerequisites`, `em-electrostatics-in-vacuum`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-electrostatic-multipoles",
  "B": "em-electrostatic-multipoles-examples",
  "title": "Electrostatic multipoles",
  "library": "physics",
  "A_items": [
    "def-em-electric-moments",
    "pthm-em-moment-origin-change",
    "pthm-em-electric-dipole-torque",
    "pthm-em-electric-dipole-expansion",
    "pthm-em-electric-general-multipoles"
  ],
  "B_items": [
    "ex-em-quadrupole-symmetry",
    "ex-em-two-charge-dipole"
  ],
  "A_item_count": 5,
  "B_item_count": 2,
  "hard_cap": 100
}
```

## Magnetostatics in vacuum

A page `em-magnetostatics-in-vacuum`; B companion `em-magnetostatics-in-vacuum-examples`. Category `classical-electromagnetism`; library `physics`.
Order 335. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-expanded-analysis-prerequisites`, `em-maxwell-integral-and-constraints`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-magnetostatics-in-vacuum",
  "B": "em-magnetostatics-in-vacuum-examples",
  "title": "Magnetostatics in vacuum",
  "library": "physics",
  "A_items": [
    "def-em-steady-current-regime",
    "def-em-magnetic-moment",
    "pthm-em-magnetostatic-vector-potential",
    "pthm-em-biot-savart",
    "pthm-em-magnetic-dipole-field",
    "pthm-em-magnetic-loop-force-torque"
  ],
  "B_items": [
    "ex-em-infinite-wire-and-solenoid",
    "ex-em-circular-loop-axis-field",
    "ex-em-wire-force-coupling"
  ],
  "A_item_count": 6,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Material response and stationary interfaces

A page `em-material-response`; B companion `em-material-response-examples`. Category `classical-electromagnetism`; library `physics`.
Order 337. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-causal-response-and-radiation-prerequisites`, `em-maxwell-integral-and-constraints`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-material-response",
  "B": "em-material-response-examples",
  "title": "Material response and stationary interfaces",
  "library": "physics",
  "A_items": [
    "post-em-coarse-graining",
    "def-em-polarization-magnetization",
    "pthm-em-macroscopic-maxwell",
    "post-em-material-closure",
    "pthm-em-material-stationary-jumps",
    "pthm-em-causal-dispersive-response",
    "pthm-em-restricted-material-energy"
  ],
  "B_items": [
    "ex-em-constitutive-unit-counterexample",
    "ex-em-dielectric-interface-example",
    "ex-em-dielectric-sphere-example"
  ],
  "A_item_count": 7,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Induction and circuit approximations

A page `em-induction-and-circuit-limits`; B companion `em-induction-and-circuit-limits-examples`. Category `classical-electromagnetism`; library `physics`.
Order 339. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-electrostatic-boundaries-and-conductors`, `em-magnetostatics-in-vacuum`, `em-material-response`, `picard-lindelof-and-first-order-odes`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-induction-and-circuit-limits",
  "B": "em-induction-and-circuit-limits-examples",
  "title": "Induction and circuit approximations",
  "library": "physics",
  "A_items": [
    "def-em-moving-circuit-geometry",
    "pthm-em-motional-emf",
    "post-em-circuit-approximation",
    "pthm-em-inductance-reciprocity",
    "pthm-em-inductor-energy",
    "pthm-em-rl-lc-dynamics"
  ],
  "B_items": [
    "texp-em-sliding-bar-emf",
    "ex-em-transformer-idealization",
    "ex-em-rl-time-response"
  ],
  "A_item_count": 6,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Potentials and gauge

A page `em-potentials-and-gauge`; B companion `em-potentials-and-gauge-examples`. Category `classical-electromagnetism`; library `physics`.
Order 341. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-boundary-and-spectral-prerequisites`, `em-primitives-and-postulates`, `em-wave-equation-prerequisites`, `mixed-partials-taylor-and-extrema`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-potentials-and-gauge",
  "B": "em-potentials-and-gauge-examples",
  "title": "Potentials and gauge",
  "library": "physics",
  "A_items": [
    "pthm-em-spacetime-potentials",
    "def-em-gauge-transformation",
    "pthm-em-gauge-invariance",
    "pthm-em-lorenz-gauge-wave-form",
    "pthm-em-gauge-reachability"
  ],
  "B_items": [
    "ex-em-topological-potential-obstructions",
    "ex-em-pure-gauge-fields",
    "ex-em-residual-lorenz-example"
  ],
  "A_item_count": 5,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Energy momentum angular balance

A page `em-energy-momentum-and-angular-balance`; B companion `em-energy-momentum-and-angular-balance-examples`. Category `classical-electromagnetism`; library `physics`.
Order 343. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-elementary-mathematical-prerequisites`, `em-primitives-and-postulates`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-energy-momentum-and-angular-balance",
  "B": "em-energy-momentum-and-angular-balance-examples",
  "title": "Energy momentum angular balance",
  "library": "physics",
  "A_items": [
    "def-em-vacuum-energy-flux",
    "def-em-vacuum-stress-momentum",
    "pthm-em-poynting-balance",
    "pthm-em-momentum-balance",
    "pthm-em-angular-balance",
    "pthm-em-coupled-total-conservation"
  ],
  "B_items": [
    "ex-em-vacuum-energy-flow-example"
  ],
  "A_item_count": 6,
  "B_item_count": 1,
  "hard_cap": 100
}
```

## Vacuum waves and polarization

A page `em-vacuum-waves-and-polarization`; B companion `em-vacuum-waves-and-polarization-examples`. Category `classical-electromagnetism`; library `physics`.
Order 345. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-energy-momentum-and-angular-balance`, `em-maxwell-integral-and-constraints`, `em-wave-equation-prerequisites`, `sr-causality-and-signals`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-vacuum-waves-and-polarization",
  "B": "em-vacuum-waves-and-polarization-examples",
  "title": "Vacuum waves and polarization",
  "library": "physics",
  "A_items": [
    "def-em-plane-wave-definition",
    "pthm-em-vacuum-wave-equation",
    "pthm-em-plane-wave-maxwell",
    "def-em-polarization-definition",
    "pthm-em-general-wave-ivp",
    "pthm-em-wave-energy-average",
    "pthm-em-classical-interference"
  ],
  "B_items": [
    "ex-em-polarization-examples",
    "ex-em-plane-wave-infinite-energy",
    "texp-em-radiation-pressure-example",
    "ex-em-two-beam-fringes"
  ],
  "A_item_count": 7,
  "B_item_count": 4,
  "hard_cap": 100
}
```

## Wave interfaces and conductors

A page `em-wave-interfaces-and-conductors`; B companion `em-wave-interfaces-and-conductors-examples`. Category `classical-electromagnetism`; library `physics`.
Order 347. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-material-response`, `em-vacuum-waves-and-polarization`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-wave-interfaces-and-conductors",
  "B": "em-wave-interfaces-and-conductors-examples",
  "title": "Wave interfaces and conductors",
  "library": "physics",
  "A_items": [
    "def-em-medium-wave-parameters",
    "pthm-em-conducting-skin-depth",
    "pthm-em-phase-matching",
    "pthm-em-normal-fresnel",
    "pthm-em-oblique-fresnel"
  ],
  "B_items": [
    "ex-em-skin-depth-approximation-example",
    "ex-em-brewster-angle-example",
    "ex-em-evanescent-flux-example"
  ],
  "A_item_count": 5,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Waveguides and cavities

A page `em-waveguides-and-cavities`; B companion `em-waveguides-and-cavities-examples`. Category `classical-electromagnetism`; library `physics`.
Order 349. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-electrostatic-boundaries-and-conductors`, `em-material-response`, `em-vacuum-waves-and-polarization`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-waveguides-and-cavities",
  "B": "em-waveguides-and-cavities-examples",
  "title": "Waveguides and cavities",
  "library": "physics",
  "A_items": [
    "def-em-guide-cavity-geometry",
    "pthm-em-rectangular-mode-candidates",
    "pthm-em-guide-completeness",
    "pthm-em-guide-dispersion-energy"
  ],
  "B_items": [
    "ex-em-tem-topology-example",
    "ex-em-rectangular-cavity-example",
    "ex-em-te-ten-example"
  ],
  "A_item_count": 4,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Retarded fields and radiation

A page `em-retarded-fields-and-radiation`; B companion `em-retarded-fields-and-radiation-examples`. Category `classical-electromagnetism`; library `physics`.
Order 351. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-causal-response-and-radiation-prerequisites`, `em-electrostatic-multipoles`, `em-energy-momentum-and-angular-balance`, `em-potentials-and-gauge`, `em-retarded-point-prerequisites`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-retarded-fields-and-radiation",
  "B": "em-retarded-fields-and-radiation-examples",
  "title": "Retarded fields and radiation",
  "library": "physics",
  "A_items": [
    "post-em-radiation-selection",
    "def-em-retarded-point-geometry",
    "pthm-em-retarded-potentials",
    "pthm-em-dipole-radiation",
    "pthm-em-lienard-wiechert",
    "pthm-em-larmor-nonrelativistic",
    "pthm-em-lienard-emitted-power",
    "rem-em-radiation-reaction-limits"
  ],
  "B_items": [
    "ex-em-no-retarded-root-example",
    "ex-em-dipole-antenna-example",
    "texp-em-classical-orbit-instability"
  ],
  "A_item_count": 8,
  "B_item_count": 3,
  "hard_cap": 100
}
```

## Lorentz covariant formulation

A page `em-lorentz-covariant-formulation`; B companion `em-lorentz-covariant-formulation-examples`. Category `classical-electromagnetism`; library `physics`.
Order 353. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-vacuum-waves-and-polarization`, `sr-light-and-doppler`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-lorentz-covariant-formulation",
  "B": "em-lorentz-covariant-formulation-examples",
  "title": "Lorentz covariant formulation",
  "library": "physics",
  "A_items": [
    "pthm-em-tensor-maxwell-equivalence",
    "pthm-em-lorentz-field-transform",
    "pthm-em-observer-field-and-doppler",
    "pthm-em-relativistic-lorentz-force",
    "pthm-em-covariant-stress-energy"
  ],
  "B_items": [
    "ex-em-boosted-fields-example",
    "ex-em-constant-field-trajectory"
  ],
  "A_item_count": 5,
  "B_item_count": 2,
  "hard_cap": 100
}
```

## Empirical tests and limitations

A page `em-empirical-tests-and-scope`; B companion `em-empirical-tests-and-scope-examples`. Category `classical-electromagnetism`; library `physics`.
Order 355. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-experiment-analysis-prerequisites`, `em-material-response`, `em-retarded-fields-and-radiation`, `em-vacuum-waves-and-polarization`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-empirical-tests-and-scope",
  "B": "em-empirical-tests-and-scope-examples",
  "title": "Empirical tests and limitations",
  "library": "physics",
  "A_items": [
    "def-em-experiment-record-contract",
    "exp-em-induction-report",
    "exp-em-inverse-square-report",
    "exp-em-wave-propagation-report",
    "pthm-em-specified-model-comparison",
    "rem-em-classical-validity-limits"
  ],
  "B_items": [
    "ex-em-apparatus-model-ambiguity",
    "ex-em-ideal-and-measured-fringes"
  ],
  "A_item_count": 6,
  "B_item_count": 2,
  "hard_cap": 100
}
```

## Alternative action formulation

A page `em-action-and-variational-formulation`; B companion `em-action-and-variational-formulation-examples`. Category `classical-electromagnetism`; library `physics`.
Order 357. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-lorentz-covariant-formulation`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-action-and-variational-formulation",
  "B": "em-action-and-variational-formulation-examples",
  "title": "Alternative action formulation",
  "library": "physics",
  "A_items": [
    "def-em-field-action-definition",
    "post-em-stationary-action-model",
    "pthm-em-action-gauge-source-compatibility",
    "pthm-em-action-maxwell-variation",
    "pthm-em-particle-action-coupling"
  ],
  "B_items": [
    "ex-em-stationary-not-minimum",
    "ex-em-compact-variation-example"
  ],
  "A_item_count": 5,
  "B_item_count": 2,
  "hard_cap": 100
}
```

## Vector PEC scattering, dipole limits and controlled scalar diffraction

A page `em-scattering-and-scalar-diffraction`; B companion `em-scattering-and-scalar-diffraction-examples`. Category `classical-electromagnetism`; library `physics`.
Order 359. Exact source inventory: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`.
Declared earlier prerequisites: `em-lorentz-covariant-formulation`, `em-material-response`, `em-retarded-fields-and-radiation`.

Original reservation (read together with the full required sources above):

```json
{
  "A": "em-scattering-and-scalar-diffraction",
  "B": "em-scattering-and-scalar-diffraction-examples",
  "title": "Vector PEC scattering, dipole limits and controlled scalar diffraction",
  "library": "physics",
  "A_items": [
    "post-em-scalar-aperture-model",
    "pthm-em-scalar-aperture-diffraction",
    "pthm-em-pec-monochromatic-exterior-scattering",
    "pthm-em-dipole-scattering-cross-section",
    "pthm-em-weak-field-thomson-limit"
  ],
  "B_items": [
    "ex-em-rectangular-aperture"
  ],
  "A_item_count": 5,
  "B_item_count": 1,
  "hard_cap": 100
}
```
