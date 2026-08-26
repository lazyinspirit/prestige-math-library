---
id: def-poisson-kernel-on-the-disc
kind: definition
title: "The Poisson kernel on the unit disc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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

For $z\in\mathbb D=\{\,|z|<1\,\}$ and $t\in\mathbb R$, the **Poisson kernel** of
the unit disc is

$$P(z,e^{it}):=\frac{1-|z|^2}{|e^{it}-z|^2}.$$

If $z=re^{i\phi}$ with $0\le r<1$, then

$$P(z,e^{it})=\frac{1-r^2}{1-2r\cos(t-\phi)+r^2}=:P_r(t-\phi).$$

## Remarks

The second formula is just the first one written in polar coordinates. It is the
form used in the one-variable estimates and in Harnack's inequality.
