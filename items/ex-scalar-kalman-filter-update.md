---
id: ex-scalar-kalman-filter-update
kind: example
title: A one-step scalar Kalman update
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-kalman-filter
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - thm-kalman-filter-is-exact-posterior
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from the Gaussian model and conditional-law theorem; the displayed scalar arithmetic is choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 4, §§4.1–4.3"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4, §4.1"
      url: "https://arxiv.org/pdf/1506.07825"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take a one-step scalar model with $X_0\sim N(0,1)$, transition
$X_1=X_0+q_1$ for $q_1\sim N(0,1)$, and observation
$Y_1=X_1+r_1$ for $r_1\sim N(0,1)$, with the three Gaussian variables
independent. At the observation $y_1=2$, the predicted law is $N(0,2)$,
the innovation variance is $3$, the gain is $2/3$, and the selected
filtering-kernel value is $N(4/3,2/3)$.

## Facts & Assumptions

**Given:** AC and the stated independent-noise linear-Gaussian model.

[A1] AC is assumed through the Gaussian model and conditional-law theorem.
[[def-axiom-of-choice]].

[F1] Under AC, the Kalman recursion with positive innovation covariance
defines an everywhere filtering-kernel version of the exact conditional
state law. [[thm-kalman-filter-is-exact-posterior]].

[F2] The model permits singular positive-semidefinite initial, process, and
measurement covariances with mutually independent centered Gaussian noises.
[[def-linear-gaussian-state-space-model-with-independent-noises]].

[F3] Every positive-semidefinite covariance defines a multivariate-normal
law under AC. [[def-multivariate-normal-law]].

## Verification

1.1 Set $m_{0|0}=0$, $P_{0|0}=1$, $F_1=H_1=1$, and $Q_1=R_1=1$. The covariances are positive semidefinite and the noises satisfy [F2]. The prediction is $m_{1|0}=0$ and $P_{1|0}=1\cdot1\cdot1+1=2$. Thus $S_1=1\cdot2\cdot1+1=3>0$, and for $y_1=2$ the innovation is $v_1=2$. [A1, F2, F3, given, algebra]

2.1 Solving the scalar innovation system gives $K_1=2/3$. Therefore $m_{1|1}=0+(2/3)2=4/3$ and $P_{1|1}=2-(2/3)3(2/3)=2/3$. By [F1], the selected conditional-law version at $y_1=2$ is exactly $N(4/3,2/3)$. [A1, F1, step 1.1, algebra] ∎
