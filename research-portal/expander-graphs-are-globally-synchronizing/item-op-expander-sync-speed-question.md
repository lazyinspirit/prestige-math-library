---
title: Quantitative synchronization speed from random initial conditions
status: draft
research_item: op-expander-sync-speed-question
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, penultimate paragraph; pp. 2–3, Definition 1.1
      statement: The authors ask how quickly a random initial state synchronizes and
        suggest that their techniques may show rapid synchronization for
        sufficiently expanding graphs. Their definition of global
        synchronization uses a uniformly random initial state.
      hypotheses: The homogeneous graph Kuramoto model; the speed question concerns
        sufficiently expanding graphs, without specifying a rate or a precise
        expansion threshold in the cited paragraph.
      reading_limits: The cited passages in the supplied article text were inspected.
        The article is cited for the question and its context, not as a proof of
        a rate. A comprehensive review of subsequent rate results has not been
        performed.
---

PDF p. 39: ` Section 7, penultimate paragraph `

## Prerequisites

- [def-expander-sync-kuramoto-system](item-def-expander-sync-kuramoto-system)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Open problem

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set and symmetric adjacency matrix $A$, and consider the homogeneous graph Kuramoto system

$$\dot\theta_x=\omega-\sum_{y\in V}A_{x,y}\sin(\theta_x-\theta_y),\qquad x\in V.$$

Here each phase is an element of $S^1=\mathbb R/(2\pi\mathbb Z)$, the common intrinsic frequency is $\omega\in\mathbb R$, and the initial state is chosen uniformly from $(S^1)^V$. In the rotating frame write $\phi_x(t)=\theta_x(t)-\omega t$ modulo $2\pi$. A state is fully synchronized when all its phase coordinates are equal.

How quickly does the trajectory from a random initial state synchronize when the graph is sufficiently expanding? Can the article's techniques give a quantitative bound showing rapid synchronization? For example, one may ask for bounds, with specified probability, on the time needed for the rotating-frame trajectory to enter and remain within a prescribed distance of the set of fully synchronized states. Such a bound would need to state its dependence on the graph, the distance tolerance and the allowed failure probability. This example makes the type of rate precise; it does not impose a particular rate or probability bound on the authors' question.

For one notion of expansion used in the article, an $(n,d^*,\alpha)$-expander has $n=|V|>0$ and satisfies $\|A-(d^*/n)J\|\leq\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. The question does not specify a single threshold for “sufficiently expanding.”

## Status

In Section 7 the authors state that they have not considered the speed question and express the belief that their techniques can show rather rapid synchronization for sufficiently expanding graphs. They provide no rate there. As of 13 November 2026, the question is recorded as unresolved in this item; the limited source check does not establish that every possible quantitative version remains open in the subsequent literature.

## Source notes

The question and the authors' expectation are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF p. 39, Section 7. The article's Definition 1.1 specifies uniform initial phases in its global-synchronization setting. This attribution is not a proof of a convergence rate.
