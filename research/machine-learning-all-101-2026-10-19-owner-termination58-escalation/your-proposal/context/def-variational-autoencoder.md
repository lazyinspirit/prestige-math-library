---
id: def-variational-autoencoder
kind: definition
title: "Variational autoencoder model, encoder, and ELBO"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-variational-family-and-elbo
  - thm-bayes-formula-for-dominated-kernels
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Diederik P. Kingma and Max Welling, Auto-Encoding Variational Bayes, arXiv:1312.6114v1"
      url: "https://arxiv.org/pdf/1312.6114v1"
      locator: "Complete 9-page PDF read; §§2.1–2.4 and §3, PDF pp. 2–5."
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2016.pdf"
      locator: "§§2.1–2.2, PDF pp. 3–5."
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "Complete 9-page course note read; §§2.3–2.3.2, PDF pp. 3–4."
---

## Definition

Let $(\mathcal X,\mathcal A_X,\mu_X)$ and $(\mathcal Z,\mathcal A_Z,\mu_Z)$ be sigma-finite measure spaces; that is, each has a countable measurable cover by sets of finite measure. Let $\Theta\subseteq\mathbb R^{d_\theta}$ and $\Phi\subseteq\mathbb R^{d_\phi}$ be parameter sets of finite dimension. A latent-variable model with parameter $\theta\in\Theta$ consists of a measurable prior density $r_\theta(z)\ge0$ on $\mathcal Z$ and a decoder density $d_\theta(x\mid z)\ge0$ on $\mathcal X$ for each $z$, with
$$\int_{\mathcal Z} r_\theta(z)\,d\mu_Z(z)=1,\qquad \int_{\mathcal X} d_\theta(x\mid z)\,d\mu_X(x)=1.$$
The decoder is jointly measurable in $(x,z)$, and the joint model density is
$$p_\theta(x,z)=\gamma_\theta(z;x):=r_\theta(z)d_\theta(x\mid z)$$
relative to $\mu_X\otimes\mu_Z$. The decoder is also called the generative model: after drawing $z$ from the prior, it assigns a conditional density to the observation $x$.

For a fixed observation $x$, the evidence density and posterior density are
$$Z_\theta(x):=p_\theta(x):=\int_{\mathcal Z}\gamma_\theta(z;x)\,d\mu_Z(z),\qquad \pi_\theta(z\mid x):=\frac{\gamma_\theta(z;x)}{Z_\theta(x)}.$$
Use this posterior only when $0<Z_\theta(x)<\infty$. A variational encoder is a jointly measurable family of functions $q_\phi(z\mid x)\ge0$ on $\mathcal Z$, parameterized by $\phi\in\Phi$ and normalized by
$$\int_{\mathcal Z}q_\phi(z\mid x)\,d\mu_Z(z)=1$$
for every $(\phi,x)$; the same parameter $\phi$ is used for each observation. For an admissible triple $(\theta,\phi,x)$ require $0<Z_\theta(x)<\infty$ and
$$q_\phi(z\mid x)=0\quad\mu_Z\text{-almost everywhere on }\{z:\pi_\theta(z\mid x)=0\},\qquad \int_{\mathcal Z}q_\phi(z\mid x)\bigl(|\log\gamma_\theta(z;x)|+|\log q_\phi(z\mid x)|\bigr)\,d\mu_Z(z)<\infty.$$
Terms multiplied by $q_\phi=0$ are defined to be zero. The evidence lower bound is
$$\operatorname{ELBO}_{\theta,\phi}(x):=\int_{\mathcal Z}q_\phi(z\mid x)\bigl(\log\gamma_\theta(z;x)-\log q_\phi(z\mid x)\bigr)\,d\mu_Z(z).$$

A pathwise representation of the encoder at $x$ is a probability space $(\mathcal E,\mathcal F,\rho)$ whose law $\rho$ is independent of $\theta$ and $\phi$, together with a measurable map $g_\phi(\epsilon,x)$ such that the law of $g_\phi(\epsilon,x)$ for $\epsilon\sim\rho$ is the measure with density $q_\phi(\cdot\mid x)$ relative to $\mu_Z$. This representation defines how to generate encoder samples; it does not by itself assert that differentiation may pass through an expectation.

## Definition references

[[def-variational-family-and-elbo|The generic admissibility conditions and ELBO convention]].

[[thm-bayes-formula-for-dominated-kernels|The posterior-kernel formula on positive finite evidence fibres]].

[Kingma and Welling, Auto-Encoding Variational Bayes, arXiv v1](https://arxiv.org/pdf/1312.6114v1).

[Blei, Kucukelbir, and McAuliffe, Variational Inference: A Review for Statisticians](https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2016.pdf).

[Zheng, Hu, and Deng, 10-708 Lecture 13: Variational Inference II](https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf).
