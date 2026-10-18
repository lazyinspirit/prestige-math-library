---
page: graph-diffusion-and-metric-network-pde-numerics
title: "Graph diffusion and metric network pde numerics"
status: draft
items:
  - def-anchored-finite-metric-graph-h1-space
  - def-conservative-network-advection-routing
  - def-finite-weighted-network-diffusion-data
  - def-metric-graph-p1-edge-mesh
  - lem-anchored-metric-graph-h1-space-is-hilbert
  - lem-anchored-metric-graph-poincare
  - lem-metric-graph-kirchhoff-green-identity
  - lem-weighted-network-energy-kernel-and-mass-balance
  - thm-conservative-network-routing-conserves-flux
  - cor-weighted-network-gauged-cg-applicability
  - lem-metric-graph-p1-interpolation-estimate
  - thm-metric-graph-p1-parabolic-semidiscrete-stability
  - thm-metric-graph-weak-elliptic-problem
  - thm-weighted-network-semigroup-and-euler-positivity
  - thm-metric-graph-p1-fem-cea-and-energy-rate
examples: []
---

This page develops finite weighted graph diffusion and diffusion on finite metric graphs.
For a finite network, it defines the oriented weighted stiffness $BCB^{\mathsf T}$,
positive vertex masses, grounded and closed boundary cases, and the column mass-state
convention. It proves the positive-conductance component kernel, weighted mass balance,
positivity of the exact semigroup, the sharp forward-Euler threshold, backward-Euler
positivity, and exact-arithmetic conjugate-gradient applicability after grounding or a
Neumann gauge. The conserved quantity is $\mathbf1^{\mathsf T}Mu$.

For metric graphs, the finite interval-edge definition allows parallel edges and loops,
with the two endpoint incidences of a loop counted separately. The page defines the
edge-product $H^1$ trace space with anchors, proves a path Poincare inequality and
Kirchhoff Green identity, and constructs the anchored weak
elliptic solution. The conforming edgewise P1 method has Cea quasi-optimality and an
$O(h)$ energy estimate when the exact solution is $H^2$ on every edge. This regularity
is an explicit hypothesis: the page does not infer vertex smoothness or a rate from the
network geometry. Its parabolic result is a semidiscrete existence and energy bound proved
through the graph evolution triple and the generic finite-dimensional ODE interface; no
parabolic spatial error rate is claimed.

The advection section defines routing on mass fluxes by a nonnegative column-stochastic
matrix. It imposes conservation of total incoming and outgoing flux and does not identify
that condition with equality of edge densities. Axiom of Choice and Countable Choice uses
are declared at the specific graph-space and variational interfaces. The published
rectangular finite-difference and polyhedral parabolic estimates are not transferred to
metric graphs.
