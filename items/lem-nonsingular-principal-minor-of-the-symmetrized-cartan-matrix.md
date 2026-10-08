---
id: lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix
kind: lemma
title: "A nonsingular principal minor of the symmetrized Cartan matrix of size the rank"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-symmetrizable-generalized-cartan-matrix
  - def-determinant-of-a-square-matrix
  - def-invertible-matrix-and-similarity-over-a-commutative-ring
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - lem-schur-complement-congruence-and-determinant
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - lem-matrix-rank-detected-by-nonzero-minors
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-ring-matrix-arithmetic-laws
aliases: []
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 10, §10.4.2.6, printed p. 246: the Gabber–Kac block description in the positive-semidefinite corank-one case."
    - title: "Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras, Journal of Lie Theory 13 (2003), 21–64"
      url: "https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf"
      locator: "§1.1, printed p. 22: the standing nondegeneracy assumption on an r-by-r principal block of a rank-r symmetrizable Cartan matrix; §2.1, printed p. 31: use of the extra n−r Cartan coordinates."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $n\ge1$ and let $B=(b_{ij})$ be a real symmetric $n\times n$ matrix of rank $r$. For $J\subseteq\{1,\ldots,n\}$, write $B_J=(b_{ij})_{i,j\in J}$ for its principal submatrix. Use the convention that the empty matrix has determinant $1$ and is invertible. There is a subset $J$ with $|J|=r$ for which $B_J$ is nonsingular.

If in addition $A$ is a real $n\times n$ matrix and $D=\operatorname{diag}(d_1,\ldots,d_n)$ has $d_i>0$ with $B=DA$, then for the same $J$,

$$\det B_J=\Bigl(\prod_{i\in J}d_i\Bigr)\det A_J.$$

Thus $A_J$ is also nonsingular and has size $r$, and $|\{1,\ldots,n\}\setminus J|=n-r$. In particular, if $A$ is symmetrizable and has corank one, then $B=DA$ has corank one and the conclusion gives a nonsingular $(n-1)\times(n-1)$ principal submatrix.

## Facts & Assumptions

**Given:** A real symmetric matrix $B$ of rank $r$; in the second assertion, also $A,D$ with $D$ positive diagonal and $B=DA$.

[F1] A symmetrizable generalized Cartan matrix has a positive diagonal symmetrizer $D$ for which $B=DA$ is symmetric ([[def-symmetrizable-generalized-cartan-matrix]]).

[F2] For positive size, determinant is defined by the Leibniz formula; we additionally use the local empty-matrix convention stated above ([[def-determinant-of-a-square-matrix]]).

[F3] A real square matrix is invertible exactly when its determinant is nonzero ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]); nonsingular means invertible ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[F4] If a symmetric block matrix has an invertible leading block $C$, its determinant is $\det(C)$ times the determinant of the Schur complement ([[lem-schur-complement-congruence-and-determinant]]).

[F5] Matrix rank is row rank ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[F6] A nonzero $k$-rowed minor of a real matrix forces its rank to be at least $k$ ([[lem-matrix-rank-detected-by-nonzero-minors]]).

[F7] Determinants are multiplicative, and the determinant of a diagonal matrix is the product of its diagonal entries ([[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]]).

[F8] Transpose reverses matrix products, and an invertible matrix has a unique inverse ([[thm-ring-matrix-arithmetic-laws]], [[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

## Proof

**Proof technique:** Choose a maximal nonsingular principal block and use its Schur complement.

1.1 If $r=0$, then $B=0$ and $J=\varnothing$ works by the stated empty-matrix convention. When $B=DA$ with positive diagonal $D$, $A=0$ as well, so the determinant identity is $1=1$. Hence assume $r>0$. [given, F2, algebra]

1.2 Since $B\ne0$, either some $b_{ii}\ne0$, giving a nonsingular one-by-one principal submatrix, or all diagonal entries vanish and some $b_{ij}\ne0$ with $i\ne j$, giving the nonsingular two-by-two principal submatrix with determinant $-b_{ij}^{\,2}$. Choose, from the finite family of principal submatrices with nonzero determinant, a set $J$ maximal under inclusion. Then $B_J$ is invertible by [F3]; put $k=|J|$. [given, F2, F3, choose, algebra]

2.1 For any $p\notin J$, maximality makes $\det B_{J\cup\{p\}}=0$. Write $u_p=(b_{ip})_{i\in J}$. The Schur-complement formula [F4] gives $0=\det(B_J)(b_{pp}-u_p^{\mathsf T}B_J^{-1}u_p)$, so $b_{pp}-u_p^{\mathsf T}B_J^{-1}u_p=0$. [step 1.2, F4, algebra]

3.1 For distinct $p,q\notin J$, maximality also gives $\det B_{J\cup\{p,q\}}=0$. Since $B_J^{\mathsf T}=B_J$, transposing $B_JB_J^{-1}=I=B_J^{-1}B_J$ and using [F8] shows that $(B_J^{-1})^{\mathsf T}$ is also a two-sided inverse of $B_J$, hence $(B_J^{-1})^{\mathsf T}=B_J^{-1}$. The two-by-two Schur complement therefore has zero diagonal by step 2.1 and equal off-diagonal entries $t=b_{pq}-u_p^{\mathsf T}B_J^{-1}u_q$. Its determinant is $-t^2$, so [F4] and the fact that $\det B_J\ne0$ imply $t=0$. Therefore every entry of the complementary block equals the corresponding entry of $W^{\mathsf T}B_J^{-1}W$, where $W=B_{J,J^c}$. [step 2.1, F4, F8, algebra]

4.1 Partitioning by $J$ and $J^c$, the equality in step 3.1 yields $B=\begin{pmatrix}I\\ W^{\mathsf T}B_J^{-1}\end{pmatrix}B_J\begin{pmatrix}I&B_J^{-1}W\end{pmatrix}$. By matrix multiplication, every row of $B$ is a linear combination of the $k$ rows of the right factor, so [F5] gives $r\le k$. Since $\det B_J\ne0$, $B$ has a nonzero $k$-rowed minor, so [F6] gives $r\ge k$. Hence $k=r$. [step 3.1, F5, F6, F8, algebra]

5.1 If $B=DA$, diagonality gives $B_J=D_JA_J$, and [F7] gives $\det B_J=\det D_J\det A_J=(\prod_{i\in J}d_i)\det A_J$. The product is nonzero, so the already nonzero $\det B_J$ forces $\det A_J\ne0$. For a symmetrizable $A$ of corank one, positive diagonal row-scaling preserves rank, hence $r=n-1$. [F1, F5, F7, step 1.1, step 4.1, algebra] ∎

## Remarks

Symmetry is essential: $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ has rank $1$ but no nonsingular one-by-one principal submatrix. Berkeley's Gabber–Kac example in Ch. 10 §10.4.2.6 assumes the positive-semidefinite corank-one case; the principal-minor argument above needs only symmetry and therefore also applies to indefinite symmetrizable matrices.
