---
id: cor-real-spectral-theorem-for-self-adjoint-endomorphisms
kind: corollary
title: "Real spectral theorem: a self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-and-normal-endomorphism, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, thm-real-normal-endomorphism-classification]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $V$ be a finite-dimensional real inner product space and let $T:V\to V$ be
self-adjoint. Then $V$ has an orthonormal basis consisting of eigenvectors of
$T$.

## Facts & Assumptions

**Given:** A finite-dimensional real inner product space $V$ and a self-adjoint endomorphism $T:V\to V$.

[L1] Every self-adjoint endomorphism is normal ([[def-self-adjoint-and-normal-endomorphism]]).

[L2] A real normal endomorphism admits an orthonormal block decomposition by $1\times1$ real blocks and $2\times2$ blocks $\begin{pmatrix}a&b\\-b&a\end{pmatrix}$ ([[thm-real-normal-endomorphism-classification]]).

[L3] In an orthonormal basis, self-adjointness means symmetry of the matrix ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], there is an orthonormal basis in which the matrix of $T$ is block diagonal with $1\times1$ real blocks and $2\times2$ blocks $B=\begin{pmatrix}a&b\\-b&a\end{pmatrix}$. [L1, L2]

2.1 Because $T$ is self-adjoint, [L3] says that the same matrix is symmetric. A block $B$ above is symmetric exactly when $b=0$, so every $2\times2$ block collapses to the scalar block $[a]$. Therefore the whole matrix is diagonal. [L3, step 1.1, algebra]

3.1 A diagonal matrix acts on each basis vector by scalar multiplication, so the orthonormal basis from step 2.1 is an orthonormal eigenbasis of $T$. [step 2.1] ∎
