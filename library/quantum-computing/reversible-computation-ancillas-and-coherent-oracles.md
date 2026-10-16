---
page: reversible-computation-ancillas-and-coherent-oracles
title: "Reversible Computation, Ancillas, and Coherent Oracles"
status: published
items:
  - def-qc-clean-and-dirty-ancillas
  - def-qc-toffoli-and-fredkin
  - lem-qc-ancilla-identities-stable-under-reference-and-mixtures
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
  - alg-qc-reversible-embedding
  - lem-qc-fresh-target-not-and-or-gadgets
  - lem-qc-toffoli-clean-target-and-uncomputation
  - thm-qc-clean-uncomputation-restores-workspace
  - thm-qc-reversible-embedding-cost
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-embedding-parallel-depth
  - thm-qc-reversible-xor-oracle-unitary
  - thm-qc-phase-kickback-from-xor-oracle
  - thm-qc-oracle-phase-query-cost-boundary
examples: []
requires:
  - boolean-circuits-and-nonuniform-complexity
  - circuit-syntax-denotational-semantics-and-measurement
  - controlled-gates-phase-and-entanglement
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - turing-machines-configurations-and-computation
---

This page develops reversible Boolean computation with explicit finite circuits and ordered input, work, and target registers. It defines clean and dirty ancilla contracts, Toffoli and Fredkin actions, the compute-copy-uncompute procedure, and a coherent XOR function oracle. The local results prove gate identities, coherent correctness, workspace restoration, and gate/work/depth costs. Oracle invocations, explicit circuit compilation, and controlled access remain distinct resource assumptions.

