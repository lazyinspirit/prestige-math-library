---
id: lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter
kind: lemma
title: Independent perturbed-observation reference members follow the Kalman filter
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-kalman-filter
  - thm-kalman-filter-is-exact-posterior
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - def-axiom-of-choice
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
proof_strategy: induction
axiom_use: Assume AC as in the multivariate-normal and exact Kalman suppliers. The finite recursion and independent-member calculation require no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of the Ensemble Kalman Filter, §3"
      url: "https://arxiv.org/pdf/0901.2951v2"
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
---

## Statement

Assume AC and the finite-horizon linear-Gaussian model of [[def-linear-gaussian-state-space-model-with-independent-noises]], with $R_k\succ0$ for $1\le k\le T$. Fix the observation values $y_{1:T}$. For each $N$, initialize $U_{N,i}^{a,0}$ iid with the model's $N(m_0,P_0)$ prior. At each time use independent per-member noises $q_{N,i}^k\sim N(0,Q_k)$ and $\eta_{N,i}^k\sim N(0,R_k)$, independent across $i,k$ and from the preceding ensemble, and form
$$U_{N,i}^{f,k}=F_kU_{N,i}^{a,k-1}+q_{N,i}^k,\qquad U_{N,i}^{a,k}=U_{N,i}^{f,k}+K_k(y_k+\eta_{N,i}^k-H_kU_{N,i}^{f,k}),$$
where $K_k=P_{k|k-1}H_k^T(H_kP_{k|k-1}H_k^T+R_k)^{-1}$ is the deterministic gain from [[alg-kalman-filter]]. Then, for every $k\le T$, the analysis members $U_{N,1}^{a,k},\ldots,U_{N,N}^{a,k}$ are iid with law $N(m_{k|k},P_{k|k})$, the exact Kalman filtering law at the fixed data $y_{1:k}$.

## Facts & Assumptions

**Given:** AC, the finite-horizon linear-Gaussian model, $R_k\succ0$, and the independent per-member initialization and perturbations in the Statement.

[A1] AC is the axiom required by the multivariate-normal and Kalman suppliers. [[def-axiom-of-choice]]

[F1] The state and observation equations are affine with mutually independent Gaussian initial, process, and observation noises; their covariance matrices may be positive semidefinite. [[def-linear-gaussian-state-space-model-with-independent-noises]]

[F2] A finite independent stack of multivariate normal vectors is jointly multivariate normal, including for singular covariance blocks. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]]

[F3] The Kalman algorithm predicts $m^f=F_km$, $P^f=F_kPF_k^T+Q_k$ and updates by $m^a=m^f+K_k(y_k-H_km^f)$, $P^a=P^f-K_kS_kK_k^T$. [[alg-kalman-filter]]

[F4] Under the stated model and positive-definite innovation matrices, these recursions are exact Gaussian conditional laws at every observation history. [[thm-kalman-filter-is-exact-posterior]]

[F5] A multivariate normal law permits singular positive-semidefinite covariance and is closed under the defining affine projections. [[def-multivariate-normal-law]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 At $k=0$, the analysis members are iid with law $N(m_0,P_0)$ by their initialization, so the claim holds at the base time. [A1, F1, F5, given, base]

2.1 Assume the induction hypothesis: the members at time $k-1$ are iid with law $N(m_{k-1|k-1},P_{k-1|k-1})$. Each forecast is an affine image of the independent Gaussian pair $(U_{N,i}^{a,k-1},q_{N,i}^k)$. By [F2] the pair is jointly Gaussian; every scalar projection of its affine image is a scalar Gaussian projection, so [F5] makes the forecasts iid Gaussian with mean $m^f=F_km_{k-1|k-1}$ and covariance $P^f=F_kP_{k-1|k-1}F_k^T+Q_k$. [A1, F1, F2, F5, given, step 1.1, IH]

3.1 Since $P^f\succeq0$ and $R_k\succ0$, $S=H_kP^fH_k^T+R_k\succ0$, so $K=P^fH_k^TS^{-1}$ is defined. The independent Gaussian pair $(U_{N,i}^{f,k},y_k+\eta_{N,i}^k)$ and [F2] show that $U_{N,i}^{a,k}=A U_{N,i}^{f,k}+K(y_k+\eta_{N,i}^k)$, with $A=I-KH_k$, is Gaussian. Its mean is $m^f+K(y_k-H_km^f)$ and its covariance is $AP^fA^T+KR_kK^T=P^f-KSK^T,$ because $KS K^T=P^fH_k^TK^T=KH_kP^f$. These are precisely the Kalman update parameters in [F3]. [F1, F2, F3, F5, step 2.1, algebra]

4.1 For distinct member indices the pairs of forecast and perturbed observation are independent by the input independence and the induction hypothesis; applying the same deterministic affine update separately to each pair preserves independence. Therefore the updated members are iid with the Gaussian law from step 3.1. By [A1] and [F4] that law is the exact filtering law at the fixed data. [A1, F1, F4, step 1.1, step 2.1, step 3.1]

5.1 The initialization in step 1.1 is the base case, and step 4.1 proves the claim at time $k$ from the induction hypothesis at time $k-1$. Induction therefore gives the asserted iid exact filtering law for every $k\le T$. [step 1.1, step 4.1, discharge-induction: step 1.1, step 4.1] ∎
