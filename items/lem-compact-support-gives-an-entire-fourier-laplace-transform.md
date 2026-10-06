---
id: lem-compact-support-gives-an-entire-fourier-laplace-transform
kind: lemma
title: Compact support gives an entire Fourier-Laplace transform by slices
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-compact-space
  - def-complex-differentiability-holomorphic-and-entire
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-fourier-transform-on-l-one-of-rn
  - lem-l-one-fourier-transform-is-well-defined
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-integral-triangle-inequality
  - thm-extreme-value-metric
  - thm-heine-borel-rn
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
      locator: "§5, Lemma 5.1 and the compact-support observation immediately following it, printed p. 11; coordinate-slice extension proved here."
---

## Statement

Let $n\ge1$ and let $f\in L^1(\mathbb R^n;\mathbb C)$ vanish almost everywhere
outside a compact set $K\subseteq\mathbb R^n$. Define
$$F(z):=\int_{\mathbb R^n}f(x)e^{-2\pi i\,x\cdot z}\,dx,\qquad z\in\mathbb C^n .$$
Then the integral converges absolutely for every $z$ and its value does not
depend on the representative of the $L^1$ class; for every $j$ and every fixed
values of the other $n-1$ complex coordinates, the coordinate slice
$w\mapsto F(z_1,\dots,z_{j-1},w,z_{j+1},\dots,z_n)$ is entire on $\mathbb C$,
with
$$\frac{\partial}{\partial z_j}F(z)=\int_{\mathbb R^n}f(x)\,(-2\pi ix_j)e^{-2\pi i\,x\cdot z}\,dx ;$$
and $F(x)=f^{\wedge}(x)$ for every $x\in\mathbb R^n$, where $f^{\wedge}$ is the
$L^1$ transform of [[def-fourier-transform-on-l-one-of-rn]].

## Facts & Assumptions

**Given:** An integer $n\ge1$, a class $f\in L^1(\mathbb R^n;\mathbb C)$ vanishing almost everywhere outside a compact set $K\subseteq\mathbb R^n$, and points $z\in\mathbb C^n$ and $w\in\mathbb C$; here $x\cdot z=\sum_{k=1}^nx_kz_k$ for $x\in\mathbb R^n$.

[F1] The complex exponential satisfies $\exp(\zeta+\eta)=\exp\zeta\exp\eta$ and $\exp'=\exp$, so $(\exp\zeta-1)/\zeta\to1$ as $\zeta\to0$ through nonzero complex values; $|\exp(\zeta)|=e^{\operatorname{Re}\zeta}$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F2] For an integrable complex function $u$, $|\int u|\le\int|u|$ ([[thm-integral-triangle-inequality]]).

[F3] The Lebesgue integral is complex-linear on $L^1$, and integrable functions that agree almost everywhere have equal integrals ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F4] The $L^1$ transform $\widehat f(\xi)=\int_{\mathbb R^n}f(x)e^{-2\pi ix\cdot\xi}\,dx$ is absolutely convergent at every real $\xi$, is unchanged by null-set modifications of the representative, and satisfies $|\widehat f(\xi)|\le\|f\|_1$ ([[def-fourier-transform-on-l-one-of-rn]], [[lem-l-one-fourier-transform-is-well-defined]]).

[F5] A nonempty compact subset $K\subseteq\mathbb R^n$ is bounded, so $M:=\sup_{x\in K}|x|<\infty$ and $S_j:=\sup_{x\in K}|x_j|\le M$ for every $j$; if $K\ne\varnothing$ each $S_j$ is attained on $K$ by the extreme value theorem ([[def-compact-space]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]). Only finiteness of $S_j$ is used below.

[F6] Complex-valued functions are measurable when their components are; pointwise sums, products, and compositions with continuous functions of the coordinates of measurable complex-valued functions are measurable, and so is the modulus ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F7] A function on an open subset of $\mathbb C$ is holomorphic when it is complex differentiable at every point of its domain, and holomorphic on all of $\mathbb C$ means entire ([[def-complex-differentiability-holomorphic-and-entire]]).

## Proof

**Proof technique:** direct.

1.1 Fix a representative. If $K=\varnothing$ then $f=0$ almost everywhere, so every integral below vanishes by [F3], giving $F\equiv0$, and all claims of the lemma hold trivially; assume $K\ne\varnothing$ and let $M$ be the bound of [F5]. Multiplying $f$ by the indicator of the closed set $K$ produces a measurable representative in $L^1$ that vanishes everywhere outside $K$ and agrees with $f$ almost everywhere, so no integral below changes ([F3, F6]); from here we use this representative. [given, F3, F5, F6]

