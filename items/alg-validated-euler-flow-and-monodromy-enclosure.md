---
id: alg-validated-euler-flow-and-monodromy-enclosure
kind: algorithm
title: "Validated forward-Euler tube for the periodic flow and variational equation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-verified-flow-variational-range-oracle
  - lem-c1-ode-flow-on-common-tube
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Definition

Let $f:U\to\mathbb R^d$ be $C^2$. Set $m=d+d^2+1$ and define the augmented autonomous field
$$
H(x,Z,\theta)=\bigl(\theta f(x),\ \theta Df(x)Z,\ 0\bigr)
$$
on an open set $\Omega\subseteq\mathbb R^m$. The exact flow and its differentiability on a common compact tube use [[lem-c1-ode-flow-on-common-tube]]. Inputs are a rational initial-state box $X_0\subset U$, a rational period interval $\Theta=[\theta_-,\theta_+]\subset(0,\infty)$, an integer $N\ge1$, a compact convex rational tube $K\subset\Omega$, and a sound range oracle with rational bounds $L,M$ as in [[def-verified-flow-variational-range-oracle]]. Use the maximum norm and exact rational set arithmetic. Let $h=1/N$ and
$$
Y_0=X_0\times\{I_d\}\times\Theta.
$$
For $n=0,\ldots,N-1$, first set
$$
Q_n=Y_n+[-Mh,Mh]^m.
$$
If $Q_n\not\subseteq K$, return inconclusive. Then request $H^\#(Y_n)$. If it is inconclusive, return inconclusive. Otherwise form
$$
Y_{n+1}=Y_n+hH^\#(Y_n)+[-LMh^2/2,LMh^2/2]^m.
$$
If any required rational set operation is unavailable or the next box is not finite, return inconclusive; otherwise continue. On success return the tube boxes $Q_0,\ldots,Q_{N-1}$ and endpoint box $Y_N$. The first, second, and last coordinate blocks of $Y_N$ enclose the exact endpoint, the exact variational matrix, and the period, respectively. The procedure makes no success claim if the supplied range oracle or $L,M$ bounds are not sound on $K$.
