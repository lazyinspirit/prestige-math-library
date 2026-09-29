---
id: def-mihlin-symbol-with-more-than-half-dimension-derivatives
kind: definition
title: Mihlin smoothness convention above half the dimension
status: draft
origin: pipeline
deps:
  - def-lp-fourier-multiplier-and-multiplier-norm
  - lem-ltwo-fourier-multiplier-bound
  - def-ck-and-multi-index-notation-in-several-variables
  - def-essential-supremum-with-respect-to-a-measure
  - prop-countable-subsets-of-rn-are-lebesgue-null
  - def-countable-choice
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§6.2.3, equations (6.2.10)-(6.2.14) and Theorem 6.2.7, printed pp. 445-447"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§3.9, Theorem 3.13 and proof, printed pp. 13-14; its stronger d+2 derivative count is distinguished below"
---

## Definition

Assume [[def-countable-choice|Countable Choice]] and let $n\ge1$. Put
$$q:=\lfloor n/2\rfloor+1 .$$
A measurable $m:\mathbb R^n\to\mathbb C$ is a **Mihlin symbol** in this
convention when there is a function $m_0\in C^q(\mathbb R^n\setminus\{0\})$
such that $m=m_0$ Lebesgue almost everywhere and there are constants
$C_\alpha\ge0$, indexed by the multi-indices $\alpha$ of
[[def-ck-and-multi-index-notation-in-several-variables]] with $|\alpha|\le q$,
for which
$$|\partial^\alpha m_0(\xi)|\le C_\alpha\,|\xi|^{-|\alpha|}\qquad(\xi\ne0,\ |\alpha|\le q).$$
The derivatives are taken in the punctured open set
$\mathbb R^n\setminus\{0\}$; the value $m(0)$ is not constrained.

**Consequences recorded here.** The case $\alpha=0$ gives
$|m_0(\xi)|\le C_0$ for every $\xi\ne0$, so $|m|\le C_0$ Lebesgue almost
everywhere, because the singleton $\{0\}$ is Lebesgue null
([[prop-countable-subsets-of-rn-are-lebesgue-null]]); thus a Mihlin symbol is
essentially bounded and
$$\|m\|_\infty=\operatorname{ess\,sup}|m|\le C_0$$
([[def-essential-supremum-with-respect-to-a-measure]]). Consequently the exact
$L^2$ multiplier lemma applies: every Schwartz function lies in the Schwartz
domain of $m$, and the operator $T_m$ has a unique bounded extension to
$L^2(\mathbb R^n;\mathbb C)$ of norm $\|m\|_\infty\le C_0$
([[lem-ltwo-fourier-multiplier-bound]]). This definition is a **sufficient**
symbol condition: $L^p(\mathbb R^n)$ boundedness for $1<p<\infty$ is a
separate theorem, assigned in this library to the later Mihlin multiplier
theorem built on singular-integral estimates, and no such boundedness is
asserted here.

**Derivative count.** The count $q=\lfloor n/2\rfloor+1$ is the classical
"more than half the dimension" requirement used by
[[def-lp-fourier-multiplier-and-multiplier-norm|multiplier theory]]. Grafakos
assumes $m_0\in C^{[n/2]+1}$ away from the origin with the pointwise
inequalities above and derives the annular estimates used in his proof;
[[lem-ltwo-fourier-multiplier-bound]] supplies only the $L^2$ part of that
theorem. Williams states the same conclusion under the stronger count
$|\alpha|\le d+2$, so his theorem does not reduce the derivative count adopted
here. The bounds are required for $\xi\ne0$ only: homogeneity of order zero
near the origin, such as the signum symbol in one dimension, is compatible
with the condition, while a jump at a nonzero frequency is not, since $C^q$
functions on the punctured space are continuous there.
