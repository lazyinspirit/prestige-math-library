---
page: global-ode-and-density-error
title: Global ODE and Log-density Integration Error
status: published
items:
  - lem-discrete-one-step-error-recurrence-bound
  - thm-continuous-flow-log-density-equation
  - thm-global-error-from-one-step-defect-and-stability
  - thm-divergence-integral-error-with-separate-quadrature
  - cor-global-log-density-error-from-state-and-quadrature
  - thm-euler-global-state-and-log-density-error
examples: []
---

For a fixed finite interval $[0,T]$ and uniform step $h=T/N$, the global ODE bound propagates a uniform one-step defect through a stability factor $1+Lh$. It requires the exact trajectory, numerical states, and all method stages to remain in a common compact tube; the local defect and stability constants must be uniform in $N$.

For a continuous normalizing flow, the exact log density changes by the negative divergence along the trajectory. Its numerical error has a separate state contribution and quadrature contribution: a state method of order $p$ paired with divergence quadrature of order $m$ gives terms of order $h^p$ and $h^m$, respectively. Thus state accuracy alone does not certify log-density accuracy. The density interpretation uses Countable Choice through the library's measure change-of-variables theorem; the recurrence and quadrature estimates are choice-free. The Euler result derives both contributions on a bounded $C^2$ tube and makes no claim about adjoint-gradient error.
