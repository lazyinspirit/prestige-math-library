---
id: def-stiefel-qr-polar-retractions
kind: definition
title: QR and polar retractions on Stiefel and Grassmann
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-stiefel-grassmann-optimization-conventions
  - thm-stiefel-grassmann-tangent-projections
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - thm-gram-schmidt-orthonormalisation
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots
  - thm-scaled-householder-qr-backward-stability
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    locator: "Complete 37-page chapter, §§4.1.1–4.1.3: embedded retractions and QR/polar factorization constructions."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §7.3: Stiefel QR/Q-factor and polar retractions, their domains and orders."
verification:
  precheck: n/a
---

## Definition

For $X\in\operatorname{St}(n,r)$ and $\eta\in T_X\operatorname{St}(n,r)$,
put $Y=X+\eta$. On the domain where $Y$ has full column rank, let
$\operatorname{qf}(Y)$ be the $Q$ factor in the unique reduced QR factorization
$Y=QR$ with $R$ upper triangular and positive diagonal. Define the **QR map**
by $R_X^{\rm QR}(\eta)=\operatorname{qf}(X+\eta)$. Define the **polar map**
by
$$R_X^{\rm pol}(\eta)=(X+\eta)\bigl((X+\eta)^{\mathsf T}(X+\eta)\bigr)^{-1/2},$$
where the exponent denotes the inverse of the unique positive-definite square
root. For a Grassmann tangent at $[X]$, use its unique horizontal representative
$\eta$ satisfying $X^{\mathsf T}\eta=0$ and define the induced map by taking the
output column space. Under $X\mapsto XQ$, this representative changes to
$\eta Q$, so the input matrix changes to $(X+\eta)Q$. The polar formula is
right-equivariant:
$R_{XQ}^{\rm pol}(\eta Q)=R_X^{\rm pol}(\eta)Q$ for every $Q\in\operatorname O(r)$.

These are defined only where the displayed input is full rank. In fact, for a
Stiefel tangent $\eta$, $X+\eta$ always has full column rank, since
$\|(X+\eta)v\|_2^2=\|v\|_2^2+\|\eta v\|_2^2$ for every $v\in\mathbb R^r$.

## Facts & Assumptions

**Given:** $X\in\operatorname{St}(n,r)$ and $\eta\in T_X\operatorname{St}(n,r)$ as in [[thm-stiefel-grassmann-tangent-projections]].

[F1] Gram–Schmidt orthonormalization gives an orthonormal basis from a linearly independent ordered family ([[thm-gram-schmidt-orthonormalisation]]).

[F2] A real symmetric matrix has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F3] Every positive-definite self-adjoint bundle endomorphism has a unique smooth positive square root ([[lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots]]).

[F4] A reduced QR factorization writes a full-column-rank matrix as an orthonormal-column factor times an upper-triangular factor ([[def-full-reduced-and-column-pivoted-computational-qr-factorisations]]).

[F5] A tangent matrix satisfies $X^{\mathsf T}\eta+\eta^{\mathsf T}X=0$ ([[thm-stiefel-grassmann-tangent-projections]]).

[F6] A Grassmann tangent has a unique horizontal representative, and changing the frame from $X$ to $XQ$ changes it from $\eta$ to $\eta Q$ ([[def-stiefel-grassmann-optimization-conventions]]).

## Proof

**Proof technique:** verify the domains and orthonormality of both formulas.

1.1 By [F5], tangency gives $X^{\mathsf T}\eta+\eta^{\mathsf T}X=0$. Therefore for $v\ne0$, $$\|(X+\eta)v\|_2^2=\|v\|_2^2+v^{\mathsf T}(X^{\mathsf T}\eta+\eta^{\mathsf T}X)v+\|\eta v\|_2^2=\|v\|_2^2+\|\eta v\|_2^2>0.$$ Thus $X+\eta$ has full column rank. More generally, for any full-rank $Y$, $v^{\mathsf T}Y^{\mathsf T}Yv=\|Yv\|_2^2>0$ for $v\ne0$, so its Gram matrix is positive definite; [F1] supplies the QR factor, while [F2] diagonalizes the Gram matrix and [F3] supplies its positive square root and inverse. [F1, F2, F3, F5, given, algebra]

2.1 For full-column-rank $Y=[y_1\ \cdots\ y_r]$, its columns are linearly independent. Apply Gram–Schmidt [F1], writing $u_j=y_j-\sum_{i<j}(q_i^{\mathsf T}y_j)q_i$ and $q_j=u_j/\|u_j\|_2$. The residuals are nonzero, so $Q=[q_1\ \cdots\ q_r]$ has orthonormal columns. Set $R=Q^{\mathsf T}Y$. For $i>j$, $q_i$ is orthogonal to $\operatorname{span}(y_1,\ldots,y_j)$, so $R_{ij}=0$; and $R_{jj}=q_j^{\mathsf T}y_j=\|u_j\|_2>0$. Since each $y_j$ lies in $\operatorname{span}(q_1,\ldots,q_j)$, $QR=Y$. This constructs a reduced QR factorization with positive diagonal. To check uniqueness, if $Y=Q_1R_1=Q_2R_2$ are two such factorizations, then $Q_2^{\mathsf T}Q_1=R_2R_1^{-1}$ is orthogonal and upper triangular with positive diagonal. Its first column has only its first entry, which must be $1$ by unit norm and positivity; orthogonality zeros the rest of its first row. Induction on the remaining block makes it $I_r$, so $Q_1=Q_2$ and $R_1=R_2$. For the polar factor $U=Y(Y^{\mathsf T}Y)^{-1/2}$, symmetry of the root and its defining square give $U^{\mathsf T}U=(Y^{\mathsf T}Y)^{-1/2}(Y^{\mathsf T}Y)(Y^{\mathsf T}Y)^{-1/2}=I_r$. Hence both outputs have orthonormal columns. For a Grassmann input, [F6] says a frame change $X\mapsto XQ_0$ changes $\eta$ to $\eta Q_0$, so the input $Y=X+\eta$ becomes $YQ_0$ with the same column space; uniqueness of the positive root gives $(Q_0^{\mathsf T}Y^{\mathsf T}YQ_0)^{-1/2}=Q_0^{\mathsf T}(Y^{\mathsf T}Y)^{-1/2}Q_0$, so the polar output is multiplied by $Q_0$. Thus the Grassmann outputs are well-defined. [F1, F2, F3, F4, F6, given, step 1.1, induction, algebra] ∎
## Remark

The formulas here are exact-arithmetic definitions. The finite-precision Householder QR supplier proves a backward-error statement under its operationwise assumptions and does not assert that a computed $Q$ is exactly orthogonal ([[thm-scaled-householder-qr-backward-stability]]). No floating-point retraction guarantee is claimed by this page.
