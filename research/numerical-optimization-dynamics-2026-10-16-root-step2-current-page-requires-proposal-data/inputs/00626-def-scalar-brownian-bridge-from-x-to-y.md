---
id: def-scalar-brownian-bridge-from-x-to-y
kind: definition
title: Scalar Brownian bridge from x to y
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-brownian-motion
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §8.8, Algorithm 8.23"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Definition

Assume AC. Let $h>0$, $x,y\in\mathbb R$, and let $W$ be a standard scalar
Brownian motion on $[0,h]$. The **scalar Brownian bridge from $x$ to $y$ over
duration $h$** is the continuous Gaussian process
$$B^{x,y,h}_t=x+\frac{t}{h}(y-x)+W_t-\frac{t}{h}W_h, \qquad 0\le t\le h.$$
It starts at $x$ and ends at $y$. Its law does not depend on which Brownian
motion is used. The endpoint-conditional and restriction-density properties are established
separately on the A page.
