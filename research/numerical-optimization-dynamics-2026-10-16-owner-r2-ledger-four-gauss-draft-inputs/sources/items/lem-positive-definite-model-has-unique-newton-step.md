---
id: lem-positive-definite-model-has-unique-newton-step
kind: lemma
title: "A positive-definite trust-region model has a unique unconstrained Newton step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-trust-region-quadratic-model-and-ratio
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-definite-and-indefinite-hessian-quadratic-forms
  - def-invertible-euclidean-linear-map
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.1, printed pp. 73–76 / PDF pp. 93–96: positive-definite model and its unique unconstrained Newton minimizer."
---

## Statement

Let $B$ be the real symmetric positive-definite model matrix of
[[def-trust-region-quadratic-model-and-ratio]], with $n\ge1$ and
$g\in\mathbb R^n$. Positive definiteness and invertibility use
[[def-definite-and-indefinite-hessian-quadratic-forms]] and
[[def-invertible-euclidean-linear-map]]. Then there is a unique
$p_N\in\mathbb R^n$ satisfying $Bp_N=-g$.

## Facts & Assumptions

**Given:** The hypotheses in the Statement and the spectral theorem for the
finite-dimensional Euclidean space.

[F1] [[def-definite-and-indefinite-hessian-quadratic-forms]]: positive
definiteness means $v^TBv>0$ for every nonzero $v$.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real
symmetric matrix has an orthonormal eigenbasis.

[F3] [[def-invertible-euclidean-linear-map]]: an invertible Euclidean linear
map has a two-sided linear inverse.

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], write $B=U\operatorname{diag}(\mu_1,\ldots,\mu_n)U^T$ with $U$ orthogonal. For each unit eigenvector $u_i$, [F1] gives $\mu_i=u_i^TBu_i>0$. Thus $C:=U\operatorname{diag}(1/\mu_1,\ldots,1/\mu_n)U^T$ satisfies $CB=BC=I$, so it is an inverse map. [given, F1, F2, algebra]

2.1 By [F3], $B$ is invertible, and $p_N:=-Cg$ solves $Bp_N=-g$. If $p$ is another solution, then $B(p-p_N)=0$; applying $C$ gives $p=p_N$. This proves existence and uniqueness. [step 1.1, F3, algebra] ∎
