---
id: rem-surface-gauss-bonnet-versus-higher-dimensional-cern-gauss-bonnet
kind: remark
title: Scope of classical surface Gauss-Bonnet
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.7 and the chapter introduction, printed pp. 156-172 (PDF pp. 173-188): the surface theorem and Lee's remark that its higher-dimensional analogue is not treated there."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4 and the closing remarks, printed pp. 14-15 (PDF pp. 21-22): the surface theorem only."
verification:
  audited: 2026-09-30
---

## Remark

The result proved and used on this page is the two-dimensional
Gauss-Bonnet identity [[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]],
$\int_MK\,dA=2\pi\chi(M)$ for a closed oriented Riemannian surface, together
with its boundary forms: it equates a curvature integral with an integer
topological invariant.

It is a curvature/Euler-characteristic identity, not a classification
theorem. Passing from the curvature identity to a genus formula, a normal form,
or a homeomorphism type requires additional topological results. The
topological classification of compact connected surfaces supplies one such
route and is developed separately on the page
`classification-of-compact-connected-surfaces` and is not proved or used
here. Formulas such as $\chi=2-2g$ for orientable genus-$g$ surfaces are
consequences of that classification, though classification is not the only way
to establish a genus formula; they are not inferred from the curvature
identity on this page.

Likewise this page proves nothing about higher dimensions. The
Chern-Gauss-Bonnet theorem identifies, in even dimensions, the integral of a
characteristic form built from the curvature (the Pfaffian or Euler form) with
the Euler characteristic, and it belongs to characteristic-class and
Chern-Weil theory; no Pfaffian form, characteristic class, transgression or
connection on a general vector bundle is constructed here, and the
higher-dimensional theorem is neither proved nor used. Nor is a
Poincare-Hopf statement asserted. The surface theorem is self-contained on
this page, and no consequence of the higher-dimensional theory is imported
back into it.
