---
id: cor-pca-sample-leading-eigenspace-root-n-consistency
kind: corollary
title: "A simple population eigengap gives root-n sample PCA eigenspace consistency"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-covariance-and-correlation-principal-component-analysis
  - lem-pca-sample-covariance-is-a-measurable-estimator
  - thm-local-leading-eigenvector-stability-under-eigengap
  - thm-sample-centered-covariance-root-n-frobenius
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-op-and-little-op-stochastic-bounds
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
sources:
  references:
    - title: "Online Bayesian Data Analysis, Lecture Notes 8: Learning Signal Representations (11 April 2016)"
      url: "https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis, Lecture 8: Principal Component Analysis"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf"
---

## Statement

Let $X_{n,1},\ldots,X_{n,n}$ be iid copies of a fixed
$X\in\mathbb R^p$ with $\mathbb E\|X\|_2^4<\infty$, where $p\ge2$, and let
$\Sigma=\operatorname{Cov}(X)$ have a simple leading eigenvalue with gap
$g=\lambda_1(\Sigma)-\lambda_2(\Sigma)>0$. Let $\widehat\Sigma_n^\ast$ be
the sample-centered covariance with divisor $n$, and put
$\epsilon_n=\|\widehat\Sigma_n^\ast-\Sigma\|_{\mathrm{op}}$ and
$G_n=\{\epsilon_n<g/2\}$. Then $\mathbb P(G_n)\to1$. On $G_n$ the sample
leading eigenspace is a line; define $Z_n$ to be the sine of its angle to the
population leading line and set $Z_n=0$ off $G_n$. Then
$Z_n=O_P(n^{-1/2})$, hence $Z_n\to0$ in probability. In particular, the
sample leading eigenspace is a unique line with probability tending to one.
The angle is line-based and sign-invariant. This is a local
eigenspace-consistency result, not finite-sample inference for a selected
component.

## Facts & Assumptions

**Given:** Fixed $p\ge2$, iid samples from a law with finite fourth moment,
the population covariance $\Sigma$, its simple leading eigenvalue gap $g>0$,
and sample-centered covariance $\widehat\Sigma_n^\ast$ with divisor $n$.

[F1] [[thm-sample-centered-covariance-root-n-frobenius]]:
$\|\widehat\Sigma_n^\ast-\Sigma\|_F=O_P(n^{-1/2})$.

[F2] [[thm-local-leading-eigenvector-stability-under-eigengap]]: if a
symmetric perturbation has operator norm $\epsilon<g/2$, the perturbed
leading eigenvalue remains simple and its leading line has sine-angle at
most $\epsilon/(g-\epsilon)$ from the population line.

[F3] [[lem-pca-sample-covariance-is-a-measurable-estimator]]: the sample
covariance is a measurable matrix-valued statistic.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
$\|B\|_{\mathrm{op}}=\max_{\|u\|_2=1}\|Bu\|_2$.

[F5] [[def-euclidean-inner-product]] and
[[thm-cauchy-schwarz-in-an-inner-product-space]]: the Euclidean norm is
induced by the inner product, and Cauchy--Schwarz holds.

[F6] [[def-op-and-little-op-stochastic-bounds]]:
$O_P(1)$ means bounded in probability; thus an $O_P(n^{-1/2})$ quantity
becomes $O_P(1)$ after multiplication by $\sqrt n$.

## Proof

**Proof technique:** direct.

1.1 For every $p\times p$ matrix $B$ and unit vector $u$, applying Cauchy--Schwarz to each row gives $\|Bu\|_2^2=\sum_j(\sum_kB_{jk}u_k)^2 \le\sum_{j,k}B_{jk}^2=\|B\|_F^2$. Hence [F4] gives $\|B\|_{\mathrm{op}}\le\|B\|_F$. With $\epsilon_n=\|\widehat\Sigma_n^\ast-\Sigma\|_{\mathrm{op}}$, [F1] implies $\epsilon_n=O_P(n^{-1/2})$ by [F6]. To see $\mathbb P(G_n)\to1$, fix $\eta>0$ and choose $C$ so the limsup tail of $\sqrt n\|\widehat\Sigma_n^\ast-\Sigma\|_F$ above $C$ is at most $\eta$. For all sufficiently large $n$, $C/\sqrt n<g/2$, and then $G_n^c\subseteq\{\sqrt n\|\widehat\Sigma_n^\ast-\Sigma\|_F>C\}$. Thus $\limsup_n\mathbb P(G_n^c)\le\eta$, so the claimed probability tends to one. [F1, F3, F4, F5, F6, given, algebra]

2.1 On $G_n$, [F2] says that the sample leading eigenvalue is simple and $Z_n\le\epsilon_n/(g-\epsilon_n)\le2\epsilon_n/g$. The sample matrix is measurable by [F3]; its operator-norm distance from $\Sigma$ is therefore measurable. The leading line varies continuously on the set of matrices with a simple top eigenvalue: applying [F2] with any such matrix as the base and a perturbation tending to zero makes the sign-free line angle tend to zero. Hence $Z_n$, extended by zero off the Borel event $G_n$, is measurable. Pointwise, $\sqrt n Z_n\le(2/g)\sqrt n\epsilon_n$, so [F1] and [F6] imply $\sqrt nZ_n=O_P(1)$ and therefore $Z_n=O_P(n^{-1/2})$. [F1, F2, F3, F6, step 1.1, algebra]

3.1 Fix $\delta>0$ and $\eta>0$. Since [F6] defines $\sqrt nZ_n=O_P(1)$, choose $C$ so its limsup tail above $C$ is at most $\eta$. For all sufficiently large $n$, $C/\sqrt n<\delta$, and then $\{Z_n>\delta\}\subseteq\{\sqrt nZ_n>C\}$. Hence $\limsup_n\mathbb P(Z_n>\delta)\le\eta$. Since $\eta$ was arbitrary, $Z_n\to0$ in probability. [F6, step 2.1, algebra] ∎