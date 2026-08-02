---
id: def-unital-separating-real-function-algebra
kind: definition
title: "A unital point-separating real subalgebra of $C(K,\\mathbb R)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuous-real-functions-on-a-compact-metric-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Stone--Weierstrass Theorem and its Applications"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a nonempty compact metric space. A set $A\subseteq C(K,\mathbb R)$ is a **unital real function algebra** when it contains every constant function and is closed under pointwise addition, scalar multiplication, and multiplication. It **separates points** when for every distinct $x,y\in K$ there is $g\in A$ with $g(x)\ne g(y)$. The ambient function space is [[def-continuous-real-functions-on-a-compact-metric-space]].
