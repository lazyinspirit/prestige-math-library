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

Use Newtonian spacetime $I\times E$, where $I\subseteq\mathbb R$ is a nonempty open interval of absolute time in seconds and $E$ is an oriented three-dimensional Euclidean affine space measured in metres. A Newtonian Cartesian inertial chart consists of this absolute-time coordinate and an orientation-preserving affine isometry $x:E\to\mathbb R^3$. Write $I_3$ for the $3\times3$ identity matrix and set $\operatorname{SO}(3):=\{Q\in\mathbb R^{3\times3}:Q^{\mathsf T}Q=I_3,\ \det Q=1\}$. Inertial-chart changes have the form $t'=t+t_0$, $x'=Qx+vt+a$, where $t_0$ is a constant time translation in seconds, $a\in\mathbb R^3$ is a constant spatial translation in metres, $v\in\mathbb R^3$ is a constant relative velocity in metres per second, and $Q\in\operatorname{SO}(3)$ is constant. A frame in this statement means such an adapted chart, not an observer congruence or a basis field. Fix one such chart and a nonempty open spatial coordinate region $\Omega\subseteq\mathbb R^3$. All derivatives below are Cartesian derivatives in this fixed chart; the positive coordinate rescaling defined below is not a change of observer.

For a scalar field $f$, $\nabla_x f=(\partial_{x_1}f,\partial_{x_2}f,\partial_{x_3}f)$.

For a vector field $u=(u_i)$, define $D_xu,D:I\times\Omega\to\mathbb R^{3\times3}$, $\operatorname{div}_xu:I\times\Omega\to\mathbb R$, and $\Delta_xu,D_tu:I\times\Omega\to\mathbb R^3$ by $(D_xu)_{ij}=\partial_{x_j}u_i$, $D=(D_xu+(D_xu)^{\mathsf T})/2$, $\operatorname{div}_xu=\sum_{j=1}^3\partial_{x_j}u_j$, $(\Delta_xu)_i=\sum_{j=1}^3\partial_{x_jx_j}u_i$, and $D_tu=\partial_tu+(u\cdot\nabla_x)u$. The fields $D$ and $\operatorname{div}_xu$ have units $\mathrm{s^{-1}}$. Fix constants $\rho_0>0$, $\mu>0$, $U>0$, $L>0$, and $c>0$, and define $\nu=\mu/\rho_0$, $\operatorname{Re}=UL/\nu$, and $\operatorname{Ma}=U/c$. In SI units, $[u]=[U]=[c]=\mathrm{m\,s^{-1}}$, $[x]=[L]=\mathrm m$, $[\rho]=[\rho_0]=\mathrm{kg\,m^{-3}}$, $[p]=[P(\rho)]=[p_{\mathrm{ref}}]=[\sigma]=\mathrm{Pa}$, $[\mu]=\mathrm{Pa\,s}$, $[\nu]=\mathrm{m^2\,s^{-1}}$, and $[\Theta]=[X]=[\operatorname{Re}]=[\operatorname{Ma}]=1$; thus the two ratios are dimensionless.

Define the dimensionless coordinates and their domains by
$$\Theta=\frac{Ut}{L},\qquad X=\frac{x}{L},\qquad I^*=\left\{\frac{Ut}{L}:t\in I\right\},\qquad \Omega^*=\left\{\frac{x}{L}:x\in\Omega\right\}.$$
The map $\Phi:I\times\Omega\to I^*\times\Omega^*$, $\Phi(t,x)=(Ut/L,x/L)$, is bijective with inverse $\Phi^{-1}(\Theta,X)=(L\Theta/U,LX)$. The corresponding $X$-derivatives are defined by the same component formulas.

