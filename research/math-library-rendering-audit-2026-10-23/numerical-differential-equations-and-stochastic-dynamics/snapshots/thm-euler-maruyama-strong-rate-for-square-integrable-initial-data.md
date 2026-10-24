---
id: thm-euler-maruyama-strong-rate-for-square-integrable-initial-data
kind: theorem
title: "Euler–Maruyama strong rate for square-integrable initial data"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - thm-euler-maruyama-uniform-moment-and-increment-bounds
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-continuous-brownian-ito-process
  - def-continuous-time-stopping-time
  - thm-doob-maximal-bound-for-the-ito-integral
  - thm-stopping-an-ito-integral
  - thm-holder-inequality-for-integrals
  - lem-rat-embeds-dense
  - thm-monotone-convergence-for-the-integral
  - thm-gronwall-integral-inequality
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, §2"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
---

## Statement

Assume the Axiom of Choice. Let $d,m\ge1$ be finite, fix $T>0$, and work on
the complete usual filtered probability space of
[[def-ito-sde-and-strong-solution]]. Let $0<h\le1$ with $N=T/h\in\mathbb N$.
Use Euclidean state norms and the Frobenius matrix norm. Let $W$ be an adapted
standard $m$-dimensional Brownian motion whose increments are independent of
the current filtration. Let
$b:[0,T]\times\mathbb R^d\to\mathbb R^d$ and
$\sigma:[0,T]\times\mathbb R^d\to\mathbb R^{d\times m}$ be jointly Borel,
and suppose finite nonnegative constants $L,K$ satisfy, for all $s,t\in[0,T]$ and
$x,y\in\mathbb R^d$,
$$|b(t,x)-b(t,y)|+\|\sigma(t,x)-\sigma(t,y)\|_F\le L|x-y|,$$
$$|b(t,x)|^2+\|\sigma(t,x)\|_F^2\le K^2(1+|x|^2),$$
and
$$|b(t,x)-b(s,x)|+\|\sigma(t,x)-\sigma(s,x)\|_F \le K(1+|x|)|t-s|^{1/2}.$$
Let $X_0$ be $\mathcal F_0$-measurable, independent of
$\sigma(W_t-W_0:0\le t\le T)$, with $\mathbb E|X_0|^2<\infty$. Let $X$ be the exact continuous
strong solution with
$$\mathbb E\sup_{t\le T}|X_t|^2<\infty,$$
and let $Y^h,\bar Y^h$ be the continuous Euler interpolation and left-endpoint
step process of
[[def-euler-maruyama-step-process-and-continuous-interpolation]]. The
uniform pointwise moment and interpolation-increment bounds of
[[thm-euler-maruyama-uniform-moment-and-increment-bounds]] then imply that a
constant $C$, independent of $h$, satisfies
$$\mathbb E\sup_{0\le t\le T}|X_t-Y_t^h|^2\le Ch.$$
Thus the grid-point root-mean-square error is $O(h^{1/2})$. The constant may
depend on $T,d,m,L,K$ and the exact-solution supremum-moment bound supplied by
the P-SDE-01 existence theorem.

## Facts & Assumptions

**Given:** AC; finite $d,m$; the stated horizon, Brownian, coefficient and initial-value hypotheses; the exact strong solution $X$ and its finite supremum second moment; and the Euler recursion/interpolation.

[F1] The continuous Euler interpolation is $Y_t=Y_k+b(t_k,Y_k)(t-t_k)+\sigma(t_k,Y_k)(W_t-W_{t_k})$ on $[t_k,t_{k+1}]$, with $Y_{t_k}=Y_k$ and left-endpoint step process $\bar Y_t=Y_k$ on $[t_k,t_{k+1})$. [[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F2] Under the stated global Lipschitz, linear-growth, half-Hölder time, Brownian-increment and initial-value conditions, $\sup_{t\le T}\mathbb E|\bar Y_t|^2$ and $\sup_{t\le T}\mathbb E|Y_t|^2$ are bounded uniformly in $h$, and $\sup_{t\le T}\mathbb E|Y_t-\bar Y_t|^2\le C h$. [[thm-euler-maruyama-uniform-moment-and-increment-bounds]]

[F3] For each scalar Brownian integral $M_t=\int_0^tH_s\,dB_s$ with finite energy, $\mathbb E\sup_{t\le T}|M_t|^2\le4\mathbb E\int_0^TH_s^2ds$. [[thm-doob-maximal-bound-for-the-ito-integral]]

[F4] For a finite-dimensional continuous Brownian Itô process, its component processes have the coordinatewise drift and Brownian-integral representation stated in the definition. [[def-continuous-brownian-ito-process]]

[F5] Stopping a finite-energy Brownian Itô integral at a stopping time agrees with integrating its predictable stopped integrand. [[thm-stopping-an-ito-integral]]

[F6] If $v(t)\le A+\int_0^t Bv(s)\,ds$ for nonnegative continuous $v$ and constants $A,B\ge0$, then $v(t)\le Ae^{Bt}$. [[thm-gronwall-integral-inequality]]

[F7] The stated squared growth bound implies $|b(t,x)|+\|\sigma(t,x)\|_F\le\sqrt2K(1+|x|)$; with the global Lipschitz, usual-filtration and initial-value conditions, the P-SDE-01 theorem supplies a unique exact strong solution and $\mathbb E\sup_{t\le T}|X_t|^2<\infty$. [[def-ito-sde-and-strong-solution]] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F8] A map $\rho$ is a stopping time when $\{\rho\le t\}\in\mathcal F_t$ for every $t\ge0$. [[def-continuous-time-stopping-time]]

