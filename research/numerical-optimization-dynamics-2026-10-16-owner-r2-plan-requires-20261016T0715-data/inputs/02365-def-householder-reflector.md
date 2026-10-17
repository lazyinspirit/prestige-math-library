---
id: def-householder-reflector
kind: definition
title: "Householder reflectors in real or complex inner-product spaces"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-norm]
aliases: []
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Definition 3.4.1"
      url: "https://fncbook.com/house/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Least squares and QR"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html"
---

## Definition

Let $V$ be a finite-dimensional real or complex inner-product space and let
$v\in V$ satisfy $\|v\|=1$, where $\|\cdot\|$ is the norm of
[[def-inner-product-norm]]. The **Householder reflector with normal $v$** is
the linear map

$$H_v(x):=x-2\langle x,v\rangle v.$$In matrix form relative to an orthonormal basis, this is$$H_v=I-2vv^*.$$

The reflector fixes every vector orthogonal to $v$ and sends $v$ to $-v$.
