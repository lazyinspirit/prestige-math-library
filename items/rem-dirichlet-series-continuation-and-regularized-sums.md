---
id: rem-dirichlet-series-continuation-and-regularized-sums
kind: remark
title: "The analytic continuation of zeta is not the same object as the defining Dirichlet series outside $\\operatorname{Re}s>1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-riemann-zeta-meromorphic-continuation, thm-special-values-of-riemann-zeta-at-integers]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Remark

The defining series $\sum_{n\ge1}n^{-s}$ names zeta only on the half-plane
$\operatorname{Re}s>1$. Outside that domain, the symbol $\zeta(s)$ refers to the
meromorphic continuation from
[[thm-riemann-zeta-meromorphic-continuation]], not to a literally convergent
sum of the original terms.

The standard cautionary value is
$$\zeta(-1)=-\frac{1}{12},$$
from [[thm-special-values-of-riemann-zeta-at-integers]]. This identity belongs
to analytic continuation and regularization language. It does **not** say that
the ordinary series $1+2+3+\cdots$ converges in the usual sense.
