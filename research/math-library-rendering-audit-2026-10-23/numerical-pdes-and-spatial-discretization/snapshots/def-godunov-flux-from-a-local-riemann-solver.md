---
id: def-godunov-flux-from-a-local-riemann-solver
kind: definition
title: "Godunov flux from the local Riemann solution"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - thm-local-small-data-riemann-solver
  - def-rankine-hugoniot-and-lax-shocks
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 13 §13.2, printed pp. 138–140: Godunov flux as the interface flux of the self-similar Riemann solution"
---

## Definition

For left/right states in the neighborhood of
[[thm-local-small-data-riemann-solver]], let $u(\xi)$ be its self-similar
profile, $\xi=x/t$. If the profile is continuous at $\xi=0$, define the
**Godunov flux** by $G(u_L,u_R)=f(u(0))$. If it has a jump there, let
$u(0-)$ and $u(0+)$ be its one-sided traces and define
$$G(u_L,u_R)=f(u(0-))=f(u(0+)).$$
These fluxes agree by Rankine–Hugoniot at speed zero, so the definition does not
depend on the arbitrary point value assigned at the jump. This is a local
definition on the data neighborhood where the local solver is established.
