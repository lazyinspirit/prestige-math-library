---
id: ex-poisson-integral-of-cos-theta
kind: example
title: "The Poisson integral of cos(theta) is r cos(theta)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poisson-integral-on-the-disc, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-c2-holomorphic-components-are-harmonic, thm-complex-polynomials-and-rational-functions-are-holomorphic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Example

For the boundary datum $\varphi(e^{i\theta})=\cos\theta$, the Poisson integral is

$$P[\varphi](re^{i\phi})=r\cos\phi.$$

## Facts & Assumptions

**Given:** The boundary datum $\varphi(e^{i\theta})=\cos\theta$ on $\partial\mathbb D$.

[L1] The Poisson integral gives the unique continuous harmonic extension to the closed unit disc ([[thm-poisson-integral-solves-the-disc-dirichlet-problem]], [[def-poisson-integral-on-the-disc]]).

[L2] The real part of a holomorphic polynomial is harmonic ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]], [[thm-c2-holomorphic-components-are-harmonic]]).

## Verification

**Proof technique:** direct.

1.1 The function $u(re^{i\phi})=r\cos\phi$ is the real part of $z$, so [L2] makes it harmonic on $\mathbb D$. [L2]

2.1 On the boundary $|z|=1$, the same formula gives $u(e^{i\theta})=\cos\theta=\varphi(e^{i\theta})$. By [L1], the continuous harmonic extension of $\varphi$ is unique, so $P[\varphi]=u$. [step 1.1, L1] ∎
