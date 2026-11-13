---
title: Hypergraph terminology used in Construction 1
status: draft
research_item: def-hypergraph-ramsey-construction-terminology
dependency_level: 2
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Construction 1; PDF p. 2, Construction 1, continuation
      statement: Construction 1 takes an integer q at least 3 and an |H|-uniform
        hypergraph of girth at least q and chromatic number at least k+1; the
        text uses the girth condition to assert that distinct hyperedges meet in
        at most one vertex.
      hypotheses: H is a graph under the article's nonempty-vertex convention; q is an
        integer at least 3.
      reading_limits: The frozen article text at the cited passages was read. This
        reference attributes the construction's formulation; it is not an
        independent proof of a prerequisite. The article does not separately
        define hypergraph girth there.
---

PDF p. 1: ` Construction 1 `; PDF p. 2: ` Construction 1, continuation `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)
- [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)
- [def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)


## Definition

Let $H$ be a finite simple graph with at least one vertex, and write $r=|V(H)|$. An $r$-uniform hypergraph $\mathcal H=(V,\mathcal E)$ consists of a finite vertex set $V$ and a set $\mathcal E$ of $r$-element subsets of $V$, called hyperedges.

For a positive integer $k$, a weak $k$-colouring of $\mathcal H$ is a function $c:V\to\{1,\ldots,k\}$ for which every hyperedge contains two vertices assigned different colours. Its weak chromatic number $\chi_w(\mathcal H)$ is the least positive $k$ for which such a colouring exists, if one exists; otherwise it is undefined. Thus $\chi_w(\mathcal H)\geq k+1$ includes the requirement that this number be defined. In particular, a singleton hyperedge prevents every weak colouring; if $r\geq2$, a finite $r$-uniform hypergraph has a defined weak chromatic number.

For this treatment, a Berge cycle of length $s\geq2$ consists of distinct hyperedges $e_0,\ldots,e_{s-1}$ and distinct vertices $x_0,\ldots,x_{s-1}$ with $x_i\in e_i\cap e_{i+1}$, indices taken modulo $s$. The Berge girth is the least such length, or $\infty$ if there is no Berge cycle, with $\infty$ larger than every integer. The construction's girth requirement is interpreted as Berge girth at least an integer $q\geq3$.

## Definition references

[def-article-graph-conventions](item-def-article-graph-conventions)

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

## Justification

The graph convention makes $r$ a positive integer, and the uniform-hypergraph definition specifies the finite vertex set and the hyperedges. The weak-colouring supplier gives the least-colour convention and establishes both the singleton-edge obstruction and existence of the number for finite uniform hypergraphs with $r\geq2$. The Berge-cycle supplier specifies the least-length and infinite-girth conventions. These choices make each term definite, including when there is no cycle or no weak colouring.

If two distinct hyperedges share two distinct vertices, those edges and vertices form a Berge cycle of length two. Consequently Berge girth at least $q\geq3$ implies that distinct hyperedges meet in at most one vertex, as required in the construction.

## Extraction notes

The article uses uniformity, chromatic number and a girth lower bound, and invokes the resulting intersection property. It does not separately define hypergraph girth at the cited passage. The Berge convention above is an explicit choice for this treatment; it is not attributed to an explicit definition in the article. This item does not assert the existence of a hypergraph satisfying the construction's parameters.
