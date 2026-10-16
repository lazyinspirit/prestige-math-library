---
id: thm-qc-density-operator-existence
kind: theorem
title: Every nonzero finite-dimensional complex inner-product space admits a density operator
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: [def-qc-density-operator, def-trace-of-an-endomorphism, def-trace-of-a-square-matrix, prop-trace-is-linear, def-dimension, def-real-and-complex-inner-product-space, def-non-negative-and-positive-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Every nonzero finite-dimensional complex inner-product space $H$ admits a density operator; specifically, if $d=\dim_{\mathbb C}H$, then $I_H/d$ is a density operator on $H$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex inner-product space $H$, $d=\dim_{\mathbb C}H$, and the identity endomorphism $I_H(x)=x$.

[F1] [[def-qc-density-operator]]: on nonzero finite-dimensional $H$, a density operator is a non-negative endomorphism with trace one.

[F2] [[def-non-negative-and-positive-operator]]: non-negative means self-adjoint and having nonnegative quadratic form on every vector.

[F3] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument and positive definite.

[F4] [[def-trace-of-an-endomorphism]]: trace of an endomorphism is the matrix trace in any ordered basis.

[F5] [[def-trace-of-a-square-matrix]]: matrix trace is the sum of diagonal entries.

[F6] [[prop-trace-is-linear]]: matrix trace is linear under scalar multiplication and addition.

[F7] [[def-dimension]]: $d$ is the finite size of a basis of $H$; since $H\ne\{0\}$, $d\ge1$.

## Proof

1.1 Put $\rho=I_H/d$. The scalar $1/d$ is positive real. The identity is self-adjoint, and for every $x\in H$, $\langle\rho x,x\rangle=(1/d)\langle x,x\rangle\ge0$ by [F3] and [F7]. Thus $\rho$ is non-negative by [F2]. [given, F2, F3, F7, algebra]

2.1 In a basis of $H$ with $d$ elements, the matrix of $\rho$ is $(1/d)I_d$. By [F4]–[F6], its trace is $(1/d)\sum_{j=1}^d1=1$. Therefore $\rho$ is a density operator by [F1]. [F1, F4, F5, F6, F7, step 1.1, algebra] ∎