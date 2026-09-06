---
id: prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category
kind: proposition
title: "The full subcategory of acyclic complexes is thick in the homotopy category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-thick-subcategory, def-homotopy-category-of-chain-complexes, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, thm-the-cone-long-exact-sequence, prop-finite-biproducts-of-complexes-are-computed-degreewise]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Derived Categories, Section 13.10"
      url: "https://stacks.math.columbia.edu/tag/014P"
---

## Statement

For an abelian category $\mathcal A$, the full subcategory of $K(\mathcal A)$
consisting of acyclic complexes is thick.

## Facts & Assumptions

**Given:** An abelian category and the class of acyclic complexes in its homotopy category.

## Proof

1.1 A cone long exact sequence and the shift identification show that acyclicity is stable under shifts and satisfies two-out-of-three for cone triangles. [given]

2.1 Homology takes a retract of a complex to a retract of its homology, and degreewise finite biproducts preserve acyclicity; hence the class is closed under direct summands and is thick. [step 1.1, given] ∎
