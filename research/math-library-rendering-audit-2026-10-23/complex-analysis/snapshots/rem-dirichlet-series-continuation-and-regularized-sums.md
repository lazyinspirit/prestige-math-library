---
id: rem-dirichlet-series-continuation-and-regularized-sums
kind: remark
title: "The analytic continuation of zeta is not the same object as the defining Dirichlet series outside $\\operatorname{Re}s>1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-countable-choice, thm-riemann-zeta-meromorphic-continuation, thm-special-values-of-riemann-zeta-at-integers]
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Remark

Assume countable choice for the cited global continuation and value at $-1$.

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
