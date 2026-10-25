---
id: lem-qftx-gaga-cstar-laurent-decomposition
kind: lemma
title: Laurent decomposition of holomorphic functions on the punctured plane
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-complex-annulus
  - def-convergent-complex-laurent-series
  - thm-laurent-expansion-annulus
  - thm-uniform-limit-interchanges-complex-line-integrals
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
dependency_roles:
  def-complex-annulus: mathematical-premise
  def-convergent-complex-laurent-series: mathematical-premise
  thm-laurent-expansion-annulus: mathematical-premise
  thm-uniform-limit-interchanges-complex-line-integrals: mathematical-premise
  thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: L. V. Ahlfors, Complex Analysis, third edition
      url: https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf
      locator: "Chapter 5 §1.3: Laurent expansion on an annulus and its locally uniform convergence."
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf
      locator: "Topic 7 §7.7, Theorem 7.19 and proof, PDF pp. 10–13: coefficient integrals and convergence of the analytic and principal parts."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Let $\mathbb C^*=\mathbb C\setminus\{0\}$. For every holomorphic function $f\in\mathcal O(\mathbb C^*)$, there are unique entire functions $g,h\in\mathcal O(\mathbb C)$ and a unique scalar $a\in\mathbb C$ such that
$$
f(z)=g(z)+a z^{-1}+z^{-2}h(1/z)\qquad(z\in\mathbb C^*).
$$

## Statement references

[L. V. Ahlfors, *Complex Analysis*, Chapter 5 §1.3](https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf)

[Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf)

## Facts & Assumptions

**Given:** A holomorphic function $f$ on the punctured plane $\mathbb C^*=A(0;0,+\infty)$.

[F1] Every holomorphic function on an annulus has a Laurent series converging uniformly on each compact subannulus ([[def-complex-annulus]], [[def-convergent-complex-laurent-series]], [[thm-laurent-expansion-annulus]]).

[F2] Uniform convergence of continuous contour integrands allows passage of the limit through the complex line integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[F3] Locally uniform limits of holomorphic functions on an open subset of $\mathbb C$ are holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

## Proof

1.1 By [F1], write $f(z)=\sum_{n\in\mathbb Z}c_nz^n$ on $\mathbb C^*$, with both one-sided series uniformly convergent on every compact subannulus. Fix $R>0$ and integrate the uniformly convergent series on the positively oriented circle $\gamma_R(t)=Re^{it}$ after multiplying by $z^{-n-1}$. By [F2], termwise integration is valid, and direct parametrization gives $(2\pi i)^{-1}\int_{\gamma_R}z^{k-n-1}\,dz=1$ for $k=n$ and $0$ otherwise. Thus
$$
c_n=\frac1{2\pi i}\int_{\gamma_R}f(z)z^{-n-1}\,dz
$$
for every $n\in\mathbb Z$ and every $R>0$. [F1, F2, given, construct]

1.2 Put $M_R=\max_{|z|=R}|f(z)|$. The coefficient formula in step 1.1 and the circle length $2\pi R$ give $|c_n|\le M_RR^{-n}$ for $n\ge0$ and $|c_{-m}|\le M_RR^m$ for $m\ge1$. [step 1.1, algebra]

2.1 Define $g(z)=\sum_{n\ge0}c_nz^n$. For any $S>0$, choose $R>S$; on $|z|\le S$ the terms satisfy $|c_nz^n|\le M_R(S/R)^n$ by step 1.2, so the series converges uniformly there. Its partial sums are polynomials, hence [F3] makes $g$ entire. [F3, step 1.2, construct]

2.2 Define $h(w)=\sum_{j\ge0}c_{-(j+2)}w^j$. Given $S>0$, choose $0<R<1/S$; on $|w|\le S$ the terms satisfy $|c_{-(j+2)}w^j|\le M_RR^2(RS)^j$ by step 1.2, so this series also converges uniformly on every closed disk. Its partial sums are polynomials, and [F3] makes $h$ entire. [F3, step 1.2, construct]

3.1 On each compact subannulus of $\mathbb C^*$, the Laurent series of [F1] is the sum of its nonnegative terms, its single $c_{-1}z^{-1}$ term, and its terms of degree at most $-2$. The first part is $g(z)$ by step 2.1, and the last part is $z^{-2}h(1/z)$ by step 2.2. Hence the displayed decomposition holds at every $z\ne0$. [F1, step 2.1, step 2.2]

3.2 If another pair of entire functions and scalar gave the same decomposition, their Taylor coefficients would give a Laurent expansion of $f$ on $\mathbb C^*$ with the same positive, $-1$, and lower negative powers. The contour formula in step 1.1 recovers each Laurent coefficient uniquely; therefore the scalar and all Taylor coefficients of both entire functions agree. The decomposition is unique. [step 1.1, step 3.1, algebra] ∎
