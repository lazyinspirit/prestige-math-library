---
title: Transport, restriction and relabelling of finite colourings
status: published
research_item: lem-finite-colouring-transport-and-restriction
dependency_level: 1
---

## Prerequisites

- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)
- [math:lem-nat-order-is-membership](https://alphabetamath.cc/item/lem-nat-order-is-membership)
- [math:thm-omega-is-peano-system](https://alphabetamath.cc/item/thm-omega-is-peano-system)
- [math:lem-inverse-relations-composites-and-restrictions-are-sets](https://alphabetamath.cc/item/lem-inverse-relations-composites-and-restrictions-are-sets)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)


## Statement

Let $H,J,G$ be finite simple graphs, $f:J\to G$ an ordinary embedding of their vertex sets, and $c:V(G)\to[k]$ a $k$-colouring, where $k$ is a positive natural number and $[k]=\{1,\ldots,k\}$. If $h:H\to J$ is an ordinary embedding whose image vertices are monochromatic under $c\circ f$, then $f\circ h$ is an ordinary embedding with monochromatic image vertices under $c$. If both $f$ and $h$ are induced embeddings, their composite is induced.

For $S\subseteq V(G)$, the restriction $c|_S$ is a $k$-colouring of $S$; a subset of $S$ is monochromatic for this restriction exactly when it is monochromatic for $c$. If $P=c[V(G)]$ is the used palette and $r:P\to Q$ is injective, then $r\circ c:V(G)\to Q$ has exactly the same monochromatic vertex subsets as $c$.

More generally, let $d:X\to Q$ be a function on a finite set with finite used palette $P=d[X]$. If $|P|\le i$ for a positive natural number $i$, then there is an injection $r:P\to[i]$, so $r\circ d$ is an $i$-colouring with exactly the same monochromatic subsets. No palette label is required to occur; in particular, the assertion includes the empty used palette.

## Statement references

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Facts & Assumptions

[F1] A finite colouring has a finite domain and is a function into its stated palette; a subset is monochromatic when all its pairs of elements have equal colours. Colours need not all be used ([def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F2] An ordinary embedding is an injective vertex map preserving edges; it determines an ordinary copy on its image vertices and image edges. An induced embedding also reflects edges between distinct vertices ([def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding), [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)).

[F3] An injection identifies equal inputs whenever their images are equal. A finite set $P$ of cardinality $m$ has a bijection onto the von Neumann natural number $m$ ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection), [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)).

[F4] For von Neumann naturals, $m\le i$ implies $m\subseteq i$; successor $\sigma(t)=t\cup\{t\}$ is injective and never zero, and $[i]=\sigma(i)\setminus\{0\}$ ([math:lem-nat-order-is-membership](https://alphabetamath.cc/item/lem-nat-order-is-membership), [math:thm-omega-is-peano-system](https://alphabetamath.cc/item/thm-omega-is-peano-system), [math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers), [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F5] Composites and restrictions of the relevant functions are sets; their values are given by the usual composition and restriction rules ([math:lem-inverse-relations-composites-and-restrictions-are-sets](https://alphabetamath.cc/item/lem-inverse-relations-composites-and-restrictions-are-sets)).

[F6] Every subset of a finite set is finite ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), Statement, clause 1).

## Proof

**Given:** The graphs, embeddings, colourings, subsets and finite palettes in the statement.

**Goal:** Establish transport, restriction and injective relabelling of monochromatic copies, and construct the stated $i$-colouring.

1.1 The composite $f\circ h$ is injective: equality of two composite values first gives equality of their $h$-values by injectivity of $f$, then equality of their inputs by injectivity of $h$. An edge of $H$ maps to an edge of $J$ under $h$ and then to an edge of $G$ under $f$. Thus the composite is an ordinary embedding. If its two vertices are images of vertices $x,y$ of $H$, their $c$-colours are $(c\circ f)(h(x))$ and $(c\circ f)(h(y))$, which agree by the given monochromaticity. Its image edges therefore form a monochromatic ordinary copy in $G$. [F1, F2, F3, F5, given]

1.2 Since $V(G)$ is finite and $S\subseteq V(G)$, F6 gives that $S$ is finite. Restriction gives a function $S\to[k]$ with the same value as $c$ at each vertex of $S$. Thus $c|_S$ is a $k$-colouring of $S$, and all pairwise colour equalities on a subset of $S$ are unchanged. For $x,y\in V(G)$, equality $c(x)=c(y)$ implies $r(c(x))=r(c(y))$, and the converse follows from injectivity of $r$ because both values lie in $P$. Thus injective relabelling preserves and reflects monochromaticity, including for the empty subset. Applied to image vertex sets, these equivalences preserve monochromatic ordinary and induced copies whenever the relevant copy is contained in the restricted set. [F1, F2, F3, F5, F6, given]

2.1 If $f$ and $h$ are induced, an edge between the composite images of distinct vertices of $H$ reflects through $f$ to an edge between their $h$-images, and then through $h$ to an edge of $H$. The $h$-images are distinct by injectivity. Together with edge preservation from step 1.1, this makes the composite induced; its induced image is monochromatic by step 1.1. [F2, F3, step 1.1, given]

3.1 Put $m=|P|$ and choose a bijection $b:P\to m$. Since $m\le i$, each $b(p)$ belongs to $i$; its successor belongs to $\sigma(i)$ and is nonzero. Hence $r(p)=\sigma(b(p))$ lies in $[i]$. Both $b$ and successor are injective, so $r$ is injective. If $P$ is empty this is the empty injection. Consequently $r\circ d$ is a function $X\to[i]$, and step 1.2's same equality argument shows that it has exactly the monochromatic subsets of $d$. No surjectivity onto $[i]$ is used. [F1, F3, F4, F5, step 1.2, given, construct] ∎
