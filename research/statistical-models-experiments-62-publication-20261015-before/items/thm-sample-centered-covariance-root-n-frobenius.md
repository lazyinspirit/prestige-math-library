---
id: thm-sample-centered-covariance-root-n-frobenius
kind: theorem
title: "Finite-fourth-moment root-n consistency of sample-centered covariance"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-sample-covariance-and-operator-norm-loss
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - lem-variance-and-covariance-identities-for-random-variables
  - cor-covariance-vanishes-under-independence
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-markov-inequality-for-random-variables
  - def-op-and-little-op-stochastic-bounds
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Online Bayesian Data Analysis, Lecture Notes 8: Learning Signal Representations (11 April 2016)"
      url: "https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis, Lecture 8: Principal Component Analysis"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf"
---

## Statement

Fix $p\ge1$ and a Borel probability law $P$ on $\mathbb R^p$ with
$\mathbb E_P\|X\|_2^4<\infty$, mean $\mu$, and covariance matrix $\Sigma$.
For each $n\ge1$, let $X_{n,1},\ldots,X_{n,n}$ be iid with law $P$; the
probability space may depend on $n$. Put
$$\bar X_n:=\frac1n\sum_{i=1}^nX_{n,i},\qquad \widehat\Sigma_n^\ast:=\frac1n\sum_{i=1}^n(X_{n,i}-\bar X_n)(X_{n,i}-\bar X_n)^{\mathsf T},$$
the sample-centered covariance with divisor $n$ from
[[def-sample-covariance-and-operator-norm-loss]]. For a matrix $B$, define
$\|B\|_F:=(\sum_{j,k=1}^pB_{jk}^2)^{1/2}$. Then
$$\|\widehat\Sigma_n^\ast-\Sigma\|_F=O_P(n^{-1/2}),$$
meaning $\sqrt n\|\widehat\Sigma_n^\ast-\Sigma\|_F=O_P(1)$ in the
bounded-in-probability sense of
[[def-op-and-little-op-stochastic-bounds]]. No Gaussian assumption is needed.

## Facts & Assumptions

**Given:** A fixed finite $p\ge1$, a law $P$ on $\mathbb R^p$ with
$\mathbb E_P\|X\|_2^4<\infty$, and for each $n$ an iid sample of size $n$ from
$P$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: iid means
identically distributed and mutually independent, not only pairwise
independent.

[F2] [[lem-measurable-functions-preserve-independence]]: measurable
coordinatewise functions of an independent family remain independent.

[F3] [[def-covariance-matrix-of-a-random-vector]] and
[[def-sample-covariance-and-operator-norm-loss]]: $\Sigma_{jk}
=\mathbb E[(X_j-\mu_j)(X_k-\mu_k)]$ and
$\widehat\Sigma_n^\ast=n^{-1}\sum_i(X_{n,i}-\bar X_n)
(X_{n,i}-\bar X_n)^{\mathsf T}$.

[F4] [[lem-variance-and-covariance-identities-for-random-variables]] and
[[cor-covariance-vanishes-under-independence]]: covariance is bilinear on
finite sums, and independent square-integrable real random variables have
zero covariance.

[F5] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
is linear for integrable variables.

[F6] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Z$ and
$a>0$, $\mathbb P(Z\ge a)\le\mathbb E[Z]/a$.

[F7] [[def-op-and-little-op-stochastic-bounds]]:
$Z_n=O_P(1)$ means, using the Euclidean norm of its finite vectorization, that
for every $\eta>0$ some $M>0$ satisfies
$\limsup_n\mathbb P(|Z_n|>M)\le\eta$.

[F8] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm
satisfies the triangle inequality in every finite dimension.

## Proof

**Proof technique:** direct.

1.1 Since $t^2\le1+t^4$ for $t\ge0$, the fourth-moment assumption gives $\mathbb E\|X\|_2^2<\infty$. Then $\|X\|_2\le1+\|X\|_2^2$ gives $\mathbb E\|X\|_2<\infty$, so the coordinatewise mean $\mu$ is finite. Put $Y_{n,i}=X_{n,i}-\mu$ and $M_n=n^{-1}\sum_iY_{n,i}Y_{n,i}^{\mathsf T}$. By [F8], $\|Y_{n,1}\|_2\le\|X_{n,1}\|_2+\|\mu\|_2$. For $a,b\ge0$, $2ab\le a^2+b^2$ gives $(a+b)^2\le2(a^2+b^2)$ and then $(a+b)^4\le4(a^2+b^2)^2\le8(a^4+b^4)$. Hence $\mathbb E\|Y_{n,1}\|_2^4\le8(\mathbb E\|X\|_2^4+\|\mu\|_2^4)<\infty$. For each $j,k$, the variables $W_{n,i}^{jk}:=Y_{n,i,j}Y_{n,i,k}-\Sigma_{jk}$ are centered and square-integrable because $(Y_{n,i,j}Y_{n,i,k})^2\le\|Y_{n,i}\|_2^4$. The map $y\mapsto y_jy_k-\Sigma_{jk}$ is Borel, so [F1] and [F2] make $(W_{n,i}^{jk})_{i=1}^n$ independent. [F1, F2, F3, F8, given, algebra]

