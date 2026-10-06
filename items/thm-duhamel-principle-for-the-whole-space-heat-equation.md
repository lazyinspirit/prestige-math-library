---
id: thm-duhamel-principle-for-the-whole-space-heat-equation
kind: theorem
title: Duhamel principle for the whole-space heat equation
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
  - thm-dominated-convergence
  - def-countable-choice
  - def-duhamel-heat-potential
  - thm-whole-space-heat-uniqueness-under-gaussian-growth
  - cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-differentiation-under-the-integral-sign
  - thm-uniform-derivative-limit-on-a-closed-interval
  - def-heat-evolution-of-initial-data
  - def-heat-kernel
  - thm-heat-cauchy-solution-for-lp-data
  - thm-bochner-dominated-convergence
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - lem-bochner-integral-norm-inequality
  - def-laplacian-of-a-c2-function
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
      locator: "§6.2, printed p. 153, Theorem 6.11 and (6.46)–(6.47): bounded continuous forcing uniformly spatially Hölder on compact time strips"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Chapter 10, §10.1 (variation of constants $u(t)=e^{tA}u_0+\\int_0^te^{(t-s)A}f(s)ds$)"
---

## Statement

Assume Countable Choice. (i) **Classical case.** Let $f$ be bounded and jointly
continuous on $\mathbb R^n\times[0,T]$, and suppose there are $C>0$ and
$0<\gamma\le1$ such that $|f(x,s)-f(y,s)|\le C|x-y|^\gamma$ for all $x,y$ and
$0\le s\le T$ (in particular smooth compactly supported forcing qualifies) and
define the scalar heat potential
$$u(t,x):=\int_0^t\int_{\mathbb R^n}\Gamma(x-y,t-s)f(y,s)\,dy\,ds .$$
Then $u\in C^{1,2}(\mathbb R^n\times(0,T])$, $u_t-\Delta u=f$ on
$\mathbb R^n\times(0,T)$ and $u(0,\cdot)=0$.

