---
id: lem-greedy-set-independent-meets-blocks
kind: lemma
title: The greedy set is independent and meets every block
status: published
origin: pipeline
domain: mathematics
deps:
  - alg-independent-block-transversal
  - def-block-cutvertex-tree-terminology
  - def-graph-order-size-complement-independence
  - lem-rooted-block-exposure-separation
  - math:thm-induction-principle
  - math:def-finite-simple-graph
  - math:def-connected-graph-and-connected-component
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
dependency_roles:
  alg-independent-block-transversal: mathematical-premise
  def-block-cutvertex-tree-terminology: mathematical-premise
  def-graph-order-size-complement-independence: mathematical-premise
  lem-rooted-block-exposure-separation: mathematical-premise
  math:thm-induction-principle: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: induction
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, independent-set paragraph, final sentence
      statement: A new vertex in the greedy procedure has no earlier neighbours except
        possibly the attachment vertex, so the chosen set is independent and
        meets every block.
      hypotheses: The graph is connected and has an edge; the procedure starts at a
        root block and processes blocks away from it.
      reading_limits: The frozen extracted article text was read at the cited
        paragraph. This reference attributes the claim; the proof below uses the
        stated local suppliers instead.
dependency_level: 7
---

## Statement

Let $H$ be a finite connected simple graph with at least one edge, and run [[alg-independent-block-transversal]] with any permitted choices. A block means a maximal 2-connected subgraph or a bridge with its endpoints. The procedure chooses a root block and then processes the other blocks in nondecreasing distance from it in the block-cutvertex tree, with arbitrary tie order; each nonroot block has an attachment vertex on its path to the root.

At each nonroot block, a newly chosen vertex has no neighbour among vertices chosen earlier, except possibly its attachment vertex. The output $I$ is independent, meaning that no two distinct vertices of $I$ are adjacent, and $I$ meets every block of $H$.

## Facts & Assumptions

[F1] The greedy procedure chooses one vertex in the root block. For a subsequent block with attachment vertex $a$, it chooses nothing if $a$ is already chosen and otherwise adds a vertex of that block other than $a$. Choices can be made at every required stage, and there are finitely many stages. [[alg-independent-block-transversal]]

[F2] For this rooted ordering, each vertex of a nonroot block other than its attachment vertex has no neighbour among the vertices of earlier blocks except possibly the attachment vertex. [[lem-rooted-block-exposure-separation]]

[F3] The block-cutvertex tree has block and cutvertex nodes joined by incidence; the attachment vertex is the cutvertex represented by the node immediately following the nonroot block node on its path to the root. [[def-block-cutvertex-tree-terminology]]

[F4] A set of vertices is independent exactly when no two distinct vertices in it are adjacent. Finite induction permits a property verified initially and preserved at each successive stage to hold after every stage. [[def-graph-order-size-complement-independence]] [[math:thm-induction-principle]]

## Proof

**Given:** The graph, rooted block ordering, and permitted choices in the statement.

**Goal:** Establish the asserted neighbour property and prove that the output is independent and meets every block.

1.1 Before a nonroot block $B$ is processed, every previously chosen vertex lies in an earlier processed block: the root choice lies in the root block, and every later addition lies in the block being processed. If a vertex $x$ is newly chosen in $B$, then $x$ is different from the attachment vertex $a$. By the exposure property, $x$ has no neighbour among vertices of earlier blocks except possibly $a$. Hence it has no earlier chosen neighbour except possibly $a$. [F1, F2, F3]

2.1 Induct over the processed blocks, maintaining that the chosen set is independent and meets every block already processed. After the root stage, the set has one vertex, so it is independent and meets the root block. At a later block $B$, if its attachment vertex $a$ is already chosen, no vertex is added and $B$ is met at $a$. Otherwise a vertex $x$ of $B$ other than $a$ is added. By step 1.1, its only possible earlier chosen neighbour is $a$, which is not chosen; hence adding $x$ preserves independence, and $x$ meets $B$. No vertices are removed, so all earlier blocks remain met. [F1, F3, F4, step 1.1, base, ih]

3.1 The finite induction therefore gives both properties after all blocks have been processed. The resulting set is the output $I$, which is independent and meets every block of $H$. [F1, F4, step 2.1, discharge-induction] ∎
