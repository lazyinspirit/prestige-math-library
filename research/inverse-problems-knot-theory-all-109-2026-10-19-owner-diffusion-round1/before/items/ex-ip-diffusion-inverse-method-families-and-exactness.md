---
id: ex-ip-diffusion-inverse-method-families-and-exactness
kind: example
title: Diffusion inverse solver families and their target laws
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - lem-ip-conditional-score-and-tweedie-identities
  - def-ip-diffusion-prior-score-and-measurement-score
  - alg-ip-measurement-guided-diffusion-reconstruction
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
generation:
  role: example
sources:
  references:
    - title: Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems (2024), arXiv:2410.00083
      url: https://arxiv.org/pdf/2410.00083
    - title: Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations (2021), arXiv:2011.13456
      url: https://arxiv.org/pdf/2011.13456
    - title: Hyungjin Chung et al., Diffusion Posterior Sampling for General Noisy Inverse Problems (2023), arXiv:2209.14687
      url: https://arxiv.org/pdf/2209.14687
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion Models (2026), pp. 363–387; full course notes"
      url: https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html
---

## Example

Let $\mu_0$ be a probability measure on $\mathbb R^d$ dominated by a sigma-finite measure $\lambda$, with density $\rho_0=d\mu_0/d\lambda$. Fix an observation vector $y\in\mathbb R^p$ and a nonnegative measurable likelihood function $\ell_y:\mathbb R^d\to[0,\infty)$. Assume $0<Z_y=\int\ell_y(x)\rho_0(x)\,\lambda(dx)<\infty$ and define the posterior probability measure by $\pi_y(dx)=Z_y^{-1}\ell_y(x)\rho_0(x)\,\lambda(dx)$. For the latent-optimization comparison, fix a Borel measurement map $\mathcal A:\mathbb R^d\to\mathbb R^p$. The following diffusion-inverse solver families have different output laws and exactness conditions.

1. **Explicit-score guidance** uses the exact conditional score $c_\sigma(x,y)=s_\sigma(x)+g_\sigma(x,y)$ when the fixed-$y$ likelihood density is bounded, strictly positive and Borel relative to a fixed sigma-finite observation measure, as required by the conditional-score identity; the scores use Gaussian noising at scale $\sigma>0$. For a finite integer $N\ge1$, a reverse-kernel sampler returns $\pi_y$ if a supplied posterior path probability $\Pi_y$ on $(X_0,\ldots,X_N)$ has terminal marginal $\nu_N$, its exact reverse conditional probability kernels are $R_k$, and the sampler starts from $\nu_N$ and uses each $R_k$ with no projection. A learned score, plug-in likelihood, or other surrogate does not supply that certificate by itself.

2. **Variational inference** selects a probability density $q$ with respect to $\lambda$, with $q\ll\pi_y$, and optimizes the evidence lower bound (ELBO) $\operatorname{ELBO}(q)=\int q(x)\log(\ell_y(x)\rho_0(x)/q(x))\,\lambda(dx)$ when the logarithmic integrals are finite, using the convention that the integrand is zero where $q=0$. Its output law is the selected $q$; it equals the posterior only when $q=\pi_y$.

3. **Latent optimization** specifies a latent domain $\mathsf Z$, a generator map $G:\mathsf Z\to\mathbb R^d$, and a deterministic finite-iteration procedure that returns $\widehat z$ using the data-residual objective $\|y-\mathcal A(G(z))\|^2$, without assuming global minimization. Its output law is the point mass $\delta_{G(\widehat z)}$. If $\pi_y$ is not a point mass, this output law is not a posterior draw. A maximum-a-posteriori (MAP) estimate here means a maximizer of the chosen posterior density $Z_y^{-1}\ell_y\rho_0$ with respect to $\lambda$; the measurement-residual objective alone does not establish that claim.

4. **Markov chain Monte Carlo (MCMC)** uses a probability kernel $K_y$ on the Borel space $\mathbb R^d$, and **sequential Monte Carlo (SMC)** produces a finite weighted particle measure $\widehat\pi_J=\sum_{j=1}^J w_j\delta_{x_j}$ for an integer $J\ge1$, with $w_j\ge0$ and $\sum_jw_j=1$, where $\delta_x$ is unit mass at $x$. If $\pi_y$ is invariant for $K_y$ and a Markov chain starts with law $\pi_y$, every finite-step marginal remains $\pi_y$; invariance alone does not make every initial law exact after finitely many steps. A realized weighted particle measure equals the posterior only when the two measures are equal; every finite empirical measure differs from a non-atomic posterior, meaning one that assigns zero mass to each singleton.

These are law-level distinctions, not performance claims about any trained system.

## Example references

[[lem-ip-conditional-score-and-tweedie-identities]]

[[def-ip-diffusion-prior-score-and-measurement-score]]

