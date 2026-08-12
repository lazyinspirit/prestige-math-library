---
id: ex-square-roots-of-the-imaginary-unit
kind: example
title: 'The square roots of $i$ are $\pm(1+i)/\sqrt2$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-every-complex-number-has-a-square-root, thm-complex-numbers-form-a-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. K. Srivastava, Complex Analysis lecture notes"
      url: "https://fac.iitg.ac.in/rksri/MA547%20Complex%20Analysis%20lecture%20notes%202025.pdf"
pipeline_run: frontier-11
---

## Example

The two square roots of $i$ are
$$\frac{1+i}{\sqrt2}\quad\text{and}\quad-\frac{1+i}{\sqrt2}.$$

## Facts & Assumptions

**Given:** The imaginary unit $i\in\mathbb C$.

[F1] Complex multiplication satisfies $(a+bi)^2=(a^2-b^2)+2abi$ ([[thm-complex-numbers-form-a-field]]).

[F2] The nonnegative real square root satisfies $(\sqrt2)^2=2$ ([[thm-of-square-roots]]).

[F3] Every complex number has a square root ([[thm-every-complex-number-has-a-square-root]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] and [F2], $((1+i)/\sqrt2)^2=i$; its negative has the same square. [F1, F2, algebra]

1.2 Conversely, if $(a+bi)^2=i$, [F1] gives $a^2=b^2$ and $2ab=1$. Consequently $a,b\ne0$, they have the same sign, and $a=b$. [F1, algebra]

2.1 Then $2a^2=1$, so [F2] gives $a=b=1/\sqrt2$ or $a=b=-1/\sqrt2$. These are exactly the two values in step 1.1. [F2, step 1.2, algebra]

3.1 Thus the existence guaranteed abstractly by [F3] is realized by exactly the two displayed roots. [F3, step 1.1, step 2.1] ∎
