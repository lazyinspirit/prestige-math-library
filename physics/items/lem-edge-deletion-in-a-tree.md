---
id: lem-edge-deletion-in-a-tree
kind: lemma
title: "Deleting any edge of a tree separates it into exactly two tree components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tree-forest-and-leaf, def-graph-deletion-contraction-minor-and-subdivision, def-connected-graph-and-connected-component, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## Statement

If $T$ is a tree and $e=uv\in E(T)$, then $T-e$ has exactly two connected components, each of which is a tree.

## Facts & Assumptions

**Given:** A tree $T$ and an edge $e=uv$.

[F1] A tree is connected and has no cycle ([[def-tree-forest-and-leaf]]).

[F2] $T-e$ has the same vertices and all edges of $T$ except $e$ ([[def-graph-deletion-contraction-minor-and-subdivision]]).

[F3] Connectedness is equivalently the existence of a path between every two vertices ([[def-connected-graph-and-connected-component]], [[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct.

1.1 The vertices $u$ and $v$ lie in distinct components of $T-e$: otherwise a $u$-$v$ path in $T-e$ together with $e$ would be a cycle in $T$. [F1, F2, F3]

1.2 Every vertex $x$ lies in the component of $u$ or the component of $v$. Indeed, take an $x$-$u$ path in $T$; if it avoids $e$ it joins $x$ to $u$ in $T-e$, and if it uses $e$ then its segment from $x$ to $v$ avoids $e$. [F1, F2, F3]

2.1 Thus $T-e$ has exactly two components. [step 1.1, step 1.2]

3.1 Each component is connected by definition and contains no cycle because it is a subgraph of the acyclic graph $T$. Hence each component is a tree. [F1, F3] ∎
