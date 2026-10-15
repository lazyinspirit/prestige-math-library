---
id: pthm-td-ornstein-uhlenbeck-thermal-fluctuations
kind: physics-theorem
title: "Thermal fluctuations in the specified linear harmonic bath model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps: [post-td-linear-ornstein-uhlenbeck-bath, thm-tdmath-ornstein-uhlenbeck-model, def-tdmath-ornstein-uhlenbeck-equation]
dependency_roles:
  post-td-linear-ornstein-uhlenbeck-bath: physical-assumption
  thm-tdmath-ornstein-uhlenbeck-model: mathematical-premise
  def-tdmath-ornstein-uhlenbeck-equation: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional predictions of the specified one-dimensional linear Ornstein-Uhlenbeck model after stationary Gaussian preparation; not empirical claims and not general laws for arbitrary baths."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 2.1 and 5.2.2 on the overdamped Brownian model and driven harmonic traps."
---

## Statement

Under [[post-td-linear-ornstein-uhlenbeck-bath]], prepare $X_0\sim N(0,V)$ independently of future Brownian increments, where $V=k_{\mathrm B}T_b/k$. Then the conditional linear model has stationary covariance $C(\tau)=Ve^{-\mu k|\tau|}$. With angular-frequency convention $S(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(\tau)e^{i\omega\tau}\,d\tau$, its spectrum is $S(\omega)=\mu k_{\mathrm B}T_b/(\pi[(\mu k)^2+\omega^2])$. For every averaging time $T>0$, $\operatorname{Var}(T^{-1}\int_0^T X_t\,dt)\le 2k_{\mathrm B}T_b/(\mu k^2T)$. These are model predictions, not reported observations.

## Facts & Assumptions

**Given:** The postulated harmonic potential, fixed temperature, positive mobility/stiffness, Einstein relation, and stationary Gaussian initial law.

[A1] [[post-td-linear-ornstein-uhlenbeck-bath]]: $\gamma=\mu k>0$, $\sigma^2=2\mu k_{\mathrm B}T_b$, and the stochastic differential is interpreted by the supplied integral equation.

[F1] [[thm-tdmath-ornstein-uhlenbeck-model]]: actual current carrier status is draft; its inspected statement assumes the Brownian filtration and initial-data conditions of [[def-tdmath-ornstein-uhlenbeck-equation]], and for $V=\sigma^2/(2\gamma)$ gives stationary covariance $Ve^{-\gamma|\tau|}$, spectrum $V\gamma/[\pi(\gamma^2+\omega^2)]$, and time-average variance at most $2V/(\gamma T)$.

## Proof

**Given:** [A1], [F1], $T_b,k,\mu>0$, and $X_0\sim N(0,k_{\mathrm B}T_b/k)$ independent of future increments.

1.1 The physical postulate gives $V=\sigma^2/(2\gamma)=(2\mu k_{\mathrm B}T_b)/(2\mu k)=k_{\mathrm B}T_b/k$. This has units of square metres because $k_{\mathrm B}T_b$ is joules and $k$ is joules per square metre. [A1, given, algebra]

2.1 The inspected mathematical supplier's stationary clause applies with this $V$ and $\gamma=\mu k$, so $C(\tau)=Ve^{-\mu k|\tau|}$ and $S(\omega)=V\mu k/[\pi((\mu k)^2+\omega^2)]=\mu k_{\mathrm B}T_b/[\pi((\mu k)^2+\omega^2)]$. [F1, step 1.1]

3.1 The same supplier's time-average bound becomes $2V/(\gamma T)=2k_{\mathrm B}T_b/(\mu k^2T)$. All three formulas are conditional deductions of the adopted model; no apparatus, observed value, or measured uncertainty is asserted. [A1, F1, step 1.1, step 2.1] ∎
