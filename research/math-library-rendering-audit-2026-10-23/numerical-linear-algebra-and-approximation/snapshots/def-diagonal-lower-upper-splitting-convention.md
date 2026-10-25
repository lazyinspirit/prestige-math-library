---
id: def-diagonal-lower-upper-splitting-convention
kind: definition
title: "Diagonal, lower, and upper parts in the stationary-iteration convention"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangular-and-diagonal-matrices-over-a-commutative-ring]
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.1"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 105–108: the diagonal/strict lower/strict upper decomposition used for Jacobi, Gauss–Seidel, and SOR."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 31"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf"
      locator: "PDF pp. 3–4: the fixed-order lower/upper splitting used for Gauss–Seidel and SOR."
---

## Definition

Let $F$ be either $\mathbb R$ or $\mathbb C$, let $n\ge1$, fix the coordinate
order $1,\ldots,n$, and let $A=(a_{ij})\in M_n(F)$. Define $D,L,U\in M_n(F)$
by

$$D_{ij}=\begin{cases}a_{ii}&i=j,\\0&i\ne j,\end{cases}\qquad L_{ij}=\begin{cases}-a_{ij}&i>j,\\0&i\le j,\end{cases}\qquad U_{ij}=\begin{cases}-a_{ij}&i<j,\\0&i\ge j.\end{cases}$$

Thus $D$ is diagonal, $L$ is strictly lower triangular, $U$ is strictly upper
triangular (in the sense of
[[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]), and
$A=D-L-U$. If $A=A^*$, then $U=L^*$, where $*$ denotes conjugate transpose.
The decomposition uses the fixed coordinate order and is an exact-arithmetic
identity.
