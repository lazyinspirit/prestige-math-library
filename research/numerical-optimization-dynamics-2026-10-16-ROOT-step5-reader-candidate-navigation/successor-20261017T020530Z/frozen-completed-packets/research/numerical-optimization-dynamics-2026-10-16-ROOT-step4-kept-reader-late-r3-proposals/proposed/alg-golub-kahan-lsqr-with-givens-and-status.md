---
id: alg-golub-kahan-lsqr-with-givens-and-status
kind: algorithm
title: Exact-arithmetic LSQR with Golub–Kahan bidiagonalization and explicit statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - def-euclidean-inner-product
  - def-natural-numbers
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Christopher C. Paige and Michael A. Saunders, LSQR: An Algorithm for Sparse Linear Equations and Sparse Least Squares"
      url: "https://web.stanford.edu/group/SOL/software/lsqr/lsqr-toms82a.pdf"
      locator: "§§2–4, printed pp. 44–51 / PDF pp. 1–8: Golub–Kahan bidiagonalization, small least-squares problem, and Givens rotations."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 6: Iterative Methods"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap6.pdf"
      locator: "Slides 18–22: Krylov projection for least squares, CGLS iterates, and semi-convergence."
---

## Definition

Let $A\in\mathbb R^{m\times n}$, $b\in\mathbb R^m$, $x_0\in\mathbb R^n$,
$\delta\ge0$, $\tau>1$, and a budget $N\in\mathbb N$ be given. All
operations are exact. Put $r_0=b-Ax_0$. If $\|r_0\|_2=0$, return
$(x_0,0,\text{zero-residual})$. If $\|r_0\|_2\le\tau\delta$, return
$(x_0,0,\text{discrepancy})$. If $N=0$, return
$(x_0,0,\text{budget-exhausted})$. Otherwise initialize
$\beta_1=\|r_0\|_2$, $u_1=r_0/\beta_1$, and
$\alpha_1=\|A^Tu_1\|_2$. If $\alpha_1=0$, return
$(x_0,0,\text{stationary-nonzero-residual})$. Otherwise set
$v_1=A^Tu_1/\alpha_1$.

Initialize the current best iterate and index to $(x_{\rm best},j_{\rm best})
=(x_0,0)$. If a Givens rotation is undefined, return
$(x_{\rm best},j_{\rm best},\text{small-QR-breakdown})$.

For $j=1,\ldots,N$, perform these steps.

1. Compute $p_j=Av_j-\alpha_j u_j$ and $\beta_{j+1}=\|p_j\|_2$. If
   $\beta_{j+1}>0$, set $u_{j+1}=p_j/\beta_{j+1}$.
2. If $\beta_{j+1}>0$, compute
   $q_j=A^Tu_{j+1}-\beta_{j+1}v_j$ and $\alpha_{j+1}=\|q_j\|_2$. If
   $\alpha_{j+1}>0$, set $v_{j+1}=q_j/\alpha_{j+1}$. A zero
   $\beta_{j+1}$ or $\alpha_{j+1}$ marks bidiagonalization breakdown.
3. Put $V_j=[v_1,\ldots,v_j]$. In the projected matrix and right-hand side
   below, use local one-based row/column/position labels: a displayed matrix
   position $(r,c)$ means canonical zero-based position $(r-1,c-1)$, and
   vector position $r$ means coordinate $r-1$ under [[def-matrix-space]].
   Form the $(j+1)\times j$ lower-bidiagonal matrix $B_j$ with diagonal
   $\alpha_1,\ldots,\alpha_j$ and subdiagonal
   $\beta_2,\ldots,\beta_{j+1}$, using $\beta_{j+1}=0$ if step 1 broke down.
   Let $e_1=(1,0,\ldots,0)^T\in\mathbb R^{j+1}$ and $c=\beta_1e_1$.
   For $i=1,\ldots,j$, let $a,b$ be the current entries at positions
   $(i,i),(i+1,i)$ of the rotated matrix and put $\rho=(a^2+b^2)^{1/2}$.
   If $\rho=0$, return the current best output with status
   `small-QR-breakdown`. Otherwise put $c_i=a/\rho$, $s_i=b/\rho$ and
   apply $\begin{pmatrix}c_i&s_i\\-s_i&c_i\end{pmatrix}$ to rows
   $i,i+1$ of the full matrix and right-hand side. After these $j$ rotations,
   let $R_j$ be the first $j$ rows of the rotated matrix and $d_j$ the first
   $j$ entries of the rotated right-hand side. Solve $R_jz_j=d_j$ by back
   substitution. Update $(x_{\rm best},j_{\rm best})=(x_0+V_jz_j,j)$.
4. Put $x_j=x_0+V_jz_j$. Compute the physical
   residual $\|Ax_j-b\|_2$. If it is at most $\tau\delta$, return
   $(x_j,j,\text{discrepancy})$. If bidiagonalization broke down, return
   $(x_j,j,\text{bidiagonalization-breakdown})$. If $j=N$, return
   $(x_j,j,\text{budget-exhausted})$; otherwise continue.

The procedure makes no claim that a finite-budget status is a successful
regularized approximation. Its exact-arithmetic residual-minimization property
is a separate theorem.
