---
id: thm-polar-decomposition
kind: theorem
title: "Every endomorphism has a polar decomposition T = SU with U non-negative and S an isometry on the orthogonal complement of ker T, and S is unique exactly when T is invertible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-singular-value-decomposition, def-linear-isometry-and-orthogonal-or-unitary-operator, thm-non-negative-square-root-exists-and-is-unique]
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

Let $T:V\to V$ be an endomorphism of a finite-dimensional real or complex inner
product space. Then there exist a non-negative endomorphism $U$ and a linear
isometry $S:V\to V$ such that

$$T=SU\qquad\text{and}\qquad U=\sqrt{T^*T}.$$

Equivalently, $S$ is an isometry on $(\ker T)^\perp=\operatorname{im}U$. The
factor $S$ is unique if and only if $T$ is invertible.

## Facts & Assumptions

**Given:** An endomorphism $T:V\to V$ of a finite-dimensional real or complex inner product space.

[L1] There are orthonormal bases $(e_j)$ and $(f_j)$ and singular values $s_1\ge\cdots\ge s_r>0=s_{r+1}=\cdots=s_n$ such that $Te_j=s_jf_j$ for all $j$ ([[thm-singular-value-decomposition]]).

[L2] A linear map that sends an orthonormal basis to an orthonormal basis is a linear isometry ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[L3] A non-negative operator has a unique non-negative square root ([[thm-non-negative-square-root-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], define $Ue_j:=s_je_j$ and $Se_j:=f_j$ for every $j$. Then $S$ is a linear isometry by [L2], $SUe_j=s_jf_j=Te_j$ for every basis vector, hence $T=SU$, and $U^2e_j=s_j^2e_j=T^*Te_j$. Thus $U^2=T^*T$, and because $U$ is self-adjoint with nonnegative eigenvalues in the basis $(e_j)$, [L3] identifies $U$ with the unique non-negative square root $\sqrt{T^*T}$. [L1, L2, L3, algebra]

2.1 If $T$ is invertible, then all singular values are positive, so $U$ is invertible. Any other factorisation $T=S'U$ with the same non-negative factor $U=\sqrt{T^*T}$ satisfies $S'=TU^{-1}=S$, so $S$ is unique. [step 1.1, algebra]

3.1 If $T$ is not invertible, then $r<n$. Define another isometry $S'$ by $S'e_j=f_j$ for $j\ne r+1$ and $S'e_{r+1}=-f_{r+1}$. Then $S'\ne S$, but $S'Ue_j=SUe_j=Te_j$ for $j\le r$ and $S'Ue_j=0=Te_j$ for $j>r$ because $s_j=0$. Hence $S'U=T$, so uniqueness fails. [step 1.1, algebra] ∎
