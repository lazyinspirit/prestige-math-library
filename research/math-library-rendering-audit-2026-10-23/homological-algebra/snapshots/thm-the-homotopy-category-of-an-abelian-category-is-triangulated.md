---
id: thm-the-homotopy-category-of-an-abelian-category-is-triangulated
kind: theorem
title: "The homotopy category of an abelian category is triangulated"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homotopy-category-of-chain-complexes, thm-the-homotopy-category-is-additive, thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories, def-distinguished-cone-triangle-in-the-homotopy-category, lem-cone-triangles-satisfy-tr-one, lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign, lem-cone-triangles-satisfy-tr-three, lem-cone-triangles-satisfy-the-octahedral-axiom]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Amnon Yekutieli, A Course on Derived Categories, Theorem 9.2.2"
      url: "https://arxiv.org/pdf/1206.6632"
---

## Statement

If $\mathcal A$ is an abelian category, then $K(\mathcal A)$, with its shift
and distinguished cone triangles, is a triangulated category.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$.

## Proof

1.1 $K(\mathcal A)$ is additive and its shift is an additive autoequivalence. [given]

2.1 The chosen class of cone triangles satisfies TR1, TR2 with the declared sign, TR3, and TR4 by the four preceding lemmas; these data therefore meet the definition of a triangulated category. [step 1.1, given] ∎
