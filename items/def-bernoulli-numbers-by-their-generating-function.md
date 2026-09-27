---
id: def-bernoulli-numbers-by-their-generating-function
kind: definition
title: "The Bernoulli numbers are defined by the generating series $t/(e^t-1)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-exponential, lem-complex-exponential-series-converges-everywhere, lem-local-reciprocal-of-complex-power-series]
verification:
  audited: 2026-09-27
  precheck: n/a
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Definition

Write $e^t=\exp(t)$ for the complex exponential and set
$h(t)=\sum_{m=0}^{\infty}t^m/(m+1)!$. The exponential series converges
everywhere, $e^t-1=t h(t)$, and $h(0)=1$. Hence $1/h(t)$ is holomorphic on
some neighbourhood of $0$ by
[[lem-local-reciprocal-of-complex-power-series]]. It equals
$t/(e^t-1)$ wherever $t\ne0$ in that neighbourhood; at $0$, the quotient
means this removable extension. Its Maclaurin expansion has the unique form

$$\frac{t}{e^t-1}=\sum_{n=0}^\infty \frac{B_n}{n!}t^n.$$

The coefficients $B_n$ are the **Bernoulli numbers**. Since
$h(t)=1+t/2+\cdots$, the reciprocal coefficient formula gives
$B_0=1$ and $B_1=-1/2$.
