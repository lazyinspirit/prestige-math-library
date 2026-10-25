---
page: quantum-walk-search-and-element-distinctness
title: "Quantum-Walk Search and Element Distinctness"
status: published
items: [def-qa-18-marked-set-and-stationary-mass,
        def-qa-18-classical-hitting-time,
        lem-qa-18-absorbing-walk-discriminant-decomposition,
        lem-qa-18-symmetric-compressed-walk-bound,
        thm-qa-18-classical-spectral-hitting-bound,
        def-qa-18-random-access-gate-model,
        alg-qa-18-reversible-walk-finding,
        def-qa-18-element-distinctness-johnson-walk,
        def-qa-18-canonical-skip-list-for-element-distinctness,
        lem-qa-18-johnson-walk-spectrum,
        thm-qa-18-reversible-search-cost,
        alg-qa-18-szegedy-phase-detection,
        lem-qa-18-johnson-stored-data-query-access,
        thm-qa-18-element-distinctness-query-cost,
        thm-qa-18-detection-correctness-cost,
        thm-qa-18-element-distinctness-qr-access-gate-cost]
examples: []
requires:
  - quantum-phase-estimation
  - discrete-quantum-walks-and-szegedy-theory
  - the-polynomial-hierarchy-and-relativization
  - measurements-povms-and-instruments
  - recurrence-transience-and-hitting-times-for-markov-chains
  - the-spectral-theorem-and-singular-value-decomposition
  - registers-tensor-products-and-partial-trace
  - circuit-syntax-denotational-semantics-and-measurement
  - uniform-circuit-families-promise-problems-and-complexity
  - controlled-gates-phase-and-entanglement
  - reversible-computation-ancillas-and-coherent-oracles
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - trigonometric-and-oscillatory-examples-in-one-variable
---

Finite reversible chains give the stationary mass and marked-state promises used by both classical and quantum search. A lazy symmetric chain admits a direct compression estimate for survival outside the marked set; absorbing marked rows turn this estimate into a discriminant decomposition for Szegedy phase detection. The page distinguishes a decision bit from a measured marked label and records state preparation, row access, controlled access, checking, gate operations, precision, and query counts as separate costs.

For element distinctness, the fixed-size lazy Johnson walk stores the function values on an $r$-subset. Its spectrum is proved locally from finite incidence maps, so the absolute gap and the probability of including a fixed colliding pair are explicit. A local stored-data construction supplies coherent row preparation, its controlled inverse, and the proved row-reflection and walk-query bounds. These quantities combine with reversible-walk finding to give the $O(N^{2/3})$ value-query bound. A separate QRAM theorem defines canonical hash-bucket and nested skip-list storage, proves its bounded lookup and update subroutines, and records the uniform-subset and complete row-access gate costs as explicit inputs. An ordinary Boolean-circuit value oracle retains its own reversible gate and explicit-depth costs.
