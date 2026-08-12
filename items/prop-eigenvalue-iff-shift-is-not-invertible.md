---
id: prop-eigenvalue-iff-shift-is-not-invertible
kind: proposition
title: 'For a finite-dimensional space, $\lambda$ is an eigenvalue of $T$ if and only if $T-\lambda I$ is not invertible'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-eigenvalue-eigenvector-eigenspace-and-spectrum, thm-linear-kernel-image-and-injectivity, thm-rank-nullity, thm-dimension-of-a-linear-subspace, def-linear-isomorphism-and-invertible-linear-map]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over $F$, and let $\lambda\in F$. Then $\lambda$ is an eigenvalue of $T$ if and only if $T-\lambda I_V$ is not invertible.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$, an endomorphism $T$ of $V$, and $\lambda\in F$.

[L1] The scalar $\lambda$ is an eigenvalue of $T$ exactly when $\ker(T-\lambda I_V)\ne\{0_V\}$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[L2] A linear map is injective if and only if its kernel is $\{0\}$ ([[thm-linear-kernel-image-and-injectivity]]).

[L3] For a linear map $S:V\to V$ with $V$ finite-dimensional, $\dim V=\dim\ker S+\dim\operatorname{im}S$ ([[thm-rank-nullity]]). A subspace of $V$ has dimension $\dim V$ if and only if it is all of $V$ ([[thm-dimension-of-a-linear-subspace]], clause 2).

[L4] An invertible linear map has a two-sided linear inverse, and hence is bijective ([[def-linear-isomorphism-and-invertible-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 If $\lambda$ is an eigenvalue, [L1] and [L2] show that $T-\lambda I_V$ is not injective; it therefore cannot be invertible by [L4]. [L1, L2, L4, given]

1.2 Conversely, suppose $\lambda$ is not an eigenvalue. Then [L1] and [L2] make $S=T-\lambda I_V$ injective, so $\ker S=\{0\}$. By [L3], $\dim\operatorname{im}S=\dim V$, hence $\operatorname{im}S=V$ and $S$ is bijective. Its inverse function is linear: applying $S$ to $S^{-1}(au+bv)$ and to $aS^{-1}(u)+bS^{-1}(v)$ gives $au+bv$ in both cases, and injectivity makes the two inputs equal. Thus $S$ is invertible; contraposition gives that noninvertibility forces $\lambda$ to be an eigenvalue. [L1, L2, L3, L4, given, algebra]

2.1 The two implications establish the equivalence. If $V=\{0_V\}$, [L1] makes the left side false and the unique endomorphism is the identity, so the same argument includes that case. [step 1.1, step 1.2, L1, L4] ∎
