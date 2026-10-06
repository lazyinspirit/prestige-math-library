---
id: lem-gaussian-decay-gives-an-entire-fourier-laplace-transform
kind: lemma
title: Gaussian decay gives an entire Fourier-Laplace transform and its growth bound
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
local_addition: true
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-complex-differentiability-holomorphic-and-entire
  - def-complex-exponential
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - lem-exponential-dominates-one-plus-x
  - lem-l-one-fourier-transform-is-well-defined
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-dominated-convergence
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§5, Lemma 5.1, printed pp. 11–12"
    - title: "Mathilda Lindell, The Phragmén–Lindelöf Principle and Its Applications (Lund University bachelor's thesis 2025:K15)"
      url: "https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9206853&fileOId=9206856"
      locator: "§3.2, Lemmas 3.2.2–3.2.3, PDF pp. 35–36 (one-variable continuation and growth bound); the coordinate-slice argument is given here."
---

## Statement

Assume countable choice ([[def-countable-choice]]). Let $n\ge1$, $a>0$,
$C\ge0$, and let $f:\mathbb R^n\to\mathbb C$ be measurable with
$|f(x)|\le Ce^{-\pi a|x|^2}$ for almost every $x$ (so $f\in L^1$). Define
$F(z):=\int_{\mathbb R^n}f(x)e^{-2\pi i\,x\cdot z}\,dx$. Then the integral
converges absolutely for every $z\in\mathbb C^n$ and is independent of the
representative of the class; every coordinate slice of $F$ is entire, with
$$\frac{\partial}{\partial z_j}F(z)=\int_{\mathbb R^n}f(x)(-2\pi ix_j)e^{-2\pi i\,x\cdot z}\,dx ;$$
$F(x)=\widehat f(x)$ for every $x\in\mathbb R^n$; and
$$|F(z)|\le C\,a^{-n/2}e^{\pi|\operatorname{Im}z|^2/a}\qquad(z\in\mathbb C^n).$$

## Facts & Assumptions

**Given:** An integer $n\ge1$, reals $a>0$ and $C\ge0$, a measurable $f:\mathbb R^n\to\mathbb C$ with $|f(x)|\le Ce^{-\pi a|x|^2}$ for almost every $x$, points $z\in\mathbb C^n$ and $w\in\mathbb C$, and countable choice ([[def-countable-choice]]).

[F1] Countable choice is assumed; it is the hypothesis carried by the change-of-variables corollary and by the Gaussian integral identity used below ([[def-countable-choice]]).

[F2] The complex exponential is defined by its power series, satisfies $\exp(\zeta+\eta)=\exp\zeta\exp\eta$ and $|\exp\zeta|=e^{\operatorname{Re}\zeta}$, and is entire with $\exp'=\exp$, so $(\exp\zeta-1)/\zeta\to1$ as $\zeta\to0$ through nonzero complex values ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F3] For every $\zeta\in\mathbb C$, $|e^{\zeta}-1|\le|\zeta|e^{|\zeta|}$: the defining power series of [[def-complex-exponential]] is absolutely convergent, so the triangle inequality for series bounds $|e^{\zeta}-1|\le\sum_{m\ge1}|\zeta|^m/m!=e^{|\zeta|}-1\le|\zeta|e^{|\zeta|}$.

[F4] If measurable complex-valued $h_n,h$ satisfy $h_n\to h$ almost everywhere and $|h_n|\le G$ almost everywhere for one nonnegative measurable $G$ with $\int G<\infty$, then $\int h_n\to\int h$ ([[thm-dominated-convergence]]).

[F5] The Lebesgue integral is complex-linear on $L^1$, and integrable functions that agree almost everywhere have equal integrals ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F6] For nonnegative measurable functions the integral is monotone and $\int c\,\varphi=c\int\varphi$ for $c>0$; and $|\int h|\le\int|h|$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-integral-triangle-inequality]]).

