---
id: def-surface-reparametrization-and-orientation
kind: definition
title: 'Surface reparametrizations and their orientation sign'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-admissible-regular-parametrized-surface-patch, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-determinant-of-a-c-one-map]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3, An Invariance Property'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Definition

Let $(D,\varphi)$ and $(E,\psi)$ be regular surface patches. A regular reparametrization from $\psi$ to $\varphi$ is a $C^1$ diffeomorphism $h$ between neighbourhoods of their compact Jordan parameter regions with $\psi=\varphi\circ h$. We additionally require $h[E]=D$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

The derivative $Dh$ is invertible, so its Jacobian determinant is nonzero ([[def-jacobian-determinant-of-a-c-one-map]]). A regular surface reparametrization is orientation-preserving when its parameter Jacobian determinant is positive and orientation-reversing when it is negative. Constancy of the sign on a connected parameter region is proved separately; the terms here apply pointwise whenever needed.
