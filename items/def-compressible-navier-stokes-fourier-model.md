---
id: def-compressible-navier-stokes-fourier-model
kind: definition
title: Ideal-gas compressible Navier–Stokes–Fourier model
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "F. Ismail and P. L. Roe, Affordable, entropy-consistent Euler flux functions II: Entropy production at shocks, Journal of Computational Physics 228 (2009), 5410–5436, complete paper"
      url: "https://www.math.umd.edu/~tadmor/references/files/Ismail%20and%20Roe%20affordable%20fluxes%20JCP2009.pdf"
      locator: "PDF pp. 8–9, printed pp. 5417–5418, equations (38)–(40): ideal-gas conservative variables, Euler flux, entropy, and entropy variables in the normalized gas-constant convention."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 2.1–2.3, equations (1)–(12), PDF pp. 2–4."
---

## Definition

Fix an integer $d\ge1$, a gas constant $R>0$, an adiabatic exponent $\gamma>1$, a constant reference entropy $s_0\in\mathbb R$, shear viscosity $\mu>0$, bulk viscosity $\zeta\ge0$, and heat conductivity $\kappa>0$. Put $c_v=R/(\gamma-1)$. A conservative state is $U=(\rho,m,E)\in\mathbb R\times\mathbb R^d\times\mathbb R$. Its **admissible state set** is

$$\mathcal G=\left\{(\rho,m,E):\rho>0,\ E>\frac{|m|^2}{2\rho}\right\}.$$

For $U\in\mathcal G$, define the velocity $u=m/\rho$, internal-energy density $\varepsilon=E-|m|^2/(2\rho)$, pressure $p=(\gamma-1)\varepsilon$, temperature $T=p/(R\rho)$, specific entropy $s(U)=c_v\log(p/\rho^\gamma)+s_0$, and mathematical entropy $\eta(U)=-\rho s(U)$. The Euler flux in coordinate direction $j$ is

$$F_j(U)=\bigl(\rho u_j,\ m u_j+p e_j,\ (E+p)u_j\bigr),\qquad j=1,\ldots,d,$$

where $e_j$ is the $j$th standard basis vector of $\mathbb R^d$. The mathematical entropy flux is $q_j(U)=\eta(U)u_j$.

For a differentiable velocity field, write $D=\operatorname{sym}\nabla u$ with $D_{ab}=(\partial_bu_a+\partial_au_b)/2$, and $D^0=D-(\operatorname{tr}D/d)I$. The Newtonian stress and Fourier viscous flux are

$$\tau=2\mu D^0+\zeta(\operatorname{tr}D)I, \qquad F_j^{\mathrm{visc}}=\bigl(0,\tau_{j1},\ldots,\tau_{jd},\ u\cdot\tau_{j\cdot}+\kappa\partial_jT\bigr).$$

The **compressible Navier–Stokes–Fourier balance law** is the conservative system

$$\partial_tU+\sum_{j=1}^d\partial_jF_j(U) =\sum_{j=1}^d\partial_jF_j^{\mathrm{visc}}(U,\nabla u,\nabla T).$$

Unless a boundary is specified separately, a periodic solution means that all fields and fluxes are periodic in each spatial coordinate. The positive parameters and the inequalities defining $\mathcal G$ imply $p>0$ and $T>0$.
