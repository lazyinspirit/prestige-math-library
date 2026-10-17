---
page: adaptive-stochastic-paths-and-brownian-bridge-coupling
title: Adaptive stochastic paths and brownian bridge coupling
status: draft
items:
  - alg-dyadic-brownian-bridge-increment-tree
  - thm-dyadic-brownian-bridge-tree-increment-laws
  - def-predictable-stopping-time-grid
  - lem-continuous-adapted-process-at-bounded-stopping-time
  - lem-stopping-time-ito-step-interval-sum
  - alg-adaptive-euler-maruyama-on-predictable-grid
  - lem-finite-budget-adaptive-em-status
  - lem-adaptive-em-predictable-grid-second-moment
  - thm-adaptive-em-predictable-grid-strong-error
  - def-scalar-brownian-bridge-from-x-to-y
  - lem-scalar-brownian-bridge-restriction-density
  - thm-scalar-brownian-bridge-barrier-crossing-probability
examples: []
---

This page supplies exact dyadic Brownian-increment refinement, the definition
of a predictable stopping-time grid, an adaptive Euler–Maruyama update with an
explicit finite-work status, and a strong $L^2$ error estimate for the
predictable-grid branch. The proof uses the stopped-interval Itô identity,
mesh-increment estimates, and the global Lipschitz solution moment bound.
Endpoint-based rejection may reuse a stored bridge tree to preserve pathwise
coupling, but its selection rule is not predictable and receives no error
certificate here. A separate reflection argument proves the scalar Brownian
bridge barrier-crossing probability used to quantify missed crossings. A
finite budget bounds work; it does not make an incomplete path successful.
