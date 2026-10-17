---
id: thm-generalized-schur-form-exists-for-regular-pencil
kind: theorem
title: "Every regular real or complex pencil has a generalized Schur form"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-regular-generalized-eigenvalue-pencil
  - def-generalized-schur-form
  - lem-regular-pencil-has-projective-eigenvalue
  - lem-regular-pencil-has-no-common-kernel-vector
  - lem-block-upper-triangular-pencil-determinant-factorizes
  - lem-zero-determinant-matrix-has-nonzero-kernel-vector
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - thm-root-bound-for-polynomials-over-a-domain
  - thm-operator-invertible-iff-determinant-nonzero
  - thm-gram-schmidt-orthonormalisation
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §2.1"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§12.8–12.9"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Statement

Let $(A,B)$ be a regular $n\times n$ pencil over $\mathbb C$. Then there are
unitary $Q,Z$ such that $Q^*AZ$ and $Q^*BZ$ are upper triangular. If
$A,B\in\mathbb R^{n\times n}$, there are orthogonal $Q,Z$ such that $Q^TAZ$
is block upper triangular with one-by-one real blocks and two-by-two blocks
whose generalized determinant polynomial has a nonreal conjugate root pair,
while $Q^TBZ$ is upper triangular. In either form, the homogeneous roots of
the diagonal block determinant polynomials are exactly the homogeneous
generalized eigenvalues of $(A,B)$.

## Facts & Assumptions

**Given:** A regular finite square pencil $(A,B)$ of order $n\ge1$ over
$\mathbb C$ or $\mathbb R$.

[F1] [[lem-regular-pencil-has-projective-eigenvalue]]: a regular pencil has a
nonzero homogeneous pair $[\alpha:\beta]$ with
$\det(\beta A-\alpha B)=0$.

[F2] [[lem-regular-pencil-has-no-common-kernel-vector]]: regularity excludes
a nonzero vector in both $\ker A$ and $\ker B$.

[F3] [[lem-block-upper-triangular-pencil-determinant-factorizes]]: the
homogeneous determinant of a block upper triangular pair is the product of
the determinants of its diagonal block pairs.

[F4] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]:
Householder transformations are unitary and can align a nonzero vector with
the first coordinate; Givens transformations can annihilate a prescribed
coordinate.

[F5] [[thm-gram-schmidt-orthonormalisation]]: Gram–Schmidt converts finite
independent lists to orthonormal lists with the same successive spans.

[F6] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
every finite-dimensional real or complex inner product space has an
orthonormal basis.

[F7] [[thm-operator-invertible-iff-determinant-nonzero]]: a finite-dimensional
operator over a field is invertible exactly when its determinant is nonzero.

[F8] [[thm-root-bound-for-polynomials-over-a-domain]]: a nonzero polynomial of
degree at most $n$ has at most $n$ distinct roots.

[F9] [[def-generalized-schur-form]]: the required complex and real block
structures and homogeneous diagonal roots are as defined there.

[F10] [[lem-zero-determinant-matrix-has-nonzero-kernel-vector]]: over either
$\mathbb R$ or $\mathbb C$, zero determinant gives a nonzero kernel vector.

[F11] [[thm-determinant-multiplicative]]: determinants multiply under matrix
products.

## Proof

**Proof technique:** induction on the pencil order, splitting one real
eigenvalue or one nonreal conjugate pair at each step.

1.1 We prove the statement by induction on $n$, with the empty trailing pencil allowed after a final block is removed. For $n=1$, regularity says the scalar pair $(A,B)$ is not $(0,0)$, and $Q=Z=[1]$ gives the required form. Now let $n>1$ and assume the result for smaller regular pencils. [given, F9, induction, base, ih]

1.2 Choose a homogeneous eigenvalue pair $[\alpha:\beta]$ by [F1]. Its homogeneous determinant is zero, so [F10] gives a nonzero vector $v$ in the kernel over $\mathbb C$. For real input and a real projective root, rescale $[\alpha:\beta]$ to real coordinates and apply [F10] over $\mathbb R$. If $\beta\ne0$, put $\lambda=\alpha/\beta$; then $Av=\lambda Bv$. If $Bv=0$, this also gives $Av=0$, contrary to [F2], so $Bv\ne0$. If $\beta=0$, then $Bv=0$ and [F2] gives $Av\ne0$. [given, F1, F2, F10, algebra, cases]

2.1 If the input field is complex, or if the selected root for real input is real, use a one-dimensional block. Set $q=Bv$ in the finite case and $q=Av$ in the infinite case. Both vectors are nonzero by step 1.2. By [F4], choose unitary/orthogonal alignments $Lq=\gamma e_1$ and $Rv=\eta e_1$ and set $Q=L^*$, $Z=R^*$. Then $Q^*q=\gamma e_1$ and $Z^*v=\eta e_1$, so $Q^*AZ$ and $Q^*BZ$ have zeros below their first entries in the first column. The leading diagonal pair is nonzero: in the finite case its $B$ entry is nonzero, and in the infinite case its $A$ entry is nonzero. [step 1.2, F4, construct, cases]

