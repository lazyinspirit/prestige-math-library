---
id: ex-fd-material-dilation
kind: example
title: Volume dilation and bulk production
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - pthm-fd-smooth-material-kinematics
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - lem-fd-transport-and-density
  - lem-fd-c1-domain-jordan-integrals
  - lem-fd-continuous-localization-on-c1-domains
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  pthm-fd-smooth-material-kinematics: physical-result
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-transport-and-density: mathematical-premise
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
  lem-fd-continuous-localization-on-c1-domains: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >-
  Conditional worked calculation for a smooth positive-density material motion
  and a specified local-equilibrium compressible Newtonian/Fourier model branch.
  It derives a model entropy-production identity from adopted balances and
  constitutive assumptions; it is not a measurement or a claim of universal
  material response.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ain A. Sonin, Fundamental Laws of Motion for Particles, Material Volumes, and Control Volumes, MIT 2.25 lecture notes"
      url: "https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf"
    - title: "Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4: Physical Conservation and Balance Laws & Thermodynamics"
      url: "https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf"
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
proof_strategy: direct
verification:
  precheck: pending
---

## Example

Let $I$ be an open time interval containing $0$, with time measured in seconds; let $B\subseteq\mathbb R^3$ be a bounded $C^1$ reference body, and let $U\subseteq\mathbb R^3$ be an open neighborhood of $\overline B$. Let $\alpha\in C^2(I,(0,\infty))$ be dimensionless with $\alpha(0)=1$, so $\alpha'$ is measured in s$^{-1}$, and define $\chi:I\times U\to\mathbb R^3$ by $\chi(t,a)=\alpha(t)a$. This is a $C^2$ orientation-preserving motion with $\chi(0,a)=a$ and positive reference density $\rho_0\in C^1(\overline B)$ in kg m$^{-3}$. Assume the adopted smooth material mass, linear-momentum, total-energy, and entropy balances on every bounded $C^1$ material subregion. On the example's local-equilibrium branch, $e=e(v,s)\in C^2$ on an open state domain, with specific volume $v=1/\rho$ in m$^3$ kg$^{-1}$, $T=e_s>0$ in K, $p=-e_v$ in Pa, and $de=T\,ds-p\,dv$. Adopt the specified symmetric Newtonian stress and Fourier heat-flux closure

$$\sigma=-pI_3+\tau,\qquad \tau=2\mu D_0+\zeta\theta I_3,\qquad q=-\kappa_T\nabla T,$$

