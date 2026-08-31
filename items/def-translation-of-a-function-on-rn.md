---
id: def-translation-of-a-function-on-rn
kind: definition
title: "Translation of a function on $\\mathbb{R}^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Definition

Let $h \in \mathbb{R}^n$ and let $f : \mathbb{R}^n \to \mathbb{C}$ be a function.
The **translate** of $f$ by $h$ is the function $\tau_h f$ defined by

$$
(\tau_h f)(x) := f(x-h)\qquad(x \in \mathbb{R}^n).
$$

This fixes the sign convention used throughout the page: translating by $h$
shifts the graph of $f$ in the positive $h$-direction.
