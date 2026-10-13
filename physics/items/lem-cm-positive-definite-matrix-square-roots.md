---
id: lem-cm-positive-definite-matrix-square-roots
kind: lemma
title: "Positive definite symmetric matrices have positive definite square roots, and the congruence M^{-1/2} K M^{-1/2} preserves symmetry and positivity"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-non-negative-and-positive-operator, prop-operator-positivity-agrees-with-form-positivity-over-the-reals, thm-non-negative-square-root-exists-and-is-unique, thm-non-negative-operator-characterisations, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, def-self-adjoint-and-normal-endomorphism, def-matrix-product-and-identity-matrix, def-invertible-matrix-and-general-linear-group, def-euclidean-inner-product, lem-inverse-unique]
dependency_roles:
  def-non-negative-and-positive-operator: mathematical-premise
  prop-operator-positivity-agrees-with-form-positivity-over-the-reals: mathematical-premise
  thm-non-negative-square-root-exists-and-is-unique: mathematical-premise
  thm-non-negative-operator-characterisations: mathematical-premise
  prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-inverse-unique: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 8.4, formula (8.77): the matrices M^{1/2}, M^{-1/2} and the symmetric matrix M^{-1/2}WM^{-1/2}"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, Chapter 7 (positive operators and their square roots)"
      url: "https://linear.axler.net/LADR4e.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$ and let $M\in M_n(\mathbb R)$ be symmetric and positive definite, that is $v^{\mathsf T}Mv>0$ for every nonzero $v\in\mathbb R^n$; identify $\mathbb R^n$ with its standard real inner product space ([[def-euclidean-inner-product]]). Then:

1. $M$ is invertible and $M^{-1}$ is symmetric and positive definite;
2. there is a unique symmetric positive definite matrix $M^{1/2}$ with $(M^{1/2})^2=M$;
3. $M^{-1/2}:=(M^{1/2})^{-1}$ is symmetric and positive definite, satisfies $(M^{-1/2})^2=M^{-1}$, and $M^{-1/2}MM^{-1/2}=I_n$;
4. for every symmetric matrix $K$ that is non-negative, that is $v^{\mathsf T}Kv\ge0$ for all $v$, the matrix $S:=M^{-1/2}KM^{-1/2}$ is symmetric and non-negative, and $S$ is positive definite if and only if $K$ is.

## Facts & Assumptions

**Given:** The symmetric positive definite matrix $M$ and, in clause 4, a symmetric non-negative matrix $K$.

[F1] A real matrix is symmetric if and only if the associated endomorphism of $\mathbb R^n$ is self-adjoint; positive definite (respectively non-negative) matrices in the form sense correspond exactly to positive (respectively non-negative) operators, and a positive operator is non-negative ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]], [[def-self-adjoint-and-normal-endomorphism]], [[prop-operator-positivity-agrees-with-form-positivity-over-the-reals]], [[def-non-negative-and-positive-operator]]).

[F2] A non-negative operator on a finite-dimensional real inner product space has a unique non-negative square root, and a non-negative operator admits an orthonormal basis of eigenvectors with non-negative eigenvalues ([[thm-non-negative-square-root-exists-and-is-unique]], [[thm-non-negative-operator-characterisations]]).

[F3] Matrix algebra: composition and multiplication of matrices are associative, the identity acts as $I_nx=x$, and $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$; the inverse of an invertible square matrix is unique and two-sided ([[def-matrix-product-and-identity-matrix]], [[def-invertible-matrix-and-general-linear-group]], [[lem-inverse-unique]]).

## Proof

**Proof technique:** direct; transfer the positivity statement to operators and use the unique non-negative square root.

1.1 By [F1] $M$ corresponds to a positive operator on $\mathbb R^n$, hence to a non-negative one. By [F2] there is a unique non-negative operator $R$ with $R^2=M$; write $M^{1/2}$ for its matrix, which is symmetric because $R$ is self-adjoint [F1]. If $Rv=0$ then $Mv=R^2v=0$, so $v=0$ because $M$ is positive definite; hence $R$ is injective, and by [F2] its eigenvalues are non-negative and none is zero, so all are positive: $R$ is positive definite. This proves clause 2 except for uniqueness among all symmetric positive definite square roots, which follows because a symmetric positive definite square root is in particular a non-negative square root, and [F2] gives uniqueness among non-negative square roots. [given, F1, F2, algebra]

