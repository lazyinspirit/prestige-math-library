---
id: def-imprimitive-wreath-product-of-permutation-groups
kind: definition
title: "The imprimitive wreath product of permutation groups"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-action-by-automorphisms, def-external-semidirect-product, thm-external-semidirect-product-is-a-group, def-group-action]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Definition

Let $H$ act on a set $B$, and let $K$ act on a set $\Sigma$, both by left
actions ([[def-group-action]]).

Write
$$H^\Sigma := \{\, f : \Sigma \to H \,\}$$
with pointwise multiplication. The action of $K$ on $H^\Sigma$ by
automorphisms is
$$\bigl(k \cdot f\bigr)(\sigma) := f(k^{-1} \cdot \sigma).$$
Using [[def-action-by-automorphisms]] and
[[def-external-semidirect-product]], form the semidirect product
$$H^\Sigma \rtimes K.$$

The **imprimitive wreath product** of the two permutation groups is this
semidirect product, written
$$H \wr_\Sigma K := H^\Sigma \rtimes K.$$

It acts on $B \times \Sigma$ by
$$
(f,k) \cdot (b,\sigma) := \bigl(f(k \cdot \sigma) \cdot b,\ k \cdot \sigma\bigr).
$$
Indeed, if
$$
(f,k)(f',k') = \bigl(f \cdot (k \cdot f'),\ kk'\bigr),
$$
then the first coordinate at $(b,\sigma)$ becomes
$$\bigl(f \cdot (k \cdot f')\bigr)(kk' \cdot \sigma) \cdot b = f(kk' \cdot \sigma) \cdot \bigl(f'(k' \cdot \sigma) \cdot b\bigr),$$
which is exactly what one gets by first applying $(f',k')$ and then $(f,k)$.
