---
id: lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero
kind: lemma
title: "Continuous piecewise-affine functions with zero endpoints lie in H1-zero"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-countable-choice,
       def-sobolev-space-wkp-and-its-norm,
       lem-sobolev-norm-is-well-defined-and-definite,
       def-wkp-zero-as-a-sobolev-closure,
       def-weak-derivative-of-a-locally-integrable-function,
       lem-compact-support-zero-extension-in-wkp,
       lem-smooth-bump-between-concentric-euclidean-balls,
       def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
       prop-mollifier-families-are-l-one-approximate-identities,
       thm-l-one-approximate-identities-converge-in-l-p,
       thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Statement

Assume Countable Choice. Let $v:[0,1]\to\mathbb R$ be continuous and affine
on each interval of a finite partition $0=x_0<x_1<\cdots<x_N=1$, with
$v(0)=v(1)=0$. Then the Sobolev class of $v$ belongs to
$H^1_0(0,1)=W^{1,2}_0((0,1);\mathbb R)$, where $W^{1,2}_0$ is the norm
closure of $C_c^\infty(0,1)$ in $W^{1,2}(0,1)$.

## Facts & Assumptions

**Given:** A continuous real function affine on a finite partition of $[0,1]$ and vanishing at both endpoints; Countable Choice for the Sobolev interfaces.

[F1] [[def-sobolev-space-wkp-and-its-norm]]: $W^{1,2}(0,1)$ consists of $L^2$ classes whose first weak derivative is an $L^2$ class.

[F2] [[def-weak-derivative-of-a-locally-integrable-function]]: the weak derivative is identified by integration against derivatives of compactly supported smooth test functions.

[F3] [[def-wkp-zero-as-a-sobolev-closure]]: $W^{1,2}_0(0,1)$ is the closure of $C_c^\infty(0,1)$ in the $W^{1,2}$ norm.

[F4] [[lem-sobolev-norm-is-well-defined-and-definite]]: the displayed $W^{1,2}$ formula defines a norm, including its triangle inequality.

[F5] [[lem-compact-support-zero-extension-in-wkp]]: a $W^{1,2}(0,1)$ function supported in a compact subset of $(0,1)$ extends by zero to a $W^{1,2}(\mathbb R)$ function with the same derivative extended by zero.

[F6] [[lem-smooth-bump-between-concentric-euclidean-balls]]: for $0<r<R$ in dimension one, there is a smooth $[0,1]$-valued function equal to $1$ on $[-r,r]$ and supported in $(-R,R)$.

[F7] [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]: a compactly supported smooth unit-mass function generates the scaled convolution kernels $\rho_\varepsilon$.

[F8] [[prop-mollifier-families-are-l-one-approximate-identities]]: the generated kernels form an $L^1$ approximate identity on $\mathbb R$.

[F9] [[thm-l-one-approximate-identities-converge-in-l-p]]: for $1\le p<\infty$, convolution by that family converges in $L^p$ to every $L^p$ function.

[F10] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]: convolution of a locally integrable function with a smooth compactly supported unit-mass kernel is smooth.

[A1] Assume [[def-countable-choice]] as required by [F1], [F3]–[F5], and [F8]–[F10]; no choice of an element from an arbitrary family is used in the approximation argument below.

## Proof
1.1 Let $g$ equal the slope of $v$ on the interior of each partition interval, with arbitrary values at the finitely many breakpoints. Both $v$ and $g$ are bounded, hence square integrable on $(0,1)$. Integration by parts on each partition interval gives $\int_0^1 v\varphi'=-\int_0^1g\varphi$ for every $\varphi\in C_c^\infty(0,1)$: the interior endpoint terms cancel because $v$ is continuous, and the outer endpoint terms vanish because $\varphi$ is compactly supported. Thus [F2] identifies $g$ as the weak derivative, and [F1] gives $v\in W^{1,2}(0,1)$. [given, A1, F1, F2, algebra]

2.1 Put $L=\max_i |(v|_{[x_{i-1},x_i]})'|$. For $0<\delta<1/4$, let $\chi_\delta$ be zero on $[0,\delta]\cup[1-\delta,1]$, linear from zero to one on $[\delta,2\delta]$, equal to one on $[2\delta,1-2\delta]$, and linear from one to zero on $[1-2\delta,1-\delta]$. Then $v_\delta=\chi_\delta v$ is continuous and piecewise quadratic, with compact support in $[\delta,1-\delta]$. Its piecewise derivative is bounded; integration by parts on its finitely many pieces cancels interior boundary terms by continuity, as in step 1.1, so $v_\delta\in W^{1,2}(0,1)$. Since $|v(x)|\le L\min(x,1-x)$, its difference from $v$ is supported on strips of total length at most $4\delta$; there $|v|\le2L\delta$, $|v'|\le L$, and $|\chi_\delta'|\le1/\delta$. The product rule therefore gives $\|v-v_\delta\|_{L^2}^2\le16L^2\delta^3$ and $\|(v-v_\delta)'\|_{L^2}^2\le36L^2\delta$. The $W^{1,2}$ formula in [F1] then gives $v_\delta\to v$ in $W^{1,2}(0,1)$ as $\delta\to0^+$. [F1, step 1.1, algebra]

3.1 Extend $v_\delta$ by zero to $V_\delta\in W^{1,2}(\mathbb R)$ using [F5]. Choose the [F6] bump with $r=1/2$ and $R=1$. Its integral $c$ is finite because it is bounded and supported in $(-1,1)$, and $c\ge1$ because it equals $1$ on an interval of length $1$. Normalize it by $c$ and take its mollifier family from [F7]. The convolution $V_\delta*\rho_\varepsilon$ is smooth by [F10]. Differentiating under the integral and integrating by parts on the finitely many polynomial pieces of $V_\delta$ gives $(V_\delta*\rho_\varepsilon)'=V_\delta'*\rho_\varepsilon$: interior boundary terms cancel by continuity and outer terms vanish by compact support. By [F8]–[F9], the function and its derivative converge in $L^2(\mathbb R)$ to $V_\delta$ and $V_\delta'$ as $\varepsilon\to0^+$. The normalized bump has support in $[-1,1]$, so $0<\varepsilon<\delta$ places the convolution support inside $(0,1)$ and it belongs to $C_c^\infty(0,1)$. [A1, F1, F5, F6, F7, F8, F9, F10, step 2.1, algebra]

4.1 Given $\eta>0$, choose $\delta$ so that step 2.1 gives $\|v-v_\delta\|_{W^{1,2}}<\eta/2$, and then choose sufficiently small $\varepsilon$ in step 3.1 so that $\|v_\delta-(V_\delta*\rho_\varepsilon)|_{(0,1)}\|_{W^{1,2}}<\eta/2$. The triangle inequality [F4] gives a $C_c^\infty(0,1)$ approximation to $v$ within $\eta$. Since $\eta$ was arbitrary, [F3] yields $v\in H^1_0(0,1)$. [A1, F1, F3, F4, step 2.1, step 3.1, algebra] ∎