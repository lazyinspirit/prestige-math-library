---
id: def-interior-product-of-a-form-by-a-vector-field
kind: definition
title: "Interior product of a form by a vector field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-differential-k-form,
       def-tangent-bundle-as-a-disjoint-union,
       def-smooth-section-local-section-and-support,
       def-interior-product-on-alternating-covectors,
       prop-local-coordinate-expression-for-a-differential-form]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $X:M\to TM$ be a smooth section of the tangent bundle, that is, a smooth
vector field on $M$, and let $\omega\in\Omega^k(M)$. The **interior product**
$\iota_X\omega\in\Omega^{k-1}(M)$ is defined pointwise by

$$
(\iota_X\omega)_p:=\iota_{X_p}\omega_p.
$$

For $k=0$, adopt the formal convention $\Omega^{-1}(M):=\{0\}$ and set
$\iota_X\omega:=0$.

This pointwise field is smooth. Indeed, in local coordinates write
$X=\sum_jX^j\partial_j$ and expand $\omega$ in the smooth frame $dx^I$ as in
[[prop-local-coordinate-expression-for-a-differential-form]]. The coefficients
of $\iota_X\omega$ are signed finite sums of products $X^j\omega_I$, and are
therefore smooth.
