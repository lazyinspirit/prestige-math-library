---
id: cex-emx-cfl-endpoint
kind: counterexample
title: "CFL endpoint can have linear growth"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - alg-emx-staggered-leapfrog
  - thm-emx-leapfrog-cfl
justified_by: []
dependency_roles:
  alg-emx-staggered-leapfrog: mathematical-premise
  thm-emx-leapfrog-cfl: mathematical-premise
physical_scope: "Pure mathematics; no physical premise."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
aliases: []
verification:
  precheck: pending
sources:
  references:
    - title: "Gilbert Strang, The Wave Equation and Staggered Leapfrog, MIT 18.086 lecture notes, §5.3"
      url: "https://math.mit.edu/classes/18.086/2006/am53.pdf"
      locator: "Section 5.3, leapfrog growth factors and CFL threshold, PDF pp. 3–7."
    - title: "J. Zank, Topics in Finite Elements, Part I: Wave Equation, University of Vienna lecture notes"
      url: "https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf"
      locator: "Chapter 2, §2.3, strict CFL condition and stability, PDF pp. 12–17."
---

## Statement refuted

For the staggered leapfrog algorithm, replacing the strict condition $h\lVert K\rVert_2<2$ by $h\lVert K\rVert_2\le2$ guarantees a constant $C<\infty$, independent of the finite horizon $N$ and initial data, such that $\max_{0\le n\le N}\lVert(e_n,b_{n-1/2})\rVert_2\le C\lVert(e_0,b_{-1/2})\rVert_2$, where the pair norm is Euclidean on $\mathbb R^{n_e+n_b}$.

## Statement refuted references

[[thm-emx-leapfrog-cfl]]

[[alg-emx-staggered-leapfrog]]

## Facts & Assumptions

**Given:** $n_e=n_b=1$, $M_e=M_b=C=[1]$, $S=0$, $D=G=[0]$, $h=2$, zero forcing, and an arbitrary finite horizon $N\ge0$.

[F1] The staggered algorithm updates $b_{n+1/2}=b_{n-1/2}-hCe_n$ and $e_{n+1}=e_n+hM_e^{-1}C^TM_bb_{n+1/2}$ ([[alg-emx-staggered-leapfrog]]).

[F2] The matrix in the strict CFL condition is $K=M_b^{1/2}CM_e^{-1/2}$ and $\lVert K\rVert_2$ is its induced Euclidean operator norm ([[thm-emx-leapfrog-cfl]]).

## Counterexample

1.1 These one-dimensional data satisfy the matrix assumptions of the algorithm. Their positive mass roots equal $1$, so [F2] gives $K=[1]$ and $h\lVert K\rVert_2=2$, exactly the endpoint in the refuted extension. [given, F2, algebra]

2.1 Write $z_n:=(e_n,b_{n-1/2})^T$. By [F1], $z_{n+1}=Az_n$ with $A=\begin{pmatrix}-3&2\\-2&1\end{pmatrix}$. Set $J:=A+I=\begin{pmatrix}-2&2\\-2&2\end{pmatrix}$. Direct multiplication gives $J\ne0$ and $J^2=0$, so $A=-(I-J)$ and the binomial formula yields $A^n=(-1)^n(I-nJ)$ for every integer $n\ge0$. [given, F1, step 1.1, algebra]

3.1 For the nonzero initial state $z_0=(1,0)^T$, one has $Jz_0=(-2,-2)^T\ne0$. The reverse triangle inequality therefore gives $\lVert z_n\rVert_2=\lVert z_0-nJz_0\rVert_2\ge n\lVert Jz_0\rVert_2-\lVert z_0\rVert_2=2\sqrt2\,n-1$. These outputs occur in the algorithm for each finite horizon $N\ge n$ and their norm ratio to $\lVert z_0\rVert_2$ is unbounded as $n$ grows. No constant $C$ independent of $N$ can satisfy the refuted estimate. [given, step 2.1, algebra] ∎
