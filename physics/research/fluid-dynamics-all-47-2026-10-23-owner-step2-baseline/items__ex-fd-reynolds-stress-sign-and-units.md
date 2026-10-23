---
id: ex-fd-reynolds-stress-sign-and-units
kind: example
title: Covariance versus effective Reynolds stress
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - thm-fdmath-finite-reynolds-identity
  - def-fd-quantity-and-frame-conventions
dependency_roles:
  thm-fdmath-finite-reynolds-identity: mathematical-premise
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
physical_scope: >-
  A two-member constant-velocity example in a formal constant-density
  incompressible model, used only to distinguish covariance from the signed
  effective stress contribution and to check SI units. It reports no
  measurement and proposes no closure law.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3 (Spring 2006 lecture notes)"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
    - title: "H. Tennekes and J. L. Lumley, A First Course in Turbulence (1972), full-text digital copy"
      url: "https://djvu.online/file/rx5CLAMFpVjaT"
---

## Example

Let $\tau>0$ seconds, $I=(-\tau,\tau)$, and let $B\subseteq\mathbb R^3$ be a nonempty bounded open region with $C^1$ boundary and $U$ an open neighborhood of $\overline B$. Choose a unit vector $e\in\mathbb R^3$ and a speed $c>0$ measured in m s$^{-1}$. On the reference neighborhood define $\chi_1(t,a)=a+ct e$ and $\chi_2(t,a)=a-ct e$, and on the open fluid domain $\Omega=\mathbb R^3$ set $u_1(t,x)=ce$ and $u_2(t,x)=-ce$. Take equal weights $a_1=a_2=1/2$, zero pressure and forcing fields $p_j=f_j=0$, and common $\nu=0$ in the finite Reynolds identity. For the formal constant-density interpretation, adopt a constant density parameter $\rho_0>0$ in kg m$^{-3}$. Define the covariance $R=\sum_{j=1}^2a_j(u_j-\bar u)\otimes(u_j-\bar u)$ and define the effective Reynolds-stress correction $\sigma_R=-\rho_0R$ when the momentum equation is written with a $+\operatorname{div}\sigma$ contribution on the right. Then $\bar u=0$, $R=c^2e\otimes e$, and $\rho_0R$ is a nonzero positive-semidefinite tensor with units Pa, while $\sigma_R$ has the opposite sign. This is an exact finite-field illustration, not an empirical observation or a statistical turbulence model.

## Example references

[[thm-fdmath-finite-reynolds-identity|finite weighted Reynolds identity and its hypotheses]]

[[def-fd-quantity-and-frame-conventions|Newtonian velocity, density, and tension-positive stress conventions]]

[Flierl and Ferrari, MIT OpenCourseWare 12.820, Chapter 3, §§3.6–3.7, complete lecture notes](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

[Tennekes and Lumley, *A First Course in Turbulence* (1972), Chapter 2, §2.1, full-text digital copy](https://djvu.online/file/rx5CLAMFpVjaT)

## Facts & Assumptions

[F1] [[thm-fdmath-finite-reynolds-identity]]: for an open time interval and spatial domain, a finite family of divergence-free velocity fields that are $C^1$ in time and space with continuous second spatial derivatives, $C^1$ pressure fields, continuous forcing fields, fixed nonnegative weights summing to one, and one common $\nu\ge0$, the pointwise averaged equation contains $-\operatorname{div}R$, where $R=\sum_j a_j(u_j-\bar u)\otimes(u_j-\bar u)$. Its current Step-1 readiness record is `ready`; the proof was inspected at this exact interface.

[F2] [[def-fd-quantity-and-frame-conventions]] (current draft and now listed in the batch-3 manifest; no current Step-1 readiness record): a material motion is a $C^2$ map whose time slices are bijections from $U$ onto open images with $C^2$ inverses and positive Jacobian determinant, with $\chi(0,a)=a$ in the initial chart. The use is conditional on the current definition receiving its current readiness record.

[F3] [[def-fd-quantity-and-frame-conventions]] (same current draft and missing readiness record): the Eulerian velocity is defined by $u(t,\chi(t,a))=\partial_t\chi(t,a)$ and has units m s$^{-1}$.

[F4] [[def-fd-quantity-and-frame-conventions]] (same current draft and missing readiness record): stress uses the tension-positive traction convention $\sigma n$ and stress/traction have units Pa.

[A1] For this example only, identify the positive constant density used in the momentum scaling with the constant reference value $\rho_0(a)\equiv\rho_0$, with $\rho_0$ measured in kg m$^{-3}$; this is an adopted constant-density interpretation, not a deduction about density transport or an empirical premise.

[A2] The phrase “effective Reynolds-stress correction” denotes the signed tensor contribution whose divergence appears in a momentum equation written with $+\operatorname{div}\sigma$ on the right. This sign convention does not identify $\sigma_R$ with a measured total Cauchy stress or assert its uniqueness from its divergence.

**Given:** $I=(-\tau,\tau)$, $B$, $U$, $e$, $c$, the two translation maps, the constant velocity fields on $\Omega=\mathbb R^3$, $a_1=a_2=1/2$, $p_j=f_j=0$, $\nu=0$, the constant-density interpretation [A1], and the sign convention [A2]. Apply [F1] under the current physical definitions [F2]–[F4] conditionally.

## Verification

1.1 For each fixed $t$, $\chi_1(t,\cdot)$ and $\chi_2(t,\cdot)$ are translations with inverses $x\mapsto x-ct e$ and $x\mapsto x+ct e$, respectively; $D_a\chi_j=I_3$ and $J_j=1$. They are $C^2$ on $I\times U$, orientation preserving, and equal the identity at $t=0$. By [F2]–[F3], their Eulerian velocities on the images are $ce$ and $-ce$, as extended by the same constant fields to $\Omega$. Each field is $C^\infty$, divergence free, time independent, and has constant $u_j\otimes u_j$; hence every derivative in the member equation is zero, so the hypotheses of [F1] hold with the given zero pressure, forcing, and viscosity. [given, F1, F2, F3, algebra]

2.1 The equal-weight mean is $\bar u=(ce-ce)/2=0$, so $v_1=ce$ and $v_2=-ce$. Therefore $R=\tfrac12(ce\otimes ce)+\tfrac12((-ce)\otimes(-ce))=c^2e\otimes e$. [given, F1, step 1.1, algebra]

3.1 For every $z\in\mathbb R^3$, $z^{\mathsf T}Rz=c^2(z\cdot e)^2\ge0$, and $R$ is symmetric and nonzero. Since each velocity has units m s$^{-1}$ by [F3], $R$ has units m$^2$ s$^{-2}$; multiplying by $\rho_0$ in kg m$^{-3}$ gives kg m$^{-1}$ s$^{-2}$=Pa. Thus $\sigma_R=-\rho_0R$ is a negative-semidefinite effective correction with units Pa under [F4]. [A1, F3, F4, step 2.1, algebra]

4.1 The supplier equation [F1] contains $-\operatorname{div}R$ on the right. Multiplying by the constant $\rho_0$ gives $-\rho_0\operatorname{div}R=-\operatorname{div}(\rho_0R)=\operatorname{div}(-\rho_0R)$, because $\rho_0$ is spatially constant. Under [A2] the corresponding effective stress correction is therefore $\sigma_R=-\rho_0R$; the covariance $R$ itself remains positive semidefinite. [F1, A1, A2, step 2.1, algebra] ∎
