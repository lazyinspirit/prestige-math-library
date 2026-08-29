---
id: def-exponent-of-convergence-of-a-zero-sequence
kind: definition
title: "The exponent of convergence of a zero sequence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.5"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Definition

Let $(a_n)_{n\ge1}$ be a sequence of nonzero complex numbers with no finite
accumulation point. The **exponent of convergence** of $(a_n)$ is

$$\lambda:=\inf\left\{\,s>0:\sum_{n\ge1}|a_n|^{-s}<\infty\,\right\}\in[0,\infty].$$

Equivalently, $\lambda$ is the threshold between convergence and divergence of
the reciprocal power sums.
