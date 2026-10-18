---
id: alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve
kind: algorithm
title: "General-RHS Hermitian Toeplitz solve by reflection recursion and Gohberg–Semencul"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-durbin-levinson-forecast-recursion
  - def-displacement-rank-generators-and-lower-shift
  - def-matrix-product-and-identity-matrix
  - def-toeplitz-circulant-and-displacement-notation
  - lem-complex-hermitian-toeplitz-reflection-recursion
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "George Labahn and Tamir Shalom, Inversion of Toeplitz Matrices with Only Two Standard Equations, Theorem 1.1"
      url: "https://cs.uwaterloo.ca/~glabahn/Papers/tamir-george-1.pdf"
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and Engineering, Lecture Document, §4.5.3"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
---

## Definition

**Input:** An integer $n\ge1$, a Hermitian Toeplitz lag list $(t_{-(n-1)},\ldots,t_{n-1})$ satisfying $t_{-r}=\overline{t_r}$, and a right-hand side $b\in\mathbb C^n$. All arithmetic in this definition is exact. The real covariance forecast procedure remains [[alg-durbin-levinson-forecast-recursion]]; this procedure solves a general Hermitian matrix equation with arbitrary $b$.

**Output:** Either a vector $x\in\mathbb C^n$ or one of the statuses invalid-input, nonpositive-pivot(k), or zero-gohberg-semencul-denominator.

1. Reject invalid-input if the lag list or right-hand side has the wrong length, or if the Hermitian lag equalities fail. Set $T_{ij}=t_{i-j}$.
2. If $t_0\le0$, return nonpositive-pivot(0). Initialize $\phi_0$ empty and $\nu_0=t_0$. For $k=0,\ldots,n-2$, form $g_k=(t_1,\ldots,t_k)^T$, $c_k=J_k\overline{g_k}$, and
   $$\alpha_{k+1}=(t_{k+1}-c_k^*\phi_k)/\nu_k,\qquad \phi_{k+1}=(\phi_k-J_k\overline{\phi_k}\,\alpha_{k+1},\,\alpha_{k+1})^T,\qquad \nu_{k+1}=\nu_k(1-|\alpha_{k+1}|^2).$$
   If a required $\nu_k$ is not positive, return nonpositive-pivot(k) before dividing; if a newly computed $\nu_{k+1}\le0$, return nonpositive-pivot(k+1).
3. With $\phi=\phi_{n-1}$ and $\nu=\nu_{n-1}$, form
   $$v=(-J_{n-1}\overline{\phi}/\nu,\ 1/\nu)^T,\qquad u=J_n\overline v.$$
   If $u_0=0$, return zero-gohberg-semencul-denominator.
4. Do not form dense triangular matrices. For any $a,y\in\mathbb C^n$, compute
   $$(L(a)y)_i=\sum_{j=0}^{i}a_{i-j}y_j,\qquad (L(a)^*y)_i=\sum_{j=i}^{n-1}\overline{a_{j-i}}y_j.$$
   Return
   $$x=\bigl(L(u)L(u)^*b-L(Z_nv)L(Z_nv)^*b\bigr)/u_0,$$
   evaluating the four triangular products successively with vector workspace.

For a Hermitian positive-definite input, [[lem-complex-hermitian-toeplitz-reflection-recursion]] gives positive reflection pivots, so $u_0=1/\nu_{n-1}>0$. The formula is the complex Hermitian extension; it makes no finite-precision stability claim.
