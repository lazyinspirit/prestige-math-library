---
id: ex-stationary-ornstein-uhlenbeck-reversal
kind: example
title: A stationary Ornstein–Uhlenbeck diffusion reverses to itself
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion-examples
dependency_level: 3
deps:
- def-axiom-of-choice
- def-ito-sde-and-strong-solution
- def-standard-normal-and-normal-laws
- lem-deterministic-ito-integral-has-gaussian-independent-increments
- lem-normal-density-has-total-mass-one
- thm-global-strong-well-posedness-for-lipschitz-ito-sdes
- thm-markov-diffusion-reversal-by-bayes-kernels
- thm-multidimensional-ito-formula-for-brownian-driven-processes
- lem-characteristic-functions-under-affine-maps-and-independent-sums
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references: []
---

## Example

Assume AC. Let $\theta>0$, $\sigma>0$, $\mu\in\mathbb R$, and let $X_0\sim N(\mu,\sigma^2/(2\theta))$ be independent of a standard Brownian motion. Consider
$$dX_t=-\theta(X_t-\mu)dt+\sigma dW_t.$$
For every finite horizon, $X_t$ is stationary with density $N(\mu,\sigma^2/(2\theta))$. Its time reversal has the same transition kernels and satisfies the same Ornstein–Uhlenbeck SDE; equivalently, the general reverse-drift formula gives $-\theta(x-\mu)$.

## Example references

[[def-standard-normal-and-normal-laws|Normal-law conventions]]

## Facts & Assumptions

**Given:** AC, $\theta>0$, $\sigma>0$, an independent initial $N(\mu,\sigma^2/(2\theta))$ state, and standard Brownian motion.

[A1] AC is assumed by the Itô, deterministic Gaussian-integral, and reverse Brownian interfaces used below. [[def-axiom-of-choice]]

[F1] Itô's formula for the product of a differentiable deterministic factor and a Brownian-driven process gives the integrating-factor representation. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F2] A deterministic Itô integral over $(s,t]$ is centered Gaussian with variance its squared-integrand integral and is independent of the earlier filtration. [[lem-deterministic-ito-integral-has-gaussian-independent-increments]]

[F3] A sum of independent Gaussian variables is Gaussian with mean and variance obtained by adding their means and variances; the characteristic function of an independent sum is the product of characteristic functions. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]] [[def-standard-normal-and-normal-laws]]

[F4] The normal law $N(m,q)$ has density $(2\pi q)^{-1/2}\exp(-(x-m)^2/(2q))$ and the stated mean and variance. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F5] For positive smooth marginal and transition densities satisfying the forward identities and integration conditions, the reversed generator has drift $-b+\nabla\!\cdot a+a\nabla\log p$; a well-posed reverse martingale problem gives the reverse SDE. [[thm-markov-diffusion-reversal-by-bayes-kernels]]

[F6] Globally Lipschitz coefficients with linear growth give a unique nonexplosive strong solution; this also gives well-posedness for the reverse OU coefficients. [[def-ito-sde-and-strong-solution]] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

## Verification
1.1 Applying [F1] to $e^{\theta t}(X_t-\mu)$ gives, for $t\ge s$, $\displaystyle X_t-\mu=e^{-\theta(t-s)}(X_s-\mu)+\sigma\int_s^t e^{-\theta(t-r)}dW_r.$ The last term is independent of $\mathcal F_s$ and by [F2] is centered normal with variance $\displaystyle \sigma^2\int_s^t e^{-2\theta(t-r)}dr=\frac{\sigma^2}{2\theta}\left(1-e^{-2\theta(t-s)}\right).$ With $q=\sigma^2/(2\theta)$ and $X_0-\mu\sim N(0,q)$, the mean of $X_t$ is $\mu$ and its variance is $e^{-2\theta t}q+q(1-e^{-2\theta t})=q$. Independence and Gaussian addition [F3, F4] therefore give the same marginal law at every $t$. [A1, F1, F2, F3, F4, given]

2.1 Fix $s<t$ and write $r=e^{-\theta(t-s)}$, $U=X_s-\mu$, and $V=X_t-\mu=rU+\eta$, where $U\sim N(0,q)$ and $\eta\sim N(0,q(1-r^2))$ is independent of $U$ by step 1.1. Their joint density is proportional to $\displaystyle \exp\!\left[-\frac12\left(\frac{u^2}{q}+\frac{(v-ru)^2}{q(1-r^2)}\right)\right],\qquad \frac{u^2}{q}+\frac{(v-ru)^2}{q(1-r^2)}=\frac{(u-rv)^2}{q(1-r^2)}+\frac{v^2}{q}.$ Thus $X_s\mid X_t=y$ has law $N(\mu+r(y-\mu),q(1-r^2))$, exactly the forward transition law over the same time gap. Bayes' formula shows that the reversed transition kernels equal the forward OU transition kernels. [F2, F3, F4, step 1.1, algebra]

3.1 The stationary score is $\nabla\log p(x)=-(x-\mu)/q=-2\theta(x-\mu)/\sigma^2$. Here $b(x)=-\theta(x-\mu)$, $a(x)=\sigma^2$, and $\nabla\!\cdot a=0$, so the reverse drift in [F5] is $\displaystyle -b(x)+a(x)\nabla\log p(x)=\theta(x-\mu)-2\theta(x-\mu)=-\theta(x-\mu).$ The reverse martingale problem is well posed and nonexplosive by [F6], since these reversed coefficients are the same globally Lipschitz OU coefficients. Hence the reversed diffusion satisfies the same SDE and has the same transition kernels as the forward stationary process. [F4, F5, F6, step 2.1, algebra] ∎