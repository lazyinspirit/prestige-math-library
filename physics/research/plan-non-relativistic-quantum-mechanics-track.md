# Non-relativistic Quantum Mechanics — future build design

Spliced on 2026-10-04 at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.

Read these complete required sources before drift review or scaffolding:

- `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/prose-scaffold.md` (SHA-256 83c463fa07778f3b15c1704e1a465de89197a3b83804fdb978ec63fcac1d9933).
- `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json` (SHA-256 6a51ae927f03c2d9b81b72b913610ca05acc7ef28f4cbc7a77a7cd4d7c97a6cd).
- `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/baseline-claim-coverage.json` (SHA-256 c777680a818dcc0eb8c3a7220fefe7b1dd36f110d6ea587feebeee3459537506).
- `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/closure-ledger.json` (SHA-256 1bbadeb42be05db34d631bec80221075d5c072cff62c695c23521beb0f69aef1).

The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.

## Qm Math Composites

A page `qm-math-composites`; B companion `qm-math-composites-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 149. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: none.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-composites",
  "order": 1,
  "requires": [],
  "A": [
    "Hilbert tensor construction",
    "Bounded tensor maps",
    "Density and scalar spectral probability",
    "Weak-form Robertson uncertainty",
    "Real multipliers and free bounded-potential operators",
    "CHSH and finite sampling law",
    "Finite partial trace and Schmidt",
    "Finite effects and instruments",
    "Permutation-sector projections",
    "Euclidean L² product unitary",
    "Nuclear bounded cyclicity",
    "Separable partial trace",
    "Countable Kraus normalization",
    "Finite-ancilla complete positivity",
    "Local trace-preserving no-signalling",
    "Complex Gaussian continuation",
    "Momentum Fourier Jacobian",
    "Infinite Schmidt decomposition",
    "General trace-class instrument and effect duality",
    "Finite Naimark compression",
    "Countable Kraus isometric dilation",
    "Continuous measurable Kraus instrument",
    "Marker overlap contraction",
    "Exact free Gaussian propagation",
    "Joint PVM construction",
    "Compatible Lüders repeatability"
  ],
  "B": [
    "Bell reduced state",
    "Nonunique mixed ensemble",
    "Selective-conditioning counterexample"
  ],
  "a_count": 26,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-composites-hilbert-tensor-construction",
      "title": "Hilbert tensor construction",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M1",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-bounded-tensor-maps",
      "title": "Bounded tensor maps",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M1",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-density-and-scalar-spectral-probability",
      "title": "Density and scalar spectral probability",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M2",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-weak-form-robertson-uncertainty",
      "title": "Weak-form Robertson uncertainty",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M5",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
      "title": "Real multipliers and free bounded-potential operators",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M6",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-chsh-and-finite-sampling-law",
      "title": "CHSH and finite sampling law",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M7",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-finite-partial-trace-and-schmidt",
      "title": "Finite partial trace and Schmidt",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M3",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-finite-effects-and-instruments",
      "title": "Finite effects and instruments",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M4",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-permutation-sector-projections",
      "title": "Permutation-sector projections",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M8",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-euclidean-l2-product-unitary",
      "title": "Euclidean L² product unitary",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M11",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-nuclear-bounded-cyclicity",
      "title": "Nuclear bounded cyclicity",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M9",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-separable-partial-trace",
      "title": "Separable partial trace",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M9",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-countable-kraus-normalization",
      "title": "Countable Kraus normalization",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M9",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-finite-ancilla-complete-positivity",
      "title": "Finite-ancilla complete positivity",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M9",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-local-trace-preserving-no-signalling",
      "title": "Local trace-preserving no-signalling",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M9",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-complex-gaussian-continuation",
      "title": "Complex Gaussian continuation",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M28",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-momentum-fourier-jacobian",
      "title": "Momentum Fourier Jacobian",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-infinite-schmidt-decomposition",
      "title": "Infinite Schmidt decomposition",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M10",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-general-trace-class-instrument-and-effect-duality",
      "title": "General trace-class instrument and effect duality",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M32",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability",
        "nrqm-composites-finite-effects-and-instruments",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-finite-naimark-compression",
      "title": "Finite Naimark compression",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M32",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability",
        "nrqm-composites-finite-effects-and-instruments",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-countable-kraus-isometric-dilation",
      "title": "Countable Kraus isometric dilation",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M32",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability",
        "nrqm-composites-finite-effects-and-instruments",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-continuous-measurable-kraus-instrument",
      "title": "Continuous measurable Kraus instrument",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M32",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-density-and-scalar-spectral-probability",
        "nrqm-composites-finite-effects-and-instruments",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-marker-overlap-contraction",
      "title": "Marker overlap contraction",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-exact-free-gaussian-propagation",
      "title": "Exact free Gaussian propagation",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M41",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-complex-gaussian-continuation",
        "nrqm-composites-momentum-fourier-jacobian"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-joint-pvm-construction",
      "title": "Joint PVM construction",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M49",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-density-and-scalar-spectral-probability",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-composites-compatible-luders-repeatability",
      "title": "Compatible Lüders repeatability",
      "home": "qm-math-composites",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M49",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-density-and-scalar-spectral-probability",
        "nrqm-composites-nuclear-bounded-cyclicity"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-composites-example-bell-reduced-state",
      "title": "Bell reduced state",
      "home": "qm-math-composites-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-composites-hilbert-tensor-construction"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-composites-example-nonunique-mixed-ensemble",
      "title": "Nonunique mixed ensemble",
      "home": "qm-math-composites-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-composites-hilbert-tensor-construction"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-composites-example-selective-conditioning-counterexample",
      "title": "Selective-conditioning counterexample",
      "home": "qm-math-composites-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-composites-hilbert-tensor-construction"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Math Oscillator

A page `qm-math-oscillator`; B companion `qm-math-oscillator-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 151. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-composites`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-oscillator",
  "order": 2,
  "requires": [
    "qm-math-composites"
  ],
  "A": [
    "Diagonal adjoint and graph-core lemma",
    "Diagonal spectrum",
    "Hermite recurrence",
    "Hermite orthogonality",
    "Hermite completeness",
    "Oscillator scaling and exact realization",
    "Closed ladder domains",
    "Coherent-state convergence",
    "Coherent evolution and variance",
    "Multidimensional oscillator completeness"
  ],
  "B": [
    "Ground energy units",
    "Poisson number distribution",
    "Formal nonnormalizable solution"
  ],
  "a_count": 10,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma",
      "title": "Diagonal adjoint and graph-core lemma",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-diagonal-spectrum",
      "title": "Diagonal spectrum",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-hermite-recurrence",
      "title": "Hermite recurrence",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-hermite-orthogonality",
      "title": "Hermite orthogonality",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-hermite-completeness",
      "title": "Hermite completeness",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-oscillator-scaling-and-exact-realization",
      "title": "Oscillator scaling and exact realization",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-closed-ladder-domains",
      "title": "Closed ladder domains",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-coherent-state-convergence",
      "title": "Coherent-state convergence",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-coherent-evolution-and-variance",
      "title": "Coherent evolution and variance",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-oscillator-multidimensional-oscillator-completeness",
      "title": "Multidimensional oscillator completeness",
      "home": "qm-math-oscillator",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M12",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-euclidean-l2-product-unitary"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-oscillator-example-ground-energy-units",
      "title": "Ground energy units",
      "home": "qm-math-oscillator-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-oscillator-example-poisson-number-distribution",
      "title": "Poisson number distribution",
      "home": "qm-math-oscillator-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-oscillator-example-formal-nonnormalizable-solution",
      "title": "Formal nonnormalizable solution",
      "home": "qm-math-oscillator-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Math Orbital And Spin

A page `qm-math-orbital-and-spin`; B companion `qm-math-orbital-and-spin-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 153. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-oscillator`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-orbital-and-spin",
  "order": 3,
  "requires": [
    "qm-math-composites",
    "qm-math-oscillator"
  ],
  "A": [
    "Finite spin matrices",
    "Symmetric-power SU2 representation",
    "Finite spin-block decomposition",
    "Tensor spin composition",
    "Tsirelson bound",
    "Legendre Rodrigues equation",
    "Associated-polynomial normalization",
    "Weighted angular completeness",
    "Sphere ONB",
    "Sphere Laplacian diagonal domain",
    "Harmonic polynomial dimension",
    "Strongly continuous rotation action",
    "Orbital self-adjoint generators",
    "Dipole angular selection rules"
  ],
  "B": [
    "Spin singlet CHSH",
    "Coupled triplet and singlet",
    "Orbital core commutators"
  ],
  "a_count": 14,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-orbital-and-spin-finite-spin-matrices",
      "title": "Finite spin matrices",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M18",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-finite-partial-trace-and-schmidt",
        "nrqm-composites-chsh-and-finite-sampling-law",
        "nrqm-composites-permutation-sector-projections"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-symmetric-power-su2-representation",
      "title": "Symmetric-power SU2 representation",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M18",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-finite-partial-trace-and-schmidt",
        "nrqm-composites-chsh-and-finite-sampling-law",
        "nrqm-composites-permutation-sector-projections"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-finite-spin-block-decomposition",
      "title": "Finite spin-block decomposition",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M18",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-finite-partial-trace-and-schmidt",
        "nrqm-composites-chsh-and-finite-sampling-law",
        "nrqm-composites-permutation-sector-projections"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-tensor-spin-composition",
      "title": "Tensor spin composition",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M18",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-finite-partial-trace-and-schmidt",
        "nrqm-composites-chsh-and-finite-sampling-law",
        "nrqm-composites-permutation-sector-projections"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-tsirelson-bound",
      "title": "Tsirelson bound",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M18",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-finite-partial-trace-and-schmidt",
        "nrqm-composites-chsh-and-finite-sampling-law",
        "nrqm-composites-permutation-sector-projections"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-legendre-rodrigues-equation",
      "title": "Legendre Rodrigues equation",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-associated-polynomial-normalization",
      "title": "Associated-polynomial normalization",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-weighted-angular-completeness",
      "title": "Weighted angular completeness",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-sphere-onb",
      "title": "Sphere ONB",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain",
      "title": "Sphere Laplacian diagonal domain",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-harmonic-polynomial-dimension",
      "title": "Harmonic polynomial dimension",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-strongly-continuous-rotation-action",
      "title": "Strongly continuous rotation action",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
      "title": "Orbital self-adjoint generators",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M22",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-orbital-and-spin-dipole-angular-selection-rules",
      "title": "Dipole angular selection rules",
      "home": "qm-math-orbital-and-spin",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M39",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-orbital-and-spin-example-spin-singlet-chsh",
      "title": "Spin singlet CHSH",
      "home": "qm-math-orbital-and-spin-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-orbital-and-spin-example-coupled-triplet-and-singlet",
      "title": "Coupled triplet and singlet",
      "home": "qm-math-orbital-and-spin-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-orbital-and-spin-example-orbital-core-commutators",
      "title": "Orbital core commutators",
      "home": "qm-math-orbital-and-spin-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Math Intervals And Contacts

A page `qm-math-intervals-and-contacts`; B companion `qm-math-intervals-and-contacts-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 155. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-oscillator`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-intervals-and-contacts",
  "order": 4,
  "requires": [
    "qm-math-composites",
    "qm-math-oscillator"
  ],
  "A": [
    "Weak derivative AC representative",
    "Endpoint trace and half-line decay",
    "Sine ON completeness",
    "Dirichlet diagonal domain identification",
    "Twisted-periodic momentum domain",
    "Bounded interval perturbation compact resolvent",
    "Regular IVP parameter series",
    "Prüfer energy monotonicity",
    "Dirichlet nodal theorem",
    "Delta interface operator",
    "Delta rank-one resolvent",
    "Delta unique bound state",
    "Separated Robin Green resolvent",
    "Robin simple complete spectrum",
    "Barrier transfer and thick-limit error",
    "Finite-well root conditions and bound count"
  ],
  "B": [
    "Dirichlet momentum failure",
    "Separated-box degeneracy",
    "Attractive contact energy"
  ],
  "a_count": 16,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-intervals-and-contacts-weak-derivative-ac-representative",
      "title": "Weak derivative AC representative",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-endpoint-trace-and-half-line-decay",
      "title": "Endpoint trace and half-line decay",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-sine-on-completeness",
      "title": "Sine ON completeness",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
      "title": "Dirichlet diagonal domain identification",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-twisted-periodic-momentum-domain",
      "title": "Twisted-periodic momentum domain",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-bounded-interval-perturbation-compact-resolvent",
      "title": "Bounded interval perturbation compact resolvent",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-regular-ivp-parameter-series",
      "title": "Regular IVP parameter series",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-prufer-energy-monotonicity",
      "title": "Prüfer energy monotonicity",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-dirichlet-nodal-theorem",
      "title": "Dirichlet nodal theorem",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-delta-interface-operator",
      "title": "Delta interface operator",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-delta-rank-one-resolvent",
      "title": "Delta rank-one resolvent",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-delta-unique-bound-state",
      "title": "Delta unique bound state",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M19",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-separated-robin-green-resolvent",
      "title": "Separated Robin Green resolvent",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M33",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-robin-simple-complete-spectrum",
      "title": "Robin simple complete spectrum",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M33",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-barrier-transfer-and-thick-limit-error",
      "title": "Barrier transfer and thick-limit error",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M41",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-intervals-and-contacts-finite-well-root-conditions-and-bound-count",
      "title": "Finite-well root conditions and bound count",
      "home": "qm-math-intervals-and-contacts",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M41",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-intervals-and-contacts-example-dirichlet-momentum-failure",
      "title": "Dirichlet momentum failure",
      "home": "qm-math-intervals-and-contacts-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-intervals-and-contacts-weak-derivative-ac-representative"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-intervals-and-contacts-example-separated-box-degeneracy",
      "title": "Separated-box degeneracy",
      "home": "qm-math-intervals-and-contacts-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-intervals-and-contacts-weak-derivative-ac-representative"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-intervals-and-contacts-example-attractive-contact-energy",
      "title": "Attractive contact energy",
      "home": "qm-math-intervals-and-contacts-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-intervals-and-contacts-weak-derivative-ac-representative"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Math Coulomb

A page `qm-math-coulomb`; B companion `qm-math-coulomb-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 157. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-intervals-and-contacts`, `qm-math-orbital-and-spin`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-coulomb",
  "order": 5,
  "requires": [
    "qm-math-composites",
    "qm-math-oscillator",
    "qm-math-orbital-and-spin",
    "qm-math-intervals-and-contacts"
  ],
  "A": [
    "Three-dimensional Hardy bound",
    "Coulomb infinitesimal kinetic bound",
    "Coulomb relative compactness",
    "Coulomb essential spectrum",
    "Angular radial unitary reduction",
    "Transported radial endpoint realization",
    "Kummer recurrence and termination",
    "Laguerre bound energy exhaustion",
    "Negative-subspace completeness and degeneracy",
    "Ground radial probability and units",
    "Two-body reduced mass",
    "Atomic dipole matrix-element domain",
    "Coulomb Jost Volterra solution",
    "Coulomb continuum spectral density",
    "Onto radial continuum transform"
  ],
  "B": [
    "Hydrogen ground normalization",
    "No full discrete eigenbasis",
    "Relative versus total bound state"
  ],
  "a_count": 15,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-coulomb-three-dimensional-hardy-bound",
      "title": "Three-dimensional Hardy bound",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M13",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-coulomb-infinitesimal-kinetic-bound",
      "title": "Coulomb infinitesimal kinetic bound",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M13",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-coulomb-relative-compactness",
      "title": "Coulomb relative compactness",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-coulomb-essential-spectrum",
      "title": "Coulomb essential spectrum",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-angular-radial-unitary-reduction",
      "title": "Angular radial unitary reduction",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-transported-radial-endpoint-realization",
      "title": "Transported radial endpoint realization",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-kummer-recurrence-and-termination",
      "title": "Kummer recurrence and termination",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-laguerre-bound-energy-exhaustion",
      "title": "Laguerre bound energy exhaustion",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
      "title": "Negative-subspace completeness and degeneracy",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-ground-radial-probability-and-units",
      "title": "Ground radial probability and units",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M23",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-two-body-reduced-mass",
      "title": "Two-body reduced mass",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M26",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-atomic-dipole-matrix-element-domain",
      "title": "Atomic dipole matrix-element domain",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M39",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
        "nrqm-orbital-and-spin-dipole-angular-selection-rules"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-coulomb-jost-volterra-solution",
      "title": "Coulomb Jost Volterra solution",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M45",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-coulomb-continuum-spectral-density",
      "title": "Coulomb continuum spectral density",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M45",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-coulomb-onto-radial-continuum-transform",
      "title": "Onto radial continuum transform",
      "home": "qm-math-coulomb",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M45",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-coulomb-example-hydrogen-ground-normalization",
      "title": "Hydrogen ground normalization",
      "home": "qm-math-coulomb-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-coulomb-three-dimensional-hardy-bound"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-coulomb-example-no-full-discrete-eigenbasis",
      "title": "No full discrete eigenbasis",
      "home": "qm-math-coulomb-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-coulomb-three-dimensional-hardy-bound"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-coulomb-example-relative-versus-total-bound-state",
      "title": "Relative versus total bound state",
      "home": "qm-math-coulomb-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-coulomb-three-dimensional-hardy-bound"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Math Controlled Dynamics

A page `qm-math-controlled-dynamics`; B companion `qm-math-controlled-dynamics-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 159. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-coulomb`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-controlled-dynamics",
  "order": 6,
  "requires": [
    "qm-math-composites",
    "qm-math-oscillator",
    "qm-math-orbital-and-spin",
    "qm-math-intervals-and-contacts",
    "qm-math-coulomb"
  ],
  "A": [
    "Norm Dyson series and uniqueness",
    "Dyson truncation bound",
    "Strong bounded interaction picture",
    "First-order amplitude tail",
    "Allowed-region WKB coefficient equation",
    "WKB explicit error",
    "Cook domain criterion",
    "Cook isometry and intertwining",
    "Contour perturbation projection",
    "Simple-level reduced-resolvent coefficients",
    "Analytic perturbation remainder",
    "Free Gaussian dispersive kernel",
    "Radial Carleman estimate",
    "Bounded-potential weak UCP",
    "No positive compact-potential eigenvalues",
    "Outgoing Fredholm invertibility",
    "Two-level Rabi model",
    "Airy contour and Fresnel normalization",
    "Airy envelopes and asymptotic coefficients",
    "Finite gapped adiabatic estimate",
    "Degenerate Feshbach error",
    "Rotating-wave finite-time error",
    "L² potential infinitesimal kinetic bound",
    "Concrete three-dimensional Cook existence",
    "Driven oscillator common domain",
    "Explicit unbounded oscillator propagator",
    "Common-domain nonautonomous evolution",
    "Dollard integrable remainder",
    "Dollard channel completeness",
    "Liouville turning-point transformation",
    "Stable weighted Airy Volterra connection",
    "Two-turn barrier tunnelling error",
    "Draft stationary-phase packet application",
    "Mellin incoming and outgoing propagation",
    "Compact scattering defects",
    "Compact-support asymptotic completeness",
    "Unbounded gapped atomic adiabatic estimate",
    "Resolvent-tail short-range completeness",
    "Stationary-dynamical sector identification",
    "Stationary outgoing integral and flux",
    "Controlled Born amplitude error",
    "Partial-wave cross-section convergence"
  ],
  "B": [
    "Gap-closing failure",
    "Continuum contribution in perturbation",
    "Long-time RWA limitation"
  ],
  "a_count": 42,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness",
      "title": "Norm Dyson series and uniqueness",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M14",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-dyson-truncation-bound",
      "title": "Dyson truncation bound",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M14",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-strong-bounded-interaction-picture",
      "title": "Strong bounded interaction picture",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M14",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-first-order-amplitude-tail",
      "title": "First-order amplitude tail",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M14",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation",
      "title": "Allowed-region WKB coefficient equation",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M15",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-wkb-explicit-error",
      "title": "WKB explicit error",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M15",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-cook-domain-criterion",
      "title": "Cook domain criterion",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M16",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-cook-isometry-and-intertwining",
      "title": "Cook isometry and intertwining",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M16",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-contour-perturbation-projection",
      "title": "Contour perturbation projection",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M21",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients",
      "title": "Simple-level reduced-resolvent coefficients",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M21",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-analytic-perturbation-remainder",
      "title": "Analytic perturbation remainder",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M21",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-free-gaussian-dispersive-kernel",
      "title": "Free Gaussian dispersive kernel",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M28",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-complex-gaussian-continuation"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-radial-carleman-estimate",
      "title": "Radial Carleman estimate",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M42",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-bounded-potential-weak-ucp",
      "title": "Bounded-potential weak UCP",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M42",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues",
      "title": "No positive compact-potential eigenvalues",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M42",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-outgoing-fredholm-invertibility",
      "title": "Outgoing Fredholm invertibility",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M42",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-two-level-rabi-model",
      "title": "Two-level Rabi model",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M41",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-orbital-and-spin-finite-spin-matrices"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization",
      "title": "Airy contour and Fresnel normalization",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M47",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-composites-complex-gaussian-continuation"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients",
      "title": "Airy envelopes and asymptotic coefficients",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M47",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-composites-complex-gaussian-continuation"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate",
      "title": "Finite gapped adiabatic estimate",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M20",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-degenerate-feshbach-error",
      "title": "Degenerate Feshbach error",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M24",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness",
        "nrqm-controlled-dynamics-contour-perturbation-projection"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-rotating-wave-finite-time-error",
      "title": "Rotating-wave finite-time error",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M24",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness",
        "nrqm-controlled-dynamics-contour-perturbation-projection"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-l2-potential-infinitesimal-kinetic-bound",
      "title": "L² potential infinitesimal kinetic bound",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M28",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-controlled-dynamics-cook-domain-criterion"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence",
      "title": "Concrete three-dimensional Cook existence",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M28",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-controlled-dynamics-cook-domain-criterion"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-driven-oscillator-common-domain",
      "title": "Driven oscillator common domain",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M34",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator",
      "title": "Explicit unbounded oscillator propagator",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M34",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-common-domain-nonautonomous-evolution",
      "title": "Common-domain nonautonomous evolution",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M43",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-dollard-integrable-remainder",
      "title": "Dollard integrable remainder",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M46",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-controlled-dynamics-cook-domain-criterion",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-onto-radial-continuum-transform"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-dollard-channel-completeness",
      "title": "Dollard channel completeness",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M46",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-controlled-dynamics-cook-domain-criterion",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-onto-radial-continuum-transform"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-liouville-turning-point-transformation",
      "title": "Liouville turning-point transformation",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M48",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection",
      "title": "Stable weighted Airy Volterra connection",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M48",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error",
      "title": "Two-turn barrier tunnelling error",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M48",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-draft-stationary-phase-packet-application",
      "title": "Draft stationary-phase packet application",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M30",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation",
      "title": "Mellin incoming and outgoing propagation",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M31",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-controlled-dynamics-cook-domain-criterion",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
        "nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-compact-scattering-defects",
      "title": "Compact scattering defects",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M31",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-controlled-dynamics-cook-domain-criterion",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
        "nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-compact-support-asymptotic-completeness",
      "title": "Compact-support asymptotic completeness",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M31",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-controlled-dynamics-cook-domain-criterion",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
        "nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate",
      "title": "Unbounded gapped atomic adiabatic estimate",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M44",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
        "nrqm-controlled-dynamics-common-domain-nonautonomous-evolution"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-resolvent-tail-short-range-completeness",
      "title": "Resolvent-tail short-range completeness",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M35",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-controlled-dynamics-cook-domain-criterion",
        "nrqm-controlled-dynamics-concrete-three-dimensional-cook-existence",
        "nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-stationary-dynamical-sector-identification",
      "title": "Stationary-dynamical sector identification",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M51",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation",
        "nrqm-controlled-dynamics-radial-carleman-estimate",
        "nrqm-coulomb-onto-radial-continuum-transform"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux",
      "title": "Stationary outgoing integral and flux",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M40",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-controlled-dynamics-radial-carleman-estimate",
        "nrqm-controlled-dynamics-stationary-dynamical-sector-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-controlled-born-amplitude-error",
      "title": "Controlled Born amplitude error",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M40",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-controlled-dynamics-radial-carleman-estimate",
        "nrqm-controlled-dynamics-stationary-dynamical-sector-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-controlled-dynamics-partial-wave-cross-section-convergence",
      "title": "Partial-wave cross-section convergence",
      "home": "qm-math-controlled-dynamics",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M40",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-controlled-dynamics-radial-carleman-estimate",
        "nrqm-controlled-dynamics-stationary-dynamical-sector-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-controlled-dynamics-example-gap-closing-failure",
      "title": "Gap-closing failure",
      "home": "qm-math-controlled-dynamics-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-controlled-dynamics-example-continuum-contribution-in-perturbation",
      "title": "Continuum contribution in perturbation",
      "home": "qm-math-controlled-dynamics-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-controlled-dynamics-example-long-time-rwa-limitation",
      "title": "Long-time RWA limitation",
      "home": "qm-math-controlled-dynamics-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Math Fock And Equilibrium

A page `qm-math-fock-and-equilibrium`; B companion `qm-math-fock-and-equilibrium-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 161. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-controlled-dynamics`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-fock-and-equilibrium",
  "order": 7,
  "requires": [
    "qm-math-composites",
    "qm-math-oscillator",
    "qm-math-orbital-and-spin",
    "qm-math-coulomb",
    "qm-math-controlled-dynamics"
  ],
  "A": [
    "Hilbert direct-sum construction",
    "Fock sector projections",
    "Creation contraction bounds",
    "Closed adjoint sector domains",
    "Number operator domain",
    "Fixed-mode number law",
    "Single-mode thermal trace",
    "Countable-mode product criterion",
    "Fermion and dilute grand-canonical formulas",
    "Finite Gibbs free-energy minimum",
    "Entropy-divergence example",
    "Variational ground gap overlap",
    "Bounded fixed-N operator",
    "Permutation-restricted self-adjointness",
    "Fixed-N Coulomb self-adjointness",
    "Transverse continuum free Fock Hamiltonian",
    "Slater direct and exchange calculation",
    "Cutoff dipole relative bound",
    "Vacuum emission Dyson convergence",
    "Golden-rule coefficient approximate identity"
  ],
  "B": [
    "Infinite identical-mode divergence",
    "No automatic equilibration",
    "Repeated-orbital fermion exclusion"
  ],
  "a_count": 20,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction",
      "title": "Hilbert direct-sum construction",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-fock-sector-projections",
      "title": "Fock sector projections",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-creation-contraction-bounds",
      "title": "Creation contraction bounds",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-closed-adjoint-sector-domains",
      "title": "Closed adjoint sector domains",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-number-operator-domain",
      "title": "Number operator domain",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-fixed-mode-number-law",
      "title": "Fixed-mode number law",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-single-mode-thermal-trace",
      "title": "Single-mode thermal trace",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-countable-mode-product-criterion",
      "title": "Countable-mode product criterion",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas",
      "title": "Fermion and dilute grand-canonical formulas",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M17",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-permutation-sector-projections",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum",
      "title": "Finite Gibbs free-energy minimum",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M25",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-entropy-divergence-example",
      "title": "Entropy-divergence example",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M25",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-variational-ground-gap-overlap",
      "title": "Variational ground gap overlap",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M25",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-density-and-scalar-spectral-probability"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-bounded-fixed-n-operator",
      "title": "Bounded fixed-N operator",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M26",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-permutation-sector-projections"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness",
      "title": "Permutation-restricted self-adjointness",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M26",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-permutation-sector-projections"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness",
      "title": "Fixed-N Coulomb self-adjointness",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M36",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-coulomb-three-dimensional-hardy-bound",
        "nrqm-coulomb-two-body-reduced-mass"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian",
      "title": "Transverse continuum free Fock Hamiltonian",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M37",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-hilbert-tensor-construction",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-euclidean-l2-product-unitary",
        "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation",
      "title": "Slater direct and exchange calculation",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M41",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-permutation-sector-projections",
        "nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound",
      "title": "Cutoff dipole relative bound",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M38",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness",
        "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction",
        "nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence",
      "title": "Vacuum emission Dyson convergence",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M38",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness",
        "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction",
        "nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity",
      "title": "Golden-rule coefficient approximate identity",
      "home": "qm-math-fock-and-equilibrium",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M38",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-oscillator-oscillator-scaling-and-exact-realization",
        "nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness",
        "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction",
        "nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-fock-and-equilibrium-example-infinite-identical-mode-divergence",
      "title": "Infinite identical-mode divergence",
      "home": "qm-math-fock-and-equilibrium-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-fock-and-equilibrium-example-no-automatic-equilibration",
      "title": "No automatic equilibration",
      "home": "qm-math-fock-and-equilibrium-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-fock-and-equilibrium-example-repeated-orbital-fermion-exclusion",
      "title": "Repeated-orbital fermion exclusion",
      "home": "qm-math-fock-and-equilibrium-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-fock-and-equilibrium-hilbert-direct-sum-construction"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Math Magnetic And Detection

A page `qm-math-magnetic-and-detection`; B companion `qm-math-magnetic-and-detection-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.
Order 163. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-intervals-and-contacts`, `qm-math-orbital-and-spin`.

Original reservation (read together with the full required sources above):

```json
{
  "pair": "qm-math-magnetic-and-detection",
  "order": 8,
  "requires": [
    "qm-math-composites",
    "qm-math-oscillator",
    "qm-math-orbital-and-spin",
    "qm-math-intervals-and-contacts"
  ],
  "A": [
    "Bounded-coefficient magnetic operator",
    "Gauge H² domain preservation",
    "Gauge transported propagator",
    "Smooth local continuity calculation",
    "Coherent versus mixed bin laws",
    "Covariance-refined uncertainty",
    "Maximal-domain position and momentum uncertainty",
    "Conserved spectral probability laws",
    "Galilean covariance",
    "Graph-domain Ehrenfest and timescale",
    "Conditional Stern-Gerlach force"
  ],
  "B": [
    "Gauge phase units",
    "Finite dark-bin probability",
    "Preparation spread versus error"
  ],
  "a_count": 11,
  "b_count": 3,
  "a_items": [
    {
      "id": "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator",
      "title": "Bounded-coefficient magnetic operator",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-gauge-h2-domain-preservation",
      "title": "Gauge H² domain preservation",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-gauge-transported-propagator",
      "title": "Gauge transported propagator",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-smooth-local-continuity-calculation",
      "title": "Smooth local continuity calculation",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws",
      "title": "Coherent versus mixed bin laws",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-covariance-refined-uncertainty",
      "title": "Covariance-refined uncertainty",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M27",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty",
      "title": "Maximal-domain position and momentum uncertainty",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M29",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-conserved-spectral-probability-laws",
      "title": "Conserved spectral probability laws",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M50",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-orbital-and-spin-finite-spin-matrices",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator",
        "nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty",
        "nrqm-composites-joint-pvm-construction"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-galilean-covariance",
      "title": "Galilean covariance",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M50",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-orbital-and-spin-finite-spin-matrices",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator",
        "nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty",
        "nrqm-composites-joint-pvm-construction"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale",
      "title": "Graph-domain Ehrenfest and timescale",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M50",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-orbital-and-spin-finite-spin-matrices",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator",
        "nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty",
        "nrqm-composites-joint-pvm-construction"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    },
    {
      "id": "nrqm-magnetic-and-detection-conditional-stern-gerlach-force",
      "title": "Conditional Stern-Gerlach force",
      "home": "qm-math-magnetic-and-detection",
      "page_kind": "A",
      "domain": "mathematics",
      "proof_module": "M50",
      "proof_file": "scaffold/mathematical-prerequisites.md",
      "claim_deps": [
        "nrqm-composites-weak-form-robertson-uncertainty",
        "nrqm-composites-real-multipliers-and-free-bounded-potential-operators",
        "nrqm-composites-nuclear-bounded-cyclicity",
        "nrqm-orbital-and-spin-finite-spin-matrices",
        "nrqm-orbital-and-spin-orbital-self-adjoint-generators",
        "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator",
        "nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty",
        "nrqm-composites-joint-pvm-construction"
      ],
      "status": "research-reservation-with-complete-conditional-argument; not production item"
    }
  ],
  "b_items": [
    {
      "id": "nrqm-magnetic-and-detection-example-gauge-phase-units",
      "title": "Gauge phase units",
      "home": "qm-math-magnetic-and-detection-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-magnetic-and-detection-example-finite-dark-bin-probability",
      "title": "Finite dark-bin probability",
      "home": "qm-math-magnetic-and-detection-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator"
      ],
      "status": "leaf example reservation"
    },
    {
      "id": "nrqm-magnetic-and-detection-example-preparation-spread-versus-error",
      "title": "Preparation spread versus error",
      "home": "qm-math-magnetic-and-detection-examples",
      "page_kind": "B",
      "domain": "mathematics",
      "deps": [
        "nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator"
      ],
      "status": "leaf example reservation"
    }
  ]
}
```

## Qm Framework And Quantities

A page `qm-framework-and-quantities`; B companion `qm-framework-and-quantities-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 165. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-math-magnetic-and-detection`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "01",
  "pair": "qm-framework-and-quantities",
  "a_inventory": "Complete P1–P7 overview and scope; quantities/frame/worldline definitions; assumption-class distinctions [D,P,R], 24",
  "b_inventory": "unit/type checks, wrong m=0 inference, scope counterexamples [examples,R], 14",
  "a_budget": 24,
  "b_budget": 14,
  "requires_physics": []
}
```

