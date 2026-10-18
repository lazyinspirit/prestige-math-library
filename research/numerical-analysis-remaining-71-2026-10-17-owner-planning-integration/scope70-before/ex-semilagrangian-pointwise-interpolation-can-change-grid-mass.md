---
id: ex-semilagrangian-pointwise-interpolation-can-change-grid-mass
kind: example
title: "Variable-foot pointwise interpolation can change the grid sum"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-semilagrangian-backtracking-on-periodic-grid
  - def-semilagrangian-periodic-grid-and-interpolant
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
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Example

Use the period-$3$ one-dimensional grid with nodes $0,1,2$, $h=1$, and one time step $\Delta t=1$. Set
$$b(x)=\frac5{12}-\frac16\cos\!\left(\frac{2\pi x}{3}\right)-\frac1{2\sqrt3}\sin\!\left(\frac{2\pi x}{3}\right).$$
This is a smooth periodic velocity. Start with grid values $(U_0,U_1,U_2)=(0,0,1)$, which are samples of the smooth nonnegative period-$3$ function
$$u_0(x)=\frac{16}{9}\sin^2\!\left(\frac{\pi x}{3}\right)\sin^2\!\left(\frac{\pi(x-1)}{3}\right).$$

## Facts & Assumptions

**Given:** The grid, time step, velocity, data, and explicit Euler/multilinear update in the Example.

[F1] [[def-semilagrangian-periodic-grid-and-interpolant]]: a foot at fraction $\theta$ between consecutive nodes has weights $1-\theta,\theta$, with node indices wrapped modulo $3$.

[F2] [[alg-semilagrangian-backtracking-on-periodic-grid]]: at arrival node $x_i$ the lifted foot is $x_i-\Delta t\,b(x_i)$ and the new value is the previous grid data interpolated there.

## Proof

1.1 The squared-sine factors are smooth and period $3$; the value is zero at nodes $0$ and $1$ and equals $1$ at node $2$. Direct substitution into $b$ gives $(b(0),b(1),b(2))=(1/4,1/4,3/4)$. Therefore the three lifted feet are $-1/4,3/4,5/4$. Their interpolation rows, in node order $0,1,2$, are $(3/4,0,1/4)$, $(1/4,3/4,0)$, and $(0,3/4,1/4)$. [given, F1, F2, algebra]

2.1 Applying those rows to $(0,0,1)$ gives the new grid values $(1/4,0,1/4)$. The grid sum changes from $1$ to $1/2$. This is a pointwise interpolation update, so the grid sum is a diagnostic only; the result shows why pointwise interpolation is not itself a conservative remap. [given, step 1.1, algebra] ∎
