---
id: thm-gaussian-forward-and-posterior-kernels
kind: theorem
title: Closed Gaussian forward marginal and conditioned posterior
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-forward-gaussian-diffusion-chain
  - def-multivariate-normal-law
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-multivariate-normal-conditional-law
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the finite Gaussian-stack lemma and is required by the multivariate-normal conditional-law supplier. No stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
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

## Statement

Assume AC and the finite Gaussian forward chain with dimension $d\ge1$, horizon $T\ge1$, and schedule $0<\beta_t<1$ from the preceding definition. For each $x_0\in\mathbb R^d$ and $1\le t\le T$,
$$q(x_t\mid x_0)=N_d\!\left(\sqrt{\bar\alpha_t}\,x_0,(1-\bar\alpha_t)I_d\right).$$
For every $2\le t\le T$, the conditional law given both endpoints is
$$q(x_{t-1}\mid x_t,x_0)=N_d\!\left(\frac{\sqrt{\bar\alpha_{t-1}}\beta_t}{1-\bar\alpha_t}x_0+\frac{\sqrt{\alpha_t}(1-\bar\alpha_{t-1})}{1-\bar\alpha_t}x_t,\ \tilde\beta_t I_d\right),\qquad \tilde\beta_t=\frac{\beta_t(1-\bar\alpha_{t-1})}{1-\bar\alpha_t}>0.$$
The formula for $q(x_{t-1}\mid x_t,x_0)$ is only asserted for $t\ge2$; at $t=1$ the conditioning on $x_0$ makes $q(x_0\mid x_1,x_0)$ a point mass, not a Lebesgue density. The Gaussian conditional above does not assert that the unconditional reverse law $q(x_{t-1}\mid x_t)$ is Gaussian.

## Statement references

Closed Gaussian forward marginal, posterior mean, and posterior variance: [Ho, Jain, and Abbeel, Eqs. (4), (6), and (7)](https://arxiv.org/pdf/2006.11239).

Forward Gaussian composition and conditioned posterior: [Prince, Chapter 18, “The diffusion kernel” and “The tractable conditional”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).

## Facts & Assumptions

**Given:** AC, a fixed $x_0\in\mathbb R^d$, finite $d,T\ge1$, and $0<\beta_t<1$ for every $t$.

[A1] AC is assumed by the Gaussian-stack construction and the multivariate-normal conditional-law theorem. [[def-axiom-of-choice]].

[F1] The forward path density factors into normalized transition densities $\phi_{d,\beta_s}(x_s;\sqrt{\alpha_s}x_{s-1})$, with $\alpha_s=1-\beta_s$ and $\bar\alpha_s=\prod_{r=1}^s\alpha_r$. [[def-forward-gaussian-diffusion-chain]].

[F2] A multivariate normal law is characterized by its scalar projection laws and has the stated mean and covariance. [[def-multivariate-normal-law]].

[F3] A finite stack of mutually independent Gaussian vectors is jointly multivariate normal, even when a covariance is singular. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]].

[F4] If $(X,Y)$ is jointly Gaussian with positive-semidefinite block covariance and the observed block covariance $B$ is positive definite, then its conditional law has mean $a+CB^{-1}(y-b)$ and covariance $A-CB^{-1}C^T$. [[thm-multivariate-normal-conditional-law]].

## Proof

**Proof technique:** standardize each transition to an independent Gaussian innovation, compute its finite affine sum, and apply the positive-definite-observation conditional-law formula to adjacent states.

**Given:** The hypotheses in the Statement.

1.1 Under the forward path law with fixed $x_0$, for each $s$ put $\xi_s=(X_s-\sqrt{\alpha_s}X_{s-1})/\sqrt{\beta_s}$. Changing variables $x_s=\sqrt{\alpha_s}x_{s-1}+\sqrt{\beta_s}z$ in the last transition density in [F1] gives the conditional density $\phi_{d,1}(z;0)$, independent of the past. Thus for Borel past events $A$ and Borel $B\subseteq\mathbb R^d$, $\mathbb P(X_{1:s-1}\in A,\xi_s\in B)=\mathbb P(X_{1:s-1}\in A)N_d(0,I_d)(B)$. Each $\xi_s$ is standard Gaussian and independent of the previous path; since earlier innovations are measurable functions of that path, $\xi_1,\ldots,\xi_t$ are mutually independent for every $t$. [A1, F1, F2, given, algebra]

