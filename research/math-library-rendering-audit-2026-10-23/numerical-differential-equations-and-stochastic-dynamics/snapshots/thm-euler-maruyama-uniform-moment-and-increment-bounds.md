---
id: thm-euler-maruyama-uniform-moment-and-increment-bounds
kind: theorem
title: "Euler–Maruyama uniform moments and interpolation increments"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-euler-maruyama
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - lem-euler-maruyama-one-step-moment-and-increment-estimates
  - def-axiom-of-choice
  - def-d-dimensional-brownian-motion
  - def-ito-integral-for-square-integrable-predictable-processes
  - def-progressively-measurable-and-predictable-process
  - lem-square-integrable-predictable-step-ito-integral-is-finite-sum
  - lem-exponential-dominates-one-plus-x
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, §1 and §2"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
---

## Statement

Assume the coefficient, filtered Brownian-motion, and initial-value
hypotheses of [[alg-euler-maruyama]] on a uniform grid with $0<h\le1$ and
$N=T/h\in\mathbb N$, with $\mathbb E|X_0|^p<\infty$ for a fixed finite
$p\ge2$. Let $Y_k$, $\bar Y$,
and $Y_t$ be the recursion, step process, and continuous interpolation of
[[def-euler-maruyama-step-process-and-continuous-interpolation]]. Then the
step process has a predictable representative, the interpolation formula
is well-defined, and $Y$ is adapted and continuous. There is a constant
$C_{p,T,L,K,d,m}$ independent of $h$ such that
$$\max_{0\le k\le N}\mathbb E|Y_k|^p+\sup_{0\le t\le T}\mathbb E|\bar Y_t|^p+\sup_{0\le t\le T}\mathbb E|Y_t|^p\le C_{p,T,L,K,d,m}(1+\mathbb E|X_0|^p).$$
For every $t\in[0,T]$,
$$\mathbb E|Y_t-\bar Y_t|^2\le C_{T,K,d,m}h(1+\mathbb E|X_0|^2).$$
These are pointwise-in-time moment bounds; no claim is made about
$\mathbb E\sup_{t\le T}|Y_t|^p$. The estimates hold under the shared
half-Hölder time-modulus contract, although this proof uses only the
uniform linear-growth bound and the Brownian increment assumptions.

## Facts & Assumptions

**Given:** The Axiom of Choice; finite $d,m$; $T>0$; $0<h\le1$ with
$N=T/h$ a positive integer; the coefficient assumptions of
[[alg-euler-maruyama]]; an adapted standard $m$-dimensional Brownian motion
whose increments are independent of the current filtration; and an
$\mathcal F_0$-measurable $X_0$ with $\mathbb E|X_0|^p<\infty$.

[F1] The recursion step is
$Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)(W_{t_{k+1}}-W_{t_k})$.
[[alg-euler-maruyama]]

[L2] A single step satisfies the conditional p-moment and interpolation
increment estimates under the stated linear-growth bound.
[[lem-euler-maruyama-one-step-moment-and-increment-estimates]]

