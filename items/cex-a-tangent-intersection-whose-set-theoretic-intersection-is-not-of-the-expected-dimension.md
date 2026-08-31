---
id: cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension
kind: counterexample
title: "A tangent intersection whose set-theoretic intersection is not of the expected dimension"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-two-submanifolds-with-nonempty-intersection-are-transverse,
       fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold]
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

## Statement refuted

**False claim:** even without transversality, tangent intersections still have
the expected dimension.

## Facts & Assumptions

**Given:** In $\mathbb R^2$, the embedded submanifolds $S=T=\mathbb R\times\{0\}$.

[L1] Intersecting submanifolds need not be transverse ([[fs-two-submanifolds-with-nonempty-intersection-are-transverse]]).

## Counterexample
**Proof technique:** direct.

1.1 The intersection $S\cap T$ is the whole $x$-axis, so it is $1$-dimensional. [given]
2.1 Each of $S$ and $T$ has codimension $1$ in $\mathbb R^2$, so a transverse intersection would have expected codimension $2$ and thus expected dimension $0$. Step 1.1 shows the actual intersection dimension is larger. This is precisely the nontransverse situation highlighted in [L1]. [L1, step 1.1, algebra]
3.1 Therefore tangent intersections need not have the expected set-theoretic dimension. [step 2.1] ∎