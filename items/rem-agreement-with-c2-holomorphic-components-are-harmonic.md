---
id: rem-agreement-with-c2-holomorphic-components-are-harmonic
kind: remark
title: "Agreement with the earlier C^2 holomorphic-components theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-c2-holomorphic-components-are-harmonic]
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
pipeline_run: null
---

The present definition of harmonicity is exactly the one already reached from
holomorphic functions in [[thm-c2-holomorphic-components-are-harmonic]]: when
$f=u+iv$ is holomorphic and $u,v$ are $C^2$, both real components satisfy
$u_{xx}+u_{yy}=0$ and $v_{xx}+v_{yy}=0$. This page keeps that convention and
develops the converse direction from harmonic data, rather than introducing a
second notion of “harmonic component”.
