---
id: def-curvature-of-an-affine-connection
kind: definition
title: Curvature of an affine connection
status: published
origin: pipeline
deps: ["def-affine-connection-on-a-smooth-manifold", "def-lie-bracket-of-smooth-vector-fields"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 11, Section 11.1, printed page 72
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, page 117, equation (7.3) and Proposition 7.1
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $M$ be a smooth manifold, let $\nabla$ be an affine connection on $M$ in
the sense of [[def-affine-connection-on-a-smooth-manifold]], and let $X,Y,Z$ be
smooth vector fields. With the sign convention used throughout this page, the
**curvature of $\nabla$** is

$$R^\nabla(X,Y)Z:=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z,$$

where $[X,Y]$ is the bracket of
[[def-lie-bracket-of-smooth-vector-fields]]. We usually write $R$ when the
connection is understood. The connection is **flat** or **curvature-free** when
$R(X,Y)Z=0$ for every triple of smooth vector fields.

The bracket correction is part of the definition. The raw commutator of two
covariant derivatives is not function-linear in its differentiating fields.
No metric or torsion hypothesis is imposed here. On an empty or
zero-dimensional manifold the condition is vacuous; on manifolds with boundary
the same formula uses the ambient tangent bundle supplied by the definition of
an affine connection.
