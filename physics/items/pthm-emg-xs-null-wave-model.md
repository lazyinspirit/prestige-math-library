---
id: pthm-emg-xs-null-wave-model
kind: physics-theorem
title: Exact coupled electromagnetic null-wave model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
deps:
  - pthm-emg-xs-geometric-to-si-model
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-null-wave
  - thm-emg-xs-null-wave-verification
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-geometric-to-si-model: physical-result
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-null-wave: mathematical-premise
  thm-emg-xs-null-wave-verification: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Exact source-free classical SI Einstein–Maxwell solutions on the specified
  plane-fronted null-wave chart, for arbitrary smooth electromagnetic profiles
  and smooth transverse harmonic gravitational profile. No asymptotic
  flatness, finite total energy, observation, or empirical validity is
  asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Nutku, Electrovac pp-waves, arXiv:gr-qc/0502049v2, complete 3-page paper"
      url: https://arxiv.org/pdf/gr-qc/0502049v2
      locator: "Sections 1 and 4, exact electromagnetic pp-wave solutions; the local proof uses a different explicitly stated real transverse-profile class and normalization."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Sections 3.2–3.4 for curved Maxwell and Einstein–Maxwell conventions; all components of the specific null-wave family are checked in the local mathematical supplier."
verification:
  precheck: pass
---
## Statement

Use length coordinates $(u,v,x,y)$ on $\mathbb R^4$. Let
$a,b:\mathbb R\to\mathbb R$ be smooth profiles with units
$\mathrm{m}^{-1}$, and let $h:\mathbb R^3\to\mathbb R$ be smooth,
dimensionless, and satisfy $h_{xx}+h_{yy}=0$. Set
$$P(u,x,y)=-(a(u)^2+b(u)^2)(x^2+y^2)+h(u,x,y),$$
$$g=-2\,du\,dv+dx^2+dy^2+P\,du^2,\qquad \mathcal A=-(a(u)x+b(u)y)\,du,$$
$$\mathcal F=d\mathcal A=a(u)\,du\wedge dx+b(u)\,du\wedge dy,\qquad F=\alpha^{-1}\mathcal F,$$
where $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$ from
[[def-emg-xs-si-parameters]]. Use the orientation $du\wedge dv\wedge dx\wedge dy$ and future unit field
$N=\partial_u+(P+1)\partial_v/2$, as in
[[def-emg-xs-null-wave]]. The metric has signature $(-,+,+,+)$. Under the adopted postulate
[[post-emg-einstein-maxwell-equations]] with no material stress or current and
$\Lambda=0$, these data satisfy the source-free SI Einstein–Maxwell equations
on all of $\mathbb R^4$. The claim is an exact model deduction; it asserts
neither asymptotic flatness nor finite total wave energy.

## Facts & Assumptions

**Given:** The length-coordinate null-wave data, smoothness and harmonicity hypotheses, positive SI constants, and the source-free specialization of the adopted postulate.

[F1] [[def-emg-xs-null-wave]]: $g=-2du\,dv+dx^2+dy^2+Pdu^2$, $\mathcal A=-(ax+by)du$, and $\mathcal F=a\,du\wedge dx+b\,du\wedge dy$, with arbitrary smooth profiles and $h_{xx}+h_{yy}=0$.

[F2] [[thm-emg-xs-null-wave-verification]]: the defined data satisfy $d\mathcal F=d(\star_g\mathcal F)=0$ and $\operatorname{Ric}=2Q(\mathcal F)$ for the full stated profile class. This mathematical theorem is draft with a complete current proof and Step 1 authoring-ready record; it is used conditionally.

[F3] [[pthm-emg-xs-geometric-to-si-model]]: constant rescaling by $\alpha^{-1}$ turns any source-free geometric electrovac datum into a solution of the selected SI model. This local theorem is draft with its complete proof authored and is used conditionally, not as independent proof approval.

[F4] [[def-emg-xs-si-parameters]]: $\alpha>0$ is constant, $\mathcal F=\alpha F$, and the two-form components have units $\mathrm{m}^{-1}$ geometrically and T in the SI convention.

[F5] [[post-emg-einstein-maxwell-equations]]: the equation-based model is an adopted physical assumption, specialized here to $\Lambda=0$, $j=0$, and $T^m=0$.

[A1] [[def-countable-choice]]: the inherited geometry and Hodge convention carries $\mathrm{AC}_\omega$; the local field rescaling makes no choice.

## Proof

**Given:** The exact smooth null-wave data and supplier statements in [F1]–[F5] and [A1].

1.1 The data in the Statement are exactly the definition in [F1], with smooth $a,b,h$ and transverse Laplacian zero. The complete conditional verification [F2] therefore gives the geometric source-free Maxwell and Ricci equations on the whole coordinate domain $\mathbb R^4$. [given, F1, F2]

2.1 Apply the constant SI rescaling in [F3] to the datum of step 1.1. It yields $F=\alpha^{-1}\mathcal F$ with the units and positive normalization in [F4]. Under the source-free adopted branch [F5], the resulting metric and field satisfy the SI equations at every point of $\mathbb R^4$; the pointwise scaling makes no choice beyond [A1]. [given, F3, F4, F5, A1, step 1.1] ∎
