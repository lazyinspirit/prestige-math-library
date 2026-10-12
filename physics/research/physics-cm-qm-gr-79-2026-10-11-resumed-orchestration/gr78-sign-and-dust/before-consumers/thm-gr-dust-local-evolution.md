---
id: thm-gr-dust-local-evolution
kind: theorem
title: "Local Einstein-dust evolution: smooth constrained data with prescribed velocity admit a smooth local development, unique up to a data-fixing isometry"
status: draft
origin: session
domain: mathematics
dependency_level: 24
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-matter-model, def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten, lem-gr-dust-reduced-evolution-equations, lem-gr-dust-symmetric-hyperbolic-reduction, thm-gr-dust-subsidiary-and-residual-vanishing, lem-gr-dust-initial-data-and-tilted-initialization, thm-gr-local-symmetric-hyperbolic-well-posedness, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, thm-gr-local-geometric-development]
dependency_roles:
  def-gr-dust-matter-model: mathematical-premise
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  lem-gr-dust-reduced-evolution-equations: mathematical-premise
  lem-gr-dust-symmetric-hyperbolic-reduction: mathematical-premise
  thm-gr-dust-subsidiary-and-residual-vanishing: mathematical-premise
  lem-gr-dust-initial-data-and-tilted-initialization: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $(\Sigma,h,K,\rho_0,U_0)$ be smooth initial data for the dust model
([[def-gr-dust-matter-model]]): a smooth three-manifold $\Sigma$ with
Riemannian metric $h$, symmetric $2$-tensor $K$, a smooth rest density
$\rho_0\ge0$ on $\Sigma$ (zero on empty regions allowed) and a smooth
future-directed unit timelike vector field $U_0$ on $\Sigma$ (prescribed
independently, tilted relative to $\Sigma$ in general). Suppose the constraint
equations of [[thm-gr-constraint-equations-in-normal-frame]] hold on $\Sigma$
with the dust stress tensor determined by $(\rho_0,U_0)$ and the chosen normal.
Then there is a smooth local development: a smooth Lorentzian metric $g$, a
smooth function $\rho\ge0$ and a smooth future-directed unit timelike field $u$
solving
$$G_{ab}+\Lambda g_{ab}=\kappa\rho c^2\,u_au_b,\qquad \nabla_uu=0,\qquad u(\rho)+\rho\,\nabla\!\cdot u=0$$
near $\Sigma$, with $\Sigma$ spacelike of induced data $(h,K)$ and matter data
$(\rho_0,U_0)$; $\Sigma$ lies in the interior of the domain of dependence of the
solution region; the construction never divides by $\rho$, and every two such
developments of the same data agree near $\Sigma$ up to a data-fixing
time-orientation-preserving isometry. In particular the conclusions hold for
smooth data with $\rho_0\equiv0$ on open subsets (the velocity is then
separately prescribed there).

## Facts & Assumptions

**Given:** the smooth constrained dust data, including the separately prescribed velocity field $U_0$.

[L1] The reduction of [[def-gr-dust-reduction-variables-and-gauge]] turns the system into the variables $(e_a{}^\mu,\Gamma_a{}^i{}_j,E_{ij},B_{ij},r)$; the evolution equations, transports and trace preservation are [[lem-gr-dust-reduced-evolution-equations]] and the system is symmetric hyperbolic with positive time matrix on the spacelike initial surface, uniformly on compact value sets, by [[lem-gr-dust-symmetric-hyperbolic-reduction]].

[L2] The reduced system is equivalent to the full system: the subsidiary system closes and the residual-vanishing theorem forces all zero quantities to vanish on the domain of determination from zero initial data; the initial residuals vanish for constrained data by [[lem-gr-dust-initial-data-and-tilted-initialization]] and [[thm-gr-dust-subsidiary-and-residual-vanishing]].

[L3] Local existence, uniqueness, continuous dependence and smooth persistence for the symmetric hyperbolic system on a compact value set ([[thm-gr-local-symmetric-hyperbolic-well-posedness]], [[thm-gr-periodic-symmetric-hyperbolic-existence]], [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]], [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]).

[L4] The density equation $\partial_sr=-r\chi$ has the explicit solution $r(s)=r(0)\exp(-\int_0^s\chi)$, which preserves nonnegativity and the empty-region branch, and requires no division by $r$ ([[lem-gr-dust-reduced-evolution-equations]] clause (c)).

[L5] Geometric uniqueness of developments up to a data-fixing isometry ([[thm-gr-local-geometric-development]] clause (c), [[thm-gr-dust-subsidiary-and-residual-vanishing]] clause (g)). [L5]

## Proof

**Proof technique:** direct.

1.1 (Setup and initial data.) Choose coordinates, the initial surface $s=0$ and the reduction gauge as in [[def-gr-dust-reduction-variables-and-gauge]]; the tilt of $U_0$ relative to $\Sigma$ is allowed because the gauge is comoving, not normal. By [[lem-gr-dust-initial-data-and-tilted-initialization]] the initial curvature and connection data are determined by $(h,K,U_0)$, all initial residuals vanish, and the spatial Bianchi residuals also vanish by the tilted conormal argument. The density enters only through $r_0=\rho_0c^2$, including the value zero. [L1, algebra]

2.1 (Well-posedness of the reduced system.) By [L1]--[L2] the reduced system is a first-order quasilinear symmetric hyperbolic system in the variables of the reduction, with coefficients smooth in the variables and the initial data determined by the constrained data; [L3] gives a smooth solution on a neighborhood of $\Sigma$ with the stated regularity, and the density component satisfies the transport equation with the explicit positive solution of [L4]. [step 1.1, L1, L2, L3, L4]

3.1 (Recovering the full system and uniqueness.) By the residual-vanishing theorem [L2] the zero quantities vanish on the domain of determination, so the solution of the reduced system satisfies the full Einstein-dust system with the prescribed velocity and density; the causal statements follow as in [[thm-gr-local-geometric-development]], and the uniqueness up to a data-fixing isometry is [L5]. [step 2.1, L2, L5] ∎

## Remarks

- **Scope.** The theorem is local before flow crossings; it does not cover free-boundary evolution, shocks or a uniform slab for noncompact data; the density may vanish on open sets because the velocity is separately prescribed and no division by $\rho$ occurs.
