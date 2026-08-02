---
id: thm-tangent-half-angle-rational-parametrization
kind: theorem
title: "The tangent half-angle identities and rational parametrization of the unit circle away from $(-1,0)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-double-angle-and-power-reduction-identities, def-tangent-cotangent-secant-cosecant, cor-trigonometric-parity-and-pythagorean-identity]
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
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

If $t=\tan(\theta/2)$ is defined, then
$$\cos\theta=\frac{1-t^2}{1+t^2},\qquad \sin\theta=\frac{2t}{1+t^2}.$$
Conversely every point $(x,y)$ on $x^2+y^2=1$ with $x\ne-1$ has the unique parameter $t=y/(1+x)$ and equals $((1-t^2)/(1+t^2),2t/(1+t^2))$. The conventions and prerequisite facts used below are recorded in [[thm-double-angle-and-power-reduction-identities]], [[def-tangent-cotangent-secant-cosecant]], [[cor-trigonometric-parity-and-pythagorean-identity]].

## Facts & Assumptions

**Given:** The indicated real parameter or unit-circle point.

## Proof

**Proof technique:** direct.

1.1 Divide the double-angle identities by $\cos^2(\theta/2)$ to obtain the rational formulas; $1+t^2>0$. [algebra]

1.2 For a point with $x\ne-1$, put $t=y/(1+x)$ and use $x^2+y^2=1$ to simplify both rational expressions to $x$ and $y$. [algebra]

2.1 The same formula $t=y/(1+x)$ proves uniqueness. [algebra] ∎
