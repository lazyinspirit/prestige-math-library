---
id: ex-a-layout-with-a-single-wrong-decided-pair
kind: example
title: "A layout with a single wrong decided pair"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-substitution-of-a-graph-for-a-vertex,
       def-standard-complete-bipartite-path-and-cycle-graphs]
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
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Theorem 6.1 layout setup"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Example

For this example, a **layout** consists of a pattern graph $J$ and pairwise
disjoint vertex blocks $(A_x:x\in V(J))$. Pairs inside one block are
**undecided**. A pair with endpoints in distinct blocks $A_x,A_y$ is
**decided**, with the pattern predicting an edge exactly when $xy\in E(J)$;
the decided pair is **wrong** when its actual adjacency disagrees with that
prediction.

Take such a layout whose pattern graph is a single edge $uv$ with blocks
$A_u=\{1,2\}$ and $A_v=\{3,4\}$. If the graph on $\{1,2,3,4\}$ has all cross
edges except $24$, then the decided pair $\{2,4\}$ is the unique wrong pair.

## Facts & Assumptions

**Given:** The described two-block layout.

## Verification

**Proof technique:** direct finite check.

1.1 The pairs inside $A_u$ and $A_v$ are undecided by definition of layout, so only cross-pairs are decided. [given]

2.1 Because the pattern graph makes every cross-pair expected to be an edge, the missing edge $24$ is wrong, while all other cross-pairs agree with the pattern. Hence there is exactly one wrong decided pair. [step 1.1] ∎
