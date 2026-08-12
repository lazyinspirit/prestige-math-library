---
id: def-closed-and-exact-c1-vector-fields
kind: definition
title: "Exact and closed C1 vector fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^n$ be open and let $F=(F_1,\ldots,F_n):U\to\mathbb R^n$ be $C^1$. It is **exact** when $F=\nabla\phi$ for some $C^2$ scalar function $\phi:U\to\mathbb R$, using the gradient of [[def-jacobian-matrix-and-gradient]]. It is **closed** when

$$\partial_jF_i=\partial_iF_j\qquad(1\le i,j\le n),$$

where the partial derivatives are those of [[def-directional-and-partial-derivatives]]. The $C^2$ requirement in exactness makes all mixed second partials of the potential available and continuous.
