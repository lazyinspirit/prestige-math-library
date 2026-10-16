---
page: adversary-methods-and-quantum-query-complexity
title: "Adversary Methods and Quantum Query Complexity"
status: draft
requires:
  - reversible-arithmetic-and-oracle-conversion
  - quantum-phase-estimation
  - convex-and-semicontinuous-functions-on-rn
  - inner-product-spaces-and-orthogonality
  - the-spectral-theorem-and-singular-value-decomposition
  - controlled-gates-phase-and-entanglement
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - computational-problems-promises-and-cost-models
  - registers-tensor-products-and-partial-trace
  - reversible-computation-ancillas-and-coherent-oracles
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - uniform-circuit-families-promise-problems-and-complexity
  - amplitude-estimation-and-counting
items:
  - "lem-qa-16-finite-sdp-strong-duality"
  - "lem-qa-16-schur-product-psd"
  - "lem-qa-16-effective-spectral-gap"
  - "lem-qa-16-query-unitary-normal-form"
  - "def-qa-16-boolean-query-domain"
  - "alg-qa-16-controlled-consistency-reflection"
  - "def-qa-16-input-mismatch-matrices"
  - "def-qa-16-query-address-projectors"
  - "def-qa-16-filtered-gamma2"
  - "lem-qa-16-general-adversary-finite-and-attained"
  - "thm-qa-16-controlled-consistency-reflection-correct"
  - "def-qa-16-general-adversary-bound"
  - "lem-qa-16-filtered-gamma2-well-defined"
  - "thm-qa-16-controlled-consistency-reflection-query-cost"
  - "def-qa-16-nonnegative-adversary-bound"
  - "lem-qa-16-adversary-progress-endpoints"
  - "lem-qa-16-nonconstant-adversary-at-least-one"
  - "lem-qa-16-one-query-progress-change"
  - "thm-qa-16-dual-vector-characterization"
  - "alg-qa-16-dual-adversary-reflection-evaluator"
  - "lem-qa-16-nonnegative-dual-overlap-upper-bound"
  - "prop-qa-16-general-versus-nonnegative-adversary"
  - "thm-qa-16-filtered-gamma-adversary-equality"
  - "thm-qa-16-general-adversary-lower-bound"
  - "prop-qa-16-ambainis-base-separation"
  - "thm-qa-16-adversary-composition-lower-bound"
  - "thm-qa-16-dual-evaluator-success"
  - "thm-qa-16-dual-evaluator-query-cost"
  - "thm-qa-16-general-adversary-tightness"
examples: []
---

This page fixes the finite partial Boolean query model and develops the signed general adversary method with the same XOR oracle and operator-norm convention throughout. It first proves the finite SDP and Gram-factorization facts used in the dual program, then proves the mismatch-mask progress bound and its bounded-error endpoints. The dual vector characterization is derived from an explicit finite SDP and its block-matrix dual; in the Boolean case it agrees exactly with the filtered γ₂ factorization value.

The upper construction starts from an attained dual certificate, forms the input-consistency reflection using two ordinary XOR queries, and combines it with the input-independent reflection onto the one-witness span. Phase estimation uses M≥512A and the effective spectral gap to give bounded-error evaluation in O(A) queries. Query cost is kept separate from all nonoracle gates and witness-span synthesis.

The companion examples page evaluates a balanced OR certificate and gives an explicit signed matrix for the sorted four-bit Ambainis function. The source treatment corrects the stale route that used only the 2009 span-program theorem for tightness: its theorem carries a logarithmic overhead, while the later state-conversion and reflection construction supplies the constant-factor upper bound.