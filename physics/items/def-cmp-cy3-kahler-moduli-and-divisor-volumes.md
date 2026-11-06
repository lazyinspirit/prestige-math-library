---
id: def-cmp-cy3-kahler-moduli-and-divisor-volumes
kind: definition
title: "Calabi–Yau threefold intersection and Kähler-volume coordinates"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 3
deps:
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-axiom-of-choice
  - thm-general-stokes-theorem
dependency_roles:
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Classical geometric Kähler-cone coordinates on a chosen compact threefold. No orientifold projection, quantum correction, or dimensional reduction is asserted here."
empirical_premises: []
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§2, equations (2.4), (2.13), and (2.14), PDF pp. 4–7; intersection numbers and Vol(Y)=K/6."
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§3.2.1, PDF pp. 27–29; cubic Kähler-moduli dependence. Its displayed coefficient convention is not used for the exact factor or sign here."
---

## Definition

Let $X$ be the smooth compact Kähler threefold of the compactification datum, and use its complex orientation for every integral and duality convention below. Choose a real basis $[\omega_a]$, $1\le a\le h^{1,1}(X)$, of $H^{1,1}(X;\mathbb R)$, represented by smooth real closed $(1,1)$-forms. When this space is spanned by integral classes, the basis may be chosen integral and its lattice normalization must be stated; broad $K_X$-triviality alone does not imply that such an integral basis spans the whole real space. For the dimensionless Kähler form $J$ in $\alpha'=1$ units, write its Kähler class as $[J]=v^a[\omega_a]$ with unique real coefficients $v^a$. No equality between the selected form representatives is imposed. Define $\kappa_{abc}=\int_X\omega_a\wedge\omega_b\wedge\omega_c$, $\mathcal V=\frac16\int_XJ^3=\frac16\kappa_{abc}v^av^bv^c$, and $\tau_a=\partial\mathcal V/\partial v^a=\frac12\kappa_{abc}v^bv^c$. Thus $v^a$ are Kähler-cone coordinates; if a dual two-cycle basis $\gamma^a$ satisfies $\int_{\gamma^a}\omega_b=\delta^a_b$, then $v^a=\int_{\gamma^a}J$ and are curve volumes when those classes are effective. If a divisor basis $D_a$ is supplied with each $D_a$ dual to $[\omega_a]$, the associated divisor-volume coordinate is defined in this intersection convention by $\tau(D_a):=\frac12\kappa_{abc}v^bv^c=\tau_a$; without such a divisor basis, $\tau_a$ are the dual real coordinates defined by $\partial\mathcal V/\partial v^a$. The total dimensionless volume is $\mathcal V$, and the physical volume is $(\alpha')^3\mathcal V$ in this convention. For Type IIB O3/O7 data, indices are restricted to a specified orientifold-even Kähler basis and odd-basis intersection couplings are stated separately.

## Facts & Assumptions

**Given:** Full AC; the compactification data of [[def-cmp-calabi-yau-threefold-compactification-data]] with the complex orientation; a real basis $[\omega_a]$ of $H^{1,1}(X;\mathbb R)$ with chosen smooth closed representatives; the cohomology-class expansion $[J]=v^a[\omega_a]$; and the $\alpha'=1$ length convention. Any integral lattice normalization is declared separately.

[F1] [[def-cmp-calabi-yau-threefold-compactification-data]] supplies the smooth compact threefold, orientation, Kähler class, and integral-cohomology conventions as separate data.

[F2] [[def-gts-kahler-class-canonical-bundle-and-ricci-form]] defines the Kähler form $\omega$ as a smooth real closed positive $(1,1)$-form, using $J$ there for the complex structure. Here the Kähler form is instead denoted by $J$, as in the compactification datum; it has those same form properties, so $J^3$ is a smooth top-degree form.

[A1] Adopt the full Axiom of Choice [[def-axiom-of-choice]] already inherited through the Kähler-class supplier; restricting a choice function to countable families supplies the countable-choice hypothesis of [[thm-general-stokes-theorem]].

[F3] [[thm-general-stokes-theorem]] gives zero integral for an exact top-degree form on a compact oriented manifold without boundary, by its compact-support formulation.

## Proof

**Proof technique:** direct expansion and differentiation.

**Given:** The stated real $(1,1)$ basis, $[J]=v^a[\omega_a]$, the full AC in [A1], and the fixed $\alpha'=1$ convention from the Facts & Assumptions section.

1.1 The classes $[\omega_a]$ have real cohomological degree two and commute under cup product. From $[J]=v^a[\omega_a]$, $[J]^3=v^av^bv^c[\omega_a\wedge\omega_b\wedge\omega_c]$. Replacing any closed representative by a cohomologous one changes this top-degree product by an exact form, whose integral is zero by [F3] under the AC premise [A1]. Hence $\int_XJ^3=\kappa_{abc}v^av^bv^c$. In a positively complex-oriented orthonormal real coframe $(e^1,f^1,e^2,f^2,e^3,f^3)$, the Kähler form is $J=\sum_{j=1}^3e^j\wedge f^j$, so $J^3=6dV_g$. Thus $\int_XJ^3/6$ is the metric volume, giving $\mathcal V=\kappa_{abc}v^av^bv^c/6$. Since each factor of $J_{\rm phys}$ has units of length squared and $J_{\rm phys}=\alpha'J$, the physical six-volume is $(\alpha')^3\mathcal V$. [A1, F1, F2, F3, given, algebra]

2.1 The intersection numbers are symmetric in $a,b,c$ because degree-two wedge products commute. Differentiating the cubic gives three equal terms, $\partial_{v^a}\mathcal V=(1/6)(\kappa_{abc}v^bv^c+\kappa_{bac}v^bv^c+\kappa_{bca}v^bv^c)=\kappa_{abc}v^bv^c/2$. This is the defined dual coordinate $\tau_a$, with the divisor-volume interpretation in the Definition only when the corresponding divisor class is supplied; it is distinct from the Kähler coefficient $v^a$ and the total volume $\mathcal V$. [given, step 1.1, algebra] ∎
