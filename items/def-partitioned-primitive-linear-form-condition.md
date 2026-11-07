---
id: def-partitioned-primitive-linear-form-condition
kind: definition
title: "Partitioned primitivity condition for linear-form approximation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gcd-of-finite-integer-tuple
verification:
  precheck: n/a
sources:
  references:
    - title: "Dani, Laurent, and Nogueira, Multi-dimensional metric approximation by primitive points, §1"
      url: "https://arxiv.org/pdf/1310.5535v2"
---

## Definition

Let $n,m\ge1$ and let $\pi=\{J_1,\ldots,J_s\}$ be a partition of $\{1,\ldots,m+n\}$ into pairwise disjoint blocks, each containing at least two indices. For $q=(q_1,\ldots,q_n)\in\mathbb Z^n\setminus\{0\}$ and $p=(p_1,\ldots,p_m)\in\mathbb Z^m$, form the ordered tuple $v=(p_1,\ldots,p_m,q_1,\ldots,q_n)$, so the offset coordinates precede the coefficient-row coordinates as in the source convention. Call $(q,p)$ $\pi$-primitive if, for every block $J_a\in\pi$, the greatest common divisor of the subtuple $(v_i)_{i\in J_a}$ in increasing index order is $1$. A theorem using this condition may impose a larger lower bound on block sizes; for example, the Dani–Laurent–Nogueira law in this matrix orientation requires at least $m+1$ coordinates per block.

## Definition references

[Dani, Laurent, and Nogueira, *Multi-dimensional metric approximation by primitive points*, §1](https://arxiv.org/pdf/1310.5535v2)
