---
id: thm-directed-euler-circuit-characterisation
kind: theorem
title: "A finite digraph without isolated vertices has a directed Euler circuit if and only if it is weakly connected and every indegree equals the corresponding outdegree"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euler-trail-and-circuit, def-multigraph-and-digraph-degrees-and-connectivity, def-directed-walk-trail-path-cycle-and-strong-connectivity, lem-hierholzer-maximal-unused-edge-trail-closes, lem-splicing-edge-disjoint-closed-trails]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Richard Stanley, Algebraic Combinatorics"
      url: "https://math.mit.edu/~rstan/algcomb/algcomb.pdf"
    - title: "Applied Combinatorics, Directed Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-Directed.html"
pipeline_run: null
---

## Statement

Let $D$ be a finite digraph with no isolated vertices. Then $D$ has a directed
Euler circuit if and only if its underlying undirected graph is connected and

$$ \deg_D^+(v)=\deg_D^-(v) $$

for every vertex $v$.

## Facts & Assumptions

**Given:** A finite digraph $D$ with no isolated vertices.

[F1] A directed Euler circuit is a closed directed trail using every arc exactly once ([[def-euler-trail-and-circuit]]).

[F2] Weak connectivity means connectivity of the underlying undirected graph, and a loop contributes one to each directed degree ([[def-multigraph-and-digraph-degrees-and-connectivity]]).

[F3] Directed trails follow arc orientations and repeat no arc ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]).

[L1] In a balanced finite digraph, a nonempty directed trail maximal under unused outgoing-arc extension is closed ([[lem-hierholzer-maximal-unused-edge-trail-closes]]).

[L2] Arc-disjoint directed closed trails sharing a vertex can be spliced into one directed closed trail ([[lem-splicing-edge-disjoint-closed-trails]]).

## Proof

**Proof technique:** direct.

1.1 A directed Euler circuit uses one incoming and one outgoing arc at each visit, so it gives equal indegree and outdegree at every vertex. Because there are no isolated vertices and every arc lies on the circuit, all vertices lie in one connected underlying graph. [F1, F2, F3, algebra]

1.2 Conversely, suppose $D$ is weakly connected and balanced. The hypotheses and absence of isolated vertices provide an arc. Start with it, repeatedly extend at the terminal vertex by an unused outgoing arc, and stop when none remains. Finiteness gives termination, and [L1] makes the resulting trail $C$ closed. [given, F2, F3, L1]

2.1 Deleting the arcs of $C$ leaves equal residual indegree and outdegree at every vertex, because a closed directed trail uses equally many incoming and outgoing arcs there. [step 1.2, F1, F2, algebra]

3.1 If an unused arc remains, take an underlying path from a vertex of $C$ toward an endpoint of an unused arc and stop at the first unused boundary arc incident with $C$. If this arc points out of the incident vertex of $C$, an unused outgoing arc is present there. If it points into that vertex, residual balance from step 2.1 supplies an unused outgoing arc there. [step 1.2, step 2.1, F2, cases]

4.1 From that vertex, extend using residual outgoing arcs until maximal. By residual balance and [L1] the new trail closes, and [L2] splices it into $C$. [step 2.1, step 3.1, L1, L2]

5.1 Every splice uses at least one new arc. Finiteness therefore makes repetition of steps 2.1 through 3.1 terminate with one directed closed trail using every arc. This is a directed Euler circuit, and step 1.1 proves the converse necessity. [step 1.1, step 2.1, step 3.1, step 4.1, F1] ∎
