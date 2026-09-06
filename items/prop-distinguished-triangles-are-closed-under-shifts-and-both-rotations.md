---
id: prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations
kind: proposition
title: "Distinguished triangles are closed under shifts and both rotations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category, def-triangulated-category-axiom-tr-two, def-rotation-of-a-triangle]
proof_strategy: direct
verification:
  audited: 2026-09-07
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

Every integral translate, every left rotation, and every inverse rotation of a
distinguished triangle is distinguished, with the signs determined by
[[def-rotation-of-a-triangle]].

## Facts & Assumptions

**Given:** A distinguished triangle in a triangulated category.

## Proof

1.1 TR2 gives the signed left rotation, and conversely says that its being distinguished is equivalent to that of the original triangle. [given]

2.1 Three successive left rotations give the translate of the original triangle by $[1]$, up to the sign automorphisms prescribed by [[def-rotation-of-a-triangle]].  Hence $T$ is distinguished if and only if $T[1]$ is distinguished. [step 1.1, given]

3.1 Iterating this equivalence in both directions gives $T[n]$ for every $n\in\mathbb Z$.  A right rotation is the inverse of a left rotation up to the same sign isomorphisms, so it too preserves distinguished triangles. [step 1.1, step 2.1, given] ∎
