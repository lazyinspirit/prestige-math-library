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
provenance:
  statement: literature-derived
  proof: not-supplied
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

[A2] The Newton-edge-to-essential-surface and strictness operations are supplied by [F1]–[F2]. The enhanced-A classification still requires its own actual instanton, representation and geometric input closure; this paragraph does not certify those other suppliers.

## Proof obligation

The remaining prerequisite is [F3]. Once its actual proof is supplied, its nondegenerate planar Newton polygon has at least two distinct unoriented edge directions: if all edges were parallel, its vertices would lie on one line. By [F2] these give two distinct strict boundary slopes. If the exterior has at least three boundary slopes, the second alternative holds. Otherwise [F1] gives slope zero and the two distinct strict slopes force the entire slope set to be exactly those two slopes, one of them zero. Choose the connected orientable incompressible nonfiber zero-slope realizing surface from [F2]. If it were nonseparating, [F4] would make it isotopic to the fiber, a contradiction. It is therefore separating and supplies the first alternative. Thus all operations after [F3], including the actual longitudinal fiber-isotopy use, are supplied; this theorem remains held only on the separate enhanced thin-classification proof.
