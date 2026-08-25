---
id: ex-graham-pollak-for-the-complete-graph-on-four-vertices
kind: example
title: "$K_4$ decomposed into three complete bipartite graphs, and no decomposition into two"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-graham-pollak, def-complete-bipartite-decomposition-of-a-graph, def-finite-simple-graph, cor-complete-graph-edge-count]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 8"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Example

The complete graph $K_4$ has the edge decomposition

$$K_{\{0\},\{1,2,3\}},\qquad K_{\{1\},\{2,3\}},\qquad K_{\{2\},\{3\}}.$$

## Facts & Assumptions

**Given:** the three complete bipartite graphs above.

[L1] Every complete bipartite decomposition of $K_n$ has at least $n-1$ parts ([[thm-graham-pollak]]).

## Verification

**Proof technique:** direct.

1.1 The three displayed graphs cover the edges $\{0,1\},\{0,2\},\{0,3\}$; then $\{1,2\},\{1,3\}$; then $\{2,3\}$, so every edge of $K_4$ is covered exactly once. [given]

2.1 Hence $K_4$ has a complete bipartite decomposition with three parts. Since $n-1=3$, [L1] says that no decomposition into two parts can exist. [L1, step 1.1] ∎
