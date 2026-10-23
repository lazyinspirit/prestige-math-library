---
id: pthm-fd-eddy-closure-resolved-dissipation
kind: physics-theorem
title: Resolved dissipation of adopted eddy viscosity
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - def-countable-choice
  - def-fd-incompressible-newtonian-model
  - def-fd-positive-convolution-fluid-filter
  - lem-fd-periodic-filter-normalization-and-commutation
  - post-fd-eddy-viscosity-closure
  - thm-fd-filtered-covariance-energy
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  def-fd-positive-convolution-fluid-filter: formulation-prerequisite
  lem-fd-periodic-filter-normalization-and-commutation: mathematical-premise
  post-fd-eddy-viscosity-closure: physical-assumption
  thm-fd-filtered-covariance-energy: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Pointwise resolved stress-transfer identity for the adopted smooth,
  periodic, three-dimensional incompressible Newtonian closure. The nonnegative
  result concerns only the modeled eddy-viscosity stress. It does not assert a
  sign for the exact filtered covariance, model accuracy, a solution-existence
  result, or universal absence of backscatter.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "University of Washington, ME 544, Large-Eddy Simulation lecture notes, 8 May 2018"
      url: "https://courses.washington.edu/mengr544/handouts/hd-les.pdf"
      locator: "§3, printed pp. 10–12, Eqs. (16)–(24); §4, printed p. 14, Eq. (30)"
    - title: "Jeremy A. Gibbs, LES of Turbulent Flows: Lecture 12, University of Utah, Fall 2016"
      url: "https://gibbs.science/teaching/les/lectures/lecture_12.pdf"
      locator: "printed pp. 7–8 and 17–24"
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
      locator: "§§3.6–3.8, printed pp. 9–11"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice for the normalized periodic torus convention. Let $I\subseteq\mathbb R$ be an open time interval, $L>0$ m, $0<\ell<L/2$, and $\mathbb T_L^3=(\mathbb R/L\mathbb Z)^3$. Spatial coordinates are in metres and time is in seconds. Let $K:\mathbb R^3\to[0,\infty)$ be smooth, dimensionless, supported in a compact subset of $B_1(0)$, and satisfy $\int K(s)\,ds=1$. Define $G_\ell(r)=\sum_{n\in\mathbb Z^3}\ell^{-3}K((r+Ln)/\ell)$ and $\overline u_\ell(x,t)=\int_{\mathbb T_L^3}G_\ell(r)u(x-r,t)\,dx$, using volume measure on a period cell. Let $u\in C^1(I;C^\infty(\mathbb T_L^3;\mathbb R^3))$ be periodic and divergence-free, with constant density $\rho_0>0$ kg m$^{-3}$ and constant dynamic viscosity $\mu\ge0$ Pa s. Put $\nu=\mu/\rho_0$ m$^2$ s$^{-1}$ and let $\pi=p_{\rm dyn}/\rho_0$ be pressure per unit mass in m$^2$ s$^{-2}$. Assume the unforced incompressible Newtonian equation

$$\partial_tu+\nabla\cdot(u\otimes u)+\nabla\pi=\nu\Delta u,\qquad \nabla\cdot u=0.$$

For this filter define the exact covariance stress and transfer by $\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell$ and $\Pi_\ell=-\tau_\ell:\nabla\overline u_\ell$. For real $3\times3$ matrices set $A:B=\sum_{i,j=1}^3A_{ij}B_{ij}$ and $|A|_F^2=\sum_{i,j=1}^3|A_{ij}|^2$.

Use the positive smooth unit-mass periodic convolution filter of width $\ell$ to define $\overline u_\ell$. Define the resolved rate-of-strain matrix by

$$D_\ell=\frac12\left(\nabla\overline u_\ell+(\nabla\overline u_\ell)^T\right),\qquad (\nabla\overline u_\ell)_{ij}=\partial_j\overline u_{\ell,i}.$$

The matrix $D_\ell$ has units s$^{-1}$; let $I_3$ be the $3\times3$ identity matrix.

Let $k,\nu_t\in C^1(I\times\mathbb T_L^3;[0,\infty))$ be prescribed specific unresolved kinetic energy and kinematic eddy-viscosity fields, with units m$^2$ s$^{-2}$ and m$^2$ s$^{-1}$, respectively. Adopt the modeled specific stress $\tau_{\ell}^{\rm model}=2kI_3/3-2\nu_tD_\ell$ as the replacement for the exact filtered covariance in the resolved model equation, and define $\Pi_{\ell}^{\rm model}=-\tau_{\ell}^{\rm model}:\nabla\overline u_\ell$. Then, at every $(x,t)\in\mathbb T_L^3\times I$,

$$\Pi_{\ell}^{\rm model}(x,t)=2\nu_t(x,t)|D_\ell(x,t)|_F^2\ge0,\qquad \tau_{\ell}^{\rm model}:\nabla\overline u_\ell=-2\nu_t|D_\ell|_F^2\le0.$$

If additionally $\nu>0$ and the specific pressure $\pi$ is smooth, the exact filtered-covariance energy theorem applies to this smooth solution. Its resolved-energy balance contains the exact stress contraction $+\tau_\ell:\nabla\overline u_\ell$ on the right-hand side. Replacing that stress slot by $\tau_{\ell}^{\rm model}$ in the adopted closure model therefore contributes the displayed nonpositive term to the modeled balance. This is a conditional model deduction; it does not identify the modeled stress with the exact covariance or assert a sign for exact filtered transfer.

