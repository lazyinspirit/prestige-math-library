---
id: ex-switching-linear-gaussian-rbpf
kind: example
title: A two-mode linear-Gaussian Rao–Blackwellized filter
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-conditionally-linear-gaussian-state-space-model
  - lem-kalman-filter-is-exact-conditional-on-nonlinear-path
  - alg-rao-blackwellized-particle-filter
  - thm-nondegenerate-multivariate-normal-law-has-density
proof_strategy: direct
axiom_use: AC is inherited from the conditional Gaussian-law and Kalman-filter interfaces; the two-mode arithmetic is choice-free.
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 7, §7.5"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Fredrik Lindsten, Pete Bunch, Simo Särkkä, Thomas B. Schön, and Simon J. Godsill, Rao-Blackwellized particle smoothers for conditionally linear Gaussian models, §3.2"
      url: "https://arxiv.org/pdf/1505.06357"
---

## Example

Let $Z_0$ be uniform on $\{0,1\}$ and let $Z_1=Z_0$. Conditional on
$Z_0=z$, take $U_0\sim N(0,1)$ and
$$U_1=a_zU_0+\xi_1,\qquad Y_1=U_1+\varepsilon_1,$$
where $a_0=0$, $a_1=1$, and $\xi_1,\varepsilon_1$ are independent
$N(0,1)$ variables, independent of $U_0$. Observe $Y_1=0$. The exact
conditional posterior is the two-component mixture
$$\mathcal L(U_1,Z_1\mid Y_1=0)=\frac{\sqrt3}{\sqrt3+\sqrt2}N(0,1/2)\otimes\delta_0+\frac{\sqrt2}{\sqrt3+\sqrt2}N(0,2/3)\otimes\delta_1.$$
These are the component moments and mode weights that the Rao–Blackwellized
filter represents analytically; a finite particle cloud still approximates
the mode mixture.

## Facts & Assumptions

**Given:** The finite model and observation in the Example.

[F1] A conditionally linear-Gaussian state-space model has a Markov nonlinear component and a linear-Gaussian component conditional on its nonlinear path. [[def-conditionally-linear-gaussian-state-space-model]]

[A1] AC is inherited from the Gaussian-law and finite-horizon conditional-kernel conventions. [[def-axiom-of-choice]]

[F2] Conditional on a nonlinear path, the Kalman filter gives the exact Gaussian state filter and the marginal observation density. [[lem-kalman-filter-is-exact-conditional-on-nonlinear-path]]

[F3] The Rao–Blackwellized particle filter retains those conditional Gaussian components and weights nonlinear paths by their conditional observation densities. [[alg-rao-blackwellized-particle-filter]]

[F4] A positive-definite one-dimensional Gaussian covariance gives density $(2\pi S)^{-1/2}\exp(-v^2/(2S))$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

## Verification

**Given:** $Z_0\sim\operatorname{Bernoulli}(1/2)$, $Z_1=Z_0$, the conditional Gaussian model stated in the Example, and $Y_1=0$.

1.1 The state and observation noises are independent centered Gaussians, the conditional initial covariance is $1$, the process covariance is $1$, and the observation covariance is $1>0$. Thus the model satisfies [F1] and the exact conditional Kalman interface [F2]. [A1, F1, F2, given]

1.2 Conditional on $Z_1=z$, prediction gives $m_{1|0}=0$ and $P_{1|0}=a_z^2+1$. Hence $P_{1|0}=1$ for $z=0$ and $P_{1|0}=2$ for $z=1$. The innovation is zero and the innovation variances are $S_0=2$ and $S_1=3$. [F2, given, algebra]

2.1 By [F4], the two conditional observation densities at zero are $\ell_0=(4\pi)^{-1/2}$ and $\ell_1=(6\pi)^{-1/2}$. Multiplying by the equal prior masses and normalizing gives $P(Z_1=0\mid Y_1=0)=\sqrt3/(\sqrt3+\sqrt2)$ and $P(Z_1=1\mid Y_1=0)=\sqrt2/(\sqrt3+\sqrt2)$. [A1, F1, F2, F4, step 1.2, algebra]

3.1 The Kalman covariance update is $P_{1|1}=P_{1|0}R/(P_{1|0}+R)$ here, so the two conditional posterior variances are $1/2$ and $2/3$; both conditional means remain zero. Mixing these exact conditional Gaussians with the mode probabilities from step 2.1 gives the displayed posterior. The filter in [F3] uses these same per-mode likelihoods and Gaussian components; only its finite particle approximation to the mode weights is random. [A1, F2, F3, step 2.1, algebra] ∎