[F9] For a continuous adapted process, the supremum on $[0,t]$ equals the supremum over rational times in $[0,t]$ together with $t$, and is $\mathcal F_t$-measurable. [[lem-rat-embeds-dense]]

[F10] Cauchy–Schwarz for time integrals gives $|\int_0^t u_s\,ds|^2\le t\int_0^t|u_s|^2ds$. [[thm-holder-inequality-for-integrals]]

[F11] If $Z_R\uparrow Z$ are nonnegative measurable random variables, then $\mathbb E Z_R\uparrow\mathbb E Z$. [[thm-monotone-convergence-for-the-integral]]

[F12] Tonelli's theorem exchanges time integration and expectation for nonnegative measurable integrands. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] AC is stated because the SDE, Brownian, Itô-integral and maximal-inequality interfaces in [F3]–[F7] adopt it. [[def-axiom-of-choice]]

## Proof



**Given:** AC; finite $d,m$; the stated horizon, Brownian, coefficient and initial-value hypotheses; the exact strong solution $X$ and its finite supremum second moment; and the Euler recursion/interpolation.

[F1] The continuous Euler interpolation is $Y_t=Y_k+b(t_k,Y_k)(t-t_k)+\sigma(t_k,Y_k)(W_t-W_{t_k})$ on $[t_k,t_{k+1}]$, with $Y_{t_k}=Y_k$ and left-endpoint step process $\bar Y_t=Y_k$ on $[t_k,t_{k+1})$. [[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F2] Under the stated global Lipschitz, linear-growth, half-Hölder time, Brownian-increment and initial-value conditions, $\sup_{t\le T}\mathbb E|\bar Y_t|^2$ and $\sup_{t\le T}\mathbb E|Y_t|^2$ are bounded uniformly in $h$, and $\sup_{t\le T}\mathbb E|Y_t-\bar Y_t|^2\le C h$. [[thm-euler-maruyama-uniform-moment-and-increment-bounds]]

[F3] For each scalar Brownian integral $M_t=\int_0^tH_s\,dB_s$ with finite energy, $\mathbb E\sup_{t\le T}|M_t|^2\le4\mathbb E\int_0^TH_s^2ds$. [[thm-doob-maximal-bound-for-the-ito-integral]]

[F4] For a finite-dimensional continuous Brownian Itô process, its component processes have the coordinatewise drift and Brownian-integral representation stated in the definition. [[def-continuous-brownian-ito-process]]

[F5] Stopping a finite-energy Brownian Itô integral at a stopping time agrees with integrating its predictable stopped integrand. [[thm-stopping-an-ito-integral]]

[F6] If $v(t)\le A+\int_0^t Bv(s)\,ds$ for nonnegative continuous $v$ and constants $A,B\ge0$, then $v(t)\le Ae^{Bt}$. [[thm-gronwall-integral-inequality]]

[F7] The stated squared growth bound implies $|b(t,x)|+\|\sigma(t,x)\|_F\le\sqrt2K(1+|x|)$; with the global Lipschitz, usual-filtration and initial-value conditions, the P-SDE-01 theorem supplies a unique exact strong solution and $\mathbb E\sup_{t\le T}|X_t|^2<\infty$. [[def-ito-sde-and-strong-solution]] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F8] A map $\rho$ is a stopping time when $\{\rho\le t\}\in\mathcal F_t$ for every $t\ge0$. [[def-continuous-time-stopping-time]]

[F9] For a continuous adapted process, the supremum on $[0,t]$ equals the supremum over rational times in $[0,t]$ together with $t$, and is $\mathcal F_t$-measurable. [[lem-rat-embeds-dense]]

[F10] Cauchy–Schwarz for time integrals gives $|\int_0^t u_s\,ds|^2\le t\int_0^t|u_s|^2ds$. [[thm-holder-inequality-for-integrals]]

