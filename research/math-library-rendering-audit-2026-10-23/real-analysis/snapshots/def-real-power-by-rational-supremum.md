---
id: def-real-power-by-rational-supremum
kind: definition
title: "Real powers from suprema of rational powers, with the reciprocal convention below base one"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-upper-bound, def-complete-ordered-field, def-rational-power, lem-rat-embeds-dense, lem-rational-power-monotone, thm-of-archimedean]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Definition

For $a>1$ and $x\in\mathbb R$, set
$$S_a(x):=\{a^q:q\in\mathbb Q,\ q<x\},\qquad a^{[x]}:=\sup S_a(x).$$
The set is nonempty because a rational lies below $x$ ([[lem-rat-embeds-dense]]). It is bounded above: choose a natural $m>x$ ([[thm-of-archimedean]]), so every $q<x$ satisfies $q<m$ and $a^q\le a^m$ ([[lem-rational-power-monotone]]). The supremum therefore exists in $\mathbb R$ by the least-upper-bound property of a complete ordered field ([[def-complete-ordered-field]], [[def-upper-bound]]), and it is strictly positive, because it is at least the element $a^q$ of $S_a(x)$ for any rational $q<x$ and every rational power of a positive base is positive ([[def-rational-power]]).

For $0<a<1$, define $a^{[x]}:=1/\bigl((a^{-1})^{[x]}\bigr)$; for $a=1$, define $1^{[x]}:=1$. The notation $a^{[x]}$ distinguishes this rational-supremum construction from the exponential construction until their agreement is proved.

## Remarks

The direct supremum formula is intentionally restricted to $a>1$. When $0<a<1$, the set $\{a^q:q<x\}$ is unbounded above as $q$ tends to negative infinity.