[F7] The Gaussian Lebesgue integral and its translations: for every $b>0$, $\int_{\mathbb R^n}e^{-\pi b|x|^2}dx=b^{-n/2}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]] at $\xi=0$); and for $h\in L^1$ and $c\in\mathbb R^n$ the translation $T(x)=x-c$ has $\det DT=1$, so $\int h(x-c)\,dx=\int h(y)\,dy$ ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F8] For every real $u$, $1+u\le e^u$ ([[lem-exponential-dominates-one-plus-x]]).

[F9] The $L^1$ transform is $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$, absolutely convergent at every real $\xi$ ([[def-fourier-transform-on-l-one-of-rn]], [[lem-l-one-fourier-transform-is-well-defined]]).

[F10] A function is holomorphic on an open subset of $\mathbb C$ when complex differentiable at every point, and holomorphic on all of $\mathbb C$ means entire ([[def-complex-differentiability-holomorphic-and-entire]]).

## Proof

**Proof technique:** direct.

1.1 Fix a representative satisfying the bound. By [F5] we may modify $f$ on the null set where $|f(x)|>Ce^{-\pi a|x|^2}$ without changing any integral below; after this modification $|f(x)|\le Ce^{-\pi a|x|^2}$ holds for every $x$, and $f$ remains measurable. [F5, given, choose]

1.2 Two exact integrals. (i) For $v\in\mathbb R^n$ the algebraic identity $-\pi a|x|^2+2\pi x\cdot v=\pi|v|^2/a-\pi a|x-v/a|^2$ and the scalar rule of [F6], the translation identity of [F7] applied to $y\mapsto e^{-\pi a|y|^2}$, and the Gaussian identity of [F7] give $$\int_{\mathbb R^n}e^{-\pi a|x|^2+2\pi x\cdot v}dx=e^{\pi|v|^2/a}\int_{\mathbb R^n}e^{-\pi a|x-v/a|^2}dx=e^{\pi|v|^2/a}\,a^{-n/2}.$$ (ii) For $c\ge0$, the elementary inequality $2\pi|x|c\le\frac{\pi a}{4}|x|^2+\frac{4\pi}{a}c^2$ (from $2AB\le A^2+B^2$ with $A=\frac{\sqrt{\pi a}}{2}|x|$ and $B=\frac{2\sqrt\pi}{\sqrt a}c$), together with $|x|e^{-\pi a|x|^2/2}\le e^{1/(2\pi a)}$ — which follows from [F8] as $|x|\le e^{|x|}$ and $s-\frac{\pi a}2s^2\le\frac1{2\pi a}$ for $s\ge0$ — gives $|x|e^{-\pi a|x|^2+2\pi|x|c}\le e^{1/(2\pi a)}e^{(4\pi/a)c^2}e^{-\pi a|x|^2/4}$; by [F6] and [F7] (with $b=a/4$) this is integrable with $$\int_{\mathbb R^n}|x|e^{-\pi a|x|^2+2\pi|x|c}\,dx\le\Big(\frac4a\Big)^{n/2}e^{1/(2\pi a)}e^{(4\pi/a)c^2}<\infty .$$ [F1, F6, F7, F8, algebra]

2.1 Absolute convergence, growth bound, and representative independence. Put $v:=\operatorname{Im}z$. The exact modulus identity in [F2] and the assumed Gaussian bound give, almost everywhere, $|f(x)e^{-2\pi ix\cdot z}|=|f(x)|e^{2\pi x\cdot v}\le Ce^{-\pi a|x|^2+2\pi x\cdot v}.$ Completing the square as in computation (i) of step 1.2 and applying [F6] yields $\int_{\mathbb R^n}|f(x)e^{-2\pi ix\cdot z}|\,dx\le C\int_{\mathbb R^n}e^{-\pi a|x|^2+2\pi x\cdot v}\,dx=Ca^{-n/2}e^{\pi|v|^2/a}<\infty .$ Hence the integral defining $F$ converges absolutely at the arbitrary point $z$, and [F6] gives the growth bound $|F(z)|\le Ca^{-n/2}e^{\pi|\operatorname{Im}z|^2/a}$. If $\tilde f=f$ almost everywhere is another representative, the integrands agree almost everywhere; the same majorant makes both integrable, so [F5] gives equal integrals. [F2, F5, F6, step 1.1, step 1.2]

