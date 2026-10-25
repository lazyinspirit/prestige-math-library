---
id: ex-covering-the-cube-minus-the-origin-with-n-hyperplanes
kind: example
title: "The $n$ hyperplanes $x_i=1$ cover $\\{0,1\\}^{n}$ except the origin, so the Alon–Füredi bound is tight"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-alon-furedi-hyperplane-cover-of-the-cube, def-standard-bilinear-form-on-a-coordinate-space, def-affine-subspace-of-a-vector-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Theorem 6.3"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Example

For each $i<n$, let

$$H_i:=\{x\in\mathbb{R}^n:x_i=1\}.$$

## Facts & Assumptions

**Given:** the hyperplanes $H_0,\dots,H_{n-1}$.

[L1] Covering $\{0,1\}^n\setminus\{0\}$ by hyperplanes missing the origin needs at least $n$ hyperplanes ([[thm-alon-furedi-hyperplane-cover-of-the-cube]]).

## Verification

**Proof technique:** direct.

1.1 Every nonzero vertex of the cube has some coordinate equal to $1$, so it lies on at least one of the hyperplanes $H_i$. The origin has no coordinate equal to $1$, so it lies on none of them. [given]

2.1 Thus the $n$ hyperplanes $H_0,\dots,H_{n-1}$ cover exactly the nonzero cube vertices. By [L1], no smaller family can do so. [L1, step 1.1] ∎
