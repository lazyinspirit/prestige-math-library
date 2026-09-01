---
id: def-meissel-mertens-constant
kind: definition
title: "The Meissel-Mertens constant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-logarithm]
justified_by: [thm-second-mertens-theorem-for-primes]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Leo Goldmakher, A Quick Proof of Mertens' Theorem"
      url: "https://web.williams.edu/Mathematics/lg5/mertens.pdf"
pipeline_run: null
---

## Definition

The **Meissel-Mertens constant** is

$$
B_1:=\lim_{x\to\infty}\left(\sum_{p\le x}\frac1p-\log\log x\right),
$$

provided the limit exists.

## Remarks

- The next theorem proves existence by exhibiting the limit together with the
  sharper error term $O(1/\log x)$.
