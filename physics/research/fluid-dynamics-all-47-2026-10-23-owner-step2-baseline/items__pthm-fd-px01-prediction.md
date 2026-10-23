---
id: pthm-fd-px01-prediction
kind: physics-theorem
title: "Exact Reynolds and Mach nondimensionalization — conditional physical prediction"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - thm-fd-x01
  - post-fd-continuum-balances
  - post-fd-boundary-data
  - post-fd-newtonian-fourier
  - def-fd-barotropic-euler-model
  - def-fd-incompressible-newtonian-model
dependency_roles:
  thm-fd-x01: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  def-fd-barotropic-euler-model: formulation-prerequisite
  def-fd-incompressible-newtonian-model: formulation-prerequisite
physical_scope: >-
  Exact coefficient transformations for the smooth, unforced constant-density
  incompressible Newtonian branch with constant positive viscosity and the
  separate smooth, unforced positive-density barotropic Euler branch with a
  specified C2 pressure law and positive derivative at the reference density.
  Compatible velocity and momentum initial/boundary data are rescaled as
  inputs; thermal evolution and heat-flux scaling are outside scope. No
  empirical observation, low-parameter limit, error estimate, turbulence
  threshold, or solution-existence result is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Iain Stewart, MIT 8.09, Chapter 6: Fluid Mechanics, §6.7 Reynolds Number and Similarity"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf"
      locator: "§6.7, printed pp. 133–134."
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/fluids/fluids2.pdf"
      locator: "§3.3.1, printed pp. 72–73, and §3.3.2, printed pp. 74–76."
    - title: "David Tong, Fluid Mechanics, Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/fluids/fluids3.pdf"
      locator: "§4.5.3, printed p. 166, definition of the Mach number."
    - title: "MIT 16.01 Unified Engineering, F5 lecture notes: Effects of Reynolds Number and Mach Number"
      url: "https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/b4ddec4a7d0be7ec3814a10dc891d5ef_f5.pdf"
      locator: "F5 lecture notes, pp. 1–4."
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval of time in seconds and let $\Omega\subseteq\mathbb R^3$ be a nonempty open spatial region in metres, expressed in a Newtonian Cartesian inertial chart. Let $u:I\times\Omega\to\mathbb R^3$ have continuous first time partial derivatives and continuous first and second spatial partial derivatives. Let a pressure field have continuous first spatial partial derivatives. Write $(D_xu)_{ij}=\partial_{x_j}u_i$, $D=(D_xu+(D_xu)^{\mathsf T})/2$, $\operatorname{div}u=\sum_{j=1}^3\partial_{x_j}u_j$, and let $\Delta u$ act componentwise. Use SI units: $[u]=[U]=[c]=\mathrm{m\,s^{-1}}$, $[L]=\mathrm m$, $[\rho]=[\rho_0]=\mathrm{kg\,m^{-3}}$, $[p]=[P(\rho)]=[p_{\mathrm{ref}}]=\mathrm{Pa}$, and $[\mu]=\mathrm{Pa\,s}$. Fix constants $\rho_0>0$, $\mu>0$, $U>0$, $L>0$, and $c>0$, and define $\nu=\mu/\rho_0$, $\operatorname{Re}=UL/\nu$, and $\operatorname{Ma}=U/c$.

In the first, force-free branch, assume $\rho(t,x)=\rho_0$, $\operatorname{div}u=0$, and the selected incompressible Newtonian model with stress $\sigma=-pI_3+2\mu D$ and local momentum equation $\rho_0(\partial_tu+(u\cdot\nabla_x)u)=\operatorname{div}\sigma$, where $p$ is the constraint multiplier and is not an equation-of-state pressure. Set $\Theta=Ut/L$, $X=x/L$, $I^*=\{Ut/L:t\in I\}$, and $\Omega^*=\{x/L:x\in\Omega\}$. Under $u(t,x)=Uu^*(\Theta,X)$ and $p(t,x)=p_{\mathrm{ref}}+\rho_0U^2p_{\mathrm{inc}}^*(\Theta,X)$ for a constant $p_{\mathrm{ref}}$, the governing equations are exactly

