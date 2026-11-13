---
title: Reduction to connected targets
status: draft
research_item: lem-equal-induced-classes-connectivity-reduction
dependency_level: 13
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 3, final paragraph; PDF p. 3, Section 3, paragraph
        immediately after Figure 1
      statement: Under equality of the induced vertex-Ramsey classes, the targets are
        either both connected or both disconnected; complementation reduces the
        argument to connected targets.
      hypotheses: The article considers nonempty graphs and the argument takes k at
        least 2 and non-isomorphic targets.
      reading_limits: The frozen extracted article text was read at the cited
        passages. This reference attributes the reduction; the proof below uses
        the stated local suppliers.
---

PDF p. 2: ` Section 3, final paragraph `; PDF p. 3: ` Section 3, paragraph immediately after Figure 1 `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)
- [def-ramsey-repetition-property](item-def-ramsey-repetition-property)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [lem-ramsey-repetition-iff-connected](item-lem-ramsey-repetition-iff-connected)
- [prop-complementation-induced-ramsey-classes](item-prop-complementation-induced-ramsey-classes)
- [lem-complement-of-disconnected-graph-connected](item-lem-complement-of-disconnected-graph-connected)
- [lem-complement-transports-induced-embeddings](item-lem-complement-transports-induced-embeddings)


## Statement

Let $k\geq2$ be an integer and let $H_1,H_2$ be non-isomorphic finite simple graphs with nonempty vertex sets. If $\mathcal R^k_{\mathrm{ind}}(H_1)=\mathcal R^k_{\mathrm{ind}}(H_2)$, then $H_1$ and $H_2$ are either both connected or both disconnected. In the latter case their complements are connected, non-isomorphic, and have equal induced $k$-colour vertex-Ramsey classes. Thus an equal-class pair of non-isomorphic targets can be replaced, if necessary, by such a pair of connected targets.

Here connected means that every two vertices are joined by a path. An isomorphism is a bijection preserving and reflecting adjacency. The complement $\overline H$ has the same vertices as $H$ and has an edge between two distinct vertices exactly when $H$ does not. The class $\mathcal R^k_{\mathrm{ind}}(H)$ consists of the nonempty finite simple graphs $G$ for which every function $V(G)\to\{1,\ldots,k\}$ has a monochromatic induced copy of $H$: an injective image preserving and reflecting adjacency on which the function is constant. Equality means equality of membership for every such $G$.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

[def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

## Facts & Assumptions

**Given:** An integer $k\geq2$ and non-isomorphic nonempty finite simple graphs $H_1,H_2$ with equal induced $k$-colour vertex-Ramsey classes.

**Goal:** Prove the common connectivity status and the stated reduction by complementation.

[F1] A nonempty finite simple graph $H$ has the Ramsey repetition property at positive $k$ exactly when it is connected. The property says that for every nonempty finite simple graph $A$ and positive integer $q$, $A$ belongs to $\mathcal R^k_{\mathrm{ind}}(H)$ exactly when $qA$ does. Here $qA$ is the disjoint union of $q$ copies of $A$. [lem-ramsey-repetition-iff-connected](item-lem-ramsey-repetition-iff-connected) [def-ramsey-repetition-property](item-def-ramsey-repetition-property) [def-disjoint-graph-multiple](item-def-disjoint-graph-multiple)

[F2] For nonempty finite simple targets and positive $k$, their induced $k$-colour vertex-Ramsey classes are distinct exactly when the corresponding classes of their complements are distinct. [prop-complementation-induced-ramsey-classes](item-prop-complementation-induced-ramsey-classes)

[F3] The connected components of a nonempty finite graph partition its vertices. A disconnected graph therefore has at least two connected components, and the complement of a finite simple graph with at least two connected components is connected. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set) [lem-complement-of-disconnected-graph-connected](item-lem-complement-of-disconnected-graph-connected)

[F4] Complementation keeps the vertex set and reverses adjacency for distinct vertices; complementing twice returns the original finite simple graph. An isomorphism preserves and reflects adjacency. [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement) [lem-complement-transports-induced-embeddings](item-lem-complement-transports-induced-embeddings)

## Proof

**Proof technique:** direct.

1.1 Equality of the two class membership predicates applies both to $A$ and to $qA$, for every nonempty finite simple graph $A$ and positive integer $q$. Consequently the equivalence defining the repetition property holds for $H_1$ exactly when it holds for $H_2$. By F1, $H_1$ is connected exactly when $H_2$ is connected. [given, F1]

2.1 Suppose both targets are disconnected. By F3, each has at least two connected components, so both complements are connected. The complements have equal induced classes: otherwise F2 would imply that the original classes are distinct, contrary to the hypothesis. [given, F2, F3, step 1.1]

3.1 If an isomorphism existed between the complements, then, because it preserves and reflects adjacency and complementation reverses adjacency on distinct pairs, the same bijection would be an isomorphism between the twice-complemented graphs $H_1$ and $H_2$. This contradicts their non-isomorphism. Thus the complements are non-isomorphic. If the original targets are connected, retain them; otherwise step 2.1 and this step give the required connected pair. [given, F4, step 1.1, step 2.1] ∎

## Source notes

The cited article passage attributes the reduction. The argument here spells out the repetition-property comparison and the preservation of non-isomorphism under complementation.
