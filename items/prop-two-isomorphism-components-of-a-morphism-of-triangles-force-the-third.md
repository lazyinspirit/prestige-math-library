---
id: prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third
kind: proposition
title: "Two isomorphism components of a morphism of triangles force the third"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-triangulated-five-lemma, prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.4.3"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Statement

In a morphism of distinguished triangles, if any two components are
isomorphisms, then the third is an isomorphism.

## Facts & Assumptions

**Given:** A morphism of distinguished triangles with two isomorphism components.

## Proof

1.1 Rotate source and target triangles simultaneously until the two known components are adjacent to the unknown one. [given]

2.1 The rotated morphism has the same component isomorphisms up to translation, so the triangulated five lemma makes the remaining component invertible; undoing the rotation proves the claim. [step 1.1, given] ∎
