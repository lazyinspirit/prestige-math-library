---
id: ex-cantor-slab-has-content-zero
kind: example
title: "The Cantor slab $C\\times[0,1]$ has content zero in $\\mathbb{R}^2$"
status: published
origin: session
deps: [thm-cantor-set-properties, def-measure-zero-and-content-zero, def-jordan-inner-and-outer-content, def-multidimensional-rectangle-and-volume, lem-integer-part, def-canonical-natural, cex-compact-set-without-jordan-content]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Example

For the ordinary Cantor set $C$, the slab $C\times[0,1]$ has content zero in $\mathbb R^2$, and hence Jordan content $0$.

## Facts & Assumptions

**Given:** The Cantor set $C$.

[L1] $C$ has one-dimensional content zero ([[thm-cantor-set-properties]], [[def-measure-zero-and-content-zero]]).

[L2] [[lem-integer-part]] controls the number of equal squares needed to stack across height $1$.

## Verification

**Proof technique:** constructive.

1.1 Given $\varepsilon>0$, cover $C$ by finitely many positive-width intervals $I_r$ with $\sum_r\ell_r$ and $\max_r\ell_r$ sufficiently small. Degenerate members may be enlarged within the budget. [L1, choose, construct]

1.2 Above $I_r$, stack squares of side $\ell_r$. By [L2], at most $1/\ell_r+2$ squares suffice, with total area at most $\ell_r+2\ell_r^2$.   [L2, given]

2.1 Summing gives at most $\sum_r\ell_r+2(\max_r\ell_r)\sum_r\ell_r<\varepsilon$. Thus the slab has cube-content zero.   [step 1.1, step 1.2, given]

3.1 By [[def-jordan-inner-and-outer-content]], cube-content zero makes the Jordan outer content $0$. The nonnegative inner content is at most the outer content, so both are $0$; the slab is Jordan measurable with content $0$, unlike the fat-Cantor slab [[cex-compact-set-without-jordan-content]].   [step 2.1, given, discharge-construct] ∎