## Qm State Geometry

A page `qm-state-geometry`; B companion `qm-state-geometry-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 167. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-framework-and-quantities`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "02",
  "pair": "qm-state-geometry",
  "a_inventory": "Hilbert space/ray/normalization/phase/density; mathematical rank-one/convex-mixture lemmas; state postulate [M,D,P,T], 34",
  "b_inventory": "finite spin and fixed-mode photon states; coherent versus mixed preparations, zero-vector exclusion, nonunique mixture [H,examples], 20",
  "a_budget": 34,
  "b_budget": 20,
  "requires_physics": [
    "NRQ-A01"
  ]
}
```

## Qm Observables And Born Probabilities

A page `qm-observables-and-born-probabilities`; B companion `qm-observables-and-born-probabilities-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 169. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-state-geometry`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "03",
  "pair": "qm-observables-and-born-probabilities",
  "a_inventory": "Unbounded domains, self-adjointness, spectrum/PVM, scalar probability/moments, continuous outcomes [M,D,P,T], 38",
  "b_inventory": "finite energy readouts, position bins, plane-wave/distribution caveats [examples,H], 22",
  "a_budget": 38,
  "b_budget": 22,
  "requires_physics": [
    "NRQ-A02"
  ]
}
```

## Qm Measurement And Instruments

