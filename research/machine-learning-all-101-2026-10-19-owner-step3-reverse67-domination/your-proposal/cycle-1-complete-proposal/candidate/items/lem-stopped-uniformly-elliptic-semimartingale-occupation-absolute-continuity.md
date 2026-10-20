---
id: lem-stopped-uniformly-elliptic-semimartingale-occupation-absolute-continuity
kind: lemma
title: Stopped occupation absolute continuity for uniformly elliptic Ito processes
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-continuous-brownian-ito-process
  - lem-parabolic-bellman-barrier-with-lebesgue-height-bound
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-lebesgue-outer-regularity-for-arbitrary-subsets
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: N. V. Krylov, On time inhomogeneous stochastic Ito equations with drift in Ld+1, Lemma 4.1
      url: https://arxiv.org/pdf/2005.08831
    - title: N. V. Krylov, Sobolev and Viscosity Solutions for Fully Nonlinear Elliptic and Parabolic Equations, Theorem 2.2.4
      url: https://doi.org/10.1090/surv/233
---

## Statement

Assume AC. On a usual filtered probability space let $W$ be a standard $m$-dimensional Brownian motion relative to that filtration: $W$ is adapted, and $W_t-W_s$ is independent of $\mathcal F_s$ with law $N(0,(t-s)I_m)$ for $s<t$. Let
$$Z_t=Z_0+\int_0^t\beta_sds+\int_0^t\Sigma_sdW_s,\qquad 0\le t\le T<\infty,$$
be a continuous $\mathbb R^d$-valued Itô process, with finite $\mathcal F_0$-measurable $Z_0$, progressively measurable $\beta$ and predictable $\Sigma$, and $\int_0^T(|\beta_s|+\|\Sigma_s\|_{\mathrm{HS}}^2)ds<\infty$ almost surely. Suppose $a_s=\tfrac12\Sigma_s\Sigma_s^{\mathsf T}\ge\kappa I$ for $dt\otimes P$-almost every $(s,\omega)$, for a constant $\kappa>0$. For every stopping time $\gamma\le T$ with
$$E\int_0^\gamma(|\beta_s|+\operatorname{tr}a_s)ds<\infty,$$
the finite Borel measure $\mu_\gamma(E)=E\int_0^\gamma1_E(s,Z_s)ds$ is absolutely continuous with respect to $(d+1)$-dimensional Lebesgue measure. In particular there are stopping times $\gamma_n\uparrow T$ almost surely with this property. No moment assumption on $Z_0$ is required.

## Facts & Assumptions

**Given:** all data and hypotheses in the Statement.

[A1] Full AC is assumed for the stochastic and deterministic interfaces. [[def-axiom-of-choice]]

[F1] For every nonnegative $f\in C_c^\infty(\mathbb R^{d+1})$ there is a bounded nonnegative function $v$ with bounded weak $v_t,D_xv,D_x^2v$, with $\|v\|_\infty,\|D_xv\|_\infty\le C_d\|f\|_{d+1}$, satisfying simultaneously for every constant $A\ge0$ the distributional inequality $v_t+A:D_x^2v-(1+\operatorname{tr}A)v+(\det A)^{1/(d+1)}f\le0$. [[lem-parabolic-bellman-barrier-with-lebesgue-height-bound]]

[F2] The displayed relative Brownian increment condition and usual filtration are the standing Brownian Itô hypotheses. [[def-continuous-brownian-ito-process]] The time-dependent Itô formula applies to a smooth function of a Brownian Itô process, after localization; a predictable Brownian integrand with finite expected square energy has a mean-zero square-integrable integral. Finite vector versions follow by summing components. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F3] Convolution of a locally integrable function with a smooth compactly supported kernel is smooth and derivatives differentiate the kernel. For each weak derivative present here, its defining test identity also gives $D(v*\rho_\epsilon)=(Dv)*\rho_\epsilon$ by using the translated kernel as test function. No full second-order spacetime Sobolev regularity is assumed. [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]

[F4] Null sets admit open supersets of arbitrarily small Lebesgue measure; compact subsets of an open set admit smooth cutoffs supported in it. [[thm-lebesgue-outer-regularity-for-arbitrary-subsets]] [[lem-test-function-cutoffs-and-euclidean-localization]]

[F5] Nonnegative integrals obey Tonelli and monotone convergence; dominated convergence applies with an integrable absolute majorant. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-monotone-convergence-for-the-integral]] [[thm-dominated-convergence]]

## Proof

