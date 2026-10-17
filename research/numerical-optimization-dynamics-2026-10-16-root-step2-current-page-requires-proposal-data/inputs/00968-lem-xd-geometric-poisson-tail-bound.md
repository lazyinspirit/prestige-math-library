---
id: lem-xd-geometric-poisson-tail-bound
kind: lemma
title: "A geometric upper bound for a Poisson right tail"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - thm-geometric-series
  - def-factorial-and-falling-factorial
  - def-real-exponential-function-and-e
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bennett L. Fox and Peter W. Glynn, Computing Poisson Probabilities"
      url: "https://web.stanford.edu/~glynn/papers/1988/FG88.pdf"
      locator: "§§1–6, printed pp. 440–445; recursive Poisson weights, rigorously bounded tails, and roundoff cautions."
---

## Statement

For $N\sim\operatorname{Pois}(\mu)$ with $\mu\ge0$ and integer $K\ge0$, write $\tau_K(\mu):=\mathbb P(N>K)$. If $\mu=0$, then $\tau_K(\mu)=0$. If $\mu>0$ and $\mu<K+2$, then

$$\tau_K(\mu)\le \frac{e^{-\mu}\mu^{K+1}}{(K+1)!\left(1-\mu/(K+2)\right)}.$$

The right side is a geometric majorant computed from a Poisson mass, not a floating-point subtraction of a rounded partial sum from one.

## Facts & Assumptions

**Given:** A finite parameter $\mu\ge0$ and integer $K\ge0$.

[F1] For $\mu>0$, $\mathbb P(N=k)=e^{-\mu}\mu^k/k!$; at $\mu=0$ the law is concentrated at zero. ([[def-scalar-poisson-count-law]])

[F2] The masses in [[def-scalar-poisson-count-law]] normalize to one, so $\mathbb P(N>K)=\sum_{k>K}\mathbb P(N=k)$. ([[lem-poisson-count-law-normalization-and-moments]])

[F3] Factorials satisfy $(k+1)!=(k+1)k!$ for $k\ge0$. ([[def-factorial-and-falling-factorial]])

[F4] For $0\le\rho<1$, the geometric series satisfies $\sum_{j\ge0}\rho^j=1/(1-\rho)$. ([[thm-geometric-series]])

## Proof


**Proof technique:** direct.

1.1 If $\mu=0$, [F1] gives $N=0$ almost surely and $K\ge0$, so the tail is zero. Now suppose $\mu>0$ and put $w_k=e^{-\mu}\mu^k/k!$ and $\rho=\mu/(K+2)$. The hypothesis gives $0<\rho<1$, and [F1]–[F3] yield $w_{k+1}/w_k=\mu/(k+1)\le\rho$ for every $k\ge K+1$. [given, F1, F3, algebra]

2.1 Iterating the ratio bound gives $w_{K+1+j}\le w_{K+1}\rho^j$ for each integer $j\ge0$. [step 1.1, induction]

3.1 By [F2] and step 2.1, $\tau_K(\mu)=\sum_{j\ge0}w_{K+1+j}\le w_{K+1}\sum_{j\ge0}\rho^j=w_{K+1}/(1-\rho)$ by [F4]; substituting the values of $w_{K+1}$ and $\rho$ proves the stated bound. [F2, F4, step 2.1, algebra] ∎
