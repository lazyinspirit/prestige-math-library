---
id: ex-a-harmonic-conjugate-of-x-squared-minus-y-squared
kind: example
title: "2xy is a harmonic conjugate of x^2-y^2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-harmonic-conjugate, thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-c2-holomorphic-components-are-harmonic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Example

The function $v(x,y)=2xy$ is a harmonic conjugate of $u(x,y)=x^2-y^2$ on all of
$\mathbb C$.

## Facts & Assumptions

**Given:** The polynomial $f(z)=z^2$.

[L1] Complex polynomials are entire ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L2] If a holomorphic function is written $u+iv$, then its imaginary part is a harmonic conjugate of its real part ([[thm-c2-holomorphic-components-are-harmonic]], [[def-harmonic-conjugate]]).

## Verification

**Proof technique:** direct.

1.1 Since $z^2=(x+iy)^2=(x^2-y^2)+2ixy$, the real part of $z^2$ is $x^2-y^2$ and the imaginary part is $2xy$. [given, algebra]

2.1 The polynomial $z^2$ is entire by [L1], so [L2] makes $2xy$ a harmonic conjugate of $x^2-y^2$. [step 1.1, L1, L2] ∎