1.1 Fix $f\ge0$ smooth compactly supported, and take $v$ from [F1]. Convolve in spacetime with $\rho_\epsilon(z)=\epsilon^{-d-1}\rho(z/\epsilon)$, where $\rho\ge0$ is a smooth compactly supported unit-mass kernel. Write $v_\epsilon=v*\rho_\epsilon$ and $f_\epsilon=f*\rho_\epsilon$. For each constant $A\ge0$, convolution of the distributional inequality gives $$(v_\epsilon)_t+A:D_x^2v_\epsilon-(1+\operatorname{tr}A)v_\epsilon+(\det A)^{1/(d+1)}f_\epsilon\le0$$ at every spacetime point. These simultaneous inequalities follow first for a countable dense set of matrices and then all matrices by continuity. Also $v_\epsilon\ge0$, $\|v_\epsilon\|_\infty,\|D_xv_\epsilon\|_\infty\le C_d\|f\|_{d+1}$, and $f_\epsilon\to f$ uniformly. Thus evaluation at the random matrix $a_s$ uses smooth pointwise inequalities, with no evaluation of unsmoothed weak derivatives on an unknown occupation measure. [F1, F3, given, construct]

2.1 Put $Q_t=\exp(-t-\int_0^{t\wedge\gamma}\operatorname{tr}a_sds)$ and use the Itô formula on $[0,\gamma]$ for $Q_tv_\epsilon(t,Z_t)$. The ordinary product rule with this absolutely continuous scalar factor and step 1.1 give $$d(Qv_\epsilon)\le QD_xv_\epsilon\Sigma\,dW+QD_xv_\epsilon\cdot\beta\,dt-Q(\det a)^{1/(d+1)}f_\epsilon(t,Z_t)dt.$$ The stopped stochastic integral has expected square energy at most $2C_d^2\|f\|_{d+1}^2E\int_0^\gamma\operatorname{tr}a_sds$, hence expectation zero by [F2]. The drift term has integrable absolute value at most $C_d\|f\|_{d+1}E\int_0^\gamma|\beta_s|ds$. The initial and terminal values are bounded nonnegative variables irrespective of $Z_0$. Taking expectations and discarding the terminal value gives the estimate with $f_\epsilon$. The weight obeys $Q_s(\det a_s)^{1/(d+1)}\le C_d(1+\operatorname{tr}a_s)$ by eigenvalue AM–GM, and its stopped integral has finite expectation. Since $\|f_\epsilon\|_\infty\le\|f\|_\infty$ and $f_\epsilon\to f$ uniformly, [F5] gives dominated convergence for the weighted integrals. Thus $$E\int_0^\gamma Q_s(\det a_s)^{1/(d+1)}f(s,Z_s)ds\le C_d\left(1+E\int_0^\gamma|\beta_s|ds\right)\|f\|_{d+1}.$$ Localization in [F2] can be removed by its square-energy bound and by [F5] for the integrable finite-variation terms. [A1, F2, F5, step 1.1]

3.1 Define $\nu(E)=E\int_0^\gamma Q_s(\det a_s)^{1/(d+1)}1_E(s,Z_s)ds$. It is a finite Borel measure: $Q\le1$ and the eigenvalue AM–GM bound gives $(\det a)^{1/(d+1)}\le C_d(1+\operatorname{tr}a)$, whose stopped expectation is finite. For every open set $O$ of finite Lebesgue measure, exhaust $O$ by compact sets $K_j\uparrow O$. By [F4] choose $0\le\chi_j\le1$ smooth compactly supported in $O$, equal to one on $K_j$. The estimate in step 2.1 and $\|\chi_j\|_{d+1}\le|O|^{1/(d+1)}$ give $\nu(K_j)\le C_d(1+E\int_0^\gamma|\beta_s|ds)|O|^{1/(d+1)}$. Continuity from below gives the same bound for $\nu(O)$. Every Lebesgue-null Borel set $N$ has open supersets of arbitrarily small finite measure by [F4], so monotonicity gives $\nu(N)=0$. This argument needs no unproved inner-regularity assertion for $\nu$. [F4, F5, step 2.1, algebra]

4.1 The weight $Q_s(\det a_s)^{1/(d+1)}$ is strictly positive for $dt\otimes P$-almost every $s<\gamma$: the stopped trace integral is finite almost surely by its finite expectation, and $a_s\ge\kappa I$. For a null Borel set $N$, step 3.1 and Tonelli give a nonnegative random integral of that weight times $1_N(s,Z_s)$ equal to zero almost surely. Positivity of the weight then gives $\int_0^\gamma1_N(s,Z_s)ds=0$ almost surely, and taking expectations proves $\mu_\gamma(N)=0$. Finally take $\gamma_n=T\wedge\inf\{t:\int_0^t(|\beta_s|+\operatorname{tr}a_s)ds\ge n\}$, with infimum of the empty set interpreted as $T$. The integral is continuous adapted and finite on $[0,T]$, so these are stopping times, their stopped integrals are at most $n$, and for almost every path they equal $T$ for all sufficiently large $n$. Thus $\gamma_n\uparrow T$ and all the asserted stopped occupation measures are absolutely continuous. [F5, step 3.1, given, construct] ∎
