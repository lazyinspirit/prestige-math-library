---
page: finite-generator-master-equations-and-uniformization
title: "Finite generator master equations and uniformization"
status: draft
items:
  - def-xd-finite-column-generator
  - lem-xd-finite-matrix-exponential-series
  - lem-xd-geometric-poisson-tail-bound
  - def-xd-countable-nonexplosive-ctmc
  - def-xd-countable-l1-distance
  - lem-xd-uniformized-matrix-is-stochastic
  - def-xd-finite-state-projection-and-cemetery-lift
  - thm-xd-finite-generator-master-equation-uniformization
  - alg-xd-budgeted-uniformization-accumulation
  - thm-xd-uniformization-truncation-and-error
  - thm-xd-finite-state-projection-loss-and-observable-bound
  - alg-xd-finite-budget-adaptive-projection
  - thm-xd-finite-budget-adaptive-projection-soundness
examples: []
---

This page uses column probability vectors: $Q_{ij}$ is the rate from source $j$ to destination $i$, off-diagonal entries are nonnegative, and columns sum to zero. The finite master equation has the exact matrix-exponential and Poisson-uniformization solutions. A budgeted implementation time-splits large Poisson parameters, uses a proved geometric tail bound, and reports any arithmetic error separately; a rounded subtraction from one is not a tail certificate.

For a countable pure-jump chain, finite-state projection is conditional on a given nonexplosive process. Killing at the first exit yields a subprobability on the finite set; adding an absorbing cemetery state retains escaped mass. The embedded killed-vector $\ell^1$ error is exactly that lost mass, and the cemetery lift gives a bounded-observable bound with the oscillation factor stated. A finite adaptive list may certify a projection or return inconclusive; no claim is made that some finite projection meets every tolerance.
