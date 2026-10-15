---
id: ex-pointwise-extended-real-function-product-cases
kind: example
title: "Zero, sign, and finite cases for the pointwise function product"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-measurable-pointwise-extended-real-product]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $X=\{x_1,\ldots,x_{10}\}$ and define $f,g:X\to\overline{\mathbb R}$ by
the following values. The last column is the value of the function-level
product from [[def-measurable-pointwise-extended-real-product]].

| $x$ | $f(x)$ | $g(x)$ | $(f\odot_X g)(x)$ |
|---|---:|---:|---:|
| $x_1$ | $0$ | $+\infty$ | $0$ |
| $x_2$ | $0$ | $-\infty$ | $0$ |
| $x_3$ | $+\infty$ | $0$ | $0$ |
| $x_4$ | $-\infty$ | $0$ | $0$ |
| $x_5$ | $+\infty$ | $2$ | $+\infty$ |
| $x_6$ | $+\infty$ | $-2$ | $-\infty$ |
| $x_7$ | $-\infty$ | $2$ | $-\infty$ |
| $x_8$ | $-\infty$ | $-2$ | $+\infty$ |
| $x_9$ | $2$ | $-3$ | $-6$ |
| $x_{10}$ | $0$ | $5$ | $0$ |

## Facts & Assumptions

**Given:** The set $X$ and the functions $f,g$ with values in the table above.
Verify the product at all ten points, including the four zero-infinity pairs
and the sign cases.

[F1] [[def-measurable-pointwise-extended-real-product]]: The value is zero if
either input is zero; it is the real product when both inputs are finite and
nonzero; otherwise both inputs are nonzero and at least one is infinite, and the
output infinity is determined by whether the signs agree.

## Verification

**Proof technique:** apply the definition separately to the zero, signed-infinite,
and finite rows.

1.1 At $x_1,x_2,x_3,x_4$, one factor is zero, so [F1] gives respectively $0,0,0,0$. These are the four ordered pairs $(0,+\infty)$, $(0,-\infty)$, $(+\infty,0)$, and $(-\infty,0)$. [given, F1, cases]

1.2 At $x_5,x_6,x_7,x_8$, both factors are nonzero and one is infinite. At $x_5$ and $x_8$ the signs agree, giving $+\infty$; at $x_6$ and $x_7$ the signs differ, giving $-\infty$. This checks all four sign combinations of a nonzero infinite value with a nonzero finite value. [given, F1, cases]

1.3 At $x_9$ both values are finite and nonzero, so the result is the real product $2(-3)=-6$. At $x_{10}$ one finite factor is zero, so the zero clause gives $0$, also the real product $0\cdot5$. [given, F1, algebra]

2.1 The values from steps 1.1, 1.2, and 1.3 cover every point of $X$ and give the output tuple $(0,0,0,0,+\infty,-\infty,-\infty,+\infty,-6,0)$ in the listed order. [step 1.1, step 1.2, step 1.3] ∎
