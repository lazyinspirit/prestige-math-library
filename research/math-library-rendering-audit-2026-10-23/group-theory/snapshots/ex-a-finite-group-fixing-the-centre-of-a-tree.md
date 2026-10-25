---
id: ex-a-finite-group-fixing-the-centre-of-a-tree
kind: example
title: "A finite group fixing the centre of a tree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Example

Let $P_5$ be the path with vertices $-2,-1,0,1,2$ and edges joining
consecutive integers. Reflection $r(n)=-n$ defines an action of $C_2$ on $P_5$,
and the centre vertex $0$ is fixed.

## Facts & Assumptions

**Given:** The path $P_5$ and the reflection action of $C_2$.

[L1] A finite group acting on a tree fixes a vertex after subdivision. ([[lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision]])

## Verification

**Proof technique:** direct.

1.1 The reflection preserves adjacency and the unique diameter path of $P_5$, so it is an automorphism of the tree. [L1, given]

2.1 Its midpoint is already the vertex $0$, so the fixed vertex promised by [L1] occurs without needing any further subdivision in this example. [L1, step 1.1, algebra] ∎
