---
title: High-girth hypergraphs for Construction 1
status: draft
research_item: thm-high-girth-high-chromatic-hypergraphs-cited
dependency_level: 5
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF pp. 1–2, Construction 1; p. 4, reference [3]
      statement: Construction 1 calls for an |H|-uniform hypergraph of girth at least
        q and chromatic number at least k+1, attributing its existence to Erdős
        and Hajnal.
      hypotheses: H is a graph with at least one vertex, q is an integer at least 3,
        and k is positive in the surrounding use.
      reading_limits: The frozen article text was read at these passages. This
        reference attributes the article assertion; it is not a proof premise.
        The cited Erdős–Hajnal paper was not inspected for this item.
---

PDF p. 1: ` Construction 1, final lines `; PDF p. 2: ` Construction 1, first sentence, citation [3] `; PDF p. 4: ` References [3] `

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology)
- [thm-external-finite-high-girth-weak-chromatic-hypergraphs](item-thm-external-finite-high-girth-weak-chromatic-hypergraphs)


## Statement

Let $H$ be a finite simple graph with at least one vertex, let $q\geq3$ be an integer, and let $k\geq1$ be an integer. There is a finite $|V(H)|$-uniform hypergraph of Berge girth at least $q$ with no weak $k$-colouring. If $|V(H)|\geq2$, its weak chromatic number is defined and at least $k+1$. If $|V(H)|=1$, the witness can be chosen with a singleton hyperedge and therefore has no defined weak chromatic number under the stated convention.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology)

[thm-external-finite-high-girth-weak-chromatic-hypergraphs](item-thm-external-finite-high-girth-weak-chromatic-hypergraphs)

## Facts & Assumptions

[F1] By [def-hypergraph-ramsey-construction-terminology](item-def-hypergraph-ramsey-construction-terminology), a finite $r$-uniform hypergraph has hyperedges of size $r$; a weak $k$-colouring assigns one of $k$ colours to each vertex and gives every hyperedge two differently coloured vertices. Its Berge girth is the least length of a Berge cycle, or infinity if no such cycle exists. A Berge cycle uses at least two distinct hyperedges. The weak chromatic number is the least positive palette size admitting a weak colouring, and is undefined if no such palette exists.

[F2] [thm-external-finite-high-girth-weak-chromatic-hypergraphs](item-thm-external-finite-high-girth-weak-chromatic-hypergraphs) supplies, for integers $r\geq2$, $q\geq3$ and $k\geq1$, a finite $r$-uniform hypergraph of Berge girth at least $q$ with no weak $k$-colouring and weak chromatic number at least $k+1$.

## Proof

**Given:** A graph $H$ and integers $q,k$ satisfying the statement's hypotheses.

**Goal:** Construct the asserted hypergraph and establish the stated chromatic conclusions.

1.1 Put $r=|V(H)|$. If $r\geq2$, apply F2 with these values of $r,q,k$. The resulting hypergraph has all the required properties, including the numerical chromatic bound. [given, F2, assume-case]

1.2 If $r=1$, take the hypergraph with vertex set $\{v\}$ and the single hyperedge $\{v\}$. It is finite and 1-uniform. It has no Berge cycle because a cycle requires at least two distinct hyperedges, so its girth is infinity and is at least $q$. Its singleton hyperedge cannot contain two differently coloured vertices, so no weak colouring exists for any positive palette; its weak chromatic number is therefore undefined. [given, F1, construct, assume-case]

2.1 The graph convention gives $r\geq1$, so the two cases establish the conclusion. [F1, step 1.1, step 1.2, cases-exhaustive] ∎

## Extraction notes

The article states the existence assertion using a chromatic-number inequality and attributes it to Erdős–Hajnal. For uniformity one, this item records the no-weak-colouring property used in Construction 1; the frozen finite-chromatic-number convention does not assign a numerical value to the singleton witness. The article passage does not explicitly settle that convention.
