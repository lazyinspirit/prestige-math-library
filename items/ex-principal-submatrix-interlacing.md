---
id: ex-principal-submatrix-interlacing
kind: example
title: "The eigenvalues of a principal 2x2 submatrix interlace those of a 3x3 symmetric matrix"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-interlacing-for-self-adjoint-compressions, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christoph Helmberg et al., An interlacing property of the signless Laplacian of threshold graphs"
      url: "https://arxiv.org/pdf/2308.12654"
---

## Example

For

$$A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&3\end{pmatrix},\qquad B=\begin{pmatrix}2&1\\1&2\end{pmatrix},$$

the eigenvalues of $A$ are $3,3,1$ and the eigenvalues of the principal
submatrix $B$ are $3,1$, so they interlace.

## Facts & Assumptions

**Given:** The matrices $A$ and $B$ above, where $B$ is the compression of $A$ to the coordinate hyperplane $\operatorname{span}(e_1,e_2)$.

[L1] Orthogonal compression to a hyperplane gives interlacing eigenvalues for a self-adjoint operator ([[thm-cauchy-interlacing-for-self-adjoint-compressions]]).

## Verification

**Proof technique:** direct.

1.1 The characteristic polynomial of $A$ is $(x-3)^2(x-1)$, so its ordered eigenvalues are $3,3,1$. The characteristic polynomial of $B$ is $(x-3)(x-1)$, so its ordered eigenvalues are $3,1$. [algebra]

2.1 These satisfy $3=\lambda_1(A)\ge\mu_1(B)=3\ge\lambda_2(A)=3$ and $3=\lambda_2(A)\ge\mu_2(B)=1\ge\lambda_3(A)=1$, exactly the pattern asserted by [L1]. [L1, step 1.1] ∎
