---
id: def-harmonic-conjugate
kind: definition
title: "Harmonic conjugates"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plane-harmonic-function]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
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
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open, let $u:\Omega\to\mathbb R$ be harmonic
([[def-plane-harmonic-function]]), and let $v:\Omega\to\mathbb R$. Then $v$ is a
**harmonic conjugate** of $u$ on $\Omega$ when the complex-valued function

$$u+iv:\Omega\to\mathbb C$$

is holomorphic on $\Omega$.

## Remarks

The definition is asymmetric on purpose: it singles out $v$ as a conjugate of
$u$, even though later the same holomorphic function shows that $u$ is also a
harmonic conjugate of $-v$.
