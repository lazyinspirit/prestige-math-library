---
page: fredholm-determinants-and-the-lidskii-trace-formula
title: Fredholm Determinants and the Lidskii Trace Formula
status: draft
items:
  - def-algebraic-multiplicity-for-compact-operators
  - lem-finite-rank-compressions-converge-in-trace-norm
  - def-hilbert-exterior-power-and-induced-operator
  - lem-trace-norm-of-hilbert-exterior-powers
  - lem-weyl-eigenvalue-singular-value-inequalities
  - lem-diagonal-trace-class-operator-on-ell-two
  - lem-separable-trace-class-determinant-construction
  - lem-fredholm-determinant-trace-norm-continuity-and-growth
  - lem-fredholm-determinant-logarithmic-derivative
  - lem-fredholm-determinant-zeros-and-algebraic-multiplicities
  - lem-quasinilpotent-trace-class-operator-has-zero-trace
  - lem-generalized-eigenspace-trace-decomposition
  - lem-fredholm-determinant-spectral-product-from-power-traces
  - lem-arbitrary-hilbert-fredholm-determinant-from-separable-support
  - def-fredholm-determinant
  - prop-fredholm-determinant-properties-for-trace-class-operators
  - thm-lidskii-for-trace-class-operators
examples: []
---

This page builds a local Fredholm determinant theory for trace-class operators
on complex Hilbert spaces. The construction begins on separable spaces with
exterior powers and their induced operators; singular-value estimates and
finite-rank compressions supply the trace-norm control needed for the
determinant series. The resulting determinant is entire, normalized at zero,
and has trace-norm continuity, growth, and multiplicativity properties.

The analytic results identify its logarithmic derivative and prove that its
zeros occur exactly at the noninvertibility parameters, with order equal to the
algebraic multiplicity of the corresponding nonzero eigenvalue. Algebraic
multiplicity is defined through the stabilized generalized eigenspace of a
compact operator. For the trace formula, a trace-class quasinilpotent operator
has trace zero, and the generalized-eigenspace decomposition computes the trace
through the nonzero eigenvalues. This decomposition uses invariant subspaces
and quotient/compression arguments; invariance alone does not make a subspace
reducing.

The trace-power and logarithmic-derivative argument gives the spectral product
for the local determinant. A final support theorem extends the determinant to
arbitrary complex Hilbert spaces by restricting to a separable reducing
support, and proves that the value is independent of the chosen support. AC is
stated where the nuclear representation, Hilbert projection, or spectral
multiplicity inputs require it; the rank-one example separately records the
library's linear-first inner-product convention.

The published determinant definition, its arbitrary-space properties, and
Lidskii's trace formula now follow these local lemmas on this page. The
definition uses the support construction; the properties transfer the local
separable estimates and identities through common supports; and the trace
formula differentiates the locally uniform product at zero.