A page `qm-measurement-and-instruments`; B companion `qm-measurement-and-instruments-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 171. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-observables-and-born-probabilities`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "04",
  "pair": "qm-measurement-and-instruments",
  "a_inventory": "P3, degenerate Lüders, finite POVM/effects/instruments, repeatability, conditional vs discarded outcomes [M,D,P,T], 32",
  "b_inventory": "serial Stern–Gerlach ideal setups, three polarizers, absorption instrument; source-backed SG report candidate [H,E pending], 22",
  "a_budget": 32,
  "b_budget": 22,
  "requires_physics": [
    "NRQ-A03"
  ]
}
```

## Qm Autonomous Dynamics

A page `qm-autonomous-dynamics`; B companion `qm-autonomous-dynamics-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 173. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-observables-and-born-probabilities`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "05",
  "pair": "qm-autonomous-dynamics",
  "a_inventory": "P4, Stone, domain invariance, Schrödinger/Heisenberg pictures, energy conservation [M,D,P,T], 32",
  "b_inventory": "two-level precession and finite stationary superposition [H,examples], 18",
  "a_budget": 32,
  "b_budget": 18,
  "requires_physics": [
    "NRQ-A03"
  ]
}
```

## Qm Massive Particle Kinematics

A page `qm-massive-particle-kinematics`; B companion `qm-massive-particle-kinematics-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 175. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-autonomous-dynamics`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "06",
  "pair": "qm-massive-particle-kinematics",
  "a_inventory": "P5, L² spinors, Q/P maximal domains, Fourier normalization, CCR on core, translation covariance [M,D,P,T], 40",
  "b_inventory": "Gaussian position/momentum packet, plane wave as generalized function, boundary momentum warning [examples,H], 20",
  "a_budget": 40,
  "b_budget": 20,
  "requires_physics": [
    "NRQ-A05"
  ]
}
```

## Qm Interference And Local Detection

A page `qm-interference-and-local-detection`; B companion `qm-interference-and-local-detection-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 177. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-massive-particle-kinematics`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "07",
  "pair": "qm-interference-and-local-detection",
  "a_inventory": "amplitudes/coherence, detector PVM/POVM bins, coherent cross term vs incoherent law, current under regularity, finite-sample theorem [M,D,T,H], 34",
  "b_inventory": "ideal two-path distribution; electron/photon data only after primary report audit [H,E pending], 20",
  "a_budget": 34,
  "b_budget": 20,
  "requires_physics": [
    "NRQ-A03",
    "NRQ-A06"
  ]
}
```

