---
id: lem-kalman-filter-is-exact-conditional-on-nonlinear-path
kind: lemma
title: The Kalman filter is exact conditional on a nonlinear path
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-conditionally-linear-gaussian-state-space-model
  - lem-nonlinear-path-extension-is-a-probability-kernel
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - def-feynman-kac-path-targets-and-normalizers
  - alg-kalman-filter
  - lem-one-step-kalman-gaussian-conditioning
  - thm-kalman-filter-is-exact-posterior
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-conditional-density-formula
proof_strategy: direct
axiom_use: Assume AC through the Gaussian-law, linear-Gaussian model, and Kalman conditional-law suppliers. Fixing a nonlinear path adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 7, §7.5"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Fredrik Lindsten, Pete Bunch, Simo Särkkä, Thomas B. Schön, and Simon J. Godsill, Rao-Blackwellized particle smoothers for conditionally linear Gaussian models, §3.2"
      url: "https://arxiv.org/pdf/1505.06357"
---

## Statement

Assume the model of
[[def-conditionally-linear-gaussian-state-space-model]] and fix a nonlinear
path $z_{0:T}$. Run [[alg-kalman-filter]] on the resulting deterministic
linear-Gaussian model for a fixed observation path $y_{1:T}$. Write
$m_{t|t-1},P_{t|t-1}$ and $m_{t|t},P_{t|t}$ for its predicted and updated
moments, and define
$$v_t=y_t-C_t(z_{0:t})m_{t|t-1},\qquad S_t=C_t(z_{0:t})P_{t|t-1}C_t(z_{0:t})^T+R_t(z_{0:t}).$$
Then $\mathcal L(U_t\mid Z_{0:T}=z_{0:T},Y_{1:t}=y_{1:t})$ has the Gaussian
version $N(m_{t|t},P_{t|t})$ for every $0\le t\le T$. At time $t\ge1$, the
conditional observation density given the nonlinear path and earlier
observations is
$$\ell_t(z_{0:t};y_{1:t})=(2\pi)^{-p_t/2}\det(S_t)^{-1/2}\exp\!\left(-\tfrac12v_t^TS_t^{-1}v_t\right).$$
Each $S_t$ is positive definite, each $P_{t|t}$ is positive semidefinite,
and $\ell_t$ is finite, strictly positive, and Borel in the nonlinear path.
For every $1\le t\le T$ whose observation evidence is finite positive, the
conditional density of $Y_{1:t}$ given the nonlinear path is
$\prod_{s=1}^t\ell_s(z_{0:s};y_{1:s})$. Consequently the conditional law of
$Z_{0:t}$ given $Y_{1:t}=y_{1:t}$ is the normalized Feynman–Kac path measure
with path-extension transitions induced by $M_s$, initial potential
$G_0\equiv1$, and potentials $G_s(z_{0:s})=\ell_s(z_{0:s};y_{1:s})$. At
$t=0$ it is the initial nonlinear law $\mu_0$.

## Facts & Assumptions

**Given:** AC, the fixed path and observations, and the conditional model in
the Statement.

[A1] AC is inherited from the Gaussian-law and Kalman conditional-law conventions. [[def-axiom-of-choice]]

[F1] Conditional on a fixed nonlinear path, the initial state and all state and observation noises are mutually independent Gaussian vectors with the displayed positive-semidefinite covariances; the coefficient matrices are deterministic for that path. [[def-conditionally-linear-gaussian-state-space-model]]

[F2] The finite-horizon linear-Gaussian model with independent noises has an exact Kalman filtering version whenever every innovation covariance is positive definite; state and noise covariances may be singular. [[thm-kalman-filter-is-exact-posterior]]

[F3] One prediction and observation step from a Gaussian state with positive-semidefinite covariance produces a jointly Gaussian state-observation pair with innovation covariance $S$, and when $S$ is positive definite the conditional state law has the stated Kalman update. [[lem-one-step-kalman-gaussian-conditioning]]

[F4] A positive-definite covariance matrix gives the multivariate normal law its Lebesgue density $(2\pi)^{-p/2}\det(S)^{-1/2}\exp(-v^TS^{-1}v/2)$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F5] A joint probability with a product-measurable density has the normalized conditional-density kernel on finite-positive evidence fibers. [[thm-conditional-density-formula]]

[F6] A normalized Feynman–Kac path measure is the Markov path law weighted by the product of its nonnegative potentials, and it is normalized only at finite positive normalizer. [[def-feynman-kac-path-targets-and-normalizers]]

[F7] Extending a nonlinear prefix by its transition kernel gives a probability kernel on the standard-Borel path spaces, and the ordered extensions give the nonlinear path law. [[lem-nonlinear-path-extension-is-a-probability-kernel]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Initially $P_{0|0}=P_0(z_0)$ is positive semidefinite. If $P_{t-1|t-1}$ is positive semidefinite, then $P_{t|t-1}=A_tP_{t-1|t-1}A_t^T+Q_t$ is positive semidefinite because $u^TP_{t|t-1}u=(A_t^Tu)^TP_{t-1|t-1}(A_t^Tu)+u^TQ_tu\ge0$. For every nonzero observation vector $a$, $a^TS_ta=(C_t^Ta)^TP_{t|t-1}(C_t^Ta)+a^TR_ta>0$, since the first term is nonnegative and $R_t$ is positive definite. Induction proves all innovation matrices meet the Kalman algorithm's domain. [A1, F1, given, algebra]

2.1 By [F1], for this fixed path the conditional model is the deterministic finite-horizon model of [F2]. Step 1.1 verifies its positive-innovation hypothesis, so [F2] gives the exact conditional Gaussian filter at every observation history, including singular state covariances. At each time, [F3] gives the marginal observation law $N(C_tm_{t|t-1},S_t)$; applying [F4] yields the displayed density. [F1, F2, F3, F4, given, step 1.1]

3.1 The coefficient functions are Borel by [F1]. Finite sums and products preserve Borel measurability, and matrix inversion and determinant are continuous on the positive-definite matrices established in step 1.1. The Kalman moment recursion and the displayed density are therefore Borel functions of the path. The covariance determinant is finite and positive and the exponential is finite and strictly positive, so $\ell_t$ has the claimed range. [F1, step 1.1, step 2.1, algebra]

4.1 For a fixed nonlinear path, step 2.1 gives the one-step conditional density $\ell_s$ of $Y_s$ given $Y_{1:s-1}$. By the defining event-integral identity for conditional densities, $p(y_{1:s}\mid z)=p(y_{1:s-1}\mid z)\ell_s(z_{0:s};y_{1:s})$ on finite-positive fibers; induction from the empty history, whose density is one, gives the product $\prod_{s=1}^t\ell_s$. By [F7], the ordered path-extension kernels are probability kernels on the standard-Borel path spaces and give the nonlinear path law. The joint law of $Z_{0:t}$ and $Y_{1:t}$ therefore has this product as its observation-density factor relative to that path law and Lebesgue observation measure. By [F5], conditioning on a history with finite positive evidence weights the nonlinear path law by this product and divides by its integral. Comparing with [F6] gives exactly the stated normalized Feynman–Kac path measure. This assertion is restricted to those finite-positive evidence fibers; null and infinite fibers are not normalized. [F1, F5, F6, F7, step 2.1, step 3.1, given] ∎