2.2 If the input is real and the selected root is nonreal, then $\beta\ne0$; write $\lambda=\alpha/\beta=a+ib$ with $b\ne0$ and write the vector from step 1.2 as $v=x+iy$ in $\ker(A-\lambda B)$. The real vectors $x,y$ are linearly independent. If they were dependent, $v$ would be a nonzero complex multiple of a nonzero real vector $w$, so $(A-\lambda B)w=0$. If $Bw=0$, then $Aw=0$, contradicting [F2]. If $Bw\ne0$, a coordinate with $(Bw)_i\ne0$ gives $\lambda=(Aw)_i/(Bw)_i\in\mathbb R$, contradicting $b\ne0$. Put $X=\operatorname{span}_{\mathbb R}\{x,y\}$ and $Y=\operatorname{span}_{\mathbb R}\{Bx,By\}$. Separating real and imaginary parts gives $Ax=aBx-bBy$ and $Ay=bBx+aBy$, so $A(X)\subseteq Y$. If $\dim Y<2$, then for each $\mu\in\mathbb C$ the map $(A-\mu B):X_{\mathbb C}\to Y_{\mathbb C}$ has a nonzero kernel because its domain has dimension two and its range has dimension at most one. Hence $A-\mu B$ is not invertible, so [F7] gives $\det(A-\mu B)=0$ for every $\mu$, contradicting regularity and [F8]. Thus $\dim Y=2$. [given, F2, F7, F8, step 1.2, algebra, contradiction]

3.1 Apply [F5] to obtain orthonormal bases $z_1,z_2$ of $X$ and $q_1,q_2$ of $Y$, choosing $q_1,q_2$ by Gram–Schmidt on $Bz_1,Bz_2$. Since the two images are independent, the leading matrix $B_{11}=Q_1^TBZ_1$ is upper triangular with nonzero diagonal and hence invertible. Extend these bases by orthonormal bases of $Y^\perp$ and $X^\perp$ using [F6]. In these full bases, the first two columns of both transformed matrices are supported in the first two rows. Let $P$ be the invertible change-of-basis matrix from $(x,y)$ to $(z_1,z_2)$. The equations in step 2.2 give $A[z_1\ z_2]=B[z_1\ z_2]C$, where $C=P^{-1}\begin{pmatrix}a&b\\-b&a\end{pmatrix}P$. Thus the leading blocks satisfy $A_{11}=B_{11}C$, and $C$ is similar to $\begin{pmatrix}a&b\\-b&a\end{pmatrix}$. Consequently $\det(A_{11}-\mu B_{11}) =\det(B_{11})\det(C-\mu I) =\det(B_{11})\bigl((a-\mu)^2+b^2\bigr)$ is a nonzero polynomial with roots $a\pm ib$. [step 2.2, F5, F6, F11, algebra, construct]

4.1 In either the one-dimensional case of step 2.1 or the two-dimensional case of step 3.1, the transformed pair has a nonzero leading block determinant polynomial $g$. The transformed full pencil is regular: by [F8] choose $\mu$ with $\det(A-\mu B)\ne0$; the unitary or orthogonal changes of basis preserve invertibility. By [F7], the transformed determinant at this $\mu$ is also nonzero, so the transformed full determinant polynomial is nonzero. If there is no trailing block, the transformed pencil is just its leading block and this already proves regularity. If the trailing block is nonempty, both block sizes are positive, so [F3] factors the full determinant polynomial as $g$ times the trailing determinant. A product of two nonzero complex polynomials is nonzero because their leading nonzero coefficients have nonzero product. Since $g$ and the full determinant are nonzero, the trailing determinant is nonzero, so the trailing pencil is regular. [step 2.1, step 3.1, F3, F7, F8, algebra]

5.1 If the trailing block is nonempty, apply the induction hypothesis to it and extend its left and right transformations by identity matrices on the leading block. If it is empty, no further transformation is needed. This produces the stated upper triangular complex form or real block upper triangular form with upper triangular second factor. [step 1.1, step 4.1, induction, construct, ih]

6.1 The left and right basis changes are invertible, so [F7] shows that they preserve singularity of every homogeneous pencil matrix. If there is one diagonal block, its determinant is the full determinant. With at least two blocks, split off the first diagonal block and apply [F3] repeatedly; every split has positive block sizes. The resulting product is the nonzero determinant polynomial of the regular transformed pencil, so each factor is nonzero by the leading-coefficient argument in step 4.1. Thus a homogeneous pair is a root of the full determinant exactly when it is a root of at least one diagonal block determinant. The basis changes preserve this root set, which proves the claim. [step 4.1, step 5.1, F3, F7, F9, algebra, discharge-induction] ∎
