# Thermodynamics — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/first-principles-2026-10-03/thermodynamics/scaffold/prose-scaffold.md` (SHA-256 1c4629ca19a0d7feffec1c4b78bb8caba30aaa09e77deacee546ffb867c670ff).
- `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json` (SHA-256 fc652c88efa972ae8ef34e820fd27547e7350484a80e62ea23f8371fb96d5131).
- `research/first-principles-2026-10-03/thermodynamics/closure-ledger.json` (SHA-256 b1dd3cbd1901c3909697ef06f372ac38bcd4e07d200df34105f407185c4bb12a).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Thermodynamic Framework

A page `td-thermodynamic-framework`; B companion `td-thermodynamic-framework-examples`. Category `thermodynamics`; library `physics`.
Order 263. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: none.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD1",
  "A_home": "TD1 A",
  "B_home": "TD1 B (leaf only)",
  "named_A_ids": [
    "def-td-equilibrium-state-domain",
    "def-td-process-and-protocol",
    "def-td-si-quantities",
    "def-td-system-and-permitted-exchanges",
    "post-td-bulk-additivity",
    "post-td-first-law-energy"
  ],
  "named_A_count": 6,
  "A_reserved_item_cap": 18,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Entropy Foundation

A page `td-entropy-foundation`; B companion `td-entropy-foundation-examples`. Category `thermodynamics`; library `physics`.
Order 265. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-thermodynamic-framework`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD2",
  "A_home": "TD2 A",
  "B_home": "TD2 B (leaf only)",
  "named_A_ids": [
    "def-td-reversible-process",
    "def-td-thermal-contact-constraints",
    "post-td-concave-fundamental-entropy",
    "post-td-entropy-maximum",
    "post-td-macroscopic-second-law",
    "post-td-zeroth-law"
  ],
  "named_A_count": 6,
  "A_reserved_item_cap": 20,
  "B_reserved_item_cap": 10,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Accessibility Foundation

A page `td-accessibility-foundation`; B companion `td-accessibility-foundation-examples`. Category `thermodynamics`; library `physics`.
Order 271. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-convex-contact-and-mixing`, `td-thermodynamic-framework`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD3",
  "A_home": "TD3 A",
  "B_home": "TD3 B (leaf only)",
  "named_A_ids": [
    "def-td-adiabatic-accessibility",
    "def-td-scaled-products-and-comparison",
    "post-td-accessibility-a1-a6",
    "post-td-equilibrium-join-coherence",
    "post-td-simple-system-geometric-axioms",
    "post-td-thermal-join-axioms",
    "post-td-universal-thermal-range",
    "pthm-td-contact-product-comparison",
    "pthm-td-entropy-under-product-comparison",
    "pthm-td-universal-mixing-entropy",
    "rem-td-entropy-construction-hypotheses"
  ],
  "named_A_count": 11,
  "A_reserved_item_cap": 30,
  "B_reserved_item_cap": 12,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Representation And Equilibrium

A page `td-representation-and-equilibrium`; B companion `td-representation-and-equilibrium-examples`. Category `thermodynamics`; library `physics`.
Order 273. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-entropy-foundation`, `td-math-nonsmooth-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD4",
  "A_home": "TD4 A",
  "B_home": "TD4 B (leaf only)",
  "named_A_ids": [
    "def-td-response-functions",
    "def-td-temperature-pressure-chemical-potential",
    "post-td-mechanical-conjugate-identification",
    "pthm-td-concave-stability",
    "pthm-td-interior-exchange-equilibrium",
    "pthm-td-local-energy-representation"
  ],
  "named_A_count": 6,
  "A_reserved_item_cap": 28,
  "B_reserved_item_cap": 14,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Potentials And Responses

