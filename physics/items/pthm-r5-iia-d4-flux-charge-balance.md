---
id: pthm-r5-iia-d4-flux-charge-balance
kind: physics-theorem
title: Compact IIA D4 Flux Charge Balance
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
deps:
  - post-r5-iia-d4-sourced-bianchi
  - def-r5-d4-source-current
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  post-r5-iia-d4-sourced-bianchi: physical-assumption
  def-r5-d4-source-current: formulation-prerequisite
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "A conditional integrated consequence of the adopted D4-sourced massless IIA Bianchi law on a compact boundaryless six-manifold; does not prove a global stabilized solution or that the main Silverstein–Westphal phi^(2/3) configuration carries net D4 charge."
sources:
  references:
    - title: "Donald Marolf, Chern-Simons Terms and the Three Notions of Charge, arXiv:hep-th/0006117v1"
      url: "https://arxiv.org/pdf/hep-th/0006117v1"
      locator: "§2, equation (2.2), PDF pp. 3–4; sourced D4 Bianchi and current pairing."
    - title: "Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2"
      url: "https://arxiv.org/pdf/0803.3085v2"
      locator: "§3.1.2, PDF pp. 18–19; flux contribution in a charged orientation distinct from the main phi^(2/3) case."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X_6$ be a compact oriented boundaryless six-manifold, $\gamma$ a compact smooth closed oriented one-cycle, and $\omega_1\in\Omega^1(X_6)$ a smooth closed one-form. Assume $G_2\in\Omega^2(X_6)$ and $H_3\in\Omega^3(X_6)$ are smooth, and let $\widetilde G_4$ be a degree-four de Rham current, meaning a continuous linear functional on smooth compactly supported two-forms with the test-form topology. For a degree-$k$ current $T$, use the distributional exterior derivative defined by
$$\langle dT,\eta_{5-k}\rangle:=(-1)^{k+1}\langle T,d\eta_{5-k}\rangle.$$
Interpret the adopted D4 Bianchi law as the weak equality of degree-five currents
$$d\widetilde G_4+[H_3\wedge G_2]=2\kappa_0^2\mu_4\,\delta_5(\gamma),$$
where $\langle[H_3\wedge G_2],\eta_1\rangle:=\int_{X_6}H_3\wedge G_2\wedge\eta_1$ and $\langle\delta_5(\gamma),\eta_1\rangle:=\int_\gamma\eta_1$ for smooth one-form test forms $\eta_1$. Then
$$\int_{X_6}H_3\wedge G_2\wedge\omega_1=2\kappa_0^2\mu_4\int_\gamma\omega_1.$$
This is a conditional weak flux-charge balance; it is not a proof of global source cancellation or a claim about the net charge in the main $\phi^{2/3}$ orientation.

## Facts & Assumptions

**Given:** The compact oriented $X_6$, source current and its normalization, $d\omega_1=0$, and the D4-sourced Bianchi law displayed in [A1].

[F1] [[def-r5-d4-source-current]]: the internal degree-five current is normalized by $\int_{X_6}\delta_5(\gamma)\wedge\omega_1=\int_\gamma\omega_1$.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]: on a compact oriented boundaryless manifold, compactly supported smooth top forms have the choice-free finite-chart integral used here.

[A1] [[post-r5-iia-d4-sourced-bianchi]]: the adopted source law has coefficient $2\kappa_0^2\mu_4$. For this theorem, its internal reduction to $X_6$ is interpreted weakly as the current equality in the Statement, not as an equality of smooth forms across $\gamma$.

## Proof

1.1 Pair the weak Bianchi identity [A1] with $\omega_1$. By the current-derivative definition in the Statement, $\langle d\widetilde G_4,\omega_1\rangle=(-1)^5\langle\widetilde G_4,d\omega_1\rangle=0$. [given, A1, algebra]

2.1 The remaining pairings are defined in the Statement and [F1], so the asserted integral balance follows. Since $H_3,G_2,\omega_1$ are smooth, their wedge is a smooth top form on compact $X_6$, and [F2] supplies its compact integration convention. This is weak integration by parts; it does not treat $\widetilde G_4$ as smooth across the delta-current source. [given, F1, F2, A1, step 1.1, algebra] ∎
