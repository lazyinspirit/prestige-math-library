# Quantum Statistical Mechanics — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/pathway-and-inventory.md` (SHA-256 d251643a202be972b8ac230b8b3063a01eca585919d5bf6fc9675d1d2c0252e2).
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/prose-scaffold.md` (SHA-256 d272020b5ac35fdc0472b77490742d5699c891731294c5e39d6e4340954eb382).
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json` (SHA-256 c4415ef13305dcbafc6906cb009c2e688254ab9bd59eee3e1f07559b0aed7458).
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/supplier-map.json` (SHA-256 f6b56ca16e32000070538382e1927e7f73c9fa5b8fc55d8702b829e94ac024b1).
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/closure-ledger.json` (SHA-256 d5e26774e01e7050ec7e80ffa44970c573b6e7c3e818a1a20418e84657e030d3).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Normal density states and spectral moments

A page `qsm-states-ensembles`; B companion `qsm-states-ensembles-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 569. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `qm-math-fock-and-equilibrium`, `spectral-measures-and-borel-functional-calculus`, `td-math-ensembles-and-limits`, `unbounded-self-adjoint-operators-and-stones-theorem`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-states-ensembles",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-density-trace-state",
    "lem-qsm-matrix-state-calculus",
    "lem-qsm-matrix-exponential-response",
    "lem-qsm-trace-state-calculus",
    "post-qsm-normal-measurement-state",
    "def-qsm-relative-entropy-domain",
    "lem-qsm-finite-gibbs-kms",
    "thm-qsm-finite-gibbs-variational",
    "thm-qsm-trace-cross-log-inequality",
    "thm-qsm-finite-entropy-composition",
    "thm-qsm-trace-gibbs-variational",
    "post-qsm-band-and-grand-preparation",
    "post-qsm-thermal-gibbs-preparation",
    "pthm-qsm-commuting-grand-response",
    "pthm-qsm-equilibrium-unitary-entropy",
    "pthm-qsm-gibbs-energy-entropy",
    "pthm-qsm-static-quantum-response"
  ],
  "deps": [],
  "companion": "qsm-states-ensembles-examples"
}
```

## Finite tensor density, observable and measurement language

A page `qsm-local-ensemble-bridge`; B companion `qsm-local-ensemble-bridge-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 571. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `qft-ir01`, `qm-framework-and-quantities`, `qsm-states-ensembles`, `td-math-mixture-dynamics-and-shells`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-local-ensemble-bridge",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-local-finite-tensor-state",
    "def-qsm-local-additive-spectral-ensembles",
    "lem-qsm-local-hermitian-diagonalization",
    "def-qsm-local-coercive-regulated-model",
    "lem-qsm-local-subsystem-trace-tests",
    "post-qsm-local-ensemble-preparations",
    "lem-qsm-local-tensor-gibbs-factorization",
    "thm-qsm-local-classical-diagonal-embedding",
    "thm-qsm-local-independent-shell-equivalence",
    "pthm-qsm-local-qualified-shell-measurements",
    "pthm-qsm-local-regulated-interacting-gibbs"
  ],
  "deps": [
    "qsm-states-ensembles"
  ],
  "companion": "qsm-local-ensemble-bridge-examples"
}
```

## Local spin matrix algebras and isometric inclusions

A page `qsm-quasilocal-states`; B companion `qsm-quasilocal-states-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 573. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `gelfand-theory-and-commutative-c-star-algebras`, `qsm-states-ensembles`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-quasilocal-states",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-local-spin-algebras",
    "def-qsm-quasilocal-spin-algebra",
    "def-qsm-infinite-algebraic-state",
    "lem-qsm-quasilocal-completion",
    "lem-qsm-consistent-local-states",
    "lem-qsm-spin-state-compactness",
    "lem-qsm-state-gns-construction"
  ],
  "deps": [
    "qsm-states-ensembles"
  ],
  "companion": "qsm-quasilocal-states-examples"
}
```

## Uniformly bounded finite-range quantum spin interaction

A page `qsm-finite-range-spin-dynamics`; B companion `qsm-finite-range-spin-dynamics-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 575. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `qsm-quasilocal-states`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-finite-range-spin-dynamics",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-bounded-finite-range-interaction",
    "lem-qsm-finite-range-commutator-path-bound",
    "lem-qsm-boundary-dynamics-cauchy",
    "thm-qsm-finite-range-spin-dynamics",
    "lem-qsm-local-generator-domain"
  ],
  "deps": [
    "qsm-quasilocal-states",
    "qsm-states-ensembles"
  ],
  "companion": "qsm-finite-range-spin-dynamics-examples"
}
```

