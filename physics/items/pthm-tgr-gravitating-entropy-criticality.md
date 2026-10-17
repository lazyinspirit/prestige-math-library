---
id: pthm-tgr-gravitating-entropy-criticality
kind: physics-theorem
title: "Constrained entropy criticality yields scoped TOV and Tolman–Klein relations"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - post-tgr-gravitating-entropy-variational-preparation
  - thm-tgr-constrained-entropy-tov-criticality
dependency_roles:
  post-tgr-gravitating-entropy-variational-preparation: physical-assumption
  thm-tgr-constrained-entropy-tov-criticality: mathematical-premise
justified_by: []
physical_scope: >-
  First-variation equivalence on the supplied fixed-radius, positive-b,
  compatible C2 state chart with fixed mass-energy and particle number and the
  stated boundary clock; no entropy maximum, global equilibrium existence,
  vacuum matching, arbitrary EOS, empirical observation, or dynamical stability.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.E, Eqs. (138)–(163)"
      url: "https://arxiv.org/pdf/1908.10806"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume the model preparation [[post-tgr-gravitating-entropy-variational-preparation]], including a positive even $C^2$ profile pair with compact state-chart range, fixed $R>0$, $b\ge b_*>0$, fixed constraints $E,N_b$, and boundary normalization $\phi(R)=\tfrac12\log b(R)$. Use the exact $\mathrm{ZF}+\mathrm{AC}_\omega$ convention of [[thm-tgr-constrained-entropy-tov-criticality]]. An admissible profile curve is $C^1$ in the sup-norm space $C^0([0,R])^2$ on an open interval about zero, takes values in the even $C^2$ positive-b profile domain with range in a compact subset of the open state chart, and has a smooth derivative at zero compactly supported in $(0,R)$ and extended evenly at the center. Define constrained stationarity to mean that $S$ has zero derivative at the base profile along every such curve preserving both $E$ and $N_b$. Then constrained stationarity is equivalent to the existence of constants $\alpha,\Theta_K,\mu_K$ such that on $(0,R)$
$$\frac{\mu}{\Theta}=\alpha,\qquad \Theta e^\phi=\Theta_K,\qquad \mu e^\phi=\mu_K,$$
and the pressure obeys
$$P'=-(\varepsilon+P)\phi'=-\frac{G(\varepsilon+P)(M+4\pi r^3P/c^2)}{c^2r^2b}.$$
Here $\Theta_K=\Theta(R)\sqrt{b(R)}$ and $\mu_K=\mu(R)\sqrt{b(R)}$. This is a conditional first-variation result in the adopted model, not a claim that nature selects such a profile or that it is an entropy maximum.

## Facts & Assumptions

**Given:** The compatible thermodynamic chart and its profiles, $R>0$, the positive lower bound on $b$, the fixed $E,N_b$ constraints, the stated boundary lapse, and the exact mathematical convention $\mathrm{ZF}+\mathrm{AC}_\omega$.

[F1] [[post-tgr-gravitating-entropy-variational-preparation]] adopts the local state chart, the proper $S,N_b$, the spherical mass-energy $E$, positive-$b$ profiles, fixed-radius constrained variations, the static $\Lambda=0$ model, and boundary normalization $e^{\phi(R)}=\sqrt{b(R)}$.

[F2] [[thm-tgr-constrained-entropy-tov-criticality]]: under a compatible $C^2$ chart and the same profile, positive-$b$, fixed-radius, and boundary hypotheses, constrained stationarity is equivalent to constant $\mu/\Theta$, $\Theta e^\phi$, and $\mu e^\phi$, and implies the displayed TOV pressure equation; the result is first variation only and assumes $\mathrm{ZF}+\mathrm{AC}_\omega$.

[A1] The state chart, Einstein mass constraint, and thermodynamic preparation in [F1] are adopted assumptions; the physical theorem does not derive them from observations.

## Proof

1.1 The state functions, proper functionals, fixed constraints, positive-$b$ profile domain, and boundary clock in [F1] match the hypotheses of [F2]; the mathematical supplier's profile curves are exactly the admissible variations in this Statement. Its inherited foundation is the declared $\mathrm{ZF}+\mathrm{AC}_\omega$ convention. [given, A1, F1, F2]

2.1 Applying the two directions of [F2] gives the stated equivalence and the pressure equation with $M,b$ from the supplied functional definition. The boundary values follow by substituting $e^{\phi(R)}=\sqrt{b(R)}$ into the Tolman and Klein products. [F1, F2, step 1.1, algebra]

3.1 The result establishes a first-variation criticality condition within the adopted model only; neither a second-variation sign nor a maximizing-profile existence conclusion occurs in [F2], so neither is inferred here. [A1, F1, F2, step 2.1] ∎

