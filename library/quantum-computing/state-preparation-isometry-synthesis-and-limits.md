---
page: state-preparation-isometry-synthesis-and-limits
title: State Preparation, Isometry Synthesis, and Limits
status: draft
items:
  - lem-qc-open-cube-is-not-null
  - def-qc-projective-chord-distance
  - def-qc-projective-space-atlas
  - alg-qc-isometry-unitary-completion
  - lem-qc-projective-chord-distance-formula
  - thm-qc-projective-chart-dimension
  - def-qc-state-preparation-cost-model
  - lem-qc-signed-ray-packing-code
  - def-qc-clean-ancilla-output-projection
  - thm-qc-finite-width-topology-count
  - lem-qc-countable-compact-null-union
  - thm-qc-continuous-parameter-state-preparation-lower-bound
  - thm-qc-discrete-alphabet-approximate-preparation-lower-bound
  - thm-qc-finite-alphabet-exact-nonuniversality
  - alg-qc-state-preparation
  - thm-qc-isometry-completion-and-synthesis
  - lem-qc-prefix-norm-rotation-identities
  - thm-qc-state-preparation-rotation-level-upper-bound
  - thm-qc-amplitude-table-precision-and-compilation
  - thm-qc-state-preparation-cost
examples: []
requires:
  - approximate-universality-and-solovay-kitaev
  - circuit-syntax-denotational-semantics-and-measurement
  - clifford-t-exact-and-approximate-synthesis
  - continuous-gate-universality-and-exact-synthesis
  - controlled-gates-phase-and-entanglement
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - reversible-computation-ancillas-and-coherent-oracles
  - sard-theorem-and-transversality
---

## Overview

This page treats state and isometry preparation as finite mathematical input and circuit problems. It defines amplitude-table, workspace, width, gate, precision and error conventions; constructs an exact prefix-rotation preparation circuit; and proves continuous-parameter and finite-alphabet limits under their stated models. State rays and projective charts remain distinct from vectors, and exact continuous-angle synthesis remains distinct from finite-alphabet approximation. Classical table input, preprocessing, coherent gates, workspace and precision are charged separately. No QRAM or free data loading is assumed.
