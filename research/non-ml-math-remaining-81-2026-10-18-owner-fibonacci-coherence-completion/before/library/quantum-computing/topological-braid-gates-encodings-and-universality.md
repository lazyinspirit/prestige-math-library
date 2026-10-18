---
page: topological-braid-gates-encodings-and-universality
title: Topological Braid Gates, Encodings, and Universality
status: draft
items:
- def-qc-tqc-physical-braid-interface
- lem-qc-tqc-special-unitary-connected
- def-qc-tqc-fixed-charge-encoding
- def-qc-tqc-logical-error-and-leakage
- def-qc-tqc-braid-action-from-fusion-data
- lem-qc-tqc-zero-logical-error-forces-zero-leakage
- thm-qc-tqc-block-approximation-error
- def-qc-tqc-ising-majorana-interface
- def-qc-tqc-projective-gate-and-metric
- def-qc-tqc-six-anyon-encoded-subspace
- ex-qc-tqc-fibonacci-qubit-matrices
- ex-qc-tqc-ising-three-anyon-clifford
- lem-qc-tqc-determinant-character-phase
- lem-qc-tqc-fibonacci-b6-path-projectors-and-artin
- lem-qc-tqc-fibonacci-coefficient-ring-specialization
- lem-qc-tqc-leakage-logical-error-accumulation
- thm-qc-tqc-braid-action-unitary-and-artin
- cex-qc-tqc-controlled-global-phase
- def-qc-tqc-universality-notions
- lem-qc-tqc-pu2-is-so3
- thm-qc-tqc-b6-su5-density
- thm-qc-tqc-b6-su8-density
- thm-qc-tqc-ising-braids-clifford-only
- lem-qc-tqc-b6-joint-su5-su8-density
- thm-qc-tqc-fibonacci-single-qubit-density
- lem-qc-tqc-su2-determinant-lifts-dense
- thm-qc-tqc-approximate-encoded-two-qubit-gate
- thm-qc-tqc-spectator-extension
- thm-qc-tqc-arbitrary-n-register-universality
examples: []
requires:
- unitary-fusion-spaces-f-and-r-symbols-and-anyon-models
- pauli-and-clifford-groups-binary-symplectic-tableaux
- approximate-universality-and-solovay-kitaev
---
This page develops unitary braid actions on fixed-total-charge fusion spaces, then separates projective phase, logical block error, and leakage. It verifies the three-anyon Ising matrices directly and proves the multi-anyon Majorana Clifford restriction under an explicit channel-identification interface. For the fixed Fibonacci F/R convention, it verifies the three-anyon matrices and exact joint SU(5) × SU(8) density of the two six-strand path-matrix blocks using finite algebraic certificates. Triple-anyon encodings extend these conditional gates to arbitrary finite registers with explicit operator-norm, logical-error, and leakage bounds. The physical interface is conditional on a realized fusion space and its specified exchange action. No exact leakage-free entangler or useful joint braid-length bound is asserted; common braid phases must be tracked under coherent control. The QC25 Fibonacci data carrier contains a false factor in its final displayed hexagon entry, so category coherence and associator-dependent code statements remain escalated. The Ising data carrier supplies only the three-anyon sector; the all-m Majorana channel identification is an explicit interface hypothesis, not a consequence claimed from that carrier.
