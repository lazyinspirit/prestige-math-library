---
id: alg-jacobi-stationary-iteration
kind: algorithm
title: "Finite-budget Jacobi stationary iteration"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-diagonal-lower-upper-splitting-convention
  - def-stationary-iteration-from-a-matrix-splitting
  - def-forward-and-back-substitution-for-triangular-systems
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
dependency_level: 1
verification:
  precheck: n/a
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.1"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 105–107: Jacobi update, diagonal splitting, and stationary iteration matrix."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 31"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf"
      locator: "PDF pp. 1–3: splitting form and Jacobi component update."
    - title: "Rutgers University MATH 574, Lecture Notes, §3 Matrix iterative methods"
      url: "https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf"
      locator: "PDF p. 1: diagonal splitting and simultaneous Jacobi updates."
---

## Definition

Input $n\ge1$, $A\in M_n(\mathbb C)$, $b,x^{(0)}\in\mathbb C^n$, and an
iteration budget $m\in\mathbb N_0$. Check dimensions; on a mismatch return
`invalid-input`. Form $D,L,U$ by
[[def-diagonal-lower-upper-splitting-convention]]. If some diagonal entry of
$A$ is zero, return `pivot-failure(i)` for the least such index $i$.

Otherwise set $M=D$ and $N=L+U$, so $A=M-N$. For each
$k=0,\ldots,m-1$, compute the diagonal solve

$$D x^{(k+1)}=(L+U)x^{(k)}+b,$$

equivalently, simultaneously for every $i$,

$$x_i^{(k+1)}=\frac{b_i-\sum_{j\ne i}a_{ij}x_j^{(k)}}{a_{ii}}.$$

Return `completed` with $x^{(m)}$. The solve is the unique diagonal instance of
[[def-forward-and-back-substitution-for-triangular-systems]] when the pivot
check succeeds; [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]
gives its well-definedness. A zero budget returns $x^{(0)}$. The procedure
reports no convergence or accuracy certificate.