## Qm Uncertainty And Compatibility

A page `qm-uncertainty-and-compatibility`; B companion `qm-uncertainty-and-compatibility-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 179. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-massive-particle-kinematics`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "08",
  "pair": "qm-uncertainty-and-compatibility",
  "a_inventory": "preparation variances, weak/strong Robertson hypotheses, strong spectral commutation, joint measurement scope [M,D,T], 32",
  "b_inventory": "Gaussian bound, incompatible spin outcomes, energy–time caveat, error/disturbance distinction [H,examples,R], 18",
  "a_budget": 32,
  "b_budget": 18,
  "requires_physics": [
    "NRQ-A03",
    "NRQ-A06"
  ]
}
```

## Qm One Dimensional Potentials

A page `qm-one-dimensional-potentials`; B companion `qm-one-dimensional-potentials-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 181. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-interference-and-local-detection`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "09",
  "pair": "qm-one-dimensional-potentials",
  "a_inventory": "H0+bounded V, finite wells/barriers, scattering flux/current, bound-state conditions, domain-specific box [M,D,P,T], 44",
  "b_inventory": "rectangular barrier transmission including tunnelling, finite well root conditions, numerical/analytic comparisons [H,examples], 24",
  "a_budget": 44,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A06",
    "NRQ-A07"
  ]
}
```

