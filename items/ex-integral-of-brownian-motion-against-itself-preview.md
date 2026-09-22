---
id: ex-integral-of-brownian-motion-against-itself-preview
kind: example
title: "Integral of Brownian motion against itself"
status: published
origin: pipeline
deps: [def-progressively-measurable-and-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes, thm-ito-isometry-and-linearity-in-predictable-l2, thm-ito-integral-process-has-a-continuous-martingale-version, def-brownian-motion, thm-dominated-convergence, thm-fatou-lemma, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-gaussian-even-moment-bound-for-brownian-increments, cor-deterministic-ito-integrals-are-gaussian, def-standard-normal-and-normal-laws, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, equation (3.8)"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume AC and (H) of [[def-elementary-predictable-brownian-integrand]].
Let $B$ be standard Brownian motion. In the integrand, $B$ means the
predictable representative $\beta$ constructed below, agreeing with $B$ at
all times on one measurable full event. This convention does not assert
predictability of the original joint map on its exceptional paths.
Then
$$\int_0^t\beta_s\,dB_s=\frac{B_t^2-t}{2}\quad\hbox{almost surely for every }t\ge0.$$
For the continuous adapted version of the integral, equality holds for every
time on one measurable probability-one event. Its mean is zero and its
variance is $t^2/2$. For $t>0$ its terminal law is not the law of an Ito
integral of a deterministic square-integrable integrand; at $t=0$ both are
zero.

## Facts & Assumptions

**Given:** AC, (H) and $B$ as in the Example; a fixed horizon $t>0$ when a finite grid is used.

[F1] The predictable sigma-algebra contains $(u,v]\times A$, $A\in\mathcal F_u$, and $\{0\}\times A$, $A\in\mathcal F_0$. Countable pointwise limits of measurable real functions, with zero assigned where no finite limit exists, are measurable. Predictable processes are product measurable. [[def-progressively-measurable-and-predictable-process]]

[F2] Brownian paths are continuous and start at zero on a common measurable full event. Under (H), $B_v-B_u$ is independent of $\mathcal F_u$ and has law $N(0,v-u)$. The second and fourth Gaussian moments are $EB_t^2=t$ and $EB_t^4=3t^2$. [[def-brownian-motion]] [[def-elementary-predictable-brownian-integrand]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] The predictable finite-energy integral extends bounded elementary sums isometrically and has mean zero. It has an adapted continuous version, with continuity and all-time equalities understood on measurable full events. [[def-ito-integral-for-square-integrable-predictable-processes]] [[def-ito-integral-of-an-elementary-predictable-process]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-ito-integral-process-has-a-continuous-martingale-version]]

[F4] Tonelli computes nonnegative product integrals; dominated convergence gives integral convergence under one integrable majorant; Fatou bounds the integral of a nonnegative lower limit. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-dominated-convergence]] [[thm-fatou-lemma]]

[F5] For the dyadic partitions of a fixed $[0,t]$, the terminal sums of squared Brownian increments converge almost surely to $t$. Only this terminal consequence is used here. [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]]