$$\partial_\Theta u^*+(u^*\cdot\nabla_X)u^*=-\nabla_Xp_{\mathrm{inc}}^*+\operatorname{Re}^{-1}\Delta_Xu^*,\qquad \operatorname{div}_Xu^*=0.$$

In the separate, unforced barotropic Euler branch, let $\rho,u\in C^2(I\times\Omega)$ with $\rho>0$, let $P:(0,\infty)\to\mathbb R$ be $C^2$, and set the scalar potential $V:\Omega\to\mathbb R$ to the zero function. Assume the mass and momentum equations

$\partial_t\rho+\operatorname{div}_x(\rho u)=0,\qquad \rho(\partial_tu+(u\cdot\nabla_x)u)+\nabla_xP(\rho)=0.$

At the chosen reference density assume $P'(\rho_0)=c^2>0$. Define $\rho^*=\rho/\rho_0$ and

$$p_{\mathrm{bar}}^*(\Theta,X)=\frac{P(\rho_0\rho^*(\Theta,X))-P(\rho_0)}{\rho_0c^2}.$$

Under $u(t,x)=Uu^*(\Theta,X)$, the exact transformed mass and momentum equations are

$$\partial_\Theta\rho^*+\operatorname{div}_X(\rho^*u^*)=0,\qquad \partial_\Theta u^*+(u^*\cdot\nabla_X)u^*=-\operatorname{Ma}^{-2}(\rho^*)^{-1}\nabla_Xp_{\mathrm{bar}}^*.$$

The ratios are dimensionless derived parameters: $[\nu]=\mathrm{m^2\,s^{-1}}$, $[c]=\mathrm{m\,s^{-1}}$, and $[\operatorname{Re}]=[\operatorname{Ma}]=1$. Any compatible velocity, pressure, density, and momentum initial/boundary data for these equations are transformed with the same invertible coordinate change. Thermal evolution and heat-flux scaling are not part of this calculation. The coefficient identities do not assert an incompressible or inviscid limit, an error bound, uniqueness, identical solutions for different geometries or rescaled data, or a turbulence threshold. They are conditional predictions of the adopted model formulations and are not experimental observations or proof that either model describes a material.

## Statement references

[Iain Stewart, MIT 8.09, Chapter 6, §6.7, Reynolds number and similarity, printed pp. 133–134](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf)

