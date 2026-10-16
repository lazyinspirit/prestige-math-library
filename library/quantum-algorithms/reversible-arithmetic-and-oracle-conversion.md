---
page: reversible-arithmetic-and-oracle-conversion
title: "Reversible Arithmetic and Oracle Conversion"
status: published
requires:
  - computational-problems-promises-and-cost-models
  - congruences-and-the-chinese-remainder-theorem
  - reversible-computation-ancillas-and-coherent-oracles
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - registers-tensor-products-and-partial-trace
  - controlled-gates-phase-and-entanglement
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - circuit-syntax-denotational-semantics-and-measurement
items:
  - def-qa-standard-bit-query
  - def-qa-phase-query
  - thm-qa-phase-kickback
  - thm-qa-bit-query-to-phase-query
  - thm-qa-controlled-phase-query-to-bit-query
  - thm-qa-compute-copy-uncompute-clean-query
  - def-qa-binary-field-f2
  - def-qa-binary-dot-product
  - alg-qa-reversible-binary-dot-product
  - thm-qa-reversible-binary-dot-product-correct-and-cost
  - thm-qa-global-phase-under-control
examples: []
---

This page fixes the standard XOR query and the binary phase query for a total Boolean function. It proves phase kickback, the conversion from a standard query using an explicitly prepared $|-\rangle$ target, and the reverse conversion only when controlled phase access is granted. Query calls and nonoracle gate costs remain separate. The page also gives a clean compute-copy-uncompute argument, the two-residue operations and parity dot product, and an exact reversible Toffoli circuit. A constant phase is invisible when used alone but becomes a relative phase under an explicit control.

Each exact circuit count uses a local operation model that permits its named gates as callable members of the declared finite gate alphabet; defining a gate matrix alone does not grant an operation call. Explicit oracle calls remain separate from nonoracle gate occurrences.
