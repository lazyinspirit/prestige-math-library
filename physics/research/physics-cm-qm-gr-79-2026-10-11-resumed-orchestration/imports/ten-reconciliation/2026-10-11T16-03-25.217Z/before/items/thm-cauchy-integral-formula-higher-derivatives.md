---
id: thm-cauchy-integral-formula-higher-derivatives
kind: theorem
title: "All higher complex derivatives exist and satisfy Cauchy's integral formula on an interior circle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-integral-formula-circle, lem-differentiating-cauchy-integrals, def-factorial-and-falling-factorial, thm-induction-principle, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 4, Section 2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on $D(a,R)$, let $0<r<R$, and let $\gamma(t)=a+r\exp(it)$ for $0\le t\le2\pi$. Define $f^{(0)}=f$ and, whenever it exists, $f^{(n+1)}=(f^{(n)})'$. Then every $f^{(n)}$ exists on $D(a,r)$ and, for every $z\in D(a,r)$ and $n\in\mathbb N$,

$$f^{(n)}(z)=\frac{n!}{2\pi i}\int_\gamma\frac{f(\zeta)}{(\zeta-z)^{n+1}}\,d\zeta.$$

In particular, every holomorphic function has complex derivatives of all orders locally.

## Facts & Assumptions

**Given:** A function $f$ holomorphic on $D(a,R)$, a radius $0<r<R$, and the positively oriented circle $\gamma$ of radius $r$ about $a$.

[L1] Cauchy's circle formula gives the displayed identity when $n=0$ ([[thm-cauchy-integral-formula-circle]]).

[L2] If $F_m(z)=(2\pi i)^{-1}\int_\gamma\varphi(\zeta)/(\zeta-z)^m\,d\zeta$ for $m\ge1$ off the trace, then $F_m'=mF_{m+1}$ ([[lem-differentiating-cauchy-integrals]]).

[L3] The factorial satisfies $0!=1$ and $(n+1)!=(n+1)n!$ ([[def-factorial-and-falling-factorial]]).

[L4] A base case and a successor implication prove a property for every natural number ([[thm-induction-principle]]).

[L5] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, [L1] and $0!=1$ from [L3] give the formula and the existence of $f^{(0)}=f$ on $D(a,r)$. [base, L1, L3]

1.2 Assume for a natural $n$ that $f^{(n)}$ exists on $D(a,r)$ and satisfies the displayed formula there. [ih]

2.1 By [L5], the boundary data $\varphi=f|_\gamma$ are continuous; the open disc $D(a,r)$ is disjoint from the radius-$r$ trace, so [L2] applies with $m=n+1$. Differentiating the induction formula gives $f^{(n+1)}(z)=n!(n+1)(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-z)^{n+2}\,d\zeta$, which is the required formula because $n!(n+1)=(n+1)!$ by [L3]. [step 1.2, L2, L3, L5]

3.1 Thus the property holds at $0$ and passes from $n$ to $n+1$; [L4] proves existence and the formula for every $n\in\mathbb N$, including $n=1$ and constant functions. [step 1.1, step 2.1, L4, discharge-induction] ∎