2.1 Let $\bar Y_n=n^{-1}\sum_iY_{n,i}$. By [F1] and [F2], the coordinate variables $Y_{n,i,j}$ are independent across $i$. Thus [F4] makes their cross-covariances zero, and [F4] and [F5] give $\mathbb E\|\bar Y_n\|_2^2=\operatorname{tr}(\Sigma)/n$. Also $\|\bar Y_n\bar Y_n^{\mathsf T}\|_F=\|\bar Y_n\|_2^2$ by expanding both squares. For every $C>0$, [F6] therefore gives $\mathbb P(\sqrt n\|\bar Y_n\bar Y_n^{\mathsf T}\|_F>C) \le\operatorname{tr}(\Sigma)/(C\sqrt n)\to0$. Thus this centered-mean term converges to zero in probability. [F1, F2, F3, F4, F5, F6, step 1.1, algebra]

2.2 For fixed $j,k$, all $W_{n,i}^{jk}$ are the same Borel function of the iid vectors $Y_{n,i}$, so they are iid: their independence follows from [F1] and [F2], and equal laws follow because a measurable map sends equal input laws to equal output laws. Thus [F4] gives $\mathbb E[(M_{n,jk}-\Sigma_{jk})^2] =n^{-2}\sum_i\operatorname{Var}(W_{n,i}^{jk}) =n^{-1}\operatorname{Var}(W_{n,1}^{jk})$. Since $\mathbb E[Y_{n,1,j}Y_{n,1,k}]=\Sigma_{jk}$, $\operatorname{Var}(W_{n,1}^{jk}) =\mathbb E[Y_{n,1,j}^2Y_{n,1,k}^2]-\Sigma_{jk}^2 \le\mathbb E[Y_{n,1,j}^2Y_{n,1,k}^2]$. Summing over $j,k$ and using $\sum_{j,k}Y_{n,1,j}^2Y_{n,1,k}^2=\|Y_{n,1}\|_2^4$ yields $\mathbb E\|M_n-\Sigma\|_F^2\le n^{-1}\mathbb E\|Y_{n,1}\|_2^4$. Consequently [F6] gives, for every $C>0$, $\mathbb P(\sqrt n\|M_n-\Sigma\|_F>C) \le\mathbb E\|Y_{n,1}\|_2^4/C^2$, so $\sqrt n\|M_n-\Sigma\|_F=O_P(1)$ by [F7]. [F1, F2, F3, F4, F6, F7, step 1.1, algebra]

3.1 Expanding the centered sum in [F3] gives $\widehat\Sigma_n^\ast=M_n-\bar Y_n\bar Y_n^{\mathsf T}$. For a matrix $B$, let $\operatorname{vec}(B)\in\mathbb R^{p^2}$ list its entries; by the definition of the Frobenius norm, $\|\operatorname{vec}(B)\|_2=\|B\|_F$. Applying [F8] to these vectors gives $\|B+C\|_F\le\|B\|_F+\|C\|_F$, including the triangle inequality used below. For any $\eta>0$, choose $C_1$ so the limsup tail of $\sqrt n\|M_n-\Sigma\|_F$ above $C_1$ is at most $\eta/2$ by step 2.2. For all sufficiently large $n$, the probability that $\sqrt n\|\bar Y_n\bar Y_n^{\mathsf T}\|_F>1$ is at most $\eta/2$ by step 2.1. The displayed Frobenius triangle inequality then bounds the limsup probability that $\sqrt n\|\widehat\Sigma_n^\ast-\Sigma\|_F>C_1+1$ by $\eta$. This is $\sqrt n\|\widehat\Sigma_n^\ast-\Sigma\|_F=O_P(1)$ by [F7], which is the claimed root-n rate. [F3, F7, F8, step 2.2, step 2.1, algebra] ∎