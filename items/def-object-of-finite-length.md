---
id: def-object-of-finite-length
kind: definition
title: "Object of finite length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-composition-series-and-composition-factors-of-an-object, thm-jordan-holder-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Definition 1.5.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Definition

An object $A$ of an abelian category has **finite length** when it admits a
composition series in the sense of
[[def-composition-series-and-composition-factors-of-an-object]].

Its **length** $\ell(A)$ is the number of successive simple factors in any
composition series. The Jordan-Hölder theorem
[[thm-jordan-holder-theorem-in-an-abelian-category]] makes this number
independent of the chosen series.
