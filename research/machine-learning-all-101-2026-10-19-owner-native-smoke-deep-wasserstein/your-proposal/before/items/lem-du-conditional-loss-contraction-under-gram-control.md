---
id: lem-du-conditional-loss-contraction-under-gram-control
kind: lemma
title: "Gram control and a Taylor remainder imply one-step loss contraction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
axiom_use: "The finite-dimensional matrix estimate is choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Simon S. Du, Jason D. Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, §§4–6"
      url: "https://proceedings.mlr.press/v97/du19c.html"
---

## Statement

Let $r\in\mathbb R^n$, let $G$ be a real symmetric matrix with eigenvalues in $[\lambda,\Lambda]$ for some $0<\lambda\le\Lambda$, and suppose $0<\eta\Lambda\le1$. If an update has the form $r^+=(I-\eta G)r+R$ with $\|R\|_2\le\eta\lambda\|r\|_2/4$, then for the quadratic loss $L=\frac12\|r\|_2^2$ and $L^+=\frac12\|r^+\|_2^2$,

$$L^+\le(1-\eta\lambda/2)L.$$

## Statement references

[Du et al., empirical loss contraction, Theorems 5.1 and 6.1](https://proceedings.mlr.press/v97/du19c.html)

## Facts & Assumptions

**Given:** The residual vector, symmetric Gram matrix, eigenvalue bounds, step size, and remainder bound.

[F1] A real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F2] The Euclidean norm satisfies the triangle inequality. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Proof

**Proof technique:** bound the spectral norm of the linear contraction and then square the residual-norm bound.

1.1 By [F1], the eigenvalues $\mu_j$ of $G$ lie in $[\lambda,\Lambda]$, so those of $I-\eta G$ lie in $[1-\eta\Lambda,1-\eta\lambda]\subseteq[0,1-\eta\lambda]$. Expanding $r$ in an orthonormal eigenbasis gives $\|(I-\eta G)r\|_2^2=\sum_j(1-\eta\mu_j)^2r_j^2\le(1-\eta\lambda)^2\|r\|_2^2$. The norm triangle inequality [F2] with the remainder hypothesis then yields $\|r^+\|_2\le(1-3\eta\lambda/4)\|r\|_2$. [F1, F2, given, algebra]

2.1 Put $t=\eta\lambda\in(0,1]$. Then $(1-3t/4)^2\le1-t/2$, since $1-t/2-(1-3t/4)^2=t(1-9t/16)\ge7t/16>0$. Squaring the estimate in step 1.1 and multiplying by $1/2$ yields $L^+\le(1-\eta\lambda/2)L$. [step 1.1, algebra] ∎
