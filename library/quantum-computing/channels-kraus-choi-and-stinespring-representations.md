---
page: channels-kraus-choi-and-stinespring-representations
title: Channels, Kraus, Choi, and Stinespring Representations
status: draft
items:
  - def-qc-kraus-representation
  - lem-qc-linear-isometry-adjoint-identities
  - def-qc-unitary-conjugation-channel
  - thm-qc-trace-preserving-kraus-normalization
  - prop-qc-unitary-conjugation-global-phase-invariant
  - def-qc-choi-matrix
  - def-qc-isometric-stinespring-representation
  - lem-qc-tensor-products-of-operator-matrix-units-form-a-basis
  - lem-qc-positive-choi-matrix-yields-kraus-operators
  - def-qc-quantum-channel
  - lem-qc-complete-positivity-implies-choi-positivity
  - thm-qc-kraus-map-completely-positive
  - thm-qc-isometry-partial-trace-is-channel
  - thm-qc-kraus-choi-equivalence
  - prop-qc-unitary-conjugation-is-channel
  - thm-qc-channels-compose-and-tensor
  - thm-qc-choi-trace-preservation-condition
  - thm-qc-finite-stinespring-dilation
  - thm-qc-finite-kraus-choi-stinespring-equivalence
examples: []
requires:
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - inner-product-spaces-and-orthogonality
  - linear-maps-rank-nullity-and-quotient-spaces
  - matrices-and-the-matrix-of-a-linear-map
  - measurements-povms-and-instruments
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - registers-tensor-products-and-partial-trace
  - the-spectral-theorem-and-singular-value-decomposition
---

This page develops finite-dimensional complex-linear maps between full operator spaces. It fixes the repository inner product as linear in the first argument and the Choi matrix as input factor first, output factor second. Complete positivity and trace preservation are properties on every operator, with trace preservation distinct from trace nonincrease. The page proves the finite Kraus, Choi, and isometric Stinespring characterizations, their composition and tensor rules, and unitary conjugation facts. Zero-dimensional spaces and empty finite families are treated where the claims require them. The statements are mathematical and assert no physical postulate. A global scalar phase leaves a single conjugation map unchanged; controlled uses are outside that claim.
