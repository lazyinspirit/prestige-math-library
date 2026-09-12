---
id: def-covariant-derivative-along-a-curve
kind: definition
title: "Covariant derivative along a curve"
status: published
origin: pipeline
deps: ["thm-pullback-connection-is-well-defined-and-functorial","def-vector-field-and-section-along-a-smooth-curve"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

For a given connection on $E$ and a smooth curve on an interval with nonempty interior, the **covariant derivative along the curve** is
$$D_tV=(\gamma^*\nabla)_{\partial/\partial t}V.$$
Here $V$ is a section of the pullback bundle as in [[def-vector-field-and-section-along-a-smooth-curve]], and the pullback connection exists by [[thm-pullback-connection-is-well-defined-and-functorial]]. It is real-linear and satisfies $D_t(fV)=f'V+fD_tV$ for functions of the parameter.

At an included endpoint the smooth up-to-boundary coefficients have their one-sided derivative; equivalently any smooth local extension of the coefficients gives this value, because extensions agreeing on a one-sided interval have the same derivative there. For a piecewise smooth curve the derivative is defined on each piece, with separate one-sided derivatives at corners; those derivatives are not required to agree. A singleton interval carries no derivative operator under this convention and will have identity transport by definition. A zero section or a rank-zero bundle gives zero covariant derivative. Constant base curves can have sections with nonzero coefficient derivative.
