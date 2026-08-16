---
id: thm-cauchy-integral-formula-circle
kind: theorem
title: "Cauchy's integral formula on a circle compactly contained in a disc of holomorphy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain, lem-cauchy-difference-quotient-exceptional-extension, prop-linearity-of-complex-line-integrals, thm-circle-integrals-of-integer-monomials, thm-uniform-limit-interchanges-complex-line-integrals, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 4, Section 2.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $a\in\mathbb C$, let $R>0$, and let $f$ be holomorphic on the disc

$$D(a,R)=\{\zeta\in\mathbb C:|\zeta-a|<R\}.$$

If $0<r<R$, $|z-a|<r$, and $\gamma(t)=a+r\exp(it)$ for $0\le t\le2\pi$, then

$$f(z)=\frac{1}{2\pi i}\int_\gamma\frac{f(\zeta)}{\zeta-z}\,d\zeta.$$

## Facts & Assumptions

**Given:** A function $f$ holomorphic on $D(a,R)$, a radius $0<r<R$, an interior point $z$ with $|z-a|<r$, and the positively oriented circle $\gamma$ of radius $r$ about $a$.

[L1] The filled difference quotient is continuous on the disc and holomorphic away from its filled point ([[lem-cauchy-difference-quotient-exceptional-extension]]).

[L2] A continuous function holomorphic away from one point on a star-shaped open set has zero integral around every closed rectifiable contour there ([[thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain]]).

[L3] Complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]).

[L4] On the positively oriented circle about $a$, the integral of $(\zeta-a)^m$ is $2\pi i$ for $m=-1$ and zero for every other integer $m$ ([[thm-circle-integrals-of-integer-monomials]]).

[L5] Uniform convergence on a fixed rectifiable contour permits passage of the limit through the complex line integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L6] If $0<q<1$, then $q^n\to0$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** direct.

1.1 Define $g(\zeta)=(f(\zeta)-f(z))/(\zeta-z)$ for $\zeta\ne z$ and $g(z)=f'(z)$. By [L1], $g$ is continuous on $D(a,R)$ and holomorphic away from $z$. [L1]

1.2 If $z=a$, [L4] gives $\int_\gamma1/(\zeta-z)\,d\zeta=2\pi i$. If $z\ne a$, the finite identity $1/(\zeta-z)=\sum_{k=0}^{N}(z-a)^k/(\zeta-a)^{k+1}+(z-a)^{N+1}/((\zeta-a)^{N+1}(\zeta-z))$ holds on $\gamma$, and its remainder has modulus at most $(|z-a|/r)^{N+1}/(r-|z-a|)$ there. [given, L4, algebra]

2.1 The disc is star-shaped with respect to $a$, since $|(1-t)a+t\zeta-a|=t|\zeta-a|<R$. The circle lies in the disc and is closed and rectifiable, so [L2] gives $\int_\gamma g(\zeta)\,d\zeta=0$. [given, step 1.1, L2]

2.2 In the second case, [L6] makes the remainder tend uniformly to zero; [L5] and [L4] then give $\int_\gamma1/(\zeta-z)\,d\zeta=2\pi i$, because only the $k=0$ term has exponent $-1$. Thus the same kernel integral value holds also in the first case. [step 1.2, L4, L5, L6]

3.1 Since $\zeta\ne z$ on $\gamma$, [L3] expands step 2.1 as $\int_\gamma f(\zeta)/(\zeta-z)\,d\zeta=f(z)\int_\gamma1/(\zeta-z)\,d\zeta$. [step 2.1, L3, algebra]

4.1 Substitute step 2.2 into step 3.1 and divide by the nonzero number $2\pi i$ to obtain the formula. [step 3.1, step 2.2, algebra] ∎
