---
id: cex-matrix-variance-does-not-dominate-trace-covariance-product
kind: counterexample
title: Matrix variance need not dominate trace covariance times operator norm
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-matrix-variance-of-a-random-vector
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, Corollary 5.1"
      url: "https://arxiv.org/pdf/1708.00502"
proof_strategy: direct
dependency_level: 2
---
## Statement refuted

For every centered square-integrable random vector $Z$ with finite fourth
moment, the matrix variance
$$\sigma_0^2=\left\|\mathbb E[\|Z\|_2^2ZZ^T]\right\|_{\rm op}$$
is at least $\operatorname{tr}(\Sigma)\|\Sigma\|_{\rm op}$, where
$\Sigma=\mathbb E[ZZ^T]$.

## Facts & Assumptions

**Given:** The covariance, matrix-variance, and operator-norm definitions in
[[def-covariance-matrix-of-a-random-vector]],
[[def-matrix-variance-of-a-random-vector]], and
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]].

[F1] [[def-covariance-matrix-of-a-random-vector]]: for a centered vector,
$\Sigma=\mathbb E[ZZ^T]$.

[F2] [[def-matrix-variance-of-a-random-vector]]:
$\sigma_0^2=\|\mathbb E[\|Z\|_2^2ZZ^T]\|_{\rm op}$.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
the operator norm is the maximum of $\|Av\|_2$ over unit vectors.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real
symmetric matrix has an orthonormal eigenbasis, so the operator norm of a
diagonal symmetric matrix is the largest absolute diagonal entry.

## Counterexample

1.1 In $\mathbb R^2$, let $Z$ take values $\pm\sqrt{4/3}\,e_1$ with total probability $3/4$ (each sign has probability $3/8$), and $\pm\sqrt2\,e_2$ with total probability $1/4$ (each sign has probability $1/8$). Symmetry gives $\mathbb EZ=0$, and finite support gives a finite fourth moment. [given, F1, algebra]

1.2 Direct summation and [F1] give $\Sigma=\mathbb E[ZZ^T]=\operatorname{diag}(1,1/2)$, hence $\operatorname{tr}(\Sigma)=3/2$ and $\|\Sigma\|_{\rm op}=1$ by [F4]. [given, F1, F4, algebra]

2.1 The value of $\|Z\|_2^2$ is $4/3$ on the first pair and $2$ on the second, so $$\mathbb E[\|Z\|_2^2ZZ^T] =\operatorname{diag}\!\left(\frac34\left(\frac43\right)^2, \frac14(2)^2\right)=\operatorname{diag}(4/3,1).$$ Its operator norm is $4/3<3/2=\operatorname{tr}(\Sigma)\|\Sigma\|_{\rm op}$ by [F4]. Thus the statement is false. [F2, F3, F4, step 1.2, algebra] ∎
## Remarks

This refutes the auxiliary inequality used in Minsker–Wei, Corollary 5.1,
for arbitrary dependent coordinates. It does not by itself refute their
covariance-estimator theorem; another argument or corrected hypotheses
would be needed.

