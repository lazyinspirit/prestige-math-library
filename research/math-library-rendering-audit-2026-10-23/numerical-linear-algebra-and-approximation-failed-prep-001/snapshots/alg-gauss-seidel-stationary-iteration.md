---
id: alg-gauss-seidel-stationary-iteration
kind: algorithm
title: "Finite-budget Gauss–Seidel stationary iteration"
status: published
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
      locator: "Printed pp. 106–108: fixed-order Gauss–Seidel sweep and its lower-triangular splitting."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 31"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf"
      locator: "PDF pp. 3–4: lexicographic Gauss–Seidel update and lower-triangular solve."
    - title: "Rutgers University MATH 574, Lecture Notes, §3 Matrix iterative methods"
      url: "https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf"
      locator: "PDF p. 1: sequential Gauss–Seidel updates and splitting."
---

## Definition

Input $n\ge1$, $A\in M_n(\mathbb C)$, $b,x^{(0)}\in\mathbb C^n$, and an
iteration budget $m\in\mathbb N_0$. Use the fixed order $1,\ldots,n$. Check
dimensions; on a mismatch return `invalid-input`. Form $D,L,U$ by
[[def-diagonal-lower-upper-splitting-convention]]. If some diagonal entry of
$A$ is zero, return `pivot-failure(i)` for the least such index $i$.

Otherwise set $M=D-L$ and $N=U$, so $A=M-N$. For each
$k=0,\ldots,m-1$, solve the lower-triangular system

$$ (D-L)x^{(k+1)}=Ux^{(k)}+b $$

by forward substitution in increasing index order. Equivalently, the component
updates are

$$x_i^{(k+1)}=\frac{b_i+\sum_{j<i}L_{ij}x_j^{(k+1)}+\sum_{j>i}U_{ij}x_j^{(k)}}{a_{ii}},\qquad i=1,\ldots,n.$$

Return `completed` with $x^{(m)}$. The lower-triangular solve is unique after
the pivot check by [[def-forward-and-back-substitution-for-triangular-systems]]
and [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]].
After the dimension and pivot checks succeed, a zero budget returns
`completed` with $x^{(0)}$. The procedure reports no convergence or accuracy
certificate.
