---
id: def-jordan-block-and-jordan-string
kind: definition
title: "Jordan blocks, Jordan strings, and their endpoints"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-coordinate-column-and-matrix-of-a-linear-map, def-eigenvalue-eigenvector-eigenspace-and-spectrum]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 8C"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Section 4"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Definition

For $m\ge1$ and $\lambda\in F$, the **Jordan block** $J_m(\lambda)$ is the $m\times m$ matrix with $\lambda$ on the diagonal, $1$ on the superdiagonal, and $0$ elsewhere.

Let $T:V\to V$ be an endomorphism. A **Jordan string of length $m$ for $T$ at $\lambda$** is an ordered list $(v_1,\ldots,v_m)$ satisfying
$$(T-\lambda I)v_1=0,\qquad (T-\lambda I)v_j=v_{j-1}\quad(2\le j\le m).$$
Its **initial vector** is $v_1$ and its **terminal vector** is $v_m$. The initial vector is required to be nonzero; consequently every vector in the string is nonzero. In the ordered basis $(v_1,\ldots,v_m)$, the restriction of $T$ to the string's span has matrix $J_m(\lambda)$ under the coordinate-column convention ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

A Jordan string for a nilpotent endomorphism means a string at $\lambda=0$.
