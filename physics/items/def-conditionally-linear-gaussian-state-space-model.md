---
id: def-conditionally-linear-gaussian-state-space-model
kind: definition
title: Conditionally linear-Gaussian state-space model
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-general-state-space-model-by-kernels
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-state-space-filtering-laws
axiom_use: Assume AC through the Gaussian-law and finite-horizon conditional-kernel conventions. The definition makes no additional selection.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 7, §7.5"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 11, §11.4"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Fredrik Lindsten, Pete Bunch, Simo Särkkä, Thomas B. Schön, and Simon J. Godsill, Rao-Blackwellized particle smoothers for conditionally linear Gaussian models, §3.2"
      url: "https://arxiv.org/pdf/1505.06357"
verification:
  precheck: n/a
---

## Definition

Assume AC. Let $Z_t$ take values in a standard-Borel space
$(\mathsf Z_t,\mathcal Z_t)$ and let $U_t\in\mathbb R^{d_t}$ for a finite
horizon $0\le t\le T$, where each $d_t$ is a positive integer. For
$1\le t\le T$, let $Y_t\in\mathbb R^{p_t}$ with each $p_t$ a positive
integer; observations begin at time $1$. The nonlinear
component has initial probability $\mu_0$ and transition probability kernels
$M_t(z_{t-1},dz_t)$; its transition does not depend on $U_{t-1}$. Given the
entire nonlinear path $z_{0:T}$, write $\mathsf Z_{0:t}=\prod_{s=0}^t\mathsf Z_s$
with its finite-product sigma-algebra and specify Borel maps
$$m_0:\mathsf Z_0\to\mathbb R^{d_0},\qquad P_0:\mathsf Z_0\to\mathbb R^{d_0\times d_0},$$
and, for $1\le t\le T$,
$$A_t:\mathsf Z_{0:t}\to\mathbb R^{d_t\times d_{t-1}},\quad Q_t:\mathsf Z_{0:t}\to\mathbb R^{d_t\times d_t},\quad C_t:\mathsf Z_{0:t}\to\mathbb R^{p_t\times d_t},\quad R_t:\mathsf Z_{0:t}\to\mathbb R^{p_t\times p_t}.$$
Require $P_0(z_0)$ and
$Q_t(z_{0:t})$ to be symmetric positive semidefinite, meaning
$v^TPv\ge0$ for every matching vector $v$, and $R_t(z_{0:t})$ to be
symmetric positive definite, meaning $v^TR_tv>0$ for every nonzero $v$. Conditional
on $Z_{0:T}=z_{0:T}$, the linear component and observations have the finite
linear-Gaussian model, with the transition and observation equations for
$1\le t\le T$:
$$U_0\sim N(m_0(z_0),P_0(z_0)),\qquad U_t=A_t(z_{0:t})U_{t-1}+\xi_t,\qquad Y_t=C_t(z_{0:t})U_t+\varepsilon_t,$$
where the centered Gaussian noises $\xi_t\sim N(0,Q_t(z_{0:t}))$ and
$\varepsilon_t\sim N(0,R_t(z_{0:t}))$ are mutually independent over time
and independent of $U_0$, under that conditional law. For every fixed path
$z_{0:T}$ these are exactly the hypotheses of
[[def-linear-gaussian-state-space-model-with-independent-noises]] with
deterministic matrices.

This hierarchical conditionally linear-Gaussian model is the input class for
the Rao–Blackwellized filter below: it samples the nonlinear path and keeps
the conditional Gaussian law of $U_t$ analytically. It does not include a
nonlinear transition whose law depends on $U_{t-1}$, nor does it assert that
the marginal nonlinear process remains Markov after conditioning on all
observations. Such models need their own marginal transition and backward
kernels. A state-space filtering or smoothing law is a data-indexed regular
conditional-distribution version as in
[[def-state-space-filtering-laws]]; no pointwise uniqueness on null data
histories is imposed.
