---
id: thm-pe12-bochner-lp-completeness
kind: theorem
title: Bochner Lp is complete for a Banach value space
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-banach-space,
    def-strongly-measurable-banach-valued-function,
    def-countable-choice,
    thm-minkowski-inequality-for-integrals,
    thm-monotone-convergence-for-the-integral,
    thm-dominated-convergence,
    thm-finite-and-countable-subadditivity-of-measures,
    prop-measure-monotonicity,
    prop-order-and-scalar-rules-for-the-nonnegative-integral,
    def-nonnegative-extended-series,
    thm-lebesgue-measure-of-a-box-of-every-kind,
    thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with
        Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §1.5, construction of Bochner spaces and completeness
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential
        Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Chapter 4, Bochner integration and Lp completeness, PDF pp. 90–105
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $X$ be a real Banach space, $0<T<\infty$, and $1\le p<\infty$. Then
$L^p(0,T;X)$, with norm
$\|f\|_{L^p(X)}=(\int_0^T\|f(t)\|_X^pdt)^{1/p}$, is complete under Countable
Choice.

## Facts & Assumptions

**Given:** A real Banach space $X$, $0<T<\infty$, $1\le p<\infty$, and a Cauchy sequence in $L^p(0,T;X)$.

[F1] Every Cauchy sequence in $X$ has a limit in $X$ ([[def-banach-space]]).

[F2] Here $L^p(0,T;X)$ is the space of a.e.-classes of strongly measurable $X$-valued functions $f$ with $\int_0^T\|f(t)\|_X^p\,dt<\infty$, with norm $\|f\|_{L^p(X)}=(\int_0^T\|f(t)\|_X^p\,dt)^{1/p}$. Strong measurability means a.e. pointwise norm convergence of measurable simple functions ([[def-strongly-measurable-banach-valued-function]]).

[F3] After modifying representatives to be zero on exceptional null sets, finite sums and differences of strongly measurable functions are strongly measurable, and their norm functions are measurable: finite sums of simple approximants are simple, while the norm is continuous and pointwise limits of measurable scalar functions are measurable ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F4] The scalar $L^p$ norm satisfies Minkowski's inequality. Together with $\|u(t)+v(t)\|_X\le\|u(t)\|_X+\|v(t)\|_X$, this gives the triangle inequality for the displayed Bochner $L^p$ norm ([[thm-minkowski-inequality-for-integrals]]).

[F5] Increasing nonnegative measurable functions satisfy monotone convergence for their integrals ([[thm-monotone-convergence-for-the-integral]]).

[F6] Dominated convergence holds for nonnegative measurable functions, and the nonnegative integral is monotone ([[thm-dominated-convergence]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F7] Measures are monotone and countably subadditive, and a nonnegative extended series is the supremum of its finite partial sums ([[prop-measure-monotonicity]], [[thm-finite-and-countable-subadditivity-of-measures]], [[def-nonnegative-extended-series]]).

[F8] The finite interval $(0,T)$ has Lebesgue measure $T$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[A1] Countable Choice selects representatives and simple-function approximating sequences for the countable subsequence, and indices $m_k$ from countably many nonempty approximation sets ([[def-countable-choice]]). Subsequence indices can be chosen by least-index recursion.

## Proof
1.1 The Cauchy sequence has a subsequence $(f_k)$ with $\|f_{k+1}-f_k\|_{L^p(X)}\le2^{-k}$ for $k\ge1$, by recursively taking the least eligible indices. Countable Choice [A1] selects strongly measurable representatives for these classes. Put $g_N(t)=\sum_{k=1}^N\|f_{k+1}(t)-f_k(t)\|_X$. By [F3], $g_N$ is measurable; Minkowski [F4] gives $\|g_N\|_{L^p}\le\sum_{k=1}^N2^{-k}\le1$. Monotone convergence [F5] gives $g(t)=\sum_{k\ge1}\|f_{k+1}(t)-f_k(t)\|_X$ with $\int g^p\le1$. Thus $g<\infty$ almost everywhere: for $A=\{g=\infty\}$, $M^p\mathbf1_A\le g^p$ for every $M>0$, and [F6] gives $M^p\mu(A)\le1$, forcing $\mu(A)=0$. [A1, F3, F4, F5, F6, given]

2.1 Outside the null set where $g=\infty$, the sequence $f_k(t)$ is Cauchy in $X$ and converges to $f(t)\in X$ by [F1]; set $f=0$ on that null set. For each $k$, choose a simple sequence $s_{k,m}\to f_k$ almost everywhere, as supplied by [F2] and [A1]. The sets $E_{k,m}=\{t:\|s_{k,m}(t)-f_k(t)\|_X>2^{-k}\}$ are measurable by [F3], and their indicators tend to zero almost everywhere as $m\to\infty$. Dominated convergence [F6] on the finite interval [F8] lets Countable Choice [A1] select $m_k$ with $\mu(E_{k,m_k})\le2^{-k}$. By [F7], the set $N=\bigcap_{j\ge1}\bigcup_{k\ge j}E_{k,m_k}$ has measure at most $\sum_{k\ge j}2^{-k}\le2^{1-j}$ for every $j$, hence is null. Outside $N$ and the previous null set, $s_{k,m_k}(t)\to f(t)$, so $f$ is strongly measurable by [F2]. Also $\|f-f_1\|_X\le g$ almost everywhere; [F6] makes this difference $L^p$, and Minkowski [F4] gives $f\in L^p$. For each $N$, $\|f(t)-f_N(t)\|_X\le\sum_{k\ge N}\|f_{k+1}(t)-f_k(t)\|_X\to0$ and is bounded by $g(t)$. Dominated convergence [F6] gives $\|f-f_N\|_{L^p(X)}\to0$. [A1, F1, F2, F3, F4, F6, F7, F8, step 1.1]

3.1 The original sequence is Cauchy and has the subsequence $f_N\to f$; given $\varepsilon>0$, choose $N$ with $\|f_N-f\|_{L^p(X)}<\varepsilon/2$ and then take the original index sufficiently far out that its distance to $f_N$ is below $\varepsilon/2$. The triangle inequality [F4] proves convergence of the entire sequence to $f$, so $L^p(0,T;X)$ is complete. [F4, step 2.1, given] ∎