[F6] Deterministic square-integrable integrands have centered normal integral laws, including the variance-zero point mass. A positive-variance normal law has a strictly positive density everywhere on the real line. Full AC is inherited by these Brownian, conditional-expectation and integral interfaces. [[cor-deterministic-ito-integrals-are-gaussian]] [[def-standard-normal-and-normal-laws]] [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 For each $n\ge1$, set $L^n_0=B_0$ and $L^n_s=B_{k2^{-n}}$ on $(k2^{-n},(k+1)2^{-n}]$, $k=0,1,\ldots$. Each $L^n$ is predictable by the countable interval generators in [F1]; the coefficients need not be bounded to give measurability. Define $\beta_s=\lim_n L^n_s$ wherever this limit exists as a finite real number, and zero elsewhere. The convergence set is measurable by the countable Cauchy criterion, hence $\beta$ is predictable by [F1]. On the single full event of continuous Brownian paths the left grid points tend to $s$ for every $s>0$, so $\beta_s=B_s$ simultaneously for all $s\ge0$. No membership of that full event in $\mathcal F_0$ is needed, and the limiting map is never defined by multiplying B by that event. [F1, F2, given]

2.1 In particular for every fixed $s$, $E\beta_s^2=EB_s^2=s$. Tonelli in [F4] applies to the measurable nonnegative map $\beta^2$ and gives $E\int_0^t\beta_s^2ds=t^2/2$. For the dyadic grid $t_k=kt/2^n$ put $H^n_s=\sum_{k<2^n}B_{t_k}1_{(t_k,t_{k+1}]}(s)$. This is predictable, and its finite energy follows from $EB_{t_k}^2=t_k$. By deterministic-time equality of $\beta_s$ and $B_s$, [F2] and Tonelli give $$E\int_0^t|H^n_s-\beta_s|^2ds=\sum_k\int_{t_k}^{t_{k+1}}(s-t_k)ds=\frac{t^2}{2^{n+1}}.$$ Thus the integrals of $H^n$ converge in $L^2(P)$ to the integral of $\beta$ by [F3]. [F1, F2, F3, F4, step 1.1]

3.1 Fix $n$ and truncate the coefficient $B_{t_k}$ to $c_r(B_{t_k})$, where $c_r(x)=\max(-r,\min(x,r))$, to obtain bounded elementary $H^{n,r}$. Dominated convergence applies to each coefficient error squared, bounded by $B_{t_k}^2$ and tending to zero. Hence $H^{n,r}\to H^n$ in predictable $L^2$. For each increment $\Delta_k B=B_{t_{k+1}}-B_{t_k}$, independence in [F2] gives $$E|(c_r(B_{t_k})-B_{t_k})\Delta_k B|^2=(t_{k+1}-t_k)E|c_r(B_{t_k})-B_{t_k}|^2\longrightarrow0.$$ The finite sum therefore converges in $L^2$ by the triangle inequality. Comparing this with the isometric convergence of the elementary integrals proves $$\int_0^tH^n_s\,dB_s=S_n:=\sum_kB_{t_k}\Delta_k B$$ in $L^2(P)$. This explicitly licenses unbounded step coefficients without calling them elementary. [F2, F3, F4, step 2.1]

4.1 Finite telescoping gives $2S_n=B_t^2-B_0^2-\sum_k(\Delta_k B)^2$. Since $B_0=0$ almost surely, [F5] implies $S_n\to Y_t=(B_t^2-t)/2$ almost surely. Write $I_t$ for the integral class of $\beta$. Steps 2.1 and 3.1 give $E|I_t-S_n|^2\to0$, whereas Fatou in [F4] gives $E|I_t-Y_t|^2\le\liminf_nE|I_t-S_n|^2=0$. Thus $I_t=Y_t$ almost surely. [F2, F4, F5, step 2.1, step 3.1]

5.1 Choose the continuous adapted integral version supplied by [F3]. Intersect its continuity event, the common Brownian continuity and zero-start event, and the equality events of step 4.1 for all positive rational t. This is a measurable full event; continuity of both sides extends the equality from rational to all nonnegative real times. At time zero the integral is zero and $B_0=0$ on this event. No claim is made that the identity holds on every exceptional constant Brownian path, or that the entire all-time equality set must itself be measurable in an incomplete space. [F2, F3, step 1.1, step 4.1]

6.1 By [F3] the mean is zero. By [F2], $$E Y_t^2=\tfrac14(EB_t^4-2tEB_t^2+t^2)=t^2/2,$$ in agreement with the isometry and step 2.1. For $t>0$ this variance is positive, while $Y_t\ge-t/2$. Every centered normal with positive variance gives positive probability to an interval below $-t/2$, because its density there is positive; a zero-variance normal has zero variance. Thus [F6] rules out a deterministic-integrand law for $t>0$. At $t=0$ both sides vanish and there is no such non-Gaussian claim. Finite grids include both endpoints, and n can start at 1 without changing any limit. Full AC covers [F6]; the predictable representative and grids are explicit and no additional choice of paths is made. No later Ito formula is used. [F2, F3, F6, step 2.1, step 4.1, step 5.1] ∎

## Source notes

Lawler's equation (3.8) gives the identity. The argument here derives it from
bounded truncations, the predictable left-grid representative, and terminal
dyadic quadratic variation, respecting the page's forward-reference boundary.
