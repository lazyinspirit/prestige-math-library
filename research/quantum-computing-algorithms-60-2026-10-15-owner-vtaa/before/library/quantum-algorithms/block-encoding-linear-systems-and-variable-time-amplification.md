---
page: block-encoding-linear-systems-and-variable-time-amplification
title: Block-Encoding Linear Systems and Variable-Time Amplification
status: draft
items:
  - lem-qa-27-even-sign-window
  - def-qa-27-variable-time-model
  - def-qa-27-block-encoded-qlsp
  - lem-qa-27-lcu-projected-block-identity
  - lem-qa-27-supported-pseudoinverse-target
  - alg-qa-27-qsvt-pseudoinverse
  - def-qa-27-cks-sparse-oracle-model
  - thm-qa-27-pseudoinverse-polynomial-degree
  - thm-qa-27-vtaa-amplification
  - thm-qa-27-qsvt-inverse-state-cost
  - alg-qa-27-cks-variable-time-linear-solver
  - lem-qa-27-cks-stopping-time-instantiation
  - thm-qa-27-cks-linear-condition-guarantee
examples: []
requires:
  - quantum-singular-value-transformation
  - hhl-phase-estimation-linear-systems
  - circuit-syntax-denotational-semantics-and-measurement
  - reversible-computation-ancillas-and-coherent-oracles
  - controlled-gates-phase-and-entanglement
  - block-encodings
  - the-spectral-theorem-and-singular-value-decomposition
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - uniform-circuit-families-promise-problems-and-complexity
  - amplitude-estimation-and-counting
  - qubitization-and-optimal-hamiltonian-simulation
---

This page fixes the block-encoded QLSP promise, its normalization $\delta=\gamma/\alpha$, and the required state-preparation and controlled/inverse access. The supported pseudoinverse target is proved in finite singular coordinates. The fixed-time QSVT route applies the odd transform to the adjoint PUE so the domain and codomain spaces are correct; its success probability depends on the input state and its crude bound is quadratic in $1/\delta$. The QA27 degree and success-cost statements preserve the advertised source claims, with the OP1A polynomial-generation proof gap marked explicitly.

The second route records the full sparse CKS access contract, including the reverse-location and in-place reversible operations required by the QA25 sparse block construction. Its finite OP6 algorithm retains all Fourier, GPE, RelProb, CapAmplify, coefficient-table, failure, and resource instructions. The standard variable-time theorem and its CKS stopping-time and condition-number consequences remain escalated until the local proofs establish the stopping analysis and show that the capped/rounded constructor fits the source bounds. The QA25 simulator carriers are present as current draft suppliers, but their Step-1 records remain escalated; the declared interfaces are not acceptance evidence.

The corrected even-window lemma proves the sign-window range needed by the OP1A cutoff directly. It does not rely on the inconsistent printed formula in Gilyén et al. Lemma 29 and does not discharge the remaining inverse, interpolation, certificate-termination, or bit-cost obligations. The LCU identity is conditional on a separately supplied PREPARE and SELECT circuit. No choice axiom, physical postulate, or cost-free data-loading assumption is used.
