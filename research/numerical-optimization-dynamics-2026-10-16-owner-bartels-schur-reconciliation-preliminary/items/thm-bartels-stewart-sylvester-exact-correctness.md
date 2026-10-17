---
id: thm-bartels-stewart-sylvester-exact-correctness
kind: theorem
title: "Successful certified Bartels-Stewart substitution returns the exact Sylvester solution"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-bartels-stewart-sylvester-equation
  - thm-sylvester-unique-solvability-spectral-separation
  - def-sylvester-operator-and-separation-number
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

Suppose [[alg-bartels-stewart-sylvester-equation]] returns `success` for $A,B,C$. Then its returned $X$ satisfies $AX+XB=C$. If $\sigma(A)\cap(-\sigma(B))=\varnothing$, this $X$ is the unique solution.

## Facts & Assumptions

**Given:** The exact algorithm and a successful output $X=UYV^*$.

[F1] [[alg-bartels-stewart-sylvester-equation]]: Success requires exact Schur certificates, and the block traversal solves $T_{ii}Y_{ij}+Y_{ij}S_{jj}=D_{ij}-\sum_{k>i}T_{ik}Y_{kj}-\sum_{\ell<j}Y_{i\ell}S_{\ell j}$ for every block pair.

[F2] [[def-sylvester-operator-and-separation-number]]: $\mathcal S_{A,B}(X)=AX+XB$.

[F3] [[thm-sylvester-unique-solvability-spectral-separation]]: The spectral-disjointness condition is equivalent to unique solvability for every right-hand side.

## Proof


1.1 By [F1], $A=UTU^*$, $B=VSV^*$, and $D=U^*CV$ hold exactly. Multiplying $AX+XB$ on the left by $U^*$ and on the right by $V$ gives $TY+YS$. [F1, algebra]

2.1 In the $(i,j)$ block, $TY+YS$ equals $T_{ii}Y_{ij}+Y_{ij}S_{jj}+\sum_{k>i}T_{ik}Y_{kj}+\sum_{\ell<j}Y_{i\ell}S_{\ell j}$. The successful local solve from [F1] makes this block equal $D_{ij}$, so every block of $TY+YS$ equals the corresponding block of $D$. [F1, step 1.1, algebra]

3.1 Therefore $TY+YS=D=U^*CV$. Multiplying by $U$ on the left and $V^*$ on the right yields $A(UYV^*)+(UYV^*)B=C$. By [F2], this is $\mathcal S_{A,B}(X)=C$ for the returned $X=UYV^*$. [F2, step 1.1, step 2.1, algebra]

4.1 Under the stated spectral-disjointness condition, [F3] gives uniqueness for this right-hand side; hence the returned exact solution is the unique one. [F3, step 3.1] ∎
