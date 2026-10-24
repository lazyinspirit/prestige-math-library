---
id: cex-konig-fails-on-triangle
kind: counterexample
title: "$K_3$ has $\\nu(K_3)=1<2=\\tau(K_3)$, so König's equality needs bipartiteness"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-konig-bipartite-matching-cover, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

In the triangle $K_3$, every matching has at most one edge, while every vertex
cover has at least two vertices. Hence $\nu(K_3)=1<2=\tau(K_3)$.

## Facts & Assumptions

**Given:** The complete graph $K_3$ on three vertices.

[L1] König's equality applies to finite bipartite graphs ([[thm-konig-bipartite-matching-cover]]).

## Verification

**Verification technique:** direct.

1.1 Any two edges of $K_3$ share a vertex, so a matching has at most one edge; any one edge gives $\nu(K_3)=1$. [given]

1.2 Deleting one vertex leaves an edge, so one vertex is not a cover; two vertices cover all edges, giving $\tau(K_3)=2$.

1.3 Thus $\nu(K_3)<\tau(K_3)$, and [L1] shows precisely why this does not contradict König's theorem: $K_3$ is not bipartite. [L1]

2.1 This triangle is a finite witness that bipartiteness is a necessary hypothesis for the equality. [step 1.1, step 1.2, step 1.3] ∎
