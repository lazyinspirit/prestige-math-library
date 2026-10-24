---
id: def-rectangular-grid-and-dirichlet-flux-stencil
kind: definition
title: Rectangular grid and Dirichlet flux stencil
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli, Numerical Solution of PDEs, complete lecture notes"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§3.2 and §4.1(a), PDF pp. 15–31: rectangular grids, finite-difference inner products, five-point Dirichlet Laplacian, and discrete summation-by-parts setup."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 5: Finite Difference Approximation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf"
      locator: "Complete PDF, pp. 1–7: Taylor stencil construction, Poisson finite differences, and boundary rows."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 6: General Linear Second Order Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf"
      locator: "Complete PDF, pp. 1–5: variable-conductivity flux form and its contrast with the expanded operator."
verification:
  precheck: n/a
---

## Definition

Let $L_x,L_y>0$, let $N_x,N_y$ be integers at least $2$, and set $h_x=L_x/N_x$ and $h_y=L_y/N_y$. The rectangular grid nodes are $(x_i,y_j)=(ih_x,jh_y)$ for $0\le i\le N_x$ and $0\le j\le N_y$. The interior index set is $I_h=\{(i,j):1\le i<N_x,\ 1\le j<N_y\}$, and its boundary is the set of grid nodes with $i\in\{0,N_x\}$ or $j\in\{0,N_y\}$. A grid function is a real-valued function on all grid nodes; $X_{h,0}$ is the vector space of grid functions that vanish on the boundary.

For real vectors $v,w$ indexed by $I_h$, define the weighted interior inner product and norm by
$$
\langle v,w\rangle_h=h_xh_y\sum_{i=1}^{N_x-1}\sum_{j=1}^{N_y-1}v_{ij}w_{ij},\qquad \|v\|_h=\langle v,v\rangle_h^{1/2}.
$$
For full grid functions, the same notation applies to their restrictions to $I_h$; it gives a semidefinite bilinear form and a seminorm on all grid functions, and an inner product and norm on $X_{h,0}$.

The edge differences are $D_xv_{i+1/2,j}=(v_{i+1,j}-v_{ij})/h_x$ for $0\le i<N_x$, $1\le j<N_y$, and $D_yv_{i,j+1/2}=(v_{i,j+1}-v_{ij})/h_y$ for $1\le i<N_x$, $0\le j<N_y$. For a scalar coefficient $a$ sampled at face midpoints, write $a_{i+1/2,j}=a(x_i+h_x/2,y_j)$ and $a_{i,j+1/2}=a(x_i,y_j+h_y/2)$.

The divergence-form Dirichlet operator on interior nodes is
$$
(A_h^av)_{ij}=-\frac{a_{i+1/2,j}D_xv_{i+1/2,j}-a_{i-1/2,j}D_xv_{i-1/2,j}}{h_x}-\frac{a_{i,j+1/2}D_yv_{i,j+1/2}-a_{i,j-1/2}D_yv_{i,j-1/2}}{h_y}.
$$
For $a\equiv1$, this is the five-point Dirichlet Laplacian $-D_x^+D_x^- -D_y^+D_y^-$. The associated edge energy is
$$
E_h^a(v,w)=h_xh_y\left(\sum_{j=1}^{N_y-1}\sum_{i=0}^{N_x-1}a_{i+1/2,j}D_xv_{i+1/2,j}D_xw_{i+1/2,j}+\sum_{i=1}^{N_x-1}\sum_{j=0}^{N_y-1}a_{i,j+1/2}D_yv_{i,j+1/2}D_yw_{i,j+1/2}\right).
$$
The homogeneous scheme solves $A_h^av=f_h$ in $I_h$ with $v=0$ on the boundary. For Dirichlet data $g$, it solves the same interior equations with $v=g$ at boundary nodes. This definition specifies the rectangular Dirichlet stencil; it does not specify a Neumann or nonrectangular boundary closure.
