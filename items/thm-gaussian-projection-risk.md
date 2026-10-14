---
id: thm-gaussian-projection-risk
kind: theorem
title: "Exact squared-error risk of an isotropic projection fit"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-fixed-design-projection-estimator
  - def-orthogonal-projection
  - lem-finite-dimensional-projection-is-linear-and-contractive
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-moments-variance-and-covariance
  - prop-pythagorean-parallelogram-and-polarisation-identities
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-loss-function-and-risk
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Proposition 2.1 and Theorem 2.2"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Statement

Let $n,d\ge1$, let $X\in\mathbb R^{n\times d}$ be fixed, and put
$V=\operatorname{col}(X)$ and $r=\dim V$. Let $P_V$ be the orthogonal
projection and let $\mu\in\mathbb R^n$ be fixed. Let
$\varepsilon=(\varepsilon_1,\ldots,\varepsilon_n)$ be a centered random vector
with square-integrable coordinates satisfying
$\mathbb E[\varepsilon_i\varepsilon_j]=\sigma^2\mathbf 1_{i=j}$ for
$\sigma^2\ge0$. For $Y=\mu+\varepsilon$ and
$\widehat\mu=\widehat\mu_X(Y)$ as in
[[def-fixed-design-projection-estimator]],

$$\mathbb E\|\widehat\mu-\mu\|_2^2=\|P_V\mu-\mu\|_2^2+r\sigma^2.$$

In particular, when $\mu\in V$, the expected squared fitted-value error is
exactly $r\sigma^2$. The moment assumptions hold for centered Gaussian noise
with covariance matrix $\sigma^2 I_n$; Gaussianity is not otherwise needed.

## Facts & Assumptions

**Given:** A fixed design matrix $X$, its column space $V$, the projection
$P_V$, a fixed $\mu\in\mathbb R^n$, and the centered second-moment assumptions
on $\varepsilon$ in the statement.

[F1] The fixed-design fitted vector is the orthogonal projection of the observed
vector onto the design column space ([[def-fixed-design-projection-estimator]]).

[F2] The projection is characterized by $P_Vx\in V$ and
$x-P_Vx\in V^\perp$ ([[def-orthogonal-projection]]).

[F3] An orthogonal projection is linear
([[lem-finite-dimensional-projection-is-linear-and-contractive]]).

[F4] A finite-dimensional real inner-product space has an orthonormal basis,
with the empty basis in dimension zero
([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] Orthogonal vectors satisfy Pythagoras
([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

[F6] For square-integrable real variables, variance and covariance are the
expectations of centered products ([[def-moments-variance-and-covariance]]).

[F7] Expectation is additive on finite sums of integrable variables
([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F8] Risk is the expected loss of a decision rule under the sampling law
([[def-loss-function-and-risk]]).

## Proof


1.1 Put $b=P_V\mu-\mu$ and $z=P_V\varepsilon$. By [F2], $b\in V^\perp$ and $z\in V$. Linearity [F3] gives $\widehat\mu-\mu=b+z$. [F1, F2, F3, algebra]

1.2 Choose an orthonormal basis $\phi_1,\ldots,\phi_r$ of $V$ by [F4]. The vector $\sum_{j=1}^r\langle\varepsilon,\phi_j\rangle\phi_j$ lies in $V$ and its residual from $\varepsilon$ is orthogonal to every basis vector, hence to $V$; uniqueness in [F2] identifies it with $P_V\varepsilon$. Orthonormality therefore gives $\|P_V\varepsilon\|_2^2=\sum_{j=1}^r\langle\varepsilon,\phi_j\rangle^2$, with the empty sum equal to zero when $r=0$. [F2, F4, algebra]

1.3 Write $\phi_j=(\phi_{1j},\ldots,\phi_{nj})$. By [F6] and the given coordinate second moments, $\mathbb E\langle\varepsilon,\phi_j\rangle^2 =\sum_{a,b=1}^n\phi_{aj}\phi_{bj}\mathbb E[\varepsilon_a\varepsilon_b] =\sigma^2\sum_{a=1}^n\phi_{aj}^2=\sigma^2$ for each $j$. Summing with [F7] shows $\mathbb E\|P_V\varepsilon\|_2^2=r\sigma^2$. [F4, F6, F7, algebra]

2.1 The two summands in step 1.1 are orthogonal, so [F5] gives $\|\widehat\mu-\mu\|_2^2=\|P_V\mu-\mu\|_2^2+\|P_V\varepsilon\|_2^2$ pointwise. Taking expectations and using [F7] separates the fixed first term from the noise term. [step 1.1, F5, F7]

3.1 Substitute step 1.3 into step 2.1 to obtain the displayed identity. If $\mu\in V$, then $P_V\mu=\mu$ by [F2], giving the stated special case. By [F8], its left side is the risk under squared fitted-value loss. [step 2.1, step 1.3, F2, F8] ∎