---
id: lem-stopping-time-ito-step-interval-sum
kind: lemma
title: Itô integral of a step on a stopping-time interval
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-brownian-motion
  - lem-continuous-adapted-process-at-bounded-stopping-time
  - def-continuous-time-stopping-time
  - def-progressively-measurable-and-predictable-process
  - def-ito-integral-for-square-integrable-predictable-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - lem-square-integrable-predictable-step-ito-integral-is-finite-sum
  - lem-rat-embeds-dense
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Statement

Assume AC and the usual filtered-space hypotheses for the Itô integral. Let
$W$ be a scalar Brownian motion on $[0,T]$, let $0\le\tau\le\sigma\le T$ be
stopping times, and let $\xi\in L^2(\mathcal F_\tau)$. The process
$H_s=\xi\,1_{(\tau,\sigma]}(s)$ is predictable with finite energy, and its
continuous Itô-integral version satisfies
$$\int_0^t H_s\,dW_s=\xi\bigl(W_{t\wedge\sigma}-W_{t\wedge\tau}\bigr) \quad(0\le t\le T)$$
up to indistinguishability. The statement applies coordinatewise to each
entry of a matrix-valued coefficient and a finite-dimensional Brownian motion.

## Facts & Assumptions

**Given:** AC, $T>0$, a scalar Brownian motion with increments independent of the current filtration, stopping times $0\le\tau\le\sigma\le T$, and a square-integrable $\mathcal F_\tau$-measurable real random variable $\xi$.

[F1] A square-integrable predictable step integrand on a finite deterministic partition has continuous Itô integral equal to the finite sum of its left-endpoint coefficients times Brownian increments. The integral map on predictable $L^2$ is an isometry. [[lem-square-integrable-predictable-step-ito-integral-is-finite-sum]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F2] For a stopping time $\rho$, $\mathcal F_\rho$ consists of events $A$ such that $A\cap\{\rho\le t\}\in\mathcal F_t$ for each $t$; on a right-continuous filtration the equivalent strict tests also hold. [[def-continuous-time-stopping-time]]

[F3] Brownian motion is adapted and has continuous paths on one measurable full event; its evaluations at bounded stopping times are measurable at the stopped sigma-algebras. [[def-brownian-motion]] [[lem-continuous-adapted-process-at-bounded-stopping-time]]

[F4] Each finite-energy predictable integral has a continuous martingale version, and continuous versions equal at all times on one measurable probability-one event. [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[lem-rat-embeds-dense]]

[A1] AC is inherited from the Brownian and Itô-integral construction interfaces; the deterministic-grid approximation below makes no further choice. [[def-axiom-of-choice]]

## Proof

1.1 First verify that $H_s=\xi1_{(\tau,\sigma]}(s)$ is predictable pointwise. For $s>0$ and Borel $C\subseteq\mathbb R$, put $A_C=\{\xi\in C\}\in\mathcal F_\tau$. Then
$$A_C\cap\{\tau<s\}=\bigcup_{q\in\mathbb Q\cap[0,s)}A_C\cap\{\tau\le q\}\in\mathcal F_s,$$
and $\{\sigma\ge s\}=\{\sigma<s\}^c\in\mathcal F_s$, since $\{\sigma<s\}=\bigcup_{q\in\mathbb Q\cap[0,s)}\{\sigma\le q\}$. With $E_s=\{\tau<s\}\cap\{\sigma\ge s\}$, both $E_s$ and $A_C\cap E_s$ belong to $\mathcal F_s$. The preimage $\{H_s\in C\}$ is $A_C\cap E_s$ if $0\notin C$, and $(A_C\cap E_s)\cup E_s^c$ if $0\in C$; thus it belongs to $\mathcal F_s$. Thus $H$ is adapted. Its paths are left-continuous and $H_0=0$. On the nested deterministic grids $t_j^{(r)}=jT2^{-r}$, define $P^{(r)}_0=0$ and $P^{(r)}_s=H_{t_j^{(r)}}$ on each cell $(t_j^{(r)},t_{j+1}^{(r)}]$. Each $P^{(r)}$ is predictable by [F2]; the left endpoints of the cells containing any fixed $s>0$ increase to $s$ from below, so left-continuity gives $P^{(r)}_s\to H_s$. Hence $H$ is a pointwise limit of predictable processes and is predictable. Now let $\delta_n=T2^{-n}$, and round each stopping time upward to the next point of this deterministic grid: $\tau_n=\delta_n\lceil\tau/\delta_n\rceil$ and $\sigma_n=\delta_n\lceil\sigma/\delta_n\rceil$. The stopping-time test shows these are finite-valued stopping times, $\tau_n\le\sigma_n$, $\tau_n\downarrow\tau$, and $\sigma_n\downarrow\sigma$. On a grid cell $(t_k,t_{k+1}]$, the process $H^n=\xi1_{(\tau_n,\sigma_n]}$ has coefficient $\xi1_{\{\tau_n\le t_k<\sigma_n\}}$. This coefficient is $\mathcal F_{t_k}$-measurable: the active event is in $\mathcal F_{t_k}$, and $\xi$ restricted to $\{\tau_n\le t_k\}=\{\tau\le t_k\}$ is $\mathcal F_{t_k}$-measurable by [F2]. Thus $H^n$ is a finite predictable step process. [F2, given, construct]

1.2 The intervals $(\tau_n,\sigma_n]$ and $(\tau,\sigma]$ differ in Lebesgue measure by at most $2\delta_n$ on each path. Hence $\mathbb E\int_0^T|H^n_s-H_s|^2ds\le 2\delta_n\mathbb E|\xi|^2\longrightarrow0.$ Also $\mathbb E\int_0^TH_s^2ds=\mathbb E[|\xi|^2(\sigma-\tau)]\le T\mathbb E|\xi|^2<\infty$. The predictable $L^2$ space is closed under almost-everywhere limits: since the displayed squared errors are summable in $n$, Tonelli implies $H^n\to H$ for $dt\otimes P$-almost every $(s,\omega)$; therefore $H$ has a predictable representative. [F1, given, algebra]

2.1 Apply [F1] to the deterministic-grid representation of $H^n$. The active cells are consecutive, so their finite sum telescopes and gives $\int_0^tH^n_s\,dW_s=\xi\bigl(W_{t\wedge\sigma_n}-W_{t\wedge\tau_n}\bigr)$ almost surely for every fixed $t$. By the isometry in [F1] and step 1.2 the left side converges in $L^2$ to $\int_0^tH_s\,dW_s$. By [F3], path continuity and the endpoint convergence imply that the right side converges almost surely to $\xi(W_{t\wedge\sigma}-W_{t\wedge\tau})$. Uniqueness of limits in probability identifies the two limits almost surely. [F1, F3, step 1.2]

3.1 Apply step 2.1 at the countable dense set of rational times in $[0,T]$ and intersect those measurable probability-one events with the continuity events from [F3] and [F4]. The two continuous processes then agree at every time on that one event. If $\tau=\sigma$, both sides vanish; $\tau=0$, $\sigma=T$, and $t=0$ are included by the same formula. AC is used only through [A1]. [A1, F3, F4, step 2.1, given] ∎
