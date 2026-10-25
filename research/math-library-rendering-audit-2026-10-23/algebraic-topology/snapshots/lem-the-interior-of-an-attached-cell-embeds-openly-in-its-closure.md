---
id: lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure
kind: lemma
title: The interior of an attached cell embeds openly in its closure
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cell-attachment-by-a-characteristic-map]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Chapter 0
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For an attached cell, its characteristic map is injective on $\mathring D^n$ and maps this interior homeomorphically onto an open subset of its closed-cell image. The full disk map need not be injective.

## Facts & Assumptions

**Given:** The adjunction quotient of [[def-cell-attachment-by-a-characteristic-map]].

## Proof

**Proof technique:** direct.

1.1 The defining equivalence relation identifies only boundary points of $D^n$ with points of $X$ (and may identify boundary points with one another); no point of $\mathring D^n$ is equivalent to a distinct point. [given]

2.1 The saturated open set $\mathring D^n$ has quotient homeomorphic to its image, and its complement in the closed-cell image is the image of $S^{n-1}$. Thus the image is open relative to the attached space, while step 1.1 deliberately says nothing about the boundary. [step 1.1] ∎
