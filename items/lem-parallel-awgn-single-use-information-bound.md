---
id: lem-parallel-awgn-single-use-information-bound
kind: lemma
title: Finite-input vector Gaussian mutual information is bounded by water-filling
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-axiom-of-choice, def-standard-normal-and-normal-laws, thm-nondegenerate-multivariate-normal-law-has-density, lem-gaussian-maximum-differential-entropy-under-variance, lem-water-filling-optimal-allocation, def-kullback-leibler-divergence, def-moments-variance-and-covariance, thm-factorization-of-expectations-for-independent-variables, thm-kullback-leibler-is-nonnegative, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-natural-logarithm, lem-standard-normal-fourth-moment]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is inherited from the finite-dimensional Gaussian law and its orthogonalization; the entropy and KL calculations use no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §§20.3–20.4"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §§17.3.1–17.3.2"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Assume AC. Let $Z=(Z_1,\ldots,Z_d)$ have independent coordinates $Z_j\sim N(0,\lambda_j)$ with $\lambda_j>0$, and let $X$ be an independent finite-support random vector in $\mathbb R^d$ with $\mathbb E\|X\|_2^2\le P$. Define $I(X;X+Z)$ as the relative entropy, in nats, of the joint law with respect to the product of its marginals. Then
$$I(X;X+Z)\le C_d(P):=\max_{p_j\ge0,\,\sum_jp_j\le P}\frac12\sum_{j=1}^d\ln\left(1+\frac{p_j}{\lambda_j}\right).$$
The maximum is attained by the allocation in [[lem-water-filling-optimal-allocation]].

## Facts & Assumptions

**Given:** AC, independent scalar Gaussian noise coordinates of positive variances, an independent finite-support input vector, and its second-moment bound.

[A1] [[def-axiom-of-choice]] and [[def-standard-normal-and-normal-laws]]: Gaussian laws are used under AC; each $N(0,\lambda_j)$ is a scaled standard-normal law.

[F1] [[thm-nondegenerate-multivariate-normal-law-has-density]]: every scalar Gaussian with positive variance has a positive Gaussian Lebesgue density.

[F2] [[lem-gaussian-maximum-differential-entropy-under-variance]]: a scalar density of finite entropy and variance $v>0$ has $h\le\frac12\ln(2\pi e v)$.

[F3] [[thm-kullback-leibler-is-nonnegative]]: relative entropy between probability measures is nonnegative.

[F4] [[lem-water-filling-optimal-allocation]]: the finite allocation objective is maximized by its water-filling allocation.

[F5] [[def-kullback-leibler-divergence]]: $D(P\|Q)=\int\ln(dP/dQ)\,dP$ for $P\ll Q$.

[F6] [[def-moments-variance-and-covariance]]: variance is the expected squared deviation from the mean.

[F7] [[thm-factorization-of-expectations-for-independent-variables]]: independent integrable variables have factorized product expectations.

[F8] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions on a sigma-finite product space can be integrated in either order.

[F9] [[def-natural-logarithm]]: logarithms are natural.

[F10] [[lem-standard-normal-fourth-moment]]: for $Z_j\sim N(0,\lambda_j)$, $\mathbb E Z_j^2=\lambda_j$.

## Proof

1.1 Write $Y=X+Z$. Its density is the finite mixture $p_Y(y)=\sum_xP_X(x)\prod_j\phi_{\lambda_j}(y_j-x_j)$, which is positive and bounded by [F1]. Fix any support point $x_0$ with $P_X(x_0)>0$. Then $p_Y(y)\ge P_X(x_0)\prod_j\phi_{\lambda_j}(y_j-x_{0j})$. The Gaussian upper bound and this lower bound show $|\ln p_Y(y)|\le C(1+\|y\|_2^2)$ for some finite $C$; $Y$ has finite second moment, so $h(Y)$ is absolutely finite by [F10]. The same bounds apply to each marginal $Y_j$, and each conditional density given a support point is a Gaussian translate, so all entropy integrals below are finite. [A1, F1, F10, given, algebra]

2.1 The joint output density has finite differential entropy by step 1.1. On the support of $X$, the joint-to-product density ratio in [F5] is $\prod_j\phi_{\lambda_j}(y_j-x_j)/p_Y(y)$. Expanding its logarithm and integrating gives $I(X;Y)=h(Y)-h(Y\mid X)=h(Y)-h(Z)$, because each conditional output density is a translate of the noise density. The KL divergence of $P_Y$ from the product of its marginals is finite by step 1.1 and nonnegative by [F3]; expanding it gives $h(Y)\le\sum_jh(Y_j)$. [F3, F5, F9, step 1.1, given, algebra]

3.1 Independence [F7] and the variance definition [F6] give $\operatorname{Var}(Y_j)=\operatorname{Var}(X_j)+\lambda_j$ and $\operatorname{Var}(X_j)\le\mathbb E X_j^2$. By [F2], $h(Y_j)\le\frac12\ln(2\pi e(\operatorname{Var}(X_j)+\lambda_j))$. Direct integration of $\phi_{\lambda_j}$ using [F1] and [F10] gives $h(Z_j)=\frac12\ln(2\pi e\lambda_j)$, hence $h(Z)=\sum_jh(Z_j)$ by independence. Tonelli [F8] on the integrable positive and negative parts from step 1.1 justifies the product integrals. Therefore $I(X;Y)\le\frac12\sum_j\ln(1+\operatorname{Var}(X_j)/\lambda_j)\le\frac12\sum_j\ln(1+\mathbb E X_j^2/\lambda_j)$. The powers $p_j=\mathbb E X_j^2$ sum to at most $P$, so [F4] proves the claim. [F1, F2, F4, F6, F7, F8, F9, F10, step 1.1, step 2.1, given, algebra] ∎