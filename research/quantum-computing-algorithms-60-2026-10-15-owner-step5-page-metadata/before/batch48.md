---
page: quantum-singular-value-transformation
title: Quantum Singular-Value Transformation
status: draft
items: [def-qa-24-pue-svd-data, lem-qa-24-pue-svd-invariant-subspaces, def-qa-24-singular-value-transform, alg-qa-24-qsvt, lem-qa-24-singular-transform-basis-independence, thm-qa-24-projector-phase-implementation, thm-qa-24-qsvt-query-count, thm-qa-24-qsvt-singular-space-action, lem-qa-24-qsvt-robustness-amplitude-bound, thm-qa-24-real-polynomial-extraction, thm-qa-24-qsvt-error-and-resource-bound]
examples: []
requires:
  - block-encodings
  - quantum-signal-processing
  - the-spectral-theorem-and-singular-value-decomposition
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - inner-product-spaces-and-orthogonality
  - controlled-gates-phase-and-entanglement
  - circuit-syntax-denotational-semantics-and-measurement
  - uniform-circuit-families-promise-problems-and-complexity
---

The page defines a finite projected-unitary encoding of a rectangular map, proves its singular-plane decomposition, and fixes odd and even singular-value transforms, including their distinct kernel conventions. The alternating $U,U^*$ sequence uses the Hermitian-reflection signal convention $W_R$ and phases about the declared right and left projectors. The exact block action treats repeated singular values, $sigma=0$, $sigma=1$, unmatched kernels, and zero-dimensional spaces.

A bounded real parity polynomial is extracted by coherently selecting the phase lists $\Phi$ and $-\Phi$ and projecting the control onto $|+\rangle$. In each paired slot, two explicitly supplied controlled-reflection calls toggle a clean ancilla; an unconditional $R_z(2\phi)$ and a branch-controlled $R_z(-4\phi)$ give the two signed projector phases. Their rotation and reflection costs are counted separately. The resource statement also charges signal calls, inverse access, phase generation, and finite-gate compilation; a matrix alone supplies none of these operations.

For normalized block error $\varepsilon_{\mathrm{BE}}$, scalar approximation error $\eta_{\mathrm{poly}}$, and phase implementation errors $\zeta_\ell$, the proved operator-norm bound is $\eta_{\mathrm{poly}}+4d\sqrt{\varepsilon_{\mathrm{BE}}}+\sum_\ell\zeta_\ell$. The robustness estimate is reproved here from finite unitary completions and a two-copy rotation. No asymptotic gate or classical bit-time bound is inferred from an abstract phase list.
