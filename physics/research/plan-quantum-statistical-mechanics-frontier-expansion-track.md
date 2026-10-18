# Quantum Statistical Mechanics — complete successor frontier design

Research-only successor dated 2026-10-19. No production carriers or import manifests are modified. Every original claim and qualification is retained through the original complete track and source modules; baseline.json binds all exact existing rows and source identities. New design is additive and has 14 A/B pairs. Read the complete linked detailed sources before future planning or authoring.

- `research/plan-quantum-statistical-mechanics-track.md`.
- `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/baseline.json`.
- `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md`.
- `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.
- `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/suppliers.json`.
- `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/sources.md`.
- `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/coverage-and-closure.md`.

## Retained canonical pairs and original full-source obligations

The original full-source obligations, audit successor and 2026-10-17 cycle repair remain normative. All existing pairs retain identity, statements, item mappings and source dependencies. Their exact current rows and hashes are in baseline.json. The audit circuit/Fock interfaces remain retained historical approved scope and are not reauthored here.

- A `qsm-states-ensembles`; B `qsm-states-ensembles-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-local-ensemble-bridge`; B `qsm-local-ensemble-bridge-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-quasilocal-states`; B `qsm-quasilocal-states-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-finite-range-spin-dynamics`; B `qsm-finite-range-spin-dynamics-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-spin-thermodynamic-limits`; B `qsm-spin-thermodynamic-limits-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-kms-equilibrium`; B `qsm-kms-equilibrium-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-commuting-quantum-phases`; B `qsm-commuting-quantum-phases-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-nonnormal-thermal-states`; B `qsm-nonnormal-thermal-states-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-infinite-spin-physical-models`; B `qsm-infinite-spin-physical-models-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-bose-fermi-gases`; B `qsm-bose-fermi-gases-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-interacting-exact-models`; B `qsm-interacting-exact-models-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-dt-response`; B `qsm-dt-response-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-dt-channels`; B `qsm-dt-channels-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.
- A `qsm-dt-relaxation`; B `qsm-dt-relaxation-examples`; full source `research/plan-quantum-statistical-mechanics-track.md`.

## Von Neumann closure, standard vectors and modular analytic tools

A page `qsmx-operator-algebra-prerequisites`; B companion `qsmx-operator-algebra-prerequisites-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-quasilocal-states`, `unbounded-self-adjoint-operators-and-stones-theorem`, `measurable-hilbert-fields-and-direct-integral-operators`, `relations-functions-and-quotients`, `direct-integral-decomposition-and-type-i-groups`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `banach-alaoglu-goldstine-and-krein-milman`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-operator-algebra-prerequisites`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-operator-algebra-prerequisites",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-von-neumann-algebra",
    "lem-qsmx-bicommutant-and-commutant-cyclicity",
    "lem-qsmx-closed-antilinear-polar-calculus",
    "lem-qsmx-von-neumann-predual"
  ],
  "deps": [
    "qsm-quasilocal-states",
    "unbounded-self-adjoint-operators-and-stones-theorem",
    "measurable-hilbert-fields-and-direct-integral-operators",
    "relations-functions-and-quotients",
    "direct-integral-decomposition-and-type-i-groups",
    "compact-self-adjoint-hilbert-schmidt-and-trace-class-operators",
    "banach-alaoglu-goldstine-and-krein-milman"
  ],
  "companion": "qsmx-operator-algebra-prerequisites-examples"
}
```

## Modular automorphisms and physical-time KMS conversion

A page `qsmx-modular-equilibrium`; B companion `qsmx-modular-equilibrium-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsmx-operator-algebra-prerequisites`, `qsm-kms-equilibrium`, `banach-alaoglu-goldstine-and-krein-milman`, `the-analytic-hahn-banach-theorem`, `fourier-transform-convolution-and-approximate-identities`, `the-residue-theorem`, `relations-functions-and-quotients`, `qsm-states-ensembles`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-modular-equilibrium`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-modular-equilibrium",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-standard-modular-data",
    "lem-qsmx-modular-resolvent-core",
    "thm-qsmx-tomita-takesaki",
    "thm-qsmx-finite-modular-density"
  ],
  "deps": [
    "qsmx-operator-algebra-prerequisites",
    "qsm-kms-equilibrium",
    "banach-alaoglu-goldstine-and-krein-milman",
    "the-analytic-hahn-banach-theorem",
    "fourier-transform-convolution-and-approximate-identities",
    "the-residue-theorem",
    "relations-functions-and-quotients",
    "qsm-states-ensembles"
  ],
  "companion": "qsmx-modular-equilibrium-examples"
}
```