[F11] If $Z_R\uparrow Z$ are nonnegative measurable random variables, then $\mathbb E Z_R\uparrow\mathbb E Z$. [[thm-monotone-convergence-for-the-integral]]

[F12] Tonelli's theorem exchanges time integration and expectation for nonnegative measurable integrands. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] AC is stated because the SDE, Brownian, Itô-integral and maximal-inequality interfaces in [F3]–[F7] adopt it. [[def-axiom-of-choice]]




1.1 By [F4] and [F7], the exact process has its finite-coordinate Itô representation; [F1] supplies the Euler interpolation and its predictable representative $\bar Y^-$ with left-endpoint map $\eta_h^-$. Use that representative in the Euler integral form: $X_t=X_0+\int_0^t b(s,X_s)ds+\int_0^t\sigma(s,X_s)dW_s,$ $Y_t^h=X_0+\int_0^t b(\eta_h^-(s),\bar Y_s^-)ds+\int_0^t\sigma(\eta_h^-(s),\bar Y_s^-)dW_s.$ The grid-valued coefficients are predictable on $(t_k,t_{k+1}]$; the grid coefficient energy is a finite sum bounded by [F2], while Tonelli [F12] and the stated $\mathbb E\sup|X|^2$ bound give finite expected energy for the exact coefficients. Thus these are the required integral representations. In subsequent estimates, $\bar Y$ and $\eta_h$ may replace their predictable versions because they differ only at finitely many grid times, which do not affect the integrals. For $R>0$ define $\tau_R=\inf\{t\le T:|e_t|\ge R\}\wedge T$, with $\inf\emptyset=\infty$. For $t<T$, $\{\tau_R\le t\}=\{\sup_{s\le t}|e_s|\ge R\}$, which is in $\mathcal F_t$ by continuity and [F9]; for $t\ge T$ the event is all of $\Omega$. Thus [F8] makes $\tau_R$ a stopping time. Subtracting the displays and using [F5] gives the stopped error as the sum of the two stopped coefficient integrals. [F1, F2, F4, F5, F7, F8, F9, F12, given]

1.2 Put $\delta b_s=b(s,X_s)-b(\eta_h(s),\bar Y_s),\qquad \delta\sigma_s=\sigma(s,X_s)-\sigma(\eta_h(s),\bar Y_s).$ The state Lipschitz bounds, time modulus, and $|X_s-\bar Y_s|\le|e_s|+|Y_s^h-\bar Y_s|$ give $|\delta b_s|^2+\|\delta\sigma_s\|_F^2 \le C\left(|e_s|^2+|Y_s^h-\bar Y_s|^2+h(1+|\bar Y_s|^2)\right).$ Consequently, with $v_R(t)=\mathbb E\sup_{s\le t}|e_{s\wedge\tau_R}|^2$, Tonelli [F12] and [F2] bound the expected drift-integrand error and the expected squared diffusion-integrand error, after stopping, by $C\int_0^t v_R(s)ds+Ch.$ [F1, F2, F10, F12, given, algebra]

2.1 Cauchy–Schwarz for time integrals bounds the squared supremum of the stopped drift integral by $T\int_0^t\mathbb E[1_{\{s\le\tau_R\}}|\delta b_s|^2]ds$. For the vector stochastic integral, write each state coordinate as a sum of the $m$ scalar Brownian integrals and use $|\sum_{j=1}^m z_j|^2\le m\sum_j|z_j|^2$. Applying [F3] to each scalar term yields the bound $4m\mathbb E\int_0^t1_{\{s\le\tau_R\}}\|\delta\sigma_s\|_F^2ds$. Using Tonelli [F12] and step 1.2 in both bounds gives $v_R(t)\le C\int_0^t v_R(s)ds+Ch,$ where $C$ is independent of $R$ and $h$. [F2, F3, F10, F12, step 1.2, algebra]

3.1 The stopped error is bounded by $R$, so $v_R$ is finite and continuous; applying [F6] to step 2.1 gives $v_R(T)\le C_T h$ uniformly in $R$. Since $e$ is continuous on the compact interval, $\tau_R=T$ for all sufficiently large $R$ on each sample path. Taking $R=n\in\mathbb N$, the stopped suprema increase to $\sup_{s\le T}|e_s|^2$; monotone convergence [F11] yields $\mathbb E\sup_{t\le T}|e_t|^2\le C_T h$. Taking square roots gives the grid-point root-mean-square rate. AC enters only through [A1], and no arbitrary-index choice is used in the estimates. [A1, F6, F11, step 2.1, given] ∎

## Remarks

The proof is the finite-$L^2$ interpolation-defect route. It uses the pointwise-in-time moment and increment estimates of the scheme supplier; its stopping argument does not assume a path-supremum moment bound for the Euler interpolation. This rate is proved separately from the autonomous Higham–Mao–Stuart all-moment theorem.
