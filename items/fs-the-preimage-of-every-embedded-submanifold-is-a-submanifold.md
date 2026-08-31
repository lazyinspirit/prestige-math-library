---
id: fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold
kind: false-statement
title: "A preimage need not be a submanifold without transversality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-transverse-preimage-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

## Refutation
**Proof technique:** direct.

1.1 The preimage is $$ F^{-1}(0)=\{(x,y):xy=0\}=(\mathbb R\times\{0\})\cup(\{0\}\times\mathbb R), $$ the union of the two coordinate axes. [given, algebra]

2.1 At the origin this set has two distinct tangent directions, so no neighbourhood of $(0,0)$ is diffeomorphic to an open interval or to a point. Hence it is not a $1$-dimensional or $0$-dimensional embedded submanifold there. This is exactly the failure excluded by the hypothesis in [L1]. [L1, step 1.1]

3.1 Therefore a preimage need not be a submanifold when transversality is dropped. [step 2.1] ∎