---
id: def-rat-order
kind: definition
title: "Order on the rationals"
status: published
origin: session
deps: [def-rationals, def-rat-operations, def-int-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Every rational has a representative with positive denominator, since
$(a,b) \sim (-a,-b)$. For representatives with $b > 0$ and $d > 0$ define

$$[(a,b)] \le [(c,d)] \iff ad \le cb \quad \text{in } \mathbb{Z}.$$

A rational $x$ is **positive** when $0 < x$; on such representatives,
$0 < [(a,b)]$ exactly when $0 < a$.

## Remarks

- Well-definedness, totality, and compatibility with the arithmetic:
  [[thm-rat-ordered-field]].
- The integer order used on the right is [[def-int-order]].
