---
id: fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth
kind: false-statement
title: "A continuous fibrewise linear map over a smooth base map is automatically smooth"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

A continuous fibrewise linear map over a smooth base map is automatically
smooth.

## Facts & Assumptions

**Given:** The displayed claim.

[L1] Smoothness of a bundle map is equivalent to smoothness of its local matrix coefficients ([[prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]]).

## Refutation

**Proof technique:** direct.

1.1 On the trivial line bundle $\mathbb R\times\mathbb R\to\mathbb R$, define $\Phi(x,v)=(x,|x|v)$. This map is continuous, covers the smooth base map $\operatorname{id}_{\mathbb R}$, and is linear on every fibre. [L1, given, construct]

2.1 Its local matrix coefficient is the scalar function $|x|$, which is not smooth at $0$. Therefore [L1] implies that $\Phi$ is not smooth. So the displayed statement is false. [L1, step 1.1] ∎
