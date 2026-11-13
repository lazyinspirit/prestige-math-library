---
id: lem-construction-hyperedges-induce-copies
kind: lemma
title: Copies on hyperedges are induced
status: published
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - def-hypergraph-copy-construction
  - def-hyperedge-indexed-graph-realisation
  - def-berge-cycles-and-incidence-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-induced-embedding-and-induced-copy
  - math:def-injection-surjection-bijection
  - lem-berge-girth-three-implies-linear
  - lem-linear-realisation-preserves-each-induced-piece
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  def-hypergraph-copy-construction: mathematical-premise
  def-hyperedge-indexed-graph-realisation: mathematical-premise
  def-berge-cycles-and-incidence-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  lem-berge-girth-three-implies-linear: mathematical-premise
  lem-linear-realisation-preserves-each-induced-piece: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Construction 1, last two sentences
      statement: In G(H,q,k), each hyperedge of the underlying hypergraph induces the
        placed copy of H.
      hypotheses: H is a nonempty finite graph, q is an integer at least 3, and k is a
        positive integer in the construction.
      reading_limits: The frozen article text at the cited passage was read. This
        reference attributes the claim and is not used as its proof.
dependency_level: 7
---

## Statement

Let $H$ be a finite simple graph with at least one vertex, let $q\geq3$ and $k\geq1$ be integers, and fix the choices defining $G=G(H,q,k)$ in [[def-hypergraph-copy-construction]]. Write $\mathcal H=(V,\mathcal E)$ for its underlying hypergraph, $f_e:V(H)\to e$ for the chosen bijection, and $J_e=(e,E_e)$ for the transported piece on each $e\in\mathcal E$. Then the induced subgraph $G[e]$ equals $J_e$. Consequently $f_e$ is an induced embedding of $H$ in $G$, and $G[e]$ is an induced copy of $H$.

## Facts & Assumptions

[F1] By [[def-hypergraph-copy-construction]], $\mathcal H$ is finite of Berge girth at least $q$, each $f_e$ is a bijection, $E_e=\{\{f_e(x),f_e(y)\}:\{x,y\}\in E(H)\}$, and $G=(V,\bigcup_{e\in\mathcal E}E_e)$. Thus $G$ is the [[def-hyperedge-indexed-graph-realisation]] of the pieces $J_e$.

[F2] By [[lem-berge-girth-three-implies-linear]], distinct hyperedges of $\mathcal H$ intersect in at most one vertex. This is linearity in [[def-berge-cycles-and-incidence-graph]].

[F3] By [[lem-linear-realisation-preserves-each-induced-piece]], a finite linear hypergraph realisation induces each of its pieces; when the pieces are transported from a graph by bijections, those bijections are induced embeddings. Here $G[e]$ is the induced subgraph on $e$, as in [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]; the terms bijection and induced embedding and copy are as in [[math:def-injection-surjection-bijection]] and [[math:def-induced-embedding-and-induced-copy]].

## Proof

**Given:** The graph $H$, integers $q,k$, and fixed construction choices in the statement.

**Goal:** For every $e\in\mathcal E$, prove $G[e]=J_e$ and that $f_e$ exhibits an induced copy of $H$.

1.1 The construction gives a finite hypergraph of Berge girth at least $q\geq3$. Its distinct hyperedges intersect in at most one vertex, so it is linear. [given, F1, F2]

2.1 The graph $G$ is the hyperedge-indexed realisation of the pieces transported from $H$ by the bijections $f_e$. Applying the linear-realisation lemma to this finite linear hypergraph gives $G[e]=J_e$ for every $e$, and shows that each $f_e$ is an induced embedding whose image induces a copy of $H$. This is the desired conclusion. [F1, F3, step 1.1] ∎
