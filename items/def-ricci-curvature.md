---
id: def-ricci-curvature
kind: definition
title: Ricci curvature
status: published
origin: pipeline
deps: ["def-riemann-curvature-four-tensor", "def-trace-of-an-endomorphism"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Definition 12.2.1, printed page 85
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, Ricci and Scalar Curvatures, printed pages 124–125
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

For $X,Y\in T_pM$, the **Ricci curvature** is

$$\operatorname{Ric}_p(X,Y):=\operatorname{tr}\bigl(Z\longmapsto R_p(Z,X)Y\bigr).$$

The trace is the basis-independent trace of this endomorphism of $T_pM$; no
orthonormal basis is part of the definition. Equivalently, Ricci contracts the
first input of the curvature endomorphism with its output. The next lemma
proves smoothness and symmetry and derives the orthonormal-basis formula.

On a zero-dimensional tangent space the endomorphism and its empty trace are
zero. On an empty manifold this is the unique empty two-tensor, and the same
pointwise definition applies in dimension one and at a boundary point. No
choice of bases over the points of $M$ is made.
