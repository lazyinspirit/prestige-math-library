---
id: thm-reparameterization-gradient-under-dominated-differentiation
kind: theorem
title: "Dominated pathwise differentiation for VAE training"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-variational-autoencoder
  - def-simulation-gradient-objective-and-payoff-oracle
  - def-pathwise-simulation-gradient-estimator
  - thm-pathwise-simulation-gradient-is-unbiased-under-envelope
  - thm-chain-rule-for-total-derivatives
  - thm-dominated-convergence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Diederik P. Kingma and Max Welling, Auto-Encoding Variational Bayes, arXiv:1312.6114v1"
      url: "https://arxiv.org/pdf/1312.6114v1"
      locator: "§§2.2–2.4, PDF pp. 2–4; the paper's mild conditions are replaced here by an explicit local derivative envelope."
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2016.pdf"
      locator: "§2.2, PDF pp. 4–5, for the ELBO objective and reverse-KL identity."
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "Complete 9-page course note read; §2.3.2, PDF pp. 3–4."
---

## Statement

Let $X=(x_1,\ldots,x_N)$ be a fixed nonempty finite data set, let $\Lambda$ be an open subset of a finite-dimensional Euclidean parameter space for $\eta=(\theta,\phi)$, and fix $\eta_0=(\theta_0,\phi_0)\in\Lambda$. For each $i$, assume the VAE at $(\eta,x_i)$ is admissible and has a pathwise representation $g_\phi(\epsilon,x_i)$ under one parameter-independent probability law $\rho$. Assume there is one $\rho$-null set, common to every $i$ and $\eta\in\Lambda$, outside which $0<q_\phi(g_\phi(\epsilon,x_i)\mid x_i)<\infty$ and $0<\gamma_\theta(g_\phi(\epsilon,x_i);x_i)<\infty$; define the payoff below to be zero on that null set. Define
$$H_i(\eta,\epsilon):=\log\gamma_\theta(g_\phi(\epsilon,x_i);x_i)-\log q_\phi(g_\phi(\epsilon,x_i)\mid x_i),$$
with terms on a common $\rho$-null set defined to be zero. Assume each $H_i$ is jointly measurable and integrable for every $\eta\in\Lambda$. Outside one $\rho$-null set, each $H_i(\cdot,\epsilon)$ is continuously differentiable on $\Lambda$ with continuous gradient, and $\nabla_\eta H_i(\eta,\cdot)$ is measurable for every $\eta$. For every compact neighborhood $K\subset\Lambda$ of $\eta_0$, assume one nonnegative $M_{i,K}\in L^1(\rho)$ satisfies $\|\nabla_\eta H_i(\eta,\epsilon)\|_2\le M_{i,K}(\epsilon)$ for every $\eta\in K$ outside one common null set, and assume $\mathbb E_\rho\|\nabla_\eta H_i(\eta_0,\epsilon)\|_2^2<\infty$.

Let $I$ be uniform on $\{1,\ldots,N\}$ and independent of $\epsilon\sim\rho$. Then the finite-average objective
$$\overline{\mathcal L}(\eta):=\frac1N\sum_{i=1}^N\operatorname{ELBO}_{\theta,\phi}(x_i)$$
is differentiable at $\eta_0$, and its one-example pathwise gradient estimate
$$G(\eta_0,I,\epsilon):=\nabla_\eta H_I(\eta_0,\epsilon)$$
satisfies $\mathbb E[G(\eta_0,I,\epsilon)]=\nabla_\eta\overline{\mathcal L}(\eta_0)$ and has finite coordinate variances. A parameter-independent Gaussian base law alone does not imply the differentiability, envelope, or second-moment hypotheses.

## Statement references

[[def-variational-autoencoder|The VAE ELBO and fixed-law encoder representation]].

[[thm-pathwise-simulation-gradient-is-unbiased-under-envelope|The published pathwise simulation-gradient theorem with a common integrable derivative envelope]].

