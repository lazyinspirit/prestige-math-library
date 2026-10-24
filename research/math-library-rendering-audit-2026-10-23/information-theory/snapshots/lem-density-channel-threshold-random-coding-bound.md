---
id: lem-density-channel-threshold-random-coding-bound
kind: lemma
title: Threshold decoding bound for memoryless channels with densities
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-natural-logarithm, thm-natural-logarithm-laws, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-chebyshev-markov-inequality-for-the-integral, thm-finite-union-bound, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the conclusion is an existential statement for one fixed blocklength.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.2, Channels with Input Constraints"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Let $P_X$ be an input law, let $\nu$ be a sigma-finite reference measure on the output space, and let $w(y\mid x)$ be a measurable single-use channel density satisfying $\int w(y\mid x)\,d\nu(y)=1$. Let $q(y)=\int w(y\mid x)\,P_X(dx)$ be the induced output density and assume $q>0$ on its probability-one support. For independent uses define
$$\imath(x^n;y^n):=\sum_{t=1}^n\ln\frac{w(y_t\mid x_t)}{q(y_t)}$$
on the joint support. For every $n\ge1$, $M\ge2$, and $\tau>0$, the IID random-code ensemble's expected average error is at most
$$\Pr\!\left[\imath(X^n;Y^n)\le\ln(M-1)+\tau\right]+e^{-\tau},$$
where $(X^n,Y^n)$ has input law $P_X^{\otimes n}$ followed by the product channel. Consequently, some deterministic length-$n$ code with $M$ messages and the threshold decoder has average error no greater than this bound.

## Facts & Assumptions

**Given:** The channel density, input law, induced positive output density, product channel, and blocklength/message/threshold parameters in the Statement.

[F1] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions on a sigma-finite product space can be integrated in either order.

[F2] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: the finite product of the input and output reference measures has the stated rectangular sections and product integrals.

[F3] [[thm-natural-logarithm-laws]] and [[def-natural-logarithm]]: $\ln$ is strictly increasing on $(0,\infty)$, obeys the product law, and is inverse to the exponential, so $e^{\ln a}=a$ for $a>0$.

[F4] [[thm-chebyshev-markov-inequality-for-the-integral]]: if $L\ge0$ is measurable and $a>0$, then $\Pr[L\ge a]\le\mathbb EL/a$.

[F5] [[thm-finite-union-bound]]: the probability that one of finitely many events occurs is at most the sum of their probabilities.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable real-valued functions.

[F7] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable random variable with expectation zero vanishes almost surely.

## Proof

1.1 Draw $M$ codewords independently from $P_X^{\otimes n}$. Put $S=\{y:0<q(y)<\infty\}$; normalization and [F1] give $P_Y(S)=1$. For $y^n\in S^n$ define $L(x^n;y^n)=\prod_t w(y_t\mid x_t)/q(y_t)$, with a zero factor making the product zero, and define the score $\ell=\ln L$ with $\ln0=-\infty$ and $\ln(+\infty)=+\infty$. Set $\ell=-\infty$ outside $S^n$. These are measurable extended-real scores. Under the transmitted joint law, each channel density is positive and finite almost surely by row normalization, so $\ell=\imath$ almost surely. Declare message $m$ if it is the unique codeword whose score exceeds $\ln(M-1)+\tau$; otherwise output a fixed default. An error is contained in the event that the transmitted score fails the threshold or that some independent competing word passes it. [F1, F3, given, construct]

1.2 The first event has probability exactly the miss probability in the Statement. For one competing word $\bar X^n$ independent of $Y^n$, the latter has density $q^{\otimes n}$ under the ensemble. Define $L=0$ outside $S^n$. By [F1, F2] and normalization of the product channel rows,
$$\mathbb EL=\int P_X^{\otimes n}(d\bar x^n)\int_{S^n}w^{\otimes n}(y^n\mid\bar x^n)\,d\nu^{\otimes n}(y^n)\le1.$$
Thus the likelihood ratio is well-defined even for a competitor with zero channel density. [F1, F2, given, algebra]

2.1 If a competitor passes, [F3] makes $L>(M-1)e^\tau$, hence the event is contained in $\{L\ge(M-1)e^\tau\}$. Markov's integral inequality [F4] bounds this probability by $e^{-\tau}/(M-1)$. The finite union bound [F5] over the $M-1$ competitors contributes at most $e^{-\tau}$. Combining this with the miss event in step 1.1 proves the asserted bound on ensemble expected average error. [F3, F4, F5, step 1.1, step 1.2, given, algebra]

3.1 Let $E$ be the random codebook's average error and set $b=\mathbb E E$; then $0\le E\le1$, so both $E$ and the constant $b$ are integrable. If every sampled codebook had $E>b$, the nonnegative variable $E-b$ would be positive everywhere, while linearity [F6] and $\mathbb P(\Omega)=1$ give $\mathbb E(E-b)=0$. By [F7], $E-b=0$ almost surely, a contradiction. Hence some codebook has error at most $b$, which is bounded by the result of steps 1.1 and 2.1. [F6, F7, step 1.1, step 2.1, given, choose] ∎
