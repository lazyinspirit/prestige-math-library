---
title: Order, size, complement and independence number
status: draft
research_item: def-graph-order-size-complement-independence
dependency_level: 2
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF page 1, Section 2, first paragraph
      statement: The article denotes the order and size of a graph H by |H| and ||H||,
        its complement by an overline, and its independence number by alpha(H).
      hypotheses: The article considers graphs with at least one vertex.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the notation; it is not a proof or an
        independent prerequisite.
---

PDF p. 1: ` Section 2, first paragraph `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [math:thm-two-element-subsets-count](https://alphabetamath.cc/item/thm-two-element-subsets-count)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)


## Definition

Let $H=(V(H),E(H))$ be a finite simple graph with at least one vertex. Its **order** is $|H|:=|V(H)|$, and its **size** is $\|H\|:=|E(H)|$; here $|A|$ is the number of elements of a finite set $A$.

The **complement** $\overline H$ has vertex set $V(H)$ and edge set $\{\{u,v\}\subseteq V(H):u\ne v,\ \{u,v\}\notin E(H)\}$. Thus two distinct vertices are adjacent in $\overline H$ exactly when they are nonadjacent in $H$.

A set $S\subseteq V(H)$ is **independent** if no two distinct vertices in $S$ are adjacent in $H$. The **independence number** is $\alpha(H):=\max\{|S|:S\subseteq V(H)\text{ is independent}\}$, the largest cardinality of an independent set.

## Justification

The graph convention supplies a finite vertex set and an edge set consisting of pairs of distinct vertices. Put $P:=\{\{u,v\}\subseteq V(H):u\ne v\}$. The set $P$ is finite by [math:thm-two-element-subsets-count](https://alphabetamath.cc/item/thm-two-element-subsets-count), applied to the finite set $V(H)$. Since $E(H)\subseteq P$, [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set) shows that $E(H)$ is finite. The finite-cardinality definition therefore gives definite natural numbers for the order and size.

The displayed complement edge set consists precisely of the vertex pairs in $P$ absent from $E(H)$. It is a subset of the finite set $P$, so [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set) makes it finite as well. Together with the same nonempty vertex set, it defines the stated finite simple complement graph.

The independence-number definition supplies the maximum: the empty set is independent, and the cardinalities of independent sets form a nonempty bounded set of natural numbers. Consequently $\alpha(H)$ is well-defined.

## Definition references

[def-article-graph-conventions](item-def-article-graph-conventions)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[math:thm-two-element-subsets-count](https://alphabetamath.cc/item/thm-two-element-subsets-count)

[math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

## Source notes

The article introduces the symbols for order, size, complement and independence number in the cited paragraph. The explicit set descriptions and well-definedness explanation above make the conventions used here precise.
