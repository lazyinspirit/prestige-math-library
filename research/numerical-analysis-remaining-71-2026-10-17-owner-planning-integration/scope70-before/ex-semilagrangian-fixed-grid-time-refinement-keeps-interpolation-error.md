---
id: ex-semilagrangian-fixed-grid-time-refinement-keeps-interpolation-error
kind: example
title: "Refining time alone leaves interpolation diffusion on a fixed grid"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-semilagrangian-backtracking-on-periodic-grid
  - def-semilagrangian-periodic-grid-and-interpolant
  - thm-exponential-product-limit
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

Fix an integer $N\ge4$, the unit torus, and $h=1/N$. Let $b=1$ and use final time $T=h$, but split it into $K$ steps of length $\Delta t=h/K$. The smooth periodic initial function
$$u_0(x):=\prod_{j=1}^{N-1}\frac{\sin^2(\pi(x-j/N))}{\sin^2(-\pi j/N)}$$
has grid samples $U_0^0=1$ and $U_j^0=0$ for $1\le j<N$. Exact transport over $T=h$ shifts those samples by exactly one node. The semi-Lagrangian method, however, performs $K$ fractional linear interpolations on the same fixed spatial grid.

## Facts & Assumptions

**Given:** The unit grid, constant velocity, smooth initial function, and update rule in the Example.

[F1] [[alg-semilagrangian-backtracking-on-periodic-grid]]: for a positive constant velocity and a one-cell-or-smaller backward displacement $\alpha h$, the update is $U_j^{n+1}=(1-\alpha)U_j^n+\alpha U_{j-1}^n$.

[F2] [[thm-exponential-product-limit]]: for real $x$, $(1+x/K)^K\to e^x$ as integers $K\to\infty$.

## Proof

1.1 Each denominator in $u_0$ is nonzero because $j/N\notin\mathbb Z$, each factor is smooth and $1$-periodic, and at node $x_0=0$ every factor equals $1$. At node $x_m=m/N$ with $1\le m<N$, the factor with $j=m$ vanishes. Thus the grid samples are exactly the stated unit vector. The exact characteristic is $X(t;s,x)=x+(t-s)$, so at $T=h$ the exact grid vector has value $1$ at node $1$ and $0$ at node $2$. [given, F1, algebra]

1.2 Here $\alpha=\Delta t/h=1/K$. Repeated application of [F1] is convolution with the two coefficients $(1-1/K,1/K)$; induction using Pascal's identity shows that after $K$ steps the contribution from exactly two one-node shifts at node $2$ is $\binom{K}{2}K^{-2}(1-1/K)^{K-2}$. Periodic wrap can add other nonnegative contributions, so $U_2^K\ge\binom{K}{2}K^{-2}(1-1/K)^{K-2}$. [given, F1, induction, algebra]

2.1 Since $\binom K2K^{-2}\to1/2$ and $(1-1/K)^{K-2}=(1-1/K)^K/(1-1/K)^2\to e^{-1}$ by [F2], we have $\liminf_{K\to\infty}U_2^K\ge e^{-1}/2>0$, whereas the exact value at node $2$ is zero. Thus reducing $\Delta t$ at fixed $h$ does not remove this interpolation error. The sufficient condition $h^2/\Delta t\to0$ in the global error theorem cannot be dropped from that bound: here $h^2/\Delta t=hK\to\infty$. [given, F2, step 1.1, step 1.2, algebra] ∎

## Remarks

This is a fixed-grid time-refinement example, not a failure of convergence under simultaneous refinement. It exhibits the per-step interpolation effect that the $h^2/\Delta t$ term controls in [[thm-periodic-semilagrangian-global-error-from-local-defects]].
