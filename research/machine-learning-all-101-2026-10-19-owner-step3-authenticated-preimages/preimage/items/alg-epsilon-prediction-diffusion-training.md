---
id: alg-epsilon-prediction-diffusion-training
kind: algorithm
title: Epsilon-prediction diffusion objective estimator
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-forward-gaussian-diffusion-chain
  - lem-isotropic-gaussian-kl-formula
  - thm-ddpm-elbo-decomposition
  - thm-gaussian-forward-and-posterior-kernels
justified_by: []
axiom_use: "AC is inherited from the Gaussian-law and density interfaces used to sample the prescribed normal noise. The finite-index sampling procedure uses only a nonempty finite uniform law."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jonathan Ho, Ajay Jain, and Pieter Abbeel, Denoising Diffusion Probabilistic Models (2020)"
      url: "https://arxiv.org/pdf/2006.11239"
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion models (2026), pp. 363–387"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html"
---

## Definition

Fix a finite data set $D=(x_0^{(1)},\ldots,x_0^{(N)})\subset\mathbb R^d$ with $N\ge1$, a finite Gaussian schedule of horizon $T\ge1$, fixed positive reverse variances, a Borel noise predictor $\epsilon_\theta$, and a mode from $\{\texttt{weighted-elbo},\texttt{simple}\}$. This procedure returns one stochastic loss estimate; it does not prescribe a parameter optimizer or claim optimizer convergence.

1. Choose $I$ uniformly from $\{1,\ldots,N\}$, choose $J$ uniformly from $\{1,\ldots,T\}$ independently of $I$, and draw $\epsilon\sim N_d(0,I_d)$ independently.

2. Set
$$x_J=\sqrt{\bar\alpha_J}\,x_0^{(I)}+\sqrt{1-\bar\alpha_J}\,\epsilon.$$

3. If the mode is $\texttt{simple}$, return
$$\left\|\epsilon-\epsilon_\theta(x_J,J)\right\|_2^2.$$

4. If the mode is $\texttt{weighted-elbo}$, first compute the exact terminal-prior term
$$K_T(x_0^{(I)})=\frac12\left[\bar\alpha_T\|x_0^{(I)}\|_2^2+d\left(-\bar\alpha_T-\log(1-\bar\alpha_T)\right)\right].$$
If $J=1$, return
$$K_T(x_0^{(I)})-T\log p_\theta(x_0^{(I)}\mid x_J).$$
If $J\ge2$, return
$$K_T(x_0^{(I)})+T\left[C_J+w_J\left\|\epsilon-\epsilon_\theta(x_J,J)\right\|_2^2\right],$$
where $w_J$ and $C_J$ are the exact per-step coefficient and variance constant in the DDPM objective theorem.

Each branch returns one sampled objective contribution. The $J=1$ weighted branch uses the positive-variance learned reconstruction likelihood; it never evaluates a density for the degenerate forward conditional $q(x_0\mid x_1,x_0)$. This algorithm specifies the sampling procedure only; it makes no optimizer-convergence claim.

## Definition references

Finite Gaussian chain and reverse likelihood: [[def-forward-gaussian-diffusion-chain]].

Terminal KL and weighted per-step terms: [[thm-ddpm-elbo-decomposition]].

Gaussian KL formula used for the terminal term: [[lem-isotropic-gaussian-kl-formula]].

Stochastic epsilon-prediction objective and simple-loss convention: [Ho, Jain, and Abbeel, Algorithm 1 and Eqs. (12)–(14)](https://arxiv.org/pdf/2006.11239).

Independent textbook treatment: [Prince, Chapter 18, “The diffusion ELBO” and “Simplifying it”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).
