---
id: lem-brownian-ito-integral-bdg-moment-bound
kind: lemma
title: "Lp maximal moment bound for Brownian Itô integrals"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-doob-lp-maximal-inequality
  - cor-absolute-value-and-powers-of-a-martingale-are-submartingales
  - thm-monotone-convergence-for-the-integral
  - thm-stopping-an-ito-integral
  - def-continuous-time-stopping-time
  - thm-holder-inequality-for-integrals
  - thm-fatou-lemma
  - def-continuous-brownian-ito-process
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, proof of Theorem 4.4"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Statement

Assume AC and the usual filtered Brownian conventions of
[[def-continuous-brownian-ito-process]]. Let $G$ be a predictable
$d\times m$ matrix process on $[0,T]$ with
$$\mathbb E\left(\int_0^T\|G_s\|_F^2\,ds\right)^{p/2}<\infty$$
for some real $p\ge2$, and let $M_t=\int_0^tG_s\,dW_s$ be its continuous
vector Itô integral. There is a finite constant $C_{p,d}$, independent of
$G$ and $T$, such that
$$\mathbb E\sup_{0\le t\le T}|M_t|^p\le C_{p,d}\, \mathbb E\left(\int_0^T\|G_s\|_F^2\,ds\right)^{p/2}.$$

## Facts & Assumptions

**Given:** AC, finite $d,m$, a usual filtered Brownian space, a predictable matrix integrand $G$, and the finite $p/2$ moment of its quadratic energy.

[F1] The multidimensional Itô formula applies to each stopped real coordinate $M^i$, driven by the $m$-dimensional Brownian motion. For $f(x)=|x|^p$, $p\ge2$, one has $f\in C^2(\mathbb R)$ and $f''(x)=p(p-1)|x|^{p-2}$, with the continuous value $f''(0)=2$ when $p=2$ and $f''(0)=0$ when $p>2$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F2] For a martingale $M$, $|M|$ is a submartingale; for a nonnegative submartingale $Z$ with $Z_N\in L^p$, Doob's finite time inequality gives $\|\max_{k\le N}Z_k\|_p\le \frac p{p-1}\|Z_N\|_p$. [[cor-absolute-value-and-powers-of-a-martingale-are-submartingales]] [[thm-doob-lp-maximal-inequality]]

[F3] Stopping a finite-energy Brownian Itô integral at a stopping time gives the integral of the stopped predictable integrand; a stopping time satisfies $\{\tau\le t\}\in\mathcal F_t$. [[thm-stopping-an-ito-integral]] [[def-continuous-time-stopping-time]]

[F4] A continuous Brownian Itô process has an adapted continuous version and its finite-energy stochastic integral is a martingale. [[def-continuous-brownian-ito-process]]

[F5] Hölder's inequality with conjugate exponents $p/(p-2)$ and $p/2$ (for $p>2$), and its $p=2$ endpoint, gives $\mathbb E[S^{p-2}Q]\le(\mathbb ES^p)^{(p-2)/p}(\mathbb EQ^{p/2})^{2/p}$ for nonnegative $S,Q$. [[thm-holder-inequality-for-integrals]]

[F6] On nested dyadic grids that include $T$, continuity makes the grid maxima increase to the path supremum; monotone convergence passes the expectations to that supremum. [[thm-monotone-convergence-for-the-integral]]

[F7] Fatou's lemma passes a uniform bound on nonnegative stopped path suprema to their almost-sure limit. [[thm-fatou-lemma]]

[A1] AC is inherited from the Brownian and Itô-integral interfaces; no choice is made in this estimate. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions in the Statement.

1.1 For each coordinate $i$, set $M^i_t=\sum_{j=1}^m\int_0^tG^{ij}_s\,dW^j_s$, $Q_i(t)=\int_0^t\sum_j|G^{ij}_s|^2ds$, and $M_i^*(t)=\sup_{u\le t}|M^i_u|$. Stop at $\rho_R=\inf\{t:Q_i(t)\vee M_i^*(t)\ge R\}\wedge T$, for $R>0$. These processes are continuous and adapted, and $\{\rho_R\le t\}=\{Q_i(t)\vee M_i^*(t)\ge R\}$ for $t<T$, so $\rho_R$ is a stopping time [[def-continuous-time-stopping-time]]. The stopped process is a continuous square-integrable martingale by [F3]–[F4], its quadratic energy is bounded by $R$, and its path supremum is bounded by $R$. Apply [F2] to $|M^i|$ sampled on nested dyadic grids including $T$. By [F6], the grid maxima increase to the path supremum and monotone convergence passes the discrete bounds to $S_i(R):=\mathbb E\sup_{t\le T}|M^i_{t\wedge\rho_R}|^p\le q^p\mathbb E|M^i_{T\wedge\rho_R}|^p$, where $q=p/(p-1)$. [F2, F3, F4, F6, given]

2.1 Apply [F1] to the stopped coordinate process. The stochastic term has mean zero because its integrand is bounded by the stopping level and has finite energy. Put $U_i(R)=\sup_{t\le T}|M^i_{t\wedge\rho_R}|$. The Hessian term is bounded by $\frac{p(p-1)}2U_i(R)^{p-2}Q_i(R)$, where $Q_i(R)=\int_0^{T\wedge\rho_R}\sum_j|G^{ij}_s|^2ds$. Therefore $S_i(R)\le q^p\frac{p(p-1)}2\,\mathbb E[U_i(R)^{p-2}Q_i(R)]$. For $p=2$, interpret $U_i(R)^0=1$, giving $S_i(R)\le C_2\mathbb E Q_i(R)$. For $p>2$, [F5] gives $S_i(R)\le C_pS_i(R)^{(p-2)/p}\bigl(\mathbb E Q_i(R)^{p/2}\bigr)^{2/p}$. [F1, F5, step 1.1, algebra]

3.1 For $p=2$, step 2.1 gives the coordinate estimate. For $p>2$, if $S_i(R)=0$ it is immediate; otherwise divide the bound in step 2.1 by $S_i(R)^{(p-2)/p}$ and raise to the power $p/2$. In both cases $S_i(R)\le C_p\mathbb E Q_i(R)^{p/2}\le C_p\mathbb E(\int_0^T\|G_s\|_F^2ds)^{p/2}$. Since $|M_t|\le\sqrt d\max_i|M^i_t|$, summing the coordinate estimates gives the required bound for the stopped vector integral with constant $C_{p,d}$. [step 2.1, given, algebra]

4.1 As $R\to\infty$, finite pathwise energy and continuity make $\rho_R=T$ eventually almost surely. By [F7], Fatou's lemma passes the uniform bound of step 3.1 to $\mathbb E\sup_{t\le T}|M_t|^p$. The constant depends only on $p,d$. AC is exactly the inherited assumption [A1]. [A1, F3, F7, step 3.1, given] ∎