## Qm Harmonic Oscillator

A page `qm-harmonic-oscillator`; B companion `qm-harmonic-oscillator-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 183. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-uncertainty-and-compatibility`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "10",
  "pair": "qm-harmonic-oscillator",
  "a_inventory": "operator/form domain, Hermite ONB, ladder core, spectrum/completeness, coherent-state definition and fluctuations [M,D,T], 42",
  "b_inventory": "Gaussian ground state, ladder norms, coherent evolution, nonnormalizable formal solutions [H,examples], 22",
  "a_budget": 42,
  "b_budget": 22,
  "requires_physics": [
    "NRQ-A06",
    "NRQ-A08"
  ]
}
```

## Qm Symmetries And Conservation

A page `qm-symmetries-and-conservation`; B companion `qm-symmetries-and-conservation-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 185. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-massive-particle-kinematics`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "11",
  "pair": "qm-symmetries-and-conservation",
  "a_inventory": "unitary symmetry groups, generators/core, translations/rotations/parity, conservation, gauge covariance for specified external coupling [M,D,P,T], 42",
  "b_inventory": "parity selection, translational free dynamics, symmetry breaking caveats [H,examples], 20",
  "a_budget": 42,
  "b_budget": 20,
  "requires_physics": [
    "NRQ-A05",
    "NRQ-A06"
  ]
}
```

