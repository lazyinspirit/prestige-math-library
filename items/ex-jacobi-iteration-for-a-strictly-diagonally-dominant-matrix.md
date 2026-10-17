---
id: ex-jacobi-iteration-for-a-strictly-diagonally-dominant-matrix
kind: example
title: "Jacobi iteration on a strictly row-diagonally-dominant system"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-jacobi-stationary-iteration
  - thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§4.1–4.2.3"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 105–107 and 119–122: Jacobi update and strict diagonal-dominance convergence criterion."
---

## Example

Take

$$A=\begin{pmatrix}5&1\\1&4\end{pmatrix},\qquad b=\binom23,\qquad x^{(0)}=\binom00.$$

Both rows are strictly diagonally dominant. The Jacobi iteration matrix is
$G_J=\begin{pmatrix}0&-1/5\\-1/4&0\end{pmatrix}$, with eigenvalues
$\pm1/\sqrt{20}$, and the exact solution is
$x_*=(5/19,13/19)^T$. The strict-dominance theorem therefore guarantees
convergence from every start to this solution.

## Facts & Assumptions

**Given:** The displayed $A$, $b$, and initial vector.

[F1] Jacobi uses $D=\operatorname{diag}(A)$ and the simultaneous update
$D x^{(k+1)}=(L+U)x^{(k)}+b$
([[alg-jacobi-stationary-iteration]]).

[L1] Strict row diagonal dominance guarantees Jacobi convergence to the
unique solution for every start ([[thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence]]).

## Verification


1.1 The row inequalities are $5>1$ and $4>1$. Direct multiplication gives $A(5/19,13/19)^T=(2,3)^T$, so the displayed vector is the exact solution. [given, algebra]

2.1 By [F1], $G_J=-D^{-1}(A-D)=\begin{pmatrix}0&-1/5\\-1/4&0\end{pmatrix}$, whose characteristic polynomial is $\lambda^2-1/20$. Thus $\rho(G_J)=1/\sqrt{20}<1$; [L1] gives convergence from every initial vector to the verified solution. [F1, L1, step 1.1, algebra] ∎
