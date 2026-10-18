---
page: conservative-finite-volume-weak-limits
title: Conservative finite-volume weak limits
status: draft
items:
  - def-locally-bounded-distributional-weak-solution
  - def-conservative-finite-volume-scheme
  - def-finite-volume-space-time-reconstruction
  - def-godunov-flux-for-burgers
  - lem-godunov-flux-for-burgers-is-continuous-and-consistent
  - lem-finite-volume-discrete-summation-by-parts
  - lem-conservative-fv-face-fluxes-converge-in-l1loc
  - thm-conservative-finite-volume-weak-limit
examples: []
---

This page defines a one-dimensional full-line conservative finite-volume scheme
for a scalar Cauchy problem, its cellwise state and face-flux reconstructions,
and the Godunov flux for Burgers' equation. The main theorem proves that a
strong local $L^1$ limit of locally uniformly bounded reconstructions satisfies
the distributional weak formulation, including the initial boundary term. The
proof uses cell-time test averages, telescoping interface fluxes, local flux
convergence and separate control of the strip near $t=0$. Convergence and local
boundedness are hypotheses: the theorem proves neither compactness nor entropy
admissibility and assumes no CFL condition.
