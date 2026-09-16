---
id: lem-l-two-with-the-integral-pairing-is-a-hilbert-space
kind: lemma
title: $L^2$ with the integral pairing is a Hilbert space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, cor-cauchy-schwarz-inequality-for-l-two, thm-riesz-fischer-completeness-of-l-p, def-complex-lp-and-euclidean-test-function-conventions, lem-complex-lp-completeness-density-and-inner-product, def-countable-choice, def-real-and-complex-inner-product-space, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §§1.3.3 and 5.3.1, pp.38–41 and 235–237"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.63–64"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(X,\mathcal A,\mu)$ be a measure space and let
$L^2(\mu)$ be the quotient of $\mathcal L^2(\mu)$ by the almost-everywhere zero
functions ([[def-l-p-space-as-a-quotient-by-null-functions]]), with the quotient
norm $\|\cdot\|_2$ ([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

1. On **real** $L^2(\mu)$ the formula
   $$\langle f,g\rangle:=\int fg\,d\mu$$is a well-defined inner product, linear in both variables, positive definite, with $\langle f,f\rangle=\|f\|_2^2$; with it $L^2(\mu)$ is a real Hilbert space ([[def-hilbert-space]]). 2. On **complex** $L^2(\mu;\mathbb C)$ the formula$$\langle f,g\rangle:=\int f\overline g\,d\mu$$
   is a well-defined inner product, linear in the first variable and
   conjugate-linear in the second, positive definite, with
   $\langle f,f\rangle=\|f\|_2^2$; with it $L^2(\mu;\mathbb C)$ is a complex
   Hilbert space ([[def-complex-lp-and-euclidean-test-function-conventions]]).

In both cases the inner product induces exactly the established quotient
$L^2$ norm.

## Facts & Assumptions

[A1] For $f,g\in\mathcal L^2(\mu)$ one has $\int|fg|\,d\mu\le\|f\|_2\|g\|_2<+\infty$, so $fg\in L^1(\mu)$; the integral is unchanged when a representative is replaced by an almost-everywhere equal one, and it is linear on $L^1$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[A2] $L^2(\mu)$ is complete for $\|\cdot\|_2$, and $\|\cdot\|_2$ is a norm on the quotient, so the quotient metrics are the ones in which completeness is asserted ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[A3] For a nonnegative measurable $h$, $\int h\,d\mu=0$ if and only if $h=0$ almost everywhere; consequently $\langle f,f\rangle=0$ forces $f=0$ in $L^2(\mu)$ ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[A4] On complex $L^2$ the pairing $\int f\overline g$ is representative-independent, linear in the first variable, conjugate-linear in the second, conjugate symmetric, positive definite, satisfies $\langle f,f\rangle=\|f\|_2^2$ and Cauchy–Schwarz, and complex $L^2$ is complete ([[lem-complex-lp-completeness-density-and-inner-product]]).

[A5] An inner product is linear in the first variable, conjugate symmetric and positive definite, and induces the norm $\|v\|=\sqrt{\langle v,v\rangle}$ ([[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and a measure space $(X,\mathcal A,\mu)$.

1.1 **Real case: the pairing.** For $f,g\in\mathcal L^2(\mu)$ the product $fg$ is integrable by [A1], so $\int fg\,d\mu$ is defined and depends only on the classes of $f$ and $g$ by [A1]; the assignment is bilinear by linearity of the integral on $L^1$ and symmetric because multiplication of real functions is commutative. [A1]

1.2 **Complex case.** The published complex interface [A4] states that on complex $L^2$ the pairing $\int f\overline g$ is representative-independent, linear in the first variable, conjugate-linear in the second, conjugate symmetric and positive definite with $\langle f,f\rangle=\|f\|_2^2$, and that complex $L^2$ is complete for $\|\cdot\|_2$; hence complex $L^2(\mu;\mathbb C)$ is a complex Hilbert space for that pairing, with the established quotient norm. [A4, A5]

2.1 The real pairing is positive definite: $\langle f,f\rangle=\int f^2\,d\mu\ge0$ vanishes exactly when $f^2=0$ almost everywhere, that is exactly when $f$ represents the zero class, by [A3]; moreover $\langle f,f\rangle=\int f^2\,d\mu=\|f\|_2^2$ because the $L^2$ norm is the square root of $\int|f|^2$ and $f^2=|f|^2$ for real $f$. Hence the real pairing is an inner product inducing the quotient norm. [step 1.1, A2, A3, A5]

3.1 The real quotient is complete for that norm by [A2], so with this inner product real $L^2(\mu)$ is a real Hilbert space. [step 2.1, A2, A5]

4.1 Steps 3.1 and 1.2 establish both claims for every measure space under Countable Choice, the norm in each case being the established quotient $L^2$ norm. [step 1.2, step 3.1] ∎
