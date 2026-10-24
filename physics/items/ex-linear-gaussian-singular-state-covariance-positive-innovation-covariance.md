---
id: ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance
kind: example
title: Singular state covariance with positive innovation covariance
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-moments-variance-and-covariance
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - thm-linear-gaussian-state-space-path-law-is-jointly-gaussian
justified_by: []
proof_strategy: direct
axiom_use: Assume AC as required by the Gaussian model and path-law suppliers. The example uses no additional choice.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Spring 2015 lecture notes"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: pass
---

## Example

Take $T=1$ with scalar state and observation, $X_0\sim N_1(0,1)$,
$F_1=0$, $Q_1=0$, $H_1=1$, and $R_1=1$. Let
$q_1\sim N_1(0,0)=\delta_0$ and let $r_1\sim N_1(0,1)$ be independent of
$X_0$. Then $X_1=F_1X_0+q_1=0$ and
$Y_1=H_1X_1+r_1=r_1$.

With no earlier observations, define the predicted state mean
$m_{1|0}:=\mathbb E[X_1]$, the state prediction covariance
$P_{1|0}:=\operatorname{Var}(X_1)$, the observation prediction residual
$v_1:=Y_1-H_1m_{1|0}$, and its innovation covariance
$S_1:=\operatorname{Var}(v_1)$. Then $P_{1|0}$ is singular while $S_1$ is
positive definite.

## Facts & Assumptions

**Given:** The one-step scalar model in the Example.

[A1] AC is required by the multivariate-normal and finite path-law suppliers.
([[def-axiom-of-choice]])

[F1] The linear-Gaussian model permits positive-semidefinite initial,
process-noise, and observation-noise covariance matrices.
([[def-linear-gaussian-state-space-model-with-independent-noises]])

[F2] The finite linear-Gaussian path law exists and may have singular
covariance. ([[thm-linear-gaussian-state-space-path-law-is-jointly-gaussian]])

[F3] A law $N_d(m,\Sigma)$ has mean $m$ and covariance $\Sigma$;
singular covariance is allowed.
([[def-multivariate-normal-law]])

[F4] Variance of a square-integrable real random variable is its centered
second moment. ([[def-moments-variance-and-covariance]])

[F5] The finite-horizon kernel model has the ordered joint law stated in its
definition. ([[thm-finite-horizon-state-space-kernel-law-exists-uniquely]])

[F6] A scalar normal law with zero variance is the point mass at its mean.
([[def-standard-normal-and-normal-laws]])

## Verification

**Given:** $F_1=0$, $Q_1=0$, $H_1=1$, $R_1=1$, $X_0\sim N_1(0,1)$,
$q_1\sim N_1(0,0)=\delta_0$, and independent $r_1\sim N_1(0,1)$.

1.1 By [F6], $q_1\sim N_1(0,0)=\delta_0$, hence $q_1=0$ almost surely. These parameters satisfy the linear-Gaussian contract, and the finite path law exists by [F2,F5]. The recursion gives $X_1=0$, so $m_{1|0}=0$ and $P_{1|0}=\mathbb E[(X_1-m_{1|0})^2]=0$ by [F4]. The $1\times1$ zero matrix is singular. [A1, F1, F2, F4, F5, F6, given, algebra]

2.1 Since $Y_1=r_1$, the residual is $v_1=Y_1-H_1m_{1|0}=r_1$. Its mean is zero and its variance is $\mathbb E[r_1^2]=1$ by [F3,F4]. Hence $S_1=[1]$ is positive definite, since $u^TS_1u=u^2>0$ for every nonzero $u\in\mathbb R$. [F3, F4, step 1.1, algebra]

3.1 Thus $P_{1|0}=0$ is singular while $S_1=[1]$ is positive definite. No inverse of the state covariance is used; the observation innovation covariance remains invertible. [step 1.1, step 2.1, algebra] ∎
