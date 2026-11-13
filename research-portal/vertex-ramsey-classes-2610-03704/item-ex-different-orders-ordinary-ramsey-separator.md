---
title: Complete-graph separator when orders differ
status: draft
research_item: ex-different-orders-ordinary-ramsey-separator
dependency_level: 3
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 3, ordinary classes, different-order case
      statement: For k at least 2 and n equal to the order of H1 and smaller than the
        order of H2, the complete graph on k(n-1)+1 vertices belongs to the
        ordinary k-colour vertex-Ramsey class of H1 but not that of H2.
      hypotheses: The graphs considered have at least one vertex, k is an integer at
        least 2, and the order of H1 is strictly smaller than that of H2.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the construction and claim; it is not used as
        proof.
---

PDF p. 2: ` Section 3, ordinary classes, different-order case `

## Prerequisites

- [def-vertex-ramsey-class](item-def-vertex-ramsey-class)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [lem-finite-palette-capacity](item-lem-finite-palette-capacity)
- [math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)


## Example

Let $H_1$ and $H_2$ be finite simple graphs with at least one vertex, let $k\geq2$ be an integer, and suppose $n=|H_1|<|H_2|$, where $|H|$ is the number of vertices of $H$. Put $G=K_{k(n-1)+1}$, the complete graph on $k(n-1)+1$ vertices. Then $G\in\mathcal R^k(H_1)\setminus\mathcal R^k(H_2)$, where $\mathcal R^k(H)$ consists of the graphs in which every vertex colouring with colours $1,\ldots,k$ has a monochromatic ordinary copy of $H$. An ordinary copy is a subgraph isomorphic to $H$; extra host edges between its vertices are allowed.

## Example references

[def-vertex-ramsey-class](item-def-vertex-ramsey-class)

[def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)

[math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Facts & Assumptions

[F1] The order of a finite graph is the cardinality of its vertex set ([def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)).

[F2] For a finite set $X$ and positive integers $k,n$, if $|X|>k(n-1)$, every function $X\to\{1,\ldots,k\}$ has a fibre with at least $n$ elements; if $|X|\leq kn$, such a function exists with every fibre of size at most $n$ ([lem-finite-palette-capacity](item-lem-finite-palette-capacity)).

[F3] A complete graph has an edge between every two distinct vertices ([math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)). An injective edge-preserving map from a graph into a host gives an ordinary copy on its image vertices and image edges ([def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)).

[F4] Membership in $\mathcal R^k(H)$ means that every function from the host vertex set to $\{1,\ldots,k\}$ has a monochromatic ordinary copy of $H$ ([def-vertex-ramsey-class](item-def-vertex-ramsey-class)).

[F5] A finite set of cardinality $m$ admits a bijection to $\{0,\ldots,m-1\}$; bijections preserve finite cardinality, and finite sets of equal cardinality admit a bijection ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)).

[F6] If $A$ is finite and $B\subseteq A$, then $B$ is finite and $|B|\leq|A|$ ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)).

## Verification

**Given:** Finite simple graphs $H_1,H_2$ with nonempty vertex sets, an integer $k\geq2$, $n=|H_1|<|H_2|$, and $G=K_{k(n-1)+1}$. **Goal:** Show that $G$ belongs to $\mathcal R^k(H_1)$ and does not belong to $\mathcal R^k(H_2)$.

1.1 Let $c$ be any $k$-colouring of $V(G)$. Since $|V(G)|=k(n-1)+1>k(n-1)$, a colour class contains at least $n$ vertices. Let $C$ be such a class. Since $C\subseteq V(G)$ and $V(G)$ is finite, F6 makes $C$ finite; put $m=|C|\geq n$. By F5 choose bijections $e:C\to\{0,\ldots,m-1\}$ and $b:V(H_1)\to\{0,\ldots,n-1\}$. The first $n$ indices belong to $\{0,\ldots,m-1\}$, so $f(x)=e^{-1}(b(x))$ defines an injection from $V(H_1)$ into $C$, bijective onto the vertices indexed by those first $n$ indices. Every edge of $H_1$ maps to an edge of $G$, because $G$ is complete. The map therefore gives a monochromatic ordinary copy of $H_1$. As $c$ was arbitrary, $G\in\mathcal R^k(H_1)$. [given, F1, F2, F3, F4, F5, F6, choose]

2.1 Since $k(n-1)+1\leq kn$, there is a $k$-colouring of $V(G)$ in which every colour class has at most $n$ vertices. If $J$ were a monochromatic ordinary copy of $H_2$, its isomorphism from $H_2$ would give a bijection $V(H_2)\to V(J)$. By F5, $|V(J)|=|V(H_2)|=|H_2|>n$. All vertices of $J$ would lie in one colour class $C$, which is finite by F6 since $C\subseteq V(G)$. Since $V(J)\subseteq C$, F6 gives $|V(J)|\leq|C|\leq n$, a contradiction. This colouring witnesses $G\notin\mathcal R^k(H_2)$. Together with step 1.1, this proves the stated separation. [given, F1, F2, F4, F5, F6, step 1.1] ∎
