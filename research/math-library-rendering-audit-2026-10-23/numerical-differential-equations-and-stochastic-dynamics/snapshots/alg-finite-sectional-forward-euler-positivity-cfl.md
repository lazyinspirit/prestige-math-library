---
id: alg-finite-sectional-forward-euler-positivity-cfl
kind: algorithm
title: Forward Euler for a finite sectional balance with a positivity CFL
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-sectional-coagulation-fragmentation-balance
justified_by: [thm-finite-sectional-forward-euler-positivity-and-conservation]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.2
      url: https://fncbook.com/euler/
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §§III.2–III.3"
      url: https://www.unige.ch/~hairer/poly/chap3.pdf
---

## Definition

Input a valid grid state $(n,L)$ with $n_i\ge0$, a step $h>0$, and the finite sectional event rates of [[alg-finite-sectional-coagulation-fragmentation-balance]]. The total per-particle loss rate is

$$\Lambda_i(n)=\sum_jK_{ij}n_j+\beta_i.$$

First validate the grid, state, rates, and daughter measures against the input conditions of [[alg-finite-sectional-coagulation-fragmentation-balance]], and require $h>0$; if any condition fails, return invalid-input without updating. For admissible inputs use exact arithmetic to evaluate the finite event sums defining $F$ and $\Lambda_i$. If $h\Lambda_i(n)>1$ for any coordinate, return cfl-failure without updating. Otherwise return success together with $(n^+,L^+)=(n,L)+hF(n,L)$. Exact-arithmetic positivity and conservation are stated separately in [[thm-finite-sectional-forward-euler-positivity-and-conservation]].
