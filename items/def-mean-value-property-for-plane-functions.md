---
id: def-mean-value-property-for-plane-functions
kind: definition
title: "The circle and disc mean-value properties"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
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

Let $\Omega\subseteq\mathbb C$ be open and let $u:\Omega\to\mathbb R$ be
continuous.

- The **circle mean-value property** says that for every closed disc
  $\overline{D(a,r)}\subseteq\Omega$ with $r>0$,
  $$u(a)=\frac{1}{2\pi}\int_0^{2\pi}u(a+r e^{it})\,dt.$$
- The **disc mean-value property** says that for every closed disc
  $\overline{D(a,r)}\subseteq\Omega$ with $r>0$,
  $$u(a)=\frac{2}{r^2}\int_0^r\left(\frac{1}{2\pi}\int_0^{2\pi}u(a+s e^{it})\,dt\right)s\,ds.$$

When both hold, $u$ is said to satisfy the **mean-value property** on $\Omega$.

## Remarks

The disc formula is written as the average of the concentric circle averages, so
it is a genuinely plane-local statement and does not need any separate area
integration convention.