## Entropy inequalities, recovery boundaries and thermal entanglement

A page `qsmx-entropy-entanglement`; B companion `qsmx-entropy-entanglement-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-states-ensembles`, `quantum-information-measures`, `quantum-relative-entropy-data-processing-and-strong-subadditivity`, `qsm-dt-channels`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-entropy-entanglement`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-entropy-entanglement",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-information-conventions",
    "thm-qsmx-cmi-and-channel-dpi",
    "thm-qsmx-thermal-mutual-information-bound"
  ],
  "deps": [
    "qsm-states-ensembles",
    "quantum-information-measures",
    "quantum-relative-entropy-data-processing-and-strong-subadditivity",
    "qsm-dt-channels"
  ],
  "companion": "qsmx-entropy-entanglement-examples"
}
```

## Lieb–Robinson locality, clustering and gapped spectral transport

A page `qsmx-lieb-robinson-spectral-flow`; B companion `qsmx-lieb-robinson-spectral-flow-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-finite-range-spin-dynamics`, `qsmx-operator-algebra-prerequisites`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-lieb-robinson-spectral-flow`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-lieb-robinson-spectral-flow",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-summable-interaction-norm",
    "thm-qsmx-weighted-lieb-robinson",
    "lem-qsmx-filtered-spectral-generator",
    "thm-qsmx-gapped-spectral-flow"
  ],
  "deps": [
    "qsm-finite-range-spin-dynamics",
    "qsmx-operator-algebra-prerequisites"
  ],
  "companion": "qsmx-lieb-robinson-spectral-flow-examples"
}
```

## Schmidt truncation, transfer operators and parent Hamiltonians

A page `qsmx-matrix-product-states`; B companion `qsmx-matrix-product-states-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsmx-entropy-entanglement`, `qsm-quasilocal-states`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-matrix-product-states`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-matrix-product-states",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-mps-and-transfer",
    "alg-qsmx-schmidt-mps-truncation",
    "thm-qsmx-schmidt-mps-error",
    "thm-qsmx-primitive-transfer-clustering"
  ],
  "deps": [
    "qsmx-entropy-entanglement",
    "qsm-quasilocal-states",
    "pure-and-mixed-states-ensembles-and-schmidt-decomposition"
  ],
  "companion": "qsmx-matrix-product-states-examples"
}
```

## Toric-code Hamiltonians and local indistinguishability

A page `qsmx-topological-lattice`; B companion `qsmx-topological-lattice-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-quasilocal-states`, `qsmx-lieb-robinson-spectral-flow`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-topological-lattice`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-topological-lattice",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-toric-cellular-hamiltonian",
    "thm-qsmx-toric-ground-space",
    "thm-qsmx-toric-strings-and-local-tests"
  ],
  "deps": [
    "qsm-quasilocal-states",
    "qsmx-lieb-robinson-spectral-flow"
  ],
  "companion": "qsmx-topological-lattice-examples"
}
```

## Finite-group Hopf algebra and lattice quantum-double sectors

A page `qsmx-quantum-double`; B companion `qsmx-quantum-double-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsmx-topological-lattice`, `qsm-quasilocal-states`, `maschkes-theorem-and-complete-reducibility`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-quantum-double`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-quantum-double",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-finite-group-double",
    "thm-qsmx-double-lattice-projectors",
    "thm-qsmx-double-sector-labels"
  ],
  "deps": [
    "qsmx-topological-lattice",
    "qsm-quasilocal-states",
    "maschkes-theorem-and-complete-reducibility"
  ],
  "companion": "qsmx-quantum-double-examples"
}
```

## Rational Yang–Baxter transfer matrices and Heisenberg charges

A page `qsmx-integrable-transfer`; B companion `qsmx-integrable-transfer-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-local-ensemble-bridge`, `hopf-hecke-and-quantum-symmetry-interfaces`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-integrable-transfer`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-integrable-transfer",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-rational-monodromy",
    "thm-qsmx-transfer-commutativity",
    "thm-qsmx-transfer-heisenberg-charge",
    "def-qsmx-regular-bethe-data"
  ],
  "deps": [
    "qsm-local-ensemble-bridge",
    "hopf-hecke-and-quantum-symmetry-interfaces"
  ],
  "companion": "qsmx-integrable-transfer-examples"
}
```

## Temperley–Lieb, Hecke normalization and quantum Potts chains

