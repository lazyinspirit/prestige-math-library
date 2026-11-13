---
id: thm-distinct-induced-vertex-ramsey-classes
kind: theorem
title: Induced part of Theorem 1.1
status: published
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-induced-vertex-ramsey-class
  - def-block-and-largest-block-order
  - def-independent-remainder-for-induction
  - def-recursive-induced-separator-graphs
  - prop-one-colour-ramsey-distinction
  - lem-equal-induced-classes-connectivity-reduction
  - ex-single-vertex-induced-ramsey-separator
  - lem-independent-set-decreases-largest-block
  - lem-target-ordering-and-forbidden-membership
  - prop-base-graph-for-induced-separation
  - ex-final-induced-ramsey-separator
  - math:def-graph-isomorphism-and-complement
  - math:def-induced-embedding-and-induced-copy
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  def-block-and-largest-block-order: mathematical-premise
  def-independent-remainder-for-induction: mathematical-premise
  def-recursive-induced-separator-graphs: mathematical-premise
  prop-one-colour-ramsey-distinction: mathematical-premise
  lem-equal-induced-classes-connectivity-reduction: mathematical-premise
  ex-single-vertex-induced-ramsey-separator: mathematical-premise
  lem-independent-set-decreases-largest-block: mathematical-premise
  lem-target-ordering-and-forbidden-membership: mathematical-premise
  prop-base-graph-for-induced-separation: mathematical-premise
  ex-final-induced-ramsey-separator: mathematical-premise
  math:def-graph-isomorphism-and-complement: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Theorem 1.1, second inequality; PDF pp. 2–4, Section 3
      statement: For any two non-isomorphic graphs H1 and H2 and any positive integer
        k, their induced k-colour vertex-Ramsey classes are distinct.
      hypotheses: The article assumes that all graphs considered have at least one vertex.
      reading_limits: The frozen article text was inspected at the cited passages.
        This reference attributes the theorem; the proof below uses the declared
        local suppliers.
dependency_level: 18
---

## Statement

For any two non-isomorphic finite simple graphs $H_1,H_2$ with at least one vertex each and any positive integer $k$, $\mathcal R^k_{\mathrm{ind}}(H_1)\ne\mathcal R^k_{\mathrm{ind}}(H_2)$.

An isomorphism is a vertex bijection preserving and reflecting adjacency. The induced $k$-colour vertex-Ramsey class $\mathcal R^k_{\mathrm{ind}}(H)$ consists of the nonempty finite simple graphs $G$ such that every map $V(G)\to\{1,\ldots,k\}$ has a monochromatic induced copy of $H$. Such a copy is the image of an injective vertex map preserving and reflecting adjacency, with all image vertices assigned the same colour. Equality of classes means equality of membership for every such $G$.

## Statement references

[[def-article-graph-conventions]]

[[def-induced-vertex-ramsey-class]]

[[math:def-graph-isomorphism-and-complement]]

[[math:def-induced-embedding-and-induced-copy]]

## Facts & Assumptions

[F1] Non-isomorphic nonempty finite simple graphs have distinct induced one-colour vertex-Ramsey classes. [[prop-one-colour-ramsey-distinction]]

[F2] For $k\geq2$, an equal-class pair of non-isomorphic nonempty finite simple graphs can be replaced, if necessary by taking both complements, by an equal-class pair of non-isomorphic connected graphs. A graph is connected if every two vertices are joined by a path. [[lem-equal-induced-classes-connectivity-reduction]]

[F3] If one of two non-isomorphic connected nonempty finite simple targets is the one-vertex complete graph $K_1$, then $K_1$ belongs to its induced class and not to the other's. Every connected nonempty simple graph not isomorphic to $K_1$ has an edge. [[ex-single-vertex-induced-ramsey-separator]]

[F4] For connected non-isomorphic finite simple graphs with edges, label the targets so that $\beta(H_1)\geq\beta(H_2)$ and, in case of equality, $|V(H_1)|\geq|V(H_2)|$. Here a block is a maximal 2-connected subgraph or a bridge with its endpoints; 2-connected means connected, having at least three vertices, and remaining connected after deletion of any one vertex. A bridge is an edge whose deletion increases the number of connected components. For a graph with an edge, $\beta$ is the largest block order; for a nonempty edgeless graph it is $1$. With this labelling $H_2$ contains no induced copy of $H_1$. [[def-block-and-largest-block-order]] [[lem-target-ordering-and-forbidden-membership]]

[F5] For connected $H_2$ with an edge, there is an independent set $I$ such that $F=H_2-I$ is nonempty and $\beta(F)<\beta(H_2)$. Independent means that no two vertices in $I$ are adjacent; $H_2-I$ is the induced graph on the remaining vertices. For the ordered targets and any positive $k$, there is a finite simple graph $A$ containing no induced copy of $H_1$ such that every $k$-colouring of $A$ has a monochromatic induced copy of $F$. [[lem-independent-set-decreases-largest-block]] [[def-independent-remainder-for-induction]] [[prop-base-graph-for-induced-separation]]

[F6] Given the ordered connected targets with edges, such an independent set $I$, remainder $F$ and base graph $A$, the recursive induced-separator construction starts with $A_1=H_2$ and attaches copies of the preceding graph to a copy of $A$ at each subsequent stage. For $k\geq2$, its final graph $A_k$ belongs to $\mathcal R^k_{\mathrm{ind}}(H_2)$ and not to $\mathcal R^k_{\mathrm{ind}}(H_1)$. [[def-recursive-induced-separator-graphs]] [[ex-final-induced-ramsey-separator]]

## Proof

**Given:** Non-isomorphic nonempty finite simple graphs $H_1,H_2$ and a positive integer $k$.

**Goal:** Show that their induced $k$-colour vertex-Ramsey classes differ.

1.1 If $k=1$, the conclusion follows from F1. Suppose henceforth that $k\geq2$ and, for a contradiction, that the two classes are equal. By F2, replace the targets if necessary by their complements and retain the names $H_1,H_2$; the resulting targets are connected, non-isomorphic and still have equal induced classes. [given, F1, F2, assume-contra]

2.1 If either target is isomorphic to $K_1$, it has exactly one vertex and is a copy of $K_1$. Composing an induced embedding with this isomorphism shows that its induced Ramsey class is the same as that of $K_1$. F3 then gives a graph belonging to exactly one of the two classes, contradicting equality. Hence neither target is isomorphic to $K_1$, and F3 says that each has an edge. [given, F3, step 1.1]

3.1 Relabel the targets in the order specified in F4. By F5 choose an independent set $I$ of $H_2$ whose nonempty remainder $F=H_2-I$ satisfies $\beta(F)<\beta(H_2)$. The base-graph existence result in F5 then supplies a graph $A$ with no induced $H_1$ and with a monochromatic induced $F$ in every $k$-colouring. These choices satisfy the hypotheses of F6. [F4, F5, step 1.1, step 2.1, choose]

4.1 Construct $A_k$ as in F6. It is in the induced $k$-colour Ramsey class of $H_2$ and outside that of $H_1$, contradicting equality of the classes. Thus the classes differ for $k\geq2$ as well. Together with the one-colour case, this proves the statement. [F6, step 1.1, step 3.1, discharge-contradiction] ∎

## Source notes

The article citation attributes the theorem. The proof above applies the stated local reduction and separator results, including the separate existence of the independent deletion and base graph.
