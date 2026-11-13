---
title: The independent set I and remainder F
status: draft
research_item: def-independent-remainder-for-induction
dependency_level: 9
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning Assume without loss
      statement: Order the targets by decreasing beta and, in a tie, decreasing vertex
        order; choose an independent set I of H2 for which F = H2 - I has
        beta(F) < beta(H2) <= beta(H1).
      hypotheses: The preceding paragraph assumes that H1 and H2 are non-isomorphic
        connected graphs, each with an edge; the article considers graphs with
        at least one vertex.
      reading_limits: The frozen extracted article text was read at the cited passage.
        The reference attributes the formulation; the justification uses the
        declared mathematical suppliers.
---

PDF p. 3: ` Section 3, paragraph beginning Assume without loss `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-block-and-largest-block-order](item-def-block-and-largest-block-order)
- [lem-independent-set-decreases-largest-block](item-lem-independent-set-decreases-largest-block)
- [lem-target-ordering-and-forbidden-membership](item-lem-target-ordering-and-forbidden-membership)
- [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex)
- [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)
- [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)


## Definition

Let $H_1$ and $H_2$ be non-isomorphic finite connected simple graphs, each with an edge, labelled so that $\beta(H_1)\geq\beta(H_2)$ and, if equality holds, $|H_1|\geq|H_2|$. Here $|H|$ is the number of vertices of $H$. A graph is connected when every two vertices are joined by a path. A block is a maximal 2-connected subgraph, or a bridge together with its endpoints. A 2-connected graph has at least three vertices, is connected, and remains connected after deletion of any one vertex; a bridge is an edge whose deletion increases the number of connected components. For a nonempty graph with an edge, $\beta$ is the largest number of vertices in a block, and for a nonempty edgeless graph it is $1$.

Choose an independent set $I\subseteq V(H_2)$ such that $\beta(H_2-I)<\beta(H_2)$, and set $F=H_2-I$. Independent means that no edge of $H_2$ has both endpoints in $I$. The graph $H_2-I$ is induced on $V(H_2)\setminus I$: it has exactly the edges of $H_2$ with both endpoints remaining. Thus $F$ is nonempty and $\beta(F)<\beta(H_2)\leq\beta(H_1)$. The choice of $I$ is fixed for subsequent constructions; it need not be unique.

## Justification

The graph and block definitions make the hypotheses, ordering and parameter definite. The target-ordering result permits this labelling for the stated pair. The independent-deletion result supplies an independent set with the required strict inequality because $H_2$ is finite, connected and has an edge. Since an independent set cannot contain both endpoints of an edge, the nonempty-remainder result ensures that $H_2-I$ has a vertex. Vertex deletion then determines $F$ as the indicated induced graph, so $\beta(F)$ is defined; combining the strict inequality with the chosen ordering gives the displayed chain. Fixing any one eligible $I$ defines the data without asserting uniqueness. The path supplier defines the paths used in connectedness as finite lists of distinct vertices with an edge between each consecutive pair, allowing a one-vertex path. [def-article-graph-conventions](item-def-article-graph-conventions) [def-block-and-largest-block-order](item-def-block-and-largest-block-order) [lem-target-ordering-and-forbidden-membership](item-lem-target-ordering-and-forbidden-membership) [lem-independent-set-decreases-largest-block](item-lem-independent-set-decreases-largest-block) [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex) [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision) [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

## Definition references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-block-and-largest-block-order](item-def-block-and-largest-block-order)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
