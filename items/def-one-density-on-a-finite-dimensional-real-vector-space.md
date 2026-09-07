---
id: def-one-density-on-a-finite-dimensional-real-vector-space
title: "A signed one-density on a real vector space"
kind: definition
status: published
origin: pipeline
deps: ["prop-the-top-exterior-power-is-one-dimensional"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee (16.18) and Proposition 16.35, pp.428–429"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---
## Definition

For an $n$-dimensional real vector space $V$, a **one-density** is a real-valued function $\delta$ on ordered bases such that
$$\delta(vA)=|\det A|\,\delta(v)\qquad(A\in GL(n,\mathbb R)).$$
For $n\geq1$ extend its value by zero to dependent $n$-tuples. For $n=0$ it is an arbitrary real scalar on the empty basis (the empty determinant is one). Write $D(V)$ for these densities. Positive means strictly positive on every basis; nonnegative includes zero. Negative scalar multiples remain densities; positivity is extra structure on their one-dimensional real space.
