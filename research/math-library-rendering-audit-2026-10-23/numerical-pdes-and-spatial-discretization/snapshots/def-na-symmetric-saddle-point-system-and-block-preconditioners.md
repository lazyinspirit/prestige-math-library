---
id: def-na-symmetric-saddle-point-system-and-block-preconditioners
kind: definition
title: "Symmetric saddle-point system, Schur complement, and block preconditioners"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - def-invertible-matrix-and-general-linear-group
  - def-block-lu-factorisation
  - def-left-right-and-symmetric-positive-definite-preconditioning
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-reals-field
justified_by: [thm-na-saddle-point-exact-schur-solve]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michele Benzi, Gene H. Golub, and Jörg Liesen, Numerical solution of saddle point problems"
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf"
      locator: "§3.1, printed pp. 14–15, and §10.1, printed pp. 61–63: block factorization, Schur complement, and block-diagonal preconditioning."
verification:
  precheck: n/a
---

## Definition

Let $n,m\ge1$, $V=M_{n\times1}(\mathbb R)$, and
$Q=M_{m\times1}(\mathbb R)$. Let $A\in M_n(\mathbb R)$ be symmetric
positive definite, let $B\in M_{m\times n}(\mathbb R)$ have full row rank
(meaning $B^Tq=0$ implies $q=0$), and let
$M_Q\in M_m(\mathbb R)$ be symmetric positive definite. The saddle system
and its matrix are
$$ K=\begin{pmatrix}A&B^T\\B&0\end{pmatrix},\qquad Au+B^Tp=f,\quad Bu=g. $$
Define the positive pressure Schur matrix
$$ S:=BA^{-1}B^T. $$
In the block-LU convention of [[def-block-lu-factorisation]], the trailing
Schur complement of $A$ in $K$ is $-S$. The exact block solve first solves
$Au_0=f$, then $Sp=Bu_0-g$, and finally $Au=f-B^Tp$; the theorem
[[thm-na-saddle-point-exact-schur-solve]] verifies this procedure and
well-definedness.

For a scaling $\gamma>0$, the pressure-mass block-diagonal preconditioner is
$$ P_\gamma=\operatorname{diag}(A,\gamma M_Q). $$
It is symmetric positive definite. If $P_\gamma=CC^T$ is its Cholesky
factorization with $C$ lower triangular and positive on the diagonal, the
symmetric preconditioned system is $C^{-1}KC^{-T}y=C^{-1}r$, with the usual
change of unknown. This is the symmetric-preconditioning convention of
[[def-left-right-and-symmetric-positive-definite-preconditioning]]. No
spectral bound, Krylov iteration count, complexity estimate, or generic speed
improvement is part of this definition.
