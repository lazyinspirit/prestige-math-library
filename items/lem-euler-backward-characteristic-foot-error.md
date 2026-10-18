---
id: lem-euler-backward-characteristic-foot-error
kind: lemma
title: "Explicit Euler gives a second-order local backward-foot defect"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-semilagrangian-backtracking-on-periodic-grid
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Let $b\in C^1([0,T]\times\mathbb R^d;\mathbb R^d)$ be periodic in space, and set
$$M:=\sup\|b\|_2,\qquad L_x:=\sup\|D_xb\|,\qquad L_t:=\sup\|\partial_tb\|_2,$$
where the suprema are over one full periodic time-space cylinder. For $0\le t_n<t_{n+1}\le T$, $\Delta t=t_{n+1}-t_n$, and an arrival lift $x$, let $X(t_n;t_{n+1},x)$ be the exact backward characteristic foot. The explicit Euler foot $x-\Delta t\,b(t_{n+1},x)$ satisfies
$$\bigl\|X(t_n;t_{n+1},x)-(x-\Delta t\,b(t_{n+1},x))\bigr\|_2\le\frac12(L_xM+L_t)(\Delta t)^2.$$
The estimate is local for every positive $\Delta t$; it requires no relation between displacement and grid width.

## Facts & Assumptions

**Given:** The periodic $C^1$ field, its finite derivative bounds, a time interval $[t_n,t_{n+1}]$, and an arrival point $x$.

[F1] [[alg-semilagrangian-backtracking-on-periodic-grid]]: the algorithm uses the lifted explicit backward foot $x-\Delta t\,b(t_{n+1},x)$.

[F2] [[thm-periodic-c1-velocity-has-global-characteristic-flow]]: the exact characteristic exists on the whole interval, and $\|b\|_2\le M$ on its periodic tube.

[F3] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: the exact characteristic increment is the oriented integral of $b(s,X(s))$.

[F4] [[thm-norm-inequality-for-the-vector-valued-integral]]: the norm of a vector integral is at most the integral of its norm.

## Proof

1.1 By [F2] and [F3], for $s\in[t_n,t_{n+1}]$ the backward characteristic satisfies $X(s)=x-\int_s^{t_{n+1}}b(r,X(r))\,dr$. Applying [F4] and the velocity bound gives $\|X(s)-x\|_2\le M(t_{n+1}-s)$. [given, F2, F3, F4]

2.1 Subtracting the explicit Euler foot from the exact foot and using [F3] writes the difference as the integral from t_n to t_{n+1} of b(t_{n+1},x)-b(s,X(s)). The derivative bounds make its integrand norm at most L_x times the state difference plus L_t times (t_{n+1}-s); by step 1.1 the state difference is at most M(t_{n+1}-s). Integrating the resulting bound (L_x M+L_t)(t_{n+1}-s) gives one half (L_x M+L_t)(Delta t)^2. [given, F1, F3, F4, step 1.1, algebra] ∎
