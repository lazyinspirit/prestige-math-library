---
id: def-complex-grassmann-polar-retraction
kind: definition
title: Polar retraction on the complex Grassmannian
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-complex-stiefel-grassmann-optimization-conventions
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - thm-complex-stiefel-grassmann-tangent-projections
  - thm-non-negative-square-root-exists-and-is-unique
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "Peter A. Absil, Robert Mahony, and Rodolphe Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    locator: "Complete 37-page chapter, §§4.1.1–4.1.3: real QR and polar retraction construction."
  - title: "Nicholas D. S. Manton, Optimization algorithms exploiting unitary constraints, IEEE Transactions on Signal Processing 50 (2002), §§IV and VI"
    url: "https://cseweb.ucsd.edu/classes/sp24/cse291-e/papers/StiefelManifold/UnitaryConstraints.pdf"
    locator: "Complete 16-page article, §§IV and VI: complex Stiefel and Grassmann factorization maps and unitary representative changes."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§3.1 and 7.3: complex matrices as real coordinates and smooth polar retractions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

For $X\in\operatorname{St}_{\mathbb C}(n,r)$ and horizontal $\eta\in T_{[X]}\operatorname{Gr}_{\mathbb C}(r,n)$, so $X^*\eta=0$, define $R_X^{\rm pol}(\eta)=(X+\eta)\bigl((X+\eta)^*(X+\eta)\bigr)^{-1/2}$ and $R_{[X]}^{\rm pol}(\eta)=\operatorname{range}(R_X^{\rm pol}(\eta))$.
The inverse square root is the inverse of the unique positive-definite
Hermitian square root. The horizontal condition gives
$(X+\eta)^*(X+\eta)=I+\eta^*\eta\succ0$, so this map is defined for every
horizontal tangent vector, and its frame representative is unchanged as a
Grassmann point when $(X,\eta)$ is replaced by $(XQ,\eta Q)$ with unitary $Q$.

## Facts & Assumptions

**Given:** $X\in\operatorname{St}_{\mathbb C}(n,r)$ and horizontal $\eta$ as in [[thm-complex-stiefel-grassmann-tangent-projections]].

[F1] A horizontal representative satisfies $X^*\eta=0$ ([[thm-complex-stiefel-grassmann-tangent-projections]]).

[F2] On a finite-dimensional real or complex inner-product space, a nonnegative operator has a unique nonnegative square root; for a positive-definite input its eigenvalues are the positive square roots of the input eigenvalues, so the root is positive definite and invertible ([[thm-non-negative-square-root-exists-and-is-unique]]).

[F3] The complex Grassmannian is the quotient of complex orthonormal frames by right unitary changes of frame ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

## Proof

**Proof technique:** verify full rank, orthonormality, and unitary equivariance of the polar formula.

1.1 By [F1], $(X+\eta)^*(X+\eta)=I+\eta^*\eta$. For every nonzero $v\in\mathbb C^r$, $v^*(I+\eta^*\eta)v=\|v\|_2^2+\|\eta v\|_2^2>0$, so the Gram matrix is Hermitian positive definite. Apply [F2] on $\mathbb C^r$: its unique nonnegative Hermitian square root has strictly positive eigenvalues and is invertible, which defines the inverse root in the formula. [F1, F2, given, algebra]

2.1 Write $C=(X+\eta)^*(X+\eta)$ and $Y=(X+\eta)C^{-1/2}$. Since $C^{-1/2}$ is Hermitian and $C^{-1/2}CC^{-1/2}=I_r$, we have $Y^*Y=I_r$. Thus $Y$ is a complex orthonormal frame and its range is a point of the stated Grassmannian. [F2, given, step 1.1, algebra]

3.1 By the quotient convention [F3], frames related by a unitary matrix represent the same point. For unitary $Q$, the Gram matrix of $(XQ,\eta Q)$ is $Q^*CQ$. Uniqueness of the positive square root gives $(Q^*CQ)^{-1/2}=Q^*C^{-1/2}Q$. Hence the resulting frame is $YQ$, with the same column space as $Y$. [F1, F3, step 2.1, algebra] ∎
