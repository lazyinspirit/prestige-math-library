---
page: minimax-approximation-and-remez-algorithms
title: "Minimax approximation and Remez algorithms"
status: draft
items:
  - def-na-best-polynomial-uniform-error
  - lem-na-extrema-sign-block-polynomial
  - lem-na-polynomial-alternating-signs-force-root-count
  - lem-na-polynomial-coefficient-bound-from-fixed-nodes
  - lem-na-polynomial-interpolation-alternating-weight-annihilator
  - lem-na-reduced-rational-representation-unique
  - def-na-weighted-rational-minimax-family
  - lem-na-polynomial-remez-system-invertible
  - thm-na-best-polynomial-approximation-exists
  - thm-na-polynomial-equioscillation-certificate
  - alg-na-minimax-approximation-and-remez-algorithms
  - lem-na-rational-perturbation-space
  - thm-na-best-weighted-rational-approximation-exists
  - thm-na-polynomial-alternation-necessity
  - cor-na-best-polynomial-approximation-unique
  - thm-na-polynomial-remez-budget-termination
  - thm-na-weighted-rational-alternation-characterization
  - alg-na-weighted-rational-remez-exchange
  - thm-na-weighted-rational-remez-budget-termination
examples: []
---

For a continuous real target on a nondegenerate compact interval, the page
proves existence of a best polynomial approximant, the n+2 alternating-extrema
criterion for nonzero error, and uniqueness. It defines finite-budget polynomial
Remez exchange with a distinct ordered reference set, an invertible alternation
system, and an exact global-extrema oracle; a returned exact equioscillation
certificate proves optimality. No iterative convergence claim is made.

The rational family uses real reduced numerator and denominator degrees at most
m and n, a strictly positive continuous weight, and a denominator that is
strictly positive on the interval. Its defect is d and its alternation count is
m+n+2-d; the normal case d=0 gives m+n+2, while defective cases use the smaller
count. The rational exchange procedure has an explicit nonlinear-solver,
singularity, defect, oracle, and finite-budget status contract. No m+n+2 claim
is copied into a defective case.
