---
id: def-substitution-of-a-graph-for-a-vertex
kind: definition
title: "Substituting one graph for a vertex of another"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Huang, Y. Ju and R. Zhou, Erdős–Hajnal beyond the five-vertex path, sec. 1.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Definition

Let $G_1$ and $G_2$ be finite simple graphs ([[def-finite-simple-graph]]), let
$a\in V(G_1)$, and assume $V(G_2)\ne\varnothing$ and

$$(V(G_1)\setminus\{a\})\cap V(G_2)=\varnothing .$$

The graph obtained by **substituting $G_2$ for $a$ in $G_1$**, written
$G_1[a\to G_2]$, has vertex set

$$V\big(G_1[a\to G_2]\big):=(V(G_1)\setminus\{a\})\cup V(G_2),$$

a union of two disjoint sets, and for distinct vertices $p,q$ of that set the
pair $\{p,q\}$ is an edge exactly in the following three situations
([[def-graph-adjacency-incidence-neighbourhood-and-degree]]):

* **(S1)** $p,q\in V(G_1)\setminus\{a\}$ and $\{p,q\}\in E(G_1)$;
* **(S2)** $p,q\in V(G_2)$ and $\{p,q\}\in E(G_2)$;
* **(S3)** one of $p,q$ lies in $V(G_1)\setminus\{a\}$, the other lies in
  $V(G_2)$, and the vertex in $V(G_1)\setminus\{a\}$ is adjacent to $a$ in
  $G_1$.

Because the two parts of the vertex set are disjoint, every pair of distinct
vertices falls under exactly one of the three situations, so the edge set is
well defined and $G_1[a\to G_2]$ is again a finite simple graph. The construction
replaces $a$ by a copy of $G_2$ whose members all inherit the adjacencies $a$
had, and the induced subgraphs on the two parts are $G_1-a$ and $G_2$
([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

**The disjointness required is only between $V(G_1)\setminus\{a\}$ and
$V(G_2)$.** The substituted vertex $a$ may itself belong to $V(G_2)$. This is
what lets a graph be written as a substitution using two of its own induced
subgraphs, with no renaming of vertices; the sources state the construction for
graphs with disjoint vertex sets, which is the special case $a\notin V(G_2)$,
and the two agree up to isomorphism ([[def-graph-isomorphism-and-complement]]).

**$G_2$ must be nonnull.** If $V(G_2)$ were empty the construction would delete
$a$ rather than replace it, and the vertex sets of $G_1$ and $G_1[a\to G_2]$
would not correspond.
