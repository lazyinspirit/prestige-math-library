---
title: Small 2-connected subgraphs localise in high-girth pieces
status: published
research_item: lem-small-two-connected-subgraphs-in-high-girth-realisations
dependency_level: 2
---

## Prerequisites

- [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)
- [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)
- [lem-small-hyperedge-support-has-incidence-forest](item-lem-small-hyperedge-support-has-incidence-forest)
- [lem-two-connected-subgraphs-in-incidence-forest-realisations](item-lem-two-connected-subgraphs-in-incidence-forest-realisations)
- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)
- [math:thm-well-ordering-principle](https://alphabetamath.cc/item/thm-well-ordering-principle)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)


## Statement

Let $R$ be a graph realisation over a finite hypergraph of Berge girth at least an integer $q\geq3$. If a 2-connected graph $B$ with $m$ edges and $m<q$ occurs as an ordinary subgraph of $R$, then that occurrence is contained in one hyperedge piece. Every occurrence of $K_2$ is likewise contained in a piece. Consequently, if every piece excludes $B$ as an ordinary subgraph, then so does $R$, whenever $B$ is 2-connected with fewer than $q$ edges or $B=K_2$.

Here an occurrence of a graph $B$ in a graph $X$ means an ordinary subgraph $H$ of $X$ that is isomorphic to $B$. Excluding $B$ means having no such occurrence. Containment of an occurrence in a piece means containment of both its vertex set and its edge set in that piece.

## Facts & Assumptions

[F1] A finite hypergraph is a finite vertex set $V$ with a set $\mathcal E$ of subsets called hyperedges. Its realisation has vertex set $V$ and edge set $\bigcup_{e\in\mathcal E}E(J_e)$, where the piece $J_e$ has vertex set $e$. An ordinary subgraph has vertex and edge sets contained in those of its ambient graph. [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] A 2-connected graph has at least three vertices, is connected, and remains connected after deletion of any one vertex. $K_2$ is the graph consisting of two vertices and their single edge. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F3] Berge girth is the least length of a Berge cycle, or infinity if no such cycle exists. For fewer than $q$ selected hyperedges of a finite hypergraph of Berge girth at least $q$, the incidence graph induced by their hyperedge nodes and their incident vertex nodes is a forest. A forest is a graph without cycles. [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph) [lem-small-hyperedge-support-has-incidence-forest](item-lem-small-hyperedge-support-has-incidence-forest) [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[F4] In a realisation of a finite hypergraph whose incidence graph is a forest, every 2-connected subgraph is contained in one piece. Finite cardinality counts distinct members of a finite set. [lem-two-connected-subgraphs-in-incidence-forest-realisations](item-lem-two-connected-subgraphs-in-incidence-forest-realisations) [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[F5] A graph isomorphism $f:B\to H$ is a bijection of vertex sets preserving and reflecting adjacency between distinct vertices. [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[F6] A path is a finite vertex list with distinct vertices and adjacent consecutive vertices. A graph is connected when its vertex set is nonempty and every two vertices are joined by a path. [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F7] A finite set of cardinality $m$ admits a listing without repetition $a_0,\ldots,a_{m-1}$, and a bijection transports finiteness and cardinality. A subset of a finite set is finite and has no larger cardinality. Every nonempty subset of $\mathbb N$ has a least element. A map is injective when equal images force equal arguments, surjective when every member of its codomain is an image, and bijective when both conditions hold. [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality) [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set) [math:thm-well-ordering-principle](https://alphabetamath.cc/item/thm-well-ordering-principle) [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

## Proof

**Given:** A realisation $R$ of a finite hypergraph of Berge girth at least $q\geq3$, and an occurrence $H$ in $R$ of a 2-connected graph $B$ having $m<q$ edges.

**Goal:** Place $H$ in one piece, establish the corresponding assertion for $K_2$, and deduce the exclusion statement.

1.1 By the occurrence convention, choose an isomorphism $f:B\to H$. The map $\{u,v\}\mapsto\{f(u),f(v)\}$ is a bijection from $E(B)$ to $E(H)$: adjacency preservation makes it well-defined, injectivity of $f$ makes it injective on unordered pairs, and adjacency reflection and surjectivity of $f$ make it surjective. Thus $H$ has $m$ edges, and the vertex bijection gives it at least three vertices. Applying $f$ to a path preserves distinctness of its vertices and adjacency of consecutive vertices. Paths in the connected graph $B$ therefore show that $H$ is connected. For any vertex $h=f(v)$ of $H$, paths between any two other preimages in $B$ after deletion of $v$ map to paths between the corresponding vertices of $H$ avoiding $h$. Thus $H$ remains connected after deletion of any one vertex, so $H$ is 2-connected. [given, F2, F4, F5, F6, choose]

2.1 For each of the finitely many edges of $H$, choose one hyperedge whose piece supplies that edge; such a hyperedge exists by the union defining $R$. Denote the chosen hyperedge for an edge $a$ by $c(a)$, and let $\mathcal F=\{c(a):a\in E(H)\}$. Choose a listing without repetition $a_0,\ldots,a_{m-1}$ of $E(H)$, which exists by its cardinality $m$. [F1, F7, step 1.1, choose]

3.1 For each $e\in\mathcal F$, the set of indices $i$ with $0\leq i<m$ and $c(a_i)=e$ is a nonempty subset of $\mathbb N$. Let $i(e)$ be its least element, supplied by F7, and set $D=\{a_{i(e)}:e\in\mathcal F\}\subseteq E(H)$. The map $e\mapsto a_{i(e)}$ is surjective onto $D$ by its definition. It is injective because $a_{i(e)}=a_{i(e')}$ implies $e=c(a_{i(e)})=c(a_{i(e')})=e'$. Thus its inverse, which sends $a\in D$ to $c(a)$, is a bijection from $D$ to $\mathcal F$. The finite-subset bound makes $D$ finite with $|D|\leq|E(H)|=m$. Cardinality transport along this bijection makes $\mathcal F$ finite with $|\mathcal F|=|D|\leq m<q$. [given, F7, step 1.1, step 2.1, construct]

4.1 Form the restricted hypergraph $(V,\mathcal F)$ and realise it using the same pieces indexed by $\mathcal F$. Its realisation has vertex set $V$ and contains every edge of $H$ by the choice of $c$, so $H$ is its ordinary subgraph. [F1, step 2.1, step 3.1, construct]

5.1 By the support-forest result, the incidence graph on the selected hyperedge nodes and their incident vertex nodes is a forest. The incidence graph of $(V,\mathcal F)$ adds only isolated vertex nodes, which cannot belong to a cycle, and is therefore also a forest. The forest-realisation result now puts the 2-connected subgraph $H$ inside one selected piece. That piece is also a piece of $R$. [given, F1, F3, F4, step 1.1, step 3.1, step 4.1]

6.1 An occurrence of $K_2$ consists of one edge and its endpoints, since its isomorphism with $K_2$ is a vertex bijection preserving and reflecting adjacency. The edge belongs to some piece by the defining union, and that piece contains its endpoints; hence the occurrence is contained in that piece. If $B$ is as in the final assertion and an occurrence existed in $R$, step 5.1 or this argument would put it in a piece, contrary to the assumed exclusion. [F1, F2, F5, step 5.1] ∎
