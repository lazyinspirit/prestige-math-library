---
id: pthm-qsm-homogeneous-bose-condensation
kind: physics-theorem
title: "Dimension-restricted fixed-mean-density Bose condensation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-qsm-models-statistics-and-preparation
  - pthm-qsm-periodic-ideal-occupation
  - thm-qsm-models-lattice-riemann-bose-bound
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  pthm-qsm-periodic-ideal-occupation: physical-result
  thm-qsm-models-lattice-riemann-bose-bound: mathematical-premise
physical_scope: "A sequence of three-dimensional or dimension-d ideal, homogeneous, quadratic-dispersion grand states on periodic boxes whose chemical potentials are chosen to hold the mean particle density fixed. It proves the critical density, dimension restriction, and grand-ensemble zero-mode nonconcentration. It does not assert canonical-ensemble equivalence, trapping, interactions, superfluidity, a finite-volume phase transition, or empirical condensation."
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §3.5.3, Bose condensation"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 25, Bose-Einstein condensation"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/85cd383f3ca4573c3d578db435257c5a_MIT8_333F13_Lec25.pdf"
---

## Statement

Adopt the homogeneous periodic Bose model of [[pthm-qsm-periodic-ideal-occupation]] with one internal mode ($g=1$), dimension $d\ge1$, $\alpha=\hbar^2/(2m)>0$, fixed $\beta>0$ and target mean number density $\rho>0$. For each $L$, choose the unique $\mu_L<0$ solving
$$L^{-d}\sum_{k\in\mathbb Z^d}(e^{\beta(\alpha|2\pi k/L|^2-\mu_L)}-1)^{-1}=\rho.$$
Define $\rho_c=(2\pi)^{-d}\int_{\mathbb R^d}(e^{\beta\alpha|p|^2}-1)^{-1}dp$ as an extended nonnegative number. Then $\rho_c=(4\pi\beta\alpha)^{-d/2}\sum_{\ell\ge1}\ell^{-d/2}$; it is finite exactly when $d>2$. For $d\le2$, $\mathbb E N_0/L^d\to0$ for every finite $\rho$. For $d>2$, $\mathbb E N_0/L^d\to(\rho-\rho_c)_+$, where $(x)_+=\max(x,0)$. When $d=3$, $\rho_c=\lambda_T^{-3}\zeta(3/2)$, $\lambda_T=(2\pi\hbar^2\beta/m)^{1/2}$, and the positive mean condensed fraction below $T_c=[2\pi\hbar^2/(mk_B)](\rho/\zeta(3/2))^{2/3}$ is $1-(T/T_c)^{3/2}$.

If $d>2$ and $\rho_0=\rho-\rho_c>0$, the grand-state ground occupation satisfies
$$\operatorname{Var}(N_0/L^d)\to\rho_0^2,\qquad \mathbb P(N_0/L^d\ge x)\to e^{-x/\rho_0}\quad(x>0).$$
In particular the condensate density does not converge in probability to its mean limit in this grand ensemble.

## Facts & Assumptions

**Given:** $m,\hbar,k_B,T,L>0$; $\alpha$ in J m$^2$, $\beta$ in J$^{-1}$, $\rho$ in m$^{-d}$, and the one-mode-per-momentum grand preparation.

[A1] [[post-qsm-models-statistics-and-preparation]]: the bosonic grand Gibbs state is an adopted preparation when its trace is finite.

[F1] [[pthm-qsm-periodic-ideal-occupation]], Statement: for $\mu<0$, mode means are geometric, the finite-volume trace is finite, and scaled occupation sums converge at fixed chemical potential.

[F2] [[thm-qsm-models-lattice-riemann-bose-bound]], Statement: the missing-origin lattice sum converges to the singular integral exactly for $d>2$, whose value is the stated positive series.

## Proof



1.1 Under the adopted grand preparation [A1] and periodic mode trace [F1], the finite-volume density as a function of $\mu<0$ is continuous: on each compact subinterval of $(-\infty,0)$, the Gaussian trace bound gives a uniform summable majorant for its mode series. It is strictly increasing because every summand is. As $\mu\to-\infty$ it tends zero by that same Gaussian bound; as $\mu\uparrow0$, the $k=0$ term diverges. The intermediate value theorem therefore gives exactly one $\mu_L<0$ for each $\rho>0$. [given, A1, F1, algebra]

