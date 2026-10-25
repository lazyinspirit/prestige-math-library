---
id: ex-fifth-roots-of-unity
kind: example
title: "The five fifth roots of unity and their sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-nth-roots-and-roots-of-unity, cor-sum-of-roots-of-unity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Example

The fifth roots of unity are $\exp\!\left(i\frac{2\pi\iota_{\mathbb R}(k)}{\iota_{\mathbb R}(5)}\right)$ for $k\in\mathbb N$ with $0\le k<5$, and their sum is $0$. The conventions and prerequisite facts used below are recorded in [[thm-complex-nth-roots-and-roots-of-unity]], [[cor-sum-of-roots-of-unity]].

## Facts & Assumptions

**Given:** $n=5$.

## Verification

1.1 The root classification lists the five values $\exp\!\left(i\frac{2\pi\iota_{\mathbb R}(k)}{\iota_{\mathbb R}(5)}\right)$ for $k\in\mathbb N$ with $0\le k<5$. [given]

2.1 The root-sum corollary gives that their sum is $0$. [given] ∎
