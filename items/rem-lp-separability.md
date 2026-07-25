---
id: rem-lp-separability
kind: remark
title: "Separability of $L^p$ for finite $p$, and the failure at $p = \\infty$"
status: published
origin: session
proved_here: false
deps: [rem-riesz-fischer]
justified_by: []
forward_refs: [def-countable]
aliases: []
landmark: false
short: "L^p is separable for finite p over a countably generated measure; L^infinity is not"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Separable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separable_space"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a $\sigma$-finite measure space whose
$\sigma$-algebra is countably generated modulo null sets, for instance
$\mathbb{R}^n$ with Lebesgue measure.

**Separability for finite $p$.** For $1 \le p < \infty$ the space
$L^{p}(\mu)$ is separable: it has a countable dense subset. On
$\mathbb{R}^n$ one may take finite rational linear combinations of indicators of
boxes with rational vertices, or the continuous functions of compact support with
rational data.

**Failure at $p = \infty$.** $L^{\infty}[0,1]$ is not separable. The family
$\{ \mathbf{1}_{[0,t]} : t \in [0,1] \}$ is uncountable and satisfies
$\|\mathbf{1}_{[0,s]} - \mathbf{1}_{[0,t]}\|_{\infty} = 1$ for $s \ne t$, so the
open balls of radius $\tfrac12$ around its members are pairwise disjoint and any
dense set must meet each of them. The same argument shows
$\ell^{\infty}$ is not separable.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** For the positive half: approximation of an $L^p$
function by simple functions, then of a measurable set by a finite union of boxes
up to small measure, then of the coefficients by rationals, with the three errors
summed by Minkowski's inequality ([[rem-holder-minkowski-integral]]). For the
negative half: nothing beyond the displayed computation, once
$\|\cdot\|_{\infty}$ and the notion of a countable set ([[def-countable]]) are
available.

**Which page it serves.** The metric spaces page, where separability is defined
and where $\mathbb{R}^n$ and $C[a,b]$ are shown separable, and the countability
page, which supplies the notion of countable. The pair of statements above is the
standard first example of a natural Banach space that is not separable, and it is
also why $L^{\infty}$ behaves differently from every $L^p$ with $p$ finite. It is
not separable, so it has no countable dense subset to run approximation arguments
on, and the duality stops at it. For $\sigma$-finite $\mu$ the space
$L^{\infty}(\mu)$ is itself the dual of $L^{1}(\mu)$; what has no counterpart is
the return trip, since the dual of $L^{\infty}(\mu)$ is not $L^{1}(\mu)$ but a
space of bounded finitely additive set functions. So the identification
$L^{p}(\mu)^{*} = L^{q}(\mu)$ that holds for $1 < p < \infty$ stops here.

**Hypotheses worth stating carefully.** Separability of $L^p$ is a property of
the measure space and not of $p$ alone: $L^{p}(\mu)$ for the counting measure on
an uncountable set is not separable for any $p$, since the indicators of
singletons are pairwise at distance $2^{1/p}$. The clean statement is the one
above, with $\sigma$-finiteness and a countably generated $\sigma$-algebra as
hypotheses.
