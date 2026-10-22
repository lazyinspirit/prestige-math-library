---
id: thm-ccgls-newton-edge-slope-is-boundary-slope
kind: theorem
title: Newton polygon edge slopes are boundary slopes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-knot-a-polynomial
  - def-boundary-slope-of-an-incompressible-surface
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-knot-a-polynomial-boundary-elimination
  - lem-knot-exterior-is-irreducible
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - thm-culler-shalen-ideal-point-produces-essential-surface-with-edge-slope
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane
        curves associated to character varieties of 3-manifolds, Theorem 3.4
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
    - title: Stephan Tillmann, Varieties associated to 3-manifolds, §7
      url: https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf
---

## Statement

Assume full AC and let $K\subset S^3$ be a nontrivial smooth knot. Form the Newton polygon of the ordinary A-polynomial using the exponent convention that the lattice point $(a,b)$ represents the monomial $M^bL^a$, so edge slopes are measured in the preferred meridian-longitude convention. Every finite rational slope or infinite slope of an edge of this Newton polygon is a boundary slope of an incompressible, boundary-incompressible, orientable surface in the knot exterior. This statement does not assert that the realizing surface is non-fibered or that the slope is strict.

## Statement references

[Cooper, Culler, Gillet, Long, and Shalen, Theorem 3.4](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

[Tillmann, §7](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, the reduced Laurent A-polynomial curve, its Newton polygon in the specified exponent convention, and the marked meridian-longitude basis.

[F1] A-polynomial curve components are the reduced boundary eigenvalue image components ([[def-knot-a-polynomial]]; [[lem-knot-a-polynomial-boundary-elimination]]).

[F2] Boundary slope is measured by $a[\lambda]+b[\mu]\mapsto b/a$ ([[def-boundary-slope-of-an-incompressible-surface]]).

[F3] The exterior of a nontrivial knot is irreducible and has incompressible boundary ([[lem-knot-exterior-is-irreducible]]; [[lem-nontrivial-knot-exterior-boundary-incompressible]]).

[A1] For each Newton edge, the valuation at the corresponding ideal point must be converted into an action on the Bruhat–Tits tree, and the associated surface's boundary class must be computed from the edge normal. The local Culler–Shalen tree and surface construction is not supplied; the proposed missing supplier is [[thm-culler-shalen-ideal-point-produces-essential-surface-with-edge-slope]].

## Proof obligation

The required argument identifies each edge with a valuation of the boundary eigenvalue curve, extends the peripheral representation over the function field, constructs the tree action from that valuation, and extracts an essential surface whose boundary slope is the edge slope. The sign and reciprocal depend on the stated coordinate convention. Those steps are not proved by the source citation alone, so this theorem is escalated.
