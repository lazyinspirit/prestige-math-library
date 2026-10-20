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
justified_by:
  - lem-diffusion-objective-estimator-expectation
axiom_use: "AC is inherited from the Gaussian-law and density interfaces used to sample the prescribed normal noise. The finite-index sampling procedure uses only a nonempty finite uniform law."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Jonathan Ho, Ajay Jain, and Pieter Abbeel, Denoising Diffusion Probabilistic Models (2020)"
      url: "https://arxiv.org/pdf/2006.11239"
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion models (2026), pp. 363–387"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html"
---

## Definition

Fix finite integers $d,N,T\ge1$, a data set $D=(x_0^{(1)},\ldots,x_0^{(N)})\in(\mathbb R^d)^N$, forward variances $\beta_1,\ldots,\beta_T\in(0,1)$, reverse variances $\sigma_1^2,\ldots,\sigma_T^2\in(0,\infty)$, a Borel map $\epsilon_\theta:\mathbb R^d\times\{1,\ldots,T\}\to\mathbb R^d$, and a mode from $\{\texttt{weighted-elbo},\texttt{simple}\}$. Set $\alpha_t=1-\beta_t$ and $\bar\alpha_t=\prod_{s=1}^t\alpha_s$. Use the noise-prediction means
$$\mu_{\theta,t}(y)=\frac1{\sqrt{\alpha_t}}\left(y-\frac{\beta_t}{\sqrt{1-\bar\alpha_t}}\,\epsilon_\theta(y,t)\right),\qquad 1\le t\le T,$$
and the reverse Gaussian model with these means, variances $\sigma_t^2$, and prior $N_d(0,I_d)$ to define $p_\theta$. In weighted-elbo mode, require for each $x_0^{(i)}$ that $0<p_\theta(x_0^{(i)})<\infty$, the forward path law be absolutely continuous with respect to the normalized reverse posterior path law, and
$$\mathbb E_{q(\cdot\mid x_0^{(i)})}\!\left[|\log q(x_{1:T}\mid x_0^{(i)})|+|\log p_\theta(x_{0:T})|\right]<\infty.$$
In simple mode, require for every $i$ and $t$ that
$$\mathbb E_{\epsilon\sim N_d(0,I_d)}\!\left[\left\|\epsilon-\epsilon_\theta\!\left(\sqrt{\bar\alpha_t}x_0^{(i)}+\sqrt{1-\bar\alpha_t}\epsilon,t\right)\right\|_2^2\right]<\infty.$$
This procedure returns one stochastic loss estimate; it does not prescribe a parameter optimizer or claim optimizer convergence.

1. Choose $I$ uniformly from $\{1,\ldots,N\}$, choose $J$ uniformly from $\{1,\ldots,T\}$ independently of $I$, and draw $\epsilon\sim N_d(0,I_d)$ independently of both.

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

Pedagogical treatment of weighted noise-prediction terms and the simplified training objective; its ELBO discussion approximates the terminal-prior term by zero: [Prince, Chapter 18, “The diffusion ELBO” and “Simplifying it”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).

## Remarks

Finite expectation and the exact objective estimated in each mode are proved in lem-diffusion-objective-estimator-expectation.

## Remarks references

[[lem-diffusion-objective-estimator-expectation]]
