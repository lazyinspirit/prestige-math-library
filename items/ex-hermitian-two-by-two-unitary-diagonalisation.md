---
id: ex-hermitian-two-by-two-unitary-diagonalisation
kind: example
title: "An explicit Hermitian 2x2 matrix is unitarily diagonalised"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

For

$$H=\begin{pmatrix}2&i\\-i&2\end{pmatrix},$$

the unitary matrix

$$U=\frac1{\sqrt2}\begin{pmatrix}i&-i\\1&1\end{pmatrix}$$

satisfies

$$U^*HU=\operatorname{diag}(3,1).$$

## Facts & Assumptions

**Given:** The Hermitian matrix $H$ above, acting on $\mathbb C^2$ with the standard Hermitian inner product.

[L1] A normal operator on a finite-dimensional complex inner product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Verification

**Proof technique:** direct.

1.1 One checks that $H(i,1)^{\mathsf T}=3(i,1)^{\mathsf T}$ and $H(-i,1)^{\mathsf T}=(-i,1)^{\mathsf T}$. After dividing by $\sqrt2$, these eigenvectors are orthonormal, so the columns of $U$ form the orthonormal eigenbasis guaranteed by [L1]. [L1, algebra]

2.1 Because the columns of $U$ are orthonormal eigenvectors with eigenvalues $3$ and $1$, the conjugated matrix $U^*HU$ is $\operatorname{diag}(3,1)$. [step 1.1, algebra] ∎
