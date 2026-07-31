---
id: fs-all-even-degrees-force-one-cycle
kind: false-statement
title: "FALSE: a connected simple graph in which every vertex has even degree must itself be a cycle"
status: published
origin: session
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
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

[F3] In a cycle graph every vertex has exactly two neighbours ([[def-graph-walk-trail-path-and-cycle]]).

## Refutation

**Proof technique:** direct.

1.1 Every two vertices of the bowtie are joined by a path, using $x$ when they lie in different triangles, so the graph is connected by [F2]. [given, F2]

1.2 The vertex $x$ has neighbours $a,b,c,d$ and hence degree $4$; each other vertex has degree $2$. Thus all degrees are even by [F1]. [given, F1]

2.1 The bowtie is not a cycle graph because its vertex $x$ has degree $4$, whereas [F3] gives degree $2$ at every vertex of a cycle graph. Steps 1.1 and 1.2 therefore refute the claim. [step 1.1, step 1.2, F3] ∎
