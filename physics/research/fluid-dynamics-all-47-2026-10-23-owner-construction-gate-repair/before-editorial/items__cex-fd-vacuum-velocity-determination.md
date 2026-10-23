---
id: cex-fd-vacuum-velocity-determination
kind: counterexample
title: "Conservative momentum alone does not fix vacuum velocity"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - def-fd-conservative-weak-form
dependency_roles:
  def-fd-conservative-weak-form: mathematical-premise
physical_scope: "Formal weak mass and momentum laws do not determine velocity on
  vacuum; this is not a claim that a material fluid occupies vacuum."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Facts & Assumptions

**Given:** The fixed open domain, finite time interval, zero density/stress/body source, zero initial conservative data, and the two bounded velocity fields in the Counterexample.

[F1] [[def-fd-conservative-weak-form]]: for $U,F,S\in L^1_{\mathrm{loc}}$, the weak equation is the compactly supported $C^1$ test identity with the initial conservative datum; the mass and momentum instances use $(U,F,S)=(\rho,\rho u,0)$ and $(\rho u,\rho u\otimes u-\sigma,\rho b)$.

## Counterexample

Let $\Omega=(0,1)^3$ metres and $I=(0,T_f)$ with $T_f>0$. The weak conservative mass and momentum equations use mass density $\rho$, velocity $u$, momentum density $\rho u$, mass flux $\rho u$, momentum flux $\rho u\otimes u-\sigma$, and momentum source $\rho b$, tested against compactly supported $C^1$ scalar and vector fields with the conservative initial-data terms. Set $\rho\equiv0$, $\sigma\equiv0$, $b\equiv0$, and initial mass and momentum densities equal to zero. Both the velocity field $u_1\equiv0$ and any fixed nonzero constant velocity field $u_2\equiv v_*$ (with $v_*\in\mathbb R^3$ in metres per second) are bounded and smooth. The two choices have the same zero conservative mass and momentum variables and satisfy the same weak mass and momentum equations, although $u_1\ne u_2$ everywhere. Thus those conservative equations alone do not determine a velocity on the set where $\rho=0$. The example concerns the formal vacuum degeneracy of the equations, not a fluid-particle velocity in physical vacuum, and makes no claim about an energy or constitutive equation.

1.1 For both $u_1$ and $u_2$, $\rho=0$, so the mass density, mass flux, momentum density, quadratic momentum flux, momentum source and initial conservative data are all identically zero. The fields and all products are locally integrable on the finite space-time domain. [given, algebra]

2.1 In each weak test identity from [F1], every space-time integrand and every initial term is therefore zero for either velocity. Both choices satisfy the same weak mass and momentum equations. [given, F1, step 1.1]

3.1 The constant fields $u_1$ and $u_2$ differ while their conservative mass and momentum data and fluxes coincide. Hence the weak mass and momentum equations alone do not determine $u$ on $\{\rho=0\}$. No division by density or assertion about a material velocity in vacuum is made. [given, step 1.1, step 2.1] ∎