[[alg-ip-measurement-guided-diffusion-reconstruction]]

[[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[Daras et al., §2.4.4 and §§3.1–3.4](https://arxiv.org/pdf/2410.00083)

[Song et al., §5](https://arxiv.org/pdf/2011.13456)

[Chung et al., §3.1](https://arxiv.org/pdf/2209.14687)

[Prince, Chapter 18, “Diffusion models”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html)

## Facts & Assumptions

**Given:** A proper posterior $\pi_y$, the exact conditional-score decomposition, a posterior path law factorized by its exact reverse conditional kernels when that sufficient exactness condition is considered, a variational density $q$ with finite log integrals, and a Markov kernel $K_y$ when the MCMC comparison is considered.

[A1] $\pi_y$ is the probability measure with density $Z_y^{-1}\ell_y\rho_0$ and positive finite evidence specified in the Example.

[A2] For the exact finite reverse-kernel case, a joint posterior path law $\Pi_y$ on $(X_0,\ldots,X_N)$ is supplied with terminal marginal $\nu_N$ and Borel reverse conditional kernels $R_k$ such that $\Pi_y(dx_{0:N})=\nu_N(dx_N)\prod_{k=N}^{1}R_k(dx_{k-1}\mid x_k,y)$ and $\Pi_y(X_0\in\cdot)=\pi_y$.

[A3] For the variational calculation, $q$ is a density with respect to $\lambda$, $q\ll\pi_y$, and the displayed logarithmic integrals are finite.

[A4] For the latent optimization comparison, the initialization and tie-breaking are fixed, so the returned point $G(\widehat z)$ is deterministic for the fixed observation.

[A5] For the particle illustration, take $\pi_y$ to be uniform Lebesgue probability on $[0,1]$, so every finite subset has $\pi_y$-measure zero.

[F1] The exact conditional score under Gaussian noising is the sum of the prior score and the averaged measurement score. [[lem-ip-conditional-score-and-tweedie-identities]]

[F2] The reverse-kernel algorithm takes a terminal law, corrected probability kernels and optional projections, and makes no posterior-exactness claim by default. [[alg-ip-measurement-guided-diffusion-reconstruction]]

[F3] A probability measure $\pi$ is invariant for a probability kernel $K$ when $\int K(x,A)\,\pi(dx)=\pi(A)$ for every measurable $A$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

## Verification

**Given:** The assumptions in the Example and in [A1]–[A5].

1.1 In the explicit-score family, [F1] identifies the exact conditional score. In the finite-kernel instance satisfying [A2], drawing $X_N$ from $\nu_N$ and successively applying $R_N,R_{N-1},\ldots,R_1$ generates the joint law $\Pi_y$ by its stated kernel factorization; its $X_0$ marginal is therefore $\pi_y$. The algorithm in [F2] gives this output law when its supplied terminal law and transition kernels are exactly those factors and the projection is the identity. [A2, F1, F2, construct]

1.2 Since $\pi_y(x)=Z_y^{-1}\ell_y(x)\rho_0(x)$, the integrability in [A3] gives $\operatorname{ELBO}(q)=\int q\log(Z_y\pi_y/q)\,d\lambda=\log Z_y-\int q\log(q/\pi_y)\,d\lambda$. Thus the variational output law is its selected $q$; it is the target law in the exact case $q=\pi_y$, while a distinct $q$ is a distinct measure. [A1, A3, algebra]

1.3 Under [A4], repeated execution of the deterministic latent optimizer returns the single value $G(\widehat z)$, so its output law is $\delta_{G(\widehat z)}$. If $\pi_y$ is not a point mass, this point mass is not $\pi_y$. The stated objective contains only the measurement residual; it does not specify the negative log posterior or a global optimizer of that posterior objective, so the given inputs establish no MAP conclusion. [A1, A4, construct]

1.4 If a Markov chain starts with law $\pi_y$, one transition has law $\pi_yK_y=\pi_y$ by [F3]; induction gives the same marginal after every finite number of transitions. In contrast, on $\{0,1\}$ let $\pi=(\delta_0+\delta_1)/2$ and let $K(x,B)=\mathbf 1_B(x)$. Then $\pi K=\pi$, but a chain starting at $\delta_0$ remains $\delta_0$ after each finite step and is never $\pi$. [F3, algebra]

2.1 A realized weighted empirical particle measure $\widehat\pi_K=\sum_{j=1}^K w_j\delta_{x_j}$ is supported on the finite set $S=\{x_1,\ldots,x_K\}$. By [A5], the target gives $S$ measure zero while $\widehat\pi_K(S)=1$, so the finite empirical measure is not the target. This does not determine the marginal law of a randomly selected particle; that exactness is a separate algorithm-specific claim. [A5, construct] ∎
