---
title: Bounded symmetric matrix expectation at the variance scale
status: draft
research_item: lem-author-4a6b79e2d031-bounded-symmetric-expectation
dependency_level: 1
sources:
  references:
    - title: A. S. Bandeira and R. van Handel, Sharp nonasymptotic bounds on the norm
        of random matrices with independent entries (2016)
      url: https://arxiv.org/abs/1408.6185v4
      locator: Corollary 3.6, reprint PDF p. 15; sigma definition, p. 2; proof, p. 16
      statement: For a symmetric matrix X_ij=xi_ij b_ij with independent symmetric
        unit-variance xi_ij (i>=j) and deterministic coefficients b_ij,
        sigma=max_i(sqrt(sum_j b_ij^2)), Corollary 3.6 gives E||X|| <=
        exp(2/u)(2 sigma +14u max_ij ||xi_ij b_ij||_(2 ceil(u log n)) sqrt(log
        n)) for every u>=3.
      hypotheses: Real symmetric finite matrix; independent lower-triangular symmetric
        unit-variance scalar variables; deterministic coefficients; u>=3;
        indicated moments finite. Symmetric means distribution invariant under
        sign reversal.
      reading_limits: Checked the reprint PDF text on p. 2 for the definition of
        sigma, p. 15 for the complete statement of Corollary 3.6, and p. 16 for
        its proof text; also inspected the rendered p. 15 formula. The theorem
        is imported, not reconstructed. Its proof dependencies and the rest of
        the paper were not audited. This independent 2016 source supplies the
        estimate; the article under study supplies no premise.
---

## Prerequisites

- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:def-symmetric-real-random-variable](https://alphabetamath.cc/item/def-symmetric-real-random-variable)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)
- [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)
- [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)
- [math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)
- [math:thm-product-probability-has-independent-coordinate-events](https://alphabetamath.cc/item/thm-product-probability-has-independent-coordinate-events)
- [` A. S. Bandeira and R. van Handel, Sharp nonasymptotic bounds on the norm of random matrices with independent entries (2016) · Corollary 3.6, reprint PDF p. 15; sigma definition, p. 2; proof, p. 16 `](https://arxiv.org/abs/1408.6185v4)


## Statement

Let $n\ge2$ and let $X$ be a real symmetric random matrix with independent finite-valued lower-triangular entries, each symmetric in distribution about zero, and $|X_{ij}|\le1$. Put $s=\max_i(\sum_j\mathbb E X_{ij}^2)^{1/2}$. For the Euclidean operator norm,
$$\mathbb E\|X\|\le e^{2/3}(2s+42\sqrt{\log n}).$$

## Facts & Assumptions

[F1] The Euclidean vertex norm and matrix action are those of [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space); the operator norm is [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space).

[F2] The original sample space may be any probability space ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)), with real random variables as in [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable) and independence as in [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements). Symmetry means equality of the laws of $Z$ and $-Z$ ([math:def-symmetric-real-random-variable](https://alphabetamath.cc/item/def-symmetric-real-random-variable)); for finite-valued $Z$ this says $\mathbb P(Z=t)=\mathbb P(Z=-t)$ for every real $t$.

[F3] Finite probability spaces and their real variables and distributions are [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event) and [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution). On them, mutual independence is the product formula for joint value events ([math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)), and expectation is the weighted finite sum ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)). On the original space expectation is [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable). A nonnegative finite-valued variable has expectation equal to the sum of each value times its probability, by [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function) and [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral).

[F4] The finite product is [math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces). Its weights normalize, and its coordinate events are mutually independent with their prescribed marginals, by [math:thm-product-probability-has-independent-coordinate-events](https://alphabetamath.cc/item/thm-product-probability-has-independent-coordinate-events).

[F5] The external estimate below is Bandeira–van Handel, Corollary 3.6, specialized to $u=3$.

## External input

For $X_{ij}=\xi_{ij}b_{ij}$, independent symmetric unit-variance $\xi_{ij}$ and deterministic real $b_{ij}$, set $\sigma=\max_i(\sum_jb_{ij}^2)^{1/2}$. Corollary 3.6 gives
$$\mathbb E\|X\|\le e^{2/3}\left(2\sigma+42\max_{ij}\|X_{ij}\|_{2\lceil3\log n\rceil}\sqrt{\log n}\right).$$
Here $\|Z\|_r=(\mathbb E|Z|^r)^{1/r}$. This established theorem is imported from the cited 2016 paper, not proved here.

## Proof

**Given:** The matrix in the Statement, without a finiteness assumption on its underlying sample space.

**Goal:** Establish the displayed expectation bound.

1.1 Let $I=\{(i,j):1\le j\le i\le n\}$. For $e\in I$ let $T_e$ be the finite set of values of $X_e$ with positive probability, and put $\mu_e(t)=\mathbb P(X_e=t)$. The value events form a finite partition up to events of probability zero, so the probability-measure axioms give $\sum_{t\in T_e}\mu_e(t)=1$. Thus $(T_e,\mu_e)$ is a finite probability space. On the product $T=\prod_{e\in I}T_e$, let $Y_e(t)=t_e$ and fill the upper triangle by symmetry. By the product theorem these entries are mutually independent. Independence of the original entries gives $\mathbb P(X_e=t_e\text{ for all }e\in I)=\prod_{e\in I}\mu_e(t_e)$, exactly the product weight of $t$. All other value arrays have probability zero. Hence $Y$ has the same finite joint law as $X$, including each marginal's symmetry and bound. [F2, F3, F4, given]

2.1 For every nonnegative real-valued function $g$ of the finitely many possible matrix values, the simple-function expectation formula gives $\mathbb E g(X)=\sum_{t\in T}g(t)\prod_{e\in I}\mu_e(t_e)=\mathbb E g(Y)$. In particular $\mathbb E\|X\|=\mathbb E\|Y\|$, and all entry second moments are preserved. Here the finitely many value fibres are measurable intersections of entry value events, so $g(X)$ is a nonnegative simple measurable function; this includes the operator norm. We may therefore prove the estimate on this finite product space without restricting the original sample space. [F1, F2, F3, step 1.1]

3.1 Set $b_{ij}=(\mathbb E Y_{ij}^2)^{1/2}=b_{ji}$ and $Z=\{(i,j)\in I:b_{ij}=0\}$. For $b_{ij}>0$ set $\xi_{ij}=Y_{ij}/b_{ij}$. Symmetry pairs each value with its negative, so its finite mean is zero and $\mathbb E\xi_{ij}^2=1$. If $b_{ij}=0$, the nonnegative weighted sum $\mathbb E Y_{ij}^2=0$ forces $Y_{ij}=0$ at every outcome of positive weight. Enlarge $T$ by one factor $\{-1,1\}$ with weights $1/2,1/2$ for each index in $Z$, using the product theorem; the empty $Z$ requires no extra factor. For these indices take $\xi_{ij}$ to be the corresponding sign. The enlarged space has total weight one and preserves the law of $Y$; the signs are mutually independent and independent of all original coordinates. Every $\xi_{ij}$ depends on its own distinct product coordinate, so its value events are coordinate events and the whole lower-triangular family is independent. All $\xi_{ij}$ are symmetric with mean zero and unit variance, and $Y_{ij}=b_{ij}\xi_{ij}$ almost surely, including the diagonal and zero-variance entries. [F2, F3, F4, step 1.1, step 2.1]

4.1 The external estimate applies to this factorization of $Y$. Its parameter is $\sigma=\max_i(\sum_j b_{ij}^2)^{1/2}=s$, and $|Y_{ij}|\le1$ gives $\|Y_{ij}\|_{2\lceil3\log n\rceil}\le1$ by summing the bounded nonnegative moments against normalized weights. Substitution yields $\mathbb E\|Y\|\le e^{2/3}(2s+42\sqrt{\log n})$. Transfer back by step 2.1 proves the claim for the original $X$. [F1, F3, F5, step 2.1, step 3.1] ∎

## Source notes

Only the explicitly stated nonasymptotic external theorem is imported. The finite-law reduction, product construction and variance normalization are local. The article under study supplies no premise.
