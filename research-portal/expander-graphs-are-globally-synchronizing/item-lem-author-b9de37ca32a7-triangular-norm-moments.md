---
title: "Triangular Gaussian coordinates: metric and moment control"
status: published
research_item: lem-author-b9de37ca32a7-triangular-norm-moments
dependency_level: 1
---

## Prerequisites

- [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)
- [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm)
- [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable)
- [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability)
- [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n)


## Statement

Assume the Axiom of Choice. Fix an integer $r\ge1$, put $N=r(r+1)/2$, and index $z\in\mathbb R^N$ by $1\le i\le j\le r$. Let $T(z)_{ij}=T(z)_{ji}=z_{ij}$ and let $\|A\|$ be the operator norm on the vertex Hilbert space $\mathbb C^{\{1,\ldots,r\}}$. Write $\|A\|_F=(\sum_{i,j}|A_{ij}|^2)^{1/2}$. Then $\|T(z)-T(w)\|\le\|T(z)-T(w)\|_F\le\sqrt2\|z-w\|_2$. If $Z$ has independent standard normal coordinates and $Y=T(Z)$, then $\|Y\|$ is measurable and $\mathbb E\|Y\|^{2k}<\infty$ for every integer $k\ge1$. In particular $Y$ has variance-one diagonal entries and identical mirrored off-diagonal entries.

## Facts & Assumptions

[F1] The triangular construction and every absolute Gaussian moment are available under Choice. [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The vertex inner product is linear in its second argument. The real and complex Cauchy–Schwarz inequality applies in the library's linear-first convention and transfers to this convention by conjugation, with the same absolute values and norms. [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space), [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces).

[F3] Finite sums and real scalar multiples of measurable real-valued functions are measurable. The nonnegative integral is monotone and homogeneous, and finite integrable sums have linear expectation. [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral), [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one).

[F4] For a bounded linear map on a nonzero normed space, the operator norm is the supremum of its values on unit vectors. It is a norm on the space of bounded linear maps, in particular satisfying the triangle inequality. [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm), [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm).

[F5] A map from a measurable space into $\mathbb R^N$, $N\ge1$, equipped with its Borel sigma-algebra, is measurable exactly when its real coordinates are measurable. Under Countable Choice, a continuous map between positive-dimensional Euclidean spaces is Borel measurable. Composition of measurable maps, with matching sigma-algebras, is measurable. [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n), [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable), [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 For any complex matrix $A$ and vector $u$, put $a_i=(\overline{A_{ij}})_j$. In the vertex convention, $\langle a_i,u\rangle=\sum_jA_{ij}u_j$, so [F2] gives $\|Au\|_2^2=\sum_i|\langle a_i,u\rangle|^2\le\sum_i(\sum_j|A_{ij}|^2)\|u\|_2^2=\|A\|_F^2\|u\|_2^2$. Thus the matrix action is bounded, and its operator norm in [F4] satisfies $\|A\|\le\|A\|_F$. Also $\|T(z)-T(w)\|_F^2=\sum_i(z_{ii}-w_{ii})^2+2\sum_{i<j}(z_{ij}-w_{ij})^2\le2\|z-w\|_2^2$. Taking nonnegative square roots proves the stated metric estimates. [F2, F4, algebra]

2.1 The operator-norm triangle inequality in [F4], applied in both directions, gives $|\|T(z)\|-\|T(w)\||\le\|T(z)-T(w)\|\le\sqrt2\|z-w\|_2$. Hence $h:\mathbb R^N\to\mathbb R$, $h(z)=\|T(z)\|$, is continuous. [F4, step 1.1, algebra]

3.1 Choice supplies the countable-choice hypothesis in [F5] by restriction to countable families. The Gaussian coordinates are measurable real random variables on their common probability space by [F1], so [F5] makes $Z$ measurable into $(\mathbb R^N,\mathcal B(\mathbb R^N))$, where $N\ge1$. Step 2.1 and [F5] make $h$ Borel measurable, so $h\circ Z=\|Y\|$ is measurable. For any fixed $k\ge1$, the map $p_k(t)=t^{2k}$ is continuous: factorization gives $|s^{2k}-t^{2k}|\le2k\max(|s|,|t|)^{2k-1}|s-t|$, which tends to zero as $s\to t$. Applying [F5] to $p_k$ and then composing with $h\circ Z$ or an individual Gaussian coordinate proves measurability of $\|Y\|^{2k}$ and $|Z_{ij}|^{2k}$. Their finite sums and nonnegative scalar multiples are measurable by [F3]. [F1, F3, F5, step 2.1, algebra]

4.1 By step 1.1, $\|Y\|^{2k}\le2^k(\sum_{i\le j}Z_{ij}^2)^k\le2^kN^k\sum_{i\le j}|Z_{ij}|^{2k}$: the sum of the $N$ coordinate squares is at most $N$ times their maximum, and the $k$th power of that maximum is at most the sum of their $k$th powers. Every summand has finite expectation by [F1]. Using the measurability from step 3.1, finite linearity and monotonicity in [F3] give $\mathbb E\|Y\|^{2k}\le2^kN^k\sum_{i\le j}\mathbb E|Z_{ij}|^{2k}<\infty$. Finally $Y_{ii}=Z_{ii}$ has mean zero and second moment one by [F1], hence variance one, while $Y_{ij}=Y_{ji}=Z_{ij}$ for $i<j$ by construction. [F1, F3, step 1.1, step 3.1, algebra] ∎
