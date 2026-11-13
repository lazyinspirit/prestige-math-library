---
title: Analytic local minima and Lyapunov stability
status: published
research_item: rem-expander-sync-lyapunov-stability
dependency_level: 6
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, Footnote 1
      statement: For the analytic energy, local minima are precisely the
        Lyapunov-stable states, with stability expressed by the epsilon-delta
        condition for all nonnegative times.
      hypotheses: The homogeneous graph Kuramoto energy and its rotating-frame
        gradient dynamics.
      reading_limits: The supplied article text at the footnote was inspected for the
        statement and attribution. This reference attributes the article claim;
        it is not used as its proof. The independent analytic input is supplied
        by the cited prerequisite theorem.
---

PDF p. 3: ` Footnote 1 `

## Prerequisites

- [def-expander-sync-energy](item-def-expander-sync-energy)
- [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)
- [def-expander-sync-states](item-def-expander-sync-states)
- [thm-expander-prereq-analytic-gradient-local-input](item-thm-expander-prereq-analytic-gradient-local-input)
- [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)
- [def-expander-prereq-periodic-analytic-potentials](item-def-expander-prereq-periodic-analytic-potentials)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories)
- [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set and symmetric adjacency matrix $A$, allowing self-loops. On $T_V=(S^1)^V=\mathbb R^V/(2\pi\mathbb Z)^V$, let $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$. Consider the rotating-frame flow $\dot\theta=-\nabla\mathcal E_G(\theta)$ with the flat metric. A state $\theta$ is a local minimum of $\mathcal E_G$ exactly when it is a Lyapunov-stable equilibrium of this flow.

Here a local minimum has a neighborhood on which the energy is at least its value at $\theta$; an equilibrium remains fixed under the flow. Lyapunov stability means that for every $\varepsilon>0$ there is $\delta>0$ such that $d(\theta(0),\theta)\le\delta$ implies $d(\theta(t),\theta)\le\varepsilon$ for all $t\ge0$, where $d$ is the flat torus distance. No strict minimum or attraction to the individual equilibrium is asserted.

## Statement references

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[def-expander-sync-energy](item-def-expander-sync-energy)

[def-expander-sync-states](item-def-expander-sync-states)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)

[prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)

## Facts & Assumptions

[F1] The phase torus has angular charts with locally translational transitions, Euclidean metric coefficients and a distance equal locally to Euclidean distance in the chart ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] The energy is a finite real linear combination of a constant and cosine functions of phase differences, hence is real analytic in every angular chart. In this context real analytic means locally represented by a convergent real power series ([def-expander-sync-energy](item-def-expander-sync-energy), [def-expander-prereq-periodic-analytic-potentials](item-def-expander-prereq-periodic-analytic-potentials)).

[F3] Under countable choice the smooth downward-gradient flow exists uniquely for all real time, and the homogeneous system in the rotating frame has this gradient equation. Equilibria are precisely the critical points of the energy ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories), [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow), [def-expander-sync-states](item-def-expander-sync-states)).

[F4] For a real analytic function on a Euclidean neighborhood, an equilibrium of its downward-gradient system is Lyapunov stable exactly when it is a local minimum. A differentiable function at an interior Euclidean local minimum has zero gradient ([thm-expander-prereq-analytic-gradient-local-input](item-thm-expander-prereq-analytic-gradient-local-input), [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema)).

[F5] Point stability uses the same quantified condition with strict distance inequalities; local minimality and equilibrium have the meanings stated above ([def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction), [def-expander-sync-states](item-def-expander-sync-states)).

## Proof

**Given:** The graph, energy, flat torus and rotating-frame flow in the Statement, and a state $\theta$.

**Goal:** Establish the equivalence and the displayed non-strict epsilon-delta formulation.

1.1 Choose an angular chart centered at $\theta$ and a smaller Euclidean ball whose image lies in the chart and on which distance from $\theta$ is the Euclidean coordinate distance. By [F1] and [F2], the chart expression of the energy is real analytic and the flat downward-gradient equation is its Euclidean downward-gradient equation. Local minimality is preserved by the chart homeomorphism. If $\theta$ is a local minimum, Fermat's theorem in [F4] makes its coordinate gradient zero; by [F3] it is an equilibrium. [F1, F2, F3, F4]

2.1 For an equilibrium, apply the analytic stability equivalence in [F4] to the chart expression. The local and torus stability conditions agree: for a desired radius choose a smaller radius contained in the chart; trajectories starting sufficiently near $\theta$ remain in that smaller ball by the relevant stability condition, so their coordinate and torus descriptions agree for all forward times. Conversely, torus stability with such a radius keeps the trajectory in the chart and yields the Euclidean local condition. Uniqueness and complete forward existence are supplied by [F3]. Together with step 1.1 this proves both implications. [F1, F3, F4, F5, step 1.1]

3.1 The strict-distance definition in [F5] is equivalent to the non-strict formulation in the Statement: apply strict stability with $\varepsilon/2$ and then choose a positive non-strict initial radius smaller than its strict radius. Conversely, apply the non-strict condition with $\varepsilon/2$ and use a strictly smaller initial radius. Neither implication requires strict minimality or convergence to $\theta$. [F5, step 2.1] ∎

## Source notes

The equivalence and the non-strict stability formulation are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF p. 3, Footnote 1, which cites Absil and Kurdyka. The proof above uses the independent analytic-gradient supplier, not the article assertion.
