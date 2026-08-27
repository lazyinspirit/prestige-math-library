---
id: prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
kind: proposition
title: "In an orthonormal basis, self-adjoint means conjugate-transpose symmetry and normal means commuting with the conjugate transpose"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-and-normal-endomorphism, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, thm-matrix-of-a-composite-is-the-product]
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

## Statement

Let $V$ be a finite-dimensional real or complex inner product space, let
$T:V\to V$ be linear, and let $\mathcal E$ be an orthonormal basis of $V$. Write

$$A=[T]_{\mathcal E}^{\mathcal E}.$$

Then:

1. $T$ is self-adjoint if and only if $A=A^*$.
2. $T$ is normal if and only if $AA^*=A^*A$.

Over $\mathbb R$, $A^*$ is just $A^{\mathsf T}$.

## Facts & Assumptions

**Given:** A finite-dimensional real or complex inner product space $V$, a linear map $T:V\to V$, an orthonormal basis $\mathcal E$, and the matrix $A=[T]_{\mathcal E}^{\mathcal E}$.

[L1] In orthonormal bases, the matrix of the adjoint is the conjugate transpose ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]).

[L2] Matrix representation sends composition to matrix multiplication ([[thm-matrix-of-a-composite-is-the-product]]).

## Proof

**Proof technique:** direct.

1.1 By the definition of self-adjointness in [[def-self-adjoint-and-normal-endomorphism]], $T$ is self-adjoint exactly when $T=T^*$. By [L1], this is equivalent to $A=[T]_{\mathcal E}^{\mathcal E}=[T^*]_{\mathcal E}^{\mathcal E}=A^*$. [L1]

2.1 By the definition of normality in [[def-self-adjoint-and-normal-endomorphism]], $T$ is normal exactly when $TT^*=T^*T$; using [L2] and then [L1], this is equivalent to $[TT^*]_{\mathcal E}^{\mathcal E}=A[T^*]_{\mathcal E}^{\mathcal E}=AA^*=[T^*]_{\mathcal E}^{\mathcal E}A=A^*A=[T^*T]_{\mathcal E}^{\mathcal E}$, hence to $AA^*=A^*A$. [L1, L2] ∎
