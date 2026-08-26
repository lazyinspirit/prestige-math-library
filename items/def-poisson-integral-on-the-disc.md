---
id: def-poisson-integral-on-the-disc
kind: definition
title: "The Poisson integral on the unit disc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-poisson-kernel-on-the-disc]
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
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Definition

Let $\varphi:\partial\mathbb D\to\mathbb R$ be continuous. Its **Poisson
integral** is the function $P[\varphi]:\mathbb D\to\mathbb R$ defined by

$$P[\varphi](z):=\frac{1}{2\pi}\int_0^{2\pi}P(z,e^{it})\,\varphi(e^{it})\,dt,$$

where $P(z,e^{it})$ is the Poisson kernel of [[def-poisson-kernel-on-the-disc]].

If $z=re^{i\phi}$, the same formula reads

$$P[\varphi](re^{i\phi})=\frac{1}{2\pi}\int_0^{2\pi}P_r(\phi-t)\,\varphi(e^{it})\,dt.$$

## Remarks

The boundary datum is written on the unit circle itself, not as a $2\pi$-periodic
real function. The angle variable in the integral is only a parametrization.
