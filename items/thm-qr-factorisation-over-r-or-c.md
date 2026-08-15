---
id: thm-qr-factorisation-over-r-or-c
kind: theorem
title: "Every invertible real or complex square matrix has a unique factorisation $A=QR$ with $Q$ orthogonal or unitary and $R$ upper triangular with positive real diagonal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-gram-schmidt-orthonormalisation, def-coordinate-column-and-matrix-of-a-linear-map, thm-invertible-matrices-correspond-to-linear-isomorphisms, thm-operator-invertible-iff-determinant-nonzero, def-transpose-of-a-matrix, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 7.58'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Every invertible matrix $A\in M_n(\mathbb F)$, where $\mathbb F=\mathbb R$ or $\mathbb C$, has a unique factorisation

$$A=QR,$$

where $Q^*Q=I$ and $R$ is upper triangular with positive real diagonal entries. Thus $Q$ is orthogonal over $\mathbb R$ and unitary over $\mathbb C$. The assertion includes the unique $0\times0$ factorisation.

## Facts & Assumptions

**Given:** An invertible $n\times n$ matrix $A$ over $\mathbb R$ or $\mathbb C$.

[L1] The columns of an invertible square matrix form a basis of the coordinate space ([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]).

[L2] Gram–Schmidt produces an orthonormal list with the same successive column spans and positive normalising factors ([[thm-gram-schmidt-orthonormalisation]]).

[L3] Matrix columns are the coordinate columns of the represented map on the standard basis ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L4] A square operator is invertible exactly when its determinant is nonzero ([[thm-operator-invertible-iff-determinant-nonzero]]).

[L5] The conjugate transpose is obtained by entrywise conjugation followed by transposition ([[def-transpose-of-a-matrix]], [[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 For $n=0$, take the unique empty matrices $Q$ and $R$. Now suppose $n>0$. By [L1], the columns $(a_0,\ldots,a_{n-1})$ of $A$ are independent. Apply [L2] to obtain an orthonormal basis $(q_0,\ldots,q_{n-1})$ with the same successive spans. [L1, L2]

1.2 Suppose $A=Q_1R_1=Q_2R_2$ are two such factorisations. The positive diagonal makes both $R_i$ invertible, so $U:=Q_2^*Q_1=R_2R_1^{-1}$ is both unitary and upper triangular, with positive real diagonal. [L4, L5, algebra]

2.1 Let $Q$ have columns $q_j$ and set $R_{ij}=\langle a_j,q_i\rangle$. The successive-span property makes $R_{ij}=0$ for $i>j$, and the Gram–Schmidt normalisation gives $R_{jj}>0$. Expanding each $a_j$ in the orthonormal basis and using [L3] gives $A=QR$. Orthonormality gives $Q^*Q=I$ by [L5]. [step 1.1, L2, L3, L5]

2.2 The first column of an upper-triangular unitary matrix has only its first entry nonzero; unit length and positive diagonal make that entry $1$. Orthogonality with the remaining columns makes their first entries zero. Induction on the trailing principal block gives $U=I$. [step 1.2, induction]

3.1 Hence $Q_1=Q_2$ and then $R_1=R_2$. Steps 1.1 and 2.1 give existence, while steps 1.2 and 2.2 give uniqueness in every dimension. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
