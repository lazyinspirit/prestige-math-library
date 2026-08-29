---
id: ex-kurosh-decomposition-of-a-subgroup
kind: example
title: "A Kurosh decomposition of a subgroup of a free product"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-kurosh-subgroup-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
pipeline_run: null
---

## Example

Let $G=C_2\ast C_3$ and let $H=C_2$ be the first factor. Then the Kurosh
decomposition of $H$ is just $H$ itself, with trivial free part.

## Facts & Assumptions

**Given:** The Kurosh subgroup theorem.

[L1] A subgroup of a free product is a free product of intersections with conjugates of the factors together with a free group. ([[thm-kurosh-subgroup-theorem]])

## Verification

**Proof technique:** direct.

1.1 The subgroup $H=C_2$ already is one of the free-product factors of $G=C_2\ast C_3$. Therefore one of the Kurosh intersection terms in [L1] is exactly $H$. [L1, given]

2.1 No further nontrivial intersection factor is needed, and there is no free remainder. So the Kurosh decomposition here is the tautological one $H\cong C_2$. [step 1.1, algebra] ∎
