---
id: lem-pe12-bochner-lp-mollification
kind: lemma
title: Time translations and mollification in Bochner Lp
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-bochner-integrable-function, def-strongly-measurable-banach-valued-function, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, def-countable-choice, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, lem-lebesgue-measurable-sets-have-small-open-excess, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, lem-bochner-integral-norm-inequality, thm-minkowski-integral-inequality, thm-continuity-from-below-for-measures]
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

[F3] Under Countable Choice every Lebesgue measurable set is a Borel set up to a subset of a Borel null set, and a Lebesgue measurable set has an open superset with arbitrarily small excess ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[lem-lebesgue-measurable-sets-have-small-open-excess]]). Measures are continuous from below ([[thm-continuity-from-below-for-measures]]).

[F4] For Bochner integrable $v$, $\|\int v\|_X\le\int\|v\|_X$ ([[lem-bochner-integral-norm-inequality]]). Scalar Hölder and Minkowski apply to its norm, and scalar integral Minkowski gives $\|\int F(\cdot,s)ds\|_p\le\int\|F(\cdot,s)\|_pds$ for nonnegative measurable $F$ with finite right side ([[thm-holder-inequality-for-integrals]], [[thm-minkowski-inequality-for-integrals]], [[thm-minkowski-integral-inequality]]).

[A1] Countable Choice is assumed only through the simple-function
approximation and scalar translation suppliers ([[def-countable-choice]]).

## Proof
1.1 Let $s(t)=\sum_{j=1}^m x_j\mathbf1_{E_j}(t)$ be a simple function with disjoint measurable $E_j$. Extend it by zero to $\mathbb R$. By [F2], $\|\mathbf1_{E_j}(\cdot-h)-\mathbf1_{E_j}\|_{L^p(\mathbb R)}\to0$ for each $j$; the triangle inequality and the finite sum show $\|s(\cdot-h)-s\|_{L^p(\mathbb R;X)}\to0$. [F2, given, algebra]

1.2 For an interval partition $\mathcal P$, let $P_\mathcal P f$ be the average of $f$ on each cell $I$. By [F4], $\|\,|I|^{-1}\int_I f\|_X\le |I|^{-1}\int_I\|f\|_X$. For $p>1$, scalar Hölder gives $|I|\|\,|I|^{-1}\int_I f\|_X^p\le\int_I\|f\|_X^p$; for $p=1$ the first inequality gives the same assertion directly. Summing proves contraction on $L^p$. To justify density for arbitrary completed Lebesgue level sets, write $E=B\cup N$ with $B$ Borel and $N$ contained in a Borel null set $Z$ by [F3], after intersecting all sets with $(0,T)$. The Borel set $B\cup Z$ differs from $E$ by a null set. Choose an open superset $O$ with excess less than $\eta$. The bounded open set $O\cap(0,T)$ is the union of the countably many rational-endpoint open intervals contained in it. Enumerate those intervals, and let $J_m$ be their first $m$ unions. By continuity from below [F3], $|(O\cap(0,T))\setminus J_m|\to0$. Thus a finite union of intervals differs from $E$ in measure by less than $2\eta$ for large $m$. Round the finitely many endpoints by continuous linear ramps, whose error is supported in intervals of arbitrarily small total length. It follows that continuous $X$-valued functions are dense in $L^p(0,T;X)$ by applying this construction to the finitely many level sets of a simple approximation [F1]. For continuous $g$, uniform continuity gives $\|P_\mathcal P g-g\|_{L^p}\le T^{1/p}\sup_{|s-t|\le\max|I|}\|g(s)-g(t)\|_X\to0$. Contraction now yields $\|P_\mathcal P f-f\|_{L^p}\le2\|f-g\|_{L^p}+\|P_\mathcal P g-g\|_{L^p}$, proving the averages assertion. [F1, F3, F4, A1, given, construct, algebra]

2.1 Given $\varepsilon>0$, choose a simple $s$ with $\|f-s\|_{L^p(0,T;X)}<\varepsilon/3$ by [F1]. Extend both functions by zero outside $(0,T)$. Translation is an isometry of the whole-line Bochner norm because it preserves Lebesgue measure; step 1.1 therefore gives, for all sufficiently small $h$, $\|f(\cdot-h)-f\|_{L^p(\mathbb R;X)}\le2\|f-s\|_{L^p}+\|s(\cdot-h)-s\|_{L^p}<\varepsilon$. Restriction to compact subintervals proves the translation assertion. [A1, F1, F2, step 1.1, given]

3.1 Let $\rho_\delta$ be a nonnegative smooth scalar function supported in $[-\delta,\delta]$ with integral one. Apply the Bochner norm bound in [F4] pointwise to the convolution difference, then apply scalar integral Minkowski to $F(t,s)=\rho_\delta(s)\|f(t-s)-f(t)\|_X$. A Borel version of the strongly measurable $f$ may be used: replace the finitely many level sets in each simple approximant by Borel sets modulo null sets using [F3], then take its almost-everywhere limit. The resulting two-variable norm is measurable, and its section norms are at most $2\rho_\delta(s)\|f\|_{L^p(\mathbb R;X)}$, an integrable majorant. Thus [F4] gives on any compact subinterval $K\subset(0,T)$ $$\|\rho_\delta*f-f\|_{L^p(K;X)} \le\int\rho_\delta(s)\|f(\cdot-s)-f\|_{L^p(K;X)}\,ds.$$ The translation modulus from step 2.1 tends to zero uniformly for $|s|\le\delta$; hence the right-hand side tends to zero as $\delta\downarrow0$. This proves the mollification claim. [F3, F4, step 2.1]

4.1 Steps 1.2, 2.1, and 3.1 prove convergence of interval averages, translation continuity, and convergence of time mollifiers, respectively. [step 1.2, step 2.1, step 3.1] ∎
