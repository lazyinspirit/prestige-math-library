---
id: def-cauchy-product
kind: definition
title: "The Cauchy product of two series: $c_n = \\sum_{k=0}^{n} a_k b_{n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ and $(b_k)$ be sequences of reals ([[def-series]]). The **Cauchy
product** of $\sum a_k$ and $\sum b_k$ is the series $\sum c_n$ of the sequence

$$c_n \;:=\; \sum_{k=0}^{n} a_k\, b_{n-k} \qquad (n \in \mathbb{N}),$$

a finite sum of $n+1$ terms in the sense of [[def-finite-sum]]. Each index
$n - k$ occurring here is a natural number, because $k$ runs over $0, \dots, n$;
and $c_0 = a_0 b_0$.

The definition uses only the two sequences of terms. **No convergence is assumed
and none is asserted**: $\sum c_n$ is a series formed from $(a_k)$ and $(b_k)$,
and whether it converges, and to what, is the subject of [[thm-mertens]] and
[[cor-cauchy-product-absolute]], while [[fs-cauchy-product-of-convergent-series-converges]]
shows that convergence of both factors is not enough.

**Why these coefficients.** Reading $\sum a_k x^k$ and $\sum b_k x^k$ as formal
power series and multiplying them term by term, the coefficient of $x^n$ collects
exactly the products $a_k b_{n-k}$ with $k + (n-k) = n$. So $c_n$ is the
coefficient one is forced to write down if the product of two series is to behave
like the product of two polynomials, and the results on this page say when that
formal operation computes the product of the two sums.

## Remarks

- **Only the two sequences of terms enter.** The construction is a rule on
  sequences, and every result below is stated for the sequence $(c_n)$ it
  produces. The Cauchy product of $\sum b_k$ with $\sum a_k$ is formed by the same
  rule with the roles exchanged, giving $\sum_{k=0}^{n} b_k a_{n-k}$; that this
  is the same number as $c_n$ is the reversal invariance of a finite sum, which is
  not among the laws of [[lem-finite-sum-laws]] and is not used anywhere on this
  page. Each statement below therefore says which factor carries which
  hypothesis, rather than appealing to symmetry.

- **The definition is stated for series indexed from $0$**, as every series on
  this page is ([[def-series]]). For families from a general starting index the
  Cauchy product is formed after shifting both families to $\mathbb{N}$, as
  [[def-series]] prescribes; the shift changes which products appear in $c_n$, so
  the starting indices have to be said, and they are said wherever this
  construction is used below.

- **Nothing here is a product of sums.** The symbol $\sum c_n$ names a new series
  built from the terms, not the number
  $\bigl(\sum_{k=0}^{\infty}a_k\bigr)\bigl(\sum_{k=0}^{\infty}b_k\bigr)$, which
  may not even be defined. Identifying the two is a theorem with hypotheses.
