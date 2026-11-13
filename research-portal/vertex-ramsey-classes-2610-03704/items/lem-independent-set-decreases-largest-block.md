---
id: lem-independent-set-decreases-largest-block
kind: lemma
title: Independent deletion decreases beta
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - def-block-and-largest-block-order
  - def-graph-order-size-complement-independence
  - def-cutvertex-and-nontrivial-block-system
  - alg-independent-block-transversal
  - lem-greedy-set-independent-meets-blocks
  - lem-block-hitting-vertex-deletion-lowers-block-order
  - lem-independent-deletion-leaves-a-vertex
  - math:def-graph-deletion-contraction-minor-and-subdivision
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  def-block-and-largest-block-order: mathematical-premise
  def-graph-order-size-complement-independence: mathematical-premise
  def-cutvertex-and-nontrivial-block-system: mathematical-premise
  alg-independent-block-transversal: mathematical-premise
  lem-greedy-set-independent-meets-blocks: mathematical-premise
  lem-block-hitting-vertex-deletion-lowers-block-order: mathematical-premise
  lem-independent-deletion-leaves-a-vertex: mathematical-premise
  math:def-graph-deletion-contraction-minor-and-subdivision: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning Observe that
      statement: If H is connected and has an edge, there is an independent set I such
        that beta(H-I) is less than beta(H).
      hypotheses: The article considers graphs with at least one vertex; H is
        connected and has an edge.
      reading_limits: The frozen article text was inspected at the cited passage. This
        citation attributes the formulation; the proof below uses the stated
        local suppliers.
dependency_level: 8
---

## Statement

If $H$ is a finite connected simple graph with an edge, there is an independent set $I\subseteq V(H)$ such that $\beta(H-I)<\beta(H)$.

An independent set contains no two adjacent distinct vertices. The graph $H-I$ is the induced graph on $V(H)\setminus I$. A block is a maximal 2-connected subgraph or a bridge together with its endpoints; a 2-connected graph has at least three vertices, is connected, and remains connected after deletion of any one vertex, and a bridge is an edge whose deletion increases the number of components. For a nonempty graph with an edge, $\beta$ is the largest number of vertices in a block; for a nonempty edgeless graph, $\beta=1$.

## Facts & Assumptions

[F1] On a finite connected simple graph with an edge, the block-transversal procedure can be carried out and outputs a vertex set $I$. Its output is independent and meets every block. [[alg-independent-block-transversal]] [[lem-greedy-set-independent-meets-blocks]]

[F2] If a finite simple graph has an edge and $I$ is independent, then deletion of $I$ leaves a nonempty finite graph. Vertex deletion produces the induced graph on the remaining vertices. [[lem-independent-deletion-leaves-a-vertex]] [[math:def-graph-deletion-contraction-minor-and-subdivision]]

[F3] If a set $S$ meets every nontrivial block of a finite connected simple graph $J$ with an edge and $J-S$ is nonempty, then $b(J-S)<b(J)$, where $b$ is the largest nontrivial-block order for a graph with an edge and is $1$ for a nonempty edgeless graph. [[lem-block-hitting-vertex-deletion-lowers-block-order]]

[F4] The blocks in the statement are exactly the nontrivial blocks defining $b$, and $\beta=b$ on every nonempty finite simple graph under these conventions. Independence has the meaning stated above. [[def-block-and-largest-block-order]] [[def-cutvertex-and-nontrivial-block-system]] [[def-graph-order-size-complement-independence]]

## Proof

**Given:** A finite connected simple graph $H$ with an edge.

**Goal:** Find an independent $I\subseteq V(H)$ with $\beta(H-I)<\beta(H)$.

1.1 Run the block-transversal procedure on $H$ and take its output $I$. The hypotheses permit the procedure, and its output is independent and meets every block of $H$. [F1, given]

2.1 Since $H$ has an edge and $I$ is independent, $H-I$ is nonempty and finite. The blocks met by $I$ are exactly the nontrivial blocks used in the definition of $b$. Applying the block-hitting deletion result to $H$ and $I$ gives $b(H-I)<b(H)$. [F2, F3, F4, step 1.1]

3.1 Both $H$ and $H-I$ are nonempty finite simple graphs, so $\beta=b$ for each. Thus $\beta(H-I)<\beta(H)$, and the independent set $I$ has the required properties. [F2, F4, step 1.1, step 2.1] ∎
