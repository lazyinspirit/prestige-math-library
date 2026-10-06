---
id: ex-duhamel-solution-for-a-time-independent-source
kind: example
title: Duhamel solution for a time-independent source
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - def-countable-choice
  - def-duhamel-heat-potential
  - thm-duhamel-principle-for-the-whole-space-heat-equation
  - def-heat-evolution-of-initial-data
  - def-bochner-integrable-function
  - thm-bochner-dominated-convergence
  - thm-heat-cauchy-solution-for-lp-data
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "§1.1, printed p. 7, Theorem 1.2 and (1.1.20) (Duhamel's formula for bounded continuous forcing with bounded continuous first and second spatial derivatives; the proof is assigned as an exercise). The Hölder and Bochner arguments used here are local."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.2, printed pp. 152–153, formula (6.48) with time-independent $f$"
---

## Example

Assume Countable Choice. Let $n\ge1$, $1\le p<\infty$, $T>0$ and let
$f\in L^p(\mathbb R^n)$ be viewed as the time-independent source
$f(x,t):=f(x)$; if $f$ is spatially Hölder continuous with compact support,
read the classical statement below. The heat potential of
[[def-duhamel-heat-potential]] is
$$Df(t)=\int_0^tH_{t-s}f\,ds=\int_0^tH_\tau f\,d\tau,$$
the substitution $\tau=t-s$ removing the time dependence. Then
$Df\in C([0,T];L^p(\mathbb R^n))$, $Df(0)=0$, and in the classical compactly
supported case $(Df)_t-\Delta Df=f$ on $\mathbb R^n\times(0,T]$. In particular
$Df$ is the solution of the inhomogeneous Cauchy problem with zero initial data
produced by the Duhamel principle, and for a time-independent source the two
representations $\int_0^tH_{t-s}f\,ds$ and $\int_0^tH_\tau f\,d\tau$ agree.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p<\infty$, $T>0$, a fixed $f\in L^p(\mathbb R^n)$ regarded as the constant curve $s\mapsto f$ on $[0,T]$, and, for the classical clause, the same $f$ as a compactly supported spatially Hölder continuous function.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Duhamel principle: the heat potential $Df(t)=\int_0^tH_{t-s}f(s)\,ds$ of a continuous $L^p$-valued forcing lies in $C([0,T];L^p)$, satisfies $Df(0)=0$ and the forced semigroup relation; in the classical setting with $f$ bounded, jointly continuous and uniformly spatially Hölder the scalar potential $u(t,x)=\int_0^t\int\Gamma(x-y,t-s)f(y,s)\,dy\,ds$ is $C^{1,2}$ with $u_t-\Delta u=f$, $u(0,\cdot)=0$, and is the unique classical solution in every Gaussian growth class ([[thm-duhamel-principle-for-the-whole-space-heat-equation]]).

[F2] The heat potential is defined by the Bochner integral $Df(t)=\int_0^tH_{t-s}f(s)\,ds$ of the continuous curve $s\mapsto H_{t-s}f(s)$ ([[def-duhamel-heat-potential]]), and $H_\sigma g$ is the $L^p$ class of $\Gamma(\cdot,\sigma)*g$ with the flow strongly continuous for $1\le p<\infty$ ([[def-heat-evolution-of-initial-data]], [[thm-heat-cauchy-solution-for-lp-data]]).

[F3] The Bochner integral is defined by approximation with $X$-valued simple functions ([[def-bochner-integrable-function]]), with convergence of the approximating integrals governed by the norm estimate and dominated convergence ([[thm-bochner-dominated-convergence]]); for a finitely-valued curve the integral is the finite sum of the values times the Lebesgue measures of the corresponding level sets, and the substitution $s\mapsto t-s$ preserves those measures on $[0,t]$ because it is the reflection of the interval about its midpoint.

## Verification

**Given:** Countable Choice, $1\le p<\infty$, a fixed $f\in L^p(\mathbb R^n)$ read as the constant curve on $[0,T]$, and the compactly supported Hölder case for the classical clause.

1.1 The constant curve $s\mapsto f$ belongs to $C([0,T];L^p(\mathbb R^n))$, so [F1] applies to it: $Df\in C([0,T];L^p(\mathbb R^n))$, $Df(0)=0$, and $Df$ satisfies the forced semigroup relation with the constant forcing. [A1, F1, F2, given]

2.1 The two representations agree. For each fixed $t$ the curves $s\mapsto H_{t-s}f$ and $\tau\mapsto H_\tau f$ are norm continuous by [F2], and they are related by the reflection $s\mapsto t-s$ of $[0,t]$; by [F3] both Bochner integrals are limits of the integrals of simple approximations, and for a finitely-valued approximation the substitution reduces to the equality of the Lebesgue measures of a measurable level set and its reflection, so passing to the limit gives $\int_0^tH_{t-s}f\,ds=\int_0^tH_\tau f\,d\tau$. [step 1.1, F2, F3, given]

3.1 Classical compactly supported case. If $f$ is spatially Hölder continuous with compact support, then as a function of $(x,t)$ it is bounded, jointly continuous and uniformly spatially Hölder on $\mathbb R^n\times[0,T]$; by [F1] the scalar potential $u(t,x)=\int_0^t\int\Gamma(x-y,t-s)f(y)\,dy\,ds$ is $C^{1,2}$ with $u_t-\Delta u=f$ and $u(0,\cdot)=0$, and it represents the Bochner potential $Df$ in the sense of [F2]; moreover $|u|\le T\|f\|_\infty$, so $u$ lies in the Gaussian growth class and is the unique classical solution with zero initial data there. Hence $(Df)_t-\Delta Df=f$ on $\mathbb R^n\times(0,T]$, the representation of step 2.1 shows that the two displayed formulas for $Df$ coincide, and no commutation of the unbounded Laplacian with the flow on arbitrary $L^p$ data is asserted. [step 2.1, F1, F2, given] ∎
