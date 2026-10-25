---
id: prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism
kind: proposition
title: "The cone object of a map is unique up to nonunique isomorphism"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category, def-triangulated-category-axiom-tr-one, def-triangulated-category-axiom-tr-three, prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Remark 10.2.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Statement

Two distinguished completions of the same map $f:X\to Y$ have isomorphic third
objects. The isomorphism need not be unique or canonical.

## Facts & Assumptions

**Given:** Two distinguished triangles beginning with the same map $f:X\to Y$.

## Proof

1.1 TR3 extends the identity square on $f$ to a morphism between the two triangles. [given]

2.1 Its first two components are identities, so the two-isomorphisms proposition makes its third component an isomorphism; TR3 supplies no uniqueness for that component. [step 1.1, given] ∎