A page `td-potentials-and-responses`; B companion `td-potentials-and-responses-examples`. Category `thermodynamics`; library `physics`.
Order 275. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-representation-and-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD5",
  "A_home": "TD5 A",
  "B_home": "TD5 B (leaf only)",
  "named_A_ids": [
    "def-td-legendre-potentials",
    "pthm-td-compressibility-capacity-ratio",
    "pthm-td-euler-and-gibbs-duhem",
    "pthm-td-heat-capacity-relation",
    "pthm-td-joule-thomson-chart",
    "pthm-td-maxwell-relations",
    "pthm-td-potential-differentials",
    "pthm-td-reservoir-minimum-principles",
    "pthm-td-useful-work-bound"
  ],
  "named_A_count": 9,
  "A_reserved_item_cap": 35,
  "B_reserved_item_cap": 16,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Cycles And Low Temperature

A page `td-cycles-and-low-temperature`; B companion `td-cycles-and-low-temperature-examples`. Category `thermodynamics`; library `physics`.
Order 277. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-potentials-and-responses`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD6",
  "A_home": "TD6 A",
  "B_home": "TD6 B (leaf only)",
  "named_A_ids": [
    "def-td-reservoir-cycle",
    "post-td-nernst-scoped",
    "post-td-unattainability-scoped",
    "pthm-td-carnot-engine-bound",
    "pthm-td-refrigerator-bound",
    "rem-td-residual-entropy"
  ],
  "named_A_count": 6,
  "A_reserved_item_cap": 24,
  "B_reserved_item_cap": 14,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Phases And Limits

A page `td-phases-and-limits`; B companion `td-phases-and-limits-examples`. Category `thermodynamics`; library `physics`.
Order 281. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD7",
  "A_home": "TD7 A",
  "B_home": "TD7 B (leaf only)",
  "named_A_ids": [
    "def-td-phase-and-coexistence-domain",
    "def-td-thermodynamic-limit-contract",
    "pthm-td-clapeyron-local",
    "pthm-td-compact-continuous-phase-mixture",
    "pthm-td-intensive-coexistence-conditions",
    "pthm-td-reaction-boundary-equilibrium",
    "pthm-td-regular-gibbs-phase-rule",
    "rem-td-nonsmooth-phase-scope"
  ],
  "named_A_count": 8,
  "A_reserved_item_cap": 30,
  "B_reserved_item_cap": 16,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Finite Statistical Bridge

A page `td-finite-statistical-bridge`; B companion `td-finite-statistical-bridge-examples`. Category `thermodynamics`; library `physics`.
Order 284. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-continuum-pressure`, `td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD8",
  "A_home": "TD8 A",
  "B_home": "TD8 B (leaf only)",
  "named_A_ids": [
    "def-td-finite-microstate-model",
    "def-td-regular-hamiltonian-shell-preparation",
    "post-td-canonical-sampling",
    "post-td-microcanonical-sampling",
    "pthm-td-countable-canonical-identities",
    "pthm-td-differentiable-pressure-concentration",
    "pthm-td-finite-bath-canonical-error",
    "pthm-td-finite-canonical-identities",
    "pthm-td-finite-entropy-maximum",
    "pthm-td-general-quantum-canonical-identities",
    "pthm-td-independent-factorization",
    "pthm-td-invariant-regular-microcanonical-shell",
    "pthm-td-lattice-bulk-pressure",
    "pthm-td-measurable-canonical-identities",
    "pthm-td-qualified-discrete-quantum-dephasing",
    "rem-td-ensemble-limit-hypotheses"
  ],
  "named_A_count": 16,
  "A_reserved_item_cap": 32,
  "B_reserved_item_cap": 18,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Irreversible Boundaries

A page `td-irreversible-boundaries`; B companion `td-irreversible-boundaries-examples`. Category `thermodynamics`; library `physics`.
Order 286. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-finite-statistical-bridge`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD9",
  "A_home": "TD9 A",
  "B_home": "TD9 B (leaf only)",
  "named_A_ids": [
    "def-td-macro-versus-micro-entropy-claim",
    "rem-td-empirical-evidence-contract",
    "rem-td-fluctuation-model-hypotheses",
    "rem-td-local-equilibrium-branch",
    "rem-td-transport-branch"
  ],
  "named_A_count": 5,
  "A_reserved_item_cap": 14,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Ordered Composition

