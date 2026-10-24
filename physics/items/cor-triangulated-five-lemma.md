---
id: cor-triangulated-five-lemma
kind: corollary
title: "The triangulated five lemma"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-long-exact-hom-sequences-of-a-distinguished-triangle, thm-five-lemma-for-a-morphism-of-long-exact-sequences]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Exercise 10.2.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Statement

If a morphism of distinguished triangles has two adjacent object components
isomorphisms, then its remaining component is an isomorphism.

## Facts & Assumptions

**Given:** A morphism of distinguished triangles with two adjacent isomorphism components.

## Proof

1.1 Apply $\mathcal T(W,-)$ to the morphism and use the long exact Hom sequences; the ordinary five lemma makes the map on $\mathcal T(W,-)$ induced by the third component an isomorphism for every $W$. [given]

2.1 Taking $W$ to be each source and evaluating inverse natural maps at identities yields a two-sided inverse for the third component, hence it is an isomorphism. [step 1.1, given] ∎