A page `qsmx-temperley-lieb-models`; B companion `qsmx-temperley-lieb-models-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-interacting-exact-models`, `temperley-lieb-towers-and-physics-models`, `nrqmx-exchange-representations`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-temperley-lieb-models`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-temperley-lieb-models",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-quantum-potts-hamiltonian",
    "thm-qsmx-potts-tl-and-hecke",
    "thm-qsmx-spin-singlet-exchange-interface"
  ],
  "deps": [
    "qsm-interacting-exact-models",
    "temperley-lieb-towers-and-physics-models",
    "nrqmx-exchange-representations"
  ],
  "companion": "qsmx-temperley-lieb-models-examples"
}
```

## Lie and Hall algebra actions with controlled decategorification

A page `qsmx-hall-categorification-spin`; B companion `qsmx-hall-categorification-spin-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsmx-temperley-lieb-models`, `qsmx-integrable-transfer`, `green-hall-bialgebras-and-quantum-group-realizations`, `klr-algebras-induction-and-quantum-serre-categorification`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-hall-categorification-spin`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-hall-categorification-spin",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-spin-weight-and-hall-realization",
    "thm-qsmx-exchange-lie-weight-blocks",
    "thm-qsmx-klr-character-specialization"
  ],
  "deps": [
    "qsmx-temperley-lieb-models",
    "qsmx-integrable-transfer",
    "green-hall-bialgebras-and-quantum-group-realizations",
    "klr-algebras-induction-and-quantum-serre-categorification"
  ],
  "companion": "qsmx-hall-categorification-spin-examples"
}
```

## Noncommuting entropy production and thermal secular models

A page `qsmx-open-entropy-production`; B companion `qsmx-open-entropy-production-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-dt-channels`, `qsm-dt-relaxation`, `qsmx-entropy-entanglement`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-open-entropy-production`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-open-entropy-production",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-secular-thermal-generator",
    "thm-qsmx-secular-gibbs-stationarity",
    "thm-qsmx-spohn-finite-inequality"
  ],
  "deps": [
    "qsm-dt-channels",
    "qsm-dt-relaxation",
    "qsmx-entropy-entanglement"
  ],
  "companion": "qsmx-open-entropy-production-examples"
}
```

## Current continuity, Drude obstructions and conditional diffusion

A page `qsmx-transport-and-drude`; B companion `qsmx-transport-and-drude-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-dt-response`, `qsmx-integrable-transfer`, `qsmx-lieb-robinson-spectral-flow`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-transport-and-drude`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-transport-and-drude",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-lattice-current-and-limits",
    "thm-qsmx-finite-mazur-bound",
    "thm-qsmx-conditional-diffusive-green-kubo"
  ],
  "deps": [
    "qsm-dt-response",
    "qsmx-integrable-transfer",
    "qsmx-lieb-robinson-spectral-flow"
  ],
  "companion": "qsmx-transport-and-drude-examples"
}
```

## Quasifree covariance, finite Bogoliubov theory and interacting boundaries

A page `qsmx-quasifree-gases`; B companion `qsmx-quasifree-gases-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-bose-fermi-gases`, `qsmx-entropy-entanglement`, `nrqmx-finite-mode-gaussian`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-quasifree-gases`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-quasifree-gases",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-quasifree-finite-covariance",
    "thm-qsmx-quasifree-entropy",
    "thm-qsmx-finite-boson-stability"
  ],
  "deps": [
    "qsm-bose-fermi-gases",
    "qsmx-entropy-entanglement",
    "nrqmx-finite-mode-gaussian"
  ],
  "companion": "qsmx-quasifree-gases-examples"
}
```

## Transverse Ising Majorana reduction and bulk gap closing

A page `qsmx-transverse-ising-spectral`; B companion `qsmx-transverse-ising-spectral-examples`. Category `quantum-statistical-mechanics`; library `physics`.
Declared earlier prerequisites: `qsm-bose-fermi-gases`, `qsmx-quasifree-gases`, `qsm-states-ensembles`.

Exact full design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-transverse-ising-spectral`.
Exact item statements, dependencies, justification fields, proof routes and sources: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`.

```json
{
  "page": "qsmx-transverse-ising-spectral",
  "side": "A",
  "library": "physics",
  "items": [
    "def-qsmx-transverse-ising-majoranas",
    "thm-qsmx-open-ising-quadratic",
    "thm-qsmx-ising-bulk-symbol-gap"
  ],
  "deps": [
    "qsm-bose-fermi-gases",
    "qsmx-quasifree-gases",
    "qsm-states-ensembles"
  ],
  "companion": "qsmx-transverse-ising-spectral-examples"
}
```
