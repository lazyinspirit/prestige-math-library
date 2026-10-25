---
id: fs-all-even-degrees-force-one-cycle
kind: false-statement
title: "FALSE: a connected simple graph in which every vertex has even degree must itself be a cycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree, def-standard-complete-bipartite-path-and-cycle-graphs, def-connected-graph-and-connected-component]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cornell Mathematics, Graph Theory notes"
      url: "https://pi.math.cornell.edu/~zakh/putnam/graph-theory.pdf"
pipeline_run: null
---

## Statement

**FALSE.** Every connected finite simple graph in which every vertex has even
degree is a cycle graph.

## Facts & Assumptions

**Given:** The bowtie graph with vertices $x,a,b,c,d$ and edges $xa,ab,bx,xc,cd,dx$, consisting of two triangles that share only $x$.

[F1] Degree counts the neighbours of a vertex ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F2] A connected graph has a path between every two vertices ([[def-connected-graph-and-connected-component]]).

[F3] In the cycle graph $C_n$ each vertex is joined by an edge exactly to its predecessor and its successor modulo $n$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]); with [F1] this gives every vertex of a cycle graph exactly two neighbours.

## Refutation

**Proof technique:** direct.

1.1 Every two vertices of the bowtie are joined by a path, using $x$ when they lie in different triangles, so the graph is connected by [F2]. [given, F2]

1.2 The vertex $x$ has neighbours $a,b,c,d$ and hence degree $4$; each other vertex has degree $2$. Thus all degrees are even by [F1]. [given, F1]

2.1 The bowtie is not a cycle graph because its vertex $x$ has degree $4$, whereas [F3] gives degree $2$ at every vertex of a cycle graph. Steps 1.1 and 1.2 therefore refute the claim. [step 1.1, step 1.2, F3] ∎
