---
id: def-int-order
kind: definition
title: "Order on the integers"
status: draft
origin: session
deps: [def-integers]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

For integers $x = [(a,b)]$ and $y = [(c,d)]$ ([[def-integers]]) define

$$x \le y \iff a + d \le b + c \quad \text{in } \mathbb{N}.$$

Write $x < y$ when $x \le y$ and $x \ne y$. An integer $x$ is **positive**
when $0 < x$; on representatives, $0 < [(a,b)]$ exactly when $b < a$.

## Remarks

- The defining inequality is "$a - b \le c - d$" restated without subtraction.
- Well-definedness, totality, and compatibility with the arithmetic are proved
  in [[thm-int-ordered-ring]].
