# subjects-01 — abstract-algebra source harvest: THE LINEAR-ALGEBRA COMPLETION

Topic: the four planned-but-unauthored pages —
`diagonalisation-and-the-minimal-polynomial`,
`triangularisation-and-jordan-canonical-form`,
`inner-product-spaces-and-orthogonality`,
`the-spectral-theorem-and-singular-value-decomposition`.

**The constraint that shapes this whole harvest.** The library develops linear algebra
over an arbitrary field wherever it can, and has NO analysis at these pages: no
completeness, no continuity, no compactness, no intermediate value theorem, and the
fundamental theorem of algebra (FTA) is not available. So for every result below I record
the field hypothesis it actually needs, and I flag every place where a standard textbook
proof smuggles in analysis or FTA. Part 2 §2.13 is the direct answer to the commission's
central question about the real spectral theorem.

Everything below was read from the source. Where I could not obtain a source it is marked
`UNOBTAINED` with what was tried. Where a heading list is the source's own printed table
of contents or PDF bookmark outline, that is stated; nothing here is reconstructed from
memory.

---

## PART 0 — Source register (what actually resolved)

| # | source | URL that resolved | status |
|---|---|---|---|
| **S1** | Sheldon Axler, *Linear Algebra Done Right*, **4th ed.** (open access, CC BY-NC; the file is dated 13 July 2026) | index `https://linear.axler.net/`, file `https://linear.axler.net/LADR4e.pdf` | full PDF, **404 pp**, PDF bookmark outline + full text extracted with `pypdf` |
| **S2** | Kenneth Hoffman & Ray Kunze, *Linear Algebra*, **2nd ed.** (Prentice-Hall, 1971) | item `https://archive.org/details/LinearAlgebraHoffmanAndKunze`, file `https://ia800404.us.archive.org/34/items/LinearAlgebraHoffmanAndKunze/Linear%20Algebra%20-%20Hoffman%20and%20Kunze.pdf` | full PDF, **415 pp**, OCR text layer, good enough to read statements verbatim. Printed TOC + **Ch. 6–10 and Appendix read page by page** |
| **S3** | Sergei Treil, *Linear Algebra Done Wrong* (author-hosted, free) | `https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf` | full PDF, **286 pp**, complete PDF bookmark outline extracted. **Note the landing page `.../LADW/LADW.html` now 302s to a Google Sites page; `LADW.pdf` is a 404 — the dated filename is the one that works.** |
| **S4** | Keith Conrad, expository blurbs | index `https://kconrad.math.uconn.edu/blurbs/`, files under `https://kconrad.math.uconn.edu/blurbs/linmultialg/<name>.pdf` and `.../fundthmalg/<name>.pdf` | **15 blurbs downloaded and text-extracted**; list and headings in §1.6 |
| **S5** | Cambridge Mathematical Tripos **Part IB — Linear Algebra**, lectures by S. J. Wadsley, notes by Dexter Chua (Michaelmas 2015) | `https://dec41.user.srcf.net/notes/IB_M/linear_algebra.pdf` | full PDF, **96 pp**, complete bookmark outline |
| **S6** | Peter Petersen, *Additions to Linear Algebra* (26 Sep 2012), the author-hosted supplement to his Springer UTM *Linear Algebra* | `https://www.math.ucla.edu/~petersen/linalg_analysis.pdf` | full PDF, 57 pp, headings extracted. **Structurally valuable: it quarantines the analytic material into named sections** (§3 multivariable calculus, §4 norms, §5 completeness and compactness, §6 orthonormal bases in infinite dimensions, §7 applications of norms, §8 infinite-dimensional extensions) and keeps §9 Jordan and §10 rational canonical form algebraic |
| **S7** | Terence Tao, 254A Notes 3a, "Eigenvalues and sums of Hermitian matrices" | `https://terrytao.wordpress.com/2010/01/12/254a-notes-3a-eigenvalues-and-sums-of-hermitian-matrices/` | HTML, fetched and summarised; **this is the only source in the harvest that carries Courant–Fischer, Cauchy interlacing, Weyl and Lidskii together** |

`UNOBTAINED`, with what was tried:

- **Steven Roman, *Advanced Linear Algebra*, 3rd ed.** No open copy and **no TOC**. Tried
  `link.springer.com/book/10.1007/978-0-387-72831-5` and
  `springer.com/gp/book/9780387728285` — both 303-redirect to
  `idp.springer.com/authorize?...`, an authentication gate, and the redirect target is not
  fetchable. Recorded as a gap in §5.
- **Paul Halmos, *Finite-Dimensional Vector Spaces*.** Same Springer gate
  (`10.1007/978-1-4612-6387-6`). No TOC obtained.
- **Peter Petersen, *Linear Algebra* (Springer UTM) — the book itself.** Same gate. The
  author-hosted *Additions* (S6) is what I have, and it is a supplement, not the book. A
  copy circulating at `bib-mate.s3.us-east-2.amazonaws.com` is not an author- or
  publisher-hosted source and I did not use it.
- **Dummit & Foote Ch. 11–12; Lang *Algebra* Ch. XIII–XV; MIT OCW 18.700/18.701 notes.**
  Not pursued once S1+S2+S3+S5 had covered every commissioned topic with full
  heading-level detail from two textbooks and a full lecture-note set. Flagged in §5 so
  the scaffolder knows these are *unharvested*, not *checked and rejected*.
- **A textbook treatment of Cauchy interlacing / Weyl inequalities / Eckart–Young.**
  Only S7 (a blog-format course note) and S1's 7.92 carry this material. Horn & Johnson,
  *Matrix Analysis*, is the standard reference and has no open copy. See §5.

**No blockers.** Nothing in this commission required an operation I lacked authority for.

---

## PART 1 — Canonical-coverage harvest (source-anchored heading enumerations)

### 1.1 Axler, *Linear Algebra Done Right*, 4th ed. — the PDF's own bookmark outline

Read range: **Chapters 3E–3F, 4, 5, 6, 7, 8 and 9A in detail; the whole outline
transcribed.** Verbatim from the PDF outline (chapter titles are the top level; the
bracketed numbers are the *PDF* page, which runs 11 ahead of the printed page in the body).

```
Vector Spaces
  R^n and C^n
    Complex Numbers / Lists / F^n / Digression on Fields / Exercises 1A
  Definition of Vector Space / Exercises 1B
  Subspaces
    Sums of Subspaces / Direct Sums / Exercises 1C
Finite-Dimensional Vector Spaces
  Span and Linear Independence
    Linear Combinations and Span / Linear Independence / Exercises 2A
  Bases / Exercises 2B
  Dimension / Exercises 2C
Linear Maps
  Vector Space of Linear Maps
    Definition and Examples of Linear Maps / Algebraic Operations on L(V, W) / Exercises 3A
  Null Spaces and Ranges
    Null Space and Injectivity / Range and Surjectivity /
    Fundamental Theorem of Linear Maps / Exercises 3B
  Matrices
    Representing a Linear Map by a Matrix /
    Addition and Scalar Multiplication of Matrices / Matrix Multiplication /
    Column–Row Factorization and Rank of a Matrix / Exercises 3C
  Invertibility and Isomorphisms
    Invertible Linear Maps / Isomorphic Vector Spaces /
    Linear Maps Thought of as Matrix Multiplication / Change of Basis / Exercises 3D
  Products and Quotients of Vector Spaces
    Products of Vector Spaces / Quotient Spaces / Exercises 3E
  Duality
    Dual Space and Dual Map / Null Space and Range of Dual of Linear Map /
    Matrix of Dual of Linear Map / Exercises 3F
Polynomials
  Zeros of Polynomials / Division Algorithm for Polynomials /
  Factorization of Polynomials over C / Factorization of Polynomials over R / Exercises 4
Eigenvalues and Eigenvectors
  Invariant Subspaces
    Eigenvalues / Polynomials Applied to Operators / Exercises 5A
  The Minimal Polynomial
    Existence of Eigenvalues on Complex Vector Spaces /
    Eigenvalues and the Minimal Polynomial /
    Eigenvalues on Odd-Dimensional Real Vector Spaces / Exercises 5B
  Upper-Triangular Matrices / Exercises 5C
  Diagonalizable Operators
    Diagonal Matrices / Conditions for Diagonalizability /
    Gershgorin Disk Theorem / Exercises 5D
  Commuting Operators / Exercises 5E
Inner Product Spaces
  Inner Products and Norms
    Inner Products / Norms / Exercises 6A
  Orthonormal Bases
    Orthonormal Lists and the Gram–Schmidt Procedure /
    Linear Functionals on Inner Product Spaces / Exercises 6B
  Orthogonal Complements and Minimization Problems
    Orthogonal Complements / Minimization Problems / Pseudoinverse / Exercises 6C
Operators on Inner Product Spaces
  Self-Adjoint and Normal Operators
    Adjoints / Self-Adjoint Operators / Normal Operators / Exercises 7A
  Spectral Theorem
    Real Spectral Theorem / Complex Spectral Theorem / Exercises 7B
  Positive Operators / Exercises 7C
  Isometries, Unitary Operators, and Matrix Factorization
    Isometries / Unitary Operators / QR Factorization / Cholesky Factorization / Exercises 7D
  Singular Value Decomposition
    Singular Values / SVD for Linear Maps and for Matrices / Exercises 7E
  Consequences of Singular Value Decomposition
    Norms of Linear Maps / Approximation by Linear Maps with Lower-Dimensional Range /
    Polar Decomposition / Operators Applied to Ellipsoids and Parallelepipeds /
    Volume via Singular Values /
    Properties of an Operator as Determined by Its Eigenvalues / Exercises 7F
Operators on Complex Vector Spaces
  Generalized Eigenvectors and Nilpotent Operators
    Null Spaces of Powers of an Operator / Generalized Eigenvectors /
    Nilpotent Operators / Exercises 8A
  Generalized Eigenspace Decomposition
    Generalized Eigenspaces / Multiplicity of an Eigenvalue /
    Block Diagonal Matrices / Exercises 8B
  Consequences of Generalized Eigenspace Decomposition
    Square Roots of Operators / Jordan Form / Exercises 8C
  Trace: A Connection Between Matrices and Operators / Exercises 8D
Multilinear Algebra and Determinants
  Bilinear Forms and Quadratic Forms
    Bilinear Forms / Symmetric Bilinear Forms / Quadratic Forms / Exercises 9A
  Alternating Multilinear Forms
    Multilinear Forms / Alternating Multilinear Forms and Permutations / Exercises 9B
  Determinants
    Defining the Determinant / Properties of Determinants / Exercises 9C
  Tensor Products
    Tensor Product of Two Vector Spaces / Tensor Product of Inner Product Spaces /
    Tensor Product of Multiple Vector Spaces / Exercises 9D
Photo Credits / Symbol Index / Index / Colophon: Notes on Typesetting
```

**Structural warning the scaffolder must not miss.** Axler has **no chapter and no section
on the rational canonical form, invariant factors, elementary divisors, cyclic vectors, or
the primary decomposition theorem over a general field.** LADR is a book about `F ∈ {R, C}`
(4e adds a "Digression on Fields" in 1A and then fixes `F` to `R` or `C` for the whole
book). For commissioned page 2's rational-canonical-form and cyclic-vector material,
**Axler is not a source** — Hoffman & Kunze Ch. 7 is.

### 1.2 Axler — the book's own numbered result headings, Ch. 3E–3F and 5–9A

Axler labels every result `n.m` followed by a lowercase descriptive title, and that title
*is* the result's name in the book. Transcribed verbatim (I have dropped rows labelled
`example:` and `notation:`, and dropped rows where the extractor caught a cross-reference
rather than a heading).

**3E, products and quotients** (the material commissioned page 2 needs for `V/W`):
`3.87 definition: product of vector spaces` · `3.89 product of vector spaces is a vector
space` · `3.92 dimension of a product is the sum of dimensions` · `3.93 products and direct
sums` · `3.94 a sum is a direct sum if and only if dimensions add up` ·
`3.95 notation: v + U` · `3.97 definition: translate` · `3.99 definition: quotient space,
V/U` · `3.101 two translates of a subspace are equal or disjoint` · `3.102 definition:
addition and scalar multiplication on V/U` · `3.103 quotient space is a vector space` ·
`3.104 definition: quotient map, π` · `3.105 dimension of quotient space` ·
`3.106 notation: T̃` · `3.107 null space and range of T̃`.

**3F, duality:** `3.108 definition: linear functional` · `3.110 definition: dual space, V′`
· `3.111 dim V′ = dim V` · `3.112 definition: dual basis` · `3.114 dual basis gives
coefficients for linear combination` · `3.116 dual basis is a basis of the dual space` ·
`3.118 definition: dual map, T′` · `3.120 algebraic properties of dual maps` ·
`3.121 definition: annihilator, U⁰` · `3.124 the annihilator is a subspace` ·
`3.125 dimension of the annihilator` · `3.127 condition for the annihilator to equal {0} or
the whole space` · `3.128 the null space of T′` · `3.130 the range of T′` ·
`3.132 matrix of T′ is transpose of matrix of T` · `3.133 column rank equals row rank`.

**Ch. 4, polynomials:** the four section headings above; the two results the rest of the
book leans on are **`4.12` the first version of the fundamental theorem of algebra** and
**`4.13` the second version**, plus **`4.16` factorization of a polynomial over R** into
linear factors and quadratics `z² + bz + c` with `b² < 4c`. These three are the FTA
dependency of everything downstream — see §2.13.

**Ch. 5, eigenvalues, the minimal polynomial, triangularisation, diagonalisability:**
`5.1 definition: operator` · `5.2 definition: invariant subspace` ·
`5.5 definition: eigenvalue` · `5.7 equivalent conditions to be an eigenvalue` ·
`5.8 definition: eigenvector` · `5.11 linearly independent eigenvectors` ·
`5.12 operator cannot have more eigenvalues than dimension of vector space` ·
`5.16 definition: product of polynomials` · `5.17 multiplicative properties` ·
`5.18 null space and range of p(T) are invariant under T` ·
**`5.19 existence of eigenvalues`** · `5.21 definition: monic polynomial` ·
**`5.22 existence, uniqueness, and degree of minimal polynomial`** ·
`5.24 definition: minimal polynomial` ·
**`5.27 eigenvalues are the zeros of the minimal polynomial`** ·
`5.31 minimal polynomial of a restriction operator` · `5.33 even-dimensional null space` ·
**`5.34 operators on odd-dimensional vector spaces have eigenvalues`** ·
`5.35 definition: matrix of an operator, M(T)` · `5.37 definition: diagonal of a matrix` ·
`5.38 definition: upper-triangular matrix` · `5.39 conditions for upper-triangular matrix` ·
`5.40 equation satisfied by operator with upper-triangular matrix` ·
`5.41 determination of eigenvalues from upper-triangular matrix` ·
**`5.44 necessary and sufficient condition to have an upper-triangular matrix`** ·
`5.47 if F = C, then every operator on V has an upper-triangular matrix` ·
`5.48 definition: diagonal matrix` · `5.50 definition: diagonalizable` ·
`5.52 definition: eigenspace, E(λ, T)` · `5.54 sum of eigenspaces is a direct sum` ·
**`5.55 conditions equivalent to diagonalizability`** ·
`5.58 enough eigenvalues implies diagonalizability` ·
**`5.62 necessary and sufficient condition for diagonalizability`** ·
`5.65 restriction of diagonalizable operator to invariant subspace` ·
`5.66 definition: Gershgorin disks` · `5.71 definition: commute` ·
`5.74 commuting operators correspond to commuting matrices` ·
`5.75 eigenspace is invariant under commuting operator` ·
**`5.76 simultaneous diagonalizability ⟺ commutativity`** ·
`5.78 common eigenvector for commuting operators` ·
`5.80 commuting operators are simultaneously upper triangularizable` ·
`5.81 eigenvalues of sum and product of commuting operators`.

**Ch. 6, inner product spaces:** `6.1 definition: dot product` ·
`6.2 definition: inner product` · `6.4 definition: inner product space` ·
`6.6 basic properties of an inner product` · `6.7 definition: norm, ‖v‖` ·
`6.9 basic properties of the norm` · `6.10 definition: orthogonal` ·
`6.11 orthogonality and 0` · `6.13 an orthogonal decomposition` [the Pythagoras/
Cauchy–Schwarz preparation] · **`6.14 Cauchy–Schwarz inequality`** [numbered in the text
and cited as such at 7.27; my heading extractor missed the row, the citation at pdf p. 244
names it] · `6.17 triangle inequality` · **`6.21 parallelogram equality`** ·
`6.22 definition: orthonormal` · `6.24 norm of an orthonormal linear combination` ·
`6.25 orthonormal lists are linearly independent` · **`6.26 Bessel's inequality`** ·
`6.27 definition: orthonormal basis` ·
`6.28 orthonormal lists of the right length are orthonormal bases` ·
`6.30 writing a vector as a linear combination of an orthonormal basis` ·
**`6.32 Gram–Schmidt procedure`** [6.33 is its span identity] ·
**`6.35 existence of orthonormal basis`** ·
`6.36 every orthonormal list extends to an orthonormal basis` ·
**`6.37 upper-triangular matrix with respect to some orthonormal basis`** ·
**`6.38 Schur's theorem`** ·
`6.39 definition: linear functional, dual space, V′` ·
**`6.42 Riesz representation theorem`** · `6.46 definition: orthogonal complement, U⟂` ·
`6.48 properties of orthogonal complement` ·
**`6.49 direct sum of a subspace and its orthogonal complement`** ·
`6.51 dimension of orthogonal complement` ·
**`6.52 orthogonal complement of the orthogonal complement`** ·
`6.55 definition: orthogonal projection, P_U` ·
`6.57 properties of orthogonal projection P_U` · **`6.61 minimizing distance to a
subspace`** · `6.67 restriction of a linear map to obtain a one-to-one and onto map` ·
`6.68 definition: pseudoinverse, T†` · `6.69 algebraic properties of the pseudoinverse` ·
`6.70 pseudoinverse provides best approximate solution or best solution`.

**Ch. 7, operators on inner product spaces:** `7.1 definition: adjoint, T*` ·
`7.4 adjoint of a linear map is a linear map` · `7.5 properties of the adjoint` ·
`7.6 null space and range of T*` · `7.7 definition: conjugate transpose, A*` ·
`7.9 matrix of T* equals conjugate transpose of matrix of T` ·
`7.10 definition: self-adjoint` · **`7.12 eigenvalues of self-adjoint operators`** ·
`7.18 definition: normal` · `7.20` [‖Tv‖ = ‖T*v‖ characterisation of normal, cited at 7.31]
· `7.21 range, null space, and eigenvectors of a normal operator` ·
`7.22 orthogonal eigenvectors for normal operators` ·
**`7.26 invertible quadratic expressions`** ·
**`7.27 minimal polynomial of self-adjoint operator`** ·
**`7.29 real spectral theorem`** · **`7.31 complex spectral theorem`** ·
`7.34 definition: positive operator` · `7.36 definition: square root` ·
**`7.38 characterizations of positive operators`** ·
**`7.39 each positive operator has only one positive square root`** ·
`7.44 definition: isometry` · **`7.49 characterizations of isometries`** ·
`7.51 definition: unitary operator` · `7.53 characterizations of unitary operators` ·
`7.54 eigenvalues of unitary operators have absolute value 1` ·
`7.55 description of unitary operators on complex inner product spaces` ·
`7.56 definition: unitary matrix` · `7.57 characterizations of unitary matrices` ·
**`7.58 QR factorization`** [7.59 is its span identity] · `7.61 positive invertible operator`
· `7.62 definition: positive definite` · **`7.63 Cholesky factorization`** ·
`7.64 properties of T*T` ·
`7.65 definition: singular values` · `7.68 role of positive singular values` ·
`7.69 isometries characterized by having all singular values equal 1` ·
**`7.70 singular value decomposition`** ·
`7.75 singular value decomposition of adjoint and pseudoinverse` ·
**`7.80 matrix version of SVD`** · `7.82 upper bound for ‖Tv‖` ·
`7.86 definition: norm of a linear map, ‖·‖` · `7.87 basic properties of norms of linear
maps` · `7.88 alternative formulas for ‖T‖` · `7.91 norm of the adjoint` ·
**`7.92 best approximation by linear map whose range has dimension ≤ k`** [this is
Eckart–Young in operator norm] · **`7.93 polar decomposition`** ·
`7.95 definition: ball, B` · `7.96 definition: ellipsoid, principal axes` ·
`7.99 invertible operator takes ball to ellipsoid` ·
`7.101 invertible operator takes ellipsoids to ellipsoids` ·
`7.102 definition: parallelepiped` · `7.105 definition: box` ·
`7.108 definition: volume of a box` · `7.109 definition: volume` ·
**`7.111 volume changes by a factor of the product of the singular values`**.

