---
id: ex-deletion-contraction-and-a-minor-model
kind: example
title: "A worked graph records vertex deletion, edge deletion, edge contraction and the resulting minor model"
status: published
origin: session
deps: [def-graph-deletion-contraction-minor-and-subdivision, def-subgraph-induced-subgraph-and-spanning-subgraph]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Example

Let $G$ have vertices $1,2,3,4$ and edges $12,23,34,41,13$. Then:

- $G-4$ is the triangle on $1,2,3$;
- $G-13$ is the cycle $C_4$;
- contracting $12$ produces the triangle on the new vertex $x$ and vertices
  $3,4$, so this triangle is a minor of $G$.

The contraction deletes the loop arising from $12$ and merges the two copies of
$x3$ arising from $13$ and $23$.

## Facts & Assumptions

**Given:** The graph $G$ displayed in the Example.

[F1] Vertex deletion takes the induced subgraph on the remaining vertices, edge deletion removes the named edge, and contraction deletes loops and merges parallel images ([[def-graph-deletion-contraction-minor-and-subdivision]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Verification

**Proof technique:** direct.

1.1 Deleting vertex $4$ retains exactly $12,23,13$, the three edges of a triangle on $1,2,3$. Deleting edge $13$ retains exactly $12,23,34,41$, the four-cycle. [given, F1]

1.2 Under contraction of $12$ to $x$, the edge $12$ becomes a loop and is deleted; $13$ and $23$ both become $x3$ and merge; $41$ becomes $4x$; and $34$ remains $34$. The resulting simple edge set is $\{x3,34,4x\}$, a triangle. [given, F1]

2.1 Since this triangle is obtained from $G$ by an allowed edge contraction, it is a minor of $G$. [step 1.2, F1] ∎