1.2 Absolute convergence and representative independence. For $x\in K$ the exponential law and modulus formula [F1] give $|f(x)e^{-2\pi ix\cdot z}|=|f(x)|e^{2\pi x\cdot\operatorname{Im}z}\le|f(x)|e^{2\pi M|\operatorname{Im}z|}$, while for $x\notin K$ both sides vanish. Hence $\int_{\mathbb R^n}|f(x)e^{-2\pi ix\cdot z}|\,dx\le e^{2\pi M|\operatorname{Im}z|}\|f\|_1<\infty$ for the given $z$, and since $z$ was arbitrary the integral defining $F$ converges absolutely at every point of $\mathbb C^n$. If $\tilde f=f$ almost everywhere is a second representative, the two integrands agree almost everywhere and are both integrable, so the two integrals agree by [F3]; thus the value is representative-independent. [given, F1, F3, F5, F6]

2.1 The slice as a one-variable integral. Fix $j$ and complex numbers $z_k$ for $k\ne j$, and set $g(x):=f(x)e^{-2\pi i\sum_{k\ne j}x_kz_k}$. Then $g$ is measurable and $|g(x)|\le|f(x)|e^{2\pi M|\operatorname{Im}z|}$ for every $x$ by the same bound as in step 1.2, so $g\in L^1$; for $w\in\mathbb C$ define $h(w):=\int_{\mathbb R^n}g(x)e^{-2\pi ix_jw}\,dx$. By the addition law [F1] the integrand equals $f(x)e^{-2\pi ix\cdot z'}$ with $z'=(z_1,\dots,z_{j-1},w,z_{j+1},\dots,z_n)$, so $h(w)=F(z')$ and step 1.2 shows that the integral for $h(w)$ converges absolutely at every $w\in\mathbb C$. [given, F1, F6, step 1.2]

3.1 Difference quotients are integrals. Fix $w\in\mathbb C$ and $s\in\mathbb C\setminus\{0\}$. For every $x$ the addition law [F1] gives $e^{-2\pi ix_j(w+s)}-e^{-2\pi ix_jw}=e^{-2\pi ix_jw}(e^{-2\pi ix_js}-1)$, and both integrands $g(x)e^{-2\pi ix_j(w+s)}$ and $g(x)e^{-2\pi ix_jw}$ are integrable because $g\in L^1$ and the exponential factors are bounded on the support of $g$ by step 2.1. Applying additivity and scaling from [F3] therefore yields $$\frac{h(w+s)-h(w)}{s}=\int_{\mathbb R^n}g(x)e^{-2\pi ix_jw}\,\frac{e^{-2\pi ix_js}-1}{s}\,dx .$$ [given, F1, F3, step 2.1]

4.1 Uniform remainder estimate. Put $S:=S_j\le M$ and $L:=\int g(x)(-2\pi ix_j)e^{-2\pi ix_jw}\,dx$, which is absolutely convergent since $|x_j|\le S$ on the support of $g$. If $S=0$, step 3.1 is identically zero and $L=0$. Otherwise, for any $\varepsilon>0$, [F1] gives $\delta>0$ such that $|(e^\zeta-1)/\zeta-1|<\varepsilon$ when $0<|\zeta|<\delta$. For $0<|s|<\delta/(2\pi S)$, setting $\zeta=-2\pi ix_js$ therefore bounds the difference between the quotient integrand and its limiting integrand by $2\pi S\varepsilon e^{2\pi S|\operatorname{Im}w|}|g(x)|$ on $K$, with zero remainder when $x_j=0$. By [F2] and linearity [F3], $$\left|\frac{h(w+s)-h(w)}s-L\right|\le2\pi S\varepsilon e^{2\pi S|\operatorname{Im}w|}\|g\|_1.$$ Since $\varepsilon$ is arbitrary, the complex difference quotient tends to $L$ directly, without selecting a sequence. [F1, F2, F3, F5, step 2.1, step 3.1]

5.1 Conclusion. The limit in step 4.1 shows that $h$ is complex differentiable at every $w\in\mathbb C$ with derivative $h'(w)=\int_{\mathbb R^n}g(x)(-2\pi ix_j)e^{-2\pi ix_jw}\,dx$; a function holomorphic on all of $\mathbb C$ is entire by definition ([F7]). Rewriting the derivative integrand gives the displayed formula for $\partial F/\partial z_j$. At real $z=\xi\in\mathbb R^n$ the defining integral of $F$ is literally the $L^1$ transform formula, so $F(\xi)=\widehat f(\xi)$ at every real $\xi$ by [F4]. [F4, F7, given, step 4.1] ∎
