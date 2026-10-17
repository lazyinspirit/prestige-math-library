---
id: pthm-qsm-homogeneous-bose-condensation
kind: physics-theorem
title: "Dimension-restricted fixed-mean-density Bose condensation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-qsm-models-statistics-and-preparation
  - lem-qsm-models-diagonal-occupation-trace
  - pthm-qsm-periodic-ideal-occupation
  - thm-qsm-models-lattice-riemann-bose-bound
  - def-countable-choice
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  pthm-qsm-periodic-ideal-occupation: physical-result
  thm-qsm-models-lattice-riemann-bose-bound: mathematical-premise
  def-countable-choice: mathematical-premise
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

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and adopt the homogeneous periodic Bose model of [[pthm-qsm-periodic-ideal-occupation]] with one internal mode ($g=1$), dimension $d\ge1$, $\alpha=\hbar^2/(2m)>0$, fixed $\beta>0$ in J$^{-1}$ and target mean number density $\rho>0$ in m$^{-d}$. Let $T=(k_B\beta)^{-1}$ in K, with $k_B>0$ in J K$^{-1}$. For each side length $L>0$ in m, put $V:=L^d$ in m$^d$ and choose the unique $\mu_L<0$ solving
$$L^{-d}\sum_{k\in\mathbb Z^d}(e^{\beta(\alpha|2\pi k/L|^2-\mu_L)}-1)^{-1}=\rho.$$
Let $\Omega_B:=\{n:\mathbb Z^d\to\mathbb N_0:\{k:n(k)\ne0\}\text{ is finite}\}$ be the Bose occupation configuration set and define the grand probability law
$$P_L(n):=\Xi_L^{-1}\exp\left(-\beta\sum_{k\in\mathbb Z^d}(\alpha|2\pi k/L|^2-\mu_L)n(k)\right),\qquad \Xi_L:=\sum_{n\in\Omega_B}\exp\left(-\beta\sum_{k\in\mathbb Z^d}(\alpha|2\pi k/L|^2-\mu_L)n(k)\right),$$
which is finite and positive by [[lem-qsm-models-diagonal-occupation-trace]] under $\mathrm{AC}_\omega$ and its stated mode hypotheses. The zero-mode occupation random variable is $N_0(n):=n(0)$. For a $P_L$-integrable real random variable $X$ write $\mathbb E_LX:=\sum_nP_L(n)X(n)$; when its second moment is finite write $\operatorname{Var}_L(X):=\mathbb E_L[(X-\mathbb E_LX)^2]$. Say this model has mean zero-mode condensation when $\lim_{L\to\infty}\mathbb E_L N_0/V>0$; this limit, when it exists, is the mean condensate density. Define the mean condensed fraction by $f_0:=\lim_{L\to\infty}\mathbb E_L N_0/(\rho V)$ when the limit exists. Define $\zeta(s):=\sum_{\ell=1}^{\infty}\ell^{-s}$ for $s>1$ and $(x)_+:=\max(x,0)$. The critical density $\rho_c=(2\pi)^{-d}\int_{\mathbb R^d}(e^{\beta\alpha|p|^2}-1)^{-1}dp$ is an extended nonnegative number, with $\rho_c=(4\pi\beta\alpha)^{-d/2}\sum_{\ell=1}^{\infty}\ell^{-d/2}$; this series diverges and $\rho_c=+\infty$ for $d\le2$, while for $d>2$ it equals $(4\pi\beta\alpha)^{-d/2}\zeta(d/2)$. For $d\le2$, $\mathbb E_L N_0/V\to0$ for every finite $\rho$. For $d>2$, $\mathbb E_L N_0/V\to(\rho-\rho_c)_+$, so mean zero-mode condensation occurs exactly when $\rho>\rho_c$. When $d=3$, $\rho_c=\lambda_T^{-3}\zeta(3/2)$, $\lambda_T=(2\pi\hbar^2\beta/m)^{1/2}$ in m, and for $\rho>\rho_c$ the mean condensed fraction is $f_0=1-\rho_c/\rho$. At fixed $\rho$, this holds for $T<T_c=[2\pi\hbar^2/(mk_B)](\rho/\zeta(3/2))^{2/3}$ and $f_0=1-(T/T_c)^{3/2}$.

If $d>2$ and $\rho_0=\rho-\rho_c>0$, for every $x>0$ in m$^{-d}$ the grand-state ground occupation satisfies
$$\operatorname{Var}_L(N_0/V)\to\rho_0^2,\qquad P_L(N_0/V\ge x)\to e^{-x/\rho_0}\quad(x>0).$$
For a real random-variable family $X_L:\Omega_B\to\mathbb R$ with laws $P_L$, convergence in probability to a constant $a$ means $P_L(|X_L-a|>\varepsilon)\to0$ as $L\to\infty$ for every $\varepsilon>0$ (in the same units as $X_L$). In particular $X_L=N_0/V$ does not converge in probability to its mean limit $\rho_0$ in this grand ensemble.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $m>0$ in kg, $\hbar>0$ in J s, $k_B>0$ in J K$^{-1}$, $T>0$ in K, $L>0$ in m; $\alpha$ in J m$^2$, $\beta=(k_BT)^{-1}$ in J$^{-1}$, continuum wave vector $p$ in m$^{-1}$, $V=L^d$ in m$^d$, $\rho$ in m$^{-d}$, and the one-mode-per-momentum grand preparation.

[A1] [[post-qsm-models-statistics-and-preparation]]: the bosonic grand Gibbs state is an adopted preparation when its trace is finite.

