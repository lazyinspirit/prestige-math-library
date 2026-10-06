---
id: thm-duhamel-lone-in-time-lp-forcing-estimate
kind: theorem
title: L1 in time estimate for Lp Duhamel forcing
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - thm-riesz-fischer-completeness-of-l-p
  - def-countable-choice
  - def-duhamel-heat-potential
  - thm-bochner-integrability-criterion
  - lem-bochner-integral-norm-inequality
  - cor-heat-flow-is-order-preserving-and-lp-contractive
  - thm-heat-cauchy-solution-for-lp-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-dominated-convergence
  - thm-young-convolution-inequality
  - def-strongly-measurable-banach-valued-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.2, printed pp. 152–153, (6.42)–(6.47); local Bochner proof extracts the L1 time estimate"
---

## Statement

Assume Countable Choice. Let $1\le p\le\infty$, and let
$f:[0,T]\to L^p(\mathbb R^n)$ be strongly measurable with
$\int_0^T\|f(s)\|_p\,ds<\infty$. For every $t$ the Bochner integral
$Df(t)=\int_0^tH_{t-s}f(s)\,ds$ exists and satisfies
$\|Df(t)\|_p\le\int_0^t\|f(s)\|_p\,ds$. For $p=\infty$ no strong continuity of
$H$ at zero on all $L^\infty$ is asserted. For merely weakly measurable
$L^\infty$ forcing this statement makes no existence assertion.

## Facts & Assumptions

**Given:** Countable Choice, $1\le p\le\infty$, a strongly measurable $f:[0,T]\to L^p(\mathbb R^n)$ with $\int_0^T\|f(s)\|_p\,ds<\infty$, and $0<t\le T$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Strong measurability: there are measurable simple functions $s_k$ and a null set $N$ with $\|s_k(\omega)-f(\omega)\|\to0$ for every $\omega\notin N$ ([[def-strongly-measurable-banach-valued-function]]).

[F2] For $1\le p<\infty$ the heat flow is strongly continuous at zero, so $H_{t+s}=H_tH_s$ and $\|H_\tau g-g\|_p\to0$ as $\tau\downarrow0$; and $\|H_\tau g\|_p\le\|g\|_p$ for all $p$ and $\tau\ge0$ ([[thm-heat-cauchy-solution-for-lp-data]], [[cor-heat-flow-is-order-preserving-and-lp-contractive]]).

[F3] The kernel satisfies $|D_x^\alpha\Gamma(x,\tau)|\le C_{n,\alpha}\tau^{-(|\alpha|+n)/2}e^{-|x|^2/(8\tau)}$ for all $\tau>0$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]), and $\partial_\tau\Gamma=\Delta_x\Gamma$ there.

[F4] Dominated convergence ([[thm-dominated-convergence]]), Young's inequality $\|K*g\|_q\le\|K\|_1\|g\|_q$ ([[thm-young-convolution-inequality]]).

[F5] The heat potential $Df(t)$ is defined as the Bochner integral $\int_0^tH_{t-s}f(s)\,ds$ once the integrand is Bochner integrable, the criterion being strong measurability together with finiteness of the integral of the norm ([[def-duhamel-heat-potential]], [[thm-bochner-integrability-criterion]]).

[F6] $L^p$ is complete for $1\le p\le\infty$ under Countable Choice ([[thm-riesz-fischer-completeness-of-l-p]]), so these Bochner integrals have Banach-space targets.

## Proof

**Given:** Countable Choice, $1\le p\le\infty$, a strongly measurable $f:[0,T]\to L^p(\mathbb R^n)$ with $\int_0^T\|f(s)\|_p\,ds<\infty$, and $0<t\le T$.

1.1 Let $1\le p<\infty$. The map $\Phi(s,g):=H_{t-s}g$ is jointly norm continuous on $[0,t]\times L^p(\mathbb R^n)$: $\|H_{t-s}g-H_{t-s'}g'\|_p\le\|g-g'\|_p+\|(H_{t-s}-H_{t-s'})g'\|_p$ by [F2], and the second term tends to $0$ as $s\to s'$ by strong continuity at zero applied to the semigroup difference. If $f_k$ are the simple approximations of [F1], the functions $s\mapsto\Phi(s,f_k(s))$ are strongly measurable: for each of the finitely many values $g$ of $f_k$, the continuous curve $s\mapsto H_{t-s}g$ on $[0,t]$ is uniformly approximated by finite-valued mesh functions; multiply these approximations by the measurable level-set indicators of $f_k$ and add them, Choosing mesh error at most $1/k$ for the finitely many curves associated with $f_k$ yields a single sequence of finite-valued measurable approximations; contractions and $f_k\to f$ show that this sequence converges pointwise off the original null set to $H_{t-s}f(s)$. This proves strong measurability directly from [F1]. [A1, F1, F2, given]

2.1 Let $p=\infty$ and let $0<\delta<t$. For fixed $g\in L^\infty(\mathbb R^n)$ and $\delta\le\tau,\tau'\le t$, [F3], [F4] and $\partial_\tau\Gamma=\Delta\Gamma$ give $\|\Gamma_\tau-\Gamma_{\tau'}\|_1\le\int_0^1\|\partial_\tau\Gamma_{\tau'+u(\tau-\tau')}\|_1du\,|\tau-\tau'|\le C_\delta|\tau-\tau'|$ with $C_\delta<\infty$, so $\tau\mapsto H_\tau g$ is norm continuous on $[\delta,t]$ by [F4] (Young's inequality with $\|K\|_1$); consequently $\Phi$ is jointly norm continuous on $[0,t-\delta]\times L^\infty$ and the argument of step 1.1 makes $s\mapsto H_{t-s}f(s)$ strongly measurable on $[0,t-\delta]$. Take the countable exhaustion $[0,t-t/(m+1)]$, $m\ge1$. For each simple approximation $f_k$, approximate its finitely many continuous flow curves uniformly on these intervals by finite mesh functions. On the $k$-th interval choose error at most $1/k$ and set the approximation to zero on the omitted tail. At every $s<t$ off the original null set, these finite-valued measurable functions tend to $H_{t-s}f(s)$, because contractions also give $\|H_{t-s}(f_k(s)-f(s))\|_\infty\le\|f_k(s)-f(s)\|_\infty$. The single endpoint has measure zero. This proves strong measurability on $[0,t]$ directly from [F1]. [A1, F1, F3, F4, given]

3.1 In both cases the contraction bound [F2] gives $\|H_{t-s}f(s)\|_p\le\|f(s)\|_p$, so $\int_0^t\|H_{t-s}f(s)\|_p\,ds\le\int_0^t\|f(s)\|_p\,ds\le\int_0^T\|f(s)\|_p\,ds<\infty$; the Bochner integrability criterion [F5] therefore makes $Df(t)=\int_0^tH_{t-s}f(s)\,ds$ a well-defined element of $L^p(\mathbb R^n)$, and the norm inequality for Bochner integrals [[lem-bochner-integral-norm-inequality]] gives $\|Df(t)\|_p\le\int_0^t\|f(s)\|_p\,ds$. [step 1.1, step 2.1, F2, F5, F6, given]

4.1 The construction claims no continuity of the integrand at $s=t$ nor of $H$ at zero when $p=\infty$: strong measurability of the integrand, which is all that integrability needs, was proved only up to null sets; and for forcing that is merely weakly measurable, no strong measurability of $s\mapsto H_{t-s}f(s)$ is available, so no existence of the Bochner integral is asserted in that case. This proves the theorem with the stated caveats. [step 3.1, given] ∎ 