---
id: def-duhamel-heat-potential
kind: definition
title: The Duhamel heat potential
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-holder-inequality-for-integrals
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-riesz-fischer-completeness-of-l-p
  - def-countable-choice
  - def-bochner-integrable-function
  - def-strongly-measurable-banach-valued-function
  - thm-bochner-integrability-criterion
  - lem-bochner-integral-norm-inequality
  - def-heat-evolution-of-initial-data
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-convolution-of-two-functions-on-rn
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-heat-cauchy-solution-for-lp-data
  - cor-heat-flow-is-order-preserving-and-lp-contractive
  - thm-young-convolution-inequality
  - thm-dominated-convergence
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: 'Chapter 10, §10.1 (the heat semigroup and Duhamel''s formula $u(t)=e^{tA}u_0+\int_0^te^{(t-s)A}f(s)ds$)'
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "§1.1, printed p. 7, Theorem 1.2 and (1.1.20) (Duhamel's formula for bounded continuous forcing with bounded continuous first and second spatial derivatives; the proof is assigned as an exercise). The Hölder and Bochner arguments used here are local."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.2, printed pp. 152–153, formula (6.37) and the convolution representation"
---

## Definition

Assume Countable Choice. Let $n\ge1$, $T>0$, $1\le p\le\infty$, and let
$f:[0,T]\to L^p(\mathbb R^n)$ be continuous, where $L^p$ is the quotient space
of [[def-l-p-space-as-a-quotient-by-null-functions]]. For $0\le t\le T$ the
**heat potential** of $f$ is the Bochner integral
$$Df(t):=\int_0^tH_{t-s}f(s)\,ds\ \in\ L^p(\mathbb R^n),$$
where $H$ is the heat evolution of [[def-heat-evolution-of-initial-data]] and
the integrand is the $L^p$-valued function $s\mapsto H_{t-s}f(s)$ interpreted
as in [[def-bochner-integrable-function]] and
[[def-strongly-measurable-banach-valued-function]].

**Well-definedness.** The target $L^p$ is Banach by [[thm-riesz-fischer-completeness-of-l-p]] under the declared Countable Choice. For $1\le p<\infty$ the map $s\mapsto H_{t-s}f(s)$ is
norm continuous on $[0,t]$ as a composition of the continuous curve $f$ and the
strongly continuous heat flow [[thm-heat-cauchy-solution-for-lp-data]]; its
range is therefore separable. For $p=\infty$ strong continuity at time zero is
not available, but the flow is norm continuous on every compact subinterval of
$(0,\infty)$ by the $L^1$ continuity of the positive-time kernels
(for $a\le\tau\le b$ the explicit kernels converge pointwise with a common integrable Gaussian majorant, so [[thm-dominated-convergence]] gives $L^1$ continuity, and Young gives operator-norm continuity),
so for fixed $t$ the integrand is norm continuous on every compact subinterval
of $[0,t)$ and may be approximated on a countable exhaustion of $[0,t)$ by
finite-valued mesh functions, extended by zero on the omitted tail; uniform mesh error at most $1/k$ on $[0,t-t/(k+1)]$ gives pointwise convergence at every $s<t$; the single endpoint value at $s=t$ is
irrelevant for the integral. In both cases the integrand is strongly measurable,
and the contraction estimate of
[[cor-heat-flow-is-order-preserving-and-lp-contractive]] gives
$\|H_{t-s}f(s)\|_p\le\|f(s)\|_p$, so
$$\int_0^t\|H_{t-s}f(s)\|_p\,ds\le\int_0^t\|f(s)\|_p\,ds\le T\sup_{[0,T]}\|f\|_p<\infty .$$
The Bochner integrability criterion [[thm-bochner-integrability-criterion]]
therefore makes $Df(t)$ a well-defined element of $L^p(\mathbb R^n)$, and the
norm inequality for Bochner integrals
[[lem-bochner-integral-norm-inequality]] gives the estimate
$$\|Df(t)\|_p\le\int_0^t\|f(s)\|_p\,ds .$$

The same definition is used when $f$ is merely strongly measurable with
$\int_0^T\|f(s)\|_p\,ds<\infty$ and $1\le p<\infty$: approximation by measurable finite-valued simple functions together with the contraction bound gives strong measurability of the integrand: for the $k$-th simple approximation, replace its finitely many positive-time flow curves by finite mesh functions with error at most $1/k$ on $[0,t-t/(k+1)]$, and put zero on the omitted tail. At every $s<t$ off the original null set the resulting simple functions converge to $H_{t-s}f(s)$ ([[def-strongly-measurable-banach-valued-function]],
[[thm-dominated-convergence]]), and the criterion and estimate above apply
verbatim.

When $f:\mathbb R^n\times[0,T]\to\mathbb R$ is bounded and jointly continuous,
the **scalar heat potential** is
$$u(t,x):=\int_0^t\int_{\mathbb R^n}\Gamma(x-y,t-s)f(y,s)\,dy\,ds,$$
a scalar potential defined by the convolution
[[def-convolution-of-two-functions-on-rn]]; the inner integral is absolutely
convergent because $\Gamma(\cdot,t-s)$ has unit mass
[[lem-heat-kernel-normalisation-scaling-and-derivatives]] and $f$ is bounded.
Whenever the forcing also defines a Bochner integrable $L^p$-valued map, the
scalar potential agrees with the Bochner potential almost everywhere. Indeed, for any bounded measurable test function $\psi$ supported in a bounded set, the pairing $v\mapsto\int\psi v$ is bounded on $L^p$ by [[thm-holder-inequality-for-integrals]], and it commutes with the Bochner integral ([[thm-bounded-linear-maps-commute-with-bochner-integration]]). The iterated scalar integral is absolutely integrable against $\psi$, bounded by $T\|f\|_\infty\|\psi\|_1$, so Fubini ([[thm-tonelli-and-fubini-for-completed-product-measures]]) gives the same pairing for the scalar potential. Equality of all these pairings forces equality almost everywhere: on each bounded box, a positive or negative real or imaginary part of the difference on a measurable set of positive measure would give a nonzero pairing with that set's indicator.

## Remarks

- **Why the $p=\infty$ clause is worded as it is.** Positive-time smoothing
  does not give strong continuity of $H_t$ at $t=0$ in the supremum norm, so the
  definition claims norm continuity of the integrand only on compact subintervals
  of $[0,t)$ when $p=\infty$, and does not need a continuity assertion for $Df$.
  For $1\le p<\infty$ the strong continuity of
  [[thm-heat-cauchy-solution-for-lp-data]] is available and no such caveat is
  needed.

- **Choice accounting.** Countable Choice is declared as the ambient hypothesis
  and enters only through the cited integration theory and heat-flow suppliers;
  the definition itself makes no selection and no countable exhaustion beyond
  the explicit intervals used above.
