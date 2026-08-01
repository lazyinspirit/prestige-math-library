---
id: lem-splicing-edge-disjoint-closed-trails
kind: lemma
title: "Edge-disjoint closed trails sharing a vertex can be spliced into one closed trail"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euler-trail-and-circuit, def-directed-walk-trail-path-cycle-and-strong-connectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Euler Tours and Trails"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-ToursTrails.html"
pipeline_run: null
---

## Statement

Two edge-disjoint closed trails in an undirected multigraph that share a vertex
can be spliced into a closed trail using exactly the edges of both. The same
holds for two arc-disjoint directed closed trails in a digraph.

## Facts & Assumptions

**Given:** Closed trails $C$ and $D$ sharing a vertex $w$, with disjoint edge sets or disjoint arc sets as appropriate.

[F1] A trail repeats no edge or arc, and a closed trail has the same initial and terminal vertex ([[def-euler-trail-and-circuit]]).

[F2] A directed walk respects the orientation of every traversed arc ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]).

## Proof

**Proof technique:** constructive.

1.1 Rotate the cyclic listing of each closed trail so that it starts and ends at $w$. Traverse $C$ from $w$ back to $w$, then traverse $D$ from $w$ back to $w$. Consecutive edges or arcs still meet at their displayed vertices, and directed arcs retain their orientations. [given, F1, F2, construct]

2.1 The concatenation is closed, and it repeats no edge or arc because neither input trail repeats one and their used sets are disjoint. Its used set is exactly the union of the two input used sets. [step 1.1, F1, given]

3.1 This concatenation is the required spliced closed trail in either setting. [step 1.1, step 2.1, discharge-construct] ∎
