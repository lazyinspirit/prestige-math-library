---
id: def-na-periodic-staggered-grid-stokes-operators
kind: definition
title: "Periodic staggered-grid velocity and pressure spaces"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-natural-numbers, thm-reals-field]
justified_by: [lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf"
      locator: "§§3.1–3.3, printed pp. 6012–6015: projection, incremental pressure correction, the rotational update, and wall-boundary cautions."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf"
      locator: "§§2.3.1–2.3.3, printed pp. 45–47: fractional-step pressure projection, pressure update, and the staggered grid."
verification:
  precheck: n/a
---

## Definition

Fix an integer dimension $d\ge1$ and an integer resolution $N\ge2$, where
$N\in\mathbb N$ ([[def-natural-numbers]]), and put $h=1/N$. Real scalar and
array operations use the field $\mathbb R$ ([[thm-reals-field]]). Let
$J_N=\{0,\ldots,N-1\}^d$; each coordinate index addition below is reduced
to the unique element of $\{0,\ldots,N-1\}$ congruent modulo $N$. The unit
torus $\mathbb T^d$ means the unit cube with opposite faces identified, so
fields and arrays are periodic across those faces. Write
$\mathbf 1=(1,\ldots,1)$ and let $e_i$ be the $i$th standard coordinate vector.
Cell $j$ has centre $x_j=h(j+\tfrac12\mathbf 1)$. The pressure value $q_j$ is
stored at that centre. Velocity component $i$ is stored at the right face of
cell $j$, with centre $x_j+\tfrac h2e_i$.

Let $\widetilde Q_h$ be all real scalar cell arrays and let
$Q_h=\{q\in\widetilde Q_h:h^d\sum_jq_j=0\}$. Let $V_h$ be the real vector
face arrays $v=(v_{i,j})_{1\le i\le d,\,j\in J_N}$. Give them the mass inner products
$$ (q,r)_{Q_h}=h^d\sum_{j\in J_N}q_jr_j,\qquad (v,w)_{M_h}=h^d\sum_{i=1}^d\sum_{j\in J_N}v_{i,j}w_{i,j}. $$
Define the pressure gradient $G_h:\widetilde Q_h\to V_h$ and velocity
divergence $D_h:V_h\to Q_h$ by
$$ (G_hq)_{i,j}=\frac{q_{j+e_i}-q_j}{h},\qquad (D_hv)_j=\sum_{i=1}^d\frac{v_{i,j}-v_{i,j-e_i}}{h}. $$
The compatible pressure Laplacian is $\Delta_h=D_hG_h$; its restriction to
$Q_h$ is negative semidefinite, and $G_h$ annihilates constants. Define the
componentwise vector Laplacian by
$$ (\Delta_h^Vv)_{i,j}=h^{-2}\sum_{\ell=1}^d (v_{i,j+e_\ell}-2v_{i,j}+v_{i,j-e_\ell}),\qquad A_h=-\Delta_h^V, $$
and the discrete velocity-gradient seminorm by
$$ \|\mathcal G_hv\|_{M_h}^2=h^{d-2}\sum_{i=1}^d\sum_{\ell=1}^d\sum_{j\in J_N} |v_{i,j+e_\ell}-v_{i,j}|^2. $$
The fixed cell/face placement is part of the definition; collocated central
differences are a different discretization.
