---
id: def-chebyshev-theta-function
kind: definition
title: "Chebyshev's theta function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-prime, def-natural-logarithm]
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
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Definition

For every real number $x\ge1$, **Chebyshev's theta function** is

$$
\theta(x):=\sum_{p\le x}\log p,
$$

the sum being taken over the primes $p$.

## Remarks

- For $1\le x<2$, the sum is empty, so $\theta(x)=0$.

- Since there are only finitely many integers at most $x$, the displayed sum is
  finite for every real $x\ge1$.

- Like $\pi(x)$, the function $\theta(x)$ is right-continuous and jumps only at
  primes.
