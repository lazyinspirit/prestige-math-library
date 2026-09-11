---
id: def-christoffel-symbols-of-an-affine-connection
kind: definition
title: "Christoffel symbols of an affine connection"
status: draft
origin: pipeline
deps: ["def-affine-connection-on-a-smooth-manifold","def-connection-one-form-in-a-local-frame"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

For an affine connection as in [[def-affine-connection-on-a-smooth-manifold]] and coordinates $(x^1,\ldots,x^n)$, its **Christoffel symbols** in this chart are the unique smooth functions $\Gamma^k{}_{ij}$ such that
$$\nabla_{\partial_i}\partial_j=\sum_k\Gamma^k{}_{ij}\partial_k.$$
The first lower index $i$ is the differentiating direction and the second lower index $j$ labels the differentiated vector field. In the coordinate frame, the one-forms from [[def-connection-one-form-in-a-local-frame]] are $\omega^k{}_j=\sum_i\Gamma^k{}_{ij}\,dx^i$. A different chart generally has different symbols. This definition asserts neither symmetry in $i,j$ nor tensorial transformation.

For dimension one there is one smooth coefficient $\Gamma^1{}_{11}$; in dimension zero there are no coefficients. All statements are local, and at a boundary chart the derivatives are the smooth up-to-boundary coordinate derivatives.
