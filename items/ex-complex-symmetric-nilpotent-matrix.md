---
id: ex-complex-symmetric-nilpotent-matrix
kind: example
title: "A complex symmetric matrix can be nonzero, square to zero, and fail to be normal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Hu, The Schur decomposition"
      url: "https://math.ucla.edu/~njhu/notes/nla/eig/schur/"
---

## Example

The complex matrix

$$A=\begin{pmatrix}1&i\\ i&-1\end{pmatrix}$$

is symmetric, nonzero, nilpotent of index $2$, and not normal.

## Facts & Assumptions

**Given:** The complex matrix $A$ above.

[L1] In an orthonormal basis, normality is equivalent to commuting with the conjugate transpose ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

## Verification

**Proof technique:** direct.

1.1 The matrix is symmetric because $A^{\mathsf T}=A$, and direct multiplication gives $A^2=0$ while $A\ne0$, so $A$ is a nonzero nilpotent matrix of index $2$. [algebra]

2.1 Its conjugate transpose is $A^*=\begin{pmatrix}1&-i\\-i&-1\end{pmatrix}$, and direct multiplication gives $A^*A=\begin{pmatrix}2&2i\\-2i&2\end{pmatrix}$ but $AA^*=\begin{pmatrix}2&-2i\\2i&2\end{pmatrix}$. Hence $A^*A\ne AA^*$, so $A$ is not normal by [L1]. [L1, algebra] ∎
