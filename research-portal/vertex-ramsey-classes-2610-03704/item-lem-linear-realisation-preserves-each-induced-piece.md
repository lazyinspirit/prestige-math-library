---
title: Linear realisations preserve induced pieces
status: published
research_item: lem-linear-realisation-preserves-each-induced-piece
dependency_level: 1
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)
- [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)


## Statement

Let $\mathcal H=(V,\mathcal E)$ be a finite linear hypergraph, let $J_e=(e,E_e)$ be a finite simple graph for each $e\in\mathcal E$, and let $R=(V,\bigcup_{e\in\mathcal E}E_e)$ be their hyperedge-indexed graph realisation. Then $R[e]=J_e$ for every $e\in\mathcal E$.

In particular, let $T=(W,F)$ be a finite simple graph and, for each $e\in\mathcal E$, choose a bijection $f_e:W\to e$ and put $E_e=\{\{f_e(x),f_e(y)\}:\{x,y\}\in F\}$. Then each $f_e$ is an induced embedding of $T$ in $R$, and $R[e]$ is an induced copy of $T$.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

## Facts & Assumptions

[F1] In the [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation), each $E_e$ consists of two-element subsets of $e$, and the edge set of $R$ is the union of the $E_e$.

[F2] By [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph), linearity means that distinct hyperedges have at most one common vertex.

[F3] By [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph), $R[e]$ has vertex set $e$ and exactly the edges of $R$ whose endpoints lie in $e$.

[F4] A bijection is injective and surjective by [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection). An induced embedding preserves and reflects adjacency on distinct vertices, and its image induces a copy, by [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy).

[F5] By [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph), every edge of a finite simple graph is a two-element subset of its vertex set, so its endpoints are distinct.

## Proof

**Given:** The hypergraph, pieces and realisation in the statement.

**Goal:** Prove $R[e]=J_e$ for every hyperedge and establish the stated template consequence.

1.1 Fix $e\in\mathcal E$. Every edge of $J_e$ belongs to $E(R)$ and has both endpoints in $e$; hence $E_e\subseteq E(R[e])$. [given, F1, F3, F5]

2.1 Conversely, let $\{u,v\}\in E(R[e])$. The endpoints are distinct and lie in $e$, and the union defining $E(R)$ supplies some $h\in\mathcal E$ with $\{u,v\}\in E_h$. Both vertices also lie in $h$. If $h\ne e$, then $e\cap h$ contains the two distinct vertices $u,v$, contrary to linearity. Thus $h=e$ and $\{u,v\}\in E_e$. The two graphs have the same vertex set $e$, so $R[e]=J_e$. [given, F1, F2, F3, F5, step 1.1]

3.1 In the template construction, fix $e$ and distinct $x,y\in W$. The transport formula gives the forward implication from $\{x,y\}\in F$ to $\{f_e(x),f_e(y)\}\in E_e$. Conversely, if the image pair belongs to $E_e$, the formula supplies an edge $\{a,b\}\in F$ with the same image pair; injectivity of $f_e$ gives $\{a,b\}=\{x,y\}$, so $\{x,y\}\in F$. Since $f_e$ is injective, its image pairs have distinct endpoints; by the equality just proved, this equivalence is also adjacency equivalence in $R$. Surjectivity gives $f_e(W)=e$, so $f_e$ is an induced embedding and $R[e]$ is its induced copy of $T$. [given, F1, F4, F5, step 2.1] ∎
