---
id: def-forward-gaussian-diffusion-chain
kind: definition
title: Finite Gaussian forward chain and Gaussian reverse model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-multivariate-normal-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
axiom_use: "AC is required by the multivariate-normal and positive-definite Gaussian-density interfaces and supplies the countable-choice hypothesis for the Euclidean product-Lebesgue identification. No additional choice is used."
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

Assume AC. Let $d,T\ge1$ be finite integers, let $I_d$ be the $d\times d$ identity matrix, and let $\beta_1,\ldots,\beta_T\in(0,1)$. Set $\alpha_t=1-\beta_t$, $\bar\alpha_0=1$, and $\bar\alpha_t=\prod_{s=1}^t\alpha_s$. Write $\lambda_d$ for Lebesgue measure on $\mathbb R^d$ and define, for $v>0$,
$$\phi_{d,v}(y;m)=(2\pi v)^{-d/2}\exp\!\left(-\frac{\|y-m\|_2^2}{2v}\right),\qquad y,m\in\mathbb R^d.$$
The notation $\|z\|_2^2=\sum_{i=1}^d z_i^2$ is the squared Euclidean norm. The displayed function is the Lebesgue density of $N_d(m,vI_d)$.

For each fixed $x_0\in\mathbb R^d$, the forward chain has path density on $(\mathbb R^d)^T$
$$q(x_{1:T}\mid x_0)=\prod_{t=1}^T \phi_{d,\beta_t}(x_t;\sqrt{\alpha_t}\,x_{t-1}).$$
Thus its transition from $x_{t-1}$ to $x_t$ is Gaussian with mean $\sqrt{\alpha_t}\,x_{t-1}$ and covariance $\beta_t I_d$. Each factor is a normalized density, and finite successive integration of the nonnegative product gives a probability density.

For a generic adjacent pair, the two model directions are shown below. The arrows indicate the direction in which each conditional density generates its target state; they assert no equality or inverse relation between the kernels.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (previous) at (0,0) {$x_{t-1}$};
  \node (current) at (4,0) {$x_t$};
  \draw[->] (previous) to[bend left=24] node[midway,above] {$q(x_t\mid x_{t-1})$} (current);
  \draw[->] (current) to[bend left=24] node[midway,below] {$p_{\theta,t}(x_{t-1}\mid x_t)$} (previous);
\end{tikzpicture}
```

A learned reverse Gaussian model consists of finite-valued Borel maps $\mu_{\theta,t}:\mathbb R^d\to\mathbb R^d$ and fixed variances $\sigma_t^2\in(0,\infty)$, for $1\le t\le T$. It is the joint density
$$p_\theta(x_{0:T})=\phi_{d,1}(x_T;0)\prod_{t=1}^T\phi_{d,\sigma_t^2}(x_{t-1};\mu_{\theta,t}(x_t)).$$
Its prior is $p(x_T)=N_d(0,I_d)$, and its marginal density at $x_0$ is
$$p_\theta(x_0)=\int_{(\mathbb R^d)^T}p_\theta(x_{0:T})\,d\lambda_d(x_1)\cdots d\lambda_d(x_T),$$
whenever this integral is finite. The joint reverse density is normalized by successive integration of its Gaussian transition factors followed by the prior density.

For $t=1$, the forward-chain conditional $q(x_0\mid x_1,x_0)$ assigns probability one to every Borel set containing $x_0$ and zero to every Borel set not containing $x_0$; it is not a Lebesgue density. The separate learned reverse likelihood $p_\theta(x_0\mid x_1)$ is the Gaussian density above with variance $\sigma_1^2>0$.

## Definition references

Multivariate normal law and covariance convention: [[def-multivariate-normal-law]].

Positive-definite multivariate normal density: [[thm-nondegenerate-multivariate-normal-law-has-density]].

Lebesgue measure and its measurable sets: [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]].

Finite product measure: [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]].

Iterated integration for nonnegative products: [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

Product Euclidean Lebesgue measure: [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]].

Forward chain and reverse model: [Ho, Jain, and Abbeel, §§2–3](https://arxiv.org/pdf/2006.11239).

Forward Gaussian kernels: [Prince, Chapter 18, “The diffusion kernel”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).
