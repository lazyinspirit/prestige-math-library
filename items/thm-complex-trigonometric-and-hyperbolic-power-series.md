---
id: thm-complex-trigonometric-and-hyperbolic-power-series
kind: theorem
title: "The exponential definitions of complex sine, cosine, hyperbolic sine, and hyperbolic cosine equal their entire power series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-exponential, def-complex-trigonometric-and-hyperbolic-functions, thm-absolute-convergence-of-complex-series, thm-cauchy-hadamard-for-complex-power-series, lem-complex-exponential-series-converges-everywhere]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C$,
$$\sin z=\sum_{n\ge0}\frac{(-1)^nz^{2n+1}}{(2n+1)!},\quad \cos z=\sum_{n\ge0}\frac{(-1)^nz^{2n}}{(2n)!},$$
$$\sinh z=\sum_{n\ge0}\frac{z^{2n+1}}{(2n+1)!},\quad \cosh z=\sum_{n\ge0}\frac{z^{2n}}{(2n)!}.$$
All four series have infinite radius.

## Facts & Assumptions

**Given:** A complex number $z$.

[L1] The complex exponential is defined by the series $\exp z=\sum_{n\ge0}z^n/n!$, the cited Definition recording that convergence for every $z\in\mathbb C$ is discharged elsewhere ([[def-complex-exponential]]).

[L2] Sine, cosine, hyperbolic sine, and hyperbolic cosine are the symmetric and antisymmetric exponential combinations displayed in their definition ([[def-complex-trigonometric-and-hyperbolic-functions]]).

[L3] Every absolutely convergent complex series may be rearranged without changing its sum ([[thm-absolute-convergence-of-complex-series]]).

[L4] If $L=\limsup_{k\to\infty}|c_{k+1}|^{1/(k+1)}$, Cauchy–Hadamard gives radius $+\infty$ when $L=0$ ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L5] For every $z\in\mathbb C$ the series $\sum z^n/n!$ converges **absolutely** ([[lem-complex-exponential-series-converges-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Substitute the series [L1] at $z,-z,iz,-iz$ into [L2]. Absolute convergence, which [L5] supplies for every complex argument, allows [L3] to separate the even and odd indices. [L1, L2, L3, L5]

2.1 The identities $i^{2n}=(-1)^n$ and $i^{2n+1}=i(-1)^n$ simplify those even and odd parts to the four displayed series. [step 1.1, algebra]

3.1 Their factorial coefficients have root limsup $0$: for $n\ge2$ the factorial satisfies $n!\ge(n/2)^{\lfloor n/2\rfloor}$, since at least $\lfloor n/2\rfloor$ of the factors $1,\dots,n$ are at least $n/2$, so $(1/n!)^{1/n}\le(2/n)^{\lfloor n/2\rfloor/n}\to0$. Hence [L4] gives infinite radius. The constant terms are retained in the even series and absent from the odd series. [step 2.1, L4] ∎