[F1] [[pthm-qsm-periodic-ideal-occupation]], Statement: for $\mu<0$, mode means are geometric, the finite-volume trace is finite, and scaled occupation sums converge at fixed chemical potential.

[F2] [[thm-qsm-models-lattice-riemann-bose-bound]], Statement: the Bose endpoint integral is the extended value $(\pi/(\beta\alpha))^{d/2}\sum_{\ell\ge1}\ell^{-d/2}$ in every dimension, finite exactly for $d>2$; for $\mu<0$ its continuum integrals increase to this endpoint value, and for $d>2$ the missing-origin lattice sums converge to it.

## Proof



1.1 Under the adopted grand preparation [A1] and periodic mode trace [F1], the finite-volume density as a function of $\mu<0$ is continuous: on each compact subinterval of $(-\infty,0)$, the Gaussian trace bound gives a uniform summable majorant for its mode series. It is strictly increasing because every summand is. As $\mu\to-\infty$ it tends zero by that same Gaussian bound; as $\mu\uparrow0$, the $k=0$ term diverges. The intermediate value theorem therefore gives exactly one $\mu_L<0$ for each $\rho>0$. [given, A1, F1, algebra]

1.2 At fixed $\mu<0$, the continuum density is $\rho(\mu)=(2\pi)^{-d}\int(e^{\beta(\alpha|p|^2-\mu)}-1)^{-1}dp$ by [F1]. It is continuous and strictly increasing in $\mu$ by a compact-parameter Gaussian bound and pointwise strict increase. It tends zero as $\mu\to-\infty$ by $f_B\le e^{\beta\mu}e^{-\beta\alpha|p|^2}/(1-e^{\beta\mu})$, and increases to $\rho_c$ as $\mu\uparrow0$ by monotone convergence [F2]. Thus when $d\le2$, $\rho(\mu)$ runs continuously from zero to infinity; when $d>2$ it runs from zero to $\rho_c$. [given, F1, F2, algebra]

2.1 If $\rho<\rho_c$ (which covers every finite $\rho$ for $d\le2$), choose the unique $\mu_*<0$ with $\rho(\mu_*)=\rho$. For any $\mu_-<\mu_*<\mu_+<0$, fixed-$\mu$ convergence from [F1] implies that for all sufficiently large $L$, the finite-volume densities at $\mu_-$ and $\mu_+$ bracket $\rho$. Strict monotonicity then traps $\mu_L$ between them. Shrinking the bracket proves $\mu_L\to\mu_*$. The ground occupation is $(e^{-\beta\mu_L}-1)^{-1}$, which stays bounded as $\mu_L\to\mu_*<0$; dividing by $L^d$ gives zero. [step 1.1, step 1.2, F1, algebra]

2.2 Suppose $d>2$ and $\rho\ge\rho_c$. For any $\delta>0$, if $\mu_L\le-\delta$ along arbitrarily large $L$, monotonicity bounds the finite-volume density by its value at $-\delta$; fixed-chemical-potential convergence would then give $\rho\le\rho(-\delta)<\rho_c$, contradiction. Thus $\mu_L\to0$. Let $\rho_{\mathrm{ex},L}$ be the density excluding $k=0$. Since $\mu_L<0$, each excited occupation is at most its value at zero chemical potential, and [F2] gives $\limsup_L\rho_{\mathrm{ex},L}\le\rho_c$. For any fixed $\mu'<0$, eventually $\mu_L\ge\mu'$, so monotonicity and [F1] give $\liminf_L\rho_{\mathrm{ex},L}\ge\rho(\mu')$. Let $\mu'\uparrow0$ and use step 1.2 to get the matching lower bound $\rho_c$. Hence $\rho_{\mathrm{ex},L}\to\rho_c$ and $\mathbb E N_0/L^d=\rho-\rho_{\mathrm{ex},L}\to\rho-\rho_c$. At equality this limit is zero. [step 1.1, step 1.2, F1, F2, algebra]

3.1 In $d=3$, evaluate $\rho_c$ by the series in [F2]: $(4\pi\beta\alpha)^{-3/2}\sum_{\ell\ge1}\ell^{-3/2}$. Substituting $\alpha=\hbar^2/(2m)$ gives $\lambda_T^{-3}\zeta(3/2)$. Solving $\rho=\rho_c(T_c)$ and using $\beta=(k_BT)^{-1}$ gives the stated $T_c$; for $T<T_c$, division of $\rho-\rho_c(T)$ by $\rho$ gives $1-(T/T_c)^{3/2}$. [step 2.2, F2, algebra]

4.1 For $\rho_0>0$, step 2.2 gives $\mathbb E_LN_0/V\to\rho_0$. Write $\bar n_{0,L}:=\mathbb E_LN_0$. The geometric ground-mode law from [F1] has $\operatorname{Var}_L(N_0)=\bar n_{0,L}(1+\bar n_{0,L})$, so $\operatorname{Var}_L(N_0/V)\to\rho_0^2$. Its parameter is $q_{0,L}=\bar n_{0,L}/(1+\bar n_{0,L})$, and the geometric tail is $P_L(N_0/V\ge x)=q_{0,L}^{\lceil xV\rceil}$. Since $V\log q_{0,L}=-V\log(1+1/\bar n_{0,L})\to-1/\rho_0$, this tail tends $e^{-x/\rho_0}$. Taking $x=2\rho_0$ gives $P_L(|N_0/V-\rho_0|>\rho_0/2)\ge P_L(N_0/V\ge2\rho_0)\to e^{-2}>0$, which rules out convergence in probability to $\rho_0$. This concerns only the ideal grand ensemble; the proof supplies no canonical equivalence or superfluidity claim. [step 2.2, F1, algebra] ∎
