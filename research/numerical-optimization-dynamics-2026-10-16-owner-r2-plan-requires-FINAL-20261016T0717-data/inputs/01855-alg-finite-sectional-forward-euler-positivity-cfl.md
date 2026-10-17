---
id: alg-finite-sectional-forward-euler-positivity-cfl
kind: algorithm
title: Forward Euler for a finite sectional balance with a positivity CFL
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-sectional-coagulation-fragmentation-balance
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.2
      url: https://fncbook.com/euler/
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, §§III.2–III.3"
      url: https://www.unige.ch/~hairer/poly/chap3.pdf
---

## Definition

Input a valid grid state $(n,L)$ with $n_i\ge0$, a step $h>0$, and the finite sectional event rates of [[alg-finite-sectional-coagulation-fragmentation-balance]]. Compute the total per-particle loss rate

$$\Lambda_i(n)=\sum_jK_{ij}n_j+\beta_i.$$

If $h\Lambda_i(n)>1$ for any coordinate, return the status cfl-failure without updating. Otherwise return $(n^+,L^+)=(n,L)+hF(n,L)$, where $F$ is the specified finite sectional ODE right-hand side. If rate evaluation fails or any input is inadmissible, return the corresponding failure status. Exact-arithmetic positivity and conservation are stated separately in [[thm-finite-sectional-forward-euler-positivity-and-conservation]].
