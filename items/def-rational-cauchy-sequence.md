---
id: def-rational-cauchy-sequence
kind: definition
title: "Cauchy sequence of rationals"
status: draft
origin: session
deps: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - "T. Tao, Analysis I, 3rd ed., §5.1"
    - "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
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
