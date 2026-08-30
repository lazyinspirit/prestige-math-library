---
id: cor-gamma-function-has-no-zeros
kind: corollary
title: "Gamma has no zeros"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gamma-weierstrass-product]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

Gamma has no zeros on $\mathbb C$, and $1/\Gamma$ has simple zeros exactly at
$0,-1,-2,\dots$.

## Facts & Assumptions

**Given:** The reciprocal-Gamma product.

[L1] One has
$1/\Gamma(z)=ze^{\gamma z}\prod_{n\ge1}(1+z/n)e^{-z/n}$
([[thm-gamma-weierstrass-product]]).

## Proof

**Proof technique:** direct.

1.1 In [L1], the exponential factors never vanish, while the factor $z$ gives a simple zero at $0$ and the factor $1+z/n$ gives a simple zero at $z=-n$ for each $n\ge1$. There are no other zeros. [L1, given]

2.1 Therefore $1/\Gamma$ vanishes exactly at the nonpositive integers, and Gamma has poles there and no zeros anywhere. [step 1.1, algebra] ∎
