---
page: circuit-optimization-resource-tradeoffs-and-lower-bounds
title: Circuit Optimization, Resource Tradeoffs, and Lower Bounds
status: draft
items:
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-logspace-uniform-cook-formula-encoding
  - lem-qc-logspace-uniform-iterated-multiplication-tc0
  - def-qc-bqtisp-model
  - lem-qc-logspace-predicates-in-linear-counting-hierarchy
  - lem-qc-unbounded-error-tie-normalization
  - lem-qc-uniform-probabilistic-clocked-simulation
  - thm-qc-uniform-threshold-iterated-integer-arithmetic
  - lem-qc-counting-time-space-to-linear-hierarchy
  - lem-qc-tight-majority-formula-completeness
  - thm-qc-probabilistic-polynomial-time-hierarchy
  - thm-qc-unbounded-error-counting-time-space-alternative
  - lem-qc-multiplexed-rz-gray-code
  - alg-qc-basic-clifford-t-rewrite
  - lem-qc-circuit-resource-composition
  - lem-qc-unoptimized-qsd-recursive-decomposition-and-count
  - def-qc-circuit-optimization-task
  - lem-qc-ninefold-nearest-neighbor-multiplexor-routing
  - thm-qc-basic-rewrite-correct-and-terminating
  - thm-qc-bqtisp-to-ptisp-simulation
  - thm-qc-clean-ancilla-multicontrolled-tradeoff
  - thm-qc-counting-hierarchy-time-space-lower-bound
  - thm-qc-nearest-neighbor-cnot-overhead
  - thm-qc-qsd-cnot-upper-bound
  - thm-qc-generic-circuit-count-lower-bound
examples: []
---

This page separates exact optimization tasks from locally terminating rewrites and construction upper bounds. The CNOT counts are not total synthesis costs; the nearest-neighbor factor is specific to the cited line architecture; clean-workspace use requires exact return. Circuit counting fixes a finite gate alphabet, input encoding, ancilla convention and one charged measured output bit. The lower-bound claim is “almost all Boolean functions,” not a statement about each function. The quantum time-space claim remains a target pending a proved bridge between the VMW random-access model and the sequential convention used by the Allender reduction.
