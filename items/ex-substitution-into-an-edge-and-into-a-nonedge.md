---
id: ex-substitution-into-an-edge-and-into-a-nonedge
kind: example
title: "Substituting into $K_2$ gives the join and substituting into $\\overline{K_2}$ gives the disjoint union"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-substitution-of-a-graph-for-a-vertex, def-standard-complete-bipartite-path-and-cycle-graphs, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $G_1$ and $G_2$ be nonnull graphs on vertex sets disjoint from each other and
from the two template vertices below. Successively substituting
$G_1$ and $G_2$ for the two vertices of $K_2$ gives the **join**
$G_1\vee G_2$, obtained from their disjoint union by adding every edge between
the two vertex sets. Successively substituting them for the two vertices of
$\overline{K_2}$ gives the disjoint union $G_1\sqcup G_2$.

## Facts & Assumptions

**Given:** Nonnull graphs $G_1$ and $G_2$ whose vertex sets are disjoint from each other and from $\{x,y\}$, the complete graph $K_2$ on vertices $x,y$, and the edgeless graph $\overline{K_2}$ on the same vertex set.

[L1] Substituting a graph for a vertex replaces that vertex by the inserted graph and joins every outside vertex to all of it or none of it according to the original adjacency ([[def-substitution-of-a-graph-for-a-vertex]]).

## Verification

**Proof technique:** direct.

1.1 First substitute $G_1$ for $x$, leaving $y$ as a one-vertex part, and then substitute $G_2$ for $y$. Since $x$ and $y$ are adjacent in $K_2$, [L1] makes every vertex of $G_1$ adjacent to every vertex of $G_2$, while preserving the edges internal to both graphs. The result is exactly $G_1\vee G_2$. [L1, given]

1.2 Carrying out the same two substitutions in $\overline{K_2}$ leaves the two copied vertex sets anticomplete because $x$ and $y$ are nonadjacent. The result is exactly $G_1\sqcup G_2$. [L1, given]

2.1 Thus join and disjoint union are the two binary substitutions obtained from the edge and the nonedge templates. [step 1.1, step 1.2] ∎
