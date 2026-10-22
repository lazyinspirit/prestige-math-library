---
page: csm-frontier-kinetic-scaling
title: "Kinetic relaxation, diffusive scaling and entropy dissipation"
status: draft
library: physics
requires:
  - csm-collision-transport
  - csm-mean-field-hierarchy
  - csm-frontier-probability-interfaces
items:
  - def-csm-frontier-two-velocity-scaling
  - def-csm-frontier-boltzmann-grad-scaling
  - lem-csm-frontier-two-velocity-contraction
  - thm-csm-frontier-two-velocity-heat-limit
examples: []
---

This page gives a linear periodic two-velocity switching model with speeds $\pm c/\epsilon$ and switching rate $\lambda/\epsilon^2$. It proves smooth global well-posedness, positivity, mass conservation and contraction, including the quadratic $L^2$ dissipation identity. For well-prepared smooth data it proves uniform-in-time-on-compacts $L^2$ convergence of the density to the periodic heat equation with $D=c^2/(2\lambda)$. The $L^2$ identity is a mathematical dissipation law for this model; it is not identified with thermodynamic entropy or an experimental observation.

The page also defines a periodic hard-sphere Boltzmann–Grad scaling convention for comparison. The smooth $N^{-1}$ mean-field model, hard-sphere Boltzmann–Grad prescription, and two-velocity diffusive scaling have distinct state spaces and mechanisms. Nothing here derives the nonlinear Boltzmann equation, assumes molecular chaos, or proves a general hard-sphere hydrodynamic limit. The well-posedness and contraction results assume $\mathrm{AC}_\omega$; the heat-limit result also assumes nonnegative well-prepared smooth data $f_{+,0}^\epsilon=f_{-,0}^\epsilon=\rho_0/2$. The existing cutoff collision model retains its own adopted model assumptions and scope.