3.1 The slice as a one-variable integral. Fix $j$ and complex numbers $z_k$ for $k\ne j$, and let $v'$ be the vector of their imaginary parts, with zero in coordinate $j$. Set $g(x):=f(x)e^{-2\pi i\sum_{k\ne j}x_kz_k}$. Then $g$ is measurable and $|g(x)|\le Ce^{-\pi a|x|^2+2\pi x\cdot v'}$ almost everywhere, so $g\in L^1$ by the completed-square calculation of step 1.2. For $w\in\mathbb C$ put $h(w):=\int_{\mathbb R^n}g(x)e^{-2\pi ix_jw}\,dx$. The addition law [F2] turns the integrand into $f(x)e^{-2\pi ix\cdot z'}$ with $z'=(z_1,\dots,z_{j-1},w,z_{j+1},\dots,z_n)$, so $h(w)=F(z')$; step 2.1 gives absolute convergence at every $w$. [F2, given, step 1.2, step 2.1]

4.1 Difference quotients are integrals. Fix $w\in\mathbb C$ and $s\in\mathbb C\setminus\{0\}$. For every $x$ the addition law [F2] gives $e^{-2\pi ix_j(w+s)}-e^{-2\pi ix_jw}=e^{-2\pi ix_jw}(e^{-2\pi ix_js}-1)$, and both integrands are integrable by step 3.1; additivity and scaling from [F5] therefore yield $$\frac{h(w+s)-h(w)}{s}=\int_{\mathbb R^n}g(x)e^{-2\pi ix_jw}\,\frac{e^{-2\pi ix_js}-1}{s}\,dx .$$ [F2, F5, step 3.1]

5.1 Pointwise limit and an integrable majorant. Let $s_n\to0$ be any sequence in $\mathbb C\setminus\{0\}$. By [F2] the quotients converge pointwise to $g(x)(-2\pi ix_j)e^{-2\pi ix_jw}$. By [F3], whenever $|s_n|\le1$ one has $\bigl|(e^{-2\pi ix_js_n}-1)/s_n\bigr|\le2\pi|x_j|e^{2\pi|x_j|}$. The $n$-th quotient integrand is therefore bounded in modulus by $2\pi C|x|e^{-\pi a|x|^2+2\pi|x|(|\operatorname{Im}w|+|v'|+1)},$ where $v'$ is from step 3.1. Its integral is finite by computation (ii) of step 1.2. Passing to the tail of the sequence, dominated convergence [F4] gives $\lim_{n\to\infty}\frac{h(w+s_n)-h(w)}{s_n}=\int_{\mathbb R^n}g(x)(-2\pi ix_j)e^{-2\pi ix_jw}\,dx ,$ and the limit integral is absolutely convergent by the same majorant. [F3, F4, step 1.2, step 3.1, step 4.1]

6.1 Conclusion. Since the nonzero null sequence $s_n\to0$ was arbitrary, step 5.1 shows that $h$ is complex differentiable at every $w\in\mathbb C$, with $h'(w)=\int_{\mathbb R^n}g(x)(-2\pi ix_j)e^{-2\pi ix_jw}\,dx$; being holomorphic on all of $\mathbb C$, the slice is entire by [F10], and rewriting the derivative gives the displayed formula for $\partial F/\partial z_j$. At real $z=\xi\in\mathbb R^n$ the defining integral is literally the $L^1$ transform formula, so $F(\xi)=\widehat f(\xi)$ by [F9]. [F9, F10, step 5.1] ∎
