# Classical Statistical Mechanics — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/pathway-and-inventory.md` (SHA-256 0d4d31bf44c42f0a11502d0609f0428b3a53ff7eeb6b312301e08928ee640288).
- `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/prose-scaffold.md` (SHA-256 18618fe047451ddff39a5a1d704cd8b0ad4aa21c054e7ac9929fe702b17f5b58).
- `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json` (SHA-256 5e044e53fcfdf02c41bd437584e3a8828868aab8dba85b2a93f0be7817eaa195).
- `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/supplier-map.json` (SHA-256 ad488db8b925639a31c120d3cc0d97de32baabfe9345c0b09d0dc2526bf57e63).
- `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/closure-ledger.json` (SHA-256 1a59290caff6b31ac124802a9bcc4000a148f3ac920d0e31d7649fe7709e653b).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

2026-10-16 category-local audit addendum: the historical source hashes and original reservation below are preserved as frozen design evidence, not asserted as current pins. The current research expansion is indexed in `research/scaffold-audit-2026-10-16/classical-statistical-mechanics/report.md` and its supplier/consumer map. New bounded static-EM proposals F8–F9 and explicit discrete ergodic/mixing interfaces are included in the category-local inventory; the then-current root source bindings appear below as historical evidence; production import verification remains a pre-build obligation.

## Classical configuration, phase and reference spaces

A page `csm-phase-ensembles`; B companion `csm-phase-ensembles-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 487. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `cm-math-canonical`, `improper-and-parameter-dependent-multiple-integrals`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-phase-ensembles",
  "side": "A",
  "library": "physics",
  "items": [
    "def-csm-phase-space-reference",
    "thm-csm-equipartition-boundary-lemma",
    "def-csm-statistical-state-observable",
    "thm-csm-regular-shell-coarea",
    "post-csm-counting-and-physical-observables",
    "thm-csm-exponential-normalization-covariance",
    "thm-csm-kinetic-potential-shell-marginals",
    "thm-csm-liouville-entropy-transport",
    "post-csm-canonical-preparation",
    "post-csm-grand-preparation",
    "post-csm-isobaric-preparation",
    "post-csm-microcanonical-preparation",
    "def-csm-static-gauge-coupled-particle-model",
    "pthm-csm-static-gauge-canonical-partition-invariance",
    "thm-csm-relative-gibbs-variational-principle",
    "pthm-csm-canonical-momentum-equipartition",
    "pthm-csm-canonical-response-identities",
    "pthm-csm-ensemble-potentials",
    "pthm-csm-grand-response-identities",
    "pthm-csm-isobaric-response-identities"
  ],
  "deps": [],
  "companion": "csm-phase-ensembles-examples"
}
```

## Finite-range lattice interaction and conditional energy

