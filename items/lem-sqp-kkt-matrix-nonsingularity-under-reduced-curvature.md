---
id: lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
kind: lemma
title: "The SQP KKT matrix is nonsingular under positive reduced curvature"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-sqp-linearized-quadratic-subproblem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.1, Assumption 18.1 and KKT system (18.7), printed pp. 529–530 / PDF pp. 547–548."
---

## Statement

Let $A\in\mathbb R^{r\times n}$ have full row rank, where $0\le r\le n$,
and let $H\in\mathbb R^{n\times n}$ be symmetric and positive definite on
$\ker A$: $z^THz>0$ whenever $0\ne z\in\ker A$. Then
$$K=\begin{bmatrix}H&A^T\\A&0\end{bmatrix}$$
is nonsingular. Here the zero-row case $r=0$ is allowed.

## Facts & Assumptions

**Given:** The matrix hypotheses in the Statement and the SQP KKT block
convention of [[def-sqp-linearized-quadratic-subproblem]].

[A1] $A$ has full row rank, and $H$ is positive definite on $\ker A$, as
stated.

[F1] [[def-sqp-linearized-quadratic-subproblem]] stacks equality rows before
active inequality rows in the displayed saddle matrix. Independence is the
full-row-rank hypothesis [A1], not a consequence of that definition.

## Proof

1.1 Suppose $K\binom{z}{\mu}=0$. Its lower block gives $Az=0$, so $z\in\ker A$; multiplying the upper block $Hz+A^T\mu=0$ by $z^T$ gives $z^THz=0$. Positive definiteness on $\ker A$ forces $z=0$. [given, F1, algebra]

2.1 With $z=0$, the upper block gives $A^T\mu=0$. Full row rank of $A$ means $A^T$ is injective, so $\mu=0$. Thus the square matrix $K$ has trivial kernel and is nonsingular; when $r=0$, the same argument says $H$ has trivial kernel. [given, step 1.1, algebra] ∎
