---
id: thm-pe12-bochner-lp-completeness
kind: theorem
title: Bochner Lp is complete for a Banach value space
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-banach-space, def-bochner-integrable-function, def-strongly-measurable-banach-valued-function, def-countable-choice, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §1.5, construction of Bochner spaces and completeness
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Chapter 4, Bochner integration and Lp completeness, PDF pp. 90–105
---

## Statement

Let $X$ be a real Banach space, $0<T<\infty$, and $1\le p<\infty$. Then
$L^p(0,T;X)$, with norm
$\|f\|_{L^p(X)}=(\int_0^T\|f(t)\|_X^pdt)^{1/p}$, is complete under Countable
Choice.

## Facts & Assumptions

**Given:** A real Banach space $X$, $0<T<\infty$, $1\le p<\infty$, and a
Cauchy sequence in $L^p(0,T;X)$.

[F1] Every Cauchy sequence in $X$ has a limit in $X$
([[def-banach-space]]).

[F2] Strong measurability is almost-everywhere pointwise norm convergence of
measurable simple functions, and Bochner $L^p$ consists of strongly
measurable functions with integrable $p$th power norm
([[def-strongly-measurable-banach-valued-function]],
[[def-bochner-integrable-function]]).

[F3] The Bochner $L^p$ norm satisfies Minkowski's inequality for $p\ge1$
([[thm-holder-inequality-for-integrals]],
[[thm-minkowski-inequality-for-integrals]]).

[F4] Increasing nonnegative measurable functions satisfy monotone
convergence for their integrals
([[thm-monotone-convergence-for-the-integral]]).

[F5] Dominated convergence and countable subadditivity apply on the finite
interval $(0,T)$
([[thm-dominated-convergence]],
[[thm-finite-and-countable-subadditivity-of-measures]]).

[A1] Countable Choice allows selection of a subsequence with summable
successive norm differences ([[def-countable-choice]]).

## Proof
1.1 By [A1], choose a subsequence $(f_k)$ of the Cauchy sequence such that $\|f_{k+1}-f_k\|_{L^p(X)}\le2^{-k}$ for each $k\ge1$. Put $g_N(t)=\sum_{k=1}^N\|f_{k+1}(t)-f_k(t)\|_X$. Minkowski [F3] gives $\|g_N\|_{L^p}\le\sum_{k=1}^N2^{-k}\le1$. Monotone convergence [F4] therefore gives $g(t)=\sum_{k\ge1}\|f_{k+1}(t)-f_k(t)\|_X\in L^p(0,T)$; in particular $g(t)<\infty$ for almost every $t$. [A1, F3, F4, given]

2.1 At every such $t$, the series of successive differences is absolutely convergent in $X$, so [F1] gives a pointwise limit $f(t)\in X$. Define $f=0$ on the exceptional null set. For each $k$, take simple functions $s_{k,m}$ converging almost everywhere to the strongly measurable $f_k$. Dominated convergence [F5] applied to the indicators of $\{t:\|s_{k,m}(t)-f_k(t)\|_X>2^{-k}\}$ lets us choose $m_k$ so this set has measure at most $2^{-k}$. Countable subadditivity [F5] shows that almost every $t$ lies in only finitely many of these bad sets. Therefore the simple functions $s_{k,m_k}$ converge almost everywhere to $f$, proving that $f$ is strongly measurable by [F2]. For every $N$, $\|f(t)-f_N(t)\|_X\le\sum_{k\ge N}\|f_{k+1}(t)-f_k(t)\|_X$ almost everywhere; the right side tends to zero pointwise and is bounded by $g\in L^p$, so [F5] and dominated convergence imply $\|f-f_N\|_{L^p(X)}\le\sum_{k\ge N}2^{-k}\to0$. Hence $f\in L^p(0,T;X)$ and $f_N\to f$ in that norm. [A1, F1, F2, F3, F4, F5, step 1.1]

3.1 The original sequence is Cauchy and has the subsequence $f_N\to f$; given $\varepsilon>0$, choose $N$ with $\|f_N-f\|_{L^p(X)}<\varepsilon/2$ and then take the original index sufficiently far out that its distance to $f_N$ is below $\varepsilon/2$. The triangle inequality proves convergence of the entire sequence to $f$, so $L^p(0,T;X)$ is complete. [F3, step 2.1, given] ∎
