---
id: def-rayleigh-quotient
kind: definition
title: "The Rayleigh quotient of a nonzero vector for a self-adjoint endomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-self-adjoint-and-normal-endomorphism, def-inner-product-space]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "MIT 18.409, Lecture 3: Courant-Fischer and Rayleigh quotients"
      url: "https://ocw.mit.edu/courses/18-409-topics-in-theoretical-computer-science-an-algorithmists-toolkit-fall-2009/535add3f6457cc13e51d9774f16bf48f_MIT18_409F09_scribe3.pdf"
---

## Definition

Let $V$ be a finite-dimensional real inner product space, let $T:V\to V$ be
self-adjoint, and let $v\in V$ be nonzero. The **Rayleigh quotient** of $v$ for
$T$ is

$$R_T(v):=\frac{\langle Tv,v\rangle}{\langle v,v\rangle}.$$

Because $\langle v,v\rangle>0$ for nonzero $v$ in an inner product space, this
quotient is a well-defined real number.