In the first, force-free branch, let $u:I\times\Omega\to\mathbb R^3$ have continuous first time partial derivatives and continuous first and second spatial partial derivatives, and let the pressure field $p:I\times\Omega\to\mathbb R$ be continuous with continuous first spatial partial derivatives. Let the density field $\rho:I\times\Omega\to(0,\infty)$ be the constant $\rho_0$. Assume $\operatorname{div}_xu=0$ and the selected incompressible Newtonian equations
$$\sigma=-pI_3+2\mu D,\qquad \rho_0D_tu=\operatorname{div}_x\sigma,\qquad (\operatorname{div}_x\sigma)_i=\sum_{j=1}^3\partial_{x_j}\sigma_{ij},$$
where $\sigma:I\times\Omega\to\mathbb R^{3\times3}$ is stress, $p$ is the constraint multiplier, not an equation-of-state pressure, and the tension-positive stress convention identifies $\sigma n$ as traction on an outward unit normal $n$. Define $u^*:I^*\times\Omega^*\to\mathbb R^3$ and $p_{\mathrm{inc}}^*:I^*\times\Omega^*\to\mathbb R$ by
$$u^*(\Theta,X)=\frac{1}{U}u\bigl(\Phi^{-1}(\Theta,X)\bigr),\qquad p_{\mathrm{inc}}^*(\Theta,X)=\frac{p\bigl(\Phi^{-1}(\Theta,X)\bigr)-p_{\mathrm{ref}}}{\rho_0U^2},$$
for a constant reference pressure $p_{\mathrm{ref}}\in\mathbb R$. The scaled fields are dimensionless, $[u^*]=[p_{\mathrm{inc}}^*]=1$, and have respectively the same stated velocity and spatial-pressure regularity. Equivalently, $u(t,x)=Uu^*(\Theta,X)$ and $p(t,x)=p_{\mathrm{ref}}+\rho_0U^2p_{\mathrm{inc}}^*(\Theta,X)$. The governing equations become exactly
$$\partial_\Theta u^*+(u^*\cdot\nabla_X)u^*=-\nabla_Xp_{\mathrm{inc}}^*+\operatorname{Re}^{-1}\Delta_Xu^*,\qquad \operatorname{div}_Xu^*=0.$$

In the separate, unforced barotropic Euler branch, let $\rho:I\times\Omega\to(0,\infty)$ and $u:I\times\Omega\to\mathbb R^3$ have continuous partial derivatives through total order two, and let $P:(0,\infty)\to\mathbb R$ have continuous derivatives through order two, with pressure measured in pascals. Set the potential $V:\Omega\to\mathbb R$ to the zero function. Assume
$$\partial_t\rho+\operatorname{div}_x(\rho u)=0,\qquad \rho D_tu+\nabla_xP(\rho)=0,$$
and assume at the chosen reference density that $P'(\rho_0)=c^2>0$, where $[P'(\rho_0)]=\mathrm{m^2\,s^{-2}}$. Define $\rho^*:I^*\times\Omega^*\to(0,\infty)$, $u^*:I^*\times\Omega^*\to\mathbb R^3$, and $p_{\mathrm{bar}}^*:I^*\times\Omega^*\to\mathbb R$ by
$$\rho^*(\Theta,X)=\frac{\rho\bigl(\Phi^{-1}(\Theta,X)\bigr)}{\rho_0},\qquad u^*(\Theta,X)=\frac{u\bigl(\Phi^{-1}(\Theta,X)\bigr)}{U},\qquad p_{\mathrm{bar}}^*(\Theta,X)=\frac{P\bigl(\rho_0\rho^*(\Theta,X)\bigr)-P(\rho_0)}{\rho_0c^2}.$$
These scaled fields are dimensionless, $[\rho^*]=[u^*]=[p_{\mathrm{bar}}^*]=1$, and have continuous partial derivatives through order two. The exact transformed mass and momentum equations are
$$\partial_\Theta\rho^*+\operatorname{div}_X(\rho^*u^*)=0,\qquad \partial_\Theta u^*+(u^*\cdot\nabla_X)u^*=-\operatorname{Ma}^{-2}(\rho^*)^{-1}\nabla_Xp_{\mathrm{bar}}^*.$$

