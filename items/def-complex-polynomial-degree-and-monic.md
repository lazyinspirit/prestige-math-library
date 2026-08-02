---
id: def-complex-polynomial-degree-and-monic
kind: definition
title: "Formal complex polynomials, evaluation, degree, leading coefficient, and monic polynomials"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-complex-numbers-form-a-field, def-complex-integer-powers, def-complex-series-power-series-and-absolute-convergence]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Definition

A **formal complex polynomial** is either the zero polynomial $0$, or a finite coefficient list $(a_0,\ldots,a_n)$ with $a_n\ne0$; we write the latter as $p(Z)=\sum_{k=0}^{n}a_kZ^k$. The list, rather than the function it induces, is the polynomial object. Define evaluation at $z\in\mathbb C$ by
$$
0(z):=0,\qquad p(z):=\sum_{k<n+1}^{\mathbb C}a_kz^k\quad\text{for }p=(a_0,\ldots,a_n)\ne0.
$$
where the latter is the initial-segment complex sum defined in
[[def-complex-series-power-series-and-absolute-convergence]]. Thus evaluation is
defined for the zero polynomial as well as every nonzero formal polynomial.

For nonzero $p=(a_0,\ldots,a_n)$, define $\deg p:=n$ and $\operatorname{lc}(p):=a_n$. The zero polynomial has no degree and no leading coefficient. A nonzero polynomial is **monic** when $\operatorname{lc}(p)=1$. Complex arithmetic and powers are those of [[thm-complex-numbers-form-a-field]] and [[def-complex-integer-powers]].