## Statement references

[[def-countable-choice|Axiom of Countable Choice]]

[[def-fd-incompressible-newtonian-model|constant-density incompressible Newtonian model]]

[[def-fd-positive-convolution-fluid-filter|positive periodic convolution filter and exact covariance stress]]

[[lem-fd-periodic-filter-normalization-and-commutation|filter derivative commutation and periodic normalization]]

[[post-fd-eddy-viscosity-closure|adopted LES stress-form closure]]

[[thm-fd-filtered-covariance-energy|exact filtered covariance and resolved-energy balance]]

[University of Washington, ME 544, *Large-Eddy Simulation* lecture notes, §3, printed pp. 10–12, Eqs. (16)–(24), and §4, printed p. 14, Eq. (30)](https://courses.washington.edu/mengr544/handouts/hd-les.pdf)

[Jeremy A. Gibbs, *LES of Turbulent Flows: Lecture 12*, printed pp. 7–8 and 17–24](https://gibbs.science/teaching/les/lectures/lecture_12.pdf)

[Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, *Turbulence in the Ocean and Atmosphere*, Chapter 3, §§3.6–3.8, printed pp. 9–11](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a smooth periodic divergence-free $u$, the stated filter and model fields, and the physical and mathematical conditions in the Statement.

[A1] Adopted closure assumption from [[post-fd-eddy-viscosity-closure]]: the resolved equation uses $\tau_{\ell}^{\rm model}=2kI_3/3-2\nu_tD_\ell$ in place of the exact covariance; $k\ge0$ and $\nu_t\ge0$. This is a modeled replacement, not an equality about the fine-scale velocity.

[A2] Adopted Countable Choice axiom: every countable family of nonempty sets has a choice function ([[def-countable-choice]]); the normalized torus supplier convention retains this hypothesis.

[F1] [[def-fd-incompressible-newtonian-model]]: the physical model has constant $\rho_0>0$, constant $\mu\ge0$, $\nabla\cdot u=0$, dynamic stress $\sigma=-p_{\rm dyn}I_3+2\mu D(u)$, and kinematic viscosity $\nu=\mu/\rho_0$. Its current Definition asserts no solution existence; this theorem assumes the smooth periodic subcase explicitly.

[F2] [[thm-fd-filtered-covariance-energy]]: under Countable Choice, a smooth periodic divergence-free field, the positive convolution filter, and, for the momentum/energy conclusion, $\nu>0$ and the stated incompressible equation, the exact filtered balance contains $+\tau_\ell:\nabla\overline u_\ell$ on its right-hand side. The theorem does not assert a sign for exact $\Pi_\ell$.

[F3] [[lem-fd-periodic-filter-normalization-and-commutation]]: for the stated smooth periodic field and fixed convolution kernel, the filter commutes with spatial derivatives; hence $\nabla\cdot\overline u_\ell=\overline{\nabla\cdot u}_\ell=0$.

[F4] [[def-fd-positive-convolution-fluid-filter]]: the exact subfilter stress is $\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell$ and the exact forward-transfer convention is $\Pi_\ell=-\tau_\ell:\nabla\overline u_\ell$. The model uses a separate tensor and transfer with the same contraction convention.

## Proof

1.1 Write $W_\ell=(\nabla\overline u_\ell-(\nabla\overline u_\ell)^T)/2$. Then $\nabla\overline u_\ell=D_\ell+W_\ell$, with $D_\ell$ symmetric and $W_\ell$ skew-symmetric. Pairing terms $(i,j)$ and $(j,i)$ gives $D_\ell:W_\ell=0$, since $(D_\ell)_{ij}=(D_\ell)_{ji}$ and $(W_\ell)_{ji}=-(W_\ell)_{ij}$; diagonal terms vanish because $(W_\ell)_{ii}=0$. Hence $D_\ell:\nabla\overline u_\ell=|D_\ell|_F^2$. [given, algebra]

1.2 By [A2], [F3], and the given $\nabla\cdot u=0$, $\nabla\cdot\overline u_\ell=\overline{\nabla\cdot u}_\ell=0$, so $I_3:\nabla\overline u_\ell=\operatorname{tr}(\nabla\overline u_\ell)=0$. [A2, F3, given, algebra]

2.1 Contract [A1] with $\nabla\overline u_\ell$ and use steps 1.1 and 1.2 to obtain $\tau_{\ell}^{\rm model}:\nabla\overline u_\ell=(2k/3)I_3:\nabla\overline u_\ell-2\nu_tD_\ell:\nabla\overline u_\ell=-2\nu_t|D_\ell|_F^2$. Therefore $\Pi_{\ell}^{\rm model}=2\nu_t|D_\ell|_F^2\ge0$ by $\nu_t\ge0$. [A1, step 1.1, step 1.2, algebra]

3.1 Under the additional $\nu>0$ equation hypotheses in [F2], the exact resolved-energy balance has the stress contraction $+\tau_\ell:\nabla\overline u_\ell$ on the right. The physical branch definition [F1] and exact covariance/transfer convention [F4] fix this model context. The postulate [A1] replaces that stress slot only in the modeled equation, so its contribution is $\tau_{\ell}^{\rm model}:\nabla\overline u_\ell=-\Pi_{\ell}^{\rm model}=-2\nu_t|D_\ell|_F^2\le0$ by step 2.1. This conclusion concerns the adopted closure term, not the exact covariance. [A1, F1, F2, F4, step 2.1, algebra] ∎
