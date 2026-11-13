---
title: Expected extreme eigenvalues from finite Gaussian comparison
status: published
research_item: lem-author-b9de37ca32a7-expected-extreme-eigenvalues
dependency_level: 3
---

## Prerequisites

- [lem-author-b9de37ca32a7-quadratic-gaussian-increments](item-lem-author-b9de37ca32a7-quadratic-gaussian-increments)
- [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-expander-prereq-gaussian-finite-net-transfer](item-prop-expander-prereq-gaussian-finite-net-transfer)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)
- [math:cor-cauchy-schwarz-for-random-variables](https://alphabetamath.cc/item/cor-cauchy-schwarz-for-random-variables)
- [math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal](https://alphabetamath.cc/item/lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal)
- [math:def-multivariate-normal-law](https://alphabetamath.cc/item/def-multivariate-normal-law)
- [math:thm-cramer-wold-device](https://alphabetamath.cc/item/thm-cramer-wold-device)
- [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n)
- [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable)
- [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability)
- [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)
- [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)


## Statement

Assume the Axiom of Choice. Fix an integer $r\ge1$, put $N=r(r+1)/2$, and let $Z=(Z_{ij})_{1\le i\le j\le r}$ have mutually independent standard normal coordinates on a common probability space. Set $T(z)_{ij}=T(z)_{ji}=z_{ij}$, $Y=T(Z)$, and $S=\{v\in\mathbb R^r:\|v\|_2=1\}$. Use the operator norm on the vertex Hilbert space $\mathbb C^{\{1,\ldots,r\}}$. Define $\lambda_+(Y)=\sup_{v\in S}v^TYv$ and $\lambda_-(Y)=\sup_{v\in S}(-v^TYv)$. These measurable integrable random variables have the same distribution and satisfy $0\le m:=\mathbb E\lambda_+(Y)=\mathbb E\lambda_-(Y)\le2\sqrt r$. Moreover $\|Y\|=\max(\lambda_+(Y),\lambda_-(Y))$.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)

[lem-author-b9de37ca32a7-quadratic-gaussian-increments](item-lem-author-b9de37ca32a7-quadratic-gaussian-increments)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)

## Facts & Assumptions

[F1] The quadratic and linear comparison processes are centered Gaussian, continuous, and have the required increment ordering. [lem-author-b9de37ca32a7-quadratic-gaussian-increments](item-lem-author-b9de37ca32a7-quadratic-gaussian-increments).

[F2] The sphere comparison applies to continuous Gaussian processes with measurable integrable suprema under Choice. [prop-expander-prereq-gaussian-finite-net-transfer](item-prop-expander-prereq-gaussian-finite-net-transfer), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F3] The operator norm of a real symmetric matrix is characterized by its two-sided quadratic-form order bounds in the vertex Hilbert space; real vectors satisfy Euclidean Cauchy–Schwarz and the Euclidean norm triangle inequality. [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space), [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm).

[F4] The triangular map satisfies $\|T(z)-T(w)\|\le\sqrt2\|z-w\|_2$, its Gaussian matrix has measurable norm and every even norm moment, and Cauchy–Schwarz for random variables bounds a first absolute moment by the square root of the second moment. [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments), [math:cor-cauchy-schwarz-for-random-variables](https://alphabetamath.cc/item/cor-cauchy-schwarz-for-random-variables).

[F5] Under Choice, independent normal coordinates stack to a multivariate normal vector with the specified scalar projection laws. Cramér–Wold says that all scalar projection laws determine a Borel probability law in positive finite dimension. [math:lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal](https://alphabetamath.cc/item/lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal), [math:def-multivariate-normal-law](https://alphabetamath.cc/item/def-multivariate-normal-law), [math:thm-cramer-wold-device](https://alphabetamath.cc/item/thm-cramer-wold-device).

[F6] A finite positive-dimensional real vector is Borel measurable exactly when its coordinates are measurable. Under Countable Choice, continuous maps between positive-dimensional Euclidean spaces are Borel measurable, and composition of measurable maps preserves measurability. [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n), [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable), [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability).

[F7] A standard real Gaussian coordinate has finite absolute moments, mean zero and second moment one. [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments).

[F8] Finite integrable sums have linear expectation, and the nonnegative integral is monotone and homogeneous. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral).

[F9] A random element’s law assigns to each measurable target set the probability of its inverse image. Integration against that law gives the expectation of every nonnegative or integrable measurable function of the random element. [math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element), [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 For a real symmetric matrix $A$, [F3] applied with $b=\|A\|$ gives $|v^TAv|\le\|A\|$ for every real unit $v$. Thus the two signed suprema are finite, since $S$ is nonempty. Put $f_\pm(z)=\sup_{v\in S}(\pm v^TT(z)v)$. For each $v\in S$, [F3] and [F4] give $|v^T(T(z)-T(w))v|\le\sqrt2\|z-w\|_2$. Bounding each signed quadratic value at $z$ by its value at $w$ plus this constant, and taking suprema, gives $f_\pm(z)\le f_\pm(w)+\sqrt2\|z-w\|_2$. Interchanging $z,w$ proves $|f_\pm(z)-f_\pm(w)|\le\sqrt2\|z-w\|_2$. In particular both functions are continuous. [F3, F4, algebra]

1.2 For the comparison vector $g$ in [F1], Cauchy–Schwarz gives $\sup_{v\in S}2v^Tg=2\|g\|_2$: if $g\ne0$ take $v=g/\|g\|_2$, and if $g=0$ every value is zero. The triangle inequality in [F3] gives $|2\|a\|_2-2\|b\|_2|\le2\|a-b\|_2$, so [F6] makes this supremum and its square measurable as functions of the Borel vector $g$. By [F7], each $g_i^2$ is integrable with expectation one. Applying [F8] to the finite sum gives $\mathbb E(2\|g\|_2)^2=4\sum_{i=1}^r\mathbb E g_i^2=4r$. Cauchy–Schwarz in [F4], with the constant one, now gives $\mathbb E(2\|g\|_2)\le2\sqrt r$, establishing integrability of the comparison supremum. [F1, F3, F4, F6, F7, F8, algebra]

2.1 Choice implies Countable Choice by restricting to countable families. The measurable Gaussian coordinates and [F6] therefore make $Z$ a Borel random vector, $f_\pm$ Borel functions, and $\lambda_\pm(Y)=f_\pm(Z)$ measurable real random variables. The absolute-value and squaring functions on $\mathbb R$ are continuous (use $||s|-|t||\le|s-t|$ and $|s^2-t^2|=|s-t||s+t|$), so [F6] also makes their compositions measurable. By [F4], Cauchy–Schwarz applied to $\|Y\|$ and the constant one gives $\mathbb E\|Y\|\le(\mathbb E\|Y\|^2)^{1/2}<\infty$. Since $|\lambda_\pm(Y)|\le\|Y\|$ by step 1.1, monotonicity in [F8] proves integrability of both extreme values. [F4, F6, F8, step 1.1, algebra]

2.2 Fix a realization of $Y$ and put $M=\max(\lambda_+(Y),\lambda_-(Y))$. For any unit $v$, $M\ge\max(v^TYv,-v^TYv)=|v^TYv|\ge0$. Scaling real vectors gives $|x^TYx|\le M\|x\|_2^2$, also when $x=0$. For $u=x+iy$, real symmetry cancels the imaginary cross terms, so $u^*Yu=x^TYx+y^TYy$ and $|u^*Yu|\le M(\|x\|_2^2+\|y\|_2^2)=M\|u\|_2^2$. Thus $-MI\preceq Y\preceq MI$ in [F3], which gives $\|Y\|\le M$. Step 1.1 gives $M\le\|Y\|$, proving equality. [F3, step 1.1, algebra]

3.1 Apply [F2] with its larger-increment process equal to $H_v=2v^Tg$ and its smaller-increment process equal to $Q_v=v^TYv$. The common index sphere has dimension $r\ge1$, centering, continuity and increment ordering hold by [F1], and measurable integrable suprema were verified in steps 2.1 and 1.2. Hence $\mathbb E\lambda_+(Y)\le\mathbb E(2\|g\|_2)\le2\sqrt r$. Also $\lambda_+(Y)\ge e_1^TYe_1=Y_{11}$, whose mean is zero by [F7]. Their difference is an integrable nonnegative random variable by step 2.1 and [F8], so [F8] gives $\mathbb E\lambda_+(Y)\ge0$. [F1, F2, F7, F8, step 2.1, step 1.2, algebra]

4.1 By [F5], $Z\sim N_N(0,I)$ and for every $u\in\mathbb R^N$ the scalar $u^TZ$ has law $N(0,\|u\|_2^2)$. The vector $-Z$ is Borel measurable by [F6], since negation is continuous. Its projection $u^T(-Z)=(-u)^TZ$ has that same scalar law, including $u=0$. Since $N=r(r+1)/2\ge1$ and Choice is assumed, Cramér–Wold in [F5] identifies the Borel laws of $Z$ and $-Z$. For every Borel $B\subseteq\mathbb R$, the set $f_+^{-1}(B)$ is Borel by step 2.1; [F9] therefore gives $\mathbb P(f_+(Z)\in B)=\mathbb P(f_+(-Z)\in B)$. Linearity of $T$ yields $f_+(-z)=f_-(z)$ pointwise. Consequently $\lambda_+(Y)$ and $\lambda_-(Y)$ have the same law. Their integrability from step 2.1 and the expectation formula in [F9], applied to the identity function on $\mathbb R$, give equality of their expectations. Together with steps 2.2 and 3.1 this proves every assertion. [F5, F6, F9, step 2.1, step 2.2, step 3.1, algebra] ∎
