---
id: fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish
kind: false-statement
title: "A triangle is distinguished whenever the three composites vanish"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-distinguished-cone-triangle-in-the-homotopy-category, thm-the-homotopy-category-of-an-abelian-category-is-triangulated]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Exercise 10.2.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Statement

A triangle is distinguished if its three consecutive composites are zero.

## Refutation

**Given:** The displayed data.

1.1 Distinguished cone triangles do have zero consecutive composites, but this is only a necessary condition. [given]

2.1 In $K(\mathbb Z\text{-Mod})$, consider $S^0\mathbb Z\longrightarrow0\longrightarrow S^0\mathbb Z[1]\longrightarrow S^0\mathbb Z[1]$ with all three maps zero. Its consecutive composites vanish. [step 1.1, given]

3.1 If this triangle were distinguished, it would be isomorphic to the standard cone triangle of $0:S^0\mathbb Z\to0$. The final map of that cone triangle is the identity of $S^0\mathbb Z[1]$; commutativity of the final square would then force the third component of any purported triangle isomorphism to be zero, so it could not be an isomorphism. Thus the displayed triangle is not distinguished. [step 2.1, given] ∎
