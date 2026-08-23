---
id: def-admissible-regular-parametrized-surface-patch
kind: definition
title: 'Regular parametrized surface patches on compact Jordan parameter regions'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cross-product-in-r3, def-ck-euclidean-maps-and-diffeomorphisms, def-riemann-integral-over-a-jordan-set, def-metric-interior-closure-boundary, thm-jordan-boundary-criterion]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Definition

A **compact Jordan parameter region** is a compact Jordan measurable set $D\subseteq\mathbb R^2$ that is the closure of its nonempty connected interior $D^\circ$ ([[def-riemann-integral-over-a-jordan-set]], [[def-metric-interior-closure-boundary]]). Its boundary has content zero ([[thm-jordan-boundary-criterion]]).

A regular parametrized surface patch is the image of a $C^1$ map from a compact Jordan parameter region whose parameter cross product is nonzero on the region's interior and for which no interior parameter point shares its image with a distinct point of the whole region. Seam identifications and rank failures may occur only on the boundary. Here $C^1$ is the Euclidean componentwise class of [[def-ck-euclidean-maps-and-diffeomorphisms]]. More precisely, the parametrization $\varphi$ is defined on an open neighbourhood of $D$, $\varphi_u\times\varphi_v\ne0$ on $D^\circ$, and no point of $D^\circ$ has the same image as a distinct point of $D$. The chosen pair $(D,\varphi)$ is part of the patch data.
