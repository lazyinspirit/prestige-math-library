---
id: thm-complex-grassmann-polar-retraction-is-first-order
kind: theorem
title: The complex Grassmann polar map is a first-order retraction
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-complex-grassmann-polar-retraction
  - def-complex-stiefel-grassmann-optimization-conventions
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - thm-complex-stiefel-grassmann-tangent-projections
  - lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots
  - lem-matrix-inversion-preserves-ck-regularity
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "Peter A. Absil, Robert Mahony, and Rodolphe Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    locator: "Complete 37-page chapter, §4.1: first-order retraction conditions and the polar factorization construction in the real case."
  - title: "Nicholas D. S. Manton, Optimization algorithms exploiting unitary constraints, IEEE Transactions on Signal Processing 50 (2002), §§IV and VI"
    url: "https://cseweb.ucsd.edu/classes/sp24/cse291-e/papers/StiefelManifold/UnitaryConstraints.pdf"
    locator: "Complete 16-page article, §§IV and VI: complex Stiefel/Grassmann geometry and smooth representative-independent polar-factor maps."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.1 and 7.3: real-coordinate smoothness and first-order retraction properties of the polar map."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

The frame formula of [[def-complex-grassmann-polar-retraction]] is smooth on the
horizontal tangent bundle, maps into $\operatorname{St}_{\mathbb C}(n,r)$,
fixes zero, and has frame differential $D R_X^{\rm pol}(0)[\eta]=\eta$ for
horizontal $\eta$. It is right-unitary equivariant, so its range map is
representative-independent and has identity differential under the horizontal
tangent identification. Thus it is a first-order retraction on
$\operatorname{Gr}_{\mathbb C}(r,n)$.

## Facts & Assumptions

**Given:** $X\in\operatorname{St}_{\mathbb C}(n,r)$ and a horizontal tangent $\eta$ at $[X]$.

[F1] The polar frame and quotient maps are given by the Gram inverse-square-root formula ([[def-complex-grassmann-polar-retraction]]).

[F2] The positive square root depends smoothly on real symmetric positive-definite matrices, by applying the real bundle theorem to the trivial Euclidean bundle over that open matrix domain ([[lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots]]).

[F3] Horizontal matrices are the representatives of the complex Grassmann tangent ([[thm-complex-stiefel-grassmann-tangent-projections]]).

[F4] The complex Grassmannian has local graph charts and frame fibers related by right unitary changes ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F5] The realification $\rho$ respects products and inverses, and matrix inversion preserves $C^k$ regularity on the nonvanishing-determinant domain ([[def-complex-stiefel-grassmann-optimization-conventions]], [[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** differentiate the polar factor at zero and use unitary equivariance to descend to the quotient.

1.1 The Gram matrix $C(X,\eta)=I+\eta^*\eta$ is Hermitian positive definite by [F1]. Its realification $\rho(C)$ is real symmetric because $\rho(C)^\mathsf T=\rho(C^*)=\rho(C)$, and positive definite because, for $z=x+iy$, $(x,y)^{\mathsf T}\rho(C)(x,y)=z^*Cz>0$. The matrix $\rho(C^{1/2})$ is real symmetric by the same transpose identity, squares to $\rho(C)$ by [F5], and is positive definite by the same quadratic-form identity. Uniqueness of the positive square root and [F2] therefore make $C^{1/2}$ smooth in real coordinates. It stays invertible, so [F5] applied to its realification makes its inverse smooth for every finite $k$, and that inverse is the realification of $C^{-1/2}$. The frame formula and its range are smooth. [F1, F2, F5, given, algebra]

1.2 Fix horizontal $\eta$ and set $Y(t)=(X+t\eta)(I+t^2\eta^*\eta)^{-1/2}$. The Gram factor has value $I$ at zero and derivative zero there because its argument is $I+t^2\eta^*\eta$ and the inverse-root map is smooth by [F2] and [F5]. The product rule gives $Y(0)=X$ and $Y'(0)=\eta$. By [F3], this is precisely identity on the quotient tangent. [F1, F2, F3, F5, given, algebra]

2.1 By [F4], the unitary-equivariant frame formula descends through the smooth Grassmann quotient. The definition's computation shows that replacing $(X,\eta)$ by $(XQ,\eta Q)$ changes $Y$ to $YQ$, leaving its range unchanged. Its identity differential from step 1.2 is therefore representative-independent. [F1, F3, F4, given, step 1.2, algebra] ∎
