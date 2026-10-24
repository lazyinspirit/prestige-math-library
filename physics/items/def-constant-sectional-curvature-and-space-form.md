---
id: def-constant-sectional-curvature-and-space-form
kind: definition
title: Constant sectional curvature and space form
status: published
origin: pipeline
deps: ["def-countable-choice","def-sectional-curvature","def-geodesically-complete-riemannian-manifold"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Section 12.3, printed pages 86–87; Lecture 24 opening, printed page 174
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, printed page 148; Chapter 11 after Corollary 11.13, printed page 206
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ exactly as in
[[def-geodesically-complete-riemannian-manifold]]. It is used here only through
that supplier's construction of the unique maximal geodesic domains needed to
interpret completeness; the constant-curvature predicate itself makes no further family choice beyond the stated inherited assumption.

A Riemannian manifold has **constant sectional curvature $K\in\mathbb R$**
when every tangent two-plane at every point has sectional curvature $K$. A
connected, boundaryless, geodesically complete Riemannian manifold of constant
sectional curvature is called a **space form** on this page.

This global condition is stronger than saying that, at each point $p$, all
two-planes have some common value $K(p)$; Schur's lemma later proves constancy
of that pointwise value in connected dimension at least three. In dimensions
zero and one there are no tangent two-planes, so the predicate “has constant
sectional curvature $K$” is vacuous for every $K$ and does not determine a
distinguished number. Under the library convention that the empty space is
connected, the empty boundaryless complete manifold is correspondingly a
vacuous space form. These low-dimensional conventions do not affect later
formulas, whose alternating metric model vanishes in dimensions below two.