[[thm-dominated-convergence|Dominated convergence used in the difference-quotient proof]].

[Kingma and Welling, Auto-Encoding Variational Bayes, arXiv v1](https://arxiv.org/pdf/1312.6114v1).

[Blei, Kucukelbir, and McAuliffe, Variational Inference: A Review for Statisticians](https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2016.pdf).

[Zheng, Hu, and Deng, 10-708 Lecture 13: Variational Inference II](https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf).

## Facts & Assumptions

**Given:** A finite nonempty data set, the admissible VAE densities and fixed-law pathwise representations at each data point, the stated local sample-path regularity and common integrable derivative envelopes, and square-integrable pathwise gradients at $\eta_0$.

[F1] [[def-variational-autoencoder]]: the ELBO is the $q_\phi(\cdot\mid x)$-expectation of $\log\gamma_\theta(z;x)-\log q_\phi(z\mid x)$, and the law of $g_\phi(\epsilon,x)$ under $\rho$ has density $q_\phi(\cdot\mid x)$ relative to $\mu_Z$.

[F2] [[def-simulation-gradient-objective-and-payoff-oracle]]: a simulation payoff is jointly measurable and integrable at every parameter, and its objective is its expectation under the fixed probability law.

[F3] [[def-pathwise-simulation-gradient-estimator]]: for a fixed random input, the pathwise estimator is the pointwise derivative of the simulated payoff; this definition alone does not imply unbiasedness.

[F4] [[thm-pathwise-simulation-gradient-is-unbiased-under-envelope]]: for an integrable simulation payoff with almost-sure C1 sample paths, continuous measurable gradients, one common integrable gradient envelope on a neighborhood, and a square-integrable gradient at the base parameter, the objective is differentiable there and its gradient is the expectation of the pathwise gradient; each coordinate then has finite variance.

[F5] [[thm-chain-rule-for-total-derivatives]]: along a parameter segment, the assumed differentiability of the full payoff gives $\frac{d}{dt}H_i(\eta+tv,\epsilon)=D_\eta H_i(\eta+tv,\epsilon)[v]$. No separate differentiability of the sampler or log-density factors is assumed.

[F6] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant permits passage of the limit through the integral.

## Proof

1.1 Fix $i$. By [F3], $G_i(\eta,\epsilon):=\nabla_\eta H_i(\eta,\epsilon)$ is the fixed-noise pathwise estimator. The pushforward condition in [F1] gives $\mathbb E_\rho H_i(\eta,\epsilon)=\operatorname{ELBO}_{\theta,\phi}(x_i)$ for every $\eta$. The absolute log-integrability in the VAE definition makes $H_i$ integrable; its joint measurability and integrability therefore meet the payoff conditions in [F2]. [given, F1, F2, F3]

2.1 Since $\Lambda$ is open, choose a closed ball $K$ centered at $\eta_0$ with $K\subset\Lambda$ and nonempty interior. The common envelope assumed on $K$ is an integrable majorant on an open neighborhood of $\eta_0$; the C1, continuity, measurability and square-integrability hypotheses are exactly those of [F4]. The full proof of [F4] applies the chain rule along parameter segments and then [F6] to the first-order difference quotients under this majorant. It gives $\nabla_\eta\operatorname{ELBO}_{\theta,\phi}(x_i)\vert_{\eta_0}=\mathbb E_\rho\nabla_\eta H_i(\eta_0,\epsilon)$ and finite coordinate variances. [given, F4, F5, F6, step 1.1]

3.1 The finite sum defining $\overline{\mathcal L}$ is differentiable at $\eta_0$ with gradient the average of these $N$ gradients. Independence and uniformity of $I$ give $\mathbb E[G]=N^{-1}\sum_{i=1}^N\mathbb E_\rho\nabla_\eta H_i(\eta_0,\epsilon)$, which is that average gradient. The finite mixture of the stated square-integrable gradients has finite second moment in each coordinate and therefore finite coordinate variance. [given, step 2.1, algebra] ∎
