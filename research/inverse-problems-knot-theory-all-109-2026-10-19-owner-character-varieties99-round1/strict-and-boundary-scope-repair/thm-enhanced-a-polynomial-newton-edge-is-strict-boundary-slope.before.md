---
id: thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope
kind: theorem
title: "Enhanced A-polynomial Newton edges give strict boundary slopes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-enhanced-a-polynomial
  - thm-ccgls-newton-edge-slope-is-boundary-slope
  - def-boundary-slope-of-an-incompressible-surface
  - thm-culler-shalen-ideal-point-produces-strict-surface
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and SL(2,C), Theorem 4.4 and Remark 4.5"
      url: "https://arxiv.org/html/2405.19197v2"
    - title: "D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane curves associated to character varieties of 3-manifolds, §3"
      url: "https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf"
---

## Statement

Assume full AC and let $K\subset S^3$ be a nontrivial knot. Every finite rational or infinite slope of an edge of the Newton polygon of the enhanced A-polynomial is a strict boundary slope of $K$: it is realized by an incompressible, boundary-incompressible, orientable surface in the exterior, and no such realizing surface is a fiber of an exterior fibration over $S^1$.

## Statement references

[[def-enhanced-a-polynomial|Enhanced A-polynomial with the reducible component removed]]

[[def-boundary-slope-of-an-incompressible-surface|Boundary and strict boundary slopes]]

[Baldwin and Sivek, Theorem 4.4 and Remark 4.5](https://arxiv.org/html/2405.19197v2)

[Cooper, Culler, Gillet, Long, and Shalen, §3](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

## Facts & Assumptions

**Given:** Full AC, a nontrivial knot, and an edge of the enhanced A-polynomial Newton polygon in the stated slope convention.

[F1] Ordinary A-polynomial edge slopes are boundary slopes ([[thm-ccgls-newton-edge-slope-is-boundary-slope]]).

[A1] Removing the reducible $L-1$ component associates a nonzero enhanced edge to an ideal point of an irreducible character curve; Culler–Shalen's action on the Bruhat–Tits tree must then produce the surface and prove it is not a fiber. That local argument is not supplied; the proposed missing supplier is [[thm-culler-shalen-ideal-point-produces-strict-surface]].

## Proof obligation

The source proof uses the ideal point associated to the enhanced Newton edge. The valuation yields a tree action, the surface stabilizes an edge, and the resulting surface cannot be a fiber because its fundamental group would be normal in the knot group. Each of those implications needs its own complete local argument; they are not present in the current suppliers. This theorem is escalated.
