---
id: ex-quarter-turn-real-normal-form
kind: example
title: "The real quarter-turn is normal and appears as a single 2x2 block in the real normal classification"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-real-normal-endomorphism-classification, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, prop-standard-coordinate-inner-products]
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
    - title: "Nicholas Hu, The Schur decomposition"
      url: "https://math.ucla.edu/~njhu/notes/nla/eig/schur/"
---

## Example

The quarter-turn

$$A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

is normal on $\mathbb R^2$, has complex eigenvalues $\pm i$, and in the
standard orthonormal basis already appears as the $2\times2$ block from the
real normal classification.

## Facts & Assumptions

**Given:** The quarter-turn matrix $A$ acting on $\mathbb R^2$ with the standard inner product.

[L1] In an orthonormal basis, normality is equivalent to commuting with the transpose ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

[L2] Real normal operators are orthogonally block-diagonalisable with $1\times1$ and $2\times2$ rotation-scaling blocks ([[thm-real-normal-endomorphism-classification]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $A^{\mathsf T}A=AA^{\mathsf T}=I_2$, so $A$ is normal by [L1]. Its characteristic polynomial is $x^2+1$, so over $\mathbb C$ its eigenvalues are $i$ and $-i$. [L1, algebra]

2.1 The matrix $A$ itself has the form $\begin{pmatrix}a&b\\-b&a\end{pmatrix}$ with $a=0$ and $b=-1\ne0$, so it is exactly one of the $2\times2$ blocks allowed by [L2]. [L2, step 1.1] ∎
