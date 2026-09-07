---
id: "prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles"
kind: "proposition"
title: "Total derived functors send distinguished triangles to distinguished triangles"
deps: ["thm-existence-of-the-bounded-above-left-total-derived-functor", "thm-existence-of-the-bounded-below-right-total-derived-functor", "thm-the-derived-category-inherits-a-triangulated-structure"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The bounded total derived functors $LF$ and $RF$ are exact functors of triangulated categories, with shift comparisons transported through their model equivalences. If $F$ is exact as a functor of abelian categories, its termwise functor already descends to the derived category and the respective derived augmentation or coaugmentation is an isomorphism.

## Facts & Assumptions

**Given:** The bounded total derived functors $LF$ and $RF$ are exact functors of triangulated categories, with shift comparisons transported through their model equivalences. If $F$ is exact as a functor of abelian categories, its termwise functor already descends to the derived category and the respective derived augmentation or coaugmentation is an isomorphism.

[F1] The left derived functor is the composite through the bounded projective model and $K(F)$ ([[thm-existence-of-the-bounded-above-left-total-derived-functor]]).

[F2] The right derived functor is the composite through the bounded injective model and $K(F)$ ([[thm-existence-of-the-bounded-below-right-total-derived-functor]]).

[F3] The localization is exact for the derived cone triangulation ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

## Proof

1.1 In either model, shifts and cones stay in the bounded projective or injective subcategory. Additive $F$ preserves their finite biproduct formulas and signs, hence their cone triangles and shift identifications. The model equivalence and the target localization are exact, so their composite sends every distinguished triangle to a distinguished triangle. This includes split triangles and zero objects. [F1, F2, F3]

2.1 If $F$ is exact, it preserves the kernel-image sequences defining cohomology, giving $H^n(FX)\cong F(H^nX)$. Consequently it preserves quasi-isomorphisms, so termwise $F$ descends by localization. In particular each $F(p_X)$ or $F(j_X)$ is a quasi-isomorphism, making the derived comparison invertible. This verifies the asserted comparison without an extra exactness hypothesis in the existence theorem. [F1, F2, step 1.1, algebra] ∎
