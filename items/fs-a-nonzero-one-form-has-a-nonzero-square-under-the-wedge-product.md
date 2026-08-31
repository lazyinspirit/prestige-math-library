---
id: fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product
kind: false-statement
title: "A nonzero one-form need not have a nonzero square under the wedge product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-wedge-product-is-associative-and-graded-commutative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

**False claim:** every nonzero $1$-form has nonzero wedge square.

## Facts & Assumptions

**Given:** A nonzero $1$-form $\alpha$.

[L1] The wedge product is graded commutative ([[thm-wedge-product-is-associative-and-graded-commutative]]).

## Refutation
**Proof technique:** direct.

1.1 Since $\alpha$ has degree $1$, [L1] gives $\alpha\wedge\alpha=-\alpha\wedge\alpha$. [L1, given]

2.1 Over $\mathbb R$ this implies $2(\alpha\wedge\alpha)=0$, hence $\alpha\wedge\alpha=0$. So even a nonzero $1$-form has zero square. [step 1.1, algebra]

3.1 Therefore the claim is false. [step 2.1] ∎