with constant coefficients $\mu,\zeta,\kappa_T\ge0$ in Pa s, Pa s, and W m$^{-1}$ K$^{-1}$, respectively. Assume $\rho,u,e,T,s,q,\sigma\in C^1$ and $b,r\in C^0$ on the relevant swept regions, with $\rho,T$ positive. Then $F=\alpha I_3$, $J=\alpha^3$, $u(t,x)=(\alpha'(t)/\alpha(t))x$, and $\theta=3\alpha'/\alpha$, so $D_0=0$ while the mass theorem gives $\rho(t,\chi(t,a))=\rho_0(a)/\alpha(t)^3$. The local entropy-production residual $g=\rho D_ts+\operatorname{div}(q/T)-\rho r/T$ is

$$g=\frac{\zeta\theta^2}{T}+\frac{\kappa_T|\nabla T|^2}{T^2}\ge0.$$

In the spatially uniform-temperature case, the heat-conduction term vanishes and the bulk-viscous production is $\zeta\theta^2/T$. The residual has units W m$^{-3}$ K$^{-1}$. This is a conditional deduction for the stated closure and balances, not a claim that actual fluids universally obey them.

## Example references

[Ain A. Sonin, MIT 2.25 lecture notes, §§1.1–1.3 (material balance laws)](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf)

[Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4, §§4.1–4.4.4 (mass, energy, and entropy balance forms)](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf)

[David Tong, Fluid Mechanics, Part II, §§3.1–3.1.2 (stress, strain, viscosity, and kinetic-energy dissipation)](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Facts & Assumptions

**Given:** The stated C2 positive dilation, C1 positive density and temperature, material integral balances, local-equilibrium Gibbs identity, and the stated Newtonian/Fourier closure.

[F1] [[pthm-fd-smooth-material-kinematics]]: under the adopted mass balance, $\partial_t\rho+\operatorname{div}(\rho u)=0$, $\rho(t,\chi(t,a))J(t,a)=\rho_0(a)$, and, for positive density, $D_t\rho=0$ if and only if $\operatorname{div}u=0$. This physical theorem is conditional on the stated mass-balance and smoothness hypotheses.

[F2] [[post-fd-continuum-balances]]: adopt material mass, linear-momentum, total-energy, and local-temperature entropy balances on the stated bounded $C^1$ material regions; this postulate is an assumption, not an experimental finding.

[F3] [[lem-fd-transport-and-density]]: for a $C^2$ orientation-preserving motion and a $C^1$ scalar field on the swept set, the derivative of its compact-Jordan material integral is the integral of $\partial_tq+\operatorname{div}(qu)$; the statement also gives change of variables and density-Jacobian invariance. This remains a draft mathematical supplier used as a mathematical premise.

[F4] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: if $\Omega\subseteq\mathbb R^3$ is bounded $C^1$ and $F\in C^1(\overline\Omega;\mathbb R^3)$, then $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot n\,dS$, assuming $\mathrm{AC}_\omega$.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says every countable family of nonempty sets has a choice function; this is the exact choice strength assumed by [F4], not full arbitrary-index choice as a premise of this calculation.

[F6] [[def-fd-quantity-and-frame-conventions]]: $D_t=\partial_t+u\cdot\nabla$, $L_{ij}=\partial_j u_i$, $D=(L+L^T)/2$, $\theta=\operatorname{tr}D=\operatorname{div}u$, $D_0=D-(\theta/3)I_3$, and $S:T=\sum_{i,j}S_{ij}T_{ij}$; the adopted stress uses traction $\sigma n$ and tension-positive sign.

[F7] [[lem-fd-c1-domain-jordan-integrals]]: bounded open regions with locally $C^1$ graph boundaries and their diffeomorphic images are bounded $C^1$ domains; their compact closures and images are Jordan measurable, and open-region and compact-closure integrals agree.

[F8] [[lem-fd-continuous-localization-on-c1-domains]]: a continuous residual with zero integral on every bounded $C^1$ subdomain is pointwise zero; nonnegative integrals imply a pointwise nonnegative residual.

[F9] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with invertible derivative transforms integrals over compact Jordan sets by the absolute Jacobian determinant.

[F10] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: every continuous real function on a compact Jordan set is Riemann integrable there.

[A1] Local equilibrium is adopted only for this example: $e(v,s)\in C^2$, $T=e_s>0$, $p=-e_v$, and $de=T\,ds-p\,dv$.

[A2] The symmetric constitutive branch is adopted only for this example: $\sigma=-pI_3+2\mu D_0+\zeta\theta I_3$ and $q=-\kappa_T\nabla T$, with constant $\mu,\zeta,\kappa_T\ge0$. This is a model input; no empirical universality or positivity theorem is asserted.

## Verification

**Given:** [F1]–[F10], [A1]–[A2], the smoothness hypotheses in the example, and the material motion $\chi(t,a)=\alpha(t)a$.

1.1 For each $t$, $\chi_t(a)=\alpha(t)a$ maps $U$ bijectively onto the open set $\alpha(t)U$ with inverse $x\mapsto x/\alpha(t)$; jointly this inverse is $C^2$ because $\alpha>0$. Differentiating $\chi$ in $a$ and $t$ gives $F=\alpha I_3$, $J=\alpha^3>0$, and $u(t,x)=(\alpha'/\alpha)x$. Using the velocity-gradient and strain-rate definitions [F6], $L=(\alpha'/\alpha)I_3$, $D=(\alpha'/\alpha)I_3$, $\theta=3\alpha'/\alpha$, and $D_0=0$. [F6, given, algebra]

1.2 Fix a bounded $C^1$ material subregion $V\Subset B$ and put $K=\overline V$, $\Omega_t=\chi_t(V)$. Apply [F3] componentwise to the linear-momentum integral in [F2]; [F7] identifies the open-region integrals with their compact-closure versions. The divergence theorem [F4], under the stated choice premise [F5], converts $\int_{\partial\Omega_t}\sigma n$ to $\int_{\Omega_t}\operatorname{div}\sigma$. The continuous residual is integrable on the compact Jordan region by [F10]:
$$R_m=\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u)-\rho b-\operatorname{div}\sigma$$
has integral zero on $\chi_t(K)$. Change variables by [F9], use [F7] to return to $V$, and apply [F8] to the continuous reference residual $R_m(t,\chi(t,a))J(t,a)$. Since $J>0$, $R_m=0$ pointwise. Expanding with the conventions [F6] and the continuity equation [F1] yields $\rho D_tu=\rho b+\operatorname{div}\sigma$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, algebra]

1.3 Set $E=e+|u|^2/2$. Apply [F3] to $\rho E$ in the total-energy balance [F2]. The surface-work integrand is $(\sigma n)\cdot u=(\sigma^Tu)\cdot n$; apply [F4] with [F5] to $\sigma^Tu$ and $q$. The continuous total-energy residual is integrable by [F10] and has zero integral on every $\Omega_t=\chi_t(V)$. By [F7], [F9], and the zero-integral conclusion of [F8], it vanishes pointwise:
$$\partial_t(\rho E)+\operatorname{div}(\rho Eu)=\rho b\cdot u+\operatorname{div}(\sigma^Tu)-\operatorname{div}q+\rho r.$$
[F2, F3, F4, F5, F7, F8, F9, F10, algebra]

1.4 Apply [F3] to $\rho s$ in the entropy inequality [F2]. By the continuity equation [F1],
$$\partial_t(\rho s)+\operatorname{div}(\rho s u)=\rho D_ts+s\bigl(\partial_t\rho+\operatorname{div}(\rho u)\bigr)=\rho D_ts.$$
The surface term has the local-temperature flux $q/T$; [F4] with [F5] converts it to the volume divergence. Convert each open-region integral to the compact-Jordan and then reference-domain form using [F7] and [F9]. The residual is continuous and integrable by [F10]; its nonnegative integral on every bounded $C^1$ $V\Subset B$ and [F8] make it pointwise nonnegative. Since $J>0$, this gives $g=\rho D_ts+\operatorname{div}(q/T)-\rho r/T\ge0$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, given]