A page `csm-gibbs-lattice`; B companion `csm-gibbs-lattice-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 489. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-phase-ensembles`, `outer-measure-and-the-caratheodory-extension-theorem`, `sigma-algebras-and-borel-sets`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-gibbs-lattice",
  "side": "A",
  "library": "physics",
  "items": [
    "def-csm-finite-range-lattice-interaction",
    "def-csm-stable-superstable-continuum-interaction",
    "lem-csm-finite-gibbs-variational-identity",
    "lem-csm-lattice-product-and-measure-compactness",
    "thm-csm-ising-chain-convergent-series",
    "def-csm-gibbs-physical-parameters",
    "def-csm-lattice-gibbs-specification",
    "lem-csm-chain-markov-bridge",
    "lem-csm-gibbs-response-covariance",
    "lem-csm-ising-influence-bound",
    "lem-csm-ising-parity-contours",
    "lem-csm-stationary-lattice-entropy-energy",
    "thm-csm-lattice-van-hove-pressure",
    "lem-csm-lattice-specification-consistency",
    "lem-csm-peierls-energy-injection",
    "lem-csm-maximal-coupling-and-heat-bath",
    "post-csm-interacting-equilibrium-gibbs",
    "thm-csm-lattice-dlr-existence",
    "lem-csm-stationary-dlr-construction",
    "thm-csm-chain-dlr-uniqueness",
    "thm-csm-dobrushin-finite-range-uniqueness",
    "thm-csm-ising-high-temperature-state",
    "thm-csm-ising-low-temperature-coexistence",
    "thm-csm-lattice-dlr-variational-pressure",
    "pthm-csm-pressure-entropy-reference-units",
    "thm-csm-ising-coexistence-pressure-cusp",
    "pthm-csm-ising-equilibrium-phases"
  ],
  "deps": [
    "csm-phase-ensembles"
  ],
  "companion": "csm-gibbs-lattice-examples"
}
```

## Finite-range continuum Gibbs kernels and DLR notion

A page `csm-continuum-limits`; B companion `csm-continuum-limits-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 491. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-gibbs-lattice`, `td-math-interacting-ensemble-geometry`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-continuum-limits",
  "side": "A",
  "library": "physics",
  "items": [
    "def-csm-continuum-dlr-kernels",
    "lem-csm-continuum-kernel-normalization",
    "pthm-csm-qualified-continuum-equilibrium-limits"
  ],
  "deps": [
    "csm-gibbs-lattice"
  ],
  "companion": "csm-continuum-limits-examples"
}
```

## Conditional entropy chain and disjoint-block bounds

A page `csm-full-phase-local-equivalence`; B companion `csm-full-phase-local-equivalence-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 493. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-gibbs-lattice`, `td-math-interacting-ensemble-geometry`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-full-phase-local-equivalence",
  "side": "A",
  "library": "physics",
  "items": [
    "lem-csm-kl-chain-disjoint",
    "lem-csm-information-contraction-pinsker",
    "def-csm-full-marked-model",
    "thm-csm-total-canonical-window",
    "post-csm-fullphase-interacting-preparations",
    "thm-csm-uniform-phase-shell-entropy",
    "thm-csm-full-shell-positional-minimizer",
    "thm-csm-local-mark-kl-bound",
    "thm-csm-local-full-phase-equivalence",
    "thm-csm-local-momentum-moments",
    "pthm-csm-full-interacting-phase-equivalence"
  ],
  "deps": [
    "csm-gibbs-lattice",
    "csm-phase-ensembles"
  ],
  "companion": "csm-full-phase-local-equivalence-examples"
}
```

## Hamiltonian phase, complete-domain flow and reference measure

A page `csm-hamiltonian-statistics`; B companion `csm-hamiltonian-statistics-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 495. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `euclidean-ordinary-differential-equations-with-smooth-dependence`, `hamiltonian-mechanics-and-completely-integrable-systems`, `measure-preserving-transformations-and-poincare-recurrence`, `product-measures-and-the-fubini-tonelli-theorems`, `strong-laws-of-large-numbers`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-hamiltonian-statistics",
  "side": "A",
  "library": "physics",
  "items": [
    "def-csm-dk-hamiltonian-flow-measure",
    "thm-csm-dk-integrable-covariance-green-kubo",
    "post-csm-dk-selected-hamiltonian-dynamics",
    "thm-csm-dk-compact-hamiltonian-linear-response",
    "thm-csm-dk-finite-measure-recurrence",
    "thm-csm-dk-invariant-hamiltonian-and-shell-measures",
    "thm-csm-dk-qualified-time-averages",
    "def-csm-dk-ergodic-and-mixing-notions",
    "thm-csm-dk-mixing-hierarchy",
    "thm-csm-dk-liouville-and-fine-entropy",
    "pthm-csm-dk-qualified-hamiltonian-statistical-predictions"
  ],
  "deps": [],
  "companion": "csm-hamiltonian-statistics-examples"
}
```

The `csm-hamiltonian-statistics-examples` companion also reserves the B-leaf
`cex-csm-dk-weak-mixing-not-strong-mixing` in D2; its exact discrete Chacon
scope is recorded in the category paired inventory.

## Smooth periodic finite-N and scaled mean-field phase data

A page `csm-mean-field-hierarchy`; B companion `csm-mean-field-hierarchy-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 497. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `cm-math-dynamics`, `csm-hamiltonian-statistics`, `markov-kernels-and-markov-chains`, `sigma-algebras-and-borel-sets`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-mean-field-hierarchy",
  "side": "A",
  "library": "physics",
  "items": [
    "def-csm-dk-periodic-mean-field-model",
    "post-csm-dk-mean-field-particle-and-iid-model",
    "thm-csm-dk-finite-n-complete-flow",
    "thm-csm-dk-global-lipschitz-vlasov",
    "thm-csm-dk-dobrushin-and-particle-limit",
    "thm-csm-dk-exact-bbgky",
    "thm-csm-dk-compact-iid-propagation-of-chaos",
    "pthm-csm-dk-qualified-mean-field-limit"
  ],
  "deps": [
    "csm-hamiltonian-statistics"
  ],
  "companion": "csm-mean-field-hierarchy-examples"
}
```

## Cutoff elastic-reflection collision measure and gain

A page `csm-collision-transport`; B companion `csm-collision-transport-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 499. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `improper-and-parameter-dependent-multiple-integrals`, `product-measures-and-the-fubini-tonelli-theorems`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-spectral-theorem-and-singular-value-decomposition`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-collision-transport",
  "side": "A",
  "library": "physics",
  "items": [
    "def-csm-dk-reflection-collision-gain",
    "def-csm-dk-kinetic-macroscopic-fields",
    "post-csm-dk-selected-cutoff-kinetic-model",
    "thm-csm-dk-global-cutoff-collision-evolution",
    "thm-csm-dk-exact-kinetic-moments",
    "thm-csm-dk-regular-collision-h-and-equality",
    "pthm-csm-dk-qualified-kinetic-entropy"
  ],
  "deps": [],
  "companion": "csm-collision-transport-examples"
}
```

