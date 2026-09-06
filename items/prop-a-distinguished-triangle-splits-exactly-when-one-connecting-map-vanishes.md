---
id: prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes
kind: proposition
title: "A distinguished triangle is split up to rotation exactly when one map vanishes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-distinguished-triangle-with-zero-first-map-is-split, prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations, def-split-monomorphism-and-split-epimorphism]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.4.11"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Statement

Call a triangle **split up to rotation** when it is isomorphic to a rotation of
a canonical biproduct triangle. A distinguished triangle is split up to
rotation if and only if at least one of its three maps vanishes.

## Facts & Assumptions

**Given:** A distinguished triangle.

## Proof

1.1 If one map vanishes, rotate until it is first and apply [[prop-a-distinguished-triangle-with-zero-first-map-is-split]]; undoing that rotation makes the original triangle split up to rotation. [given]

2.1 A canonical biproduct triangle has zero final map. Each of its rotations therefore has one zero map, and this property is preserved by an isomorphism of triangles; this proves the converse. [step 1.1, given] ∎
