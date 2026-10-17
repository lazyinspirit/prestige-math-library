---
id: def-richardson-extrapolation-under-a-fourth-order-remainder
kind: definition
title: "Richardson extrapolation for a central difference with a fourth-order remainder"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-difference-stencils-and-evaluation-error-model, lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, finite differences"
      url: "https://fncbook.github.io/v1.0/localapprox/finitediffs.html"
    - title: "Andreas Buttenschoen, Introduction to Scientific Computing, Numerical Differentiation"
      url: "https://www.buttenschoen.ca/MATH551/numerical-differentiation/"
---

## Definition

For a function $f$ with the values required by the central stencils at $x\pm h$ and $x\pm h/2$, the **Richardson extrapolated central difference** is

$$R_hf(x):=\frac{4D_{h/2}^0f(x)-D_h^0f(x)}{3}.$$

Its fourth-order error guarantee is conditional on a uniform expansion with a remainder bounded by a constant times $h^4$; that condition is stated and proved from a bounded fifth derivative in [[lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative]].
