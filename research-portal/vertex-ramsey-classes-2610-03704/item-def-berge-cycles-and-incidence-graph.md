---
title: Berge cycles, incidence graphs and girth
status: published
research_item: def-berge-cycles-and-incidence-graph
dependency_level: 0
sources:
  references:
    - title: Maria Axenovich and Annette Karrer, High girth hypergraphs with
        unavoidable monochromatic or rainbow edges, arXiv:1607.06600v2
      url: https://arxiv.org/html/1607.06600
      locator: Section 1, cycle and girth paragraph immediately before Theorem 1
      statement: A hypergraph cycle of length $s\geq2$ uses distinct edges
        $e_0,\ldots,e_{s-1}$ and distinct vertices $x_0,\ldots,x_{s-1}$ with
        $x_i\in e_i\cap e_{i+1}$ cyclically; girth is the shortest cycle length,
        or infinity if there is no cycle.
      hypotheses: Hypergraph with distinct hyperedges and cycle vertices; indices are
        taken modulo the cycle length.
      reading_limits: The Section 1 cycle and girth paragraph was read. The source is
        used for that convention, not for the incidence-graph construction or a
        proof of another result.
---

## Prerequisites

- [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product)
- [` Maria Axenovich and Annette Karrer, High girth hypergraphs with unavoidable monochromatic or rainbow edges, arXiv:1607.06600v2 · Section 1, cycle and girth paragraph immediately before Theorem 1 `](https://arxiv.org/html/1607.06600)


## Definition

A finite hypergraph is a pair $\mathcal H=(V,\mathcal E)$ where $V$ is a finite set and $\mathcal E$ is a set of subsets of $V$; its members are hyperedges. Its incidence graph is the finite simple graph whose vertex set is $(V\times\{0\})\cup(\mathcal E\times\{1\})$ and whose edges are exactly the pairs $\{(v,0),(e,1)\}$ for which $v\in e$. Its two displayed vertex sets are the parts of the graph: every graph edge joins one part to the other.

A Berge cycle of length $s\geq2$ consists of distinct hyperedges $e_0,\ldots,e_{s-1}$ and distinct vertices $x_0,\ldots,x_{s-1}$ such that $x_i\in e_i\cap e_{i+1}$ for every $i$, with indices modulo $s$. The Berge girth is the least length of a Berge cycle, or $\infty$ if no Berge cycle exists; $\infty$ is greater than every integer. The hypergraph is linear if any two distinct hyperedges have at most one common vertex.

## Definition references

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product)

## Justification

The tags $0$ and $1$ distinguish the two kinds of node even when a vertex is itself a hyperedge. The two parts and the incidence-edge set are finite; each incidence edge has two distinct endpoints and is an unordered pair, so this construction is a finite simple graph. An $r$-uniform hypergraph in the cited definition is a special case of the finite hypergraphs defined here. The possible cycle lengths lie between $2$ and both $|V|$ and $|\mathcal E|$, so a nonempty set of possible lengths has a least element; the separate $\infty$ convention covers the empty case. Linearity is a definite condition on pairs of hyperedges.
