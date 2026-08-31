---
id: fs-the-wedge-product-is-commutative
kind: false-statement
title: "The wedge product is not commutative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-wedge-product-is-associative-and-graded-commutative,
       prop-differential-forms-form-a-graded-commutative-algebra]
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

**False claim:** the wedge product is commutative.

## Facts & Assumptions

**Given:** The standard coordinate $1$-forms $dx,dy$ on $\mathbb R^2$.

[L1] The wedge product is graded commutative, so for $1$-forms $\eta,\theta$ one has $\eta\wedge\theta=-\theta\wedge\eta$ ([[thm-wedge-product-is-associative-and-graded-commutative]]).

## Refutation
**Proof technique:** direct.

1.1 Evaluating on $(\partial_x,\partial_y)$ gives $(dx\wedge dy)(\partial_x,\partial_y)=1$, so $dx\wedge dy\neq 0$. [given, algebra]

2.1 By [L1], $dy\wedge dx=-dx\wedge dy$. Since step 1.1 shows $dx\wedge dy$ is nonzero, it follows that $dy\wedge dx\neq dx\wedge dy$. [L1, step 1.1]

3.1 Therefore the wedge product is not commutative. [step 2.1] ∎