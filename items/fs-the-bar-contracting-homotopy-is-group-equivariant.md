---
id: fs-the-bar-contracting-homotopy-is-group-equivariant
kind: false-statement
title: "The bar contracting homotopy is group-equivariant"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-augmented-bar-complex-is-exact, thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module]
proof_strategy: direct
verification:
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

The identity-insertion contraction of the bar complex is $G$-equivariant.

## Refutation

**Given:** A nonidentity element $h\in G$.

1.1 The contraction sends $(g_0,\ldots,g_n)$ to $(1,g_0,\ldots,g_n)$. [given]

2.1 Thus $s(hg_0,\ldots,hg_n)=(1,hg_0,\ldots)$, whereas $h s(g_0,\ldots,g_n)=(h,hg_0,\ldots)$; they differ when $h\ne1$. [step 1.1] ∎
