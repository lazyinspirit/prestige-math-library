---
id: thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge
kind: theorem
title: "Irreducibly weak row diagonal dominance with a strict row guarantees Jacobi and Gauss–Seidel convergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-diagonal-lower-upper-splitting-convention
  - alg-jacobi-stationary-iteration
  - alg-gauss-seidel-stationary-iteration
  - lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction
  - def-stationary-iteration-from-a-matrix-splitting
  - thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.2.3"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 119–122, Theorem 4.9: Jacobi and Gauss–Seidel convergence for irreducibly diagonally dominant matrices, with at least one strict row."
---

## Statement

Let $n\ge1$ and $A=(a_{ij})\in M_n(\mathbb R)$ satisfy weak row diagonal
dominance

$$|a_{ii}|\ge\sum_{j\ne i}|a_{ij}|\qquad(i=1,\ldots,n),$$

with strict inequality in at least one row. Assume the directed off-diagonal
graph, with edge $i\to j$ when $i\ne j$ and $a_{ij}\ne0$, is strongly
connected (paths of length $0$ are allowed). Then the Jacobi and fixed-order
Gauss–Seidel iterations defined by [[alg-jacobi-stationary-iteration]] and
[[alg-gauss-seidel-stationary-iteration]] converge in exact arithmetic to the
unique solution of $Ax=b$ for every $b,x^{(0)}\in\mathbb R^n$.

## Facts & Assumptions

**Given:** $n\ge1$, a real matrix $A$ satisfying the displayed weak row inequalities, at least one strict row, and a strongly connected directed off-diagonal graph.

[A1] Every row satisfies $|a_{ii}|\ge\sum_{j\ne i}|a_{ij}|$, with at least one strict row; the off-diagonal graph has edges $i\to j$ exactly when $a_{ij}\ne0$ and is strongly connected.

[L1] $A=D-L-U$, where $D$ is diagonal and $L,U$ are the negative strict lower and upper parts ([[def-diagonal-lower-upper-splitting-convention]]).

[F1] Jacobi has iteration matrix $G_J=D^{-1}(L+U)$ ([[alg-jacobi-stationary-iteration]]).

[F2] Fixed-order Gauss–Seidel has iteration matrix $G_G=(D-L)^{-1}U$ ([[alg-gauss-seidel-stationary-iteration]]).

[L2] For the comparison matrix $C\ge0$ with row sums at most $1$, strongly connected positive-entry graph, and a strict row, there is $v>0$ with $Cv<v$ ([[lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction]]).

[L3] In a stationary split $A=M-N$, the update has iteration matrix $G=M^{-1}N$ ([[def-stationary-iteration-from-a-matrix-splitting]]).

[L4] A stationary iteration converges to the unique solution for every right-hand side and every start exactly when $\rho(G)<1$ ([[thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one]]).

[L5] A lower-triangular system with nonzero diagonal has a unique forward substitution solution ([[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]).

## Proof


1.1 If $n>1$ and $a_{ii}=0$, [A1] forces every off-diagonal entry in row $i$ to vanish, contradicting strong connectivity. If $n=1$, the strict-row hypothesis forces $|a_{11}|>0$. Hence every diagonal entry is nonzero, and the Jacobi and lower-triangular Gauss–Seidel solves are defined by [L5]. [A1, L5, algebra]

2.1 Define $C_{ii}=0$ and $C_{ij}=|a_{ij}|/|a_{ii}|$ for $i\ne j$. Its row sums are at most $1$, one is strictly below $1$, and its positive-entry graph is the graph in [A1]. By [L2], choose $v>0$ with $Cv<v$, and set $q_J=\max_i (Cv)_i/v_i<1$. [A1, L1, L2, step 1.1, algebra]

3.1 By [F1], $|G_J|=C$ entrywise. For $\|z\|_v:=\max_i |z_i|/v_i$, nonnegativity gives $|G_Jz|\le C|z|\le\|z\|_v Cv\le q_J\|z\|_v v$. Thus every eigenvalue $\lambda$ of $G_J$ satisfies $|\lambda|\le q_J<1$, so $\rho(G_J)<1$. [F1, step 2.1, algebra]

3.2 Set $B_L=|D|^{-1}|L|$ and $B_U=|D|^{-1}|U|$. Then $C=B_L+B_U$, $B_L$ is strictly lower triangular, and $(I-B_L)^{-1}=\sum_{r=0}^{n-1}B_L^r\ge I$. Thus $H:=(I-B_L)^{-1}B_U=\sum_{r=0}^{n-1}B_L^rB_U\ge0$. Since $(I-B_L)v-B_Uv=(I-C)v>0$, multiplying by $(I-B_L)^{-1}\ge I$ gives $Hv<v$. Consequently $q_G:=\max_i(Hv)_i/v_i<1$. [A1, L1, step 2.1, algebra]

4.1 Because $D-L=D(I-D^{-1}L)$ and $D^{-1}L$ is strictly lower triangular, $(D-L)^{-1}U=\sum_{r=0}^{n-1}(D^{-1}L)^rD^{-1}U$. Entrywise absolute values obey $|XY|\le|X||Y|$, so $|G_G|\le H$. The same weighted-vector estimate as in step 3.1 yields $\|G_Gz\|_v\le q_G\|z\|_v$; hence $\rho(G_G)<1$. [F2, L1, step 3.2, algebra]

5.1 By [L3]–[L4], the two spectral-radius bounds imply convergence to the unique solution of $Ax=b$ for every right-hand side and every initial vector. [L3, L4, step 3.1, step 4.1] ∎