A page `td-math-ordered-composition`; B companion `td-math-ordered-composition-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 267. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: none.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP1",
  "A_home": "MP1 A",
  "B_home": "MP1 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-comparison-and-stability",
    "def-tdmath-signed-comparison",
    "def-tdmath-tagged-scalable-compound",
    "lem-tdmath-reference-order",
    "lem-tdmath-reference-supremum-bounds",
    "lem-tdmath-spectator-cancellation",
    "thm-tdmath-additive-entropy-representation",
    "thm-tdmath-affine-entropy-uniqueness",
    "thm-tdmath-common-meter-calibration",
    "thm-tdmath-finite-inequality-alternative",
    "thm-tdmath-infinite-no-sinks-sandwich",
    "thm-tdmath-reaction-offset-feasibility"
  ],
  "named_A_count": 12,
  "A_reserved_item_cap": 32,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Nonsmooth Equilibrium

A page `td-math-nonsmooth-equilibrium`; B companion `td-math-nonsmooth-equilibrium-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 268. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-ordered-composition`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP2",
  "A_home": "MP2 A",
  "B_home": "MP2 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-extended-convex-function",
    "def-tdmath-fenchel-transform-and-subgradient",
    "lem-tdmath-closed-convex-separation",
    "lem-tdmath-constrained-curvature",
    "lem-tdmath-lever-rule",
    "lem-tdmath-stoichiometric-tangent-cone",
    "thm-tdmath-fenchel-attainment",
    "thm-tdmath-finite-dimensional-biconjugation",
    "thm-tdmath-finite-mixture-envelope",
    "thm-tdmath-local-implicit-rank",
    "thm-tdmath-phase-dimension"
  ],
  "named_A_count": 11,
  "A_reserved_item_cap": 32,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Ensembles And Limits

A page `td-math-ensembles-and-limits`; B companion `td-math-ensembles-and-limits-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 279. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-nonsmooth-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP3",
  "A_home": "MP3 A",
  "B_home": "MP3 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-bounded-finite-range-lattice",
    "def-tdmath-countable-canonical-model",
    "def-tdmath-diagonal-operator-model",
    "def-tdmath-measure-integral",
    "lem-tdmath-bose-fermi-mode-fluctuations",
    "lem-tdmath-conditional-memory-entropy",
    "lem-tdmath-diagonal-self-adjointness",
    "lem-tdmath-fatou",
    "lem-tdmath-finite-ground-degeneracy",
    "lem-tdmath-mutual-information",
    "thm-tdmath-dominated-convergence",
    "thm-tdmath-finite-bath-error-bound",
    "thm-tdmath-finite-range-lattice-pressure-limit",
    "thm-tdmath-general-trace-gibbs-model",
    "thm-tdmath-grand-response-covariance",
    "thm-tdmath-independent-bulk-limit",
    "thm-tdmath-ising-chain-limit",
    "thm-tdmath-limiting-derivative-and-concentration",
    "thm-tdmath-measurable-canonical-identities",
    "thm-tdmath-monotone-convergence",
    "thm-tdmath-summable-canonical-differentiation"
  ],
  "named_A_count": 21,
  "A_reserved_item_cap": 48,
  "B_reserved_item_cap": 12,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Local Pfaff Geometry