2.1 Apply [F1] to this motion. Since $J=\alpha^3$, the density reconstruction is $\rho(t,\chi(t,a))=\rho_0(a)/\alpha^3$; the density remains positive because $\rho_0>0$ and $\alpha>0$. [given, F1, step 1.1]

2.2 Dot the local momentum equation in step 1.2 with $u$. The identity $u\cdot\operatorname{div}\sigma=\operatorname{div}(\sigma^Tu)-\sigma:\nabla u$, the symmetry of the adopted stress [A2], and the continuity equation from [F1] give the kinetic-energy balance $\partial_t(\rho|u|^2/2)+\operatorname{div}(\rho|u|^2u/2-\sigma^Tu)=\rho b\cdot u-\sigma:D$, where $D$ is the symmetric velocity gradient from [F6]. Subtract this balance from step 1.3; the $\rho b\cdot u$ and $\operatorname{div}(\sigma^Tu)$ terms cancel, leaving $\rho D_te=\sigma:D-\operatorname{div}q+\rho r$. [A2, F1, F6, step 1.2, step 1.3, algebra]

3.1 From [A1], $D_te=T D_ts-pD_t(1/\rho)$. The continuity equation in [F1] gives $D_t(1/\rho)=\theta/\rho$, using $\theta=\operatorname{div}u$ from [F6], so $\rho T D_ts=\rho D_te+p\theta$. Substitute step 2.2 and $\sigma=-pI_3+\tau$ from [A2]; since $I_3:D=\theta$, the pressure terms cancel and $\rho T D_ts=\tau:D-\operatorname{div}q+\rho r$. [A1, A2, F1, F6, step 2.2, algebra]

4.1 Substitute this identity into step 1.4 and use $\operatorname{div}(q/T)=\operatorname{div}q/T-q\cdot\nabla T/T^2$. The definitions [F6] give $D_0:I_3=0$, $D_0:D=|D_0|^2$, and $\tau:D=2\mu|D_0|^2+\zeta\theta^2$; also $q=-\kappa_T\nabla T$. Therefore $g=2\mu|D_0|^2/T+\zeta\theta^2/T+\kappa_T|\nabla T|^2/T^2$. Step 1.1 has $D_0=0$, giving the stated bulk-production formula and its uniform-temperature special case. [A2, F6, step 1.1, step 1.4, step 3.1, algebra] ∎