**Ch. 8, operators on complex vector spaces:** `8.1 sequence of increasing null spaces` ·
`8.2 equality in the sequence of null spaces` · **`8.3 null spaces stop growing`** ·
`8.8 definition: generalized eigenvector` · **`8.9 a basis of generalized eigenvectors`** ·
`8.11 generalized eigenvector corresponds to a unique eigenvalue` ·
`8.12 linearly independent generalized eigenvectors` · `8.14 definition: nilpotent` ·
**`8.16 nilpotent operator raised to dimension of domain is 0`** ·
`8.17 eigenvalues of nilpotent operator` ·
`8.18 minimal polynomial and upper-triangular matrix of nilpotent operator` ·
`8.19 definition: generalized eigenspace, G(λ, T)` ·
**`8.20 description of generalized eigenspaces`** ·
**`8.22 generalized eigenspace decomposition`** · `8.23 definition: multiplicity` ·
`8.25 sum of the multiplicities equals dim V` ·
`8.26 definition: characteristic polynomial` ·
`8.28 degree and zeros of characteristic polynomial` ·
**`8.30 characteristic polynomial is a multiple of minimal polynomial`** [this is Axler's
Cayley–Hamilton] · `8.31 multiplicity of an eigenvalue equals number of times on diagonal` ·
`8.35 definition: block diagonal matrix` ·
`8.37 block diagonal matrix with upper-triangular blocks` ·
`8.39 identity plus nilpotent has a square root` ·
`8.41 over C, invertible operators have square roots` ·
`8.44 definition: Jordan basis` · **`8.45 every nilpotent operator has a Jordan basis`** ·
**`8.46 Jordan form`** ("Suppose **F = C** and T ∈ L(V). Then there is a basis of V that is
a Jordan basis for T.") · `8.47 definition: trace of a matrix` ·
`8.49 trace of AB equals trace of BA` ·
`8.50 trace of matrix of operator does not depend on basis` ·
`8.51 definition: trace of an operator` ·
`8.52 on complex vector spaces, trace equals sum of eigenvalues` ·
`8.54 trace and characteristic polynomial` · `8.55 trace on an inner product space` ·
`8.56 trace is linear` · `8.57 identity operator is not the difference of ST and TS`.

**Ch. 9A, bilinear and quadratic forms** (the commissioned pages touch this at "a bilinear
form that is not an inner product"): `9.1 definition: bilinear form` ·
`9.4 definition: matrix of a bilinear form, M(β)` · `9.5 dim V^(2) = (dim V)²` ·
`9.6 composition of a bilinear form and an operator` · `9.7 change-of-basis formula` ·
`9.9 definition: symmetric bilinear form` · `9.11 definition: symmetric matrix` ·
**`9.12 symmetric bilinear forms are diagonalizable`** ·
**`9.13 diagonalization of a symmetric bilinear form by an orthonormal basis`** ·
`9.14 definition: alternating bilinear form` ·
`9.16 characterization of alternating bilinear forms` ·
`9.18 definition: quadratic form associated with a bilinear form, q_β` ·
`9.20 quadratic forms on F^n` · `9.21 characterizations of quadratic forms` ·
**`9.23 diagonalization of quadratic form`**.

### 1.3 Hoffman & Kunze, *Linear Algebra*, 2nd ed. — printed TOC, verbatim with page numbers

Read range: **the printed TOC in full; Chapters 6, 7, 8, 9, 10 and the Appendix read page
by page (book pp. 181–399).** Verbatim:

```
Chapter 1. Linear Equations                                                          1
  1.1. Fields                                                                        1
  1.2. Systems of Linear Equations                                                    3
  1.3. Matrices and Elementary Row Operations                                         6
  1.4. Row-Reduced Echelon Matrices                                                  11
  1.5. Matrix Multiplication                                                         16
  1.6. Invertible Matrices                                                           21
Chapter 2. Vector Spaces                                                            28
  2.1. Vector Spaces          28      2.2. Subspaces                    34
  2.3. Bases and Dimension    40      2.4. Coordinates                  49
  2.5. Summary of Row-Equivalence 55  2.6. Computations Concerning Subspaces 58
Chapter 3. Linear Transformations                                                   67
  3.1. Linear Transformations                        67
  3.2. The Algebra of Linear Transformations         74
  3.3. Isomorphism                                   84
  3.4. Representation of Transformations by Matrices 86
  3.5. Linear Functionals                            97
  3.6. The Double Dual                              107
  3.7. The Transpose of a Linear Transformation     111
Chapter 4. Polynomials                                                             117
  4.1. Algebras                                     117
  4.2. The Algebra of Polynomials                   119
  4.3. Lagrange Interpolation                       124
  4.4. Polynomial Ideals                            127
  4.5. The Prime Factorization of a Polynomial      134
Chapter 5. Determinants                                                            140
  5.1. Commutative Rings                            140
  5.2. Determinant Functions                        141
  5.3. Permutations and the Uniqueness of Determinants 150
  5.4. Additional Properties of Determinants        156
  5.5. Modules                                      164
  5.6. Multilinear Functions                        166
  5.7. The Grassman Ring                            173
Chapter 6. Elementary Canonical Forms                                              181
  6.1. Introduction                                 181
  6.2. Characteristic Values                        182
  6.3. Annihilating Polynomials                     190
  6.4. Invariant Subspaces                          198
  6.5. Simultaneous Triangulation; Simultaneous Diagonalization  206
  6.6. Direct-Sum Decompositions                    209
  6.7. Invariant Direct Sums                        213
  6.8. The Primary Decomposition Theorem            219
Chapter 7. The Rational and Jordan Forms                                           227
  7.1. Cyclic Subspaces and Annihilators            227
  7.2. Cyclic Decompositions and the Rational Form  231
  7.3. The Jordan Form                              244
  7.4. Computation of Invariant Factors             251
  7.5. Summary; Semi-Simple Operators               262
Chapter 8. Inner Product Spaces                                                    270
  8.1. Inner Products                               270
  8.2. Inner Product Spaces                         277
  8.3. Linear Functionals and Adjoints              290
  8.4. Unitary Operators                            299
  8.5. Normal Operators                             311
Chapter 9. Operators on Inner Product Spaces                                       319
  9.1. Introduction                                 319
  9.2. Forms on Inner Product Spaces                320
  9.3. Positive Forms                               325
  9.4. More on Forms                                332
  9.5. Spectral Theory                              335
  9.6. Further Properties of Normal Operators       349
Chapter 10. Bilinear Forms                                                         359
  10.1. Bilinear Forms                              359
  10.2. Symmetric Bilinear Forms                    367
  10.3. Skew-Symmetric Bilinear Forms               375
  10.4. Groups Preserving Bilinear Forms            379
Appendix                                                                           386
  A.1. Sets                                         387
  A.2. Functions                                    388
  A.3. Equivalence Relations                        391
  A.4. Quotient Spaces                              394
  A.5. Equivalence Relations in Linear Algebra      397
  A.6. The Axiom of Choice                          399
Bibliography 400 · Index 401
```

**H&K's standing field convention, read verbatim from p. 3, matters and is a trap.**
"In the examples and exercises of this book, the reader should assume that the field
involved is a subfield of the complex numbers, unless it is expressly stated that the field
is more general." So an H&K theorem stated over "the field F" IS general, but an H&K
theorem that says "let F be a subfield of the complex numbers" is genuinely restricted, and
several of the most useful ones do — see 7.5's Theorems 12 and 13 below, and 10.2's
Theorem 3.

### 1.4 Hoffman & Kunze — named results, Ch. 6–10 and Appendix, with book page numbers

Transcribed from the pages themselves. H&K numbers `Theorem n` afresh in each chapter and
leaves lemmas, corollaries and definitions unnumbered, so I give the page. Statements are
faithful shortenings, not quotations, except where quoted. Bold = load-bearing for the
commissioned pages. (The 1971 scan OCRs "monic" as "manic", "finite" as "jinite" and
"field" as "Jield"; I have silently corrected those three.)

**Ch. 6, Elementary Canonical Forms.**
p183 **Theorem 1** — T on a finite-dimensional V, c a scalar: TFAE (i) c is a
characteristic value of T; (ii) T − cI is singular; (iii) det(T − cI) = 0 ·
p183 Lemma — similar matrices have the same characteristic polynomial ·
p186 Lemma — Tα = cα ⟹ f(T)α = f(c)α for every polynomial f ·
p186 Lemma — if W_i is the eigenspace for c_i and W = W_1 + ⋯ + W_k then
dim W = Σ dim W_i, and a union of bases of the W_i is a basis of W ·
p187 **Theorem 2** — TFAE: (i) T is diagonalizable; (ii) the char. poly is
(x−c_1)^{d_1}⋯(x−c_k)^{d_k} and dim W_i = d_i; (iii) Σ dim W_i = dim V ·
p191 **Definition (minimal polynomial)** — "the (unique) **monic** generator of the ideal
of polynomials over F which annihilate T" ·
p193 **Theorem 3** — the characteristic and minimal polynomials have the same roots,
except for multiplicities ·
p194 **Theorem 4 (Cayley–Hamilton)** — f(T) = 0; the minimal polynomial divides the
characteristic polynomial ·
p199 **Definition (invariant subspace)** ·
p200 Lemma — for W invariant, char. poly of T|_W divides that of T, and min. poly of T|_W
divides that of T ·
p202 Lemma — W invariant ⟹ W invariant under every polynomial in T; the **conductor**
S(α; W) is an ideal ·
p202 **Lemma (the "conductor" lemma)** — if the min. poly of T is (x−c_1)^{r_1}⋯(x−c_k)^{r_k}
and W ⊊ V is invariant, there is α ∉ W and a c_j with (T − c_j I)α ∈ W ·
p203 **Theorem 5** — T is **triangulable ⟺ the minimal polynomial of T is a product of
linear polynomials over F** · p203 **Corollary** — over an algebraically closed field every
n × n matrix is similar to a triangular matrix ·
p204 **Theorem 6** — T is **diagonalizable ⟺ the minimal polynomial has the form
p = (x−c_1)⋯(x−c_k) with the c_i distinct elements of F** ·
p206 Lemma — for a commuting family 𝔉 of triangulable operators and a proper invariant
W, there is α ∉ W with (T − c(T)I)α ∈ W for every T ∈ 𝔉 ·
p207 **Theorem 7 (simultaneous triangulation)** · p207 Corollary (matrix form, over an
algebraically closed field) · p207 **Theorem 8 (simultaneous diagonalization of a commuting
family of diagonalizable operators)** ·
p209 Lemma — four equivalents for independence of subspaces W_1, …, W_k ·
p212 **Theorem 9** — V = W_1 ⊕ ⋯ ⊕ W_k ⟹ projections E_i with E_i² = E_i, E_iE_j = 0,
I = ΣE_i, range E_i = W_i; and conversely ·
p214 **Theorem 10** — each W_i is T-invariant ⟺ T commutes with every E_i ·
p215 **Theorem 11** — T diagonalizable ⟹ the spectral resolution T = Σ c_i E_i with the E_i
polynomials in T ·
p220 **Theorem 12 (Primary Decomposition Theorem)** — min. poly p = p_1^{r_1}⋯p_k^{r_k}
with the p_i distinct irreducible monics; W_i = null(p_i(T)^{r_i}); then V = ⊕W_i, each W_i
is invariant, and the min. poly of T|_{W_i} is p_i^{r_i} ·
p221 Corollary — the E_i are polynomials in T, so anything commuting with T commutes with
each E_i ·
p222 **Theorem 13 (Jordan–Chevalley over a splitting field)** — if the min. poly splits into
linear factors, T = D + N with D diagonalizable, N nilpotent, DN = ND, and D, N are
polynomials in T; the pair is unique ·
p223 Corollary — over an algebraically closed field every T is diagonalizable + nilpotent
with the two commuting.

**Ch. 7, The Rational and Jordan Forms.**
p228 **Definition (T-annihilator, cyclic subspace Z(α; T))** ·
p228 **Theorem 1** — deg p_α = dim Z(α; T); p_α is the minimal polynomial of T|_{Z(α;T)};
and if that degree is k then α, Tα, …, T^{k−1}α is a basis of Z(α; T) ·
p230 **Theorem 2** — U has a **cyclic vector ⟺ some ordered basis represents U by the
companion matrix of its minimal polynomial** ·
p230 **Corollary** — for the companion matrix of a monic p, p is **both** the minimal and
the characteristic polynomial ·
p233 **Theorem 3 (Cyclic Decomposition Theorem)** — for a T-admissible W_0 there exist
nonzero α_1, …, α_r with T-annihilators p_1, …, p_r such that
V = W_0 ⊕ Z(α_1;T) ⊕ ⋯ ⊕ Z(α_r;T) and **p_{k}** divides **p_{k−1}** for k = 2, …, r; the
r and the p_i are uniquely determined ·
p236 Corollary — every T-admissible subspace has a T-invariant complement ·
p237 **Corollary** — (a) there exists α ∈ V whose T-annihilator **is** the minimal
polynomial of T; (b) T has a cyclic vector ⟺ the characteristic and minimal polynomials
are equal ·
p237 **Theorem 4 (Generalized Cayley–Hamilton)** — p and f the minimal and characteristic
polynomials: (i) p divides f; (ii) p and f have the same prime factors, up to
multiplicities; (iii) if p = f_1^{r_1}⋯f_k^{r_k} is the prime factorisation of p then
f = f_1^{d_1}⋯f_k^{d_k} where d_i is the nullity of f_i(T)^{r_i} divided by deg f_i ·
p238 Corollary — T nilpotent on an n-dimensional space ⟹ char. poly is x^n ·
p238 **Theorem 5 (uniqueness of the rational form)** — every n × n B over F is similar over
F to **one and only one** matrix in rational form (block-diagonal companion matrices of the
invariant factors p_1, …, p_r with p_{k+1} | p_k) ·
§7.3 The Jordan Form, pp. 244–251 (**stated in the running text, not as a numbered
theorem**: the primary decomposition plus the cyclic decomposition applied to each
nilpotent T|_{W_i} − c_i I yields the Jordan matrix; over a field where the char. poly
splits) ·
p253 Lemma — a matrix over F[x] with a nonzero first-column entry is row-equivalent to one
whose (1,1) entry is the gcd of column 1 ·
p255 **Theorem 6** — for P over F[x]: invertible ⟺ det P is a nonzero scalar ⟺ P is a
product of elementary matrices ·
p256 Corollary, p256 **Theorem 7** (equivalence over F[x] = PMQ) ·
p256 **Theorem 8** — xI − A is equivalent to the diagonal matrix with entries
1, …, 1, p_r, …, p_1 where p_1, …, p_r are the **invariant factors** of A ·
p257 **Definition ((Smith) normal form)** · p257 **Theorem 9** — every M over F[x] is
equivalent to a matrix in normal form · p259 **Theorem 10** — equivalent matrices have the
same determinant divisors δ_k · p260 **Corollary** — the normal form is unique and
f_k = δ_k/δ_{k−1} ·
p263 **Definition (semi-simple)** — every T-invariant subspace has a T-invariant complement ·
p263 Lemma (semi-simplicity and the primary decomposition) · p264 Lemma — min. poly
irreducible ⟹ T semi-simple ·
p264 **Theorem 11** — **T is semi-simple ⟺ its minimal polynomial p = p_1⋯p_k is a product
of distinct irreducible polynomials over F** ·
p265 **Corollary** — over an algebraically closed field, semi-simple ⟺ diagonalizable ·
p266 **Lemma (Taylor's Formula)** — stated over a field of **characteristic zero** ·
p266 Lemma — F a subfield of C: f is a product of distinct irreducibles ⟺ gcd(f, f′) = 1 ·
p267 **Theorem 12** — F **a subfield of the complex numbers**: T is semi-simple ⟺ ... ·
p267 **Theorem 13 (Jordan–Chevalley over a subfield of C)** — F **a subfield of C**: there
is a semi-simple S and a nilpotent N with T = S + N and SN = NS; S and N are unique and
each is a polynomial in T.

**Ch. 8, Inner Product Spaces.**
p277 **Theorem 1** — ‖cα‖ = |c|‖α‖; ‖α‖ > 0 for α ≠ 0; **|(α|β)| ≤ ‖α‖‖β‖
(Cauchy–Schwarz)**; ‖α + β‖ ≤ ‖α‖ + ‖β‖ ·
p279 **Theorem 2** — an orthogonal set of nonzero vectors is linearly independent ·
p280 Corollary — the coefficients of β in an orthogonal expansion ·
p280 **Theorem 3 (Gram–Schmidt)** ·
p281 **Corollary** — every finite-dimensional inner product space has an orthonormal basis ·
p284 **Theorem 4** — α ∈ W is a best approximation to β ⟺ β − α ⊥ W; such α is unique when
it exists; it exists when W is finite-dimensional (Gram–Schmidt formula) ·
p285 **Definition (orthogonal complement S^⟂)**, **Definition (orthogonal projection)** ·
p285 Corollary — β ↦ β − Eβ is the orthogonal projection on W^⟂ ·
p286 **Theorem 5** — E is idempotent linear onto W, W^⟂ is its null space, and
**V = W ⊕ W^⟂** ·
p287 Corollary (I − E is the projection onto W^⟂) ·
p287 **Corollary (Bessel's inequality)** — Σ |(β|α_k)|²/‖α_k‖² ≤ ‖β‖², with equality ⟺ β is
in the span ·
p291 **Theorem 6 (Riesz representation, finite dimensions)** — for f a linear functional on
a finite-dimensional inner product space there is a **unique** β with f(α) = (α|β) ·
p293 **Theorem 7** — the adjoint T* exists and is unique on a finite-dimensional inner
product space · p293 **Theorem 8** — in an orthonormal basis, [T*] is the conjugate
transpose of [T] · p294 Corollary ·
p297 **Theorem 9** — (T+U)* = T*+U*, (cT)* = c̄T*, (TU)* = U*T*, (T*)* = T ·
p300 **Theorem 10** — for T : V → W between equal-dimensional inner product spaces, TFAE:
T*T = I; T preserves inner products; T is an isometry ·
p300 Corollary — V ≅ W as inner product spaces ⟺ equal dimension ·
p302 **Theorem 11** — T preserves inner products ⟺ ‖Tα‖ = ‖α‖ for all α ·
p303 **Theorem 12** — U unitary ⟺ U* exists and UU* = U*U = I ·
p303 **Definition (unitary matrix A*A = I)**, **Theorem 13** — U is unitary ⟺ its matrix in
some (equivalently every) orthonormal basis is unitary ·
p305 **Theorem 14** — for every invertible complex B there is a unique lower-triangular M
with positive diagonal such that MB is unitary · p307 Corollary — **B = N·U with N
upper-triangular positive-diagonal and U unitary** (this is H&K's QR) ·
p312 **Theorem 15** — T self-adjoint ⟹ every characteristic value is **real**, and
eigenvectors for distinct characteristic values are orthogonal. "It should be pointed out
that Theorem 15 says nothing about the existence of characteristic values or characteristic
vectors." ·
p313 **Theorem 16** — **on a finite-dimensional inner product space of positive dimension,
every self-adjoint operator has a (nonzero) characteristic vector.** (See §2.13 — H&K's
proof is explicitly FTA-based.) ·
p313 Example 29 — the multiplication operator (Tf)(t) = tf(t) on C[0,1] is self-adjoint
with **no** characteristic value: the finite-dimensionality hypothesis is necessary ·
p314 **Theorem 17** — W invariant under T ⟹ W^⟂ invariant under T* ·
p314 **Theorem 18** — T self-adjoint ⟹ V has an orthonormal basis of characteristic vectors
· p314 **Corollary** — A Hermitian ⟹ P unitary with P^{−1}AP diagonal; A real symmetric ⟹
P **real orthogonal** with P^{−1}AP diagonal ·
p315 **Theorem 19** — T normal: α is a characteristic vector for T with value c ⟺ α is a
characteristic vector for T* with value c̄ ·
p315 **Theorem 20** — T's matrix in an orthonormal basis is upper-triangular **and** T is
normal ⟹ the matrix is diagonal ·
p316 **Theorem 21 (Schur)** — V a finite-dimensional **complex** inner product space, T any
operator ⟹ some orthonormal basis makes [T] upper-triangular · p316 Corollary (unitary U
with U^{−1}AU upper-triangular) ·
p317 **Theorem 22 (complex spectral theorem)** — T normal on a finite-dimensional complex
inner product space ⟹ V has an orthonormal basis of characteristic vectors ·
p317 Corollary (P unitary with P^{−1}AP diagonal, for A normal).

**Ch. 9, Operators on Inner Product Spaces.**
p320 **Theorem 1** — every form f on a finite-dimensional inner product space is
f(α,β) = (Tα|β) for a unique T; f ↦ T is an isomorphism ·
p321 Corollary — (f|g) = tr(T_f T_g*) is an inner product on the space of forms ·
p322 **Theorem 2** — every form on a finite-dimensional **complex** inner product space has
an upper-triangular matrix in some orthonormal basis ·
p323 **Theorem 3** — V complex and f(α,α) real for every α ⟹ f is Hermitian ·
p323 Corollary — over C, T is self-adjoint ⟺ (Tα|α) is real for every α ·
p323 **Theorem 4 (Principal Axis Theorem)** — every Hermitian form on a finite-dimensional
inner product space is diagonal with **real** entries in some orthonormal basis ·
p326 **Theorem 5** — F = R or C; g(X,Y) = Y*AX is a positive form ⟺ ... ·
p326 Lemma (A invertible: two equivalent statements) ·
p328 **Theorem 6 (Sylvester's criterion)** — f is a positive form ⟺ A = A* and every
**principal minor** of A is positive ·
p332 **Theorem 7 (Gram matrix / Gram determinant)** — M_{jk} = f(α_k, α_j); f is positive on
W ⟺ M = M* and det of every principal minor is positive ·
p334 **Theorem 8** — if all principal minors of A are nonzero then A = LDU-type
factorisation (H&K's version of LDL*) ·
p335 **Theorem 9 (Spectral Theorem)** — **T normal on a finite-dimensional complex inner
product space, OR T self-adjoint on a finite-dimensional real inner product space**; c_1,
…, c_k the distinct characteristic values, W_j the eigenspaces, E_j the orthogonal
projections onto them: then W_j ⊥ W_i for i ≠ j, V = ⊕W_j, and **T = c_1E_1 + ⋯ + c_kE_k**
(the spectral resolution) ·
p336 Corollary (E_j = e_j(T) with e_j the Lagrange interpolation polynomials) ·
p337 **Definition and Theorem 10 (functional calculus f(T) for a diagonalizable normal T)**
· p339 Corollary · p340 **Theorem 11** (matrix version) ·
p340 **Theorem 12** — a diagonalizable normal T is self-adjoint / non-negative / unitary
according as its characteristic values are real / non-negative real / of absolute value 1 ·
p341 **Theorem 13 (unique non-negative square root)** — a non-negative T has one and only
one non-negative square root ·
p342 **Theorem 14 (polar decomposition)** — every T = UN with U unitary and N non-negative;
N = (T*T)^{1/2} is unique, and U is unique when T is invertible ·
p343 **Theorem 15** and p344 Corollary and p345 **Theorem 16** — simultaneous spectral
resolution of a commuting family of diagonalizable normal operators; the generated
self-adjoint algebra ·
p346 Corollary — there is a single T in the algebra of which every member is a polynomial ·
p349 **Theorem 17** — T normal, min. poly p with distinct monic prime factors p_1,…,p_k:
each p_j occurs **with multiplicity 1** and has degree 1 or 2 ·
p349 Lemma 1 — for N normal, null(N) = range(N)^⟂ · p349 Lemma 2 — N normal and N²α = 0 ⟹
Nα = 0 · p350 Lemma 3 — f(T) is normal · p350 Lemma 4 — f, g coprime, f(T)α = 0,
g(T)β = 0 ⟹ (α|β) = 0 ·
p352 Corollary (invariant subspaces of a normal operator decompose along the primary
components) ·
p353 **Theorem 18** — **T normal on a finite-dimensional REAL inner product space with
min. poly p = (x − a)² + b², b ≠ 0** ⟹ some orthonormal basis gives a block-diagonal matrix
of 2 × 2 blocks [[a, b], [−b, a]] · p353 Lemma (S normal with S² + I = 0) · p354 Corollary
(T invertible with T* = (a² + b²)T^{−1}) ·
p354 **Theorem 19** — anything commuting with a normal T also commutes with T*; every
invariant subspace is reducing ·
p355 **Theorem 20** — T normal ⟹ the cyclic decomposition can be taken **orthogonal**, with
the annihilators p_1, …, p_r satisfying p_{k+1} | p_k ·
p356 **Corollary** — a normal matrix over R (resp. C) is **real-orthogonally** (resp.
unitarily) similar to a matrix in rational canonical form; two normal matrices are
unitarily equivalent ⟺ they are similar ·
p356 Lemma and p357 **Theorem 21** — two normal operators are unitarily equivalent ⟺ they
have the same rational form.

**Ch. 10, Bilinear Forms.**
p362 **Theorem 1** — f ↦ [f]_𝔅 is an isomorphism from the space of bilinear forms onto
F^{n×n} · p362 Corollary (the L_i(α)L_j(β) basis) ·
p364 **Theorem 2** — rank L_f = rank R_f, defining rank(f) · p365 **Corollary 1** —
rank(f) = rank of its matrix in any basis · p365 **Corollary 2** — four equivalents for
rank(f) = n (non-degeneracy) ·
p367 **Definition (symmetric bilinear form)** ·
p369 **Theorem 3** — V finite-dimensional over a field of **characteristic zero**, f
symmetric ⟹ some ordered basis diagonalises f · p369 **Corollary** — F a **subfield of C**,
A symmetric ⟹ P invertible over F with P^tAP diagonal ·
p370 **Theorem 4** — over **C**, f symmetric of rank r ⟹ a basis in which
f(x,y) = x_1y_1 + ⋯ + x_ry_r ·
p370 **Theorem 5 (Sylvester's law of inertia)** — over **R**, f symmetric of rank r ⟹ a
basis in which f is x_1y_1 + ⋯ + x_py_p − x_{p+1}y_{p+1} − ⋯ − x_ry_r, and **p is unique** ·
p377 **Theorem 6** — over a **subfield of C**, f skew-symmetric ⟹ rank r is **even**, and
r = 2k gives the standard symplectic normal form ·
p379 **Theorem 7** — the operators preserving a non-degenerate f form a group ·
p381 **Theorem 8** — over **C** with a non-degenerate symmetric f, the preserving group is
the complex orthogonal group ·
p381 **Theorem 9** — over **R**, the group is a pseudo-orthogonal group O(p, q).

**Appendix (this is where H&K puts quotient spaces).**
p394 §A.4 Quotient Spaces · p396 **Theorem** — Q the quotient map V → V/W and W′ a subspace:
**V = W ⊕ W′ ⟺ Q|_{W′} is an isomorphism of W′ onto V/W** ·
p397 **Theorem (first isomorphism theorem for vector spaces)** — T : V ↠ Z linear onto with
null space W ⟹ Z is isomorphic to V/W · §A.5 Equivalence Relations in Linear Algebra
(similarity, equivalence over F[x], congruence, unitary equivalence) · p399 §A.6 The Axiom
of Choice.

### 1.5 Treil, *Linear Algebra Done Wrong* — the PDF's own bookmark outline

Read range: **Chapters 4, 5, 6, 7, 9 in detail; whole outline transcribed.** Verbatim
(abridged in the chapters not relevant to the commission; nothing invented).

```
Chapter 1. Basic Notions
  1 Vector spaces / 2 Linear combinations, bases. / 3 Linear Transformations.
  Matrix–vector multiplication / 4 Linear transformations as a vector space /
  5 Composition of linear transformations and matrix multiplication /
  6 Invertible transformations and matrices. Isomorphisms / 7 Subspaces /
  8 Application to computer graphics.
Chapter 2. Systems of linear equations
  1 Different faces of linear systems. / 2 Solution of a linear system. Echelon and reduced
  echelon forms / 3 Analyzing the pivots. / 4 Finding the inverse of A by row reduction. /
  5 Dimension. Finite-dimensional spaces. / 6 General solution of a linear system. /
  7 Fundamental subspaces of a matrix. Rank. / 8 Representation of a linear transformation
  in arbitrary bases. Change of coordinates formula.
Chapter 3. Determinants
  1 Introduction. / 2 What properties determinant should have. /
  3 Constructing the determinant. / 4 Formal definition. Existence and uniqueness of the
  determinant. / 5 Cofactor expansion. / 6 Minors and rank. / 7 Review exercises
Chapter 4. Introduction to spectral theory (eigenvalues and eigenvectors)
  1 Main definitions
    1.1 Eigenvalues, eigenvectors, spectrum / 1.2 Finding eigenvalues: characteristic
    polynomials / 1.3 Finding characteristic polynomial and eigenvalues of an abstract
    operator / 1.4 Complex vs real spaces / 1.5 Multiplicities of eigenvalues /
    1.6 Trace and determinant. / 1.7 Eigenvalues of a triangular matrix
  2 Diagonalization.
    2.1 Preliminaries / 2.2 Some motivations: functions of operators. / 2.3 The case of n
    distinct eigenvalues / 2.4 Bases of subspaces (AKA direct sums of subspaces). /
    2.5 Criterion of diagonalizability / 2.6 Real factorization / 2.7 Some example
      2.7.1 Real eigenvalues / 2.7.2 Complex eigenvalues / 2.7.3 A non-diagonalizable matrix
Chapter 5. Inner product spaces
  1 Inner product in R^n and C^n. Inner product spaces.
    1.1 Inner product and norm in R^n / 1.2 Inner product and norm in C^n /
    1.3 Inner product spaces / 1.4 Properties of inner product / 1.5 Norm. Normed spaces
  2 Orthogonality. Orthogonal and orthonormal bases.
    2.1 Orthogonal and orthonormal bases.
  3 Orthogonal projection and Gram-Schmidt orthogonalization
    3.1 Gram-Schmidt orthogonalization algorithm / 3.2 An example. /
    3.3 Orthogonal complement. Decomposition E = E ⊕ E^⟂
  4 Least square solution. Formula for the orthogonal projection
    4.1 Least square solution / 4.2 Formula for the orthogonal projection. /
    4.3 An example: line fitting / 4.4 Other examples: curves and planes.
  5 Adjoint of a linear transformation. Fundamental subspaces revisited.
    5.1 Adjoint matrices and adjoint operators. / 5.2 Relation between fundamental
    subspaces. / 5.3 The "essential" part of a linear transformation
  6 Isometries and unitary operators. Unitary and orthogonal matrices.
    6.1 Main definitions / 6.2 Examples / 6.3 Properties of unitary operators /
    6.4 Unitary equivalent operators
  7 Rigid motions in R^n
  8 Complexification and decomplexification
    8.1 Decomplexification / 8.2 Complexification / 8.3 Introducing complex structure to a
    real space
Chapter 6. Structure of operators in inner product spaces.
  1 Upper triangular (Schur) representation of an operator.
  2 Spectral theorem for self-adjoint and normal operators.
  3 Polar and singular value decompositions.
    3.1 Positive definite operators. Square roots / 3.2 Modulus of an operator. Singular
    values. / 3.3 Singular values. Schmidt decomposition. / 3.4 Matrix representation of
    the Schmidt decomposition. Singular value decomposition.
      3.4.1 From singular value decomposition to the polar decomposition
  4 Applications of the singular value decomposition.
    4.1 Image of the unit ball / 4.2 Operator norm of a linear transformation /
    4.3 Condition number of a matrix / 4.4 Effective rank of a matrix /
    4.5 Moore–Penrose (pseudo)inverse.
  5 Structure of orthogonal matrices
  6 Orientation
    6.1 Motivation / 6.2 Formal definition / 6.3 Continuous transformations of bases and
    orientation
Chapter 7. Bilinear and quadratic forms
  1 Main definition
    1.1 Bilinear forms on R^n / 1.2 Quadratic forms on R^n / 1.3 Quadratic forms on C^n
  2 Diagonalization of quadratic forms
    2.1 Orthogonal diagonalization / 2.2 Non-orthogonal diagonalization
      2.2.1 Diagonalization by completion of squares / 2.2.2 Diagonalization using
      row/column operations
  3 Silvester's Law of Inertia            [sic — Treil's own spelling of "Sylvester's"]
  4 Positive definite forms. Minimax characterization of eigenvalues and the Silvester's
    criterion of positivity
    4.1 Silvester's criterion of positivity / 4.2 Minimax characterization of eigenvalues /
    4.3 Some remarks
  5 Positive definite forms and inner products
Chapter 8. Dual spaces and tensors
  1 Dual spaces / 2 Dual of an inner product space (2.1 Riesz representation theorem /
  2.2 Is an inner product space a dual to itself? / 2.3 Biorthogonal systems and orthonormal
  bases) / 3 Adjoint (dual) transformations and transpose. Fundamental subspace revisited
  (once more) / 4 What is the difference between a space and its dual? /
  5 Multilinear functions. Tensors / 6 Change of coordinates formula for tensors.
Chapter 9. Advanced spectral theory
  1 Cayley–Hamilton Theorem
  2 Spectral Mapping Theorem
    2.1 Polynomials of operators / 2.2 Spectral Mapping Theorem
  3 Generalized eigenspaces. Geometric meaning of algebraic multiplicity
    3.1 Invariant subspaces / 3.2 Generalized eigenspaces. / 3.3 Geometric meaning of
    algebraic multiplicity / 3.4 An important application
  4 Structure of nilpotent operators
    4.1 Cycles of generalized eigenvectors / 4.2 Jordan canonical form of a nilpotent
    operator / 4.3 Dot diagrams. Uniqueness of the Jordan canonical form / 4.4 Computing a
    Jordan canonical basis
  5 Jordan decomposition theorem
    5.1 Remarks about computing Jordan canonical basis
Index
```

**Disposition note.** Treil §6.5 "Structure of orthogonal matrices" and §6.6 "Orientation"
are the only place in this harvest that classifies real orthogonal matrices into rotation
blocks; Treil §7.4.2 is the only textbook (as opposed to course-note) statement of the
minimax characterisation. Treil has **no rational canonical form and no invariant
factors** — like Axler, he goes straight from generalized eigenspaces to Jordan.

### 1.6 Keith Conrad blurbs — section headings and named results

All downloaded from `https://kconrad.math.uconn.edu/blurbs/linmultialg/<file>.pdf` except
`fundthmalglinear.pdf` (`.../fundthmalg/`) and `matrixconj.pdf` (`.../gradnumthy/`).

**A correction to the commission's premise, stated plainly.** The commission expected
Conrad blurbs "on the minimal polynomial, rational canonical form, Jordan form,
orthogonal/unitary/symmetric operators, the SVD". I enumerated Conrad's entire blurb index
and searched it for `Jordan`, `canonical form`, `spectral`, `singular value`, `SVD`,
`symmetric`, `unitary`, `orthogonal`, `Hermitian`, `positive`, `inner product`, `eigen`.
**There is no Conrad blurb on the Jordan form, the rational canonical form, the spectral
theorem, the SVD, or symmetric/orthogonal/unitary operators.** The only search hits were in
his number-theory and Galois lists (symmetric polynomials, quadratic reciprocity). What
Conrad *does* have, and it is extremely well matched to this library's
"arbitrary field" constraint, is the list below.

Files downloaded (15): `minpolyandappns` (15 pp), `potdiagonalizable` (6), `semisimple`
(7), `simulcomm` (3), `bilinearform` (63), `complexification` (14), `modulesoverPID` (25),
`alignedbases` (4), `dualmod` (19), `dualspaceinfinite` (4), `matrixnorm` (12),
`universalmapping` (24), `linearrecursion` (10), `fundthmalglinear` (5), `matrixconj` (15).

**`minpolyandappns.pdf` — "THE MINIMAL POLYNOMIAL AND SOME APPLICATIONS" (15 pp).**
§1 Introduction · §2 Diagonalizable Operators · §3 Distinct Eigenvalues and
Diagonalizability · §4 The Minimal Polynomial · §5 Simultaneous Diagonalizability ·
§6 Nilpotent Operators · §7 Computing the Minimal Polynomial.
Named: **Thm 2.2** A is diagonalizable ⟺ there is a basis of eigenvectors ·
**Lem 3.1** eigenvectors for distinct eigenvalues are linearly independent ·
**Thm 3.2** char. poly a product of distinct linear factors ⟹ diagonalizable ·
**Thm 4.3** the minimal polynomial of an operator equals that of any matrix representing it
· **Thm 4.4** f(A) = O ⟺ m_A | f · **Thm 4.7** every eigenvalue is a root of the minimal
polynomial · **Cor 4.10** the minimal and characteristic polynomials have the same
irreducible factors · **Thm 4.11** **A is diagonalizable ⟺ m_A(T) is a product of distinct
linear factors in F[T]** · **Cor 4.13** (complex case) · **Cor 4.14** A² = A ⟹ A is a
projection · **Thm 4.17** upper-triangularisability criterion · **Lem 5.1** the restriction
of a diagonalizable operator to a stable subspace is diagonalizable · **Thm 5.2**
commuting diagonalizable operators are simultaneously diagonalizable · **Cor 5.4, 5.5** ·
**Thm 6.1** equivalents for nilpotence · **Cor 6.2** N nilpotent ⟺ its only eigenvalue (in
an extension) is 0 · **Cor 6.3** strictly-upper-triangular matrix · **Cor 6.4** commuting
upper-triangularisable operators · **Thm 7.1, Thm 7.4, Cor 7.5** m_A from stable subspaces
and quotients: `lcm(m_{A|W}, m_{A on V/W}) | m_A | m_{A|W}·m_{A on V/W}`.
**This blurb is the single best "arbitrary field" source for commissioned page 1**, and
Thm 7.4 is a ready-made reason for page 2 to build V/W.

**`potdiagonalizable.pdf` — "POTENTIAL DIAGONALIZABILITY" (6 pp).** No printed §-headings.
Named: **Lem 3** linear independence in F^n is unchanged by field extension ·
**Thm 4** for E/F, A ∈ M_n(F) is diagonalizable over F ⟺ ... (the base-change theorem) ·
**Cor 5** if A becomes diagonal over some extension then its char. poly splits there ·
**Thm 6** **A ∈ M_n(F) is diagonalizable over some extension field ⟺ its minimal polynomial
is squarefree** · **Lem 10** similarity over a finite extension descends · **Lem 11
(Lagrange interpolation)** · **Thm 12** commuting operators criterion · **Thm 13**.
**This is the load-bearing source for the "over an arbitrary field" version of
diagonalisability.**

**`semisimple.pdf` — "SEMISIMPLICITY" (7 pp).** No printed §-headings. Named:
**Thm 3** decomposition of a diagonalizable operator · **Thm 4** the structure of a
potentially diagonalizable operator via its minimal polynomial ·
**Thm 10** **A is semisimple ⟺ its minimal polynomial is squarefree** ·
**Cor 11** char. poly squarefree ⟹ semisimple · **Cor 12** · **Thm 13** equivalents.

**`simulcomm.pdf` — "SIMULTANEOUS COMMUTATIVITY OF OPERATORS" (3 pp).** Named:
**Thm 3** commuting operators on a finite-dimensional **C**-vector space have a common
eigenvector · **Lem 4** · **Thm 5** commuting diagonalizable operators are simultaneously
diagonalizable · **Cor 7** (used for Hecke eigenforms).

**`fundthmalglinear.pdf` — "THE FUNDAMENTAL THEOREM OF ALGEBRA VIA LINEAR ALGEBRA" (5 pp).**
Named: **Thm 1** every nonconstant complex polynomial has a complex root ·
**Thm 2** every n × n complex matrix has an eigenvector in C^n, **and Conrad states these
two are equivalent** · **Lem 3** the induction on the 2-adic valuation of n ·
**Cor 4** for every odd-dimensional real vector space, each pair of commuting operators has
a common eigenvector. **Read §2.13 before using this: the proof is Derksen's, and it still
needs the two analytic facts about R.**

**`matrixnorm.pdf` — "COMPUTING THE NORM OF A MATRIX" (12 pp).** §1 Introduction ·
§2 Norms on Vector Spaces · §3 Defining Norms on Matrices · §4 A computational formula for
the operator norm on M_n(R). Named: **Lem 3.1** boundedness · **Thm 3.2** ‖A‖ exists and is
a maximum · **Thm 3.4** the four operator-norm properties ·
**Thm 4.1** (1) A⊤ = A ⟹ all eigenvalues real; (2) the max of ‖Av‖ on the unit sphere is
attained at an eigenvector · **Cor 4.3** ‖A‖ is the square root of the largest eigenvalue of
AA⊤. **This blurb is openly analytic** (it uses compactness of the unit sphere), and is
therefore the right source for what the library CANNOT do at these pages.

**`complexification.pdf` — "COMPLEXIFICATION" (14 pp).** §1 Introduction ·
§2 Complexifying with Direct Sums · §3 Complexifying with Tensor Products ·
§4 Conjugations on Complex Vector Spaces. Named: **Thm 2.4** bases of W_C · **Thm 2.6**
every R-linear map extends · **Thm 2.7, 2.9, Cor 2.10, Thm 2.11** · **Thm 3.1** the
canonical isomorphism W_C ≅ C ⊗_R W · **Thm 3.2** · **Thm 4.11** the bijection between
conjugations and R-forms · **Cor 4.12, 4.14, 4.15** · **Thm 4.16, 4.17**.

**`bilinearform.pdf` — "BILINEAR FORMS" (63 pp).** The largest blurb here. Not fully
harvested; flagged in §5. It is the right source if the scaffolder wants the general
`char ≠ 2` theory of symmetric bilinear forms behind commissioned page 3.

**`modulesoverPID.pdf` (25 pp)** and **`alignedbases.pdf` (4 pp)** carry the structure
theorem for modules over a PID and simultaneously aligned bases — the module-theoretic
route to the rational and Jordan forms that H&K Ch. 7 does by hand. `alignedbases` Thm:
for a PID R and M ⊆ R^n, aligned bases with divisibility. **If the library already has a
PID structure theorem, page 2 can take it as a dependency instead of redoing H&K's cyclic
decomposition.**

**`dualspaceinfinite.pdf` (4 pp)** is the source for the failure of `V ≅ V′` in infinite
dimensions; **`universalmapping.pdf` (24 pp)** is the source for the universal property
framing of the quotient that commissioned page 2 wants.

### 1.7 Cambridge Part IB — Linear Algebra (Wadsley, notes by Chua) — bookmark outline

Read range: **the whole document (96 pp).** Verbatim:

```
Introduction
Vector spaces
  Definitions and examples
  Linear independence, bases and the Steinitz exchange lemma
  Direct sums
Linear maps
  Definitions and examples
  Linear maps and matrices
  The first isomorphism theorem and the rank-nullity theorem
  Change of basis
  Elementary matrix operations
Duality
  Dual space
  Dual maps
Bilinear forms I
Determinants of matrices
Endomorphisms
  Invariants
  The minimal polynomial
    Aside on polynomials
    Minimal polynomial
  The Cayley-Hamilton theorem
  Multiplicities of eigenvalues and Jordan normal form
Bilinear forms II
  Symmetric bilinear forms and quadratic forms
  Hermitian form
Inner product spaces
  Definitions and basic properties
  Gram-Schmidt orthogonalization
  Adjoints, orthogonal and unitary maps
  Spectral theory
```

**This is the closest existing syllabus to the commissioned four pages**, and its ordering
is instructive: quotients and the **first isomorphism theorem for vector spaces come
early** (in "Linear maps"), long before endomorphisms — which is exactly the placement
argument for putting `V/W` on commissioned page 2 rather than inventing it mid-proof.

### 1.8 Petersen, *Additions to Linear Algebra* — printed section headings

Read range: **the whole document (57 pp).** Verbatim §-headings:

```
1 Corrections
2 Additional Exercises
3 Linear Algebra in Multivariable Calculus
  Theorem 3.2 (The Implicit Function Theorem) / Corollary 3.3 /
  Theorem 3.4 (The Inverse Function Theorem) / Corollary 3.5 / 3.1 Exercises
4 [Norms]                                  4.1 Exercises
5 Completeness and Compactness
  Theorem 5.1 / Theorem 5.3 / Theorem 5.4 / Theorem 5.6
6 Orthonormal Bases in Infinite Dimensions
  Proposition 6.1 / Theorem 6.2 / Proposition 6.3 / Theorem 6.4 / Theorem 6.7 / 6.1 Exercises
7 Applications of Norms
  Theorem 7.1 (The Implicit Function Theorem) / 7.1 Exercises
8 Infinite Dimensional Extensions
  Theorem 8.1 / 8.1 Exercises
9 Calculating the Jordan Canonical Form
  Theorem 9.1 (Construction of the Jordan Canonical Form)
10 The Rational Canonical Form
  Lemma 10.1 / Proposition 10.2 / Corollary 10.3 / Lemma 10.4 /
  Theorem 10.5 (The Rational Canonical Form)
11 Control Theory
  Lemma 11.1
```

Notable inside §2: "**Exercise 23 gives a beautiful effective algorithm for the
Jordan–Chevalley decomposition for linear operators over any field of characteristic 0**",
and Exercise 20 is exactly the base-change question ("Assume F ⊂ L, e.g. R ⊂ C. Let
A ∈ M_{n×n}(F). Show that A …"). §11 "Control Theory" and Lemma 11.1 give a **cyclic-vector
/ controllability** framing that commissioned page 2 could use as an application.

### 1.9 Tao, 254A Notes 3a — section headings and named results

Read range: **the whole post.** Its own headings: **§1 Proof of spectral theorem ·
§2 Minimax formulae · §3 Eigenvalue inequalities · §4 Eigenvalue deformation · §5 Minors ·
§6 Singular values.** Named results as printed:
**Theorem 1 (Spectral theorem)** · **Theorem 2 (Courant–Fischer min-max theorem)**, both
forms: `λ_i(A) = sup_{dim(V)=i} inf_{v∈V, |v|=1} v*Av` and
`λ_i(A) = inf_{dim(V)=n−i+1} sup_{v∈V, |v|=1} v*Av` · **Proposition 3 (Extremal partial
trace)** · Exercise 1 (eigenbasis uniqueness under distinct eigenvalues) ·
**Exercise 2 (Schur–Horn inequalities and the permutahedron)** ·
**Exercise 3 (Wielandt minimax formula)** · **Exercise 4** (Lidskii and Weyl inequalities
for commuting matrices) · **Exercise 5 (dual Lidskii and dual Weyl inequality)** ·
**Exercise 13 (Hadamard second variation formula)** ·
**Exercise 14 (Cauchy interlacing inequalities)**: `λ_{i+1}(A_n) ≤ λ_i(A_{n−1}) ≤ λ_i(A_n)`
· Exercise 15 (eigenvalue equation) · **Theorem 4 (Singular value decomposition)** ·
**Exercise 21 (Courant–Fischer for singular values)**:
`σ_i(A) = sup_{dim(V)=i} inf_{v∈V, |v|=1} |Av|`.
Tao's §4 (eigenvalue deformation) is genuinely analytic (it differentiates eigenvalues
along a path) and is **not** available to this library; §2, §3 and §5 are not.

---

## PART 2 — The mathematics, with exact hypotheses, proof strategies, prerequisites

**Read §2.0 first.** The orchestrator's 2026-08-13 correction fixed the reading order:
pages 1, 2, 3 sit at orders 88, 90, 94 — below sequences (112), metric spaces (116),
compactness (120), the IVT/EVT (137) and the FTA (139) — while page 4 sits at order **141**,
above all of them. Everything below is therefore tiered.

### 2.0 The three tiers, and the master table

- **Tier (a) — purely algebraic.** Needs at most: an arbitrary field, or an ordered field,
  or an ordered field in which positive elements have square roots (the library has
  `thm-nth-roots-exist` at order 16 and `def-ordered-ring` /
  `lem-ordered-field-is-an-ordered-ring` at 46), or `C` with conjugation, modulus and
  `thm-every-complex-number-has-a-square-root` (order 54). **Legal on pages 1, 2, 3 and 4.**
- **Tier (b) — needs the FTA or an algebraically closed field, but no analysis.**
  Legal on page 4 only (FTA is at order 139), *unless* stated conditionally — see the
  "conditional form" device in §2.13.4, which is how a tier-(b) theorem becomes a tier-(a)
  theorem with a hypothesis.
- **Tier (c) — genuinely needs compactness or the EVT.** Legal on page 4 only, and
  **locked** there: a tier-(c) proof can never be re-homed below order 137.

The library's stated preference is the lowest honest tier. Master table:

| result | usual textbook tier | **true tier** | what the cheaper route costs |
|---|---|---|---|
| Cauchy–Schwarz (squared form ⟨u,v⟩² ≤ ⟨u,u⟩⟨v,v⟩) | (a) | **(a)** | nothing; ordered field only, no square roots |
| Cauchy–Schwarz (‖·‖ form \|⟨u,v⟩\| ≤ ‖u‖‖v‖) | (a) | **(a)** | needs square roots of positives (order 16) |
| triangle inequality, parallelogram law, polarisation | (a) | **(a)** | polarisation needs `2` invertible |
| Gram–Schmidt to an **orthogonal** basis | (a) | **(a)** | char ≠ 2 and definiteness; **no square roots** |
| Gram–Schmidt to an **orthonormal** basis | (a) | **(a)** | needs every positive scalar to be a square. Fails over `Q` — §4.9 |
| orthogonal complement, `V = W ⊕ W^⟂`, orthogonal projection, Bessel | (a) | **(a)** | finite dimension + non-degeneracy on `W`. No analysis |
| Riesz representation, finite dimensions | (a) | **(a)** | needs an orthonormal basis, hence square roots |
| existence and uniqueness of the adjoint `T*` | (a) | **(a)** | needs only a **non-degenerate** form, not an inner product (Conrad `bilinearform` Thm 3.16) |
| self-adjoint ⟹ eigenvalues real (when they exist) | (a) | **(a)** | nothing |
| **self-adjoint ⟹ minimal polynomial squarefree** | usually invisible | **(a)** | anisotropy only; works over **any** field (§2.13.1) |
| self-adjoint over an ordered field ⟹ no min-poly factor `x²+bx+c` with `b²<4c` | (a) | **(a)** | ordered field + squared Cauchy–Schwarz (§2.13.2) |
| **"a self-adjoint operator on a real inner product space has an eigenvalue"** | (c) | **(b)** | see §2.13.3–4. The residue after the two tier-(a) steps is exactly "`R` is real closed", i.e. FTA |
| Schur triangularisation | (b) | **(b)** | needs the char/min poly to split; conditional form is (a) |
| **real spectral theorem** | (c) | **(b)** | §2.13 |
| **complex spectral theorem** (normal ⟹ orthonormal eigenbasis) | (b) | **(b)** | Schur (needs FTA) + a tier-(a) row-by-row norm argument |
| positive operators: the six characterisations | (b) | **(a) given a spectral decomposition** | Axler 7.38's proof uses only the spectral theorem plus `√λ` for `λ ≥ 0` |
| unique positive square root | (b) | **(a) given a spectral decomposition** | Axler 7.39 is pure eigenspace bookkeeping |
| **polar decomposition** | (b) | **(a) given the SVD** | Axler 7.93 constructs `S` from the two orthonormal lists |
| **SVD** | (c) in numerical texts | **(b)** | Axler 7.70 = real/complex spectral theorem applied to the positive operator `T*T`, then pure algebra |
| operator norm `‖T‖ = s₁` | (c) | **(a) given the SVD** | attained at `e₁`; **no compactness** (contrast Conrad `matrixnorm` §3–4, which is tier (c) *because* it has no SVD yet) |
| **Eckart–Young** (best rank-≤k approximation) | (c) | **(a) given the SVD** | Axler 7.92: a `k+1`-vector linear-dependence count. The minimiser is exhibited, so no `inf` need exist a priori |
| **Courant–Fischer min-max** | (c) | **(a) given a spectral decomposition** | state it with `max`/`min`, not `sup`/`inf`: the extrema are attained at eigenvectors, so no completeness is used |
| **Cauchy interlacing** | (c) | **(a) given Courant–Fischer** | a dimension count on `V ∩ W` |
| **Weyl inequalities** | (c) | **(a) given Courant–Fischer** | a dimension count on an intersection of three subspaces |
| Rayleigh quotient as a *characterisation* `λ_max = max ⟨Tv,v⟩/⟨v,v⟩` | (c) | **(a) given a spectral decomposition** | attained at an eigenvector |
| Rayleigh quotient as an *existence proof* (maximise, then show the maximiser is an eigenvector) | (c) | **(c)** | this is the route that is genuinely locked above order 137 |
| Gershgorin disks | (a) | **(a)** | Axler 5.66; over `C`, arithmetic only |

**The single most consequential reading of this table.** Everything downstream of a spectral
decomposition — positive operators, square roots, polar, SVD, operator norm, Eckart–Young,
Courant–Fischer, interlacing, Weyl — is **tier (a)**. The *only* genuinely tier-(b) step in
the whole of page 4 is getting the orthonormal eigenbasis in the first place. So page 4
should be scaffolded as: one tier-(b) theorem (the spectral theorem), and then a long tier-(a)
development off it. Nothing on page 4 needs to be tier (c) at all. That is worth saying
explicitly, because Treil §6.4 and Conrad `matrixnorm` both take the tier-(c) route for the
operator norm purely because they have not built the SVD yet.

### 2.1 The minimal polynomial (page 1)

**Statement.** `V` finite-dimensional and nonzero over an **arbitrary field** `F`,
`T ∈ L(V)`. The set `{f ∈ F[x] : f(T) = 0}` is a nonzero ideal of `F[x]`; its unique monic
generator is the minimal polynomial `m_T`. `deg m_T ≤ dim V`; and `f(T) = 0 ⟺ m_T | f`.
Sources: **H&K p191 Definition + Ch. 4 §4.4 (polynomial ideals)**; **Axler 5.22, 5.24**;
**Conrad `minpolyandappns` Thm 4.4**; **Cambridge IB "Minimal polynomial"**.
**Tier (a), arbitrary field.** Prerequisites: `F[x]` is a PID (or just: the division
algorithm), and `dim L(V) = n²` finite so some power list is dependent.

**Axler's degree bound is sharper and cheaper than the Cayley–Hamilton one.** Axler 5.22
gets `deg m_T ≤ dim V` from the linear dependence of `v, Tv, …, T^n v` **without**
Cayley–Hamilton and without determinants. H&K gets it from Cayley–Hamilton (p194 Thm 4),
which in H&K rests on determinants (Ch. 5). For a library that wants determinants late,
Axler's route is strictly cheaper. Both tier (a).

**`m_T` is basis-independent and extension-independent.** Conrad `minpolyandappns` Thm 4.3
(operator = any matrix representing it) and **Conrad `potdiagonalizable` Thm 4(1)**: *for a
field extension `E/F` and `A ∈ M_n(F)`, the minimal polynomial of `A` in `F[x]` **is** its
minimal polynomial in `E[x]`.* Tier (a). Thm 4(2) is the companion: two matrices over `F`
are conjugate in `M_n(F)` ⟺ conjugate in `M_n(E)`. These two are exactly what license the
library to compute a minimal polynomial over the small field and reason over a big one.

**`m_T` and the characteristic polynomial have the same irreducible factors** (H&K p193
Thm 3, over an arbitrary field, phrased as "the same roots except for multiplicities";
Conrad `minpolyandappns` Cor 4.10 phrases it as *irreducible factors*, which is the correct
arbitrary-field wording — **prefer Conrad's**, because "roots" presupposes a splitting
field and drifts on a page that means to stay over `F`).

**`m_T` from stable subspaces and quotients.** Conrad `minpolyandappns` **Thm 7.4 / Cor 7.5**:
for `W` an `A`-stable subspace,
`lcm(m_{A|W}, m_{A on V/W}) | m_A | m_{A|W} · m_{A on V/W}`. Tier (a). **This is an
independent, purely page-1-internal reason for page 2 to build `V/W`** — see §2.7.

### 2.2 Diagonalisability criteria (page 1)

The two clean criteria, both over an **arbitrary field**, both **tier (a)**:

- **Eigenspace criterion.** `T` is diagonalisable ⟺ `V` has a basis of eigenvectors ⟺
  `Σ_i dim E(λ_i, T) = dim V` ⟺ `V = ⊕_i E(λ_i, T)`.
  H&K p187 **Theorem 2** (with the extra equivalent "the char. poly is `∏(x−c_i)^{d_i}` and
  `dim W_i = d_i`"); Axler **5.55**, **5.62**; Conrad `minpolyandappns` **Thm 2.2**.
- **Minimal-polynomial criterion.** `T` is diagonalisable ⟺ `m_T` is a product of
  **distinct linear factors over `F`**. H&K p204 **Theorem 6**; Conrad
  `minpolyandappns` **Thm 4.11**; Cambridge IB.
  H&K's proof is a clean tier-(a) argument via the "conductor" lemma (p202) and needs no
  splitting field. Axler's 5.62 is the same statement.

**Sufficient but not necessary:** `n` distinct eigenvalues ⟹ diagonalisable (Axler 5.58,
Conrad `minpolyandappns` Thm 3.2 + Lem 3.1). Conrad states the trap explicitly: "Theorem 3.2
will never detect a diagonalizable operator with a repeated eigenvalue."

**The direct-sum machinery both criteria need** is H&K §6.6–6.7: p209 Lemma (four
equivalents for independence of subspaces), p212 **Theorem 9** (a direct-sum decomposition
is the same data as a family of projections `E_i` with `E_i² = E_i`, `E_iE_j = 0`,
`ΣE_i = I`), p214 **Theorem 10** (each `W_i` is `T`-invariant ⟺ `T` commutes with every
`E_i`), p215 **Theorem 11** (the spectral resolution `T = Σ c_i E_i` of a diagonalisable
operator, with each `E_i` a **polynomial in `T`** by Lagrange interpolation). All tier (a),
all arbitrary field. **H&K Theorem 11 is the honest algebraic ancestor of the "spectral
projections" that page 4 wants** — the library can have spectral projections on page 1
already, for a *diagonalisable* operator, with no inner product and no analysis.

### 2.3 Simultaneous diagonalisation and simultaneous triangularisation (page 1)

- **Commuting diagonalisable operators are simultaneously diagonalisable.**
  Hypotheses: `V` finite-dimensional over an arbitrary field `F`; a family `𝔉` of operators
  that pairwise commute and are **each individually diagonalisable over `F`**. Then some
  basis diagonalises every member.
  **H&K p207 Theorem 8**; **Axler 5.76** (stated as an "⟺": for two operators,
  simultaneous diagonalisability ⟺ commutativity — note the ⟸ needs each to be
  diagonalisable, and Axler's `F ∈ {R,C}` is not needed); **Conrad `minpolyandappns`
  Thm 5.2** and **`simulcomm` Thm 5**. **Tier (a), arbitrary field.**
  Proof strategy: `A`-eigenspaces are `B`-stable (Axler 5.75, Conrad Lem 5.1/Lem 4);
  the restriction of a diagonalisable operator to a stable subspace is diagonalisable
  (Conrad Lem 5.1 — **this is the step that actually needs the minimal-polynomial criterion**,
  since `m_{B|W} | m_B` and a divisor of a squarefree split polynomial is one); induct.
- **Simultaneous triangularisation.** H&K p206 Lemma + **p207 Theorem 7**: a commuting
  family of **triangulable** operators is simultaneously triangulable. Axler **5.80**.
  **Tier (a) as stated** (the triangulability hypothesis carries the field cost); tier (b)
  in the corollary form "over an algebraically closed field" (H&K p207 Corollary).
- **The `C` shortcut is tier (b) and must not be the page's main statement.**
  Conrad `simulcomm` Thm 3 ("commuting operators on a finite-dimensional **C**-vector space
  have a common eigenvector") is tier (b); H&K Theorem 7 with an explicit triangulability
  hypothesis is the tier-(a) version of the same content.

### 2.4 Primary decomposition (page 1)

**H&K p220 Theorem 12 (Primary Decomposition Theorem).** `V` finite-dimensional over an
**arbitrary field** `F`, `T ∈ L(V)`, `m_T = p_1^{r_1}⋯p_k^{r_k}` with the `p_i` **distinct
irreducible monic** polynomials over `F`. Set `W_i = null(p_i(T)^{r_i})`. Then
`V = W_1 ⊕ ⋯ ⊕ W_k`, each `W_i` is `T`-invariant, and `m_{T|W_i} = p_i^{r_i}`.
p221 **Corollary**: the projections `E_i` are polynomials in `T`, so anything commuting with
`T` commutes with every `E_i`. **Tier (a).**
Proof strategy: `f_i = m_T / p_i^{r_i}`; the `f_i` are collectively coprime, so
`Σ g_i f_i = 1` for some `g_i`; set `E_i = g_i(T)f_i(T)`.
Prerequisites: unique factorisation in `F[x]` and Bézout. **This is the only decomposition
theorem on page 1 that survives over an arbitrary field with no splitting hypothesis
whatsoever**, and it is what page 2 will refine into Jordan form once the `p_i` are linear.

**Jordan–Chevalley, and the field-hypothesis trap.** H&K p222 **Theorem 13**: *if `m_T`
splits into linear factors over `F`*, then `T = D + N` with `D` diagonalisable, `N`
nilpotent, `DN = ND`, both polynomials in `T`, and the pair is unique. Tier (a) **given the
splitting hypothesis**; tier (b) as the p223 Corollary over an algebraically closed field.
**Do not confuse this with H&K p267 Theorem 13**, the `T = S + N` decomposition with `S`
*semi-simple*, which H&K states only for **`F` a subfield of `C`** and proves through a
Taylor's-formula lemma (p266) stated in **characteristic zero**. Petersen's *Additions*
Exercise 23 gives an effective algorithm "for linear operators over any field of
**characteristic 0**". So: the *split* Jordan–Chevalley is arbitrary-field; the *semisimple*
Jordan–Chevalley as presented in these sources is characteristic-0. Neither source in this
harvest proves the characteristic-`p` perfect-field version.

### 2.5 Semisimple, potentially diagonalisable, and a real distinction the sources make

Three conditions on `m_T`, over an arbitrary field, all **tier (a)**:

| condition on `m_T` | equivalent to | source |
|---|---|---|
| product of **distinct linear** factors over `F` | `T` diagonalisable over `F` | H&K p204 Thm 6; Conrad `minpolyandappns` Thm 4.11 |
| **squarefree** (no repeated irreducible factor) | `T` **semisimple** (every invariant subspace has an invariant complement) | H&K p264 **Theorem 11**; Conrad `semisimple` **Thm 10** |
| **separable** (no repeated root in a splitting field) | `T` **potentially diagonalisable** (diagonalisable over *some* extension field) | Conrad `potdiagonalizable` **Thm 6** |

**Squarefree and separable are not the same condition**, and this harvest's two sources use
the two different words deliberately. Over a **perfect** field (characteristic 0, or finite,
or algebraically closed) they coincide, and then semisimple ⟺ potentially diagonalisable.
Over an imperfect field of characteristic `p` — the standard example is `F = 𝔽_p(t)` and
`m_T = x^p − t`, irreducible hence squarefree, but with a single root of multiplicity `p` in
`F̄` — an operator can be **semisimple but not potentially diagonalisable**. H&K sidesteps
this entirely by moving to subfields of `C` at p266; Conrad states it correctly. **The
scaffolder must pick the right word per theorem**: `semisimple ⟺ squarefree`,
`potentially diagonalisable ⟺ separable`. Getting this wrong is a false theorem, not a
stylistic slip.
Corollaries worth carrying: **H&K p265 Corollary** — over an algebraically closed field,
semisimple ⟺ diagonalisable; **Conrad `semisimple` Cor 11** — characteristic polynomial
squarefree ⟹ semisimple; **Conrad `potdiagonalizable` Cor 5** — a matrix that diagonalises
over *some* extension already does so over the finite extension generated by its eigenvalues.

### 2.6 Triangularisation and Schur (page 2)

- **H&K p203 Theorem 5 (the arbitrary-field triangulation theorem).** `T` on a
  finite-dimensional `V` over an **arbitrary field** `F` is triangulable ⟺ `m_T` is a
  product of linear polynomials over `F`. **Tier (a).** Proof: the p202 "conductor"
  lemma, applied repeatedly to build the flag. Corollary (tier (b)): over an algebraically
  closed field, every matrix is similar to a triangular one.
  Axler's counterpart is **5.44** (necessary and sufficient condition) and **5.47** (the
  `F = C` corollary).
- **Cayley–Hamilton falls out.** H&K notes at p204 that Theorem 5 gives a second proof of
  Cayley–Hamilton (trivial for a triangular matrix, then descend). Axler's **8.30** proves
  it from the generalized eigenspace decomposition; **Treil Ch. 9 §1** proves it
  independently; **Petersen** *Additions* Exercise 1 asks for the direct upper-triangular
  proof. Note the *triangular* proof of Cayley–Hamilton is tier (b) unless the splitting
  hypothesis is carried; the **`F[x]`-module / adjugate proof is tier (a) over any
  commutative ring** and is what a library wanting Cayley–Hamilton over an arbitrary field
  should use. No source in this harvest gives the adjugate proof — see §5.
- **Schur triangularisation (orthonormal flag).** H&K p316 **Theorem 21**: `V` a
  finite-dimensional **complex** inner product space, `T` any operator ⟹ some **orthonormal**
  basis makes `[T]` upper-triangular. Axler **6.37 / 6.38**; Treil **Ch. 6 §1**.
  **Tier (b)**: the only non-algebraic ingredient is that `m_T` (equivalently the char.
  poly) splits, which over `C` is the FTA. **Conditional tier-(a) form:** *if `m_T` splits
  over `F` and `V` carries an anisotropic form with Gram–Schmidt available, then some
  orthonormal basis triangulates `T`* — the proof is Gram–Schmidt applied to a triangulating
  basis (H&K p203 Thm 5 then p280 Thm 3), and both halves are tier (a).

### 2.7 Quotient spaces and the first isomorphism theorem — why page 2 must carry them

Three independent, source-backed reasons, none of which is "for completeness":

1. **Conrad `minpolyandappns` Thm 7.4 / Cor 7.5** computes `m_A` from `m_{A|W}` and
   `m_{A on V/W}`. Without `V/W` the theorem cannot even be stated, and it is the
   practical algorithm for the minimal polynomial.
2. **The block-triangular argument for triangularisation and for Jordan form** is naturally
   an induction on `V/W`: `T` induces `T̃` on `V/W`, and the flag is pulled back.
   Axler **3.106/3.107** define `T̃` and compute its null space and range; H&K's
   Appendix **p396 Theorem** is the complement criterion (`V = W ⊕ W′ ⟺ Q|_{W′}` is an
   isomorphism onto `V/W`), which is exactly the bridge between a quotient argument and a
   direct-sum argument.
3. **Petersen** *Additions*, hint to Exercise 2.6.12(b), records that "many people seem to
   think that this problem can only be done using quotient spaces" and then supplies a
   quotient-free route — i.e. the quotient is a genuine convenience, not a necessity, and
   the source says so. Useful for the page's own framing.

**Statements.** `V/U` with `π : V → V/U`; `dim V/U = dim V − dim U` (Axler 3.105);
`V/U` is a vector space (3.103); **first isomorphism theorem**: `T : V ↠ Z` linear onto
with null space `W` ⟹ `Z ≅ V/W` (**H&K p397 Theorem**; **Cambridge IB**, where it is
stated together with rank–nullity, in the "Linear maps" chapter, i.e. *before* any
endomorphism theory). **Universal property**: any linear `T : V → Z` vanishing on `U`
factors uniquely through `π` — Conrad `universalmapping.pdf` is the source that treats this
as the defining property rather than a corollary. **All tier (a), arbitrary field, no
finiteness needed for the universal property.**

### 2.8 Generalised eigenspaces, nilpotent operators, Jordan form (page 2)

- **Null spaces stop growing.** `null T⁰ ⊆ null T¹ ⊆ ⋯`, and once two consecutive terms
  agree they all agree; `null T^{dim V} = null T^{dim V + 1} = ⋯`. Axler **8.1, 8.2, 8.3**.
  **Tier (a), arbitrary field**, pure dimension counting.
- **Generalised eigenspace** `G(λ,T) = null (T − λI)^{dim V}` (Axler **8.19, 8.20**);
  generalised eigenvectors for distinct eigenvalues are independent (**8.12**).
  Tier (a) — but the statement presupposes `λ ∈ F`.
- **Nilpotent operators.** `N` nilpotent ⟺ `N^{dim V} = 0` (Axler **8.16**) ⟺ `m_N = x^k`
  ⟺ some basis makes `[N]` strictly upper-triangular (Axler **8.18**, Conrad
  `minpolyandappns` **Thm 6.1, Cor 6.3**). **Tier (a), arbitrary field.**
  **The Jordan structure of a nilpotent operator is tier (a) over an arbitrary field** —
  this is the point most textbooks bury by doing nilpotents only after passing to `C`.
  Axler **8.45** says it plainly: *"This special case holds on real vector spaces as well as
  complex vector spaces."* H&K gets the same thing from the cyclic decomposition (p244–245).
- **Generalised eigenspace decomposition.** `V = G(λ_1,T) ⊕ ⋯ ⊕ G(λ_m,T)` — Axler **8.22**,
  stated by Axler for `F = C`, but the honest hypothesis is **`m_T` splits over `F`**, and
  then the theorem is exactly H&K's primary decomposition (§2.4) with linear `p_i`.
  **Tier (a) given the splitting hypothesis; tier (b) as Axler states it.**
- **Jordan form.** Axler **8.46**: `F = C` ⟹ a Jordan basis exists. H&K §7.3 (pp. 244–251):
  same content, assembled from primary decomposition + the cyclic decomposition of each
  nilpotent `T|_{W_i} − c_i I`, and H&K states the char.-poly-splits hypothesis explicitly
  rather than saying `C`. **Prefer H&K's phrasing** — the honest theorem is *"`m_T` splits
  over `F` ⟹ a Jordan basis exists"*, which is tier (a), and `F = C` is a tier-(b) corollary
  of the FTA. Treil **Ch. 9 §4–5** gives the "dot diagram" uniqueness proof.
- **Uniqueness of the Jordan type** is the rank sequence `rank N, rank N², …`, not the rank
  alone (Treil §9.4.3; §4.4 below is the counterexample).

### 2.9 Cyclic vectors, cyclic decomposition, rational canonical form (page 2)

This is the block that **Axler and Treil simply do not have**; Hoffman & Kunze Ch. 7 is the
source, and the whole block is **tier (a) over an arbitrary field**.

- **`Z(α;T)` and the `T`-annihilator `p_α`** (H&K p228 Definition). **H&K p228 Theorem 1**:
  `deg p_α = dim Z(α;T)`; `p_α` is the minimal polynomial of `T|_{Z(α;T)}`; and
  `α, Tα, …, T^{k−1}α` is a basis of `Z(α;T)` where `k = deg p_α`.
- **H&K p230 Theorem 2**: `U` has a **cyclic vector** ⟺ some ordered basis represents `U`
  by the **companion matrix** of its minimal polynomial.
- **H&K p230 Corollary**: for the companion matrix of a monic `p`, `p` is **both** the
  minimal and the characteristic polynomial.
- **THE CYCLIC-VECTOR THEOREM the commission named.** **H&K p237 Corollary**:
  (a) there exists `α ∈ V` whose `T`-annihilator **is** the minimal polynomial of `T`;
  (b) *`T` has a cyclic vector ⟺ the characteristic and minimal polynomials of `T` are
  equal.* **Tier (a), arbitrary field, no splitting hypothesis.** Part (a) is the sharp
  statement and does the work; part (b) follows by comparing degrees, since a cyclic vector
  `α` gives `dim Z(α;T) = deg p_α = dim V`.
  Route: (a) is a corollary of the **Cyclic Decomposition Theorem** (H&K p233 **Theorem 3**),
  which is the hard theorem of the chapter. If the scaffolder wants to avoid it, the
  alternative route is the **PID structure theorem** applied to `V` as an `F[x]`-module —
  Conrad `modulesoverPID.pdf` and `alignedbases.pdf`. **Cheaper only if the library already
  has modules over a PID**; otherwise H&K's hand proof is self-contained.
  There is also a control-theoretic framing in **Petersen** *Additions* §11 (Lemma 11.1),
  where a cyclic vector is a "controllable" state.
- **H&K p233 Theorem 3 (Cyclic Decomposition).** For a `T`-admissible `W_0` there are
  nonzero `α_1,…,α_r` with annihilators `p_1,…,p_r` such that
  `V = W_0 ⊕ Z(α_1;T) ⊕ ⋯ ⊕ Z(α_r;T)` **with `p_{k}` dividing `p_{k−1}`**, and `r` and the
  `p_i` are unique. p236 Corollary: every `T`-admissible subspace has a `T`-invariant
  complement.
- **H&K p237 Theorem 4 (Generalized Cayley–Hamilton)** — the precise relation between `m_T`
  and the char. poly, including the multiplicity formula
  `d_i = nullity(f_i(T)^{r_i}) / deg f_i`.
- **H&K p238 Theorem 5**: every `n × n` `B` over `F` is similar over `F` to **one and only
  one** matrix in **rational form**. §7.4 (pp. 251–261) then computes the invariant factors
  from the **Smith normal form of `xI − A` over `F[x]`** (Theorems 6–10 and the Corollary),
  which is the effective algorithm. Petersen *Additions* §10 (Lemma 10.1, Prop 10.2,
  Cor 10.3, Lemma 10.4, **Theorem 10.5**) is a second, independent treatment.
- **Normal operators have an *orthogonal* rational canonical form.** H&K p355 **Theorem 20**
  and p356 **Corollary**: a normal matrix over `R` (resp. `C`) is real-orthogonally
  (resp. unitarily) similar to a matrix in rational canonical form; and **two normal
  matrices are unitarily equivalent ⟺ they are similar** (p357 Theorem 21). This is a
  genuinely nice bridge between pages 2 and 4 that no other source in this harvest carries.

### 2.10 Inner products, Cauchy–Schwarz, norms (page 3)

**Definition.** Axler **6.2**: positivity, definiteness, additivity and homogeneity **in the
first slot**, conjugate symmetry. H&K §8.1 (p270) fixes `F ∈ {R, C}` for its whole chapter:
"Throughout this chapter we consider only real or complex vector spaces."

**Cauchy–Schwarz. Tier (a), and the library should prove the squared form first.**
The inequality `⟨u,v⟩² ≤ ⟨u,u⟩⟨v,v⟩` (real case; `|⟨u,v⟩|² ≤ ⟨u,u⟩⟨v,v⟩` in the Hermitian
case) needs only an ordered field and expanding `⟨u⟨v,v⟩ − v⟨u,v⟩, ·⟩ ≥ 0`. **No square
roots.** The familiar `|⟨u,v⟩| ≤ ‖u‖‖v‖` is the squared form plus `thm-nth-roots-exist`
(order 16). The library already has `thm-cauchy-schwarz-finite` at order 16, so page 3
should *cite* it and prove the abstract-inner-product version, recording which form it is.
Sources: H&K p277 **Theorem 1(iii)**; Axler **6.14**; Treil §5.1.4.

**Norm, triangle inequality, parallelogram law, polarisation.** Axler **6.7, 6.9, 6.17,
6.21**. All tier (a). **The parallelogram law needs nothing; polarisation needs `2`
invertible**, i.e. `char F ≠ 2` — which is the same hypothesis as the published order-92
page's `def-quadratic-form-and-polar-form`. The commission asked about
**Jordan–von Neumann** (a norm comes from an inner product ⟺ it satisfies the parallelogram
law). **No source in this harvest proves it** — Axler 6.21 gives only the forward direction,
and Exercise 6A asks for special cases. Flagged in §5: the converse over `R` is
elementary-but-fiddly (define `⟨u,v⟩` by polarisation, prove additivity from the
parallelogram law, then `Q`-homogeneity, then **`R`-homogeneity needs continuity of the
norm** — so the full Jordan–von Neumann theorem is **tier (c)**, or tier (a) if restricted
to `Q`-homogeneity. That is an important and easily-missed field/tier fact.)

### 2.11 Orthogonal basis vs orthonormal basis — the relation page 3 must state as a theorem

The orchestrator is right that these must not drift. Here is exactly how the careful sources
relate them, and the relation is a **strict tower of three hypotheses**.

1. **Orthogonal basis: an arbitrary field of characteristic ≠ 2, no definiteness needed.**
   **Conrad `bilinearform` §4**: Definition 4.1 (orthogonal basis), **Lemma 4.5** (if `B` is
   not identically zero and `char F ≠ 2` then `B(v,v) ≠ 0` for some `v`), **Lemma 4.6**
   (`B(v,v) ≠ 0` ⟹ `V = Fv ⊥ v^⟂`, "**notice this is valid in characteristic 2**"),
   **Theorem 4.7**: *"There is an orthogonal basis for `V` when `F` does not have
   characteristic 2."* Degenerate or not. **Tier (a).** This is the library's published
   `thm-symmetric-bilinear-forms-have-an-orthogonal-basis` at order 92.
   H&K's counterpart is **p369 Theorem 3**, stated over **characteristic zero** — H&K is
   strictly weaker than the truth here, and **Conrad's `char ≠ 2` is the correct
   hypothesis**. Axler **9.12** states it for `F ∈ {R, C}` only.
2. **Orthonormal basis: additionally needs every relevant positive scalar to be a square.**
   Conrad says this in as many words, and it is the quotable sentence for the page:
   > "While Euclidean space has the more refined notion of an orthonormal basis, we will find
   > essentially no use for this idea. The reason is that it usually doesn't exist! An
   > orthonormal basis should be an orthogonal basis `{e_1,…,e_n}` in which `B(e_i,e_i) = 1`
   > for all `i`. But there is no orthonormal basis in Example 4.2 using `Q²` in place of
   > `R²` since the equation `2x² + 3y² = 1` has no rational solutions."
   > — Conrad, *Bilinear Forms*, §4, p. 26–27
   So: **the passage from orthogonal to orthonormal is exactly the normalisation
   `e_i ↦ e_i/√(B(e_i,e_i))`, and it is available precisely when each `B(e_i,e_i)` is a
   square in `F`.** For a positive-definite form over `R`, `thm-nth-roots-exist` (order 16)
   supplies it. Over `Q` it fails (§4.9). **The theorem page 3 must state is therefore:**
   *let `⟨,⟩` be a positive-definite symmetric (or Hermitian) form on a finite-dimensional
   space over an ordered field in which every positive element is a square; then every
   orthogonal basis normalises to an orthonormal one, and conversely.* Anything vaguer lets
   the two notions drift.
3. **Simultaneously orthonormal for one form and diagonal for another** — the Principal Axis
   Theorem. Axler **9.13**: `V` a **real** inner product space, `ρ` a symmetric bilinear form
   ⟹ `ρ` has a diagonal matrix with respect to some **orthonormal basis of `V`**. H&K p323
   **Theorem 4 (Principal Axis Theorem)** is the Hermitian version. **This is the real
   spectral theorem in disguise** — Axler's proof of 9.13 literally builds the self-adjoint
   `T` with `M(T) = M(ρ)` and cites 7.29. So it is **tier (b)** and belongs on **page 4**,
   not page 3. Axler's Exercise 9A.7 records that 9.13 **fails if `F = R` is dropped**.

**Two more relations to record, both source-backed.**
- **Sylvester's law of inertia** (published, order 92; H&K p370 **Theorem 5**; Treil §7.3,
  who spells it "Silvester") says the *signs* on the diagonal are invariant; getting from
  `diag(λ_1,…,λ_r,0,…)` to `diag(±1,…,±1,0,…)` is again the square-root step, so inertia
  over `R` sits at the same tier as orthonormalisation. Over `C` (H&K p370 **Theorem 4**)
  every nonzero `λ` is a square, so a symmetric form is `x_1y_1 + ⋯ + x_ry_r` and there is
  no signature at all.
- **The adjoint does not need an inner product.** Conrad `bilinearform` **Theorem 3.16(3),(4)**
  and **3.21, 3.22**: over any field, a **non-degenerate** bilinear form on a
  finite-dimensional `V` gives a unique `A*` with `B(v, Aw) = B(A*v, w)`, and every bilinear
  form is `B(v, Aw)`. **Tier (a).** So page 3's adjoint theory is really non-degeneracy
  theory, and positive-definiteness is used only for the *norm* consequences. H&K p293
  **Theorem 7** proves existence via Riesz (hence via an orthonormal basis); **Conrad's
  route is cheaper and more general** — a fact worth putting in the page's remark.

### 2.12 The rest of page 3, all tier (a)

- **Gram–Schmidt.** H&K p280 **Theorem 3** (with the span-preservation property);
  Axler **6.32/6.33**; Treil §5.3.1; Cambridge IB. `span(v_1,…,v_k) = span(e_1,…,e_k)` for
  every `k` is the load-bearing clause (it is what makes Schur and QR work).
  p281 **Corollary**: every finite-dimensional inner product space has an orthonormal basis.
- **Orthogonal complement and projection.** H&K p284 **Theorem 4** (`α` is a best
  approximation to `β` in `W` ⟺ `β − α ⊥ W`; unique when it exists; exists when `W` is
  finite-dimensional); p285 Definitions; p286 **Theorem 5** (`E` idempotent onto `W`,
  `null E = W^⟂`, **`V = W ⊕ W^⟂`**); Axler **6.49, 6.51, 6.52, 6.55, 6.57, 6.61**.
  **`(W^⟂)^⟂ = W` needs finite dimension** (Axler 6.52) — §4.7 is the counterexample.
- **Bessel's inequality.** H&K p287 **Corollary**: `Σ_k |(β|α_k)|²/‖α_k‖² ≤ ‖β‖²`, with
  equality ⟺ `β` is in the span. Tier (a), a one-line consequence of Theorem 5.
- **Riesz representation, finite dimensions.** H&K p291 **Theorem 6**; Axler **6.42**;
  Treil §8.2.1. Tier (a) given an orthonormal basis. **Finite-dimensionality is essential**
  and the sources are careful about it.
- **Adjoints.** H&K p293 **Theorems 7, 8**, p294 Corollary (`[T*] = [T]*` in an orthonormal
  basis), p297 **Theorem 9** (the four algebraic laws; H&K's gloss: "the mapping `T → T*` is
  a conjugate-linear anti-isomorphism of period 2"); Axler **7.1, 7.4, 7.5, 7.6, 7.9**.
- **Isometries, orthogonal and unitary maps.** H&K p300 **Theorem 10** (three equivalents),
  p302 **Theorem 11** (`T` preserves inner products ⟺ `‖Tα‖ = ‖α‖` — this is polarisation,
  so it needs `char ≠ 2`), p303 **Theorems 12, 13**; Axler **7.44, 7.49, 7.51, 7.53, 7.54,
  7.56, 7.57**. Tier (a). Treil §6.5 "Structure of orthogonal matrices" is the only source
  here that classifies real orthogonal matrices into `2×2` rotation blocks — and that
  classification is **tier (b)**, since it is the real spectral theorem for normal operators.
- **QR.** H&K p305 **Theorem 14** + p307 **Corollary** (`B = N·U`, `N` upper-triangular with
  positive diagonal, `U` unitary — note H&K's factor order and side are the transpose of the
  modern `A = QR`); Axler **7.58/7.59**. Tier (a): it is Gram–Schmidt written as a matrix
  identity. **Cholesky** (Axler §7D, `7.61/7.62`) is the positive-definite companion, also
  tier (a) given square roots.
- **Gram matrices and the Gram determinant.** H&K p332 **Theorem 7** (`M_{jk} = f(α_k, α_j)`;
  `f` is positive on `W` ⟺ `M = M*` and every principal minor has positive determinant) and
  p328 **Theorem 6 (Sylvester's criterion)**. Tier (a) — H&K's proof of Theorem 6 is an
  induction on principal minors and uses no analysis. **Note the library already publishes
  `thm-sylvesters-criterion-for-positive-definiteness` at order 92**, so page 3 should cite
  it rather than reprove it, and add only the Gram-matrix form.
- **The pseudoinverse and least squares.** Axler **6.68, 6.69, 6.70**; Treil §5.4 and §6.4.5.
  Tier (a). Axler places the pseudoinverse in 6C (before any spectral theory), which is the
  cheap placement; Treil places it after the SVD, which is the expensive one.

### 2.13 The spectral theorem — the full tier analysis (the commission's central question)

I separate the argument into four steps, because **they sit at three different tiers**, and
the standard textbook presentations fuse them.

#### 2.13.1 Step 1 — self-adjoint ⟹ the minimal polynomial is squarefree. TIER (a), ANY FIELD.

**Statement.** Let `F` be any field, `V` finite-dimensional over `F`, `B` a symmetric (or
Hermitian) bilinear form on `V` that is **anisotropic** (`B(v,v) ≠ 0` for `v ≠ 0`) — in
particular any inner product. Let `T` be self-adjoint for `B`. Then `m_T` has no repeated
irreducible factor.

**Proof (three lines).** Suppose `p²| m_T` with `p` irreducible; write `m_T = p²g`. For any
`v`, put `u = p(T)g(T)v`. Since `T* = T` and `p` has coefficients in `F`, `p(T)* = p(T)`, so
`B(u,u) = B(p(T)·p(T)g(T)v, v) = B(m_T(T)v, v) = 0`. Anisotropy gives `u = 0`, so
`p g` already annihilates `T`, contradicting minimality.

**This is exactly the first half of Hoffman & Kunze p349 Theorem 17**, and H&K prove it in
that shape: p349 **Lemma 1** (`N` normal ⟹ `null N = (range N)^⟂`), p349 **Lemma 2**
(`N` normal and `N²α = 0` ⟹ `Nα = 0`), p350 **Lemma 3** (`f(T)` is normal), then "Suppose
some prime factor `p_j` of `p` is repeated … this contradicts the assumption that `p` has
least degree." H&K state it for **normal**, which subsumes self-adjoint. **No analysis, no
FTA, no field hypothesis is used in this half.**

**Consequence, immediately, and it is the strongest unconditional thing pages 1 and 3 can
say.** Combining with §2.5: *a self-adjoint (or normal) operator on a finite-dimensional
space with an anisotropic symmetric/Hermitian form over any field is **semisimple**
(H&K p264 Thm 11 / Conrad `semisimple` Thm 10), and if `m_T` is moreover separable it is
**diagonalisable over some finite extension of `F`** (Conrad `potdiagonalizable` Thm 6 and
Cor 5).* All tier (a). **This belongs on page 1 or page 3, not page 4.**

#### 2.13.2 Step 2 — over an ORDERED field, no negative-discriminant quadratic factor. TIER (a).

**Statement (Axler 7.26, restated at its true generality).** Let `F` be an **ordered field**,
`V` finite-dimensional with a positive-definite symmetric form, `T` self-adjoint, and
`b, c ∈ F` with `b² < 4c`. Then `T² + bT + cI` is invertible. Consequently `m_T` has no
irreducible quadratic factor `x² + bx + c` with `b² < 4c`.

**Axler's proof, and why it is cheaper than he needs.** Axler (pdf p. 244) writes
`⟨(T²+bT+cI)v, v⟩ = ‖Tv‖² + b⟨Tv,v⟩ + c‖v‖² ≥ (‖Tv‖ − |b|‖v‖/2)² + (c − b²/4)‖v‖² > 0`,
citing Cauchy–Schwarz **6.14** in the `‖·‖` form. **The square roots are avoidable.** Put
`a = ⟨Tv,Tv⟩`, `m = ⟨Tv,v⟩`, `n = ⟨v,v⟩ > 0`. Squared Cauchy–Schwarz gives `m² ≤ an`, so
`a ≥ m²/n` and
`a + bm + cn ≥ (1/n)(m² + bmn + cn²) = (1/n)((m + bn/2)² + (c − b²/4)n²) > 0`,
which lives entirely in the ordered field. **So step 2 needs an ordered field and nothing
else — no square roots, no completeness.** Getting `T²+bT+cI` invertible from injective is
the finite-dimensional rank–nullity, tier (a). Axler's 7.35(c) records the same operator is
in fact *positive*.

#### 2.13.3 Step 3 — the residue: the minimal polynomial must SPLIT. This is the whole cost.

After steps 1 and 2, over an ordered field with a positive-definite form, `m_T` is
squarefree and has no quadratic irreducible factor of negative discriminant. To conclude
that `T` is diagonalisable one needs **every irreducible factor of `m_T` to be linear**, and
steps 1–2 do not give that. What is missing is exactly:

> every irreducible polynomial over `F` has degree ≤ 2, and every irreducible quadratic has
> negative discriminant

— which is precisely "`F` is a **real closed field**" (equivalently, by Artin–Schreier,
`F` is ordered and `F(i)` is algebraically closed). **For `F = R`, "R is real closed" is
equivalent to the FTA and is not algebraic**: the standard proofs supply it from the IVT
(every odd-degree real polynomial has a root) plus square roots of positives. So:

- **Tier (b):** given the FTA (order 139), `m_T` splits over `C`, its roots are real by
  H&K p312 Theorem 15 / Axler 7.12 (tier (a)), and step 1 makes it squarefree — done.
- **Tier (c):** the classical Rayleigh route — maximise `⟨Tv,v⟩` over the unit sphere by the
  EVT, show the maximiser is an eigenvector, pass to the orthogonal complement (H&K p314
  Theorem 17 is the tier-(a) half of this), induct. Only legal at order ≥ 137, and locked.
- **There is no tier-(a) route, and the library must not pretend there is.** §4.8 is the
  concrete witness: `[[0,1],[1,1]]` over `Q` is symmetric, self-adjoint for the standard dot
  product, with `m_T = x² − x − 1` irreducible over `Q`. It has **no eigenvalue in `Q`**.
  Note that its discriminant is `5 > 0`, so step 2 correctly says nothing about it. The
  gap is real, not an artefact of the proof.

#### 2.13.4 Step 4 — what each source actually does, and the conditional form the library should adopt

| source | its statement | what its proof of "an eigenvalue exists" uses |
|---|---|---|
| **H&K p313 Theorem 16** | every self-adjoint operator on a positive-dimensional finite-dimensional inner product space has a characteristic vector | **explicitly the FTA**: "The characteristic polynomial, `det(xI − A)`, is a polynomial of degree `n` over the complex numbers; **every polynomial over `C` of positive degree has a root**." Then `c` is real by Theorem 15, and over `R` one re-solves `(A − cI)X = 0` over `R`. **Tier (b).** H&K's own comment (1) after the proof is worth quoting: the existence half "had nothing to do with the fact that `A` was Hermitian" |
| **Axler 7.27 + 7.29** | `T` self-adjoint ⟹ `m_T = (z−λ_1)⋯(z−λ_m)` with `λ_i ∈ R`; then the real spectral theorem | for `F = R`: cites **4.16, "factorization of a polynomial over R"**, which Axler derives from the FTA (4.12/4.13) — then **7.26** kills the quadratic factors (tier (a)). So Axler's route is **FTA-for-the-factorisation + tier (a) for everything else**. This is the cheapest of the three and is the route to copy |
| **Treil Ch. 6 §1–2** | Schur first, then the spectral theorem from Schur | Schur needs the char. poly to split over `C` — the FTA. **Tier (b)** |
| **Conrad `fundthmalglinear`** | Thm 1 ⟺ Thm 2: FTA ⟺ every complex matrix has an eigenvector | Derksen's proof by induction on the 2-adic valuation of `n`. It is *linear-algebraic in shape* but still consumes the two analytic facts about `R` (every positive real has a square root; every odd-degree real polynomial has a root). **Not a way around the FTA — a way of deriving the FTA from a smaller analytic input.** Cor 4 (odd-dimensional real: commuting operators have a common eigenvector) is the odd-degree/IVT fact in operator clothing |

**The scaffolding recommendation this analysis produces.** Because a tier-(a) proof can be
re-homed below order 137 and a tier-(b)/(c) one cannot, the four pages should be split as:

- **Page 3 (order 94)** carries the **unconditional tier-(a)** results: `T` self-adjoint ⟹
  eigenvalues (where they exist) are real; **`m_T` squarefree**; `T` semisimple; over an
  ordered field, no negative-discriminant quadratic factor of `m_T`; `W` invariant ⟹ `W^⟂`
  invariant under `T*` (H&K p314 Thm 17); and the **conditional spectral theorem**:
  > *If `T` is self-adjoint and `m_T` splits over `F`, then `V` has an orthonormal basis of
  > eigenvectors of `T`.*
  That conditional statement is **tier (a)** and is a genuine theorem, not a dodge — its
  proof is step 1 (squarefree) + the splitting hypothesis + H&K p314 Theorem 18's induction.
- **Page 4 (order 141)** discharges the hypothesis with the FTA and states the
  **unconditional real and complex spectral theorems** (H&K p335 Theorem 9; Axler 7.29,
  7.31), plus everything downstream.

This split costs one extra theorem statement and buys the library a spectral theory that is
mostly legal 47 places earlier in the reading order.

#### 2.13.5 The rest of the spectral block

- **Self-adjoint ⟹ real eigenvalues; distinct eigenvalues ⟹ orthogonal eigenvectors.**
  H&K p312 **Theorem 15**; Axler **7.12**, **7.22**. **Tier (a).** H&K flags explicitly that
  Theorem 15 asserts nothing about existence.
- **Normal operators, tier (a) facts.** `Tα = cα ⟺ T*α = c̄α` (H&K p315 **Theorem 19**;
  Axler 7.21); `‖Tv‖ = ‖T*v‖` (Axler 7.20); an upper-triangular matrix of a normal operator
  in an orthonormal basis is diagonal (H&K p315 **Theorem 20**); everything commuting with a
  normal `T` commutes with `T*` and every invariant subspace is reducing (H&K p354
  **Theorem 19**). All tier (a).
- **Complex spectral theorem.** H&K p317 **Theorem 22**; Axler **7.31**; Treil §6.2.
  **Tier (b)** — Schur is the only expensive ingredient; the row-by-row `‖Te_k‖ = ‖T*e_k‖`
  argument that turns the triangular matrix diagonal is tier (a).
- **Spectral resolution and spectral projections.** H&K p335 **Theorem 9** gives
  `T = c_1E_1 + ⋯ + c_kE_k` with the `E_j` **orthogonal** projections, and p336 Corollary
  makes each `E_j = e_j(T)` a Lagrange-interpolation polynomial in `T`. **Tier (a) given the
  spectral theorem**, and the tier-(a) ancestor with no inner product at all is H&K p215
  **Theorem 11** (§2.2). The functional calculus `f(T)` (H&K p337 Definition + **Theorem 10**,
  p340 **Theorem 11**) is likewise tier (a) given the decomposition.
- **Normal but not diagonalisable over `R`.** H&K p353 **Theorem 18**: `T` normal on a
  finite-dimensional **real** inner product space with `m_T = (x−a)² + b²`, `b ≠ 0` ⟹ an
  orthonormal basis in which `[T]` is block-diagonal with `2 × 2` blocks `[[a, b],[−b, a]]`.
  Together with p349 Theorem 17 ("each `p_j` occurs with multiplicity 1 and has **degree 1
  or 2**"), this is the complete real normal classification. Note **the "degree 1 or 2" half
  of Theorem 17 is tier (b)** — H&K gets it by factoring over `C` — while the
  "multiplicity 1" half is tier (a) (§2.13.1). **The scaffolder must not let one item assert
  both halves at the same tier.**

### 2.14 Positive operators, square roots, polar decomposition, SVD (page 4)

Every result in this section is **tier (a) once a spectral decomposition is in hand.**
I verified this by reading the proofs, not by inference.

- **Axler 7.38, characterizations of positive operators.** `T` positive ⟺ self-adjoint with
  nonnegative eigenvalues ⟺ diagonal with nonnegative entries in some orthonormal basis ⟺
  has a positive square root ⟺ has a self-adjoint square root ⟺ `T = R*R`. The proof cycles
  (a)⇒(b)⇒(c)⇒(d)⇒(e)⇒(f)⇒(a); the only non-formal step is (b)⇒(c), which cites the spectral
  theorem, and (c)⇒(d), which sets `Re_k = √λ_k e_k` — **`√λ_k` for `λ_k ≥ 0` is order 16**.
  H&K's counterpart is p340 **Theorem 12**.
  *Over `C` the self-adjointness can be dropped from the definition* (Axler 7.14); **over `R`
  it cannot** — see §4.10.
- **Axler 7.39, uniqueness of the positive square root.** The proof is pure eigenspace
  bookkeeping: any positive `R` with `R² = T` has an orthonormal eigenbasis, and matching
  `λ`-eigenvectors forces `Rv = √λ v`. **Tier (a).** H&K p341 **Theorem 13** is the same.
  Axler's marginal note is a good `ex-` seed: *a positive operator can have infinitely many
  square roots — the identity on `V` with `dim V > 1` does — but only one positive one.*
- **Singular values.** Axler **7.65**: the singular values of `T` are the eigenvalues of
  `√(T*T)`, listed with multiplicity. `7.64` (`T*T` is positive and `null T*T = null T`) is
  tier (a).
- **SVD, Axler 7.70.** `T ∈ L(V,W)` with positive singular values `s_1,…,s_m` ⟹ orthonormal
  lists `e_1,…,e_m ⊂ V` and `f_1,…,f_m ⊂ W` with
  `Tv = s_1⟨v,e_1⟩f_1 + ⋯ + s_m⟨v,e_m⟩f_m`. **The proof applies the spectral theorem to
  `T*T` and is otherwise a two-line orthonormality computation `⟨f_j,f_k⟩ = (s_k/s_j)⟨e_j,e_k⟩`.**
  So **SVD = spectral theorem + tier (a)**, i.e. **tier (b)**, *not* tier (c).
  Matrix form: Axler **7.80**; Treil §6.3.4 (Treil calls the operator form the "Schmidt
  decomposition", a naming point — §3).
  **`V` and `W` may have different dimensions**, and every source in this harvest except
  Treil §6.3 states it for a map between two spaces; Treil's §6.3 develops it for operators
  first. Axler's is the right generality.
- **Polar decomposition, Axler 7.93.** `T = S√(T*T)` with `S` unitary. The proof extends the
  two orthonormal lists from the SVD to orthonormal bases and defines `S` by
  `Sv = Σ⟨v,e_k⟩f_k`. **Tier (a) given the SVD.** Axler explicitly notes the alternative
  route "directly using the spectral theorem, avoiding the SVD". H&K p342 **Theorem 14**
  states it as `T = UN` with `N = (T*T)^{1/2}` non-negative, `U` unitary, `N` always unique
  and `U` unique **exactly when `T` is invertible** — H&K's uniqueness clause is sharper than
  Axler's and should be the library's.
- **Operator norm and the SVD.** Axler **7.85**: `max{‖Tv‖ : ‖v‖ ≤ 1} = s_1`, and
  `7.86–7.88` develop `‖T‖`. **Tier (a) given the SVD** — the maximum is *attained at `e_1`*,
  which is why no compactness is needed. **Contrast Conrad `matrixnorm` Thm 3.2 and Thm 4.1,
  which prove the max exists by compactness of the unit sphere** — that is tier (c), and it
  is tier (c) only because Conrad has no SVD at that point. Treil §6.4.2 is the same
  situation. **This is the single clearest example in the harvest of a result that the
  literature routinely proves one tier too expensively.**
- **Eckart–Young / best low-rank approximation.** Axler **7.92**:
  `min{‖T − S‖ : dim range S ≤ k} = s_{k+1}`, attained at
  `T_k v = s_1⟨v,e_1⟩f_1 + ⋯ + s_k⟨v,e_k⟩f_k`. **Tier (a) given the SVD.** The proof is:
  `‖T − T_k‖ ≤ s_{k+1}` by Parseval-style expansion, equality at `e_{k+1}`; and for any `S`
  with `dim range S ≤ k` the list `Se_1,…,Se_{k+1}` is dependent, giving a nonzero
  `v ∈ span(e_1,…,e_{k+1}) ∩ null S` with `‖(T−S)v‖ ≥ s_{k+1}‖v‖`. **A dimension count and
  an ordered-field inequality — nothing else.** Note it is stated with `min`, and the
  minimiser is exhibited, so no existence-of-infimum axiom is consumed. Axler's Exercises 22
  and 27 are two more tier-(a) corollaries (the best `k`-dimensional restriction; the nearest
  unitary operator).
  **Caveat for the scaffolder:** Axler 7.92 is Eckart–Young in the **operator norm**. The
  Frobenius-norm version is a different theorem and **no source in this harvest proves it**
  (§5).
- **Volume and determinants via singular values.** Axler **7.111** — the tier-(a) payoff of
  the SVD if page 4 wants a determinant connection. Treil §6.4.1/§6.4.3 (image of the unit
  ball, condition number) and §6.4.5 (Moore–Penrose) are the applied companions.

### 2.15 Courant–Fischer, Cauchy interlacing, Weyl, Rayleigh (page 4)

The sources: **Tao 254A Notes 3a §2–§3, §5, §6** (the only source here with all of them) and
**Treil §7.4.2** ("Minimax characterization of eigenvalues"), the only textbook one.

- **Courant–Fischer min-max (Tao Theorem 2).** For an `n × n` Hermitian `A` with eigenvalues
  `λ_1 ≥ ⋯ ≥ λ_n`:
  `λ_i(A) = sup_{dim V = i} inf_{v ∈ V, |v|=1} v*Av = inf_{dim V = n−i+1} sup_{v ∈ V, |v|=1} v*Av`.
  **Tier (a) given the spectral theorem, and the library should state it with `max`/`min`.**
  Proof: with an orthonormal eigenbasis `e_1,…,e_n`, any `V` of dimension `i` meets
  `span(e_i,…,e_n)` (dimension `n−i+1`) nontrivially, and on that intersection
  `v*Av ≤ λ_i|v|²`; and `V = span(e_1,…,e_i)` attains `λ_i`. **Both bounds are attained at
  explicit vectors and explicit subspaces, so no `sup`/`inf` existence is used** — this is
  the one place where the choice of `sup` versus `max` in the statement decides whether the
  page needs order 14's completeness or not. Tao writes `sup`/`inf`; the library should
  write `max`/`min` and record why.
- **Rayleigh quotient.** As the `i = 1` and `i = n` cases: `λ_max = max_{v≠0} ⟨Tv,v⟩/⟨v,v⟩`
  and `λ_min` the min. **Tier (a) given the spectral theorem.** As an *existence argument*
  (maximise first, deduce that the maximiser is an eigenvector) it is **tier (c)** — that is
  the classical route H&K and Conrad `matrixnorm` Thm 4.1 take, and the library does not
  need it.
- **Cauchy interlacing (Tao Exercise 14).** `λ_{i+1}(A_n) ≤ λ_i(A_{n−1}) ≤ λ_i(A_n)`, where
  `A_{n−1}` is the top-left `(n−1) × (n−1)` minor of the Hermitian `A_n`. **Tier (a) given
  Courant–Fischer** — the proof restricts the min-max to subspaces of the hyperplane, which
  changes each dimension bound by exactly one. Tao's §5 "Minors" is the section; the general
  statement is that interlacing holds for the compression of a Hermitian operator to any
  codimension-1 subspace.
- **Weyl inequalities (Tao §3, Exercises 4–5).** `λ_{i+j−1}(A+B) ≤ λ_i(A) + λ_j(B)` and the
  dual form. **Tier (a) given Courant–Fischer**: pick subspaces of dimensions `n−i+1`,
  `n−j+1` and `i+j−1`; the three intersect nontrivially by a dimension count in a space of
  dimension `n`, and the corresponding Rayleigh bounds add. Tao also has the **Lidskii**
  inequalities, the **Wielandt minimax formula** (Exercise 3), the **Schur–Horn
  inequalities** (Exercise 2), and **Courant–Fischer for singular values** (Exercise 21,
  `σ_i(A) = sup_{dim V = i} inf_{v ∈ V, |v|=1} |Av|`) — all the same tier.
- **What is genuinely tier (c) in Tao's notes and must be left out:** §4 "Eigenvalue
  deformation" (Tao differentiates eigenvalues along a path; the Hadamard second-variation
  formula, Exercise 13) and anything using the Wielandt–Hoffman inequality via a continuity
  argument.

### 2.16 Things a good source covers that the commission's list missed

- **Gershgorin disk theorem** (Axler 5.66, §5D). Tier (a) over `C`. A cheap, striking
  eigenvalue-localisation result that fits page 1.
- **Complexification** (Conrad `complexification.pdf`; Treil §5.8; Axler Exercises).
  `W_C = W ⊕ iW ≅ C ⊗_R W`, every `R`-linear map extends, and injectivity/surjectivity are
  preserved (Conrad Thm 2.9, Cor 2.10). **Tier (a).** This is the clean way for page 2 to
  move a real problem to `C` and back, and it is the honest alternative to hand-waving about
  "regarding a real matrix as complex".
- **The spectral mapping theorem** (Treil Ch. 9 §2): the spectrum of `p(T)` is `p(spectrum
  of T)`. Tier (a) one way, tier (b) the other.
- **Simultaneous diagonalisation of a commuting family of normal operators** (H&K p343
  **Theorem 15**, p345 **Theorem 16**, p346 Corollary — including "there is a single `T` in
  the algebra of which every member is a polynomial"). Axler Exercise 7B.17.
- **Two operators are unitarily equivalent ⟺ similar, for normal operators** (H&K p357
  Theorem 21) — a genuinely surprising result, tier (a) given the machinery.
- **The pseudoinverse before the SVD** (Axler §6C) — a placement choice worth copying.
- **`V ≇ V′` in infinite dimensions** (Conrad `dualspaceinfinite.pdf`, Treil §8.4) — the
  right place to record that all of page 3's duality is finite-dimensional.

---

## PART 3 — Convention disagreements, named, with the sources on each side

| Flashpoint | Position A | Position B | Notes |
|---|---|---|---|
| **Which slot the inner product is linear in** | **first** slot: **Axler 6.2** ("additivity in first slot", "homogeneity in first slot"), **H&K §8.1** (`(α\|β) = Σ x_j ȳ_j`), **Treil §5.1.2** | **second** slot: the physics convention, and Halmos | All three sources I obtained agree on the **first** slot, so this is easy — but the library must state it once and never drift, because `⟨λu,v⟩ = λ⟨u,v⟩` versus `⟨u,λv⟩ = λ⟨u,v⟩` silently transposes every adjoint formula. Note H&K writes `(α\|β)` and Axler writes `⟨u,v⟩`. |
| **Whether "inner product space" presupposes `F ∈ {R, C}`** | **Yes**: **H&K p270**, "Throughout this chapter we consider only real or complex vector spaces"; **Axler** fixes `F ∈ {R,C}` from Ch. 1 | **No**: **Conrad `bilinearform`** works over an arbitrary field and never needs positive-definiteness except in §8's exercises | Decisive for this library. Everything on page 3 that is *really* about a **non-degenerate** form (the adjoint, `V = W ⊥ W^⟂` when `W` is non-degenerate, orthogonal bases) should be stated at Conrad's generality; only the *norm* consequences need an ordered field. **Conrad Thm 3.16/3.21/3.22 is the arbitrary-field adjoint.** |
| **"Orthonormal basis" as a default** | Axler, H&K, Treil: build one immediately and use it everywhere | **Conrad `bilinearform` §4**: "we will find essentially no use for this idea. The reason is that it usually doesn't exist!" | Not a disagreement about truth, but about which is the *primitive*. §2.11 sets out the tower. The library's order-92 page already committed to **orthogonal** bases as the general notion, so page 3 must derive orthonormal as the refinement, with the square-root hypothesis explicit. |
| **Hypothesis for "a symmetric bilinear form has an orthogonal basis"** | **`char F ≠ 2`** — **Conrad `bilinearform` Thm 4.7** | **characteristic zero** — **H&K p369 Theorem 3**; **`F ∈ {R,C}`** — **Axler 9.12** | **Conrad is correct and the others are needlessly weak.** `char ≠ 2` is the true hypothesis. §4.11 is the char-2 counterexample. This matters because the library states the theorem once, at order 92, and everything downstream inherits whichever hypothesis was chosen. |
| **Minimal polynomial: monic?** | monic, always: **H&K p191** ("the unique **monic** generator"), **Axler 5.21/5.24**, **Conrad `minpolyandappns` Thm 4.4**, **Cambridge IB** | — | No divergence. But note **Axler proves `deg m_T ≤ dim V` without Cayley–Hamilton** (5.22) while **H&K derives it from Cayley–Hamilton** (p194) — a real difference in dependency structure, not in the statement (§2.1). |
| **"Characteristic value / characteristic vector" vs "eigenvalue / eigenvector"** | **H&K** uses *characteristic value*, *characteristic vector*, *characteristic space* throughout | **Axler, Treil, Conrad, Cambridge** use *eigenvalue*, *eigenvector*, *eigenspace* | Cosmetic, but H&K is the primary source for pages 1–2, so every H&K citation the library makes will need translating. Record the mapping once. |
| **Rational canonical form: invariant factors or elementary divisors** | **invariant factors** (one block per invariant factor, with a divisibility chain): **H&K p238 Theorem 5**, **Petersen Thm 10.5** | **elementary divisors** (one block per prime power): the primary-decomposition-first presentation, e.g. via `modulesoverPID` | Both give a canonical form; they are **not the same matrix**. The invariant-factor form is unique with the *fewest* blocks; the elementary-divisor form refines each block along the primary decomposition. **Page 2 must say which it means in the theorem's title**, since "the rational canonical form" names two different matrices in the literature. |
| **Direction of the invariant-factor divisibility chain** | **descending**, `p_{k+1} \| p_k`, so `p_1 = m_T`: **H&K p233 Theorem 3, p238 Theorem 5** | **ascending**, `f_k \| f_{k+1}`, so the last one is `m_T`: the Smith-normal-form convention | **H&K uses both, in the same chapter.** At p261 it says the normal form of `xI − A` has diagonal entries `1, 1, …, 1, p_r, …, p_1` and calls the Smith diagonal `f_1, …, f_l` "the invariant factors of `M`" — ascending — while `p_1, …, p_r` are "the invariant factors for `A`" — descending. **This is a genuine trap**: quoting "the `k`th invariant factor" from H&K without saying which list is meant produces a false statement. |
| **Jordan block orientation** | **1's ABOVE the diagonal (upper)**: **Axler 8.44** (`A_k` has `λ_k` on the diagonal and `1`s on the line directly above) | **1's BELOW the diagonal (lower)**: **H&K equations (7-24) and (7-26)** — H&K's "elementary Jordan matrix" has `c` on the diagonal and `1`s on the **sub**diagonal, because it inherits the companion-matrix convention of §7.1 | Both are correct and the two are transposes/reversals of each other. The library must fix one; the **upper** convention is far more common outside H&K. Also fix the **block size ordering** — H&K orders blocks so sizes **decrease** left to right (p245: "the sizes of these matrices will decrease as one reads from left to right"), which is the same convention as the descending invariant factors. |
| **Companion matrix orientation** | H&K (7-24): `1`s on the subdiagonal, coefficients in the last column | the transposed convention: coefficients in the last row | Same issue one level down; the choice propagates into the Jordan convention. |
| **"Normal" over `R`** | **H&K p311 §8.5** and **Axler 7.18** both define `T` normal as `TT* = T*T`, over `R` as well as `C` | — | No disagreement in the *definition*, but the **theorem** differs sharply by field: over `C`, normal ⟺ orthonormally diagonalisable (H&K p317 Thm 22); over `R` it does **not** (a rotation is normal, §4.3), and the correct real statement is H&K p349 Thm 17 + p353 Thm 18 (`2×2` rotation blocks). **A page that says "normal operators are diagonalisable" without naming the field is stating a falsehood.** |
| **"Positive" vs "positive semidefinite"** | **Axler 7.34** calls `⟨Tv,v⟩ ≥ 0` **positive**, and says so: "Because positive operators correspond to nonnegative numbers, better terminology would use the term *nonnegative* operators. However, operator theorists consistently call these positive operators" | **H&K p340** calls the same thing **non-negative**, and reserves *positive* for the strict form (`f(α,α) > 0` for `α ≠ 0`, p325 §9.3 "Positive Forms") | **A direct collision on the same word**, between the two primary sources for page 4. Axler's `7.62` then has to introduce *positive definite* for the strict notion. The library must pick one and say which source it is following in every citation. |
| **Whether self-adjointness is part of "positive"** | **Axler 7.34** includes it in the definition, and notes that over `C` it is automatic (7.14) | some texts define positive by `⟨Tv,v⟩ ≥ 0` alone | **Over `R` these differ** and the difference is not cosmetic: a rotation by 90° composed with nothing has `⟨Tv,v⟩ = 0` for all `v`, so the bare condition is satisfied by a non-self-adjoint operator. §4.10. |
| **SVD: "Schmidt decomposition"** | **Treil §6.3.3** calls the operator form the *Schmidt decomposition* and reserves *singular value decomposition* for the matrix form (§6.3.4) | **Axler 7.70/7.80** calls both the *singular value decomposition* | Naming only, but Treil's split is worth knowing when reading his §6.3. |
| **QR: which side, and which triangle** | **Axler 7.58** and modern numerical practice: `A = QR`, `Q` with orthonormal columns, `R` upper-triangular with positive diagonal | **H&K p305 Theorem 14 / p307 Corollary**: `MB` unitary with `M` **lower**-triangular with positive diagonal, giving `B = N·U` with `N` upper-triangular and `U` unitary — **the unitary factor on the right** | Same content, transposed and re-sided. Quoting H&K's `B = NU` as "the QR factorisation" without adjustment is wrong. |
| **Sylvester spelled "Silvester"** | Treil §7.3 "Silvester's Law of Inertia", §7.4.1 "Silvester's criterion of positivity" | H&K p370 Theorem 5 and p328 Theorem 6, unnamed but standard | Purely orthographic; noted so a searcher does not conclude Treil omits it. |
| **"Semisimple" vs "potentially diagonalisable"** | **squarefree** minimal polynomial ⟺ **semisimple**: H&K p264 Thm 11, Conrad `semisimple` Thm 10 | **separable** minimal polynomial ⟺ **potentially diagonalisable**: Conrad `potdiagonalizable` Thm 6 | **These are different conditions over an imperfect field** (§2.5). H&K avoids the issue by restricting to subfields of `C` from p266 onward. Conrad is the source that keeps them apart, and the library must too. |
| **Whether the primary decomposition needs a splitting field** | **H&K p220 Theorem 12**: no — the `p_i` are arbitrary irreducibles over `F` | **Axler 8.22** ("generalized eigenspace decomposition"): stated for `F = C` | Same theorem; H&K's is the general one. Axler's phrasing hides that the real hypothesis is "`m_T` splits over `F`", not "`F = C`". |
| **Where quotient spaces live** | **early**, with linear maps: **Cambridge IB**, **Axler 3E** | **in an appendix**: **H&K A.4** | H&K's placement is why H&K never uses `V/W` in Ch. 6–7 and does everything with complements instead. If page 2 takes the quotient route it is following Cambridge/Axler, not H&K, and the two proofs of e.g. triangulability then look quite different. |

---

## PART 4 — Hypothesis-sensitivity and counterexample seeds

Each is a candidate `ex-` / counterexample item. I have verified every computation below by
hand; where a source states it, I name the source.

1. **An operator that is not diagonalisable, over any field.**
   `N = [[0,1],[0,0]]` on `F²`. `N ≠ 0`, `N² = 0`, so `m_N = x²`, which is not a product of
   *distinct* linear factors — H&K p204 Theorem 6 / Conrad `minpolyandappns` Thm 4.11 both
   fail. Its only eigenvalue is `0` and `dim E(0,N) = 1 < 2`. **Not repairable by any field
   extension**: `m_N = x²` is inseparable-in-the-repeated-root sense over every field, so by
   Conrad `potdiagonalizable` Thm 6 it is not diagonalisable over *any* extension.
   Treil §4.2.7.3 ("A non-diagonalizable matrix") is the source example.
2. **A complex symmetric matrix that is not diagonalisable — the contrast with real
   symmetric.** `A = [[1, i],[i, −1]]` over `C`. It is **symmetric** (`Aᵀ = A`) and nonzero,
   but `A² = [[1−1, i−i],[i−i, −1+1]] = 0`. So `A` is nilpotent and not diagonalisable.
   **The moral, and it is the crispest one on page 4:** the real spectral theorem is not
   about *symmetry of the matrix*, it is about **self-adjointness for the form**, i.e.
   `A = A*` (conjugate transpose), and over `C` symmetric ≠ self-adjoint. `A* = [[1,−i],[−i,−1]] ≠ A`.
   Over `R` the two coincide, which is exactly why the real statement is about symmetric
   matrices and the complex one is about Hermitian ones.
3. **A normal operator over `R` that is not diagonalisable over `R`.**
   `R_θ = [[0,−1],[1,0]]` on `R²` (rotation by `π/2`). It is orthogonal, hence normal
   (`R Rᵀ = Rᵀ R = I`), yet `m_R = x² + 1` is irreducible over `R`, so `R` has no real
   eigenvalue and is not diagonalisable over `R`. **H&K p352 Example 1** is exactly this,
   with a general `r`, `θ`: `A = r[[cos θ, −sin θ],[sin θ, cos θ]]`, `m_A = x² − 2r cos θ x + r²`,
   irreducible over `R` when `θ` is not an integer multiple of `π`. It **is** diagonalisable
   over `C` (eigenvalues `re^{±iθ}`), which is Conrad `potdiagonalizable` in action: `m_A` is
   separable, so `A` is potentially diagonalisable. **This one example separates four
   notions at once**: normal, semisimple, potentially diagonalisable, diagonalisable-over-`F`
   — it is all of the first three and none of the fourth.
4. **A nilpotent operator whose Jordan structure is not determined by its rank alone.**
   In `M_4(F)`, take `N₁ = J_2 ⊕ J_2` (two Jordan blocks of size 2) and `N₂ = J_3 ⊕ J_1`.
   Both are nilpotent `4 × 4` with `rank = 2` (`rank J_2 = 1` twice; `rank J_3 = 2`,
   `rank J_1 = 0`). They are **not similar**: `N₁² = 0` while `N₂² ≠ 0` (`rank N₂² = 1`), so
   `m_{N₁} = x²` and `m_{N₂} = x³`. **The invariant is the whole rank sequence
   `rank N, rank N², rank N³, …`**, equivalently the "dot diagram" of Treil §9.4.3, not the
   first rank. Treil §9.4.3 ("Dot diagrams. Uniqueness of the Jordan canonical form") is the
   source; H&K p244–245 gives the same data as the partition `k_1 ≥ k_2 ≥ ⋯ ≥ k_r` with
   `r = nullity(N)`.
5. **Two operators with the same characteristic polynomial and different minimal
   polynomials.** `I_2` and `[[1,1],[0,1]]` on `F²`: both have characteristic polynomial
   `(x−1)²`, but `m = x−1` and `m = (x−1)²`. So the characteristic polynomial does **not**
   determine similarity, while the pair (char. poly, min. poly) does in dimension ≤ 3 and
   **fails in dimension 4**: `J_2 ⊕ J_2` and `J_2 ⊕ J_1 ⊕ J_1` both have char. poly `x⁴` and
   min. poly `x²` but different ranks (2 vs 1), hence are not similar. This second pair is
   the one to carry, because it is what motivates invariant factors: **only the full list of
   invariant factors is a complete similarity invariant** (H&K p238 Theorem 5). H&K's
   Exercise at p251 no. 12 is on exactly this boundary ("if no `d_i` is greater than 6…").
6. **A bilinear form that is not an inner product.** Three graded witnesses on `R²`:
   (i) `B(v,w) = x_1x_2 − y_1y_2` — symmetric, **non-degenerate**, but **indefinite**, with
   an isotropic vector `(1,1)` where `B(v,v) = 0` for `v ≠ 0`. This kills anisotropy and
   therefore kills §2.13.1 — a "self-adjoint" operator for this form need **not** have
   squarefree minimal polynomial. (ii) `B(v,w) = x_1y_2 − x_2y_1` — **alternating**, so
   `B(v,v) = 0` identically; not symmetric. (iii) `B(v,w) = x_1x_2` — symmetric,
   **degenerate** (radical `= {(0,y)}`). Sources: Conrad `bilinearform` Examples 4.2–4.4,
   Axler §9A, Treil §7.1.
7. **Failure of orthogonal-complement duality in infinite dimensions.**
   Let `V` be the space of **finitely supported** real sequences with `⟨x,y⟩ = Σ x_n y_n`
   (an honest inner product space, no completeness). Let `f(x) = Σ_{n≥1} x_n / 2^n`, a
   well-defined linear functional since `x` is finitely supported, and let `W = ker f`, a
   subspace of codimension 1. Then **`W^⟂ = {0}`**: a nonzero `y ⊥ W` would represent `f`
   up to scalar, and the only candidate is `(1/2, 1/4, 1/8, …)`, which is not in `V`.
   Hence `(W^⟂)^⟂ = V ≠ W`, and `V ≠ W ⊕ W^⟂`. **This is purely algebraic — no analysis is
   used**, which makes it usable on page 3. It simultaneously witnesses the failure of the
   **Riesz representation theorem** in infinite dimensions.
   The source-backed companion is **H&K p313 Example 29**: on `C[0,1]` with
   `⟨f,g⟩ = ∫ f ḡ`, the operator `(Tf)(t) = tf(t)` is self-adjoint with **no** characteristic
   value at all — so finite-dimensionality in H&K Theorem 16 is necessary, not decorative.
   Conrad `dualspaceinfinite.pdf` is the source for the parallel failure `V ≇ V′`.
8. **A real symmetric matrix over `Q` with no eigenvalue in `Q` — why the real spectral
   theorem is not tier (a).** `A = [[0,1],[1,1]]` over `Q`, symmetric, hence self-adjoint for
   the standard (positive-definite) dot product on `Q²`. `m_A = x² − x − 1` is irreducible
   over `Q`, so `A` has **no eigenvalue in `Q`** and no orthogonal `Q`-eigenbasis.
   **Note its discriminant is `5 > 0`**, so Axler's 7.26 (which only excludes `b² < 4c`)
   correctly says nothing — the gap in §2.13.3 is real, not an artefact.
   `A` **is** semisimple and potentially diagonalisable (`m_A` is separable), so this example
   also shows the tier-(a) conclusions of §2.13.1 are the *best possible* unconditional ones.
9. **A positive-definite form over `Q` with an orthogonal basis but no orthonormal one.**
   **Conrad `bilinearform` Example 4.2 + Exercise 4.7**: on `Q²`, `B = diag(2,3)`. The
   standard basis is orthogonal. There is **no orthonormal basis**, because `2x² + 3y² = 1`
   has no rational solutions. This is the exact witness for the tower in §2.11 and for the
   claim that normalisation, not orthogonalisation, is where square roots enter.
10. **Over `R`, `⟨Tv,v⟩ ≥ 0` does not imply `T` self-adjoint.** Take `T = [[0,−1],[1,0]]` on
    `R²`. Then `⟨Tv,v⟩ = −y·x + x·y = 0 ≥ 0` for every `v`, yet `T* = Tᵀ = −T ≠ T`. So over
    `R` the self-adjointness clause in Axler 7.34 **cannot** be dropped, whereas over `C` it
    can (Axler 7.14). More generally, over `R` every skew-symmetric `T` satisfies
    `⟨Tv,v⟩ = 0`. **This is the reason the two conventions in PART 3's "positive" rows are
    not interchangeable.**
11. **A symmetric bilinear form with no orthogonal basis — characteristic 2.**
    Over `F₂`, `B = [[0,1],[1,0]]` on `F₂²` (the hyperbolic plane). `B` is symmetric and
    non-degenerate, but `B(v,v) = 2xy = 0` for **every** `v` in characteristic 2, so `B` is
    alternating. Any basis `{e_1, e_2}` that were orthogonal would have `B(e_1,e_2) = 0` and
    `B(e_i,e_i) = 0`, making `B` identically zero — contradicting non-degeneracy. **So there
    is no orthogonal basis**, and Conrad's `char F ≠ 2` in Thm 4.7 is sharp. Conrad
    Example 4.3 is the same matrix over a general field (where an orthogonal basis
    `{(1,1),(1,−1)}` does exist — and note those two vectors **coincide** in characteristic 2,
    which is the mechanism of the failure). Conrad `bilinearform` §7 is the char-2 theory.
12. **Diagonalisability is not detected by having a repeated eigenvalue.** `I_2` has the
    repeated eigenvalue 1 and is diagonal; `[[1,1],[0,1]]` has the same eigenvalue and is
    not. Conrad `minpolyandappns` says it in as many words after Thm 3.2: "Theorem 3.2 will
    never detect a diagonalizable operator with a repeated eigenvalue."
13. **A positive operator with infinitely many square roots.** Axler's marginal note at 7.39:
    the identity on any `V` with `dim V > 1` has infinitely many square roots (every
    reflection `v ↦ 2P_U v − v` squares to `I`), **but exactly one positive one**. Good
    `ex-` for the uniqueness clause.
14. **`m_T` alone does not determine `T` up to similarity, and neither does the pair with the
    characteristic polynomial past dimension 3** — see 5 above. This is the motivating
    counterexample for page 2's entire invariant-factor apparatus and should be the page's
    opening example.
15. **Simultaneous diagonalisability needs each operator individually diagonalisable, not
    just commutativity.** `A = [[0,1],[0,0]]` commutes with itself and with `I`, and the
    family `{A, I}` is commuting, but `A` is not diagonalisable, so no basis diagonalises
    both. Axler 5.76's "⟺" is stated for operators that *are* diagonalisable; the hypothesis
    is not decorative. Conrad `minpolyandappns` Thm 5.2 and H&K p207 Theorem 8 both carry it.
16. **Semisimple but not potentially diagonalisable (imperfect field).** `F = 𝔽_p(t)` and
    `T` the companion matrix of `x^p − t`. That polynomial is irreducible over `F`, hence
    `m_T` is squarefree, hence `T` is **semisimple** (H&K p264 Thm 11 / Conrad `semisimple`
    Thm 10). But over `F̄` it is `(x − t^{1/p})^p`, a single root of multiplicity `p`, so
    `m_T` is **not separable** and `T` is **not** diagonalisable over any extension (Conrad
    `potdiagonalizable` Thm 6). **This is the example that forces the vocabulary of §2.5 to
    be kept honest.** Neither H&K nor Conrad prints this exact matrix; the two theorems it
    uses are both printed, and the polynomial `x^p − t` is the standard inseparable witness.
17. **An operator on a complex vector space with no eigenvalue — infinite dimensions.**
    Axler **5.20**: `T` on `P(C)` by `(Tp)(z) = z p(z)`; `deg Tp = deg p + 1`, so `Tp ≠ λp`
    for any `λ` and nonzero `p`. So Axler 5.19's finite-dimensionality is necessary, not just
    convenient. Pairs with 7 above.
18. **Worked positive examples to carry.** Axler **7.30**: the `3×3` real symmetric matrix
    `[[14,−13,8],[−13,14,8],[8,8,−7]]` with orthonormal eigenbasis
    `(1,−1,0)/√2, (1,1,1)/√3, (1,1,−2)/√6` and eigenvalues `27, 9, −15` — an honest,
    checkable real spectral theorem instance, including a **negative** eigenvalue (so it is
    not accidentally a positive operator). Axler **7.41**: `S(x,y) = (x,2y)` and
    `T(x,y) = (x+y, x+y)` on `R²`, both positive, with `T` singular — good for the square-root
    and positive-operator items. Treil §4.2.7.1–2 (real vs complex eigenvalue examples) and
    H&K's §7.4 Exercise 5 (an explicit `8 × 8` real matrix with a full invariant-factor
    computation) are the worked-computation seeds for page 2.

---

## PART 5 — Gaps in this harvest that the scaffolder should know about

1. **Roman, Halmos and Petersen's actual book: no TOC obtained.** All three are behind the
   Springer `idp.springer.com/authorize` gate, which 303-redirects and cannot be fetched.
   The commission named all three. What I have instead is Axler + Hoffman & Kunze (two full
   textbooks with full text) and Treil + Cambridge IB (two full open note sets), which
   satisfies the two-textbook floor with room to spare — but **if the scaffolder wants
   Roman's chapter list for a coverage disposition, it is not in this file and I could not
   get it.**
2. **Dummit & Foote Ch. 11–12, Lang Ch. XIII–XV, MIT OCW 18.700/18.701: not attempted.**
   Once four sources covered every commissioned topic at heading level I stopped. These are
   **unharvested**, not **checked and rejected** — an honest disposition needs someone to open
   them.
3. **There is no Keith Conrad blurb on the Jordan form, the rational canonical form, the
   spectral theorem, the SVD, or symmetric/orthogonal/unitary operators.** The commission
   expected several. I enumerated the entire blurb index and searched it; §1.6 records the
   result. Do not scaffold a citation to a Conrad blurb that does not exist. What Conrad
   *does* have (minimal polynomial, semisimplicity, potential diagonalisability, simultaneous
   commutativity, bilinear forms, complexification, modules over a PID) is unusually
   well-matched to the arbitrary-field constraint and is where his weight should be put.
4. **Cauchy interlacing, the Weyl inequalities, Lidskii and Wielandt come from ONE source
   only** — Tao's 254A Notes 3a — and there they are **exercises**, not theorems with printed
   proofs (Exercise 14 for interlacing, Exercises 4–5 for Weyl/Lidskii, Exercise 3 for
   Wielandt, Exercise 21 for singular-value Courant–Fischer). Only **Courant–Fischer itself**
   is a stated theorem (Tao Theorem 2) and it has one textbook backing (Treil §7.4.2). The
   standard textbook reference is **Horn & Johnson, *Matrix Analysis*, Ch. 4**, for which no
   open copy exists. **So the second independent treatment required by the source-depth rule
   is missing for the interlacing/Weyl block.** Either the scaffolder finds one, or that
   block is scaffolded with proofs the library supplies itself from Courant–Fischer (which
   §2.15 shows is straightforward and tier (a)), with a source-cited statement only.
5. **The Frobenius-norm Eckart–Young is not in this harvest.** Axler 7.92 is the
   **operator-norm** version. The Frobenius (Hilbert–Schmidt) version is a genuinely different
   theorem with a different proof and no source here proves it. Do not let one item's title
   assert both.
6. **Jordan–von Neumann (parallelogram law ⟹ the norm comes from an inner product) is not
   proved by any source here.** Axler 6.21 gives only the forward direction. §2.10 records
   why the converse is **tier (c)** over `R` (the `R`-homogeneity step needs continuity), and
   tier (a) only in the weaker `Q`-homogeneous form. **The commission asked for it; the
   library will have to source it separately or state the weaker version.**
7. **The `F[x]`-module / adjugate proof of Cayley–Hamilton over an arbitrary commutative
   ring is not in this harvest.** H&K proves it via determinants for a field (p194) and again
   via triangulation (p204, which needs splitting); Axler proves it via generalized
   eigenspaces (8.30, `F = C`); Treil Ch. 9 §1 has a third route. If the library wants
   Cayley–Hamilton at tier (a) over an arbitrary field it should use the adjugate identity
   `adj(xI − A)·(xI − A) = det(xI − A)·I`, and **no source I obtained writes that proof out.**
8. **The Jordan–Chevalley decomposition over a perfect field of characteristic `p` is not
   here.** H&K p267 Theorem 13 is stated for subfields of `C`; its supporting Taylor's-formula
   lemma (p266) is stated in characteristic zero; Petersen's *Additions* Exercise 23 is
   "any field of characteristic 0". The characteristic-`p` perfect-field statement is true
   and standard but **unsourced in this harvest**.
9. **`bilinearform.pdf` (63 pp) was harvested at heading level only.** Its §6 (quadratic
   forms), §7 (quadratic forms in characteristic 2) and §8 (bilinear forms and tensor
   products) contain a great deal — Witt's theorems, hyperbolic planes, classification over
   finite fields — that may overlap the published order-92 page or may be a source of
   material for a future one. I read §3 and §4 in full (the adjoint and orthogonal bases,
   which is what pages 3–4 need) and left the rest.
10. **H&K's OCR is imperfect.** The 1971 archive.org scan renders "monic" as "manic",
    "finite" as "jinite/jkite", "field" as "Jield", "diagonalizable" as "diagonalixable",
    "Grassmann" as "Grassman" (that one is H&K's own spelling), and mangles matrix displays.
    Every H&K statement in PART 1 §1.4 was read and corrected by hand, but **any further
    quotation should be re-read against the page rather than copied from this file**, and a
    quoted *matrix* from H&K should be reconstructed rather than trusted.
11. **Page numbers.** Axler's PDF page runs **11 ahead** of the printed page (printed p. 243
    is PDF p. 256). H&K's PDF page runs **7 ahead** (printed p. 1 is PDF p. 8). All page
    numbers cited in this file are the **printed** ones for H&K and the **PDF** ones where I
    said "pdfpg"; §1.2's Axler references are Axler's own result numbers, which are stable.
12. **Treil's landing page is dead.** `https://www.math.brown.edu/streil/papers/LADW/LADW.html`
    now redirects to a Google Sites page and `LADW.pdf` is a 404. Only the dated filename
    `LADW_2017-09-04.pdf` resolves. Any citation must use that URL and name the 2017-09-04
    version, since Treil renumbers between versions.
13. **Axler 4e is dated 13 July 2026 on the download page.** It is a living document with
    an errata page (`https://linear.axler.net/LADRErrata.html`, not harvested). Result
    numbers differ between the 3rd and 4th editions — for example the 3rd edition has no
    9.12/9.13 and organises Chapter 9 completely differently. **Every Axler citation must say
    "4th edition".**
