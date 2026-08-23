---
id: def-tangent-plane-of-a-regular-surface-patch
kind: definition
title: 'The tangent plane of a regular surface patch'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-admissible-regular-parametrized-surface-patch, def-linear-combination-and-span, thm-cross-product-norm-is-the-two-vector-gram-determinant]
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

Let $(D,\varphi)$ be a regular parametrized surface patch ([[def-admissible-regular-parametrized-surface-patch]]) and let $p=\varphi(u,v)$ with $(u,v)\in D^\circ$. At an interior parameter point, the tangent plane is $\operatorname{span}\{\varphi_u,\varphi_v\}$.

The two spanning vectors are linearly independent because their cross product is nonzero ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]), so this is a two-dimensional linear subspace of $\mathbb R^3$ ([[def-linear-combination-and-span]]). The affine tangent plane through $p$ is $p+\operatorname{span}\{\varphi_u,\varphi_v\}$.
