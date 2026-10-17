---
id: pthm-tgr-negative-capacity-exchange-stability
kind: physics-theorem
title: "Finite bath stabilizes the selected negative-capacity exchange model"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - post-tgr-finite-bath-exchange-preparation
  - lem-tgr-finite-bath-exchange-stability
dependency_roles:
  post-tgr-finite-bath-exchange-preparation: physical-assumption
  lem-tgr-finite-bath-exchange-stability: mathematical-premise
justified_by: []
physical_scope: >-
  Local stability and exponential attraction only for the adopted scalar
  finite-bath exchange ODE at a matched-temperature point with C_G<0 and
  0<C_b<|C_G|, retaining the upstream slow-motion condition for any Newtonian
  physical-applicability claim; no generic GR-fluid stability, causal transport
  law, empirical thermalization, or observation.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.E"
      url: "https://arxiv.org/pdf/1908.10806"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume the finite-bath preparation [[post-tgr-finite-bath-exchange-preparation]], which supplies $C^2$ subsystem and bath entropies on open energy intervals, with subsystem temperature $T_*>0$, finite capacity $C_G<0$, bath capacity $C_b$ satisfying $0<C_b<|C_G|$, conserved total energy, and exchange law $\dot x=L S_{\rm tot}'(x)$ for $L>0$. At the matched-temperature point $x_*$,
$$S_{\rm tot}''(x_*)=-\frac1{T_*^2}\left(\frac1{C_G}+\frac1{C_b}\right)<0.$$
Consequently $x_*$ is a strict local entropy maximum in this energy-exchange direction, the adopted ODE has a forward-invariant local basin with exponential attraction to $x_*$, and along each solution $dS_{\rm tot}/dt=L(S_{\rm tot}')^2\ge0$. These are properties of the selected scalar exchange model only.

## Facts & Assumptions

**Given:** The selected Kepler negative-capacity point, the finite bath entropy and matched temperature, $0<C_b<|C_G|$, conserved total energy, and the stipulated scalar exchange ODE.

[F1] [[post-tgr-finite-bath-exchange-preparation]] supplies a subsystem entropy $S_G\in C^2$ on an open interval with $T_*>0$ and finite $C_G<0$, the $C^2$ bath entropy with constant $C_b>0$, the matched-temperature point, and $\dot x=L S_{\rm tot}'(x)$.

[F2] [[lem-tgr-finite-bath-exchange-stability]]: for $C_1<0<C_2$, a common-temperature critical point has $S_{\rm tot}''=-T^{-2}(1/C_1+1/C_2)$ and is a strict local maximum when $C_2<|C_1|$; for the separately adopted $C^1$ exchange vector field $L S_{\rm tot}'$, the local solution is forward invariant and exponentially attracting, with nondecreasing entropy.

[A1] The exchange law in [F1] is an adopted effective model assumption, not an empirical transport law.

## Proof

1.1 The selected point in [F1] has $S_G'=1/T_*$ and the bath has $S_b'=1/T_*$; hence the derivative of $S_{\rm tot}(x)=S_G(x)+S_b(E_{\rm tot}-x)$ vanishes at $x_*$. By [F1], both entropies are $C^2$ on open energy intervals, and the two finite nonzero heat capacities meet the common-temperature hypotheses of [F2]. [given, A1, F1, F2]

2.1 Substituting $C_1=C_G<0$ and $C_2=C_b$ into [F2] gives the stated curvature. Since $C_b<|C_G|$, $1/C_b>1/|C_G|=-1/C_G$, so the bracket is positive and $S_{\rm tot}''(x_*)<0$. [F1, F2, step 1.1, algebra]

3.1 The strict curvature and the exchange law in [F1] satisfy the local stability hypotheses of [F2]; therefore $x_*$ is a strict local maximum, the local basin is forward invariant and exponentially attracting, and the entropy production is $L(S_{\rm tot}')^2\ge0$. This is not a stability statement for a relativistic star or a general fluid evolution. [A1, F1, F2, step 2.1] ∎

