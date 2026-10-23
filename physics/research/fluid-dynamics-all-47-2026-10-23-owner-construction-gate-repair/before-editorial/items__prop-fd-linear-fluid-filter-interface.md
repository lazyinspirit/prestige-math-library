---
id: prop-fd-linear-fluid-filter-interface
kind: proposition
title: Exact filtering for the declared linear Gaussian model
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-fd-fluid-coefficient-observation-model
  - def-linear-gaussian-state-space-model-with-independent-noises
  - thm-kalman-filter-is-exact-posterior
  - def-axiom-of-choice
dependency_roles:
  def-fd-fluid-coefficient-observation-model: mathematical-premise
  def-linear-gaussian-state-space-model-with-independent-noises: mathematical-premise
  thm-kalman-filter-is-exact-posterior: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
axiom_use: Assume AC as required by the Gaussian-law construction and the exact filtering theorem; the hypothesis match and application add no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.1"
      url: "https://arxiv.org/pdf/1506.07825v1"
---

## Statement

Assume AC. Let $T\ge0$ be finite and take an admissible stochastic coefficient model from the definition of the finite coefficient observation and innovation interface. Thus the coefficient states and observations satisfy $a_k=F_ka_{k-1}+q_k$ and $y_k=H_ka_k+r_k$, the initial state and all process and measurement noises are mutually independent Gaussian vectors with positive-semidefinite covariances, and every innovation covariance $S_k=H_kP^f_kH_k^T+R_k$ used by the recursion is positive definite. Run the finite-horizon Kalman recursion from the declared initial mean and covariance. Then, for each $0\le k\le T$, its Gaussian output is an everywhere-defined conditional-law version for the coefficient state $a_k$ given the observation history $y_{1:k}$. The output mean and covariance are the exact conditional mean and covariance of this declared finite linear-Gaussian model, including at histories that have probability zero under a nonsingular observation law. Initial, process, measurement, forecast-state, and analysis-state covariances may be singular; only the innovation covariances being solved must be positive definite. This is a deduction about the declared finite model, not a claim that a nonlinear or untruncated fluid equation is itself linear-Gaussian.

## Statement references

[[def-fd-fluid-coefficient-observation-model]]

[[def-linear-gaussian-state-space-model-with-independent-noises]]

[[thm-kalman-filter-is-exact-posterior]]

[[def-axiom-of-choice]]

[Law, Stuart, and Zygalakis, Chapter 4 §4.1, pp. 78–80](https://arxiv.org/pdf/1506.07825v1)


## Facts & Assumptions

**Given:** AC, a finite-horizon stochastic coefficient model from the definition above, and positive definiteness of every innovation covariance that is solved.

[A1] Assume AC, the axiom that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] The local coefficient realization has the affine state and observation equations, mutually independent Gaussian initial, process, and measurement vectors, and positive-semidefinite covariance matrices. [[def-fd-fluid-coefficient-observation-model]]

[F2] This is the finite linear-Gaussian state-space model with independent noises; its state and observation dimensions and matrices satisfy the imported model definition. [[def-linear-gaussian-state-space-model-with-independent-noises]]

[F3] Under AC and these hypotheses, the finite-horizon Kalman recursion gives an everywhere-defined filtering kernel at every observation history; singular state and noise covariances are allowed when each solved innovation covariance is positive definite. [[thm-kalman-filter-is-exact-posterior]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Identify the coefficient state with the state vector in the finite linear-Gaussian state-space model: the local matrices are $F_k$ and $H_k$, and the local Gaussian vectors are the initial state and the mutually independent $q_k,r_k$. Their dimensions and covariance signs match the supplied model by [F1] and [F2]. The stated positive-definite $S_k$ condition is exactly the admissibility condition for each covariance solve, and [A1] matches the choice assumption of the Gaussian suppliers. Thus all hypotheses of [F3] hold. [A1, F1, F2, F3, given, algebra]

2.1 Apply [F3] to the same coefficient state, fixed observation history, and Kalman recursion: for every $k$ from $0$ through $T$, the computed Gaussian law is a conditional law of $a_k$ given $y_{1:k}$, with the exact conditional mean and covariance stated above. The theorem allows singular state, process, and measurement covariances, so no inverse beyond the positive-definite innovation matrices is required. [F3, step 1.1] ∎

## Proof references

[[def-axiom-of-choice]]

[[def-fd-fluid-coefficient-observation-model]]

[[def-linear-gaussian-state-space-model-with-independent-noises]]

[[thm-kalman-filter-is-exact-posterior]]