## Bounded quantum lattice pressure on cubes and van Hove sets

A page `qsm-spin-thermodynamic-limits`; B companion `qsm-spin-thermodynamic-limits-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 577. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `qsm-finite-range-spin-dynamics`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-spin-thermodynamic-limits",
  "side": "A",
  "library": "physics",
  "items": [
    "thm-qsm-quantum-lattice-pressure",
    "lem-qsm-energy-density-concentration",
    "lem-qsm-stationary-spin-entropy-density",
    "thm-qsm-spin-pressure-variational-principle"
  ],
  "deps": [
    "qsm-finite-range-spin-dynamics",
    "qsm-quasilocal-states",
    "qsm-states-ensembles"
  ],
  "companion": "qsm-spin-thermodynamic-limits-examples"
}
```

## Physical-time KMS strip equilibrium condition

A page `qsm-kms-equilibrium`; B companion `qsm-kms-equilibrium-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 579. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `analyticity-liouville-and-morera`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `qsm-finite-range-spin-dynamics`, `the-identity-theorem-and-the-open-mapping-theorem`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-kms-equilibrium",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-kms-state",
    "lem-qsm-kms-strip-uniqueness",
    "lem-qsm-gibbs-strip-limit",
    "lem-qsm-kms-invariance",
    "thm-qsm-finite-kms-gibbs-characterization",
    "thm-qsm-infinite-spin-kms-existence"
  ],
  "deps": [
    "qsm-finite-range-spin-dynamics",
    "qsm-quasilocal-states",
    "qsm-states-ensembles"
  ],
  "companion": "qsm-kms-equilibrium-examples"
}
```

## Diagonal quantum Ising interaction and classical conditional energies

A page `qsm-commuting-quantum-phases`; B companion `qsm-commuting-quantum-phases-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 581. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-gibbs-lattice`, `qsm-kms-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-commuting-quantum-phases",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-diagonal-ising-interaction",
    "lem-qsm-commuting-local-dynamics",
    "lem-qsm-kms-diagonal-reduction",
    "thm-qsm-diagonal-kms-dlr-bijection",
    "thm-qsm-chain-kms-uniqueness",
    "thm-qsm-ising-high-temperature-kms-uniqueness",
    "thm-qsm-ising-kms-coexistence"
  ],
  "deps": [
    "qsm-finite-range-spin-dynamics",
    "qsm-kms-equilibrium"
  ],
  "companion": "qsm-commuting-quantum-phases-examples"
}
```

## Finite-excitation vacuum spin representation and normality

A page `qsm-nonnormal-thermal-states`; B companion `qsm-nonnormal-thermal-states-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 583. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `qsm-kms-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-nonnormal-thermal-states",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-vacuum-spin-representation",
    "lem-qsm-vacuum-representation-irreducible",
    "thm-qsm-onsite-product-kms",
    "thm-qsm-product-thermal-state-nonnormal"
  ],
  "deps": [
    "qsm-kms-equilibrium",
    "qsm-quasilocal-states"
  ],
  "companion": "qsm-nonnormal-thermal-states-examples"
}
```

## Infinite quantum spin quantities and physical adoption

A page `qsm-infinite-spin-physical-models`; B companion `qsm-infinite-spin-physical-models-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 585. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `qsm-commuting-quantum-phases`, `qsm-spin-thermodynamic-limits`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-infinite-spin-physical-models",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-infinite-spin-physical-quantities",
    "post-qsm-infinite-spin-equilibrium",
    "pthm-qsm-infinite-spin-equilibrium-predictions",
    "pthm-qsm-diagonal-quantum-phase-predictions"
  ],
  "deps": [
    "qsm-commuting-quantum-phases",
    "qsm-finite-range-spin-dynamics",
    "qsm-kms-equilibrium",
    "qsm-spin-thermodynamic-limits"
  ],
  "companion": "qsm-infinite-spin-physical-models-examples"
}
```

## Explicit diagonal Fock domains and occupation trace

A page `qsm-bose-fermi-gases`; B companion `qsm-bose-fermi-gases-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 587. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-exact-models`, `qm-math-oscillator`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-bose-fermi-gases",
  "side": "A",
  "library": "physics",
  "items": [
    "lem-qsm-models-diagonal-occupation-trace",
    "thm-qsm-models-lattice-riemann-bose-bound",
    "post-qsm-models-statistics-and-preparation",
    "pthm-qsm-dilute-occupation-limit",
    "pthm-qsm-oscillator-spin-ensembles",
    "pthm-qsm-periodic-ideal-occupation",
    "pthm-qsm-fermi-zero-temperature",
    "pthm-qsm-homogeneous-bose-condensation"
  ],
  "deps": [],
  "companion": "qsm-bose-fermi-gases-examples"
}
```

