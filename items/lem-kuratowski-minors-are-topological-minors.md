---
id: lem-kuratowski-minors-are-topological-minors
kind: lemma
title: "A graph has a $K_5$ or $K_{3,3}$ minor exactly when it has a subdivision of $K_5$ or $K_{3,3}$ as a subgraph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-deletion-contraction-minor-and-subdivision, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

A finite graph contains $K_5$ or $K_{3,3}$ as a minor if and only if it contains a subdivision of $K_5$ or $K_{3,3}$ as a subgraph. Minors and subdivisions are those of [[def-graph-deletion-contraction-minor-and-subdivision]], and the two standard graphs are from [[def-standard-complete-bipartite-path-and-cycle-graphs]].

## Facts & Assumptions

**Given:** A finite graph $G$ containing at least one of the two stated obstructions in one of the two senses.

[F1] A graph $H$ is a minor of $G$ when it can be obtained by vertex deletions, edge deletions and edge contractions ([[def-graph-deletion-contraction-minor-and-subdivision]]).



## Proof

**Proof technique:** direct.

1.1 Choose a minor model with the fewest total vertices in its pairwise disjoint connected branch sets, and retain one model edge for each edge of the obstruction. Each branch set is then the minimal tree joining the endpoints of its incident model edges; otherwise a leaf or surplus edge could be removed. Attachment endpoints are allowed to coincide. [F1]

1.2 Conversely, contract every internally subdivided path of a $K_5$ or $K_{3,3}$ subdivision to one edge. By [F1] this produces the corresponding graph as a minor. [F1]

2.1 For a $K_{3,3}$ model, each branch tree carries at most three attachment incidences. A minimal tree joining at most three attachment vertices has a vertex from which internally disjoint arms reach all three incidences (zero-length arms are allowed when incidences coincide). Taking these six centres as branch vertices and adjoining the model edges therefore gives a subdivision of $K_{3,3}$. [step 1.1]

3.1 In a $K_5$ model, inspect the minimal subtree carrying the four attachment incidences in each branch tree, putting one unit of weight at each incidence even when several coincide. Starting at any vertex, move into a component of its deletion containing more than two incidences whenever such a component exists. This strictly advances through the finite minimal subtree, so it stops at a vertex $c$ for which every component of the deletion contains at most two incidences. If one contains two, the first edge from $c$ into it separates the incidences two from two. Otherwise each such component contains at most one, and the paths from $c$ to the incidences are internally disjoint, with zero-length arms for incidences at $c$. Thus every four-marked branch tree has either a four-arm centre or a $2$-$2$ edge. If every branch tree has a four-arm centre, those five centres and the model edges form a subdivision of $K_5$. Otherwise contract the two sides of a $2$-$2$ edge to vertices $a,b$, and contract the other four branch trees to vertices $u_1,u_2,u_3,u_4$, labelled so $a$ meets $u_1,u_2$ and $b$ meets $u_3,u_4$. Then the bipartition $\{a,u_3,u_4\}$ and $\{b,u_1,u_2\}$ displays a $K_{3,3}$ minor: $ab$, the four attachment edges at $a,b$, and the four model edges $u_i u_j$ across the two pairs supply its nine edges. Step 2.1 converts this minor model to a $K_{3,3}$ subdivision. [step 1.1, step 2.1]

4.1 Steps 2.1 and 3.1 prove the minor-to-subdivision implication for the union of the two obstructions, and step 1.2 proves the converse. [step 2.1, step 3.1, step 1.2] ∎
