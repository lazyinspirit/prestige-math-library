---
id: def-limit-computable-function
kind: definition
title: "Limit-computable functions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computable-and-partial-computable-function]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §4.7"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

A total function $f:\mathbb N\to\mathbb N$ is **limit computable** when
there is a total computable $g(x,s)$ such that for every $x$ the sequence
$g(x,0),g(x,1),\ldots$ is eventually constant with eventual value $f(x)$.
No computable function selecting a stabilization stage is included in this
definition.
