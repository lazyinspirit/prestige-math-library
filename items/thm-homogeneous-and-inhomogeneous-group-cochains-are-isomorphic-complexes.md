---
id: thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes
kind: theorem
title: "Homogeneous and inhomogeneous cochains agree"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unnormalized-homogeneous-bar-resolution, def-inhomogeneous-group-cochains, lem-the-inhomogeneous-group-cochain-differential-squares-to-zero]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Appendix 6.5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

The complex $\operatorname{Hom}_{\mathbb Z[G]}(B_\bullet(G),M)$ is naturally isomorphic to $(C^\bullet(G,M),d)$.

## Proof

**Given:** Homogeneous bars and the inhomogeneous differential.

1.1 Send a homogeneous equivariant cochain $F$ to $f(g_1,\ldots,g_n)=F(1,g_1,g_1g_2,\ldots,g_1\cdots g_n)$. [given]

2.1 Its inverse sends $f$ to $F(g_0,\ldots,g_n)=g_0f(g_0^{-1}g_1,\ldots,g_{n-1}^{-1}g_n)$. The formulas are inverse and $G$-equivariance is immediate; applying alternating face deletion yields exactly the displayed formula for $d$. [step 1.1] ∎
