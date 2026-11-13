---
title: Tail integration and a median-to-mean bridge
status: draft
research_item: prop-expander-prereq-median-tail-integration
dependency_level: 0
---

## Prerequisites

- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:cor-layer-cake-formulas-for-random-variables](https://alphabetamath.cc/item/cor-layer-cake-formulas-for-random-variables)
- [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:thm-gaussian-integral](https://alphabetamath.cc/item/thm-gaussian-integral)
- [math:thm-substitution](https://alphabetamath.cc/item/thm-substitution)
- [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable)
- [math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral](https://alphabetamath.cc/item/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral)
- [math:thm-monotone-convergence-for-the-integral](https://alphabetamath.cc/item/thm-monotone-convergence-for-the-integral)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:ex-bartle-sherbert-bounds-for-pi](https://alphabetamath.cc/item/ex-bartle-sherbert-bounds-for-pi)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)
- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)
- [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)
- [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)


## Statement

Assume countable choice. Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $Z$ be an integrable real random variable, and let $m$ be a median: $\mathbb P(Z\le m)\ge 1/2$ and $\mathbb P(Z\ge m)\ge 1/2$. Suppose that $L>0$ and, for every $t>0$, both $\mathbb P(Z>m+t)$ and $\mathbb P(Z<m-t)$ are at most $2e^{-t^2/(4L^2)}$. Then

$$|\mathbb EZ-m|\le\int_0^\infty\min\{1,2e^{-t^2/(4L^2)}\}\,dt\le 2\sqrt\pi L<4L.$$

The two one-sided expectations $\mathbb E(Z-m)^+$ and $\mathbb E(Z-m)^-$ equal their respective tail integrals. No symmetry of $Z$ is required. The first inequality in fact holds under the displayed tail bounds for any real $m$, whether or not it is a median.

## Facts & Assumptions

**Given:** The probability space, $Z$, $m$, $L$ and countable choice as in the statement. For a real $x$, write $x^+=\max\{x,0\}$ and $x^-=\max\{-x,0\}$.

[F1] Expectation is integration against the probability measure; the expectation of an integrable real variable is the difference of the expectations of its positive and negative parts ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)). The nonnegative integral is defined as the supremum over simple nonnegative minorants ([math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)).

[F2] The layer-cake formula gives $\mathbb E X=\int_0^\infty\mathbb P(X>t)\,dt$ for nonnegative measurable $X$, allowing infinite values ([math:cor-layer-cake-formulas-for-random-variables](https://alphabetamath.cc/item/cor-layer-cake-formulas-for-random-variables)). The integral is linear on integrable functions ([math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)), and the nonnegative integral is monotone and positively homogeneous ([math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)).

[F3] The improper Gaussian integral is $\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$ ([math:thm-gaussian-integral](https://alphabetamath.cc/item/thm-gaussian-integral)), and $\pi<3.185<4$ ([Bartle–Sherbert bounds for pi](https://alphabetamath.cc/item/ex-bartle-sherbert-bounds-for-pi)).

[F4] Continuous functions on compact intervals are Riemann integrable, and substitution applies there ([math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable), [math:thm-substitution](https://alphabetamath.cc/item/thm-substitution)). Under countable choice, bounded Riemann integrable functions have the same Lebesgue integral ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral](https://alphabetamath.cc/item/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral)). Monotone convergence passes increasing nonnegative integrals to their limit ([math:thm-monotone-convergence-for-the-integral](https://alphabetamath.cc/item/thm-monotone-convergence-for-the-integral)).

[F5] A probability space has $\mathbb P(\Omega)=1$, and its events have probabilities in $[0,1]$ ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)). A real random variable is a measurable real-valued map ([math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)). An integrable real function has finite integrals of both its positive and negative parts ([math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)). Sums, real scalar multiples, and positive and negative parts of measurable real functions are measurable ([math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)).

[F6] For a nonnegative simple function $s=\sum_j c_j\chi_{E_j}$ on disjoint measurable sets, its simple integral is $\sum_j c_j\mathbb P(E_j)$ ([math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)), and its nonnegative Lebesgue integral agrees with this value ([math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)).

## Proof

**Given:** The data and assumptions in the statement.

**Goal:** Prove the one-sided tail identities and the displayed median-to-mean estimates.

1.1 Constants are measurable because inverse images of Borel sets are either $\Omega$ or $\varnothing$. The nonnegative constants $m^+$ and $m^-$ are simple, so [F5] and [F6] give $\mathbb E m^+=m^+\mathbb P(\Omega)=m^+$ and $\mathbb E m^-=m^-\mathbb P(\Omega)=m^-$. Thus the constant $m$ is integrable by [F5] and has expectation $m^+-m^-=m$ by [F1]. Put $Y=Z-m$. By the closure properties in [F5], $Y$ and its nonnegative parts $Y^+$ and $Y^-$ are measurable. Since $Z$ and the constant $m$ are integrable, the vector-space and linearity assertions in [F2] give integrability of $Y$ and $\mathbb EY=\mathbb EZ-m$. By [F5], both $\mathbb EY^+$ and $\mathbb EY^-$ are finite. [F1, F2, F5, F6, given, algebra]

2.1 By [F1], $\mathbb EY=\mathbb EY^+-\mathbb EY^-$. For $t>0$, the strict superlevel events of the nonnegative measurable variables $Y^+$ and $Y^-$ from step 1.1 are respectively $\{Z>m+t\}$ and $\{Z<m-t\}$. Applying [F2] to $Y^+$ and $Y^-$ gives $\mathbb EY^+=\int_0^\infty\mathbb P(Z>m+t)\,dt$ and $\mathbb EY^-=\int_0^\infty\mathbb P(Z<m-t)\,dt$. Both expectations are finite by step 1.1. [F1, F2, step 1.1, algebra]

3.1 Each probability in step 2.1 is at most one by [F5] and at most the stated Gaussian bound. By monotonicity in [F2], each of the two nonnegative expectations is at most $I=\int_0^\infty\min\{1,2e^{-t^2/(4L^2)}\}\,dt$. For nonnegative $a,b\le I$, $|a-b|\le I$; apply this to the two expectations in step 2.1 and use the expectation difference from steps 1.1 and 2.1. This argument does not use the median property or symmetry. [F2, F5, step 1.1, step 2.1, given, algebra]

4.1 On every finite interval, substitute $u=t/(2L)$ using [F4]. The integrand is continuous, so [F4] also identifies its compact-interval Riemann and Lebesgue integrals. Applying monotone convergence to increasing compact intervals and using the evenness of $e^{-u^2}$ and [F3] yields $\int_0^\infty 2e^{-t^2/(4L^2)}\,dt=2\sqrt\pi L$. Hence $I\le2\sqrt\pi L$ by [F2]. Finally [F3] gives $\sqrt\pi<2$, so $2\sqrt\pi L<4L$. Together with step 3.1 this proves the claim. [F2, F3, F4, step 3.1, algebra] ∎
