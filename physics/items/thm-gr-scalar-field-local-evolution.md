---
id: thm-gr-scalar-field-local-evolution
kind: theorem
title: "Local Einstein-scalar evolution: smooth constrained data admit a local development, unique up to a data-fixing isometry"
status: draft
origin: session
domain: mathematics
dependency_level: 25
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

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Fix $\Lambda\in\mathbb R$, $\kappa>0$ and one scalar model $(\varphi,V,K_\phi)$ of [[def-gr-scalar-field-matter-model]], with its fixed smooth potential and normalization. Let $\Sigma$ be a smooth three-manifold with smooth Riemannian metric $h$, symmetric tensor $K_2$ and complete scalar data $(\varphi_0,\pi_0)$. Suppose the constraints of [[thm-gr-constraint-equations-in-normal-frame]] hold for the scalar stress computed from these data, with $\pi_0$ the prescribed future-normal derivative. Then there is a smooth local Einstein-scalar development
$$G_{ab}+\Lambda g_{ab}=\kappa T_{ab},\qquad \Box_g\varphi-V'(\varphi)=0,$$
with induced geometric data $(h,K_2)$, $\varphi|_\Sigma=\varphi_0$ and $n(\varphi)|_\Sigma=\pi_0$. The neighborhood may have position-dependent time width. The initial surface is interior to its intrinsic domain of dependence; restricting to the interior Cauchy neighborhood gives a globally hyperbolic development. Every two developments of this same fixed model and complete data are related near the entire initial surface by a data-fixing time-orientation-preserving isometry matching $\varphi$. No potential positivity, mass sign, global existence or uniform noncompact slab is asserted ([[thm-gr-local-geometric-development]]).

## Facts & Assumptions

**Given:** the choice assumptions, fixed constants and scalar model, and the smooth complete constrained data.

[L1] The scalar supplier gives the actual coupled symmetric-hyperbolic family, complete initialization $(\varphi,P,Q)=(\varphi_0,\pi_0,d\varphi_0)$, auxiliary recovery and conservation on the reduced metric before Einstein recovery ([[lem-gr-scalar-einstein-symmetric-hyperbolic-reduction]]).

[L2] The fixed-model development theorem supplies its complete flat harmonic metric initializer, compatible reduced existence, constraint recovery, literal normal-collar gluing, intrinsic Cauchy neighborhood and fixed-data isometry uniqueness ([[thm-gr-local-geometric-development]]). Its flat initial shift derivative includes the contracted spatial Christoffel term; the zero-shift-derivative initializer of [[lem-gr-harmonic-initial-data-construction]] uses instead comparison metric $-dt^2+h$.

[L3] The constraints are computed with the initial scalar stress from the specified data ([[thm-gr-constraint-equations-in-normal-frame]], [[def-gr-scalar-field-matter-model]]).

## Proof

1.1 (Full reduction contract.) Complete scalar data determine every first-order matter variable by [L1], since $\partial_0=n$ initially in [L2]'s metric gauge. The supplier verifies the smooth symmetric positive principal matrices and reconstruction of the actual scalar equation on the reduced metric; its conservation identity then makes the reduced stress divergence-free before Einstein recovery. Thus the fixed model and complete data satisfy all reduction, initialization and reduced-conservation hypotheses of [L2]; the constrained stress is exactly [L3]. [given, L1, L2, L3, algebra]

2.1 (Development and uniqueness.) Apply [L2] with these constrained data. Its reconstructed scalar realizes exactly $\varphi_0$ and $\pi_0$, and its full metric realizes $h,K_2$ with the stated equations. Its gluing and causal conclusions give the variable-width solution and intrinsic Cauchy neighborhood, while its uniqueness compares the same potential, normalization and complete data and matches $\varphi$ by the stated future isometry. No sign assumption beyond the fixed scalar model was introduced. [step 1.1, L2] ∎
## Remarks

The complete scalar equation is used to obtain conservation. Conservation of the scalar stress alone is not substituted for that equation at critical scalar values.
