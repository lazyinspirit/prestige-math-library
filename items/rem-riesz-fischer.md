---
id: rem-riesz-fischer
kind: remark
title: "Riesz-Fischer theorem: completeness of $L^p$"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-dominated-convergence-theorem, rem-holder-minkowski-integral]
justified_by: []
forward_refs: []
aliases: [rem-lp-complete]
landmark: true
short: "L^p is complete for 1 <= p <= infinity; L^2 is isomorphic to l^2 through Fourier coefficients"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Riesz-Fischer theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riesz%E2%80%93Fischer_theorem"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a measure space and $1 \le p \le \infty$. Write
$L^{p}(\mu)$ for the space of measurable $f$ with $\|f\|_p < \infty$, modulo
equality almost everywhere.

**Riesz-Fischer theorem.** $\big(L^{p}(\mu), \|\cdot\|_p\big)$ is a Banach space:
every $\|\cdot\|_p$-Cauchy sequence converges in $L^{p}(\mu)$. Moreover, if
$f_n \to f$ in $L^{p}(\mu)$ then some subsequence converges to $f$ pointwise
almost everywhere.

For $p = 2$ this makes $L^{2}(\mu)$ a Hilbert space, and the classical 1907 form
of the theorem is the surjectivity half of the correspondence with $\ell^2$: for
an orthonormal system $(e_n)$ in $L^2$ and any $(c_n) \in \ell^2$ the series
$\sum_n c_n e_n$ converges in $L^2$, so every square-summable sequence is the
sequence of Fourier coefficients of an $L^2$ function.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** Minkowski's inequality
([[rem-holder-minkowski-integral]]) to know $\|\cdot\|_p$ is a norm, then the
standard criterion that a normed space is complete when every absolutely
convergent series converges, applied through the monotone convergence theorem
([[rem-monotone-convergence-theorem]]) to
$\sum_n \|f_{n+1} - f_n\|_p < \infty$, with the dominated convergence theorem
([[rem-dominated-convergence-theorem]]) identifying the limit. The subsequence
statement falls out of the same construction. The case $p = \infty$ is separate
and easier, since a countable union of null sets is again null.

**Which page it serves.** The metric spaces and completeness pages, which prove
that $\mathbb{R}$, $\mathbb{R}^n$ and $C[a,b]$ with the sup norm are complete,
and that $C[a,b]$ with the $L^1$ metric is not. That last example is the honest
motivation for the Lebesgue theory: the completion of $C[a,b]$ under the $L^1$
metric exists abstractly, and the theorem above says it is a space of functions,
namely $L^1[a,b]$. Without measure theory the completion stays an abstract
object with no description.

**Naming.** The name covers both the completeness theorem for $L^p$ and the
1907 result about Fourier coefficients in $L^2$, which were proved
independently by F. Riesz and E. Fischer. This library keeps both under this id
because they are the same theorem in the case $p = 2$.
