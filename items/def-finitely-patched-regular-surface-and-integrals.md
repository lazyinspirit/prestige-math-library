---
id: def-finitely-patched-regular-surface-and-integrals
kind: definition
title: 'Finitely patched regular surfaces, their area, scalar integrals, and flux'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-surface-area-and-scalar-surface-integral-of-a-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, lem-parameter-boundary-exceptions-do-not-affect-surface-integrals]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, Piecewise Smooth Surfaces'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Definition

A **compatible finite patch presentation** is a finite list of regular surface patches whose images cover a set $S$, such that for two distinct patches the preimage of their overlap has content zero in each parameter region. For flux, their induced normals must agree at every point of the overlap that is the image of an interior parameter point of both patches. Stating the requirement on the overlap itself is what gives it content: the induced normal of a patch is defined at the images of its interior parameter points, so a requirement imposed only away from the overlap preimages would constrain nothing and would admit opposite normals on patches whose interiors meet along a curve.

For a compatible finite patch presentation, area, scalar surface integrals, and oriented flux are the sums of the corresponding patch values; pairwise overlap preimages have content zero. The presentation is part of the data, so these sums are single-valued without presuming an unproved independence-of-presentation theorem. The content-zero modification result [[lem-parameter-boundary-exceptions-do-not-affect-surface-integrals]] ensures that seam, pole and endpoint values on a parameter boundary do not affect the individual summands. The content-zero condition on overlap preimages is a separate restriction on the presentation, and what it buys is that no piece of $S$ carrying positive area is counted twice; each summand is an integral over the whole of its own parameter region and is unaffected by the overlaps.
