---
id: lem-recursive-separator-base-case
kind: lemma
title: The implicit $r=1$ base case
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-article-graph-conventions
  - def-induced-vertex-ramsey-class
  - def-induced-forbidden-class
  - math:def-graph-walk-trail-path-and-cycle
  - lem-target-ordering-and-forbidden-membership
  - prop-one-colour-ramsey-distinction
dependency_roles:
  def-article-graph-conventions: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  def-induced-forbidden-class: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  lem-target-ordering-and-forbidden-membership: mathematical-premise
  prop-one-colour-ramsey-distinction: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, target ordering and definition A1 := H2
      statement: For A1 = H2 under the chosen ordering, A1 belongs to the induced
        one-colour vertex-Ramsey class of H2 and not to that of H1.
      hypotheses: The targets are non-isomorphic connected graphs with edges, ordered
        as in the article; all graphs considered have at least one vertex.
      reading_limits: The frozen extracted article text was read at the cited passage.
        This reference attributes the formulation only; it is not a proof
        premise.
dependency_level: 5
---

## Statement

Let $H_1,H_2$ be non-isomorphic connected finite simple graphs, each containing an edge. Order them so that $\beta(H_1)\geq\beta(H_2)$ and, if equality holds, $|V(H_1)|\geq|V(H_2)|$. Set $A_1=H_2$. Then $A_1\in\mathcal R^1_{\mathrm{ind}}(H_2)$ and $A_1\notin\mathcal R^1_{\mathrm{ind}}(H_1)$.

Here $\beta(H)$ is the greatest number of vertices in a block of $H$; a block is a maximal 2-connected subgraph or a bridge with its endpoints. A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any vertex; a bridge is an edge whose deletion increases the number of connected components. A graph is connected if every two vertices are joined by a path. An induced copy of $H$ in $G$ is a subgraph isomorphic to $H$ that contains every edge of $G$ between its vertices. The class $\mathcal R^1_{\mathrm{ind}}(H)$ consists of nonempty finite simple graphs in which every vertex colouring with the single available colour has a monochromatic induced copy of $H$.

## Statement references

[[def-article-graph-conventions]]

[[def-induced-vertex-ramsey-class]]

[[math:def-graph-walk-trail-path-and-cycle]]

[[lem-target-ordering-and-forbidden-membership]]

## Facts & Assumptions

[F1] Under the stated hypotheses and ordering, $H_2\in\operatorname{Forb}(H_1)$, meaning that $H_2$ contains no induced copy of $H_1$ ([[lem-target-ordering-and-forbidden-membership]], [[def-induced-forbidden-class]]).

[F2] Each of the non-isomorphic nonempty finite simple graphs $H_1,H_2$ belongs to its own induced one-colour vertex-Ramsey class ([[prop-one-colour-ramsey-distinction]]).

[F3] Membership in $\mathcal R^1_{\mathrm{ind}}(H)$ requires an induced copy of $H$ that is monochromatic for every colouring under consideration; in particular, if the host has no induced copy of $H$, the constant one-colour map witnesses nonmembership ([[def-induced-vertex-ramsey-class]], [[def-article-graph-conventions]]).

## Proof

**Given:** The graphs and ordering in the statement, with $A_1=H_2$.

**Goal:** Establish the two asserted induced one-colour class memberships.

1.1 The self-membership assertion applied to $H_2$ gives $H_2\in\mathcal R^1_{\mathrm{ind}}(H_2)$. Since $A_1=H_2$, this is the first assertion. [given, F2]

2.1 The ordering lemma gives that $H_2$ has no induced copy of $H_1$. The constant map $V(H_2)\to\{1\}$ is a one-colouring and has no monochromatic induced copy of $H_1$, because there is no induced copy at all. Thus $H_2\notin\mathcal R^1_{\mathrm{ind}}(H_1)$, and $A_1=H_2$ gives the second assertion. [given, F1, F3] ∎
