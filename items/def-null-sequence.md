---
id: def-null-sequence
kind: definition
title: "Null sequence"
status: draft
origin: session
deps: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - "T. Tao, Analysis I, 3rd ed., §5.2"
pipeline_run: null
---

## Definition

A sequence $(a_n)_{n \ge 1}$ of rational numbers is a **null sequence** if for
every rational $\varepsilon > 0$ there exists $N \in \mathbb{N}$ such that

$$|a_n| < \varepsilon \qquad \text{for all } n \ge N.$$

## Remarks

- Equivalently: $(a_n)$ converges to $0$ (with rational tolerances).
- In the construction of $\mathbb{R}$, two Cauchy sequences will be declared
  equivalent exactly when their difference is a null sequence; the null
  sequences are the "zero" of the construction.