[L1] The step process and continuous interpolation use the left endpoint
$Y_k$ on each interval, with the continuous formula
$Y_t=Y_k+b(t_k,Y_k)(t-t_k)+\sigma(t_k,Y_k)(W_t-W_{t_k})$.
[[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F2] For every real $u$, $1+u\le\exp(u)$.
[[lem-exponential-dominates-one-plus-x]]

[F3] A finite-step predictable integrand with square-integrable coefficients
has an Itô integral version equal to its finite sum, even when those
coefficients are unbounded.
[[lem-square-integrable-predictable-step-ito-integral-is-finite-sum]]

[F4] Brownian increments of length $r$ have law $N_m(0,rI_m)$.
[[def-d-dimensional-brownian-motion]]

[F5] Predictable square-integrable coefficient processes have well-defined
finite-coordinate Itô integrals; predictable step processes use the
left-endpoint filtration convention.
[[def-progressively-measurable-and-predictable-process]]
[[def-ito-integral-for-square-integrable-predictable-processes]]

[A1] The Axiom of Choice is included only because the Brownian-motion and
Itô-integral interfaces in [F3] and [F4] adopt it. No arbitrary-index
choice is used in the moment or increment estimates.
[[def-axiom-of-choice]]

## Proof

1.1 The recursion starts from $X_0\in L^p$. If $Y_k$ is $\mathcal F_{t_k}$-measurable and in $L^p$, the one-step estimate [L2] applies with $U=Y_k$ and $\delta=h$, so $Y_{k+1}$ is in $L^p$. Since $W_{t_{k+1}}-W_{t_k}$ is measurable at $t_{k+1}$ and independent of $\mathcal F_{t_k}$, the recursion also makes $Y_{k+1}$ $\mathcal F_{t_{k+1}}$-measurable. Induction gives adapted grid values with finite $p$th moments. [F1, F4, L2, given, algebra]

2.1 In particular the grid values are square-integrable. On each interval, $\bar Y^-_s=Y_k$ and the coefficient vectors $b(t_k,Y_k)$ and $\sigma_{\cdot j}(t_k,Y_k)$ are $\mathcal F_{t_k}$-measurable. The growth bound gives $E\int_0^T\bigl(|b(\eta_h^-(s),\bar Y^-_s)|^2+\|\sigma(\eta_h^-(s),\bar Y^-_s)\|_F^2\bigr)ds\le K^2\sum_{k=0}^{N-1}h(1+E|Y_k|^2)<\infty.$ Each scalar coordinate integrand is therefore predictable and square-integrable, although its coefficients need not be bounded. By [F3], its Itô integral has the finite-sum version; the ordinary drift integral is the corresponding finite sum as well. These are exactly the recursion and interpolation formulas in [L1]. For each $t\in[t_k,t_{k+1}]$, $Y_k$ is $\mathcal F_t$-measurable and $W_t-W_{t_k}$ is $\mathcal F_t$-measurable, so the interpolation is adapted. Brownian path continuity and the endpoint recursion make it continuous. [F3, F5, L1, L2, step 1.1, given, algebra]

2.2 Put $u_k=\mathbb E|Y_k|^p$. The one-step estimate [L2] gives $u_{k+1}\le(1+C_ph)u_k+C_ph$, hence $1+u_{k+1}\le(1+C_ph)(1+u_k)$. Iteration and [F2] yield $1+u_k\le(1+C_ph)^k(1+u_0)\le\exp(C_pkh)(1+\mathbb E|X_0|^p)\le\exp(C_pT)(1+\mathbb E|X_0|^p)$. This bound is uniform in $k$ and $h$. [F1, F2, L2, step 1.1, algebra]

3.1 For $t\in[t_k,t_{k+1})$, apply [L2]'s first one-step estimate with $U=Y_k$ and $\delta=t-t_k\le h$ to obtain $\mathbb E|Y_t|^p\le(1+C_p\delta)\mathbb E|Y_k|^p+C_p\delta$. The step process equals $Y_k$ there. The grid estimate from step 2.2 therefore gives the two asserted uniform pointwise moment bounds; at $T$, $Y_T=\bar Y_T=Y_N$ is covered by the grid bound. [L1, L2, step 2.2, algebra]

3.2 With $p=2$, [L2]'s second one-step estimate gives $\mathbb E(|Y_t-\bar Y_t|^2\mid\mathcal F_{t_k})\le C_{2,m,K}(t-t_k)(1+|Y_k|^2)$ on each grid interval. Taking expectations, using step 2.2, and using $t-t_k\le h$ proves $\mathbb E|Y_t-\bar Y_t|^2\le C_{T,K,d,m}h(1+\mathbb E|X_0|^2)$. At grid endpoints the difference is zero by [L1]. [L1, L2, step 2.2, algebra]

4.1 The induction and estimates use only finite Brownian increments and the explicitly given hypotheses; [A1] is inherited from the interfaces, not spent as a choice principle. A conclusion for a larger $p$ requires $X_0\in L^p$; it does not follow from $X_0\in L^2$ alone. [A1, given, step 2.2, step 3.1, step 3.2] ∎

## Remarks

The half-Hölder time modulus is retained because this pair shares its
coefficient contract with later Euler error results. The present moment and
increment estimates do not use that modulus, and they do not imply a strong
or weak convergence rate.
