---
id: def-lagrange-resolvent
kind: definition
title: "The Lagrange resolvent attached to a cyclic action and a root of unity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cyclic-extension, def-roots-of-unity-in-a-field]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 5.27"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.7"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Definition

Let $K/F$ be a cyclic extension of degree $n$ with generator $\sigma$, and let
$\zeta$ be an $n$-th root of unity in an overfield of $K$
([[def-roots-of-unity-in-a-field]]).

For $x\in K$, the **Lagrange resolvent** of $x$ attached to $(\sigma,\zeta)$ is

$$R_{\sigma,\zeta}(x):=\sum_{i=0}^{n-1}\zeta^{-i}\sigma^i(x).$$

This is an $F(\zeta)$-linear expression in the orbit of $x$ under the cyclic
action. When $\zeta\in F$, the resolvent lies in $K$ itself.
