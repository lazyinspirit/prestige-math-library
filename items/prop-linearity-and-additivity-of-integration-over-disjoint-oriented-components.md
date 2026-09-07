---
id: prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components
title: "Linearity and additivity of the form integral"
kind: proposition
status: published
origin: pipeline
deps: ["thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement", "thm-multidimensional-integral-properties"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.6(a), pp.407–408"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

For compactly supported smooth top forms $\omega,\eta$ on an oriented $M^n$ and $a,b\in\mathbb R$,
$$\int_M(a\omega+b\eta)=a\int_M\omega+b\int_M\eta.$$
Also $\int_M\omega=\sum_C\int_C\omega|_C$, where $C$ ranges over connected components with their restricted orientations; only finitely many meet $\operatorname{supp}\omega$.

## Facts & Assumptions

[F1] [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]: The compact-support integral on an oriented manifold is independent of the chart cover, coordinate maps, subordinate partition, and refinement. If $U\subset M$ is open and contains $\operatorname{supp}\omega$, with its restricted orientation, then $\int_U\omega|_U=\int_M\omega$.

[F2] [[thm-multidimensional-integral-properties]]: Let $Q=\prod_{j<m}[a_j,b_j]$ be nondegenerate. For integrable $f,g:Q\to\mathbb R$ and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable and its integral is $\alpha\int_Qf+\beta\int_Qg$. If $f\le g$, then $\int_Qf\le\int_Qg$. Also $|f|$ is integrable and $|\int_Qf|\le\int_Q|f|$. If $a_r<c<b_r$, cutting $Q$ at the coordinate hyperplane $x_r=c$ gives two nondegenerate subrectangles; integrability on $Q$ is equivalent to integrability on both restrictions, and their integral values add to the integral over $Q$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Choose a common chart partition for the compact union of the two supports. In positive dimension, each chart coefficient for $a\omega+b\eta$ is the corresponding linear combination. Riemann linearity, followed by summation of finitely many terms, gives the first formula. Empty supports and zero scalars cause no exception. [F1, F2]

2.1 Manifolds have connected small ball or half-ball neighborhoods. Every connected component is therefore open. Its components form an open cover, so a compact support meets only finitely many of them. Choose the chart cover inside the components, group the finite sum accordingly, and use locality. [F1, step 1.1]

3.1 In dimension zero use the finite sums $\sum_p\varepsilon(p)\omega(p)$; both distributivity and grouping are identities of finite sums. A singleton contributes its one signed value. [step 1.1, algebra] ∎
