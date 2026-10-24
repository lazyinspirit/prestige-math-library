---
page: qma-verification-and-local-hamiltonian
title: "QMA Verification and Local Hamiltonian"
status: published
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - the-spectral-theorem-and-singular-value-decomposition
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - the-polynomial-hierarchy-and-relativization
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - measurements-povms-and-instruments
  - registers-tensor-products-and-partial-trace
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - approximate-universality-and-solovay-kitaev
  - randomized-complexity-and-amplification
  - matrices-and-the-matrix-of-a-linear-map
  - effective-numberings-reductions-resources-and-randomness
items:
  - def-qa-33-effective-finite-matrix-encoding
  - lem-qa-33-bernstein-square-root-bound
  - lem-qa-33-near-unitary-polar-correction
  - lem-qa-33-projection-lemma
  - lem-qa-33-normalized-clifford-t-su2-package-dense
  - def-qa-33-k-local-hamiltonian-promise
  - def-qa-33-witness-verifier-interface
  - lem-qa-33-finite-dimensional-unitary-synthesis
  - lem-qa-33-algebraic-term-rationalization
  - lem-qa-33-fixed-arity-local-measurement-synthesis
  - lem-qa-33-uniform-programmed-circuit-interpreter
  - lem-qa-33-witness-acceptance-effect
  - def-qa-33-qma-promise-class
  - alg-qa-33-qma-parallel-majority-amplification
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - def-qa-33-qma-completeness
  - thm-qa-33-pure-witness-suffices
  - lem-qa-33-feynman-propagation-path-gap
  - lem-qa-33-kkr-legal-clock-restriction
  - thm-qa-33-qma-amplification-entangled-witness-soundness
  - lem-qa-33-feynman-input-output-penalties
  - lem-qa-33-kkr-one-qubit-propagation-restriction
  - thm-qa-33-local-hamiltonian-in-qma
  - lem-qa-33-geometric-soundness-bound
  - lem-qa-33-kkr-two-qubit-propagation-restriction
  - lem-qa-33-unary-clock-locality
  - lem-qa-33-kkr-initial-state-restriction
  - thm-qa-33-5-local-hamiltonian-qma-complete
  - thm-qa-33-2-local-hamiltonian-qma-complete
examples: []
---

This page defines QMA verifiers over the QC14 full-list uniform circuit model, with an explicit witness register, zero-initialized verifier workspace, and an acceptance effect obtained by compression to the witness. It proves entangled-witness parallel amplification by an operator moment bound. It then proves matrix-encoded fixed-locality Hamiltonian membership through generated finite-arity measurements and circuit uniformization.

The hardness route constructs the unary-clock Feynman–Kitaev history Hamiltonian and proves its path gap, endpoint penalties, geometric soundness bound, and 5-locality. The 2-local route follows KKR’s four successive restrictions: legal unary clocks, one-qubit propagation, controlled-phase propagation, and initialized inputs. Each restriction has its own norm and penalty budget. Rational local entries and promise thresholds are produced with an explicit inverse-polynomial gap.
