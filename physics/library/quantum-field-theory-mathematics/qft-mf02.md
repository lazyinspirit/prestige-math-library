---
page: qft-mf02
title: Scalar future mass-shell measure and test restriction
status: draft
requires: ["qft-mf01", "sr-spacetime-primitives", "smooth-partitions-of-unity-and-exhaustions"]
items:
  - def-qft-scalar-mass-shell
  - lem-qft-mass-shell-measure-invariant
  - lem-qft-mass-shell-test-range-dense
  - lem-qft-mass-shell-test-restriction-continuity
  - lem-qft-fock-unitary-lift
  - lem-qft-scalar-poincare-action
  - lem-qft-smeared-free-scalar
  - lem-qft-scalar-causal-commutator
  - lem-qft-scalar-local-weyl-algebra
examples: []
---

This page fixes the scalar future-shell coordinates, the positive-energy
measure, Fourier restriction, and phase convention. It keeps the parameter
$\mu$ as an inverse-length mathematical shell parameter. The local proofs
establish Lorentz invariance of the measure, density and continuity of
Schwartz restrictions, the one-particle Poincare action, and the unitary Fock
lift needed by the smeared field. The field is defined only by Schwartz
smearing; no point field is introduced.

The free-field argument is conditional on the inspected QFT-MF01 draft
interfaces for Fock sectors, CCR, Segal fields, and second-quantized
translation generators. The actual Segal supplier has
$\Phi_{\rm Segal}(h)=(a^\dagger(h)+a(h))/\sqrt2$. Accordingly, the scalar real
field is $\sqrt2\,\Phi_{\rm Segal}(K_\mu f)$ and its Weyl generator is
$W_{\rm Segal}(\sqrt2K_\mu f)$; this gives the stated scalar Weyl phase.
Every result is a mathematical deduction in the specified representation,
not an empirical observation or a measurement claim.

Tong and Srednicki give independent full-text treatments of the shell
normalization and scalar field. Fewster and Rejzner give a separate
algebraic treatment of causal propagation and local Weyl algebras. The page's
arguments retain these sources' convention differences while proving the
needed formulas with the conventions stated here.
