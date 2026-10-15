---
page: particle-smoothing-backward-simulation-and-rbpf-examples
title: Particle smoothing, backward simulation, and Rao–Blackwellized filters — Examples
status: draft
items: []
examples:
  - ex-switching-linear-gaussian-rbpf
  - ex-zero-backward-simulation-denominator
  - ex-fixed-lag-smoothing-bias-from-delayed-information
---

These examples compute a two-mode Gaussian mixture by conditioning on each
nonlinear mode, show why an incompatible terminal particle can make the
backward density denominator vanish, and give a finite-state case where a
later observation changes the full smoothing law by total variation $1/2$.
They separate exact conditional Gaussian calculations from finite-particle
approximation and fixed-lag truncation bias.
