---
title: Block incidence tree and containment contract
status: draft
research_item: thm-external-block-incidence-decomposition
dependency_level: 4
sources:
  references:
    - title: Reinhard Diestel, Graph Theory, sixth edition, Chapter 3
      url: https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch3.pdf
      locator: Section 3.1, printed p. 64 block definition/overlap paragraph; p. 65
        block graph definition; p. 66 Lemma 3.1.4
      statement: In a finite connected graph with an edge, distinct nontrivial blocks
        meet in at most one vertex; any common vertex is a cutvertex. Every edge
        belongs to one block. The bipartite incidence graph of blocks and
        cutvertices is a tree. Any 2-connected subgraph is contained in a block.
      hypotheses: Finite connected graph with an edge; 2-connected means at least
        three vertices; blocks here omit isolated vertices, irrelevant under
        these hypotheses.
      reading_limits: "For this repair, read the extracted text of the chapter preview
        at printed pp. 64–66: the block definition, overlap/cutvertex and
        edge-partition paragraph, the bipartite block graph definition and Lemma
        3.1.4. Rendered page images were requested but were not available as
        inspectable images through the tool response. Lemma 3.1.4 is stated
        without proof in this preview; its proof is not claimed reconstructed or
        audited. The 2-connected containment and edge-partition clauses also
        have the local intermediate proofs linked below. No other chapter proofs
        or original-article prerequisites are imported."
external_input: true
---

## Prerequisites

- [lem-author-3d61151c342f-finite-maximal-extension](item-lem-author-3d61151c342f-finite-maximal-extension)
- [lem-author-3d61151c342f-unique-edge-block](item-lem-author-3d61151c342f-unique-edge-block)
- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-bipartite-graph](https://alphabetamath.cc/item/def-bipartite-graph)
- [` Reinhard Diestel, Graph Theory, sixth edition, Chapter 3 · Section 3.1, printed p. 64 block definition/overlap paragraph; p. 65 block graph definition; p. 66 Lemma 3.1.4 `](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch3.pdf)


## Statement

In a finite connected graph with an edge, distinct nontrivial blocks meet in at most one vertex; any common vertex is a cutvertex. Every edge belongs to one block. The bipartite incidence graph of blocks and cutvertices is a tree. Any 2-connected subgraph is contained in a block.

## Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-bipartite-graph](https://alphabetamath.cc/item/def-bipartite-graph)

## External input

Diestel defines a block as a maximal connected subgraph without a cutvertex, and explicitly identifies its three possibilities: a maximal 2-connected subgraph, a bridge with its endpoints, or an isolated vertex (printed p. 64). A connected graph with an edge has no isolated vertex, so his blocks are exactly the nontrivial blocks in [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system). The same paragraph states that distinct blocks overlap in at most one vertex, which is then a cutvertex of the ambient graph, and that every edge lies in a unique block.

The block graph is defined on printed p. 65 using disjoint vertex classes consisting of the blocks and cutvertices, with adjacency precisely when the cutvertex belongs to the block. Lemma 3.1.4 on printed p. 66 states that this graph is a tree for a connected graph. Here a tree means a connected acyclic simple graph, as in [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph). Block nodes are formal labels distinct from vertex nodes, so the incidence graph is bipartite even if graph vertices themselves are sets.

The containment clause is independently established by [lem-author-3d61151c342f-finite-maximal-extension](item-lem-author-3d61151c342f-finite-maximal-extension), using finiteness and subgraph containment as in [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph). The edge-partition clause is independently established by [lem-author-3d61151c342f-unique-edge-block](item-lem-author-3d61151c342f-unique-edge-block), through its cycle, union and nonbridge prerequisites. These local proofs supplement the source; the overlap/cutvertex and incidence-tree assertions remain explicitly imported. No local proof or independent audit of those residual assertions is claimed.
