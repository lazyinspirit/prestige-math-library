---
id: lem-zykov-symmetrisation
kind: lemma
title: "Zykov symmetrisation turns an extremal clique-free graph into a complete multipartite graph without losing edges"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extremal-number-turan-graph-and-blowup, def-graph-adjacency-incidence-neighbourhood-and-degree, def-clique-and-independence-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Chapter 7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch7.pdf"
pipeline_run: null
---

## Statement

Let $r\ge1$, and let $G$ have the maximum number of edges among the $n$-vertex $K_{r+1}$-free graphs. By repeatedly replacing a vertex by a nonadjacent twin of another vertex, without decreasing the edge count or creating $K_{r+1}$, one reaches a complete $k$-partite graph with $k\le r$ and the same number of edges.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] $\operatorname{ex}(n,H)$ is the maximum edge count of an $n$-vertex graph with no ordinary copy of $H$ ([[def-extremal-number-turan-graph-and-blowup]]).

[F2] The open neighbourhood is $N_G(v)=\{u:\{u,v\}\in E\}$ and $\deg_G(v)=|N_G(v)|$ ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F3] A clique is a vertex set in which every two distinct vertices are adjacent ([[def-clique-and-independence-numbers]]).

## Proof

**Proof technique:** Zykov duplication with a finite potential.

1.1 Replacing $u$ by a twin of a nonneighbor $v$ creates no $K_{r+1}$: any new clique containing $u$ becomes a clique after replacing $u$ by $v$. Its edge-count change is $d(v)-d(u)$. Since $G$ is extremal, nonadjacent vertices must have equal degrees, or duplicating the higher-degree one would increase the edge count. Thus every such replacement preserves extremality. [given, F1, F2, F3]

2.1 Group vertices with equal open neighbourhoods into twin classes. If two nonadjacent vertices lie in different classes, duplicate every vertex of the smaller class into the larger class. Step 1.1 preserves the edge count, while the sum of the squares of twin-class sizes strictly increases. This integer is at most $n^2$, so finitely many repetitions reach a graph in which nonadjacent vertices have equal neighbourhoods. [step 1.1]

3.1 In the final graph, nonadjacency is transitive: if $u$ is nonadjacent to $v$ and $v$ to $w$, then $N(u)=N(v)=N(w)$, so $u$ is nonadjacent to $w$. Its equivalence classes are independent sets, and every pair of distinct classes is completely joined. The graph is therefore complete multipartite. Choosing one vertex from each nonempty part gives a clique, so the number of parts is at most $r$. [step 2.1, given, F2, F3]

4.1 Steps 1.1-3.1 give a terminating, edge-preserving symmetrisation from the extremal graph to the asserted complete multipartite graph. [step 1.1, step 2.1, step 3.1] ∎
