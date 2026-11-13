---
title: Rigidity of mutual ordinary embeddings
status: published
research_item: lem-finite-mutual-embedding-rigidity
dependency_level: 1
---

## Prerequisites

- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)
- [math:thm-two-element-subsets-count](https://alphabetamath.cc/item/thm-two-element-subsets-count)


## Statement

If finite simple graphs $J$ and $L$ admit ordinary embeddings in both directions, then $J\cong L$. Consequently, for two non-isomorphic finite simple graphs at least one direction of ordinary embedding fails. For induced embeddings, equal vertex orders and an induced embedding already imply isomorphism.

Here an ordinary embedding is an injective vertex map preserving edges; an induced embedding also reflects edges. The order of a graph is the cardinality of its vertex set, and an isomorphism is a bijection of vertex sets that preserves and reflects edges.

## Statement references

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Facts & Assumptions

[F1] A finite simple graph has a finite vertex set $V$, and its edge set satisfies $E\subseteq[V]^2$, where $[V]^2$ is the set of two-element subsets of $V$ ([math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)). For finite $V$, $[V]^2$ is finite ([math:thm-two-element-subsets-count](https://alphabetamath.cc/item/thm-two-element-subsets-count), first assertion), so its subset $E$ is finite ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), clause 1). An ordinary embedding is an injective vertex map taking edges to edges, and an induced embedding also reflects edges ([def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding), [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)).

[F2] An injection is a bijection onto its image. A bijection is both injective and surjective; its inverse is a bijection ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

[F3] Every injection from a finite set to itself is bijective. A subset of a finite set having the same cardinality as the whole set is the whole set ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)). A bijection transports finite cardinality ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)).

[F4] A graph isomorphism is a vertex bijection preserving and reflecting edges ([math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)).

## Proof

**Given:** Finite simple graphs $J,L$. For the first assertion suppose $f:V(J)\to V(L)$ and $g:V(L)\to V(J)$ are ordinary embeddings. For the last assertion suppose instead that $h:V(J)\to V(L)$ is an induced embedding and $|V(J)|=|V(L)|$.

**Goal:** Prove the stated isomorphism assertions and their non-isomorphic consequence.

1.1 The composite $f\circ g$ is an injection of the finite set $V(L)$ into itself, hence is surjective. Its image is contained in the image of $f$, so $f$ is surjective; it is injective by hypothesis and therefore bijective. [given, F1, F2, F3]

1.2 For each $G\in\{J,L\}$, finiteness of $V(G)$ gives finiteness of $[V(G)]^2$ and hence of its subset $E(G)$. Define $f_E:E(J)\to E(L)$ by $f_E(\{x,y\})=\{f(x),f(y)\}$, and define $g_E$ analogously. Edge preservation makes these maps well defined. Each is injective: equality of two image pairs and injectivity of the vertex map force equality of the two original pairs. Thus $f_E\circ g_E$ is an injection of the finite set $E(L)$ into itself and is surjective. Its image lies in the image of $f_E$, so $f_E$ is surjective. [given, F1, F3, construct]

2.1 If distinct $x,y\in V(J)$ have $\{f(x),f(y)\}\in E(L)$, surjectivity of $f_E$ supplies an edge $\{u,v\}\in E(J)$ with $\{f(u),f(v)\}=\{f(x),f(y)\}$. Injectivity of $f$ gives $\{u,v\}=\{x,y\}$, so $f$ reflects edges. It also preserves edges and is bijective; hence it is an isomorphism. Therefore non-isomorphic finite simple graphs cannot have ordinary embeddings in both directions. [step 1.1, step 1.2, F1, F4]

3.1 For the induced embedding $h$, its image is a subset of $V(L)$, and $h$ is a bijection onto that image. Cardinality transport gives $|h[V(J)]|=|V(J)|=|V(L)|$; finite-subset rigidity therefore gives $h[V(J)]=V(L)$. Thus $h$ is bijective, and its preservation and reflection of edges make it an isomorphism. This proves the remaining assertion. [given, F1, F2, F3, F4] ∎
