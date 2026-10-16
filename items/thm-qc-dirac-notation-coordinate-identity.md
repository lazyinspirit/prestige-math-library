---
id: thm-qc-dirac-notation-coordinate-identity
kind: theorem
title: Dirac Notation Coordinate Identity
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-linear-map
  - def-qc-dirac-notation-conversion
  - def-real-and-complex-inner-product-space
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-bessel-inequality-and-finite-parseval-identity
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses only given finite orthonormal bases and finite sums.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapters 1–2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.3, A.5, A.7 and A.10"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces with ordered
orthonormal bases $E=(e_j)_{j<n}$ and $F=(f_i)_{i<m}$. Let $T:H\to K$ be
linear ([[def-linear-map]]), and write $T_{ij}$ for the $(i,j)$ entry of its
matrix in these bases.
Then, for every $z\in H$,

$$Tz=\sum_{j<n}\sum_{i<m}T_{ij}\langle z,e_j\rangle_{H,\mathrm{root}}f_i, \qquad T=\sum_{j<n}\sum_{i<m}T_{ij}|f_i\rangle\langle e_j|.$$

For $x\in K$ and $y\in H$, the rank-one map $|x\rangle\langle y|$ has
coordinate matrix $[x]_F[y]_E^\dagger$, where $M^\dagger=\overline M^{\mathsf T}$.
Its amplitude satisfies
$\langle x|T|y\rangle_D=\langle Ty,x\rangle_{K,\mathrm{root}}$.
All sums are empty when an index dimension is zero, and the identities include
those cases.

## Facts & Assumptions
**Given:** The spaces, ordered orthonormal bases, linear map, and vectors in the
Statement.

[F1] For an orthonormal basis $(e_j)_{j<n}$,
$z=\sum_{j<n}\langle z,e_j\rangle e_j$; the corresponding inner-product
coordinate formula and empty-basis case also hold
([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F2] The $j$-th matrix column of a linear map is the coordinate column of the
image of the $j$-th basis vector
([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[F3] $|x\rangle\langle y|$ acts on $z$ by
$z\mapsto\langle z,y\rangle_{\mathrm{root}}x$, and
$\langle x|y\rangle_D=\langle y,x\rangle_{\mathrm{root}}$
([[def-qc-dirac-notation-conversion]]).

[F4] Matrix multiplication is row-by-column finite summation
([[def-matrix-product-and-identity-matrix]]).

[F5] Transposition interchanges matrix rows and columns
([[def-transpose-of-a-matrix]]).

[F6] Complex conjugation is the usual scalar involution
([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F7] The root inner product is conjugate-symmetric
([[def-real-and-complex-inner-product-space]]).

## Proof

1.1 By [F1], $z=\sum_{j<n}\langle z,e_j\rangle e_j$. Applying $T$ and using linearity, then expanding each $Te_j$ by [F2], gives $Tz=\sum_{j<n}\sum_{i<m}T_{ij}\langle z,e_j\rangle f_i$. [given, F1, F2, algebra]

1.2 Write $x_i=\langle x,f_i\rangle$ and $y_j=\langle y,e_j\rangle$, the coordinates from [F1]–[F2]. The image of $e_j$ under $|x\rangle\langle y|$ is $\langle e_j,y\rangle x=\overline{y_j}x$ by [F1] and [F7]. Its $i$-th coordinate is therefore $x_i\overline{y_j}$. By [F4]–[F6], these are exactly the entries of $[x]_F[y]_E^\dagger$. [F1, F2, F3, F4, F5, F6, F7, algebra]

1.3 The amplitude identity is the defining Dirac conversion [F3]. [F3, given]

2.1 By [F3], the operator sum in the Statement sends every $z$ to the right-hand side of step 1.1. It therefore agrees with $T$ on every vector. [F3, step 1.1]

3.1 If $n=0$, then $H=0$, $T=0$, and $y=0$; if $m=0$, then $K=0$, $T=0$, and $x=0$. In either case the displayed sums and rank-one map are zero, and the amplitude identity is $0=0$. Thus all formulas include zero dimensions. [given, step 1.1, step 2.1, step 1.2, step 1.3, algebra] ∎
