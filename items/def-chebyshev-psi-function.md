---
id: def-chebyshev-psi-function
kind: definition
title: "Chebyshev's psi function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-von-mangoldt-function]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Definition

For every real number $x\ge1$, **Chebyshev's psi function** is

$$
\psi(x):=\sum_{n\le x}\Lambda(n),
$$

where $\Lambda$ is the von Mangoldt function of
[[def-von-mangoldt-function]].

## Remarks

- The sum is finite for every real $x$.

- The next lemma rewrites $\psi(x)$ as a sum over prime powers, which is the
  form used throughout this page.
