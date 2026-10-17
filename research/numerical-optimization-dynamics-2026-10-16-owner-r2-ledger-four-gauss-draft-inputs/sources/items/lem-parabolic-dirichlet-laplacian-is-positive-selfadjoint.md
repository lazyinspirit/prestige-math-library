---
id: lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint
kind: lemma
title: Symmetry and positivity of the rectangular Dirichlet heat operator
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-parabolic-theta-finite-difference-scheme
  - def-rectangular-grid-and-dirichlet-flux-stencil
  - lem-discrete-summation-by-parts-poincare-and-inverse-bound
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations: A brief introduction to the theory of finite difference approximation of PDEs"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§5.5.1 and §5.6.2, PDF pp. 65–72: finite rectangular Dirichlet heat rows and the centered heat operator."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: centered heat difference symbol and its nonnegative Laplacian eigenvalue."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

On the two-dimensional rectangular zero-Dirichlet grid of [[def-parabolic-theta-finite-difference-scheme]], let $A_h$ be the centered positive heat operator with $\kappa_x,\kappa_y>0$. In the weighted grid inner product of [[def-rectangular-grid-and-dirichlet-flux-stencil]], $A_h$ is self-adjoint and positive semidefinite; explicitly,
$$
\langle A_hv,w\rangle_h=h_xh_y\left(\kappa_x\sum_{j=1}^{N_y-1}\sum_{i=0}^{N_x-1}D_xv_{i+1/2,j}D_xw_{i+1/2,j}+\kappa_y\sum_{i=1}^{N_x-1}\sum_{j=0}^{N_y-1}D_yv_{i,j+1/2}D_yw_{i,j+1/2}\right),
$$
so $\langle A_hv,v\rangle_h\ge0$ for every interior grid vector $v$.

## Facts & Assumptions

**Given:** A finite two-dimensional rectangular grid with positive spacings and directional diffusivities, zero Dirichlet boundary values, and the centered operator and weighted grid inner product defined in [[def-parabolic-theta-finite-difference-scheme]] and [[def-rectangular-grid-and-dirichlet-flux-stencil]].

[F1] [[def-rectangular-grid-and-dirichlet-flux-stencil]] defines the weighted interior inner product, the edge differences, and the horizontal and vertical sums in the Dirichlet energy.

[F2] [[lem-discrete-summation-by-parts-poincare-and-inverse-bound]]: for zero-boundary test functions, the rectangular Dirichlet operator satisfies $\langle A_h^av,w\rangle_h=E_h^a(v,w)$; the proof obtains this identity by separate horizontal and vertical telescoping sums.

[F3] [[def-parabolic-theta-finite-difference-scheme]] defines $A_h=\kappa_xA_x+\kappa_yA_y$, with $A_x$ and $A_y$ the positive centered second-difference operators in their respective coordinates.

## Proof

1.1 Let $E_x(v,w)$ and $E_y(v,w)$ denote the horizontal and vertical summands of $E_h^1(v,w)$ from [F1]. The separate telescoping identities in [F2] give $\langle A_xv,w\rangle_h=E_x(v,w)$ and $\langle A_yv,w\rangle_h=E_y(v,w)$ because all boundary values vanish. [F1, F2]

2.1 By [F3] and step 1.1, $\langle A_hv,w\rangle_h=\kappa_xE_x(v,w)+\kappa_yE_y(v,w)$. Each edge sum is symmetric in $v,w$, so $\langle A_hv,w\rangle_h=\langle v,A_hw\rangle_h$. [F1, F3, step 1.1, algebra]

3.1 Taking $w=v$ in step 2.1 gives $\langle A_hv,v\rangle_h=\kappa_xE_x(v,v)+\kappa_yE_y(v,v)$. Every summand is a positive mesh weight times a square, and $\kappa_x,\kappa_y>0$, hence this quantity is nonnegative. [F1, step 2.1, given, algebra] ∎

## Remarks

No choice axiom is used; the identity is a finite summation-by-parts calculation.
