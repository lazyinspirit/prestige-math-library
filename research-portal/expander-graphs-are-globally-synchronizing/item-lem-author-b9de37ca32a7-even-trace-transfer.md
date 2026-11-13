---
title: Even trace moments transfer from the operator norm
status: published
research_item: lem-author-b9de37ca32a7-even-trace-transfer
dependency_level: 2
---

## Prerequisites

- [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)
- [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-extended-real-valued-measurable-function](https://alphabetamath.cc/item/def-extended-real-valued-measurable-function)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)


## Statement

Let $A$ be real symmetric of size $r\ge1$ on the vertex Hilbert space, with operator norm $\|A\|$. For every integer $p\ge1$, define $\operatorname{Tr}(B)=\sum_{i=1}^r B_{ii}$; then $0\le\operatorname{Tr}(A^{2p})\le r\|A\|^{2p}$.

For the probabilistic conclusion, assume in addition the Axiom of Choice. Let $Z=(Z_{ij})_{1\le i\le j\le r}$ have independent standard normal real coordinates, and set $Y_{ij}=Y_{ji}=Z_{ij}$. Then both expectations below are finite, and $(\mathbb E\operatorname{Tr}(Y^{2p}))^{1/(2p)}\le r^{1/(2p)}(\mathbb E\|Y\|^{2p})^{1/(2p)}$.

## Statement references

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)

[lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)

[math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)

[math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

## Facts & Assumptions

[F1] A self-adjoint finite-dimensional complex operator has an orthonormal eigenbasis, and the vertex convention has the same adjoint, norm and self-adjoint eigenvalues. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space).

[F2] The operator norm bounds the absolute value of each eigenvalue. Under the Axiom of Choice, the stated triangular Gaussian matrix has measurable norm and finite even norm moments. Choice is used here to meet the hypotheses of the triangular-norm supplier. [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm), [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F3] For a nonnegative measurable random variable, expectation is its nonnegative integral with respect to the probability measure. This integral is monotone and homogeneous. [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral).

[F4] For a real-valued function on a measure space, measurability is equivalent to measurability of every strict superlevel set. Sums, real scalar multiples and absolute values of finite real-valued measurable functions are measurable. [math:def-extended-real-valued-measurable-function](https://alphabetamath.cc/item/def-extended-real-valued-measurable-function), [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral).

[F5] On the nonzero finite-dimensional vertex space, the induced operator norm of a linear map $T$ is $\max_{\|u\|_2=1}\|Tu\|_2$. The convention transfer in [F1] preserves this norm. [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space).

[F6] A real random variable is a measurable map from a probability space into $\mathbb R$ with its Borel sigma-algebra. Random elements on a common probability space are independent when their generated sigma-algebras are independent. Under Choice, the standard normal law $N(0,1)$ is the probability measure with density $e^{-x^2/2}/\sqrt{2\pi}$. [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable), [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements), [math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

## Proof

**Given:** The objects and hypotheses in the Statement; Choice is assumed only for the Gaussian conclusion.

**Goal:** Establish the deterministic bound and the conditional Gaussian expectation bound.

1.1 Symmetry makes $A$ self-adjoint. By [F1], write $A=U\operatorname{diag}(\mu_1,\ldots,\mu_r)U^*$ with real $\mu_j$ and unitary $U$. Matrix multiplication gives $\operatorname{Tr}(A^{2p})=\sum_i\sum_j\mu_j^{2p}|U_{ij}|^2=\sum_j\mu_j^{2p}$ because each column has squared norm one. Each summand is nonnegative and at most $\|A\|^{2p}$ by [F2]. Summation proves the deterministic bound without using Choice. [F1, F2, F5, algebra]

1.2 Let $f$ be a finite real-valued measurable function on a measure space $(\Omega,\mathcal F,\mu)$. By [F4], $|f|$ is measurable. For $a<0$, $\{f^2>a\}=\Omega$; for $a\ge0$, $\{f^2>a\}=\{|f|>\sqrt a\}$. Thus every strict superlevel of $f^2$ is measurable, so [F4] makes $f^2$ measurable. If $g$ is another finite real-valued measurable function, [F4] and the identity $fg=((f+g)^2-(f-g)^2)/4$ then make $fg$ measurable. Induction gives measurability of every finite product and finite sum of products of such functions. [F4, algebra]

2.1 Now assume Choice and use the Gaussian coordinates in the Statement. By [F6], each $Z_{ij}$ is a finite real-valued measurable random variable; every entry of $Y$ is one of these coordinates. Expanding matrix powers gives $\operatorname{Tr}(Y^{2p})=\sum_{i_0,\ldots,i_{2p-1}=1}^r\prod_{k=0}^{2p-1}Y_{i_k i_{k+1}}$, where $i_{2p}=i_0$. This finite sum of finite products is measurable by step 1.2. The same step applied to the measurable norm from [F2] makes $\|Y\|^{2p}$ measurable. [given, F2, F6, step 1.2, algebra]

3.1 Apply step 1.1 pointwise to $Y$. Steps 1.1 and 2.1 give nonnegative measurable functions with $0\le\operatorname{Tr}(Y^{2p})\le r\|Y\|^{2p}$. By [F2], $\mathbb E\|Y\|^{2p}<\infty$, and [F3] gives $0\le\mathbb E\operatorname{Tr}(Y^{2p})\le r\mathbb E\|Y\|^{2p}<\infty$. Taking the increasing positive $2p$th root gives exactly the stated expectation inequality. [F2, F3, step 1.1, step 2.1, algebra] ∎
