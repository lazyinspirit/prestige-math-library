---
id: lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
kind: lemma
title: A finite stack of independent Gaussian vectors is jointly Gaussian
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-cramer-wold-device
justified_by: []
proof_strategy: direct
axiom_use: Assume AC. It is used through the stated multivariate-normal existence, scalar characteristic-function uniqueness, and Cramer–Wold suppliers; there are no other selections.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Spring 2015 lecture notes"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $m\ge1$ be finite, let $d_j\ge1$, and let
$Z_j$ for $1\le j\le m$ be mutually independent random elements of
$\mathbb R^{d_j}$. Suppose $Z_j\sim N_{d_j}(a_j,\Sigma_j)$, where each
$\Sigma_j$ is symmetric positive semidefinite. Put
$D=\sum_{j=1}^m d_j$, $Z=(Z_1,\ldots,Z_m)$,
$a=(a_1,\ldots,a_m)$, and
$\Sigma=\operatorname{diag}(\Sigma_1,\ldots,\Sigma_m)$. Then
$$Z\sim N_D(a,\Sigma).$$
No covariance block needs to be invertible.

## Facts & Assumptions

**Given:** Assume AC and mutually independent Borel random vectors
$Z_j\sim N_{d_j}(a_j,\Sigma_j)$ for a finite nonempty index set.

[A1] AC is the explicit axiom used by the multivariate-normal existence,
scalar characteristic-function uniqueness, and Cramer–Wold suppliers below.
([[def-axiom-of-choice]])

[F1] Independence of random elements means independence of their generated
sigma-algebras. ([[def-independent-random-elements]])

[F2] A finite mutually independent family of random elements has product
joint law. ([[thm-independent-random-elements-have-product-joint-law]])

[F3] Under AC, $N_d(a,\Sigma)$ exists for every finite $d\ge1$ and symmetric
positive-semidefinite $\Sigma$, and every scalar projection has its specified
normal law. ([[def-multivariate-normal-law]])

[F4] Under AC, the characteristic function of $N_d(a,\Sigma)$ is
$\exp(iu\cdot a-u^T\Sigma u/2)$, including singular $\Sigma$.
([[lem-characteristic-function-of-a-multivariate-normal-law]])

[F5] Characteristic functions of finite sums of mutually independent real
random variables multiply. ([[lem-characteristic-functions-under-affine-maps-and-independent-sums]])

[F6] Under AC, equal characteristic functions determine equal Borel
probability laws on $\mathbb R$. ([[thm-uniqueness-of-a-law-from-its-characteristic-function]])

[F7] Under AC, all one-dimensional projection laws determine a Borel
probability law on finite-dimensional Euclidean space.
([[thm-cramer-wold-device]])

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], the finite tuple $Z$ is a Borel random vector with product joint law. For any $u=(u_1,\ldots,u_m)$, each scalar map $z_j\mapsto u_j\cdot z_j$ is Borel, so preimages of Borel sets lie in $\sigma(Z_j)$. Independence [F1] therefore makes the scalars $u_j\cdot Z_j$ mutually independent. By [A1, F3], each is normal with mean $u_j\cdot a_j$ and variance $u_j^T\Sigma_j u_j$. [A1, F1, F2, F3]

2.1 For any $s\in\mathbb R$, [F5] and [F4] give $\varphi_{u\cdot Z}(s)=\prod_{j=1}^m\exp\!\left(is\,u_j\cdot a_j-\tfrac12s^2u_j^T\Sigma_j u_j\right)=\exp\!\left(is\,u\cdot a-\tfrac12s^2u^T\Sigma u\right)$. The last expression is the characteristic function of $N_1(u\cdot a,u^T\Sigma u)$ by [F4] in dimension one. Scalar uniqueness [F6] gives $u\cdot Z\sim N_1(u\cdot a,u^T\Sigma u)$, including the zero-variance point-mass case. [F4, F5, F6, step 1.1, algebra]

3.1 The block matrix $\Sigma$ is positive semidefinite because $u^T\Sigma u=\sum_j u_j^T\Sigma_j u_j\ge0$. By [A1, F3], the law $N_D(a,\Sigma)$ exists and its projection laws are the normal laws found in step 2.1. Cramer–Wold [F7] therefore identifies the law of $Z$ with $N_D(a,\Sigma)$. This also covers singular blocks and uses no inverse. [A1, F3, F7, step 2.1, algebra] ∎