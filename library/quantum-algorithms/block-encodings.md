---
page: block-encodings
title: Block Encodings
status: draft
items: [def-qa-22-block-encoding, lem-qa-22-block-compression-contraction, def-qa-22-block-encoding-access-model, alg-qa-22-product-block-encoding, thm-qa-22-adjoint-block-encoding, thm-qa-22-product-block-encoding-correctness, thm-qa-22-long-product-error-recurrence, alg-qa-22-lcu-block-encoding, thm-qa-22-lcu-block-encoding-correctness, thm-qa-22-block-encoding-error-and-query-cost]
examples: []
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - state-preparation-isometry-synthesis-and-limits
  - hilbert-space-geometry-and-riesz-representation
  - the-spectral-theorem-and-singular-value-decomposition
  - registers-tensor-products-and-partial-trace
  - circuit-syntax-denotational-semantics-and-measurement
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - controlled-gates-phase-and-entanglement
  - reversible-computation-ancillas-and-coherent-oracles
---

The page fixes a finite-dimensional convention for representing a matrix as the normalized all-zero compression of a supplied unitary. Rectangular matrices enter only through declared finite isometric input and output embeddings; the compression $\Pi U\Pi$ is not treated as a unitary. The exact and approximate cases use normalized block error, and the normalization $\alpha$ is distinct from every oracle or circuit cost.

The proved results establish contraction, adjoint access, separate-ancilla products, LCU normalization with term-dependent $\alpha_j$, product error propagation, and the longer-product recurrence. The access model keeps forward, inverse and controlled calls, coefficient-state preparation, SELECT, matrix-data access, precision, classical preprocessing, gates and ancillas explicit. These coherent constructions include no measurement or classical-output step. A matrix description alone supplies no circuit or free oracle.