## Qm Angular Momentum And Spin

A page `qm-angular-momentum-and-spin`; B companion `qm-angular-momentum-and-spin-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 187. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-symmetries-and-conservation`, `qm-uncertainty-and-compatibility`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "12",
  "pair": "qm-angular-momentum-and-spin",
  "a_inventory": "orbital sphere theory, SU(2) spin postulate, ladders, S²/Sz, Pauli matrices, magnetic moment coupling [M,D,P,T], 48",
  "b_inventory": "spin probabilities, L eigenfunctions, SG force approximation, Zeeman toy model [H,examples], 24",
  "a_budget": 48,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A08",
    "NRQ-A11"
  ]
}
```

## Qm Composites Entanglement And Reduced States

A page `qm-composites-entanglement-and-reduced-states`; B companion `qm-composites-entanglement-and-reduced-states-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 189. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-angular-momentum-and-spin`, `qm-measurement-and-instruments`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "13",
  "pair": "qm-composites-entanglement-and-reduced-states",
  "a_inventory": "tensor composition postulate, product basis, entanglement, Schmidt/reduced density, local observables, finite no-signalling [M,D,P,T], 44",
  "b_inventory": "singlet correlations, path-marker overlap/visibility, improper versus classical mixtures [H,examples], 24",
  "a_budget": 44,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A02",
    "NRQ-A04",
    "NRQ-A05",
    "NRQ-A12"
  ]
}
```

