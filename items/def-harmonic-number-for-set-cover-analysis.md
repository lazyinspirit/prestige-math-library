---
id: def-harmonic-number-for-set-cover-analysis
kind: definition
title: "Harmonic numbers for set-cover analysis"
status: draft
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §§1.1, 1.6, 2.4, 5.1–5.2, 16.2, printed pp. 14–15, 24–26, 44–46, 107–109, 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

For each integer $n\ge 1$ the $n$-th **harmonic number** is the finite sum
$$H_n:=\sum_{j=1}^{n}\frac{1}{j},$$
taken over the finite index set $\{1,\dots,n\}$ in the rational numbers. For the
empty index set one sets $H_0:=0$, the empty-sum convention. Thus
$H_1=1$, $H_2=3/2$, $H_3=11/6$ and so on, and each $H_n$ is a rational number
determined by the displayed finite recursion on the upper index. These are the
only harmonic values used in the set-cover analysis of this page.
