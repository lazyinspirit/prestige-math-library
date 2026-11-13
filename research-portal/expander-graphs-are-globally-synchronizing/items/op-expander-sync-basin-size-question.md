---
id: op-expander-sync-basin-size-question
title: Families with vanishing total spurious-basin measure
kind: open-problem
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-asymptotic-synchrony
  - def-expander-sync-global-synchrony
  - def-expander-sync-states
  - def-expander-sync-kuramoto-system
  - def-expander-prereq-attraction-basin-measure
  - def-expander-prereq-phase-volume
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-asymptotic-synchrony: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-sync-kuramoto-system: mathematical-premise
  def-expander-prereq-attraction-basin-measure: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-countable-choice: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, final paragraph
      statement: The authors suggest that graph families might fail global synchrony
        while the aggregate size of the basins of spurious local minima tends to
        zero with the number of vertices.
      hypotheses: Families of finite underlying graphs in the homogeneous Kuramoto
        setting, with vertex counts growing without bound.
      reading_limits: The cited paragraph of the supplied article was read. It
        proposes a possibility and does not exhibit such a family or prove its
        existence. It is cited for attribution, not as a proof.
    - title: The size of the sync basin
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/54e26b1ce4b054179790e8e7/1424124700702/the-size-of-the-sync-basin.pdf
      locator: p. 1, opening paragraph
      statement: The authors propose studying the measure of the synchronous state's
        attraction basin and its dependence on network connectivity when
        synchrony competes with other attractors.
      hypotheses: A network of identical oscillators with a locally stable synchronous
        state that competes with other attractors.
      reading_limits: Only the opening paragraph was inspected for the research
        direction. No result in that paper is asserted to answer the
        graph-family question below.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 8
---

## Open problem

Assume countable choice. Is there a family of finite undirected graphs $G_n=(V_n,E_n)$, indexed by an unbounded set $S$ of positive integers with $|V_n|=n$, such that every $G_n$ fails to be globally synchronizing while the aggregate normalized phase volume of the basins of its spurious local minima tends to zero as $n$ tends to infinity through $S$? Identify and analyze such families, if they exist.

Here the graphs have at most one edge between any two vertices and may have self-loops. On each graph use the homogeneous Kuramoto system, in the frame rotating at the common intrinsic frequency. A graph is globally synchronizing if, for all initial phases outside a normalized phase-volume null set, the rotating-frame trajectory converges to a point whose phases are all equal. A spurious local minimum is a local minimum of the Kuramoto energy whose phases are not all equal.

More explicitly, write $Q_n$ for the set of spurious local minima, $B_n(q)$ for the initial phases whose rotating-frame trajectory converges to the point $q$, and $U_n$ for the union of $B_n(q)$ over $q$ in $Q_n$. Require $U_n$ to be phase-measurable, and let $μ_n$ be normalized phase volume on the phase torus of $G_n$. The requested limit is $μ_n(U_n) → 0$: for every $ε>0$ there is an $N$ such that $μ_n(U_n)<ε$ for every $n$ in $S$ with $n≥N$. If $Q_n$ is empty, its union of basins is empty. The aggregate is the volume of a union, not a sum over possibly uncountably many minima.

## Open problem references

[[math:def-countable-choice]]

[[def-expander-sync-kuramoto-system]]

[[def-expander-sync-global-synchrony]]

[[def-expander-sync-states]]

[[def-expander-prereq-attraction-basin-measure]]

[[def-expander-prereq-phase-volume]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[def-expander-sync-asymptotic-synchrony]]

## Status

The article proposes this possibility as a research direction; its cited paragraph supplies neither a family nor an existence proof. The formulation above makes aggregate size precise using measurable unions of point basins, so it is one explicit version of the question. As of 2026-11-13, no solution is claimed here; the limited source inspection does not establish that the question remains unresolved throughout the literature.

Wiley, Strogatz, and Girvan propose the broader study of the synchronous state's basin size and its dependence on network connectivity. Their opening paragraph does not establish the existence of a family satisfying the question above.

## Source notes

The graph-family possibility is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 39, Section 7, final paragraph. The broader basin-size direction is attributed to [The size of the sync basin](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/54e26b1ce4b054179790e8e7/1424124700702/the-size-of-the-sync-basin.pdf), page 1, opening paragraph. Neither citation is used as a proof of existence.
