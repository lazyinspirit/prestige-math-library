---
id: ex-graph-nonisomorphism-is-in-ip
kind: example
title: "The graph-nonisomorphism protocol on a graph pair"
status: draft
origin: session
deps: [thm-graph-nonisomorphism-is-in-ip]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arora and Barak, §8.3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Let $G_0$ be the three-vertex path and $G_1$ the three-cycle. They are nonisomorphic, so the challenge graph has either two or three edges and reveals its origin.

## Verification

**Given:** the displayed pair of graphs.

1.1 Edge count is invariant under graph isomorphism, and $G_0$ has two edges while $G_1$ has three. [given]

2.1 Hence this pair lies in GNI, and its protocol is an IP instance by [[thm-graph-nonisomorphism-is-in-ip]]. [step 1.1, given] ∎
