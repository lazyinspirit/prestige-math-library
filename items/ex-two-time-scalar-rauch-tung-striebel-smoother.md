---
id: ex-two-time-scalar-rauch-tung-striebel-smoother
kind: example
title: Exact two-time scalar Rauch–Tung–Striebel smoothing calculation
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-fixed-interval-gaussian-smoothing-law
  - def-linear-gaussian-state-space-model-with-independent-noises
  - alg-kalman-filter
  - alg-rauch-tung-striebel-smoother
  - thm-rauch-tung-striebel-fixed-interval-recursion
justified_by: []
proof_strategy: direct
axiom_use: AC is used only for the finite-dimensional Gaussian laws in the model and exact conditional-law theorem. All scalar recursions and rational arithmetic are choice-free.
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 8, §8.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 3, §3.1"
      url: "https://arxiv.org/pdf/1506.07825"
---

## Example

Consider the scalar random walk $X_0\sim N(0,1)$,
$X_j=X_{j-1}+q_j$, $Y_j=X_j+r_j$ for $j=1,2$, with mutually independent
$q_j,r_j\sim N(0,1)$. Fix the data $y_1=1,y_2=2$. Every innovation and
one-step forecast covariance is positive, so both forward filtering and the
RTS backward recursion are defined.

## Facts & Assumptions

**Given:** The scalar model and observations in the Example.

[A1] AC is used by the multivariate-normal model and conditional-law
suppliers. [[def-axiom-of-choice]].

[F1] The model has mutually independent Gaussian initial, process, and
measurement variables with the displayed state and observation equations.
[[def-linear-gaussian-state-space-model-with-independent-noises]].

[F2] The Kalman filter computes the prediction, innovation, gain, and update
by the stated recursions. [[alg-kalman-filter]].

[F3] The RTS procedure initializes at the final filter and applies the
backward gain, mean, and covariance updates. [[alg-rauch-tung-striebel-smoother]].

[F4] Under positive-definite innovation and forecast covariances, the RTS
outputs are fixed-interval conditional-law versions.
[[thm-rauch-tung-striebel-fixed-interval-recursion]].

## Verification

**Given:** $X_0\sim N(0,1)$, unit process and measurement variances, unit
transition and observation coefficients, and $(y_1,y_2)=(1,2)$.

1.1 At time $1$, the filter predicts $m_{1|0}=0$ and $P_{1|0}=2$. Hence $S_1=3$, $v_1=1$, and $K_1=2/3$, so $m_{1|1}=2/3$ and $P_{1|1}=2-(2/3)3(2/3)=2/3$. In particular $S_1>0$. [A1, F1, F2, given, algebra]

2.1 At time $2$, the prediction is $m_{2|1}=2/3$ and $P_{2|1}=5/3$. Thus $S_2=8/3$, $v_2=4/3$, and $K_2=5/8$, giving $m_{2|2}=2/3+(5/8)(4/3)=3/2$ and $P_{2|2}=5/3-(5/8)(8/3)(5/8)=5/8$. Both $S_2$ and $P_{2|1}$ are positive. [F2, step 1.1, algebra]

3.1 The first backward gain is $C_1=(2/3)/(5/3)=2/5$. Therefore $m_{1|2}=2/3+(2/5)(3/2-2/3)=1$ and $P_{1|2}=2/3+(2/5)(5/8-5/3)(2/5)=1/2$. The next gain is $C_0=1/2$, so $m_{0|2}=0+(1/2)(1-0)=1/2$ and $P_{0|2}=1+(1/2)(1/2-2)(1/2)=5/8$. The theorem [F4] identifies the resulting smoothing kernels as $N(1/2,5/8)$ for $X_0$, $N(1,1/2)$ for $X_1$, and $N(3/2,5/8)$ for $X_2$ at the selected data history. [F3, F4, step 1.1, step 2.1, algebra] ∎
