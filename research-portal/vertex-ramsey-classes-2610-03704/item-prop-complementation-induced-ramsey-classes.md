---
title: Complementation preserves distinction of induced classes
status: published
research_item: prop-complementation-induced-ramsey-classes
dependency_level: 3
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 2, paragraph after Construction 1
      statement: For graphs H1 and H2 and positive k, their induced k-colour
        vertex-Ramsey classes are distinct if and only if those of their
        complements are distinct.
      hypotheses: The article assumes all graphs considered have at least one vertex;
        k is positive.
      reading_limits: The frozen article text and rendered page were inspected at the
        cited passage. This reference attributes the formulation only; the proof
        below is local.
---

PDF p. 2: ` Section 2, paragraph after Construction 1 `

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [lem-complement-transports-induced-embeddings](item-lem-complement-transports-induced-embeddings)


## Statement

Let $H_1,H_2$ be finite simple graphs with at least one vertex, and let $k$ be a positive integer. Then $\mathcal R^k_{\mathrm{ind}}(H_1)\ne\mathcal R^k_{\mathrm{ind}}(H_2)$ if and only if $\mathcal R^k_{\mathrm{ind}}(\overline{H_1})\ne\mathcal R^k_{\mathrm{ind}}(\overline{H_2})$.

Here $\overline H$ has the same vertices as $H$ and precisely the edges between distinct vertices that are nonadjacent in $H$. The class $\mathcal R^k_{\mathrm{ind}}(H)$ consists of the nonempty finite simple graphs $G$ such that every function $V(G)\to\{1,\ldots,k\}$ has a monochromatic induced copy of $H$: an injective image on which both adjacency and nonadjacency agree with $H$ and all vertices have the same colour. Equality of these classes means equality of their membership predicates on such graphs.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)

## Facts & Assumptions

**Given:** Nonempty finite simple graphs $H_1,H_2$ and a positive integer $k$.

**Goal:** Prove the stated equivalence of inequalities of induced vertex-Ramsey classes.

[F1] A graph belongs to $\mathcal R^k_{\mathrm{ind}}(H)$ exactly when every $k$-colouring of its vertices contains a monochromatic induced copy of $H$ ([def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)).

[F2] Complementation preserves the vertex set and makes two distinct vertices adjacent exactly when they were nonadjacent ([def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)).

[F3] The same injection and vertex set transport monochromatic induced copies between $H$ in $G$ and $\overline H$ in $\overline G$, and complementing twice returns the original finite simple graph ([lem-complement-transports-induced-embeddings](item-lem-complement-transports-induced-embeddings)).

## Proof

**Proof technique:** direct.

1.1 Let $H$ and $G$ be nonempty finite simple graphs. They and their complements have the same respective vertex sets, so their vertex colourings are the same functions. For each such colouring, the induced-copy correspondence gives a monochromatic induced copy of $H$ in $G$ exactly when it gives one of $\overline H$ in $\overline G$. Therefore $G\in\mathcal R^k_{\mathrm{ind}}(H)$ if and only if $\overline G\in\mathcal R^k_{\mathrm{ind}}(\overline H)$. [F1, F2, F3]

2.1 If the classes of $H_1$ and $H_2$ differ, some nonempty finite simple graph $G$ belongs to exactly one of them. Applying step 1.1 to both targets shows that $\overline G$ belongs to exactly one of the classes of $\overline{H_1}$ and $\overline{H_2}$, so those classes differ. [given, step 1.1]

3.1 Conversely, if the classes of $\overline{H_1}$ and $\overline{H_2}$ differ, apply step 2.1 to those two nonempty finite simple graphs. Their complements are $H_1$ and $H_2$, so the original classes differ. This proves both implications. [given, F2, F3, step 2.1] ∎

## Extraction notes

The complement bars are preserved from the rendered PDF; the text extraction loses these bars.
