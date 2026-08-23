---
id: def-oriented-unit-normal-and-flux-of-a-surface-patch
kind: definition
title: 'Unit normal fields, orientations, and flux through a regular surface patch'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-surface-area-and-scalar-surface-integral-of-a-patch, def-tangent-plane-of-a-regular-surface-patch, thm-surface-area-density-is-cross-product-norm, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Definition

For a regular patch $(D,\varphi)$, the parametrization induces on its interior the unit normal
$$N_\varphi=\frac{\varphi_u\times\varphi_v}{\|\varphi_u\times\varphi_v\|_2}.$$
The denominator is positive there by regularity and [[thm-surface-area-density-is-cross-product-norm]], and the vector is orthogonal to the tangent plane ([[def-tangent-plane-of-a-regular-surface-patch]]). Choosing $N_\varphi$ rather than $-N_\varphi$ is an **orientation**.

For a continuous vector field $F$, the flux in the orientation induced by $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$. This is the scalar Riemann integral of a continuous function on $D$ ([[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[def-euclidean-inner-product]]); replacing the orientation by its negative negates the integrand.
