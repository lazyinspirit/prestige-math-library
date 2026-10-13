---
id: pthm-gr-high-regularity-local-development
kind: physics-theorem
title: "Local Cauchy development of the adopted Einstein field law for smooth constrained data in the selected matter sectors"
status: published
origin: session
domain: physics
dependency_level: 27
physical_scope: "Classical general relativity in the smooth high-regularity branch: four-dimensional smooth Lorentzian geometry of signature (-+++), cosmological constant Lambda, and one of the classical matter sectors — vacuum, a scalar field with smooth potential, a strict barotropic perfect fluid with 0<p'<1, or geodesic dust — with smooth constrained initial data; the conclusion is a local-in-time development before any flow crossing. It makes no statement about nature, global or all-time existence, nonsmooth or distributional sources, shocks, free-boundary or junction behavior, asymptotic regimes, or an optimal Sobolev threshold. Smooth zero sets and empty regions are included in the dust branch with its separately prescribed smooth geodesic velocity."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, def-gr-si-unit-and-coordinate-conventions, def-gr-scalar-field-matter-model, def-gr-perfect-fluid-matter-model, def-gr-dust-matter-model, thm-gr-high-regularity-selected-matter-development, thm-gr-constraint-equations-in-normal-frame, def-countable-choice, def-dependent-choice]
dependency_roles:
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  post-gr-einstein-field-law: physical-assumption
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-scalar-field-matter-model: formulation-prerequisite
  def-gr-perfect-fluid-matter-model: formulation-prerequisite
  def-gr-dust-matter-model: formulation-prerequisite
  thm-gr-high-regularity-selected-matter-development: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.2 (Uniqueness): geometric uniqueness up to diffeomorphism, proved by putting two developments into the same harmonic-map gauge and invoking the uniqueness theorem for the reduced symmetric hyperbolic system"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and Dependent Choice ([[def-dependent-choice]]).

Adopt the direct-equation presentation of the classical gravitational framework
for a model satisfying the spacetime and classical-domain postulate
[[post-gr-spacetime-and-classical-domain]] and the field-and-matter postulate
[[post-gr-field-and-matter-assumptions]], with the field law
[[post-gr-einstein-field-law]]: on the matter domain of the model,
$$G_{ab}+\Lambda g_{ab}=\kappa\,T_{ab},\qquad \kappa=\frac{8\pi G_N}{c^4},$$
with $T$ the stress-energy tensor of the model's selected matter sector. Let the
sector be one of:

1. vacuum with cosmological constant ($T=0$);
2. the scalar-field model $(\varphi,V,K_\phi)$ of [[def-gr-scalar-field-matter-model]]
   with a chosen smooth potential whose scalar equation and stress tensor are
   those defined there, writing $K_\phi$ for that definition's scalar normalization constant;
3. the perfect-fluid model of [[def-gr-perfect-fluid-matter-model]] with a
   smooth barotropic equation of state satisfying $\epsilon+p>0$ and
   $0<p'(\epsilon)<1$ on the range of the data;
4. an energy-coefficient dust density $\varepsilon\ge0$ and prescribed
   smooth future unit velocity, with $T=\varepsilon u^\flat\otimes u^\flat$.
   On positive-density regions this is [[def-gr-dust-matter-model]];
   on zero-density regions the velocity is separately prescribed and the
   geodesic equation remains imposed. Equivalently the mass-normalized
   density is $\rho=\varepsilon/c^2$.

Use the SI and coordinate conventions of
[[def-gr-si-unit-and-coordinate-conventions]]: in a length-coordinate chart
$x^0=ct$, the metric is dimensionless, $[c]=\mathrm m\,\mathrm s^{-1}$, $[\Lambda]=\mathrm m^{-2}$,
$[G_N]=\mathrm m^3\,\mathrm{kg}^{-1}\,\mathrm s^{-2}$, and
$[\kappa]=\mathrm m^{-1}\,\mathrm{kg}^{-1}\,\mathrm s^2$, so $\kappa T$
has curvature units. Every velocity denoted $u$ in this theorem is normalized
by $g(u,u)=-1$. Its SI proper-time four-velocity is $U_{\rm SI}=cu$, with
$g(U_{\rm SI},U_{\rm SI})=-c^2$; the initial $U_0$ in the mathematical bundle
formulation is normalized, and its SI counterpart is $cU_0$. The mass-normalized density is $\rho=\rho_{\rm mass}:=\varepsilon/c^2$ with
units $\mathrm{kg}\,\mathrm m^{-3}$. The dust source uses
$\varepsilon=\rho_{\rm mass}c^2$ and
$\varepsilon u^\flat\otimes u^\flat=\rho_{\rm mass}U_{\rm SI}^\flat\otimes
U_{\rm SI}^\flat$; fluid $\epsilon$ and $p$ have units
$\mathrm J\,\mathrm m^{-3}$ and $p'$ is dimensionless. For the scalar branch
choose an arbitrary field unit $\Phi$ and use $[\varphi]=\Phi$,
$[V]=\Phi^2\,\mathrm m^{-2}$, and $[K_\phi]=\mathrm J\,\mathrm m^{-1}\,\Phi^{-2}$;
then $\Box_g\varphi$ and $V'(\varphi)$ have units $\Phi\,\mathrm m^{-2}$ and
$T_{ab}$ has units $\mathrm J\,\mathrm m^{-3}$.

