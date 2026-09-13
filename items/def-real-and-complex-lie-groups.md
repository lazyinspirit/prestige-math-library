---
id: def-real-and-complex-lie-groups
kind: definition
title: Real and complex Lie groups
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-group, def-holomorphic-map-and-complex-jacobian, thm-chain-rule-for-holomorphic-maps-in-several-variables]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I, Section 10
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Section 3.1, printed page 29
---

## Definition

A **real Lie group** is a Lie group in the sense of [[def-lie-group]]: its
manifold and its multiplication and inversion are real smooth.

A **complex Lie group** is a group equipped with a finite-dimensional complex
manifold structure such that multiplication and inversion are holomorphic in
complex charts in the sense of
[[def-holomorphic-map-and-complex-jacobian]] when the chart dimension is
positive. In complex dimension zero, charts take values in the singleton
$\mathbb C^0=\{0\}$; every map between such chart domains is holomorphic by
the zero-dimensional convention, with the unique zero differential and empty
Jacobian. This supplies the case excluded by the cited positive-dimensional
holomorphy definition. In positive complex dimension,
the holomorphic chain rule
([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]) makes left
translations biholomorphic with complex-linear differentials. Consequently
the invariant-field construction gives a complex-bilinear tangent Lie bracket.
In complex dimension zero the tangent space is zero, so the same conclusion
holds directly without invoking that positive-dimensional chart interface.

The underlying real manifold of a complex Lie group is a real Lie group. This
item fixes terminology only; it does not rebuild complex analytic Lie theory.
The zero-dimensional group is included. A Lie group contains its identity, so
there is no empty case. No metric, nondegeneracy, interval, endpoint, choice
principle, or biconditional occurs.
