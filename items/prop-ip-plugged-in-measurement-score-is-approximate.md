---
id: prop-ip-plugged-in-measurement-score-is-approximate
kind: proposition
title: Posterior-mean plug-in measurement scores need not be exact
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - lem-ip-conditional-score-and-tweedie-identities
  - def-ip-diffusion-prior-score-and-measurement-score
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems (2024), arXiv:2410.00083
      url: https://arxiv.org/pdf/2410.00083
    - title: Hyungjin Chung et al., Diffusion Posterior Sampling for General Noisy Inverse Problems (2023), arXiv:2209.14687
      url: https://arxiv.org/pdf/2209.14687
---

## Statement

Let $X_0$ take values $-1$ and $1$ with equal probability, let $X_\sigma=X_0+\sigma Z$ with $\sigma>0$ and standard Gaussian noise independent of $X_0$, and let $Y=X_0+\tau W$ for $W\sim N(0,1)$ independent of $(X_0,Z)$, with $\tau>0$. At the observation $y=0$, the exact measurement density $r_\sigma(0\mid x)=\mathbb E[\varphi_\tau(-X_0)\mid X_\sigma=x]$ is constant in $x$, so its score is zero. The exact posterior mean is $m_\sigma(x)=\mathbb E[X_0\mid X_\sigma=x]=\tanh(x/\sigma^2)$, where $\tanh(t)=(e^{2t}-1)/(e^{2t}+1)$. The plug-in density $\varphi_\tau(-m_\sigma(x))$ has score $-m_\sigma(x)m_\sigma'(x)/\tau^2$, which is nonzero for $x\ne0$. Thus evaluating the measurement likelihood at the exact posterior mean does not in general recover the exact measurement score; this example does not rule out equality in special models.

## Statement references

[[lem-ip-conditional-score-and-tweedie-identities]]

[[def-ip-diffusion-prior-score-and-measurement-score]]

[Daras et al., §2.4.4, Eq. 2.20, and §3.1.4, Eq. 3.8](https://arxiv.org/pdf/2410.00083)

[Chung et al., §3.1, Eqs. 7–15 and Theorem 1](https://arxiv.org/pdf/2209.14687)

## Facts & Assumptions

**Given:** The two-point prior, the independent Gaussian noising and observation noises, and $\sigma,\tau>0$.

[A1] $P(X_0=1)=P(X_0=-1)=1/2$ and $X_\sigma=X_0+\sigma Z$ with $Z$ standard Gaussian independent of $X_0$.

[A2] The observation noise $W\sim N(0,1)$ is independent of $(X_0,Z)$, and $Y=X_0+\tau W$.

[A3] The Gaussian density is $\varphi_\tau(v)=(\sqrt{2\pi}\tau)^{-1}\exp(-v^2/(2\tau^2))$.

[F1] Under additive Gaussian noising, the posterior mean is $m_\sigma(x)=x+\sigma^2\nabla\log p_\sigma(x)$. [[lem-ip-conditional-score-and-tweedie-identities]]

[F2] The exact measurement score is $g_\sigma(x,y)=\partial_x\log r_\sigma(y\mid x)$, where $r_\sigma(y\mid x)$ averages the clean-state likelihood over the conditional law of $X_0$ given $X_\sigma=x$. [[def-ip-diffusion-prior-score-and-measurement-score]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $x\in\mathbb R$, Bayes' formula gives $\displaystyle\frac{P(X_0=1\mid X_\sigma=x)}{P(X_0=-1\mid X_\sigma=x)}=\frac{\varphi_\sigma(x-1)}{\varphi_\sigma(x+1)}=\exp(2x/\sigma^2)$. Therefore the posterior mean is $(e^{2x/\sigma^2}-1)/(e^{2x/\sigma^2}+1)=\tanh(x/\sigma^2)$, agreeing with the conditional-mean version in [F1]. [A1, F1, algebra]

1.2 At $y=0$, both possible clean states have the same likelihood density: $\varphi_\tau(0-1)=\varphi_\tau(0+1)=\varphi_\tau(1)$. Averaging these equal values over the conditional law from [F2] gives $r_\sigma(0\mid x)=\varphi_\tau(1)$ for every $x$, so its logarithmic derivative and the exact measurement score are zero. [A1, A2, A3, F2, algebra]

2.1 The plug-in log density is $\log\varphi_\tau(-m_\sigma(x))=-\log(\sqrt{2\pi}\tau)-m_\sigma(x)^2/(2\tau^2)$. Differentiating the quotient expression in step 1.1 gives $m_\sigma'(x)=4e^{2x/\sigma^2}/(\sigma^2(e^{2x/\sigma^2}+1)^2)>0$. Hence the plug-in score is $-m_\sigma(x)m_\sigma'(x)/\tau^2$, which is nonzero whenever $x\ne0$. [A3, step 1.1, algebra]

3.1 The exact score in step 1.2 and the plug-in score in step 2.1 disagree for every nonzero $x$. Thus the exact posterior mean does not, in general, make likelihood-at-the-mean guidance equal to the exact measurement score. The calculation permits special cases of equality but refutes a general identity. [step 1.2, step 2.1, given] ∎
