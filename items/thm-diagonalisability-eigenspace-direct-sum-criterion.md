---
id: thm-diagonalisability-eigenspace-direct-sum-criterion
kind: theorem
title: "An endomorphism is diagonalisable exactly when $V=\\bigoplus_{i<r}E_{\\lambda_i}(T)$ for some finite list of distinct scalars $\\lambda_i$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-diagonalisable-endomorphism, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-internal-direct-sum, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §5D'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

An endomorphism $T:V\to V$ of a finite-dimensional $F$-vector space is diagonalisable if and only if there are distinct scalars $\lambda_0,\ldots,\lambda_{r-1}\in F$ such that

$$V=\bigoplus_{i<r}E_{\lambda_i}(T).$$

For $V=0$, take the empty list of scalars.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T:V\to V$.

[L1] Diagonalisability means that $V$ has a basis of eigenvectors ([[def-diagonalisable-endomorphism]]).

[L2] An eigenspace is $E_\lambda(T)=\{v:T(v)=\lambda v\}$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[L3] $V=\bigoplus_{i<n}U_i$ means $\sum_{i<n}U_i=V$ together with $U_j\cap\sum_{i\ne j}U_i=\{0_V\}$ for every $j<n$ ([[def-internal-direct-sum]]).

[L4] Every subspace of a finite-dimensional vector space is finite-dimensional and has a basis ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $T$ is diagonalisable and fix an eigenbasis. Only finitely many eigenvalues occur among its finitely many vectors; group the basis vectors by those distinct eigenvalues. If $v\in E_\lambda(T)$ is expanded in the eigenbasis, comparing the coefficients in $Tv=\lambda v$ forces every coefficient at a basis vector with eigenvalue different from $\lambda$ to vanish. Thus the group carrying $\lambda$ is a basis of $E_\lambda(T)$. The groups exhaust the eigenbasis, so the eigenspaces sum to $V$; and a nonzero $v\in E_\lambda(T)$ lying in the sum of the other eigenspaces would have one eigenbasis expansion supported on the $\lambda$-group and another supported off it, contradicting uniqueness of coordinates in a basis. Both conditions of [L3] therefore hold. [L1, L2, L3, algebra]

1.2 Conversely, suppose the displayed direct sum holds. Choose a basis of each eigenspace using [L4] and concatenate the finite lists. The first condition of [L3] makes the concatenation spanning. It is independent: in a vanishing combination, group the terms by eigenspace, so each group sums to a vector of its $E_\lambda(T)$ and one such vector equals minus the sum of the others; the second condition of [L3] forces every group to sum to $0_V$, and independence inside each chosen basis then kills every coefficient. So it is a basis of eigenvectors and [L1] makes $T$ diagonalisable. [L1, L2, L3, L4, choose]

2.1 The two constructions prove both implications. When $V=0$, the empty basis and empty direct sum satisfy them. [step 1.1, step 1.2] ∎
