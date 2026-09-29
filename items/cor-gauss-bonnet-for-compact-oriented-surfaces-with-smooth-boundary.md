---
id: cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary
kind: corollary
title: Gauss-Bonnet with smooth boundary
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-gauss-bonnet-for-compact-oriented-surfaces-with-boundary-and-corners
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 156-172 (PDF pp. 173-188): Theorem 9.3 with the boundary term and no corner term on smooth boundary; Theorem 9.7 for the global form."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Sections 2.0-2.2, printed pp. 10-15 (PDF pp. 17-22): Theorem 2.0.1 with the corner terms, and the observation that they are absent on smooth boundary."
---

## Statement

Assume the axiom of choice through the parent triangulation and
metric-extension suppliers. Let $M$ be a compact oriented Riemannian surface
with smooth boundary, presented as in presentation (b) of
[[thm-gauss-bonnet-for-compact-oriented-surfaces-with-boundary-and-corners]]
(the metric-extension neighbourhood of the labelled copy in its smooth
double), or equivalently as a compact regular oriented region with empty
corner set in an oriented boundaryless Riemannian surface. Then
$$\int_MK\,dA+\int_{\partial M}k_g\,ds=2\pi\chi(M),$$
the boundary carrying the outward-normal-first orientation, and when
$\partial M=\varnothing$ the boundary integral is omitted, so that
$\int_MK\,dA=2\pi\chi(M)$.

## Facts & Assumptions

**Given:** A compact oriented Riemannian surface with smooth boundary in one of the two equivalent presentations, with the outward-normal-first boundary orientation.

[A1] Full AC is inherited through the parent theorem, including both its curvilinear triangulation and local Gauss–Bonnet summation suppliers; this specialization makes no further choice ([[def-axiom-of-choice]]).

[F1] For a compact oriented Riemannian surface presented with smooth boundary, or as a regular region with finitely many ordinary corners, $\int_MK\,dA+\int_{\partial M}k_g\,ds+\sum_j\alpha_j=2\pi\chi(M)$; in the smooth-boundary presentation the corner sum is empty and when $\partial M=\varnothing$ both boundary terms are omitted ([[thm-gauss-bonnet-for-compact-oriented-surfaces-with-boundary-and-corners]]).

[F2] Each boundary curve in a regular-region presentation is a cyclic concatenation of finitely many regular $C^2$ embedded arcs meeting only at consecutive endpoints ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]). At a smooth boundary, any such subdivision points are smooth points: their adjacent oriented tangent directions agree, so their interior angle is $\pi$ and their signed exterior angle is $0$.

[F3] For a compact smooth surface with smooth boundary, the number $\chi(M)$ in [F1] is the common value of $V-E+F$ over the finite curvilinear triangulations of $M$ ([[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Proof

**Proof technique:** apply the parent theorem with empty corner set and evaluate the corner sum as zero.

1.1 The parent theorem [F1] applies to the given presentation and gives $$\int_MK\,dA+\int_{\partial M}k_g\,ds+\sum_j\alpha_j=2\pi\chi(M),$$ with the outward-normal-first boundary orientation and with the corner sum empty in the smooth-boundary presentation. [A1, F1, given]

2.1 In the smooth-boundary presentation there are no geometric corners. A closed boundary circle may be divided into finitely many regular arcs as in [F2]; every resulting subdivision point is smooth, with interior angle $\pi$ and signed exterior angle $0$. Thus the corner sum in step 1.1 vanishes, and its removal gives $\int_MK\,dA+\int_{\partial M}k_g\,ds=2\pi\chi(M)$; if $\partial M=\varnothing$ the boundary integral is absent, and the identity reads $\int_MK\,dA=2\pi\chi(M)$. The value $\chi(M)$ on the right is the invariant of [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 The full-choice assumption is inherited unchanged from the parent theorem: the proof above adds only the evaluation of a vanishing finite sum and introduces no new selection or existence claim. [A1, step 1.1, step 2.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 156-172, states the Gauss-Bonnet formula with the boundary integral and no corner term on smooth boundary (Theorem 9.3) and its global form (Theorem 9.7); Datar, *Lectures on Riemannian Geometry*, Lecture 2, Sections 2.0-2.2, printed pp. 10-15, writes the corner terms and observes that they are absent on smooth boundary (Theorem 2.0.1). The evaluation of the empty corner sum uses the library convention of [[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], and the Euler characteristic is the invariant of [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]; the transfer of the full axiom-of-choice hypothesis from the parent theorem is a bookkeeping step performed above.
