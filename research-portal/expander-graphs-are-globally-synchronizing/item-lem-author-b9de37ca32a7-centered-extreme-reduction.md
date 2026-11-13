---
title: Extreme-value Lipschitz bounds and centered norm reduction
status: draft
research_item: lem-author-b9de37ca32a7-centered-extreme-reduction
dependency_level: 4
---

## Prerequisites

- [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)
- [lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues)
- [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)
- [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral)
- [math:lem-real-power-preserves-measurability](https://alphabetamath.cc/item/lem-real-power-preserves-measurability)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)
- [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:def-standard-real-and-normalized-complex-gaussian-matrix-law](https://alphabetamath.cc/item/def-standard-real-and-normalized-complex-gaussian-matrix-law)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:def-moments-variance-and-covariance](https://alphabetamath.cc/item/def-moments-variance-and-covariance)


## Statement

Assume the Axiom of Choice. For a real symmetric $r\times r$ matrix $A$, $r\ge1$, define $\lambda_+(A)=\sup_{\|v\|_2=1}v^TAv$ and $\lambda_-(A)=\sup_{\|v\|_2=1}(-v^TAv)$ over real vectors. Use the operator norm on $\mathbb C^{\{1,\ldots,r\}}$ with its Euclidean norm. Put $N=r(r+1)/2$ and define $T:\mathbb R^N\to\mathbb R^{r\times r}$ by $T(z)_{ij}=T(z)_{ji}=z_{ij}$ for $1\le i\le j\le r$. Both functions $z\mapsto\lambda_\pm(T(z))$ are $\sqrt2$-Lipschitz, meaning that their absolute difference at $z,w$ is at most $\sqrt2\|z-w\|_2$.

Let $Z=(Z_{ij})_{i\le j}$ have mutually independent standard normal coordinates on a common probability space $(\Omega,\mathcal F,\mathbb P)$, and put $Y=T(Z)$. Set $m=\mathbb E\lambda_+(Y)=\mathbb E\lambda_-(Y)$ and $W=\max(|\lambda_+(Y)-m|,|\lambda_-(Y)-m|)$. Then $m$ is finite and nonnegative, $0\le\|Y\|\le m+W$, and $W$ has every finite positive even moment.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)

[lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)

[math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)

[math:def-standard-real-and-normalized-complex-gaussian-matrix-law](https://alphabetamath.cc/item/def-standard-real-and-normalized-complex-gaussian-matrix-law)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

[math:def-moments-variance-and-covariance](https://alphabetamath.cc/item/def-moments-variance-and-covariance)

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, as required by both Gaussian suppliers in [F1] and [F2]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F1] Under Choice, the triangular map satisfies $\|T(z)-T(w)\|\le\sqrt2\|z-w\|_2$, and $\|Y\|$ is measurable with $\mathbb E\|Y\|^{2k}<\infty$ for every integer $k\ge1$. [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments).

[F2] Under Choice, $\lambda_\pm(Y)$ are measurable integrable real random variables, their expectations have the common finite value $m\ge0$, and $\|Y\|=\max(\lambda_+(Y),\lambda_-(Y))$. [lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues).

[F3] Euclidean Cauchy–Schwarz gives $|v^TBv|\le\|v\|_2\|Bv\|_2$ for real $v,B$. The operator norm bounds $\|Bu\|_2\le\|B\|\|u\|_2$, including real vectors viewed in the complex space. [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm), [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm).

[F4] Finite sums, real scalar multiples and absolute values of measurable real-valued functions are measurable. [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral).

[F5] If $h$ is a nonnegative finite-valued measurable function and $q>0$, then $h^q$ is measurable. [math:lem-real-power-preserves-measurability](https://alphabetamath.cc/item/lem-real-power-preserves-measurability).

[F6] The nonnegative integral is monotone, homogeneous for positive scalars, and additive for two nonnegative measurable functions, even before their finiteness is known. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral), [math:cor-additivity-of-the-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/cor-additivity-of-the-nonnegative-lebesgue-integral).

[F7] A probability measure satisfies $\mathbb P(\Omega)=1$. A constant $c\ge0$ is the simple measurable function $c\chi_\Omega$; its simple integral is $c\mathbb P(\Omega)$, and its nonnegative Lebesgue integral agrees with that simple integral. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function), [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral).

[F8] Independence of the real coordinates means independence of their generated sigma-algebras. A standard real Gaussian scalar has Lebesgue density $(2\pi)^{-1/2}e^{-x^2/2}$. The Countable Choice hypothesis of the Gaussian-law definition follows from [A1] by restriction to countable families. [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements), [math:def-standard-real-and-normalized-complex-gaussian-matrix-law](https://alphabetamath.cc/item/def-standard-real-and-normalized-complex-gaussian-matrix-law), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F9] For a nonnegative measurable random variable $X$, $\mathbb EX=\int_\Omega X\,d\mathbb P$, with an extended value allowed; for an integrable real random variable the same integral is its finite expectation and mean. For $p>0$, its $p$th absolute moment is $\mathbb E|X|^p$ when $|X|^p$ is integrable. [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable), [math:def-moments-variance-and-covariance](https://alphabetamath.cc/item/def-moments-variance-and-covariance).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 For every real unit $v$ and real symmetric $B$, [F3] gives $|v^TBv|\le\|B\|$. Thus the two signed suprema defining $\lambda_\pm(B)$ are finite and satisfy $|\lambda_\pm(B)|\le\|B\|$, because the real unit sphere is nonempty for $r\ge1$. For symmetric $A,B$, each signed quadratic value for $A$ is at most its value for $B$ plus $\|A-B\|$; taking suprema gives $\lambda_\pm(A)\le\lambda_\pm(B)+\|A-B\|$. Interchanging $A,B$ gives $|\lambda_\pm(A)-\lambda_\pm(B)|\le\|A-B\|$. Apply this with $A=T(z)$ and $B=T(w)$ and then use [F1], under [A1], to obtain the stated $\sqrt2$-Lipschitz bounds. [A1, F1, F3, algebra]

2.1 Under [A1], [F2] gives the common finite mean $m\ge0$ and $\|Y\|=m+\max(\lambda_+(Y)-m,\lambda_-(Y)-m)\le m+W$. Also $\|Y\|\ge0$. By step 1.1 and the scalar triangle inequality, $|\lambda_\pm(Y)-m|\le\|Y\|+m$, hence $0\le W\le\|Y\|+m$. [A1, F2, step 1.1, algebra]

3.1 By [F7], constants are simple measurable functions. With the measurability of $\lambda_\pm(Y)$ in [F2], [F4] therefore makes $a=|\lambda_+(Y)-m|$ and $b=|\lambda_-(Y)-m|$ measurable. The identity $W=(a+b+|a-b|)/2$ and [F4] prove that $W$ is measurable. It is finite-valued by step 2.1. For each integer $k\ge1$, [F5] applied with $q=2k>0$ to $W$ and to the nonnegative measurable $\|Y\|$ from [F1] proves measurability of $W^{2k}$ and $\|Y\|^{2k}$. [F1, F2, F4, F5, F7, step 2.1, algebra]

4.1 Fix an integer $k\ge1$. By [F9], expectations of the nonnegative measurable functions below are their nonnegative Lebesgue integrals. The nonnegative constant $C=m^{2k}$ is finite; by [F7], $\mathbb EC=C\mathbb P(\Omega)=C$. Step 2.1 gives $W^{2k}\le(\|Y\|+m)^{2k}\le2^{2k}(\|Y\|^{2k}+C)$: bound a sum of two nonnegative numbers by twice their maximum, raise to the positive integer power, and bound the maximum of the two powers by their sum. All functions here are measurable by step 3.1, [F4] and [F7]. Monotonicity, positive homogeneity and additivity in [F6] give $\mathbb EW^{2k}\le2^{2k}(\mathbb E\|Y\|^{2k}+C)<\infty$ by [F1]. Since $W\ge0$, this finite integral gives its finite $2k$th absolute moment in [F9]. Together with steps 1.1 and 2.1 this proves every assertion. [F1, F4, F6, F7, F9, step 1.1, step 2.1, step 3.1, algebra] ∎
