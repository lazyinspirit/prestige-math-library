---
id: def-real-polynomial-degree-leading-coefficient-and-monic
kind: definition
title: "Formal real polynomials, evaluation, degree, leading coefficient, and monic polynomials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-sum, def-integer-power]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Definition

A **formal real polynomial** is either the zero polynomial $0$, or a finite coefficient list $(a_0,\ldots,a_n)$ with $a_n\ne0$; we write the latter as $p(X)=\sum_{k=0}^{n}a_kX^k$. The list, rather than the function it induces, is the polynomial object. Its **evaluation** at $x\in\mathbb R$ is the real number $p(x):=\sum_{k=0}^{n}a_kx^k$.

For nonzero $p=(a_0,\ldots,a_n)$, define $\deg p:=n$ and $\operatorname{lc}(p):=a_n$. The zero polynomial has no degree and no leading coefficient. A nonzero polynomial is **monic** when $\operatorname{lc}(p)=1$. Thus degree and leading coefficient are defined from the displayed finite list, without asserting that distinct formal polynomials define distinct functions. The conventions for finite sums and integer powers used in the evaluation are recorded in [[def-finite-sum]], [[def-integer-power]].
