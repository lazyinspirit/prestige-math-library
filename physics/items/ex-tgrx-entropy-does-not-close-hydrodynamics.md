---
id: ex-tgrx-entropy-does-not-close-hydrodynamics
kind: example
title: Zeroth-order hydrostatic data do not determine bulk viscosity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 2
deps:
  - post-tgrx-hydrostatic-effective-model
  - post-tgr-first-order-dissipation
dependency_roles:
  post-tgrx-hydrostatic-effective-model: physical-assumption
  post-tgr-first-order-dissipation: physical-assumption
justified_by: []
physical_scope: "Conditional comparison of two constitutive model instances sharing one hydrostatic pressure functional; no solution existence, empirical response, or universal transport claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Nabamita Banerjee et al., Constraints on Fluid Dynamics from Equilibrium Partition Functions, arXiv:1203.3544v2, §§1.1–1.2 (2012)"
      url: https://arxiv.org/pdf/1203.3544
    - title: "Pavel Kovtun, Lectures on hydrodynamic fluctuations in relativistic theories, complete lecture notes, §§1.3 and 3.2 (2012)"
      url: https://arxiv.org/pdf/1205.5040
verification:
  precheck: pass
---

## Example

Suppose an application supplies a shared thermodynamic state map on which the pressure in the static hydrostatic functional equals the equilibrium pressure used by the local dissipative constitutive branch. At a common admissible local input with nonzero expansion $\theta$, fix any $\zeta_*>0$ in pascal-seconds and compare two model instances that agree on all hydrostatic data and use constant bulk-viscosity coefficients $\zeta_1=\zeta_*$ and $\zeta_2=2\zeta_*$. The bulk-viscosity coefficient here is the coefficient $\zeta$ multiplying the expansion in $\Pi=-\zeta c\theta$; $\theta=\nabla_a u^a$ is the expansion of the stated observer field. Their adopted hydrostatic functionals are identical, while their bulk-pressure corrections differ by $\Pi_2-\Pi_1=-\zeta_*c\theta\ne0$. This difference has units of pressure. Thus hydrostatic data alone do not fix the bulk viscosity. This is a conditional comparison of constitutive maps; it asserts neither a solution of the balance equations nor an empirical response.

## Example references

[[post-tgrx-hydrostatic-effective-model]]

[[post-tgr-first-order-dissipation]]

[Nabamita Banerjee et al., *Constraints on Fluid Dynamics from Equilibrium Partition Functions*](https://arxiv.org/pdf/1203.3544)

[Pavel Kovtun, *Lectures on hydrodynamic fluctuations in relativistic theories*](https://arxiv.org/pdf/1205.5040)

## Facts & Assumptions

**Given:** Common hydrostatic data and the same pressure function in both model instances; a common admissible local constitutive input with $\theta\ne0$; and a constant $\zeta_*>0$ in $\mathrm{Pa\,s}$.

[F1] [[post-tgrx-hydrostatic-effective-model]]: the adopted $W_{\rm hs}$ depends on the static data and pressure function $p(T,\mu)$, and contains no bulk-viscosity coefficient.

[F2] [[post-tgr-first-order-dissipation]]: the constitutive formula includes the bulk-pressure correction $\Pi=-\zeta c\theta$.

[F3] [[post-tgr-first-order-dissipation]]: $\theta=\nabla_a u^a$ is the expansion of the smooth future unit observer field.

[F4] [[post-tgr-first-order-dissipation]]: $\theta$ has inverse-length units, $c>0$ is in metres per second, $\zeta$ is in pascal-seconds, and $\Pi$ is in pascals.

[A1] The state-map identification between the pressure in the hydrostatic functional and the equilibrium pressure of the dissipative branch is an additional application-specific assumption for this comparison.

[A2] Both constitutive maps are evaluated at the same admissible local input with $\theta\ne0$; no global solution of the balance equations is assumed.

## Verification

1.1 The two instances have the same $T_0,\mu_0,h,N,\Phi,q$ and $p(T,\mu)$ by [A1]. The formula in [F1] therefore has exactly the same integrand and integration measure for both instances; changing $\zeta$ does not alter $W_{\rm hs}$. [given, F1, A1, algebra]

1.2 The constants $\zeta_1=\zeta_*$ and $\zeta_2=2\zeta_*$ are $C^1$ and nonnegative because $\zeta_*>0$. By [F2], at the common input in [A2] their corrections satisfy $\Pi_2-\Pi_1=-(2\zeta_*)c\theta-(-\zeta_*c\theta)=-\zeta_*c\theta$, which is nonzero since $\zeta_*,c>0$ and $\theta\ne0$; $\theta$ has the definition in [F3] and the units are pascals by [F4]. [given, F2, F3, F4, A2, algebra]

2.1 Thus the same hydrostatic functional is compatible with two distinct bulk-pressure responses under the declared constitutive assumptions, so the functional alone does not identify $\zeta$. This conclusion is conditional on the stated model identification and local input; it is not a claim about a measured fluid or an actual solution. [step 1.1, step 1.2, A1, A2] ∎
