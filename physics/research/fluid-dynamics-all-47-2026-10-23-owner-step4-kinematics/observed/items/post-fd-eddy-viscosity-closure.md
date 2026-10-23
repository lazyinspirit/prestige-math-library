---
id: post-fd-eddy-viscosity-closure
kind: postulate
title: Isotropic eddy viscosity and unresolved energy model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-countable-choice
  - def-fd-incompressible-newtonian-model
  - def-fd-positive-convolution-fluid-filter
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  def-fd-positive-convolution-fluid-filter: formulation-prerequisite
physical_scope: >-
  Adopted three-dimensional isotropic stress-form closure for smooth,
  periodic, constant-density incompressible Newtonian large-eddy models using
  the stated positive convolution filter. The nonnegative specific unresolved
  energy and kinematic eddy-viscosity fields are model inputs; no coefficient
  law, empirical validation, universal applicability, or equality with the
  exact filtered covariance is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "University of Washington, ME 544, Large-Eddy Simulation lecture notes, 8 May 2018"
      url: "https://courses.washington.edu/mengr544/handouts/hd-les.pdf"
      locator: "§3, printed pp. 10–12, Eqs. (16)–(24); §4, printed p. 14, Eq. (30); §5, printed pp. 19–20"
    - title: "Jeremy A. Gibbs, LES of Turbulent Flows: Lecture 12, University of Utah, Fall 2016"
      url: "https://gibbs.science/teaching/les/lectures/lecture_12.pdf"
      locator: "printed pp. 7–8, 17–24"
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
      locator: "§§3.6–3.8, printed pp. 9–11"
verification:
  precheck: pass
---
## Postulate

Assume the Axiom of Countable Choice for the normalized periodic torus convention. Let $I\subseteq\mathbb R$ be an open time interval, let $L>0$ m, and let $\mathbb T_L^3=(\mathbb R/L\mathbb Z)^3$ have volume measure $dx$ on a period cell and normalized measure $d\mu_L=L^{-3}dx$. Coordinates $x,r,L,\ell$ are measured in metres and time $t$ in seconds. All spacetime fields below use the ordered domain $\mathbb T_L^3\times I$ and evaluation $(x,t)$; for a time-indexed spatial field $q$, write $q(x,t):=(q(t))(x)$. Let $K:\mathbb R^3\to[0,\infty)$ be smooth, dimensionless, supported in a compact subset of $B_1(0)$, and satisfy $\int_{\mathbb R^3}K(s)\,ds=1$. For $0<\ell<L/2$, define

$$G_\ell(r)=\sum_{n\in\mathbb Z^3}\ell^{-3}K\!\left(\frac{r+Ln}{\ell}\right),\qquad \overline q_\ell(x,t)=\int_{\mathbb T_L^3}G_\ell(r)q(x-r,t)\,dr.$$

The kernel $G_\ell$ has units m$^{-3}$ and filtering preserves the units of $q$.

The physical base model is the smooth, unforced, constant-density incompressible Newtonian branch: $\rho_0>0$ kg m$^{-3}$ and dynamic viscosity $\mu\ge0$ Pa s are constant, $u\in C^1(I;C^\infty(\mathbb T_L^3;\mathbb R^3))$ is periodic with $\nabla\cdot u=0$ and velocity units m s$^{-1}$, and the pressure multiplier is a periodic scalar field $p_{\rm dyn}\in C^1(\mathbb T_L^3\times I;\mathbb R)$ in Pa. Let $I_3$ be the $3\times3$ identity matrix and set $D(u)=(\nabla u+(\nabla u)^T)/2$; the dynamic Cauchy stress is $\sigma=-p_{\rm dyn}I_3+2\mu D(u)$, and $\nu=\mu/\rho_0$ m$^2$ s$^{-1}$. The pressure per unit mass in the filtered equation is the scalar field $\pi=p_{\rm dyn}/\rho_0\in C^1(\mathbb T_L^3\times I;\mathbb R)$ in m$^2$ s$^{-2}$, and $\nabla\pi$ denotes its spatial gradient.

For the filtered velocity $\overline u_\ell$, define its rate-of-strain tensor by