## Finite Pauli dimer spectrum and exact separability threshold

A page `qsm-interacting-exact-models`; B companion `qsm-interacting-exact-models-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 589. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-fluctuations-countermodels`, `qsm-bose-fermi-gases`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-interacting-exact-models",
  "side": "A",
  "library": "physics",
  "items": [
    "thm-qsm-models-dimer-entanglement",
    "pthm-qsm-commuting-lattice-countermodels",
    "pthm-qsm-interacting-dimer-gibbs",
    "pthm-qsm-onsite-interacting-atoms"
  ],
  "deps": [
    "qsm-bose-fermi-gases"
  ],
  "companion": "qsm-interacting-exact-models-examples"
}
```

## Trace-class bounded-observable response

A page `qsm-dt-response`; B companion `qsm-dt-response-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 591. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `qsm-finite-range-spin-dynamics`, `relations-functions-and-quotients`, `the-lebesgue-integral-and-the-convergence-theorems`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-dt-response",
  "side": "A",
  "library": "physics",
  "items": [
    "thm-qsm-dt-normal-state-kubo",
    "thm-qsm-dt-finite-unitary",
    "thm-qsm-dt-strong-domain-response",
    "post-qsm-dt-isolated-model",
    "thm-qsm-dt-cesaro-dephasing",
    "thm-qsm-dt-finite-kubo",
    "thm-qsm-dt-finite-recurrence",
    "post-qsm-dt-physical-control",
    "thm-qsm-dt-spectral-fdt",
    "thm-qsm-dt-trace-gibbs-correlation-measure",
    "pthm-qsm-dt-prepared-response",
    "thm-qsm-dt-algebraic-kubo",
    "thm-qsm-dt-isolated-dc-obstruction",
    "thm-qsm-dt-variance-green-kubo"
  ],
  "deps": [
    "qsm-finite-range-spin-dynamics",
    "qsm-quasilocal-states",
    "qsm-states-ensembles"
  ],
  "companion": "qsm-dt-response-examples"
}
```

## Finite completely positive trace-preserving maps

A page `qsm-dt-channels`; B companion `qsm-dt-channels-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 593. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `qsm-dt-response`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-dt-channels",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-dt-channel-definition",
    "def-qsm-dt-gksl-definition",
    "thm-qsm-dt-choi-kraus",
    "thm-qsm-dt-channel-duality",
    "thm-qsm-dt-gksl-sufficient",
    "thm-qsm-dt-reduced-unitary",
    "thm-qsm-dt-trace-contraction",
    "thm-qsm-dt-gksl-necessary",
    "thm-qsm-dt-pinching-entropy",
    "thm-qsm-dt-time-dependent-gksl"
  ],
  "deps": [
    "qsm-dt-response",
    "qsm-states-ensembles"
  ],
  "companion": "qsm-dt-channels-examples"
}
```

## Specified finite GNS detailed balance

A page `qsm-dt-relaxation`; B companion `qsm-dt-relaxation-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Order 595. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-stochastic-response`, `qsm-dt-channels`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "qsm-dt-relaxation",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsm-dt-gns-detailed-balance",
    "thm-qsm-dt-detailed-balance-gap",
    "thm-qsm-dt-gibbs-jump",
    "def-qsm-dt-monitored-chain",
    "thm-qsm-dt-commuting-kl",
    "thm-qsm-dt-open-correlation-integral",
    "thm-qsm-dt-open-kubo",
    "post-qsm-dt-effective-bath",
    "thm-qsm-dt-monitored-transport",
    "pthm-qsm-dt-bath-relaxation",
    "pthm-qsm-dt-record-transport"
  ],
  "deps": [
    "qsm-dt-channels",
    "qsm-states-ensembles"
  ],
  "companion": "qsm-dt-relaxation-examples"
}
```
