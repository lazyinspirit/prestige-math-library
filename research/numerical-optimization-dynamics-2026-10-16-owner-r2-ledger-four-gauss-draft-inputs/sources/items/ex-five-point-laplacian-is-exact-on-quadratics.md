---
id: ex-five-point-laplacian-is-exact-on-quadratics
kind: example
title: The five-point Laplacian is exact on a quadratic solution
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-rectangular-grid-and-dirichlet-flux-stencil
  - lem-discrete-summation-by-parts-poincare-and-inverse-bound
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Endre Süli, Numerical Solution of PDEs, complete lecture notes"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§4.1(a), PDF pp. 26–31: the five-point Dirichlet scheme, uniqueness, and second-order consistency for C4 solutions."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 5: Finite Difference Approximation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf"
      locator: "Complete PDF, pp. 1–6: Taylor stencil construction and the five-point Poisson discretization."
verification:
  precheck: pass
---

## Example

On any rectangle $\Omega=(0,L_x)\times(0,L_y)$, let $u(x,y)=x^2+y^2$, $a\equiv1$, $f=-4$, and impose the exact sampled Dirichlet boundary values. On every rectangular uniform grid with $N_x,N_y\ge2$, the five-point Dirichlet scheme returns $U_{ij}=u(x_i,y_j)$ at all nodes.

## Facts & Assumptions

**Given:** The five-point stencil and grid inner product of [[def-rectangular-grid-and-dirichlet-flux-stencil]], the positive face bound $a_f=1$, and the exact sampled boundary values of $u(x,y)=x^2+y^2$.

[F1] [[def-rectangular-grid-and-dirichlet-flux-stencil]]: when $a\equiv1$, $A_h^a$ is the positive five-point operator $-D_x^+D_x^- -D_y^+D_y^-$. 

[F2] [[lem-discrete-summation-by-parts-poincare-and-inverse-bound]]: for positive face values, the homogeneous Dirichlet matrix has zero kernel and is invertible.

## Verification

1.1 For every interior node, $D_x^+D_x^-x_i^2=2$ and $D_y^+D_y^-(y_j^2)=2$; the other coordinate second differences vanish. Thus $(A_h^1u^*)_{ij}=-(2+2)=-4=f(x_i,y_j)$. [given, F1, algebra]

2.1 The sampled values $u^*_{ij}$ also satisfy the exact Dirichlet boundary rows, so they solve the full discrete system. [given, step 1.1, algebra]

3.1 Any two discrete solutions have a difference in $X_{h,0}$ in the kernel of $A_h^1$. By [F2] that kernel is zero, so the solution is unique and equals $u^*$. [F2, step 2.1, algebra] ∎
