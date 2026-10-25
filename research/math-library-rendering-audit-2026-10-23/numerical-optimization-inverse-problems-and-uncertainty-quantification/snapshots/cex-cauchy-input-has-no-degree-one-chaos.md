---
id: cex-cauchy-input-has-no-degree-one-chaos
kind: counterexample
title: A Cauchy input has no L2 degree-one polynomial chaos
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-product-chaos-input
  - lem-positive-moment-gram-produces-univariate-chaos-polynomials
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
proof_strategy: direct
---

## Statement refuted

Every real probability law supports a degree-one orthonormal polynomial chaos basis.

## Facts & Assumptions

**Given:** The Cauchy probability law and the finite moment-Gram requirements of [[def-finite-product-chaos-input]].

[F1] Degree one requires the finite second moment and positive-definite monomial Gram matrix of [[def-finite-product-chaos-input]].

## Counterexample

1.1 Take the standard Cauchy law, whose density is $\rho(x)=1/(\pi(1+x^2))$ on $\mathbb R$. Its second moment integral is $\int x^2\,d\rho(x)=\pi^{-1}\int_{\mathbb R}x^2/(1+x^2)\,dx.$ For $|x|\ge1$, $x^2/(1+x^2)\ge1/2$, so the integral over $[-R,-1]\cup[1,R]$ is at least $(R-1)/\pi$. [given, F1, construct, algebra]

2.1 Letting $R\to\infty$ shows the second moment is infinite. Hence $x\notin L^2(\rho)$, the degree-one monomial Gram entry is not finite, and [F1] fails; the finite Gram--Schmidt construction cannot supply a degree-one chaos basis for this law. [F1, step 1.1, algebra] ∎