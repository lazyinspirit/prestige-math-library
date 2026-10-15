---
id: ex-kalman-filter-singular-prior-positive-innovation
kind: example
title: Singular prior covariance with positive innovation variance
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
  - thm-non-negative-square-root-exists-and-is-unique
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from the degenerate Gaussian model and conditional-law theorem; the matrix calculations are choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 4, §4.3 and Appendix A.1"
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

Let $Z\sim N(0,1)$ and take $X_0=(Z,Z)^T$, so the initial covariance is
$$P_{0|0}=\begin{pmatrix}1&1\\1&1\end{pmatrix},$$
which is singular; $I_2$ below denotes the $2\times2$ identity matrix. Use
$F_1=I_2$, $Q_1=0$, $H_1=(1\ \ 0)$, and
$R_1=1$, with measurement noise independent of $Z$. At $y_1=2$, the
innovation variance is $2>0$, and the selected filtering-kernel value is
$$N_2\!\left(\begin{pmatrix}1\\1\end{pmatrix},\begin{pmatrix}1/2&1/2\\1/2&1/2\end{pmatrix}\right).$$
The filtered covariance remains singular.

## Facts & Assumptions

**Given:** AC and the stated one-step linear-Gaussian model.

[A1] AC is assumed through the degenerate Gaussian model and conditional-law theorem.
[[def-axiom-of-choice]].

[F1] The exact Kalman filtering theorem permits singular state and filtered
covariances whenever the innovation covariance is positive definite.
[[thm-kalman-filter-is-exact-posterior]].

[F2] Positive-semidefinite covariance matrices, including zero and singular
ones, define multivariate-normal laws under AC.
[[def-multivariate-normal-law]].

[F3] A positive-semidefinite operator has a positive-semidefinite square
root, so the rank-one covariance is an admissible Gaussian covariance.
[[thm-non-negative-square-root-exists-and-is-unique]].

[F4] Initial, process, and observation covariances in the linear-Gaussian
model may be positive semidefinite, and the noises are mutually independent.
[[def-linear-gaussian-state-space-model-with-independent-noises]].

## Verification

1.1 The matrix $P_{0|0}$ is positive semidefinite because $u^TP_{0|0}u=(u_1+u_2)^2\ge0$; it is singular because $P_{0|0}(1,-1)^T=0$. Since $\mathbb E Z=0$ and $\operatorname{Var}(Z)=1$, the Gaussian realization $X_0=(Z,Z)^T$ has covariance $\begin{pmatrix}1&1\\1&1\end{pmatrix}=P_{0|0}$. With $Q_1=0$ and $F_1=I_2$, prediction gives $m_{1|0}=(0,0)^T$ and $P_{1|0}=P_{0|0}$. [A1, F2, F3, F4, given, algebra]

2.1 Since $H_1=(1\ \ 0)$ and $R_1=1$, $S_1=H_1P_{1|0}H_1^T+R_1=2>0$. Hence $K_1=P_{1|0}H_1^TS_1^{-1}=(1/2,1/2)^T$ and $m_{1|1}=(1,1)^T$. The covariance update is $P_{1|1}=P_{1|0}-K_1S_1K_1^T=\begin{pmatrix}1/2&1/2\\1/2&1/2\end{pmatrix}$, which is still singular and positive semidefinite. By [F1] this is the exact filtering-kernel covariance at $y_1=2$, despite the singular prior covariance. [A1, F1, step 1.1, algebra] ∎
