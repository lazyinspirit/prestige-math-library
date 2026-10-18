---
page: monotone-finite-volume-entropy-convergence-examples
title: Monotone finite-volume entropy convergence — Examples
status: published
items: []
examples:
  - cex-nonmonotone-fv-scheme-selects-expansion-shock
  - ex-godunov-fv-monotone-under-cfl
  - ex-lax-friedrichs-fv-monotone-under-cfl
  - ex-godunov-fv-captures-stationary-burgers-shock
---

These examples verify the Burgers Godunov and Lax–Friedrichs fluxes under the
declared invariant-interval CFL bound, and show an aligned stationary Burgers
entropy shock preserved exactly by Godunov. A consistent conservative but
nonmonotone polynomial flux instead preserves a stationary expansion shock;
its strong local limit is weak but violates the $k=0$ Kruzhkov inequality.
