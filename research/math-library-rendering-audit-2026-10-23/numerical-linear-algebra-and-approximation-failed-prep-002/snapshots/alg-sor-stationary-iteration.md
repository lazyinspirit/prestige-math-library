---
id: alg-sor-stationary-iteration
kind: algorithm
title: "Finite-budget successive over-relaxation stationary iteration"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.1"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 107–108: fixed-order SOR recurrence and the relaxation parameter."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 31"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf"
      locator: "PDF p. 5: SOR as relaxation of a fixed-order Gauss–Seidel sweep."
    - title: "Rutgers University MATH 574, Lecture Notes, §3 Matrix iterative methods"
      url: "https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf"
      locator: "PDF pp. 2–3: relaxation recurrence, matrix update, and failure/convergence parameter discussion."
---

## Definition

Input $n\ge1$, $A\in M_n(\mathbb C)$, $b,x^{(0)}\in\mathbb C^n$, a real
relaxation parameter $\omega$, and an iteration budget $m\in\mathbb N_0$.
Check dimensions; on a mismatch return `invalid-input`. If $\omega=0$, return
`invalid-relaxation`. Form $D,L,U$ by
[[def-diagonal-lower-upper-splitting-convention]]. If some diagonal entry of
$A$ is zero, return `pivot-failure(i)` for the least such index $i$.

Otherwise set

$$M_\omega=\omega^{-1}D-L,\qquad N_\omega=(\omega^{-1}-1)D+U,$$

so $A=M_\omega-N_\omega$. For each $k=0,\ldots,m-1$, solve

$$M_\omega x^{(k+1)}=N_\omega x^{(k)}+b$$

by forward substitution in increasing index order. The lower-triangular
coefficient matrix has diagonal entries $a_{ii}/\omega$, which are nonzero
after the checks. Return `completed` with $x^{(m)}$. The solve is unique by
[[def-forward-and-back-substitution-for-triangular-systems]] and
[[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]].
A zero budget returns $x^{(0)}$. This procedure is defined for every real
$\omega\ne0$; it reports no convergence or accuracy certificate.
