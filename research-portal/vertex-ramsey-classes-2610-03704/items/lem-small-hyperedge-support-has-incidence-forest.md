---
id: lem-small-hyperedge-support-has-incidence-forest
kind: lemma
title: Small edge supports in a high-girth hypergraph
status: published
origin: pipeline
domain: mathematics
deps:
  - def-berge-cycles-and-incidence-graph
  - math:def-cycles-trees-and-forests-in-a-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-finite-cardinality
dependency_roles:
  def-berge-cycles-and-incidence-graph: mathematical-premise
  math:def-cycles-trees-and-forests-in-a-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $q$ be a positive integer and let $\mathcal H=(V,\mathcal E)$ be a finite hypergraph of Berge girth at least $q$. For any $\mathcal F\subseteq\mathcal E$ with $|\mathcal F|<q$, the subgraph of the incidence graph induced by the hyperedge nodes belonging to $\mathcal F$ and all vertices incident with those hyperedges is a forest.

More precisely, for every integer $s\geq2$, Berge cycles of length $s$ using hyperedges in $\mathcal F$ correspond to incidence-graph cycles of length $2s$ in this induced subgraph, up to the choice of starting point and direction.

## Statement references

[[def-berge-cycles-and-incidence-graph]]

[[math:def-cycles-trees-and-forests-in-a-simple-graph]]

[[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[[math:def-finite-cardinality]]

## Facts & Assumptions

[F1] In [[def-berge-cycles-and-incidence-graph]], the incidence graph has tagged vertex nodes $(v,0)$ and hyperedge nodes $(e,1)$, with an edge exactly when $v\in e$. A Berge cycle of length $s\geq2$ has distinct hyperedges $e_i$ and distinct vertices $x_i$ satisfying $x_i\in e_i\cap e_{i+1}$ cyclically. Berge girth is the least such length, or infinity if there is no such cycle.

[F2] By [[math:def-cycles-trees-and-forests-in-a-simple-graph]], a cycle is a closed walk of length at least three with no repeated vertex except its endpoint, and a forest is a graph without cycles. An induced subgraph retains exactly the edges of the ambient graph between its selected vertices, as in [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]].

[F3] The cardinality of a finite set counts its distinct members, as in [[math:def-finite-cardinality]].

## Proof

**Given:** A finite hypergraph $\mathcal H$ of Berge girth at least $q$ and a family $\mathcal F$ of fewer than $q$ hyperedges. Let $I_{\mathcal F}$ be the induced subgraph specified in the statement.

**Goal:** Establish the cycle correspondence and prove that $I_{\mathcal F}$ is a forest.

1.1 Let $e_0,\ldots,e_{s-1}$ and $x_0,\ldots,x_{s-1}$ form a Berge cycle with all $e_i\in\mathcal F$. The alternating sequence $(e_0,1),(x_0,0),(e_1,1),(x_1,0),\ldots,(e_{s-1},1),(x_{s-1},0),(e_0,1)$ is a closed walk in $I_{\mathcal F}$: each consecutive pair is incident, and every displayed node belongs to the selected vertex set. The hyperedge nodes are distinct, the vertex nodes are distinct, and the tags separate the two kinds. Thus it is a graph cycle of length $2s$. This includes $s=2$, where the four tagged nodes are distinct. [F1, F2, construct]

2.1 Conversely, every edge of $I_{\mathcal F}$ joins a vertex node to a hyperedge node. A cycle in it therefore alternates between the two kinds. Its length is even and at least four, say $2s$ with $s\geq2$. Starting at a hyperedge node and choosing a direction gives the sequence in step 1.1; distinctness of the graph-cycle nodes makes the $e_i$ distinct and the $x_i$ distinct, while its edges give $x_i\in e_i\cap e_{i+1}$ cyclically. All $e_i$ lie in $\mathcal F$, so these data form a Berge cycle of length $s$. The two constructions recover the same cyclic sequence, apart from starting point and direction. [F1, F2, step 1.1]

3.1 If $I_{\mathcal F}$ had a cycle, step 2.1 would give a Berge cycle of length $s$ with $s$ distinct hyperedges in $\mathcal F$. Hence $s\leq|\mathcal F|<q$, contradicting the assumed Berge girth. Thus $I_{\mathcal F}$ has no cycle and is a forest; isolated selected vertices cannot create a cycle. [given, F1, F2, F3, step 2.1] ∎
