---
id: ex-unrestarted-and-restarted-gmres-on-a-diagonal-system
kind: example
title: "Unrestarted GMRES solves a two-dimensional diagonal system before GMRES(1) restarts"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gmres-iterate, def-restarted-gmres-m,
       def-krylov-subspace-of-a-matrix-and-start-vector]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§6.4–6.5, printed pp. 179–193"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "GMRES minimization and restarting. All numerical computations are verified directly."
---

## Statement

Let $A=\operatorname{diag}(1,2)$, $b=(1,1)^{\mathsf T}$, and $x_0=0$.
Verify that unrestarted GMRES reaches the exact solution by step $2$, whereas
the first GMRES$(1)$ cycle leaves residual $(2/5,-1/5)^{\mathsf T}\ne0$.

## Facts & Assumptions

**Given:** The real diagonal system and starting vector in the Statement.

[F1] [[def-gmres-iterate]]: GMRES minimizes $\|b-Ax\|_2$ over
$x_0+K_m(A,b)$.

[F2] [[def-krylov-subspace-of-a-matrix-and-start-vector]]:
$K_m(A,b)=\operatorname{span}\{b,Ab,\ldots,A^{m-1}b\}$.

[F3] [[def-restarted-gmres-m]]: GMRES$(1)$ completes one GMRES step at the
current guess and then starts a new cycle from the resulting residual.

## Proof

1.1 We have $Ab=(1,2)^{\mathsf T}$ and the determinant of the matrix with columns $b,Ab$ is $1\cdot2-1\cdot1=1\ne0$. Thus $K_2(A,b)=\mathbb R^2$. The exact solution is $x_*=A^{-1}b=(1,1/2)^{\mathsf T}\in K_2(A,b)$, so the minimum residual in [F1] is zero at step $2$. [given, F1, F2, algebra]

2.1 In the first GMRES$(1)$ cycle, [F1] restricts $x_1$ to $x_0+yb=yb$ for a scalar $y$. Its residual is $b-yAb=(1-y,1-2y)^{\mathsf T}$, whose squared norm is $(1-y)^2+(1-2y)^2=5(y-3/5)^2+1/5$. The unique minimizer is $y=3/5$, and the residual is $(2/5,-1/5)^{\mathsf T}$, which is nonzero. By [F3] this is the first-cycle residual before any restart. [given, F1, F3, algebra] ∎
