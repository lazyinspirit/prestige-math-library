---
id: def-expander-sync-edge-count
title: Oriented edge count between sets
kind: definition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-prereq-loop-compatible-networks
  - prop-expander-prereq-indicator-and-cut-calculus
  - math:def-finite-sum-in-a-commutative-monoid
  - math:def-set-difference-and-symmetric-difference
  - math:def-intersection-of-a-set-and-binary-intersection
  - math:def-cartesian-product
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  prop-expander-prereq-indicator-and-cut-calculus: mathematical-premise
  math:def-finite-sum-in-a-commutative-monoid: mathematical-premise
  math:def-set-difference-and-symmetric-difference: mathematical-premise
  math:def-intersection-of-a-set-and-binary-intersection: mathematical-premise
  math:def-cartesian-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 18, opening of Section 3
      statement: For subsets $X,Y$ of the vertex set, $e(X,Y)$ is the sum of $A_{x,y}$
        over $x\in X$ and $y\in Y$; a self-loop contributes once to the degree.
      hypotheses: A graph with finite vertex set $V$ and adjacency matrix $A$;
        $X,Y\subseteq V$.
      reading_limits: The opening of Section 3 on PDF p. 18 was inspected for the
        notation and loop convention. The article is cited for attribution, not
        as proof of the justification below.
dependency_level: 2
---

## Definition

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, at most one edge between any pair of vertices, and possible self-loops. Its adjacency entry $A_{x,y}$ is $1$ if $\{x,y\}\in E$ and $0$ otherwise, with $\{x,x\}$ representing a loop. For subsets $X,Y\subseteq V$, define

$$e(X,Y):=\sum_{x\in X}\sum_{y\in Y}A_{x,y}.$$

This is an ordered-pair count: a non-loop edge with both endpoints in $X\cap Y$ contributes twice, while a loop at a vertex of $X\cap Y$ contributes once. If $X$ and $Y$ are disjoint, each edge with one endpoint in $X$ and the other in $Y$ contributes once. Write $X^c=V\setminus X$ for the set of vertices outside $X$.

## Definition references

[[def-expander-sync-graph-notation]]

[[def-expander-prereq-loop-compatible-networks]]

[[prop-expander-prereq-indicator-and-cut-calculus]]

[[math:def-finite-sum-in-a-commutative-monoid]]

[[math:def-set-difference-and-symmetric-difference]]

[[math:def-intersection-of-a-set-and-binary-intersection]]

[[math:def-cartesian-product]]

## Facts & Assumptions

[F1] The graph adjacency matrix is symmetric and binary, and its diagonal entries record loops ([[def-expander-sync-graph-notation]]).

[F2] A nonempty finite vertex set with a symmetric nonnegative matrix is a network; diagonal entries are allowed ([[def-expander-prereq-loop-compatible-networks]]).

[F3] For a network, the ordered count between subsets is the displayed finite double sum ([[prop-expander-prereq-indicator-and-cut-calculus]]). Finite sums are defined independently of the ordering of their finite index sets ([[math:def-finite-sum-in-a-commutative-monoid]]).

[F4] The difference $V\setminus X$ consists of the elements of $V$ that are not in $X$ ([[math:def-set-difference-and-symmetric-difference]]).

[F5] Binary intersection $X\cap Y$ consists of elements belonging to both $X$ and $Y$, and the sets are disjoint when $X\cap Y=\varnothing$ ([[math:def-intersection-of-a-set-and-binary-intersection]]).

[F6] The Cartesian product $X\times Y$ consists exactly of ordered pairs $(x,y)$ with $x\in X$ and $y\in Y$ ([[math:def-cartesian-product]]).

## Justification

**Given:** A graph and subsets $X,Y$ as in the definition.

**Goal:** Verify that the count and complement are well defined and that the stated edge-counting conventions follow from the formula.

1.1 By [F1], $A$ is symmetric and nonnegative, so [F2] makes it a network. The two index sets are finite, and [F3] gives the ordered count as a well-defined finite sum, independent of any ordering used to enumerate them. By [F4], $X^c$ is precisely the complement of $X$ relative to $V$. [given, F1, F2, F3, F4]

2.1 By [F6], every nonzero summand corresponds to an ordered pair $(x,y)\in X\times Y$ whose endpoints form an edge. By [F5], $X\cap Y$ consists of vertices belonging to both sets, and disjointness means $X\cap Y=\varnothing$. If distinct endpoints both lie in $X\cap Y$, both orders occur and contribute $1$ each; a loop there supplies only the single pair $(x,x)$. If $X\cap Y=\varnothing$, a crossing edge has exactly one endpoint in $X$ and one in $Y$, so exactly one of its two orders lies in $X\times Y$, and no loop occurs. Thus the stated conventions follow. [F1, F5, F6, step 1.1] ∎





## Source notes

The notation and the convention that a loop contributes once to the degree are attributed to the opening of Section 3 of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf). The counting interpretation above follows from the displayed definition and the stated graph convention.
