---
id: lem-density-channel-threshold-random-coding-bound
kind: lemma
title: Threshold decoding bound for memoryless channels with densities
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-natural-logarithm, thm-natural-logarithm-laws, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-chebyshev-markov-inequality-for-the-integral, thm-finite-union-bound]
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

## Proof

1.1 Draw $M$ codewords independently from $P_X^{\otimes n}$. For a received $y^n$, declare message $m$ if it is the unique codeword whose information density exceeds $\ln(M-1)+\tau$; if there is no unique such message, output a fixed default. Conditional on the transmitted word, an error is contained in the event that its information density fails the threshold or that some independent competing word passes it. The natural-log threshold uses [F3]. [F3, given, construct]

1.2 The first event has probability exactly the miss probability in the Statement. For one competing word $\bar X^n$ independent of $Y^n$, the latter has density $q^{\otimes n}$ under the ensemble. The nonnegative likelihood ratio $L:=\prod_t w(Y_t\mid\bar X_t)/q(Y_t)$ has expectation
$$\mathbb EL=\int P_X^{\otimes n}(d\bar x^n)\int q^{\otimes n}(y^n)\frac{w^{\otimes n}(y^n\mid\bar x^n)}{q^{\otimes n}(y^n)}\,d\nu^{\otimes n}(y^n)=1$$
by [F1, F2] and normalization of each channel row. [F1, F2, given, algebra]

2.1 If a competitor passes, [F3] makes $L>(M-1)e^\tau$, hence the event is contained in $\{L\ge(M-1)e^\tau\}$. Markov's integral inequality [F4] bounds this probability by $e^{-\tau}/(M-1)$. The finite union bound [F5] over the $M-1$ competitors contributes at most $e^{-\tau}$. Combining this with the miss event in step 1.1 proves the asserted bound on ensemble expected average error. [F3, F4, F5, step 1.1, step 1.2, given, algebra]

3.1 Averaging over the transmitted message and the random codebook gives expected average error at most the displayed bound from steps 1.1 and 2.1. A nonnegative random variable has some value no greater than its expectation; otherwise its expectation would be strictly larger. Selecting such a codebook proves the deterministic-code assertion. [step 1.1, step 2.1, choose] ∎
