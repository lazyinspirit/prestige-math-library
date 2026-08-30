---
id: def-multiplicative-arithmetic-function
kind: definition
title: "Multiplicative arithmetic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function, def-coprime]
justified_by: []
aliases: []
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.6"
      url: "https://kskedlaya.org/ant/chapter-3.html"
pipeline_run: null
---

## Definition

An arithmetic function $f$ ([[def-arithmetic-function]]) is
**multiplicative** when

$$f(1)=1$$

and

$$f(mn)=f(m)f(n)$$

for every pair of coprime positive integers $m,n$ ([[def-coprime]]).

## Remarks

- The normalization $f(1)=1$ is part of the definition. It excludes the
  identically zero convention used in some other contexts.
