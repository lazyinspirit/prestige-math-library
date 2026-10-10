# General Relativity — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/first-principles-2026-10-03/relativity/scaffold/general-relativity.md` (SHA-256 b4b45774f74720f38b859579a75c1afbba92155058998cdcdb2169d50106b95d).
- `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json` (SHA-256 1cae69cf78911a988a676b884f63625d1eca5c27bad6cc3826ad8c18e5ab34dd).
- `research/first-principles-2026-10-03/relativity/scaffold/expanded-item-inventory.json` (SHA-256 550a64eee368036356035022ce7d22d7459d6e765e49a4a8aca19ce842838dc7).
- `research/first-principles-2026-10-03/relativity/closure-ledger.json` (SHA-256 26c8a863b1402245962973ed20835345e89091f0ee256406b43ab20bbde9c8e6).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims. GR's published-mathematics audit uses no planned SR/EM/PDE mathematics. The checked SR postulates are draft PHYSICS items with flat-Minkowski scope; they do not supply curved-spacetime assumptions, and GR locally defines its geometry, observer quantities and physical postulates. The SR flat limit remains a comparison.

## Framework And Geometry

A page `gr-framework-and-geometry`; B companion `gr-framework-and-geometry-examples`. Category `general-relativity`; library `physics`.
Order 233. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: none; the SR framework is comparative only.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR01",
  "role": "A",
  "inventory": "def manifold/Lorentz metric/future orientation/units; post spacetime and classical domain; def metric-selected connection; post field/matter assumptions",
  "budget": 26,
  "requires": [],
  "closure": "G0/G7",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Tensors And Observers

A page `gr-tensors-and-observers`; B companion `gr-tensors-and-observers-examples`. Category `general-relativity`; library `physics`.
Order 235. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-framework-and-geometry`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR02",
  "role": "A",
  "inventory": "def tangent/dual/tensor bundles; transformation/contraction; local tetrads/congruences/charts; M04 observer split; M10 local tetrad",
  "budget": 30,
  "requires": [
    "GR01"
  ],
  "closure": "G0/G2/S4",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Connections And Free Fall

A page `gr-connections-and-free-fall`; B companion `gr-connections-and-free-fall-examples`. Category `general-relativity`; library `physics`.
Order 237. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-tensors-and-observers`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR03",
  "role": "A",
  "inventory": "M05 full Lorentz Levi–Civita; def curve differentiation/geodesics; post clock/test free-fall/light; M09 local IVP; M10 normal-coordinate construction; M14 restricted proper-time variation",
  "budget": 36,
  "requires": [
    "GR02"
  ],
  "closure": "G1/G2/G5/C1–C2",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Curvature And Tides

A page `gr-curvature-and-tides`; B companion `gr-curvature-and-tides-examples`. Category `general-relativity`; library `physics`.
Order 239. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-connections-and-free-fall`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR04",
  "role": "A",
  "inventory": "M06 tensorial curvature, Ricci/scalar; M11 symmetries/Bianchi; M19 geodesic deviation; pthm tidal comparison",
  "budget": 34,
  "requires": [
    "GR03"
  ],
  "closure": "G3/C2",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Einstein And Matter

A page `gr-einstein-and-matter`; B companion `gr-einstein-and-matter-examples`. Category `general-relativity`; library `physics`.
Order 241. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-curvature-and-tides`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR05",
  "role": "A",
  "inventory": "post Einstein equation/couplings; explicit dust/fluid/scalar branches; def Hilbert T; M12 compact-support action variation; M22 matter equations; pthm on-shell divergence/constraints; G4 volume/divergence mathematics before action variation",
  "budget": 46,
  "requires": [
    "GR04"
  ],
  "closure": "G3/G5–G7",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Local And Global Energy

A page `gr-local-and-global-energy`; B companion `gr-local-and-global-energy-examples`. Category `general-relativity`; library `physics`.
Order 243. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-einstein-and-matter`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR06",
  "role": "A",
  "inventory": "M07 Killing current; def volume/flux/charges; M13 Stokes flux; pthm local balance; rem absence of universal global energy; defer ADM to boundary-asymptotic module",
  "budget": 24,
  "requires": [
    "GR05"
  ],
  "closure": "G4/G6",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Flat And Newtonian Bridges

A page `gr-flat-and-newtonian-bridges`; B companion `gr-flat-and-newtonian-bridges-examples`. Category `general-relativity`; library `physics`.
Order 245. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-einstein-and-matter`, `sr-newtonian-bridge`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR07",
  "role": "A",
  "inventory": "pthm Minkowski vacuum model with Λ=0; rem local flatness/global topology caveat; M08/M17 controlled geodesic/Poisson bridge; explicit variable/coupling identification; first-use flat linearization/gauge mathematics before weak-field calculation",
  "budget": 40,
  "requires": [
    "GR05"
  ],
  "closure": "G7/Q3/Q4; local flat and controlled-bridge arguments",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Spherical Vacuum Model

