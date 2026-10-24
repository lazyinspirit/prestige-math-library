---
id: thm-nystrom-deterministic-spectral-residual-bound
kind: theorem
title: "Nyström deterministic spectral residual bound under a full-row-rank leading sketch"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-psd-nystrom-approximation
  - lem-nystrom-square-root-projector-identity
  - lem-moore-penrose-products-are-orthogonal-projectors
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-operator-norm-is-the-largest-singular-value
  - thm-singular-value-decomposition
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, Theorem 2 and §4.1.1"
      url: "https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf"
    - title: "Nathan Halko, Per-Gunnar Martinsson, and Joel A. Tropp, Finding Structure with Randomness, Theorem 9.1"
      url: "https://arxiv.org/pdf/0909.4061"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, $n\ge1$, $s\ge0$, and let $A\in\mathbb F^{n\times n}$ be Hermitian positive semidefinite with eigenvalues $\lambda_1\ge\cdots\ge\lambda_n\ge0$. Let $S\in\mathbb F^{n\times s}$, and choose an integer $0\le k\le n$ and an orthonormal eigenbasis $U=(U_1\ U_2)$ with the first $k$ eigenvectors in $U_1$. Set
$\Lambda_1=\operatorname{diag}(\lambda_1,\ldots,\lambda_k)$,
$\Lambda_2=\operatorname{diag}(\lambda_{k+1},\ldots,\lambda_n)$,
$\Omega_1=U_1^*S$, and $\Omega_2=U_2^*S$. Empty blocks have norm zero, $\lambda_{n+1}:=0$, and the $0\times s$ matrix has full row rank vacuously. If $\Omega_1$ has full row rank, then, deterministically,

$$\|A-\widehat A_{\mathrm{nys}}\|_2\le\lambda_{k+1}+\|\Lambda_2^{1/2}\Omega_2\Omega_1^\dagger\|_2^2.$$

Here $\|M\|_2=\sup_{\|x\|_2=1}\|Mx\|_2$ is the induced Euclidean operator norm. No probability assumption on $S$ is made.

## Facts & Assumptions

**Given:** A finite Hermitian positive-semidefinite $A$, a conformal sketch $S$, an eigenvalue split at $k$, and full row rank of $\Omega_1$.

[F1] [[lem-nystrom-square-root-projector-identity]]: $\widehat A_{\mathrm{nys}}=A^{1/2}P_{\operatorname{Ran}(A^{1/2}S)}A^{1/2}$.

[F2] [[thm-non-negative-operator-characterisations]]: $A$ has an orthonormal eigenbasis with nonnegative eigenvalues.

[F3] [[lem-moore-penrose-products-are-orthogonal-projectors]]: if $\Omega_1$ has full row rank, then $\Omega_1\Omega_1^\dagger=I_k$.

[F4] [[thm-singular-value-decomposition]]: every finite-dimensional linear map has a singular value decomposition.

[F5] [[thm-operator-norm-is-the-largest-singular-value]]: the induced operator norm equals the largest singular value.

[F6] [[thm-non-negative-square-root-exists-and-is-unique]]: the positive-semidefinite square root is unique.
 
## Proof

1.1 Put $M=A^{1/2}$, $Y=MS$, and let $P=P_{\operatorname{Ran}(Y)}$. By [F1], $A-\widehat A_{\mathrm{nys}}=M(I-P)M=X^*X$ for $X=(I-P)M$, since $P$ is self-adjoint and idempotent. A singular value decomposition from [F4] writes $X=U_X\Sigma_XV_X^*$ and $X^*X=V_X\Sigma_X^2V_X^*$; [F5] therefore gives $\|A-\widehat A_{\mathrm{nys}}\|_2=\|X\|_2^2$. [F1, F4, F5, algebra]

1.2 By [F2], choose an orthonormal eigenbasis $U$ of $A$. The diagonal matrix whose entries are the nonnegative square roots of its eigenvalues is a positive-semidefinite square root, hence it is $A^{1/2}$ by uniqueness [F6]. Thus in this basis, $M=U\operatorname{diag}(\Lambda_1^{1/2},\Lambda_2^{1/2})U^*$ and $U^*Y=\begin{bmatrix}\Lambda_1^{1/2}\Omega_1\\\Lambda_2^{1/2}\Omega_2\end{bmatrix}$. For any unit vector $x=U(x_1,x_2)$, set $c=\Omega_1^\dagger x_1$. Then [F3] gives $\Omega_1c=x_1$, and $Yc=U\begin{bmatrix}\Lambda_1^{1/2}x_1\\\Lambda_2^{1/2}\Omega_2\Omega_1^\dagger x_1\end{bmatrix}\in\operatorname{Ran}(Y)$. [F2, F3, F6, algebra]

2.1 Orthogonal projection gives the shortest distance to its range, so $\|(I-P)Mx\|_2\le\|Mx-Yc\|_2 =\|\Lambda_2^{1/2}(x_2-\Omega_2\Omega_1^\dagger x_1)\|_2$. Write $G=\Lambda_2^{1/2}\Omega_2\Omega_1^\dagger$ and $H=\Lambda_2^{1/2}$. For unit $(x_1,x_2)$, the last norm is at most $\|G\|_2\|x_1\|_2+\|H\|_2\|x_2\|_2 \le(\|G\|_2^2+\|H\|_2^2)^{1/2}$ by the scalar Cauchy-Schwarz inequality. Taking the supremum over unit $x$ yields $\|X\|_2^2\le\|G\|_2^2+\|H\|_2^2$. [step 1.1, step 1.2, algebra]

3.1 Since $H$ is diagonal with nonnegative entries, [F2] and [F5] give $\|H\|_2^2=\lambda_{k+1}$, including the declared empty-tail convention. Combine this with step 1.1 and step 2.1 to obtain $\|A-\widehat A_{\mathrm{nys}}\|_2\le\lambda_{k+1}+\|\Lambda_2^{1/2}\Omega_2\Omega_1^\dagger\|_2^2$. [F2, F5, step 1.1, step 2.1] ∎
