---
id: def-simultaneous-and-dual-linear-forms-approximation
kind: definition
title: "Simultaneous and dual forms of matrix approximation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-khintchine-groshev-matrix-approximation-set
verification:
  precheck: n/a
sources:
  references:
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, §4.6"
      url: "https://arxiv.org/pdf/1601.01948v1"
---

## Definition

In the matrix approximation convention where $X$ is an $n\times m$ real matrix, a nonzero integer row $q$ has $n$ coordinates and $qX$ has $m$ coordinates. The case $n=1$ is called simultaneous approximation: writing $X=(x_1,\ldots,x_m)$, one approximates all coordinates of a vector using the same integer denominator $q\in\mathbb Z\setminus\{0\}$. The case $m=1$ is called dual approximation: writing $X=(x_1,\ldots,x_n)^T$, one approximates a single linear form $q_1x_1+\cdots+q_nx_n$ by an integer as $q$ ranges over nonzero vectors in $\mathbb Z^n$. These names describe the indicated specializations of the homogeneous approximation set; they do not impose monotonicity on an approximation function.

## Definition references

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §4.6](https://arxiv.org/pdf/1601.01948v1)
