---
id: ex-phase-field-interface-width-and-grid-resolution
kind: example
title: Interface width and a grid that misses the transition
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - ex-phase-field-allen-cahn-stationary-front
  - def-phase-field-gradient-flow-and-double-well
proof_strategy: direct
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28 (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: "§1, printed p. 1670 / PDF p. 2: the authors identify ε as an interfacial-width parameter; the exact profile width and sampling calculation are derived here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For the front in [[ex-phase-field-allen-cahn-stationary-front]], the interval where $|u_\varepsilon(x)|\le\frac12$ has width
$$W_\varepsilon=2\sqrt{2\kappa}\,\varepsilon\,\operatorname{artanh}(1/2).$$
If a uniform sample grid has spacing $h>W_\varepsilon$ and the front is centered halfway between two sample points, no grid point lies in that transition interval. This gives a precise unresolved-interface configuration; it is not a sufficient resolution criterion.

## Facts & Assumptions

**Given:** The exact front profile and positive parameters $\kappa,\varepsilon$.

[F1] [[ex-phase-field-allen-cahn-stationary-front]]: $u_\varepsilon(x)=\tanh(x/(\sqrt{2\kappa}\,\varepsilon))$ and its transition is centered at $x=0$.

## Verification

1.1 Since $\tanh$ is strictly increasing and $\tanh(\operatorname{artanh}(1/2))=1/2$, the endpoints of $|u_\varepsilon|\le1/2$ are $x=\pm\sqrt{2\kappa}\,\varepsilon\operatorname{artanh}(1/2)$. Subtracting them gives $W_\varepsilon$ as stated. [F1, given, algebra]

2.1 Place sample points at $(j+\frac12)h$ for $j\in\mathbb Z$. Their distance from the front center is at least $h/2>W_\varepsilon/2$, so every sample point lies outside the transition interval from step 1.1. The grid therefore records no sample with $|u_\varepsilon|\le1/2$. [step 1.1, given, algebra] ∎

