---
id: ex-degenerate-multivariate-gaussian-limit
kind: example
title: A degenerate multivariate Gaussian limit
deps: ["thm-multivariate-iid-central-limit-theorem", "def-multivariate-normal-law", "lem-characteristic-function-of-a-multivariate-normal-law", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "lem-characteristic-function-of-a-normal-law", "thm-uniqueness-of-a-law-from-its-characteristic-function", "def-moments-variance-and-covariance", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Norris, Probability and Measure, Section 8.1
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
    - title: Aldous and Chewi, Probability Theory notes, Lecture 8
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. Let $Y_k$ be centered iid real variables of variance $\sigma^2>0$ and set $X_k=(Y_k,Y_k)$. Then $$n^{-1/2}\sum_{k=1}^nX_k\Rightarrow(Z,Z),\qquad Z\sim N(0,\sigma^2).$$ The limit covariance is $\Sigma=\sigma^2\begin{pmatrix}1&1\\1&1\end{pmatrix}$, a singular matrix of rank one.

## Facts & Assumptions

[F1] Iid vectors with finite second moments have the Gaussian covariance limit, even if singular. [[thm-multivariate-iid-central-limit-theorem]].

[F2] A Gaussian law is characterized by its normal projections. [[def-multivariate-normal-law]].

[F3] The projection-defined Gaussian law is unique. [[lem-characteristic-function-of-a-multivariate-normal-law]].

[F4] Scalar affine images have the stated characteristic functions. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F5] Scalar normals have the specified transform and variance. [[lem-characteristic-function-of-a-normal-law]].

[F6] Equal scalar characteristic functions imply equal laws under AC. [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

## Verification

**Given:** Assume AC. Let $Y_k$ be centered iid real variables of variance $\sigma^2>0$ and set $X_k=(Y_k,Y_k)$. Then $$n^{-1/2}\sum_{k=1}^nX_k\Rightarrow(Z,Z),\qquad Z\sim N(0,\sigma^2).$$ The limit covariance is $\Sigma=\sigma^2\begin{pmatrix}1&1\\1&1\end{pmatrix}$, a singular matrix of rank one.

1.1 The vector has mean (0,0), second norm moment $2\mathbb EY_k^2=2\sigma^2$, and each covariance entry equals $\mathbb EY_k^2=\sigma^2$. The two columns of Sigma agree and are nonzero, so its rank is one and determinant zero. Its eigenvectors (1,1) and (1,-1) have eigenvalues $2\sigma^2$ and zero. [F1] therefore gives convergence to $N_2(0,\Sigma)$. [F1]

2.1 For a scalar $Z\sim N(0,\sigma^2)$, every projection of (Z,Z) is $(u_1+u_2)Z$. By [F4]–[F6], this has law $N(0,\sigma^2(u_1+u_2)^2)$, including a negative coefficient and coefficient zero. Since $u^T\Sigma u=\sigma^2(u_1+u_2)^2$, [F2]–[F3] identify (Z,Z) with the target law. It is supported on the diagonal, and the (1,-1) projection is identically zero both before and after the limit. If the optional case sigma=0 is allowed, all centered Y_k vanish almost surely and the example reduces to the point mass (0,0). AC is inherited from the Gaussian and multivariate CLT suppliers. [step 1.1, F2, F3, F4, F5, F6] ∎

