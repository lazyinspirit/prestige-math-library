---
id: thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form
kind: theorem
title: "Householder similarities reduce a general matrix to upper Hessenberg form and a real symmetric matrix to tridiagonal form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-householder-reflector,
       def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices,
       thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

Every square matrix over $\mathbb R$ or $\mathbb C$ is unitarily similar to an
upper Hessenberg matrix. Every real symmetric matrix is orthogonally similar to
a real symmetric tridiagonal matrix.

## Facts & Assumptions

**Given:** A square matrix $A$ over $\mathbb R$ or $\mathbb C$, and in the
second claim a real symmetric matrix $A=A^T$.

[L1] Householder reflectors are unitary and can annihilate any chosen tail below a leading entry ([[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]).

[L2] Upper Hessenberg and real symmetric tridiagonal are the zero patterns of [[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]].

[L3] A Householder reflector is the rank-one orthogonal or unitary reflection from [[def-householder-reflector]].

## Proof

**Proof technique:** direct.

1.1 If $n\le2$, every $n\times n$ matrix is already upper Hessenberg and every real symmetric one is already tridiagonal, so take the identity similarity. Assume $n\ge3$. For $j=1,\dots,n-2$, apply [L1] to the tail of column $j$ below the first subdiagonal inside the trailing $(n-j)\times(n-j)$ block. Embedding that reflector into the identity produces a unitary $Q_j$ that annihilates all entries of column $j$ below row $j+1$. Because $Q_j$ acts only on the trailing block, previously created zeros are preserved. [L1, L3, construct]

2.1 After the $n-2$ steps of 1.1, the product $H=Q_{n-2}^*\cdots Q_1^*AQ_1\cdots Q_{n-2}$ has zeros below its first subdiagonal, so [L2] says that $H$ is upper Hessenberg. [L2, step 1.1, algebra]

2.2 If $A$ is real symmetric, the same similarity steps remain real orthogonal. Each step that zeros the lower tail in column $j$ also zeros the matching upper tail in row $j$ because symmetry is preserved under orthogonal similarity. [L1, step 1.1, algebra]

3.1 Therefore the final matrix is symmetric and upper Hessenberg, hence tridiagonal by [L2]. This proves the symmetric claim. [L2, step 2.2] ∎
