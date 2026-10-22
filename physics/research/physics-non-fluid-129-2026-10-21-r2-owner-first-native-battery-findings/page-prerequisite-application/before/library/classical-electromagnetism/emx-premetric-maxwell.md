---
page: emx-premetric-maxwell
title: Metric dependence, flux sectors and constitutive geometry
status: draft
library: physics
items:
  - def-emx-continuous-chain-integral
  - def-emx-excitation-form
  - lem-emx-c1-stokes-on-standard-3-simplex
  - pthm-emx-exterior-maxwell
  - pthm-emx-duality-vacuum
examples: []
---

**Scope.** This page fixes the field-strength $F$, macroscopic excitation $G$, and free-current form $\mathcal J$ in the oriented SI laboratory chart. For jointly $C^1$ fields $E,B$, $C^2$ material fields $P,M$, and the adopted Maxwell model, their exterior equations $dF=0$ and $dG=\mathcal J$ are equivalent to the macroscopic component equations under the existing free/bound source definitions. They do not impose a material constitutive law.

**Metric dependence.** The exterior equations use no spacetime metric. The vacuum closure $G=(\mu_0c)^{-1}\star_\eta F$ is proved separately using the specified $(-+++)$ Hodge star; it is not extended to general material response. If $E,B,P,M$ are jointly $C^2$, the free-current form is closed and gives the classical free-source continuity equation. For any fixed finite smooth singular 2-cycle in the spatial region, its magnetic flux is constant in laboratory time under the stated $C^1$ field regularity.

**Vacuum symmetry.** [[pthm-emx-duality-vacuum]] proves the continuous duality rotation only for source-free vacuum fields. The statements do not claim that this rotation preserves a material closure or a boundary condition; the companion page gives explicit counterexamples for flux topology and a perfect-electric-conductor boundary.
