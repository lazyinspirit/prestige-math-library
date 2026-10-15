---
id: ex-singular-forecast-covariance-outside-rts-domain
kind: example
title: Singular forecast covariance lies outside the ordinary RTS inverse domain
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-fixed-interval-gaussian-smoothing-law
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - alg-kalman-filter
  - alg-rauch-tung-striebel-smoother
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from the Gaussian model and normal-law definition. The covariance and RCD verification are direct and introduce no additional choice.
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

Take $T=1$, $X_0\sim N(0,0)$, $F_1=1$, $Q_1=0$, $H_1=0$, and
$R_1=1$, with independent noises and observation $y_1=0$. Then the forward
Kalman innovation covariance is positive, but the state forecast covariance
is zero. The fixed-interval smoothing law still exists and is the point mass
at zero; the ordinary RTS gain formula is outside its stated domain.

## Facts & Assumptions

**Given:** The scalar model and observation in the Example.

[A1] AC is the Axiom of Choice assumed by the Gaussian model and
normal-law definition. [[def-axiom-of-choice]].

[F1] A linear-Gaussian state-space model permits positive-semidefinite
covariances, including zero covariance. [[def-linear-gaussian-state-space-model-with-independent-noises]].

[F2] Under the multivariate-normal convention, $N(0,0)$ is the point mass at
zero. [[def-multivariate-normal-law]].

[F3] The forward filter requires positive-definite innovation matrices and
updates by the stated Kalman recursions. [[alg-kalman-filter]].

[F4] The ordinary RTS procedure requires a positive-definite one-step
forecast covariance wherever it solves for a backward gain.
[[alg-rauch-tung-striebel-smoother]].

[F5] A fixed-interval smoothing kernel is an everywhere probability kernel
whose composition with the observation is an RCD of the state.
[[def-fixed-interval-gaussian-smoothing-law]].

## Verification

**Given:** $X_0\sim N(0,0)$, $q_1\sim N(0,0)$, $r_1\sim N(0,1)$,
$X_1=X_0+q_1$, $Y_1=r_1$, and $y_1=0$.

1.1 By [F2], $X_0=0$ and $q_1=0$ almost surely, so $X_1=0$ almost surely. The observation is $Y_1=r_1$ and the model covariances are positive semidefinite. [A1, F1, F2, given, algebra]

2.1 The forward recursion gives $P_{1|0}=1\cdot0\cdot1+0=0$ and $m_{1|0}=0$. Since $H_1=0$ and $R_1=1$, its innovation covariance is $S_1=1>0$, gain $K_1=0$, and filtered state remains $N(0,0)$. Thus the forward filter is admissible, while the RTS step would require the ordinary inverse of $P_{1|0}=0$, which does not exist by [F4]. No pseudoinverse substitution follows from that algorithm. [F2, F3, F4, step 1.1, algebra]

3.1 Define $\psi_{0|1}(y,\cdot)=\delta_0$ for every $y\in\mathbb R$. For any Borel sets $A,B\subseteq\mathbb R$, $\mathbb P(X_0\in A,Y_1\in B)=1_{\{0\in A\}}\mathbb P(Y_1\in B)=\int_B\delta_0(A)\,\mathbb P_{Y_1}(dy)$ by step 1.1. Hence this everywhere-defined kernel satisfies the RCD identity in [F5]; it is the fixed-interval smoothing law even though the ordinary RTS recursion is undefined. [F5, step 1.1, step 2.1, construct] ∎
