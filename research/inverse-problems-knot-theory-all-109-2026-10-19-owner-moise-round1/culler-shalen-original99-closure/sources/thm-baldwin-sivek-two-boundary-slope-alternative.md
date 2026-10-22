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

[A1] The proof that a nonseparating incompressible longitudinal surface in a fibered exterior is isotopic to the fiber uses Nielsen's surface-covering theorem and Waldhausen's isotopy theorem, whose local proofs are not supplied ([[lem-nonseparating-longitudinal-surface-in-fibered-exterior-is-fiber]]).

[A2] The Newton-edge-to-essential-surface and strictness operations are supplied by [F1]–[F2]. The enhanced-A classification still requires its own actual instanton, representation and geometric input closure; this paragraph does not certify those other suppliers or the Nielsen/Waldhausen input in [A1].

## Proof obligation

If the knot has exactly two boundary slopes, non-thinness forces at least two distinct strict edge slopes of the enhanced Newton polygon. Since every knot also has boundary slope zero, the two slopes must include zero; the source's ideal-point argument makes zero strict. A connected incompressible surface realizing zero is either separating or nonseparating. In the latter case the longitudinal-surface lemma makes it isotopic to the fiber, contradicting strictness, so the separating alternative follows. If the knot has more than two slopes, the second alternative holds. The actual edge-surface theorem now supplies that step, including a connected nonfiber realizing component. The enhanced thin theorem and Nielsen/Waldhausen input still require their own complete local proofs, so this result remains held on those exact inputs.
