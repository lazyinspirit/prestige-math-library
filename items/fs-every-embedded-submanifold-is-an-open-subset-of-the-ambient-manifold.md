---
id: fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold
kind: false-statement
title: "An embedded submanifold need not be open in the ambient manifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, def-codimension-and-hypersurface]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

**False claim:** every embedded submanifold is an open subset of the ambient
manifold.

## Facts & Assumptions

**Given:** The $x$-axis $S=\{(x,0):x\in\mathbb R\}\subseteq\mathbb R^2$.

[F1] Embedded submanifolds are locally coordinate slices
([[def-embedded-submanifold-and-slice-chart]]).

[F2] Codimension records the dimension drop inside the ambient manifold
([[def-codimension-and-hypersurface]]).

## Refutation
**Proof technique:** direct.

1.1 $S$ is the global coordinate slice $\mathbb R\times\{0\}$ in $\mathbb R^2$, so [F1] makes it an embedded submanifold. Its codimension is $1$ by [F2]. [F1, F2, given]

2.1 No Euclidean ball centred at a point of $S$ lies inside $S$, because every such ball contains points with nonzero second coordinate. Hence $S$ is not open in $\mathbb R^2$. [step 1.1]

3.1 Therefore an embedded submanifold need not be open in the ambient manifold. [step 1.1, step 2.1] ∎