## Qm Bell Models And Measurement Limits

A page `qm-bell-models-and-measurement-limits`; B companion `qm-bell-models-and-measurement-limits-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 191. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-composites-entanglement-and-reduced-states`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "14",
  "pair": "qm-bell-models-and-measurement-limits",
  "a_inventory": "precise local-response/setting-independent probability model; classical CHSH and quantum singlet contrast; measurement-model boundaries [M,D,T,H,R], 32",
  "b_inventory": "specified Bell angles; finite-data selection/loss caveats; experiment candidate [H,E pending], 22",
  "a_budget": 32,
  "b_budget": 22,
  "requires_physics": [
    "NRQ-A13"
  ]
}
```

## Qm Identical Particles And Exclusion

A page `qm-identical-particles-and-exclusion`; B companion `qm-identical-particles-and-exclusion-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 193. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-composites-entanglement-and-reduced-states`, `qm-math-fock-and-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "15",
  "pair": "qm-identical-particles-and-exclusion",
  "a_inventory": "P6 exchange sectors, symmetrizers, Slater states, occupation numbers, exclusion; finite Fock preview [M,D,P,T], 40",
  "b_inventory": "two-fermion spatial/spin symmetry, exchange versus Coulomb terms [H,examples], 24",
  "a_budget": 40,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A13"
  ]
}
```

## Qm Central Potentials And Hydrogen

A page `qm-central-potentials-and-hydrogen`; B companion `qm-central-potentials-and-hydrogen-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 195. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-composites-entanglement-and-reduced-states`, `qm-math-coulomb`, `qm-one-dimensional-potentials`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "16",
  "pair": "qm-central-potentials-and-hydrogen",
  "a_inventory": "spherical separation/domain, reduced mass, Coulomb bound, radial solutions, bound spectrum/degeneracy, limitations [M,D,P,T], 54",
  "b_inventory": "hydrogen energy/unit derivation, radial distributions; spectroscopy data candidate [H,E pending], 28",
  "a_budget": 54,
  "b_budget": 28,
  "requires_physics": [
    "NRQ-A09",
    "NRQ-A12",
    "NRQ-A13"
  ]
}
```

