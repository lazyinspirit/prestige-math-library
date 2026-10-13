---
id: lem-gr-hilbert-tensor-uniqueness
kind: lemma
title: "Uniqueness of the Hilbert stress-energy tensor"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-hilbert-stress-energy-tensor, lem-gr-lorentzian-perturbations-remain-lorentzian, lem-gr-compact-variation-coefficient-vanishing, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-metric-volume-form-and-current-flux, def-gr-tensor-fields-and-components, def-smooth-manifold, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]
dependency_roles:
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
  lem-gr-lorentzian-perturbations-remain-lorentzian: mathematical-premise
  lem-gr-compact-variation-coefficient-vanishing: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-smooth-manifold: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the energy-momentum tensor defined by the metric variation (4.70) and the statement that arbitrary variations determine the coefficient, printed pp. 116-118 (PDF pp. 123-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.2-9.3: the variational derivative of the action determining the field equations and T^{ab} uniquely, (9.23)-(9.29), printed pp. 113-116 (PDF pp. 114-117)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be an oriented time-oriented smooth Lorentzian four-manifold,
let $c>0$, let $S:\mathcal D\to\mathbb R$ and $\varphi$ be as in
[[def-gr-hilbert-stress-energy-tensor]]; in particular, $\mathcal D$ admits
every compactly supported metric direction at $(g,\varphi)$. Suppose that $T$
and $T'$ are both Hilbert stress-energy tensors of $S$ at $(g,\varphi)$ with
respect to $c$ relative to the metric volume form of
[[def-gr-metric-volume-form-and-current-flux]]. Then $T=T'$ on $M$; hence the
definite article in "the Hilbert stress-energy tensor" is justified.

## Facts & Assumptions

**Given:** The setting of [[def-gr-hilbert-stress-energy-tensor]] and two smooth symmetric covariant $2$-tensor fields $T,T'$ satisfying its defining property.

[L1] $T$ satisfies the defining identity of [[def-gr-hilbert-stress-energy-tensor]] clause (b) for every smooth metric family at $g$ with compactly supported variation, and $T'$ satisfies the same identity. (given)

[L2] For every smooth symmetric covariant $2$-tensor field $h$ of compact support there is $\lambda_0>0$ such that $g+\mu h$ is a smooth Lorentzian metric of signature $(-,+,+,+)$ for every $|\mu|<\lambda_0$ ([[lem-gr-lorentzian-perturbations-remain-lorentzian]]).

[L3] If $F$ is a continuous symmetric covariant $2$-tensor field on a chart domain $U$ and $\int_UF_{ab}q^{ab}w\,d^4x=0$ for every smooth symmetric compactly supported $q$, then $F=0$ on $U$ ([[lem-gr-compact-variation-coefficient-vanishing]], [[def-gr-metric-volume-form-and-current-flux]]).

[L4] The inverse-metric components $g^{ab}$ depend smoothly on the metric components and satisfy $g^{ac}g_{cb}=\delta^{a}{}_{b}$; the raising operation $h\mapsto h^{ab}=g^{ac}g^{bd}h_{cd}$ is a linear bijection of the space of smooth symmetric compactly supported $(0,2)$-fields onto the space of smooth symmetric compactly supported $(2,0)$-fields ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-smooth-covariant-two-tensor-field]], [[def-gr-tensor-fields-and-components]]).

[L5] The integral of a compactly supported smooth top form over the oriented $M$ is additive and local: if the support of the form lies in a chart domain $U$, the integral equals the ordinary chart integral $\int_U f\,w\,d^4x$ ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]], [[def-smooth-manifold]]).

## Proof

**Proof technique:** direct; compare the two defining identities along localized metric perturbations and apply the coefficient-vanishing lemma on charts.

1.1 (The difference is orthogonal to all variations.) Put $D:=T-T'$, a smooth symmetric covariant $2$-tensor field. For any smooth metric family $s\mapsto g_s$ at $g$ with compactly supported variation, [L1] gives the same derivative of $S$ computed with $T$ and with $T'$, so $\int_MD_{ab}q^{ab}\mathrm{vol}_g=0$, where $q^{ab}=\frac{d}{ds}g_s^{ab}|_{s=0}$. [L1, given]

2.1 (Realizing perturbations.) Fix a smooth symmetric compactly supported field $h$. By [L2], choose $\lambda_0>0$ with $g+\mu h$ Lorentzian for $|\mu|<\lambda_0$; shrink $\lambda_0$ also below the domain-admission radius $\varepsilon_h$ of the defining hypotheses. For $0<\lambda<\lambda_0$ the map $s\mapsto g+s\lambda h$ (with $|s|<1$) is a smooth metric family at $g$ with compactly supported variation. Differentiating $g^{ac}_{s}g_{s\,cb}=\delta^{a}{}_{b}$ in $s$ by [L4], $q^{ac}g_{cb}+g^{ac}\lambda h_{cb}=0$, so $q^{ab}=-\lambda g^{ac}g^{bd}h_{cd}$. Substituting into step 1.1 and dividing by $-\lambda\neq0$, $$\int_MD_{ab}h^{ab}\,\mathrm{vol}_g=0$$ for every smooth symmetric compactly supported $h$, where $h^{ab}=g^{ac}g^{bd}h_{cd}$. [step 1.1, L2, L4, algebra]

3.1 (Coefficient vanishing on charts.) As $h$ ranges over all smooth symmetric compactly supported $(0,2)$-fields, $h^{ab}$ ranges over all smooth symmetric compactly supported $(2,0)$-fields by [L4]; equivalently, step 2.1 states $\int_MD_{ab}q^{ab}\mathrm{vol}_g=0$ for every smooth symmetric compactly supported $q$ written in covariant form. Fix a chart $(U,x)$ and restrict to $q$ supported in $U$; by [L5] the integral is the chart integral $\int_UD_{ab}q^{ab}w\,d^4x$. Since $D$ is smooth, hence continuous, [L3] gives $D=0$ on $U$. [step 2.1, L3, L4, L5]

4.1 (Conclusion.) Every point of $M$ lies in a chart, so step 3.1 gives $D=0$ on all of $M$, that is, $T=T'$. [step 3.1, step 2.1, given] ∎

## Remarks

- **What is established.** The lemma proves uniqueness of a Hilbert tensor when one exists; existence remains a property of the particular functional $S$ and is checked model by model where the framework's matter actions are treated.

- **Choice.** The construction uses the finite chart integrals of [L5] and the bump of the coefficient-vanishing lemma, both choice-free; no selection of frames or atlases beyond finitely many charts is made.
