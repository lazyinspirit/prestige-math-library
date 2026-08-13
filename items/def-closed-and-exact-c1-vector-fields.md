---
id: def-closed-and-exact-c1-vector-fields
kind: definition
title: "Exact and closed C1 vector fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^n$ be open and let $F=(F_0,\ldots,F_{n-1}):U\to\mathbb R^n$ be $C^1$. Coordinates and partial derivatives are indexed from $0$ throughout, as in [[lem-standard-basis-of-f-n]] and [[def-jacobian-matrix-and-gradient]]. It is **exact** when $F=\nabla\phi$ for some $C^2$ scalar function $\phi:U\to\mathbb R$, using the gradient of [[def-jacobian-matrix-and-gradient]]. It is **closed** when

$$\partial_jF_i=\partial_iF_j\qquad(i,j<n),$$

where the partial derivatives are those of [[def-directional-and-partial-derivatives]]. The $C^2$ requirement in exactness makes all mixed second partials of the potential available and continuous.