1.2 At fixed $\mu<0$, the continuum density is $\rho(\mu)=(2\pi)^{-d}\int(e^{\beta(\alpha|p|^2-\mu)}-1)^{-1}dp$ by [F1]. It is continuous and strictly increasing in $\mu$ by a compact-parameter Gaussian bound and pointwise strict increase. It tends zero as $\mu\to-\infty$ by $f_B\le e^{\beta\mu}e^{-\beta\alpha|p|^2}/(1-e^{\beta\mu})$, and increases to $\rho_c$ as $\mu\uparrow0$ by monotone convergence [F2]. Thus when $d\le2$, $\rho(\mu)$ runs continuously from zero to infinity; when $d>2$ it runs from zero to $\rho_c$. [given, F1, F2, algebra]

2.1 If $\rho<\rho_c$ (which covers every finite $\rho$ for $d\le2$), choose the unique $\mu_*<0$ with $\rho(\mu_*)=\rho$. For any $\mu_-<\mu_*<\mu_+<0$, fixed-$\mu$ convergence from [F1] implies that for all sufficiently large $L$, the finite-volume densities at $\mu_-$ and $\mu_+$ bracket $\rho$. Strict monotonicity then traps $\mu_L$ between them. Shrinking the bracket proves $\mu_L\to\mu_*$. The ground occupation is $(e^{-\beta\mu_L}-1)^{-1}$, which stays bounded as $\mu_L\to\mu_*<0$; dividing by $L^d$ gives zero. [step 1.1, step 1.2, F1, algebra]

2.2 Suppose $d>2$ and $\rho\ge\rho_c$. For any $\delta>0$, if $\mu_L\le-\delta$ along arbitrarily large $L$, monotonicity bounds the finite-volume density by its value at $-\delta$; fixed-chemical-potential convergence would then give $\rho\le\rho(-\delta)<\rho_c$, contradiction. Thus $\mu_L\to0$. Let $\rho_{\mathrm{ex},L}$ be the density excluding $k=0$. Since $\mu_L<0$, each excited occupation is at most its value at zero chemical potential, and [F2] gives $\limsup_L\rho_{\mathrm{ex},L}\le\rho_c$. For any fixed $\mu'<0$, eventually $\mu_L\ge\mu'$, so monotonicity and [F1] give $\liminf_L\rho_{\mathrm{ex},L}\ge\rho(\mu')$. Let $\mu'\uparrow0$ and use step 1.2 to get the matching lower bound $\rho_c$. Hence $\rho_{\mathrm{ex},L}\to\rho_c$ and $\mathbb E N_0/L^d=\rho-\rho_{\mathrm{ex},L}\to\rho-\rho_c$. At equality this limit is zero. [step 1.1, step 1.2, F1, F2, algebra]

3.1 In $d=3$, evaluate $\rho_c$ by the series in [F2]: $(4\pi\beta\alpha)^{-3/2}\sum_{\ell\ge1}\ell^{-3/2}$. Substituting $\alpha=\hbar^2/(2m)$ gives $\lambda_T^{-3}\zeta(3/2)$. Solving $\rho=\rho_c(T_c)$ and using $\beta=(k_BT)^{-1}$ gives the stated $T_c$; for $T<T_c$, division of $\rho-\rho_c(T)$ by $\rho$ gives $1-(T/T_c)^{3/2}$. [step 2.2, F2, algebra]

4.1 For $\rho_0>0$, step 2.2 gives $\bar n_0/L^d\to\rho_0$. The geometric ground-mode law from [F1] has variance $\bar n_0(1+\bar n_0)$, so its volume-scaled variance tends $\rho_0^2$. Its parameter is $q_0=\bar n_0/(1+\bar n_0)$, and for each $x>0$ the geometric tail is $\mathbb P(N_0/L^d\ge x)=q_0^{\lceil xL^d\rceil}$. Since $L^d\log q_0=-L^d\log(1+1/\bar n_0)\to-1/\rho_0$, this tail tends $e^{-x/\rho_0}$. Taking $x=2\rho_0$ leaves limiting probability $e^{-2}>0$ of a deviation at least $\rho_0$, which rules out convergence in probability to $\rho_0$. This concerns only the ideal grand ensemble; the proof supplies no canonical equivalence or superfluidity claim. [step 2.2, F1, algebra] ∎
