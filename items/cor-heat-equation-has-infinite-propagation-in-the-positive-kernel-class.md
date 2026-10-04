---
id: cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class
kind: corollary
title: "Infinite propagation speed for nonnegative heat data"
status: published
origin: pipeline
deps:
  - cor-heat-flow-preserves-mass-and-positivity
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-heat-kernel
  - def-l-one-of-a-measure
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, note after formula (6.38): strict inequality for $t>0$ unless $g$ is constant, implying infinite propagation speed"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "Remark 3.1.6(c), printed p. 105: domain of dependence is the whole strip and the propagation speed is infinite"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Remark 1.1.4, printed p. 5: solutions spread over the entire space at any positive time"
---

## Statement

Assume Countable Choice and let $n\ge1$. Let $f\in L^1(\mathbb R^n)$ satisfy
$f\ge0$ almost everywhere and $f\ne0$. Then for every $t>0$ and every
$x\in\mathbb R^n$ the everywhere-defined integral
$H_tf(x)=\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$ is strictly positive. In
particular, if $f$ is compactly supported, nonnegative and nonzero, then the
support of the solution at time $t$ is all of $\mathbb R^n$ for every $t>0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $t>0$, $x\in\mathbb R^n$ and a
representative $f\in L^1(\mathbb R^n)$ with $f\ge0$ almost everywhere and
$f\ne0$.

[A1] Countable Choice is the hypothesis carried by the kernel and integration
suppliers below ([[def-countable-choice]]).

[F1] For every $t>0$ the heat kernel is strictly positive,
$\Gamma(y,t)>0$ for all $y$, and $\|\Gamma_t\|_1=1$
([[def-heat-kernel]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F2] For $f\in L^1(\mathbb R^n)$, $H_tf$ is the $L^1$ class of the convolution
$\Gamma_t*f$, and the class is nonnegative almost everywhere when $f\ge0$
almost everywhere
([[def-heat-evolution-of-initial-data]],
[[cor-heat-flow-preserves-mass-and-positivity]]).

[F3] For a measurable $g\ge0$, $\int g=0$ if and only if $g=0$ almost
everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).



## Proof

**Proof technique:** direct.

1.1 The set $A:=\{y:f(y)>0\}$ is measurable with $\lambda_n(A)>0$: were $\lambda_n(A)=0$, then $f\le0$ almost everywhere together with the hypothesis $f\ge0$ almost everywhere would make $f=0$ almost everywhere, contradicting $f\ne0$ in $L^1(\mathbb R^n)$; equivalently $\int_{\mathbb R^n}f>0$ by [F3] applied to the nonnegative function $f$. [A1, F3, given]

2.1 Fix $t>0$ and $x\in\mathbb R^n$. The integrand $y\mapsto\Gamma(x-y,t)f(y)$ is measurable and nonnegative almost everywhere, by [F1] and the hypothesis on $f$, and it is strictly positive for every $y\in A$, since $\Gamma(x-y,t)>0$ everywhere by [F1] and $f(y)>0$ on $A$; as $A$ has positive measure by step 1.1, the nonnegative integrand is positive on a set of positive measure, so its integral is strictly positive by [F3]. [step 1.1, F1, F3, given]

3.1 The integral is finite for every $x$, because $|\Gamma(x-y,t)f(y)|\le\|\Gamma_t\|_\infty|f(y)|$ with $\|f\|_1<\infty$, so the integral defining $H_tf(x)$ converges absolutely at every point and defines the everywhere-positive representative $H_tf(x)>0$ of the class of [F2]. [step 2.1, F1, F2, given]

4.1 Consequently, if in addition $\operatorname{supp}f$ is compact, then the set where $H_tf$ is nonzero is all of $\mathbb R^n$ by step 3.1, so $\operatorname{supp}(H_tf)=\mathbb R^n$ for every $t>0$; that is, a compactly supported nonnegative nonzero datum has support spreading to the whole space at every positive time. [step 3.1, given]

5.1 Steps 1.1, 2.1, 3.1 and 4.1 prove strict positivity of the everywhere-defined integral for every nonnegative nonzero $L^1$ datum and the full-space support statement for compactly supported data. [step 3.1, step 4.1, given] ∎
