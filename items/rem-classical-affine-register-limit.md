---
id: rem-classical-affine-register-limit
kind: remark
title: "The classical affine dictionary forgets nilpotents and non-rational points"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-reduced-affine-algebra
  - thm-affine-algebraic-sets-coordinate-duality
  - lem-maximal-ideals-are-points-over-algebraically-closed-field
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Aside 2.24 and Chapter 3e"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, affine variety discussion"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

For an algebraically closed field $k$, the classical affine dictionary keeps
only reduced affine $k$-algebras and only their $k$-rational points.

By [[thm-affine-algebraic-sets-coordinate-duality]], an affine algebraic set
recovers exactly its reduced coordinate ring. Nilpotent structure is invisible
to the point set: if one replaces a ring by its reduction, the same classical
algebraic set is obtained. By
[[lem-maximal-ideals-are-points-over-algebraically-closed-field]], the visible
points are precisely maximal ideals with residue field $k$, so closed points
with larger residue fields and nonmaximal prime ideals do not appear in this
register.

These are the two losses scheme theory repairs later: nilpotents return through
nonreduced affine schemes, and non-rational or generic points return through
the full prime spectrum.
