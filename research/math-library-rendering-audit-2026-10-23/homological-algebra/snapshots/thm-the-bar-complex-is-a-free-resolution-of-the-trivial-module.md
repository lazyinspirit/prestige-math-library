---
id: thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module
kind: theorem
title: "The bar complex is a free resolution of the trivial module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unnormalized-homogeneous-bar-resolution, lem-the-bar-differential-is-group-equivariant-and-squares-to-zero, def-bar-augmentation, lem-the-augmented-bar-complex-is-exact]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Theorem 6.5.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

The augmented homogeneous bar complex is a free $\mathbb Z[G]$-resolution of the trivial module $\mathbb Z$.

## Proof

**Given:** The augmented bar complex.

1.1 Every diagonal orbit in $G^{n+1}$ has the unique representative $(1,g_0^{-1}g_1,\ldots,g_0^{-1}g_n)$; hence $B_n(G)$ is free over $\mathbb Z[G]$ on these representatives. [given]

2.1 The differential and augmentation are $G$-linear, and the underlying augmented complex is exact. Thus it is a free $\mathbb Z[G]$-resolution. [step 1.1] ∎