A page `td-math-local-pfaff-geometry`; B companion `td-math-local-pfaff-geometry-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 269. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-nonsmooth-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP4",
  "A_home": "MP4 A",
  "B_home": "MP4 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-one-form-and-horizontal-path",
    "lem-tdmath-local-contraction-flow",
    "lem-tdmath-variational-flow-and-commutation",
    "thm-tdmath-codimension-one-frobenius",
    "thm-tdmath-local-caratheodory-inaccessibility"
  ],
  "named_A_count": 5,
  "A_reserved_item_cap": 24,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Convex Contact And Mixing

A page `td-math-convex-contact-and-mixing`; B companion `td-math-convex-contact-and-mixing-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 270. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-local-pfaff-geometry`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP5",
  "A_home": "MP5 A",
  "B_home": "MP5 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-decorated-chain-costs",
    "def-tdmath-forward-sector-hypotheses",
    "lem-tdmath-convex-sector-closedness",
    "lem-tdmath-sector-interior",
    "thm-tdmath-arbitrary-family-calibration",
    "thm-tdmath-conditional-contact-calibrator",
    "thm-tdmath-forward-boundary-graph",
    "thm-tdmath-reference-strip-gluing",
    "thm-tdmath-sector-nesting",
    "thm-tdmath-splitting-cost-quotient",
    "thm-tdmath-unattained-cost-entropy-inference"
  ],
  "named_A_count": 11,
  "A_reserved_item_cap": 48,
  "B_reserved_item_cap": 12,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Mixture Dynamics And Shells

A page `td-math-mixture-dynamics-and-shells`; B companion `td-math-mixture-dynamics-and-shells-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 280. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-ensembles-and-limits`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP6",
  "A_home": "MP6 A",
  "B_home": "MP6 B (leaf only)",
  "named_A_ids": [
    "thm-tdmath-compact-continuous-mixture-attainment",
    "thm-tdmath-continuous-ideal-gas-block-limit",
    "thm-tdmath-discrete-quantum-cesaro-dephasing",
    "thm-tdmath-hamiltonian-measure-and-recurrence",
    "thm-tdmath-independent-microcanonical-block-limit",
    "thm-tdmath-ornstein-uhlenbeck-model",
    "thm-tdmath-regular-collision-entropy",
    "thm-tdmath-regular-energy-shell-measure"
  ],
  "named_A_count": 8,
  "A_reserved_item_cap": 36,
  "B_reserved_item_cap": 12,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Continuum Pressure

A page `td-math-continuum-pressure`; B companion `td-math-continuum-pressure-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 283. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-ensembles-and-limits`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP7",
  "A_home": "MP7 A",
  "B_home": "MP7 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-stable-power-tempered-particle-model",
    "lem-tdmath-particle-exponential-cutoff",
    "lem-tdmath-separated-cube-tail-bound",
    "thm-tdmath-stable-tempered-free-cube-grand-pressure"
  ],
  "named_A_count": 4,
  "A_reserved_item_cap": 24,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Spatial Measure And Information

A page `td-math-spatial-measure-and-information`; B companion `td-math-spatial-measure-and-information-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 295. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-ensembles-and-limits`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP8",
  "A_home": "MP8 A",
  "B_home": "MP8 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-local-tame-topology",
    "def-tdmath-poisson-configuration-reference",
    "lem-tdmath-conditional-log-density-convergence",
    "thm-tdmath-local-tame-entropy-compactness",
    "thm-tdmath-spatial-mean-information",
    "thm-tdmath-specific-entropy-density"
  ],
  "named_A_count": 6,
  "A_reserved_item_cap": 32,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Interacting Ensemble Geometry

A page `td-math-interacting-ensemble-geometry`; B companion `td-math-interacting-ensemble-geometry-examples`. Category `thermodynamics-mathematics`; library `mathematics`.
Order 297. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-math-continuum-pressure`, `td-math-convex-contact-and-mixing`, `td-math-mixture-dynamics-and-shells`, `td-math-spatial-measure-and-information`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "MP9",
  "A_home": "MP9 A",
  "B_home": "MP9 B (leaf only)",
  "named_A_ids": [
    "def-tdmath-superstable-regular-interaction",
    "lem-tdmath-integrable-tail-diagonal-gap",
    "lem-tdmath-superquadratic-positive-core",
    "thm-tdmath-canonical-grand-duality",
    "thm-tdmath-canonical-interior-density-limit",
    "thm-tdmath-continuum-variational-pressure",
    "thm-tdmath-controlled-shell-three-ensemble-equivalence",
    "thm-tdmath-fixed-n-local-ensemble-equivalence",
    "thm-tdmath-interval-event-ensemble-limit",
    "thm-tdmath-periodic-fixed-n-limit",
    "thm-tdmath-retained-hard-zero-beta-limit",
    "thm-tdmath-superstable-van-hove-pressure",
    "thm-tdmath-uniform-tempered-exterior-pressure",
    "thm-tdmath-van-hove-fixed-n-limit"
  ],
  "named_A_count": 14,
  "A_reserved_item_cap": 48,
  "B_reserved_item_cap": 12,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Stochastic Protocols