2.1 Iterating $X_t=\sqrt{\alpha_t}X_{t-1}+\sqrt{\beta_t}\xi_t$ gives $X_t=\sqrt{\bar\alpha_t}x_0+\sum_{s=1}^t\sqrt{\beta_s\prod_{r=s+1}^t\alpha_r}\,\xi_s$. By step 1.1 and [F3], the finite innovation stack is jointly Gaussian. Thus each scalar projection of $X_t$ is normal with mean $u\cdot\sqrt{\bar\alpha_t}x_0$ and, by independence, variance $u^T\left(\sum_{s=1}^t\beta_s\prod_{r=s+1}^t\alpha_r I_d\right)u$; [F2] identifies its law as multivariate normal with that mean and covariance. Since $\beta_s\prod_{r=s+1}^t\alpha_r=\prod_{r=s+1}^t\alpha_r-\prod_{r=s}^t\alpha_r$, the covariance sum telescopes to $(1-\bar\alpha_t)I_d$. [A1, F1, F2, F3, given, step 1.1, algebra]

3.1 Fix $t\ge2$. By step 2.1, $X_{t-1}$ is Gaussian, and by step 1.1, $\xi_t$ is independent of the past and standard Gaussian. The finite-stack result [F3] makes $(X_{t-1},\xi_t)$ jointly Gaussian. For any $u,v\in\mathbb R^d$, the projection of $(X_{t-1},X_t)$ is $(u+\sqrt{\alpha_t}v)\cdot X_{t-1}+\sqrt{\beta_t}v\cdot\xi_t$, a scalar projection of that Gaussian stack; hence [F2] makes the pair jointly Gaussian. Its means are $\sqrt{\bar\alpha_{t-1}}x_0$ and $\sqrt{\bar\alpha_t}x_0$, and its covariance blocks are $A=(1-\bar\alpha_{t-1})I_d$, $C=\sqrt{\alpha_t}(1-\bar\alpha_{t-1})I_d$, and $B=(1-\bar\alpha_t)I_d$. The full block covariance is positive semidefinite because each of its quadratic forms is the variance of a scalar projection of $(X_{t-1},X_t)$. Since $0<\alpha_s<1$, we have $0<\bar\alpha_t<1$, so $B$ is positive definite. [A1, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Applying [F4] with these blocks gives conditional covariance $A-CB^{-1}C^T=\left((1-\bar\alpha_{t-1})-\frac{\alpha_t(1-\bar\alpha_{t-1})^2}{1-\bar\alpha_t}\right)I_d=\frac{\beta_t(1-\bar\alpha_{t-1})}{1-\bar\alpha_t}I_d$ and conditional mean $\sqrt{\bar\alpha_{t-1}}x_0+\frac{\sqrt{\alpha_t}(1-\bar\alpha_{t-1})}{1-\bar\alpha_t}(x_t-\sqrt{\bar\alpha_t}x_0)=\frac{\sqrt{\bar\alpha_{t-1}}\beta_t}{1-\bar\alpha_t}x_0+\frac{\sqrt{\alpha_t}(1-\bar\alpha_{t-1})}{1-\bar\alpha_t}x_t$. For $t\ge2$, $\bar\alpha_{t-1}<1$ and $\beta_t>0$, so $\tilde\beta_t>0$. This is the asserted conditional law; no density for the degenerate $t=1$ conditional was used. [A1, F1, F4, step 3.1, algebra] ∎

## Source notes

Joint Gaussian conditional law and its positive-definite observed covariance hypothesis: [[thm-multivariate-normal-conditional-law]].

Finite independent Gaussian stack: [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]].
