---
id: op-connected-graphs-distinct-edge-ramsey-classes
kind: open-problem
title: Connected non-isomorphic graphs and edge-Ramsey classes
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - def-edge-ramsey-class-context
  - math:def-connected-graph-and-connected-component
  - math:def-graph-isomorphism-and-complement
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  def-edge-ramsey-class-context: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:def-graph-isomorphism-and-complement: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 1, Introduction, paragraph following Theorem 1.1; PDF p. 4,
        reference [5]
      statement: The article attributes to Fox and coauthors the question whether
        connected non-isomorphic graphs have distinct edge-Ramsey classes and
        reports that it remains open in general.
      hypotheses: The article assumes that all graphs considered have at least one
        vertex; the introduction does not specify the edge-colour count in this
        question.
      reading_limits: The frozen article text was read at the cited passages. This
        reference attributes the question and its reported status, not an
        answer.
    - title: Jacob Fox, Andrey Grinshpun, Anita Liebenau, Yury Person, and Tibor
        Szabó, What is Ramsey-equivalent to a clique?
      url: https://page.mi.fu-berlin.de/szabo/PDF/ramseyequivalent.pdf
      locator: PDF p. 1, Abstract; p. 2, Introduction (definitions); p. 3, Conventions
        and Notation; p. 12, Section 4, Question 4.3
      statement: The paper defines Ramsey equivalence using every two-colouring of
        host edges and asks whether a pair of non-isomorphic connected
        Ramsey-equivalent graphs exists. Its abstract states that the only
        connected graph Ramsey-equivalent to a clique is that clique.
      hypotheses: The equivalence concerns ordinary monochromatic graph copies under
        two edge colours; the question restricts both graphs to be connected and
        non-isomorphic.
      reading_limits: The abstract, introductory definitions, colour convention and
        Question 4.3 were inspected. The proofs and later literature were not
        systematically reviewed; this citation supplies formulation and reported
        partial-result context, not a solution of the question.
dependency_level: 3
---

## Open problem

For a finite simple graph $H$ with at least one vertex, let its two-colour edge-Ramsey class consist of the finite simple graphs $G$ with at least one vertex such that every function $E(G)\to\{1,2\}$ has an edge-monochromatic ordinary copy of $H$. An ordinary copy is a subgraph isomorphic to $H$; it need not include every host edge between its vertices. A copy is edge-monochromatic if all its edges have the same colour, with the condition vacuous when it has no edges.

A graph is connected if every two of its vertices are joined by a path. Two graphs are isomorphic if a bijection of their vertex sets preserves and reflects adjacency; they are non-isomorphic if no such bijection exists. Does there exist a pair of connected non-isomorphic graphs whose two-colour edge-Ramsey classes are equal? A negative answer is equivalent to the assertion that every two connected non-isomorphic graphs have distinct two-colour edge-Ramsey classes.

## Status

Fox and coauthors posed this existence question in Question 4.3 using two-colour Ramsey equivalence. Their abstract reports the partial result that a clique has no other connected graph in its Ramsey-equivalence class. The article under study, dated October 5, 2026, reports the general question as open. No solution is asserted here; later literature has not been systematically reviewed, so this is a dated report rather than a certification of current worldwide status.

## Source notes

The article's introduction does not specify an edge-colour count in its question. The two-colour formulation above follows the definition in the cited Fox et al. paper and makes that question precise. Distinct classes means that some host belongs to one class and not the other.
