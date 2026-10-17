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
  - lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates
  - thm-dynkin-pi-lambda
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Dario Gasbarra, Tommi Sottinen, and Esko Valkeila, Gaussian Bridges, §1, equation (1.3), pp. 2–3"
      url: "https://math.aalto.fi/reports/a481.pdf"
---

## Definition

Assume AC. Let $h>0$, $x,y\in\mathbb R$, and let $W$ be a standard scalar
Brownian motion on $[0,h]$. The **scalar Brownian bridge from $x$ to $y$ over
duration $h$** is the continuous Gaussian process
$$B^{x,y,h}_t=x+\frac{t}{h}(y-x)+W_t-\frac{t}{h}W_h, \qquad 0\le t\le h.$$
It starts at $x$ and ends at $y$. Its law does not depend on which Brownian
motion is used: Brownian increment laws determine its finite-dimensional laws,
and continuity determines its path law from rational coordinate evaluations
using [[lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates]]
and [[thm-dynkin-pi-lambda]]. The endpoint-conditional and restriction-density
properties are established separately on the A page.
