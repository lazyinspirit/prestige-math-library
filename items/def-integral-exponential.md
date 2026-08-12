---
id: def-integral-exponential
kind: definition
title: "The integral exponential $E:\\mathbb R\\to(0,\\infty)$ as the inverse of $L$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-integral-logarithm-is-a-bijection,
       def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Definition

Because

$$L:(0,\infty)\to\mathbb R$$

is a bijection ([[thm-integral-logarithm-is-a-bijection]]), it has an inverse
function in the sense of [[def-injection-surjection-bijection]]. Define the
**integral exponential**

$$E:\mathbb R\to(0,\infty),\qquad E:=L^{-1}.$$

Thus, for $x>0$ and $y\in\mathbb R$,

$$E(L(x))=x,\qquad L(E(y))=y.$$
