---
id: fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold
kind: false-statement
title: "A preimage need not be a submanifold without transversality"
status: published
dependency_level: 3
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-transverse-preimage-theorem, def-embedded-submanifold-and-slice-chart]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-published-recording/receipts/fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold.json
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

**False claim:** the preimage of every embedded submanifold under a smooth map is
again a submanifold.

## Facts & Assumptions

**Given:** The smooth map $F:\mathbb R^2\to\mathbb R$, $F(x,y)=xy$, and the embedded submanifold $\{0\}\subseteq\mathbb R$.

[L1] The transverse preimage theorem needs transversality to conclude the preimage is a submanifold ([[thm-transverse-preimage-theorem]]).

[F2] An embedded $k$-submanifold of $\mathbb R^2$ has $0\le k\le2$ and is locally a coordinate slice ([[def-embedded-submanifold-and-slice-chart]]).

## Refutation
**Proof technique:** direct.

1.1 The preimage is $$ F^{-1}(0)=\{(x,y):xy=0\}=(\mathbb R\times\{0\})\cup(\{0\}\times\mathbb R), $$ the union of the two coordinate axes. [given, algebra]

2.1 Every neighbourhood of the origin contains nonzero points on all four half-axes, and the cross has empty interior in every neighbourhood of the origin. An embedded $0$-submanifold would make the origin isolated, which fails; an embedded $1$-submanifold would have a local arc whose puncture has exactly two local components, unlike these four half-axes; and an embedded $2$-submanifold would be open near the origin by the slice-chart condition [F2], contradicting empty interior. Thus the cross is not embedded as a submanifold of any allowed dimension at the origin. This is exactly the failure excluded by the hypothesis in [L1]. [F2, L1, step 1.1]

3.1 Therefore a preimage need not be a submanifold when transversality is dropped. [step 2.1] ∎
