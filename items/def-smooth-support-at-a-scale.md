---
id: def-smooth-support-at-a-scale
kind: definition
title: "Multiplicative function supported on smooth integers at a scale"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-multiplicative-arithmetic-function
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals"
      url: "https://arxiv.org/pdf/2607.15574v1"
---

## Definition

Let $f:\mathbb Z_{>0}\to\mathbb C$ be multiplicative, let $X\ge1$ be real, and let $0<\delta<1$. An integer $n\ge1$ is **$X^{1-\delta}$-smooth** if every prime divisor $p$ of $n$ satisfies $p\le X^{1-\delta}$. The integer $1$ is $X^{1-\delta}$-smooth because it has no prime divisors. The function $f$ is **supported on $X^{1-\delta}$-smooth integers** if $f(n)=0$ for every $n$ that is not $X^{1-\delta}$-smooth. Here multiplicative means $f(1)=1$ and $f(mn)=f(m)f(n)$ for every pair of coprime positive integers $m,n$.

## Definition references

[[def-multiplicative-arithmetic-function|normalization and coprime-product convention]]

[Menon, Theorem 1.2 and the definition preceding it, PDF pp. 2–3](https://arxiv.org/pdf/2607.15574v1)
