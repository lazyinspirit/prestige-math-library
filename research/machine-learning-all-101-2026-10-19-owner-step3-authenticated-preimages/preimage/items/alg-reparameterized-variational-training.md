---
id: alg-reparameterized-variational-training
kind: algorithm
title: "Reparameterized variational training"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-variational-autoencoder
  - cor-vae-elbo-kl-decomposition
  - thm-reparameterization-gradient-under-dominated-differentiation
  - def-axiom-of-choice
justified_by:
  - lem-reparameterized-variational-training-finite-run-terminates
axiom_use: "AC is used only through the VAE ELBO corollary to call the objective a lower bound on log evidence. The finite-data sampling and pathwise update require no additional choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Diederik P. Kingma and Max Welling, Auto-Encoding Variational Bayes, arXiv:1312.6114v1"
      url: "https://arxiv.org/pdf/1312.6114v1"
      locator: "§§2.3–2.4 and Algorithm 1, PDF pp. 2–4; §3 and equation (11), PDF pp. 4–5 for the special Gaussian analytic term."
---

## Definition

Inputs are a fixed nonempty finite data set $X=(x_1,\ldots,x_N)$; a VAE model and admissible encoder from the preceding definition; a parameter-independent base law $\rho$ and pathwise map $g_\phi$ for every $x_i$; an initial parameter $\eta_0=(\theta_0,\phi_0)$; a finite positive integer $T$; and positive learning rates $\alpha_0,\ldots,\alpha_{T-1}$. Require the hypotheses of the dominated pathwise-gradient theorem at every parameter value reached by the procedure, and require each update below to remain in its open admissible parameter domain. Let $\mathcal N$ be the union of the theorem's common null set for finite positive log values and its null set on which the sample-path $C^1$ condition may fail; thus $\mathcal N$ is a common $\rho$-null set for all data indices and parameter values.

Set $\eta_0=(\theta_0,\phi_0)$. For each $t=0,\ldots,T-1$:

1. Draw $I_t$ uniformly from $\{1,\ldots,N\}$ and draw $\epsilon_t$ from $\rho$, independently of $I_t$ and of earlier random draws.
2. If $\epsilon_t\in\mathcal N$, set $h_t=0$. Otherwise set $z_t=g_{\phi_t}(\epsilon_t,x_{I_t})$ and evaluate
   $$h_t=\log\gamma_{\theta_t}(z_t;x_{I_t})-\log q_{\phi_t}(z_t\mid x_{I_t}).$$
3. If $\epsilon_t\in\mathcal N$, set $G_t=0$. Otherwise, holding $\epsilon_t$ and $I_t$ fixed, compute the Euclidean gradient
   $$G_t=\nabla_{(\theta,\phi)}\bigl[\log\gamma_\theta(g_\phi(\epsilon_t,x_{I_t});x_{I_t})-\log q_\phi(g_\phi(\epsilon_t,x_{I_t})\mid x_{I_t})\bigr]\big|_{(\theta,\phi)=\eta_t}.$$
4. Update $\eta_{t+1}=\eta_t+\alpha_tG_t$.

Return $(\eta_0,\ldots,\eta_T)$ and $(h_t,G_t)_{0\le t<T}$. This finite procedure specifies stochastic ascent on the finite-average ELBO; it makes no claim that the iterates converge or reach a global maximum.

## Definition references

[[def-variational-autoencoder|The VAE model, ELBO, and fixed-law encoder sampler]].

[[thm-reparameterization-gradient-under-dominated-differentiation|The conditions under which these pathwise updates estimate the finite-average ELBO gradient]].

## Remarks

Under the stated derivative-envelope and second-moment hypotheses, the expected update direction before multiplication by $\alpha_t$ is the gradient of the finite-average ELBO and has finite coordinate variances. The Axiom of Choice identifies this ELBO as a lower bound on log evidence under the corollary's hypotheses.

If the prior and encoder are Gaussian and the expectation of their log-density difference is available analytically, that term can be evaluated exactly instead of sampled. This removes Monte Carlo variation from that term only; the decoder log-likelihood may still be sampled, and no universal variance or training guarantee follows.

## Remarks references

[[thm-reparameterization-gradient-under-dominated-differentiation|The finite-average pathwise-gradient theorem]].

[[cor-vae-elbo-kl-decomposition|The AC-dependent ELBO/KL identity]].

[Kingma and Welling, Auto-Encoding Variational Bayes, arXiv v1](https://arxiv.org/pdf/1312.6114v1).
