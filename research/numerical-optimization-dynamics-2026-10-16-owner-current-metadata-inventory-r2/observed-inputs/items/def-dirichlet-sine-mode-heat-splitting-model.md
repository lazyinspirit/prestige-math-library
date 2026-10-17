---
id: def-dirichlet-sine-mode-heat-splitting-model
kind: definition
title: "Diagonal Dirichlet sine-mode heat model with constant forcing"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-square-summable-family-on-an-arbitrary-index-set
  - thm-p-series-real-exponents
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations, complete 120-page graduate lecture notes"
      url: "https://arxiv.org/pdf/1203.2344"
      locator: "Chapter 2, §One dimension, interval Dirichlet case, printed p. 15: sine eigenmodes and eigenvalues."
---

## Definition

Let $\mathcal H=\ell^2(\mathbb N,\mathbb R)$, with square-summability as in [[def-square-summable-family-on-an-arbitrary-index-set]]. Define the diagonal operator $A$ by
$$D(A)=\left\{u\in\mathcal H:\sum_{k\ge1} k^4|u_k|^2<\infty\right\},\qquad (Au)_k=-k^2u_k.$$
Let $g\in\mathcal H$ be the fixed sequence $g_k=1/k$ for odd $k$ and $g_k=0$ for even $k$; membership follows from [[thm-p-series-real-exponents]] with exponent $2$. The split evolution is $u'=Au+g$. For $t\ge0$, define the exact diagonal subflow $E_tu=(\exp(-k^2t)u_k)_{k\ge1}$ and the exact translation subflow $B_tu=u+tg$. By [[cor-exponential-reciprocal-and-positivity]] and [[thm-exponential-is-strictly-increasing]], $0<\exp(-k^2t)\le1$, so each $E_t$ maps $\mathcal H$ to itself; each $B_t$ does so because $g\in\mathcal H$. The associated Strang modal step is
$$S_h=E_{h/2}\circ B_h\circ E_{h/2},\qquad h>0,$$
where the rightmost map is applied first. Each coordinate of $E_t$ solves $u_k'=-k^2u_k$, and each coordinate of $B_t$ solves $u_k'=g_k$. This is a precisely defined sequence-space model; it records one Dirichlet sine-mode boundary mismatch and makes no general convergence assertion for unbounded PDE operators.