A page `gr-spherical-vacuum-model`; B companion `gr-spherical-vacuum-model-examples`. Category `general-relativity`; library `physics`.
Order 247. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-flat-and-newtonian-bridges`, `gr-local-and-global-energy`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR08",
  "role": "A",
  "inventory": "def Schwarzschild exterior domain r>2GM/c²; M18 vacuum calculation; pthm restricted geodesic/redshift predictions; rem chart extension/horizon and singularity distinction",
  "budget": 46,
  "requires": [
    "GR03",
    "GR04",
    "GR05",
    "GR06",
    "GR07"
  ],
  "closure": "Q1,Q5",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Homogeneous Cosmology

A page `gr-homogeneous-cosmology`; B companion `gr-homogeneous-cosmology-examples`. Category `general-relativity`; library `physics`.
Order 249. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-einstein-and-matter`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR09",
  "role": "A",
  "inventory": "def FLRW metric/time/congruence/curvature parameter; post symmetry/fluid EOS; M18 Einstein reduction; pthm restricted solutions; rem observation/model dependence",
  "budget": 30,
  "requires": [
    "GR05"
  ],
  "closure": "Q2",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Linearized Waves

A page `gr-linearized-waves`; B companion `gr-linearized-waves-examples`. Category `general-relativity`; library `physics`.
Order 251. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-flat-and-newtonian-bridges`, `gr-local-and-global-energy`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR10",
  "role": "A",
  "inventory": "def perturbation/gauge/trace reverse; M18 linearized field equations; pthm plane-wave polarization/geodesic-deviation response; def approximation and detector coupling",
  "budget": 30,
  "requires": [
    "GR04",
    "GR05",
    "GR06",
    "GR07"
  ],
  "closure": "Q3/G3 plus the local published-math Duhamel/Kirchhoff proof in the GR scaffold",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Causal And Initial Value Boundaries

A page `gr-causal-and-initial-value-boundaries`; B companion `gr-causal-and-initial-value-boundaries-examples`. Category `general-relativity`; library `physics`.
Order 253. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-einstein-and-matter`; causal geometry and its physical scope are stated locally in GR.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR11",
  "role": "A",
  "inventory": "C3–C5 exact causal hierarchy, Cauchy definitions, flat countermodels and Raychaudhuri/focusing",
  "budget": 30,
  "requires": [
    "GR03",
    "GR04",
    "GR05"
  ],
  "closure": "C3–C5 complete",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Experimental Interface

A page `gr-experimental-interface`; B companion `gr-experimental-interface-examples`. Category `general-relativity`; library `physics`.
Order 255. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-homogeneous-cosmology`, `gr-linearized-waves`, `gr-spherical-vacuum-model`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR12",
  "role": "A",
  "inventory": "def observation/analysis architecture; rem primary redshift, delay, light-deflection, perihelion, binary and interferometer report queue; M20 before exp items",
  "budget": 18,
  "requires": [
    "GR07",
    "GR08",
    "GR09",
    "GR10"
  ],
  "closure": "primary-report queue only; no experiment invented",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Gr13 Convex Normal Neighborhoods

A page `gr-gr13-convex-normal-neighborhoods`; B companion `gr-gr13-convex-normal-neighborhoods-examples`. Category `general-relativity`; library `physics`.
Order 257. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-causal-and-initial-value-boundaries`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR13",
  "role": "A",
  "inventory": "Convex normal neighborhoods; auxiliary completeness; limit curves and Lorentz length; Cauchy equivalence, volume time, smooth temporal splitting",
  "budget": 58,
  "requires": [
    "GR11"
  ],
  "closure": "H0–H3",
  "status": "H0–H2 locally supported, including the published-root H1 repair; H3 smooth splitting remains held because its complete mathematical proof is not locally supplied"
}
```

## Gr14 Full High Regularity Symmetric Hyperbolic Proof

A page `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`; B companion `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples`. Category `general-relativity`; library `physics`.
Order 259. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-gr13-convex-normal-neighborhoods`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR14",
  "role": "A",
  "inventory": "Full high-regularity symmetric hyperbolic proof; harmonic Einstein reduction/data/constraints/subsidiary/geometric uniqueness; selected scalar/fluid/dust PDE",
  "budget": 78,
  "requires": [
    "GR05",
    "GR13"
  ],
  "closure": "E0–E3",
  "status": "E0–E2 and the stated scalar/interior-fluid branches are locally supported; the full E3 dust theorem remains held because its external mathematical proof is not an allowed supplier"
}
```

## Gr15 Exact Checked Sbierski Smooth Mghd Proof With Complete Local Prerequisites And Quotient Second Countability

A page `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability`; B companion `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples`. Category `general-relativity`; library `physics`.
Order 261. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "GR15",
  "role": "A",
  "inventory": "Exact checked Sbierski smooth MGHD proof with complete local prerequisites and quotient second countability",
  "budget": 32,
  "requires": [
    "GR13",
    "GR14"
  ],
  "closure": "H4",
  "status": "H4 smooth maximal-development claim remains held because the boundary-extension and gluing proof is not locally supplied from published mathematics"
}
```
