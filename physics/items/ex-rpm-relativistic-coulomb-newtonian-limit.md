---
id: ex-rpm-relativistic-coulomb-newtonian-limit
kind: example
title: "Formal nonrelativistic limit of the repulsive Coulomb scattering angle"
status: draft
origin: session
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - pthm-rpm-relativistic-coulomb-scattering
  - prop-rpm-relativistic-coulomb-scattering-branch
  - thm-cm-coulomb-scattering
  - lem-rpm-arctangent-reciprocal-angle
  - def-principal-inverse-tangent
  - def-countable-choice
  - post-sr-massive-particle-dynamics
dependency_roles:
  pthm-rpm-relativistic-coulomb-scattering: physical-result
  prop-rpm-relativistic-coulomb-scattering-branch: mathematical-premise
  thm-cm-coulomb-scattering: mathematical-premise
  lem-rpm-arctangent-reciprocal-angle: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-countable-choice: mathematical-premise
  post-sr-massive-particle-dynamics: physical-assumption
physical_scope: "Formal c-to-infinity limit of exact model formulas at fixed rest mass, Coulomb coupling, Newtonian kinetic energy, and impact parameter. It is not a measured comparison or empirical validation."
sources:
  references:
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition, §39 and Problem 1"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/Landau_Lifshitz_T2.pdf"
    - title: "Timothy H. Boyer, “Unfamiliar trajectories for a relativistic particle in a Kepler or Coulomb potential,” Am. J. Phys. 72 (2004), arXiv:physics/0405090v1, complete paper"
      url: "https://arxiv.org/html/physics/0405090v1"
verification: {}
---

## Example

Fix $m,\kappa,K,b>0$ and let $c\to\infty$ with $W_c=mc^2+K$ and $J_c=b\sqrt{A_c}$, where $A_c=(W_c^2-m^2c^4)/c^2$. For sufficiently large $c$, $J_c>\kappa/c$ because $J_c^2-\kappa^2/c^2\to2mKb^2>0$.

1. The relativistic scattering angle tends to the nonrelativistic repulsive Coulomb angle:

   $$\theta_c\longrightarrow2\arctan\left(\frac{\kappa}{2Kb}\right).$$

   This agrees with [[thm-cm-coulomb-scattering]] at kinetic energy $K$ and impact parameter $b$.
2. The limit compares ideal mathematical model formulas while holding the indicated parameters fixed; it supplies no experimental evidence for either model.

## Facts & Assumptions

**Given:** Fixed $m,\kappa,K,b>0$, the adopted fixed-source SI Coulomb action model with $qQ>0$, the flat massive-particle momentum postulate, $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, the relativistic branch formula, and the exact nonrelativistic repulsive Coulomb scattering formula.

[A1] Assume exactly countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, as required by the action-variation and local-IVP suppliers ([[def-countable-choice]]).

[A2] In the flat specialization adopt the massive-particle momentum postulate used by the physical scattering theorem ([[post-sr-massive-particle-dynamics]]).

[F1] For $W>mc^2$ and $J>\kappa/c$, the mathematical branch proposition and conditional physical theorem give $\theta=\pi-2(J/\sqrt C)\arctan(\sqrt{CA}/d)$ ([[prop-rpm-relativistic-coulomb-scattering-branch]], [[pthm-rpm-relativistic-coulomb-scattering]]).

[F2] The nonrelativistic repulsive Coulomb angle for energy $K>0$ and impact parameter $b>0$ is $2\arctan(\kappa/(2Kb))$ ([[thm-cm-coulomb-scattering]]).

[F3] For $y>0$, $\arctan y+\arctan(1/y)=\pi/2$ ([[lem-rpm-arctangent-reciprocal-angle]]); the principal inverse tangent is continuous ([[def-principal-inverse-tangent]]).

## Verification

**Proof technique:** take limits of the three dimensionless factors in the exact relativistic formula and use the positive-argument tangent identity.


1.1 With $W_c=mc^2+K$, $A_c=2mK+\frac{K^2}{c^2},\quad d_c=\frac{W_c\kappa}{c^2}=m\kappa+\frac{K\kappa}{c^2},\quad C_c=J_c^2-\frac{\kappa^2}{c^2}=2mKb^2+\frac{K^2b^2-\kappa^2}{c^2}.$ Thus $J_c/\sqrt{C_c}\to1$ and $\sqrt{C_cA_c}/d_c\to2Kb/\kappa$. By [F3] and continuity, [F1] gives $\theta_c\to\pi-2\arctan(2Kb/\kappa)$. Apply [F3] with $y=2Kb/\kappa>0$ to rewrite this limit as $2\arctan(\kappa/(2Kb))$. This limit retains [A1] and [A2] only when it is read through the physical model theorem. [given, A1, A2, F1, F3, algebra]

2.1 The final expression is exactly [F2]. The agreement is a formal limit with fixed model parameters, not a measured result or validation of the model assumptions. [step 1.1, F2, given] ∎
