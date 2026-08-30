---
id: def-completely-multiplicative-arithmetic-function
kind: definition
title: "Completely multiplicative arithmetic functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.7"
      url: "https://kskedlaya.org/ant/chapter-3.html"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, Section 23.3"
      url: "https://math.gordon.edu/ntic/ntic2017/section-new-funcs.html"
pipeline_run: null
---

## Definition

An arithmetic function $f$ ([[def-arithmetic-function]]) is
**completely multiplicative** when

$$f(1)=1$$

and

$$f(mn)=f(m)f(n)$$

for all positive integers $m,n$.

## Remarks

- Every completely multiplicative arithmetic function is multiplicative, because
  the displayed rule already applies when $m$ and $n$ are coprime.
