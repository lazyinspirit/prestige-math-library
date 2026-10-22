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

[F1] Every knot has boundary slope zero, realized by a Seifert surface ([[def-boundary-slope-of-an-incompressible-surface]] and the marked-longitude convention).

[F2] Every enhanced A-polynomial Newton-edge slope is a strict boundary slope only after the separate Culler–Shalen edge-to-surface theorem is proved ([[thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope]]).

[F3] A non-torus knot is not thin by the enhanced-A classification; its enhanced Newton polygon is therefore not contained in a line ([[thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots]]).

[A1] The proof that a nonseparating incompressible longitudinal surface in a fibered exterior is isotopic to the fiber uses Nielsen's surface-covering theorem and Waldhausen's isotopy theorem, whose local proofs are not supplied ([[lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber]]).

[A2] The strict Newton-edge boundary-slope theorem requires the unresolved Culler–Shalen valuation/tree-to-surface result; the enhanced-A classification also has unresolved instanton, SL2/character-variety consequences of the now locally supplied hyperbolic filling metric theorem, and JSJ inputs.

## Proof obligation

If the knot has exactly two boundary slopes, non-thinness forces at least two distinct strict edge slopes of the enhanced Newton polygon. Since every knot also has boundary slope zero, the two slopes must include zero; the source's ideal-point argument makes zero strict. A connected incompressible surface realizing zero is either separating or nonseparating. In the latter case the longitudinal-surface lemma makes it isotopic to the fiber, contradicting strictness, so the separating alternative follows. If the knot has more than two slopes, the second alternative holds. The enhanced thin theorem, Culler–Shalen surface theorem, and Nielsen/Waldhausen input remain escalated, so this result is escalated.