## Qm Controlled Approximations

A page `qm-controlled-approximations`; B companion `qm-controlled-approximations-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 197. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-central-potentials-and-hydrogen`, `qm-harmonic-oscillator`, `qm-math-fock-and-equilibrium`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "17",
  "pair": "qm-controlled-approximations",
  "a_inventory": "variational form principle; stationary nondegenerate/degenerate perturbation with gap/remainder; WKB regime [M,D,T], 56",
  "b_inventory": "finite-gap toy correction, Stark/Zeeman model, tunnelling asymptotic limits [H,examples], 28",
  "a_budget": 56,
  "b_budget": 28,
  "requires_physics": [
    "NRQ-A09",
    "NRQ-A10",
    "NRQ-A16"
  ]
}
```

## Qm Driven Dynamics And Adiabatic Limits

A page `qm-driven-dynamics-and-adiabatic-limits`; B companion `qm-driven-dynamics-and-adiabatic-limits-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 199. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-controlled-approximations`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "18",
  "pair": "qm-driven-dynamics-and-adiabatic-limits",
  "a_inventory": "finite continuous H(t) propagator, interaction picture, bounded Dyson series/error, resonant transitions, adiabatic gap assumptions [M,D,P,T], 48",
  "b_inventory": "Rabi/precession, driven ammonia/NMR model, rotating-wave error contract [H,examples], 24",
  "a_budget": 48,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A05",
    "NRQ-A12",
    "NRQ-A17"
  ]
}
```

## Qm Three Dimensional Scattering

A page `qm-three-dimensional-scattering`; B companion `qm-three-dimensional-scattering-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 201. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-controlled-approximations`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "19",
  "pair": "qm-three-dimensional-scattering",
  "a_inventory": "scattering states/wave operators, conditions for existence/completeness, S, flux, differential/total cross sections, partial waves [M,D,T], 56",
  "b_inventory": "short-range potential, phase-shift resonance, Born approximation with scope; long-range warning [H,examples], 28",
  "a_budget": 56,
  "b_budget": 28,
  "requires_physics": [
    "NRQ-A06",
    "NRQ-A09",
    "NRQ-A12",
    "NRQ-A17"
  ]
}
```

## Qm Many Body And Equilibrium Models

A page `qm-many-body-and-equilibrium-models`; B companion `qm-many-body-and-equilibrium-models-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 203. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-controlled-approximations`, `qm-identical-particles-and-exclusion`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "20",
  "pair": "qm-many-body-and-equilibrium-models",
  "a_inventory": "noninteracting finite models, exchange contributions, reduced states, canonical ρ and partition convergence, entropy [M,D,P,T], 42",
  "b_inventory": "two-site/bond model, finite thermal ensemble, gas statistics with added assumptions [H,examples], 24",
  "a_budget": 42,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A13",
    "NRQ-A15",
    "NRQ-A16",
    "NRQ-A17"
  ]
}
```

## Qm Photons And Radiation Modes

A page `qm-photons-and-radiation-modes`; B companion `qm-photons-and-radiation-modes-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 205. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-harmonic-oscillator`, `qm-identical-particles-and-exclusion`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "21",
  "pair": "qm-photons-and-radiation-modes",
  "a_inventory": "R1–R2, transverse fixed-mode polarization vs spatial massive ψ, mode/Fock definitions/domains, number/energy/Born detection [M,D,P,T], 48",
  "b_inventory": "Malus/Jones amplitudes, single-mode number/coherent statistics, distinguish classical optical interference [H,examples], 24",
  "a_budget": 48,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A02",
    "NRQ-A04",
    "NRQ-A10",
    "NRQ-A15"
  ]
}
```

## Qm Light Matter And Spectral Transitions

A page `qm-light-matter-and-spectral-transitions`; B companion `qm-light-matter-and-spectral-transitions-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.
Order 207. Exact source inventory: `research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`.
Declared earlier prerequisites: `qm-driven-dynamics-and-adiabatic-limits`, `qm-photons-and-radiation-modes`.

Original reservation (read together with the full required sources above):

```json
{
  "order": "22",
  "pair": "qm-light-matter-and-spectral-transitions",
  "a_inventory": "R3, dipole coupling/regime, selection rules, absorption/stimulated transitions; spontaneous emission only with field/environment assumptions [M,D,P,T,R], 48",
  "b_inventory": "spectral energy differences versus detected photon, finite mode coupling; primary emission evidence candidate [H,E pending], 24",
  "a_budget": 48,
  "b_budget": 24,
  "requires_physics": [
    "NRQ-A16",
    "NRQ-A18",
    "NRQ-A21"
  ]
}
```
