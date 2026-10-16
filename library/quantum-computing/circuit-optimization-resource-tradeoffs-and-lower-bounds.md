---
page: circuit-optimization-resource-tradeoffs-and-lower-bounds
title: Circuit Optimization, Resource Tradeoffs, and Lower Bounds
status: draft
items:
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-logspace-uniform-iterated-addition-tc0
  - lem-qc-logspace-uniform-iterated-multiplication-tc0
  - def-qc-bqtisp-model
  - lem-qc-unbounded-error-tie-normalization
  - lem-qc-uniform-probabilistic-clocked-simulation
  - lem-qc-bounded-space-virtual-input-simulation
  - lem-qc-logspace-predicates-in-linear-counting-hierarchy
  - thm-qc-uniform-threshold-iterated-integer-arithmetic
  - lem-qc-basis-query-time-normalization
  - lem-qc-logspace-uniform-cook-formula-encoding
  - lem-qc-counting-time-space-to-linear-hierarchy
  - thm-qc-probabilistic-polynomial-time-hierarchy
  - lem-qc-tight-majority-formula-completeness
  - thm-qc-unbounded-error-counting-time-space-alternative
  - lem-qc-vmw-fh-density-and-base-net
  - lem-qc-multiplexed-rz-gray-code
  - alg-qc-basic-clifford-t-rewrite
  - lem-qc-circuit-resource-composition
  - lem-qc-unoptimized-qsd-recursive-decomposition-and-count
  - lem-qc-vmw-finite-precision-sk-compiler
  - def-qc-circuit-optimization-task
  - lem-qc-ninefold-nearest-neighbor-multiplexor-routing
  - thm-qc-basic-rewrite-correct-and-terminating
  - thm-qc-clean-ancilla-multicontrolled-tradeoff
  - thm-qc-nearest-neighbor-cnot-overhead
  - thm-qc-qsd-cnot-upper-bound
  - lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition
  - thm-qc-bqtisp-to-ptisp-simulation
  - thm-qc-generic-circuit-count-lower-bound
  - thm-qc-counting-hierarchy-time-space-lower-bound
examples: []
requires:
  - approximate-universality-and-solovay-kitaev
  - circuit-syntax-denotational-semantics-and-measurement
  - clifford-t-exact-and-approximate-synthesis
  - continuous-gate-universality-and-exact-synthesis
  - counting-complexity-and-sharpp
  - effective-numberings-reductions-resources-and-randomness
  - formal-languages-encodings-and-decision-problems
  - matrix-norms-condition-numbers-and-numerical-stability
  - reversible-computation-ancillas-and-coherent-oracles
  - uniform-circuit-families-promise-problems-and-complexity
  - classical-zero-free-region-and-the-prime-number-theorem
---

This page separates exact optimization tasks from locally terminating rewrites and construction upper bounds. The CNOT counts are not total synthesis costs; the nearest-neighbor factor is specific to the cited line architecture; clean-workspace use requires exact return. Circuit counting fixes a finite gate alphabet, input encoding, ancilla convention and one charged measured output bit. The lower-bound claim is “almost all Boolean functions,” not a statement about each function. The quantum time-space simulation uses the published VMW model with charged operand extent and the explicitly derived classical basis profile. Its finite-precision compiler, fixed-arity effective gate factors, and the separately charged basis-query and majority-reduction bridges are local suppliers; the distinct historical head-access profiles are kept separate.
