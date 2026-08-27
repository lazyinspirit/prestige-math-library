---
id: thm-non-negative-operator-characterisations
kind: theorem
title: "A non-negative operator is equivalently self-adjoint with nonnegative eigenvalues, a positive semidefinite matrix in an orthonormal basis, or an operator of the form S^*S"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-non-negative-and-positive-operator, prop-operator-positivity-agrees-with-form-positivity-over-the-reals, thm-complex-spectral-theorem-for-normal-endomorphisms, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-of-square-roots]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $V$ be a finite-dimensional real or complex inner product space and let
$T:V\to V$ be linear. The following are equivalent:

1. $T$ is non-negative.
2. $T$ is self-adjoint and every eigenvalue of $T$ is a nonnegative real number.
3. Some orthonormal basis makes the matrix of $T$ diagonal with nonnegative real diagonal entries.
4. There exists a linear map $S:V\to V$ such that $T=S^*S$.

## Facts & Assumptions

**Given:** A finite-dimensional real or complex inner product space $V$ and a linear endomorphism $T:V\to V$.

[L1] A self-adjoint operator on a finite-dimensional real inner product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[L2] A normal operator on a finite-dimensional complex inner product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[L3] Every nonnegative real number has a unique nonnegative square root ([[thm-of-square-roots]]).

## Proof

**Proof technique:** direct.

1.1 Assume $T$ is non-negative. Then $T$ is self-adjoint by [[def-non-negative-and-positive-operator]]. If $V$ is real, [L1] gives an orthonormal eigenbasis; if $V$ is complex, the identity $T=T^*$ yields $TT^*=T^*T$, so [L2] gives an orthonormal eigenbasis. For any eigenvector $v\ne0$ with $Tv=\lambda v$, the equality $\langle Tv,v\rangle=\lambda\lVert v\rVert^2$ and non-negativity give $\lambda\ge0$, and self-adjointness makes $\lambda$ real. Thus claim 1 implies claim 2. [L1, L2, algebra]

1.2 Assume claim 3. If the diagonal entries are $\lambda_1,\dots,\lambda_n\ge0$, then [L3] gives square roots $\sqrt{\lambda_j}\ge0$; the diagonal operator $S$ with diagonal entries $\sqrt{\lambda_j}$ satisfies $S^*S=T$. Thus claim 3 implies claim 4. [L3, algebra]

2.1 In the orthonormal eigenbasis from step 1.1, the matrix of $T$ is diagonal with those nonnegative real eigenvalues on the diagonal. Thus claim 2 implies claim 3. [step 1.1]

3.1 Assume claim 4, so $T=S^*S$. Then for every $v\in V$ one has $\langle Tv,v\rangle=\langle S^*Sv,v\rangle=\langle Sv,Sv\rangle\ge0$, and for all $u,v$ one has $\langle Tu,v\rangle=\langle Su,Sv\rangle=\langle u,Tv\rangle$. Hence $T$ is self-adjoint and non-negative. Thus claim 4 implies claim 1. [algebra] ∎
