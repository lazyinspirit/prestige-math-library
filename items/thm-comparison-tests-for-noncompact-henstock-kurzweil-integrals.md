---
id: thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals
kind: theorem
title: "Comparison, absolute-convergence, and limit-comparison tests for noncompact Henstock–Kurzweil integrals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals, thm-monotonicity-of-the-henstock-kurzweil-integral, thm-henstock-kurzweil-integrability-on-subintervals-and-additivity, def-limits-at-infinity, def-one-sided-limits]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $f,g$ be HK integrable on every compact truncation near the same missing endpoint.

1. If $g\ge0$, $|f|\le g$ eventually, and the noncompact integral of $g$ converges, then that of $f$ converges.
2. If the noncompact integral of $|f|$ converges, then that of $f$ converges.
3. If $f,g>0$ eventually and $f/g\to c$ with $0<c<\infty$, their noncompact integrals converge or diverge together. If $c=0$, convergence for $g$ implies convergence for $f$; if $c=+\infty$, convergence for $f$ implies convergence for $g$.

The corresponding assertions hold at finite and infinite missing endpoints on either side.

## Facts & Assumptions

**Given:** The locally integrable functions and eventual inequalities in the Statement.

[L1] If $p$ and $q$ are HK integrable on a compact interval and $p\le q$ there, then $\int p\le\int q$ ([[thm-monotonicity-of-the-henstock-kurzweil-integral]]).

[L2] Noncompact integrability is equivalent to uniformly small tail integrals ([[thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals]]).

## Proof

**Proof technique:** direct.

1.1 On every sufficiently late compact tail, $-g\le f\le g$ and [L1] gives $|\int f|\le\int g$; the tail criterion [L2] proves claim 1, and taking $g=|f|$ proves claim 2. [given, L1, L2]

2.1 If $f/g\to c\in(0,\infty)$, it lies between two positive constants near the endpoint, so two applications of step 1.1 give equivalence; for limit $0$ or $+\infty$, the corresponding one-sided eventual bound gives exactly the stated implication. [step 1.1, algebra] ∎
