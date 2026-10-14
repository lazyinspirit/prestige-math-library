---
id: thm-nadaraya-watson-population-bias
kind: theorem
title: Pointwise population bias of the Nadaraya–Watson smoother
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-measure-with-density
  - def-nadaraya-watson-estimator
  - def-regression-target-version
  - cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Statement

Assume AC for the chosen regression version [[def-regression-target-version]].
Let $X$ have Lebesgue density $f$, with $f(x)>0$ at a fixed interior point
$x$, and let $f,m$ be $C^2$ near $x$. Let $K$ be a finite-valued Borel,
nonnegative, symmetric kernel with $\int K=1$,
$0<\mu_2=\int u^2K(u)\,du<\infty$ and $\int K^2<\infty$.
Assume either that $K$ has compact support, or that $f,m$ and their first
two derivatives are bounded and continuous on $\mathbb R$. In these first two alternatives, no continuity
or boundedness of $K$ is required. The global alternative supplies tail
control for noncompact kernels; local smoothness alone does not supply it.
A further localization alternative, including the Gaussian kernel, is that
$\mathbb E[Y^2]<\infty$, $K$ is bounded, and
$$\lim_{A\to\infty}\sup_{|u|\ge A}|u|^3K(u)=0.$$
Under this rapid-tail alternative only the stated local smoothness of
$f,m$ is needed; no global boundedness of $m$ or of its derivatives is assumed.
For sufficiently small $h>0$, the population smoother corresponding to
[[def-nadaraya-watson-estimator]] is well defined by
$$m_h(x)=\frac{\int K(u)m(x-hu)f(x-hu)\,du}{\int K(u)f(x-hu)\,du},$$
and
$$m_h(x)-m(x)=\frac{h^2\mu_2}{2}\left(m''(x)+2m'(x)\frac{f'(x)}{f(x)}\right)+o(h^2).$$

## Facts & Assumptions

**Given:** The selected regression version, density, kernel, and either localization or global domination hypotheses in the statement. Integrals are Lebesgue integrals.

[F1] The chosen Borel regression version represents the conditional mean almost surely. [[def-regression-target-version]].

[F2] The Nadaraya–Watson estimator normalizes its nonnegative weights, with a fixed zero-denominator fallback. [[def-nadaraya-watson-estimator]].

[F3] A density $f$ defines the law $f\,d\lambda$. [[def-measure-with-density]].

[F4] For $P_X$-almost every $t$, $m(t)=\int y\,Q(t,dy)$, and conditional integration gives $\int |m(t)|f(t)\,dt\le\mathbb E|Y|<\infty$ by the triangle inequality. [[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]]

## Proof



1.1 Put $g=mf$. For $v=f,g$, twice applying the fundamental theorem of calculus gives $v(x-t)=v(x)-tv'(x)+t^2\int_0^1(1-s)v''(x-st)\,ds$. Thus $v(x-hu)=v(x)-huv'(x)+\tfrac12h^2u^2v''(x)+h^2u^2r_{v,h}(u)$. On compact kernel support the remainder tends uniformly to zero. Under the global alternative it is uniformly bounded and tends to zero for each fixed $u$: split the remainder integral at $|u|\le A$, use uniform continuity near $x$ on that fixed set, and bound the remaining part by $C\int_{|u|>A}u^2K(u)\,du\to0$ as $A\to\infty$. In the rapid-tail alternative [F4] gives $\int|g|<\infty$. Put $\epsilon_h=\sup_{|u|\ge\delta/h}|u|^3K(u)\to0$. For $v=f,mf$, $\int|v|<\infty$ and $h^{-1}\int_{|z-x|>\delta}K((x-z)/h)|v(z)|\,dz\le\epsilon_hh^2\delta^{-3}\int|v|=o(h^2)$. On $|z-x|\le\delta$ use the local Taylor remainder; its normalized integral is bounded by $\mu_2$ times the modulus of continuity of $v''$ at $x$. The omitted constant, linear and quadratic Taylor tails are $o(h^2)$ because $\int_{|u|>\delta/h}u^2K\to0$. First let $h\to0$, then $\delta\to0$. In every alternative the integrated remainder is $o(h^2)$. Symmetry and the finite second moment give $\int uK(u)\,du=0$, so $\int K(u)v(x-hu)\,du=v(x)+\tfrac12h^2\mu_2v''(x)+o(h^2)$. All integrals are finite by localization or the global bounds. [given, F1, F3, F4, algebra]

2.1 Apply step 1.1 to numerator $g$ and denominator $f$. The latter tends to $f(x)>0$. Taking their quotient and subtracting $m(x)$ gives $\tfrac12h^2\mu_2\{(mf)''/f-mf''/f\}(x)+o(h^2)=\tfrac12h^2\mu_2(m''+2m'f'/f)(x)+o(h^2)$, as asserted. [given, F2, step 1.1, algebra] ∎

