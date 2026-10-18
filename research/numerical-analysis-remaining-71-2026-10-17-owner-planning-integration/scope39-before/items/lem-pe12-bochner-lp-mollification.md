---
id: lem-pe12-bochner-lp-mollification
kind: lemma
title: Time translations and mollification in Bochner Lp
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-bochner-integrable-function, def-strongly-measurable-banach-valued-function, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, def-countable-choice, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, thm-lebesgue-stieltjes-measures-are-regular-on-r]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.2, smoothing of evolution-space functions; §7.3, time mollification in the Aubin–Lions proof
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapter 11 §11.1, PDF pp. 96–98, evolution-space approximation by time mollification
---

## Statement

Assume Countable Choice.

Let $X$ be a real Banach space, $0<T<\infty$, and $1\le p<\infty$. For
$f\in L^p(0,T;X)$, translations are continuous in $L^p$ on every compact
subinterval of $(0,T)$. Convolution with a scalar smooth approximate identity
therefore converges to $f$ in $L^p$ on such subintervals. If $\mathcal P_k$
are interval partitions of $[0,T]$ with maximum cell length tending to zero,
the piecewise-constant interval averages of $f$ converge to $f$ in
$L^p(0,T;X)$.

## Facts & Assumptions

**Given:** Countable Choice, a real Banach space $X$, $0<T<\infty$,
$1\le p<\infty$, and $f\in L^p(0,T;X)$.

[F1] A strongly measurable Banach-valued function is an almost-everywhere
pointwise limit of measurable simple functions, and Bochner $L^p$ functions
are approximable in norm by simple functions
([[def-strongly-measurable-banach-valued-function]],
[[def-bochner-integrable-function]]).

[F2] Scalar translations are continuous in $L^p(\mathbb R)$ for
$1\le p<\infty$ under Countable Choice
([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]],
[[def-countable-choice]]).

[F3] Lebesgue measure on a bounded interval is regular, so indicators of
measurable sets can be approximated in $L^p$ by continuous functions
([[thm-lebesgue-stieltjes-measures-are-regular-on-r]]).

[F4] Minkowski's inequality bounds norms of Bochner averages and integrals
([[thm-holder-inequality-for-integrals]],
[[thm-minkowski-inequality-for-integrals]]).

[A1] Countable Choice is assumed only through the simple-function
approximation and scalar translation suppliers ([[def-countable-choice]]).

## Proof
1.1 Let $s(t)=\sum_{j=1}^m x_j\mathbf1_{E_j}(t)$ be a simple function with disjoint measurable $E_j$. Extend it by zero to $\mathbb R$. By [F2], $\|\mathbf1_{E_j}(\cdot-h)-\mathbf1_{E_j}\|_{L^p(\mathbb R)}\to0$ for each $j$; the triangle inequality and the finite sum show $\|s(\cdot-h)-s\|_{L^p(\mathbb R;X)}\to0$. [F2, given, algebra]

1.2 For an interval partition $\mathcal P$, let $P_\mathcal P f$ be the average of $f$ on each cell. Jensen's inequality makes $P_\mathcal P$ a contraction on $L^p$. By [F1] and [F3], continuous $X$-valued functions are dense in $L^p(0,T;X)$: approximate a simple function, approximate each of its measurable level sets in measure by a finite union of intervals, and round the finitely many jumps by continuous linear ramps. For continuous $g$, uniform continuity gives $\|P_\mathcal P g-g\|_{L^p}\le T^{1/p}\sup_{|s-t|\le\max|I|}\|g(s)-g(t)\|_X\to0$. For general $f$, contraction yields $\|P_\mathcal P f-f\|_{L^p}\le2\|f-g\|_{L^p}+\|P_\mathcal P g-g\|_{L^p}$; first choose $g$ close, then refine the partition. [F1, F3, F4, given]

2.1 Given $\varepsilon>0$, choose a simple $s$ with $\|f-s\|_{L^p(0,T;X)}<\varepsilon/3$ by [F1]. Extend both functions by zero outside $(0,T)$. Translation is an isometry of the whole-line Bochner norm because it preserves Lebesgue measure; step 1.1 therefore gives, for all sufficiently small $h$, $\|f(\cdot-h)-f\|_{L^p(\mathbb R;X)}\le2\|f-s\|_{L^p}+\|s(\cdot-h)-s\|_{L^p}<\varepsilon$. Restriction to compact subintervals proves the translation assertion. [A1, F1, F2, step 1.1, given]

3.1 Let $\rho_\delta$ be a nonnegative smooth scalar function supported in $[-\delta,\delta]$ with integral one. Minkowski [F4] gives on any compact subinterval $K\subset(0,T)$ $$\|\rho_\delta*f-f\|_{L^p(K;X)} \le\int\rho_\delta(s)\|f(\cdot-s)-f\|_{L^p(K;X)}\,ds.$$ The translation modulus from step 2.1 tends to zero uniformly for $|s|\le\delta$; hence the right-hand side tends to zero as $\delta\downarrow0$. This proves the mollification claim. [F4, step 2.1]

4.1 Steps 1.2, 2.1, and 3.1 prove convergence of interval averages, translation continuity, and convergence of time mollifiers, respectively. [step 1.2, step 2.1, step 3.1] ∎