$$D_\ell=\frac12\left(\nabla\overline u_\ell+(\nabla\overline u_\ell)^T\right),\qquad (\nabla\overline u_\ell)_{ij}=\partial_j\overline u_{\ell,i}.$$

The matrix $D_\ell$ has units s$^{-1}$. Use the Frobenius contraction $A:B=\sum_{i,j=1}^3A_{ij}B_{ij}$ for real $3\times3$ matrices.

Adopt the following large-eddy simulation (LES) stress-form closure. A closure here means a specified modeled stress substituted for the exact filtered covariance in the resolved momentum equation. Let $k,\nu_t\in C^1(\mathbb T_L^3\times I;[0,\infty))$ be prescribed model fields, where $k$ represents specific unresolved kinetic energy in m$^2$ s$^{-2}$ and $\nu_t$ is kinematic eddy viscosity in m$^2$ s$^{-1}$. The modeled specific subfilter stress and its modeled transfer are

$$\tau_{\ell}^{\rm model}=\frac{2k}{3}I_3-2\nu_tD_\ell,\qquad \Pi_{\ell}^{\rm model}=-\tau_{\ell}^{\rm model}:\nabla\overline u_\ell.$$

The closed filtered momentum equation uses the sign convention

$$\partial_t\overline u_\ell+\nabla\cdot(\overline u_\ell\otimes\overline u_\ell)+\nabla\pi=\nu\Delta\overline u_\ell-\nabla\cdot\tau_{\ell}^{\rm model},\qquad \nabla\cdot\overline u_\ell=0.$$

Both terms in $\tau_{\ell}^{\rm model}$ have units m$^2$ s$^{-2}$, and $\Pi_{\ell}^{\rm model}$ has units m$^2$ s$^{-3}$. This is an adopted constitutive form, not a derivation of a physical law: $k$ and $\nu_t$ must be supplied as model inputs or by separate model equations. The prescription does not assert that $\tau_{\ell}^{\rm model}$ equals the exact covariance $\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell$, that the modeled tensor is positive semidefinite, or that the closure is empirically adequate in every flow regime. No absence of backscatter for the exact filtered stress is asserted.

## Postulate references

[[def-countable-choice|Axiom of Countable Choice]]

[[def-fd-incompressible-newtonian-model|constant-density incompressible Newtonian model]]

[[def-fd-positive-convolution-fluid-filter|positive periodic convolution filter and exact subfilter stress]]

[University of Washington, ME 544, *Large-Eddy Simulation* lecture notes, §3, printed pp. 10–12, Eqs. (16)–(24), and §4, printed p. 14, Eq. (30)](https://courses.washington.edu/mengr544/handouts/hd-les.pdf)

[Jeremy A. Gibbs, *LES of Turbulent Flows: Lecture 12*, printed pp. 7–8 and 17–24](https://gibbs.science/teaching/les/lectures/lecture_12.pdf)

[Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, *Turbulence in the Ocean and Atmosphere*, Chapter 3, §§3.6–3.8, printed pp. 9–11](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

## Facts & Assumptions

**Given:** The smooth periodic three-dimensional fields, $\rho_0>0$, constant $\mu\ge0$, normalized positive filter, and Countable Choice convention stated in the formulation.

[A1] Adopted mathematical axiom: every countable family of nonempty sets has a choice function ([[def-countable-choice]]); it is retained because the normalized torus convention in the mathematical supplier adopts it.

[F1] [[def-fd-incompressible-newtonian-model]]: the current F03 definition has $\rho=\rho_0>0$ constant, $u\in C^2(\Omega;\mathbb R^3)$, a pressure multiplier $p\in C^1(\Omega;\mathbb R)$ in Pa, $\nabla\cdot u=0$, $\sigma=-pI_3+2\mu D$, constant $\mu\ge0$, and $\nu=\mu/\rho_0$, with no boundary, initial-data, or existence assertion. The closure uses its smooth periodic subcase, with $p_{\rm dyn}$ the $C^1$ periodic scalar field specified above.

[F2] [[def-fd-positive-convolution-fluid-filter]]: the mathematical filter uses a nonnegative smooth compactly supported unit-mass kernel, its periodization on $\mathbb T_L^d$, volume measure in the convolution, and exact stress $\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell$; this postulate uses $d=3$.
