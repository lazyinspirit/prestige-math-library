---
id: lem-primal-dual-lp-qp-newton-matrix-nonsingular
kind: lemma
title: "The LP/QP primal-dual Newton matrix is nonsingular from a strict positive start"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-barrier-central-path-and-newton-residuals
  - def-conic-optimization-primal-dual-models
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.7.1, primal-dual Newton equations and positive-definite coefficient blocks."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full lecture, LP standard form and primal-dual context."
---

## Statement

Let $Q\succeq0$ be symmetric, let $A\in\mathbb R^{p\times n}$ have full row rank, and let $x,s\in\mathbb R^n$ have strictly positive coordinates. Then the LP/QP Newton matrix
$$M=\begin{bmatrix}Q&-A^T&-I\\ A&0&0\\ S&0&X\end{bmatrix},\qquad X=\operatorname{diag}(x),\quad S=\operatorname{diag}(s),$$
is nonsingular.

## Facts & Assumptions

**Given:** The matrix and residual convention of [[def-barrier-central-path-and-newton-residuals]], with $Q\succeq0$, full-row-rank $A$, and $x,s>0$.

[F1] The Newton equations have first block $Q\Delta x-A^T\Delta y-\Delta s$, second block $A\Delta x$, and complementarity block $S\Delta x+X\Delta s$ ([[def-barrier-central-path-and-newton-residuals]]).

[F2] A full-row-rank matrix has injective transpose, and a symmetric positive-semidefinite $Q$ satisfies $u^TQu\ge0$ ([[def-conic-optimization-primal-dual-models]]).

## Proof

1.1 Let $(u,v,w)$ lie in the kernel of $M$. The last block equation is $Su+Xw=0$. Since $X$ is invertible, $w=-X^{-1}Su=-Du$, where $D=\operatorname{diag}(s_i/x_i)\succ0$. Substituting into the first block gives $(Q+D)u-A^Tv=0$, and the second block gives $Au=0$. [F1, given, algebra]

2.1 Take the inner product of $(Q+D)u-A^Tv=0$ with $u$. Since $Au=0$, this yields $u^TQu+u^TDu=0$. Both terms are nonnegative by [F2], and $D\succ0$, so $u=0$. The first block then gives $A^Tv=0$, hence $v=0$ by [F2], and the last block gives $w=0$. The square matrix $M$ has trivial kernel and is therefore nonsingular. [F2, step 1.1, algebra] ∎
