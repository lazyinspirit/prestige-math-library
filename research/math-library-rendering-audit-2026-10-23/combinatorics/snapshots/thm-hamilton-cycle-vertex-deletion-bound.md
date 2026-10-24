---
id: thm-hamilton-cycle-vertex-deletion-bound
kind: theorem
title: "If $G$ has a Hamilton cycle, then deleting any nonempty proper vertex set $S$ leaves at most $|S|$ connected components"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hamilton-path-cycle-and-hamilton-connected, def-graph-deletion-contraction-minor-and-subdivision, def-connected-graph-and-connected-component, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement

If a finite simple graph $G$ has a Hamilton cycle and
$\varnothing\ne S\subsetneq V(G)$, then the vertex-deleted graph $G-S$ has at
most $|S|$ connected components.

## Facts & Assumptions

**Given:** A Hamilton cycle $C$ of $G$ and a nonempty proper set $S\subsetneq V(G)$.

[F1] The cycle $C$ contains every vertex of $G$ exactly once before returning to its initial vertex ([[def-hamilton-path-cycle-and-hamilton-connected]]).

[F2] Vertex deletion removes $S$ and all incident edges ([[def-graph-deletion-contraction-minor-and-subdivision]]).

[F3] Connected components are maximal vertex sets joined by paths ([[def-connected-graph-and-connected-component]]).

[F4] The finite cardinality $|S|$ counts the vertices of $S$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Deleting the vertices of $S$ from the cyclic order of $C$ leaves one or more vertex-disjoint path segments containing every vertex of $G-S$. Each such segment is preceded around $C$ by a distinct vertex of $S$, so the number of segments is at most $|S|$. [given, F1, F2, F4]

2.1 Every path segment from step 1.1 remains a path in $G-S$. Adding the other edges of $G-S$ can merge such segments into a connected component but cannot split one, so $G-S$ has no more components than those segments. [step 1.1, F2, F3]

3.1 Therefore the number of connected components of $G-S$ is at most $|S|$. [step 1.1, step 2.1] ∎
