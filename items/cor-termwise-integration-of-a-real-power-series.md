---
id: cor-termwise-integration-of-a-real-power-series
kind: corollary
title: "Inside its radius a real power series may be integrated term by term on every closed subinterval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-derived-and-integrated-power-series-have-the-same-radius, thm-power-series-uniform-on-compact-subintervals, thm-uniform-limit-interchanges-riemann-integration, thm-ftc-first-part, thm-termwise-differentiation-of-a-real-power-series, cor-zero-derivative-implies-constant, cor-differentiable-implies-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let $f(x)=\sum_{n\ge0}a_n(x-c)^n$ have radius $R$, and define

$$G(x):=\sum_{n=0}^{\infty}\frac{a_n}{\iota(n+1)}(x-c)^{n+1}.$$

For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integrable and

$$\int_u^v f(x)\,dx=G(v)-G(u)=\sum_{n=0}^{\infty}\frac{a_n}{\iota(n+1)}\bigl((v-c)^{n+1}-(u-c)^{n+1}\bigr).$$

Thus the power series may be integrated term by term, and the antiderivative series has radius $R$.

## Facts & Assumptions

**Given:** The power-series sum $f$, its zero-constant-term formal antiderivative $G$, and a closed interval $[u,v]$ strictly inside the radius.

[L1] The antiderivative series has radius $R$ ([[lem-derived-and-integrated-power-series-have-the-same-radius]]).

[L2] Both series converge uniformly on $[u,v]$ ([[thm-power-series-uniform-on-compact-subintervals]]), and a uniform limit of integrable functions is integrable with the integral equal to the limit of the integrals ([[thm-uniform-limit-interchanges-riemann-integration]]).

[L3] Termwise differentiation applied to $G$ gives $G'=f$ on the open radius interval ([[thm-termwise-differentiation-of-a-real-power-series]]).

[L4] If $H(x)=\int_u^x f$, then $H'=f$ on $(u,v)$ because $f$ is continuous on $[u,v]$ ([[thm-ftc-first-part]]).

[L5] Differentiable functions are continuous, and two continuous functions on an interval with the same derivative differ by a constant ([[cor-differentiable-implies-continuous]], [[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $G$ and $f$ converge uniformly on $[u,v]$; in particular $f$ is integrable there, and [L3] gives $G'=f$. [L1, L2, L3]

2.1 Define $H(x):=\int_u^x f(t)\,dt$. The sum $f$ is continuous as a differentiable function by [L3] and [L5], so [L4] gives $H'=f$ on $(u,v)$, while the integral construction makes $H$ continuous on $[u,v]$. [step 1.1, L3, L4, L5]

3.1 The functions $H$ and $G$ are continuous and have the same derivative on the interval. By [L5], $H-G$ is constant; evaluating at $u$ gives $H(v)=G(v)-G(u)$. [step 2.1, L5]

4.1 Subtracting the two convergent series for $G(v)$ and $G(u)$ term by term is licensed by their convergence, and gives the displayed series. This is also the limit of the integrals of the polynomial partial sums by [L2]. [step 3.1, L2, algebra] ∎
