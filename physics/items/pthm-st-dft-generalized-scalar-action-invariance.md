---
id: pthm-st-dft-generalized-scalar-action-invariance
kind: physics-theorem
title: Strong Constraint DFT Scalar and Action Gauge Invariance
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps: [def-st-double-field-theory-generalized-metric-data]
dependency_roles:
  def-st-double-field-theory-generalized-metric-data: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Local generalized-scalar and action-invariance calculation for the generalized-metric NS–NS DFT convention under the pairwise strong constraint and vanishing boundary contributions."
sources:
  references:
    - title: "Olaf Hohm, Chris Hull, and Barton Zwiebach, Generalized Metric Formulation of Double Field Theory, arXiv:1006.4823v1"
      url: "https://arxiv.org/pdf/1006.4823v1"
      locator: "§4.2–4.3, equations (4.24)–(4.47), PDF pp. 18–22: generalized scalar, action divergence identity, and complete strong-constraint gauge-invariance calculation."
    - title: "Gerardo Aldazabal, Diego Marqués, and Carmen Núñez, Double Field Theory: A Pedagogical Review, arXiv:1305.1907v2"
      url: "https://arxiv.org/pdf/1305.1907v2"
      locator: "§3.6, equations (3.60)–(3.71), PDF pp. 27–30: generalized scalar/action forms and strong-constraint reduction context."
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

For the generalized-metric DFT fields and transformations defined in the preceding item, if all fields, parameters, and products satisfy the pairwise strong constraint, the defined expression $\mathcal R$ transforms as a scalar, $\delta_\xi\mathcal R=\xi^M\partial_M\mathcal R$. The generalized-metric DFT action density differs from $e^{-2d}\mathcal R$ by a total derivative. Hence the action is invariant under generalized diffeomorphisms when the gauge parameter is compactly supported or the boundary flux of the resulting gauge-variation divergence vanishes.

## Statement references

