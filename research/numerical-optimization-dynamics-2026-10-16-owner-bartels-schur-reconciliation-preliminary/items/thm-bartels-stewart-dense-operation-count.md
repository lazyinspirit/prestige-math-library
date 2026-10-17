---
id: thm-bartels-stewart-dense-operation-count
kind: theorem
title: "A linearly budgeted dense Bartels-Stewart solve uses cubic arithmetic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-bartels-stewart-sylvester-equation
  - alg-finite-budget-francis-schur-reduction
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

For square dense inputs of order $n$, fix $c_0>0$ and use the algorithm budgets $N_A,N_B\le c_0n$ in [[alg-bartels-stewart-sylvester-equation]]. Counting scalar arithmetic operations and comparisons, including failure branches, the procedure uses $O(n^3)$ operations.

## Facts & Assumptions

**Given:** Square dense inputs and the linearly bounded sweep budgets in the statement.

[F1] [[alg-bartels-stewart-sylvester-equation]]: Each Schur candidate is obtained by [[alg-finite-budget-francis-schur-reduction]]; the procedure then checks exact Schur identities, forms two dense transforms, traverses block pairs, and solves local systems of dimension at most four.

[F2] [[alg-finite-budget-francis-schur-reduction]]: Its initialization reduces a dense matrix to Hessenberg form with Householder similarities; each sweep performs at most $n-2$ bounded-support bulge-chase reflector updates, with explicit finite sweep caps.

## Proof


1.1 Hessenberg reduction uses at most $\max(n-2,0)$ reflector steps. For $n\ge3$, forming one reflector costs $O(n)$ scalar operations, and applying its two-sided similarity to the remaining dense submatrix costs $O(n^2)$; summing over at most $n$ steps gives $O(n^3)$. For $n=1,2$, there are no such steps. [F2, algebra]

1.2 In a single Francis sweep there are at most $\max(n-2,0)$ length-two or length-three bulge reflectors. Each acts on a bounded number of rows and columns across at most $n$ entries, so one sweep and its deflation/status checks cost $O(n^2)$; for $n=1$ there is no active sweep. Budgets $N_A,N_B\le c_0n$ therefore make both Schur calls cost $O(n^3)$ in total. [F1, F2, given, algebra]

1.3 Each exact Schur-certificate matrix product, the transform $U^*CV$, and the final transform $UYV^*$ cost $O(n^3)$. The block substitution has at most $n^2$ block pairs; each pair sums at most $O(n)$ earlier blocks of bounded size and solves a system of dimension at most four, so all substitution work is $O(n^3)$. [F1, algebra]

2.1 The initial reductions, sweeps, certificates, transforms, block sums and fixed-size solves are finitely many $O(n^3)$ contributions, hence their total is $O(n^3)$. [step 1.1, step 1.2, step 1.3, algebra] ∎
