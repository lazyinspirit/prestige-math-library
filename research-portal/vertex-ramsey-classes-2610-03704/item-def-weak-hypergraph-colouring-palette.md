---
title: Weak hypergraph colourings with singleton boundary
status: draft
research_item: def-weak-hypergraph-colouring-palette
dependency_level: 1
---

## Prerequisites

- [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)
- [math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)
- [math:thm-well-ordering-principle](https://alphabetamath.cc/item/thm-well-ordering-principle)
- [math:thm-omega-is-peano-system](https://alphabetamath.cc/item/thm-omega-is-peano-system)
- [math:lem-nat-nonzero-is-successor](https://alphabetamath.cc/item/lem-nat-nonzero-is-successor)
- [math:lem-nat-order-is-membership](https://alphabetamath.cc/item/lem-nat-order-is-membership)
- [math:lem-nat-discrete](https://alphabetamath.cc/item/lem-nat-discrete)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)


## Definition

A finite hypergraph here is a pair $\mathcal H=(V,E)$ in which $V$ is a finite set and $E$ is a set of subsets of $V$; members of $V$ are vertices and members of $E$ are hyperedges. For a positive integer $k$, a **weak $k$-colouring** is a function $c:V\to[k]=\{1,\ldots,k\}$ such that no hyperedge is monochromatic: for every $e\in E$ there are $x,y\in e$ with $c(x)\ne c(y)$. Colours need not all be used.

If a weak $k$-colouring exists for some positive integer $k$, the **weak chromatic number** $\chi_w(\mathcal H)$ is the least such $k$. Otherwise no finite weak chromatic number is assigned. In particular, this convention assigns $1$ to the hypergraph with empty vertex set and no edges.

For an $r$-uniform hypergraph, every hyperedge has exactly $r$ vertices. If $r\geq2$, its weak chromatic number is defined. If it has a singleton hyperedge, it has no weak $k$-colouring for any positive integer $k$. An empty hyperedge likewise prevents every weak colouring.

## Justification

The given finite-colouring definition supplies the palette, functions and monochromatic subsets, including the convention that the empty set is monochromatic. Thus the displayed condition is exactly the absence of monochromatic hyperedges, and a singleton or empty hyperedge cannot satisfy it.

The admissible positive integers form a subset of the natural numbers by separation. If this subset is nonempty, the well-ordering principle gives a least element; that element is unique. For an $r$-uniform hypergraph with $r\geq2$ and nonempty $V$, let $n=|V|$. The finite-cardinality supplier gives $n\ne0$ and a bijection $b:V\to n$, where $n=\{0,\ldots,n-1\}$. Define $s_n(m)=\sigma(m)$ for $m\in n$.

For natural numbers $u,v$, the membership-order supplier gives $u\in v$ if and only if $u<v$, and $u\in\sigma(v)$ if and only if $u\leq v$; discreteness gives $u<v$ if and only if $\sigma(u)\leq v$. If $m\in n$, then $m<n$, hence $\sigma(m)\leq n$ and $\sigma(m)\in\sigma(n)$. Also $\sigma(m)\ne0$ by the Peano-system supplier. Thus $s_n(m)\in[n]=\{i\in\sigma(n):i\ne0\}$. Conversely, if $i\in[n]$, then $i$ is a nonzero natural number and $i\leq n$. The nonzero-successor supplier gives $i=\sigma(m)$ for a natural number $m$. Discreteness now gives $m<n$, so $m\in n$ and $s_n(m)=i$. This proves surjectivity onto $[n]$. Successor injectivity from the Peano-system supplier proves that $s_n$ is injective, so $s_n:n\to[n]$ is a bijection.

Define $c(v)=s_n(b(v))$ for $v\in V$. If $c(v)=c(w)$, injectivity of $s_n$ gives $b(v)=b(w)$, and injectivity of $b$ gives $v=w$. For any $i\in[n]$, surjectivity of $s_n$ gives $m\in n$ with $s_n(m)=i$, and surjectivity of $b$ gives $v\in V$ with $b(v)=m$, so $c(v)=i$. Thus $c:V\to[n]$ is a bijection. It assigns different colours to different vertices, so each hyperedge contains two differently coloured vertices. If $V$ is empty, there are no $r$-element hyperedges and the empty function is a weak $1$-colouring. Hence the admissible set is nonempty in both cases. For the explicitly edgeless empty-vertex hypergraph, $1$ is the least positive integer, so its weak chromatic number is $1$.

## Definition references

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)

[math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)

[math:thm-well-ordering-principle](https://alphabetamath.cc/item/thm-well-ordering-principle)

[math:thm-omega-is-peano-system](https://alphabetamath.cc/item/thm-omega-is-peano-system)

[math:lem-nat-nonzero-is-successor](https://alphabetamath.cc/item/lem-nat-nonzero-is-successor)

[math:lem-nat-order-is-membership](https://alphabetamath.cc/item/lem-nat-order-is-membership)

[math:lem-nat-discrete](https://alphabetamath.cc/item/lem-nat-discrete)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
