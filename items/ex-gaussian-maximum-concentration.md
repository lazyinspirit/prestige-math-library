---
id: ex-gaussian-maximum-concentration
kind: example
title: "A Gaussian maximum without independence"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-continuous-functions-are-borel-measurable
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-real-exponential-function-and-e
  - def-standard-normal-and-normal-laws
  - def-subgaussian-variable-and-vector
  - lem-derivative-of-a-power
  - lem-normal-density-has-total-mass-one
  - thm-change-of-variables-for-expectation
  - thm-chain-rule
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - thm-derivative-of-exponential
  - thm-exponential-addition-formula
  - thm-finite-subgaussian-maximum-and-epsilon-net
  - thm-ftc-second-part
  - thm-integration-against-a-density
  - thm-monotone-convergence-for-the-integral
  - thm-substitution
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Theorem 1.14"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 4, §4.1.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Example

Assume AC. Let $\sigma>0$, let $G\sim N(0,1)$, and set $Z_j=\sigma G$ for every $1\le j\le m$, where $m\ge1$. These variables are perfectly dependent. For every $t>0$,
$$\mathbb P\left(\max_{1\le j\le m}|Z_j|\ge t\right)\le2m\exp\!\left(-\frac{t^2}{2\sigma^2}\right).$$

## Facts & Assumptions

**Given:** AC, $\sigma>0$, $m\ge1$, and a standard normal random variable $G$.

[A1] Assume AC as required by the standard-normal law construction ([[def-axiom-of-choice]]).

[F1] The law $N(0,1)$ has density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$, and $N(0,\sigma^2)$ is the law of $x\mapsto\sigma x$ applied to $N(0,1)$ ([[def-standard-normal-and-normal-laws]]).

[F2] The standard normal density is positive and integrates to one ([[lem-normal-density-has-total-mass-one]]).

[F3] For a nonnegative measurable $g$, or an integrable real $g$, expectation of $g(G)$ is its integral against the law of $G$ ([[thm-change-of-variables-for-expectation]]). Integration against the density law satisfies $\int g\,dN(0,1)=\int g(x)\phi(x)\,dx$ for nonnegative measurable $g$ ([[thm-integration-against-a-density]]); applying this to the positive and negative parts gives the signed formula once absolute integrability is established.

[F4] One-dimensional substitution satisfies $\int_{\varphi(c)}^{\varphi(d)}h=\int_c^d(h\circ\varphi)\varphi'$ when $h$ is continuous and the stated differentiability and integrability hypotheses hold ([[thm-substitution]]).

[F5] Increasing nonnegative measurable functions pass to their limit under the integral ([[thm-monotone-convergence-for-the-integral]]).

[F6] $e^{x+y}=e^xe^y$ ([[thm-exponential-addition-formula]]).

[F7] The exponential is continuously differentiable with derivative $e^x$ ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]]); the chain rule differentiates compositions ([[thm-chain-rule]]); and $(x^2/2)'=x$ ([[lem-derivative-of-a-power]]).

[F8] Continuous functions on compact intervals are integrable ([[thm-continuous-implies-integrable]]), and if $H'=g$ with integrable $g$, then $\int g=H(d)-H(c)$ ([[thm-ftc-second-part]]).

[F9] A continuous real function is Borel measurable under AC ([[cor-continuous-functions-are-borel-measurable]]).

[F10] A centered variable is sub-Gaussian with proxy $\sigma^2$ when its moment generating function is bounded by $e^{\lambda^2\sigma^2/2}$ for every real $\lambda$ ([[def-subgaussian-variable-and-vector]]).

[F11] For $m$ possibly dependent centered sub-Gaussian variables with common proxy $\sigma^2$, $\mathbb P(\max_j|Y_j|\ge t)\le2m e^{-t^2/(2\sigma^2)}$ ([[thm-finite-subgaussian-maximum-and-epsilon-net]]).

[F12] Expectation is linear on integrable real random variables ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F13] Under Countable Choice, every bounded Riemann-integrable function on a nondegenerate compact interval has the same Lebesgue and Riemann integrals ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]). AC in [A1] implies Countable Choice, so this applies to the bounded continuous integrands supplied by [F8].

## Verification

1.1 Write $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$. By [F7] and composition, $u\mapsto e^{-u}$ is continuous and integrable on compact intervals by [F8]. The map $x\mapsto x^2/2$ is differentiable with derivative $x$ by [F7]; the identity $x$ is continuous because $|x-y|<\eta$ whenever $|x-y|<\delta$ with $\delta=\eta$, so it is integrable on $[0,R]$ by [F8]. Thus [F4] applies. By [F7], $(-e^{-u})'=e^{-u}$, so [F8] evaluates the resulting integral: $\int_0^R x\phi(x)\,dx=(1-e^{-R^2/2})/\sqrt{2\pi}\le1/\sqrt{2\pi}$. The integrand $x\phi(x)$ is continuous and bounded on every compact interval by [F7] and [F8], so [F13] identifies these Riemann integrals with Lebesgue integrals. Reflection $x=-y$ in [F4], followed by [F13], gives $\int_{-R}^0(-x)\phi(x)\,dx=\int_0^R x\phi(x)\,dx$ since $\phi$ is even. Letting integer $R$ increase to infinity, [F2], [F3] for nonnegative functions, and [F5] give $\mathbb E|G|=2\int_0^\infty x\phi(x)\,dx<\infty$. Since $\phi$ is even, the positive and negative parts of $x\phi(x)$ have equal integrals, so [F3] for integrable functions gives $\mathbb E G=0$. [A1, F1, F2, F3, F4, F5, F7, F8, F13, algebra]

1.2 Put $a=\lambda\sigma$. The function $x\mapsto e^{ax}$ is continuous and Borel measurable by [F7] and [F9], so [F3] and completing the square, using [F6], give $\mathbb E e^{\lambda\sigma G}=\frac1{\sqrt{2\pi}}\int_{\mathbb R}e^{ax-x^2/2}\,dx=e^{a^2/2}\frac1{\sqrt{2\pi}}\int_{\mathbb R}e^{-(x-a)^2/2}\,dx$. [F3, F6, F7, F9, algebra]

2.1 For every positive integer $R$, [F4] with translation by $a$ gives $\int_{-R}^{R}e^{-(x-a)^2/2}\,dx=\int_{-R-a}^{R-a}e^{-y^2/2}\,dy$. The two integrands are continuous and bounded on these compact intervals by [F7] and [F8]; [F13] therefore identifies both sides with their Lebesgue integrals. Both interval families increase to $\mathbb R$, so [F5] passes these equal integrals to the whole-line limit; [F2] identifies that limit as $\sqrt{2\pi}$. Step 1.2 then yields $\mathbb E e^{\lambda\sigma G}=e^{a^2/2}=e^{\lambda^2\sigma^2/2}$. [F2, F4, F5, F7, F8, F13, step 1.2, algebra]

3.1 By [F12] and step 1.1, $\mathbb E Z_j=\sigma\mathbb E G=0$; step 2.1 gives its moment generating function. Thus each $Z_j$ is centered sub-Gaussian with proxy $\sigma^2$ by [F10]. Apply [F11] to the $m$ variables. They are all equal, but the bound requires no independence. [F1, F10, F11, F12, step 1.1, step 2.1] ∎
