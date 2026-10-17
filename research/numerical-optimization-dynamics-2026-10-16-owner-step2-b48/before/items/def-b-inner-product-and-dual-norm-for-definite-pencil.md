---
id: def-b-inner-product-and-dual-norm-for-definite-pencil
kind: definition
title: "The B-inner product, B-norm, and dual residual norm"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - def-inner-product-space
  - def-inner-product-norm
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §11.4"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Definition

Let $B\in\mathbb F^{n\times n}$, $\mathbb F\in\{\mathbb R,\mathbb C\}$,
be Hermitian positive definite, with Cholesky factor $B=LL^*$ and $L$ lower
triangular with positive diagonal. This factor exists and is unique by
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]].
Define the linear-first **B-inner product** by
$$\langle x,y\rangle_B:=y^*Bx,$$
the **B-norm** by
$$\|x\|_B:=\|L^*x\|_2=\sqrt{x^*Bx},$$
and the **B-dual residual norm** by
$$\|r\|_{B^{-1}}:=\|L^{-1}r\|_2 =\sqrt{r^*B^{-1}r}.$$
The B-orthogonality condition is $x^*By=0$; since $B=B^*$ it is equivalent
to $\langle x,y\rangle_B=0$.
