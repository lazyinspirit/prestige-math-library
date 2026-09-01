---
id: def-secant-and-tangent-direction-maps-of-an-euclidean-embedding
kind: definition
title: "Secant and tangent direction maps of a Euclidean embedding"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-embedding,
       thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure,
       def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 6"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $N\ge1$ and let $f:M\to\mathbb R^N$ be a smooth embedding.

The **secant direction map** of $f$ is
$$\sigma_f:(M\times M)\setminus\Delta_M\to S^{N-1},\qquad \sigma_f(p,q):=\frac{f(q)-f(p)}{\|f(q)-f(p)\|},$$
where $\Delta_M$ is the diagonal and the norm comes from the Euclidean inner
product on $\mathbb R^N$ ([[def-euclidean-inner-product]]).

The **tangent direction map** of $f$ is
$$\tau_f:TM\setminus 0_M\to S^{N-1},\qquad \tau_f(p,v):=\frac{df_p(v)}{\|df_p(v)\|}.$$
This is well defined because $f$ is an immersion, so $df_p(v)\ne0$ for every
nonzero tangent vector $v$ ([[def-smooth-embedding]]). The construction uses
only the punctured tangent fibres; whenever its smooth-manifold structure is
needed, it is obtained locally by deleting the zero section in tangent-bundle
charts.
