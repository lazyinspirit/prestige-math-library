---
id: thm-revised-dual-simplex-invariant-and-farkas
kind: theorem
title: "Dual-simplex invariant and Farkas infeasibility certificate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-revised-simplex-standard-form-linear-program
  - def-revised-simplex-basis-dictionary
  - alg-revised-dual-simplex-with-finite-budget
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 3
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§4.3 and 4.5–4.6"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §§2.4–3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Statement

Let $B$ be a basis of the minimization problem for which all nonbasic reduced costs are nonnegative. At an iteration of [[alg-revised-dual-simplex-with-finite-budget]], a pivot chosen from a row $i$ with $x_{B_i}<0$ and a column $j$ with $d_{ij}=(A_B^{-1}a_j)_i<0$ minimizing $\bar c_j/(-d_{ij})$ preserves dual feasibility. If there is no nonbasic $j$ with $d_{ij}<0$, then $q=A_B^{-\mathsf T}e_i$ satisfies $A^{\mathsf T}q\ge0$ and $b^{\mathsf T}q<0$, so $q$ is a Farkas infeasibility certificate as defined in [[def-revised-simplex-standard-form-linear-program]] and the primal problem is infeasible. If the current basis is both primal and dual feasible, it is optimal. A finite pivot-budget exhaustion is inconclusive and does not assert infeasibility or convergence.

## Facts & Assumptions

**Given:** Exact standard-form data, a basis $B$, a dual-feasible multiplier $y=A_B^{-\mathsf T}c_B$, and the dual-simplex row and ratio choices.

[F1] [[def-revised-simplex-basis-dictionary]]: For every column $j$, its reduced cost is $\bar c_j=c_j-a_j^{\mathsf T}y(B)$.

[F2] [[alg-revised-dual-simplex-with-finite-budget]]: Among $j$ with $d_{ij}<0$, choose one minimizing $\bar c_j/(-d_{ij})$, with least variable index among ties.

[F3] [[def-revised-simplex-standard-form-linear-program]]: A vector $q\in\mathbb R^m$ satisfying $A^{\mathsf T}q\ge0$ and $b^{\mathsf T}q<0$ is called a **Farkas infeasibility certificate** for this sign convention.

## Proof


1.1 Fix an eligible pivot $(i,j)$ and put $q=A_B^{-\mathsf T}e_i$. With $\alpha=\bar c_j/d_{ij}\le0$, the vector $y'=y+\alpha q$ satisfies $a_j^{\mathsf T}y'=c_j$, so the entering column has new reduced cost zero. The leaving basic column $a_{B_i}$ has $q^{\mathsf T}a_{B_i}=1$, hence its new reduced cost is $-\alpha\ge0$. [F1, F2, algebra]

1.2 If no nonbasic column has $d_{ij}<0$, then $A^{\mathsf T}q\ge0$: the basic columns give the coordinates of $e_i$, and every nonbasic column has nonnegative $i$th transformed entry. Also $b^{\mathsf T}q=e_i^{\mathsf T}A_B^{-1}b=x_{B_i}<0$. By [F3], $q$ is a Farkas infeasibility certificate; any feasible $x\ge0$ would give $b^{\mathsf T}q=x^{\mathsf T}A^{\mathsf T}q\ge0$, a contradiction. [F1, F2, F3, algebra]

2.1 For any other nonbasic $k$, write $d_{ik}=q^{\mathsf T}a_k$. Its new reduced cost is $\bar c'_k=\bar c_k-\alpha d_{ik}$. If $d_{ik}\ge0$, this is nonnegative because $\alpha\le0$. If $d_{ik}<0$, the ratio rule gives $\bar c_j/(-d_{ij})\le\bar c_k/(-d_{ik})$, so $\bar c'_k=(-d_{ik})(\bar c_k/(-d_{ik})-\bar c_j/(-d_{ij}))\ge0$. Thus every new nonbasic reduced cost is nonnegative. [F1, F2, step 1.1, algebra]

3.1 If the basis is primal feasible, its basic vector $x$ and dual-feasible $y$ satisfy $c^{\mathsf T}x=b^{\mathsf T}y$, because $c_B^{\mathsf T}A_B^{-1}b=y^{\mathsf T}b$. For every feasible $z$, $A^{\mathsf T}y\le c$ and $z\ge0$ imply $c^{\mathsf T}z\ge b^{\mathsf T}y=c^{\mathsf T}x$, so $x$ is optimal. The algorithm's budget-exhausted branch asserts no further mathematical conclusion. [F1, F2, algebra] ∎
