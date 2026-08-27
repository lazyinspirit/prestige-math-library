---
id: prop-cayley-trees-are-zero-hyperbolic
kind: proposition
title: "Cayley trees are 0-hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-delta-slim-geodesic-triangle-and-hyperbolic-space, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Every tree is $0$-hyperbolic. In particular, the Cayley graph of a free group
with respect to a free basis is $0$-hyperbolic.

## Facts & Assumptions

**Given:** A tree $T$ with its path metric.

[L1] The Cayley graph of a free group with respect to a free basis is a tree
([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]]).

[A1] In a tree, any two vertices are joined by a unique geodesic segment.

## Proof

**Proof technique:** direct.

1.1 Let $\triangle xyz$ be a geodesic triangle in $T$. By [A1], the three geodesic segments $[x,y]$, $[y,z]$, and $[z,x]$ are unique, so their union is a tripod with a single branch point. [given, A1]

2.1 In a tripod, each side is contained in the union of the other two sides. Thus every geodesic triangle in $T$ is $0$-slim, so $T$ is $0$-hyperbolic. The final sentence follows from [L1]. [step 1.1, L1] ∎ 