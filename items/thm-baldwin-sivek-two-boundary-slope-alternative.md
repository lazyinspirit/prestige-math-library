---
id: thm-baldwin-sivek-two-boundary-slope-alternative
kind: theorem
title: The two-boundary-slope alternative
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots
  - lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber
  - def-boundary-slope-of-an-incompressible-surface
  - thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope
  - thm-ccgls-newton-edge-slope-is-boundary-slope
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), Theorem 1.7 and §4.1
      url: https://arxiv.org/pdf/2405.19197v2
    - title: D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane
        curves associated to character varieties of 3-manifolds, Theorem 3.4
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
---

## Statement

Assume full AC. If $K\subset S^3$ is a nontrivial fibered knot that is not a torus knot, then either its exterior contains a connected, separating, incompressible surface whose boundary curves have slope zero, or $K$ has at least three distinct boundary slopes.

## Statement references

[[def-boundary-slope-of-an-incompressible-surface|Boundary slopes and the strict boundary-slope convention]]

[Baldwin and Sivek, Theorem 1.7 and §4.1](https://arxiv.org/pdf/2405.19197v2)

[Cooper, Culler, Gillet, Long, and Shalen, Theorem 3.4](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

## Facts & Assumptions

**Given:** Full AC and a nontrivial fibered knot in $S^3$ that is not a torus knot.

[F1] In the present nontrivial-knot setting, zero is a boundary slope. The ordinary A-polynomial contains $L-1$; for the vertical weight its initial form is the product of the other factor’s initial form with this horizontal segment, so its minimum face is a horizontal edge. The ordinary edge theorem therefore supplies an actual incompressible boundary-incompressible orientable realizing surface. [[thm-ccgls-newton-edge-slope-is-boundary-slope]]

[F2] Every enhanced A-polynomial Newton-edge slope has a connected orientable incompressible boundary-incompressible nonfiber realizing surface, by the actual finite valued-model and equivariant compression construction. [[thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope]]

[F3] A non-torus knot is not thin by the enhanced-A classification; its enhanced Newton polygon is therefore not contained in a line ([[thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots]]).

[F4] A connected nonseparating incompressible longitudinal surface in this fibered exterior is isotopic to its actual fiber, including the boundary-relative refinement after alignment. The actual proof supplies the proper degree-one surface-map step and the downstairs family-innermost product extraction. [[lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber]]

[A2] The Newton-edge-to-essential-surface and strictness operations are supplied by [F1]–[F2]. The full enhanced-A classification [F3] now uses its explicit external Baldwin–Sivek Theorem 1.2 input; it does not claim a local reconstruction of gauge theory. Baldwin–Sivek Theorem 1.7 (p.3; §4.1) also states this exact two-boundary-slope alternative, with the same nontrivial fibered nontorus hypotheses.

## Proof

1.1 By [F3] the enhanced Newton polygon is not contained in a line. A nondegenerate planar polygon has at least two distinct unoriented edge directions, since otherwise all its vertices lie on one line. By [F2] these give two distinct strict boundary slopes. [F2, F3, given, algebra]

2.1 If there are at least three boundary slopes, the second alternative holds. Otherwise [F1] supplies slope zero, so the two distinct strict slopes from step1.1 exhaust the slope set and one is zero. Choose the connected orientable incompressible nonfiber zero-slope realizing surface supplied by [F2]. [F1, F2, step 1.1, cases]

3.1 If that surface were nonseparating, [F4] would make it isotopic to the fiber, contradicting its nonfiber property. It is separating and supplies the first alternative. These alternatives prove the full Statement, using the explicitly external classification input only at [F3]. [F4, step 2.1] ∎
