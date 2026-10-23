---
id: ex-fd-eddy-shear-production
kind: example
title: Adopted simple shear production
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - def-countable-choice
  - def-fd-positive-convolution-fluid-filter
  - lem-fd-periodic-filter-normalization-and-commutation
  - post-fd-eddy-viscosity-closure
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-positive-convolution-fluid-filter: formulation-prerequisite
  lem-fd-periodic-filter-normalization-and-commutation: mathematical-premise
  post-fd-eddy-viscosity-closure: physical-assumption
physical_scope: >-
  Pointwise simple-shear state of the adopted three-dimensional LES closure.
  This is an exact model calculation, not a measured flow or a solution-
  existence claim.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---
## Example

Assume the Axiom of Countable Choice for the normalized periodic-torus convention. Let $I\subset\mathbb R$ be an open time interval measured in seconds, $L>0$ m, $0<\ell<L/2$, and $\mathbb T_L^3=(\mathbb R/L\mathbb Z)^3$. All spacetime fields below use the ordered domain $\mathbb T_L^3\times I$ and evaluation $(x,t)$; for a time-indexed spatial field $q$, write $q(x,t):=(q(t))(x)$. Let $u\in C^1(I;C^\infty(\mathbb T_L^3;\mathbb R^3))$ be a periodic divergence-free velocity field measured in m s$^{-1}$. Let $K:\mathbb R^3\to[0,\infty)$ be smooth, dimensionless, supported in a compact subset of $B_1(0)$, and satisfy $\int_{\mathbb R^3}K(s)\,ds=1$. Define

$$G_\ell(r)=\sum_{n\in\mathbb Z^3}\ell^{-3}K\!\left(\frac{r+Ln}{\ell}\right),\qquad \overline u_\ell(x,t)=\int_{\mathbb T_L^3}G_\ell(r)u(x-r,t)\,dx,$$

where $dx$ is volume measure on a period cell. Thus $\overline u_\ell:\mathbb T_L^3\times I\to\mathbb R^3$ is the resolved velocity field, with position in metres and velocity in m s$^{-1}$. The periodic filter commutes with spatial derivatives, so $\overline u_\ell$ is divergence-free. Let $k,\nu_t\in C^1(\mathbb T_L^3\times I;[0,\infty))$ be prescribed specific unresolved kinetic-energy and kinematic eddy-viscosity fields, measured in m$^2$ s$^{-2}$ and m$^2$ s$^{-1}$, respectively. Use $(\nabla\overline u_\ell)_{ij}=\partial_j\overline u_{\ell,i}$, let $I_3$ be the $3\times3$ identity matrix, and define $A:B=\sum_{i,j=1}^3A_{ij}B_{ij}$ and $|A|_F^2=A:A$ for real $3\times3$ matrices. Define

$$D_\ell=\frac12\left(\nabla\overline u_\ell+(\nabla\overline u_\ell)^T\right).$$

For the adopted closure, define the modeled specific stress and transfer by $\tau_{\ell}^{\rm model}=2kI_3/3-2\nu_tD_\ell$ and $\Pi_{\ell}^{\rm model}=-\tau_{\ell}^{\rm model}:\nabla\overline u_\ell$. At a point $(x_0,t_0)\in\mathbb T_L^3\times I$, suppose the velocity gradient is

$$\nabla\overline u_\ell(x_0,t_0)=\begin{pmatrix}0&S&0\\0&0&0\\0&0&0\end{pmatrix},$$

where $S\in\mathbb R$ is the local shear rate in s$^{-1}$. Put $k_0=k(x_0,t_0)$ and $\nu_0=\nu_t(x_0,t_0)$. Then the modeled transfer at $(x_0,t_0)$ is $\nu_0S^2$ m$^2$ s$^{-3}$. This is a pointwise calculation in the adopted closure model; it asserts no measured value, finite-time evolution, or sign for exact filtered transfer.
## Example references

[[def-countable-choice|Axiom of Countable Choice]]

[[def-fd-positive-convolution-fluid-filter|positive periodic convolution filter and subfilter stress]]

[[lem-fd-periodic-filter-normalization-and-commutation|periodic filter normalization and derivative commutation]]

[[post-fd-eddy-viscosity-closure|adopted isotropic eddy-viscosity closure]]

## Facts & Assumptions

**Given:** Countable Choice, the stated smooth periodic divergence-free velocity and filter, the prescribed nonnegative model fields, and the pointwise gradient with $S\in\mathbb R$ in s$^{-1}$.

[A1] Adopted closure formula from [[post-fd-eddy-viscosity-closure]]: $\tau_{\ell}^{\rm model}=2kI_3/3-2\nu_tD_\ell$ and $\Pi_{\ell}^{\rm model}=-\tau_{\ell}^{\rm model}:\nabla\overline u_\ell$.

[A2] Countable Choice is carried by the referenced periodic-filter model: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[def-fd-positive-convolution-fluid-filter]]: the positive smooth periodized convolution filter has a nonnegative unit-mass kernel and is defined by the displayed formula.

[F2] [[lem-fd-periodic-filter-normalization-and-commutation]]: this fixed periodic filter commutes with spatial derivatives, so filtering a divergence-free velocity gives a divergence-free resolved velocity.

## Verification

1.1 The normalized filter is well defined and preserves the given zero divergence by [A2], [F1], and [F2]. Symmetrizing the given gradient gives $D_\ell(x_0,t_0)=\begin{pmatrix}0&S/2&0\\S/2&0&0\\0&0&0\end{pmatrix}$. Therefore $|D_\ell(x_0,t_0)|_F^2=(S/2)^2+(S/2)^2=S^2/2$. [A2, F1, F2, given, algebra]

2.1 The gradient in the statement has zero trace, so $I_3:\nabla\overline u_\ell=0$. Its symmetric part in step 1.1 satisfies $D_\ell:\nabla\overline u_\ell=|D_\ell|_F^2=S^2/2$. Applying [A1] at $(x_0,t_0)$ therefore gives $\Pi_{\ell}^{\rm model}=-(2k_0/3)(0)+2\nu_0(S^2/2)=\nu_0S^2\ge0$. Since $[\nu_0S^2]=({\rm m^2\,s^{-1}})({\rm s^{-2}})={\rm m^2\,s^{-3}}$, the units agree; if $S=0$ or $\nu_0=0$, the value is exactly zero. This is an exact model calculation, not an observation. [A1, A2, step 1.1, algebra] ∎
