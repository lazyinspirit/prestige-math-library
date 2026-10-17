---
id: alg-deterministic-direct-search
kind: algorithm
title: "Finite-budget deterministic direct search with positive-spanning polling"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-positive-spanning-poll-set-and-angle
  - lem-finite-set-has-max
  - def-max-min
  - def-euclidean-inner-product
  - def-metric-topology
  - def-metric-ball
  - def-metric-space
justified_by:
  - lem-direct-search-finite-budget-returns-status
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, §§2.1–2.2 and ch. 8"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §§3.1–3.6"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition
Let $U\subseteq\mathbb R^n$ be open, $f:U\to\mathbb R$ be an objective accessible only by function evaluations, and let $x_0\in U$. Fix an ordered finite positive-spanning poll list $D=(d_1,\ldots,d_m)$, initial mesh $\Delta_0>0$, cap $\Delta_{\max}\ge\Delta_0$, forcing function $\rho:(0,\Delta_{\max}]\to(0,\infty)$ with $\rho(\Delta)/\Delta\to0$ as $\Delta\downarrow0$, factors $0<\gamma_{dec}<1<\gamma_{inc}$, and integer poll budget $N\ge0$. Evaluate $f(x_0)$ first and include it in the best-point record. At poll $k$, inspect $x_k+\Delta_kd_i$ in list order, ignoring points outside $U$ without an objective call. Accept the first in-domain point $y$ satisfying $f(y)<f(x_k)-\rho(\Delta_k)$; then set $x_{k+1}=y$ and $\Delta_{k+1}=\min(\Delta_{max},\gamma_{inc}\Delta_k)$. If none succeeds, declare an unsuccessful poll, set $x_{k+1}=x_k$, and $\Delta_{k+1}=\gamma_{dec}\Delta_k$. Return the least-index best point among all evaluated points, current center, mesh, evaluation count, and status **budget-exhausted** after at most $N$ polls. A finite budget is not a stationarity certificate.
