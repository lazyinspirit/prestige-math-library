---
id: thm-gram-determinant-detects-linear-independence
kind: theorem
title: "A Gram determinant is nonnegative and is positive exactly when the vector list is linearly independent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gram-matrix-and-gram-determinant, thm-gram-schmidt-orthonormalisation, def-linear-independence, thm-operator-invertible-iff-determinant-nonzero, thm-determinant-of-a-triangular-matrix, thm-determinant-multiplicative, thm-determinant-of-transpose, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., p. 332, Theorem 7'
      url: 'https://archive.org/details/LinearAlgebraHoffmanAndKunze'
pipeline_run: null
---

## Statement

For every finite list $(v_0,\ldots,v_{r-1})$ in a real or complex inner product space, its Gram determinant is a nonnegative real number. It is positive if and only if the list is linearly independent, and it is zero if and only if the list is linearly dependent. The empty Gram determinant is $1$.

## Facts & Assumptions

**Given:** A finite list $(v_0,\ldots,v_{r-1})$ with Gram matrix $G$.

[L1] The Gram matrix has entries $G_{ij}=\langle v_i,v_j\rangle$ and the empty Gram determinant is $1$ ([[def-gram-matrix-and-gram-determinant]]).

[L2] Gram–Schmidt turns every independent finite list into an orthonormal list with the same successive spans ([[thm-gram-schmidt-orthonormalisation]]).

[L3] A list is dependent exactly when some nonzero coefficient vector gives a vanishing linear combination ([[def-linear-independence]]).

[L4] For $n\ge1$ and same-sized $n\times n$ matrices over a commutative ring, $\det(AB)=\det(A)\det(B)$ and $\det(A^{\mathsf T})=\det(A)$ ([[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]]).

[L5] Complex conjugation is a field automorphism, and $z\overline z=|z|^2\ge0$ with equality exactly when $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L6] A square operator over a field is invertible exactly when its determinant is nonzero ([[thm-operator-invertible-iff-determinant-nonzero]]).

[L7] For $n\ge1$, the determinant of an $n\times n$ triangular matrix over a commutative ring is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

## Proof

**Proof technique:** direct.

1.1 If the list is dependent, choose nonzero coefficients $c_j$ with $\sum_{j<r}c_jv_j=0$ by [L3]. Then $(G\overline c)_i=\sum_j\langle v_i,v_j\rangle\overline{c_j}=\langle v_i,\sum_jc_jv_j\rangle=0$. Since $\overline c\ne0$, $G$ is singular and [L6] gives $\det G=0$. [L1, L3, L6, algebra]

1.2 Suppose the list is independent and $r\ge1$. Apply [L2], and write each $v_j=\sum_{i\le j}R_{ij}e_i$. The resulting $r\times r$ upper-triangular matrix $R$ has diagonal entries $R_{jj}=\lVert u_j\rVert>0$. [L2]

2.1 Orthonormality and the linear-first convention give $G=R^{\mathsf T}\overline R$. Because conjugation is a field automorphism by [L5], conjugating $R$ entrywise conjugates its determinant, so $\det\overline R=\overline{\det R}$. Since $r\ge1$, [L4] and [L7] then give $\det G=\det(R^{\mathsf T})\det(\overline R)=\det R\,\overline{\det R}=|\det R|^2$, and $\det R=\prod_jR_{jj}$ is nonzero, so [L5] makes this positive. [step 1.2, L4, L5, L7, algebra]

3.1 If $r=0$, the empty list is independent by [L3] and [L1] gives determinant $1$, which is positive, so all three assertions hold. If $r\ge1$, steps 1.1 and 2.1 exhaust the dependent and independent cases and give all three assertions. [step 1.1, step 2.1, L1, L3] ∎
