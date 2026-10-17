---
id: alg-flexible-gmres-variable-right-preconditioning
kind: algorithm
title: "Flexible GMRES with variable right preconditioning"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-natural-numbers
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-invertible-matrix-and-general-linear-group
  - def-function-space
  - prop-standard-coordinate-inner-products
  - def-inner-product-norm
  - lem-standard-basis-of-f-n
  - thm-least-squares-solutions-and-normal-equation
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §9.4.1, printed pp. 287–289"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
---

## Definition

Let $n,m\in\mathbb N$ with $n,m\ge1$ ([[def-natural-numbers]]), let
$A\in M_n(\mathbb C)$ ([[def-matrix-space]]), and let $b,x_0\in\mathbb C^n$.
The complex scalars form a field ([[thm-complex-numbers-form-a-field]]).
Equip $\mathbb C^n$ with the standard Hermitian inner product
$$\langle z,w\rangle=\sum_{k<n}z_k\overline{w_k}$$
and its induced Euclidean norm $\|z\|_2=\sqrt{\langle z,z\rangle}$
([[prop-standard-coordinate-inner-products]], [[def-inner-product-norm]]).
All arithmetic and orthogonalization are exact. Iteration and auxiliary
Hessenberg labels below start at $1$; coordinates of $A$ and ambient vectors
retain the library's zero-based convention.

At step $j$, a right-preconditioning action
$\mathcal P_j:\mathbb C^n\to\mathbb C^n$ ([[def-function-space]]) supplies
$z_j=\mathcal P_j(v_j)$. The actions may vary with $j$; no linearity or
fixedness is assumed. In the usual matrix case this is
$z_j=M_j^{-1}v_j$ for an invertible $M_j$
([[def-invertible-matrix-and-general-linear-group]]). The algorithm uses and
stores each actual $z_j$ and makes no fixed-matrix assumption.

Set $r_0=b-Ax_0$ and $\beta=\|r_0\|_2$. If $\beta=0$, return
`initial-solution($x_0$)`. Otherwise set $v_1=r_0/\beta$. For
$j=1,\ldots,m$, perform:

1. Obtain $z_j=\mathcal P_j(v_j)$ and set $w:=Az_j$.
2. For $i=1,\ldots,j$ in order, set
   $$h_{ij}:=\langle w,v_i\rangle,\qquad w:=w-h_{ij}v_i.$$
3. Set $h_{j+1,j}:=\|w\|_2$. If $h_{j+1,j}=0$, return
   `breakdown($j,x_{j-1}$)` with the last fully formed iterate (for $j=1$ it
   is $x_0$); do not normalize or claim a new iterate at this step.
4. If $h_{j+1,j}>0$, set $v_{j+1}:=w/h_{j+1,j}$. Let $e_0\in\mathbb C^{j+1}$
   be the standard unit vector at coordinate $0$ (coordinate $0$ is $1$ and
   all other coordinates are $0$; [[lem-standard-basis-of-f-n]]). Put
   $Z_j=[z_1,\ldots,z_j]$ and let $\bar H_j$ be the $(j+1)$-by-$j$ matrix
   with entries $h_{ik}$ for $1\le i\le k+1$, $1\le k\le j$, and zero
   entries below that range. Choose any
   $$y_j\in\operatorname*{argmin}_{y\in\mathbb C^j}\|\beta e_0-\bar H_jy\|_2$$
   and set $x_j:=x_0+Z_jy_j$.

If all $m$ steps complete without breakdown, return
`budget-complete($m,x_m,Z_m$)`. The finite-dimensional least-squares minimizer
exists; the output relation permits any minimizer. The algorithm has no
convergence test: `budget-complete` and `breakdown` assert neither convergence
nor that a breakdown iterate solves $Ax=b$. The residual-minimization property
over the actual span of the $z_j$ is proved separately in
[[thm-flexible-gmres-residual-minimization-on-actual-preconditioned-span]].
Every division is by a positive real norm: the initial $\beta=0$ case returns
before normalizing $r_0$, and each later $h_{j+1,j}=0$ case returns before
normalizing $w$.
