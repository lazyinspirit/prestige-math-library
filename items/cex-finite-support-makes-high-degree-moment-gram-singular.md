---
id: cex-finite-support-makes-high-degree-moment-gram-singular
kind: counterexample
title: Finite support can make a higher-degree moment Gram matrix singular
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
verification: {}
proof_strategy: direct
---

## Statement refuted

Finite moments through degree $2p$ guarantee a positive-definite degree-$p$ monomial Gram matrix for every probability law.

## Facts & Assumptions

**Given:** The two-point probability law and the degree-two Gram criterion of [[def-finite-product-chaos-input]].

[F1] The degree-two Gram matrix is positive definite exactly when every nonzero coefficient vector has strictly positive squared polynomial norm ([[def-finite-product-chaos-input]]).

## Counterexample

1.1 Let $\rho=(\delta_{-1}+\delta_1)/2$ and take $p=2$. All moments are finite. The coefficient vector of $q(x)=x^2-1$ in the ordered monomials $(1,x,x^2)$ is $(-1,0,1)\ne0$. Yet $q(-1)=q(1)=0$, so $\int q(x)^2\,d\rho(x)=0$. [given, F1, algebra]

2.1 Therefore the degree-two Gram quadratic form vanishes on a nonzero vector and is singular despite finiteness of every moment. The stated sufficiency claim is false. [F1, step 1.1, algebra] ∎