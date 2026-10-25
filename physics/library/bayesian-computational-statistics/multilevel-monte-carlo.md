---
page: multilevel-monte-carlo
title: "Multilevel Monte Carlo and cost theorem"
status: published
items:
  - def-mlmc-hierarchy-and-coupled-corrections
  - lem-mlmc-estimator-moments-and-mse
  - thm-mlmc-complexity-under-rate-assumptions
  - cor-mlmc-euler-hms-autonomous-cost-rate
  - cor-mlmc-euler-finite-l2-and-weak-cost-rate
examples: []
---

## Summary

This page defines a geometric hierarchy of approximations, coupled adjacent-level corrections, independent level sample blocks, and the finite MLMC estimator. The cost theorem assumes an infinite compatible family of level laws and adjacent couplings, while each estimator uses only a finite prefix. The local moment lemma proves that its expectation telescopes to the finest approximation and that its MSE splits into sampling variance and squared bias. The cost theorem then proves all three regimes from explicit bias, correction-variance, and per-sample work bounds: $O(\epsilon^{-2})$ for $\beta>1$, $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$ for $\beta=1$, and $O(\epsilon^{-2-(1-\beta)/\alpha})$ for $0<\beta<1$. These are upper bounds; the theorem supplies neither rate verification nor matching lower bounds.

The Euler applications keep their contracts separate. The autonomous Higham–Mao–Stuart branch uses its one-sided-Lipschitz, polynomial-drift, and all-moment hypotheses. The other branch has a direct finite-$L^2$ strong route, with a separate weak-order-one upgrade only under the stated bounded-payoff backward-regularity and moment conditions. A Lipschitz payoff alone does not supply that weak regularity. The two SDE routes are not transferred into each other, and adaptive bias stopping remains heuristic.
