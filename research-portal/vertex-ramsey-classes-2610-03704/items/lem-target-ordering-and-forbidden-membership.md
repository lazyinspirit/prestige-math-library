---
id: lem-target-ordering-and-forbidden-membership
kind: lemma
title: Ordering targets and excluding H1 from H2
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-block-and-largest-block-order
  - def-induced-forbidden-class
  - def-graph-order-size-complement-independence
  - def-ordinary-edge-preserving-embedding
  - lem-block-containment-under-subgraph-embeddings
  - lem-finite-mutual-embedding-rigidity
  - math:def-induced-embedding-and-induced-copy
  - math:def-finite-cardinality
  - math:thm-subset-of-a-finite-set
  - math:def-graph-walk-trail-path-and-cycle
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-block-and-largest-block-order: mathematical-premise
  def-induced-forbidden-class: mathematical-premise
  def-graph-order-size-complement-independence: mathematical-premise
  def-ordinary-edge-preserving-embedding: mathematical-premise
  lem-block-containment-under-subgraph-embeddings: mathematical-premise
  lem-finite-mutual-embedding-rigidity: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: contradiction
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning Assume without loss
      statement: For non-isomorphic connected graphs each containing an edge, the
        article orders the targets by decreasing largest block order and then
        decreasing vertex order, and asserts that H2 belongs to Forb(H1).
      hypotheses: The graphs are connected, non-isomorphic and each has an edge; all
        graphs considered have at least one vertex.
      reading_limits: The frozen article text was read at the cited passage. This
        reference attributes the formulation only and is not a proof premise.
dependency_level: 4
---

## Statement

Let $H_1,H_2$ be non-isomorphic connected finite simple graphs, each containing an edge. Label them so that $\beta(H_1)\geq\beta(H_2)$ and, if equality holds, $|H_1|\geq|H_2|$. Then $H_2\in\operatorname{Forb}(H_1)$.

Here $|H|$ is the number of vertices of $H$. A graph is connected if every two vertices are joined by a path. A block is a maximal 2-connected subgraph, or the subgraph consisting of a bridge and its endpoints; 2-connected means having at least three vertices, being connected, and remaining connected after any one vertex is deleted. A bridge is an edge whose deletion increases the number of connected components. Since each target has an edge, $\beta(H)$ is the largest number of vertices in a block of $H$. Finally, $G\in\operatorname{Forb}(H)$ means that $G$ contains no induced copy of $H$: there is no injective vertex map preserving and reflecting adjacency between distinct vertices.

## Statement references

[[def-article-graph-conventions]]

[[def-block-and-largest-block-order]]

[[def-graph-order-size-complement-independence]]

[[def-induced-forbidden-class]]

[[math:def-induced-embedding-and-induced-copy]]

[[math:def-graph-walk-trail-path-and-cycle]]

## Facts & Assumptions

[F1] An induced embedding is an injective vertex map preserving and reflecting adjacency; in particular it is an ordinary embedding, an injective vertex map preserving edges. An induced copy exists exactly when such an embedding exists. [[math:def-induced-embedding-and-induced-copy]] [[def-ordinary-edge-preserving-embedding]]

[F2] An ordinary embedding of one nonempty finite simple graph into another implies that the largest-block parameter of the first is at most that of the second. The parameter $b$ in that result equals $\beta$ under the block convention used here. [[lem-block-containment-under-subgraph-embeddings]] [[def-block-and-largest-block-order]]

[F3] An injection between finite vertex sets is a bijection onto its image; the image has the cardinality of the domain and, as a subset of the target, has cardinality at most that of the target. [[math:def-finite-cardinality]] [[math:thm-subset-of-a-finite-set]]

[F4] An induced embedding between finite simple graphs of equal vertex order is an isomorphism. [[lem-finite-mutual-embedding-rigidity]]

[F5] Membership in $\operatorname{Forb}(H)$ is precisely the absence of an induced copy of $H$. [[def-induced-forbidden-class]]

## Proof

**Given:** Non-isomorphic connected finite simple graphs $H_1,H_2$, each with an edge, ordered as in the statement.

**Goal:** Show that $H_2$ contains no induced copy of $H_1$.

1.1 Suppose that $H_2$ contains an induced copy of $H_1$. Its induced embedding is an ordinary embedding, so block monotonicity gives $\beta(H_1)\leq\beta(H_2)$. The given reverse inequality therefore forces equality. In particular, if the first inequality in the ordering were strict, the supposed copy would already be impossible. [given, F1, F2, assume-contra]

2.1 In the equality case, the ordering gives $|H_1|\geq|H_2|$. The induced embedding is injective, so finite cardinality gives $|H_1|\leq|H_2|$. Hence the vertex orders are equal. [given, step 1.1, F1, F3]

3.1 The induced embedding between these equal-order finite graphs is an isomorphism, contradicting the assumption that $H_1$ and $H_2$ are non-isomorphic. Thus no induced copy exists, and $H_2\in\operatorname{Forb}(H_1)$ by definition. [given, step 2.1, F4, F5, discharge-contradiction] ∎