[David Tong, *Fluid Mechanics*, Part II, §§3.3.1–3.3.2, Reynolds number and scaling, printed pp. 72–76](https://www.damtp.cam.ac.uk/user/tong/fluids/fluids2.pdf)

[David Tong, *Fluid Mechanics*, Part III, §4.5.3, Mach number definition, printed p. 166](https://www.damtp.cam.ac.uk/user/tong/fluids/fluids3.pdf)

[MIT 16.01 Unified Engineering, F5 lecture notes, Effects of Reynolds Number and Mach Number, pp. 1–4](https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/b4ddec4a7d0be7ec3814a10dc891d5ef_f5.pdf)

## Facts & Assumptions

**Given:** The smooth field domains, Cartesian derivatives, SI dimensions, positive constants, and the two separately adopted local model branches stated above. The incompressible and barotropic pressures belong to different formulations.

[A1] [[post-fd-continuum-balances]]: the smooth single-component continuum adopts mass and linear/angular momentum balances with tension-positive traction $\sigma n$, alongside separate energy and entropy assumptions. This physical postulate does not prove that nature follows the model.

[A2] [[post-fd-boundary-data]]: wall, thermal, periodic, and initial data are selected as separate model inputs with their own regularity and compatibility requirements. This theorem uses only compatible velocity, pressure, density, and momentum data; it makes no claim about thermal evolution or heat-flux scaling.

[A3] [[post-fd-newtonian-fourier]]: the adopted stress closure is $\tau=2\mu D_0+\zeta\theta I_3$ with specified nonnegative state laws, and $\sigma=-pI_3+\tau$. In the constant-density incompressible branch, $\theta=0$ and $D_0=D$; this theorem further selects a constant $\mu>0$. The Fourier heat-flux part is not used in the momentum calculation.

[F1] [[def-fd-incompressible-newtonian-model]]: the selected unforced branch has constant $\rho_0>0$, $\operatorname{div}u=0$, $\sigma=-pI_3+2\mu D$, and $\rho_0D_tu=\operatorname{div}\sigma$; $p$ is a constraint multiplier, and boundary/initial data are separate.

[F2] [[def-fd-barotropic-euler-model]]: the unforced branch has positive $C^2$ density and velocity fields and satisfies $\partial_t\rho+\operatorname{div}(\rho u)=0$ and $\rho D_tu+\nabla P(\rho)=0$ for a specified $C^1$ pressure law. This theorem imposes the stronger regularity $P\in C^2$ and the additional response condition $P'(\rho_0)=c^2>0$.

[F3] [[thm-fd-x01]]: for positive $\rho_0,\mu,U,L,c$, the smooth constant-density incompressible system and the positive-density barotropic Euler system transform exactly under the stated positive changes of variables, with coefficients $\operatorname{Re}^{-1}$ and $\operatorname{Ma}^{-2}$. The result is an equivalence of equations, not a limit or existence theorem.

## Proof

1.1 In the incompressible branch [F1], $\sigma_{ij}=-p\delta_{ij}+\mu(\partial_{x_j}u_i+\partial_{x_i}u_j)$. Since $\mu$ is constant and $u$ has continuous second spatial partial derivatives, componentwise differentiation gives $(\operatorname{div}\sigma)_i=-\partial_{x_i}p+\mu\Delta u_i+\mu\partial_{x_i}(\operatorname{div}u)$. The last term vanishes by $\operatorname{div}u=0$, so the local equation is $\partial_tu+(u\cdot\nabla_x)u+\rho_0^{-1}\nabla_xp-\nu\Delta u=0$. The adopted balances and constitutive closure are model assumptions. [A1, A3, F1, algebra]

1.2 In the unforced barotropic branch [F2], divide the momentum equation by $\rho>0$ and impose the additional hypotheses $P\in C^2$ and $P'(\rho_0)=c^2>0$. The definition of $p_{\mathrm{bar}}^*$ gives $P(\rho)=P(\rho_0)+\rho_0c^2p_{\mathrm{bar}}^*$. Under $\rho=\rho_0\rho^*$ and $u=Uu^*$, the mass terms have common factor $\rho_0U/L$, while $D_tu$ has factor $U^2/L$ and $\rho^{-1}\nabla_xP(\rho)=(c^2/L)(\rho^*)^{-1}\nabla_Xp_{\mathrm{bar}}^*$. Dividing by the positive factors yields the displayed mass equation and the momentum coefficient $c^2/U^2=\operatorname{Ma}^{-2}$. [F2, F3, algebra]

2.1 The hypotheses established in step 1.1 match the constant-density system in [F3]. With $\Theta=Ut/L$, $X=x/L$, $u=Uu^*$, and $p=p_{\mathrm{ref}}+\rho_0U^2p_{\mathrm{inc}}^*$, the chain-rule identities in [F3] give the displayed dimensionless incompressible equation, since $\nu/(UL)=\operatorname{Re}^{-1}$. The compatible velocity, pressure, and momentum data selected in [A2] are carried by the same coordinate substitution. Positivity of $U,L,\rho_0,\mu$ makes every substitution and division invertible, so the equation equivalence holds in both directions. [A2, F3, step 1.1, algebra]

3.1 The exact equivalences in steps 1.2 and 2.1 do not establish solvability or identify solutions on geometries or data sets that are not related by the stated substitution. Because $[UL]=[\nu]=\mathrm{m^2\,s^{-1}}$ and $[U]=[c]=\mathrm{m\,s^{-1}}$, both ratios are dimensionless. These coefficient identities alone give no asymptotic limit, error estimate, low-Mach incompressibility conclusion, or high-Reynolds turbulence threshold. [A2, F3, step 1.2, step 2.1] ∎
