---
page: quantum-information-measures
title: "Quantum Information Measures"
status: draft
requires:
  - finite-alphabet-entropy-and-divergence
  - trace-distance-fidelity-and-information-limits
  - knill-laflamme-recovery-and-subsystem-codes
  - trust-region-and-cubic-regularization-methods
items:
  - def-it-von-neumann-entropy
  - lem-it-partial-traces-of-a-state-are-states
  - lem-it-finite-cq-block-sum-is-a-state
  - lem-it-inverse-compression-resolvent
  - lem-it-finite-classical-kl-nonnegative-equality
  - lem-it-finite-povm-measurement-channel
  - def-it-finite-dimensional-quantum-relative-entropy
  - def-it-finite-quantum-information-measures
  - lem-it-operator-jensen-negative-log
  - def-it-classical-quantum-state-and-holevo-information
  - lem-it-quantum-entropy-support-and-finiteness
  - lem-it-relative-modular-representation
  - lem-it-quantum-relative-entropy-support-regularization
  - lem-it-quantum-relative-entropy-isometric-invariance
  - thm-it-finite-quantum-conditional-mutual-information-identities
  - thm-it-quantum-relative-entropy-joint-convexity
  - thm-it-quantum-entropy-identities
  - thm-it-quantum-relative-entropy-partial-trace-data-processing
  - thm-it-quantum-relative-entropy-channel-data-processing
  - thm-it-quantum-relative-entropy-nonnegative-equality
  - thm-it-holevo-measurement-bound
examples: []
---

This page defines finite-dimensional von Neumann entropy, support-sensitive quantum relative entropy, quantum mutual and conditional information, and classical-quantum ensembles under the library's linear-first inner-product convention and natural-log nats units. It proves the finite entropy identities and Holevo identity, joint convexity and partial-trace/channel data processing for quantum relative entropy, its nonnegativity with equality exactly for equal states, and the finite Holevo measurement bound. Conditional entropy and conditional mutual information are given as entropy-form definitions; no nonnegativity claim for either is included.
