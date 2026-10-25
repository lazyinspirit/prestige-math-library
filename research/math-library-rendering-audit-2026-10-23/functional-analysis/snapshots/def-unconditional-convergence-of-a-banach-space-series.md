---
id: def-unconditional-convergence-of-a-banach-space-series
kind: definition
title: "Unconditional convergence of a Banach-space series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-series-and-absolute-convergence-in-a-normed-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Appendix A, definition preceding Theorem A.4, printed p.167"
pipeline_run: phase-2-next-18
---

## Definition

Let $X$ be a normed space and let
$x:\mathbb N_{\ge1}\to X$ be a positively indexed family. The notation
$\sum_{n=1}^{\infty}x_n$ denotes the zero-indexed series whose term at
$m\in\mathbb N$ is $x_{m+1}$. This series is **unconditionally convergent**
to $s\in X$ if for every permutation
$\pi:\mathbb N_{\ge1}\to\mathbb N_{\ge1}$, the rearranged series
$\sum_{n=1}^{\infty}x_{\pi(n)}$, interpreted by the same shift, converges in
norm to $s$.

This is different from **absolute convergence**, which means
$\sum_n\|x_n\|<\infty$. The fixed-order series, all rearrangements, and the
scalar series of norms are therefore kept distinct.
