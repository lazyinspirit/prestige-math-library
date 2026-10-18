---
id: def-clamped-cubic-spline-interpolant
kind: definition
title: Clamped cubic spline interpolant
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-natural-cubic-spline]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter IV, pp. 43–45
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Brian LeMesurier, Introduction to Numerical Methods and Analysis with Python, §3.4.2
      url: https://lemesurierb.people.charleston.edu/introduction-to-numerical-methods-and-analysis-python/docs/main/piecewise-polynomial-approximation-and-splines.html
---

## Definition

Let $a=x_0<x_1<\cdots<x_m=b$, with $m\ge1$, let
$y_0,\ldots,y_m\in\mathbb R$, and prescribe endpoint slopes
$\sigma_a,\sigma_b\in\mathbb R$. A **clamped cubic spline interpolant**
for these data is a function $s\in C^2([a,b])$ whose restriction to every
$[x_i,x_{i+1}]$ is a polynomial of degree at most three, which satisfies
$s(x_i)=y_i$ for every $i$, and which satisfies
$s'(a)=\sigma_a$ and $s'(b)=\sigma_b$.

Here $C^2$ means that the function and its first two derivatives are
continuous on $[a,b]$, with one-sided derivatives at the endpoints. This
uses the piecewise-cubic convention in
[[def-natural-cubic-spline]] and replaces its natural endpoint-curvature
conditions by prescribed endpoint slopes. It does not alter the natural
cubic interpolant or its system.
