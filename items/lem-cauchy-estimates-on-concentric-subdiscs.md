---
id: lem-cauchy-estimates-on-concentric-subdiscs
kind: lemma
title: "Cauchy estimates on a smaller concentric disc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-integral-formula-higher-derivatives, cor-ml-estimate-for-complex-line-integrals, thm-circle-circumference-diameter-ratio-is-pi, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: true
short: "Cauchy estimates on subdiscs"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 2.4.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 5.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $0\le r<R<S$, let $f$ be holomorphic on $D(a,S)$, and suppose $M\ge0$ satisfies $|f(\zeta)|\le M$ whenever $|\zeta-a|=R$. If $n\in\mathbb N$ and $|z-a|\le r$, then

$$|f^{(n)}(z)|\le\frac{n!RM}{(R-r)^{n+1}}.$$

If $0\le r<R$, $M$ bounds $|f|$ on $|\zeta-a|=R$, and $|z-a|\le r$, then $|f^{(n)}(z)|\le n!RM/(R-r)^{n+1}$.

## Facts & Assumptions

**Given:** Reals $0\le r<R<S$, a function $f$ holomorphic on $D(a,S)$, a bound $M\ge0$ on the radius-$R$ circle, a natural $n$, and a point $z$ with $|z-a|\le r$.

[L1] Cauchy's higher-derivative formula on the radius-$R$ circle gives $f^{(n)}(z)=n!(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-z)^{n+1}\,d\zeta$ for $|z-a|<R<S$ ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L2] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

[L3] If an integrand has modulus at most $B$ on a rectifiable contour $\gamma$, then the modulus of its integral is at most $B L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]).

[L4] A once-traversed circle of radius $R>0$ has length $2\pi R$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

## Proof

**Proof technique:** direct.

1.1 Formula [L1] applies because $|z-a|\le r<R$, and for $|\zeta-a|=R$ the triangle inequality in [L2] gives $|\zeta-z|\ge|\zeta-a|-|z-a|\ge R-r>0$, so the integrand has modulus at most $M/(R-r)^{n+1}$. [L1, L2]

2.1 Applying [L3] to step 1.1 and using the circle length from [L4] gives $|f^{(n)}(z)|\le(n!/(2\pi))(M/(R-r)^{n+1})(2\pi R)=n!RM/(R-r)^{n+1}$. [step 1.1, L3, L4, algebra]

3.1 The bound in step 2.1 is independent of $z$ on the closed radius-$r$ disc and includes derivative order $n=0$, inner radius $r=0$, and bound $M=0$; the strict inequality $r<R$ keeps every denominator positive. [step 2.1] ∎
