---
id: ex-semilagrangian-constant-speed-crosses-many-cells
kind: example
title: "A constant-speed foot can cross many cells in one stable update"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-semilagrangian-backtracking-on-periodic-grid
  - def-semilagrangian-periodic-grid-and-interpolant
  - lem-periodic-tensor-interpolant-is-convex-and-linf-contracting
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
---

## Example

Take the one-dimensional torus of length $1$, $16$ uniform cells of width $h=1/16$, constant velocity $b=1$, one step $\Delta t=3/10$, and arrival node $x_0=0$. The Courant displacement is $b\Delta t/h=4.8$, so the backtracked foot crosses more than four cells. Give the two grid nodes bracketing that foot values $2$ and $10$.

## Facts & Assumptions

**Given:** The grid and velocity in the Example and the explicit Euler/multilinear update of [[alg-semilagrangian-backtracking-on-periodic-grid]].

[F1] [[def-semilagrangian-periodic-grid-and-interpolant]]: with $h=1/16$, a lifted query $y$ has cell index $q=\lfloor y/h\rfloor$, fraction $\theta=y/h-q$, and weights $1-\theta,\theta$ at indices $q,q+1$ modulo $16$.

[F2] [[lem-periodic-tensor-interpolant-is-convex-and-linf-contracting]]: the two weights are nonnegative and sum to one.

## Proof

1.1 Since $b=1$, the explicit Euler foot at $x_0=0$ is $-3/10$, which wraps to $7/10$ on the unit torus. On the lift, $(-3/10)/h=-24/5=-5+1/5$, so the lower index is $-5\equiv11\pmod{16}$, the upper index is $12$, and $\theta=1/5$. [given, F1, algebra]

2.1 The update is therefore $(1-\theta)2+\theta10=(4/5)2+(1/5)10=18/5$. By [F2] this value lies in $[2,10]$, despite the 4.8-cell displacement. The example uses no displacement CFL restriction. [given, F2, step 1.1, algebra] ∎
