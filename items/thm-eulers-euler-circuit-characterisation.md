---
id: thm-eulers-euler-circuit-characterisation
kind: theorem
title: "Euler's theorem and Hierholzer's construction: a connected finite undirected multigraph has an Euler circuit if and only if every degree is even"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euler-trail-and-circuit, def-multigraph-and-digraph-degrees-and-connectivity, lem-hierholzer-maximal-unused-edge-trail-closes, lem-splicing-edge-disjoint-closed-trails]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

Let $M$ be a connected finite undirected multigraph. Then $M$ has an Euler
circuit if and only if every vertex of $M$ has even degree. This includes the
edgeless one-vertex multigraph, whose Euler circuit has length zero.

## Facts & Assumptions

**Given:** A connected finite undirected multigraph $M$.

[F1] An Euler circuit is a closed trail using every edge exactly once ([[def-euler-trail-and-circuit]]).

[F2] A loop contributes two to undirected degree, and connectivity is connectivity of the underlying simple graph ([[def-multigraph-and-digraph-degrees-and-connectivity]]).

[L1] In an even finite multigraph, a nonempty trail that cannot be extended at its terminal vertex by an unused incident edge is closed ([[lem-hierholzer-maximal-unused-edge-trail-closes]]).

[L2] Edge-disjoint closed trails sharing a vertex can be spliced into one closed trail using their union ([[lem-splicing-edge-disjoint-closed-trails]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ has an Euler circuit, every arrival at a vertex is paired with a departure; a loop supplies both ends of such a pair. Because the circuit uses every edge, every degree is even. [F1, F2, algebra]

1.2 Now suppose every degree is even. If $M$ has no edges, connectedness forces it to have one vertex, and the length-zero closed trail there is an Euler circuit. [given, F1, F2]

1.3 If $M$ has an edge, start with that edge and repeatedly extend the trail at its terminal vertex by any unused incident edge until no extension is possible. Finiteness makes this process stop, and [L1] makes the resulting nonempty trail $C$ closed. [given, L1]

2.1 After deleting the edges of $C$, every residual degree is even because a closed trail uses an even number of edge ends at each vertex. If an unused edge remains, connectedness of $M$ supplies an underlying path from a vertex of $C$ to that edge; at the first point where this path leaves the used-edge region, an unused edge is incident with a vertex of $C$. [step 1.3, F1, F2, algebra]

3.1 Starting at that vertex, extend a trail using only residual edges until maximal. The residual degrees are even, so [L1] closes it, and [L2] splices it into $C$. [step 2.1, L1, L2]

4.1 Each splice strictly increases the number of used edges. Since $M$ has finitely many edges, repeating steps 2.1 and 3.1 terminates with one closed trail using every edge, hence an Euler circuit. Together with step 1.1 this proves both directions. [step 1.1, step 1.2, step 2.1, step 3.1, F1] ∎
