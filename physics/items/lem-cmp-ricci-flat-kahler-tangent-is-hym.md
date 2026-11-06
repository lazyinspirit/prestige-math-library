---
id: lem-cmp-ricci-flat-kahler-tangent-is-hym
kind: lemma
title: Ricci-flat Kähler tangent connection is Hermitian–Yang–Mills
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
deps:
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
dependency_roles:
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String phenomenology"
      url: "https://members.ift.uam-csic.es/auranga/lect13.pdf"
      locator: "PDF pp. 18–20: the Hermitian–Yang–Mills equations and the distinct Donaldson–Uhlenbeck–Yau existence statement. The local tangent-connection calculation is supplied here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Purely mathematical verification for a supplied Ricci-flat Kähler metric; it proves no metric existence theorem."
---

## Statement

Let $(X,J)$ be a complex threefold with a supplied smooth Kähler metric $g$, meaning a positive $J$-invariant Riemannian metric whose fundamental form $\omega(u,v)=g(Ju,v)$ is closed. In a holomorphic chart set $h_{i\bar j}=g_{\mathbb C}(\partial_{z^i},\partial_{\bar z^j})$, where $g_{\mathbb C}$ is the complex-bilinear extension. Define its Ricci form locally by $\rho(\omega)=-i\partial\bar\partial\log\det h$, with the local forms glued as verified below, and assume $\rho(\omega)=0$ (Ricci-flatness). Equip $T^{1,0}X$ with the Hermitian metric induced by $g$, and let $\nabla$ be its Chern connection, the unique Hermitian connection whose $(0,1)$ part is the holomorphic structure; write $F_\nabla$ for its curvature. In complex dimension three, define the Hermitian–Yang–Mills equations for this connection by $F_\nabla^{0,2}=0$ and $\omega^2\wedge F_\nabla=0$, with the endomorphism-valued wedge product interpreted entrywise. Then $\nabla$ satisfies both equations. This is conditional on the metric being supplied.

## Statement references

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

## Facts & Assumptions

**Given:** A complex threefold $(X,J)$, its Kähler form $\omega$, a supplied metric $g$ with $\rho(\omega)=0$, its holomorphic tangent bundle with the Hermitian metric induced by $g$, and the Chern connection described in the Statement.

[F1] [[def-gts-kahler-class-canonical-bundle-and-ricci-form]] fixes these conventions on compact complex manifolds. Here they are defined locally on arbitrary complex threefolds, with no characteristic-class identification: $\omega=i h_{i\bar j}dz^i\wedge d\bar z^j$ and $\rho=-i\partial\bar\partial\log\det h$. Indeed a coordinate change with holomorphic invertible Jacobian $C$ gives $h'=C^{\mathsf T}h\overline C$ and $\log\det h'=\log\det h+\log|\det C|^2$. Locally $\det C$ has a holomorphic logarithm, so the last term has zero $\partial\bar\partial$. Thus the Ricci forms agree on overlaps without compactness or an application of the supplier outside its stated domain.

[A1] The Chern curvature convention is $F_{i\bar j}=[\nabla_i,\nabla_{\bar j}]$ in a holomorphic coordinate frame. Reversing this curvature order changes an overall sign but not either vanishing equation.

## Proof

**Given:** The Kähler metric and connection data in the Statement, with [F1] and [A1].

1.1 Write $h_{i\bar j}=g_{\mathbb C}(\partial_i,\partial_{\bar j})$ and use repeated-index summation. Metric compatibility and the specified $(0,1)$ part give the Chern coefficients $\Gamma^k{}_{i\ell}=h^{k\bar m}\partial_i h_{\ell\bar m}$ and $\nabla_{\bar j}=\partial_{\bar j}$ in a holomorphic frame. Thus $F^{0,2}=0$. The $(2,0)$ curvature is zero as well: substituting these coefficients into $\partial_i\Gamma_j-\partial_j\Gamma_i+[\Gamma_i,\Gamma_j]$ and differentiating the inverse metric cancels its terms. Hence $F$ has type $(1,1)$ and [A1] gives $F_{i\bar j}{}^k{}_\ell=-\partial_{\bar j}(h^{k\bar m}\partial_i h_{\ell\bar m})$. [given, A1, algebra]

2.1 Fix a point. A complex-linear coordinate change makes $h_{i\bar j}=\delta_{ij}$ there. Closedness of $\omega$ gives $\partial_i h_{\ell\bar m}=\partial_\ell h_{i\bar m}$, so $\Gamma^k{}_{i\ell}$ is symmetric in $i,\ell$. The holomorphic substitution $z^k=w^k-\tfrac12\Gamma^k{}_{i\ell}(0)w^iw^\ell$ has identity derivative and makes the transformed connection coefficients zero at the point. Metric compatibility then makes all first derivatives of $h$ zero there. At this point the curvature formula and the holomorphic and antiholomorphic Kähler derivative symmetries give $\sum_i F_{i\bar i}{}^k{}_\ell=-\sum_i\partial_{\bar i}\partial_i h_{\ell\bar k}=-\partial_\ell\partial_{\bar k}\sum_i h_{i\bar i}=-\partial_\ell\partial_{\bar k}\log\det h$, where the last equality uses $h=I$ and $dh=0$ at the point. Since $\rho=-i\partial\bar\partial\log\det h=0$, this contraction vanishes. Tensoriality and the arbitrary point give $h^{i\bar j}F_{i\bar j}=0$ everywhere. [given, F1, A1, step 1.1, algebra, construct]

3.1 In a unitary frame write $\omega=i\sum_{a=1}^3 dz^a\wedge d\bar z^a$. For any $(1,1)$-form $F=F_{i\bar j}dz^i\wedge d\bar z^j$, off-diagonal terms wedge to zero with $\omega^2$, and expanding the diagonal terms gives $\omega^2\wedge F=\frac{1}{3i}(\sum_iF_{i\bar i})\omega^3$. This identity holds entrywise for endomorphism-valued forms. Step 2.1 therefore gives $\omega^2\wedge F_\nabla=0$, while step 1.1 gives $F_\nabla^{0,2}=0$, proving both equations for the supplied metric. [given, step 1.1, step 2.1, algebra] ∎
