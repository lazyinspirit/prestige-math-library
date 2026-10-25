---
id: thm-local-sde-existence-and-uniqueness-until-exit
kind: theorem
title: "Local strong existence and uniqueness up to exit for locally Lipschitz SDEs"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - lem-distance-to-set-is-lipschitz
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-holder-inequality-for-integrals
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-doob-maximal-bound-for-the-ito-integral
  - thm-gronwall-integral-inequality
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, §3"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, §1"
      url: "https://arxiv.org/pdf/1010.3756"
---

## Statement

Assume the data of [[def-locally-lipschitz-ito-sde-and-maximal-solution]] on
$[0,T]$, with $\mathbb E|\xi|^2<\infty$. Then a local strong solution up to
the exit time from $U$ exists on the given filtered space. It is unique up to
indistinguishability before its maximal lifetime $\zeta=\lim_n\tau_n$.
Equivalently, its stopped solutions on the compact exhaustion $K_n$ form a
compatible family as defined in that item. This theorem does not assert that
$\zeta=T$; a separate non-explosion argument is required.

## Facts & Assumptions

**Given:** AC; the usual filtered Brownian space, open state domain, locally bounded and locally Lipschitz coefficients, and square-integrable initial state from the definition.

[F1] A local solution is a compatible family of stopped continuous adapted processes on the compact exhaustion $K_n$; its stopped equation is the local Itô integral equation in the definition. [[def-locally-lipschitz-ito-sde-and-maximal-solution]]

[F2] For globally Lipschitz coefficients of linear growth and an $L^2$-initial state, the SDE has a unique global strong solution on the given filtered space. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F3] For a nonempty set $A$ in a metric space, $|\operatorname{dist}(x,A)-\operatorname{dist}(y,A)|\le|x-y|$. [[lem-distance-to-set-is-lipschitz]]

[F4] For a scalar predictable finite-energy integrand $H$ and one Brownian coordinate $W^j$, $\mathbb E\sup_{s\le t}|\int_0^sH_u\,dW^j_u|^2\le4\mathbb E\int_0^tH_u^2du$, and $\mathbb E|\int_0^tH_u\,dW^j_u|^2=\mathbb E\int_0^tH_u^2du$. [[thm-doob-maximal-bound-for-the-ito-integral]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F5] Hölder's integral inequality at conjugate exponents $2,2$ gives $|\int_0^t f(s)ds|^2\le t\int_0^t|f(s)|^2ds$, applying the scalar estimate to each coordinate for vector $f$. [[thm-holder-inequality-for-integrals]]

[F6] Euclidean Cauchy--Schwarz gives $|\langle x,y\rangle|\le|x||y|$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F7] If a nonnegative continuous $v$ satisfies $v(t)\le C\int_0^t v(s)\,ds$, then $v(t)=0$ for all $t\le T$. [[thm-gronwall-integral-inequality]]

[A1] AC is inherited only through the Brownian and Itô-integral interfaces; the truncations, exhaustion and compatibility construction are indexed by $\mathbb N$. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and suppliers in the Statement and Facts.

1.1 For each $n$, choose scalar piecewise-linear cutoffs $\eta_n(r)$ and $\theta_n(r)$ with $\eta_n=1$ on $[0,n]$, $\eta_n=0$ on $[n+1,\infty)$, $\theta_n=0$ on $[0,(2n)^{-1}]$, and $\theta_n=1$ on $[n^{-1},\infty)$. Put $\chi_n(x)=\eta_n(|x|)\theta_n(\operatorname{dist}(x,U^c))$ on $U$, extend it by zero outside $U$, and use $\theta_n\equiv1$ when $U=\mathbb R^d$. The norm and distance functions are Lipschitz, so $\chi_n$ is Lipschitz, equals one on $K_n$, and has compact support inside $U$. [F1, F3, construct]

2.1 Define $b_n=\chi_n b$ and $\sigma_n=\chi_n\sigma$ on $U$, extended by zero outside $U$. On a compact neighborhood of their support the original coefficients are bounded and locally Lipschitz; a finite subcover gives a uniform local Lipschitz constant there. Their products with $\chi_n$ are therefore locally Lipschitz, including at the support boundary where the cutoff vanishes. A compactly supported locally Lipschitz map on $\mathbb R^d$ is globally Lipschitz: use a finite cover and a Lebesgue number for nearby pairs, and boundedness divided by that Lebesgue number for pairs farther apart. Thus $b_n,\sigma_n$ are globally Lipschitz and have linear growth. [F1, step 1.1, given]

3.1 By [F2], each truncated equation with coefficients $b_n,\sigma_n$ and initial value $\xi$ has a unique global strong solution $Z^n$. If $K_n=\varnothing$, take its exit time to be zero; otherwise stop at the first exit $\tau_n$ from $\operatorname{int}K_n$. For $k\ge n$, stop $Z^n,Z^k$ at the first time either leaves $\operatorname{int}K_n$. Before that stop both states lie in $K_n$, where both truncations equal $b,\sigma$. [F1, F2, step 2.1]

4.1 Let $D=Z^n-Z^k$ up to the common stop $\tau$, and put $v(t)=\mathbb E\sup_{s\le t}|D_{s\wedge\tau}|^2$, finite by [F2]. Write a finite-energy matrix integral coordinatewise as $M^i_s=\sum_{j=1}^m\int_0^sG^{ij}_u\,dW^j_u$. Since $|\sum_j a_j|^2\le m\sum_j|a_j|^2$ by [F6], summing the scalar bounds [F4] gives $\mathbb E\sup_{s\le t}|M_s|^2\le4m\mathbb E\int_0^t\|G_u\|_F^2du$. Apply this to $G_u=1_{\{u\le\tau\}}(\sigma(u,Z^n_u)-\sigma(u,Z^k_u))$; boundedness on $K_n$ gives finite energy. The common coefficient Lipschitz constant $L_n$ on $K_n$, [F5], and $D_0=0$ now give $$v(t)\le(2TL_n^2+8mL_n^2)\int_0^t v(s)\,ds.$$ With $C_n=2TL_n^2+8mL_n^2$, the continuous majorant $V(t)=C_n\int_0^t v(s)ds$ satisfies $v\le V$ and $V(t)\le C_n\int_0^t V(s)ds$, so [F7] gives $V=v=0$. Hence the truncated solutions agree until either exits $K_n$; continuity makes those exit times equal, and $Z^k$ stopped at $\tau_n$ equals $Z^n$ stopped there. [F1, F2, F4, F5, F6, F7, step 3.1, algebra]

5.1 The stopped family $X^{(n)}:=Z^n_{\cdot\wedge\tau_n}$ is compatible by step 4.1 and satisfies the stopped integral equation because each cutoff equals the original coefficients on $K_n$. The exit times increase, since the compact sets are nested and the paths agree up to each earlier exit. Since $\bigcup_n\operatorname{int} K_n=U$, its lifetime $\zeta=\lim_n\tau_n$ and common values before $\zeta$ give a local strong solution in the sense of [F1]. For any two local solutions, their $K_n$-stopped path suprema are bounded by $|\xi|+n$ and hence are square-integrable; the same difference estimate therefore proves equality up to the minimum of their lifetimes. AC is exactly [A1]. [A1, F1, step 4.1] ∎
