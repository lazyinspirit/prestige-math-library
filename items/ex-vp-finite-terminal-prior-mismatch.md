---
id: ex-vp-finite-terminal-prior-mismatch
kind: example
title: Finite VP noise leaves a terminal-prior mismatch
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: score-sdes-and-reverse-time-generation-examples
dependency_level: 5
axiom_base: Full AC
axiom_use: "AC is inherited through the Brownian Itô-integral and normal-law interfaces used in the explicit Gaussian solution."
deps:
  - alg-predictor-corrector-score-sampling
  - cor-deterministic-ito-integrals-are-gaussian
  - def-axiom-of-choice
  - def-brownian-motion
  - def-continuous-brownian-ito-process
  - def-law-or-distribution-of-a-random-element
  - def-marginal-score-function
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-density
  - thm-ito-formula-one-dimensional
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations, Section 3.4"
      url: "https://arxiv.org/pdf/2011.13456"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Sections 5.2 and 6.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Maxim Raginsky, Stochastic Differential Equations: A Systems-Theoretic Approach, Sections 2.3 and 7.1"
      url: "https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf"
---

## Example

Assume AC. Fix $T>0$ and a continuous function $\beta:[0,T]\to(0,\infty)$. Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0},P)$ be a complete filtered probability space with a right-continuous filtration, and let $W$ be an adapted standard one-dimensional Brownian motion such that, for every $0\le s<t$, $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N(0,t-s)$. Put $B(t)=\int_0^t\beta(r)\,dr$, $X_0=0$, and

$$X_t=e^{-B(t)/2}\int_0^t e^{B(r)/2}\sqrt{\beta(r)}\,dW_r,\qquad 0\le t\le T.$$

This solves the variance-preserving (VP) stochastic differential equation $dX_t=-\tfrac12\beta(t)X_t\,dt+\sqrt{\beta(t)}\,dW_t$. For $t>0$, its law $P_t$ has density and score

$$p_t(x)=\frac{1}{\sqrt{2\pi v_t}}e^{-x^2/(2v_t)},\qquad s_t(x)=-\frac{x}{v_t},\qquad v_t=1-e^{-B(t)}.$$

Since $\beta$ is positive and continuous, $0<B(T)<\infty$ and $0<v_T<1$, so $P_T=N(0,v_T)\ne N(0,1)$. The predictor-corrector procedure defined above initializes from the actual terminal law $P_T$; replacing that draw by $N(0,1)$ changes the initial law for this finite schedule. No convergence or solver-error claim follows from this comparison.

## Example references

[Song et al., Section 3.4](https://arxiv.org/pdf/2011.13456)

[Särkkä and Solin, Sections 5.2 and 6.1](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

[Raginsky, Sections 2.3 and 7.1](https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf)

## Facts & Assumptions

**Given:** AC, the filtered Brownian motion and schedule $\beta$ in the Example, and its explicit process $X$.

[A1] AC, the usual filtration conditions, and independent Brownian increments relative to the filtration are the hypotheses of the Brownian Itô and deterministic-integral interfaces used below. [[def-continuous-brownian-ito-process]] [[def-axiom-of-choice]]

[F1] A process with pathwise integrable drift and a localized Brownian Itô integral is a continuous Brownian Itô process under the stated filtration conditions. [[def-continuous-brownian-ito-process]]

[F2] For a one-dimensional Brownian Itô process and a $C^{1,2}$ function, Itô's formula adds the drift, diffusion, and half-variance second-derivative terms. [[thm-ito-formula-one-dimensional]]

[F3] A deterministic square-integrable Itô integrand has a centered normal integral with variance equal to the integral of its square. [[cor-deterministic-ito-integrals-are-gaussian]]

[F4] A scalar normal law is the affine image of the standard normal law, and for positive variance $v$ it has density $(2\pi v)^{-1/2}e^{-x^2/(2v)}$. [[def-standard-normal-and-normal-laws]] [[lem-normal-location-scale-density]]

[F5] At positive finite differentiable density points, the marginal score is the derivative of the log density. [[def-marginal-score-function]]

[F6] The law of a random element is its probability pushforward. [[def-law-or-distribution-of-a-random-element]]

[F7] The predictor-corrector procedure's initial draw has law $P_T$. [[alg-predictor-corrector-score-sampling]]

## Verification

1.1 Write $K_t=\int_0^t e^{B(r)/2}\sqrt{\beta(r)}\,dW_r$, whose deterministic integrand is square-integrable because $B$ and $\beta$ are continuous on $[0,T]$. Since $B'(t)=\beta(t)$, apply [F2] to $f(t,x)=e^{-B(t)/2}x$ and the continuous Itô process $K_t$. The product rule gives $dX_t=-\tfrac12\beta(t)X_t\,dt+\sqrt{\beta(t)}\,dW_t$ and $X_0=0$. [A1, F1, F2, given, algebra]

1.2 By [F3], $K_t$ is centered normal with variance $\int_0^t e^{B(r)}\beta(r)\,dr$. Differentiating $e^{B(r)}$ gives $\frac{d}{dr}e^{B(r)}=e^{B(r)}\beta(r)$, so this variance is $e^{B(t)}-1$. Multiplication by $e^{-B(t)/2}$ therefore gives $X_t\sim N(0,e^{-B(t)}(e^{B(t)}-1))=N(0,v_t)$. For $t>0$, positivity of $\beta$ implies $v_t>0$; [F4] supplies its displayed density. [F3, F4, given, algebra]

2.1 Differentiating the density in step 1.2 gives $\partial_x\log p_t(x)=-x/v_t$, so [F5] yields the score for every $t>0$. At $t=0$, $X_0=0$ almost surely; its law assigns mass one to $\{0\}$ and therefore has no Lebesgue density, since every Lebesgue-density measure assigns zero mass to that singleton. [F4, F5, given, step 1.2, algebra]

3.1 Continuity of $\beta$ on the compact interval makes $B(T)$ finite, and strict positivity gives $B(T)>0$. Hence $v_T=1-e^{-B(T)}$ lies strictly between zero and one. For any $v>0$, the density in [F4] and the substitution $x=\sqrt v z$ give $\int_{\mathbb R}x^2\frac{e^{-x^2/(2v)}}{\sqrt{2\pi v}}\,dx=v\int_{\mathbb R}z^2\frac{e^{-z^2/2}}{\sqrt{2\pi}}\,dz=v$. Indeed integration by parts yields $\int z^2e^{-z^2/2}dz=\int e^{-z^2/2}dz$ over $\mathbb R$, because $ze^{-z^2/2}\to0$ at both ends, and the normalized standard-normal density integrates to one. Thus $E_{P_T}X^2=v_T$ by step 1.2, whereas $E_{N(0,1)}Z^2=1$. If the laws were equal these finite second moments would be equal, a contradiction. Step 2.1 shows the exact positive-time score is available at $T$, and [F7] prescribes initialization from $P_T$; replacing it by $N(0,1)$ changes that initial law. [F4, F6, F7, step 1.2, step 2.1, given, algebra] ∎
