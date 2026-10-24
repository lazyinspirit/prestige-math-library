---
id: def-lexicographic-order-and-polynomial-multidegree
kind: definition
title: "Lexicographic order on exponent tuples and the multidegree of a nonzero polynomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Definition

For $a,b\in\mathbb N^n$, write $a>_{\mathrm{lex}}b$ when, at the first coordinate where they differ, the coordinate of $a$ is larger. This is the **lexicographic order**.

If $0\ne f=\sum_a c_ax_1^{a_1}\cdots x_n^{a_n}\in R[x_1,\ldots,x_n]$, its **leading multidegree** is the lexicographically greatest exponent tuple $a$ for which $c_a\ne0$; the corresponding monomial and coefficient are its **leading monomial** and **leading coefficient**. The maximum exists because a polynomial has finite support.
