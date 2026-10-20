---
id: ex-singular-data-score-truncation
kind: example
title: A singular Brownian data law forces positive-time score truncation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: score-sdes-and-reverse-time-generation-examples
dependency_level: 5
axiom_base: Full AC
axiom_use: "AC is inherited from the Brownian and normal-law interfaces used for the Gaussian marginals."
deps:
  - alg-predictor-corrector-score-sampling
  - def-axiom-of-choice
  - def-brownian-motion
  - def-law-or-distribution-of-a-random-element
  - def-marginal-score-function
  - def-standard-normal-and-normal-laws
  - def-weak-convergence-of-borel-probability-measures
  - lem-normal-location-scale-density
  - thm-dominated-convergence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Section 5.2, Theorem 5.4 and proof"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Maxim Raginsky, Stochastic Differential Equations: A Systems-Theoretic Approach, Section 2.3"
      url: "https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf"
---

## Example

Assume AC, let $T>0$, and let $W=(W_t)_{t\ge0}$ be a standard one-dimensional Brownian motion. Set $X_t=W_t$ and let $P_t$ be the law of $X_t$ for $0\le t\le T$. Thus $P_0(A)=1$ when a Borel set $A$ contains $0$ and $P_0(A)=0$ otherwise. For every $t>0$, $P_t$ has density

$$p_t(x)=\frac{1}{\sqrt{2\pi t}}e^{-x^2/(2t)},\qquad s_t(x)=-\frac{x}{t}.$$

The law $P_0$ has no Lebesgue density, so its marginal score is undefined at $t=0$. For every cutoff $0<\epsilon<T$, the score is defined throughout $[\epsilon,T]$, and

$$\mathbb E|W_\epsilon|^2=\epsilon,\qquad W_\epsilon\longrightarrow0\ \text{almost surely as }\epsilon\downarrow0,\qquad P_\epsilon\Rightarrow P_0.$$

Here $P_\epsilon\Rightarrow P_0$ means that $\int f\,dP_\epsilon\to\int f\,dP_0$ for every bounded continuous $f:\mathbb R\to\mathbb R$. Consequently a score-based procedure requiring an exact marginal score can use this family only after choosing a positive cutoff; the limit at the singular data endpoint is a statement about the laws, not a score value at zero.

## Example references

[Särkkä and Solin, Section 5.2, Theorem 5.4 and proof](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

[Raginsky, Section 2.3](https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf)

## Facts & Assumptions

**Given:** AC, $T>0$, and a standard one-dimensional Brownian motion $W$.

[A1] AC is assumed in the Brownian, normal-law, and deterministic score-sampling interfaces. [[def-axiom-of-choice]]

[F1] Brownian motion starts at zero almost surely, has a common full-measure event of continuous paths, and $W_t\sim N(0,t)$. [[def-brownian-motion]]

[F2] For $t>0$, the law $N(0,t)$ has density $(2\pi t)^{-1/2}e^{-x^2/(2t)}$. [[lem-normal-location-scale-density]] [[def-standard-normal-and-normal-laws]]

[F3] At a positive finite differentiable density, the marginal score is the spatial derivative of its logarithm. [[def-marginal-score-function]]

[F4] The law of a random element is its probability pushforward. [[def-law-or-distribution-of-a-random-element]]

[F5] Almost-everywhere convergence under an integrable bound implies convergence of integrals. [[thm-dominated-convergence]]

[F6] Weak convergence of Borel probability measures is convergence of integrals against every bounded continuous real-valued function. [[def-weak-convergence-of-borel-probability-measures]]

## Verification

1.1 By [A1], [F1], and [F2], for each $t>0$ the law of $W_t$ has the displayed Gaussian density. Differentiation gives $\partial_x\log p_t(x)=-x/t$, so [F3] gives the stated score. At $t=0$, [F1] and [F4] give $P_0(\{0\})=1$. Any measure with a Lebesgue density assigns mass $\int_{\{0\}}p(x)\,dx=0$ to this singleton, so $P_0$ has no Lebesgue density. [A1, F1, F2, F3, F4, given, algebra]

1.2 By [F2], changing variables $x=\sqrt\epsilon z$ yields $\mathbb E|W_\epsilon|^2=\int_{\mathbb R}x^2\frac{e^{-x^2/(2\epsilon)}}{\sqrt{2\pi\epsilon}}\,dx=\epsilon\int_{\mathbb R}z^2\frac{e^{-z^2/2}}{\sqrt{2\pi}}\,dz=\epsilon$. For the last equality, integration by parts gives $\int z^2e^{-z^2/2}dz=\int e^{-z^2/2}dz$ over $\mathbb R$: the boundary term $-ze^{-z^2/2}$ tends to $0$ at both ends, and the normalized standard-normal density integrates to $1$. Hence the second moment tends to zero. [F2, algebra]

2.1 Fix any sequence $\epsilon_n>0$ with $\epsilon_n\to0$. On the common continuity event from [F1], $W_{\epsilon_n}\to W_0=0$, so for bounded continuous $f$, $f(W_{\epsilon_n})\to f(0)$ almost surely and $|f(W_{\epsilon_n})|\le\|f\|_\infty$. Applying [F5] gives $\int f\,dP_{\epsilon_n}=\mathbb E f(W_{\epsilon_n})\to f(0)=\int f\,dP_0$. Since this holds for every such sequence, the limit holds as $\epsilon\downarrow0$; [F6] identifies it as $P_\epsilon\Rightarrow P_0$. The positive-time score conclusion in step 1.1 and the absence of a score at zero prove the stated truncation consequence. [F1, F4, F5, F6, step 1.1, given] ∎
