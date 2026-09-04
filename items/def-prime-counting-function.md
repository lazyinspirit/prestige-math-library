---
id: def-prime-counting-function
kind: definition
title: "The prime-counting function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-prime]
justified_by: []
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Definition

For every real number $x\ge0$, the **prime-counting function** is

$$ \pi(x):=\#\{\,p\text{ prime}:p\le x\,\}. $$

## Remarks

- The argument distinguishes this function $\pi(x)$ from the circle constant
  $\pi$.

- The function is right-continuous and changes value exactly at the primes.
