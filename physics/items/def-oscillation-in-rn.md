---
id: def-oscillation-in-rn
kind: definition
title: "Oscillation of a real function on subsets of $\\mathbb{R}^m$ and at a point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-oscillation, def-extended-reals, lem-extended-reals-complete, def-metric-ball, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-bounded-set, def-infimum, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Definition

Let $f:A\to\mathbb R$, $A\subseteq\mathbb R^m$. For $S\subseteq A$, define
$$\omega_f(S):=\sup_{\overline{\mathbb R}}\{|f(x)-f(y)|:x,y\in S\},$$
with value $0$ when $S=\varnothing$. For $c\in A$, define
$$\omega_f(c):=\inf_{r>0}\omega_f(A\cap B(c,r)).$$
The extended supremum exists by [[def-extended-reals]] and [[lem-extended-reals-complete]]; for bounded $f$ all values are finite. Balls are [[def-metric-ball]] for the Euclidean metric ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

If $S\subseteq T$, then $\omega_f(S)\le\omega_f(T)$, directly from the supremum definition; hence the ball oscillations decrease as the radius shrinks and the infimum is well posed ([[def-infimum]], [[lem-of-abs-value]]). At $m=1$ this agrees with [[def-oscillation]] on every nonempty set; only the empty-set convention differs, being $0$ here and $-\infty$ there.
