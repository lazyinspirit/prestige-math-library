---
page: block-encoding-linear-systems-and-variable-time-amplification
title: Block-Encoding Linear Systems and Variable-Time Amplification
status: published
items:
  - lem-qa-27-even-sign-window
  - def-qa-27-variable-time-model
  - def-qa-27-block-encoded-qlsp
  - lem-qa-27-lcu-projected-block-identity
  - lem-qa-27-supported-pseudoinverse-target
  - alg-qa-27-qsvt-pseudoinverse
  - def-qa-27-cks-sparse-oracle-model
  - thm-qa-27-pseudoinverse-polynomial-degree
  - lem-qa-coherent-amplitude-grid-rounding
  - alg-qa-relative-probability-estimation
  - thm-qa-relative-probability-guarantee
  - alg-qa-27-capped-lower-bound-amplification
  - lem-qa-27-capped-lower-bound-amplification
  - lem-qa-27-low-target-amplification
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

This page fixes the block-encoded QLSP promise, its normalization $\delta=\gamma/\alpha$, and the required state-preparation and controlled/inverse access. The supported pseudoinverse target is established in finite singular coordinates. The fixed-time QSVT route applies the odd transform to the adjoint projected-unitary encoding, preserving its domain and codomain. Its finite polynomial generator includes a binomial reciprocal approximation, an erf/Chebyshev sign approximation, a corrected even cutoff, and strict range and reciprocal certificates. Its success probability depends on the input state.

The variable-time route uses orthogonal stopped branches and their root-mean-square stopping time. Generic relative-probability estimation and finite lower-bound amplification retain explicit inverse/control/reflection access, confidence budgets and finite caps. The tight variable-time production expression uses supplied finite probability/schedule certificates and charges their construction, including any probability-acquisition oracle calls. A distinct finite uniform implementation states its positive probability floor, confidence, estimation overhead and resource cap. The explicit estimated CKS construction specifies the good-or-unfinished projector, requires clean state-preparation work, and budgets simulator and finite-value errors across every QPE call site before using its local low-target, probability-estimation and finite-cap suppliers.

The sparse CKS constructor retains its finite Fourier-table mode with explicit positive normalized PREPARE amplitudes, distinct cancelling identity terms at both local and common normalization, and coefficient phases in SELECT. Its table generation, clean work, actual adjoint/control circuits and implementation errors are separately charged; this construction alone does not certify Fourier approximation, efficient table generation or uncapped termination. It also provides an explicit efficient QSVT inverse mode. The latter uses actual sparse block encodings, gapped phase tests, common normalization, a terminal bad branch, reversible bucket erasure, and a final clean-work success test. Its local stopping, output-error and resource proofs give the nearly linear condition-number query bound; the gate bound is stated only with explicit uniform costs for preparation, sparse access, controlled/inverse circuits, reflections, simulation, and phase implementation. QSVT execution checks the exact returned phase product before use. All coefficient and phase generation, exact algebraic comparison, arithmetic bit implementation and compiler construction costs remain separate; no total bit-time bound follows from the quantum count. The conditional LCU identity does not construct an unspecified SELECT circuit.
