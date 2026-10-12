---
id: thm-gr-reduced-einstein-local-existence
kind: theorem
title: "Local existence for the reduced Einstein equation from Cauchy data on a spacelike slice"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, lem-gr-reduced-einstein-principal-part, thm-gr-local-symmetric-hyperbolic-well-posedness, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-covariant-two-tensor-field, def-c-r-and-smooth-maps-between-smooth-manifolds, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $M$ be a smooth four-manifold carrying a chart $(x^0=t,x^1,x^2,x^3)$ whose
domain $U$ contains the slice $\Sigma:=\{t=0\}$, let $\bar g$ be a smooth
background metric on $U$ with its Levi--Civita connection $\bar\nabla$, and let
$T$ be a smooth symmetric covariant $2$-tensor on $U$ together with the
background-covariant derivatives needed below (the matter field data). Suppose
smooth functions $g^0_{ab},g^1_{ab}$ on $\Sigma\cap U$ are given such that:

1. $g^0_{ab}$ are the components of a smooth Lorentzian metric on
   $\Sigma\cap U$ with $g^{00}_0<0$ and positive definite spatial block
   $(g_0^{ij})$;
2. $g^1_{ab}$ is symmetric and agrees on $\Sigma$ with the components of
   $\bar\nabla_0g_{ab}$ for some smooth extension $g$ of $g^0$ to $U$;
3. the harmonic-gauge condition $H^a=0$ holds on $\Sigma\cap U$ for the pair
   $(g,\bar g)$ ([[def-gr-harmonic-gauge-and-reduced-equations]]).

Then there is an open neighborhood $V\subseteq U$ of $\Sigma\cap U$ and a smooth
metric $g$ on $V$ with $g|_{\Sigma\cap U}=g^0$ and
$\bar\nabla_0g_{ab}|_{\Sigma\cap U}=g^1_{ab}$, solving the **reduced Einstein
equation** with the given background $\bar g$ and matter tensor $T$
([[def-gr-harmonic-gauge-and-reduced-equations]]) on $V$.

## Facts & Assumptions

**Given:** the chart and slice, the background metric $\bar g$, the matter tensor $T$, and data $g^0,g^1$ satisfying conditions 1--3.

[L1] The reduced Einstein equation is equivalent, on a region where the metric is Lorentzian and the chart is initially orthogonal, to a first-order quasilinear system for $u=(g_{ab},p_{ab}=\bar\nabla_0g_{ab},q_{abi}=\bar\nabla_ig_{ab})$ whose coefficient of the time derivative is the positive definite block matrix $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ and whose spatial coefficients are symmetric ([[lem-gr-reduced-einstein-principal-part]] clause (b)).

[L2] Local well-posedness and finite-speed independence for symmetric hyperbolic systems: solutions exist on a neighborhood of the initial slice and are independent, on the domain of dependence, of the way the data and coefficients are extended beyond a coordinate patch ([[thm-gr-local-symmetric-hyperbolic-well-posedness]], [[thm-gr-periodic-symmetric-hyperbolic-existence]]); smooth data give smooth solutions ([[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]).

[L3] The data are smooth on the slice, and the metric properties $g^{00}_0<0$ and positive definite spatial block persist in a neighborhood of the slice by continuity; a smooth extension of the data to $U$ exists ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-gr-smooth-covariant-two-tensor-field]]).

## Proof

**Proof technique:** direct.

1.1 (Reduction to a first-order symmetric hyperbolic initial value problem.) Extend $g^0,g^1$ to smooth fields on $U$ with $g^1_{ab}=\bar\nabla_0g_{ab}$ at $t=0$ [L3], and set $p_{ab}:=g^1_{ab}$, $q_{abi}:=\bar\nabla_ig^0_{ab}$ initially. By [L1] the reduced equation, together with the definition of $(p,q)$, is the first-order quasilinear system $S(u)=0$ on $U$; at $t=0$ the time matrix of $S$ is positive definite because $g^{00}_0<0$ and $(g_0^{ij})>0$, and positivity persists in an open neighborhood of the slice by [L3]. [L1, L3, algebra]

2.1 (Local solution and independence.) Choose a coordinate ball $B\Subset U$ meeting $\Sigma\cap U$ and cut off the data and the coefficient functions outside $B$; the resulting system is a periodic symmetric hyperbolic system after identifying a neighborhood of $B$ with an open subset of $\mathbb T^3_{2\pi}$ and extending by constants. By [L2] it has a smooth solution on a time interval around $0$; by the finite-speed independence clause of [L2], restricted to the domain of dependence of $\Sigma\cap B$ the solution depends only on the data and coefficients inside the patch, so the local solutions on overlapping balls agree and patch to a solution of $S(u)=0$ on a neighborhood $V$ of $\Sigma\cap U$. [step 1.1, L2, algebra]

3.1 (Return to the second-order equation.) On $V$ the relations $\bar\nabla_0g_{ab}=p_{ab}$ and $\bar\nabla_0q_{abi}=\bar\nabla_ip_{ab}+\mathcal C_{abi}$ hold by construction of $S$, with the exact background-curvature term $\mathcal C_{abi}=-\bar R^c{}_{a0i}g_{cb}-\bar R^c{}_{b0i}g_{ac}$ from [L1], and the second-order equation of [L1] (which was solved for $\bar\nabla_0p_{ab}$) is exactly $S(u)=0$; substituting the relations recovers the reduced Einstein equation for $g$ with the stated data. This gives the asserted smooth solution. [step 2.1, L1, algebra] ∎

## Remarks

- **Role.** This is E1's existence theorem for the gauge-reduced equation; E2 supplies the geometric data $g^0,g^1$ from $(h,K)$ and removes the background dependence by geometric uniqueness, and E3 verifies the matter reductions.