## Finite reversible stochastic rate model and thermal coupling

A page `csm-stochastic-response`; B companion `csm-stochastic-response-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 501. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-collision-transport`, `csm-mean-field-hierarchy`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-stochastic-response",
  "side": "A",
  "library": "physics",
  "items": [
    "def-csm-dk-finite-reversible-rate-model",
    "post-csm-dk-selected-thermal-langevin-bath",
    "post-csm-dk-selected-reversible-bath-rates",
    "thm-csm-dk-nonexplosive-ctmc-and-gap",
    "thm-csm-dk-ou-velocity-diffusion-response",
    "pthm-csm-dk-ou-green-kubo-einstein",
    "rem-csm-dk-hard-limit-dispositions",
    "thm-csm-dk-finite-rate-fluctuation-response",
    "thm-csm-dk-markov-entropy-and-strong-averages",
    "thm-csm-dk-strong-lumpability",
    "pthm-csm-dk-finite-bath-response"
  ],
  "deps": [
    "csm-collision-transport",
    "csm-hamiltonian-statistics",
    "csm-mean-field-hierarchy"
  ],
  "companion": "csm-stochastic-response-examples"
}
```

## Gaussian and gamma product tools

A page `csm-exact-models`; B companion `csm-exact-models-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 503. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites (2026-10-17 scoped amendment): `csm-phase-ensembles`, `cm-math-continuum`, `mixed-partials-taylor-and-extrema`, `the-total-derivative`, `matrices-and-the-matrix-of-a-linear-map`, `fubini-and-change-of-variables`, `the-derivative-and-mean-value-theorems`, `continuity-ivt-evt-and-uniform-continuity`, `rpm-geometry-actions`. The former `fd-mf01` edge is superseded by local `lem-csm-examples-smooth-flow-jacobian` (M3J) before `thm-csm-examples-flow-fine-entropy`; all original claims/hypotheses remain. See `research/physics-remaining-80-2026-10-17-csm-supplier-resolution.md` for the exact contract and production obligations. The original reservation below remains historical; the current inventory adds that lemma.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-exact-models",
  "side": "A",
  "library": "physics",
  "items": [
    "lem-csm-examples-gamma-gaussian-tools",
    "thm-csm-examples-flow-fine-entropy",
    "thm-csm-examples-quadratic-covariance",
    "thm-csm-examples-spherical-marginal",
    "post-csm-examples-ensemble-preparations",
    "pthm-csm-harmonic-ensemble",
    "pthm-csm-ideal-gas-ensemble",
    "pthm-csm-ising-ring-correlation",
    "pthm-csm-tonks-rod-ensemble",
    "pthm-csm-spherical-shell-gas"
  ],
  "deps": [
    "csm-phase-ensembles"
  ],
  "companion": "csm-exact-models-examples"
}
```

## Finite Bernoulli fluctuations and matching exponential rates

A page `csm-fluctuations-countermodels`; B companion `csm-fluctuations-countermodels-examples`. Category `classical-statistical-mechanics`; library `physics`.
Order 505. Exact source inventory: `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json`.
Declared earlier prerequisites: `csm-exact-models`.

Original reservation (read together with the full required sources above):

```json
{
  "page": "csm-fluctuations-countermodels",
  "side": "A",
  "library": "physics",
  "items": [
    "pthm-csm-bernoulli-fluctuation-bounds",
    "pthm-csm-nonadditive-phase-countermodel",
    "pthm-csm-walk-recurrence-and-entropy"
  ],
  "deps": [
    "csm-exact-models"
  ],
  "companion": "csm-fluctuations-countermodels-examples"
}
```


## Historical scaffold source bindings — 2026-10-16 (superseded for current inputs on 2026-10-17)

The source-list hashes above remain historical splice pins. The following table records the draft bindings as of 2026-10-16 only; its hashes are not current bindings after the 2026-10-17 scoped amendment. Historical structural and closure receipts do not certify the revisions.

| Historical source (2026-10-16) | SHA-256 |
|---|---|
| `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/pathway-and-inventory.md` | `54fa811ca2c900607dd0e68d7adb385b3727969d7464ccf3658453d7f663929a` |
| `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/prose-scaffold.md` | `dea6dbf096edf81801c7703ae33f13aa436eb9f33ec606fb594c2ab2ae8e9a4f` |
| `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/paired-inventory.json` | `146e0ad47013e41b7140c61232537a867868ebb9c0ddfa654e0fa36040aaa312` |
| `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/supplier-map.json` | `f9d4e927fe273bc8860a39b6a1b0c1073b9842f8181898a406d933c3670f2034` |
| `research/extended-frameworks-2026-10-03/classical-statistical-mechanics/closure-ledger.json` | `1a59290caff6b31ac124802a9bcc4000a148f3ac920d0e31d7649fe7709e653b` |

Historical record: `research/scaffold-audit-2026-10-16/classical-statistical-mechanics/root-source-bindings.json`. Selected mathematical suppliers were bound there as research context at that time. The statement “the shared import manifest is unchanged” applies only to that 2026-10-16 audit; root has since performed an owner-authorized import refresh. Neither this table nor its original report is resealed by the amendment. Production import and closure verification retain their native obligations.

## Scoped amendment source bindings — 2026-10-17

`research/physics-remaining-80-2026-10-17-csm-amendment-bindings.json` records the exact changed research/plan bytes at this amendment handoff, including this track and the scoped resolution report. It supersedes the old table only for the changed inputs it names. It is a point-in-time binding, not an audit receipt, import certificate, external-source rereading claim or production proof acceptance; subsequent changes require a separate successor record. The complete contract, proof and remaining authoring obligations are in `research/physics-remaining-80-2026-10-17-csm-supplier-resolution.md`.