Let $(\Sigma,h,K)$ with the sector's smooth initial data (respectively nothing,
$(\varphi_0,\pi_0)$, $(\epsilon_0,v_0)$, $(\varepsilon_0,U_0)$) satisfy the constraint
equations [[thm-gr-constraint-equations-in-normal-frame]] for the sector's
stress tensor. Here fluid $v_0\in\Gamma(T\Sigma)$ obeys $h(v_0,v_0)<1$, with full initial unit velocity $U_0=(1-h(v_0,v_0))^{-1/2}(N+v_0)$ in $\mathbb RN\oplus T\Sigma$, exactly as in [[thm-gr-high-regularity-selected-matter-development]]. Then the model admits a **local Cauchy development**: there are
a smooth time-oriented Lorentzian four-manifold $(M,g,N)$ of the framework and
a spacelike embedded image of $\Sigma$ inducing $(h,K)$ and the stated matter
data, solving the field law $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ and the
sector's matter equations on a neighborhood of $\Sigma$; $\Sigma$ lies in the
interior of its domain of dependence; and any two such developments of the same
data agree near $\Sigma$ up to an isometry fixing the data and the time
orientation. The development is local in time and no uniform-in-the-data
existence time or global statement is asserted.

## Facts & Assumptions

**Given:** Countable and Dependent Choice and the adopted postulates and one of the four matter sectors, together with smooth constrained initial data.

[A1] The field law of the model is $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ with the model's own stress-energy tensor; it is an adopted law, not derived from symmetry or observation ([[post-gr-einstein-field-law]], [[post-gr-spacetime-and-classical-domain]], [[post-gr-field-and-matter-assumptions]]).

[F1] For the scalar and fluid sectors and the positive-density dust sector, the model's stress-energy tensor and matter equations are those of the corresponding definition ([[def-gr-scalar-field-matter-model]], [[def-gr-perfect-fluid-matter-model]], [[def-gr-dust-matter-model]]). For nonnegative geodesic dust the same source tensor extends smoothly through zeros, with separately prescribed geodesic velocity; the mass-to-energy conversion and its initial bundle data are explicit in [[thm-gr-high-regularity-selected-matter-development]].

[F2] The constraint equations in the normal frame are the normal and normal-tangential components of the field law ([[thm-gr-constraint-equations-in-normal-frame]]).

[L1] Mathematical theorem: for each of the four sectors, smooth constrained data admit a smooth local development solving $G+\Lambda g=\kappa T$ with the sector's stress tensor and matter equations, unique near the surface up to a data-fixing time-orientation-preserving isometry ([[thm-gr-high-regularity-selected-matter-development]]).

## Proof

**Proof technique:** direct.

1.1 (Identification of the equations.) By [A1] the model's field law is exactly the equation $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ with the model's $T$; by [F1] $T$ and the matter equations are those of the selected sector; by [F2] the constraint equations used in [L1] are the projections of that same field law. [A1, F1, F2]

2.1 (Existence.) Applying [L1] to the sector and the given constrained data produces a smooth Lorentzian manifold with the induced data $(h,K)$ and matter data, satisfying $G+\Lambda g=\kappa T$ with the sector stress tensor and the sector matter equations; by step 1.1 this is precisely a local development of the adopted model, and the causal statement about the domain of dependence is part of [L1]. [step 1.1, L1]

3.1 (Uniqueness and status.) The isometry statement of [L1] identifies any two such developments of the same data after fixing the data and the time orientation, so the model's local development is unique in that sense. The deduction is conditional on [A1] and on the sector definitions; no statement about the empirical validity of the postulates, no global existence and no quantitative measurement enters. [step 2.1, L1, A1, discharge-construct] ∎

## Remarks

- **Model versus nature.** This theorem is a model deduction: it establishes that the adopted field law and matter definitions, plus the stated mathematical hypotheses, imply the existence of local solutions. It does not establish that the model describes nature, and no evidence from observation is used.
- **Scope.** The limitations are collected in [[rem-gr-high-regularity-scope]].
