---
dependency_level: 0
id: lem-bs07-constrained-positive-quadratic-minimum-and-derivative
kind: lemma
title: The constrained positive quadratic minimum and BS07 derivative identity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-rank-nullity
- thm-logarithm-derivative-and-integral
- thm-algebra-of-derivatives
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf
    locator: Section4.1 Lemma4.1 and equation4.4; finite-dimensional argument
---

## Statement

Let $A$ be a real symmetric positive-definite $M\times M$ matrix, $M\ge1$, and let $y\in\mathbb R^M$ be nonzero. Put $q=y^{\mathsf t}A^{-1}y$. Then $q>0$, the unique minimizer of $x^{\mathsf t}Ax$ subject to $x^{\mathsf t}y=1$ is $x_*=A^{-1}y/q$, and the minimum is $q^{-1}$. If $y=y(r)$ is continuously differentiable and never zero on a real interval, keep $A$ fixed, define $x(r)$ by this formula and $h_r(t)=(x(r)^{\mathsf t}y(t))^2$. Then
$$
\frac{d}{dr}\log q(r)=\left.\frac{d}{dt}h_r(t)\right|_{t=r}.
$$
This finite-dimensional identity does not establish positive definiteness of any spectral trace matrix.

## Facts & Assumptions

**Given:** The matrix, vectors and differentiable curve specified in the Statement.

[F1] Rank-nullity holds in finite dimension. [[thm-rank-nullity]]

[F2] Differentiation obeys the algebra rules and $(\log q)'=q'/q$ for positive differentiable $q$. [[thm-logarithm-derivative-and-integral]] [[thm-algebra-of-derivatives]]

## Proof

1.1 If $Az=0$ for $z\ne0$, then $z^{\mathsf t}Az=0$, contradicting positive definiteness. Thus the kernel is zero and [F1] gives invertibility. If $v=A^{-1}y$, then $v\ne0$ and $q=y^{\mathsf t}A^{-1}y=v^{\mathsf t}Av>0$. Symmetry of $A^{-1}$ follows by transposing $AA^{-1}=I$. Hence $x_*^{\mathsf t}y=1$ and $x_*^{\mathsf t}Ax_*=q^{-1}$. [given, F1, algebra]

2.1 For any other admissible $x$, put $z=x-x_*$. Then $z^{\mathsf t}y=0$, so $z^{\mathsf t}Ax_*=q^{-1}z^{\mathsf t}y=0$. Expansion yields $x^{\mathsf t}Ax=q^{-1}+z^{\mathsf t}Az\ge q^{-1}$, with equality only if $z=0$. This proves the minimum and its uniqueness directly. [given, step 1.1, algebra]

3.1 For the curve, differentiation gives $q'(r)=2y'(r)^{\mathsf t}A^{-1}y(r)$. In $h_r$, the vector $x(r)$ is held fixed when differentiating in $t$, and $x(r)^{\mathsf t}y(r)=1$. Thus $\partial_t h_r(t)|_{t=r}=2x(r)^{\mathsf t}y'(r)=q'(r)/q(r)=d\log q(r)/dr$. The distinction between the two derivatives is explicit. [given, F2, step 1.1, step 2.1, algebra] ∎
