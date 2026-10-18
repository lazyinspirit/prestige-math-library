---
id: def-periodic-pic-regularized-grid-interaction-kernel
kind: definition
title: Fixed-regularization periodic PIC pair kernel
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth
  - thm-periodic-centered-difference-poisson-zero-mode-and-gauge
  - thm-periodic-pic-charge-conservation-and-neutralized-source
justified_by: []
axiom_use: No choice principle is used; the discrete matrices are finite.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles,
        Chapters 2 and 5
      url: https://djvu.online/file/cjOfwRgltjv1g
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell
        Method with Phase-Space Remapping for the Vlasov–Poisson Equation,
        Section 2.1
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix $\varepsilon>0$, $d\in\{1,2,3\}$, $L>0$, and a regularized one-species model with total charge $Q$ and total mass $M>0$. Let $c=Q/M$. For each position $y\in\mathbb T_L^d$, define the continuous unit-source field by taking the zero-mean solution $\phi_\varepsilon^y$ from [[thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth]] for $\mu=\delta_y$, and setting
$$ \mathcal E_\varepsilon(x,y)=\int_{\mathbb T_L^d}\eta_\varepsilon(z-x)(-\nabla\phi_\varepsilon^y(z))\,dz =\frac1{L^d}\sum_{k\in\mathbb Z^d\setminus\{0\}} \frac{-i\kappa_k}{|\kappa_k|^2} \left(\prod_{a=1}^d\alpha_\varepsilon^{2|k_a|}\right)e^{i\kappa_k\cdot(x-y)} . $$ The series converges absolutely with all derivatives by geometric summability. For the grid branch, let $\phi_h^y$ be the mean-zero solution of $$ A_h\phi_h^y=h^{-d}w^{\varepsilon,h}(y)-L^{-d}\mathbf1 $$ whose compatibility follows from [[thm-periodic-pic-charge-conservation-and-neutralized-source]], and put $$ \mathcal E_{\varepsilon,h}(x,y)=\sum_{j\in J_N}w_j^{\varepsilon,h}(x)(-D^0\phi_h^y)_j . $$ If $z=(x,v)$ and $z'=(y,w)$ are lifted phase-space states in $\mathbb R^{2d}$, the continuum and grid mean-field kernels are $$ \mathbb K_\varepsilon(z,z')=(v,cQ\,\mathcal E_\varepsilon(x,y)),\qquad \mathbb K_{\varepsilon,h}(z,z')=(v,cQ\,\mathcal E_{\varepsilon,h}(x,y)). $$
The spatial components are periodic in their position variables. A finite equal-weight system $\dot z_p=P^{-1}\sum_{r=1}^P\mathbb K_{\varepsilon,h}(z_p,z_r)$ uses particle charge $Q/P$ and mass $M/P$. No claim about the limit $\varepsilon\to0$ is part of this definition.

