---
id: ex-infinite-convex-or-concave-subsequence-by-ramsey
kind: example
title: "Infinite Ramsey for triples gives a convex or concave subsequence of every real sequence in general position"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-infinite-ramsey-on-the-naturals, def-sequence, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, example after Theorem 2"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Example

Let $(x_n)$ be a real sequence ([[def-sequence]]) such that no three points $(i,x_i)$ are collinear. Then it has an infinite subsequence whose graph is strictly convex or strictly concave: every selected triple has respectively increasing or decreasing secant slopes. All divisions are by positive index differences and use the ordered-field rules of [[def-ordered-field]].

## Facts & Assumptions

**Given:** Such a sequence $(x_n)$.

[L1] Every finite colouring of $[\mathbb N]^k$ has an infinite monochromatic set, in ZF ([[thm-infinite-ramsey-on-the-naturals]]).

## Verification

**Proof technique:** direct.

1.1 For $i<j<k$, colour the triple convex when $(x_j-x_i)/(j-i)<(x_k-x_j)/(k-j)$ and concave when the reverse inequality holds. General position excludes equality, so this is a two-colouring. Apply [L1] with $k=3$. [L1]

2.1 On the resulting infinite index set, every ordered triple has the same strict slope comparison. In the convex colour every successive secant slope increases, and in the concave colour every such slope decreases. [step 1.1, L1]

3.1 Increasing secant slopes are exactly the strict convexity inequality for the selected graph, while decreasing slopes give strict concavity. Thus the increasing enumeration of the homogeneous index set is the required subsequence. [step 2.1, algebra] ∎

