---
id: thm-complex-spectral-theorem-for-normal-endomorphisms
kind: theorem
title: "Complex spectral theorem: a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and conversely"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-and-normal-endomorphism, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, thm-the-complex-numbers-are-algebraically-closed, thm-schur-triangularisation, lem-normal-upper-triangular-matrix-is-diagonal]
aliases: []
landmark: true
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
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $V$ be a finite-dimensional complex inner product space and let $T:V\to V$
be linear. Then $T$ is normal if and only if $V$ has an orthonormal basis
consisting of eigenvectors of $T$.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner product space $V$ and a linear endomorphism $T:V\to V$.

[L1] The field $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]).

[L2] If the characteristic polynomial splits, then some orthonormal basis makes the matrix upper triangular ([[thm-schur-triangularisation]]).

[L3] A normal upper-triangular complex matrix is diagonal ([[lem-normal-upper-triangular-matrix-is-diagonal]]).

[L4] In an orthonormal basis, a linear map is normal exactly when its matrix commutes with its conjugate transpose ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

## Proof

**Proof technique:** direct.

1.1 Assume $T$ is normal. By [L1], the characteristic polynomial of $T$ splits over $\mathbb C$, so [L2] gives an orthonormal basis in which the matrix of $T$ is upper triangular. Because $T$ is normal, [L4] makes that matrix normal, and then [L3] makes it diagonal. Hence the chosen orthonormal basis consists of eigenvectors of $T$. [L1, L2, L3, L4]

2.1 Conversely, assume $(e_1,\dots,e_n)$ is an orthonormal basis of eigenvectors of $T$, with $Te_j=\lambda_j e_j$. Then the matrix of $T$ in that basis is the diagonal matrix $\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, and every diagonal matrix commutes with its conjugate transpose. By [L4], $T$ is normal. [L4, algebra] ∎
