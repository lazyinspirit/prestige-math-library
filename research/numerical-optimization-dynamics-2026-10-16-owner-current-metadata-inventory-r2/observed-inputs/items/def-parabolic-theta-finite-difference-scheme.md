---
id: def-parabolic-theta-finite-difference-scheme
kind: definition
title: Fully discrete θ heat finite-difference scheme
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-rectangular-grid-and-dirichlet-flux-stencil
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations: A brief introduction to the theory of finite difference approximation of PDEs"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§5.1–§5.6.3, PDF pp. 54–75: heat model; θ-update, initial and Dirichlet rows; consistency residual; Fourier stability; θ-scheme L2 and maximum-principle conditions; global error identity."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: explicit heat amplification factor and μ=1/2 condition; Crank–Nicolson amplification; multidimensional explicit CFL."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
verification:
  precheck: n/a
---

## Definition

Fix a dimension $d\ge1$, side lengths $L_j>0$, integers $N_j\ge2$, directional diffusivities $\kappa_j>0$, and spacings $h_j=L_j/N_j$. For a finite periodic rectangular grid let
$$
G_h^{\rm per}=\prod_{j=1}^d(\mathbb Z/N_j\mathbb Z),\qquad \langle v,w\rangle_h=\Bigl(\prod_{j=1}^d h_j\Bigr)\sum_{i\in G_h^{\rm per}}v_iw_i,
$$
and define the positive centered heat operator, with indices reduced modulo $N_j$, by
$$(A_h^{\rm per}v)_i=\sum_{j=1}^d\kappa_j\frac{2v_i-v_{i+e_j}-v_{i-e_j}}{h_j^2}.$$

For a two-dimensional Dirichlet rectangle, use the nodes and weighted interior inner product of [[def-rectangular-grid-and-dirichlet-flux-stencil]]. At an interior node $(i,j)$ define
$$(A_h^{B}V)_{ij}=\kappa_x\frac{2V_{ij}-V_{i+1,j}-V_{i-1,j}}{h_x^2}+\kappa_y\frac{2V_{ij}-V_{i,j+1}-V_{i,j-1}}{h_y^2},$$
where values on boundary neighbours are the prescribed Dirichlet row $B$. Write $A_h^0$ for the square matrix on interior values when the boundary is zero. For any boundary vector $B$, let $c_h(B)$ be the result of applying this stencil to the grid vector that equals $B$ on the boundary and $0$ at interior nodes. Then $A_h^B V=A_h^0V+c_h(B)$ on interior nodes.

Let $T>0$, an integer $M\ge1$, $\Delta t=T/M$, $t_n=n\Delta t$, and $\theta\in[0,1]$. Given interior initial data $U^0$, interior source samples $F^n$, and, in the Dirichlet case, boundary rows $B^n$ for $0\le n\le M$ whose time-zero row agrees with the initial grid data, the periodic update is
$$
\frac{U^{n+1}-U^n}{\Delta t}+A_h^{\rm per}\bigl((1-\theta)U^n+\theta U^{n+1}\bigr)=(1-\theta)F^n+\theta F^{n+1},\quad 0\le n<M.
$$
The Dirichlet update, with the boundary values imposed at every time level, is
$$
\frac{U^{n+1}-U^n}{\Delta t}+A_h^0\bigl((1-\theta)U^n+\theta U^{n+1}\bigr)=(1-\theta)\bigl(F^n-c_h(B^n)\bigr)+\theta\bigl(F^{n+1}-c_h(B^{n+1})\bigr),\quad 0\le n<M.
$$
Thus the interior rows use the exact boundary contributions at both endpoints of the time step. The choices $\theta=0,1/2,1$ are forward Euler, Crank–Nicolson, and backward Euler applied to the spatially semidiscrete heat equation; this definition does not redefine those ODE time-stepping procedures.

For a homogeneous-source update with periodic rows or zero Dirichlet boundary values, let $Q_h$ be its one-step linear map when that step is well defined, and give it the operator norm induced by $\|\cdot\|_h$. The family is **grid-norm power stable on $[0,T]$** if there is $C_T<\infty$, independent of the grid and time step, such that $\|Q_h^n\|_{h\to h}\le C_T$ whenever $n\Delta t\le T$. This is a statement in the mesh-dependent finite grid norms defined above.