A page `td-stochastic-protocols`; B companion `td-stochastic-protocols-examples`. Category `thermodynamics`; library `physics`.
Order 299. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-finite-statistical-bridge`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD10",
  "A_home": "TD10 A",
  "B_home": "TD10 B (leaf only)",
  "named_A_ids": [
    "def-td-detailed-balance-rate-model",
    "def-td-driven-finite-path-model",
    "post-td-canonical-protocol-preparation",
    "post-td-linear-ornstein-uhlenbeck-bath",
    "post-td-stationary-bath-kernel",
    "pthm-td-finite-crooks",
    "pthm-td-finite-jarzynski",
    "pthm-td-markov-relative-entropy-and-convergence",
    "pthm-td-mean-dissipation",
    "pthm-td-qualified-landauer-reset"
  ],
  "named_A_count": 10,
  "A_reserved_item_cap": 24,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Continuum Heat Model

A page `td-continuum-heat-model`; B companion `td-continuum-heat-model-examples`. Category `thermodynamics`; library `physics`.
Order 301. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-entropy-foundation`, `td-math-local-pfaff-geometry`, `td-math-mixture-dynamics-and-shells`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD11",
  "A_home": "TD11 A",
  "B_home": "TD11 B (leaf only)",
  "named_A_ids": [
    "def-td-rectangular-local-equilibrium-fields",
    "def-td-regular-elastic-collision-model",
    "post-td-boltzmann-molecular-chaos-model",
    "post-td-fourier-conductivity",
    "post-td-local-energy-balance",
    "pthm-td-collision-h-theorem",
    "pthm-td-constant-conductivity-neumann-existence",
    "pthm-td-fourier-entropy-production",
    "pthm-td-neumann-heat-relaxation",
    "rem-td-solution-existence-scope"
  ],
  "named_A_count": 10,
  "A_reserved_item_cap": 24,
  "B_reserved_item_cap": 8,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```

## Interacting Equilibrium Preparations

A page `td-interacting-equilibrium-preparations`; B companion `td-interacting-equilibrium-preparations-examples`. Category `thermodynamics`; library `physics`.
Order 303. Exact source inventory: `research/first-principles-2026-10-03/thermodynamics/baseline-claim-map.json`.
Declared earlier prerequisites: `td-finite-statistical-bridge`, `td-math-interacting-ensemble-geometry`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "TD12",
  "A_home": "TD12 A",
  "B_home": "TD12 B (leaf only)",
  "named_A_ids": [
    "def-td-admissible-van-hove-and-tempered-exterior",
    "def-td-controlled-fixed-n-energy-shell",
    "def-td-stable-tempered-continuum-preparation",
    "post-td-classical-indistinguishable-particle-measure",
    "post-td-equilibrium-ensemble-sampling",
    "post-td-grand-variational-phase-uniqueness",
    "pthm-td-controlled-continuum-thermodynamic-limit",
    "pthm-td-controlled-thermodynamic-ensemble-duality",
    "pthm-td-interacting-three-ensemble-local-limit",
    "pthm-td-qualified-van-hove-and-exterior-limit",
    "pthm-td-stable-tempered-free-cube-grand-pressure"
  ],
  "named_A_count": 11,
  "A_reserved_item_cap": 32,
  "B_reserved_item_cap": 12,
  "hard_cap_each_page": 100,
  "production_items_created": false
}
```
