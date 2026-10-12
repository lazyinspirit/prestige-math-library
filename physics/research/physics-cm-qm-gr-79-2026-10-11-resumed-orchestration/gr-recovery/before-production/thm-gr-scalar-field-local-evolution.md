---
id: thm-gr-scalar-field-local-evolution
kind: theorem
title: "Local Einstein-scalar evolution: smooth constrained data admit a local development, unique up to a data-fixing isometry"
status: draft
origin: session
domain: mathematics
dependency_level: 24
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-scalar-field-matter-model, lem-gr-scalar-einstein-symmetric-hyperbolic-reduction, thm-gr-local-geometric-development, thm-gr-constraint-equations-in-normal-frame, lem-gr-harmonic-initial-data-construction, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-scalar-field-matter-model: mathematical-premise
  lem-gr-scalar-einstein-symmetric-hyperbolic-reduction: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  lem-gr-harmonic-initial-data-construction: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.4 (Matter Models): the conditions defining a matter model and the treatment of scalar-field matter coupled to the Einstein equations"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and Dependent Choice ([[def-dependent-choice]]).

Let $(\varphi,V,K)$ be the scalar-field matter model of
[[def-gr-scalar-field-matter-model]] with smooth potential $V$, and let
$(\Sigma,h,K_2,\varphi_0,\pi_0)$ be smooth initial data: a smooth three-manifold
$\Sigma$ with Riemannian metric $h$, symmetric $2$-tensor $K_2$, and smooth
functions $\varphi_0,\pi_0$ on $\Sigma$ (the scalar value and its prescribed
normal derivative). Suppose the constraint equations of
[[thm-gr-constraint-equations-in-normal-frame]] hold on $\Sigma$, computed with
the scalar stress-energy tensor determined by $(h,K_2,\varphi_0,\pi_0)$ and the
chosen unit normal. Then the data admit a local development in the sense of
[[thm-gr-local-geometric-development]]: a smooth Lorentzian metric $g$ and
scalar field $\varphi$ near $\Sigma$ satisfying
$$G_{ab}+\Lambda g_{ab}=\kappa\,T_{ab},\qquad \Box_g\varphi-V'(\varphi)=0$$
with $T$ the scalar stress tensor, $\Sigma$ spacelike of induced metric $h$ and
second fundamental form $K_2$, and $\varphi|_\Sigma=\varphi_0$,
$\partial_n\varphi|_\Sigma=\pi_0$; and any two such developments of the same
data agree near $\Sigma$ up to a data-fixing time-orientation-preserving
isometry.

## Facts & Assumptions

**Given:** Countable and Dependent Choice and the smooth data $(\Sigma,h,K_2,\varphi_0,\pi_0)$ satisfying the constraints with the scalar stress tensor.

[L1] The Einstein-scalar system reduces, in the harmonic gauge and with the auxiliary variables of [[lem-gr-scalar-einstein-symmetric-hyperbolic-reduction]], to a first-order quasilinear symmetric hyperbolic system with positive definite time matrix, coupled only at zeroth order; the scalar stress tensor is a smooth zeroth-order function of the variables and is on-shell divergence-free ([[lem-gr-scalar-einstein-symmetric-hyperbolic-reduction]]).

[L2] The abstract development theorem applies to every matter sector with these two properties: it produces local developments from constrained data, glues them, places $\Sigma$ Cauchy on its domain of dependence, and gives uniqueness up to a data-fixing isometry ([[thm-gr-local-geometric-development]]).

[L3] The geometric data $(h,K_2)$ and the matter data $(\varphi_0,\pi_0)$ determine the initial jet of the metric and of the scalar field for the reduced system by [[lem-gr-harmonic-initial-data-construction]] and the stated normal derivative. [L3]

## Proof

**Proof technique:** direct.

1.1 (Verification of the matter hypotheses.) By [L1] the scalar sector satisfies both hypotheses of [L2]: the combined system is first-order quasilinear symmetric hyperbolic with zeroth-order coupling, and the stress tensor is on-shell conserved. [L1]

2.1 (Application of the development theorem.) Applying [L2] with the data $(\Sigma,h,K_2)$ and the matter data $(\varphi_0,\pi_0)$ (whose normal derivative is the prescribed $\pi_0$ and whose jet is the one of [L3]) yields a smooth metric and scalar field near $\Sigma$ satisfying the field equation with the scalar stress tensor and the scalar equation, with the stated induced data and normal derivative, together with the causal and uniqueness conclusions. [step 1.1, L2, L3] ∎

## Remarks

- **Scope.** No potential positivity or mass sign is assumed; the conclusion is local in time and does not assert global existence or stability.
