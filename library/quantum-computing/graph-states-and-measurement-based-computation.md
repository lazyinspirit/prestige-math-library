---
page: graph-states-and-measurement-based-computation
title: "Graph States and Measurement-Based Computation"
status: draft
items: [
  def-qc-binary-adjacency-matrix,
  def-qc-j-gate-and-equatorial-basis,
  lem-qc-j-basis-and-phase-identities,
  def-qc-graph-state,
  lem-qc-cz-matching-pauli-frame-action,
  def-qc-normalized-transport-schedule,
  lem-qc-one-bit-teleportation,
  lem-qc-r-y-r-z-multiplexor-gray-code,
  lem-qc-graph-state-amplitude-formula,
  lem-qc-graph-state-edge-gates-commute,
  def-qc-adaptive-measurement-pattern,
  lem-qc-adaptive-angle-pauli-frame-update,
  lem-qc-normalized-rounds-preserve-circuit,
  lem-qc-transport-encoding-is-simple-and-size-bounded,
  thm-qc-exact-unitary-synthesis-from-qsd,
  lem-qc-graph-state-stabilizer-generators,
  lem-qc-measurement-pattern-for-cz,
  thm-qc-pattern-branch-probabilities-and-zero-branches,
  def-qc-circuit-to-graph-resource-encoding,
  thm-qc-pattern-is-measurement-circuit,
  thm-qc-circuit-simulated-by-adaptive-pattern,
  thm-qc-circuit-pattern-equivalence-and-universality,
  thm-qc-graph-state-unique-stabilizer-ray,
]
examples: []
requires:
  - algebraic-extensions-degree-and-finite-fields
  - bell-states-teleportation-and-dense-coding
  - circuit-syntax-denotational-semantics-and-measurement
  - congruences-and-the-chinese-remainder-theorem
  - continuous-gate-universality-and-exact-synthesis
  - controlled-gates-phase-and-entanglement
  - determinants-of-matrices-over-a-commutative-ring
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - graphs-walks-and-connectivity
  - measurements-povms-and-instruments
  - pauli-and-clifford-groups-binary-symplectic-tableaux
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - stabilizer-circuits-and-gottesman-knill-simulation
  - vector-spaces-and-subspaces
---

This page defines finite graph states over ordered qubit registers and gives their computational-basis and stabilizer descriptions. It formalizes open-graph measurement patterns, exact branch maps, outcome probabilities, zero-probability transcripts, and Pauli-frame corrections. A one-bit teleportation identity and a four-branch CZ gadget support a branchwise circuit-to-pattern construction. The construction normalizes mixed circuit layers explicitly, records global phases, and proves the graph and resource bounds. An exact finite QSD recursion supplies a J/CZ representative for every unitary channel on an ordered $n$-qubit register, including the one-dimensional $n=0$ case; it makes no gate-count or finite-bit synthesis claim. Equivalence is stated at the level of transcript probabilities and corrected output channels; no physical preparation claim is used.
