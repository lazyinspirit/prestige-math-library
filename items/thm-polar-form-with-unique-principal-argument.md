---
id: thm-polar-form-with-unique-principal-argument
kind: theorem
title: "Every nonzero complex number has a unique polar form $r(\\cos\\theta+i\\sin\\theta)$ with $r>0$ and $-\\pi<\\theta\\le\\pi$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, thm-sine-and-cosine-parametrize-the-unit-circle, thm-sine-cosine-zero-sets-and-fundamental-period]
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

Every $z\ne0$ has a unique representation $z=r(\cos\theta+i\sin\theta)$ with $r=|z|>0$ and $-\pi<\theta\le\pi$. The conventions and prerequisite facts used below are recorded in [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-sine-and-cosine-parametrize-the-unit-circle]], [[thm-sine-cosine-zero-sets-and-fundamental-period]].

## Facts & Assumptions

**Given:** $z=x+iy\ne0$.

## Proof

**Proof technique:** direct.

1.1 The point $(x/|z|,y/|z|)$ lies on the unit circle. [algebra]

1.2 The unit-circle parametrization supplies an angle, and its endpoint convention converts it uniquely to $(-\pi,\pi]$. [given]

2.1 Multiplying by $|z|$ proves existence; the period theorem proves uniqueness. [given] ∎
