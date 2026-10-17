---
id: lem-brownian-ito-integral-bdg-moment-bound
kind: lemma
title: "Lp maximal moment bound for Brownian Itô integrals"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-ito-formula-one-dimensional
  - thm-doob-lp-maximal-inequality
  - thm-stopping-an-ito-integral
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

[F1] Itô's formula for a real continuous Brownian Itô process applies to $x\mapsto |x|^p$ for $p\ge2$; its second derivative is $p(p-1)|x|^{p-2}$ away from zero and the formula extends continuously at zero. [[thm-ito-formula-one-dimensional]]

[F2] For a nonnegative submartingale $Z$ with $Z_N\in L^p$, Doob's finite time inequality gives $\|\max_{k\le N}Z_k\|_p\le \frac p{p-1}\|Z_N\|_p$. [[thm-doob-lp-maximal-inequality]]

[F3] Stopping a finite-energy Brownian Itô integral at a stopping time gives the integral of the stopped predictable integrand. [[thm-stopping-an-ito-integral]]

[F4] A continuous Brownian Itô process has an adapted continuous version and its finite-energy stochastic integral is a martingale. [[def-continuous-brownian-ito-process]]

[A1] AC is inherited from the Brownian and Itô-integral interfaces; no choice is made in this estimate. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions in the Statement.

1.1 For each coordinate $i$, set $M^i_t=\sum_{j=1}^m\int_0^tG^{ij}_s\,dW^j_s$ and stop it when either $\int_0^t\sum_j|G^{ij}_s|^2ds$ or $\sup_{u\le t}|M^i_u|$ first reaches $R$. The stopped process is a continuous square-integrable martingale by [F3]–[F4], its quadratic energy is bounded by $R$, and its path supremum is bounded by $R$. Sampling on nested dyadic grids and applying [F2] to the submartingale $|M^i|$ gives $S_i(R):=\mathbb E\sup_{t\le T}|M^i_{t\wedge\rho_R}|^p\le q^p\mathbb E|M^i_{T\wedge\rho_R}|^p$, where $q=p/(p-1)$. [F2, F3, F4, given]

2.1 Apply [F1] to the stopped coordinate process. The stochastic term has mean zero because its integrand is bounded by the stopping levels and has finite energy. The Hessian term is bounded by $\frac{p(p-1)}2\sup_{t\le T}|M^i_{t\wedge\rho_R}|^{p-2}\,Q_i(R)$, where $Q_i(R)=\int_0^{T\wedge\rho_R}\sum_j|G^{ij}_s|^2ds$. Therefore $S_i(R)\le q^p\frac{p(p-1)}2\,\mathbb E\left[\sup_{t\le T}|M^i_{t\wedge\rho_R}|^{p-2}Q_i(R)\right].$ Hölder's inequality bounds the right side by $C_pS_i(R)^{(p-2)/p}\bigl(\mathbb E Q_i(R)^{p/2}\bigr)^{2/p}$. [F1, step 1.1, algebra]

3.1 If $S_i(R)=0$ the coordinate estimate is immediate. Otherwise divide the bound in step 2.1 by $S_i(R)^{(p-2)/p}$ and raise to the power $p/2$ to obtain $S_i(R)\le C_p\mathbb E Q_i(R)^{p/2}\le C_p\mathbb E(\int_0^T\|G_s\|_F^2ds)^{p/2}$. Since $|M_t|\le\sqrt d\max_i|M^i_t|$, summing the coordinate estimates gives the required bound for the stopped vector integral with constant $C_{p,d}$. [step 2.1, given, algebra]

4.1 As $R\to\infty$, finite pathwise energy and continuity make $\rho_R=T$ eventually on almost every path. Fatou's lemma applied to the stopped path suprema therefore passes the uniform bound of step 3.1 to $\mathbb E\sup_{t\le T}|M_t|^p$. The constant depends only on $p,d$. AC is exactly the inherited assumption [A1]. [A1, F3, step 3.1, given] ∎
