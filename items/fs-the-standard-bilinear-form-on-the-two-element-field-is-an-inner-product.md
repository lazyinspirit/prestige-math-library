---
id: fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product
kind: false-statement
title: "FALSE: $\\langle x,y\\rangle=\\sum_ix_iy_i$ makes $\\mathbb{F}_2^{n}$ an inner product space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-standard-bilinear-form-on-a-coordinate-space, def-inner-product-space, def-bilinear-symmetric-skew-and-alternating-forms, thm-z-mod-p-is-a-field, lem-diagonal-independence-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.3.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

**False claim:** the standard form on $\mathbb{F}_2^n$ is an inner product.

## Facts & Assumptions

**Given:** the vector $x=(1,1)\in\mathbb{F}_2^2$.

[L1] Over $\mathbb{F}_2$, one has $\langle x,x\rangle=\sum_i x_i$ ([[def-standard-bilinear-form-on-a-coordinate-space]]).

## Refutation

**Proof technique:** direct.

1.1 The vector $x=(1,1)$ is nonzero, but [L1] gives $\langle x,x\rangle=1+1=0$ in $\mathbb{F}_2$. [L1, given]

2.1 An inner product cannot vanish on a nonzero vector, so the false claim fails. [step 1.1] ∎

## Remarks

- What remains true is that the form is symmetric and bilinear. That is all the page ever uses over $\mathbb{F}_2$.
