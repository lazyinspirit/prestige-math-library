---
id: fs-every-idempotent-is-an-orthogonal-projection
kind: false-statement
title: "FALSE: Every idempotent endomorphism of an inner product space is an orthogonal projection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-self-adjoint-idempotents-are-exactly-orthogonal-projections, thm-matrix-of-the-adjoint-is-the-conjugate-transpose]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§6C and 7A'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

**False claim.** Every idempotent endomorphism of an inner product space is an orthogonal projection.

## Facts & Assumptions

**Given:** In standard $\mathbb R^2$, the matrix $P=\begin{pmatrix}1&1\\0&0\end{pmatrix}$.

[L1] An endomorphism is an orthogonal projection exactly when it is both idempotent and self-adjoint ([[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]).

[L2] In an orthonormal real basis, the adjoint matrix is the transpose ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]).

## Refutation

**Proof technique:** counterexample.

1.1 Direct multiplication gives $P^2=P$, so $P$ is idempotent. [algebra]

1.2 But $P^{\mathsf T}=\begin{pmatrix}1&0\\1&0\end{pmatrix}\ne P$, so [L2] shows that $P$ is not self-adjoint. Hence [L1] shows it is not an orthogonal projection. [L1, L2]

2.1 Concretely, $\operatorname{im}P=\operatorname{span}(1,0)$ and $\ker P=\operatorname{span}(-1,1)$, whose generators have dot product $-1$, so this is an oblique projection. [algebra] ∎
