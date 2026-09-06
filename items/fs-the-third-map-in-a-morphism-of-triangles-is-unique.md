---
id: fs-the-third-map-in-a-morphism-of-triangles-is-unique
kind: false-statement
title: "The third map in a morphism of triangles is unique"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category-axiom-tr-three, def-zero-and-stalk-complex, def-standard-cone-triangle-in-the-homotopy-category, thm-the-homotopy-category-of-an-abelian-category-is-triangulated]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Statement

For every commutative square on the first maps of distinguished triangles, its
TR3 completion is unique.

## Refutation

**Given:** The displayed data.

1.1 TR3 states only that there exists a third component completing the square. [given]

2.1 In $K(\mathbb Z\text{-Mod})$, take the standard cone triangle of the zero map $S^0\mathbb Z\to S^0\mathbb Z[1]$. Its cone is $S^0\mathbb Z[1]\oplus S^0\mathbb Z[1]$, with the second triangle map the first-summand inclusion and the third triangle map the second-summand projection. [step 1.1, given]

3.1 The zero square on the first two terms has the zero third component as one completion. It also has the endomorphism of the cone whose only nonzero matrix entry is the identity from the second summand to the first: this endomorphism kills the inclusion and is killed by the projection, so it completes the same square. [step 2.1, given]

4.1 The second endomorphism is nonzero in the homotopy category because it is the identity between stalk summands with zero differentials, while the first completion is zero. Hence the TR3 completion is not unique. [step 3.1, given] ∎
