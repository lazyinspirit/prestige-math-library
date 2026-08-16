---
id: cor-cauchy-inequalities
kind: corollary
title: "Cauchy's inequalities bound every derivative by a boundary bound on a compactly contained circle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-integral-formula-higher-derivatives, cor-ml-estimate-for-complex-line-integrals, thm-circle-circumference-diameter-ratio-is-pi]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 4, Section 2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on $D(a,R)$ and let $0<r<R$. Suppose $M\ge0$ and

$$|f(\zeta)|\le M\qquad\text{whenever }|\zeta-a|=r.$$

Then, for every $n\in\mathbb N$,

$$|f^{(n)}(a)|\le\frac{n!M}{r^n}.$$

## Facts & Assumptions

**Given:** A function $f$ holomorphic on $D(a,R)$, a radius $0<r<R$, a bound $M\ge0$ on the radius-$r$ circle, and a natural number $n$.

[L1] The higher-derivative Cauchy formula gives $f^{(n)}(a)=n!(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-a)^{n+1}\,d\zeta$ on the positively oriented radius-$r$ circle ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L2] The ML estimate bounds the modulus of a contour integral by a bound for the integrand times the contour length ([[cor-ml-estimate-for-complex-line-integrals]]).

[L3] The once-traversed circle of radius $r>0$ has length $2\pi r$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

## Proof

**Proof technique:** direct.

1.1 On the circle, $|f(\zeta)/(\zeta-a)^{n+1}|\le M/r^{n+1}$, so [L1], [L2], and [L3] give $|f^{(n)}(a)|\le n!(2\pi)^{-1}(M/r^{n+1})(2\pi r)$. [given, L1, L2, L3]

2.1 Since $r>0$, simplifying step 1.1 gives $|f^{(n)}(a)|\le n!M/r^n$. For $n=0$ this is $|f(a)|\le M$, and for $M=0$ or constant $f$ the same computation remains valid. [step 1.1, algebra] ∎
