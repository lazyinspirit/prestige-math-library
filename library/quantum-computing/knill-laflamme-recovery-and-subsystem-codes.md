---
page: knill-laflamme-recovery-and-subsystem-codes
title: Knill–Laflamme Recovery and Subsystem Codes
status: draft
items:
  - lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement
  - lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis
  - def-qc-first-factor-partial-trace
  - lem-qc-knill-laflamme-coefficient-matrix-is-positive
  - lem-qc-knill-laflamme-orthogonal-error-basis
  - def-qc-exact-recovery-of-a-quantum-code
  - lem-qc-kraus-operators-of-the-identity-channel-are-scalars
  - lem-qc-orthogonal-error-syndrome-projectors
  - lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form
  - thm-qc-knill-laflamme-explicit-recovery
  - thm-qc-knill-laflamme-necessity
  - cor-qc-distance-corrects-t-errors-and-erasures
  - def-qc-correctable-subsystem-and-gauge-factor
  - ex-qc-degenerate-code-kl-matrix
  - thm-qc-subsystem-knill-laflamme
examples: []
requires:
  - channels-kraus-choi-and-stinespring-representations
  - classical-and-quantum-error-correcting-codes
  - inner-product-spaces-and-orthogonality
  - registers-tensor-products-and-partial-trace
  - the-spectral-theorem-and-singular-value-decomposition
---

This page proves the finite-dimensional Knill–Laflamme recovery criterion,
constructs a trace-preserving syndrome recovery, and extends the criterion
to a protected logical factor with a gauge subsystem. The proofs fix the
library’s linear-first inner-product convention and preserve the tensor-factor
order of the code isometry. A distance corollary distinguishes unknown
errors, whose supports may form a union, from known erasure supports. The
companion page checks the matrix conventions and recovery maps in small
finite-dimensional examples.
