# Special Relativity — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md` (SHA-256 65164864e0da328c1eaea8dcdad0aa816ab3ae294ebb77650ca0c4422021521c).
- `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json` (SHA-256 8ace89078fa8c5e90a0fc480a53e540202ab116389b376e12c62ba191a865b21).
- `research/first-principles-2026-10-03/relativity/scaffold/expanded-item-inventory.json` (SHA-256 38fa8f414ce7112d353d4ac0f7427362bda9527acb83caa412c42207e9b4146b).
- `research/first-principles-2026-10-03/relativity/closure-ledger.json` (SHA-256 6bae19fafb0efaa2b1c1519014e217e0f14bf79cbd2129b39f9a8b19168d9ede).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Spacetime Primitives

A page `sr-spacetime-primitives`; B companion `sr-spacetime-primitives-examples`. Category `special-relativity`; library `physics`.
Order 209. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: none.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR01",
  "role": "A",
  "inventory": "def affine action/displacement; def Lorentz form/future cone; inertia/orthogonal-basis suppliers; def events/inertial affine frames; post spacetime/light/clock interpretation; def units; M01 geometry",
  "budget": 24,
  "requires": [],
  "closure": "S0–S1",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Lorentz Transformations

A page `sr-lorentz-transformations`; B companion `sr-lorentz-transformations-examples`. Category `special-relativity`; library `physics`.
Order 211. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-spacetime-primitives`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR02",
  "role": "A",
  "inventory": "def proper orthochronous group; M01 boost verification/inverse/composition; pthm interval and cone invariance; post inertial covariance; rem verbal-postulate reconstruction obligations; S3 generic tensor/covector/current mathematics before Doppler",
  "budget": 34,
  "requires": [
    "SR01"
  ],
  "closure": "S2",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Worldlines And Clocks

A page `sr-worldlines-and-clocks`; B companion `sr-worldlines-and-clocks-examples`. Category `special-relativity`; library `physics`.
Order 213. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-lorentz-transformations`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR03",
  "role": "A",
  "inventory": "def regular causal curve/proper time; M03; def u/a; pthm norm and orthogonality; post free trajectories/clock hypothesis",
  "budget": 22,
  "requires": [
    "SR01",
    "SR02"
  ],
  "closure": "S4",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Observer Measurements

A page `sr-observer-measurements`; B companion `sr-observer-measurements-examples`. Category `special-relativity`; library `physics`.
Order 215. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-worldlines-and-clocks`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR04",
  "role": "A",
  "inventory": "M04 split/projector; def simultaneity/operational radar protocol; pthm observer velocity and time/length transform; def chart/tetrad/congruence distinction",
  "budget": 52,
  "requires": [
    "SR02",
    "SR03"
  ],
  "closure": "S10–S11; G2 early pure mathematical flow/Frobenius",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Causality And Signals

A page `sr-causality-and-signals`; B companion `sr-causality-and-signals-examples`. Category `special-relativity`; library `physics`.
Order 217. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-observer-measurements`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR05",
  "role": "A",
  "inventory": "def causal reachability in affine Minkowski space; pthm cone composition/signal transformations; texp conditional superluminal signaling construction with stated availability assumptions",
  "budget": 20,
  "requires": [
    "SR02",
    "SR03",
    "SR04"
  ],
  "closure": "S6",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Proper Time Comparisons

A page `sr-proper-time-comparisons`; B companion `sr-proper-time-comparisons-examples`. Category `special-relativity`; library `physics`.
Order 219. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-observer-measurements`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR06",
  "role": "A",
  "inventory": "M02 reverse inequality/endpoint bound; texp piecewise inertial twin reunion; pthm same-endpoint duration calculation; acceleration/synchronization caveats",
  "budget": 18,
  "requires": [
    "SR03",
    "SR04"
  ],
  "closure": "S6",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Light And Doppler

A page `sr-light-and-doppler`; B companion `sr-light-and-doppler-examples`. Category `special-relativity`; library `physics`.
Order 221. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-observer-measurements`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR07",
  "role": "A",
  "inventory": "def null wave covector/observer frequency; post ideal wave/light clock model; pthm longitudinal/general Doppler and aberration; dimensional restoration",
  "budget": 22,
  "requires": [
    "SR02",
    "SR03",
    "SR04"
  ],
  "closure": "S5",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Energy Momentum

A page `sr-energy-momentum`; B companion `sr-energy-momentum-examples`. Category `special-relativity`; library `physics`.
Order 223. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-observer-measurements`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR08",
  "role": "A",
  "inventory": "post p=mu/additive isolated collision balance; def E_n/q_n/kinetic energy/invariant mass; M04 mass shell; pthm collision kinematics and threshold conditional on interaction assumptions",
  "budget": 27,
  "requires": [
    "SR03",
    "SR04"
  ],
  "closure": "S7",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Forces And Continuum

A page `sr-forces-and-continuum`; B companion `sr-forces-and-continuum-examples`. Category `special-relativity`; library `physics`.
Order 225. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-energy-momentum`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR09",
  "role": "A",
  "inventory": "def force and chosen smooth matter/T; post matter evolution/boundary assumptions; pthm local/integrated conservation in flat space; S3/S9/G5 flat restriction complete tensor/flux/compact-action derivations",
  "budget": 28,
  "requires": [
    "SR08"
  ],
  "closure": "S3/S7/S9; G5 compact variation",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Accelerated Observers

A page `sr-accelerated-observers`; B companion `sr-accelerated-observers-examples`. Category `special-relativity`; library `physics`.
Order 227. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-causality-and-signals`, `sr-light-and-doppler`, `sr-proper-time-comparisons`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR10",
  "role": "A",
  "inventory": "def proper acceleration/congruence; explicit hyperbolic worldline calculation; def Rindler chart domain; pthm chart horizon/radar restrictions; texp Bell setup with distinct congruences",
  "budget": 24,
  "requires": [
    "SR03",
    "SR04",
    "SR05",
    "SR06",
    "SR07"
  ],
  "closure": "S10; G2 linear transport/flow",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Newtonian Bridge

A page `sr-newtonian-bridge`; B companion `sr-newtonian-bridge-examples`. Category `special-relativity`; library `physics`.
Order 229. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-energy-momentum`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR11",
  "role": "A",
  "inventory": "M08 uniform low-speed expansion; pthm specified p/E correspondence; explicit Galilean limiting chart maps with bounded domains; rem failure at relativistic/null speeds",
  "budget": 18,
  "requires": [
    "SR02",
    "SR08"
  ],
  "closure": "baseline M08; Q4 controlled correspondence",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```

## Experimental Interface

A page `sr-experimental-interface`; B companion `sr-experimental-interface-examples`. Category `special-relativity`; library `physics`.
Order 231. Exact source inventory: `research/first-principles-2026-10-03/relativity/scaffold/proposed-inventory-and-checks.json`.
Declared earlier prerequisites: `sr-forces-and-continuum`, `sr-light-and-doppler`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "SR12",
  "role": "A",
  "inventory": "def operational model/data/calibration/uncertainty vocabulary; rem proposed primary-report research queue; no exp item until actual reports read; comparison pthm requires M20",
  "budget": 16,
  "requires": [
    "SR03",
    "SR07",
    "SR08",
    "SR09"
  ],
  "closure": "primary-report queue only; no experiment invented",
  "status": "exact stated local arguments available; see closure ledger for stronger obligations"
}
```
