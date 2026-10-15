---
id: def-linear-gaussian-state-space-model-with-independent-noises
kind: definition
title: Linear-Gaussian state-space models with independent noises
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-general-state-space-model-by-kernels
  - def-independent-random-elements
  - def-multivariate-normal-law
justified_by:
  - thm-linear-gaussian-state-space-path-law-is-jointly-gaussian
axiom_use: Assume AC for the multivariate-normal laws with arbitrary positive-semidefinite covariance matrices. The local path-law theorem also uses AC through the characteristic-function uniqueness and Cramer–Wold suppliers; no additional choice is used in finite product construction.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Spring 2015 lecture notes"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Assume AC ([[def-axiom-of-choice]]) and fix a finite horizon $T\ge0$. Let
the state dimension at time
$t$ be a positive integer $d_t$ for $0\le t\le T$, and the observation
dimension at time $t$ be a positive integer $p_t$ for $1\le t\le T$.
Choose deterministic matrices
$F_t\in\mathbb R^{d_t\times d_{t-1}}$ and
$H_t\in\mathbb R^{p_t\times d_t}$, a mean $m_0\in\mathbb R^{d_0}$, and
symmetric positive-semidefinite matrices, meaning $v^TPv\ge0$ for every
real vector $v$ of matching dimension,
$P_0\in\mathbb R^{d_0\times d_0}$,
$Q_t\in\mathbb R^{d_t\times d_t}$, and
$R_t\in\mathbb R^{p_t\times p_t}$. A **linear-Gaussian state-space model
with independent noises** is the general finite-horizon kernel model
([[def-general-state-space-model-by-kernels]]) with initial law
$\mu_0=N_{d_0}(m_0,P_0)$ and transition and observation kernels
$$K_t(x,\cdot)=N_{d_t}(F_t x,Q_t),\qquad G_t(x,\cdot)=N_{p_t}(H_t x,R_t).$$
All Gaussian laws use the convention of
[[def-multivariate-normal-law]], which allows singular covariance matrices.

Its independent-noise representation consists of random vectors
$x_0,q_1,r_1,\ldots,q_T,r_T$ on a common probability space, with
$x_0\sim N_{d_0}(m_0,P_0)$, $q_t\sim N_{d_t}(0,Q_t)$,
$r_t\sim N_{p_t}(0,R_t)$, all mutually independent in the sense of
[[def-independent-random-elements]] (their generated sigma-algebras are
independent), and equations
$$x_t=F_t x_{t-1}+q_t,\qquad y_t=H_t x_t+r_t\qquad(1\le t\le T).$$
The local path-law theorem proves that every allowed parameter tuple has
such a finite representation, that its induced kernels are the displayed
$K_t,G_t$, and that its path law is the general kernel-product law.

This definition imposes the stated noise law and independence assumptions;
it does not establish their empirical adequacy. It supplies no filtering
algorithm, posterior recursion, or convergence claim. Any separate formula
that inverts an observed innovation covariance must assume that covariance is
positive definite at the point of inversion.
