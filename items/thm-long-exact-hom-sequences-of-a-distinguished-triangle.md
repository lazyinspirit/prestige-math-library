---
id: thm-long-exact-hom-sequences-of-a-distinguished-triangle
kind: theorem
title: "Long exact Hom sequences of a distinguished triangle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category, thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological, prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.4.2"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Statement

For every $W$ and distinguished triangle $X\to Y\to Z\to X[1]$, both
$$\cdots\to\mathcal T(W,X)\to\mathcal T(W,Y)\to\mathcal T(W,Z)\to\mathcal T(W,X[1])\to\cdots$$
and the oppositely oriented sequence with $\mathcal T(-,W)$ are exact.

## Facts & Assumptions

**Given:** A distinguished triangle and an object $W$.

## Proof

1.1 The two representable functors have the required three-term exactness on the given triangle. [given]

2.1 Apply that exactness to every translate, using signed rotations to identify consecutive three-term portions; concatenating them gives exactly the two displayed long sequences. [step 1.1, given] ∎
