---
id: fs-two-submanifolds-with-nonempty-intersection-are-transverse
kind: false-statement
title: "Intersecting submanifolds need not be transverse"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transverse-embedded-submanifolds,
       cor-transverse-intersection-theorem]
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

**False claim:** any two embedded submanifolds with nonempty intersection are
transverse.

## Facts & Assumptions

**Given:** In $\mathbb R^2$, the embedded submanifolds $S=\mathbb R\times\{0\}$ and $T=\mathbb R\times\{0\}$.

[F1] Transversality means that the tangent spaces span the ambient tangent space at each intersection point ([[def-transverse-embedded-submanifolds]]).

## Refutation
**Proof technique:** direct.

1.1 The intersection $S\cap T$ is all of $\mathbb R\times\{0\}$, so it is nonempty. [given]

1.2 At every point $p\in S\cap T$, one has $T_pS=T_pT=\mathbb R\times\{0\}$. Their sum is still the $x$-axis, not $T_p\mathbb R^2=\mathbb R^2$. Thus [F1] fails. [F1, given, algebra]

2.1 Therefore nonempty intersection does not force transversality. [step 1.1, step 1.2] ∎