(ii) **Mild case.** Let $1\le p<\infty$ and $f\in C([0,T];L^p(\mathbb R^n))$.
Then $Df\in C([0,T];L^p(\mathbb R^n))$, $Df(0)=0$, and $Df$ satisfies the
forced semigroup relation
$$Df(t)=H_{t-s}Df(s)+\int_s^tH_{t-\tau}f(\tau)\,d\tau\qquad(0<s<t\le T).$$
Every element $w\in C([0,T];L^p(\mathbb R^n))$ with $w(0)=0$ satisfying this
relation equals $Df$. If moreover $|u(x,t)|\le Ce^{a|x|^2}$ for a classical
solution $u$ with zero initial data, then $u$ is the potential of (i) uniquely
in that growth class.

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, a bounded jointly continuous $f$ on $\mathbb R^n\times[0,T]$ uniformly spatially $\gamma$-Hölder with constants $C,\gamma$, $M:=\sup|f|<\infty$, and (for the mild clause) $1\le p<\infty$ and $f\in C([0,T];L^p(\mathbb R^n))$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Heat kernel: $\Gamma$ is $C^\infty$ on $\mathbb R^n\times(0,\infty)$ with $\partial_\tau\Gamma=\Delta\Gamma$ and $\int_{\mathbb R^n}\Gamma(z,\tau)\,dz=1$, and for every multi-index $\alpha$ there is $C_{n,\alpha}<\infty$ with $|D^\alpha_z\Gamma(z,\tau)|\le C_{n,\alpha}\tau^{-(n+|\alpha|)/2}e^{-|z|^2/(8\tau)}$ ([[def-heat-kernel]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]]); for positive times the spatial and time derivatives of $x\mapsto\int\Gamma(x-y,\tau)g(y)\,dy$ pass through the convolution ([[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]).

[F2] Differentiation under the integral sign: if $x\mapsto f(x,y)$ is integrable for every $x$, differentiable for almost every $y$, and the $x$-derivative is dominated by an integrable function uniformly on the parameter set, then the derivative of the integral is the integral of the derivative ([[thm-differentiation-under-the-integral-sign]]); dominated convergence is [[thm-dominated-convergence]]. On a closed interval, a locally uniformly convergent family of $C^1$ functions whose derivatives converge locally uniformly has limit derivative equal to the limit of the derivatives ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F4] Bochner integration: the heat potential $Df(t)=\int_0^tH_{t-s}f(s)\,ds$ is a well-defined element of $L^p$ with $\|Df(t)\|_p\le\int_0^t\|f(s)\|_p\,ds$ ([[def-duhamel-heat-potential]], [[lem-bochner-integral-norm-inequality]]); dominated convergence holds for Bochner integrals ([[thm-bochner-dominated-convergence]]), and bounded linear operators commute with the Bochner integral ([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F5] Heat flow: $H$ is a contraction semigroup on $L^p$, $H_{t+s}=H_tH_s$ and $\|H_tg\|_p\le\|g\|_p$, and for $1\le p<\infty$ it is strongly continuous, $H_tg\to g$ in $L^p$ as $t\downarrow0$ ([[def-heat-evolution-of-initial-data]], [[thm-heat-cauchy-solution-for-lp-data]]).

[F6] Whole-space uniqueness: a $C^{1,2}$ classical solution of the homogeneous heat equation on the strip with zero initial data and Gaussian growth $|u|\le Ce^{a|x|^2}$ vanishes identically ([[thm-whole-space-heat-uniqueness-under-gaussian-growth]]); the Laplacian is $\Delta=\sum_i\partial_i\partial_i$ ([[def-laplacian-of-a-c2-function]]).

## Proof

**Given:** Countable Choice, $T>0$, bounded jointly continuous uniformly spatially $\gamma$-Hölder $f$ with $0<\gamma\le1$ and $M=\sup|f|$, and (for the mild clause) $1\le p<\infty$ with $f\in C([0,T];L^p(\mathbb R^n))$.

1.1 For $(t,x)\in[0,T]\times\mathbb R^n$ the double integral defining $u$ converges absolutely, because $\iint\Gamma(x-y,t-s)|f(y,s)|\,dy\,ds\le M\int_0^t\|\Gamma(\cdot,t-s)\|_1\,ds=Mt$ by the unit mass of [F1]; hence $u$ is well defined, $|u(t,x)|\le Mt$, and $u(0,\cdot)=0$ since the $s$-integral is over the empty interval. Substituting $\tau=t-s$, $u(t,x)=\int_0^t(\Gamma_\tau*f(\cdot,t-\tau))(x)\,d\tau$, the convolution being that of [F1]. [A1, F1, given]

1.2 In the mild setting, write $Df(t)=\int_0^T\mathbf1_{\{s<t\}}H_{t-s}f(s)ds$. If $t_j\to t$, the integrands converge in $L^p$ for every $s\ne t$, by positive-time strong continuity when $s<t$ and eventual vanishing when $s>t$. Their norms are bounded by the integrable function $\|f(s)\|_p$. Thus Bochner dominated convergence [F4] gives $Df(t_j)\to Df(t)$, including at $t=0$, where $Df(0)=0$. [A1, F4, F5, given]


1.3 Fix $t>0$ and $|\alpha|\le2$, and define the candidate $v_\alpha(t,x):=\int_0^t\int_{\mathbb R^n}D^\alpha\Gamma(x-y,\tau)f(y,t-\tau)\,dy\,d\tau$. The inner integral converges absolutely with a $\tau$-majorant integrable on $(0,t)$: for $|\alpha|=0$ the unit mass gives the bound $M$, and for $|\alpha|=1$ the Gaussian bound gives $\int|D^\alpha\Gamma(z,\tau)|dz\le C_{n,\alpha}(8\pi)^{n/2}\tau^{-1/2}$, so the inner integral is bounded by a constant times $M\tau^{-1/2}$; for $|\alpha|=2$, differentiating $\int_{\mathbb R^n}\Gamma(\xi+z,\tau)\,dz=1$ in $\xi$ at $\xi=0$ by [F2] with the Gaussian majorant of [F1] gives $\int_{\mathbb R^n}D^\alpha\Gamma(z,\tau)\,dz=0$, so the inner integral equals $\int D^\alpha\Gamma(z,\tau)[f(x-z,t-\tau)-f(x,t-\tau)]\,dz$, of absolute value at most $CC_{n,\alpha}\int|z|^\gamma\tau^{-(n+2)/2}e^{-|z|^2/(8\tau)}dz=C'C\tau^{-1+\gamma/2}$, integrable at $\tau=0$ since $\gamma>0$. Dominated convergence over the parameter $(t,x)$ with these majorants makes each $v_\alpha$ continuous on $\mathbb R^n\times(0,T]$. [F1, F2, given]

2.1 In the mild setting $Df$ satisfies the forced semigroup relation: for $0<s<t\le T$, splitting $Df(t)=\int_0^sH_{t-\tau}f(\tau)\,d\tau+\int_s^tH_{t-\tau}f(\tau)\,d\tau$ and using $H_{t-\tau}=H_{t-s}H_{s-\tau}$ for $\tau<s$ together with [F4], the first integral equals $H_{t-s}\int_0^sH_{s-\tau}f(\tau)\,d\tau=H_{t-s}Df(s)$, so $Df(t)=H_{t-s}Df(s)+\int_s^tH_{t-\tau}f(\tau)\,d\tau$. [step 1.2, F4, F5, given]

2.2 The candidate formulas of step 1.3 are the spatial derivatives of $u$: for $\delta>0$ put $u_\delta(t,x):=\int_\delta^t\int\Gamma(x-y,\tau)f(y,t-\tau)\,dy\,d\tau$. On the strip $\tau\ge\delta$ the kernel derivatives are uniformly dominated by an integrable function, so [F2] gives $D^\alpha_xu_\delta(t,x)=\int_\delta^t\int D^\alpha\Gamma(x-y,\tau)f(y,t-\tau)\,dy\,d\tau$ with $u_\delta$ spatially $C^\infty$; by the majorants of step 1.3, $u_\delta\to u$ and $D^\alpha_xu_\delta\to v_\alpha$ uniformly on compact subsets of $\mathbb R^n\times(0,T]$ as $\delta\downarrow0$. Applying [F2]'s interval statement along each coordinate direction (the functions $h\mapsto u_\delta(t,x+he_i)$ are $C^1$ with derivatives $D_{e_i}u_\delta(t,x+he_i)\to v_{e_i}(t,x+he_i)$ uniformly on compact $h$-intervals) gives $D_{e_i}u=v_{e_i}$ for every $i$; repeating the argument with the family $h\mapsto v_{e_i}^\delta(t,x+he_j)$, whose $h$-derivatives converge uniformly to $v_{e_i+e_j}$, gives $\partial_j\partial_iu=v_{e_i+e_j}$. Hence $u$ has continuous spatial derivatives of every order $|\alpha|\le2$, equal to the corresponding $v_\alpha$. [step 1.3, F1, F2, given]

3.1 Mild uniqueness: if $w\in C([0,T];L^p(\mathbb R^n))$ with $w(0)=0$ satisfies the forced relation of step 2.1, then $v:=w-Df$ is continuous with $v(0)=0$ and satisfies $v(t)=H_{t-s}v(s)$ for all $0<s<t\le T$; the contraction bound of [F5] gives $\|v(t)\|_p\le\|v(s)\|_p$ for every $s\in(0,t)$, and letting $s\downarrow0$ with continuity at $0$ gives $\|v(t)\|_p=0$, so $w=Df$ and the mild solution with zero data is unique. [step 1.2, step 2.1, F5, given]

3.2 Fix a compact positive-time interval $[a,b]\subset(0,T]$ and $0<\delta<a$. The same truncated potential as in step 2.2 is $u_\delta(t,x)=\int_0^{t-\delta}(\Gamma_{t-s}*f(\cdot,s))(x)ds$. Differentiation under the integral and its continuous moving endpoint give $\partial_tu_\delta=(\Gamma_\delta*f(\cdot,t-\delta))(x)+\int_0^{t-\delta}(\Delta\Gamma_{t-s}*f(\cdot,s))(x)ds$. The endpoint derivative follows by splitting the increment into the added interval, whose average tends to the endpoint integrand by continuity, and the old interval, where [F2] applies away from zero depth. The first term tends locally uniformly to $f(x,t)$: the spatial Hölder bound gives $|\Gamma_\delta*f(\cdot,t-\delta)-f(\cdot,t-\delta)|\le C\int\Gamma_\delta(z)|z|^\gamma dz=C_1\delta^{\gamma/2}$, and joint continuity controls $f(x,t-\delta)-f(x,t)$ on compact sets. By the second-derivative cancellation estimate of step 1.3, the second term tends locally uniformly to $\sum_i v_{2e_i}=\Delta u$, with omitted tail bounded by $C_2\delta^{\gamma/2}$. Thus $u_\delta\to u$ and $\partial_tu_\delta\to f+\Delta u$ uniformly on compact space-time sets. The uniform derivative-limit theorem [F2] on $[a,b]$ proves the two-sided time derivative in $(0,T)$ and the left derivative at $T$, with continuous value $u_t=f+\Delta u$. Together with step 2.2 and $|u|\le Mt$, this proves the classical clause and continuity at zero. [step 1.1, step 1.3, step 2.2, F1, F2, F6, given]


4.1 Classical uniqueness: let $u$ be a classical solution with zero initial data and $|u(t,x)|\le Ce^{a|x|^2}$ whose forcing $f$ satisfies the hypotheses of (i), and let $u^*$ be the potential of (i), which by steps 1.1 and 3.2 is classical with $u^*_t-\Delta u^*=f$, $u^*(0,\cdot)=0$ and $|u^*|\le TM$ on the strip. Then $w:=u-u^*$ is continuous on the closed strip, $C^{1,2}$ in positive time, solves the homogeneous heat equation with zero initial data, and obeys $|w|\le(C+TM)e^{a|x|^2}$ because $e^{a|x|^2}\ge1$ for $a\ge0$; [F6] gives $w\equiv0$, so $u=u^*$ is the potential of (i), the unique classical solution with zero initial data in the Gaussian growth class. [step 1.1, step 3.2, F6, given] ∎
