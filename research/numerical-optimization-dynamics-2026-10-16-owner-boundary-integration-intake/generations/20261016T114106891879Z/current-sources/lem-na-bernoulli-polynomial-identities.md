---
id: lem-na-bernoulli-polynomial-identities
kind: lemma
title: "Derivative, endpoint, parity, and boundedness identities for Bernoulli polynomials"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 1
deps: [def-na-bernoulli-polynomials, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-chain-rule, thm-ftc-second-part, thm-continuous-implies-integrable, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-monotone-change-of-variable-for-riemann-integrals, thm-induction-principle, def-integer-power]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The polynomial identities use finite algebra and calculus only.
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.3"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 228–235, Bernoulli coefficients and finite Euler–Maclaurin formula."
    - title: "NIST Digital Library of Mathematical Functions, Chapter 24 §24.2(i), Bernoulli Numbers and Polynomials"
      url: "https://dlmf.nist.gov/24.2"
      locator: "Full-text section §24.2(i), equations 24.2.1–24.2.5, Bernoulli number/polynomial definitions and coefficient identity."
---

## Statement

For the polynomials of [[def-na-bernoulli-polynomials]] and every integer $m\ge1$,
$$B'_m(x)=mB_{m-1}(x),\qquad \int_0^1 B_m(x)\,dx=0.$$
In particular, $B_0(x)=1$ and $B_1(x)=x-\tfrac12$.
Consequently $B_m(1)=B_m(0)$ for $m\ge2$. The reflection identity $B_m(1-x)=(-1)^mB_m(x)$ holds for every $m\ge0$, so $B_m(0)=0$ for odd $m\ge3$. Each $B_m$ is bounded on $[0,1]$.

## Facts & Assumptions

**Given:** The recursive coefficient definition of $B_m$ and an integer index $m$.

[A1] $m$ is a nonnegative integer index; derivative and mean identities are asserted for $m\ge1$.

[F1] [[def-na-bernoulli-polynomials]]: if $B_{m-1}(x)=\sum_{q=0}^{m-1}\beta_{m-1,q}x^q$, then $B_m(x)=m\sum_{q=0}^{m-1}\beta_{m-1,q}\bigl(x^{q+1}/(q+1)-1/((q+1)(q+2))\bigr)$.

[F2] [[lem-derivative-of-a-power]] and [[thm-algebra-of-derivatives]]: differentiating a finite polynomial sum termwise gives the sum of the power derivatives.

[F3] [[thm-ftc-second-part]]: the integral of a continuous derivative on $[0,1]$ is the endpoint difference of its primitive.

[F4] [[thm-chain-rule]]: the derivative of $B_m(1-x)$ is $-B'_m(1-x)$.

[F5] [[thm-continuous-implies-integrable]] and [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: polynomials are integrable and bounded on $[0,1]$.

[F6] [[thm-monotone-change-of-variable-for-riemann-integrals]]: the decreasing affine map $x\mapsto1-x$ preserves the Riemann integral after multiplication by its absolute derivative $1$.

[F7] [[thm-induction-principle]]: induction over the natural polynomial index is valid.

## Proof

1.1 For the nonnegative integer index $m$ of [A1], the case $m=1$ gives $B_1(x)=x-\tfrac12$ by [F1]. For every $m\ge1$, [F1]–[F2] give $B'_m(x)=m\sum_{q=0}^{m-1}\beta_{m-1,q}x^q=mB_{m-1}(x)$. Integrating each monomial in [F1] over $[0,1]$, the integral of $x^{q+1}/(q+1)$ is $1/((q+1)(q+2))$, which cancels the subtracted constant term; hence $\int_0^1B_m=0$. [given, A1, F1, F2, F3, algebra]

1.2 The reflection formula holds at $m=0$ because $B_0(x)=1$ by [F1], so $B_0(1-x)=B_0(x)=(-1)^0B_0(x)$. [given, F1, base, algebra]

2.1 For $m\ge2$, [F3] and step 1.1 applied to $B_{m-1}$ give $B_m(1)-B_m(0)=m\int_0^1B_{m-1}=0$. Thus the endpoints agree for every such $m$. [given, F1, F3, step 1.1, algebra]

2.2 Let $m\ge1$ and assume $B_{m-1}(1-x)=(-1)^{m-1}B_{m-1}(x)$ for all $x$. By [F2], [F4], and step 1.1, the derivative of $D_m(x):=(-1)^mB_m(1-x)-B_m(x)$ is $D'_m(x)=(-1)^{m+1}mB_{m-1}(1-x)-mB_{m-1}(x)=0$, using the induction hypothesis. Hence $D_m$ is constant by [F3]; its integral on $[0,1]$ is zero because step 1.1 gives $\int_0^1B_m=0$ and [F6] gives $\int_0^1B_m(1-x)\,dx=\int_0^1B_m(x)\,dx$. A constant with zero integral on an interval of length one is zero, so reflection holds at $m$. [given, A1, F2, F3, F4, F6, F7, step 1.1, IH, induction, algebra]

3.1 The base case in step 1.2 and the induction step in step 2.2 prove the reflection identity for every nonnegative integer $m$ in [A1] by [F7]. [A1, F7, step 1.2, step 2.2, induction]

4.1 For the index $m$ in [A1], if it is odd and at least $3$, step 3.1 gives $B_m(1)=-B_m(0)$ while step 2.1 gives $B_m(1)=B_m(0)$; therefore $B_m(0)=0$. Finally each $B_m$ is a polynomial and hence continuous, so [F5] bounds it on the compact interval $[0,1]$. [given, A1, F5, step 2.1, step 3.1, induction, discharge-induction, algebra] ∎
