---
id: cex-a-three-term-zero-composite-diagram-that-is-not-distinguished
kind: counterexample
title: "A three-term zero-composite diagram that is not distinguished"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish, def-zero-and-stalk-complex, def-distinguished-cone-triangle-in-the-homotopy-category]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Exercise 10.2.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Statement refuted

In $K(\mathbb Z\text{-Mod})$, the diagram
$$S^0\mathbb Z\longrightarrow0\longrightarrow S^0\mathbb Z[1]\longrightarrow S^0\mathbb Z[1]$$
with all three displayed maps zero has zero consecutive composites, but it is
not distinguished.

## Counterexample

**Given:** The displayed data.

1.1 All consecutive composites are zero because every displayed map is zero. [given]

2.1 If it were distinguished, it would be isomorphic to the standard cone triangle of $0:S^0\mathbb Z\to0$, whose final map is the identity of $S^0\mathbb Z[1]$; no triangle isomorphism can turn that nonzero map into zero. [step 1.1, given] ∎
