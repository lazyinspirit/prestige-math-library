---
title: Completing a restricted target with universal clique vertices
status: published
research_item: lem-universal-clique-completes-a-restricted-target
dependency_level: 1
---

## Prerequisites

- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs)
- [math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-function](https://alphabetamath.cc/item/def-function)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)
- [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)
- [math:def-nat-order](https://alphabetamath.cc/item/def-nat-order)
- [math:lem-nat-add-cancellative](https://alphabetamath.cc/item/lem-nat-add-cancellative)
- [math:lem-nat-add-commutative](https://alphabetamath.cc/item/lem-nat-add-commutative)


## Statement

Let $J$ be a finite simple graph with $n$ vertices, and let $W\subseteq V(J)$ have $\ell$ vertices. Let $C$ be a set of $n-\ell$ vertices disjoint from $W$. Form the complete connection of $J[W]$ and the complete graph on $C$. It contains an ordinary copy of $J$: an embedding fixes every vertex of $W$ and maps $V(J)\setminus W$ bijectively onto $C$. This includes $\ell=0$ and $\ell=n$.

Here a finite simple graph has a finite vertex set and edges that are two-element subsets of it. The induced graph $J[W]$ has vertex set $W$ and precisely the edges of $J$ with both endpoints in $W$. The complete graph on $C$ has every two-element subset of $C$ as an edge. The complete connection retains the edges of both graphs and adds every edge with one endpoint on each side. An ordinary embedding is an injective vertex map preserving edges; an ordinary copy is a subgraph isomorphic to $J$, so extra edges between image vertices are allowed.

## Facts & Assumptions

**Given:** $J$, $W$, $n$, $\ell$, and $C$ as in the statement. Write $U=V(J)\setminus W$ and $G$ for the stated complete connection.

**Goal:** Construct an ordinary embedding $J\to G$ fixing $W$ and mapping $U$ bijectively onto $C$.

[F1] A subset of a finite set is finite and has cardinality at most that of the set. The cardinality of a disjoint union of two finite sets is the sum of their cardinalities. Equal finite cardinalities give a bijection. See [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule), [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality), and [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection).

[F2] For naturals $\ell\le n$, $n-\ell$ denotes the unique natural $q$ with $\ell+q=n$. Existence is the definition of $\ell\le n$. For uniqueness, if $\ell+q=\ell+q'$, commutativity gives $q+\ell=q'+\ell$, and right cancellation gives $q=q'$. See [math:def-nat-order](https://alphabetamath.cc/item/def-nat-order), [math:lem-nat-add-commutative](https://alphabetamath.cc/item/lem-nat-add-commutative), and [math:lem-nat-add-cancellative](https://alphabetamath.cc/item/lem-nat-add-cancellative).

[F3] Induced edges, complete graphs and complete connections have the edge sets described in the statement. An injective edge-preserving map yields an ordinary copy on its image vertices. See [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph), [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph), [math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs), [math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs), and [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding).

[F4] A function $f:A\to B$ assigns each element of $A$ exactly one value in $B$. See [math:def-function](https://alphabetamath.cc/item/def-function).

## Proof

**Proof technique:** direct construction.

1.1 The sets $W$ and $U$ are disjoint finite subsets of $V(J)$ with union $V(J)$. Thus $\ell\le n$ and $n=\ell+|U|$. By the characterization of $n-\ell$, $|U|=n-\ell=|C|$. Choose a bijection $b:U\to C$. This also applies if either set is empty. [given, F1, F2]

2.1 Define $f(v)=v$ for $v\in W$ and $f(v)=b(v)$ for $v\in U$. The two domains partition $V(J)$, so each vertex receives exactly one value in $W\cup C=V(G)$; thus this defines a function $f:V(J)\to V(G)$. The two image sets $W$ and $C$ are disjoint. Since the identity on $W$ and $b$ are injective, $f$ is injective; it fixes $W$ and maps $U$ bijectively onto $C$. [step 1.1, given, F1, F3, F4]

3.1 Let $\{x,y\}$ be an edge of $J$. If both endpoints lie in $W$, it is an edge of $J[W]$ and hence of $G$. If both lie in $U$, their distinct images lie in $C$ and are adjacent in the complete graph on $C$. If one lies in each part, their images are adjacent by the complete connection. Therefore $f$ preserves every edge of $J$. [step 2.1, F3]

4.1 The map $f$ is consequently an ordinary embedding, and its image vertices and image edges form an ordinary copy of $J$ in $G$. The construction and checks remain valid when $W$ or $U$ is empty, giving the two stated boundary cases. [step 1.1, step 2.1, step 3.1, F3] ∎
