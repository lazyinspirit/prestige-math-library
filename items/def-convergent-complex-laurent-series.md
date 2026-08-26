---
id: def-convergent-complex-laurent-series
kind: definition
title: "Convergent Laurent series on an annulus"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-annulus]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §§1.1-1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Definition

Fix an annulus $A(a;r,R)$ ([[def-complex-annulus]]) and complex coefficients
$c_n$ indexed by $n\in\mathbb Z$. The formal expression

$$\sum_{n\in\mathbb Z}c_n(z-a)^n=\sum_{n\ge0}c_n(z-a)^n+\sum_{m\ge1}c_{-m}(z-a)^{-m}$$

is a **convergent Laurent series on $A(a;r,R)$** when, for every closed
subannulus

$$K_{\rho,\sigma}:=\{\,z\in\mathbb C:\rho\le|z-a|\le\sigma\,\}\subseteq A(a;r,R)$$

with $r<\rho\le\sigma<R$, both one-sided series on the right converge uniformly
on $K_{\rho,\sigma}$.

Its **sum** is the function $f:A(a;r,R)\to\mathbb C$ defined by that convergent
value at each point of the annulus, and the numbers $c_n$ are its **Laurent
coefficients**.

## Remarks

The definition is local-uniform rather than merely pointwise because Laurent
series are used as holomorphic expansions: later proofs integrate them term by
term on circles inside the annulus.

The split into nonnegative and negative powers is part of the definition. On a
punctured disc or exterior domain, the same series may converge in one direction
further than in the other, and the annulus records exactly where both pieces are
simultaneously valid.
