---
id: lem-diffusion-objective-estimator-expectation
kind: lemma
title: Expected output of the diffusion objective estimator
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - alg-epsilon-prediction-diffusion-training
  - lem-isotropic-gaussian-kl-formula
  - thm-ddpm-elbo-decomposition
  - thm-gaussian-forward-and-posterior-kernels
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the algorithm's Gaussian sampling and KL interfaces. Finite averaging uses no further choice."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ho, Jain, and Abbeel, Denoising Diffusion Probabilistic Models, Eqs. (5), (12), (14) and Algorithm 1"
      url: "https://arxiv.org/pdf/2006.11239"
---

## Statement

Assume AC. Use the admissible inputs of the epsilon-prediction diffusion objective estimator, and let $Y$ be its returned real random variable. Its expectation is finite. In simple mode,
$$\mathbb E[Y]=\frac1N\sum_{i=1}^N L_{\mathrm{simple}}(\theta;x_0^{(i)}).$$
In weighted-elbo mode,
$$\mathbb E[Y]=\frac1N\sum_{i=1}^N[-\operatorname{ELBO}_\theta(x_0^{(i)})].$$
Here the simple loss and ELBO use the same schedule, reverse model and predictor as the estimator. Both identities include $N=1$ and $T=1$.

## Statement references

Estimator inputs and sampling instructions: [[alg-epsilon-prediction-diffusion-training]].

Definitions of the two objectives: [[thm-ddpm-elbo-decomposition]].

Diffusion objective sampling and weighting: [Ho, Jain, and Abbeel, Eqs. (5), (12), (14) and Algorithm 1](https://arxiv.org/pdf/2006.11239).

## Facts & Assumptions

**Given:** AC and admissible inputs in the selected estimator mode; $I,J,\epsilon$ and $Y$ are as in its instructions.

[A1] The Gaussian and KL interfaces assume AC. [[def-axiom-of-choice]].

[F1] The estimator samples independent uniform indices $I,J$ and independent standard Gaussian noise, and returns the prescribed branch value under its mode-specific integrability assumptions. [[alg-epsilon-prediction-diffusion-training]].

[F2] The simple objective is the uniform-time average of the squared noise errors. The negative ELBO is the terminal KL plus the decoder expectation plus the sum of the expectations of $C_t+w_t\|\epsilon-\epsilon_\theta(x_t,t)\|_2^2$ for $t\ge2$. Its proof makes every such expectation finite under its hypotheses. [[thm-ddpm-elbo-decomposition]].

[F3] The forward marginal is $N_d(\sqrt{\bar\alpha_t}x_0,(1-\bar\alpha_t)I_d)$. [[thm-gaussian-forward-and-posterior-kernels]].

[F4] The directional KL of positive isotropic Gaussians is the variance term plus the squared-mean term in the Gaussian KL formula. [[lem-isotropic-gaussian-kl-formula]].

[F5] Expectation is integration against the probability law, finite for an integrable real random variable. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]].

## Proof

**Proof technique:** integrate over the finite uniform indices and apply the exact objective decomposition.

**Given:** The hypotheses in the Statement.

1.1 Conditional on $I=i,J=t$, the sampled state has the forward marginal in [F3]. Every returned value is finite and measurable: the predictor is finite-valued Borel, all schedule denominators and variances are positive, and the decoder density is strictly positive. In simple mode, the stated finite squared-error expectations make $Y$ integrable, and independence and uniform sampling give $\mathbb E[Y]=(NT)^{-1}\sum_{i=1}^N\sum_{t=1}^T\mathbb E_\epsilon\|\epsilon-\epsilon_\theta(\sqrt{\bar\alpha_t}x_0^{(i)}+\sqrt{1-\bar\alpha_t}\epsilon,t)\|_2^2=N^{-1}\sum_i L_{\mathrm{simple}}(\theta;x_0^{(i)})$. [A1, F1, F2, F3, F5, given, algebra]

1.2 In weighted-elbo mode, [F3] and [F4] with $v=1-\bar\alpha_T$, $w=1$, $m=\sqrt{\bar\alpha_T}x_0^{(i)}$ and $n=0$ identify the algorithm's $K_T(x_0^{(i)})$ as the exact terminal KL. The mode's hypotheses are those of [F2], so the decoder log-density and the interior weighted squared errors are integrable. Finite sums over $i,t$ therefore make $Y$ integrable, even though a decoder contribution may be negative. For fixed $i$, averaging the branch values over $J$ and the noise cancels each factor $T$ and counts $K_T$ once, giving $\mathbb E[Y\mid I=i]=K_T(x_0^{(i)})+\mathbb E_{q(x_1\mid x_0^{(i)})}[-\log p_\theta(x_0^{(i)}\mid x_1)]+\sum_{t=2}^T\mathbb E_\epsilon[C_t+w_t\|\epsilon-\epsilon_\theta(x_t,t)\|_2^2]=-\operatorname{ELBO}_\theta(x_0^{(i)})$. [A1, F1, F2, F3, F4, F5, given, algebra]

2.1 Averaging step 1.2 over the uniform index $I$ proves the weighted identity. When $N=1$ the data average has one term, and when $T=1$ only the decoder branch is selected and the interior sum is empty; the terminal term is still counted once. Thus both identities hold throughout the admitted domain. [F1, F5, step 1.1, step 1.2, algebra] ∎
