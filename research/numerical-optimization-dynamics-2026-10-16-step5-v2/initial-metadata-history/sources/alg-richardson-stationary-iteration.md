---
id: alg-richardson-stationary-iteration
kind: algorithm
title: "Finite-budget Richardson stationary iteration"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-stationary-iteration-from-a-matrix-splitting]
dependency_level: 0
verification:
  precheck: n/a
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.2.1"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed p. 116, Example 4.1: the Richardson update (4.31) and iteration matrix (4.32); the example takes its parameter nonnegative."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 31"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf"
      locator: "PDF pp. 1–2: matrix-splitting iteration and Richardson update."
    - title: "Rutgers University MATH 574, Lecture Notes, §3 Matrix iterative methods"
      url: "https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf"
      locator: "PDF pp. 1–2: splitting recurrence and spectral-radius convergence criterion."
---

## Definition

Input $n\ge1$, $A\in M_n(\mathbb C)$, $b,x^{(0)}\in\mathbb C^n$, a real
relaxation parameter $\omega$, and an iteration budget $m\in\mathbb N_0$.
First, if dimensions do not match, return `invalid-input`. Otherwise, if
$\omega=0$, return `invalid-relaxation`. If both checks pass, set
$M=\omega^{-1}I_n$ and $N=M-A$, and for
$k=0,\ldots,m-1$ set

$$x^{(k+1)}=M^{-1}Nx^{(k)}+M^{-1}b =x^{(k)}+\omega\bigl(b-Ax^{(k)}\bigr).$$

Return `completed` with $x^{(m)}$. This is the stationary iteration of
[[def-stationary-iteration-from-a-matrix-splitting]] for $A=M-N$; $M$ is
invertible because $\omega\ne0$. The budget may be zero, in which case the
output is $x^{(0)}$. The procedure reports no convergence or accuracy
certificate.