[Hohm, Hull, and Zwiebach, §4.3](https://arxiv.org/pdf/1006.4823v1)

[Aldazabal, Marqués, and Núñez, §3.6](https://arxiv.org/pdf/1305.1907v2)

## Facts & Assumptions

**Given:** The DFT field, generalized Lie derivative, generalized-dilaton density, and scalar-candidate definitions from the preceding item; smooth fields and gauge parameters; the pairwise strong constraint; and, for integrated action invariance, either compact support of the gauge parameter or zero boundary flux for the gauge-variation divergence.

[F1] [[def-st-double-field-theory-generalized-metric-data]]: $\delta_\xi\mathcal H=\widehat{\mathcal L}_\xi\mathcal H$, $\delta_\xi d=\xi^P\partial_Pd-\frac12\partial_P\xi^P$, and the defined $\mathcal R$ has the six displayed second-derivative, dilaton, and generalized-metric terms.

## Proof

1.1 From [F1], $\delta_\xi e^{-2d}=-2e^{-2d}\delta_\xi d=\partial_M(\xi^M e^{-2d})$. For any expression $W$, write $\delta_\xi W=\widehat{\mathcal L}_\xi W+\Delta_\xi W$, where $\Delta_\xi$ is the failure of its ordinary component variation to be a generalized tensor variation. The product rule makes $\Delta_\xi$ a derivation, while $\Delta_\xi\eta=0$ because $\eta$ is constant. [F1, algebra]

2.1 Differentiating the transformation in [F1] and raising indices with the invariant $\eta$ gives $\Delta_\xi(\partial_M\mathcal H_{KL})=-2\partial_M\partial_P\xi_{(K}\mathcal H_{L)}{}^P+2\partial_M\partial_{(K}\xi^P\mathcal H_{L)P}$, $\Delta_\xi(\partial_M\partial_Nd)=\partial_M\partial_N\xi^P\partial_Pd-\frac12\partial_M\partial_N(\partial_P\xi^P)$, and $\Delta_\xi(\partial_M\partial_N\mathcal H^{MN})=-2\partial_M(\partial_P\xi^P)\partial_N\mathcal H^{MN}-2\partial_M\partial_N(\partial_P\xi^P)\mathcal H^{MN}-\partial_M\partial_N\xi^P\partial_P\mathcal H^{MN}$. Parentheses symmetrize the enclosed metric indices. Terms containing $\eta^{MN}\partial_MA\,\partial_NB$ vanish by the strong constraint. [F1, step 1.1, algebra]

3.1 Substituting step 2.1 into the first two terms of $\mathcal R$ gives $\Delta_\xi(4\mathcal H^{MN}\partial_M\partial_Nd-\partial_M\partial_N\mathcal H^{MN})=4\mathcal H^{MN}\partial_M\partial_N\xi^P\partial_Pd+2\partial_M(\partial_P\xi^P)\partial_N\mathcal H^{MN}+\partial_M\partial_N\xi^P\partial_P\mathcal H^{MN}$. Substitution into the next two terms gives $\Delta_\xi(4\partial_M\mathcal H^{MN}\partial_Nd-4\mathcal H^{MN}\partial_Md\,\partial_Nd)=-4\mathcal H^{MN}\partial_M\partial_N\xi^P\partial_Pd-2\partial_M(\partial_P\xi^P)\partial_N\mathcal H^{MN}$. Adding these four variations leaves only $+\partial_M\partial_N\xi^P\partial_P\mathcal H^{MN}$. [F1, step 2.1, algebra]

4.1 Varying the $-\frac12$ kinetic term in $\mathcal R$ and using [F1] gives
$$
\Delta_\xi\left(-\frac12\mathcal H^{MN}\partial_M\mathcal H^{KL}\partial_K\mathcal H_{NL}\right)=-\partial_M\partial_N\xi^P\partial_P\mathcal H^{MN}-T,
$$
where $T:=\partial_K\mathcal H^{MN}\mathcal H^{KP}\mathcal H_{NL}\partial_M\partial_P\xi^L$. For the remaining $+\frac18$ kinetic term, the same per-index variation gives
$$
\Delta_\xi\left(\frac18\mathcal H^{MN}\partial_M\mathcal H^{KL}\partial_N\mathcal H_{KL}\right)=\frac12\partial_M\mathcal H^{KL}\,\partial_N(\partial_K\xi^P-\partial^P\xi_K)\,\mathcal H^{MN}\mathcal H_{LP}.
$$
The two terms produced by the parentheses are equal after using symmetry of $\mathcal H$, $\mathcal H^{MN}\mathcal H_{NL}=\delta^M{}_L$, and commuting partial derivatives. Thus this variation equals $\partial_M\mathcal H^{KL}\mathcal H^{MN}\mathcal H_{LP}\partial_N\partial_K\xi^P=T$, after relabeling contracted indices. The $T$ terms cancel, while the first term cancels the residual in step 3.1. Therefore $\Delta_\xi\mathcal R=0$ and $\delta_\xi\mathcal R=\widehat{\mathcal L}_\xi\mathcal R=\xi^M\partial_M\mathcal R$. [F1, step 3.1, algebra]

5.1 The product rule gives
$$
\partial_M\left[e^{-2d}\left(\partial_N\mathcal H^{MN}-4\mathcal H^{MN}\partial_Nd\right)\right]=e^{-2d}\left[\partial_M\partial_N\mathcal H^{MN}-6(\partial_M\mathcal H^{MN})\partial_Nd-4\mathcal H^{MN}\partial_M\partial_Nd+8\mathcal H^{MN}\partial_Md\,\partial_Nd\right],
$$
where symmetry of $\mathcal H^{MN}$ and interchange of dummy indices identify $\partial_Md\,\partial_N\mathcal H^{MN}=\partial_M\mathcal H^{MN}\,\partial_Nd$. Adding $e^{-2d}\mathcal R$ cancels the $\partial\partial\mathcal H$ and $\mathcal H\partial\partial d$ terms, changes the coefficient $-6$ of this contraction to $-2$, and leaves $4e^{-2d}\mathcal H^{MN}\partial_Md\,\partial_Nd$ together with the two generalized-metric kinetic terms. Relabeling dummy indices in the second kinetic term gives exactly $\mathcal L_{\rm DFT}$ in [F1]. Thus $\mathcal L_{\rm DFT}=e^{-2d}\mathcal R+\partial_MJ^M$, where $J^M:=e^{-2d}(\partial_N\mathcal H^{MN}-4\mathcal H^{MN}\partial_Nd)$. By step 4.1 and step 1.1, $\delta_\xi(e^{-2d}\mathcal R)=\partial_M(\xi^M e^{-2d}\mathcal R)$. Since $\delta_\xi$ commutes with $\partial_M$, the full density variation is $\delta_\xi\mathcal L_{\rm DFT}=\partial_M(\xi^M e^{-2d}\mathcal R+\delta_\xi J^M)$. Every term in $\delta_\xi J^M$ contains $\xi$ or one of its derivatives, so compact support of $\xi$ makes the gauge-variation flux vanish; otherwise impose the zero-flux condition in the Given clause. The integrated DFT action is invariant under this hypothesis, without requiring $J^M$ itself to have zero boundary flux. [given, F1, step 1.1, step 4.1, algebra] ∎

