---
id: fs-cones-form-a-functor-in-every-triangulated-category
kind: false-statement
title: "Cones form a functor in every triangulated category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism, def-triangulated-category-axiom-tr-three]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Amnon Yekutieli, A Course on Derived Categories, Remark after Definition 8.1.2"
      url: "https://arxiv.org/pdf/1206.6632"
---

## Statement

The triangulated axioms canonically supply a functor assigning a cone to each
morphism.

## Refutation

**Given:** The displayed data.

1.1 TR1 supplies a completion for each morphism, but its third object is only determined up to nonunique isomorphism. [given]

2.1 TR3 likewise supplies, rather than canonically chooses, maps between completions; therefore the axioms do not provide compatible object and morphism choices. An enhancement is extra structure. [step 1.1, given] ∎
