---
id: ex-stationary-ornstein-uhlenbeck-probability-flow
kind: example
title: Stationary Ornstein–Uhlenbeck score and probability flow
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: score-sdes-and-reverse-time-generation-examples
dependency_level: 2
axiom_base: Full AC
axiom_use: "AC is inherited through the scalar normal, deterministic Itô integral, and Brownian interfaces used in the explicit Gaussian law calculation."
deps:
  - cor-deterministic-ito-integrals-are-gaussian
  - def-axiom-of-choice
  - def-brownian-motion
  - def-continuous-brownian-ito-process
  - def-ito-integral-for-square-integrable-predictable-processes
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-marginal-score-function
  - def-standard-normal-and-normal-laws
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-measurable-functions-preserve-independence
  - lem-normal-location-scale-density
  - thm-ito-formula-one-dimensional
  - thm-almost-sure-subsequence-from-convergence-in-probability
  - thm-probability-flow-ode-marginals
  - thm-uniqueness-of-a-law-from-its-characteristic-function
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Section 5.2, Theorem 5.4 and Example 5.7; Section 6.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Maxim Raginsky, Stochastic Differential Equations: A Systems-Theoretic Approach, Section 2.3 and Chapter 2, Problem 8"
      url: "https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf"
    - title: "Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations, Section 4.3 and Appendix D.1"
      url: "https://arxiv.org/pdf/2011.13456"
---

## Example

Assume AC. Fix $\gamma>0$, $\theta>0$, and $T>0$. Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0},P)$ be a complete filtered probability space with a right-continuous filtration. Let $W$ be an adapted standard one-dimensional Brownian motion such that, for every $0\le s<t$, $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N(0,t-s)$. Let $X_0$ be a finite $\mathcal F_0$-measurable random variable with law $N(0,\theta)$, independent of the Brownian process. Define

$$X_t=e^{-\gamma t}X_0+\sqrt{2\gamma\theta}\int_0^t e^{-\gamma(t-r)}\,dW_r,\qquad 0\le t\le T.$$

This process solves $dX_t=-\gamma X_t\,dt+\sqrt{2\gamma\theta}\,dW_t$. Every marginal has density $p(x)=(2\pi\theta)^{-1/2}e^{-x^2/(2\theta)}$ and score $s(x)=-x/\theta$. Its forward Fokker–Planck equation has zero right-hand side, and the probability-flow vector field $v(x)=-\gamma x-\tfrac12(2\gamma\theta)s(x)$ is identically zero. Thus the probability-flow ODE is stationary and the exact finite-time terminal law is $P_T=N(0,\theta)$.

## Example references

