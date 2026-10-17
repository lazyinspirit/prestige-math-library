---
id: alg-zero-compatible-modified-patankar-euler
kind: algorithm
title: "Zero-compatible modified Patankar Euler in rate-factor form"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-source-factored-production-destruction-rates
  - lem-strict-column-dominance-implies-nonnegative-inverse
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §2"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $K$ be a compact nonnegative state set with a source-factored transfer representation [[def-source-factored-production-destruction-rates]]. Given $y^n\in\mathbb R^m$ and a step size $h$, if $y^n\notin K$ or $h\le0$, return an inadmissible-input status before evaluating any factor. Otherwise form $B(y^n)\in\mathbb R^{m\times m}$ by

$$B_{ij}(y^n)=a_{ij}(y^n)\ (i\ne j),\qquad B_{jj}(y^n)=-\sum_{i\ne j}a_{ij}(y^n).$$

Return the unique solution $y^{n+1}$ of

$$\bigl(I-hB(y^n)\bigr)y^{n+1}=y^n.$$

Equivalently, component $i$ satisfies

$$y_i^{n+1}=y_i^n+h\sum_{j\ne i}\left(a_{ij}(y^n)y_j^{n+1}-a_{ji}(y^n)y_i^{n+1}\right).$$

This procedure uses no denominator $y_j^n$ and is defined when some donor coordinates vanish. It is the factorized extension of the first-order Patankar Euler formula to the zero-state boundary. In exact arithmetic its linear system is uniquely solvable by [[lem-strict-column-dominance-implies-nonnegative-inverse]].
