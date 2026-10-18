---
id: lem-it-gaussian-reference-kernel-information-lower-bound
kind: lemma
title: "Gaussian reference-kernel mutual-information lower bound"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-it-general-mutual-information
  - def-kullback-leibler-divergence
  - def-standard-borel-space
  - def-standard-normal-and-normal-laws
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-general-kl-chain-rule-for-standard-borel-kernels
  - thm-kullback-leibler-is-nonnegative
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-measurability-of-integration-against-a-kernel
  - lem-prior-and-model-kernel-define-joint-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - lem-kl-invariant-under-measurable-bijections
  - lem-real-line-is-standard-borel
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used by the KL definition, the standard-Borel conditional-law chain rule, and the normal-law construction; the lower-bound argument has no additional choice use."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.6, printed pp. 99–102: Gaussian squared-error Shannon lower bound."
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.1.2, PDF pp. 2–4 / printed pp. 256–258: scalar Gaussian rate-distortion converse."
---

## Statement

Assume AC. Let $X\sim N(0,\sigma^2)$ with $\sigma^2>0$, let $Y$ be any real-valued reconstruction jointly distributed with $X$, and suppose $0<D<\sigma^2$ and $\delta:=\mathbb E(X-Y)^2\le D$. Then

$$I_{\mathrm{nat}}(X;Y)\ge\frac12\ln\frac{\sigma^2}{D}.$$

No density for $Y$, conditional differential entropy, or subtraction of potentially infinite entropies is assumed.

## Facts & Assumptions

**Given:** AC, $X\sim N(0,\sigma^2)$, $Y\in\mathbb R$, $0<D<\sigma^2$, and $\delta=\mathbb E(X-Y)^2\le D$.

[A1] [[def-axiom-of-choice]]: AC is required by the KL and normal-law suppliers below.

[F1] [[def-it-general-mutual-information]]: $I_{\mathrm{nat}}(X;Y)=D(P_{XY}\|P_X\otimes P_Y)$.

[F2] [[def-standard-normal-and-normal-laws]]: $N(m,s)$, for $s>0$, is the affine image of the standard normal with density $(2\pi)^{-1/2}e^{-z^2/2}$.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a positive affine change of variable transforms a density by its Jacobian. The assumed AC in [A1] implies Countable Choice by restricting its choice function to a countable family.

[F4] [[def-kullback-leibler-divergence]]: for $P\ll Q$, $D(P\|Q)=\int\ln(dP/dQ)\,dP$; if absolute continuity fails, the divergence is $+\infty$.

[F5] [[thm-general-kl-chain-rule-for-standard-borel-kernels]]: when two joint laws have the same standard-Borel marginal, their joint KL is the integral of the conditional KL divergences.

[F6] [[thm-kullback-leibler-is-nonnegative]]: under AC, KL divergence between probability laws is nonnegative.

[F7] [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]: under AC, a joint law of standard-Borel random elements admits a regular conditional kernel for X given Y.

[F8] [[thm-measurability-of-integration-against-a-kernel]] and [[lem-prior-and-model-kernel-define-joint-law]]: a jointly measurable integrand has measurable kernel integrals, and a probability base with a probability kernel defines a joint law with the iterated-integral formula.

[F9] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the product $P_Y\otimes\lambda$ exists and nonnegative product integrals equal their iterated integrals; a strictly positive density gives an equivalent measure by [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]].

[F10] [[lem-kl-invariant-under-measurable-bijections]]: a measurable coordinate swap preserves KL, so $I_{\mathrm{nat}}(X;Y)=D(P_{YX}\|P_Y\otimes P_X)$.

[F11] [[lem-real-line-is-standard-borel]]: the real line with its Borel sigma-algebra is standard Borel.

## Proof




**Given:** The hypotheses and suppliers [A1], [F1]–[F6].

1.1 By [F2]–[F3], $X\sim N(0,\sigma^2)$ has the everywhere-positive density $p_X(x)=(2\pi\sigma^2)^{-1/2}e^{-x^2/(2\sigma^2)}$, and $N(y,D)$ has density $q_y(x)=(2\pi D)^{-1/2}e^{-(x-y)^2/(2D)}$. Let $\gamma=N(0,1)$ and set $L(y,A)=\int \mathbf1_A(y+\sqrt D z)\,\gamma(dz)$ for Borel $A$. The integrand is product-measurable, so [F8] makes $y\mapsto L(y,A)$ measurable; each $L(y,\cdot)=N(y,D)$ is a probability. Thus [F8] gives a joint law $Q$ on the coordinate order $(Y,X)$ with base $P_Y$ and conditional kernel $L$. By [F9], $Q$ and $P_Y\otimes P_X$ have respective densities $q_y(x)$ and $p_X(x)$ relative to $P_Y\otimes\lambda$, so they are equivalent. If $P_{YX}\not\ll P_Y\otimes P_X$, [F1] and [F10] give $I_{\mathrm{nat}}(X;Y)=+\infty$, so the result holds. Otherwise equivalence gives $P_{YX}\ll Q$ as well. [A1, F1, F2, F3, F8, F9, F10, given, construct]

2.1 On the remaining case, the logarithm of the reference-density ratio is $$\ln\frac{q_Y(X)}{p_X(X)}=\frac12\ln\frac{\sigma^2}{D}-\frac{(X-Y)^2}{2D}+\frac{X^2}{2\sigma^2}.$$ It is integrable because $\mathbb E(X-Y)^2=\delta<\infty$ and $\mathbb E X^2=\sigma^2$. The Radon–Nikodym chain identity $dP_{YX}/d(P_Y\otimes P_X)=(dP_{YX}/dQ)(dQ/d(P_Y\otimes P_X))$, integrated using [F4] and [F10], gives $$I_{\mathrm{nat}}(X;Y)=D(P_{YX}\|Q)+\frac12\ln\frac{\sigma^2}{D}+\frac12-\frac{\delta}{2D}.$$ The finite cross term prevents an $\infty-\infty$ ambiguity if the first divergence is infinite. [A1, F1, F4, F10, step 1.1, algebra]

3.1 By [F11] the real source and reconstruction spaces are standard Borel, so [F7] supplies a conditional kernel for $X$ given $Y$ under $P_{YX}$. The law $Q$ has the same $Y$-marginal and conditional kernel $N(y,D)$. Thus [F5] expresses $D(P_{YX}\|Q)$ as an integral of conditional KL divergences, which is nonnegative by [F6], including the value $+\infty$. Also $\delta\le D$, so $1/2-\delta/(2D)\ge0$. The identity in step 2.1 gives the claimed lower bound. [A1, F5, F6, F7, F11, step 2.1, algebra] ∎
