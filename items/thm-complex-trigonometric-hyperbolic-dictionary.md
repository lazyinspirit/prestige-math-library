---
id: thm-complex-trigonometric-hyperbolic-dictionary
kind: theorem
title: "The exponential formulas, real restrictions, and trigonometric-hyperbolic dictionary over $\\mathbb C$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-trigonometric-and-hyperbolic-functions, thm-eulers-formula, thm-complex-exponential-addition-and-real-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C$,
$$\cos z=\cosh(iz),\qquad \sin z=-i\sinh(iz),\qquad \cosh z=\cos(iz),\qquad \sinh z=-i\sin(iz).$$
The complex functions restrict to their real sine, cosine, hyperbolic sine and hyperbolic cosine series on the real axis. The conventions and prerequisite facts used below are recorded in [[def-complex-trigonometric-and-hyperbolic-functions]], [[thm-eulers-formula]], [[thm-complex-exponential-addition-and-real-extension]].

## Facts & Assumptions

**Given:** A complex number $z$.

## Proof

**Proof technique:** direct.

1.1 Substitute $iz$ and $-iz$ into the four definitions and simplify $i^2=-1$. [algebra]

2.1 On real arguments, group the exponential series into even and odd terms as in Euler's formula. [given] ∎
