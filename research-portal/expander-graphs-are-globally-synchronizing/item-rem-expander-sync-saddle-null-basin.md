---
title: Measure-zero convergence to strict saddles
status: published
research_item: rem-expander-sync-saddle-null-basin
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 3–4, Section 1, citation to [21, Lemma A.1]
      statement: The set of initial conditions whose trajectories converge to a strict
        saddle of the energy has measure zero.
      hypotheses: The finite homogeneous graph Kuramoto energy and its downward
        gradient dynamics in the rotating frame.
      reading_limits: The supplied article text at the cited passage was inspected for
        attribution. The article is not used as proof of this claim; its cited
        underlying proof was not independently inspected here.
---

PDF p. 3: ` Section 1, citation to [21, Lemma A.1] `; PDF p. 4: ` Section 1, citation to [21, Lemma A.1] `

## Prerequisites

- [def-expander-sync-energy](item-def-expander-sync-energy)
- [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)
- [def-expander-sync-strict-saddles](item-def-expander-sync-strict-saddles)
- [prop-expander-prereq-strict-saddle-flow-nullity](item-prop-expander-prereq-strict-saddle-flow-nullity)
- [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, allowing self-loops, and let $A$ be its symmetric adjacency matrix. On the phase torus $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, consider the homogeneous Kuramoto energy $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$ and its downward gradient flow $\Phi_t$ for the flat metric. A strict saddle is a critical point of $\mathcal E_G$ whose Hessian in angular coordinates has a negative eigenvalue. Then the set of initial phases $\theta$ for which $\Phi_t(\theta)$ converges, as $t\to\infty$, to some strict saddle has normalized phase volume zero. The union is over all strict saddles, which need not be isolated.

## Facts & Assumptions

[F1] The phase torus has angular charts whose transitions are locally translations and a flat metric with Euclidean coefficients ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)). The displayed energy is a well-defined finite sum on this torus ([def-expander-sync-energy](item-def-expander-sync-energy)).

[F2] Sine and cosine are periodic in angular lifts, with derivatives $\cos$ and $-\sin$ respectively; finite sums may be differentiated termwise ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F3] Under countable choice, the downward gradient of a smooth potential on this torus has a complete flow ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories)). The rotating-frame homogeneous Kuramoto equation is the downward gradient equation for $\mathcal E_G$ ([prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)).

[F4] A strict saddle of this energy is a critical point whose angular Hessian has a negative eigenvalue; this condition is independent of angular chart ([def-expander-sync-strict-saddles](item-def-expander-sync-strict-saddles)).

[F5] Under countable choice, for a $C^2$ potential on the finite phase torus with complete downward gradient flow, the union of the basins of all critical points with a negative Hessian eigenvalue is phase-null ([prop-expander-prereq-strict-saddle-flow-nullity](item-prop-expander-prereq-strict-saddle-flow-nullity)). Phase-null means measurable with normalized phase volume zero ([def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume)).

## Proof

**Given:** Countable choice, the graph, energy and downward gradient flow in the Statement.

**Goal:** Show that the set of initial phases converging to any strict saddle is phase-null.

1.1 In every angular chart the energy is a finite sum of cosine functions of linear differences of coordinates. By the differentiation rules and periodic derivatives in [F2], repeated differentiation gives derivatives of every order; the translation transitions in [F1] make these local expressions compatible. Thus $\mathcal E_G$ is smooth, and in particular $C^2$, on $T_V$. By [F3], its downward gradient flow is complete. [given, F1, F2, F3]

2.1 By [F4], the strict saddles in the Statement are exactly the critical points with a negative angular Hessian eigenvalue to which [F5] applies. Applying [F5] to the $C^2$ energy and complete flow from step 1.1 shows that the set of phases converging to any one of these points, taken as a union over all of them, is phase-null. By the phase-volume definition in [F5], it has normalized phase volume zero. The conclusion allows non-isolated strict saddles. [F4, F5, step 1.1] ∎

## Source notes

The article's assertion is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 3–4. The argument above uses the stated mathematical suppliers, rather than the article as proof.
