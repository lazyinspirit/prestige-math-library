---
id: lem-degenerate-bar-chains-form-a-contractible-subcomplex
kind: lemma
title: "Degenerate bar chains are contractible"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normalized-bar-resolution, lem-the-bar-differential-is-group-equivariant-and-squares-to-zero]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

The degenerate bar chains form a contractible subcomplex of the unnormalized bar complex.

## Proof

**Given:** The span $D$ of homogeneous bars with two consecutive equal vertices.

1.1 A face of a tuple with $g_i=g_{i+1}$ is again degenerate, except for the two faces deleting $g_i$ or $g_{i+1}$; those give the same remaining tuple with opposite signs. Hence $dD\subseteq D$. [given]

2.1 Filter $D_n$ by the least index at which two consecutive vertices agree. On each successive quotient, the signed degeneracy that repeats the vertex at that index contracts the quotient; the simplicial identities give $sd+ds=1$. Combining these homotopies along the finite filtration $0\le i<n$ gives a contraction of $D$. [step 1.1] ∎
