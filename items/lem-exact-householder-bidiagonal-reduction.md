---
id: lem-exact-householder-bidiagonal-reduction
kind: lemma
title: "Exact unitary equivalence of Householder bidiagonalization"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-householder-bidiagonalization, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]
dependency_level: 3
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2, Algorithm 3.2.6"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, §1"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
---

## Statement

For $A\in\mathbb F^{m\times n}$ over $\mathbb F=\mathbb R$ or $\mathbb C$, the exact-arithmetic algorithm [[alg-householder-bidiagonalization]] returns unitary $U,V$ and an upper bidiagonal $B\in\mathbb F^{p\times p}$, $p=\min(m,n)$, such that if $m\ge n$ then $U^*AV=\begin{bmatrix}B\\0\end{bmatrix}$, and if $m<n$ then $U^*A^*V=\begin{bmatrix}B\\0\end{bmatrix}$.

## Facts & Assumptions

**Given:** A matrix $A\in\mathbb F^{m\times n}$ and the exact-arithmetic Householder bidiagonalization algorithm.

[F1] [[alg-householder-bidiagonalization]] applies a left Householder to the active column at step $k$ and, when $k<p$, a right Householder to the conjugate transpose of the active row after column $k$. For each nonzero active vector $z$, it chooses $\phi=z_1/|z_1|$ when $z_1\ne0$ and $\phi=1$ otherwise, $\alpha=-\phi\|z\|_2$, $v=z-\alpha e_1$, $h=v/\|v\|_2$, and $H=I-2hh^*$. A zero vector uses the identity.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: every Householder reflector with a unit normal is unitary.

## Proof

1.1 For any nonzero active vector $z$, [F1] specifies $N=\|z\|_2$, $\phi=z_1/|z_1|$ if $z_1\ne0$ and $\phi=1$ otherwise, $\alpha=-\phi N$, $v=z-\alpha e_1$, and $h=v/\|v\|_2$. Since $\overline\alpha z_1=-N|z_1|$, direct expansion gives $v^*z=N^2+N|z_1|>0$ and $v^*v=2(N^2+N|z_1|)$. Thus $v\ne0$, $h^*h=1$, and $H=I-2hh^*$ satisfies $H^*=H$ and $Hz=z-2v(v^*z)/(v^*v)=\alpha e_1$. It is unitary by [F2]. For $z=0$ the specified identity has the same zero-annihilation property. This verifies the actual negative-phase construction on both the column vector and the conjugate-transposed row vector. [F1, F2, algebra]

2.1 At step $k$, the left reflector acts only on rows $k:M$. It therefore leaves all rows $1,\ldots,k-1$ unchanged and maps the active part of column $k$ to its first coordinate, making entries below $(k,k)$ zero. The right reflector acts only on columns $k+1:p$, so it preserves the zeros already made in column $k$ and maps the active part of row $k$ to its first coordinate, making entries beyond $(k,k+1)$ zero. [F1, step 1.1]

3.1 Inductively, before stage $k$, each earlier column $\ell<k$ has zeros in rows $k:M$, so the left update preserves those zeros. Each earlier row $\ell<k$ has zeros in columns $k+1:p$, so the right update preserves those zeros as well; neither update touches its earlier retained entries. Step 2.1 supplies the new column and row zeros. At the last stage, column $p$ also has zeros below row $p$. Induction therefore gives an upper bidiagonal leading $p\times p$ block and zero bottom $M-p$ rows. For $p=0$ the work matrix is already the empty tall matrix and both initialized factors are identities. [step 2.1, F1, induction]

4.1 The update rules in [F1] maintain the invariant $C=U^*C_0V$, where $C_0$ is the initial tall-oriented matrix. Every factor is unitary by [F2], so the accumulated $U,V$ are unitary. Combining this invariant with step 3.1 gives the asserted tall reduction. In the wide case it applies to $A^*$, and taking adjoints gives $A=V\begin{bmatrix}B^*&0\end{bmatrix}U^*$. [F1, F2, step 3.1, algebra] ∎
