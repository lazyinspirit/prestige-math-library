---
id: def-rational-cauchy-sequence
kind: definition
title: "Cauchy sequence of rationals"
status: published
origin: session
deps: [def-rationals, lem-rat-triangle]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

A sequence $(a_n)_{n \ge 1}$ of rational numbers is a **Cauchy sequence** if for
every rational $\varepsilon > 0$ there exists $N \in \mathbb{N}$ such that

$$|a_m - a_n| < \varepsilon \qquad \text{for all } m, n \ge N.$$

## Remarks

- The quantifier ranges over *rational* $\varepsilon$ only. This is deliberate:
  the definition is stated before the real numbers exist, which is exactly what
  allows the reals to be constructed from it.
- Informally: the terms of the sequence eventually cluster arbitrarily tightly,
  without any reference to a limit value.
