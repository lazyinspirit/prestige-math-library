---
id: ex-real-symmetric-three-by-three-orthogonal-diagonalisation
kind: example
title: "An explicit real symmetric 3x3 matrix is orthogonally diagonalised"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-real-spectral-theorem-for-self-adjoint-endomorphisms, prop-standard-coordinate-inner-products]
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

$$A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&3\end{pmatrix},$$

an orthogonal matrix

$$Q=\begin{pmatrix}\frac1{\sqrt2}&\frac1{\sqrt2}&0\\-\frac1{\sqrt2}&\frac1{\sqrt2}&0\\0&0&1\end{pmatrix}$$

satisfies

$$Q^{\mathsf T}AQ=\operatorname{diag}(1,3,3).$$

## Facts & Assumptions

**Given:** The real symmetric matrix $A$ above, acting on $\mathbb R^3$ with the standard inner product.

[L1] A self-adjoint operator on a finite-dimensional real inner product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $A(1,-1,0)^{\mathsf T}=(1,-1,0)^{\mathsf T}$, $A(1,1,0)^{\mathsf T}=3(1,1,0)^{\mathsf T}$, and $A(0,0,1)^{\mathsf T}=3(0,0,1)^{\mathsf T}$. After normalising the first two vectors, the three displayed columns of $Q$ form an orthonormal eigenbasis, exactly as [L1] predicts. [L1, algebra]

2.1 Because the columns of $Q$ are orthonormal eigenvectors with eigenvalues $1,3,3$, the conjugated matrix $Q^{\mathsf T}AQ$ is diagonal with those eigenvalues on the diagonal. [step 1.1, algebra] ∎
