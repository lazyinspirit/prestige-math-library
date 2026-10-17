---
id: cor-best-polynomial-approximation-errors-vanish
kind: corollary
title: "Best polynomial errors vanish for continuous functions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - cor-weierstrass-approximation-on-a-closed-interval
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Ch. 6"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Printed pp. 43–47, Weierstrass approximation theorem and the uniform norm"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete article; the density supplier is separately cited and proved locally in the library"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For every $f\in C[-1,1]$, $E_n(f)\to0$ as $n\to\infty$. This statement
concerns best polynomial errors only; it does not assert convergence of
interpolation at arbitrary node arrays.

## Facts & Assumptions
**Given:** $f\in C[-1,1]$ and $\varepsilon>0$.

[F1] [[cor-weierstrass-approximation-on-a-closed-interval]]: every continuous real function on a closed interval is uniformly approximable by polynomials.

[F2] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]: $E_n(f)=\inf_{p\in\mathcal P_n}\|f-p\|_\infty$, and $\mathcal P_m\subseteq\mathcal P_n$ when $m\leq n$.

## Proof

1.1 By [F1], choose a polynomial $p$ and an integer $m$ with $p\in\mathcal P_m$ such that $\|f-p\|_\infty<\varepsilon$; if $p=0$, take $m=0$. [given, F1, choose]

2.1 For every $n\geq m$, $p\in\mathcal P_n$, so [F2] gives $0\leq E_n(f)\leq\|f-p\|_\infty<\varepsilon$. Since $\varepsilon>0$ was arbitrary, $E_n(f)\to0$. This conclusion concerns $E_n$ alone; it does not show that $(1+\Lambda_n^\sigma)E_n(f)\to0$. [given, F1, F2, step 1.1, algebra] ∎