Initial values are data on a slice $t=t_0\in I$; boundary values are data on a chosen subset $\Gamma\subseteq I\times\partial\Omega$ wherever the relevant traces exist. Extend $\Phi$ to $I\times\mathbb R^3$ by the same coordinate formula and put $S^*=\Phi(S)$ for any such initial or boundary data set $S$. If $g_u:S\to\mathbb R^3$, $g_p:S\to\mathbb R$, $g_\rho:S\to(0,\infty)$, and $g_P:S\to\mathbb R$ are prescribed velocity, incompressible pressure-multiplier, density, and barotropic-pressure data, respectively, define $g_u^*:S^*\to\mathbb R^3$, $g_{p,\mathrm{inc}}^*:S^*\to\mathbb R$, $g_\rho^*:S^*\to(0,\infty)$, and $g_{P,\mathrm{bar}}^*:S^*\to\mathbb R$ by
$$g_u^*(\Phi(t,x))=\frac{g_u(t,x)}{U},\qquad g_{p,\mathrm{inc}}^*(\Phi(t,x))=\frac{g_p(t,x)-p_{\mathrm{ref}}}{\rho_0U^2},\qquad g_\rho^*(\Phi(t,x))=\frac{g_\rho(t,x)}{\rho_0},\qquad g_{P,\mathrm{bar}}^*(\Phi(t,x))=\frac{g_P(t,x)-P(\rho_0)}{\rho_0c^2}.$$
Here $g_p$ and $g_{p,\mathrm{inc}}^*$ apply to the incompressible branch, while $g_\rho$ and $g_P$ apply to the barotropic branch; a prescribed wall-velocity field uses the same velocity map. The spatial dilation takes each boundary trace portion to its image and preserves its outward Euclidean unit normal wherever that normal exists. For momentum density $m:I\times\Omega\to\mathbb R^3$, with units $\mathrm{kg\,m^{-2}\,s^{-1}}$, define $m^*:I^*\times\Omega^*\to\mathbb R^3$ by
$$m^*(\Phi(t,x))=\frac{m(t,x)}{\rho_0U}=\rho^*(\Phi(t,x))u^*(\Phi(t,x)),$$
where $\rho^*(\Phi(t,x))=1$ in the constant-density branch. Thus $m^*$ is dimensionless. Whenever the integrals exist, total momentum on corresponding spatial regions $A\subseteq\Omega$ and $A^*=A/L$ satisfies
$$\int_A \rho u\,dx=\rho_0UL^3\int_{A^*}\rho^*u^*\,dX.$$
The total momentum has units $\mathrm{kg\,m\,s^{-1}}$, as does its scale factor $\rho_0UL^3$.
Because $\Phi$ and each field-value scaling are invertible, these formulas carry any already-compatible initial or boundary data to the corresponding scaled data; they assert no compatibility or solvability beyond the selected model and its separate data assumptions. Thermal evolution and heat-flux scaling are not part of this calculation. The coefficient identities do not assert an incompressible or inviscid limit, an error bound, uniqueness, identical solutions for different geometries or rescaled data, or a turbulence threshold. They are conditional predictions of the adopted model formulations and are not experimental observations or proof that either model describes a material.

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

1.3 The map $\Phi$ sends each specified initial slice and boundary trace set to its image under the displayed time and space coordinates. Each displayed field-value map is an invertible scaling, with the stated pressure offsets removed before scaling; its inverse multiplies by the same positive scale and restores the offset. The outward unit normal is preserved by the positive spatial dilation, so already-compatible boundary conditions expressed through these fields and normals are carried to the corresponding scaled conditions. This transports the selected data from [A2] but asserts no compatibility or solvability. [A2, given, algebra]

1.4 Since $\rho=\rho_0\rho^*$ and $u=Uu^*$, the momentum density satisfies $m=\rho_0U\rho^*u^*$; in the constant-density branch $\rho^*=1$. For $x=LX$, the Euclidean volume element is $dx=L^3dX$, which gives the stated total-momentum identity whenever the integrals exist. [given, algebra]

2.1 The hypotheses established in step 1.1 match the constant-density system in [F3]. With $\Theta=Ut/L$, $X=x/L$, $u=Uu^*$, and $p=p_{\mathrm{ref}}+\rho_0U^2p_{\mathrm{inc}}^*$, the chain-rule identities in [F3] give the displayed dimensionless incompressible equation, since $\nu/(UL)=\operatorname{Re}^{-1}$. Positivity of $U,L,\rho_0,\mu$ makes every substitution and division invertible, so the equation equivalence holds in both directions. [F3, step 1.1, algebra]

3.1 The exact equivalences in steps 1.2 and 2.1 do not establish solvability or identify solutions on geometries or data sets that are not related by the stated substitution. Because $[UL]=[\nu]=\mathrm{m^2\,s^{-1}}$ and $[U]=[c]=\mathrm{m\,s^{-1}}$, both ratios are dimensionless. These coefficient identities alone give no asymptotic limit, error estimate, low-Mach incompressibility conclusion, or high-Reynolds turbulence threshold. [A2, F3, step 1.2, step 2.1, step 1.3, step 1.4] ∎

