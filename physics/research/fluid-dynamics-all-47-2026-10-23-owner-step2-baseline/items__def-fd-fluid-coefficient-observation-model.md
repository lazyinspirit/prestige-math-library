---
id: def-fd-fluid-coefficient-observation-model
kind: definition
title: Finite coefficient observation and innovation interface
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - alg-kalman-filter
  - alg-ensemble-kalman-filter
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-axiom-of-choice
dependency_roles:
  alg-kalman-filter: mathematical-premise
  alg-ensemble-kalman-filter: mathematical-premise
  def-linear-gaussian-state-space-model-with-independent-noises: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_use: Assume AC only for the Gaussian-law realization of this finite model, as required by the supplied state-space and Gaussian-law definitions; the coefficient and observation maps themselves use no choice.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 2 §§2.1 and 2.4; Chapter 4 §§4.1 and 4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
---

## Definition

Fix a finite horizon $T\ge0$. For each integer $k$ with $0\le k\le T$, let $V_k$ be a finite-dimensional real vector space with an ordered basis $\Phi_k=(\phi_{k,1},\ldots,\phi_{k,m_k})$, where $m_k\ge1$. An ordered basis is a linearly independent spanning list. A coefficient vector $a_k=(a_{k,1},\ldots,a_{k,m_k})^T\in\mathbb R^{m_k}$ represents the trial field $u_k=\sum_{j=1}^{m_k}a_{k,j}\phi_{k,j}\in V_k$. This is a finite-dimensional representation; it does not assert that a fluid field in an untruncated model belongs to $V_k$.

For each $1\le k\le T$, choose a real linear observation map $L_k:V_k\to\mathbb R^{p_k}$, with $p_k\ge1$, and a real matrix $F_k\in\mathbb R^{m_k\times m_{k-1}}$ for the coefficient transition. The observation matrix $H_k\in\mathbb R^{p_k\times m_k}$ is defined by $[H_k]_{ij}=[L_k(\phi_{k,j})]_i$; hence $L_k(u_k)=H_ka_k$. A symmetric matrix $C$ is positive semidefinite, written $C\succeq0$, when $v^TCv\ge0$ for every vector $v$ of matching dimension, and is positive definite, written $C\succ0$, when this inequality is strict for every nonzero $v$.

For stochastic assimilation, assume the Axiom of Choice (AC), meaning every family of nonempty sets has a choice function, for the Gaussian-law construction. Choose an instance of the finite linear-Gaussian state-space model with independent noises: $a_0\sim N_{m_0}(\mu_0,P_0)$, $q_k\sim N_{m_k}(0,Q_k)$, and $r_k\sim N_{p_k}(0,R_k)$ are mutually independent, with $P_0,Q_k,R_k\succeq0$, and
$$a_k=F_ka_{k-1}+q_k,\qquad y_k=H_ka_k+r_k.$$
Here $N_d(\mu,C)$ denotes the $d$-dimensional Gaussian law with mean $\mu$ and symmetric positive-semidefinite covariance $C$, including singular $C$. For a Kalman-filter run, write $m^a_{k-1}$ and $P^a_{k-1}$ for its previous analysis mean and covariance, and define its forecast mean and covariance, innovation, and innovation covariance by
$$m^f_k=F_km^a_{k-1},\qquad P^f_k=F_kP^a_{k-1}F_k^T+Q_k,\qquad d_k=y_k-H_km^f_k,\qquad S_k=H_kP^f_kH_k^T+R_k.$$
The admissible filter inputs are those for which each innovation covariance to be solved is positive definite. The gain is the solution $K_k=P^f_kH_k^TS_k^{-1}$, computed by the supplied Cholesky solves, and the analysis outputs are $m^a_k=m^f_k+K_kd_k$ and $P^a_k=P^f_k-K_kS_kK_k^T$. The formula describes the exact target of the supplied recursion; it is not an instruction to form a matrix inverse numerically.

For a one-step perturbed-observation ensemble Kalman update, choose dimensions $m,p\ge1$, a linear observation matrix $H\in\mathbb R^{p\times m}$, a datum $y\in\mathbb R^p$, an ensemble size $N\ge2$, and a positive-definite observation covariance $\Gamma\in\mathbb R^{p\times p}$. Given forecast coefficients $\hat a^1,\ldots,\hat a^N\in\mathbb R^m$, take perturbations $\eta^i\sim N_p(0,\Gamma)$ independent across members and independent of the forecast ensemble. Define $\bar a=N^{-1}\sum_i\hat a^i$ and the divisor-$N$ covariance $C_N=N^{-1}\sum_i(\hat a^i-\bar a)(\hat a^i-\bar a)^T$. The gain and perturbed-data update are $K_N=C_NH^T(HC_NH^T+\Gamma)^{-1}$ and $a^{a,i}=\hat a^i+K_N(y+\eta^i-H\hat a^i)$. Since $C_N\succeq0$, $HC_NH^T+\Gamma\succ0$. This is the specified finite-ensemble procedure; the definition alone gives no finite-ensemble posterior-exactness claim.

In a single-window finite inverse view, a real matrix $G\in\mathbb R^{p\times m}$ maps coefficients $a\in\mathbb R^m$ to predicted observations $Ga$. A datum has the form $y=Ga+e$, where $e\in\mathbb R^p$ is its realized error and a symmetric positive-definite matrix $R\in\mathbb R^{p\times p}$ is the declared error covariance and weighting matrix. This deterministic inverse interface does not assume a probability distribution for the realized vector $e$.

Choosing a finite trial space, a linearization, or process-noise covariances is part of adopting the finite model. These choices do not show that a nonlinear fluid equation or an actual sensor is described exactly by that model.

## Definition references

[[def-linear-gaussian-state-space-model-with-independent-noises]]

[[alg-kalman-filter]]

[[alg-ensemble-kalman-filter]]

[[def-axiom-of-choice]]

[Law, Stuart, and Zygalakis, Chapter 2 §§2.1, 2.4 and Chapter 4 §§4.1, 4.2.3](https://arxiv.org/pdf/1506.07825v1)

