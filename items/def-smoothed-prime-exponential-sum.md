---
id: def-smoothed-prime-exponential-sum
kind: definition
title: "Smoothed von Mangoldt Exponential Sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
  - def-von-mangoldt-function
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. A. Helfgott, Major arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1305.2897v4"
      locator: "§1.3, equation (1.2), printed p. 5."
    - title: "H. A. Helfgott, Minor arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1205.5252v4"
      locator: "§1.1, equation (1.1), printed p. 2."
---

## Definition

For $x>0$, $\alpha\in\mathbb R$, and a complex-valued function $\eta:(0,\infty)\to\mathbb C$ such that $\sum_{n=1}^{\infty}|\Lambda(n)\eta(n/x)|<\infty$, define the smoothed von Mangoldt exponential sum
$$S_\eta(\alpha,x):=\sum_{n=1}^{\infty}\Lambda(n)e(\alpha n)\eta(n/x).$$
Here $e(t)=\exp(2\pi i t)$, and $\Lambda(n)=\log p$ when $n=p^m$ for a prime $p$ and integer $m\ge1$, while $\Lambda(n)=0$ otherwise.

## Definition references

[[def-exponential-character-e]]

[[def-von-mangoldt-function]]

[Helfgott, *Major arcs for Goldbach's problem*, §1.3](https://arxiv.org/pdf/1305.2897v4)

[Helfgott, *Minor arcs for Goldbach's problem*, §1.1](https://arxiv.org/pdf/1205.5252v4)