2.1 In the orthonormal eigenbasis of $R=M^{1/2}$ from step 1.1, write $Re_j=r_je_j$ with $r_j>0$. Define $Be_j=r_j^{-1}e_j$ and extend linearly. Then $BR=RB=I_n$ on this basis, and $B^2M=MB^2=I_n$ since $M=R^2$. Thus $R$ and $M$ are invertible by [F3]. Since $M=M^{1/2}M^{1/2}$ [F3], we have $M^{-1}=(M^{1/2})^{-1}(M^{1/2})^{-1}$, and $M^{-1/2}:=(M^{1/2})^{-1}$ is well defined and satisfies $(M^{-1/2})^2=M^{-1}$ and $M^{-1/2}MM^{-1/2}=(M^{1/2})^{-1}M^{1/2}M^{1/2}(M^{1/2})^{-1}=I_n$ by associativity and [F3]. [step 1.1, F2, F3, algebra]

2.2 $M^{-1}$ and $M^{-1/2}$ are symmetric and positive definite. For $M^{-1}$: for $u,u'\in\mathbb R^n$ write $u=Mx$, $u'=Mx'$; then $\langle M^{-1}u,u'\rangle=\langle x,Mx'\rangle=\langle Mx,x'\rangle=\langle u,M^{-1}u'\rangle$ by symmetry of $M$, so $M^{-1}$ is self-adjoint, hence symmetric [F1]; and for $u\ne0$, $\langle M^{-1}u,u\rangle=\langle x,Mx\rangle>0$, so $M^{-1}$ is positive definite. For $M^{-1/2}$: it is the inverse of the self-adjoint invertible $M^{1/2}$, and the same computation with $M^{1/2}$ in place of $M$ (which is positive definite by step 1.1) shows that its inverse is self-adjoint and positive definite. This proves clauses 1 and 3. [step 1.1, 2.1, F1, F3, algebra]

3.1 Clause 4: for symmetric $K$, $S^{\mathsf T}=(M^{-1/2})^{\mathsf T}K^{\mathsf T}(M^{-1/2})^{\mathsf T}=M^{-1/2}KM^{-1/2}=S$ by symmetry of $M^{-1/2}$ and $K$, so $S$ is symmetric [F3]. For $x\in\mathbb R^n$ put $y:=M^{-1/2}x$; then $x^{\mathsf T}Sx=y^{\mathsf T}Ky$, so non-negativity of $K$ implies non-negativity of $S$. If $K$ is positive definite and $x\ne0$, then $y=M^{-1/2}x\ne0$ because $M^{-1/2}$ is invertible, and $x^{\mathsf T}Sx=y^{\mathsf T}Ky>0$. Thus $S$ is positive definite. Conversely, if $S$ is positive definite and $x\ne0$, then with $y:=M^{1/2}x\ne0$ one has $x^{\mathsf T}Kx=y^{\mathsf T}M^{-1/2}KM^{-1/2}y=y^{\mathsf T}Sy>0$, so $K$ is positive definite. [step 2.2, F1, F3, algebra] ∎

## Remarks

- The matrices $M^{1/2}$, $M^{-1/2}$ are the standard square roots of a positive definite symmetric matrix; they are used in [[thm-cm-quadratic-mode-decomposition]] to reduce a coupled quadratic system to decoupled scalar oscillators, and in [[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]] to identify the linearised stiffness matrix.

- Clause 4 shows that the eigenvalues of $S$ are non-negative whenever $K$ is non-negative, and positive exactly when $K$ is positive definite. This is what makes the diagonal matrix $\Lambda$ of [[thm-cm-quadratic-mode-decomposition]] have non-negative diagonal entries, with the zero entries corresponding to free (non-oscillating) modes.
