---
id: def-short-interval-sum-of-an-arithmetic-function
kind: definition
title: "Short-interval sum of an arithmetic function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-arithmetic-function
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals"
      url: "https://arxiv.org/pdf/1501.04585v4"
    - title: "Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals"
      url: "https://arxiv.org/pdf/2607.15574v1"
---

## Definition

Let $f:\mathbb Z_{>0}\to\mathbb C$ be an arithmetic function, let $x\ge0$ be real, and let $h>0$ be real. Its **closed short-interval sum** is

$$ S_f(x,h):=\sum_{\substack{n\in\mathbb Z_{>0}\\x\le n\le x+h}} f(n). $$

Both endpoints are included. In particular, when $x$ and $h$ are positive integers, the sum contains the $h+1$ terms with indices $x,x+1,\ldots,x+h$.

## Definition references

[[def-arithmetic-function|arithmetic-function domain and codomain]]

[Matomäki and Radziwiłł, Theorems 1–2, printed pp. 1–2](https://arxiv.org/pdf/1501.04585v4)

[Menon, Theorems 1.1–1.4, PDF pp. 2–3](https://arxiv.org/pdf/2607.15574v1)
