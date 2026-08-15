---
id: thm-matrix-of-the-adjoint-is-the-conjugate-transpose
kind: theorem
title: "In orthonormal bases, the matrix of the adjoint is the conjugate transpose of the matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, def-coordinate-column-and-matrix-of-a-linear-map, def-transpose-of-a-matrix, thm-bessel-inequality-and-finite-parseval-identity, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 7.9'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

Let $T:V\to W$ be a linear map between finite-dimensional inner product spaces. In orthonormal bases $\mathcal E=(e_j)$ of $V$ and $\mathcal F=(f_i)$ of $W$,

$$[T^*]_{\mathcal E\leftarrow\mathcal F}=\overline{[T]_{\mathcal F\leftarrow\mathcal E}}^{\mathsf T}.$$

Over $\mathbb R$ this is the transpose. The statement includes zero-sized bases.

## Facts & Assumptions

**Given:** A map $T:V\to W$ and orthonormal bases $\mathcal E=(e_j)$ and $\mathcal F=(f_i)$.

[L1] The adjoint satisfies $\langle Te_j,f_i\rangle=\langle e_j,T^*f_i\rangle$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[L2] If $(e_i)_{i<r}$ is an orthonormal basis, then $v=\sum_{i<r}\langle v,e_i\rangle e_i$ for every vector $v$ ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[L3] Matrix columns record the coordinates of images of basis vectors ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L4] Transposition interchanges matrix rows and columns, and complex conjugation is an involution ([[def-transpose-of-a-matrix]], [[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Write $A=[T]_{\mathcal F\leftarrow\mathcal E}$ and $B=[T^*]_{\mathcal E\leftarrow\mathcal F}$. Applying [L2] in $\mathcal F$ expands $Te_j=\sum_i\langle Te_j,f_i\rangle f_i$, and applying it in $\mathcal E$ expands $T^*f_i=\sum_j\langle T^*f_i,e_j\rangle e_j$. Since a coordinate column in a basis is unique, [L3] gives $A_{ij}=\langle Te_j,f_i\rangle$ and $B_{ji}=\langle T^*f_i,e_j\rangle$. [L2, L3]

2.1 By [L1] and conjugate symmetry, $B_{ji}=\overline{\langle e_j,T^*f_i\rangle}=\overline{\langle Te_j,f_i\rangle}=\overline{A_{ij}}$. Thus [L4] gives $B=\overline A^{\mathsf T}$. [step 1.1, L1, L4]

3.1 If either basis is empty, the same entrywise identity is vacuous and identifies the unique matrix of the required size. [step 2.1] ∎
