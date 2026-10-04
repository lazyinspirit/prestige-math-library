# Quantum Field Theory including QED — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/extended-frameworks-2026-10-03/quantum-field-theory/inventory-and-pathway.md` (SHA-256 265353d93c1c61d0beba31e0f0503f3d20cf470d81429c2627c851d1ec3ea418).
- `research/extended-frameworks-2026-10-03/quantum-field-theory/prose-scaffold.md` (SHA-256 c1867fc6ab16c400d9d342347ebb2837e4beee5370df88262c1f1632754c3c94).
- `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json` (SHA-256 309d24f47c856ef4cebf6e3839ac5e5fc2010760f8e5158f0d249d9e497431b9).
- `research/extended-frameworks-2026-10-03/quantum-field-theory/supplier-map.json` (SHA-256 fc9a863296ba78f73f041108288ac8adf434b18810c160be26b7c5a6c5ee6842).
- `research/extended-frameworks-2026-10-03/quantum-field-theory/closure-ledger.json` (SHA-256 27f5c22db306af867c4159f232a04f21c497cacc82ab5d5002d6b90949a45a07).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Unital star algebra and positive normalized state

A page `qft-mc01`; B companion `qft-mc01-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 507. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `hilbert-space-geometry-and-riesz-representation`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MC01",
  "library": "mathematics",
  "A": [
    "def-qft-involutive-algebra-state",
    "lem-qft-positive-state-cauchy-schwarz",
    "thm-qft-algebraic-gns-domain",
    "lem-qft-state-symmetry-implementer"
  ],
  "B": [
    "cex-qft-nonregular-weyl-state"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Tensor test algebra and positive tempered moment data

A page `qft-mc02`; B companion `qft-mc02-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 509. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mc01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MC02",
  "library": "mathematics",
  "A": [
    "def-qft-positive-tempered-moments",
    "thm-qft-tempered-field-reconstruction"
  ],
  "B": [
    "cex-qft-yukawa-source-power"
  ],
  "requires": [
    "QFT-MC01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite bounded instruments normalize measurement probabilities

A page `qft-mc03`; B companion `qft-mc03-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 511. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qm-math-composites`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MC03",
  "library": "mathematics",
  "A": [
    "lem-qft-finite-instrument-normalization"
  ],
  "B": [
    "cex-qft-formal-factorial-series"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Schwartz/distribution spaces and Hilbert Fock conventions

A page `qft-mf01`; B companion `qft-mf01-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 513. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `fourier-transform-convolution-and-approximate-identities`, `qm-math-oscillator`, `schwartz-space-and-the-plancherel-theorem`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MF01",
  "library": "mathematics",
  "A": [
    "def-qft-fock-and-test-spaces",
    "lem-qft-fock-ccr-car",
    "lem-qft-segal-weyl-domain",
    "lem-qft-second-quantized-spectrum"
  ],
  "B": [
    "ex-qftmath-mode-domain"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Scalar future mass-shell measure and test restriction

A page `qft-mf02`; B companion `qft-mf02-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 515. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mf01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MF02",
  "library": "mathematics",
  "A": [
    "def-qft-scalar-mass-shell",
    "lem-qft-smeared-free-scalar",
    "lem-qft-scalar-causal-commutator",
    "lem-qft-scalar-local-weyl-algebra"
  ],
  "B": [
    "ex-qftmath-spacelike-vacuum-correlation"
  ],
  "requires": [
    "QFT-MF01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Exact massless scalar on a conformally flat external metric

A page `qft-mc04`; B companion `qft-mc04-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 517. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `emg-c01`, `qft-mf02`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MC04",
  "library": "mathematics",
  "A": [
    "thm-qft-conformal-external-scalar"
  ],
  "B": [
    "ex-qft-constant-conformal-normalization"
  ],
  "requires": [
    "QFT-MF02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Quantum field quantities and compatible SI normalizations

A page `qft-c01`; B companion `qft-c01-examples`. Category `quantum-field-theory`; library `physics`.
Order 519. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mc03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-C01",
  "library": "physics",
  "A": [
    "def-qft-framework-units",
    "post-qft-constructed-model-and-measurement"
  ],
  "B": [
    "tex-qft-two-level-measurement"
  ],
  "requires": [
    "QFT-MC03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Example conventions, energy units and constructed/formal data

A page `qft-mx01`; B companion `qft-mx01-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 521. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `countability-and-uncountability`, `qm-math-controlled-dynamics`, `schwartz-space-and-the-plancherel-theorem`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MX01",
  "library": "mathematics",
  "A": [
    "def-qft-example-data",
    "thm-qft-example-finite-dyson-unitarity",
    "lem-qft-example-golden-kernel",
    "lem-qft-example-oscillator-feynman-prescription"
  ],
  "B": [
    "ex-qftmath-x01",
    "ex-qftmath-x03"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Dirac Clifford matrices and energy projections

A page `qft-mf03`; B companion `qft-mf03-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 523. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mf02`, `tempered-distributions-and-the-fourier-transform`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MF03",
  "library": "mathematics",
  "A": [
    "def-qft-dirac-projections",
    "lem-qft-free-dirac-car-locality",
    "lem-qft-dirac-covariance-spectrum"
  ],
  "B": [
    "ex-qftmath-dirac-rest-projector"
  ],
  "requires": [
    "QFT-MF01",
    "QFT-MF02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Tempered time-ordered scalar two-point carrier

A page `qft-mf04`; B companion `qft-mf04-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 525. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mf03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MF04",
  "library": "mathematics",
  "A": [
    "lem-qft-free-time-ordered-kernel",
    "lem-qft-free-action-equations",
    "lem-qft-free-domain-observables"
  ],
  "B": [
    "ex-qftmath-timeordered-jump"
  ],
  "requires": [
    "QFT-MF02",
    "QFT-MF03",
    "QFT-MF01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Charged gauge data and SI-natural conventions

A page `qft-mg01`; B companion `qft-mg01-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 527. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `fundamental-solutions-newtonian-potentials-and-green-functions`, `orthonormal-bases-parseval-and-fourier-series`, `qft-mf04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MG01",
  "library": "mathematics",
  "A": [
    "def-qft-qed-gauge-data",
    "def-qft-photon-transverse-space",
    "lem-qft-qed-dirac-gauge-current",
    "lem-qft-qed-coulomb-constraint",
    "lem-qft-qed-dirac-first-order-constraints",
    "lem-qft-photon-null-quotient",
    "lem-qft-photon-covariance-spectrum",
    "lem-qft-photon-smeared-potential",
    "lem-qft-photon-local-field-strength",
    "lem-qft-photon-local-weyl-observables"
  ],
  "B": [
    "ex-qft-qed-two-polarizations",
    "cex-qft-qed-negative-auxiliary",
    "cex-qft-qed-coulomb-potential-locality",
    "cex-qft-qed-torus-charge"
  ],
  "requires": [
    "QFT-MF03",
    "QFT-MF01",
    "QFT-MF04",
    "QFT-MF02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite matrix formal inverse and gauge-covariant kernel

A page `qft-mg03`; B companion `qft-mg03-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 529. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-mg01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MG03",
  "library": "mathematics",
  "A": [
    "def-qft-qed-formal-ring",
    "lem-qft-qed-formal-matrix-ward",
    "lem-qft-qed-coherent-ir-obstruction",
    "lem-qft-qed-tree-ward",
    "lem-qft-qed-grassmann-determinant",
    "lem-qft-qed-conserved-current-gauge"
  ],
  "B": [
    "ex-qft-qed-tree-matrix-example",
    "ex-qft-qed-coherent-angular",
    "cex-qft-qed-energy-fock-limit"
  ],
  "requires": [
    "QFT-MG01",
    "QFT-MF01",
    "QFT-MF03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Clifford traces and normalized spin completeness

A page `qft-mx02`; B companion `qft-mx02-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 531. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `euclidean-surface-measure-divergence-and-green-identities`, `qft-mg03`, `qft-mx01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MX02",
  "library": "mathematics",
  "A": [
    "lem-qft-example-spin-trace-completeness",
    "lem-qft-example-two-body-phase-space",
    "thm-qft-example-massive-tree-annihilation",
    "cor-qft-example-scalar-tree-coefficients",
    "lem-qft-example-dirac-pauli-square"
  ],
  "B": [
    "ex-qftmath-x04",
    "ex-qftmath-x05",
    "ex-qftmath-x09"
  ],
  "requires": [
    "QFT-MX01",
    "QFT-MF03",
    "QFT-MG03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Soft-current angular norm and exact cutoff coherent model

A page `qft-mx03`; B companion `qft-mx03-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 533. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `euclidean-surface-measure-divergence-and-green-identities`, `qft-mg03`, `qft-mx01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MX03",
  "library": "mathematics",
  "A": [
    "thm-qft-example-soft-current-angular-coherent",
    "lem-qft-example-cutoff-integrals-and-series"
  ],
  "B": [
    "ex-qftmath-x06",
    "ex-qftmath-x07"
  ],
  "requires": [
    "QFT-MX01",
    "QFT-MF01",
    "QFT-MG01",
    "QFT-MG03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Ideal linear Penning mode-frequency invariant

A page `qft-mx04`; B companion `qft-mx04-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 535. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `probability-spaces-random-variables-and-expectation`, `qft-mx01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MX04",
  "library": "mathematics",
  "A": [
    "lem-qft-example-penning-frequency-invariant",
    "lem-qft-example-covariant-estimate-errors"
  ],
  "B": [
    "ex-qftmath-x08"
  ],
  "requires": [
    "QFT-MX01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Example observable types and scoped meanings

A page `qft-x01`; B companion `qft-x01-examples`. Category `quantum-field-theory`; library `physics`.
Order 537. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-c01`, `qft-mx01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-X01",
  "library": "physics",
  "A": [
    "def-qft-example-observable-types",
    "pthm-qft-example-regulated-probability-control"
  ],
  "B": [
    "ex-qft-x01",
    "ex-qft-x03"
  ],
  "requires": [
    "QFT-C01",
    "QFT-MX01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Exact compact U1 rotor plus finite CAR data

A page `qft-mg02`; B companion `qft-mg02-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 539. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `orthonormal-bases-parseval-and-fourier-series`, `qft-mf01`, `unbounded-self-adjoint-operators-and-stones-theorem`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-MG02",
  "library": "mathematics",
  "A": [
    "def-qft-compact-lattice-gauge-data",
    "lem-qft-lattice-gauss-projection",
    "lem-qft-lattice-hamiltonian-selfadjoint",
    "lem-qft-lattice-physical-evolution",
    "lem-qft-lattice-local-gauss-flux",
    "lem-qft-lattice-ward-identities",
    "lem-qft-lattice-ward-contact",
    "lem-qft-qed-gauss-localization"
  ],
  "B": [
    "ex-qft-qed-nonempty-gauss",
    "cex-qft-qed-compact-charge-sector",
    "ex-qft-qed-ward-selection"
  ],
  "requires": [
    "QFT-MF01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Specified bosonic scalar and CAR Dirac model adoption

A page `qft-f01`; B companion `qft-f01-examples`. Category `quantum-field-theory`; library `physics`.
Order 541. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-c01`, `qft-mf04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-F01",
  "library": "physics",
  "A": [
    "post-qft-free-field-model",
    "def-qft-free-field-observables",
    "pthm-qft-free-fock-statistics"
  ],
  "B": [
    "ex-qft-mode-occupations"
  ],
  "requires": [
    "QFT-C01",
    "QFT-MF04",
    "QFT-MF02",
    "QFT-MF03",
    "QFT-MF01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Positive transverse free photon model

A page `qft-g01`; B companion `qft-g01-examples`. Category `quantum-field-theory`; library `physics`.
Order 543. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-f01`, `qft-mg01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-G01",
  "library": "physics",
  "A": [
    "post-qft-free-photon-model",
    "post-qft-qed-local-coupling",
    "def-qft-qed-physical-gauge-quantities",
    "pthm-qft-qed-classical-coupling",
    "pthm-qft-qed-coulomb-constraints",
    "pthm-qft-photon-physical-properties",
    "pthm-qft-photon-local-observables"
  ],
  "B": [
    "texp-qft-photon-auxiliary-comparison",
    "texp-qft-qed-neutral-cell"
  ],
  "requires": [
    "QFT-C01",
    "QFT-MG01",
    "QFT-F01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Explicit formal QED vertex/free-line convention

A page `qft-g02`; B companion `qft-g02-examples`. Category `quantum-field-theory`; library `physics`.
Order 545. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-g01`, `qft-mg02`, `qft-mg03`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-G02",
  "library": "physics",
  "A": [
    "post-qft-formal-qed-coefficients",
    "post-qft-compact-lattice-gauge-model",
    "pthm-qft-lattice-gauge-existence",
    "pthm-qft-lattice-gauge-ward",
    "pthm-qft-qed-formal-ward"
  ],
  "B": [
    "texp-qft-qed-infrared-sequence",
    "texp-qft-lattice-charged-operator"
  ],
  "requires": [
    "QFT-C01",
    "QFT-MG03",
    "QFT-MF04",
    "QFT-MG02",
    "QFT-G01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Formal diagram coefficient-to-observable adoption

A page `qft-x02`; B companion `qft-x02-examples`. Category `quantum-field-theory`; library `physics`.
Order 547. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-g02`, `qft-mx02`, `qft-x01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-X02",
  "library": "physics",
  "A": [
    "post-qft-example-formal-observable-map",
    "pthm-qft-example-formal-scattering-decay",
    "pthm-qft-example-dirac-magnetic-benchmark"
  ],
  "B": [
    "ex-qft-x04",
    "ex-qft-x05",
    "ex-qft-x09"
  ],
  "requires": [
    "QFT-X01",
    "QFT-G02",
    "QFT-MX02",
    "QFT-G01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Regulated soft coherent photon-count prediction

A page `qft-x03`; B companion `qft-x03-examples`. Category `quantum-field-theory`; library `physics`.
Order 549. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-g01`, `qft-mx03`, `qft-mx04`, `qft-x01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-X03",
  "library": "physics",
  "A": [
    "pthm-qft-example-soft-coherent-counts"
  ],
  "B": [
    "ex-qft-x06",
    "exp-qft-fan-electron-moment-2022",
    "pthm-qft-reported-electron-anomaly-shift"
  ],
  "requires": [
    "QFT-G01",
    "QFT-C01",
    "QFT-MX03",
    "QFT-X01",
    "QFT-MX04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Exact real scalar free model

A page `qft-f02`; B companion `qft-f02-examples`. Category `quantum-field-theory`; library `physics`.
Order 551. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-f01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-F02",
  "library": "physics",
  "A": [
    "def-qft-free-scalar-model",
    "pthm-qft-scalar-free-properties",
    "pthm-qft-scalar-vacuum-moments"
  ],
  "B": [
    "ex-qft-scalar-vacuum-correlation"
  ],
  "requires": [
    "QFT-F01",
    "QFT-MF02",
    "QFT-MF01",
    "QFT-MF04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Exact Dirac particle/antiparticle free model

A page `qft-f03`; B companion `qft-f03-examples`. Category `quantum-field-theory`; library `physics`.
Order 553. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-f01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-F03",
  "library": "physics",
  "A": [
    "def-qft-free-dirac-model",
    "pthm-qft-dirac-free-properties"
  ],
  "B": [
    "ex-qft-dirac-rotation-parity"
  ],
  "requires": [
    "QFT-F01",
    "QFT-MF03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Free observable domains and limits of point notation

A page `qft-f04`; B companion `qft-f04-examples`. Category `quantum-field-theory`; library `physics`.
Order 555. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-f01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-F04",
  "library": "physics",
  "A": [
    "pthm-qft-free-observable-domain-limits",
    "pthm-qft-classical-quantum-free-correspondence"
  ],
  "B": [
    "cex-qft-point-operator-assumption"
  ],
  "requires": [
    "QFT-F01",
    "QFT-MF04",
    "QFT-MF02",
    "QFT-MF03"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite-lattice polynomial Hamiltonian data

A page `qft-ir01`; B companion `qft-ir01-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 557. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `density-separability-and-convolution-in-lp`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-IR01",
  "library": "mathematics",
  "A": [
    "def-qft-regulated-polynomial-hamiltonian",
    "lem-qft-coercive-polynomial-form-domain",
    "lem-qft-cube-poincare-compact-form-inclusion",
    "lem-qft-polynomial-positive-compact-resolvent",
    "thm-qft-self-adjoint-regulated-interaction",
    "thm-qft-regulated-global-unitary-evolution",
    "lem-qft-hermite-oscillator-research-supplier",
    "thm-qft-regulated-gibbs-trace",
    "lem-qft-regulated-ground-variational-bound"
  ],
  "B": [
    "ex-qft-quartic-ground-energy-bound",
    "rem-qft-cutoff-vs-continuum-interaction"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite Euclidean quartic interacting measure

A page `qft-ir02`; B companion `qft-ir02-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 559. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-ir01`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-IR02",
  "library": "mathematics",
  "A": [
    "def-qft-finite-euclidean-interacting-measure",
    "lem-qft-finite-gaussian-wick-moments",
    "thm-qft-finite-euclidean-polynomial-measure",
    "def-qft-finite-wick-normal-powers",
    "thm-qft-finite-asymptotic-wick-expansion"
  ],
  "B": [
    "cex-qft-zero-dimensional-perturbation-radius-zero",
    "ex-qft-wick-quartic-coercivity",
    "ex-qft-finite-wick-quadratic-pair"
  ],
  "requires": [
    "QFT-IR01"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Regular polynomial field functional algebra

A page `qft-ir03`; B companion `qft-ir03-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 561. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `distributions-test-functions-and-differentiation`, `qft-mf04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-IR03",
  "library": "mathematics",
  "A": [
    "def-qft-regular-polynomial-functional-algebra",
    "lem-qft-tensor-test-function-density",
    "thm-qft-regular-wick-star-associativity",
    "lem-qft-regular-normal-order-isomorphism",
    "def-qft-regular-formal-time-ordering",
    "thm-qft-regular-formal-causal-factorization",
    "thm-qft-bounded-regulator-dyson-factorization"
  ],
  "B": [
    "ex-qft-regular-quadratic-star-product",
    "rem-qft-local-wick-diagonal-obligation"
  ],
  "requires": [
    "QFT-MF04",
    "QFT-MF02"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Scaling degree and local extension space

A page `qft-ir04`; B companion `qft-ir04-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 563. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `approximation-and-compactness-in-ck`, `distributions-test-functions-and-differentiation`, `relations-functions-and-quotients`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-IR04",
  "library": "mathematics",
  "A": [
    "def-qft-distribution-scaling-degree",
    "lem-qft-test-frechet-uniform-scaling-order",
    "thm-qft-finite-scaling-degree-extension",
    "prop-qft-local-counterterm-jet-classification",
    "prop-qft-four-dimensional-log-scale-anomaly"
  ],
  "B": [
    "ex-qft-unique-subcritical-extension"
  ],
  "requires": [],
  "status": "draft-research",
  "B_leaf": true
}
```

## Finite quartic graph and superficial scaling conventions

A page `qft-ir05`; B companion `qft-ir05-examples`. Category `quantum-field-theory-mathematics`; library `mathematics`.
Order 565. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-ir04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-IR05",
  "library": "mathematics",
  "A": [
    "def-qft-quartic-graph-power-counting",
    "prop-qft-quartic-superficial-degree",
    "prop-qft-scalar-engineering-dilation"
  ],
  "B": [
    "ex-qft-four-point-one-loop-log-degree"
  ],
  "requires": [
    "QFT-IR04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```

## Adopted finite-regulator bosonic polynomial model

A page `qft-pir01`; B companion `qft-pir01-examples`. Category `quantum-field-theory`; library `physics`.
Order 567. Exact source inventory: `research/extended-frameworks-2026-10-03/quantum-field-theory/proposed-inventory.json`.
Declared earlier prerequisites: `qft-c01`, `qft-ir01`, `qft-ir04`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "QFT-PIR01",
  "library": "physics",
  "A": [
    "post-qft-regulated-polynomial-model",
    "pthm-qft-regulated-interacting-model-evolution",
    "post-qft-regulated-equilibrium-state",
    "pthm-qft-regulated-equilibrium-predictions",
    "pthm-qft-quartic-model-energy-bound"
  ],
  "B": [
    "ex-qft-one-mode-interacting-model",
    "rem-qft-formal-renormalization-physical-status"
  ],
  "requires": [
    "QFT-IR01",
    "QFT-C01",
    "QFT-IR04"
  ],
  "status": "draft-research",
  "B_leaf": true
}
```
