---
id: def-projected-stochastic-gradient-update
kind: definition
title: "Projected stochastic-gradient update"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-indicator-function-of-closed-convex-set
  - lem-prox-indicator-is-euclidean-projection
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §§3.1 and 6.1"
      url: "https://arxiv.org/pdf/1405.4980"
      locator: "§3.1 projected descent and §6.1 stochastic mirror descent/SGD"
verification:
  precheck: n/a
---

## Definition

Let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $x_0\in C$. The Euclidean projection $P_C(y)$ is the unique nearest point to $y$ in $C$; its existence and equivalence with the proximal map of the indicator of $C$ are supplied by [[lem-prox-indicator-is-euclidean-projection]]. The indicator is zero on $C$ and $+\infty$ off $C$, as defined in [[def-indicator-function-of-closed-convex-set]]. For the filtration-adapted oracle of [[def-stochastic-gradient-oracle-and-unconstrained-update]], projected SGD takes, at each iteration $k$:

1. form $y_k=x_k-\alpha_kG_k$;
2. set $x_{k+1}=P_C(y_k)$.

The output is the next iterate, which lies in $C$. The procedure has no failure branch because the projection exists uniquely for every $y_k\in\mathbb R^d$ under the stated conditions. Its nonexpansiveness is not part of this definition; it is supplied by the proximal-map theorem when used in proofs.
