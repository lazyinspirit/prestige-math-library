---
id: thm-finite-sectional-forward-euler-positivity-and-conservation
kind: theorem
title: The sectional forward-Euler step is positive and conserves augmented mass
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-finite-sectional-forward-euler-positivity-cfl
  - thm-finite-sectional-positivity-and-mass-reservoir-conservation
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the update is a finite exact-arithmetic formula.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.2
      url: https://fncbook.com/euler/
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, §§III.2–III.3"
      url: https://www.unige.ch/~hairer/poly/chap3.pdf
---

## Statement

For a nonnegative finite sectional state, if $h\Lambda_i(n)\le1$ for every bin, the successful step of [[alg-finite-sectional-forward-euler-positivity-cfl]] has $n_i^+\ge0$, $L^+\ge0$, and

$$\sum_i x_i n_i^+ + L^+=\sum_i x_i n_i+L.$$

## Facts & Assumptions

**Given:** A valid grid state $n_i,L\ge0$, a step $h>0$, and the CFL inequalities in the Statement.

[F1] [[alg-finite-sectional-forward-euler-positivity-cfl]]: the update is $(n^+,L^+)=(n,L)+hF(n,L)$ and $\Lambda_i(n)=\sum_jK_{ij}n_j+\beta_i$.

[F2] [[thm-finite-sectional-positivity-and-mass-reservoir-conservation]]: every event has nonnegative gains, loss terms proportional to their consumed parent coordinates, and zero augmented mass increment.

## Proof

1.1 For each bin, write $F_i(n)=G_i(n)-n_i\Lambda_i(n)$, where $G_i(n)\ge0$ is the total birth rate. This is the event decomposition of [F2]: the total aggregation loss of parent $i$ is $n_i\sum_jK_{ij}n_j$ under the ordered-pair convention, and its fragmentation loss is $\beta_i n_i$. Thus $n_i^+=n_i(1-h\Lambda_i(n))+hG_i(n)\ge0$ by the CFL condition. [given, F1, F2, algebra]

2.1 The reservoir update adds $h$ times a nonnegative overflow-mass rate, so $L^+\ge0$. The exact vector-field increment has zero augmented mass by [F2]; multiplying by $h$ and adding the unchanged initial mass proves the displayed identity. [given, F1, F2, algebra] ∎

