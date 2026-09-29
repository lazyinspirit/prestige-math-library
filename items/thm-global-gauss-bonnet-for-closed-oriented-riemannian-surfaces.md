---
id: thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
kind: theorem
title: Global Gauss-Bonnet for closed oriented surfaces
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
landmark: true
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.7, printed pp. 167-172 (PDF pp. 183-188): the Gauss-Bonnet theorem for a compact oriented surface without boundary."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4, printed pp. 14-15 (PDF pp. 21-22): the global Gauss-Bonnet theorem for closed oriented surfaces."
---

## Statement

Assume the axiom of choice through the parent triangulation and
metric-extension suppliers. Let $M$ be a closed oriented Riemannian surface,
that is, a compact oriented smooth surface with empty boundary carrying a
Riemannian metric $g$. Then
$$\int_MK\,dA=2\pi\chi(M),$$
where $K$ is the Gaussian curvature, $dA$ the area form of the orientation,
and $\chi(M)$ the Euler characteristic of
[[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]].
For the empty surface $M=\varnothing$ the identity is the true statement
$0=0$, since $\chi(\varnothing)=0$.

## Facts & Assumptions

**Given:** A closed oriented Riemannian surface, possibly empty and possibly disconnected, with its metric and orientation.

[A1] Full AC is inherited exactly through the parent theorem's curvilinear triangulation supplier and is used nowhere else ([[def-axiom-of-choice]]).

[F1] A closed oriented Riemannian surface is a compact oriented Riemannian surface with smooth (empty) boundary; when it is viewed as a compact regular region in itself, the regular-region convention admits the empty boundary, and the parent theorem gives $\int_MK\,dA+\int_{\partial M}k_g\,ds+\sum_j\alpha_j=2\pi\chi(M)$ with both boundary terms omitted when $\partial M=\varnothing$ ([[thm-gauss-bonnet-for-compact-oriented-surfaces-with-boundary-and-corners]], [[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

[F2] A curvilinear triangulation of the empty surface has $V=E=F=\varnothing$, so its count is $\chi(\varnothing)=0-0+0=0$, and for a nonempty compact smooth surface the invariant $\chi(M)$ is the common value $V-E+F$ of the finite curvilinear triangulations ([[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Proof

**Proof technique:** apply the boundary-and-corners theorem with empty boundary and split off the empty-surface case.

1.1 If $M\neq\varnothing$, view $M$ as a compact oriented Riemannian surface presented in presentation (a) of the parent theorem with $\Sigma=M$ and empty boundary, or equivalently in presentation (b) with empty smooth boundary; by [F1] the theorem applies and both the boundary integral and the corner sum are omitted, giving $\int_MK\,dA=2\pi\chi(M)$, with $\chi(M)$ the common count of [F2]. [A1, F1, F2, given]

1.2 If $M=\varnothing$, then every finite curvilinear triangulation has no vertices, edges or faces by [F2], so $\chi(\varnothing)=0$; the integral of a function over the empty surface is $0$ and the identity reads $0=2\pi\cdot0$, which is true. [F2, given, algebra]

2.1 In both cases the asserted identity holds, and the full-choice assumption was inherited unchanged from the parent theorem through its triangulation supplier; no new choice, orientation cover or classification statement is used. [A1, step 1.1, step 1.2] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7, printed pp. 167-172, proves the global formula $\int_MK\,dA=2\pi\chi(M)$ for a compact oriented surface without boundary; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.2.4, printed pp. 14-15, gives the same statement. The reduction to the boundary-and-corners theorem with empty boundary is performed here using the library conventions of [[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], and the Euler characteristic is the invariant of [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]; the empty-surface case is handled from the triangulation-indexed definition rather than by convention.
