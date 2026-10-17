---
id: pthm-emg-xs-br-model
kind: physics-theorem
title: Constant-radius charged product model
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
deps:
  - pthm-emg-xs-geometric-to-si-model
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-br-products
  - thm-emg-xs-br-verification
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-geometric-to-si-model: physical-result
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-br-products: mathematical-premise
  thm-emg-xs-br-verification: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional source-free SI model on either specified open
  Bertotti–Robinson product chart, with constant sphere radius L>0 and the
  specified smooth nonzero two-form. No maximal extension, asymptotic-flatness, source at a
  boundary, observation, or empirical realization is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.2.5, extremal RN throat and Robinson–Bertotti product; the full product Ricci and Maxwell verification is supplied by the local mathematical theorem."
    - title: "Y. Nutku, Electrovac pp-waves, arXiv:gr-qc/0502049v2, complete 3-page paper"
      url: https://arxiv.org/pdf/gr-qc/0502049v2
      locator: "Section 1, equations (1)–(3), for exact electrovac plane-wave and Bertotti–Robinson context; its signature and normalization are not imported."
verification:
  precheck: pass
---
## Statement

Let $L>0$ be a length. Choose either the product chart with dimensionless
coordinates $\tau,z$, $z\in J$ for a nonempty open $J\subset(0,\infty)$ and
$f(z)=z^2$, or the chart with $z\in J$ for a nonempty open
$J\subset\mathbb R$ and $f(z)=1+z^2$. Take the metric and geometric
field of [[def-emg-xs-br-products]]:
$$g_{L,f}=L^2\left(-f(z)d\tau^2+f(z)^{-1}dz^2+\gamma_{S^2}\right),\qquad \mathcal F_L=-L\,d\tau\wedge dz.$$
For $G_N,c,\mu_0>0$, set $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$ and
$F_L=\alpha^{-1}\mathcal F_L$. Under the adopted postulate
[[post-emg-einstein-maxwell-equations]] with $\Lambda=0$, $j=0$, and $T^m=0$,
the SI field $F_L$ and metric $g_{L,f}$ satisfy
$$dF_L=0,\qquad \nabla^g_aF_L^{ab}=0,\qquad G_{ab}=\kappa_ET^{\mathrm{EM}}_{ab}.$$
The sphere factor has radius $L$ at each base point. This is a deduction for
the stated open charts only.

## Facts & Assumptions

**Given:** $L>0$, one of the two open product domains and functions $f$, positive SI constants, the geometric product data, and the zero-source branch of the adopted postulate.

[F1] [[def-emg-xs-br-products]]: $g=L^2(-f\,d\tau^2+f^{-1}dz^2+\gamma_{S^2})$ and $\mathcal F_L=-L\,d\tau\wedge dz$ on the two stated open chart types.

[F2] [[thm-emg-xs-br-verification]]: for each such datum, $d\mathcal F_L=d(\star_g\mathcal F_L)=0$ and $\operatorname{Ric}=2Q(\mathcal F_L)$; the full factor Ricci tensors are computed in its current proof. This mathematical theorem is draft with a complete proof and Step 1 authoring-ready record; its result is used conditionally, not as independent approval.

[F3] [[pthm-emg-xs-geometric-to-si-model]]: a source-free geometric electrovac datum scales by $F=\alpha^{-1}\mathcal F$ to solve the selected SI equation model. This local theorem is draft with its complete proof authored and is used conditionally, not as independent proof approval.

[F4] [[def-emg-xs-si-parameters]]: $\alpha^2=4\pi G_N/(\mu_0c^4)$ and the geometric field has units $\mathrm{m}^{-1}$ while the SI two-form has units T in length coordinates.

[F5] [[post-emg-einstein-maxwell-equations]]: the equation-based law is an adopted physical assumption; this item specializes it to $\Lambda=0$, $j=0$, and $T^m=0$.

[A1] [[def-countable-choice]]: the inherited geometric background convention is $\mathrm{AC}_\omega$; this pointwise product calculation makes no choice.

## Proof

**Given:** The exact domains, field, metric, and current supplier statements in [F1]–[F5] and [A1].

1.1 For either allowed $f$ and domain, [F1] defines smooth product data with $L>0$. The current complete conditional verification [F2] proves the geometric Maxwell equations and $\operatorname{Ric}=2Q(\mathcal F_L)$ there; the proof treats the two product factors and all mixed Ricci components. [given, F1, F2]

2.1 With constant $\alpha>0$ and units as in [F4], apply [F3] to the geometric electrovac datum from step 1.1. It gives the SI field $F_L=\alpha^{-1}\mathcal F_L$, the zero-divergence Maxwell equation, and $G_{ab}=\kappa_ET^{\mathrm{EM}}_{ab}$ under the specialization of [F5]. No field equation or extension is asserted at a chart boundary, and this pointwise conversion adds no choice beyond [A1]. [given, F3, F4, F5, A1, step 1.1] ∎
