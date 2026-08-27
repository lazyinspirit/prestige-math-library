---
id: fs-complex-symmetric-matrices-are-unitarily-diagonalizable
kind: false-statement
title: "FALSE: Every complex symmetric matrix is unitarily diagonalisable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-complex-symmetric-nilpotent-matrix, thm-complex-spectral-theorem-for-normal-endomorphisms]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
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

## Statement

Every complex symmetric matrix is unitarily diagonalisable.

## Facts & Assumptions

**Given:** The complex symmetric matrix $A=\begin{pmatrix}1&i\\ i&-1\end{pmatrix}$.

[L1] This matrix is symmetric but not normal ([[ex-complex-symmetric-nilpotent-matrix]]).

[L2] A complex matrix is unitarily diagonalisable exactly when the corresponding operator is normal ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the matrix $A$ is indeed complex symmetric. [L1]

2.1 If $A$ were unitarily diagonalisable, [L2] would make it normal. That contradicts [L1]. Therefore the claim is false. [L1, L2] ∎
