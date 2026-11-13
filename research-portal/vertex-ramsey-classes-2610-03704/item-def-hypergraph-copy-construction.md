---
title: "Construction 1: graph G(H,q,k)"
status: draft
research_item: def-hypergraph-copy-construction
dependency_level: 6
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF pp. 1–2, Construction 1, through the definition of G
      statement: Construction 1 takes an |H|-uniform hypergraph of girth at least q
        and chromatic number at least k+1 and forms a graph on its vertex set
        from copies of H on the hyperedges.
      hypotheses: H is a graph with at least one vertex, q is an integer at least 3,
        and k is a positive integer in the surrounding use.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the construction and is not a proof premise;
        the works cited there were not inspected for this item.
---

PDF p. 1: ` Construction 1 `; PDF p. 2: ` Construction 1, definition of G `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology)
- [thm-high-girth-high-chromatic-hypergraphs-cited](item-thm-high-girth-high-chromatic-hypergraphs-cited)
- [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)


## Definition

Let $H=(V(H),E(H))$ be a finite simple graph with at least one vertex, let $q\geq3$ and $k\geq1$ be integers, and put $r=|V(H)|$. Choose a finite $r$-uniform hypergraph $\mathcal H=(V,\mathcal E)$ of Berge girth at least $q$ with no weak $k$-colouring. Here each hyperedge is an $r$-element subset of $V$; Berge girth is the least length of a Berge cycle, or infinity if there is none; and a weak $k$-colouring assigns one of $k$ colours to each vertex so that every hyperedge has two differently coloured vertices.

For each $e\in\mathcal E$, choose a bijection $f_e:V(H)\to e$ and define $E_e=\{\{f_e(x),f_e(y)\}:\{x,y\}\in E(H)\}$. The constructed graph is $G=(V,\bigcup_{e\in\mathcal E}E_e)$. Its piece on $e$ is the graph $(e,E_e)$, a copy of $H$ under $f_e$. We write $G(H,q,k)$ for a graph obtained by these choices; the notation does not specify a unique graph without the choices of $\mathcal H$ and the bijections.

## Definition references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology)

[thm-high-girth-high-chromatic-hypergraphs-cited](item-thm-high-girth-high-chromatic-hypergraphs-cited)

[def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Justification

The high-girth hypergraph theorem supplies a finite hypergraph with the stated properties for every allowed $r,q,k$. For $r\geq2$ its weak chromatic number is defined and at least $k+1$; for $r=1$ the theorem supplies a singleton-edge witness with no weak colouring, whose weak chromatic number is undefined under the adopted convention. Thus the no-weak-colouring condition states the property needed in both cases.

Each hyperedge $e$ and $V(H)$ have the same finite cardinality, so a bijection $f_e$ exists; the finite family of hyperedges permits these choices together. Injectivity makes the image of every edge of $H$ a two-element subset of $e$. The hyperedge-indexed realisation therefore defines a finite simple graph on $V$, and its specified transported piece is isomorphic to $H$ via $f_e$. Once the choices are fixed, the displayed edge-set formula determines $G$ uniquely.

## Extraction notes

The article describes the pieces as induced copies. That further assertion is treated separately; the definition above only places the edge sets and does not assume that other pieces add no edges inside a hyperedge.
