---
page: gr-fx03-geometric-cauchy-stability
title: "Finite-slab geometric Cauchy stability"
status: draft
library: physics
requires:
  - gr-gr14-full-high-regularity-symmetric-hyperbolic-proof
  - gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability
  - gr-connections-and-free-fall
items:
  - def-gr-fx-fixed-gauge-data-topology
  - def-gr-fx-metric-pullback-comparison
  - thm-gr-fx-finite-slab-stability
  - prop-gr-fx-geometric-observable-continuity
examples: []
---

This page records a finite-time comparison result for one periodic first-order Einstein-matter reduction in one fixed coordinate gauge. Its hypotheses name the state variables, Sobolev topology, common compact coefficient range, positive time-matrix margin, regularity bound, time slab and matter branch. The comparison is between coordinate fields in that gauge; a change of coordinates is handled as a pullback comparison and is not quotiented out by the norm.

The main estimate is at order $H^{s-1}$ for $H^s$ solutions. Subtracting the two reduced systems places the derivative on one comparison solution, so the proof uses its one lower derivative. The weighted energy obeys $E'\le\alpha E+\beta\|F_u-F_v\|_{H^{s-1}}\sqrt E$; regularizing $\sqrt E$ by $\sqrt{E+\varepsilon}$ gives the stated inhomogeneous Gronwall bound. Its constants may depend on the selected finite slab, coefficient family, state range and solution bounds.

A smooth reference solution has a small neighborhood of smooth constrained data whose reduced developments cover the same compact slab. The proof compares each smooth solution to the fixed smooth reference by an order-$H^s$ difference energy estimate, then uses a strict norm and compact-state bootstrap with a common local restart time. In the Einstein interpretation, the Hamiltonian and momentum constraints, complete matter initialization, auxiliary compatibility, constraint propagation and geometric uniqueness are required at every restart. The strict-fluid branch stays in $\epsilon+p>0$ and $0<p'(\epsilon)<1$; the dust branch stops before flow crossings. No shock continuation or global-in-time stability follows.

Under the same finite-slab bounds, convergence of the reduced states gives $C^1$ convergence of the reconstructed metric components. On a common compact chart and compact position-velocity range, the geodesic ODE then gives convergence of finite-parameter geodesics. Proper-time integrals converge when a uniform timelike margin is retained. These are conditional mathematical deductions, not reports about measurements or proof that a model describes nature.