[Särkkä and Solin, Section 5.2, Theorem 5.4 and Example 5.7; Section 6.1](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

[Raginsky, Section 2.3 and Chapter 2, Problem 8](https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf)

[Song et al., Section 4.3 and Appendix D.1](https://arxiv.org/pdf/2011.13456)

## Facts & Assumptions

**Given:** AC, $W$, $X_0$, and $X_t$ as in the Example.

[A1] The Axiom of Choice is assumed by the Brownian, Itô, and normal-law interfaces used in the verification. [[def-axiom-of-choice]]

[F1] Under the stated filtration and increment conditions, the displayed process has a continuous Brownian Itô representation with pathwise integrable drift and a localized Itô integral. [[def-continuous-brownian-ito-process]]

[F2] For a one-dimensional Brownian Itô process and $f\in C^{1,2}$, $df(t,X_t)=(\partial_t f+b\partial_xf+\tfrac12\sigma^2\partial^2_x f)(t,X_t)\,dt+\sigma_t\partial_x f(t,X_t)\,dW_t$. [[thm-ito-formula-one-dimensional]]

[F3] A deterministic square-integrable integrand $h$ has centered normal Itô integral with variance $\int_0^t h(r)^2dr$. [[cor-deterministic-ito-integrals-are-gaussian]]

[F4] The deterministic Itô integral is an $L^2$ limit of elementary sums of Brownian increments. These sums are measurable with respect to the Brownian process; $L^2$ convergence implies convergence in probability, which has an almost-surely convergent subsequence. Defining its limit on the measurable convergence event gives a Brownian-process-measurable version. Measurable functions of independent random elements remain independent, and replacing a random variable by an almost-surely equal version preserves its joint law with $X_0$. [[def-independent-random-elements]] [[def-ito-integral-for-square-integrable-predictable-processes]] [[lem-measurable-functions-preserve-independence]] [[thm-almost-sure-subsequence-from-convergence-in-probability]]

[F5] The characteristic function of $N(m,q)$ is $u\mapsto\exp(imu-qu^2/2)$, including $q=0$. Independent variables have the product characteristic function, and equal characteristic functions determine equal Borel probability laws. Thus independent scalar normal variables have a normal sum with the summed means and variances. [[lem-characteristic-function-of-a-normal-law]] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F6] $N(0,\theta)$ for $\theta>0$ has density $(2\pi\theta)^{-1/2}e^{-x^2/(2\theta)}$. [[lem-normal-location-scale-density]]

[F7] At positive density points, the marginal score is $\partial_x\log p(x)$. [[def-marginal-score-function]]

[F8] For positive finite normalized densities $p_t$ of Borel probability laws $P_t$ satisfying the forward equation, with $a=\sigma^2$ in the scalar case and all displayed derivatives continuous (one-sided in time at endpoints), assume the probability-flow field has the global jointly $C^1$ flow of diffeomorphisms with both time-derivative identities specified in the cited theorem. Starting that flow with law $P_0$ gives law $P_t$ at every time. [[thm-probability-flow-ode-marginals]]

## Verification

1.1 Put $M_t=\int_0^t e^{\gamma r}\,dW_r$, so $X_t=e^{-\gamma t}(X_0+\sqrt{2\gamma\theta}M_t)$. Apply [F2] to $f(t,x)=e^{-\gamma t}x$ and the continuous Itô process $X_0+\sqrt{2\gamma\theta}M_t$. Its drift is zero and its diffusion coefficient is $\sqrt{2\gamma\theta}e^{\gamma t}$; the product rule gives $dX_t=-\gamma X_t\,dt+\sqrt{2\gamma\theta}\,dW_t$, as asserted. [A1, F1, F2, given]

1.2 For fixed $t$, [F3] gives $M_t\sim N(0,\int_0^t e^{2\gamma r}dr)$. Equivalently the stochastic term in the Example is centered normal with variance $2\gamma\theta\int_0^t e^{-2\gamma(t-r)}dr=\theta(1-e^{-2\gamma t})$. Its deterministic-integrand Itô approximants are measurable functions of Brownian increments, and [F4] gives a Brownian-process-measurable version of their limit; that version is independent of $X_0$, and almost-sure equality preserves the joint law. The first term is $N(0,\theta e^{-2\gamma t})$, and [F5] gives $X_t\sim N(0,\theta e^{-2\gamma t}+\theta(1-e^{-2\gamma t}))=N(0,\theta)$. By [F6], its density is the one displayed in the Example. [A1, F3, F4, F5, F6, given, algebra]

2.1 Differentiating the density in [F6] gives $\partial_xp=-(x/\theta)p$ and $\partial_{xx}p=(x^2/\theta^2-1/\theta)p$. With $b(x)=-\gamma x$ and $a=2\gamma\theta$, the Fokker–Planck right-hand side is $-\partial_x(bp)+\tfrac12\partial_{xx}(ap)=\gamma\partial_x(xp)+\gamma\theta\partial_{xx}p=0$ by substitution of these derivatives. Thus $p_t=p$ is a positive smooth solution of the forward equation and [F7] gives $s(x)=-x/\theta$. [F6, F7, step 1.2, algebra]

3.1 The diffusion covariance $a=\sigma^2=2\gamma\theta$ is constant, so $\partial_xa=0$. Substituting $b=-\gamma x$, $a=2\gamma\theta$, and $s=-x/\theta$ into the probability-flow velocity gives $v(x)=-\gamma x-\tfrac12(2\gamma\theta)(-x/\theta)=0$. Its global flow is $\Phi_{t,s}(x)=x$, jointly smooth and a diffeomorphism satisfying the flow composition and both time-derivative identities since $v=0$. Step 1.2 identifies $p_t=p$ as a normalized probability density; $p$, $b$, and $a$ are smooth, and step 2.1 verifies the forward equation. Thus every hypothesis of [F8] holds, so the deterministic flow started with law $N(0,\theta)$ preserves that law at each time, including $T$. [F7, F8, step 1.2, step 2.1, algebra] ∎
