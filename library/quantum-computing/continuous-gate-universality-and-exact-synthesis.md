---
page: continuous-gate-universality-and-exact-synthesis
title: Continuous-Gate Universality and Exact Synthesis
status: draft
items:
  - def-qc-global-phase-equivalence
  - lem-qc-two-unitary-block-demultiplexing
  - lem-qc-unitary-group-cayley-charts
  - thm-qc-cosine-sine-block-decomposition
  - def-qc-two-level-unitary
  - alg-qc-two-level-unitary-elimination
  - thm-qc-two-level-unitary-elimination-correct
  - thm-qc-one-qubit-euler-decomposition
  - thm-qc-two-qubit-cartan-decomposition
  - lem-qc-global-phase-under-control
  - lem-qc-generic-cnot-parameter-count
  - lem-qc-multiplexed-axis-rotation-gray-code
  - thm-qc-one-control-unitary-two-cnot
  - thm-qc-two-qubit-unitary-three-cnot-synthesis
  - lem-qc-terminal-diagonal-migration
  - lem-qc-recursive-qsd-central-cz-absorption
  - thm-qc-generic-unitary-cnot-lower-bound
  - lem-qc-borrowed-bit-multicontrolled-x-linear
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
  - thm-qc-multicontrolled-ancilla-resource-tradeoff
  - alg-qc-two-level-gate-to-elementary-gates
  - thm-qc-two-level-gate-synthesis-correct
examples: []
requires:
  - circuit-syntax-denotational-semantics-and-measurement
  - controlled-gates-phase-and-entanglement
  - hilbert-space-geometry-and-riesz-representation
  - inner-product-spaces-and-orthogonality
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - reversible-computation-ancillas-and-coherent-oracles
  - root-systems-dynkin-diagrams-and-cartan-killing-classification
  - sard-theorem-and-transversality
  - the-spectral-theorem-and-singular-value-decomposition
  - reeb-stability-and-global-foliation-constructions
  - haar-measure-existence-and-uniqueness
---

This page develops exact matrix synthesis from continuous one-qubit rotations and CNOT gates. Exact matrix equality, including scalar phase, is kept distinct from equality up to global phase. The CNOT upper bound uses a no-ancilla model; the multicontrol trade-off separately states when one clean work bit is supplied and returned. The generic lower bound is an almost-everywhere statement, not a per-unitary bound. Gate counts do not assert numerical decomposition time or finite-precision bit complexity.

The one-qubit rotation signs follow the QC7 convention. The terminal-diagonal lemma proves exact two-CNOT extraction and migration across QSD separators. The borrowed-bit lemma proves the linear multicontrolled-X ladder and exact restoration of arbitrary borrowed states.
