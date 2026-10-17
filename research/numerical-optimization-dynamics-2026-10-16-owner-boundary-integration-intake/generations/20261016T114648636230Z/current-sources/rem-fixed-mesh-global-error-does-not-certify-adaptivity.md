---
id: rem-fixed-mesh-global-error-does-not-certify-adaptivity
kind: remark
title: "A fixed-mesh global error theorem does not certify an adaptive controller"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-bounded-adaptive-runge-kutta-controller
  - thm-global-error-from-one-step-defect-and-stability
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Scope warning

[[thm-global-error-from-one-step-defect-and-stability]] assumes a prescribed uniform mesh $t_n=a+nh$, a one-step defect bound on that mesh, and a stability estimate for propagation on those steps. Its conclusion therefore applies when those hypotheses hold. The controller in [[alg-bounded-adaptive-runge-kutta-controller]] accepts variable, state-dependent step sizes based on a pair difference. That difference is not the exact one-step defect hypothesis of the fixed-mesh theorem. No uniform mesh, defect reliability estimate, mesh-ratio control, or variable-step propagation theorem is supplied by that theorem. It may be used on a particular adaptive run only after those distinct hypotheses have independently been proved; its fixed-mesh statement alone yields no adaptive global error certificate.
